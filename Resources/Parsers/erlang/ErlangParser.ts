// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/erlang/Erlang.g4 by ANTLR 4.7.3-SNAPSHOT


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

import { ErlangListener } from "./ErlangListener";
import { ErlangVisitor } from "./ErlangVisitor";


export class ErlangParser extends Parser {
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
	public static readonly TokAtom = 64;
	public static readonly TokVar = 65;
	public static readonly TokFloat = 66;
	public static readonly TokInteger = 67;
	public static readonly TokChar = 68;
	public static readonly TokString = 69;
	public static readonly AttrName = 70;
	public static readonly Comment = 71;
	public static readonly WS = 72;
	public static readonly RULE_forms = 0;
	public static readonly RULE_form = 1;
	public static readonly RULE_tokAtom = 2;
	public static readonly RULE_tokVar = 3;
	public static readonly RULE_tokFloat = 4;
	public static readonly RULE_tokInteger = 5;
	public static readonly RULE_tokChar = 6;
	public static readonly RULE_tokString = 7;
	public static readonly RULE_attribute = 8;
	public static readonly RULE_typeSpec = 9;
	public static readonly RULE_specFun = 10;
	public static readonly RULE_typedAttrVal = 11;
	public static readonly RULE_typedRecordFields = 12;
	public static readonly RULE_typedExprs = 13;
	public static readonly RULE_typedExpr = 14;
	public static readonly RULE_typeSigs = 15;
	public static readonly RULE_typeSig = 16;
	public static readonly RULE_typeGuards = 17;
	public static readonly RULE_typeGuard = 18;
	public static readonly RULE_topTypes = 19;
	public static readonly RULE_topType = 20;
	public static readonly RULE_topType100 = 21;
	public static readonly RULE_type200 = 22;
	public static readonly RULE_type300 = 23;
	public static readonly RULE_type400 = 24;
	public static readonly RULE_type500 = 25;
	public static readonly RULE_type = 26;
	public static readonly RULE_funType100 = 27;
	public static readonly RULE_funType = 28;
	public static readonly RULE_fieldTypes = 29;
	public static readonly RULE_fieldType = 30;
	public static readonly RULE_binaryType = 31;
	public static readonly RULE_binBaseType = 32;
	public static readonly RULE_binUnitType = 33;
	public static readonly RULE_attrVal = 34;
	public static readonly RULE_function = 35;
	public static readonly RULE_functionClause = 36;
	public static readonly RULE_clauseArgs = 37;
	public static readonly RULE_clauseGuard = 38;
	public static readonly RULE_clauseBody = 39;
	public static readonly RULE_expr = 40;
	public static readonly RULE_expr100 = 41;
	public static readonly RULE_expr150 = 42;
	public static readonly RULE_expr160 = 43;
	public static readonly RULE_expr200 = 44;
	public static readonly RULE_expr300 = 45;
	public static readonly RULE_expr400 = 46;
	public static readonly RULE_expr500 = 47;
	public static readonly RULE_expr600 = 48;
	public static readonly RULE_expr700 = 49;
	public static readonly RULE_expr800 = 50;
	public static readonly RULE_exprMax = 51;
	public static readonly RULE_list = 52;
	public static readonly RULE_tail = 53;
	public static readonly RULE_binary = 54;
	public static readonly RULE_binElements = 55;
	public static readonly RULE_binElement = 56;
	public static readonly RULE_bitExpr = 57;
	public static readonly RULE_optBitSizeExpr = 58;
	public static readonly RULE_optBitTypeList = 59;
	public static readonly RULE_bitTypeList = 60;
	public static readonly RULE_bitType = 61;
	public static readonly RULE_bitSizeExpr = 62;
	public static readonly RULE_listComprehension = 63;
	public static readonly RULE_binaryComprehension = 64;
	public static readonly RULE_lcExprs = 65;
	public static readonly RULE_lcExpr = 66;
	public static readonly RULE_tuple = 67;
	public static readonly RULE_recordExpr = 68;
	public static readonly RULE_recordTuple = 69;
	public static readonly RULE_recordFields = 70;
	public static readonly RULE_recordField = 71;
	public static readonly RULE_functionCall = 72;
	public static readonly RULE_ifExpr = 73;
	public static readonly RULE_ifClauses = 74;
	public static readonly RULE_ifClause = 75;
	public static readonly RULE_caseExpr = 76;
	public static readonly RULE_crClauses = 77;
	public static readonly RULE_crClause = 78;
	public static readonly RULE_receiveExpr = 79;
	public static readonly RULE_funExpr = 80;
	public static readonly RULE_atomOrVar = 81;
	public static readonly RULE_integerOrVar = 82;
	public static readonly RULE_funClauses = 83;
	public static readonly RULE_funClause = 84;
	public static readonly RULE_tryExpr = 85;
	public static readonly RULE_tryCatch = 86;
	public static readonly RULE_tryClauses = 87;
	public static readonly RULE_tryClause = 88;
	public static readonly RULE_argumentList = 89;
	public static readonly RULE_exprs = 90;
	public static readonly RULE_guard = 91;
	public static readonly RULE_atomic = 92;
	public static readonly RULE_prefixOp = 93;
	public static readonly RULE_multOp = 94;
	public static readonly RULE_addOp = 95;
	public static readonly RULE_listOp = 96;
	public static readonly RULE_compOp = 97;
	public static readonly RULE_ruleClauses = 98;
	public static readonly RULE_ruleClause = 99;
	public static readonly RULE_ruleBody = 100;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"forms", "form", "tokAtom", "tokVar", "tokFloat", "tokInteger", "tokChar", 
		"tokString", "attribute", "typeSpec", "specFun", "typedAttrVal", "typedRecordFields", 
		"typedExprs", "typedExpr", "typeSigs", "typeSig", "typeGuards", "typeGuard", 
		"topTypes", "topType", "topType100", "type200", "type300", "type400", 
		"type500", "type", "funType100", "funType", "fieldTypes", "fieldType", 
		"binaryType", "binBaseType", "binUnitType", "attrVal", "function", "functionClause", 
		"clauseArgs", "clauseGuard", "clauseBody", "expr", "expr100", "expr150", 
		"expr160", "expr200", "expr300", "expr400", "expr500", "expr600", "expr700", 
		"expr800", "exprMax", "list", "tail", "binary", "binElements", "binElement", 
		"bitExpr", "optBitSizeExpr", "optBitTypeList", "bitTypeList", "bitType", 
		"bitSizeExpr", "listComprehension", "binaryComprehension", "lcExprs", 
		"lcExpr", "tuple", "recordExpr", "recordTuple", "recordFields", "recordField", 
		"functionCall", "ifExpr", "ifClauses", "ifClause", "caseExpr", "crClauses", 
		"crClause", "receiveExpr", "funExpr", "atomOrVar", "integerOrVar", "funClauses", 
		"funClause", "tryExpr", "tryCatch", "tryClauses", "tryClause", "argumentList", 
		"exprs", "guard", "atomic", "prefixOp", "multOp", "addOp", "listOp", "compOp", 
		"ruleClauses", "ruleClause", "ruleBody",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'.'", "'-'", "'('", "')'", "':'", "'/'", "'::'", "','", "'{'", 
		"'}'", "';'", "'when'", "'|'", "'..'", "'['", "']'", "'...'", "'#'", "'fun'", 
		"'->'", "'<<'", "'>>'", "'*'", "'catch'", "'='", "'!'", "'orelse'", "'andalso'", 
		"'begin'", "'end'", "'||'", "'<-'", "'<='", "'if'", "'case'", "'of'", 
		"'receive'", "'after'", "'try'", "'+'", "'bnot'", "'not'", "'div'", "'rem'", 
		"'band'", "'and'", "'bor'", "'bxor'", "'bsl'", "'bsr'", "'or'", "'xor'", 
		"'++'", "'--'", "'=='", "'/='", "'=<'", "'<'", "'>='", "'>'", "'=:='", 
		"'=/='", "':-'",
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
		undefined, "TokAtom", "TokVar", "TokFloat", "TokInteger", "TokChar", "TokString", 
		"AttrName", "Comment", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(ErlangParser._LITERAL_NAMES, ErlangParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return ErlangParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "Erlang.g4"; }

	// @Override
	public get ruleNames(): string[] { return ErlangParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return ErlangParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(ErlangParser._ATN, this);
	}
	// @RuleVersion(0)
	public forms(): FormsContext {
		let _localctx: FormsContext = new FormsContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, ErlangParser.RULE_forms);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 203;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 202;
				this.form();
				}
				}
				this.state = 205;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === ErlangParser.T__1 || _la === ErlangParser.TokAtom || _la === ErlangParser.AttrName);
			this.state = 207;
			this.match(ErlangParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public form(): FormContext {
		let _localctx: FormContext = new FormContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, ErlangParser.RULE_form);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 212;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				{
				this.state = 209;
				this.attribute();
				}
				break;

			case 2:
				{
				this.state = 210;
				this.function();
				}
				break;

			case 3:
				{
				this.state = 211;
				this.ruleClauses();
				}
				break;
			}
			this.state = 214;
			this.match(ErlangParser.T__0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tokAtom(): TokAtomContext {
		let _localctx: TokAtomContext = new TokAtomContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, ErlangParser.RULE_tokAtom);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 216;
			this.match(ErlangParser.TokAtom);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tokVar(): TokVarContext {
		let _localctx: TokVarContext = new TokVarContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, ErlangParser.RULE_tokVar);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 218;
			this.match(ErlangParser.TokVar);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tokFloat(): TokFloatContext {
		let _localctx: TokFloatContext = new TokFloatContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, ErlangParser.RULE_tokFloat);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 220;
			this.match(ErlangParser.TokFloat);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tokInteger(): TokIntegerContext {
		let _localctx: TokIntegerContext = new TokIntegerContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, ErlangParser.RULE_tokInteger);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 222;
			this.match(ErlangParser.TokInteger);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tokChar(): TokCharContext {
		let _localctx: TokCharContext = new TokCharContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, ErlangParser.RULE_tokChar);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 224;
			this.match(ErlangParser.TokChar);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tokString(): TokStringContext {
		let _localctx: TokStringContext = new TokStringContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, ErlangParser.RULE_tokString);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 226;
			this.match(ErlangParser.TokString);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public attribute(): AttributeContext {
		let _localctx: AttributeContext = new AttributeContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, ErlangParser.RULE_attribute);
		try {
			this.state = 244;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 2, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 228;
				this.match(ErlangParser.T__1);
				this.state = 229;
				this.tokAtom();
				this.state = 230;
				this.attrVal();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 232;
				this.match(ErlangParser.T__1);
				this.state = 233;
				this.tokAtom();
				this.state = 234;
				this.typedAttrVal();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 236;
				this.match(ErlangParser.T__1);
				this.state = 237;
				this.tokAtom();
				this.state = 238;
				this.match(ErlangParser.T__2);
				this.state = 239;
				this.typedAttrVal();
				this.state = 240;
				this.match(ErlangParser.T__3);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 242;
				this.match(ErlangParser.AttrName);
				this.state = 243;
				this.typeSpec();
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
	public typeSpec(): TypeSpecContext {
		let _localctx: TypeSpecContext = new TypeSpecContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, ErlangParser.RULE_typeSpec);
		try {
			this.state = 254;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ErlangParser.TokAtom:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 246;
				this.specFun();
				this.state = 247;
				this.typeSigs();
				}
				break;
			case ErlangParser.T__2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 249;
				this.match(ErlangParser.T__2);
				this.state = 250;
				this.specFun();
				this.state = 251;
				this.typeSigs();
				this.state = 252;
				this.match(ErlangParser.T__3);
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
	public specFun(): SpecFunContext {
		let _localctx: SpecFunContext = new SpecFunContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, ErlangParser.RULE_specFun);
		try {
			this.state = 273;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 4, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 256;
				this.tokAtom();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 257;
				this.tokAtom();
				this.state = 258;
				this.match(ErlangParser.T__4);
				this.state = 259;
				this.tokAtom();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 261;
				this.tokAtom();
				this.state = 262;
				this.match(ErlangParser.T__5);
				this.state = 263;
				this.tokInteger();
				this.state = 264;
				this.match(ErlangParser.T__6);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 266;
				this.tokAtom();
				this.state = 267;
				this.match(ErlangParser.T__4);
				this.state = 268;
				this.tokAtom();
				this.state = 269;
				this.match(ErlangParser.T__5);
				this.state = 270;
				this.tokInteger();
				this.state = 271;
				this.match(ErlangParser.T__6);
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
	public typedAttrVal(): TypedAttrValContext {
		let _localctx: TypedAttrValContext = new TypedAttrValContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, ErlangParser.RULE_typedAttrVal);
		try {
			this.state = 283;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 5, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 275;
				this.expr();
				this.state = 276;
				this.match(ErlangParser.T__7);
				this.state = 277;
				this.typedRecordFields();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 279;
				this.expr();
				this.state = 280;
				this.match(ErlangParser.T__6);
				this.state = 281;
				this.topType();
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
	public typedRecordFields(): TypedRecordFieldsContext {
		let _localctx: TypedRecordFieldsContext = new TypedRecordFieldsContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, ErlangParser.RULE_typedRecordFields);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 285;
			this.match(ErlangParser.T__8);
			this.state = 286;
			this.typedExprs();
			this.state = 287;
			this.match(ErlangParser.T__9);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typedExprs(): TypedExprsContext {
		let _localctx: TypedExprsContext = new TypedExprsContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, ErlangParser.RULE_typedExprs);
		try {
			this.state = 302;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 6, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 289;
				this.typedExpr();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 290;
				this.typedExpr();
				this.state = 291;
				this.match(ErlangParser.T__7);
				this.state = 292;
				this.typedExprs();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 294;
				this.expr();
				this.state = 295;
				this.match(ErlangParser.T__7);
				this.state = 296;
				this.typedExprs();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 298;
				this.typedExpr();
				this.state = 299;
				this.match(ErlangParser.T__7);
				this.state = 300;
				this.exprs();
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
	public typedExpr(): TypedExprContext {
		let _localctx: TypedExprContext = new TypedExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, ErlangParser.RULE_typedExpr);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 304;
			this.expr();
			this.state = 305;
			this.match(ErlangParser.T__6);
			this.state = 306;
			this.topType();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeSigs(): TypeSigsContext {
		let _localctx: TypeSigsContext = new TypeSigsContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, ErlangParser.RULE_typeSigs);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 308;
			this.typeSig();
			this.state = 313;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ErlangParser.T__10) {
				{
				{
				this.state = 309;
				this.match(ErlangParser.T__10);
				this.state = 310;
				this.typeSig();
				}
				}
				this.state = 315;
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
	public typeSig(): TypeSigContext {
		let _localctx: TypeSigContext = new TypeSigContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, ErlangParser.RULE_typeSig);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 316;
			this.funType();
			this.state = 319;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ErlangParser.T__11) {
				{
				this.state = 317;
				this.match(ErlangParser.T__11);
				this.state = 318;
				this.typeGuards();
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
	public typeGuards(): TypeGuardsContext {
		let _localctx: TypeGuardsContext = new TypeGuardsContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, ErlangParser.RULE_typeGuards);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 321;
			this.typeGuard();
			this.state = 326;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ErlangParser.T__7) {
				{
				{
				this.state = 322;
				this.match(ErlangParser.T__7);
				this.state = 323;
				this.typeGuard();
				}
				}
				this.state = 328;
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
	public typeGuard(): TypeGuardContext {
		let _localctx: TypeGuardContext = new TypeGuardContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, ErlangParser.RULE_typeGuard);
		try {
			this.state = 338;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ErlangParser.TokAtom:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 329;
				this.tokAtom();
				this.state = 330;
				this.match(ErlangParser.T__2);
				this.state = 331;
				this.topTypes();
				this.state = 332;
				this.match(ErlangParser.T__3);
				}
				break;
			case ErlangParser.TokVar:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 334;
				this.tokVar();
				this.state = 335;
				this.match(ErlangParser.T__6);
				this.state = 336;
				this.topType();
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
	public topTypes(): TopTypesContext {
		let _localctx: TopTypesContext = new TopTypesContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, ErlangParser.RULE_topTypes);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 340;
			this.topType();
			this.state = 345;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ErlangParser.T__7) {
				{
				{
				this.state = 341;
				this.match(ErlangParser.T__7);
				this.state = 342;
				this.topType();
				}
				}
				this.state = 347;
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
	public topType(): TopTypeContext {
		let _localctx: TopTypeContext = new TopTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, ErlangParser.RULE_topType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 351;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 12, this._ctx) ) {
			case 1:
				{
				this.state = 348;
				this.tokVar();
				this.state = 349;
				this.match(ErlangParser.T__6);
				}
				break;
			}
			this.state = 353;
			this.topType100();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public topType100(): TopType100Context {
		let _localctx: TopType100Context = new TopType100Context(this._ctx, this.state);
		this.enterRule(_localctx, 42, ErlangParser.RULE_topType100);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 355;
			this.type200();
			this.state = 358;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ErlangParser.T__12) {
				{
				this.state = 356;
				this.match(ErlangParser.T__12);
				this.state = 357;
				this.topType100();
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
	public type200(): Type200Context {
		let _localctx: Type200Context = new Type200Context(this._ctx, this.state);
		this.enterRule(_localctx, 44, ErlangParser.RULE_type200);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 360;
			this.type300(0);
			this.state = 363;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ErlangParser.T__13) {
				{
				this.state = 361;
				this.match(ErlangParser.T__13);
				this.state = 362;
				this.type300(0);
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

	public type300(): Type300Context;
	public type300(_p: number): Type300Context;
	// @RuleVersion(0)
	public type300(_p?: number): Type300Context {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: Type300Context = new Type300Context(this._ctx, _parentState);
		let _prevctx: Type300Context = _localctx;
		let _startState: number = 46;
		this.enterRecursionRule(_localctx, 46, ErlangParser.RULE_type300, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 366;
			this.type400(0);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 374;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 15, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new Type300Context(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, ErlangParser.RULE_type300);
					this.state = 368;
					if (!(this.precpred(this._ctx, 2))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
					}
					this.state = 369;
					this.addOp();
					this.state = 370;
					this.type400(0);
					}
					}
				}
				this.state = 376;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 15, this._ctx);
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

	public type400(): Type400Context;
	public type400(_p: number): Type400Context;
	// @RuleVersion(0)
	public type400(_p?: number): Type400Context {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: Type400Context = new Type400Context(this._ctx, _parentState);
		let _prevctx: Type400Context = _localctx;
		let _startState: number = 48;
		this.enterRecursionRule(_localctx, 48, ErlangParser.RULE_type400, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 378;
			this.type500();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 386;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new Type400Context(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, ErlangParser.RULE_type400);
					this.state = 380;
					if (!(this.precpred(this._ctx, 2))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
					}
					this.state = 381;
					this.multOp();
					this.state = 382;
					this.type500();
					}
					}
				}
				this.state = 388;
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
	// @RuleVersion(0)
	public type500(): Type500Context {
		let _localctx: Type500Context = new Type500Context(this._ctx, this.state);
		this.enterRule(_localctx, 50, ErlangParser.RULE_type500);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 390;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ErlangParser.T__1 || ((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & ((1 << (ErlangParser.T__39 - 40)) | (1 << (ErlangParser.T__40 - 40)) | (1 << (ErlangParser.T__41 - 40)))) !== 0)) {
				{
				this.state = 389;
				this.prefixOp();
				}
			}

			this.state = 392;
			this.type();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 52, ErlangParser.RULE_type);
		try {
			this.state = 461;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 18, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 394;
				this.match(ErlangParser.T__2);
				this.state = 395;
				this.topType();
				this.state = 396;
				this.match(ErlangParser.T__3);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 398;
				this.tokVar();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 399;
				this.tokAtom();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 400;
				this.tokAtom();
				this.state = 401;
				this.match(ErlangParser.T__2);
				this.state = 402;
				this.match(ErlangParser.T__3);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 404;
				this.tokAtom();
				this.state = 405;
				this.match(ErlangParser.T__2);
				this.state = 406;
				this.topTypes();
				this.state = 407;
				this.match(ErlangParser.T__3);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 409;
				this.tokAtom();
				this.state = 410;
				this.match(ErlangParser.T__4);
				this.state = 411;
				this.tokAtom();
				this.state = 412;
				this.match(ErlangParser.T__2);
				this.state = 413;
				this.match(ErlangParser.T__3);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 415;
				this.tokAtom();
				this.state = 416;
				this.match(ErlangParser.T__4);
				this.state = 417;
				this.tokAtom();
				this.state = 418;
				this.match(ErlangParser.T__2);
				this.state = 419;
				this.topTypes();
				this.state = 420;
				this.match(ErlangParser.T__3);
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 422;
				this.match(ErlangParser.T__14);
				this.state = 423;
				this.match(ErlangParser.T__15);
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 424;
				this.match(ErlangParser.T__14);
				this.state = 425;
				this.topType();
				this.state = 426;
				this.match(ErlangParser.T__15);
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 428;
				this.match(ErlangParser.T__14);
				this.state = 429;
				this.topType();
				this.state = 430;
				this.match(ErlangParser.T__7);
				this.state = 431;
				this.match(ErlangParser.T__16);
				this.state = 432;
				this.match(ErlangParser.T__15);
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 434;
				this.match(ErlangParser.T__8);
				this.state = 435;
				this.match(ErlangParser.T__9);
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 436;
				this.match(ErlangParser.T__8);
				this.state = 437;
				this.topTypes();
				this.state = 438;
				this.match(ErlangParser.T__9);
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 440;
				this.match(ErlangParser.T__17);
				this.state = 441;
				this.tokAtom();
				this.state = 442;
				this.match(ErlangParser.T__8);
				this.state = 443;
				this.match(ErlangParser.T__9);
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 445;
				this.match(ErlangParser.T__17);
				this.state = 446;
				this.tokAtom();
				this.state = 447;
				this.match(ErlangParser.T__8);
				this.state = 448;
				this.fieldTypes();
				this.state = 449;
				this.match(ErlangParser.T__9);
				}
				break;

			case 15:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 451;
				this.binaryType();
				}
				break;

			case 16:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 452;
				this.tokInteger();
				}
				break;

			case 17:
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 453;
				this.match(ErlangParser.T__18);
				this.state = 454;
				this.match(ErlangParser.T__2);
				this.state = 455;
				this.match(ErlangParser.T__3);
				}
				break;

			case 18:
				this.enterOuterAlt(_localctx, 18);
				{
				this.state = 456;
				this.match(ErlangParser.T__18);
				this.state = 457;
				this.match(ErlangParser.T__2);
				this.state = 458;
				this.funType100();
				this.state = 459;
				this.match(ErlangParser.T__3);
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
	public funType100(): FunType100Context {
		let _localctx: FunType100Context = new FunType100Context(this._ctx, this.state);
		this.enterRule(_localctx, 54, ErlangParser.RULE_funType100);
		try {
			this.state = 469;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 19, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 463;
				this.match(ErlangParser.T__2);
				this.state = 464;
				this.match(ErlangParser.T__16);
				this.state = 465;
				this.match(ErlangParser.T__3);
				this.state = 466;
				this.match(ErlangParser.T__19);
				this.state = 467;
				this.topType();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 468;
				this.funType();
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
	public funType(): FunTypeContext {
		let _localctx: FunTypeContext = new FunTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, ErlangParser.RULE_funType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 471;
			this.match(ErlangParser.T__2);
			this.state = 473;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ErlangParser.T__1) | (1 << ErlangParser.T__2) | (1 << ErlangParser.T__8) | (1 << ErlangParser.T__14) | (1 << ErlangParser.T__17) | (1 << ErlangParser.T__18) | (1 << ErlangParser.T__20))) !== 0) || ((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & ((1 << (ErlangParser.T__39 - 40)) | (1 << (ErlangParser.T__40 - 40)) | (1 << (ErlangParser.T__41 - 40)) | (1 << (ErlangParser.TokAtom - 40)) | (1 << (ErlangParser.TokVar - 40)) | (1 << (ErlangParser.TokInteger - 40)))) !== 0)) {
				{
				this.state = 472;
				this.topTypes();
				}
			}

			this.state = 475;
			this.match(ErlangParser.T__3);
			this.state = 476;
			this.match(ErlangParser.T__19);
			this.state = 477;
			this.topType();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fieldTypes(): FieldTypesContext {
		let _localctx: FieldTypesContext = new FieldTypesContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, ErlangParser.RULE_fieldTypes);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 479;
			this.fieldType();
			this.state = 484;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ErlangParser.T__7) {
				{
				{
				this.state = 480;
				this.match(ErlangParser.T__7);
				this.state = 481;
				this.fieldType();
				}
				}
				this.state = 486;
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
	public fieldType(): FieldTypeContext {
		let _localctx: FieldTypeContext = new FieldTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, ErlangParser.RULE_fieldType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 487;
			this.tokAtom();
			this.state = 488;
			this.match(ErlangParser.T__6);
			this.state = 489;
			this.topType();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public binaryType(): BinaryTypeContext {
		let _localctx: BinaryTypeContext = new BinaryTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, ErlangParser.RULE_binaryType);
		try {
			this.state = 507;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 22, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 491;
				this.match(ErlangParser.T__20);
				this.state = 492;
				this.match(ErlangParser.T__21);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 493;
				this.match(ErlangParser.T__20);
				this.state = 494;
				this.binBaseType();
				this.state = 495;
				this.match(ErlangParser.T__21);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 497;
				this.match(ErlangParser.T__20);
				this.state = 498;
				this.binUnitType();
				this.state = 499;
				this.match(ErlangParser.T__21);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 501;
				this.match(ErlangParser.T__20);
				this.state = 502;
				this.binBaseType();
				this.state = 503;
				this.match(ErlangParser.T__7);
				this.state = 504;
				this.binUnitType();
				this.state = 505;
				this.match(ErlangParser.T__21);
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
	public binBaseType(): BinBaseTypeContext {
		let _localctx: BinBaseTypeContext = new BinBaseTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, ErlangParser.RULE_binBaseType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 509;
			this.tokVar();
			this.state = 510;
			this.match(ErlangParser.T__4);
			this.state = 511;
			this.type();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public binUnitType(): BinUnitTypeContext {
		let _localctx: BinUnitTypeContext = new BinUnitTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, ErlangParser.RULE_binUnitType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 513;
			this.tokVar();
			this.state = 514;
			this.match(ErlangParser.T__4);
			this.state = 515;
			this.tokVar();
			this.state = 516;
			this.match(ErlangParser.T__22);
			this.state = 517;
			this.type();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public attrVal(): AttrValContext {
		let _localctx: AttrValContext = new AttrValContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, ErlangParser.RULE_attrVal);
		try {
			this.state = 534;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 23, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 519;
				this.expr();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 520;
				this.match(ErlangParser.T__2);
				this.state = 521;
				this.expr();
				this.state = 522;
				this.match(ErlangParser.T__3);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 524;
				this.expr();
				this.state = 525;
				this.match(ErlangParser.T__7);
				this.state = 526;
				this.exprs();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 528;
				this.match(ErlangParser.T__2);
				this.state = 529;
				this.expr();
				this.state = 530;
				this.match(ErlangParser.T__7);
				this.state = 531;
				this.exprs();
				this.state = 532;
				this.match(ErlangParser.T__3);
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
	public function(): FunctionContext {
		let _localctx: FunctionContext = new FunctionContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, ErlangParser.RULE_function);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 536;
			this.functionClause();
			this.state = 541;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ErlangParser.T__10) {
				{
				{
				this.state = 537;
				this.match(ErlangParser.T__10);
				this.state = 538;
				this.functionClause();
				}
				}
				this.state = 543;
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
	public functionClause(): FunctionClauseContext {
		let _localctx: FunctionClauseContext = new FunctionClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, ErlangParser.RULE_functionClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 544;
			this.tokAtom();
			this.state = 545;
			this.clauseArgs();
			this.state = 546;
			this.clauseGuard();
			this.state = 547;
			this.clauseBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public clauseArgs(): ClauseArgsContext {
		let _localctx: ClauseArgsContext = new ClauseArgsContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, ErlangParser.RULE_clauseArgs);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 549;
			this.argumentList();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public clauseGuard(): ClauseGuardContext {
		let _localctx: ClauseGuardContext = new ClauseGuardContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, ErlangParser.RULE_clauseGuard);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 553;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ErlangParser.T__11) {
				{
				this.state = 551;
				this.match(ErlangParser.T__11);
				this.state = 552;
				this.guard();
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
	public clauseBody(): ClauseBodyContext {
		let _localctx: ClauseBodyContext = new ClauseBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, ErlangParser.RULE_clauseBody);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 555;
			this.match(ErlangParser.T__19);
			this.state = 556;
			this.exprs();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expr(): ExprContext {
		let _localctx: ExprContext = new ExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, ErlangParser.RULE_expr);
		try {
			this.state = 561;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ErlangParser.T__23:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 558;
				this.match(ErlangParser.T__23);
				this.state = 559;
				this.expr();
				}
				break;
			case ErlangParser.T__1:
			case ErlangParser.T__2:
			case ErlangParser.T__8:
			case ErlangParser.T__14:
			case ErlangParser.T__17:
			case ErlangParser.T__18:
			case ErlangParser.T__20:
			case ErlangParser.T__28:
			case ErlangParser.T__33:
			case ErlangParser.T__34:
			case ErlangParser.T__36:
			case ErlangParser.T__38:
			case ErlangParser.T__39:
			case ErlangParser.T__40:
			case ErlangParser.T__41:
			case ErlangParser.TokAtom:
			case ErlangParser.TokVar:
			case ErlangParser.TokFloat:
			case ErlangParser.TokInteger:
			case ErlangParser.TokChar:
			case ErlangParser.TokString:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 560;
				this.expr100();
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
	public expr100(): Expr100Context {
		let _localctx: Expr100Context = new Expr100Context(this._ctx, this.state);
		this.enterRule(_localctx, 82, ErlangParser.RULE_expr100);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 563;
			this.expr150();
			this.state = 568;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ErlangParser.T__24 || _la === ErlangParser.T__25) {
				{
				{
				this.state = 564;
				_la = this._input.LA(1);
				if (!(_la === ErlangParser.T__24 || _la === ErlangParser.T__25)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 565;
				this.expr150();
				}
				}
				this.state = 570;
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
	public expr150(): Expr150Context {
		let _localctx: Expr150Context = new Expr150Context(this._ctx, this.state);
		this.enterRule(_localctx, 84, ErlangParser.RULE_expr150);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 571;
			this.expr160();
			this.state = 576;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ErlangParser.T__26) {
				{
				{
				this.state = 572;
				this.match(ErlangParser.T__26);
				this.state = 573;
				this.expr160();
				}
				}
				this.state = 578;
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
	public expr160(): Expr160Context {
		let _localctx: Expr160Context = new Expr160Context(this._ctx, this.state);
		this.enterRule(_localctx, 86, ErlangParser.RULE_expr160);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 579;
			this.expr200();
			this.state = 584;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ErlangParser.T__27) {
				{
				{
				this.state = 580;
				this.match(ErlangParser.T__27);
				this.state = 581;
				this.expr200();
				}
				}
				this.state = 586;
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
	public expr200(): Expr200Context {
		let _localctx: Expr200Context = new Expr200Context(this._ctx, this.state);
		this.enterRule(_localctx, 88, ErlangParser.RULE_expr200);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 587;
			this.expr300();
			this.state = 591;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 55)) & ~0x1F) === 0 && ((1 << (_la - 55)) & ((1 << (ErlangParser.T__54 - 55)) | (1 << (ErlangParser.T__55 - 55)) | (1 << (ErlangParser.T__56 - 55)) | (1 << (ErlangParser.T__57 - 55)) | (1 << (ErlangParser.T__58 - 55)) | (1 << (ErlangParser.T__59 - 55)) | (1 << (ErlangParser.T__60 - 55)) | (1 << (ErlangParser.T__61 - 55)))) !== 0)) {
				{
				this.state = 588;
				this.compOp();
				this.state = 589;
				this.expr300();
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
	public expr300(): Expr300Context {
		let _localctx: Expr300Context = new Expr300Context(this._ctx, this.state);
		this.enterRule(_localctx, 90, ErlangParser.RULE_expr300);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 593;
			this.expr400();
			this.state = 599;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ErlangParser.T__52 || _la === ErlangParser.T__53) {
				{
				{
				this.state = 594;
				this.listOp();
				this.state = 595;
				this.expr400();
				}
				}
				this.state = 601;
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
	public expr400(): Expr400Context {
		let _localctx: Expr400Context = new Expr400Context(this._ctx, this.state);
		this.enterRule(_localctx, 92, ErlangParser.RULE_expr400);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 602;
			this.expr500();
			this.state = 608;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ErlangParser.T__1 || ((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & ((1 << (ErlangParser.T__39 - 40)) | (1 << (ErlangParser.T__46 - 40)) | (1 << (ErlangParser.T__47 - 40)) | (1 << (ErlangParser.T__48 - 40)) | (1 << (ErlangParser.T__49 - 40)) | (1 << (ErlangParser.T__50 - 40)) | (1 << (ErlangParser.T__51 - 40)))) !== 0)) {
				{
				{
				this.state = 603;
				this.addOp();
				this.state = 604;
				this.expr500();
				}
				}
				this.state = 610;
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
	public expr500(): Expr500Context {
		let _localctx: Expr500Context = new Expr500Context(this._ctx, this.state);
		this.enterRule(_localctx, 94, ErlangParser.RULE_expr500);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 611;
			this.expr600();
			this.state = 617;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ErlangParser.T__5 || _la === ErlangParser.T__22 || ((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & ((1 << (ErlangParser.T__42 - 43)) | (1 << (ErlangParser.T__43 - 43)) | (1 << (ErlangParser.T__44 - 43)) | (1 << (ErlangParser.T__45 - 43)))) !== 0)) {
				{
				{
				this.state = 612;
				this.multOp();
				this.state = 613;
				this.expr600();
				}
				}
				this.state = 619;
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
	public expr600(): Expr600Context {
		let _localctx: Expr600Context = new Expr600Context(this._ctx, this.state);
		this.enterRule(_localctx, 96, ErlangParser.RULE_expr600);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 621;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ErlangParser.T__1 || ((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & ((1 << (ErlangParser.T__39 - 40)) | (1 << (ErlangParser.T__40 - 40)) | (1 << (ErlangParser.T__41 - 40)))) !== 0)) {
				{
				this.state = 620;
				this.prefixOp();
				}
			}

			this.state = 623;
			this.expr700();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expr700(): Expr700Context {
		let _localctx: Expr700Context = new Expr700Context(this._ctx, this.state);
		this.enterRule(_localctx, 98, ErlangParser.RULE_expr700);
		try {
			this.state = 628;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 35, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 625;
				this.functionCall();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 626;
				this.recordExpr(0);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 627;
				this.expr800();
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
	public expr800(): Expr800Context {
		let _localctx: Expr800Context = new Expr800Context(this._ctx, this.state);
		this.enterRule(_localctx, 100, ErlangParser.RULE_expr800);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 630;
			this.exprMax();
			this.state = 633;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ErlangParser.T__4) {
				{
				this.state = 631;
				this.match(ErlangParser.T__4);
				this.state = 632;
				this.exprMax();
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
	public exprMax(): ExprMaxContext {
		let _localctx: ExprMaxContext = new ExprMaxContext(this._ctx, this.state);
		this.enterRule(_localctx, 102, ErlangParser.RULE_exprMax);
		try {
			this.state = 655;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 37, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 635;
				this.tokVar();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 636;
				this.atomic();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 637;
				this.list();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 638;
				this.binary();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 639;
				this.listComprehension();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 640;
				this.binaryComprehension();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 641;
				this.tuple();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 642;
				this.match(ErlangParser.T__2);
				this.state = 643;
				this.expr();
				this.state = 644;
				this.match(ErlangParser.T__3);
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 646;
				this.match(ErlangParser.T__28);
				this.state = 647;
				this.exprs();
				this.state = 648;
				this.match(ErlangParser.T__29);
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 650;
				this.ifExpr();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 651;
				this.caseExpr();
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 652;
				this.receiveExpr();
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 653;
				this.funExpr();
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 654;
				this.tryExpr();
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
	public list(): ListContext {
		let _localctx: ListContext = new ListContext(this._ctx, this.state);
		this.enterRule(_localctx, 104, ErlangParser.RULE_list);
		try {
			this.state = 663;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 38, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 657;
				this.match(ErlangParser.T__14);
				this.state = 658;
				this.match(ErlangParser.T__15);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 659;
				this.match(ErlangParser.T__14);
				this.state = 660;
				this.expr();
				this.state = 661;
				this.tail();
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
	public tail(): TailContext {
		let _localctx: TailContext = new TailContext(this._ctx, this.state);
		this.enterRule(_localctx, 106, ErlangParser.RULE_tail);
		try {
			this.state = 674;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ErlangParser.T__15:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 665;
				this.match(ErlangParser.T__15);
				}
				break;
			case ErlangParser.T__12:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 666;
				this.match(ErlangParser.T__12);
				this.state = 667;
				this.expr();
				this.state = 668;
				this.match(ErlangParser.T__15);
				}
				break;
			case ErlangParser.T__7:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 670;
				this.match(ErlangParser.T__7);
				this.state = 671;
				this.expr();
				this.state = 672;
				this.tail();
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
	public binary(): BinaryContext {
		let _localctx: BinaryContext = new BinaryContext(this._ctx, this.state);
		this.enterRule(_localctx, 108, ErlangParser.RULE_binary);
		try {
			this.state = 682;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 40, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 676;
				this.match(ErlangParser.T__20);
				this.state = 677;
				this.match(ErlangParser.T__21);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 678;
				this.match(ErlangParser.T__20);
				this.state = 679;
				this.binElements();
				this.state = 680;
				this.match(ErlangParser.T__21);
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
	public binElements(): BinElementsContext {
		let _localctx: BinElementsContext = new BinElementsContext(this._ctx, this.state);
		this.enterRule(_localctx, 110, ErlangParser.RULE_binElements);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 684;
			this.binElement();
			this.state = 689;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ErlangParser.T__7) {
				{
				{
				this.state = 685;
				this.match(ErlangParser.T__7);
				this.state = 686;
				this.binElement();
				}
				}
				this.state = 691;
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
	public binElement(): BinElementContext {
		let _localctx: BinElementContext = new BinElementContext(this._ctx, this.state);
		this.enterRule(_localctx, 112, ErlangParser.RULE_binElement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 692;
			this.bitExpr();
			this.state = 693;
			this.optBitSizeExpr();
			this.state = 694;
			this.optBitTypeList();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public bitExpr(): BitExprContext {
		let _localctx: BitExprContext = new BitExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 114, ErlangParser.RULE_bitExpr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 697;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ErlangParser.T__1 || ((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & ((1 << (ErlangParser.T__39 - 40)) | (1 << (ErlangParser.T__40 - 40)) | (1 << (ErlangParser.T__41 - 40)))) !== 0)) {
				{
				this.state = 696;
				this.prefixOp();
				}
			}

			this.state = 699;
			this.exprMax();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public optBitSizeExpr(): OptBitSizeExprContext {
		let _localctx: OptBitSizeExprContext = new OptBitSizeExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 116, ErlangParser.RULE_optBitSizeExpr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 703;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ErlangParser.T__4) {
				{
				this.state = 701;
				this.match(ErlangParser.T__4);
				this.state = 702;
				this.bitSizeExpr();
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
	public optBitTypeList(): OptBitTypeListContext {
		let _localctx: OptBitTypeListContext = new OptBitTypeListContext(this._ctx, this.state);
		this.enterRule(_localctx, 118, ErlangParser.RULE_optBitTypeList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 707;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ErlangParser.T__5) {
				{
				this.state = 705;
				this.match(ErlangParser.T__5);
				this.state = 706;
				this.bitTypeList();
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
	public bitTypeList(): BitTypeListContext {
		let _localctx: BitTypeListContext = new BitTypeListContext(this._ctx, this.state);
		this.enterRule(_localctx, 120, ErlangParser.RULE_bitTypeList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 709;
			this.bitType();
			this.state = 714;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ErlangParser.T__1) {
				{
				{
				this.state = 710;
				this.match(ErlangParser.T__1);
				this.state = 711;
				this.bitType();
				}
				}
				this.state = 716;
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
	public bitType(): BitTypeContext {
		let _localctx: BitTypeContext = new BitTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 122, ErlangParser.RULE_bitType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 717;
			this.tokAtom();
			this.state = 720;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ErlangParser.T__4) {
				{
				this.state = 718;
				this.match(ErlangParser.T__4);
				this.state = 719;
				this.tokInteger();
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
	public bitSizeExpr(): BitSizeExprContext {
		let _localctx: BitSizeExprContext = new BitSizeExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 124, ErlangParser.RULE_bitSizeExpr);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 722;
			this.exprMax();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public listComprehension(): ListComprehensionContext {
		let _localctx: ListComprehensionContext = new ListComprehensionContext(this._ctx, this.state);
		this.enterRule(_localctx, 126, ErlangParser.RULE_listComprehension);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 724;
			this.match(ErlangParser.T__14);
			this.state = 725;
			this.expr();
			this.state = 726;
			this.match(ErlangParser.T__30);
			this.state = 727;
			this.lcExprs();
			this.state = 728;
			this.match(ErlangParser.T__15);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public binaryComprehension(): BinaryComprehensionContext {
		let _localctx: BinaryComprehensionContext = new BinaryComprehensionContext(this._ctx, this.state);
		this.enterRule(_localctx, 128, ErlangParser.RULE_binaryComprehension);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 730;
			this.match(ErlangParser.T__20);
			this.state = 731;
			this.binary();
			this.state = 732;
			this.match(ErlangParser.T__30);
			this.state = 733;
			this.lcExprs();
			this.state = 734;
			this.match(ErlangParser.T__21);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public lcExprs(): LcExprsContext {
		let _localctx: LcExprsContext = new LcExprsContext(this._ctx, this.state);
		this.enterRule(_localctx, 130, ErlangParser.RULE_lcExprs);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 736;
			this.lcExpr();
			this.state = 741;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ErlangParser.T__7) {
				{
				{
				this.state = 737;
				this.match(ErlangParser.T__7);
				this.state = 738;
				this.lcExpr();
				}
				}
				this.state = 743;
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
	public lcExpr(): LcExprContext {
		let _localctx: LcExprContext = new LcExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 132, ErlangParser.RULE_lcExpr);
		try {
			this.state = 753;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 48, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 744;
				this.expr();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 745;
				this.expr();
				this.state = 746;
				this.match(ErlangParser.T__31);
				this.state = 747;
				this.expr();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 749;
				this.binary();
				this.state = 750;
				this.match(ErlangParser.T__32);
				this.state = 751;
				this.expr();
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
	public tuple(): TupleContext {
		let _localctx: TupleContext = new TupleContext(this._ctx, this.state);
		this.enterRule(_localctx, 134, ErlangParser.RULE_tuple);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 755;
			this.match(ErlangParser.T__8);
			this.state = 757;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ErlangParser.T__1) | (1 << ErlangParser.T__2) | (1 << ErlangParser.T__8) | (1 << ErlangParser.T__14) | (1 << ErlangParser.T__17) | (1 << ErlangParser.T__18) | (1 << ErlangParser.T__20) | (1 << ErlangParser.T__23) | (1 << ErlangParser.T__28))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (ErlangParser.T__33 - 34)) | (1 << (ErlangParser.T__34 - 34)) | (1 << (ErlangParser.T__36 - 34)) | (1 << (ErlangParser.T__38 - 34)) | (1 << (ErlangParser.T__39 - 34)) | (1 << (ErlangParser.T__40 - 34)) | (1 << (ErlangParser.T__41 - 34)) | (1 << (ErlangParser.TokAtom - 34)) | (1 << (ErlangParser.TokVar - 34)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (ErlangParser.TokFloat - 66)) | (1 << (ErlangParser.TokInteger - 66)) | (1 << (ErlangParser.TokChar - 66)) | (1 << (ErlangParser.TokString - 66)))) !== 0)) {
				{
				this.state = 756;
				this.exprs();
				}
			}

			this.state = 759;
			this.match(ErlangParser.T__9);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public recordExpr(): RecordExprContext;
	public recordExpr(_p: number): RecordExprContext;
	// @RuleVersion(0)
	public recordExpr(_p?: number): RecordExprContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: RecordExprContext = new RecordExprContext(this._ctx, _parentState);
		let _prevctx: RecordExprContext = _localctx;
		let _startState: number = 136;
		this.enterRecursionRule(_localctx, 136, ErlangParser.RULE_recordExpr, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 763;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ErlangParser.T__2) | (1 << ErlangParser.T__8) | (1 << ErlangParser.T__14) | (1 << ErlangParser.T__18) | (1 << ErlangParser.T__20) | (1 << ErlangParser.T__28))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (ErlangParser.T__33 - 34)) | (1 << (ErlangParser.T__34 - 34)) | (1 << (ErlangParser.T__36 - 34)) | (1 << (ErlangParser.T__38 - 34)) | (1 << (ErlangParser.TokAtom - 34)) | (1 << (ErlangParser.TokVar - 34)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (ErlangParser.TokFloat - 66)) | (1 << (ErlangParser.TokInteger - 66)) | (1 << (ErlangParser.TokChar - 66)) | (1 << (ErlangParser.TokString - 66)))) !== 0)) {
				{
				this.state = 762;
				this.exprMax();
				}
			}

			this.state = 765;
			this.match(ErlangParser.T__17);
			this.state = 766;
			this.tokAtom();
			this.state = 770;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ErlangParser.T__0:
				{
				this.state = 767;
				this.match(ErlangParser.T__0);
				this.state = 768;
				this.tokAtom();
				}
				break;
			case ErlangParser.T__8:
				{
				this.state = 769;
				this.recordTuple();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 782;
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
					_localctx = new RecordExprContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, ErlangParser.RULE_recordExpr);
					this.state = 772;
					if (!(this.precpred(this._ctx, 1))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					}
					this.state = 773;
					this.match(ErlangParser.T__17);
					this.state = 774;
					this.tokAtom();
					this.state = 778;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case ErlangParser.T__0:
						{
						this.state = 775;
						this.match(ErlangParser.T__0);
						this.state = 776;
						this.tokAtom();
						}
						break;
					case ErlangParser.T__8:
						{
						this.state = 777;
						this.recordTuple();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					}
				}
				this.state = 784;
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
	public recordTuple(): RecordTupleContext {
		let _localctx: RecordTupleContext = new RecordTupleContext(this._ctx, this.state);
		this.enterRule(_localctx, 138, ErlangParser.RULE_recordTuple);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 785;
			this.match(ErlangParser.T__8);
			this.state = 787;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ErlangParser.TokAtom || _la === ErlangParser.TokVar) {
				{
				this.state = 786;
				this.recordFields();
				}
			}

			this.state = 789;
			this.match(ErlangParser.T__9);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public recordFields(): RecordFieldsContext {
		let _localctx: RecordFieldsContext = new RecordFieldsContext(this._ctx, this.state);
		this.enterRule(_localctx, 140, ErlangParser.RULE_recordFields);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 791;
			this.recordField();
			this.state = 796;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ErlangParser.T__7) {
				{
				{
				this.state = 792;
				this.match(ErlangParser.T__7);
				this.state = 793;
				this.recordField();
				}
				}
				this.state = 798;
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
	public recordField(): RecordFieldContext {
		let _localctx: RecordFieldContext = new RecordFieldContext(this._ctx, this.state);
		this.enterRule(_localctx, 142, ErlangParser.RULE_recordField);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 801;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ErlangParser.TokVar:
				{
				this.state = 799;
				this.tokVar();
				}
				break;
			case ErlangParser.TokAtom:
				{
				this.state = 800;
				this.tokAtom();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 803;
			this.match(ErlangParser.T__24);
			this.state = 804;
			this.expr();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 144, ErlangParser.RULE_functionCall);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 806;
			this.expr800();
			this.state = 807;
			this.argumentList();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ifExpr(): IfExprContext {
		let _localctx: IfExprContext = new IfExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 146, ErlangParser.RULE_ifExpr);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 809;
			this.match(ErlangParser.T__33);
			this.state = 810;
			this.ifClauses();
			this.state = 811;
			this.match(ErlangParser.T__29);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ifClauses(): IfClausesContext {
		let _localctx: IfClausesContext = new IfClausesContext(this._ctx, this.state);
		this.enterRule(_localctx, 148, ErlangParser.RULE_ifClauses);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 813;
			this.ifClause();
			this.state = 818;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ErlangParser.T__10) {
				{
				{
				this.state = 814;
				this.match(ErlangParser.T__10);
				this.state = 815;
				this.ifClause();
				}
				}
				this.state = 820;
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
	public ifClause(): IfClauseContext {
		let _localctx: IfClauseContext = new IfClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 150, ErlangParser.RULE_ifClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 821;
			this.guard();
			this.state = 822;
			this.clauseBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public caseExpr(): CaseExprContext {
		let _localctx: CaseExprContext = new CaseExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 152, ErlangParser.RULE_caseExpr);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 824;
			this.match(ErlangParser.T__34);
			this.state = 825;
			this.expr();
			this.state = 826;
			this.match(ErlangParser.T__35);
			this.state = 827;
			this.crClauses();
			this.state = 828;
			this.match(ErlangParser.T__29);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public crClauses(): CrClausesContext {
		let _localctx: CrClausesContext = new CrClausesContext(this._ctx, this.state);
		this.enterRule(_localctx, 154, ErlangParser.RULE_crClauses);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 830;
			this.crClause();
			this.state = 835;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ErlangParser.T__10) {
				{
				{
				this.state = 831;
				this.match(ErlangParser.T__10);
				this.state = 832;
				this.crClause();
				}
				}
				this.state = 837;
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
	public crClause(): CrClauseContext {
		let _localctx: CrClauseContext = new CrClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 156, ErlangParser.RULE_crClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 838;
			this.expr();
			this.state = 839;
			this.clauseGuard();
			this.state = 840;
			this.clauseBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public receiveExpr(): ReceiveExprContext {
		let _localctx: ReceiveExprContext = new ReceiveExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 158, ErlangParser.RULE_receiveExpr);
		try {
			this.state = 859;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 59, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 842;
				this.match(ErlangParser.T__36);
				this.state = 843;
				this.crClauses();
				this.state = 844;
				this.match(ErlangParser.T__29);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 846;
				this.match(ErlangParser.T__36);
				this.state = 847;
				this.match(ErlangParser.T__37);
				this.state = 848;
				this.expr();
				this.state = 849;
				this.clauseBody();
				this.state = 850;
				this.match(ErlangParser.T__29);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 852;
				this.match(ErlangParser.T__36);
				this.state = 853;
				this.crClauses();
				this.state = 854;
				this.match(ErlangParser.T__37);
				this.state = 855;
				this.expr();
				this.state = 856;
				this.clauseBody();
				this.state = 857;
				this.match(ErlangParser.T__29);
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
	public funExpr(): FunExprContext {
		let _localctx: FunExprContext = new FunExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 160, ErlangParser.RULE_funExpr);
		try {
			this.state = 877;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 60, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 861;
				this.match(ErlangParser.T__18);
				this.state = 862;
				this.tokAtom();
				this.state = 863;
				this.match(ErlangParser.T__5);
				this.state = 864;
				this.tokInteger();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 866;
				this.match(ErlangParser.T__18);
				this.state = 867;
				this.atomOrVar();
				this.state = 868;
				this.match(ErlangParser.T__4);
				this.state = 869;
				this.atomOrVar();
				this.state = 870;
				this.match(ErlangParser.T__5);
				this.state = 871;
				this.integerOrVar();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 873;
				this.match(ErlangParser.T__18);
				this.state = 874;
				this.funClauses();
				this.state = 875;
				this.match(ErlangParser.T__29);
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
	public atomOrVar(): AtomOrVarContext {
		let _localctx: AtomOrVarContext = new AtomOrVarContext(this._ctx, this.state);
		this.enterRule(_localctx, 162, ErlangParser.RULE_atomOrVar);
		try {
			this.state = 881;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ErlangParser.TokAtom:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 879;
				this.tokAtom();
				}
				break;
			case ErlangParser.TokVar:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 880;
				this.tokVar();
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
	public integerOrVar(): IntegerOrVarContext {
		let _localctx: IntegerOrVarContext = new IntegerOrVarContext(this._ctx, this.state);
		this.enterRule(_localctx, 164, ErlangParser.RULE_integerOrVar);
		try {
			this.state = 885;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ErlangParser.TokInteger:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 883;
				this.tokInteger();
				}
				break;
			case ErlangParser.TokVar:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 884;
				this.tokVar();
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
	public funClauses(): FunClausesContext {
		let _localctx: FunClausesContext = new FunClausesContext(this._ctx, this.state);
		this.enterRule(_localctx, 166, ErlangParser.RULE_funClauses);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 887;
			this.funClause();
			this.state = 892;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ErlangParser.T__10) {
				{
				{
				this.state = 888;
				this.match(ErlangParser.T__10);
				this.state = 889;
				this.funClause();
				}
				}
				this.state = 894;
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
	public funClause(): FunClauseContext {
		let _localctx: FunClauseContext = new FunClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 168, ErlangParser.RULE_funClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 895;
			this.argumentList();
			this.state = 896;
			this.clauseGuard();
			this.state = 897;
			this.clauseBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tryExpr(): TryExprContext {
		let _localctx: TryExprContext = new TryExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 170, ErlangParser.RULE_tryExpr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 899;
			this.match(ErlangParser.T__38);
			this.state = 900;
			this.exprs();
			this.state = 903;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ErlangParser.T__35) {
				{
				this.state = 901;
				this.match(ErlangParser.T__35);
				this.state = 902;
				this.crClauses();
				}
			}

			this.state = 905;
			this.tryCatch();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tryCatch(): TryCatchContext {
		let _localctx: TryCatchContext = new TryCatchContext(this._ctx, this.state);
		this.enterRule(_localctx, 172, ErlangParser.RULE_tryCatch);
		try {
			this.state = 921;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 65, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 907;
				this.match(ErlangParser.T__23);
				this.state = 908;
				this.tryClauses();
				this.state = 909;
				this.match(ErlangParser.T__29);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 911;
				this.match(ErlangParser.T__23);
				this.state = 912;
				this.tryClauses();
				this.state = 913;
				this.match(ErlangParser.T__37);
				this.state = 914;
				this.exprs();
				this.state = 915;
				this.match(ErlangParser.T__29);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 917;
				this.match(ErlangParser.T__37);
				this.state = 918;
				this.exprs();
				this.state = 919;
				this.match(ErlangParser.T__29);
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
	public tryClauses(): TryClausesContext {
		let _localctx: TryClausesContext = new TryClausesContext(this._ctx, this.state);
		this.enterRule(_localctx, 174, ErlangParser.RULE_tryClauses);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 923;
			this.tryClause();
			this.state = 928;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ErlangParser.T__10) {
				{
				{
				this.state = 924;
				this.match(ErlangParser.T__10);
				this.state = 925;
				this.tryClause();
				}
				}
				this.state = 930;
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
	public tryClause(): TryClauseContext {
		let _localctx: TryClauseContext = new TryClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 176, ErlangParser.RULE_tryClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 934;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 67, this._ctx) ) {
			case 1:
				{
				this.state = 931;
				this.atomOrVar();
				this.state = 932;
				this.match(ErlangParser.T__4);
				}
				break;
			}
			this.state = 936;
			this.expr();
			this.state = 937;
			this.clauseGuard();
			this.state = 938;
			this.clauseBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public argumentList(): ArgumentListContext {
		let _localctx: ArgumentListContext = new ArgumentListContext(this._ctx, this.state);
		this.enterRule(_localctx, 178, ErlangParser.RULE_argumentList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 940;
			this.match(ErlangParser.T__2);
			this.state = 942;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ErlangParser.T__1) | (1 << ErlangParser.T__2) | (1 << ErlangParser.T__8) | (1 << ErlangParser.T__14) | (1 << ErlangParser.T__17) | (1 << ErlangParser.T__18) | (1 << ErlangParser.T__20) | (1 << ErlangParser.T__23) | (1 << ErlangParser.T__28))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (ErlangParser.T__33 - 34)) | (1 << (ErlangParser.T__34 - 34)) | (1 << (ErlangParser.T__36 - 34)) | (1 << (ErlangParser.T__38 - 34)) | (1 << (ErlangParser.T__39 - 34)) | (1 << (ErlangParser.T__40 - 34)) | (1 << (ErlangParser.T__41 - 34)) | (1 << (ErlangParser.TokAtom - 34)) | (1 << (ErlangParser.TokVar - 34)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (ErlangParser.TokFloat - 66)) | (1 << (ErlangParser.TokInteger - 66)) | (1 << (ErlangParser.TokChar - 66)) | (1 << (ErlangParser.TokString - 66)))) !== 0)) {
				{
				this.state = 941;
				this.exprs();
				}
			}

			this.state = 944;
			this.match(ErlangParser.T__3);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public exprs(): ExprsContext {
		let _localctx: ExprsContext = new ExprsContext(this._ctx, this.state);
		this.enterRule(_localctx, 180, ErlangParser.RULE_exprs);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 946;
			this.expr();
			this.state = 951;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ErlangParser.T__7) {
				{
				{
				this.state = 947;
				this.match(ErlangParser.T__7);
				this.state = 948;
				this.expr();
				}
				}
				this.state = 953;
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
	public guard(): GuardContext {
		let _localctx: GuardContext = new GuardContext(this._ctx, this.state);
		this.enterRule(_localctx, 182, ErlangParser.RULE_guard);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 954;
			this.exprs();
			this.state = 959;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ErlangParser.T__10) {
				{
				{
				this.state = 955;
				this.match(ErlangParser.T__10);
				this.state = 956;
				this.exprs();
				}
				}
				this.state = 961;
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
	public atomic(): AtomicContext {
		let _localctx: AtomicContext = new AtomicContext(this._ctx, this.state);
		this.enterRule(_localctx, 184, ErlangParser.RULE_atomic);
		let _la: number;
		try {
			this.state = 971;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ErlangParser.TokChar:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 962;
				this.tokChar();
				}
				break;
			case ErlangParser.TokInteger:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 963;
				this.tokInteger();
				}
				break;
			case ErlangParser.TokFloat:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 964;
				this.tokFloat();
				}
				break;
			case ErlangParser.TokAtom:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 965;
				this.tokAtom();
				}
				break;
			case ErlangParser.TokString:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 967;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 966;
					this.tokString();
					}
					}
					this.state = 969;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === ErlangParser.TokString);
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
	public prefixOp(): PrefixOpContext {
		let _localctx: PrefixOpContext = new PrefixOpContext(this._ctx, this.state);
		this.enterRule(_localctx, 186, ErlangParser.RULE_prefixOp);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 973;
			_la = this._input.LA(1);
			if (!(_la === ErlangParser.T__1 || ((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & ((1 << (ErlangParser.T__39 - 40)) | (1 << (ErlangParser.T__40 - 40)) | (1 << (ErlangParser.T__41 - 40)))) !== 0))) {
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
	public multOp(): MultOpContext {
		let _localctx: MultOpContext = new MultOpContext(this._ctx, this.state);
		this.enterRule(_localctx, 188, ErlangParser.RULE_multOp);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 975;
			_la = this._input.LA(1);
			if (!(_la === ErlangParser.T__5 || _la === ErlangParser.T__22 || ((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & ((1 << (ErlangParser.T__42 - 43)) | (1 << (ErlangParser.T__43 - 43)) | (1 << (ErlangParser.T__44 - 43)) | (1 << (ErlangParser.T__45 - 43)))) !== 0))) {
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
	public addOp(): AddOpContext {
		let _localctx: AddOpContext = new AddOpContext(this._ctx, this.state);
		this.enterRule(_localctx, 190, ErlangParser.RULE_addOp);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 977;
			_la = this._input.LA(1);
			if (!(_la === ErlangParser.T__1 || ((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & ((1 << (ErlangParser.T__39 - 40)) | (1 << (ErlangParser.T__46 - 40)) | (1 << (ErlangParser.T__47 - 40)) | (1 << (ErlangParser.T__48 - 40)) | (1 << (ErlangParser.T__49 - 40)) | (1 << (ErlangParser.T__50 - 40)) | (1 << (ErlangParser.T__51 - 40)))) !== 0))) {
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
	public listOp(): ListOpContext {
		let _localctx: ListOpContext = new ListOpContext(this._ctx, this.state);
		this.enterRule(_localctx, 192, ErlangParser.RULE_listOp);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 979;
			_la = this._input.LA(1);
			if (!(_la === ErlangParser.T__52 || _la === ErlangParser.T__53)) {
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
	public compOp(): CompOpContext {
		let _localctx: CompOpContext = new CompOpContext(this._ctx, this.state);
		this.enterRule(_localctx, 194, ErlangParser.RULE_compOp);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 981;
			_la = this._input.LA(1);
			if (!(((((_la - 55)) & ~0x1F) === 0 && ((1 << (_la - 55)) & ((1 << (ErlangParser.T__54 - 55)) | (1 << (ErlangParser.T__55 - 55)) | (1 << (ErlangParser.T__56 - 55)) | (1 << (ErlangParser.T__57 - 55)) | (1 << (ErlangParser.T__58 - 55)) | (1 << (ErlangParser.T__59 - 55)) | (1 << (ErlangParser.T__60 - 55)) | (1 << (ErlangParser.T__61 - 55)))) !== 0))) {
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
	public ruleClauses(): RuleClausesContext {
		let _localctx: RuleClausesContext = new RuleClausesContext(this._ctx, this.state);
		this.enterRule(_localctx, 196, ErlangParser.RULE_ruleClauses);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 983;
			this.ruleClause();
			this.state = 988;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ErlangParser.T__10) {
				{
				{
				this.state = 984;
				this.match(ErlangParser.T__10);
				this.state = 985;
				this.ruleClause();
				}
				}
				this.state = 990;
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
	public ruleClause(): RuleClauseContext {
		let _localctx: RuleClauseContext = new RuleClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 198, ErlangParser.RULE_ruleClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 991;
			this.tokAtom();
			this.state = 992;
			this.clauseArgs();
			this.state = 993;
			this.clauseGuard();
			this.state = 994;
			this.ruleBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ruleBody(): RuleBodyContext {
		let _localctx: RuleBodyContext = new RuleBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 200, ErlangParser.RULE_ruleBody);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 996;
			this.match(ErlangParser.T__62);
			this.state = 997;
			this.lcExprs();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
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
		case 23:
			return this.type300_sempred(_localctx as Type300Context, predIndex);

		case 24:
			return this.type400_sempred(_localctx as Type400Context, predIndex);

		case 68:
			return this.recordExpr_sempred(_localctx as RecordExprContext, predIndex);
		}
		return true;
	}
	private type300_sempred(_localctx: Type300Context, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 2);
		}
		return true;
	}
	private type400_sempred(_localctx: Type400Context, predIndex: number): boolean {
		switch (predIndex) {
		case 1:
			return this.precpred(this._ctx, 2);
		}
		return true;
	}
	private recordExpr_sempred(_localctx: RecordExprContext, predIndex: number): boolean {
		switch (predIndex) {
		case 2:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}

	private static readonly _serializedATNSegments: number = 2;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03J\u03EA\x04\x02" +
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
		"`\x04a\ta\x04b\tb\x04c\tc\x04d\td\x04e\te\x04f\tf\x03\x02\x06\x02\xCE" +
		"\n\x02\r\x02\x0E\x02\xCF\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x05\x03" +
		"\xD7\n\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03\x05\x03\x05\x03\x06\x03" +
		"\x06\x03\x07\x03\x07\x03\b\x03\b\x03\t\x03\t\x03\n\x03\n\x03\n\x03\n\x03" +
		"\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x05" +
		"\n\xF7\n\n\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x05\v\u0101" +
		"\n\v\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f" +
		"\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x05\f\u0114\n\f\x03\r\x03\r\x03\r" +
		"\x03\r\x03\r\x03\r\x03\r\x03\r\x05\r\u011E\n\r\x03\x0E\x03\x0E\x03\x0E" +
		"\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F" +
		"\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F\u0131\n\x0F\x03\x10\x03" +
		"\x10\x03\x10\x03\x10\x03\x11\x03\x11\x03\x11\x07\x11\u013A\n\x11\f\x11" +
		"\x0E\x11\u013D\v\x11\x03\x12\x03\x12\x03\x12\x05\x12\u0142\n\x12\x03\x13" +
		"\x03\x13\x03\x13\x07\x13\u0147\n\x13\f\x13\x0E\x13\u014A\v\x13\x03\x14" +
		"\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x05\x14" +
		"\u0155\n\x14\x03\x15\x03\x15\x03\x15\x07\x15\u015A\n\x15\f\x15\x0E\x15" +
		"\u015D\v\x15\x03\x16\x03\x16\x03\x16\x05\x16\u0162\n\x16\x03\x16\x03\x16" +
		"\x03\x17\x03\x17\x03\x17\x05\x17\u0169\n\x17\x03\x18\x03\x18\x03\x18\x05" +
		"\x18\u016E\n\x18\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19" +
		"\x07\x19\u0177\n\x19\f\x19\x0E\x19\u017A\v\x19\x03\x1A\x03\x1A\x03\x1A" +
		"\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x07\x1A\u0183\n\x1A\f\x1A\x0E\x1A\u0186" +
		"\v\x1A\x03\x1B\x05\x1B\u0189\n\x1B\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x03" +
		"\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03" +
		"\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03" +
		"\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03" +
		"\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03" +
		"\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03" +
		"\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03" +
		"\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03" +
		"\x1C\x03\x1C\x05\x1C\u01D0\n\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D" +
		"\x03\x1D\x05\x1D\u01D8\n\x1D\x03\x1E\x03\x1E\x05\x1E\u01DC\n\x1E\x03\x1E" +
		"\x03\x1E\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03\x1F\x07\x1F\u01E5\n\x1F\f" +
		"\x1F\x0E\x1F\u01E8\v\x1F\x03 \x03 \x03 \x03 \x03!\x03!\x03!\x03!\x03!" +
		"\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x05!\u01FE\n!" +
		"\x03\"\x03\"\x03\"\x03\"\x03#\x03#\x03#\x03#\x03#\x03#\x03$\x03$\x03$" +
		"\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x05$\u0219" +
		"\n$\x03%\x03%\x03%\x07%\u021E\n%\f%\x0E%\u0221\v%\x03&\x03&\x03&\x03&" +
		"\x03&\x03\'\x03\'\x03(\x03(\x05(\u022C\n(\x03)\x03)\x03)\x03*\x03*\x03" +
		"*\x05*\u0234\n*\x03+\x03+\x03+\x07+\u0239\n+\f+\x0E+\u023C\v+\x03,\x03" +
		",\x03,\x07,\u0241\n,\f,\x0E,\u0244\v,\x03-\x03-\x03-\x07-\u0249\n-\f-" +
		"\x0E-\u024C\v-\x03.\x03.\x03.\x03.\x05.\u0252\n.\x03/\x03/\x03/\x03/\x07" +
		"/\u0258\n/\f/\x0E/\u025B\v/\x030\x030\x030\x030\x070\u0261\n0\f0\x0E0" +
		"\u0264\v0\x031\x031\x031\x031\x071\u026A\n1\f1\x0E1\u026D\v1\x032\x05" +
		"2\u0270\n2\x032\x032\x033\x033\x033\x053\u0277\n3\x034\x034\x034\x054" +
		"\u027C\n4\x035\x035\x035\x035\x035\x035\x035\x035\x035\x035\x035\x035" +
		"\x035\x035\x035\x035\x035\x035\x035\x035\x055\u0292\n5\x036\x036\x036" +
		"\x036\x036\x036\x056\u029A\n6\x037\x037\x037\x037\x037\x037\x037\x037" +
		"\x037\x057\u02A5\n7\x038\x038\x038\x038\x038\x038\x058\u02AD\n8\x039\x03" +
		"9\x039\x079\u02B2\n9\f9\x0E9\u02B5\v9\x03:\x03:\x03:\x03:\x03;\x05;\u02BC" +
		"\n;\x03;\x03;\x03<\x03<\x05<\u02C2\n<\x03=\x03=\x05=\u02C6\n=\x03>\x03" +
		">\x03>\x07>\u02CB\n>\f>\x0E>\u02CE\v>\x03?\x03?\x03?\x05?\u02D3\n?\x03" +
		"@\x03@\x03A\x03A\x03A\x03A\x03A\x03A\x03B\x03B\x03B\x03B\x03B\x03B\x03" +
		"C\x03C\x03C\x07C\u02E6\nC\fC\x0EC\u02E9\vC\x03D\x03D\x03D\x03D\x03D\x03" +
		"D\x03D\x03D\x03D\x05D\u02F4\nD\x03E\x03E\x05E\u02F8\nE\x03E\x03E\x03F" +
		"\x03F\x05F\u02FE\nF\x03F\x03F\x03F\x03F\x03F\x05F\u0305\nF\x03F\x03F\x03" +
		"F\x03F\x03F\x03F\x05F\u030D\nF\x07F\u030F\nF\fF\x0EF\u0312\vF\x03G\x03" +
		"G\x05G\u0316\nG\x03G\x03G\x03H\x03H\x03H\x07H\u031D\nH\fH\x0EH\u0320\v" +
		"H\x03I\x03I\x05I\u0324\nI\x03I\x03I\x03I\x03J\x03J\x03J\x03K\x03K\x03" +
		"K\x03K\x03L\x03L\x03L\x07L\u0333\nL\fL\x0EL\u0336\vL\x03M\x03M\x03M\x03" +
		"N\x03N\x03N\x03N\x03N\x03N\x03O\x03O\x03O\x07O\u0344\nO\fO\x0EO\u0347" +
		"\vO\x03P\x03P\x03P\x03P\x03Q\x03Q\x03Q\x03Q\x03Q\x03Q\x03Q\x03Q\x03Q\x03" +
		"Q\x03Q\x03Q\x03Q\x03Q\x03Q\x03Q\x03Q\x05Q\u035E\nQ\x03R\x03R\x03R\x03" +
		"R\x03R\x03R\x03R\x03R\x03R\x03R\x03R\x03R\x03R\x03R\x03R\x03R\x05R\u0370" +
		"\nR\x03S\x03S\x05S\u0374\nS\x03T\x03T\x05T\u0378\nT\x03U\x03U\x03U\x07" +
		"U\u037D\nU\fU\x0EU\u0380\vU\x03V\x03V\x03V\x03V\x03W\x03W\x03W\x03W\x05" +
		"W\u038A\nW\x03W\x03W\x03X\x03X\x03X\x03X\x03X\x03X\x03X\x03X\x03X\x03" +
		"X\x03X\x03X\x03X\x03X\x05X\u039C\nX\x03Y\x03Y\x03Y\x07Y\u03A1\nY\fY\x0E" +
		"Y\u03A4\vY\x03Z\x03Z\x03Z\x05Z\u03A9\nZ\x03Z\x03Z\x03Z\x03Z\x03[\x03[" +
		"\x05[\u03B1\n[\x03[\x03[\x03\\\x03\\\x03\\\x07\\\u03B8\n\\\f\\\x0E\\\u03BB" +
		"\v\\\x03]\x03]\x03]\x07]\u03C0\n]\f]\x0E]\u03C3\v]\x03^\x03^\x03^\x03" +
		"^\x03^\x06^\u03CA\n^\r^\x0E^\u03CB\x05^\u03CE\n^\x03_\x03_\x03`\x03`\x03" +
		"a\x03a\x03b\x03b\x03c\x03c\x03d\x03d\x03d\x07d\u03DD\nd\fd\x0Ed\u03E0" +
		"\vd\x03e\x03e\x03e\x03e\x03e\x03f\x03f\x03f\x03f\x02\x02\x0502\x8Ag\x02" +
		"\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02" +
		"\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02" +
		",\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02" +
		"H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02b\x02" +
		"d\x02f\x02h\x02j\x02l\x02n\x02p\x02r\x02t\x02v\x02x\x02z\x02|\x02~\x02" +
		"\x80\x02\x82\x02\x84\x02\x86\x02\x88\x02\x8A\x02\x8C\x02\x8E\x02\x90\x02" +
		"\x92\x02\x94\x02\x96\x02\x98\x02\x9A\x02\x9C\x02\x9E\x02\xA0\x02\xA2\x02" +
		"\xA4\x02\xA6\x02\xA8\x02\xAA\x02\xAC\x02\xAE\x02\xB0\x02\xB2\x02\xB4\x02" +
		"\xB6\x02\xB8\x02\xBA\x02\xBC\x02\xBE\x02\xC0\x02\xC2\x02\xC4\x02\xC6\x02" +
		"\xC8\x02\xCA\x02\x02\b\x03\x02\x1B\x1C\x04\x02\x04\x04*,\x05\x02\b\b\x19" +
		"\x19-0\x05\x02\x04\x04**16\x03\x0278\x03\x029@\x02\u03FE\x02\xCD\x03\x02" +
		"\x02\x02\x04\xD6\x03\x02\x02\x02\x06\xDA\x03\x02\x02\x02\b\xDC\x03\x02" +
		"\x02\x02\n\xDE\x03\x02\x02\x02\f\xE0\x03\x02\x02\x02\x0E\xE2\x03\x02\x02" +
		"\x02\x10\xE4\x03\x02\x02\x02\x12\xF6\x03\x02\x02\x02\x14\u0100\x03\x02" +
		"\x02\x02\x16\u0113\x03\x02\x02\x02\x18\u011D\x03\x02\x02\x02\x1A\u011F" +
		"\x03\x02\x02\x02\x1C\u0130\x03\x02\x02\x02\x1E\u0132\x03\x02\x02\x02 " +
		"\u0136\x03\x02\x02\x02\"\u013E\x03\x02\x02\x02$\u0143\x03\x02\x02\x02" +
		"&\u0154\x03\x02\x02\x02(\u0156\x03\x02\x02\x02*\u0161\x03\x02\x02\x02" +
		",\u0165\x03\x02\x02\x02.\u016A\x03\x02\x02\x020\u016F\x03\x02\x02\x02" +
		"2\u017B\x03\x02\x02\x024\u0188\x03\x02\x02\x026\u01CF\x03\x02\x02\x02" +
		"8\u01D7\x03\x02\x02\x02:\u01D9\x03\x02\x02\x02<\u01E1\x03\x02\x02\x02" +
		">\u01E9\x03\x02\x02\x02@\u01FD\x03\x02\x02\x02B\u01FF\x03\x02\x02\x02" +
		"D\u0203\x03\x02\x02\x02F\u0218\x03\x02\x02\x02H\u021A\x03\x02\x02\x02" +
		"J\u0222\x03\x02\x02\x02L\u0227\x03\x02\x02\x02N\u022B\x03\x02\x02\x02" +
		"P\u022D\x03\x02\x02\x02R\u0233\x03\x02\x02\x02T\u0235\x03\x02\x02\x02" +
		"V\u023D\x03\x02\x02\x02X\u0245\x03\x02\x02\x02Z\u024D\x03\x02\x02\x02" +
		"\\\u0253\x03\x02\x02\x02^\u025C\x03\x02\x02\x02`\u0265\x03\x02\x02\x02" +
		"b\u026F\x03\x02\x02\x02d\u0276\x03\x02\x02\x02f\u0278\x03\x02\x02\x02" +
		"h\u0291\x03\x02\x02\x02j\u0299\x03\x02\x02\x02l\u02A4\x03\x02\x02\x02" +
		"n\u02AC\x03\x02\x02\x02p\u02AE\x03\x02\x02\x02r\u02B6\x03\x02\x02\x02" +
		"t\u02BB\x03\x02\x02\x02v\u02C1\x03\x02\x02\x02x\u02C5\x03\x02\x02\x02" +
		"z\u02C7\x03\x02\x02\x02|\u02CF\x03\x02\x02\x02~\u02D4\x03\x02\x02\x02" +
		"\x80\u02D6\x03\x02\x02\x02\x82\u02DC\x03\x02\x02\x02\x84\u02E2\x03\x02" +
		"\x02\x02\x86\u02F3\x03\x02\x02\x02\x88\u02F5\x03\x02\x02\x02\x8A\u02FB" +
		"\x03\x02\x02\x02\x8C\u0313\x03\x02\x02\x02\x8E\u0319\x03\x02\x02\x02\x90" +
		"\u0323\x03\x02\x02\x02\x92\u0328\x03\x02\x02\x02\x94\u032B\x03\x02\x02" +
		"\x02\x96\u032F\x03\x02\x02\x02\x98\u0337\x03\x02\x02\x02\x9A\u033A\x03" +
		"\x02\x02\x02\x9C\u0340\x03\x02\x02\x02\x9E\u0348\x03\x02\x02\x02\xA0\u035D" +
		"\x03\x02\x02\x02\xA2\u036F\x03\x02\x02\x02\xA4\u0373\x03\x02\x02\x02\xA6" +
		"\u0377\x03\x02\x02\x02\xA8\u0379\x03\x02\x02\x02\xAA\u0381\x03\x02\x02" +
		"\x02\xAC\u0385\x03\x02\x02\x02\xAE\u039B\x03\x02\x02\x02\xB0\u039D\x03" +
		"\x02\x02\x02\xB2\u03A8\x03\x02\x02\x02\xB4\u03AE\x03\x02\x02\x02\xB6\u03B4" +
		"\x03\x02\x02\x02\xB8\u03BC\x03\x02\x02\x02\xBA\u03CD\x03\x02\x02\x02\xBC" +
		"\u03CF\x03\x02\x02\x02\xBE\u03D1\x03\x02\x02\x02\xC0\u03D3\x03\x02\x02" +
		"\x02\xC2\u03D5\x03\x02\x02\x02\xC4\u03D7\x03\x02\x02\x02\xC6\u03D9\x03" +
		"\x02\x02\x02\xC8\u03E1\x03\x02\x02\x02\xCA\u03E6\x03\x02\x02\x02\xCC\xCE" +
		"\x05\x04\x03\x02\xCD\xCC\x03\x02\x02\x02\xCE\xCF\x03\x02\x02\x02\xCF\xCD" +
		"\x03\x02\x02\x02\xCF\xD0\x03\x02\x02\x02\xD0\xD1\x03\x02\x02\x02\xD1\xD2" +
		"\x07\x02\x02\x03\xD2\x03\x03\x02\x02\x02\xD3\xD7\x05\x12\n\x02\xD4\xD7" +
		"\x05H%\x02\xD5\xD7\x05\xC6d\x02\xD6\xD3\x03\x02\x02\x02\xD6\xD4\x03\x02" +
		"\x02\x02\xD6\xD5\x03\x02\x02\x02\xD7\xD8\x03\x02\x02\x02\xD8\xD9\x07\x03" +
		"\x02\x02\xD9\x05\x03\x02\x02\x02\xDA\xDB\x07B\x02\x02\xDB\x07\x03\x02" +
		"\x02\x02\xDC\xDD\x07C\x02\x02\xDD\t\x03\x02\x02\x02\xDE\xDF\x07D\x02\x02" +
		"\xDF\v\x03\x02\x02\x02\xE0\xE1\x07E\x02\x02\xE1\r\x03\x02\x02\x02\xE2" +
		"\xE3\x07F\x02\x02\xE3\x0F\x03\x02\x02\x02\xE4\xE5\x07G\x02\x02\xE5\x11" +
		"\x03\x02\x02\x02\xE6\xE7\x07\x04\x02\x02\xE7\xE8\x05\x06\x04\x02\xE8\xE9" +
		"\x05F$\x02\xE9\xF7\x03\x02\x02\x02\xEA\xEB\x07\x04\x02\x02\xEB\xEC\x05" +
		"\x06\x04\x02\xEC\xED\x05\x18\r\x02\xED\xF7\x03\x02\x02\x02\xEE\xEF\x07" +
		"\x04\x02\x02\xEF\xF0\x05\x06\x04\x02\xF0\xF1\x07\x05\x02\x02\xF1\xF2\x05" +
		"\x18\r\x02\xF2\xF3\x07\x06\x02\x02\xF3\xF7\x03\x02\x02\x02\xF4\xF5\x07" +
		"H\x02\x02\xF5\xF7\x05\x14\v\x02\xF6\xE6\x03\x02\x02\x02\xF6\xEA\x03\x02" +
		"\x02\x02\xF6\xEE\x03\x02\x02\x02\xF6\xF4\x03\x02\x02\x02\xF7\x13\x03\x02" +
		"\x02\x02\xF8\xF9\x05\x16\f\x02\xF9\xFA\x05 \x11\x02\xFA\u0101\x03\x02" +
		"\x02\x02\xFB\xFC\x07\x05\x02\x02\xFC\xFD\x05\x16\f\x02\xFD\xFE\x05 \x11" +
		"\x02\xFE\xFF\x07\x06\x02\x02\xFF\u0101\x03\x02\x02\x02\u0100\xF8\x03\x02" +
		"\x02\x02\u0100\xFB\x03\x02\x02\x02\u0101\x15\x03\x02\x02\x02\u0102\u0114" +
		"\x05\x06\x04\x02\u0103\u0104\x05\x06\x04\x02\u0104\u0105\x07\x07\x02\x02" +
		"\u0105\u0106\x05\x06\x04\x02\u0106\u0114\x03\x02\x02\x02\u0107\u0108\x05" +
		"\x06\x04\x02\u0108\u0109\x07\b\x02\x02\u0109\u010A\x05\f\x07\x02\u010A" +
		"\u010B\x07\t\x02\x02\u010B\u0114\x03\x02\x02\x02\u010C\u010D\x05\x06\x04" +
		"\x02\u010D\u010E\x07\x07\x02\x02\u010E\u010F\x05\x06\x04\x02\u010F\u0110" +
		"\x07\b\x02\x02\u0110\u0111\x05\f\x07\x02\u0111\u0112\x07\t\x02\x02\u0112" +
		"\u0114\x03\x02\x02\x02\u0113\u0102\x03\x02\x02\x02\u0113\u0103\x03\x02" +
		"\x02\x02\u0113\u0107\x03\x02\x02\x02\u0113\u010C\x03\x02\x02\x02\u0114" +
		"\x17\x03\x02\x02\x02\u0115\u0116\x05R*\x02\u0116\u0117\x07\n\x02\x02\u0117" +
		"\u0118\x05\x1A\x0E\x02\u0118\u011E\x03\x02\x02\x02\u0119\u011A\x05R*\x02" +
		"\u011A\u011B\x07\t\x02\x02\u011B\u011C\x05*\x16\x02\u011C\u011E\x03\x02" +
		"\x02\x02\u011D\u0115\x03\x02\x02\x02\u011D\u0119\x03\x02\x02\x02\u011E" +
		"\x19\x03\x02\x02\x02\u011F\u0120\x07\v\x02\x02\u0120\u0121\x05\x1C\x0F" +
		"\x02\u0121\u0122\x07\f\x02\x02\u0122\x1B\x03\x02\x02\x02\u0123\u0131\x05" +
		"\x1E\x10\x02\u0124\u0125\x05\x1E\x10\x02\u0125\u0126\x07\n\x02\x02\u0126" +
		"\u0127\x05\x1C\x0F\x02\u0127\u0131\x03\x02\x02\x02\u0128\u0129\x05R*\x02" +
		"\u0129\u012A\x07\n\x02\x02\u012A\u012B\x05\x1C\x0F\x02\u012B\u0131\x03" +
		"\x02\x02\x02\u012C\u012D\x05\x1E\x10\x02\u012D\u012E\x07\n\x02\x02\u012E" +
		"\u012F\x05\xB6\\\x02\u012F\u0131\x03\x02\x02\x02\u0130\u0123\x03\x02\x02" +
		"\x02\u0130\u0124\x03\x02\x02\x02\u0130\u0128\x03\x02\x02\x02\u0130\u012C" +
		"\x03\x02\x02\x02\u0131\x1D\x03\x02\x02\x02\u0132\u0133\x05R*\x02\u0133" +
		"\u0134\x07\t\x02\x02\u0134\u0135\x05*\x16\x02\u0135\x1F\x03\x02\x02\x02" +
		"\u0136\u013B\x05\"\x12\x02\u0137\u0138\x07\r\x02\x02\u0138\u013A\x05\"" +
		"\x12\x02\u0139\u0137\x03\x02\x02\x02\u013A\u013D\x03\x02\x02\x02\u013B" +
		"\u0139\x03\x02\x02\x02\u013B\u013C\x03\x02\x02\x02\u013C!\x03\x02\x02" +
		"\x02\u013D\u013B\x03\x02\x02\x02\u013E\u0141\x05:\x1E\x02\u013F\u0140" +
		"\x07\x0E\x02\x02\u0140\u0142\x05$\x13\x02\u0141\u013F\x03\x02\x02\x02" +
		"\u0141\u0142\x03\x02\x02\x02\u0142#\x03\x02\x02\x02\u0143\u0148\x05&\x14" +
		"\x02\u0144\u0145\x07\n\x02\x02\u0145\u0147\x05&\x14\x02\u0146\u0144\x03" +
		"\x02\x02\x02\u0147\u014A\x03\x02\x02\x02\u0148\u0146\x03\x02\x02\x02\u0148" +
		"\u0149\x03\x02\x02\x02\u0149%\x03\x02\x02\x02\u014A\u0148\x03\x02\x02" +
		"\x02\u014B\u014C\x05\x06\x04\x02\u014C\u014D\x07\x05\x02\x02\u014D\u014E" +
		"\x05(\x15\x02\u014E\u014F\x07\x06\x02\x02\u014F\u0155\x03\x02\x02\x02" +
		"\u0150\u0151\x05\b\x05\x02\u0151\u0152\x07\t\x02\x02\u0152\u0153\x05*" +
		"\x16\x02\u0153\u0155\x03\x02\x02\x02\u0154\u014B\x03\x02\x02\x02\u0154" +
		"\u0150\x03\x02\x02\x02\u0155\'\x03\x02\x02\x02\u0156\u015B\x05*\x16\x02" +
		"\u0157\u0158\x07\n\x02\x02\u0158\u015A\x05*\x16\x02\u0159\u0157\x03\x02" +
		"\x02\x02\u015A\u015D\x03\x02\x02\x02\u015B\u0159\x03\x02\x02\x02\u015B" +
		"\u015C\x03\x02\x02\x02\u015C)\x03\x02\x02\x02\u015D\u015B\x03\x02\x02" +
		"\x02\u015E\u015F\x05\b\x05\x02\u015F\u0160\x07\t\x02\x02\u0160\u0162\x03" +
		"\x02\x02\x02\u0161\u015E\x03\x02\x02\x02\u0161\u0162\x03\x02\x02\x02\u0162" +
		"\u0163\x03\x02\x02\x02\u0163\u0164\x05,\x17\x02\u0164+\x03\x02\x02\x02" +
		"\u0165\u0168\x05.\x18\x02\u0166\u0167\x07\x0F\x02\x02\u0167\u0169\x05" +
		",\x17\x02\u0168\u0166\x03\x02\x02\x02\u0168\u0169\x03\x02\x02\x02\u0169" +
		"-\x03\x02\x02\x02\u016A\u016D\x050\x19\x02\u016B\u016C\x07\x10\x02\x02" +
		"\u016C\u016E\x050\x19\x02\u016D\u016B\x03\x02\x02\x02\u016D\u016E\x03" +
		"\x02\x02\x02\u016E/\x03\x02\x02\x02\u016F\u0170\b\x19\x01\x02\u0170\u0171" +
		"\x052\x1A\x02\u0171\u0178\x03\x02\x02\x02\u0172\u0173\f\x04\x02\x02\u0173" +
		"\u0174\x05\xC0a\x02\u0174\u0175\x052\x1A\x02\u0175\u0177\x03\x02\x02\x02" +
		"\u0176\u0172\x03\x02\x02\x02\u0177\u017A\x03\x02\x02\x02\u0178\u0176\x03" +
		"\x02\x02\x02\u0178\u0179\x03\x02\x02\x02\u01791\x03\x02\x02\x02\u017A" +
		"\u0178\x03\x02\x02\x02\u017B\u017C\b\x1A\x01\x02\u017C\u017D\x054\x1B" +
		"\x02\u017D\u0184\x03\x02\x02\x02\u017E\u017F\f\x04\x02\x02\u017F\u0180" +
		"\x05\xBE`\x02\u0180\u0181\x054\x1B\x02\u0181\u0183\x03\x02\x02\x02\u0182" +
		"\u017E\x03\x02\x02\x02\u0183\u0186\x03\x02\x02\x02\u0184\u0182\x03\x02" +
		"\x02\x02\u0184\u0185\x03\x02\x02\x02\u01853\x03\x02\x02\x02\u0186\u0184" +
		"\x03\x02\x02\x02\u0187\u0189\x05\xBC_\x02\u0188\u0187\x03\x02\x02\x02" +
		"\u0188\u0189\x03\x02\x02\x02\u0189\u018A\x03\x02\x02\x02\u018A\u018B\x05" +
		"6\x1C\x02\u018B5\x03\x02\x02\x02\u018C\u018D\x07\x05\x02\x02\u018D\u018E" +
		"\x05*\x16\x02\u018E\u018F\x07\x06\x02\x02\u018F\u01D0\x03\x02\x02\x02" +
		"\u0190\u01D0\x05\b\x05\x02\u0191\u01D0\x05\x06\x04\x02\u0192\u0193\x05" +
		"\x06\x04\x02\u0193\u0194\x07\x05\x02\x02\u0194\u0195\x07\x06\x02\x02\u0195" +
		"\u01D0\x03\x02\x02\x02\u0196\u0197\x05\x06\x04\x02\u0197\u0198\x07\x05" +
		"\x02\x02\u0198\u0199\x05(\x15\x02\u0199\u019A\x07\x06\x02\x02\u019A\u01D0" +
		"\x03\x02\x02\x02\u019B\u019C\x05\x06\x04\x02\u019C\u019D\x07\x07\x02\x02" +
		"\u019D\u019E\x05\x06\x04\x02\u019E\u019F\x07\x05\x02\x02\u019F\u01A0\x07" +
		"\x06\x02\x02\u01A0\u01D0\x03\x02\x02\x02\u01A1\u01A2\x05\x06\x04\x02\u01A2" +
		"\u01A3\x07\x07\x02\x02\u01A3\u01A4\x05\x06\x04\x02\u01A4\u01A5\x07\x05" +
		"\x02\x02\u01A5\u01A6\x05(\x15\x02\u01A6\u01A7\x07\x06\x02\x02\u01A7\u01D0" +
		"\x03\x02\x02\x02\u01A8\u01A9\x07\x11\x02\x02\u01A9\u01D0\x07\x12\x02\x02" +
		"\u01AA\u01AB\x07\x11\x02\x02\u01AB\u01AC\x05*\x16\x02\u01AC\u01AD\x07" +
		"\x12\x02\x02\u01AD\u01D0\x03\x02\x02\x02\u01AE\u01AF\x07\x11\x02\x02\u01AF" +
		"\u01B0\x05*\x16\x02\u01B0\u01B1\x07\n\x02\x02\u01B1\u01B2\x07\x13\x02" +
		"\x02\u01B2\u01B3\x07\x12\x02\x02\u01B3\u01D0\x03\x02\x02\x02\u01B4\u01B5" +
		"\x07\v\x02\x02\u01B5\u01D0\x07\f\x02\x02\u01B6\u01B7\x07\v\x02\x02\u01B7" +
		"\u01B8\x05(\x15\x02\u01B8\u01B9\x07\f\x02\x02\u01B9\u01D0\x03\x02\x02" +
		"\x02\u01BA\u01BB\x07\x14\x02\x02\u01BB\u01BC\x05\x06\x04\x02\u01BC\u01BD" +
		"\x07\v\x02\x02\u01BD\u01BE\x07\f\x02\x02\u01BE\u01D0\x03\x02\x02\x02\u01BF" +
		"\u01C0\x07\x14\x02\x02\u01C0\u01C1\x05\x06\x04\x02\u01C1\u01C2\x07\v\x02" +
		"\x02\u01C2\u01C3\x05<\x1F\x02\u01C3\u01C4\x07\f\x02\x02\u01C4\u01D0\x03" +
		"\x02\x02\x02\u01C5\u01D0\x05@!\x02\u01C6\u01D0\x05\f\x07\x02\u01C7\u01C8" +
		"\x07\x15\x02\x02\u01C8\u01C9\x07\x05\x02\x02\u01C9\u01D0\x07\x06\x02\x02" +
		"\u01CA\u01CB\x07\x15\x02\x02\u01CB\u01CC\x07\x05\x02\x02\u01CC\u01CD\x05" +
		"8\x1D\x02\u01CD\u01CE\x07\x06\x02\x02\u01CE\u01D0\x03\x02\x02\x02\u01CF" +
		"\u018C\x03\x02\x02\x02\u01CF\u0190\x03\x02\x02\x02\u01CF\u0191\x03\x02" +
		"\x02\x02\u01CF\u0192\x03\x02\x02\x02\u01CF\u0196\x03\x02\x02\x02\u01CF" +
		"\u019B\x03\x02\x02\x02\u01CF\u01A1\x03\x02\x02\x02\u01CF\u01A8\x03\x02" +
		"\x02\x02\u01CF\u01AA\x03\x02\x02\x02\u01CF\u01AE\x03\x02\x02\x02\u01CF" +
		"\u01B4\x03\x02\x02\x02\u01CF\u01B6\x03\x02\x02\x02\u01CF\u01BA\x03\x02" +
		"\x02\x02\u01CF\u01BF\x03\x02\x02\x02\u01CF\u01C5\x03\x02\x02\x02\u01CF" +
		"\u01C6\x03\x02\x02\x02\u01CF\u01C7\x03\x02\x02\x02\u01CF\u01CA\x03\x02" +
		"\x02\x02\u01D07\x03\x02\x02\x02\u01D1\u01D2\x07\x05\x02\x02\u01D2\u01D3" +
		"\x07\x13\x02\x02\u01D3\u01D4\x07\x06\x02\x02\u01D4\u01D5\x07\x16\x02\x02" +
		"\u01D5\u01D8\x05*\x16\x02\u01D6\u01D8\x05:\x1E\x02\u01D7\u01D1\x03\x02" +
		"\x02\x02\u01D7\u01D6\x03\x02\x02\x02\u01D89\x03\x02\x02\x02\u01D9\u01DB" +
		"\x07\x05\x02\x02\u01DA\u01DC\x05(\x15\x02\u01DB\u01DA\x03\x02\x02\x02" +
		"\u01DB\u01DC\x03\x02\x02\x02\u01DC\u01DD\x03\x02\x02\x02\u01DD\u01DE\x07" +
		"\x06\x02\x02\u01DE\u01DF\x07\x16\x02\x02\u01DF\u01E0\x05*\x16\x02\u01E0" +
		";\x03\x02\x02\x02\u01E1\u01E6\x05> \x02\u01E2\u01E3\x07\n\x02\x02\u01E3" +
		"\u01E5\x05> \x02\u01E4\u01E2\x03\x02\x02\x02\u01E5\u01E8\x03\x02\x02\x02" +
		"\u01E6\u01E4\x03\x02\x02\x02\u01E6\u01E7\x03\x02\x02\x02\u01E7=\x03\x02" +
		"\x02\x02\u01E8\u01E6\x03\x02\x02\x02\u01E9\u01EA\x05\x06\x04\x02\u01EA" +
		"\u01EB\x07\t\x02\x02\u01EB\u01EC\x05*\x16\x02\u01EC?\x03\x02\x02\x02\u01ED" +
		"\u01EE\x07\x17\x02\x02\u01EE\u01FE\x07\x18\x02\x02\u01EF\u01F0\x07\x17" +
		"\x02\x02\u01F0\u01F1\x05B\"\x02\u01F1\u01F2\x07\x18\x02\x02";
	private static readonly _serializedATNSegment1: string =
		"\u01F2\u01FE\x03\x02\x02\x02\u01F3\u01F4\x07\x17\x02\x02\u01F4\u01F5\x05" +
		"D#\x02\u01F5\u01F6\x07\x18\x02\x02\u01F6\u01FE\x03\x02\x02\x02\u01F7\u01F8" +
		"\x07\x17\x02\x02\u01F8\u01F9\x05B\"\x02\u01F9\u01FA\x07\n\x02\x02\u01FA" +
		"\u01FB\x05D#\x02\u01FB\u01FC\x07\x18\x02\x02\u01FC\u01FE\x03\x02\x02\x02" +
		"\u01FD\u01ED\x03\x02\x02\x02\u01FD\u01EF\x03\x02\x02\x02\u01FD\u01F3\x03" +
		"\x02\x02\x02\u01FD\u01F7\x03\x02\x02\x02\u01FEA\x03\x02\x02\x02\u01FF" +
		"\u0200\x05\b\x05\x02\u0200\u0201\x07\x07\x02\x02\u0201\u0202\x056\x1C" +
		"\x02\u0202C\x03\x02\x02\x02\u0203\u0204\x05\b\x05\x02\u0204\u0205\x07" +
		"\x07\x02\x02\u0205\u0206\x05\b\x05\x02\u0206\u0207\x07\x19\x02\x02\u0207" +
		"\u0208\x056\x1C\x02\u0208E\x03\x02\x02\x02\u0209\u0219\x05R*\x02\u020A" +
		"\u020B\x07\x05\x02\x02\u020B\u020C\x05R*\x02\u020C\u020D\x07\x06\x02\x02" +
		"\u020D\u0219\x03\x02\x02\x02\u020E\u020F\x05R*\x02\u020F\u0210\x07\n\x02" +
		"\x02\u0210\u0211\x05\xB6\\\x02\u0211\u0219\x03\x02\x02\x02\u0212\u0213" +
		"\x07\x05\x02\x02\u0213\u0214\x05R*\x02\u0214\u0215\x07\n\x02\x02\u0215" +
		"\u0216\x05\xB6\\\x02\u0216\u0217\x07\x06\x02\x02\u0217\u0219\x03\x02\x02" +
		"\x02\u0218\u0209\x03\x02\x02\x02\u0218\u020A\x03\x02\x02\x02\u0218\u020E" +
		"\x03\x02\x02\x02\u0218\u0212\x03\x02\x02\x02\u0219G\x03\x02\x02\x02\u021A" +
		"\u021F\x05J&\x02\u021B\u021C\x07\r\x02\x02\u021C\u021E\x05J&\x02\u021D" +
		"\u021B\x03\x02\x02\x02\u021E\u0221\x03\x02\x02\x02\u021F\u021D\x03\x02" +
		"\x02\x02\u021F\u0220\x03\x02\x02\x02\u0220I\x03\x02\x02\x02\u0221\u021F" +
		"\x03\x02\x02\x02\u0222\u0223\x05\x06\x04\x02\u0223\u0224\x05L\'\x02\u0224" +
		"\u0225\x05N(\x02\u0225\u0226\x05P)\x02\u0226K\x03\x02\x02\x02\u0227\u0228" +
		"\x05\xB4[\x02\u0228M\x03\x02\x02\x02\u0229\u022A\x07\x0E\x02\x02\u022A" +
		"\u022C\x05\xB8]\x02\u022B\u0229\x03\x02\x02\x02\u022B\u022C\x03\x02\x02" +
		"\x02\u022CO\x03\x02\x02\x02\u022D\u022E\x07\x16\x02\x02\u022E\u022F\x05" +
		"\xB6\\\x02\u022FQ\x03\x02\x02\x02\u0230\u0231\x07\x1A\x02\x02\u0231\u0234" +
		"\x05R*\x02\u0232\u0234\x05T+\x02\u0233\u0230\x03\x02\x02\x02\u0233\u0232" +
		"\x03\x02\x02\x02\u0234S\x03\x02\x02\x02\u0235\u023A\x05V,\x02\u0236\u0237" +
		"\t\x02\x02\x02\u0237\u0239\x05V,\x02\u0238\u0236\x03\x02\x02\x02\u0239" +
		"\u023C\x03\x02\x02\x02\u023A\u0238\x03\x02\x02\x02\u023A\u023B\x03\x02" +
		"\x02\x02\u023BU\x03\x02\x02\x02\u023C\u023A\x03\x02\x02\x02\u023D\u0242" +
		"\x05X-\x02\u023E\u023F\x07\x1D\x02\x02\u023F\u0241\x05X-\x02\u0240\u023E" +
		"\x03\x02\x02\x02\u0241\u0244\x03\x02\x02\x02\u0242\u0240\x03\x02\x02\x02" +
		"\u0242\u0243\x03\x02\x02\x02\u0243W\x03\x02\x02\x02\u0244\u0242\x03\x02" +
		"\x02\x02\u0245\u024A\x05Z.\x02\u0246\u0247\x07\x1E\x02\x02\u0247\u0249" +
		"\x05Z.\x02\u0248\u0246\x03\x02\x02\x02\u0249\u024C\x03\x02\x02\x02\u024A" +
		"\u0248\x03\x02\x02\x02\u024A\u024B\x03\x02\x02\x02\u024BY\x03\x02\x02" +
		"\x02\u024C\u024A\x03\x02\x02\x02\u024D\u0251\x05\\/\x02\u024E\u024F\x05" +
		"\xC4c\x02\u024F\u0250\x05\\/\x02\u0250\u0252\x03\x02\x02\x02\u0251\u024E" +
		"\x03\x02\x02\x02\u0251\u0252\x03\x02\x02\x02\u0252[\x03\x02\x02\x02\u0253" +
		"\u0259\x05^0\x02\u0254\u0255\x05\xC2b\x02\u0255\u0256\x05^0\x02\u0256" +
		"\u0258\x03\x02\x02\x02\u0257\u0254\x03\x02\x02\x02\u0258\u025B\x03\x02" +
		"\x02\x02\u0259\u0257\x03\x02\x02\x02\u0259\u025A\x03\x02\x02\x02\u025A" +
		"]\x03\x02\x02\x02\u025B\u0259\x03\x02\x02\x02\u025C\u0262\x05`1\x02\u025D" +
		"\u025E\x05\xC0a\x02\u025E\u025F\x05`1\x02\u025F\u0261\x03\x02\x02\x02" +
		"\u0260\u025D\x03\x02\x02\x02\u0261\u0264\x03\x02\x02\x02\u0262\u0260\x03" +
		"\x02\x02\x02\u0262\u0263\x03\x02\x02\x02\u0263_\x03\x02\x02\x02\u0264" +
		"\u0262\x03\x02\x02\x02\u0265\u026B\x05b2\x02\u0266\u0267\x05\xBE`\x02" +
		"\u0267\u0268\x05b2\x02\u0268\u026A\x03\x02\x02\x02\u0269\u0266\x03\x02" +
		"\x02\x02\u026A\u026D\x03\x02\x02\x02\u026B\u0269\x03\x02\x02\x02\u026B" +
		"\u026C\x03\x02\x02\x02\u026Ca\x03\x02\x02\x02\u026D\u026B\x03\x02\x02" +
		"\x02\u026E\u0270\x05\xBC_\x02\u026F\u026E\x03\x02\x02\x02\u026F\u0270" +
		"\x03\x02\x02\x02\u0270\u0271\x03\x02\x02\x02\u0271\u0272\x05d3\x02\u0272" +
		"c\x03\x02\x02\x02\u0273\u0277\x05\x92J\x02\u0274\u0277\x05\x8AF\x02\u0275" +
		"\u0277\x05f4\x02\u0276\u0273\x03\x02\x02\x02\u0276\u0274\x03\x02\x02\x02" +
		"\u0276\u0275\x03\x02\x02\x02\u0277e\x03\x02\x02\x02\u0278\u027B\x05h5" +
		"\x02\u0279\u027A\x07\x07\x02\x02\u027A\u027C\x05h5\x02\u027B\u0279\x03" +
		"\x02\x02\x02\u027B\u027C\x03\x02\x02\x02\u027Cg\x03\x02\x02\x02\u027D" +
		"\u0292\x05\b\x05\x02\u027E\u0292\x05\xBA^\x02\u027F\u0292\x05j6\x02\u0280" +
		"\u0292\x05n8\x02\u0281\u0292\x05\x80A\x02\u0282\u0292\x05\x82B\x02\u0283" +
		"\u0292\x05\x88E\x02\u0284\u0285\x07\x05\x02\x02\u0285\u0286\x05R*\x02" +
		"\u0286\u0287\x07\x06\x02\x02\u0287\u0292\x03\x02\x02\x02\u0288\u0289\x07" +
		"\x1F\x02\x02\u0289\u028A\x05\xB6\\\x02\u028A\u028B\x07 \x02\x02\u028B" +
		"\u0292\x03\x02\x02\x02\u028C\u0292\x05\x94K\x02\u028D\u0292\x05\x9AN\x02" +
		"\u028E\u0292\x05\xA0Q\x02\u028F\u0292\x05\xA2R\x02\u0290\u0292\x05\xAC" +
		"W\x02\u0291\u027D\x03\x02\x02\x02\u0291\u027E\x03\x02\x02\x02\u0291\u027F" +
		"\x03\x02\x02\x02\u0291\u0280\x03\x02\x02\x02\u0291\u0281\x03\x02\x02\x02" +
		"\u0291\u0282\x03\x02\x02\x02\u0291\u0283\x03\x02\x02\x02\u0291\u0284\x03" +
		"\x02\x02\x02\u0291\u0288\x03\x02\x02\x02\u0291\u028C\x03\x02\x02\x02\u0291" +
		"\u028D\x03\x02\x02\x02\u0291\u028E\x03\x02\x02\x02\u0291\u028F\x03\x02" +
		"\x02\x02\u0291\u0290\x03\x02\x02\x02\u0292i\x03\x02\x02\x02\u0293\u0294" +
		"\x07\x11\x02\x02\u0294\u029A\x07\x12\x02\x02\u0295\u0296\x07\x11\x02\x02" +
		"\u0296\u0297\x05R*\x02\u0297\u0298\x05l7\x02\u0298\u029A\x03\x02\x02\x02" +
		"\u0299\u0293\x03\x02\x02\x02\u0299\u0295\x03\x02\x02\x02\u029Ak\x03\x02" +
		"\x02\x02\u029B\u02A5\x07\x12\x02\x02\u029C\u029D\x07\x0F\x02\x02\u029D" +
		"\u029E\x05R*\x02\u029E\u029F\x07\x12\x02\x02\u029F\u02A5\x03\x02\x02\x02" +
		"\u02A0\u02A1\x07\n\x02\x02\u02A1\u02A2\x05R*\x02\u02A2\u02A3\x05l7\x02" +
		"\u02A3\u02A5\x03\x02\x02\x02\u02A4\u029B\x03\x02\x02\x02\u02A4\u029C\x03" +
		"\x02\x02\x02\u02A4\u02A0\x03\x02\x02\x02\u02A5m\x03\x02\x02\x02\u02A6" +
		"\u02A7\x07\x17\x02\x02\u02A7\u02AD\x07\x18\x02\x02\u02A8\u02A9\x07\x17" +
		"\x02\x02\u02A9\u02AA\x05p9\x02\u02AA\u02AB\x07\x18\x02\x02\u02AB\u02AD" +
		"\x03\x02\x02\x02\u02AC\u02A6\x03\x02\x02\x02\u02AC\u02A8\x03\x02\x02\x02" +
		"\u02ADo\x03\x02\x02\x02\u02AE\u02B3\x05r:\x02\u02AF\u02B0\x07\n\x02\x02" +
		"\u02B0\u02B2\x05r:\x02\u02B1\u02AF\x03\x02\x02\x02\u02B2\u02B5\x03\x02" +
		"\x02\x02\u02B3\u02B1\x03\x02\x02\x02\u02B3\u02B4\x03\x02\x02\x02\u02B4" +
		"q\x03\x02\x02\x02\u02B5\u02B3\x03\x02\x02\x02\u02B6\u02B7\x05t;\x02\u02B7" +
		"\u02B8\x05v<\x02\u02B8\u02B9\x05x=\x02\u02B9s\x03\x02\x02\x02\u02BA\u02BC" +
		"\x05\xBC_\x02\u02BB\u02BA\x03\x02\x02\x02\u02BB\u02BC\x03\x02\x02\x02" +
		"\u02BC\u02BD\x03\x02\x02\x02\u02BD\u02BE\x05h5\x02\u02BEu\x03\x02\x02" +
		"\x02\u02BF\u02C0\x07\x07\x02\x02\u02C0\u02C2\x05~@\x02\u02C1\u02BF\x03" +
		"\x02\x02\x02\u02C1\u02C2\x03\x02\x02\x02\u02C2w\x03\x02\x02\x02\u02C3" +
		"\u02C4\x07\b\x02\x02\u02C4\u02C6\x05z>\x02\u02C5\u02C3\x03\x02\x02\x02" +
		"\u02C5\u02C6\x03\x02\x02\x02\u02C6y\x03\x02\x02\x02\u02C7\u02CC\x05|?" +
		"\x02\u02C8\u02C9\x07\x04\x02\x02\u02C9\u02CB\x05|?\x02\u02CA\u02C8\x03" +
		"\x02\x02\x02\u02CB\u02CE\x03\x02\x02\x02\u02CC\u02CA\x03\x02\x02\x02\u02CC" +
		"\u02CD\x03\x02\x02\x02\u02CD{\x03\x02\x02\x02\u02CE\u02CC\x03\x02\x02" +
		"\x02\u02CF\u02D2\x05\x06\x04\x02\u02D0\u02D1\x07\x07\x02\x02\u02D1\u02D3" +
		"\x05\f\x07\x02\u02D2\u02D0\x03\x02\x02\x02\u02D2\u02D3\x03\x02\x02\x02" +
		"\u02D3}\x03\x02\x02\x02\u02D4\u02D5\x05h5\x02\u02D5\x7F\x03\x02\x02\x02" +
		"\u02D6\u02D7\x07\x11\x02\x02\u02D7\u02D8\x05R*\x02\u02D8\u02D9\x07!\x02" +
		"\x02\u02D9\u02DA\x05\x84C\x02\u02DA\u02DB\x07\x12\x02\x02\u02DB\x81\x03" +
		"\x02\x02\x02\u02DC\u02DD\x07\x17\x02\x02\u02DD\u02DE\x05n8\x02\u02DE\u02DF" +
		"\x07!\x02\x02\u02DF\u02E0\x05\x84C\x02\u02E0\u02E1\x07\x18\x02\x02\u02E1" +
		"\x83\x03\x02\x02\x02\u02E2\u02E7\x05\x86D\x02\u02E3\u02E4\x07\n\x02\x02" +
		"\u02E4\u02E6\x05\x86D\x02\u02E5\u02E3\x03\x02\x02\x02\u02E6\u02E9\x03" +
		"\x02\x02\x02\u02E7\u02E5\x03\x02\x02\x02\u02E7\u02E8\x03\x02\x02\x02\u02E8" +
		"\x85\x03\x02\x02\x02\u02E9\u02E7\x03\x02\x02\x02\u02EA\u02F4\x05R*\x02" +
		"\u02EB\u02EC\x05R*\x02\u02EC\u02ED\x07\"\x02\x02\u02ED\u02EE\x05R*\x02" +
		"\u02EE\u02F4\x03\x02\x02\x02\u02EF\u02F0\x05n8\x02\u02F0\u02F1\x07#\x02" +
		"\x02\u02F1\u02F2\x05R*\x02\u02F2\u02F4\x03\x02\x02\x02\u02F3\u02EA\x03" +
		"\x02\x02\x02\u02F3\u02EB\x03\x02\x02\x02\u02F3\u02EF\x03\x02\x02\x02\u02F4" +
		"\x87\x03\x02\x02\x02\u02F5\u02F7\x07\v\x02\x02\u02F6\u02F8\x05\xB6\\\x02" +
		"\u02F7\u02F6\x03\x02\x02\x02\u02F7\u02F8\x03\x02\x02\x02\u02F8\u02F9\x03" +
		"\x02\x02\x02\u02F9\u02FA\x07\f\x02\x02\u02FA\x89\x03\x02\x02\x02\u02FB" +
		"\u02FD\bF\x01\x02\u02FC\u02FE\x05h5\x02\u02FD\u02FC\x03\x02\x02\x02\u02FD" +
		"\u02FE\x03\x02\x02\x02\u02FE\u02FF\x03\x02\x02\x02\u02FF\u0300\x07\x14" +
		"\x02\x02\u0300\u0304\x05\x06\x04\x02\u0301\u0302\x07\x03\x02\x02\u0302" +
		"\u0305\x05\x06\x04\x02\u0303\u0305\x05\x8CG\x02\u0304\u0301\x03\x02\x02" +
		"\x02\u0304\u0303\x03\x02\x02\x02\u0305\u0310\x03\x02\x02\x02\u0306\u0307" +
		"\f\x03\x02\x02\u0307\u0308\x07\x14\x02\x02\u0308\u030C\x05\x06\x04\x02" +
		"\u0309\u030A\x07\x03\x02\x02\u030A\u030D\x05\x06\x04\x02\u030B\u030D\x05" +
		"\x8CG\x02\u030C\u0309\x03\x02\x02\x02\u030C\u030B\x03\x02\x02\x02\u030D" +
		"\u030F\x03\x02\x02\x02\u030E\u0306\x03\x02\x02\x02\u030F\u0312\x03\x02" +
		"\x02\x02\u0310\u030E\x03\x02\x02\x02\u0310\u0311\x03\x02\x02\x02\u0311" +
		"\x8B\x03\x02\x02\x02\u0312\u0310\x03\x02\x02\x02\u0313\u0315\x07\v\x02" +
		"\x02\u0314\u0316\x05\x8EH\x02\u0315\u0314\x03\x02\x02\x02\u0315\u0316" +
		"\x03\x02\x02\x02\u0316\u0317\x03\x02\x02\x02\u0317\u0318\x07\f\x02\x02" +
		"\u0318\x8D\x03\x02\x02\x02\u0319\u031E\x05\x90I\x02\u031A\u031B\x07\n" +
		"\x02\x02\u031B\u031D\x05\x90I\x02\u031C\u031A\x03\x02\x02\x02\u031D\u0320" +
		"\x03\x02\x02\x02\u031E\u031C\x03\x02\x02\x02\u031E\u031F\x03\x02\x02\x02" +
		"\u031F\x8F\x03\x02\x02\x02\u0320\u031E\x03\x02\x02\x02\u0321\u0324\x05" +
		"\b\x05\x02\u0322\u0324\x05\x06\x04\x02\u0323\u0321\x03\x02\x02\x02\u0323" +
		"\u0322\x03\x02\x02\x02\u0324\u0325\x03\x02\x02\x02\u0325\u0326\x07\x1B" +
		"\x02\x02\u0326\u0327\x05R*\x02\u0327\x91\x03\x02\x02\x02\u0328\u0329\x05" +
		"f4\x02\u0329\u032A\x05\xB4[\x02\u032A\x93\x03\x02\x02\x02\u032B\u032C" +
		"\x07$\x02\x02\u032C\u032D\x05\x96L\x02\u032D\u032E\x07 \x02\x02\u032E" +
		"\x95\x03\x02\x02\x02\u032F\u0334\x05\x98M\x02\u0330\u0331\x07\r\x02\x02" +
		"\u0331\u0333\x05\x98M\x02\u0332\u0330\x03\x02\x02\x02\u0333\u0336\x03" +
		"\x02\x02\x02\u0334\u0332\x03\x02\x02\x02\u0334\u0335\x03\x02\x02\x02\u0335" +
		"\x97\x03\x02\x02\x02\u0336\u0334\x03\x02\x02\x02\u0337\u0338\x05\xB8]" +
		"\x02\u0338\u0339\x05P)\x02\u0339\x99\x03\x02\x02\x02\u033A\u033B\x07%" +
		"\x02\x02\u033B\u033C\x05R*\x02\u033C\u033D\x07&\x02\x02\u033D\u033E\x05" +
		"\x9CO\x02\u033E\u033F\x07 \x02\x02\u033F\x9B\x03\x02\x02\x02\u0340\u0345" +
		"\x05\x9EP\x02\u0341\u0342\x07\r\x02\x02\u0342\u0344\x05\x9EP\x02\u0343" +
		"\u0341\x03\x02\x02\x02\u0344\u0347\x03\x02\x02\x02\u0345\u0343\x03\x02" +
		"\x02\x02\u0345\u0346\x03\x02\x02\x02\u0346\x9D\x03\x02\x02\x02\u0347\u0345" +
		"\x03\x02\x02\x02\u0348\u0349\x05R*\x02\u0349\u034A\x05N(\x02\u034A\u034B" +
		"\x05P)\x02\u034B\x9F\x03\x02\x02\x02\u034C\u034D\x07\'\x02\x02\u034D\u034E" +
		"\x05\x9CO\x02\u034E\u034F\x07 \x02\x02\u034F\u035E\x03\x02\x02\x02\u0350" +
		"\u0351\x07\'\x02\x02\u0351\u0352\x07(\x02\x02\u0352\u0353\x05R*\x02\u0353" +
		"\u0354\x05P)\x02\u0354\u0355\x07 \x02\x02\u0355\u035E\x03\x02\x02\x02" +
		"\u0356\u0357\x07\'\x02\x02\u0357\u0358\x05\x9CO\x02\u0358\u0359\x07(\x02" +
		"\x02\u0359\u035A\x05R*\x02\u035A\u035B\x05P)\x02\u035B\u035C\x07 \x02" +
		"\x02\u035C\u035E\x03\x02\x02\x02\u035D\u034C\x03\x02\x02\x02\u035D\u0350" +
		"\x03\x02\x02\x02\u035D\u0356\x03\x02\x02\x02\u035E\xA1\x03\x02\x02\x02" +
		"\u035F\u0360\x07\x15\x02\x02\u0360\u0361\x05\x06\x04\x02\u0361\u0362\x07" +
		"\b\x02\x02\u0362\u0363\x05\f\x07\x02\u0363\u0370\x03\x02\x02\x02\u0364" +
		"\u0365\x07\x15\x02\x02\u0365\u0366\x05\xA4S\x02\u0366\u0367\x07\x07\x02" +
		"\x02\u0367\u0368\x05\xA4S\x02\u0368\u0369\x07\b\x02\x02\u0369\u036A\x05" +
		"\xA6T\x02\u036A\u0370\x03\x02\x02\x02\u036B\u036C\x07\x15\x02\x02\u036C" +
		"\u036D\x05\xA8U\x02\u036D\u036E\x07 \x02\x02\u036E\u0370\x03\x02\x02\x02" +
		"\u036F\u035F\x03\x02\x02\x02\u036F\u0364\x03\x02\x02\x02\u036F\u036B\x03" +
		"\x02\x02\x02\u0370\xA3\x03\x02\x02\x02\u0371\u0374\x05\x06\x04\x02\u0372" +
		"\u0374\x05\b\x05\x02\u0373\u0371\x03\x02\x02\x02\u0373\u0372\x03\x02\x02" +
		"\x02\u0374\xA5\x03\x02\x02\x02\u0375\u0378\x05\f\x07\x02\u0376\u0378\x05" +
		"\b\x05\x02\u0377\u0375\x03\x02\x02\x02\u0377\u0376\x03\x02\x02\x02\u0378" +
		"\xA7\x03\x02\x02\x02\u0379\u037E\x05\xAAV\x02\u037A\u037B\x07\r\x02\x02" +
		"\u037B\u037D\x05\xAAV\x02\u037C\u037A\x03\x02\x02\x02\u037D\u0380\x03" +
		"\x02\x02\x02\u037E\u037C\x03\x02\x02\x02\u037E\u037F\x03\x02\x02\x02\u037F" +
		"\xA9\x03\x02\x02\x02\u0380\u037E\x03\x02\x02\x02\u0381\u0382\x05\xB4[" +
		"\x02\u0382\u0383\x05N(\x02\u0383\u0384\x05P)\x02\u0384\xAB\x03\x02\x02" +
		"\x02\u0385\u0386\x07)\x02\x02\u0386\u0389\x05\xB6\\\x02\u0387\u0388\x07" +
		"&\x02\x02\u0388\u038A\x05\x9CO\x02\u0389\u0387\x03\x02\x02\x02\u0389\u038A" +
		"\x03\x02\x02\x02\u038A\u038B\x03\x02\x02\x02\u038B\u038C\x05\xAEX\x02" +
		"\u038C\xAD\x03\x02\x02\x02\u038D\u038E\x07\x1A\x02\x02\u038E\u038F\x05" +
		"\xB0Y\x02\u038F\u0390\x07 \x02\x02\u0390\u039C\x03\x02\x02\x02\u0391\u0392" +
		"\x07\x1A\x02\x02\u0392\u0393\x05\xB0Y\x02\u0393\u0394\x07(\x02\x02\u0394" +
		"\u0395\x05\xB6\\\x02\u0395\u0396\x07 \x02\x02\u0396\u039C\x03\x02\x02" +
		"\x02\u0397\u0398\x07(\x02\x02\u0398\u0399\x05\xB6\\\x02\u0399\u039A\x07" +
		" \x02\x02\u039A\u039C\x03\x02\x02\x02\u039B\u038D\x03\x02\x02\x02\u039B" +
		"\u0391\x03\x02\x02\x02\u039B\u0397\x03\x02\x02\x02\u039C\xAF\x03\x02\x02" +
		"\x02\u039D\u03A2\x05\xB2Z\x02\u039E\u039F\x07\r\x02\x02\u039F\u03A1\x05" +
		"\xB2Z\x02\u03A0\u039E\x03\x02\x02\x02\u03A1\u03A4\x03\x02\x02\x02\u03A2" +
		"\u03A0\x03\x02\x02\x02\u03A2\u03A3\x03\x02\x02\x02\u03A3\xB1\x03\x02\x02" +
		"\x02\u03A4\u03A2\x03\x02\x02\x02\u03A5\u03A6\x05\xA4S\x02\u03A6\u03A7" +
		"\x07\x07\x02\x02\u03A7\u03A9\x03\x02\x02\x02\u03A8\u03A5\x03\x02\x02\x02" +
		"\u03A8\u03A9\x03\x02\x02\x02\u03A9\u03AA\x03\x02\x02\x02\u03AA\u03AB\x05" +
		"R*\x02\u03AB\u03AC\x05N(\x02\u03AC\u03AD\x05P)\x02\u03AD\xB3\x03\x02\x02" +
		"\x02\u03AE\u03B0\x07\x05\x02\x02\u03AF\u03B1\x05\xB6\\\x02\u03B0\u03AF" +
		"\x03\x02\x02\x02\u03B0\u03B1\x03\x02\x02\x02\u03B1\u03B2\x03\x02\x02\x02" +
		"\u03B2\u03B3\x07\x06\x02\x02\u03B3\xB5\x03\x02\x02\x02\u03B4\u03B9\x05" +
		"R*\x02\u03B5\u03B6\x07\n\x02\x02\u03B6\u03B8\x05R*\x02\u03B7\u03B5\x03" +
		"\x02\x02\x02\u03B8\u03BB\x03\x02\x02\x02\u03B9\u03B7\x03\x02\x02\x02\u03B9" +
		"\u03BA\x03\x02\x02\x02\u03BA\xB7\x03\x02\x02\x02\u03BB\u03B9\x03\x02\x02" +
		"\x02\u03BC\u03C1\x05\xB6\\\x02\u03BD\u03BE\x07\r\x02\x02\u03BE\u03C0\x05" +
		"\xB6\\\x02\u03BF\u03BD\x03\x02\x02\x02\u03C0\u03C3\x03\x02\x02\x02\u03C1" +
		"\u03BF\x03\x02\x02\x02\u03C1\u03C2\x03\x02\x02\x02\u03C2\xB9\x03\x02\x02" +
		"\x02\u03C3\u03C1\x03\x02\x02\x02\u03C4\u03CE\x05\x0E\b\x02\u03C5\u03CE" +
		"\x05\f\x07\x02\u03C6\u03CE\x05\n\x06\x02\u03C7\u03CE\x05\x06\x04\x02\u03C8" +
		"\u03CA\x05\x10\t\x02\u03C9\u03C8\x03\x02\x02\x02\u03CA\u03CB\x03\x02\x02" +
		"\x02\u03CB\u03C9\x03\x02\x02\x02\u03CB\u03CC\x03\x02\x02\x02\u03CC\u03CE" +
		"\x03\x02\x02\x02\u03CD\u03C4\x03\x02\x02\x02\u03CD\u03C5\x03\x02\x02\x02" +
		"\u03CD\u03C6\x03\x02\x02\x02\u03CD\u03C7\x03\x02\x02\x02\u03CD\u03C9\x03" +
		"\x02\x02\x02\u03CE\xBB\x03\x02\x02\x02\u03CF\u03D0\t\x03\x02\x02\u03D0" +
		"\xBD\x03\x02\x02\x02\u03D1\u03D2\t\x04\x02\x02\u03D2\xBF\x03\x02\x02\x02" +
		"\u03D3\u03D4\t\x05\x02\x02\u03D4\xC1\x03\x02\x02\x02\u03D5\u03D6\t\x06" +
		"\x02\x02\u03D6\xC3\x03\x02\x02\x02\u03D7\u03D8\t\x07\x02\x02\u03D8\xC5" +
		"\x03\x02\x02\x02\u03D9\u03DE\x05\xC8e\x02\u03DA\u03DB\x07\r\x02\x02\u03DB" +
		"\u03DD\x05\xC8e\x02\u03DC\u03DA\x03\x02\x02\x02\u03DD\u03E0\x03\x02\x02" +
		"\x02\u03DE\u03DC\x03\x02\x02\x02\u03DE\u03DF\x03\x02\x02\x02\u03DF\xC7" +
		"\x03\x02\x02\x02\u03E0\u03DE\x03\x02\x02\x02\u03E1\u03E2\x05\x06\x04\x02" +
		"\u03E2\u03E3\x05L\'\x02\u03E3\u03E4\x05N(\x02\u03E4\u03E5\x05\xCAf\x02" +
		"\u03E5\xC9\x03\x02\x02\x02\u03E6\u03E7\x07A\x02\x02\u03E7\u03E8\x05\x84" +
		"C\x02\u03E8\xCB\x03\x02\x02\x02L\xCF\xD6\xF6\u0100\u0113\u011D\u0130\u013B" +
		"\u0141\u0148\u0154\u015B\u0161\u0168\u016D\u0178\u0184\u0188\u01CF\u01D7" +
		"\u01DB\u01E6\u01FD\u0218\u021F\u022B\u0233\u023A\u0242\u024A\u0251\u0259" +
		"\u0262\u026B\u026F\u0276\u027B\u0291\u0299\u02A4\u02AC\u02B3\u02BB\u02C1" +
		"\u02C5\u02CC\u02D2\u02E7\u02F3\u02F7\u02FD\u0304\u030C\u0310\u0315\u031E" +
		"\u0323\u0334\u0345\u035D\u036F\u0373\u0377\u037E\u0389\u039B\u03A2\u03A8" +
		"\u03B0\u03B9\u03C1\u03CB\u03CD\u03DE";
	public static readonly _serializedATN: string = Utils.join(
		[
			ErlangParser._serializedATNSegment0,
			ErlangParser._serializedATNSegment1,
		],
		"",
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!ErlangParser.__ATN) {
			ErlangParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(ErlangParser._serializedATN));
		}

		return ErlangParser.__ATN;
	}

}

export class FormsContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(ErlangParser.EOF, 0); }
	public form(): FormContext[];
	public form(i: number): FormContext;
	public form(i?: number): FormContext | FormContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FormContext);
		} else {
			return this.getRuleContext(i, FormContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_forms; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterForms) {
			listener.enterForms(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitForms) {
			listener.exitForms(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitForms) {
			return visitor.visitForms(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FormContext extends ParserRuleContext {
	public attribute(): AttributeContext | undefined {
		return this.tryGetRuleContext(0, AttributeContext);
	}
	public function(): FunctionContext | undefined {
		return this.tryGetRuleContext(0, FunctionContext);
	}
	public ruleClauses(): RuleClausesContext | undefined {
		return this.tryGetRuleContext(0, RuleClausesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_form; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterForm) {
			listener.enterForm(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitForm) {
			listener.exitForm(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitForm) {
			return visitor.visitForm(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TokAtomContext extends ParserRuleContext {
	public TokAtom(): TerminalNode { return this.getToken(ErlangParser.TokAtom, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_tokAtom; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterTokAtom) {
			listener.enterTokAtom(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitTokAtom) {
			listener.exitTokAtom(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitTokAtom) {
			return visitor.visitTokAtom(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TokVarContext extends ParserRuleContext {
	public TokVar(): TerminalNode { return this.getToken(ErlangParser.TokVar, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_tokVar; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterTokVar) {
			listener.enterTokVar(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitTokVar) {
			listener.exitTokVar(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitTokVar) {
			return visitor.visitTokVar(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TokFloatContext extends ParserRuleContext {
	public TokFloat(): TerminalNode { return this.getToken(ErlangParser.TokFloat, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_tokFloat; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterTokFloat) {
			listener.enterTokFloat(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitTokFloat) {
			listener.exitTokFloat(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitTokFloat) {
			return visitor.visitTokFloat(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TokIntegerContext extends ParserRuleContext {
	public TokInteger(): TerminalNode { return this.getToken(ErlangParser.TokInteger, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_tokInteger; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterTokInteger) {
			listener.enterTokInteger(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitTokInteger) {
			listener.exitTokInteger(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitTokInteger) {
			return visitor.visitTokInteger(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TokCharContext extends ParserRuleContext {
	public TokChar(): TerminalNode { return this.getToken(ErlangParser.TokChar, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_tokChar; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterTokChar) {
			listener.enterTokChar(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitTokChar) {
			listener.exitTokChar(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitTokChar) {
			return visitor.visitTokChar(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TokStringContext extends ParserRuleContext {
	public TokString(): TerminalNode { return this.getToken(ErlangParser.TokString, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_tokString; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterTokString) {
			listener.enterTokString(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitTokString) {
			listener.exitTokString(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitTokString) {
			return visitor.visitTokString(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AttributeContext extends ParserRuleContext {
	public tokAtom(): TokAtomContext | undefined {
		return this.tryGetRuleContext(0, TokAtomContext);
	}
	public attrVal(): AttrValContext | undefined {
		return this.tryGetRuleContext(0, AttrValContext);
	}
	public typedAttrVal(): TypedAttrValContext | undefined {
		return this.tryGetRuleContext(0, TypedAttrValContext);
	}
	public AttrName(): TerminalNode | undefined { return this.tryGetToken(ErlangParser.AttrName, 0); }
	public typeSpec(): TypeSpecContext | undefined {
		return this.tryGetRuleContext(0, TypeSpecContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_attribute; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterAttribute) {
			listener.enterAttribute(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitAttribute) {
			listener.exitAttribute(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitAttribute) {
			return visitor.visitAttribute(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeSpecContext extends ParserRuleContext {
	public specFun(): SpecFunContext {
		return this.getRuleContext(0, SpecFunContext);
	}
	public typeSigs(): TypeSigsContext {
		return this.getRuleContext(0, TypeSigsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_typeSpec; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterTypeSpec) {
			listener.enterTypeSpec(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitTypeSpec) {
			listener.exitTypeSpec(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitTypeSpec) {
			return visitor.visitTypeSpec(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SpecFunContext extends ParserRuleContext {
	public tokAtom(): TokAtomContext[];
	public tokAtom(i: number): TokAtomContext;
	public tokAtom(i?: number): TokAtomContext | TokAtomContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TokAtomContext);
		} else {
			return this.getRuleContext(i, TokAtomContext);
		}
	}
	public tokInteger(): TokIntegerContext | undefined {
		return this.tryGetRuleContext(0, TokIntegerContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_specFun; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterSpecFun) {
			listener.enterSpecFun(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitSpecFun) {
			listener.exitSpecFun(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitSpecFun) {
			return visitor.visitSpecFun(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypedAttrValContext extends ParserRuleContext {
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public typedRecordFields(): TypedRecordFieldsContext | undefined {
		return this.tryGetRuleContext(0, TypedRecordFieldsContext);
	}
	public topType(): TopTypeContext | undefined {
		return this.tryGetRuleContext(0, TopTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_typedAttrVal; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterTypedAttrVal) {
			listener.enterTypedAttrVal(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitTypedAttrVal) {
			listener.exitTypedAttrVal(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitTypedAttrVal) {
			return visitor.visitTypedAttrVal(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypedRecordFieldsContext extends ParserRuleContext {
	public typedExprs(): TypedExprsContext {
		return this.getRuleContext(0, TypedExprsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_typedRecordFields; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterTypedRecordFields) {
			listener.enterTypedRecordFields(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitTypedRecordFields) {
			listener.exitTypedRecordFields(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitTypedRecordFields) {
			return visitor.visitTypedRecordFields(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypedExprsContext extends ParserRuleContext {
	public typedExpr(): TypedExprContext | undefined {
		return this.tryGetRuleContext(0, TypedExprContext);
	}
	public typedExprs(): TypedExprsContext | undefined {
		return this.tryGetRuleContext(0, TypedExprsContext);
	}
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	public exprs(): ExprsContext | undefined {
		return this.tryGetRuleContext(0, ExprsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_typedExprs; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterTypedExprs) {
			listener.enterTypedExprs(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitTypedExprs) {
			listener.exitTypedExprs(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitTypedExprs) {
			return visitor.visitTypedExprs(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypedExprContext extends ParserRuleContext {
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public topType(): TopTypeContext {
		return this.getRuleContext(0, TopTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_typedExpr; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterTypedExpr) {
			listener.enterTypedExpr(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitTypedExpr) {
			listener.exitTypedExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitTypedExpr) {
			return visitor.visitTypedExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeSigsContext extends ParserRuleContext {
	public typeSig(): TypeSigContext[];
	public typeSig(i: number): TypeSigContext;
	public typeSig(i?: number): TypeSigContext | TypeSigContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeSigContext);
		} else {
			return this.getRuleContext(i, TypeSigContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_typeSigs; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterTypeSigs) {
			listener.enterTypeSigs(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitTypeSigs) {
			listener.exitTypeSigs(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitTypeSigs) {
			return visitor.visitTypeSigs(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeSigContext extends ParserRuleContext {
	public funType(): FunTypeContext {
		return this.getRuleContext(0, FunTypeContext);
	}
	public typeGuards(): TypeGuardsContext | undefined {
		return this.tryGetRuleContext(0, TypeGuardsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_typeSig; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterTypeSig) {
			listener.enterTypeSig(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitTypeSig) {
			listener.exitTypeSig(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitTypeSig) {
			return visitor.visitTypeSig(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeGuardsContext extends ParserRuleContext {
	public typeGuard(): TypeGuardContext[];
	public typeGuard(i: number): TypeGuardContext;
	public typeGuard(i?: number): TypeGuardContext | TypeGuardContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeGuardContext);
		} else {
			return this.getRuleContext(i, TypeGuardContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_typeGuards; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterTypeGuards) {
			listener.enterTypeGuards(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitTypeGuards) {
			listener.exitTypeGuards(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitTypeGuards) {
			return visitor.visitTypeGuards(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeGuardContext extends ParserRuleContext {
	public tokAtom(): TokAtomContext | undefined {
		return this.tryGetRuleContext(0, TokAtomContext);
	}
	public topTypes(): TopTypesContext | undefined {
		return this.tryGetRuleContext(0, TopTypesContext);
	}
	public tokVar(): TokVarContext | undefined {
		return this.tryGetRuleContext(0, TokVarContext);
	}
	public topType(): TopTypeContext | undefined {
		return this.tryGetRuleContext(0, TopTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_typeGuard; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterTypeGuard) {
			listener.enterTypeGuard(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitTypeGuard) {
			listener.exitTypeGuard(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitTypeGuard) {
			return visitor.visitTypeGuard(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TopTypesContext extends ParserRuleContext {
	public topType(): TopTypeContext[];
	public topType(i: number): TopTypeContext;
	public topType(i?: number): TopTypeContext | TopTypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TopTypeContext);
		} else {
			return this.getRuleContext(i, TopTypeContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_topTypes; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterTopTypes) {
			listener.enterTopTypes(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitTopTypes) {
			listener.exitTopTypes(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitTopTypes) {
			return visitor.visitTopTypes(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TopTypeContext extends ParserRuleContext {
	public topType100(): TopType100Context {
		return this.getRuleContext(0, TopType100Context);
	}
	public tokVar(): TokVarContext | undefined {
		return this.tryGetRuleContext(0, TokVarContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_topType; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterTopType) {
			listener.enterTopType(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitTopType) {
			listener.exitTopType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitTopType) {
			return visitor.visitTopType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TopType100Context extends ParserRuleContext {
	public type200(): Type200Context {
		return this.getRuleContext(0, Type200Context);
	}
	public topType100(): TopType100Context | undefined {
		return this.tryGetRuleContext(0, TopType100Context);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_topType100; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterTopType100) {
			listener.enterTopType100(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitTopType100) {
			listener.exitTopType100(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitTopType100) {
			return visitor.visitTopType100(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Type200Context extends ParserRuleContext {
	public type300(): Type300Context[];
	public type300(i: number): Type300Context;
	public type300(i?: number): Type300Context | Type300Context[] {
		if (i === undefined) {
			return this.getRuleContexts(Type300Context);
		} else {
			return this.getRuleContext(i, Type300Context);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_type200; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterType200) {
			listener.enterType200(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitType200) {
			listener.exitType200(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitType200) {
			return visitor.visitType200(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Type300Context extends ParserRuleContext {
	public type300(): Type300Context | undefined {
		return this.tryGetRuleContext(0, Type300Context);
	}
	public addOp(): AddOpContext | undefined {
		return this.tryGetRuleContext(0, AddOpContext);
	}
	public type400(): Type400Context {
		return this.getRuleContext(0, Type400Context);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_type300; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterType300) {
			listener.enterType300(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitType300) {
			listener.exitType300(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitType300) {
			return visitor.visitType300(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Type400Context extends ParserRuleContext {
	public type400(): Type400Context | undefined {
		return this.tryGetRuleContext(0, Type400Context);
	}
	public multOp(): MultOpContext | undefined {
		return this.tryGetRuleContext(0, MultOpContext);
	}
	public type500(): Type500Context {
		return this.getRuleContext(0, Type500Context);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_type400; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterType400) {
			listener.enterType400(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitType400) {
			listener.exitType400(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitType400) {
			return visitor.visitType400(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Type500Context extends ParserRuleContext {
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public prefixOp(): PrefixOpContext | undefined {
		return this.tryGetRuleContext(0, PrefixOpContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_type500; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterType500) {
			listener.enterType500(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitType500) {
			listener.exitType500(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitType500) {
			return visitor.visitType500(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeContext extends ParserRuleContext {
	public topType(): TopTypeContext | undefined {
		return this.tryGetRuleContext(0, TopTypeContext);
	}
	public tokVar(): TokVarContext | undefined {
		return this.tryGetRuleContext(0, TokVarContext);
	}
	public tokAtom(): TokAtomContext[];
	public tokAtom(i: number): TokAtomContext;
	public tokAtom(i?: number): TokAtomContext | TokAtomContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TokAtomContext);
		} else {
			return this.getRuleContext(i, TokAtomContext);
		}
	}
	public topTypes(): TopTypesContext | undefined {
		return this.tryGetRuleContext(0, TopTypesContext);
	}
	public fieldTypes(): FieldTypesContext | undefined {
		return this.tryGetRuleContext(0, FieldTypesContext);
	}
	public binaryType(): BinaryTypeContext | undefined {
		return this.tryGetRuleContext(0, BinaryTypeContext);
	}
	public tokInteger(): TokIntegerContext | undefined {
		return this.tryGetRuleContext(0, TokIntegerContext);
	}
	public funType100(): FunType100Context | undefined {
		return this.tryGetRuleContext(0, FunType100Context);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_type; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterType) {
			listener.enterType(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitType) {
			listener.exitType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitType) {
			return visitor.visitType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunType100Context extends ParserRuleContext {
	public topType(): TopTypeContext | undefined {
		return this.tryGetRuleContext(0, TopTypeContext);
	}
	public funType(): FunTypeContext | undefined {
		return this.tryGetRuleContext(0, FunTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_funType100; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterFunType100) {
			listener.enterFunType100(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitFunType100) {
			listener.exitFunType100(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitFunType100) {
			return visitor.visitFunType100(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunTypeContext extends ParserRuleContext {
	public topType(): TopTypeContext {
		return this.getRuleContext(0, TopTypeContext);
	}
	public topTypes(): TopTypesContext | undefined {
		return this.tryGetRuleContext(0, TopTypesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_funType; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterFunType) {
			listener.enterFunType(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitFunType) {
			listener.exitFunType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitFunType) {
			return visitor.visitFunType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FieldTypesContext extends ParserRuleContext {
	public fieldType(): FieldTypeContext[];
	public fieldType(i: number): FieldTypeContext;
	public fieldType(i?: number): FieldTypeContext | FieldTypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FieldTypeContext);
		} else {
			return this.getRuleContext(i, FieldTypeContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_fieldTypes; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterFieldTypes) {
			listener.enterFieldTypes(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitFieldTypes) {
			listener.exitFieldTypes(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitFieldTypes) {
			return visitor.visitFieldTypes(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FieldTypeContext extends ParserRuleContext {
	public tokAtom(): TokAtomContext {
		return this.getRuleContext(0, TokAtomContext);
	}
	public topType(): TopTypeContext {
		return this.getRuleContext(0, TopTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_fieldType; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterFieldType) {
			listener.enterFieldType(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitFieldType) {
			listener.exitFieldType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitFieldType) {
			return visitor.visitFieldType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BinaryTypeContext extends ParserRuleContext {
	public binBaseType(): BinBaseTypeContext | undefined {
		return this.tryGetRuleContext(0, BinBaseTypeContext);
	}
	public binUnitType(): BinUnitTypeContext | undefined {
		return this.tryGetRuleContext(0, BinUnitTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_binaryType; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterBinaryType) {
			listener.enterBinaryType(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitBinaryType) {
			listener.exitBinaryType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitBinaryType) {
			return visitor.visitBinaryType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BinBaseTypeContext extends ParserRuleContext {
	public tokVar(): TokVarContext {
		return this.getRuleContext(0, TokVarContext);
	}
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_binBaseType; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterBinBaseType) {
			listener.enterBinBaseType(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitBinBaseType) {
			listener.exitBinBaseType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitBinBaseType) {
			return visitor.visitBinBaseType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BinUnitTypeContext extends ParserRuleContext {
	public tokVar(): TokVarContext[];
	public tokVar(i: number): TokVarContext;
	public tokVar(i?: number): TokVarContext | TokVarContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TokVarContext);
		} else {
			return this.getRuleContext(i, TokVarContext);
		}
	}
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_binUnitType; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterBinUnitType) {
			listener.enterBinUnitType(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitBinUnitType) {
			listener.exitBinUnitType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitBinUnitType) {
			return visitor.visitBinUnitType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AttrValContext extends ParserRuleContext {
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public exprs(): ExprsContext | undefined {
		return this.tryGetRuleContext(0, ExprsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_attrVal; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterAttrVal) {
			listener.enterAttrVal(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitAttrVal) {
			listener.exitAttrVal(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitAttrVal) {
			return visitor.visitAttrVal(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionContext extends ParserRuleContext {
	public functionClause(): FunctionClauseContext[];
	public functionClause(i: number): FunctionClauseContext;
	public functionClause(i?: number): FunctionClauseContext | FunctionClauseContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FunctionClauseContext);
		} else {
			return this.getRuleContext(i, FunctionClauseContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_function; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterFunction) {
			listener.enterFunction(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitFunction) {
			listener.exitFunction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitFunction) {
			return visitor.visitFunction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionClauseContext extends ParserRuleContext {
	public tokAtom(): TokAtomContext {
		return this.getRuleContext(0, TokAtomContext);
	}
	public clauseArgs(): ClauseArgsContext {
		return this.getRuleContext(0, ClauseArgsContext);
	}
	public clauseGuard(): ClauseGuardContext {
		return this.getRuleContext(0, ClauseGuardContext);
	}
	public clauseBody(): ClauseBodyContext {
		return this.getRuleContext(0, ClauseBodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_functionClause; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterFunctionClause) {
			listener.enterFunctionClause(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitFunctionClause) {
			listener.exitFunctionClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitFunctionClause) {
			return visitor.visitFunctionClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClauseArgsContext extends ParserRuleContext {
	public argumentList(): ArgumentListContext {
		return this.getRuleContext(0, ArgumentListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_clauseArgs; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterClauseArgs) {
			listener.enterClauseArgs(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitClauseArgs) {
			listener.exitClauseArgs(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitClauseArgs) {
			return visitor.visitClauseArgs(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClauseGuardContext extends ParserRuleContext {
	public guard(): GuardContext | undefined {
		return this.tryGetRuleContext(0, GuardContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_clauseGuard; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterClauseGuard) {
			listener.enterClauseGuard(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitClauseGuard) {
			listener.exitClauseGuard(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitClauseGuard) {
			return visitor.visitClauseGuard(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClauseBodyContext extends ParserRuleContext {
	public exprs(): ExprsContext {
		return this.getRuleContext(0, ExprsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_clauseBody; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterClauseBody) {
			listener.enterClauseBody(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitClauseBody) {
			listener.exitClauseBody(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitClauseBody) {
			return visitor.visitClauseBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExprContext extends ParserRuleContext {
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	public expr100(): Expr100Context | undefined {
		return this.tryGetRuleContext(0, Expr100Context);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_expr; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterExpr) {
			listener.enterExpr(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitExpr) {
			listener.exitExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitExpr) {
			return visitor.visitExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Expr100Context extends ParserRuleContext {
	public expr150(): Expr150Context[];
	public expr150(i: number): Expr150Context;
	public expr150(i?: number): Expr150Context | Expr150Context[] {
		if (i === undefined) {
			return this.getRuleContexts(Expr150Context);
		} else {
			return this.getRuleContext(i, Expr150Context);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_expr100; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterExpr100) {
			listener.enterExpr100(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitExpr100) {
			listener.exitExpr100(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitExpr100) {
			return visitor.visitExpr100(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Expr150Context extends ParserRuleContext {
	public expr160(): Expr160Context[];
	public expr160(i: number): Expr160Context;
	public expr160(i?: number): Expr160Context | Expr160Context[] {
		if (i === undefined) {
			return this.getRuleContexts(Expr160Context);
		} else {
			return this.getRuleContext(i, Expr160Context);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_expr150; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterExpr150) {
			listener.enterExpr150(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitExpr150) {
			listener.exitExpr150(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitExpr150) {
			return visitor.visitExpr150(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Expr160Context extends ParserRuleContext {
	public expr200(): Expr200Context[];
	public expr200(i: number): Expr200Context;
	public expr200(i?: number): Expr200Context | Expr200Context[] {
		if (i === undefined) {
			return this.getRuleContexts(Expr200Context);
		} else {
			return this.getRuleContext(i, Expr200Context);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_expr160; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterExpr160) {
			listener.enterExpr160(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitExpr160) {
			listener.exitExpr160(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitExpr160) {
			return visitor.visitExpr160(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Expr200Context extends ParserRuleContext {
	public expr300(): Expr300Context[];
	public expr300(i: number): Expr300Context;
	public expr300(i?: number): Expr300Context | Expr300Context[] {
		if (i === undefined) {
			return this.getRuleContexts(Expr300Context);
		} else {
			return this.getRuleContext(i, Expr300Context);
		}
	}
	public compOp(): CompOpContext | undefined {
		return this.tryGetRuleContext(0, CompOpContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_expr200; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterExpr200) {
			listener.enterExpr200(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitExpr200) {
			listener.exitExpr200(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitExpr200) {
			return visitor.visitExpr200(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Expr300Context extends ParserRuleContext {
	public expr400(): Expr400Context[];
	public expr400(i: number): Expr400Context;
	public expr400(i?: number): Expr400Context | Expr400Context[] {
		if (i === undefined) {
			return this.getRuleContexts(Expr400Context);
		} else {
			return this.getRuleContext(i, Expr400Context);
		}
	}
	public listOp(): ListOpContext[];
	public listOp(i: number): ListOpContext;
	public listOp(i?: number): ListOpContext | ListOpContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ListOpContext);
		} else {
			return this.getRuleContext(i, ListOpContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_expr300; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterExpr300) {
			listener.enterExpr300(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitExpr300) {
			listener.exitExpr300(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitExpr300) {
			return visitor.visitExpr300(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Expr400Context extends ParserRuleContext {
	public expr500(): Expr500Context[];
	public expr500(i: number): Expr500Context;
	public expr500(i?: number): Expr500Context | Expr500Context[] {
		if (i === undefined) {
			return this.getRuleContexts(Expr500Context);
		} else {
			return this.getRuleContext(i, Expr500Context);
		}
	}
	public addOp(): AddOpContext[];
	public addOp(i: number): AddOpContext;
	public addOp(i?: number): AddOpContext | AddOpContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AddOpContext);
		} else {
			return this.getRuleContext(i, AddOpContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_expr400; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterExpr400) {
			listener.enterExpr400(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitExpr400) {
			listener.exitExpr400(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitExpr400) {
			return visitor.visitExpr400(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Expr500Context extends ParserRuleContext {
	public expr600(): Expr600Context[];
	public expr600(i: number): Expr600Context;
	public expr600(i?: number): Expr600Context | Expr600Context[] {
		if (i === undefined) {
			return this.getRuleContexts(Expr600Context);
		} else {
			return this.getRuleContext(i, Expr600Context);
		}
	}
	public multOp(): MultOpContext[];
	public multOp(i: number): MultOpContext;
	public multOp(i?: number): MultOpContext | MultOpContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MultOpContext);
		} else {
			return this.getRuleContext(i, MultOpContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_expr500; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterExpr500) {
			listener.enterExpr500(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitExpr500) {
			listener.exitExpr500(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitExpr500) {
			return visitor.visitExpr500(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Expr600Context extends ParserRuleContext {
	public expr700(): Expr700Context {
		return this.getRuleContext(0, Expr700Context);
	}
	public prefixOp(): PrefixOpContext | undefined {
		return this.tryGetRuleContext(0, PrefixOpContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_expr600; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterExpr600) {
			listener.enterExpr600(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitExpr600) {
			listener.exitExpr600(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitExpr600) {
			return visitor.visitExpr600(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Expr700Context extends ParserRuleContext {
	public functionCall(): FunctionCallContext | undefined {
		return this.tryGetRuleContext(0, FunctionCallContext);
	}
	public recordExpr(): RecordExprContext | undefined {
		return this.tryGetRuleContext(0, RecordExprContext);
	}
	public expr800(): Expr800Context | undefined {
		return this.tryGetRuleContext(0, Expr800Context);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_expr700; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterExpr700) {
			listener.enterExpr700(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitExpr700) {
			listener.exitExpr700(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitExpr700) {
			return visitor.visitExpr700(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Expr800Context extends ParserRuleContext {
	public exprMax(): ExprMaxContext[];
	public exprMax(i: number): ExprMaxContext;
	public exprMax(i?: number): ExprMaxContext | ExprMaxContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprMaxContext);
		} else {
			return this.getRuleContext(i, ExprMaxContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_expr800; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterExpr800) {
			listener.enterExpr800(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitExpr800) {
			listener.exitExpr800(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitExpr800) {
			return visitor.visitExpr800(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExprMaxContext extends ParserRuleContext {
	public tokVar(): TokVarContext | undefined {
		return this.tryGetRuleContext(0, TokVarContext);
	}
	public atomic(): AtomicContext | undefined {
		return this.tryGetRuleContext(0, AtomicContext);
	}
	public list(): ListContext | undefined {
		return this.tryGetRuleContext(0, ListContext);
	}
	public binary(): BinaryContext | undefined {
		return this.tryGetRuleContext(0, BinaryContext);
	}
	public listComprehension(): ListComprehensionContext | undefined {
		return this.tryGetRuleContext(0, ListComprehensionContext);
	}
	public binaryComprehension(): BinaryComprehensionContext | undefined {
		return this.tryGetRuleContext(0, BinaryComprehensionContext);
	}
	public tuple(): TupleContext | undefined {
		return this.tryGetRuleContext(0, TupleContext);
	}
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	public exprs(): ExprsContext | undefined {
		return this.tryGetRuleContext(0, ExprsContext);
	}
	public ifExpr(): IfExprContext | undefined {
		return this.tryGetRuleContext(0, IfExprContext);
	}
	public caseExpr(): CaseExprContext | undefined {
		return this.tryGetRuleContext(0, CaseExprContext);
	}
	public receiveExpr(): ReceiveExprContext | undefined {
		return this.tryGetRuleContext(0, ReceiveExprContext);
	}
	public funExpr(): FunExprContext | undefined {
		return this.tryGetRuleContext(0, FunExprContext);
	}
	public tryExpr(): TryExprContext | undefined {
		return this.tryGetRuleContext(0, TryExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_exprMax; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterExprMax) {
			listener.enterExprMax(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitExprMax) {
			listener.exitExprMax(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitExprMax) {
			return visitor.visitExprMax(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ListContext extends ParserRuleContext {
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	public tail(): TailContext | undefined {
		return this.tryGetRuleContext(0, TailContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_list; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterList) {
			listener.enterList(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitList) {
			listener.exitList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitList) {
			return visitor.visitList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TailContext extends ParserRuleContext {
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	public tail(): TailContext | undefined {
		return this.tryGetRuleContext(0, TailContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_tail; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterTail) {
			listener.enterTail(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitTail) {
			listener.exitTail(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitTail) {
			return visitor.visitTail(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BinaryContext extends ParserRuleContext {
	public binElements(): BinElementsContext | undefined {
		return this.tryGetRuleContext(0, BinElementsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_binary; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterBinary) {
			listener.enterBinary(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitBinary) {
			listener.exitBinary(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitBinary) {
			return visitor.visitBinary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BinElementsContext extends ParserRuleContext {
	public binElement(): BinElementContext[];
	public binElement(i: number): BinElementContext;
	public binElement(i?: number): BinElementContext | BinElementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BinElementContext);
		} else {
			return this.getRuleContext(i, BinElementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_binElements; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterBinElements) {
			listener.enterBinElements(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitBinElements) {
			listener.exitBinElements(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitBinElements) {
			return visitor.visitBinElements(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BinElementContext extends ParserRuleContext {
	public bitExpr(): BitExprContext {
		return this.getRuleContext(0, BitExprContext);
	}
	public optBitSizeExpr(): OptBitSizeExprContext {
		return this.getRuleContext(0, OptBitSizeExprContext);
	}
	public optBitTypeList(): OptBitTypeListContext {
		return this.getRuleContext(0, OptBitTypeListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_binElement; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterBinElement) {
			listener.enterBinElement(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitBinElement) {
			listener.exitBinElement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitBinElement) {
			return visitor.visitBinElement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BitExprContext extends ParserRuleContext {
	public exprMax(): ExprMaxContext {
		return this.getRuleContext(0, ExprMaxContext);
	}
	public prefixOp(): PrefixOpContext | undefined {
		return this.tryGetRuleContext(0, PrefixOpContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_bitExpr; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterBitExpr) {
			listener.enterBitExpr(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitBitExpr) {
			listener.exitBitExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitBitExpr) {
			return visitor.visitBitExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OptBitSizeExprContext extends ParserRuleContext {
	public bitSizeExpr(): BitSizeExprContext | undefined {
		return this.tryGetRuleContext(0, BitSizeExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_optBitSizeExpr; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterOptBitSizeExpr) {
			listener.enterOptBitSizeExpr(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitOptBitSizeExpr) {
			listener.exitOptBitSizeExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitOptBitSizeExpr) {
			return visitor.visitOptBitSizeExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OptBitTypeListContext extends ParserRuleContext {
	public bitTypeList(): BitTypeListContext | undefined {
		return this.tryGetRuleContext(0, BitTypeListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_optBitTypeList; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterOptBitTypeList) {
			listener.enterOptBitTypeList(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitOptBitTypeList) {
			listener.exitOptBitTypeList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitOptBitTypeList) {
			return visitor.visitOptBitTypeList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BitTypeListContext extends ParserRuleContext {
	public bitType(): BitTypeContext[];
	public bitType(i: number): BitTypeContext;
	public bitType(i?: number): BitTypeContext | BitTypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BitTypeContext);
		} else {
			return this.getRuleContext(i, BitTypeContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_bitTypeList; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterBitTypeList) {
			listener.enterBitTypeList(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitBitTypeList) {
			listener.exitBitTypeList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitBitTypeList) {
			return visitor.visitBitTypeList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BitTypeContext extends ParserRuleContext {
	public tokAtom(): TokAtomContext {
		return this.getRuleContext(0, TokAtomContext);
	}
	public tokInteger(): TokIntegerContext | undefined {
		return this.tryGetRuleContext(0, TokIntegerContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_bitType; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterBitType) {
			listener.enterBitType(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitBitType) {
			listener.exitBitType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitBitType) {
			return visitor.visitBitType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BitSizeExprContext extends ParserRuleContext {
	public exprMax(): ExprMaxContext {
		return this.getRuleContext(0, ExprMaxContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_bitSizeExpr; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterBitSizeExpr) {
			listener.enterBitSizeExpr(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitBitSizeExpr) {
			listener.exitBitSizeExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitBitSizeExpr) {
			return visitor.visitBitSizeExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ListComprehensionContext extends ParserRuleContext {
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public lcExprs(): LcExprsContext {
		return this.getRuleContext(0, LcExprsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_listComprehension; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterListComprehension) {
			listener.enterListComprehension(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitListComprehension) {
			listener.exitListComprehension(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitListComprehension) {
			return visitor.visitListComprehension(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BinaryComprehensionContext extends ParserRuleContext {
	public binary(): BinaryContext {
		return this.getRuleContext(0, BinaryContext);
	}
	public lcExprs(): LcExprsContext {
		return this.getRuleContext(0, LcExprsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_binaryComprehension; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterBinaryComprehension) {
			listener.enterBinaryComprehension(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitBinaryComprehension) {
			listener.exitBinaryComprehension(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitBinaryComprehension) {
			return visitor.visitBinaryComprehension(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LcExprsContext extends ParserRuleContext {
	public lcExpr(): LcExprContext[];
	public lcExpr(i: number): LcExprContext;
	public lcExpr(i?: number): LcExprContext | LcExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LcExprContext);
		} else {
			return this.getRuleContext(i, LcExprContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_lcExprs; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterLcExprs) {
			listener.enterLcExprs(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitLcExprs) {
			listener.exitLcExprs(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitLcExprs) {
			return visitor.visitLcExprs(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LcExprContext extends ParserRuleContext {
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public binary(): BinaryContext | undefined {
		return this.tryGetRuleContext(0, BinaryContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_lcExpr; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterLcExpr) {
			listener.enterLcExpr(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitLcExpr) {
			listener.exitLcExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitLcExpr) {
			return visitor.visitLcExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TupleContext extends ParserRuleContext {
	public exprs(): ExprsContext | undefined {
		return this.tryGetRuleContext(0, ExprsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_tuple; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterTuple) {
			listener.enterTuple(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitTuple) {
			listener.exitTuple(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitTuple) {
			return visitor.visitTuple(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RecordExprContext extends ParserRuleContext {
	public tokAtom(): TokAtomContext[];
	public tokAtom(i: number): TokAtomContext;
	public tokAtom(i?: number): TokAtomContext | TokAtomContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TokAtomContext);
		} else {
			return this.getRuleContext(i, TokAtomContext);
		}
	}
	public recordTuple(): RecordTupleContext | undefined {
		return this.tryGetRuleContext(0, RecordTupleContext);
	}
	public exprMax(): ExprMaxContext | undefined {
		return this.tryGetRuleContext(0, ExprMaxContext);
	}
	public recordExpr(): RecordExprContext | undefined {
		return this.tryGetRuleContext(0, RecordExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_recordExpr; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterRecordExpr) {
			listener.enterRecordExpr(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitRecordExpr) {
			listener.exitRecordExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitRecordExpr) {
			return visitor.visitRecordExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RecordTupleContext extends ParserRuleContext {
	public recordFields(): RecordFieldsContext | undefined {
		return this.tryGetRuleContext(0, RecordFieldsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_recordTuple; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterRecordTuple) {
			listener.enterRecordTuple(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitRecordTuple) {
			listener.exitRecordTuple(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitRecordTuple) {
			return visitor.visitRecordTuple(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RecordFieldsContext extends ParserRuleContext {
	public recordField(): RecordFieldContext[];
	public recordField(i: number): RecordFieldContext;
	public recordField(i?: number): RecordFieldContext | RecordFieldContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RecordFieldContext);
		} else {
			return this.getRuleContext(i, RecordFieldContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_recordFields; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterRecordFields) {
			listener.enterRecordFields(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitRecordFields) {
			listener.exitRecordFields(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitRecordFields) {
			return visitor.visitRecordFields(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RecordFieldContext extends ParserRuleContext {
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public tokVar(): TokVarContext | undefined {
		return this.tryGetRuleContext(0, TokVarContext);
	}
	public tokAtom(): TokAtomContext | undefined {
		return this.tryGetRuleContext(0, TokAtomContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_recordField; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterRecordField) {
			listener.enterRecordField(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitRecordField) {
			listener.exitRecordField(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitRecordField) {
			return visitor.visitRecordField(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionCallContext extends ParserRuleContext {
	public expr800(): Expr800Context {
		return this.getRuleContext(0, Expr800Context);
	}
	public argumentList(): ArgumentListContext {
		return this.getRuleContext(0, ArgumentListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_functionCall; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterFunctionCall) {
			listener.enterFunctionCall(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitFunctionCall) {
			listener.exitFunctionCall(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitFunctionCall) {
			return visitor.visitFunctionCall(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IfExprContext extends ParserRuleContext {
	public ifClauses(): IfClausesContext {
		return this.getRuleContext(0, IfClausesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_ifExpr; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterIfExpr) {
			listener.enterIfExpr(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitIfExpr) {
			listener.exitIfExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitIfExpr) {
			return visitor.visitIfExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IfClausesContext extends ParserRuleContext {
	public ifClause(): IfClauseContext[];
	public ifClause(i: number): IfClauseContext;
	public ifClause(i?: number): IfClauseContext | IfClauseContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IfClauseContext);
		} else {
			return this.getRuleContext(i, IfClauseContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_ifClauses; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterIfClauses) {
			listener.enterIfClauses(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitIfClauses) {
			listener.exitIfClauses(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitIfClauses) {
			return visitor.visitIfClauses(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IfClauseContext extends ParserRuleContext {
	public guard(): GuardContext {
		return this.getRuleContext(0, GuardContext);
	}
	public clauseBody(): ClauseBodyContext {
		return this.getRuleContext(0, ClauseBodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_ifClause; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterIfClause) {
			listener.enterIfClause(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitIfClause) {
			listener.exitIfClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitIfClause) {
			return visitor.visitIfClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CaseExprContext extends ParserRuleContext {
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public crClauses(): CrClausesContext {
		return this.getRuleContext(0, CrClausesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_caseExpr; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterCaseExpr) {
			listener.enterCaseExpr(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitCaseExpr) {
			listener.exitCaseExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitCaseExpr) {
			return visitor.visitCaseExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CrClausesContext extends ParserRuleContext {
	public crClause(): CrClauseContext[];
	public crClause(i: number): CrClauseContext;
	public crClause(i?: number): CrClauseContext | CrClauseContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CrClauseContext);
		} else {
			return this.getRuleContext(i, CrClauseContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_crClauses; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterCrClauses) {
			listener.enterCrClauses(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitCrClauses) {
			listener.exitCrClauses(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitCrClauses) {
			return visitor.visitCrClauses(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CrClauseContext extends ParserRuleContext {
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public clauseGuard(): ClauseGuardContext {
		return this.getRuleContext(0, ClauseGuardContext);
	}
	public clauseBody(): ClauseBodyContext {
		return this.getRuleContext(0, ClauseBodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_crClause; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterCrClause) {
			listener.enterCrClause(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitCrClause) {
			listener.exitCrClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitCrClause) {
			return visitor.visitCrClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ReceiveExprContext extends ParserRuleContext {
	public crClauses(): CrClausesContext | undefined {
		return this.tryGetRuleContext(0, CrClausesContext);
	}
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	public clauseBody(): ClauseBodyContext | undefined {
		return this.tryGetRuleContext(0, ClauseBodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_receiveExpr; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterReceiveExpr) {
			listener.enterReceiveExpr(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitReceiveExpr) {
			listener.exitReceiveExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitReceiveExpr) {
			return visitor.visitReceiveExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunExprContext extends ParserRuleContext {
	public tokAtom(): TokAtomContext | undefined {
		return this.tryGetRuleContext(0, TokAtomContext);
	}
	public tokInteger(): TokIntegerContext | undefined {
		return this.tryGetRuleContext(0, TokIntegerContext);
	}
	public atomOrVar(): AtomOrVarContext[];
	public atomOrVar(i: number): AtomOrVarContext;
	public atomOrVar(i?: number): AtomOrVarContext | AtomOrVarContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AtomOrVarContext);
		} else {
			return this.getRuleContext(i, AtomOrVarContext);
		}
	}
	public integerOrVar(): IntegerOrVarContext | undefined {
		return this.tryGetRuleContext(0, IntegerOrVarContext);
	}
	public funClauses(): FunClausesContext | undefined {
		return this.tryGetRuleContext(0, FunClausesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_funExpr; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterFunExpr) {
			listener.enterFunExpr(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitFunExpr) {
			listener.exitFunExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitFunExpr) {
			return visitor.visitFunExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AtomOrVarContext extends ParserRuleContext {
	public tokAtom(): TokAtomContext | undefined {
		return this.tryGetRuleContext(0, TokAtomContext);
	}
	public tokVar(): TokVarContext | undefined {
		return this.tryGetRuleContext(0, TokVarContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_atomOrVar; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterAtomOrVar) {
			listener.enterAtomOrVar(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitAtomOrVar) {
			listener.exitAtomOrVar(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitAtomOrVar) {
			return visitor.visitAtomOrVar(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IntegerOrVarContext extends ParserRuleContext {
	public tokInteger(): TokIntegerContext | undefined {
		return this.tryGetRuleContext(0, TokIntegerContext);
	}
	public tokVar(): TokVarContext | undefined {
		return this.tryGetRuleContext(0, TokVarContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_integerOrVar; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterIntegerOrVar) {
			listener.enterIntegerOrVar(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitIntegerOrVar) {
			listener.exitIntegerOrVar(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitIntegerOrVar) {
			return visitor.visitIntegerOrVar(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunClausesContext extends ParserRuleContext {
	public funClause(): FunClauseContext[];
	public funClause(i: number): FunClauseContext;
	public funClause(i?: number): FunClauseContext | FunClauseContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FunClauseContext);
		} else {
			return this.getRuleContext(i, FunClauseContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_funClauses; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterFunClauses) {
			listener.enterFunClauses(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitFunClauses) {
			listener.exitFunClauses(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitFunClauses) {
			return visitor.visitFunClauses(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunClauseContext extends ParserRuleContext {
	public argumentList(): ArgumentListContext {
		return this.getRuleContext(0, ArgumentListContext);
	}
	public clauseGuard(): ClauseGuardContext {
		return this.getRuleContext(0, ClauseGuardContext);
	}
	public clauseBody(): ClauseBodyContext {
		return this.getRuleContext(0, ClauseBodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_funClause; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterFunClause) {
			listener.enterFunClause(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitFunClause) {
			listener.exitFunClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitFunClause) {
			return visitor.visitFunClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TryExprContext extends ParserRuleContext {
	public exprs(): ExprsContext {
		return this.getRuleContext(0, ExprsContext);
	}
	public tryCatch(): TryCatchContext {
		return this.getRuleContext(0, TryCatchContext);
	}
	public crClauses(): CrClausesContext | undefined {
		return this.tryGetRuleContext(0, CrClausesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_tryExpr; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterTryExpr) {
			listener.enterTryExpr(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitTryExpr) {
			listener.exitTryExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitTryExpr) {
			return visitor.visitTryExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TryCatchContext extends ParserRuleContext {
	public tryClauses(): TryClausesContext | undefined {
		return this.tryGetRuleContext(0, TryClausesContext);
	}
	public exprs(): ExprsContext | undefined {
		return this.tryGetRuleContext(0, ExprsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_tryCatch; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterTryCatch) {
			listener.enterTryCatch(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitTryCatch) {
			listener.exitTryCatch(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitTryCatch) {
			return visitor.visitTryCatch(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TryClausesContext extends ParserRuleContext {
	public tryClause(): TryClauseContext[];
	public tryClause(i: number): TryClauseContext;
	public tryClause(i?: number): TryClauseContext | TryClauseContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TryClauseContext);
		} else {
			return this.getRuleContext(i, TryClauseContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_tryClauses; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterTryClauses) {
			listener.enterTryClauses(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitTryClauses) {
			listener.exitTryClauses(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitTryClauses) {
			return visitor.visitTryClauses(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TryClauseContext extends ParserRuleContext {
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public clauseGuard(): ClauseGuardContext {
		return this.getRuleContext(0, ClauseGuardContext);
	}
	public clauseBody(): ClauseBodyContext {
		return this.getRuleContext(0, ClauseBodyContext);
	}
	public atomOrVar(): AtomOrVarContext | undefined {
		return this.tryGetRuleContext(0, AtomOrVarContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_tryClause; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterTryClause) {
			listener.enterTryClause(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitTryClause) {
			listener.exitTryClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitTryClause) {
			return visitor.visitTryClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArgumentListContext extends ParserRuleContext {
	public exprs(): ExprsContext | undefined {
		return this.tryGetRuleContext(0, ExprsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_argumentList; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterArgumentList) {
			listener.enterArgumentList(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitArgumentList) {
			listener.exitArgumentList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitArgumentList) {
			return visitor.visitArgumentList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExprsContext extends ParserRuleContext {
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
	public get ruleIndex(): number { return ErlangParser.RULE_exprs; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterExprs) {
			listener.enterExprs(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitExprs) {
			listener.exitExprs(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitExprs) {
			return visitor.visitExprs(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GuardContext extends ParserRuleContext {
	public exprs(): ExprsContext[];
	public exprs(i: number): ExprsContext;
	public exprs(i?: number): ExprsContext | ExprsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprsContext);
		} else {
			return this.getRuleContext(i, ExprsContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_guard; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterGuard) {
			listener.enterGuard(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitGuard) {
			listener.exitGuard(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitGuard) {
			return visitor.visitGuard(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AtomicContext extends ParserRuleContext {
	public tokChar(): TokCharContext | undefined {
		return this.tryGetRuleContext(0, TokCharContext);
	}
	public tokInteger(): TokIntegerContext | undefined {
		return this.tryGetRuleContext(0, TokIntegerContext);
	}
	public tokFloat(): TokFloatContext | undefined {
		return this.tryGetRuleContext(0, TokFloatContext);
	}
	public tokAtom(): TokAtomContext | undefined {
		return this.tryGetRuleContext(0, TokAtomContext);
	}
	public tokString(): TokStringContext[];
	public tokString(i: number): TokStringContext;
	public tokString(i?: number): TokStringContext | TokStringContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TokStringContext);
		} else {
			return this.getRuleContext(i, TokStringContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_atomic; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterAtomic) {
			listener.enterAtomic(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitAtomic) {
			listener.exitAtomic(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitAtomic) {
			return visitor.visitAtomic(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrefixOpContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_prefixOp; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterPrefixOp) {
			listener.enterPrefixOp(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitPrefixOp) {
			listener.exitPrefixOp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitPrefixOp) {
			return visitor.visitPrefixOp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MultOpContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_multOp; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterMultOp) {
			listener.enterMultOp(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitMultOp) {
			listener.exitMultOp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitMultOp) {
			return visitor.visitMultOp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AddOpContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_addOp; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterAddOp) {
			listener.enterAddOp(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitAddOp) {
			listener.exitAddOp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitAddOp) {
			return visitor.visitAddOp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ListOpContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_listOp; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterListOp) {
			listener.enterListOp(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitListOp) {
			listener.exitListOp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitListOp) {
			return visitor.visitListOp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CompOpContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_compOp; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterCompOp) {
			listener.enterCompOp(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitCompOp) {
			listener.exitCompOp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitCompOp) {
			return visitor.visitCompOp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RuleClausesContext extends ParserRuleContext {
	public ruleClause(): RuleClauseContext[];
	public ruleClause(i: number): RuleClauseContext;
	public ruleClause(i?: number): RuleClauseContext | RuleClauseContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RuleClauseContext);
		} else {
			return this.getRuleContext(i, RuleClauseContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_ruleClauses; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterRuleClauses) {
			listener.enterRuleClauses(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitRuleClauses) {
			listener.exitRuleClauses(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitRuleClauses) {
			return visitor.visitRuleClauses(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RuleClauseContext extends ParserRuleContext {
	public tokAtom(): TokAtomContext {
		return this.getRuleContext(0, TokAtomContext);
	}
	public clauseArgs(): ClauseArgsContext {
		return this.getRuleContext(0, ClauseArgsContext);
	}
	public clauseGuard(): ClauseGuardContext {
		return this.getRuleContext(0, ClauseGuardContext);
	}
	public ruleBody(): RuleBodyContext {
		return this.getRuleContext(0, RuleBodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_ruleClause; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterRuleClause) {
			listener.enterRuleClause(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitRuleClause) {
			listener.exitRuleClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitRuleClause) {
			return visitor.visitRuleClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RuleBodyContext extends ParserRuleContext {
	public lcExprs(): LcExprsContext {
		return this.getRuleContext(0, LcExprsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_ruleBody; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterRuleBody) {
			listener.enterRuleBody(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitRuleBody) {
			listener.exitRuleBody(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitRuleBody) {
			return visitor.visitRuleBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


