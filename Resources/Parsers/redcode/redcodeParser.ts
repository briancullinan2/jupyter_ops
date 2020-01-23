// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/redcode/redcode.g4 by ANTLR 4.7.3-SNAPSHOT


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

import { redcodeListener } from "./redcodeListener";

export class redcodeParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly A = 10;
	public static readonly B = 11;
	public static readonly AB = 12;
	public static readonly BA = 13;
	public static readonly F = 14;
	public static readonly X = 15;
	public static readonly I = 16;
	public static readonly DAT = 17;
	public static readonly MOV = 18;
	public static readonly ADD = 19;
	public static readonly SUB = 20;
	public static readonly MUL = 21;
	public static readonly DIV = 22;
	public static readonly MOD = 23;
	public static readonly JMP = 24;
	public static readonly JMZ = 25;
	public static readonly JMN = 26;
	public static readonly DJN = 27;
	public static readonly CMP = 28;
	public static readonly SLT = 29;
	public static readonly DJZ = 30;
	public static readonly SPL = 31;
	public static readonly ORG = 32;
	public static readonly NUMBER = 33;
	public static readonly COMMENT = 34;
	public static readonly EOL = 35;
	public static readonly WS = 36;
	public static readonly RULE_file = 0;
	public static readonly RULE_line = 1;
	public static readonly RULE_instruction = 2;
	public static readonly RULE_opcode = 3;
	public static readonly RULE_modifier = 4;
	public static readonly RULE_mmode = 5;
	public static readonly RULE_number = 6;
	public static readonly RULE_comment = 7;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"file", "line", "instruction", "opcode", "modifier", "mmode", "number", 
		"comment",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'.'", "','", "'#'", "'$'", "'@'", "'<'", "'>'", "'+'", "'-'", 
		"'A'", "'B'", "'AB'", "'BA'", "'F'", "'X'", "'I'", "'DAT'", "'MOV'", "'ADD'", 
		"'SUB'", "'MUL'", "'DIV'", "'MOD'", "'JMP'", "'JMZ'", "'JMN'", "'DJN'", 
		"'CMP'", "'SLT'", "'DJZ'", "'SPL'", "'ORG'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, "A", "B", "AB", "BA", "F", "X", "I", 
		"DAT", "MOV", "ADD", "SUB", "MUL", "DIV", "MOD", "JMP", "JMZ", "JMN", 
		"DJN", "CMP", "SLT", "DJZ", "SPL", "ORG", "NUMBER", "COMMENT", "EOL", 
		"WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(redcodeParser._LITERAL_NAMES, redcodeParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return redcodeParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "redcode.g4"; }

	// @Override
	public get ruleNames(): string[] { return redcodeParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return redcodeParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(redcodeParser._ATN, this);
	}
	// @RuleVersion(0)
	public file(): FileContext {
		let _localctx: FileContext = new FileContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, redcodeParser.RULE_file);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 17;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 16;
				this.line();
				}
				}
				this.state = 19;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (((((_la - 17)) & ~0x1F) === 0 && ((1 << (_la - 17)) & ((1 << (redcodeParser.DAT - 17)) | (1 << (redcodeParser.MOV - 17)) | (1 << (redcodeParser.ADD - 17)) | (1 << (redcodeParser.SUB - 17)) | (1 << (redcodeParser.MUL - 17)) | (1 << (redcodeParser.DIV - 17)) | (1 << (redcodeParser.MOD - 17)) | (1 << (redcodeParser.JMP - 17)) | (1 << (redcodeParser.JMZ - 17)) | (1 << (redcodeParser.JMN - 17)) | (1 << (redcodeParser.DJN - 17)) | (1 << (redcodeParser.CMP - 17)) | (1 << (redcodeParser.SLT - 17)) | (1 << (redcodeParser.DJZ - 17)) | (1 << (redcodeParser.SPL - 17)) | (1 << (redcodeParser.ORG - 17)) | (1 << (redcodeParser.COMMENT - 17)))) !== 0));
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 2, redcodeParser.RULE_line);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 23;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case redcodeParser.COMMENT:
				{
				this.state = 21;
				this.comment();
				}
				break;
			case redcodeParser.DAT:
			case redcodeParser.MOV:
			case redcodeParser.ADD:
			case redcodeParser.SUB:
			case redcodeParser.MUL:
			case redcodeParser.DIV:
			case redcodeParser.MOD:
			case redcodeParser.JMP:
			case redcodeParser.JMZ:
			case redcodeParser.JMN:
			case redcodeParser.DJN:
			case redcodeParser.CMP:
			case redcodeParser.SLT:
			case redcodeParser.DJZ:
			case redcodeParser.SPL:
			case redcodeParser.ORG:
				{
				this.state = 22;
				this.instruction();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 25;
			this.match(redcodeParser.EOL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 4, redcodeParser.RULE_instruction);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 27;
			this.opcode();
			this.state = 30;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === redcodeParser.T__0) {
				{
				this.state = 28;
				this.match(redcodeParser.T__0);
				this.state = 29;
				this.modifier();
				}
			}

			this.state = 33;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << redcodeParser.T__2) | (1 << redcodeParser.T__3) | (1 << redcodeParser.T__4) | (1 << redcodeParser.T__5) | (1 << redcodeParser.T__6))) !== 0)) {
				{
				this.state = 32;
				this.mmode();
				}
			}

			this.state = 35;
			this.number();
			this.state = 41;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === redcodeParser.T__1) {
				{
				this.state = 36;
				this.match(redcodeParser.T__1);
				this.state = 38;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << redcodeParser.T__2) | (1 << redcodeParser.T__3) | (1 << redcodeParser.T__4) | (1 << redcodeParser.T__5) | (1 << redcodeParser.T__6))) !== 0)) {
					{
					this.state = 37;
					this.mmode();
					}
				}

				this.state = 40;
				this.number();
				}
			}

			this.state = 44;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === redcodeParser.COMMENT) {
				{
				this.state = 43;
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
	public opcode(): OpcodeContext {
		let _localctx: OpcodeContext = new OpcodeContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, redcodeParser.RULE_opcode);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 46;
			_la = this._input.LA(1);
			if (!(((((_la - 17)) & ~0x1F) === 0 && ((1 << (_la - 17)) & ((1 << (redcodeParser.DAT - 17)) | (1 << (redcodeParser.MOV - 17)) | (1 << (redcodeParser.ADD - 17)) | (1 << (redcodeParser.SUB - 17)) | (1 << (redcodeParser.MUL - 17)) | (1 << (redcodeParser.DIV - 17)) | (1 << (redcodeParser.MOD - 17)) | (1 << (redcodeParser.JMP - 17)) | (1 << (redcodeParser.JMZ - 17)) | (1 << (redcodeParser.JMN - 17)) | (1 << (redcodeParser.DJN - 17)) | (1 << (redcodeParser.CMP - 17)) | (1 << (redcodeParser.SLT - 17)) | (1 << (redcodeParser.DJZ - 17)) | (1 << (redcodeParser.SPL - 17)) | (1 << (redcodeParser.ORG - 17)))) !== 0))) {
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
	public modifier(): ModifierContext {
		let _localctx: ModifierContext = new ModifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, redcodeParser.RULE_modifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 48;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << redcodeParser.A) | (1 << redcodeParser.B) | (1 << redcodeParser.AB) | (1 << redcodeParser.BA) | (1 << redcodeParser.F) | (1 << redcodeParser.X) | (1 << redcodeParser.I))) !== 0))) {
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
	public mmode(): MmodeContext {
		let _localctx: MmodeContext = new MmodeContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, redcodeParser.RULE_mmode);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 50;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << redcodeParser.T__2) | (1 << redcodeParser.T__3) | (1 << redcodeParser.T__4) | (1 << redcodeParser.T__5) | (1 << redcodeParser.T__6))) !== 0))) {
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
		this.enterRule(_localctx, 12, redcodeParser.RULE_number);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 53;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === redcodeParser.T__7 || _la === redcodeParser.T__8) {
				{
				this.state = 52;
				_la = this._input.LA(1);
				if (!(_la === redcodeParser.T__7 || _la === redcodeParser.T__8)) {
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

			this.state = 55;
			this.match(redcodeParser.NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 14, redcodeParser.RULE_comment);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 57;
			this.match(redcodeParser.COMMENT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03&>\x04\x02\t\x02" +
		"\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07\t\x07" +
		"\x04\b\t\b\x04\t\t\t\x03\x02\x06\x02\x14\n\x02\r\x02\x0E\x02\x15\x03\x03" +
		"\x03\x03\x05\x03\x1A\n\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x05" +
		"\x04!\n\x04\x03\x04\x05\x04$\n\x04\x03\x04\x03\x04\x03\x04\x05\x04)\n" +
		"\x04\x03\x04\x05\x04,\n\x04\x03\x04\x05\x04/\n\x04\x03\x05\x03\x05\x03" +
		"\x06\x03\x06\x03\x07\x03\x07\x03\b\x05\b8\n\b\x03\b\x03\b\x03\t\x03\t" +
		"\x03\t\x02\x02\x02\n\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02" +
		"\x10\x02\x02\x06\x03\x02\x13\"\x03\x02\f\x12\x03\x02\x05\t\x03\x02\n\v" +
		"\x02=\x02\x13\x03\x02\x02\x02\x04\x19\x03\x02\x02\x02\x06\x1D\x03\x02" +
		"\x02\x02\b0\x03\x02\x02\x02\n2\x03\x02\x02\x02\f4\x03\x02\x02\x02\x0E" +
		"7\x03\x02\x02\x02\x10;\x03\x02\x02\x02\x12\x14\x05\x04\x03\x02\x13\x12" +
		"\x03\x02\x02\x02\x14\x15\x03\x02\x02\x02\x15\x13\x03\x02\x02\x02\x15\x16" +
		"\x03\x02\x02\x02\x16\x03\x03\x02\x02\x02\x17\x1A\x05\x10\t\x02\x18\x1A" +
		"\x05\x06\x04\x02\x19\x17\x03\x02\x02\x02\x19\x18\x03\x02\x02\x02\x1A\x1B" +
		"\x03\x02\x02\x02\x1B\x1C\x07%\x02\x02\x1C\x05\x03\x02\x02\x02\x1D \x05" +
		"\b\x05\x02\x1E\x1F\x07\x03\x02\x02\x1F!\x05\n\x06\x02 \x1E\x03\x02\x02" +
		"\x02 !\x03\x02\x02\x02!#\x03\x02\x02\x02\"$\x05\f\x07\x02#\"\x03\x02\x02" +
		"\x02#$\x03\x02\x02\x02$%\x03\x02\x02\x02%+\x05\x0E\b\x02&(\x07\x04\x02" +
		"\x02\')\x05\f\x07\x02(\'\x03\x02\x02\x02()\x03\x02\x02\x02)*\x03\x02\x02" +
		"\x02*,\x05\x0E\b\x02+&\x03\x02\x02\x02+,\x03\x02\x02\x02,.\x03\x02\x02" +
		"\x02-/\x05\x10\t\x02.-\x03\x02\x02\x02./\x03\x02\x02\x02/\x07\x03\x02" +
		"\x02\x0201\t\x02\x02\x021\t\x03\x02\x02\x0223\t\x03\x02\x023\v\x03\x02" +
		"\x02\x0245\t\x04\x02\x025\r\x03\x02\x02\x0268\t\x05\x02\x0276\x03\x02" +
		"\x02\x0278\x03\x02\x02\x0289\x03\x02\x02\x029:\x07#\x02\x02:\x0F\x03\x02" +
		"\x02\x02;<\x07$\x02\x02<\x11\x03\x02\x02\x02\n\x15\x19 #(+.7";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!redcodeParser.__ATN) {
			redcodeParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(redcodeParser._serializedATN));
		}

		return redcodeParser.__ATN;
	}

}

export class FileContext extends ParserRuleContext {
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
	public get ruleIndex(): number { return redcodeParser.RULE_file; }
	// @Override
	public enterRule(listener: redcodeListener): void {
		if (listener.enterFile) {
			listener.enterFile(this);
		}
	}
	// @Override
	public exitRule(listener: redcodeListener): void {
		if (listener.exitFile) {
			listener.exitFile(this);
		}
	}
}


export class LineContext extends ParserRuleContext {
	public EOL(): TerminalNode { return this.getToken(redcodeParser.EOL, 0); }
	public comment(): CommentContext | undefined {
		return this.tryGetRuleContext(0, CommentContext);
	}
	public instruction(): InstructionContext | undefined {
		return this.tryGetRuleContext(0, InstructionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return redcodeParser.RULE_line; }
	// @Override
	public enterRule(listener: redcodeListener): void {
		if (listener.enterLine) {
			listener.enterLine(this);
		}
	}
	// @Override
	public exitRule(listener: redcodeListener): void {
		if (listener.exitLine) {
			listener.exitLine(this);
		}
	}
}


export class InstructionContext extends ParserRuleContext {
	public opcode(): OpcodeContext {
		return this.getRuleContext(0, OpcodeContext);
	}
	public number(): NumberContext[];
	public number(i: number): NumberContext;
	public number(i?: number): NumberContext | NumberContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NumberContext);
		} else {
			return this.getRuleContext(i, NumberContext);
		}
	}
	public modifier(): ModifierContext | undefined {
		return this.tryGetRuleContext(0, ModifierContext);
	}
	public mmode(): MmodeContext[];
	public mmode(i: number): MmodeContext;
	public mmode(i?: number): MmodeContext | MmodeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MmodeContext);
		} else {
			return this.getRuleContext(i, MmodeContext);
		}
	}
	public comment(): CommentContext | undefined {
		return this.tryGetRuleContext(0, CommentContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return redcodeParser.RULE_instruction; }
	// @Override
	public enterRule(listener: redcodeListener): void {
		if (listener.enterInstruction) {
			listener.enterInstruction(this);
		}
	}
	// @Override
	public exitRule(listener: redcodeListener): void {
		if (listener.exitInstruction) {
			listener.exitInstruction(this);
		}
	}
}


export class OpcodeContext extends ParserRuleContext {
	public DAT(): TerminalNode | undefined { return this.tryGetToken(redcodeParser.DAT, 0); }
	public MOV(): TerminalNode | undefined { return this.tryGetToken(redcodeParser.MOV, 0); }
	public ADD(): TerminalNode | undefined { return this.tryGetToken(redcodeParser.ADD, 0); }
	public SUB(): TerminalNode | undefined { return this.tryGetToken(redcodeParser.SUB, 0); }
	public MUL(): TerminalNode | undefined { return this.tryGetToken(redcodeParser.MUL, 0); }
	public DIV(): TerminalNode | undefined { return this.tryGetToken(redcodeParser.DIV, 0); }
	public MOD(): TerminalNode | undefined { return this.tryGetToken(redcodeParser.MOD, 0); }
	public JMP(): TerminalNode | undefined { return this.tryGetToken(redcodeParser.JMP, 0); }
	public JMZ(): TerminalNode | undefined { return this.tryGetToken(redcodeParser.JMZ, 0); }
	public JMN(): TerminalNode | undefined { return this.tryGetToken(redcodeParser.JMN, 0); }
	public DJN(): TerminalNode | undefined { return this.tryGetToken(redcodeParser.DJN, 0); }
	public CMP(): TerminalNode | undefined { return this.tryGetToken(redcodeParser.CMP, 0); }
	public SLT(): TerminalNode | undefined { return this.tryGetToken(redcodeParser.SLT, 0); }
	public SPL(): TerminalNode | undefined { return this.tryGetToken(redcodeParser.SPL, 0); }
	public ORG(): TerminalNode | undefined { return this.tryGetToken(redcodeParser.ORG, 0); }
	public DJZ(): TerminalNode | undefined { return this.tryGetToken(redcodeParser.DJZ, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return redcodeParser.RULE_opcode; }
	// @Override
	public enterRule(listener: redcodeListener): void {
		if (listener.enterOpcode) {
			listener.enterOpcode(this);
		}
	}
	// @Override
	public exitRule(listener: redcodeListener): void {
		if (listener.exitOpcode) {
			listener.exitOpcode(this);
		}
	}
}


export class ModifierContext extends ParserRuleContext {
	public A(): TerminalNode | undefined { return this.tryGetToken(redcodeParser.A, 0); }
	public B(): TerminalNode | undefined { return this.tryGetToken(redcodeParser.B, 0); }
	public AB(): TerminalNode | undefined { return this.tryGetToken(redcodeParser.AB, 0); }
	public BA(): TerminalNode | undefined { return this.tryGetToken(redcodeParser.BA, 0); }
	public F(): TerminalNode | undefined { return this.tryGetToken(redcodeParser.F, 0); }
	public X(): TerminalNode | undefined { return this.tryGetToken(redcodeParser.X, 0); }
	public I(): TerminalNode | undefined { return this.tryGetToken(redcodeParser.I, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return redcodeParser.RULE_modifier; }
	// @Override
	public enterRule(listener: redcodeListener): void {
		if (listener.enterModifier) {
			listener.enterModifier(this);
		}
	}
	// @Override
	public exitRule(listener: redcodeListener): void {
		if (listener.exitModifier) {
			listener.exitModifier(this);
		}
	}
}


export class MmodeContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return redcodeParser.RULE_mmode; }
	// @Override
	public enterRule(listener: redcodeListener): void {
		if (listener.enterMmode) {
			listener.enterMmode(this);
		}
	}
	// @Override
	public exitRule(listener: redcodeListener): void {
		if (listener.exitMmode) {
			listener.exitMmode(this);
		}
	}
}


export class NumberContext extends ParserRuleContext {
	public NUMBER(): TerminalNode { return this.getToken(redcodeParser.NUMBER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return redcodeParser.RULE_number; }
	// @Override
	public enterRule(listener: redcodeListener): void {
		if (listener.enterNumber) {
			listener.enterNumber(this);
		}
	}
	// @Override
	public exitRule(listener: redcodeListener): void {
		if (listener.exitNumber) {
			listener.exitNumber(this);
		}
	}
}


export class CommentContext extends ParserRuleContext {
	public COMMENT(): TerminalNode { return this.getToken(redcodeParser.COMMENT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return redcodeParser.RULE_comment; }
	// @Override
	public enterRule(listener: redcodeListener): void {
		if (listener.enterComment) {
			listener.enterComment(this);
		}
	}
	// @Override
	public exitRule(listener: redcodeListener): void {
		if (listener.exitComment) {
			listener.exitComment(this);
		}
	}
}


