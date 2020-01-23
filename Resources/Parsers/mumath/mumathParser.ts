// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/mumath/mumath.g4 by ANTLR 4.7.3-SNAPSHOT


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

import { mumathListener } from "./mumathListener";

export class mumathParser extends Parser {
	public static readonly BLOCK = 1;
	public static readonly ENDBLOCK = 2;
	public static readonly FUNCTION = 3;
	public static readonly ENDFUN = 4;
	public static readonly EQF = 5;
	public static readonly LOOP = 6;
	public static readonly ENDLOOP = 7;
	public static readonly WHEN = 8;
	public static readonly EXIT = 9;
	public static readonly OR = 10;
	public static readonly AND = 11;
	public static readonly NOT = 12;
	public static readonly MOD = 13;
	public static readonly WS = 14;
	public static readonly COMMENT = 15;
	public static readonly EQUATION = 16;
	public static readonly QUOTE = 17;
	public static readonly PLUS = 18;
	public static readonly MINUS = 19;
	public static readonly STAR = 20;
	public static readonly SLASH = 21;
	public static readonly COMMA = 22;
	public static readonly SEMI = 23;
	public static readonly DOLLAR = 24;
	public static readonly COLON = 25;
	public static readonly EQC = 26;
	public static readonly NOT_EQUAL = 27;
	public static readonly LT = 28;
	public static readonly LE = 29;
	public static readonly GE = 30;
	public static readonly GT = 31;
	public static readonly LPAREN = 32;
	public static readonly RPAREN = 33;
	public static readonly POWER = 34;
	public static readonly ID = 35;
	public static readonly ARR = 36;
	public static readonly STRING = 37;
	public static readonly NUMBER = 38;
	public static readonly RULE_program = 0;
	public static readonly RULE_assignment = 1;
	public static readonly RULE_list = 2;
	public static readonly RULE_functionDefinition = 3;
	public static readonly RULE_actualParameter = 4;
	public static readonly RULE_statments = 5;
	public static readonly RULE_block = 6;
	public static readonly RULE_loop = 7;
	public static readonly RULE_when = 8;
	public static readonly RULE_expression = 9;
	public static readonly RULE_relationalOperator = 10;
	public static readonly RULE_simpleExpression = 11;
	public static readonly RULE_addingOperator = 12;
	public static readonly RULE_term = 13;
	public static readonly RULE_multiplyingOperator = 14;
	public static readonly RULE_factor = 15;
	public static readonly RULE_constant = 16;
	public static readonly RULE_functionDesignator = 17;
	public static readonly RULE_equal = 18;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "assignment", "list", "functionDefinition", "actualParameter", 
		"statments", "block", "loop", "when", "expression", "relationalOperator", 
		"simpleExpression", "addingOperator", "term", "multiplyingOperator", "factor", 
		"constant", "functionDesignator", "equal",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'BLOCK'", "'ENDBLOCK'", "'FUNCTION'", "'ENDFUN'", "'EQ'", 
		"'LOOP'", "'ENDLOOP'", "'WHEN'", "'EXIT'", "'OR'", "'AND'", "'NOT'", "'mod'", 
		undefined, undefined, "'=='", "'''", "'+'", "'-'", "'*'", "'/'", "','", 
		"';'", "'$'", "':'", "'='", "'<>'", "'<'", "'<='", "'>='", "'>'", "'('", 
		"')'", "'^'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "BLOCK", "ENDBLOCK", "FUNCTION", "ENDFUN", "EQF", "LOOP", "ENDLOOP", 
		"WHEN", "EXIT", "OR", "AND", "NOT", "MOD", "WS", "COMMENT", "EQUATION", 
		"QUOTE", "PLUS", "MINUS", "STAR", "SLASH", "COMMA", "SEMI", "DOLLAR", 
		"COLON", "EQC", "NOT_EQUAL", "LT", "LE", "GE", "GT", "LPAREN", "RPAREN", 
		"POWER", "ID", "ARR", "STRING", "NUMBER",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(mumathParser._LITERAL_NAMES, mumathParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return mumathParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "mumath.g4"; }

	// @Override
	public get ruleNames(): string[] { return mumathParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return mumathParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(mumathParser._ATN, this);
	}
	// @RuleVersion(0)
	public program(): ProgramContext {
		let _localctx: ProgramContext = new ProgramContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, mumathParser.RULE_program);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 47;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === mumathParser.FUNCTION || _la === mumathParser.ID) {
				{
				{
				this.state = 41;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 0, this._ctx) ) {
				case 1:
					{
					this.state = 38;
					this.functionDefinition();
					}
					break;

				case 2:
					{
					this.state = 39;
					this.assignment();
					}
					break;

				case 3:
					{
					this.state = 40;
					this.functionDesignator();
					}
					break;
				}
				this.state = 43;
				_la = this._input.LA(1);
				if (!(_la === mumathParser.SEMI || _la === mumathParser.DOLLAR)) {
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
				this.state = 49;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 50;
			this.match(mumathParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 2, mumathParser.RULE_assignment);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 54;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 52;
					this.match(mumathParser.ID);
					this.state = 53;
					this.match(mumathParser.COLON);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 56;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 2, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			this.state = 58;
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
	public list(): ListContext {
		let _localctx: ListContext = new ListContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, mumathParser.RULE_list);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 60;
			this.match(mumathParser.LPAREN);
			this.state = 71;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case mumathParser.RPAREN:
				{
				this.state = 61;
				this.match(mumathParser.RPAREN);
				}
				break;
			case mumathParser.ID:
				{
				this.state = 62;
				this.match(mumathParser.ID);
				this.state = 67;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === mumathParser.COMMA) {
					{
					{
					this.state = 63;
					this.match(mumathParser.COMMA);
					this.state = 64;
					this.match(mumathParser.ID);
					}
					}
					this.state = 69;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 70;
				this.match(mumathParser.RPAREN);
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
	public functionDefinition(): FunctionDefinitionContext {
		let _localctx: FunctionDefinitionContext = new FunctionDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, mumathParser.RULE_functionDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 73;
			this.match(mumathParser.FUNCTION);
			this.state = 74;
			this.match(mumathParser.ID);
			this.state = 75;
			this.list();
			this.state = 76;
			this.match(mumathParser.COMMA);
			this.state = 77;
			this.statments();
			this.state = 79;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === mumathParser.COMMA) {
				{
				this.state = 78;
				this.match(mumathParser.COMMA);
				}
			}

			this.state = 81;
			this.match(mumathParser.ENDFUN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public actualParameter(): ActualParameterContext {
		let _localctx: ActualParameterContext = new ActualParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, mumathParser.RULE_actualParameter);
		try {
			this.state = 85;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 6, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 83;
				this.expression();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 84;
				this.assignment();
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
	public statments(): StatmentsContext {
		let _localctx: StatmentsContext = new StatmentsContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, mumathParser.RULE_statments);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 93;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 7, this._ctx) ) {
			case 1:
				{
				this.state = 87;
				this.loop();
				}
				break;

			case 2:
				{
				this.state = 88;
				this.when();
				}
				break;

			case 3:
				{
				this.state = 89;
				this.block();
				}
				break;

			case 4:
				{
				this.state = 90;
				this.assignment();
				}
				break;

			case 5:
				{
				this.state = 91;
				this.expression();
				}
				break;

			case 6:
				{
				this.state = 92;
				this.functionDesignator();
				}
				break;
			}
			this.state = 99;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 95;
					this.match(mumathParser.COMMA);
					this.state = 96;
					this.statments();
					}
					}
				}
				this.state = 101;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
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
		this.enterRule(_localctx, 12, mumathParser.RULE_block);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 102;
			this.match(mumathParser.BLOCK);
			this.state = 103;
			this.statments();
			this.state = 104;
			this.match(mumathParser.COMMA);
			this.state = 105;
			this.match(mumathParser.ENDBLOCK);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public loop(): LoopContext {
		let _localctx: LoopContext = new LoopContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, mumathParser.RULE_loop);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 107;
			this.match(mumathParser.LOOP);
			this.state = 108;
			this.statments();
			this.state = 110;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === mumathParser.COMMA) {
				{
				this.state = 109;
				this.match(mumathParser.COMMA);
				}
			}

			this.state = 112;
			this.match(mumathParser.ENDLOOP);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public when(): WhenContext {
		let _localctx: WhenContext = new WhenContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, mumathParser.RULE_when);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 114;
			this.match(mumathParser.WHEN);
			this.state = 115;
			this.expression();
			{
			this.state = 117;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === mumathParser.COMMA) {
				{
				this.state = 116;
				this.match(mumathParser.COMMA);
				}
			}

			this.state = 119;
			this.match(mumathParser.EXIT);
			this.state = 120;
			this.match(mumathParser.COMMA);
			this.state = 121;
			this.statments();
			this.state = 123;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === mumathParser.COMMA) {
				{
				this.state = 122;
				this.match(mumathParser.COMMA);
				}
			}

			this.state = 125;
			this.match(mumathParser.EXIT);
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
	public expression(): ExpressionContext {
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, mumathParser.RULE_expression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 127;
			this.simpleExpression();
			this.state = 133;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << mumathParser.EQF) | (1 << mumathParser.EQUATION) | (1 << mumathParser.EQC) | (1 << mumathParser.NOT_EQUAL) | (1 << mumathParser.LT) | (1 << mumathParser.LE) | (1 << mumathParser.GE) | (1 << mumathParser.GT))) !== 0)) {
				{
				{
				this.state = 128;
				this.relationalOperator();
				this.state = 129;
				this.simpleExpression();
				}
				}
				this.state = 135;
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
	public relationalOperator(): RelationalOperatorContext {
		let _localctx: RelationalOperatorContext = new RelationalOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, mumathParser.RULE_relationalOperator);
		let _la: number;
		try {
			this.state = 138;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case mumathParser.EQF:
			case mumathParser.EQC:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 136;
				this.equal();
				}
				break;
			case mumathParser.EQUATION:
			case mumathParser.NOT_EQUAL:
			case mumathParser.LT:
			case mumathParser.LE:
			case mumathParser.GE:
			case mumathParser.GT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 137;
				_la = this._input.LA(1);
				if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << mumathParser.EQUATION) | (1 << mumathParser.NOT_EQUAL) | (1 << mumathParser.LT) | (1 << mumathParser.LE) | (1 << mumathParser.GE) | (1 << mumathParser.GT))) !== 0))) {
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
	public simpleExpression(): SimpleExpressionContext {
		let _localctx: SimpleExpressionContext = new SimpleExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, mumathParser.RULE_simpleExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 141;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === mumathParser.MINUS) {
				{
				this.state = 140;
				this.match(mumathParser.MINUS);
				}
			}

			this.state = 143;
			this.term();
			this.state = 149;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << mumathParser.OR) | (1 << mumathParser.PLUS) | (1 << mumathParser.MINUS))) !== 0)) {
				{
				{
				this.state = 144;
				this.addingOperator();
				this.state = 145;
				this.term();
				}
				}
				this.state = 151;
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
	public addingOperator(): AddingOperatorContext {
		let _localctx: AddingOperatorContext = new AddingOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, mumathParser.RULE_addingOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 152;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << mumathParser.OR) | (1 << mumathParser.PLUS) | (1 << mumathParser.MINUS))) !== 0))) {
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
	public term(): TermContext {
		let _localctx: TermContext = new TermContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, mumathParser.RULE_term);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 154;
			this.factor();
			this.state = 160;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 11)) & ~0x1F) === 0 && ((1 << (_la - 11)) & ((1 << (mumathParser.AND - 11)) | (1 << (mumathParser.MOD - 11)) | (1 << (mumathParser.STAR - 11)) | (1 << (mumathParser.SLASH - 11)) | (1 << (mumathParser.POWER - 11)))) !== 0)) {
				{
				{
				this.state = 155;
				this.multiplyingOperator();
				this.state = 156;
				this.factor();
				}
				}
				this.state = 162;
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
	public multiplyingOperator(): MultiplyingOperatorContext {
		let _localctx: MultiplyingOperatorContext = new MultiplyingOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, mumathParser.RULE_multiplyingOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 163;
			_la = this._input.LA(1);
			if (!(((((_la - 11)) & ~0x1F) === 0 && ((1 << (_la - 11)) & ((1 << (mumathParser.AND - 11)) | (1 << (mumathParser.MOD - 11)) | (1 << (mumathParser.STAR - 11)) | (1 << (mumathParser.SLASH - 11)) | (1 << (mumathParser.POWER - 11)))) !== 0))) {
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
	public factor(): FactorContext {
		let _localctx: FactorContext = new FactorContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, mumathParser.RULE_factor);
		try {
			this.state = 174;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 17, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 165;
				this.match(mumathParser.ID);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 166;
				this.constant();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 167;
				this.match(mumathParser.LPAREN);
				this.state = 168;
				this.expression();
				this.state = 169;
				this.match(mumathParser.RPAREN);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 171;
				this.functionDesignator();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 172;
				this.match(mumathParser.NOT);
				this.state = 173;
				this.factor();
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
	public constant(): ConstantContext {
		let _localctx: ConstantContext = new ConstantContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, mumathParser.RULE_constant);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 182;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 18, this._ctx) ) {
			case 1:
				{
				this.state = 176;
				this.match(mumathParser.NUMBER);
				}
				break;

			case 2:
				{
				this.state = 177;
				this.match(mumathParser.STRING);
				}
				break;

			case 3:
				{
				this.state = 178;
				this.match(mumathParser.QUOTE);
				this.state = 179;
				this.match(mumathParser.ID);
				}
				break;

			case 4:
				{
				this.state = 180;
				this.match(mumathParser.QUOTE);
				this.state = 181;
				this.match(mumathParser.STRING);
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
	public functionDesignator(): FunctionDesignatorContext {
		let _localctx: FunctionDesignatorContext = new FunctionDesignatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, mumathParser.RULE_functionDesignator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 184;
			this.match(mumathParser.ID);
			this.state = 185;
			this.match(mumathParser.LPAREN);
			this.state = 195;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case mumathParser.NOT:
			case mumathParser.QUOTE:
			case mumathParser.MINUS:
			case mumathParser.LPAREN:
			case mumathParser.ID:
			case mumathParser.STRING:
			case mumathParser.NUMBER:
				{
				{
				this.state = 186;
				this.actualParameter();
				this.state = 191;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === mumathParser.COMMA) {
					{
					{
					this.state = 187;
					this.match(mumathParser.COMMA);
					this.state = 188;
					this.actualParameter();
					}
					}
					this.state = 193;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				}
				break;
			case mumathParser.RPAREN:
				// tslint:disable-next-line:no-empty
				{
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 197;
			this.match(mumathParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public equal(): EqualContext {
		let _localctx: EqualContext = new EqualContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, mumathParser.RULE_equal);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 199;
			_la = this._input.LA(1);
			if (!(_la === mumathParser.EQF || _la === mumathParser.EQC)) {
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03(\xCC\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x03\x02\x03\x02\x03\x02\x05\x02,\n\x02\x03\x02" +
		"\x03\x02\x07\x020\n\x02\f\x02\x0E\x023\v\x02\x03\x02\x03\x02\x03\x03\x03" +
		"\x03\x06\x039\n\x03\r\x03\x0E\x03:\x03\x03\x03\x03\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x07\x04D\n\x04\f\x04\x0E\x04G\v\x04\x03\x04\x05\x04" +
		"J\n\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05R\n\x05" +
		"\x03\x05\x03\x05\x03\x06\x03\x06\x05\x06X\n\x06\x03\x07\x03\x07\x03\x07" +
		"\x03\x07\x03\x07\x03\x07\x05\x07`\n\x07\x03\x07\x03\x07\x07\x07d\n\x07" +
		"\f\x07\x0E\x07g\v\x07\x03\b\x03\b\x03\b\x03\b\x03\b\x03\t\x03\t\x03\t" +
		"\x05\tq\n\t\x03\t\x03\t\x03\n\x03\n\x03\n\x05\nx\n\n\x03\n\x03\n\x03\n" +
		"\x03\n\x05\n~\n\n\x03\n\x03\n\x03\v\x03\v\x03\v\x03\v\x07\v\x86\n\v\f" +
		"\v\x0E\v\x89\v\v\x03\f\x03\f\x05\f\x8D\n\f\x03\r\x05\r\x90\n\r\x03\r\x03" +
		"\r\x03\r\x03\r\x07\r\x96\n\r\f\r\x0E\r\x99\v\r\x03\x0E\x03\x0E\x03\x0F" +
		"\x03\x0F\x03\x0F\x03\x0F\x07\x0F\xA1\n\x0F\f\x0F\x0E\x0F\xA4\v\x0F\x03" +
		"\x10\x03\x10\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03" +
		"\x11\x03\x11\x05\x11\xB1\n\x11\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12" +
		"\x03\x12\x05\x12\xB9\n\x12\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x07" +
		"\x13\xC0\n\x13\f\x13\x0E\x13\xC3\v\x13\x03\x13\x05\x13\xC6\n\x13\x03\x13" +
		"\x03\x13\x03\x14\x03\x14\x03\x14\x02\x02\x02\x15\x02\x02\x04\x02\x06\x02" +
		"\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A" +
		"\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02\x02\x07\x03\x02\x19\x1A\x04" +
		"\x02\x12\x12\x1D!\x04\x02\f\f\x14\x15\x06\x02\r\r\x0F\x0F\x16\x17$$\x04" +
		"\x02\x07\x07\x1C\x1C\x02\xD7\x021\x03\x02\x02\x02\x048\x03\x02\x02\x02" +
		"\x06>\x03\x02\x02\x02\bK\x03\x02\x02\x02\nW\x03\x02\x02\x02\f_\x03\x02" +
		"\x02\x02\x0Eh\x03\x02\x02\x02\x10m\x03\x02\x02\x02\x12t\x03\x02\x02\x02" +
		"\x14\x81\x03\x02\x02\x02\x16\x8C\x03\x02\x02\x02\x18\x8F\x03\x02\x02\x02" +
		"\x1A\x9A\x03\x02\x02\x02\x1C\x9C\x03\x02\x02\x02\x1E\xA5\x03\x02\x02\x02" +
		" \xB0\x03\x02\x02\x02\"\xB8\x03\x02\x02\x02$\xBA\x03\x02\x02\x02&\xC9" +
		"\x03\x02\x02\x02(,\x05\b\x05\x02),\x05\x04\x03\x02*,\x05$\x13\x02+(\x03" +
		"\x02\x02\x02+)\x03\x02\x02\x02+*\x03\x02\x02\x02,-\x03\x02\x02\x02-.\t" +
		"\x02\x02\x02.0\x03\x02\x02\x02/+\x03\x02\x02\x0203\x03\x02\x02\x021/\x03" +
		"\x02\x02\x0212\x03\x02\x02\x0224\x03\x02\x02\x0231\x03\x02\x02\x0245\x07" +
		"\x02\x02\x035\x03\x03\x02\x02\x0267\x07%\x02\x0279\x07\x1B\x02\x0286\x03" +
		"\x02\x02\x029:\x03\x02\x02\x02:8\x03\x02\x02\x02:;\x03\x02\x02\x02;<\x03" +
		"\x02\x02\x02<=\x05\x14\v\x02=\x05\x03\x02\x02\x02>I\x07\"\x02\x02?J\x07" +
		"#\x02\x02@E\x07%\x02\x02AB\x07\x18\x02\x02BD\x07%\x02\x02CA\x03\x02\x02" +
		"\x02DG\x03\x02\x02\x02EC\x03\x02\x02\x02EF\x03\x02\x02\x02FH\x03\x02\x02" +
		"\x02GE\x03\x02\x02\x02HJ\x07#\x02\x02I?\x03\x02\x02\x02I@\x03\x02\x02" +
		"\x02J\x07\x03\x02\x02\x02KL\x07\x05\x02\x02LM\x07%\x02\x02MN\x05\x06\x04" +
		"\x02NO\x07\x18\x02\x02OQ\x05\f\x07\x02PR\x07\x18\x02\x02QP\x03\x02\x02" +
		"\x02QR\x03\x02\x02\x02RS\x03\x02\x02\x02ST\x07\x06\x02\x02T\t\x03\x02" +
		"\x02\x02UX\x05\x14\v\x02VX\x05\x04\x03\x02WU\x03\x02\x02\x02WV\x03\x02" +
		"\x02\x02X\v\x03\x02\x02\x02Y`\x05\x10\t\x02Z`\x05\x12\n\x02[`\x05\x0E" +
		"\b\x02\\`\x05\x04\x03\x02]`\x05\x14\v\x02^`\x05$\x13\x02_Y\x03\x02\x02" +
		"\x02_Z\x03\x02\x02\x02_[\x03\x02\x02\x02_\\\x03\x02\x02\x02_]\x03\x02" +
		"\x02\x02_^\x03\x02\x02\x02`e\x03\x02\x02\x02ab\x07\x18\x02\x02bd\x05\f" +
		"\x07\x02ca\x03\x02\x02\x02dg\x03\x02\x02\x02ec\x03\x02\x02\x02ef\x03\x02" +
		"\x02\x02f\r\x03\x02\x02\x02ge\x03\x02\x02\x02hi\x07\x03\x02\x02ij\x05" +
		"\f\x07\x02jk\x07\x18\x02\x02kl\x07\x04\x02\x02l\x0F\x03\x02\x02\x02mn" +
		"\x07\b\x02\x02np\x05\f\x07\x02oq\x07\x18\x02\x02po\x03\x02\x02\x02pq\x03" +
		"\x02\x02\x02qr\x03\x02\x02\x02rs\x07\t\x02\x02s\x11\x03\x02\x02\x02tu" +
		"\x07\n\x02\x02uw\x05\x14\v\x02vx\x07\x18\x02\x02wv\x03\x02\x02\x02wx\x03" +
		"\x02\x02\x02xy\x03\x02\x02\x02yz\x07\v\x02\x02z{\x07\x18\x02\x02{}\x05" +
		"\f\x07\x02|~\x07\x18\x02\x02}|\x03\x02\x02\x02}~\x03\x02\x02\x02~\x7F" +
		"\x03\x02\x02\x02\x7F\x80\x07\v\x02\x02\x80\x13\x03\x02\x02\x02\x81\x87" +
		"\x05\x18\r\x02\x82\x83\x05\x16\f\x02\x83\x84\x05\x18\r\x02\x84\x86\x03" +
		"\x02\x02\x02\x85\x82\x03\x02\x02\x02\x86\x89\x03\x02\x02\x02\x87\x85\x03" +
		"\x02\x02\x02\x87\x88\x03\x02\x02\x02\x88\x15\x03\x02\x02\x02\x89\x87\x03" +
		"\x02\x02\x02\x8A\x8D\x05&\x14\x02\x8B\x8D\t\x03\x02\x02\x8C\x8A\x03\x02" +
		"\x02\x02\x8C\x8B\x03\x02\x02\x02\x8D\x17\x03\x02\x02\x02\x8E\x90\x07\x15" +
		"\x02\x02\x8F\x8E\x03\x02\x02\x02\x8F\x90\x03\x02\x02\x02\x90\x91\x03\x02" +
		"\x02\x02\x91\x97\x05\x1C\x0F\x02\x92\x93\x05\x1A\x0E\x02\x93\x94\x05\x1C" +
		"\x0F\x02\x94\x96\x03\x02\x02\x02\x95\x92\x03\x02\x02\x02\x96\x99\x03\x02" +
		"\x02\x02\x97\x95\x03\x02\x02\x02\x97\x98\x03\x02\x02\x02\x98\x19\x03\x02" +
		"\x02\x02\x99\x97\x03\x02\x02\x02\x9A\x9B\t\x04\x02\x02\x9B\x1B\x03\x02" +
		"\x02\x02\x9C\xA2\x05 \x11\x02\x9D\x9E\x05\x1E\x10\x02\x9E\x9F\x05 \x11" +
		"\x02\x9F\xA1\x03\x02\x02\x02\xA0\x9D\x03\x02\x02\x02\xA1\xA4\x03\x02\x02" +
		"\x02\xA2\xA0\x03\x02\x02\x02\xA2\xA3\x03\x02\x02\x02\xA3\x1D\x03\x02\x02" +
		"\x02\xA4\xA2\x03\x02\x02\x02\xA5\xA6\t\x05\x02\x02\xA6\x1F\x03\x02\x02" +
		"\x02\xA7\xB1\x07%\x02\x02\xA8\xB1\x05\"\x12\x02\xA9\xAA\x07\"\x02\x02" +
		"\xAA\xAB\x05\x14\v\x02\xAB\xAC\x07#\x02\x02\xAC\xB1\x03\x02\x02\x02\xAD" +
		"\xB1\x05$\x13\x02\xAE\xAF\x07\x0E\x02\x02\xAF\xB1\x05 \x11\x02\xB0\xA7" +
		"\x03\x02\x02\x02\xB0\xA8\x03\x02\x02\x02\xB0\xA9\x03\x02\x02\x02\xB0\xAD" +
		"\x03\x02\x02\x02\xB0\xAE\x03\x02\x02\x02\xB1!\x03\x02\x02\x02\xB2\xB9" +
		"\x07(\x02\x02\xB3\xB9\x07\'\x02\x02\xB4\xB5\x07\x13\x02\x02\xB5\xB9\x07" +
		"%\x02\x02\xB6\xB7\x07\x13\x02\x02\xB7\xB9\x07\'\x02\x02\xB8\xB2\x03\x02" +
		"\x02\x02\xB8\xB3\x03\x02\x02\x02\xB8\xB4\x03\x02\x02\x02\xB8\xB6\x03\x02" +
		"\x02\x02\xB9#\x03\x02\x02\x02\xBA\xBB\x07%\x02\x02\xBB\xC5\x07\"\x02\x02" +
		"\xBC\xC1\x05\n\x06\x02\xBD\xBE\x07\x18\x02\x02\xBE\xC0\x05\n\x06\x02\xBF" +
		"\xBD\x03\x02\x02\x02\xC0\xC3\x03\x02\x02\x02\xC1\xBF\x03\x02\x02\x02\xC1" +
		"\xC2\x03\x02\x02\x02\xC2\xC6\x03\x02\x02\x02\xC3\xC1\x03\x02\x02\x02\xC4" +
		"\xC6\x03\x02\x02\x02\xC5\xBC\x03\x02\x02\x02\xC5\xC4\x03\x02\x02\x02\xC6" +
		"\xC7\x03\x02\x02\x02\xC7\xC8\x07#\x02\x02\xC8%\x03\x02\x02\x02\xC9\xCA" +
		"\t\x06\x02\x02\xCA\'\x03\x02\x02\x02\x17+1:EIQW_epw}\x87\x8C\x8F\x97\xA2" +
		"\xB0\xB8\xC1\xC5";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!mumathParser.__ATN) {
			mumathParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(mumathParser._serializedATN));
		}

		return mumathParser.__ATN;
	}

}

export class ProgramContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(mumathParser.EOF, 0); }
	public SEMI(): TerminalNode[];
	public SEMI(i: number): TerminalNode;
	public SEMI(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(mumathParser.SEMI);
		} else {
			return this.getToken(mumathParser.SEMI, i);
		}
	}
	public DOLLAR(): TerminalNode[];
	public DOLLAR(i: number): TerminalNode;
	public DOLLAR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(mumathParser.DOLLAR);
		} else {
			return this.getToken(mumathParser.DOLLAR, i);
		}
	}
	public functionDefinition(): FunctionDefinitionContext[];
	public functionDefinition(i: number): FunctionDefinitionContext;
	public functionDefinition(i?: number): FunctionDefinitionContext | FunctionDefinitionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FunctionDefinitionContext);
		} else {
			return this.getRuleContext(i, FunctionDefinitionContext);
		}
	}
	public assignment(): AssignmentContext[];
	public assignment(i: number): AssignmentContext;
	public assignment(i?: number): AssignmentContext | AssignmentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AssignmentContext);
		} else {
			return this.getRuleContext(i, AssignmentContext);
		}
	}
	public functionDesignator(): FunctionDesignatorContext[];
	public functionDesignator(i: number): FunctionDesignatorContext;
	public functionDesignator(i?: number): FunctionDesignatorContext | FunctionDesignatorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FunctionDesignatorContext);
		} else {
			return this.getRuleContext(i, FunctionDesignatorContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mumathParser.RULE_program; }
	// @Override
	public enterRule(listener: mumathListener): void {
		if (listener.enterProgram) {
			listener.enterProgram(this);
		}
	}
	// @Override
	public exitRule(listener: mumathListener): void {
		if (listener.exitProgram) {
			listener.exitProgram(this);
		}
	}
}


export class AssignmentContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public ID(): TerminalNode[];
	public ID(i: number): TerminalNode;
	public ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(mumathParser.ID);
		} else {
			return this.getToken(mumathParser.ID, i);
		}
	}
	public COLON(): TerminalNode[];
	public COLON(i: number): TerminalNode;
	public COLON(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(mumathParser.COLON);
		} else {
			return this.getToken(mumathParser.COLON, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mumathParser.RULE_assignment; }
	// @Override
	public enterRule(listener: mumathListener): void {
		if (listener.enterAssignment) {
			listener.enterAssignment(this);
		}
	}
	// @Override
	public exitRule(listener: mumathListener): void {
		if (listener.exitAssignment) {
			listener.exitAssignment(this);
		}
	}
}


export class ListContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(mumathParser.LPAREN, 0); }
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(mumathParser.RPAREN, 0); }
	public ID(): TerminalNode[];
	public ID(i: number): TerminalNode;
	public ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(mumathParser.ID);
		} else {
			return this.getToken(mumathParser.ID, i);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(mumathParser.COMMA);
		} else {
			return this.getToken(mumathParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mumathParser.RULE_list; }
	// @Override
	public enterRule(listener: mumathListener): void {
		if (listener.enterList) {
			listener.enterList(this);
		}
	}
	// @Override
	public exitRule(listener: mumathListener): void {
		if (listener.exitList) {
			listener.exitList(this);
		}
	}
}


export class FunctionDefinitionContext extends ParserRuleContext {
	public FUNCTION(): TerminalNode { return this.getToken(mumathParser.FUNCTION, 0); }
	public ID(): TerminalNode { return this.getToken(mumathParser.ID, 0); }
	public list(): ListContext {
		return this.getRuleContext(0, ListContext);
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(mumathParser.COMMA);
		} else {
			return this.getToken(mumathParser.COMMA, i);
		}
	}
	public statments(): StatmentsContext {
		return this.getRuleContext(0, StatmentsContext);
	}
	public ENDFUN(): TerminalNode { return this.getToken(mumathParser.ENDFUN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mumathParser.RULE_functionDefinition; }
	// @Override
	public enterRule(listener: mumathListener): void {
		if (listener.enterFunctionDefinition) {
			listener.enterFunctionDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: mumathListener): void {
		if (listener.exitFunctionDefinition) {
			listener.exitFunctionDefinition(this);
		}
	}
}


export class ActualParameterContext extends ParserRuleContext {
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public assignment(): AssignmentContext | undefined {
		return this.tryGetRuleContext(0, AssignmentContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mumathParser.RULE_actualParameter; }
	// @Override
	public enterRule(listener: mumathListener): void {
		if (listener.enterActualParameter) {
			listener.enterActualParameter(this);
		}
	}
	// @Override
	public exitRule(listener: mumathListener): void {
		if (listener.exitActualParameter) {
			listener.exitActualParameter(this);
		}
	}
}


export class StatmentsContext extends ParserRuleContext {
	public loop(): LoopContext | undefined {
		return this.tryGetRuleContext(0, LoopContext);
	}
	public when(): WhenContext | undefined {
		return this.tryGetRuleContext(0, WhenContext);
	}
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	public assignment(): AssignmentContext | undefined {
		return this.tryGetRuleContext(0, AssignmentContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public functionDesignator(): FunctionDesignatorContext | undefined {
		return this.tryGetRuleContext(0, FunctionDesignatorContext);
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(mumathParser.COMMA);
		} else {
			return this.getToken(mumathParser.COMMA, i);
		}
	}
	public statments(): StatmentsContext[];
	public statments(i: number): StatmentsContext;
	public statments(i?: number): StatmentsContext | StatmentsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatmentsContext);
		} else {
			return this.getRuleContext(i, StatmentsContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mumathParser.RULE_statments; }
	// @Override
	public enterRule(listener: mumathListener): void {
		if (listener.enterStatments) {
			listener.enterStatments(this);
		}
	}
	// @Override
	public exitRule(listener: mumathListener): void {
		if (listener.exitStatments) {
			listener.exitStatments(this);
		}
	}
}


export class BlockContext extends ParserRuleContext {
	public BLOCK(): TerminalNode { return this.getToken(mumathParser.BLOCK, 0); }
	public statments(): StatmentsContext {
		return this.getRuleContext(0, StatmentsContext);
	}
	public COMMA(): TerminalNode { return this.getToken(mumathParser.COMMA, 0); }
	public ENDBLOCK(): TerminalNode { return this.getToken(mumathParser.ENDBLOCK, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mumathParser.RULE_block; }
	// @Override
	public enterRule(listener: mumathListener): void {
		if (listener.enterBlock) {
			listener.enterBlock(this);
		}
	}
	// @Override
	public exitRule(listener: mumathListener): void {
		if (listener.exitBlock) {
			listener.exitBlock(this);
		}
	}
}


export class LoopContext extends ParserRuleContext {
	public LOOP(): TerminalNode { return this.getToken(mumathParser.LOOP, 0); }
	public statments(): StatmentsContext {
		return this.getRuleContext(0, StatmentsContext);
	}
	public ENDLOOP(): TerminalNode { return this.getToken(mumathParser.ENDLOOP, 0); }
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(mumathParser.COMMA, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mumathParser.RULE_loop; }
	// @Override
	public enterRule(listener: mumathListener): void {
		if (listener.enterLoop) {
			listener.enterLoop(this);
		}
	}
	// @Override
	public exitRule(listener: mumathListener): void {
		if (listener.exitLoop) {
			listener.exitLoop(this);
		}
	}
}


export class WhenContext extends ParserRuleContext {
	public WHEN(): TerminalNode { return this.getToken(mumathParser.WHEN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public EXIT(): TerminalNode[];
	public EXIT(i: number): TerminalNode;
	public EXIT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(mumathParser.EXIT);
		} else {
			return this.getToken(mumathParser.EXIT, i);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(mumathParser.COMMA);
		} else {
			return this.getToken(mumathParser.COMMA, i);
		}
	}
	public statments(): StatmentsContext | undefined {
		return this.tryGetRuleContext(0, StatmentsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mumathParser.RULE_when; }
	// @Override
	public enterRule(listener: mumathListener): void {
		if (listener.enterWhen) {
			listener.enterWhen(this);
		}
	}
	// @Override
	public exitRule(listener: mumathListener): void {
		if (listener.exitWhen) {
			listener.exitWhen(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	public simpleExpression(): SimpleExpressionContext[];
	public simpleExpression(i: number): SimpleExpressionContext;
	public simpleExpression(i?: number): SimpleExpressionContext | SimpleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SimpleExpressionContext);
		} else {
			return this.getRuleContext(i, SimpleExpressionContext);
		}
	}
	public relationalOperator(): RelationalOperatorContext[];
	public relationalOperator(i: number): RelationalOperatorContext;
	public relationalOperator(i?: number): RelationalOperatorContext | RelationalOperatorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RelationalOperatorContext);
		} else {
			return this.getRuleContext(i, RelationalOperatorContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mumathParser.RULE_expression; }
	// @Override
	public enterRule(listener: mumathListener): void {
		if (listener.enterExpression) {
			listener.enterExpression(this);
		}
	}
	// @Override
	public exitRule(listener: mumathListener): void {
		if (listener.exitExpression) {
			listener.exitExpression(this);
		}
	}
}


export class RelationalOperatorContext extends ParserRuleContext {
	public equal(): EqualContext | undefined {
		return this.tryGetRuleContext(0, EqualContext);
	}
	public NOT_EQUAL(): TerminalNode | undefined { return this.tryGetToken(mumathParser.NOT_EQUAL, 0); }
	public LT(): TerminalNode | undefined { return this.tryGetToken(mumathParser.LT, 0); }
	public LE(): TerminalNode | undefined { return this.tryGetToken(mumathParser.LE, 0); }
	public GE(): TerminalNode | undefined { return this.tryGetToken(mumathParser.GE, 0); }
	public GT(): TerminalNode | undefined { return this.tryGetToken(mumathParser.GT, 0); }
	public EQUATION(): TerminalNode | undefined { return this.tryGetToken(mumathParser.EQUATION, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mumathParser.RULE_relationalOperator; }
	// @Override
	public enterRule(listener: mumathListener): void {
		if (listener.enterRelationalOperator) {
			listener.enterRelationalOperator(this);
		}
	}
	// @Override
	public exitRule(listener: mumathListener): void {
		if (listener.exitRelationalOperator) {
			listener.exitRelationalOperator(this);
		}
	}
}


export class SimpleExpressionContext extends ParserRuleContext {
	public term(): TermContext[];
	public term(i: number): TermContext;
	public term(i?: number): TermContext | TermContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TermContext);
		} else {
			return this.getRuleContext(i, TermContext);
		}
	}
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(mumathParser.MINUS, 0); }
	public addingOperator(): AddingOperatorContext[];
	public addingOperator(i: number): AddingOperatorContext;
	public addingOperator(i?: number): AddingOperatorContext | AddingOperatorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AddingOperatorContext);
		} else {
			return this.getRuleContext(i, AddingOperatorContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mumathParser.RULE_simpleExpression; }
	// @Override
	public enterRule(listener: mumathListener): void {
		if (listener.enterSimpleExpression) {
			listener.enterSimpleExpression(this);
		}
	}
	// @Override
	public exitRule(listener: mumathListener): void {
		if (listener.exitSimpleExpression) {
			listener.exitSimpleExpression(this);
		}
	}
}


export class AddingOperatorContext extends ParserRuleContext {
	public PLUS(): TerminalNode | undefined { return this.tryGetToken(mumathParser.PLUS, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(mumathParser.MINUS, 0); }
	public OR(): TerminalNode | undefined { return this.tryGetToken(mumathParser.OR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mumathParser.RULE_addingOperator; }
	// @Override
	public enterRule(listener: mumathListener): void {
		if (listener.enterAddingOperator) {
			listener.enterAddingOperator(this);
		}
	}
	// @Override
	public exitRule(listener: mumathListener): void {
		if (listener.exitAddingOperator) {
			listener.exitAddingOperator(this);
		}
	}
}


export class TermContext extends ParserRuleContext {
	public factor(): FactorContext[];
	public factor(i: number): FactorContext;
	public factor(i?: number): FactorContext | FactorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FactorContext);
		} else {
			return this.getRuleContext(i, FactorContext);
		}
	}
	public multiplyingOperator(): MultiplyingOperatorContext[];
	public multiplyingOperator(i: number): MultiplyingOperatorContext;
	public multiplyingOperator(i?: number): MultiplyingOperatorContext | MultiplyingOperatorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MultiplyingOperatorContext);
		} else {
			return this.getRuleContext(i, MultiplyingOperatorContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mumathParser.RULE_term; }
	// @Override
	public enterRule(listener: mumathListener): void {
		if (listener.enterTerm) {
			listener.enterTerm(this);
		}
	}
	// @Override
	public exitRule(listener: mumathListener): void {
		if (listener.exitTerm) {
			listener.exitTerm(this);
		}
	}
}


export class MultiplyingOperatorContext extends ParserRuleContext {
	public STAR(): TerminalNode | undefined { return this.tryGetToken(mumathParser.STAR, 0); }
	public SLASH(): TerminalNode | undefined { return this.tryGetToken(mumathParser.SLASH, 0); }
	public MOD(): TerminalNode | undefined { return this.tryGetToken(mumathParser.MOD, 0); }
	public AND(): TerminalNode | undefined { return this.tryGetToken(mumathParser.AND, 0); }
	public POWER(): TerminalNode | undefined { return this.tryGetToken(mumathParser.POWER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mumathParser.RULE_multiplyingOperator; }
	// @Override
	public enterRule(listener: mumathListener): void {
		if (listener.enterMultiplyingOperator) {
			listener.enterMultiplyingOperator(this);
		}
	}
	// @Override
	public exitRule(listener: mumathListener): void {
		if (listener.exitMultiplyingOperator) {
			listener.exitMultiplyingOperator(this);
		}
	}
}


export class FactorContext extends ParserRuleContext {
	public ID(): TerminalNode | undefined { return this.tryGetToken(mumathParser.ID, 0); }
	public constant(): ConstantContext | undefined {
		return this.tryGetRuleContext(0, ConstantContext);
	}
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(mumathParser.LPAREN, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(mumathParser.RPAREN, 0); }
	public functionDesignator(): FunctionDesignatorContext | undefined {
		return this.tryGetRuleContext(0, FunctionDesignatorContext);
	}
	public NOT(): TerminalNode | undefined { return this.tryGetToken(mumathParser.NOT, 0); }
	public factor(): FactorContext | undefined {
		return this.tryGetRuleContext(0, FactorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mumathParser.RULE_factor; }
	// @Override
	public enterRule(listener: mumathListener): void {
		if (listener.enterFactor) {
			listener.enterFactor(this);
		}
	}
	// @Override
	public exitRule(listener: mumathListener): void {
		if (listener.exitFactor) {
			listener.exitFactor(this);
		}
	}
}


export class ConstantContext extends ParserRuleContext {
	public NUMBER(): TerminalNode | undefined { return this.tryGetToken(mumathParser.NUMBER, 0); }
	public STRING(): TerminalNode | undefined { return this.tryGetToken(mumathParser.STRING, 0); }
	public QUOTE(): TerminalNode | undefined { return this.tryGetToken(mumathParser.QUOTE, 0); }
	public ID(): TerminalNode | undefined { return this.tryGetToken(mumathParser.ID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mumathParser.RULE_constant; }
	// @Override
	public enterRule(listener: mumathListener): void {
		if (listener.enterConstant) {
			listener.enterConstant(this);
		}
	}
	// @Override
	public exitRule(listener: mumathListener): void {
		if (listener.exitConstant) {
			listener.exitConstant(this);
		}
	}
}


export class FunctionDesignatorContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(mumathParser.ID, 0); }
	public LPAREN(): TerminalNode { return this.getToken(mumathParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(mumathParser.RPAREN, 0); }
	public actualParameter(): ActualParameterContext[];
	public actualParameter(i: number): ActualParameterContext;
	public actualParameter(i?: number): ActualParameterContext | ActualParameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ActualParameterContext);
		} else {
			return this.getRuleContext(i, ActualParameterContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(mumathParser.COMMA);
		} else {
			return this.getToken(mumathParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mumathParser.RULE_functionDesignator; }
	// @Override
	public enterRule(listener: mumathListener): void {
		if (listener.enterFunctionDesignator) {
			listener.enterFunctionDesignator(this);
		}
	}
	// @Override
	public exitRule(listener: mumathListener): void {
		if (listener.exitFunctionDesignator) {
			listener.exitFunctionDesignator(this);
		}
	}
}


export class EqualContext extends ParserRuleContext {
	public EQF(): TerminalNode | undefined { return this.tryGetToken(mumathParser.EQF, 0); }
	public EQC(): TerminalNode | undefined { return this.tryGetToken(mumathParser.EQC, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mumathParser.RULE_equal; }
	// @Override
	public enterRule(listener: mumathListener): void {
		if (listener.enterEqual) {
			listener.enterEqual(this);
		}
	}
	// @Override
	public exitRule(listener: mumathListener): void {
		if (listener.exitEqual) {
			listener.exitEqual(this);
		}
	}
}


