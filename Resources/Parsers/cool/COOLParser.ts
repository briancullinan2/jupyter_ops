// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/cool/COOL.g4 by ANTLR 4.7.3-SNAPSHOT


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

import { COOLListener } from "./COOLListener";

export class COOLParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly CLASS = 10;
	public static readonly ELSE = 11;
	public static readonly FALSE = 12;
	public static readonly FI = 13;
	public static readonly IF = 14;
	public static readonly IN = 15;
	public static readonly INHERITS = 16;
	public static readonly ISVOID = 17;
	public static readonly LET = 18;
	public static readonly LOOP = 19;
	public static readonly POOL = 20;
	public static readonly THEN = 21;
	public static readonly WHILE = 22;
	public static readonly CASE = 23;
	public static readonly ESAC = 24;
	public static readonly NEW = 25;
	public static readonly OF = 26;
	public static readonly NOT = 27;
	public static readonly TRUE = 28;
	public static readonly STRING = 29;
	public static readonly INT = 30;
	public static readonly TYPEID = 31;
	public static readonly OBJECTID = 32;
	public static readonly ASSIGNMENT = 33;
	public static readonly CASE_ARROW = 34;
	public static readonly ADD = 35;
	public static readonly MINUS = 36;
	public static readonly MULTIPLY = 37;
	public static readonly DIVISION = 38;
	public static readonly LESS_THAN = 39;
	public static readonly LESS_EQUAL = 40;
	public static readonly EQUAL = 41;
	public static readonly INTEGER_NEGATIVE = 42;
	public static readonly OPEN_COMMENT = 43;
	public static readonly CLOSE_COMMENT = 44;
	public static readonly COMMENT = 45;
	public static readonly ONE_LINE_COMMENT = 46;
	public static readonly WHITESPACE = 47;
	public static readonly RULE_program = 0;
	public static readonly RULE_programBlocks = 1;
	public static readonly RULE_classDefine = 2;
	public static readonly RULE_feature = 3;
	public static readonly RULE_formal = 4;
	public static readonly RULE_expression = 5;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "programBlocks", "classDefine", "feature", "formal", "expression",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "';'", "'{'", "'}'", "'('", "','", "')'", "':'", "'@'", "'.'", 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, "'<-'", "'=>'", "'+'", "'-'", "'*'", "'/'", "'<'", 
		"'<='", "'='", "'~'", "'(*'", "'*)'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, "CLASS", "ELSE", "FALSE", "FI", "IF", 
		"IN", "INHERITS", "ISVOID", "LET", "LOOP", "POOL", "THEN", "WHILE", "CASE", 
		"ESAC", "NEW", "OF", "NOT", "TRUE", "STRING", "INT", "TYPEID", "OBJECTID", 
		"ASSIGNMENT", "CASE_ARROW", "ADD", "MINUS", "MULTIPLY", "DIVISION", "LESS_THAN", 
		"LESS_EQUAL", "EQUAL", "INTEGER_NEGATIVE", "OPEN_COMMENT", "CLOSE_COMMENT", 
		"COMMENT", "ONE_LINE_COMMENT", "WHITESPACE",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(COOLParser._LITERAL_NAMES, COOLParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return COOLParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "COOL.g4"; }

	// @Override
	public get ruleNames(): string[] { return COOLParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return COOLParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(COOLParser._ATN, this);
	}
	// @RuleVersion(0)
	public program(): ProgramContext {
		let _localctx: ProgramContext = new ProgramContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, COOLParser.RULE_program);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 12;
			this.programBlocks();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public programBlocks(): ProgramBlocksContext {
		let _localctx: ProgramBlocksContext = new ProgramBlocksContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, COOLParser.RULE_programBlocks);
		try {
			this.state = 19;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case COOLParser.CLASS:
				_localctx = new ClassesContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 14;
				this.classDefine();
				this.state = 15;
				this.match(COOLParser.T__0);
				this.state = 16;
				this.programBlocks();
				}
				break;
			case COOLParser.EOF:
				_localctx = new EofContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 18;
				this.match(COOLParser.EOF);
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
	public classDefine(): ClassDefineContext {
		let _localctx: ClassDefineContext = new ClassDefineContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, COOLParser.RULE_classDefine);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 21;
			this.match(COOLParser.CLASS);
			this.state = 22;
			this.match(COOLParser.TYPEID);
			this.state = 25;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === COOLParser.INHERITS) {
				{
				this.state = 23;
				this.match(COOLParser.INHERITS);
				this.state = 24;
				this.match(COOLParser.TYPEID);
				}
			}

			this.state = 27;
			this.match(COOLParser.T__1);
			this.state = 33;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === COOLParser.OBJECTID) {
				{
				{
				this.state = 28;
				this.feature();
				this.state = 29;
				this.match(COOLParser.T__0);
				}
				}
				this.state = 35;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 36;
			this.match(COOLParser.T__2);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public feature(): FeatureContext {
		let _localctx: FeatureContext = new FeatureContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, COOLParser.RULE_feature);
		let _la: number;
		try {
			this.state = 64;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 6, this._ctx) ) {
			case 1:
				_localctx = new MethodContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 38;
				this.match(COOLParser.OBJECTID);
				this.state = 39;
				this.match(COOLParser.T__3);
				this.state = 48;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === COOLParser.OBJECTID) {
					{
					this.state = 40;
					this.formal();
					this.state = 45;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === COOLParser.T__4) {
						{
						{
						this.state = 41;
						this.match(COOLParser.T__4);
						this.state = 42;
						this.formal();
						}
						}
						this.state = 47;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 50;
				this.match(COOLParser.T__5);
				this.state = 51;
				this.match(COOLParser.T__6);
				this.state = 52;
				this.match(COOLParser.TYPEID);
				this.state = 53;
				this.match(COOLParser.T__1);
				this.state = 54;
				this.expression(0);
				this.state = 55;
				this.match(COOLParser.T__2);
				}
				break;

			case 2:
				_localctx = new PropertyContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 57;
				this.match(COOLParser.OBJECTID);
				this.state = 58;
				this.match(COOLParser.T__6);
				this.state = 59;
				this.match(COOLParser.TYPEID);
				this.state = 62;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === COOLParser.ASSIGNMENT) {
					{
					this.state = 60;
					this.match(COOLParser.ASSIGNMENT);
					this.state = 61;
					this.expression(0);
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
	public formal(): FormalContext {
		let _localctx: FormalContext = new FormalContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, COOLParser.RULE_formal);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 66;
			this.match(COOLParser.OBJECTID);
			this.state = 67;
			this.match(COOLParser.T__6);
			this.state = 68;
			this.match(COOLParser.TYPEID);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
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
		let _startState: number = 10;
		this.enterRecursionRule(_localctx, 10, COOLParser.RULE_expression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 167;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 14, this._ctx) ) {
			case 1:
				{
				_localctx = new OwnMethodCallContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 71;
				this.match(COOLParser.OBJECTID);
				this.state = 72;
				this.match(COOLParser.T__3);
				this.state = 81;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << COOLParser.T__1) | (1 << COOLParser.T__3) | (1 << COOLParser.FALSE) | (1 << COOLParser.IF) | (1 << COOLParser.ISVOID) | (1 << COOLParser.LET) | (1 << COOLParser.WHILE) | (1 << COOLParser.CASE) | (1 << COOLParser.NEW) | (1 << COOLParser.NOT) | (1 << COOLParser.TRUE) | (1 << COOLParser.STRING) | (1 << COOLParser.INT))) !== 0) || _la === COOLParser.OBJECTID || _la === COOLParser.INTEGER_NEGATIVE) {
					{
					this.state = 73;
					this.expression(0);
					this.state = 78;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === COOLParser.T__4) {
						{
						{
						this.state = 74;
						this.match(COOLParser.T__4);
						this.state = 75;
						this.expression(0);
						}
						}
						this.state = 80;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 83;
				this.match(COOLParser.T__5);
				}
				break;

			case 2:
				{
				_localctx = new IfContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 84;
				this.match(COOLParser.IF);
				this.state = 85;
				this.expression(0);
				this.state = 86;
				this.match(COOLParser.THEN);
				this.state = 87;
				this.expression(0);
				this.state = 88;
				this.match(COOLParser.ELSE);
				this.state = 89;
				this.expression(0);
				this.state = 90;
				this.match(COOLParser.FI);
				}
				break;

			case 3:
				{
				_localctx = new WhileContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 92;
				this.match(COOLParser.WHILE);
				this.state = 93;
				this.expression(0);
				this.state = 94;
				this.match(COOLParser.LOOP);
				this.state = 95;
				this.expression(0);
				this.state = 96;
				this.match(COOLParser.POOL);
				}
				break;

			case 4:
				{
				_localctx = new BlockContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 98;
				this.match(COOLParser.T__1);
				this.state = 102;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 99;
					this.expression(0);
					this.state = 100;
					this.match(COOLParser.T__0);
					}
					}
					this.state = 104;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << COOLParser.T__1) | (1 << COOLParser.T__3) | (1 << COOLParser.FALSE) | (1 << COOLParser.IF) | (1 << COOLParser.ISVOID) | (1 << COOLParser.LET) | (1 << COOLParser.WHILE) | (1 << COOLParser.CASE) | (1 << COOLParser.NEW) | (1 << COOLParser.NOT) | (1 << COOLParser.TRUE) | (1 << COOLParser.STRING) | (1 << COOLParser.INT))) !== 0) || _la === COOLParser.OBJECTID || _la === COOLParser.INTEGER_NEGATIVE);
				this.state = 106;
				this.match(COOLParser.T__2);
				}
				break;

			case 5:
				{
				_localctx = new LetInContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 108;
				this.match(COOLParser.LET);
				this.state = 109;
				this.match(COOLParser.OBJECTID);
				this.state = 110;
				this.match(COOLParser.T__6);
				this.state = 111;
				this.match(COOLParser.TYPEID);
				this.state = 114;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === COOLParser.ASSIGNMENT) {
					{
					this.state = 112;
					this.match(COOLParser.ASSIGNMENT);
					this.state = 113;
					this.expression(0);
					}
				}

				this.state = 126;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === COOLParser.T__4) {
					{
					{
					this.state = 116;
					this.match(COOLParser.T__4);
					this.state = 117;
					this.match(COOLParser.OBJECTID);
					this.state = 118;
					this.match(COOLParser.T__6);
					this.state = 119;
					this.match(COOLParser.TYPEID);
					this.state = 122;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === COOLParser.ASSIGNMENT) {
						{
						this.state = 120;
						this.match(COOLParser.ASSIGNMENT);
						this.state = 121;
						this.expression(0);
						}
					}

					}
					}
					this.state = 128;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 129;
				this.match(COOLParser.IN);
				this.state = 130;
				this.expression(20);
				}
				break;

			case 6:
				{
				_localctx = new CaseContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 131;
				this.match(COOLParser.CASE);
				this.state = 132;
				this.expression(0);
				this.state = 133;
				this.match(COOLParser.OF);
				this.state = 141;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 134;
					this.match(COOLParser.OBJECTID);
					this.state = 135;
					this.match(COOLParser.T__6);
					this.state = 136;
					this.match(COOLParser.TYPEID);
					this.state = 137;
					this.match(COOLParser.CASE_ARROW);
					this.state = 138;
					this.expression(0);
					this.state = 139;
					this.match(COOLParser.T__0);
					}
					}
					this.state = 143;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === COOLParser.OBJECTID);
				this.state = 145;
				this.match(COOLParser.ESAC);
				}
				break;

			case 7:
				{
				_localctx = new NewContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 147;
				this.match(COOLParser.NEW);
				this.state = 148;
				this.match(COOLParser.TYPEID);
				}
				break;

			case 8:
				{
				_localctx = new NegativeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 149;
				this.match(COOLParser.INTEGER_NEGATIVE);
				this.state = 150;
				this.expression(17);
				}
				break;

			case 9:
				{
				_localctx = new IsvoidContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 151;
				this.match(COOLParser.ISVOID);
				this.state = 152;
				this.expression(16);
				}
				break;

			case 10:
				{
				_localctx = new BoolNotContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 153;
				this.match(COOLParser.NOT);
				this.state = 154;
				this.expression(8);
				}
				break;

			case 11:
				{
				_localctx = new ParenthesesContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 155;
				this.match(COOLParser.T__3);
				this.state = 156;
				this.expression(0);
				this.state = 157;
				this.match(COOLParser.T__5);
				}
				break;

			case 12:
				{
				_localctx = new IdContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 159;
				this.match(COOLParser.OBJECTID);
				}
				break;

			case 13:
				{
				_localctx = new IntContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 160;
				this.match(COOLParser.INT);
				}
				break;

			case 14:
				{
				_localctx = new StringContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 161;
				this.match(COOLParser.STRING);
				}
				break;

			case 15:
				{
				_localctx = new TrueContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 162;
				this.match(COOLParser.TRUE);
				}
				break;

			case 16:
				{
				_localctx = new FalseContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 163;
				this.match(COOLParser.FALSE);
				}
				break;

			case 17:
				{
				_localctx = new AssignmentContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 164;
				this.match(COOLParser.OBJECTID);
				this.state = 165;
				this.match(COOLParser.ASSIGNMENT);
				this.state = 166;
				this.expression(1);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 211;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 19, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 209;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 18, this._ctx) ) {
					case 1:
						{
						_localctx = new MultiplyContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, COOLParser.RULE_expression);
						this.state = 169;
						if (!(this.precpred(this._ctx, 15))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 15)");
						}
						this.state = 170;
						this.match(COOLParser.MULTIPLY);
						this.state = 171;
						this.expression(16);
						}
						break;

					case 2:
						{
						_localctx = new DivisionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, COOLParser.RULE_expression);
						this.state = 172;
						if (!(this.precpred(this._ctx, 14))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 14)");
						}
						this.state = 173;
						this.match(COOLParser.DIVISION);
						this.state = 174;
						this.expression(15);
						}
						break;

					case 3:
						{
						_localctx = new AddContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, COOLParser.RULE_expression);
						this.state = 175;
						if (!(this.precpred(this._ctx, 13))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 13)");
						}
						this.state = 176;
						this.match(COOLParser.ADD);
						this.state = 177;
						this.expression(14);
						}
						break;

					case 4:
						{
						_localctx = new MinusContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, COOLParser.RULE_expression);
						this.state = 178;
						if (!(this.precpred(this._ctx, 12))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 12)");
						}
						this.state = 179;
						this.match(COOLParser.MINUS);
						this.state = 180;
						this.expression(13);
						}
						break;

					case 5:
						{
						_localctx = new LessThanContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, COOLParser.RULE_expression);
						this.state = 181;
						if (!(this.precpred(this._ctx, 11))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 11)");
						}
						this.state = 182;
						this.match(COOLParser.LESS_THAN);
						this.state = 183;
						this.expression(12);
						}
						break;

					case 6:
						{
						_localctx = new LessEqualContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, COOLParser.RULE_expression);
						this.state = 184;
						if (!(this.precpred(this._ctx, 10))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 10)");
						}
						this.state = 185;
						this.match(COOLParser.LESS_EQUAL);
						this.state = 186;
						this.expression(11);
						}
						break;

					case 7:
						{
						_localctx = new EqualContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, COOLParser.RULE_expression);
						this.state = 187;
						if (!(this.precpred(this._ctx, 9))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 9)");
						}
						this.state = 188;
						this.match(COOLParser.EQUAL);
						this.state = 189;
						this.expression(10);
						}
						break;

					case 8:
						{
						_localctx = new MethodCallContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, COOLParser.RULE_expression);
						this.state = 190;
						if (!(this.precpred(this._ctx, 25))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 25)");
						}
						this.state = 193;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === COOLParser.T__7) {
							{
							this.state = 191;
							this.match(COOLParser.T__7);
							this.state = 192;
							this.match(COOLParser.TYPEID);
							}
						}

						this.state = 195;
						this.match(COOLParser.T__8);
						this.state = 196;
						this.match(COOLParser.OBJECTID);
						this.state = 197;
						this.match(COOLParser.T__3);
						this.state = 206;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << COOLParser.T__1) | (1 << COOLParser.T__3) | (1 << COOLParser.FALSE) | (1 << COOLParser.IF) | (1 << COOLParser.ISVOID) | (1 << COOLParser.LET) | (1 << COOLParser.WHILE) | (1 << COOLParser.CASE) | (1 << COOLParser.NEW) | (1 << COOLParser.NOT) | (1 << COOLParser.TRUE) | (1 << COOLParser.STRING) | (1 << COOLParser.INT))) !== 0) || _la === COOLParser.OBJECTID || _la === COOLParser.INTEGER_NEGATIVE) {
							{
							this.state = 198;
							this.expression(0);
							this.state = 203;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							while (_la === COOLParser.T__4) {
								{
								{
								this.state = 199;
								this.match(COOLParser.T__4);
								this.state = 200;
								this.expression(0);
								}
								}
								this.state = 205;
								this._errHandler.sync(this);
								_la = this._input.LA(1);
							}
							}
						}

						this.state = 208;
						this.match(COOLParser.T__5);
						}
						break;
					}
					}
				}
				this.state = 213;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 19, this._ctx);
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
		case 5:
			return this.expression_sempred(_localctx as ExpressionContext, predIndex);
		}
		return true;
	}
	private expression_sempred(_localctx: ExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 15);

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
			return this.precpred(this._ctx, 25);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x031\xD9\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03" +
		"\x16\n\x03\x03\x04\x03\x04\x03\x04\x03\x04\x05\x04\x1C\n\x04\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x07\x04\"\n\x04\f\x04\x0E\x04%\v\x04\x03\x04\x03" +
		"\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x07\x05.\n\x05\f\x05\x0E" +
		"\x051\v\x05\x05\x053\n\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03" +
		"\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05A\n\x05\x05" +
		"\x05C\n\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03" +
		"\x07\x03\x07\x03\x07\x07\x07O\n\x07\f\x07\x0E\x07R\v\x07\x05\x07T\n\x07" +
		"\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07" +
		"\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07" +
		"\x03\x07\x06\x07i\n\x07\r\x07\x0E\x07j\x03\x07\x03\x07\x03\x07\x03\x07" +
		"\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07u\n\x07\x03\x07\x03\x07\x03\x07" +
		"\x03\x07\x03\x07\x03\x07\x05\x07}\n\x07\x07\x07\x7F\n\x07\f\x07\x0E\x07" +
		"\x82\v\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03" +
		"\x07\x03\x07\x03\x07\x03\x07\x03\x07\x06\x07\x90\n\x07\r\x07\x0E\x07\x91" +
		"\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07" +
		"\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07" +
		"\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07\xAA\n\x07\x03\x07\x03\x07\x03" +
		"\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03" +
		"\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03" +
		"\x07\x03\x07\x03\x07\x03\x07\x05\x07\xC4\n\x07\x03\x07\x03\x07\x03\x07" +
		"\x03\x07\x03\x07\x03\x07\x07\x07\xCC\n\x07\f\x07\x0E\x07\xCF\v\x07\x05" +
		"\x07\xD1\n\x07\x03\x07\x07\x07\xD4\n\x07\f\x07\x0E\x07\xD7\v\x07\x03\x07" +
		"\x02\x02\x03\f\b\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x02\x02\x02" +
		"\xFB\x02\x0E\x03\x02\x02\x02\x04\x15\x03\x02\x02\x02\x06\x17\x03\x02\x02" +
		"\x02\bB\x03\x02\x02\x02\nD\x03\x02\x02\x02\f\xA9\x03\x02\x02\x02\x0E\x0F" +
		"\x05\x04\x03\x02\x0F\x03\x03\x02\x02\x02\x10\x11\x05\x06\x04\x02\x11\x12" +
		"\x07\x03\x02\x02\x12\x13\x05\x04\x03\x02\x13\x16\x03\x02\x02\x02\x14\x16" +
		"\x07\x02\x02\x03\x15\x10\x03\x02\x02\x02\x15\x14\x03\x02\x02\x02\x16\x05" +
		"\x03\x02\x02\x02\x17\x18\x07\f\x02\x02\x18\x1B\x07!\x02\x02\x19\x1A\x07" +
		"\x12\x02\x02\x1A\x1C\x07!\x02\x02\x1B\x19\x03\x02\x02\x02\x1B\x1C\x03" +
		"\x02\x02\x02\x1C\x1D\x03\x02\x02\x02\x1D#\x07\x04\x02\x02\x1E\x1F\x05" +
		"\b\x05\x02\x1F \x07\x03\x02\x02 \"\x03\x02\x02\x02!\x1E\x03\x02\x02\x02" +
		"\"%\x03\x02\x02\x02#!\x03\x02\x02\x02#$\x03\x02\x02\x02$&\x03\x02\x02" +
		"\x02%#\x03\x02\x02\x02&\'\x07\x05\x02\x02\'\x07\x03\x02\x02\x02()\x07" +
		"\"\x02\x02)2\x07\x06\x02\x02*/\x05\n\x06\x02+,\x07\x07\x02\x02,.\x05\n" +
		"\x06\x02-+\x03\x02\x02\x02.1\x03\x02\x02\x02/-\x03\x02\x02\x02/0\x03\x02" +
		"\x02\x0203\x03\x02\x02\x021/\x03\x02\x02\x022*\x03\x02\x02\x0223\x03\x02" +
		"\x02\x0234\x03\x02\x02\x0245\x07\b\x02\x0256\x07\t\x02\x0267\x07!\x02" +
		"\x0278\x07\x04\x02\x0289\x05\f\x07\x029:\x07\x05\x02\x02:C\x03\x02\x02" +
		"\x02;<\x07\"\x02\x02<=\x07\t\x02\x02=@\x07!\x02\x02>?\x07#\x02\x02?A\x05" +
		"\f\x07\x02@>\x03\x02\x02\x02@A\x03\x02\x02\x02AC\x03\x02\x02\x02B(\x03" +
		"\x02\x02\x02B;\x03\x02\x02\x02C\t\x03\x02\x02\x02DE\x07\"\x02\x02EF\x07" +
		"\t\x02\x02FG\x07!\x02\x02G\v\x03\x02\x02\x02HI\b\x07\x01\x02IJ\x07\"\x02" +
		"\x02JS\x07\x06\x02\x02KP\x05\f\x07\x02LM\x07\x07\x02\x02MO\x05\f\x07\x02" +
		"NL\x03\x02\x02\x02OR\x03\x02\x02\x02PN\x03\x02\x02\x02PQ\x03\x02\x02\x02" +
		"QT\x03\x02\x02\x02RP\x03\x02\x02\x02SK\x03\x02\x02\x02ST\x03\x02\x02\x02" +
		"TU\x03\x02\x02\x02U\xAA\x07\b\x02\x02VW\x07\x10\x02\x02WX\x05\f\x07\x02" +
		"XY\x07\x17\x02\x02YZ\x05\f\x07\x02Z[\x07\r\x02\x02[\\\x05\f\x07\x02\\" +
		"]\x07\x0F\x02\x02]\xAA\x03\x02\x02\x02^_\x07\x18\x02\x02_`\x05\f\x07\x02" +
		"`a\x07\x15\x02\x02ab\x05\f\x07\x02bc\x07\x16\x02\x02c\xAA\x03\x02\x02" +
		"\x02dh\x07\x04\x02\x02ef\x05\f\x07\x02fg\x07\x03\x02\x02gi\x03\x02\x02" +
		"\x02he\x03\x02\x02\x02ij\x03\x02\x02\x02jh\x03\x02\x02\x02jk\x03\x02\x02" +
		"\x02kl\x03\x02\x02\x02lm\x07\x05\x02\x02m\xAA\x03\x02\x02\x02no\x07\x14" +
		"\x02\x02op\x07\"\x02\x02pq\x07\t\x02\x02qt\x07!\x02\x02rs\x07#\x02\x02" +
		"su\x05\f\x07\x02tr\x03\x02\x02\x02tu\x03\x02\x02\x02u\x80\x03\x02\x02" +
		"\x02vw\x07\x07\x02\x02wx\x07\"\x02\x02xy\x07\t\x02\x02y|\x07!\x02\x02" +
		"z{\x07#\x02\x02{}\x05\f\x07\x02|z\x03\x02\x02\x02|}\x03\x02\x02\x02}\x7F" +
		"\x03\x02\x02\x02~v\x03\x02\x02\x02\x7F\x82\x03\x02\x02\x02\x80~\x03\x02" +
		"\x02\x02\x80\x81\x03\x02\x02\x02\x81\x83\x03\x02\x02\x02\x82\x80\x03\x02" +
		"\x02\x02\x83\x84\x07\x11\x02\x02\x84\xAA\x05\f\x07\x16\x85\x86\x07\x19" +
		"\x02\x02\x86\x87\x05\f\x07\x02\x87\x8F\x07\x1C\x02\x02\x88\x89\x07\"\x02" +
		"\x02\x89\x8A\x07\t\x02\x02\x8A\x8B\x07!\x02\x02\x8B\x8C\x07$\x02\x02\x8C" +
		"\x8D\x05\f\x07\x02\x8D\x8E\x07\x03\x02\x02\x8E\x90\x03\x02\x02\x02\x8F" +
		"\x88\x03\x02\x02\x02\x90\x91\x03\x02\x02\x02\x91\x8F\x03\x02\x02\x02\x91" +
		"\x92\x03\x02\x02\x02\x92\x93\x03\x02\x02\x02\x93\x94\x07\x1A\x02\x02\x94" +
		"\xAA\x03\x02\x02\x02\x95\x96\x07\x1B\x02\x02\x96\xAA\x07!\x02\x02\x97" +
		"\x98\x07,\x02\x02\x98\xAA\x05\f\x07\x13\x99\x9A\x07\x13\x02\x02\x9A\xAA" +
		"\x05\f\x07\x12\x9B\x9C\x07\x1D\x02\x02\x9C\xAA\x05\f\x07\n\x9D\x9E\x07" +
		"\x06\x02\x02\x9E\x9F\x05\f\x07\x02\x9F\xA0\x07\b\x02\x02\xA0\xAA\x03\x02" +
		"\x02\x02\xA1\xAA\x07\"\x02\x02\xA2\xAA\x07 \x02\x02\xA3\xAA\x07\x1F\x02" +
		"\x02\xA4\xAA\x07\x1E\x02\x02\xA5\xAA\x07\x0E\x02\x02\xA6\xA7\x07\"\x02" +
		"\x02\xA7\xA8\x07#\x02\x02\xA8\xAA\x05\f\x07\x03\xA9H\x03\x02\x02\x02\xA9" +
		"V\x03\x02\x02\x02\xA9^\x03\x02\x02\x02\xA9d\x03\x02\x02\x02\xA9n\x03\x02" +
		"\x02\x02\xA9\x85\x03\x02\x02\x02\xA9\x95\x03\x02\x02\x02\xA9\x97\x03\x02" +
		"\x02\x02\xA9\x99\x03\x02\x02\x02\xA9\x9B\x03\x02\x02\x02\xA9\x9D\x03\x02" +
		"\x02\x02\xA9\xA1\x03\x02\x02\x02\xA9\xA2\x03\x02\x02\x02\xA9\xA3\x03\x02" +
		"\x02\x02\xA9\xA4\x03\x02\x02\x02\xA9\xA5\x03\x02\x02\x02\xA9\xA6\x03\x02" +
		"\x02\x02\xAA\xD5\x03\x02\x02\x02\xAB\xAC\f\x11\x02\x02\xAC\xAD\x07\'\x02" +
		"\x02\xAD\xD4\x05\f\x07\x12\xAE\xAF\f\x10\x02\x02\xAF\xB0\x07(\x02\x02" +
		"\xB0\xD4\x05\f\x07\x11\xB1\xB2\f\x0F\x02\x02\xB2\xB3\x07%\x02\x02\xB3" +
		"\xD4\x05\f\x07\x10\xB4\xB5\f\x0E\x02\x02\xB5\xB6\x07&\x02\x02\xB6\xD4" +
		"\x05\f\x07\x0F\xB7\xB8\f\r\x02\x02\xB8\xB9\x07)\x02\x02\xB9\xD4\x05\f" +
		"\x07\x0E\xBA\xBB\f\f\x02\x02\xBB\xBC\x07*\x02\x02\xBC\xD4\x05\f\x07\r" +
		"\xBD\xBE\f\v\x02\x02\xBE\xBF\x07+\x02\x02\xBF\xD4\x05\f\x07\f\xC0\xC3" +
		"\f\x1B\x02\x02\xC1\xC2\x07\n\x02\x02\xC2\xC4\x07!\x02\x02\xC3\xC1\x03" +
		"\x02\x02\x02\xC3\xC4\x03\x02\x02\x02\xC4\xC5\x03\x02\x02\x02\xC5\xC6\x07" +
		"\v\x02\x02\xC6\xC7\x07\"\x02\x02\xC7\xD0\x07\x06\x02\x02\xC8\xCD\x05\f" +
		"\x07\x02\xC9\xCA\x07\x07\x02\x02\xCA\xCC\x05\f\x07\x02\xCB\xC9\x03\x02" +
		"\x02\x02\xCC\xCF\x03\x02\x02\x02\xCD\xCB\x03\x02\x02\x02\xCD\xCE\x03\x02" +
		"\x02\x02\xCE\xD1\x03\x02\x02\x02\xCF\xCD\x03\x02\x02\x02\xD0\xC8\x03\x02" +
		"\x02\x02\xD0\xD1\x03\x02\x02\x02\xD1\xD2\x03\x02\x02\x02\xD2\xD4\x07\b" +
		"\x02\x02\xD3\xAB\x03\x02\x02\x02\xD3\xAE\x03\x02\x02\x02\xD3\xB1\x03\x02" +
		"\x02\x02\xD3\xB4\x03\x02\x02\x02\xD3\xB7\x03\x02\x02\x02\xD3\xBA\x03\x02" +
		"\x02\x02\xD3\xBD\x03\x02\x02\x02\xD3\xC0\x03\x02\x02\x02\xD4\xD7\x03\x02" +
		"\x02\x02\xD5\xD3\x03\x02\x02\x02\xD5\xD6\x03\x02\x02\x02\xD6\r\x03\x02" +
		"\x02\x02\xD7\xD5\x03\x02\x02\x02\x16\x15\x1B#/2@BPSjt|\x80\x91\xA9\xC3" +
		"\xCD\xD0\xD3\xD5";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!COOLParser.__ATN) {
			COOLParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(COOLParser._serializedATN));
		}

		return COOLParser.__ATN;
	}

}

export class ProgramContext extends ParserRuleContext {
	public programBlocks(): ProgramBlocksContext {
		return this.getRuleContext(0, ProgramBlocksContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return COOLParser.RULE_program; }
	// @Override
	public enterRule(listener: COOLListener): void {
		if (listener.enterProgram) {
			listener.enterProgram(this);
		}
	}
	// @Override
	public exitRule(listener: COOLListener): void {
		if (listener.exitProgram) {
			listener.exitProgram(this);
		}
	}
}


export class ProgramBlocksContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return COOLParser.RULE_programBlocks; }
	public copyFrom(ctx: ProgramBlocksContext): void {
		super.copyFrom(ctx);
	}
}
export class ClassesContext extends ProgramBlocksContext {
	public classDefine(): ClassDefineContext {
		return this.getRuleContext(0, ClassDefineContext);
	}
	public programBlocks(): ProgramBlocksContext {
		return this.getRuleContext(0, ProgramBlocksContext);
	}
	constructor(ctx: ProgramBlocksContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: COOLListener): void {
		if (listener.enterClasses) {
			listener.enterClasses(this);
		}
	}
	// @Override
	public exitRule(listener: COOLListener): void {
		if (listener.exitClasses) {
			listener.exitClasses(this);
		}
	}
}
export class EofContext extends ProgramBlocksContext {
	public EOF(): TerminalNode { return this.getToken(COOLParser.EOF, 0); }
	constructor(ctx: ProgramBlocksContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: COOLListener): void {
		if (listener.enterEof) {
			listener.enterEof(this);
		}
	}
	// @Override
	public exitRule(listener: COOLListener): void {
		if (listener.exitEof) {
			listener.exitEof(this);
		}
	}
}


export class ClassDefineContext extends ParserRuleContext {
	public CLASS(): TerminalNode { return this.getToken(COOLParser.CLASS, 0); }
	public TYPEID(): TerminalNode[];
	public TYPEID(i: number): TerminalNode;
	public TYPEID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(COOLParser.TYPEID);
		} else {
			return this.getToken(COOLParser.TYPEID, i);
		}
	}
	public INHERITS(): TerminalNode | undefined { return this.tryGetToken(COOLParser.INHERITS, 0); }
	public feature(): FeatureContext[];
	public feature(i: number): FeatureContext;
	public feature(i?: number): FeatureContext | FeatureContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FeatureContext);
		} else {
			return this.getRuleContext(i, FeatureContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return COOLParser.RULE_classDefine; }
	// @Override
	public enterRule(listener: COOLListener): void {
		if (listener.enterClassDefine) {
			listener.enterClassDefine(this);
		}
	}
	// @Override
	public exitRule(listener: COOLListener): void {
		if (listener.exitClassDefine) {
			listener.exitClassDefine(this);
		}
	}
}


export class FeatureContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return COOLParser.RULE_feature; }
	public copyFrom(ctx: FeatureContext): void {
		super.copyFrom(ctx);
	}
}
export class MethodContext extends FeatureContext {
	public OBJECTID(): TerminalNode { return this.getToken(COOLParser.OBJECTID, 0); }
	public TYPEID(): TerminalNode { return this.getToken(COOLParser.TYPEID, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public formal(): FormalContext[];
	public formal(i: number): FormalContext;
	public formal(i?: number): FormalContext | FormalContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FormalContext);
		} else {
			return this.getRuleContext(i, FormalContext);
		}
	}
	constructor(ctx: FeatureContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: COOLListener): void {
		if (listener.enterMethod) {
			listener.enterMethod(this);
		}
	}
	// @Override
	public exitRule(listener: COOLListener): void {
		if (listener.exitMethod) {
			listener.exitMethod(this);
		}
	}
}
export class PropertyContext extends FeatureContext {
	public OBJECTID(): TerminalNode { return this.getToken(COOLParser.OBJECTID, 0); }
	public TYPEID(): TerminalNode { return this.getToken(COOLParser.TYPEID, 0); }
	public ASSIGNMENT(): TerminalNode | undefined { return this.tryGetToken(COOLParser.ASSIGNMENT, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(ctx: FeatureContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: COOLListener): void {
		if (listener.enterProperty) {
			listener.enterProperty(this);
		}
	}
	// @Override
	public exitRule(listener: COOLListener): void {
		if (listener.exitProperty) {
			listener.exitProperty(this);
		}
	}
}


export class FormalContext extends ParserRuleContext {
	public OBJECTID(): TerminalNode { return this.getToken(COOLParser.OBJECTID, 0); }
	public TYPEID(): TerminalNode { return this.getToken(COOLParser.TYPEID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return COOLParser.RULE_formal; }
	// @Override
	public enterRule(listener: COOLListener): void {
		if (listener.enterFormal) {
			listener.enterFormal(this);
		}
	}
	// @Override
	public exitRule(listener: COOLListener): void {
		if (listener.exitFormal) {
			listener.exitFormal(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return COOLParser.RULE_expression; }
	public copyFrom(ctx: ExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class MethodCallContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public OBJECTID(): TerminalNode { return this.getToken(COOLParser.OBJECTID, 0); }
	public TYPEID(): TerminalNode | undefined { return this.tryGetToken(COOLParser.TYPEID, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: COOLListener): void {
		if (listener.enterMethodCall) {
			listener.enterMethodCall(this);
		}
	}
	// @Override
	public exitRule(listener: COOLListener): void {
		if (listener.exitMethodCall) {
			listener.exitMethodCall(this);
		}
	}
}
export class OwnMethodCallContext extends ExpressionContext {
	public OBJECTID(): TerminalNode { return this.getToken(COOLParser.OBJECTID, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: COOLListener): void {
		if (listener.enterOwnMethodCall) {
			listener.enterOwnMethodCall(this);
		}
	}
	// @Override
	public exitRule(listener: COOLListener): void {
		if (listener.exitOwnMethodCall) {
			listener.exitOwnMethodCall(this);
		}
	}
}
export class IfContext extends ExpressionContext {
	public IF(): TerminalNode { return this.getToken(COOLParser.IF, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public THEN(): TerminalNode { return this.getToken(COOLParser.THEN, 0); }
	public ELSE(): TerminalNode { return this.getToken(COOLParser.ELSE, 0); }
	public FI(): TerminalNode { return this.getToken(COOLParser.FI, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: COOLListener): void {
		if (listener.enterIf) {
			listener.enterIf(this);
		}
	}
	// @Override
	public exitRule(listener: COOLListener): void {
		if (listener.exitIf) {
			listener.exitIf(this);
		}
	}
}
export class WhileContext extends ExpressionContext {
	public WHILE(): TerminalNode { return this.getToken(COOLParser.WHILE, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public LOOP(): TerminalNode { return this.getToken(COOLParser.LOOP, 0); }
	public POOL(): TerminalNode { return this.getToken(COOLParser.POOL, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: COOLListener): void {
		if (listener.enterWhile) {
			listener.enterWhile(this);
		}
	}
	// @Override
	public exitRule(listener: COOLListener): void {
		if (listener.exitWhile) {
			listener.exitWhile(this);
		}
	}
}
export class BlockContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: COOLListener): void {
		if (listener.enterBlock) {
			listener.enterBlock(this);
		}
	}
	// @Override
	public exitRule(listener: COOLListener): void {
		if (listener.exitBlock) {
			listener.exitBlock(this);
		}
	}
}
export class LetInContext extends ExpressionContext {
	public LET(): TerminalNode { return this.getToken(COOLParser.LET, 0); }
	public OBJECTID(): TerminalNode[];
	public OBJECTID(i: number): TerminalNode;
	public OBJECTID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(COOLParser.OBJECTID);
		} else {
			return this.getToken(COOLParser.OBJECTID, i);
		}
	}
	public TYPEID(): TerminalNode[];
	public TYPEID(i: number): TerminalNode;
	public TYPEID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(COOLParser.TYPEID);
		} else {
			return this.getToken(COOLParser.TYPEID, i);
		}
	}
	public IN(): TerminalNode { return this.getToken(COOLParser.IN, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public ASSIGNMENT(): TerminalNode[];
	public ASSIGNMENT(i: number): TerminalNode;
	public ASSIGNMENT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(COOLParser.ASSIGNMENT);
		} else {
			return this.getToken(COOLParser.ASSIGNMENT, i);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: COOLListener): void {
		if (listener.enterLetIn) {
			listener.enterLetIn(this);
		}
	}
	// @Override
	public exitRule(listener: COOLListener): void {
		if (listener.exitLetIn) {
			listener.exitLetIn(this);
		}
	}
}
export class CaseContext extends ExpressionContext {
	public CASE(): TerminalNode { return this.getToken(COOLParser.CASE, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public OF(): TerminalNode { return this.getToken(COOLParser.OF, 0); }
	public ESAC(): TerminalNode { return this.getToken(COOLParser.ESAC, 0); }
	public OBJECTID(): TerminalNode[];
	public OBJECTID(i: number): TerminalNode;
	public OBJECTID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(COOLParser.OBJECTID);
		} else {
			return this.getToken(COOLParser.OBJECTID, i);
		}
	}
	public TYPEID(): TerminalNode[];
	public TYPEID(i: number): TerminalNode;
	public TYPEID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(COOLParser.TYPEID);
		} else {
			return this.getToken(COOLParser.TYPEID, i);
		}
	}
	public CASE_ARROW(): TerminalNode[];
	public CASE_ARROW(i: number): TerminalNode;
	public CASE_ARROW(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(COOLParser.CASE_ARROW);
		} else {
			return this.getToken(COOLParser.CASE_ARROW, i);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: COOLListener): void {
		if (listener.enterCase) {
			listener.enterCase(this);
		}
	}
	// @Override
	public exitRule(listener: COOLListener): void {
		if (listener.exitCase) {
			listener.exitCase(this);
		}
	}
}
export class NewContext extends ExpressionContext {
	public NEW(): TerminalNode { return this.getToken(COOLParser.NEW, 0); }
	public TYPEID(): TerminalNode { return this.getToken(COOLParser.TYPEID, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: COOLListener): void {
		if (listener.enterNew) {
			listener.enterNew(this);
		}
	}
	// @Override
	public exitRule(listener: COOLListener): void {
		if (listener.exitNew) {
			listener.exitNew(this);
		}
	}
}
export class NegativeContext extends ExpressionContext {
	public INTEGER_NEGATIVE(): TerminalNode { return this.getToken(COOLParser.INTEGER_NEGATIVE, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: COOLListener): void {
		if (listener.enterNegative) {
			listener.enterNegative(this);
		}
	}
	// @Override
	public exitRule(listener: COOLListener): void {
		if (listener.exitNegative) {
			listener.exitNegative(this);
		}
	}
}
export class IsvoidContext extends ExpressionContext {
	public ISVOID(): TerminalNode { return this.getToken(COOLParser.ISVOID, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: COOLListener): void {
		if (listener.enterIsvoid) {
			listener.enterIsvoid(this);
		}
	}
	// @Override
	public exitRule(listener: COOLListener): void {
		if (listener.exitIsvoid) {
			listener.exitIsvoid(this);
		}
	}
}
export class MultiplyContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public MULTIPLY(): TerminalNode { return this.getToken(COOLParser.MULTIPLY, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: COOLListener): void {
		if (listener.enterMultiply) {
			listener.enterMultiply(this);
		}
	}
	// @Override
	public exitRule(listener: COOLListener): void {
		if (listener.exitMultiply) {
			listener.exitMultiply(this);
		}
	}
}
export class DivisionContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public DIVISION(): TerminalNode { return this.getToken(COOLParser.DIVISION, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: COOLListener): void {
		if (listener.enterDivision) {
			listener.enterDivision(this);
		}
	}
	// @Override
	public exitRule(listener: COOLListener): void {
		if (listener.exitDivision) {
			listener.exitDivision(this);
		}
	}
}
export class AddContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public ADD(): TerminalNode { return this.getToken(COOLParser.ADD, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: COOLListener): void {
		if (listener.enterAdd) {
			listener.enterAdd(this);
		}
	}
	// @Override
	public exitRule(listener: COOLListener): void {
		if (listener.exitAdd) {
			listener.exitAdd(this);
		}
	}
}
export class MinusContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public MINUS(): TerminalNode { return this.getToken(COOLParser.MINUS, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: COOLListener): void {
		if (listener.enterMinus) {
			listener.enterMinus(this);
		}
	}
	// @Override
	public exitRule(listener: COOLListener): void {
		if (listener.exitMinus) {
			listener.exitMinus(this);
		}
	}
}
export class LessThanContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public LESS_THAN(): TerminalNode { return this.getToken(COOLParser.LESS_THAN, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: COOLListener): void {
		if (listener.enterLessThan) {
			listener.enterLessThan(this);
		}
	}
	// @Override
	public exitRule(listener: COOLListener): void {
		if (listener.exitLessThan) {
			listener.exitLessThan(this);
		}
	}
}
export class LessEqualContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public LESS_EQUAL(): TerminalNode { return this.getToken(COOLParser.LESS_EQUAL, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: COOLListener): void {
		if (listener.enterLessEqual) {
			listener.enterLessEqual(this);
		}
	}
	// @Override
	public exitRule(listener: COOLListener): void {
		if (listener.exitLessEqual) {
			listener.exitLessEqual(this);
		}
	}
}
export class EqualContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public EQUAL(): TerminalNode { return this.getToken(COOLParser.EQUAL, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: COOLListener): void {
		if (listener.enterEqual) {
			listener.enterEqual(this);
		}
	}
	// @Override
	public exitRule(listener: COOLListener): void {
		if (listener.exitEqual) {
			listener.exitEqual(this);
		}
	}
}
export class BoolNotContext extends ExpressionContext {
	public NOT(): TerminalNode { return this.getToken(COOLParser.NOT, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: COOLListener): void {
		if (listener.enterBoolNot) {
			listener.enterBoolNot(this);
		}
	}
	// @Override
	public exitRule(listener: COOLListener): void {
		if (listener.exitBoolNot) {
			listener.exitBoolNot(this);
		}
	}
}
export class ParenthesesContext extends ExpressionContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: COOLListener): void {
		if (listener.enterParentheses) {
			listener.enterParentheses(this);
		}
	}
	// @Override
	public exitRule(listener: COOLListener): void {
		if (listener.exitParentheses) {
			listener.exitParentheses(this);
		}
	}
}
export class IdContext extends ExpressionContext {
	public OBJECTID(): TerminalNode { return this.getToken(COOLParser.OBJECTID, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: COOLListener): void {
		if (listener.enterId) {
			listener.enterId(this);
		}
	}
	// @Override
	public exitRule(listener: COOLListener): void {
		if (listener.exitId) {
			listener.exitId(this);
		}
	}
}
export class IntContext extends ExpressionContext {
	public INT(): TerminalNode { return this.getToken(COOLParser.INT, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: COOLListener): void {
		if (listener.enterInt) {
			listener.enterInt(this);
		}
	}
	// @Override
	public exitRule(listener: COOLListener): void {
		if (listener.exitInt) {
			listener.exitInt(this);
		}
	}
}
export class StringContext extends ExpressionContext {
	public STRING(): TerminalNode { return this.getToken(COOLParser.STRING, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: COOLListener): void {
		if (listener.enterString) {
			listener.enterString(this);
		}
	}
	// @Override
	public exitRule(listener: COOLListener): void {
		if (listener.exitString) {
			listener.exitString(this);
		}
	}
}
export class TrueContext extends ExpressionContext {
	public TRUE(): TerminalNode { return this.getToken(COOLParser.TRUE, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: COOLListener): void {
		if (listener.enterTrue) {
			listener.enterTrue(this);
		}
	}
	// @Override
	public exitRule(listener: COOLListener): void {
		if (listener.exitTrue) {
			listener.exitTrue(this);
		}
	}
}
export class FalseContext extends ExpressionContext {
	public FALSE(): TerminalNode { return this.getToken(COOLParser.FALSE, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: COOLListener): void {
		if (listener.enterFalse) {
			listener.enterFalse(this);
		}
	}
	// @Override
	public exitRule(listener: COOLListener): void {
		if (listener.exitFalse) {
			listener.exitFalse(this);
		}
	}
}
export class AssignmentContext extends ExpressionContext {
	public OBJECTID(): TerminalNode { return this.getToken(COOLParser.OBJECTID, 0); }
	public ASSIGNMENT(): TerminalNode { return this.getToken(COOLParser.ASSIGNMENT, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: COOLListener): void {
		if (listener.enterAssignment) {
			listener.enterAssignment(this);
		}
	}
	// @Override
	public exitRule(listener: COOLListener): void {
		if (listener.exitAssignment) {
			listener.exitAssignment(this);
		}
	}
}


