// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/robotwars/robotwar.g4 by ANTLR 4.7.3-SNAPSHOT


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

import { robotwarListener } from "./robotwarListener";

export class robotwarParser extends Parser {
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
	public static readonly A = 14;
	public static readonly B = 15;
	public static readonly C = 16;
	public static readonly D = 17;
	public static readonly E = 18;
	public static readonly F = 19;
	public static readonly G = 20;
	public static readonly H = 21;
	public static readonly I = 22;
	public static readonly J = 23;
	public static readonly K = 24;
	public static readonly L = 25;
	public static readonly M = 26;
	public static readonly N = 27;
	public static readonly O = 28;
	public static readonly P = 29;
	public static readonly Q = 30;
	public static readonly R = 31;
	public static readonly S = 32;
	public static readonly T = 33;
	public static readonly U = 34;
	public static readonly V = 35;
	public static readonly W = 36;
	public static readonly X = 37;
	public static readonly Y = 38;
	public static readonly Z = 39;
	public static readonly AIM = 40;
	public static readonly SHOT = 41;
	public static readonly RADAR = 42;
	public static readonly DAMAGE = 43;
	public static readonly SPEEDX = 44;
	public static readonly SPEEDY = 45;
	public static readonly RANDOM = 46;
	public static readonly INDEX = 47;
	public static readonly DATA = 48;
	public static readonly DOT = 49;
	public static readonly COMMA = 50;
	public static readonly ID = 51;
	public static readonly NUMBER = 52;
	public static readonly COMMENT = 53;
	public static readonly EOL = 54;
	public static readonly WS = 55;
	public static readonly RULE_program = 0;
	public static readonly RULE_line = 1;
	public static readonly RULE_label = 2;
	public static readonly RULE_statement = 3;
	public static readonly RULE_accumstatement = 4;
	public static readonly RULE_accumexpression = 5;
	public static readonly RULE_gosubstatement = 6;
	public static readonly RULE_gotostatement = 7;
	public static readonly RULE_tostatement = 8;
	public static readonly RULE_endsubstatement = 9;
	public static readonly RULE_ifstatement = 10;
	public static readonly RULE_condition = 11;
	public static readonly RULE_expression = 12;
	public static readonly RULE_operation = 13;
	public static readonly RULE_comparison = 14;
	public static readonly RULE_argument = 15;
	public static readonly RULE_register = 16;
	public static readonly RULE_number = 17;
	public static readonly RULE_comment = 18;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "line", "label", "statement", "accumstatement", "accumexpression", 
		"gosubstatement", "gotostatement", "tostatement", "endsubstatement", "ifstatement", 
		"condition", "expression", "operation", "comparison", "argument", "register", 
		"number", "comment",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'='", "'#'", "'<'", "'>'", "'GOSUB'", "'GOTO'", "'TO'", "'ENDSUB'", 
		"'IF'", "'+'", "'-'", "'*'", "'/'", "'A'", "'B'", "'C'", "'D'", "'E'", 
		"'F'", "'G'", "'H'", "'I'", "'J'", "'K'", "'L'", "'M'", "'N'", "'O'", 
		"'P'", "'Q'", "'R'", "'S'", "'T'", "'U'", "'V'", "'W'", "'X'", "'Y'", 
		"'Z'", "'AIM'", "'SHOT'", "'RADAR'", "'DAMAGE'", "'SPEEDX'", "'SPEEDY'", 
		"'RANDOM'", "'INDEX'", "'DATA'", "'.'", "','",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		"A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", 
		"O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "AIM", "SHOT", 
		"RADAR", "DAMAGE", "SPEEDX", "SPEEDY", "RANDOM", "INDEX", "DATA", "DOT", 
		"COMMA", "ID", "NUMBER", "COMMENT", "EOL", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(robotwarParser._LITERAL_NAMES, robotwarParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return robotwarParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "robotwar.g4"; }

	// @Override
	public get ruleNames(): string[] { return robotwarParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return robotwarParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(robotwarParser._ATN, this);
	}
	// @RuleVersion(0)
	public program(): ProgramContext {
		let _localctx: ProgramContext = new ProgramContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, robotwarParser.RULE_program);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 39;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 38;
				this.line();
				}
				}
				this.state = 41;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << robotwarParser.T__0) | (1 << robotwarParser.T__1) | (1 << robotwarParser.T__2) | (1 << robotwarParser.T__3) | (1 << robotwarParser.T__4) | (1 << robotwarParser.T__5) | (1 << robotwarParser.T__6) | (1 << robotwarParser.T__7) | (1 << robotwarParser.T__8) | (1 << robotwarParser.T__9) | (1 << robotwarParser.T__10) | (1 << robotwarParser.T__11) | (1 << robotwarParser.T__12) | (1 << robotwarParser.A) | (1 << robotwarParser.B) | (1 << robotwarParser.C) | (1 << robotwarParser.D) | (1 << robotwarParser.E) | (1 << robotwarParser.F) | (1 << robotwarParser.G) | (1 << robotwarParser.H) | (1 << robotwarParser.I) | (1 << robotwarParser.J) | (1 << robotwarParser.K) | (1 << robotwarParser.L) | (1 << robotwarParser.M) | (1 << robotwarParser.N) | (1 << robotwarParser.O) | (1 << robotwarParser.P) | (1 << robotwarParser.Q) | (1 << robotwarParser.R))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (robotwarParser.S - 32)) | (1 << (robotwarParser.T - 32)) | (1 << (robotwarParser.U - 32)) | (1 << (robotwarParser.V - 32)) | (1 << (robotwarParser.W - 32)) | (1 << (robotwarParser.X - 32)) | (1 << (robotwarParser.Y - 32)) | (1 << (robotwarParser.Z - 32)) | (1 << (robotwarParser.AIM - 32)) | (1 << (robotwarParser.SHOT - 32)) | (1 << (robotwarParser.RADAR - 32)) | (1 << (robotwarParser.DAMAGE - 32)) | (1 << (robotwarParser.SPEEDX - 32)) | (1 << (robotwarParser.SPEEDY - 32)) | (1 << (robotwarParser.RANDOM - 32)) | (1 << (robotwarParser.INDEX - 32)) | (1 << (robotwarParser.DATA - 32)) | (1 << (robotwarParser.ID - 32)) | (1 << (robotwarParser.NUMBER - 32)) | (1 << (robotwarParser.COMMENT - 32)) | (1 << (robotwarParser.EOL - 32)))) !== 0));
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public line(): LineContext {
		let _localctx: LineContext = new LineContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, robotwarParser.RULE_line);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 46;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case robotwarParser.ID:
				{
				this.state = 43;
				this.label();
				}
				break;
			case robotwarParser.COMMENT:
				{
				this.state = 44;
				this.comment();
				}
				break;
			case robotwarParser.T__0:
			case robotwarParser.T__1:
			case robotwarParser.T__2:
			case robotwarParser.T__3:
			case robotwarParser.T__4:
			case robotwarParser.T__5:
			case robotwarParser.T__6:
			case robotwarParser.T__7:
			case robotwarParser.T__8:
			case robotwarParser.T__9:
			case robotwarParser.T__10:
			case robotwarParser.T__11:
			case robotwarParser.T__12:
			case robotwarParser.A:
			case robotwarParser.B:
			case robotwarParser.C:
			case robotwarParser.D:
			case robotwarParser.E:
			case robotwarParser.F:
			case robotwarParser.G:
			case robotwarParser.H:
			case robotwarParser.I:
			case robotwarParser.J:
			case robotwarParser.K:
			case robotwarParser.L:
			case robotwarParser.M:
			case robotwarParser.N:
			case robotwarParser.O:
			case robotwarParser.P:
			case robotwarParser.Q:
			case robotwarParser.R:
			case robotwarParser.S:
			case robotwarParser.T:
			case robotwarParser.U:
			case robotwarParser.V:
			case robotwarParser.W:
			case robotwarParser.X:
			case robotwarParser.Y:
			case robotwarParser.Z:
			case robotwarParser.AIM:
			case robotwarParser.SHOT:
			case robotwarParser.RADAR:
			case robotwarParser.DAMAGE:
			case robotwarParser.SPEEDX:
			case robotwarParser.SPEEDY:
			case robotwarParser.RANDOM:
			case robotwarParser.INDEX:
			case robotwarParser.DATA:
			case robotwarParser.NUMBER:
				{
				this.state = 45;
				this.statement();
				}
				break;
			case robotwarParser.EOL:
				break;
			default:
				break;
			}
			this.state = 48;
			this.match(robotwarParser.EOL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public label(): LabelContext {
		let _localctx: LabelContext = new LabelContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, robotwarParser.RULE_label);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 50;
			this.match(robotwarParser.ID);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 6, robotwarParser.RULE_statement);
		try {
			this.state = 58;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 2, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 52;
				this.ifstatement();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 53;
				this.tostatement();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 54;
				this.gosubstatement();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 55;
				this.gotostatement();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 56;
				this.endsubstatement();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 57;
				this.accumstatement();
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
	public accumstatement(): AccumstatementContext {
		let _localctx: AccumstatementContext = new AccumstatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, robotwarParser.RULE_accumstatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 60;
			this.accumexpression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public accumexpression(): AccumexpressionContext {
		let _localctx: AccumexpressionContext = new AccumexpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, robotwarParser.RULE_accumexpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 68;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case robotwarParser.T__0:
				{
				this.state = 62;
				this.match(robotwarParser.T__0);
				}
				break;
			case robotwarParser.T__1:
				{
				this.state = 63;
				this.match(robotwarParser.T__1);
				}
				break;
			case robotwarParser.T__2:
				{
				{
				this.state = 64;
				this.match(robotwarParser.T__2);
				this.state = 65;
				this.expression();
				}
				}
				break;
			case robotwarParser.T__3:
				{
				{
				this.state = 66;
				this.match(robotwarParser.T__3);
				this.state = 67;
				this.expression();
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 70;
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
	public gosubstatement(): GosubstatementContext {
		let _localctx: GosubstatementContext = new GosubstatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, robotwarParser.RULE_gosubstatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 72;
			this.match(robotwarParser.T__4);
			this.state = 73;
			this.label();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public gotostatement(): GotostatementContext {
		let _localctx: GotostatementContext = new GotostatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, robotwarParser.RULE_gotostatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 75;
			this.match(robotwarParser.T__5);
			this.state = 76;
			this.label();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tostatement(): TostatementContext {
		let _localctx: TostatementContext = new TostatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, robotwarParser.RULE_tostatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 79;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << robotwarParser.T__9) | (1 << robotwarParser.T__10) | (1 << robotwarParser.T__11) | (1 << robotwarParser.T__12) | (1 << robotwarParser.A) | (1 << robotwarParser.B) | (1 << robotwarParser.C) | (1 << robotwarParser.D) | (1 << robotwarParser.E) | (1 << robotwarParser.F) | (1 << robotwarParser.G) | (1 << robotwarParser.H) | (1 << robotwarParser.I) | (1 << robotwarParser.J) | (1 << robotwarParser.K) | (1 << robotwarParser.L) | (1 << robotwarParser.M) | (1 << robotwarParser.N) | (1 << robotwarParser.O) | (1 << robotwarParser.P) | (1 << robotwarParser.Q) | (1 << robotwarParser.R))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (robotwarParser.S - 32)) | (1 << (robotwarParser.T - 32)) | (1 << (robotwarParser.U - 32)) | (1 << (robotwarParser.V - 32)) | (1 << (robotwarParser.W - 32)) | (1 << (robotwarParser.X - 32)) | (1 << (robotwarParser.Y - 32)) | (1 << (robotwarParser.Z - 32)) | (1 << (robotwarParser.AIM - 32)) | (1 << (robotwarParser.SHOT - 32)) | (1 << (robotwarParser.RADAR - 32)) | (1 << (robotwarParser.DAMAGE - 32)) | (1 << (robotwarParser.SPEEDX - 32)) | (1 << (robotwarParser.SPEEDY - 32)) | (1 << (robotwarParser.RANDOM - 32)) | (1 << (robotwarParser.INDEX - 32)) | (1 << (robotwarParser.DATA - 32)) | (1 << (robotwarParser.NUMBER - 32)))) !== 0)) {
				{
				this.state = 78;
				this.expression();
				}
			}

			this.state = 83;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 81;
				this.match(robotwarParser.T__6);
				this.state = 82;
				this.register();
				}
				}
				this.state = 85;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === robotwarParser.T__6);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public endsubstatement(): EndsubstatementContext {
		let _localctx: EndsubstatementContext = new EndsubstatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, robotwarParser.RULE_endsubstatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 87;
			this.match(robotwarParser.T__7);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ifstatement(): IfstatementContext {
		let _localctx: IfstatementContext = new IfstatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, robotwarParser.RULE_ifstatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 90;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === robotwarParser.T__8) {
				{
				this.state = 89;
				this.match(robotwarParser.T__8);
				}
			}

			this.state = 92;
			this.condition();
			this.state = 94;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 49)) & ~0x1F) === 0 && ((1 << (_la - 49)) & ((1 << (robotwarParser.DOT - 49)) | (1 << (robotwarParser.COMMA - 49)) | (1 << (robotwarParser.EOL - 49)))) !== 0)) {
				{
				this.state = 93;
				_la = this._input.LA(1);
				if (!(((((_la - 49)) & ~0x1F) === 0 && ((1 << (_la - 49)) & ((1 << (robotwarParser.DOT - 49)) | (1 << (robotwarParser.COMMA - 49)) | (1 << (robotwarParser.EOL - 49)))) !== 0))) {
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

			this.state = 96;
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
	public condition(): ConditionContext {
		let _localctx: ConditionContext = new ConditionContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, robotwarParser.RULE_condition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 98;
			this.expression();
			this.state = 99;
			this.comparison();
			this.state = 100;
			this.expression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expression(): ExpressionContext {
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, robotwarParser.RULE_expression);
		try {
			let _alt: number;
			this.state = 115;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 9, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				{
				this.state = 102;
				this.argument();
				this.state = 108;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 103;
						this.operation();
						this.state = 104;
						this.argument();
						}
						}
					}
					this.state = 110;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
				}
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				{
				this.state = 111;
				this.operation();
				this.state = 112;
				this.argument();
				}
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 114;
				this.argument();
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
	public operation(): OperationContext {
		let _localctx: OperationContext = new OperationContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, robotwarParser.RULE_operation);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 117;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << robotwarParser.T__9) | (1 << robotwarParser.T__10) | (1 << robotwarParser.T__11) | (1 << robotwarParser.T__12))) !== 0))) {
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
	public comparison(): ComparisonContext {
		let _localctx: ComparisonContext = new ComparisonContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, robotwarParser.RULE_comparison);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 119;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << robotwarParser.T__0) | (1 << robotwarParser.T__1) | (1 << robotwarParser.T__2) | (1 << robotwarParser.T__3))) !== 0))) {
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
	public argument(): ArgumentContext {
		let _localctx: ArgumentContext = new ArgumentContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, robotwarParser.RULE_argument);
		try {
			this.state = 124;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 10, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 121;
				this.number();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 122;
				this.register();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 123;
				this.match(robotwarParser.DATA);
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
	public register(): RegisterContext {
		let _localctx: RegisterContext = new RegisterContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, robotwarParser.RULE_register);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 126;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << robotwarParser.A) | (1 << robotwarParser.B) | (1 << robotwarParser.C) | (1 << robotwarParser.D) | (1 << robotwarParser.E) | (1 << robotwarParser.F) | (1 << robotwarParser.G) | (1 << robotwarParser.H) | (1 << robotwarParser.I) | (1 << robotwarParser.J) | (1 << robotwarParser.K) | (1 << robotwarParser.L) | (1 << robotwarParser.M) | (1 << robotwarParser.N) | (1 << robotwarParser.O) | (1 << robotwarParser.P) | (1 << robotwarParser.Q) | (1 << robotwarParser.R))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (robotwarParser.S - 32)) | (1 << (robotwarParser.T - 32)) | (1 << (robotwarParser.U - 32)) | (1 << (robotwarParser.V - 32)) | (1 << (robotwarParser.W - 32)) | (1 << (robotwarParser.X - 32)) | (1 << (robotwarParser.Y - 32)) | (1 << (robotwarParser.Z - 32)) | (1 << (robotwarParser.AIM - 32)) | (1 << (robotwarParser.SHOT - 32)) | (1 << (robotwarParser.RADAR - 32)) | (1 << (robotwarParser.DAMAGE - 32)) | (1 << (robotwarParser.SPEEDX - 32)) | (1 << (robotwarParser.SPEEDY - 32)) | (1 << (robotwarParser.RANDOM - 32)) | (1 << (robotwarParser.INDEX - 32)) | (1 << (robotwarParser.DATA - 32)))) !== 0))) {
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
	public number(): NumberContext {
		let _localctx: NumberContext = new NumberContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, robotwarParser.RULE_number);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 129;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === robotwarParser.T__9 || _la === robotwarParser.T__10) {
				{
				this.state = 128;
				_la = this._input.LA(1);
				if (!(_la === robotwarParser.T__9 || _la === robotwarParser.T__10)) {
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

			this.state = 131;
			this.match(robotwarParser.NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public comment(): CommentContext {
		let _localctx: CommentContext = new CommentContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, robotwarParser.RULE_comment);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 133;
			this.match(robotwarParser.COMMENT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x039\x8A\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x03\x02\x06\x02*\n\x02\r\x02\x0E\x02+\x03\x03" +
		"\x03\x03\x03\x03\x05\x031\n\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03\x05" +
		"\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05=\n\x05\x03\x06\x03\x06" +
		"\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07G\n\x07\x03\x07" +
		"\x03\x07\x03\b\x03\b\x03\b\x03\t\x03\t\x03\t\x03\n\x05\nR\n\n\x03\n\x03" +
		"\n\x06\nV\n\n\r\n\x0E\nW\x03\v\x03\v\x03\f\x05\f]\n\f\x03\f\x03\f\x05" +
		"\fa\n\f\x03\f\x03\f\x03\r\x03\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03" +
		"\x0E\x07\x0Em\n\x0E\f\x0E\x0E\x0Ep\v\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E" +
		"\x05\x0Ev\n\x0E\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x11\x03\x11\x03\x11" +
		"\x05\x11\x7F\n\x11\x03\x12\x03\x12\x03\x13\x05\x13\x84\n\x13\x03\x13\x03" +
		"\x13\x03\x14\x03\x14\x03\x14\x02\x02\x02\x15\x02\x02\x04\x02\x06\x02\b" +
		"\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02" +
		"\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02\x02\x07\x04\x023488\x03\x02\f\x0F" +
		"\x03\x02\x03\x06\x03\x02\x102\x03\x02\f\r\x02\x8C\x02)\x03\x02\x02\x02" +
		"\x040\x03\x02\x02\x02\x064\x03\x02\x02\x02\b<\x03\x02\x02\x02\n>\x03\x02" +
		"\x02\x02\fF\x03\x02\x02\x02\x0EJ\x03\x02\x02\x02\x10M\x03\x02\x02\x02" +
		"\x12Q\x03\x02\x02\x02\x14Y\x03\x02\x02\x02\x16\\\x03\x02\x02\x02\x18d" +
		"\x03\x02\x02\x02\x1Au\x03\x02\x02\x02\x1Cw\x03\x02\x02\x02\x1Ey\x03\x02" +
		"\x02\x02 ~\x03\x02\x02\x02\"\x80\x03\x02\x02\x02$\x83\x03\x02\x02\x02" +
		"&\x87\x03\x02\x02\x02(*\x05\x04\x03\x02)(\x03\x02\x02\x02*+\x03\x02\x02" +
		"\x02+)\x03\x02\x02\x02+,\x03\x02\x02\x02,\x03\x03\x02\x02\x02-1\x05\x06" +
		"\x04\x02.1\x05&\x14\x02/1\x05\b\x05\x020-\x03\x02\x02\x020.\x03\x02\x02" +
		"\x020/\x03\x02\x02\x0201\x03\x02\x02\x0212\x03\x02\x02\x0223\x078\x02" +
		"\x023\x05\x03\x02\x02\x0245\x075\x02\x025\x07\x03\x02\x02\x026=\x05\x16" +
		"\f\x027=\x05\x12\n\x028=\x05\x0E\b\x029=\x05\x10\t\x02:=\x05\x14\v\x02" +
		";=\x05\n\x06\x02<6\x03\x02\x02\x02<7\x03\x02\x02\x02<8\x03\x02\x02\x02" +
		"<9\x03\x02\x02\x02<:\x03\x02\x02\x02<;\x03\x02\x02\x02=\t\x03\x02\x02" +
		"\x02>?\x05\f\x07\x02?\v\x03\x02\x02\x02@G\x07\x03\x02\x02AG\x07\x04\x02" +
		"\x02BC\x07\x05\x02\x02CG\x05\x1A\x0E\x02DE\x07\x06\x02\x02EG\x05\x1A\x0E" +
		"\x02F@\x03\x02\x02\x02FA\x03\x02\x02\x02FB\x03\x02\x02\x02FD\x03\x02\x02" +
		"\x02GH\x03\x02\x02\x02HI\x05\b\x05\x02I\r\x03\x02\x02\x02JK\x07\x07\x02" +
		"\x02KL\x05\x06\x04\x02L\x0F\x03\x02\x02\x02MN\x07\b\x02\x02NO\x05\x06" +
		"\x04\x02O\x11\x03\x02\x02\x02PR\x05\x1A\x0E\x02QP\x03\x02\x02\x02QR\x03" +
		"\x02\x02\x02RU\x03\x02\x02\x02ST\x07\t\x02\x02TV\x05\"\x12\x02US\x03\x02" +
		"\x02\x02VW\x03\x02\x02\x02WU\x03\x02\x02\x02WX\x03\x02\x02\x02X\x13\x03" +
		"\x02\x02\x02YZ\x07\n\x02\x02Z\x15\x03\x02\x02\x02[]\x07\v\x02\x02\\[\x03" +
		"\x02\x02\x02\\]\x03\x02\x02\x02]^\x03\x02\x02\x02^`\x05\x18\r\x02_a\t" +
		"\x02\x02\x02`_\x03\x02\x02\x02`a\x03\x02\x02\x02ab\x03\x02\x02\x02bc\x05" +
		"\b\x05\x02c\x17\x03\x02\x02\x02de\x05\x1A\x0E\x02ef\x05\x1E\x10\x02fg" +
		"\x05\x1A\x0E\x02g\x19\x03\x02\x02\x02hn\x05 \x11\x02ij\x05\x1C\x0F\x02" +
		"jk\x05 \x11\x02km\x03\x02\x02\x02li\x03\x02\x02\x02mp\x03\x02\x02\x02" +
		"nl\x03\x02\x02\x02no\x03\x02\x02\x02ov\x03\x02\x02\x02pn\x03\x02\x02\x02" +
		"qr\x05\x1C\x0F\x02rs\x05 \x11\x02sv\x03\x02\x02\x02tv\x05 \x11\x02uh\x03" +
		"\x02\x02\x02uq\x03\x02\x02\x02ut\x03\x02\x02\x02v\x1B\x03\x02\x02\x02" +
		"wx\t\x03\x02\x02x\x1D\x03\x02\x02\x02yz\t\x04\x02\x02z\x1F\x03\x02\x02" +
		"\x02{\x7F\x05$\x13\x02|\x7F\x05\"\x12\x02}\x7F\x072\x02\x02~{\x03\x02" +
		"\x02\x02~|\x03\x02\x02\x02~}\x03\x02\x02\x02\x7F!\x03\x02\x02\x02\x80" +
		"\x81\t\x05\x02\x02\x81#\x03\x02\x02\x02\x82\x84\t\x06\x02\x02\x83\x82" +
		"\x03\x02\x02\x02\x83\x84\x03\x02\x02\x02\x84\x85\x03\x02\x02\x02\x85\x86" +
		"\x076\x02\x02\x86%\x03\x02\x02\x02\x87\x88\x077\x02\x02\x88\'\x03\x02" +
		"\x02\x02\x0E+0<FQW\\`nu~\x83";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!robotwarParser.__ATN) {
			robotwarParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(robotwarParser._serializedATN));
		}

		return robotwarParser.__ATN;
	}

}

export class ProgramContext extends ParserRuleContext {
	public line(): LineContext[];
	public line(i: number): LineContext;
	public line(i?: number): LineContext | LineContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LineContext);
		} else {
			return this.getRuleContext(i, LineContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return robotwarParser.RULE_program; }
	// @Override
	public enterRule(listener: robotwarListener): void {
		if (listener.enterProgram) {
			listener.enterProgram(this);
		}
	}
	// @Override
	public exitRule(listener: robotwarListener): void {
		if (listener.exitProgram) {
			listener.exitProgram(this);
		}
	}
}


export class LineContext extends ParserRuleContext {
	public EOL(): TerminalNode { return this.getToken(robotwarParser.EOL, 0); }
	public label(): LabelContext | undefined {
		return this.tryGetRuleContext(0, LabelContext);
	}
	public comment(): CommentContext | undefined {
		return this.tryGetRuleContext(0, CommentContext);
	}
	public statement(): StatementContext | undefined {
		return this.tryGetRuleContext(0, StatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return robotwarParser.RULE_line; }
	// @Override
	public enterRule(listener: robotwarListener): void {
		if (listener.enterLine) {
			listener.enterLine(this);
		}
	}
	// @Override
	public exitRule(listener: robotwarListener): void {
		if (listener.exitLine) {
			listener.exitLine(this);
		}
	}
}


export class LabelContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(robotwarParser.ID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return robotwarParser.RULE_label; }
	// @Override
	public enterRule(listener: robotwarListener): void {
		if (listener.enterLabel) {
			listener.enterLabel(this);
		}
	}
	// @Override
	public exitRule(listener: robotwarListener): void {
		if (listener.exitLabel) {
			listener.exitLabel(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	public ifstatement(): IfstatementContext | undefined {
		return this.tryGetRuleContext(0, IfstatementContext);
	}
	public tostatement(): TostatementContext | undefined {
		return this.tryGetRuleContext(0, TostatementContext);
	}
	public gosubstatement(): GosubstatementContext | undefined {
		return this.tryGetRuleContext(0, GosubstatementContext);
	}
	public gotostatement(): GotostatementContext | undefined {
		return this.tryGetRuleContext(0, GotostatementContext);
	}
	public endsubstatement(): EndsubstatementContext | undefined {
		return this.tryGetRuleContext(0, EndsubstatementContext);
	}
	public accumstatement(): AccumstatementContext | undefined {
		return this.tryGetRuleContext(0, AccumstatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return robotwarParser.RULE_statement; }
	// @Override
	public enterRule(listener: robotwarListener): void {
		if (listener.enterStatement) {
			listener.enterStatement(this);
		}
	}
	// @Override
	public exitRule(listener: robotwarListener): void {
		if (listener.exitStatement) {
			listener.exitStatement(this);
		}
	}
}


export class AccumstatementContext extends ParserRuleContext {
	public accumexpression(): AccumexpressionContext {
		return this.getRuleContext(0, AccumexpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return robotwarParser.RULE_accumstatement; }
	// @Override
	public enterRule(listener: robotwarListener): void {
		if (listener.enterAccumstatement) {
			listener.enterAccumstatement(this);
		}
	}
	// @Override
	public exitRule(listener: robotwarListener): void {
		if (listener.exitAccumstatement) {
			listener.exitAccumstatement(this);
		}
	}
}


export class AccumexpressionContext extends ParserRuleContext {
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return robotwarParser.RULE_accumexpression; }
	// @Override
	public enterRule(listener: robotwarListener): void {
		if (listener.enterAccumexpression) {
			listener.enterAccumexpression(this);
		}
	}
	// @Override
	public exitRule(listener: robotwarListener): void {
		if (listener.exitAccumexpression) {
			listener.exitAccumexpression(this);
		}
	}
}


export class GosubstatementContext extends ParserRuleContext {
	public label(): LabelContext {
		return this.getRuleContext(0, LabelContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return robotwarParser.RULE_gosubstatement; }
	// @Override
	public enterRule(listener: robotwarListener): void {
		if (listener.enterGosubstatement) {
			listener.enterGosubstatement(this);
		}
	}
	// @Override
	public exitRule(listener: robotwarListener): void {
		if (listener.exitGosubstatement) {
			listener.exitGosubstatement(this);
		}
	}
}


export class GotostatementContext extends ParserRuleContext {
	public label(): LabelContext {
		return this.getRuleContext(0, LabelContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return robotwarParser.RULE_gotostatement; }
	// @Override
	public enterRule(listener: robotwarListener): void {
		if (listener.enterGotostatement) {
			listener.enterGotostatement(this);
		}
	}
	// @Override
	public exitRule(listener: robotwarListener): void {
		if (listener.exitGotostatement) {
			listener.exitGotostatement(this);
		}
	}
}


export class TostatementContext extends ParserRuleContext {
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public register(): RegisterContext[];
	public register(i: number): RegisterContext;
	public register(i?: number): RegisterContext | RegisterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RegisterContext);
		} else {
			return this.getRuleContext(i, RegisterContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return robotwarParser.RULE_tostatement; }
	// @Override
	public enterRule(listener: robotwarListener): void {
		if (listener.enterTostatement) {
			listener.enterTostatement(this);
		}
	}
	// @Override
	public exitRule(listener: robotwarListener): void {
		if (listener.exitTostatement) {
			listener.exitTostatement(this);
		}
	}
}


export class EndsubstatementContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return robotwarParser.RULE_endsubstatement; }
	// @Override
	public enterRule(listener: robotwarListener): void {
		if (listener.enterEndsubstatement) {
			listener.enterEndsubstatement(this);
		}
	}
	// @Override
	public exitRule(listener: robotwarListener): void {
		if (listener.exitEndsubstatement) {
			listener.exitEndsubstatement(this);
		}
	}
}


export class IfstatementContext extends ParserRuleContext {
	public condition(): ConditionContext {
		return this.getRuleContext(0, ConditionContext);
	}
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	public EOL(): TerminalNode | undefined { return this.tryGetToken(robotwarParser.EOL, 0); }
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(robotwarParser.COMMA, 0); }
	public DOT(): TerminalNode | undefined { return this.tryGetToken(robotwarParser.DOT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return robotwarParser.RULE_ifstatement; }
	// @Override
	public enterRule(listener: robotwarListener): void {
		if (listener.enterIfstatement) {
			listener.enterIfstatement(this);
		}
	}
	// @Override
	public exitRule(listener: robotwarListener): void {
		if (listener.exitIfstatement) {
			listener.exitIfstatement(this);
		}
	}
}


export class ConditionContext extends ParserRuleContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public comparison(): ComparisonContext {
		return this.getRuleContext(0, ComparisonContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return robotwarParser.RULE_condition; }
	// @Override
	public enterRule(listener: robotwarListener): void {
		if (listener.enterCondition) {
			listener.enterCondition(this);
		}
	}
	// @Override
	public exitRule(listener: robotwarListener): void {
		if (listener.exitCondition) {
			listener.exitCondition(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	public argument(): ArgumentContext[];
	public argument(i: number): ArgumentContext;
	public argument(i?: number): ArgumentContext | ArgumentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ArgumentContext);
		} else {
			return this.getRuleContext(i, ArgumentContext);
		}
	}
	public operation(): OperationContext[];
	public operation(i: number): OperationContext;
	public operation(i?: number): OperationContext | OperationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OperationContext);
		} else {
			return this.getRuleContext(i, OperationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return robotwarParser.RULE_expression; }
	// @Override
	public enterRule(listener: robotwarListener): void {
		if (listener.enterExpression) {
			listener.enterExpression(this);
		}
	}
	// @Override
	public exitRule(listener: robotwarListener): void {
		if (listener.exitExpression) {
			listener.exitExpression(this);
		}
	}
}


export class OperationContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return robotwarParser.RULE_operation; }
	// @Override
	public enterRule(listener: robotwarListener): void {
		if (listener.enterOperation) {
			listener.enterOperation(this);
		}
	}
	// @Override
	public exitRule(listener: robotwarListener): void {
		if (listener.exitOperation) {
			listener.exitOperation(this);
		}
	}
}


export class ComparisonContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return robotwarParser.RULE_comparison; }
	// @Override
	public enterRule(listener: robotwarListener): void {
		if (listener.enterComparison) {
			listener.enterComparison(this);
		}
	}
	// @Override
	public exitRule(listener: robotwarListener): void {
		if (listener.exitComparison) {
			listener.exitComparison(this);
		}
	}
}


export class ArgumentContext extends ParserRuleContext {
	public number(): NumberContext | undefined {
		return this.tryGetRuleContext(0, NumberContext);
	}
	public register(): RegisterContext | undefined {
		return this.tryGetRuleContext(0, RegisterContext);
	}
	public DATA(): TerminalNode | undefined { return this.tryGetToken(robotwarParser.DATA, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return robotwarParser.RULE_argument; }
	// @Override
	public enterRule(listener: robotwarListener): void {
		if (listener.enterArgument) {
			listener.enterArgument(this);
		}
	}
	// @Override
	public exitRule(listener: robotwarListener): void {
		if (listener.exitArgument) {
			listener.exitArgument(this);
		}
	}
}


export class RegisterContext extends ParserRuleContext {
	public A(): TerminalNode | undefined { return this.tryGetToken(robotwarParser.A, 0); }
	public B(): TerminalNode | undefined { return this.tryGetToken(robotwarParser.B, 0); }
	public C(): TerminalNode | undefined { return this.tryGetToken(robotwarParser.C, 0); }
	public D(): TerminalNode | undefined { return this.tryGetToken(robotwarParser.D, 0); }
	public E(): TerminalNode | undefined { return this.tryGetToken(robotwarParser.E, 0); }
	public F(): TerminalNode | undefined { return this.tryGetToken(robotwarParser.F, 0); }
	public G(): TerminalNode | undefined { return this.tryGetToken(robotwarParser.G, 0); }
	public H(): TerminalNode | undefined { return this.tryGetToken(robotwarParser.H, 0); }
	public I(): TerminalNode | undefined { return this.tryGetToken(robotwarParser.I, 0); }
	public J(): TerminalNode | undefined { return this.tryGetToken(robotwarParser.J, 0); }
	public K(): TerminalNode | undefined { return this.tryGetToken(robotwarParser.K, 0); }
	public L(): TerminalNode | undefined { return this.tryGetToken(robotwarParser.L, 0); }
	public M(): TerminalNode | undefined { return this.tryGetToken(robotwarParser.M, 0); }
	public N(): TerminalNode | undefined { return this.tryGetToken(robotwarParser.N, 0); }
	public O(): TerminalNode | undefined { return this.tryGetToken(robotwarParser.O, 0); }
	public P(): TerminalNode | undefined { return this.tryGetToken(robotwarParser.P, 0); }
	public Q(): TerminalNode | undefined { return this.tryGetToken(robotwarParser.Q, 0); }
	public R(): TerminalNode | undefined { return this.tryGetToken(robotwarParser.R, 0); }
	public S(): TerminalNode | undefined { return this.tryGetToken(robotwarParser.S, 0); }
	public T(): TerminalNode | undefined { return this.tryGetToken(robotwarParser.T, 0); }
	public U(): TerminalNode | undefined { return this.tryGetToken(robotwarParser.U, 0); }
	public V(): TerminalNode | undefined { return this.tryGetToken(robotwarParser.V, 0); }
	public W(): TerminalNode | undefined { return this.tryGetToken(robotwarParser.W, 0); }
	public X(): TerminalNode | undefined { return this.tryGetToken(robotwarParser.X, 0); }
	public Y(): TerminalNode | undefined { return this.tryGetToken(robotwarParser.Y, 0); }
	public Z(): TerminalNode | undefined { return this.tryGetToken(robotwarParser.Z, 0); }
	public AIM(): TerminalNode | undefined { return this.tryGetToken(robotwarParser.AIM, 0); }
	public SHOT(): TerminalNode | undefined { return this.tryGetToken(robotwarParser.SHOT, 0); }
	public RADAR(): TerminalNode | undefined { return this.tryGetToken(robotwarParser.RADAR, 0); }
	public SPEEDX(): TerminalNode | undefined { return this.tryGetToken(robotwarParser.SPEEDX, 0); }
	public SPEEDY(): TerminalNode | undefined { return this.tryGetToken(robotwarParser.SPEEDY, 0); }
	public RANDOM(): TerminalNode | undefined { return this.tryGetToken(robotwarParser.RANDOM, 0); }
	public INDEX(): TerminalNode | undefined { return this.tryGetToken(robotwarParser.INDEX, 0); }
	public DATA(): TerminalNode | undefined { return this.tryGetToken(robotwarParser.DATA, 0); }
	public DAMAGE(): TerminalNode | undefined { return this.tryGetToken(robotwarParser.DAMAGE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return robotwarParser.RULE_register; }
	// @Override
	public enterRule(listener: robotwarListener): void {
		if (listener.enterRegister) {
			listener.enterRegister(this);
		}
	}
	// @Override
	public exitRule(listener: robotwarListener): void {
		if (listener.exitRegister) {
			listener.exitRegister(this);
		}
	}
}


export class NumberContext extends ParserRuleContext {
	public NUMBER(): TerminalNode { return this.getToken(robotwarParser.NUMBER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return robotwarParser.RULE_number; }
	// @Override
	public enterRule(listener: robotwarListener): void {
		if (listener.enterNumber) {
			listener.enterNumber(this);
		}
	}
	// @Override
	public exitRule(listener: robotwarListener): void {
		if (listener.exitNumber) {
			listener.exitNumber(this);
		}
	}
}


export class CommentContext extends ParserRuleContext {
	public COMMENT(): TerminalNode { return this.getToken(robotwarParser.COMMENT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return robotwarParser.RULE_comment; }
	// @Override
	public enterRule(listener: robotwarListener): void {
		if (listener.enterComment) {
			listener.enterComment(this);
		}
	}
	// @Override
	public exitRule(listener: robotwarListener): void {
		if (listener.exitComment) {
			listener.exitComment(this);
		}
	}
}


