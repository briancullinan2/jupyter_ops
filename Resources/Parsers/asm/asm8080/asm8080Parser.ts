// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/asm/asm8080/asm8080.g4 by ANTLR 4.7.3-SNAPSHOT


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

import { asm8080Listener } from "./asm8080Listener";
import { asm8080Visitor } from "./asm8080Visitor";


export class asm8080Parser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly ASSEMBLER_DIRECTIVE = 10;
	public static readonly REGISTER = 11;
	public static readonly OPCODE = 12;
	public static readonly NAME = 13;
	public static readonly NUMBER = 14;
	public static readonly COMMENT = 15;
	public static readonly STRING = 16;
	public static readonly EOL = 17;
	public static readonly WS = 18;
	public static readonly RULE_prog = 0;
	public static readonly RULE_line = 1;
	public static readonly RULE_instruction = 2;
	public static readonly RULE_opcode = 3;
	public static readonly RULE_register_ = 4;
	public static readonly RULE_directive = 5;
	public static readonly RULE_assemblerdirective = 6;
	public static readonly RULE_lbl = 7;
	public static readonly RULE_expressionlist = 8;
	public static readonly RULE_label = 9;
	public static readonly RULE_expression = 10;
	public static readonly RULE_multiplyingExpression = 11;
	public static readonly RULE_argument = 12;
	public static readonly RULE_dollar = 13;
	public static readonly RULE_string = 14;
	public static readonly RULE_name = 15;
	public static readonly RULE_number = 16;
	public static readonly RULE_comment = 17;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"prog", "line", "instruction", "opcode", "register_", "directive", "assemblerdirective", 
		"lbl", "expressionlist", "label", "expression", "multiplyingExpression", 
		"argument", "dollar", "string", "name", "number", "comment",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "':'", "','", "'+'", "'-'", "'*'", "'/'", "'('", "')'", "'$'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, "ASSEMBLER_DIRECTIVE", "REGISTER", "OPCODE", 
		"NAME", "NUMBER", "COMMENT", "STRING", "EOL", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(asm8080Parser._LITERAL_NAMES, asm8080Parser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return asm8080Parser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "asm8080.g4"; }

	// @Override
	public get ruleNames(): string[] { return asm8080Parser.ruleNames; }

	// @Override
	public get serializedATN(): string { return asm8080Parser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(asm8080Parser._ATN, this);
	}
	// @RuleVersion(0)
	public prog(): ProgContext {
		let _localctx: ProgContext = new ProgContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, asm8080Parser.RULE_prog);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 40;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 37;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 0, this._ctx) ) {
				case 1:
					{
					this.state = 36;
					this.line();
					}
					break;
				}
				this.state = 39;
				this.match(asm8080Parser.EOL);
				}
				}
				this.state = 42;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << asm8080Parser.T__6) | (1 << asm8080Parser.T__8) | (1 << asm8080Parser.ASSEMBLER_DIRECTIVE) | (1 << asm8080Parser.REGISTER) | (1 << asm8080Parser.OPCODE) | (1 << asm8080Parser.NAME) | (1 << asm8080Parser.NUMBER) | (1 << asm8080Parser.COMMENT) | (1 << asm8080Parser.STRING) | (1 << asm8080Parser.EOL))) !== 0));
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 2, asm8080Parser.RULE_line);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 45;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 2, this._ctx) ) {
			case 1:
				{
				this.state = 44;
				this.lbl();
				}
				break;
			}
			this.state = 49;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case asm8080Parser.OPCODE:
				{
				this.state = 47;
				this.instruction();
				}
				break;
			case asm8080Parser.T__6:
			case asm8080Parser.T__8:
			case asm8080Parser.ASSEMBLER_DIRECTIVE:
			case asm8080Parser.REGISTER:
			case asm8080Parser.NAME:
			case asm8080Parser.NUMBER:
			case asm8080Parser.STRING:
				{
				this.state = 48;
				this.directive();
				}
				break;
			case asm8080Parser.COMMENT:
			case asm8080Parser.EOL:
				break;
			default:
				break;
			}
			this.state = 52;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === asm8080Parser.COMMENT) {
				{
				this.state = 51;
				this.comment();
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
	public instruction(): InstructionContext {
		let _localctx: InstructionContext = new InstructionContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, asm8080Parser.RULE_instruction);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 54;
			this.opcode();
			this.state = 56;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << asm8080Parser.T__6) | (1 << asm8080Parser.T__8) | (1 << asm8080Parser.REGISTER) | (1 << asm8080Parser.NAME) | (1 << asm8080Parser.NUMBER) | (1 << asm8080Parser.STRING))) !== 0)) {
				{
				this.state = 55;
				this.expressionlist();
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
	public opcode(): OpcodeContext {
		let _localctx: OpcodeContext = new OpcodeContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, asm8080Parser.RULE_opcode);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 58;
			this.match(asm8080Parser.OPCODE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public register_(): Register_Context {
		let _localctx: Register_Context = new Register_Context(this._ctx, this.state);
		this.enterRule(_localctx, 8, asm8080Parser.RULE_register_);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 60;
			this.match(asm8080Parser.REGISTER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public directive(): DirectiveContext {
		let _localctx: DirectiveContext = new DirectiveContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, asm8080Parser.RULE_directive);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 63;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << asm8080Parser.T__6) | (1 << asm8080Parser.T__8) | (1 << asm8080Parser.REGISTER) | (1 << asm8080Parser.NAME) | (1 << asm8080Parser.NUMBER) | (1 << asm8080Parser.STRING))) !== 0)) {
				{
				this.state = 62;
				this.argument();
				}
			}

			this.state = 65;
			this.assemblerdirective();
			this.state = 66;
			this.expressionlist();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assemblerdirective(): AssemblerdirectiveContext {
		let _localctx: AssemblerdirectiveContext = new AssemblerdirectiveContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, asm8080Parser.RULE_assemblerdirective);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 68;
			this.match(asm8080Parser.ASSEMBLER_DIRECTIVE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public lbl(): LblContext {
		let _localctx: LblContext = new LblContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, asm8080Parser.RULE_lbl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 70;
			this.label();
			this.state = 72;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === asm8080Parser.T__0) {
				{
				this.state = 71;
				this.match(asm8080Parser.T__0);
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
	public expressionlist(): ExpressionlistContext {
		let _localctx: ExpressionlistContext = new ExpressionlistContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, asm8080Parser.RULE_expressionlist);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 74;
			this.expression();
			this.state = 79;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === asm8080Parser.T__1) {
				{
				{
				this.state = 75;
				this.match(asm8080Parser.T__1);
				this.state = 76;
				this.expression();
				}
				}
				this.state = 81;
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
	public label(): LabelContext {
		let _localctx: LabelContext = new LabelContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, asm8080Parser.RULE_label);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 82;
			this.name();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 20, asm8080Parser.RULE_expression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 84;
			this.multiplyingExpression();
			this.state = 89;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === asm8080Parser.T__2 || _la === asm8080Parser.T__3) {
				{
				{
				this.state = 85;
				_la = this._input.LA(1);
				if (!(_la === asm8080Parser.T__2 || _la === asm8080Parser.T__3)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 86;
				this.multiplyingExpression();
				}
				}
				this.state = 91;
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
	public multiplyingExpression(): MultiplyingExpressionContext {
		let _localctx: MultiplyingExpressionContext = new MultiplyingExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, asm8080Parser.RULE_multiplyingExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 92;
			this.argument();
			this.state = 97;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === asm8080Parser.T__4 || _la === asm8080Parser.T__5) {
				{
				{
				this.state = 93;
				_la = this._input.LA(1);
				if (!(_la === asm8080Parser.T__4 || _la === asm8080Parser.T__5)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 94;
				this.argument();
				}
				}
				this.state = 99;
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
	public argument(): ArgumentContext {
		let _localctx: ArgumentContext = new ArgumentContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, asm8080Parser.RULE_argument);
		try {
			this.state = 109;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case asm8080Parser.NUMBER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 100;
				this.number();
				}
				break;
			case asm8080Parser.REGISTER:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 101;
				this.register_();
				}
				break;
			case asm8080Parser.T__8:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 102;
				this.dollar();
				}
				break;
			case asm8080Parser.NAME:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 103;
				this.name();
				}
				break;
			case asm8080Parser.STRING:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 104;
				this.string();
				}
				break;
			case asm8080Parser.T__6:
				this.enterOuterAlt(_localctx, 6);
				{
				{
				this.state = 105;
				this.match(asm8080Parser.T__6);
				this.state = 106;
				this.expression();
				this.state = 107;
				this.match(asm8080Parser.T__7);
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
	public dollar(): DollarContext {
		let _localctx: DollarContext = new DollarContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, asm8080Parser.RULE_dollar);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 111;
			this.match(asm8080Parser.T__8);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public string(): StringContext {
		let _localctx: StringContext = new StringContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, asm8080Parser.RULE_string);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 113;
			this.match(asm8080Parser.STRING);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public name(): NameContext {
		let _localctx: NameContext = new NameContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, asm8080Parser.RULE_name);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 115;
			this.match(asm8080Parser.NAME);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 32, asm8080Parser.RULE_number);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 117;
			this.match(asm8080Parser.NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 34, asm8080Parser.RULE_comment);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 119;
			this.match(asm8080Parser.COMMENT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x14|\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x03\x02\x05\x02(\n\x02\x03\x02\x06\x02+\n\x02\r\x02\x0E\x02" +
		",\x03\x03\x05\x030\n\x03\x03\x03\x03\x03\x05\x034\n\x03\x03\x03\x05\x03" +
		"7\n\x03\x03\x04\x03\x04\x05\x04;\n\x04\x03\x05\x03\x05\x03\x06\x03\x06" +
		"\x03\x07\x05\x07B\n\x07\x03\x07\x03\x07\x03\x07\x03\b\x03\b\x03\t\x03" +
		"\t\x05\tK\n\t\x03\n\x03\n\x03\n\x07\nP\n\n\f\n\x0E\nS\v\n\x03\v\x03\v" +
		"\x03\f\x03\f\x03\f\x07\fZ\n\f\f\f\x0E\f]\v\f\x03\r\x03\r\x03\r\x07\rb" +
		"\n\r\f\r\x0E\re\v\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03" +
		"\x0E\x03\x0E\x03\x0E\x05\x0Ep\n\x0E\x03\x0F\x03\x0F\x03\x10\x03\x10\x03" +
		"\x11\x03\x11\x03\x12\x03\x12\x03\x13\x03\x13\x03\x13\x02\x02\x02\x14\x02" +
		"\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02" +
		"\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02\x02\x04\x03\x02" +
		"\x05\x06\x03\x02\x07\b\x02z\x02*\x03\x02\x02\x02\x04/\x03\x02\x02\x02" +
		"\x068\x03\x02\x02\x02\b<\x03\x02\x02\x02\n>\x03\x02\x02\x02\fA\x03\x02" +
		"\x02\x02\x0EF\x03\x02\x02\x02\x10H\x03\x02\x02\x02\x12L\x03\x02\x02\x02" +
		"\x14T\x03\x02\x02\x02\x16V\x03\x02\x02\x02\x18^\x03\x02\x02\x02\x1Ao\x03" +
		"\x02\x02\x02\x1Cq\x03\x02\x02\x02\x1Es\x03\x02\x02\x02 u\x03\x02\x02\x02" +
		"\"w\x03\x02\x02\x02$y\x03\x02\x02\x02&(\x05\x04\x03\x02\'&\x03\x02\x02" +
		"\x02\'(\x03\x02\x02\x02()\x03\x02\x02\x02)+\x07\x13\x02\x02*\'\x03\x02" +
		"\x02\x02+,\x03\x02\x02\x02,*\x03\x02\x02\x02,-\x03\x02\x02\x02-\x03\x03" +
		"\x02\x02\x02.0\x05\x10\t\x02/.\x03\x02\x02\x02/0\x03\x02\x02\x0203\x03" +
		"\x02\x02\x0214\x05\x06\x04\x0224\x05\f\x07\x0231\x03\x02\x02\x0232\x03" +
		"\x02\x02\x0234\x03\x02\x02\x0246\x03\x02\x02\x0257\x05$\x13\x0265\x03" +
		"\x02\x02\x0267\x03\x02\x02\x027\x05\x03\x02\x02\x028:\x05\b\x05\x029;" +
		"\x05\x12\n\x02:9\x03\x02\x02\x02:;\x03\x02\x02\x02;\x07\x03\x02\x02\x02" +
		"<=\x07\x0E\x02\x02=\t\x03\x02\x02\x02>?\x07\r\x02\x02?\v\x03\x02\x02\x02" +
		"@B\x05\x1A\x0E\x02A@\x03\x02\x02\x02AB\x03\x02\x02\x02BC\x03\x02\x02\x02" +
		"CD\x05\x0E\b\x02DE\x05\x12\n\x02E\r\x03\x02\x02\x02FG\x07\f\x02\x02G\x0F" +
		"\x03\x02\x02\x02HJ\x05\x14\v\x02IK\x07\x03\x02\x02JI\x03\x02\x02\x02J" +
		"K\x03\x02\x02\x02K\x11\x03\x02\x02\x02LQ\x05\x16\f\x02MN\x07\x04\x02\x02" +
		"NP\x05\x16\f\x02OM\x03\x02\x02\x02PS\x03\x02\x02\x02QO\x03\x02\x02\x02" +
		"QR\x03\x02\x02\x02R\x13\x03\x02\x02\x02SQ\x03\x02\x02\x02TU\x05 \x11\x02" +
		"U\x15\x03\x02\x02\x02V[\x05\x18\r\x02WX\t\x02\x02\x02XZ\x05\x18\r\x02" +
		"YW\x03\x02\x02\x02Z]\x03\x02\x02\x02[Y\x03\x02\x02\x02[\\\x03\x02\x02" +
		"\x02\\\x17\x03\x02\x02\x02][\x03\x02\x02\x02^c\x05\x1A\x0E\x02_`\t\x03" +
		"\x02\x02`b\x05\x1A\x0E\x02a_\x03\x02\x02\x02be\x03\x02\x02\x02ca\x03\x02" +
		"\x02\x02cd\x03\x02\x02\x02d\x19\x03\x02\x02\x02ec\x03\x02\x02\x02fp\x05" +
		"\"\x12\x02gp\x05\n\x06\x02hp\x05\x1C\x0F\x02ip\x05 \x11\x02jp\x05\x1E" +
		"\x10\x02kl\x07\t\x02\x02lm\x05\x16\f\x02mn\x07\n\x02\x02np\x03\x02\x02" +
		"\x02of\x03\x02\x02\x02og\x03\x02\x02\x02oh\x03\x02\x02\x02oi\x03\x02\x02" +
		"\x02oj\x03\x02\x02\x02ok\x03\x02\x02\x02p\x1B\x03\x02\x02\x02qr\x07\v" +
		"\x02\x02r\x1D\x03\x02\x02\x02st\x07\x12\x02\x02t\x1F\x03\x02\x02\x02u" +
		"v\x07\x0F\x02\x02v!\x03\x02\x02\x02wx\x07\x10\x02\x02x#\x03\x02\x02\x02" +
		"yz\x07\x11\x02\x02z%\x03\x02\x02\x02\x0E\',/36:AJQ[co";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!asm8080Parser.__ATN) {
			asm8080Parser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(asm8080Parser._serializedATN));
		}

		return asm8080Parser.__ATN;
	}

}

export class ProgContext extends ParserRuleContext {
	public EOL(): TerminalNode[];
	public EOL(i: number): TerminalNode;
	public EOL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(asm8080Parser.EOL);
		} else {
			return this.getToken(asm8080Parser.EOL, i);
		}
	}
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
	public get ruleIndex(): number { return asm8080Parser.RULE_prog; }
	// @Override
	public enterRule(listener: asm8080Listener): void {
		if (listener.enterProg) {
			listener.enterProg(this);
		}
	}
	// @Override
	public exitRule(listener: asm8080Listener): void {
		if (listener.exitProg) {
			listener.exitProg(this);
		}
	}
	// @Override
	public accept<Result>(visitor: asm8080Visitor<Result>): Result {
		if (visitor.visitProg) {
			return visitor.visitProg(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LineContext extends ParserRuleContext {
	public lbl(): LblContext | undefined {
		return this.tryGetRuleContext(0, LblContext);
	}
	public instruction(): InstructionContext | undefined {
		return this.tryGetRuleContext(0, InstructionContext);
	}
	public directive(): DirectiveContext | undefined {
		return this.tryGetRuleContext(0, DirectiveContext);
	}
	public comment(): CommentContext | undefined {
		return this.tryGetRuleContext(0, CommentContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return asm8080Parser.RULE_line; }
	// @Override
	public enterRule(listener: asm8080Listener): void {
		if (listener.enterLine) {
			listener.enterLine(this);
		}
	}
	// @Override
	public exitRule(listener: asm8080Listener): void {
		if (listener.exitLine) {
			listener.exitLine(this);
		}
	}
	// @Override
	public accept<Result>(visitor: asm8080Visitor<Result>): Result {
		if (visitor.visitLine) {
			return visitor.visitLine(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InstructionContext extends ParserRuleContext {
	public opcode(): OpcodeContext {
		return this.getRuleContext(0, OpcodeContext);
	}
	public expressionlist(): ExpressionlistContext | undefined {
		return this.tryGetRuleContext(0, ExpressionlistContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return asm8080Parser.RULE_instruction; }
	// @Override
	public enterRule(listener: asm8080Listener): void {
		if (listener.enterInstruction) {
			listener.enterInstruction(this);
		}
	}
	// @Override
	public exitRule(listener: asm8080Listener): void {
		if (listener.exitInstruction) {
			listener.exitInstruction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: asm8080Visitor<Result>): Result {
		if (visitor.visitInstruction) {
			return visitor.visitInstruction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OpcodeContext extends ParserRuleContext {
	public OPCODE(): TerminalNode { return this.getToken(asm8080Parser.OPCODE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return asm8080Parser.RULE_opcode; }
	// @Override
	public enterRule(listener: asm8080Listener): void {
		if (listener.enterOpcode) {
			listener.enterOpcode(this);
		}
	}
	// @Override
	public exitRule(listener: asm8080Listener): void {
		if (listener.exitOpcode) {
			listener.exitOpcode(this);
		}
	}
	// @Override
	public accept<Result>(visitor: asm8080Visitor<Result>): Result {
		if (visitor.visitOpcode) {
			return visitor.visitOpcode(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Register_Context extends ParserRuleContext {
	public REGISTER(): TerminalNode { return this.getToken(asm8080Parser.REGISTER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return asm8080Parser.RULE_register_; }
	// @Override
	public enterRule(listener: asm8080Listener): void {
		if (listener.enterRegister_) {
			listener.enterRegister_(this);
		}
	}
	// @Override
	public exitRule(listener: asm8080Listener): void {
		if (listener.exitRegister_) {
			listener.exitRegister_(this);
		}
	}
	// @Override
	public accept<Result>(visitor: asm8080Visitor<Result>): Result {
		if (visitor.visitRegister_) {
			return visitor.visitRegister_(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DirectiveContext extends ParserRuleContext {
	public assemblerdirective(): AssemblerdirectiveContext {
		return this.getRuleContext(0, AssemblerdirectiveContext);
	}
	public expressionlist(): ExpressionlistContext {
		return this.getRuleContext(0, ExpressionlistContext);
	}
	public argument(): ArgumentContext | undefined {
		return this.tryGetRuleContext(0, ArgumentContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return asm8080Parser.RULE_directive; }
	// @Override
	public enterRule(listener: asm8080Listener): void {
		if (listener.enterDirective) {
			listener.enterDirective(this);
		}
	}
	// @Override
	public exitRule(listener: asm8080Listener): void {
		if (listener.exitDirective) {
			listener.exitDirective(this);
		}
	}
	// @Override
	public accept<Result>(visitor: asm8080Visitor<Result>): Result {
		if (visitor.visitDirective) {
			return visitor.visitDirective(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssemblerdirectiveContext extends ParserRuleContext {
	public ASSEMBLER_DIRECTIVE(): TerminalNode { return this.getToken(asm8080Parser.ASSEMBLER_DIRECTIVE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return asm8080Parser.RULE_assemblerdirective; }
	// @Override
	public enterRule(listener: asm8080Listener): void {
		if (listener.enterAssemblerdirective) {
			listener.enterAssemblerdirective(this);
		}
	}
	// @Override
	public exitRule(listener: asm8080Listener): void {
		if (listener.exitAssemblerdirective) {
			listener.exitAssemblerdirective(this);
		}
	}
	// @Override
	public accept<Result>(visitor: asm8080Visitor<Result>): Result {
		if (visitor.visitAssemblerdirective) {
			return visitor.visitAssemblerdirective(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LblContext extends ParserRuleContext {
	public label(): LabelContext {
		return this.getRuleContext(0, LabelContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return asm8080Parser.RULE_lbl; }
	// @Override
	public enterRule(listener: asm8080Listener): void {
		if (listener.enterLbl) {
			listener.enterLbl(this);
		}
	}
	// @Override
	public exitRule(listener: asm8080Listener): void {
		if (listener.exitLbl) {
			listener.exitLbl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: asm8080Visitor<Result>): Result {
		if (visitor.visitLbl) {
			return visitor.visitLbl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionlistContext extends ParserRuleContext {
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
	public get ruleIndex(): number { return asm8080Parser.RULE_expressionlist; }
	// @Override
	public enterRule(listener: asm8080Listener): void {
		if (listener.enterExpressionlist) {
			listener.enterExpressionlist(this);
		}
	}
	// @Override
	public exitRule(listener: asm8080Listener): void {
		if (listener.exitExpressionlist) {
			listener.exitExpressionlist(this);
		}
	}
	// @Override
	public accept<Result>(visitor: asm8080Visitor<Result>): Result {
		if (visitor.visitExpressionlist) {
			return visitor.visitExpressionlist(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LabelContext extends ParserRuleContext {
	public name(): NameContext {
		return this.getRuleContext(0, NameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return asm8080Parser.RULE_label; }
	// @Override
	public enterRule(listener: asm8080Listener): void {
		if (listener.enterLabel) {
			listener.enterLabel(this);
		}
	}
	// @Override
	public exitRule(listener: asm8080Listener): void {
		if (listener.exitLabel) {
			listener.exitLabel(this);
		}
	}
	// @Override
	public accept<Result>(visitor: asm8080Visitor<Result>): Result {
		if (visitor.visitLabel) {
			return visitor.visitLabel(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	public multiplyingExpression(): MultiplyingExpressionContext[];
	public multiplyingExpression(i: number): MultiplyingExpressionContext;
	public multiplyingExpression(i?: number): MultiplyingExpressionContext | MultiplyingExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MultiplyingExpressionContext);
		} else {
			return this.getRuleContext(i, MultiplyingExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return asm8080Parser.RULE_expression; }
	// @Override
	public enterRule(listener: asm8080Listener): void {
		if (listener.enterExpression) {
			listener.enterExpression(this);
		}
	}
	// @Override
	public exitRule(listener: asm8080Listener): void {
		if (listener.exitExpression) {
			listener.exitExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: asm8080Visitor<Result>): Result {
		if (visitor.visitExpression) {
			return visitor.visitExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MultiplyingExpressionContext extends ParserRuleContext {
	public argument(): ArgumentContext[];
	public argument(i: number): ArgumentContext;
	public argument(i?: number): ArgumentContext | ArgumentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ArgumentContext);
		} else {
			return this.getRuleContext(i, ArgumentContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return asm8080Parser.RULE_multiplyingExpression; }
	// @Override
	public enterRule(listener: asm8080Listener): void {
		if (listener.enterMultiplyingExpression) {
			listener.enterMultiplyingExpression(this);
		}
	}
	// @Override
	public exitRule(listener: asm8080Listener): void {
		if (listener.exitMultiplyingExpression) {
			listener.exitMultiplyingExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: asm8080Visitor<Result>): Result {
		if (visitor.visitMultiplyingExpression) {
			return visitor.visitMultiplyingExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArgumentContext extends ParserRuleContext {
	public number(): NumberContext | undefined {
		return this.tryGetRuleContext(0, NumberContext);
	}
	public register_(): Register_Context | undefined {
		return this.tryGetRuleContext(0, Register_Context);
	}
	public dollar(): DollarContext | undefined {
		return this.tryGetRuleContext(0, DollarContext);
	}
	public name(): NameContext | undefined {
		return this.tryGetRuleContext(0, NameContext);
	}
	public string(): StringContext | undefined {
		return this.tryGetRuleContext(0, StringContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return asm8080Parser.RULE_argument; }
	// @Override
	public enterRule(listener: asm8080Listener): void {
		if (listener.enterArgument) {
			listener.enterArgument(this);
		}
	}
	// @Override
	public exitRule(listener: asm8080Listener): void {
		if (listener.exitArgument) {
			listener.exitArgument(this);
		}
	}
	// @Override
	public accept<Result>(visitor: asm8080Visitor<Result>): Result {
		if (visitor.visitArgument) {
			return visitor.visitArgument(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DollarContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return asm8080Parser.RULE_dollar; }
	// @Override
	public enterRule(listener: asm8080Listener): void {
		if (listener.enterDollar) {
			listener.enterDollar(this);
		}
	}
	// @Override
	public exitRule(listener: asm8080Listener): void {
		if (listener.exitDollar) {
			listener.exitDollar(this);
		}
	}
	// @Override
	public accept<Result>(visitor: asm8080Visitor<Result>): Result {
		if (visitor.visitDollar) {
			return visitor.visitDollar(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StringContext extends ParserRuleContext {
	public STRING(): TerminalNode { return this.getToken(asm8080Parser.STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return asm8080Parser.RULE_string; }
	// @Override
	public enterRule(listener: asm8080Listener): void {
		if (listener.enterString) {
			listener.enterString(this);
		}
	}
	// @Override
	public exitRule(listener: asm8080Listener): void {
		if (listener.exitString) {
			listener.exitString(this);
		}
	}
	// @Override
	public accept<Result>(visitor: asm8080Visitor<Result>): Result {
		if (visitor.visitString) {
			return visitor.visitString(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NameContext extends ParserRuleContext {
	public NAME(): TerminalNode { return this.getToken(asm8080Parser.NAME, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return asm8080Parser.RULE_name; }
	// @Override
	public enterRule(listener: asm8080Listener): void {
		if (listener.enterName) {
			listener.enterName(this);
		}
	}
	// @Override
	public exitRule(listener: asm8080Listener): void {
		if (listener.exitName) {
			listener.exitName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: asm8080Visitor<Result>): Result {
		if (visitor.visitName) {
			return visitor.visitName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NumberContext extends ParserRuleContext {
	public NUMBER(): TerminalNode { return this.getToken(asm8080Parser.NUMBER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return asm8080Parser.RULE_number; }
	// @Override
	public enterRule(listener: asm8080Listener): void {
		if (listener.enterNumber) {
			listener.enterNumber(this);
		}
	}
	// @Override
	public exitRule(listener: asm8080Listener): void {
		if (listener.exitNumber) {
			listener.exitNumber(this);
		}
	}
	// @Override
	public accept<Result>(visitor: asm8080Visitor<Result>): Result {
		if (visitor.visitNumber) {
			return visitor.visitNumber(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CommentContext extends ParserRuleContext {
	public COMMENT(): TerminalNode { return this.getToken(asm8080Parser.COMMENT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return asm8080Parser.RULE_comment; }
	// @Override
	public enterRule(listener: asm8080Listener): void {
		if (listener.enterComment) {
			listener.enterComment(this);
		}
	}
	// @Override
	public exitRule(listener: asm8080Listener): void {
		if (listener.exitComment) {
			listener.exitComment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: asm8080Visitor<Result>): Result {
		if (visitor.visitComment) {
			return visitor.visitComment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


