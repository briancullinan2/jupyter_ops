// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/asm/asm6502/asm6502.g4 by ANTLR 4.7.3-SNAPSHOT


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

import { asm6502Listener } from "./asm6502Listener";

export class asm6502Parser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly ASSEMBLER_INSTRUCTION = 9;
	public static readonly ADC = 10;
	public static readonly AND = 11;
	public static readonly ASL = 12;
	public static readonly BCC = 13;
	public static readonly BCS = 14;
	public static readonly BEQ = 15;
	public static readonly BIT = 16;
	public static readonly BMI = 17;
	public static readonly BNE = 18;
	public static readonly BPL = 19;
	public static readonly BRA = 20;
	public static readonly BRK = 21;
	public static readonly BVC = 22;
	public static readonly BVS = 23;
	public static readonly CLC = 24;
	public static readonly CLD = 25;
	public static readonly CLI = 26;
	public static readonly CLV = 27;
	public static readonly CMP = 28;
	public static readonly CPX = 29;
	public static readonly CPY = 30;
	public static readonly DEC = 31;
	public static readonly DEX = 32;
	public static readonly DEY = 33;
	public static readonly EOR = 34;
	public static readonly INC = 35;
	public static readonly INX = 36;
	public static readonly INY = 37;
	public static readonly JMP = 38;
	public static readonly JSR = 39;
	public static readonly LDA = 40;
	public static readonly LDY = 41;
	public static readonly LDX = 42;
	public static readonly LSR = 43;
	public static readonly NOP = 44;
	public static readonly ORA = 45;
	public static readonly PHA = 46;
	public static readonly PHX = 47;
	public static readonly PHY = 48;
	public static readonly PHP = 49;
	public static readonly PLA = 50;
	public static readonly PLP = 51;
	public static readonly PLY = 52;
	public static readonly ROL = 53;
	public static readonly ROR = 54;
	public static readonly RTI = 55;
	public static readonly RTS = 56;
	public static readonly SBC = 57;
	public static readonly SEC = 58;
	public static readonly SED = 59;
	public static readonly SEI = 60;
	public static readonly STA = 61;
	public static readonly STX = 62;
	public static readonly STY = 63;
	public static readonly STZ = 64;
	public static readonly TAX = 65;
	public static readonly TAY = 66;
	public static readonly TSX = 67;
	public static readonly TXA = 68;
	public static readonly TXS = 69;
	public static readonly TYA = 70;
	public static readonly NAME = 71;
	public static readonly NUMBER = 72;
	public static readonly COMMENT = 73;
	public static readonly STRING = 74;
	public static readonly EOL = 75;
	public static readonly WS = 76;
	public static readonly RULE_prog = 0;
	public static readonly RULE_line = 1;
	public static readonly RULE_instruction = 2;
	public static readonly RULE_assemblerinstruction = 3;
	public static readonly RULE_assembleropcode = 4;
	public static readonly RULE_lbl = 5;
	public static readonly RULE_argumentlist = 6;
	public static readonly RULE_label = 7;
	public static readonly RULE_argument = 8;
	public static readonly RULE_prefix = 9;
	public static readonly RULE_string = 10;
	public static readonly RULE_name = 11;
	public static readonly RULE_number = 12;
	public static readonly RULE_comment = 13;
	public static readonly RULE_opcode = 14;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"prog", "line", "instruction", "assemblerinstruction", "assembleropcode", 
		"lbl", "argumentlist", "label", "argument", "prefix", "string", "name", 
		"number", "comment", "opcode",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "':'", "','", "'*'", "'+'", "'-'", "'('", "')'", "'#'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, "ASSEMBLER_INSTRUCTION", "ADC", "AND", "ASL", "BCC", 
		"BCS", "BEQ", "BIT", "BMI", "BNE", "BPL", "BRA", "BRK", "BVC", "BVS", 
		"CLC", "CLD", "CLI", "CLV", "CMP", "CPX", "CPY", "DEC", "DEX", "DEY", 
		"EOR", "INC", "INX", "INY", "JMP", "JSR", "LDA", "LDY", "LDX", "LSR", 
		"NOP", "ORA", "PHA", "PHX", "PHY", "PHP", "PLA", "PLP", "PLY", "ROL", 
		"ROR", "RTI", "RTS", "SBC", "SEC", "SED", "SEI", "STA", "STX", "STY", 
		"STZ", "TAX", "TAY", "TSX", "TXA", "TXS", "TYA", "NAME", "NUMBER", "COMMENT", 
		"STRING", "EOL", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(asm6502Parser._LITERAL_NAMES, asm6502Parser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return asm6502Parser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "asm6502.g4"; }

	// @Override
	public get ruleNames(): string[] { return asm6502Parser.ruleNames; }

	// @Override
	public get serializedATN(): string { return asm6502Parser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(asm6502Parser._ATN, this);
	}
	// @RuleVersion(0)
	public prog(): ProgContext {
		let _localctx: ProgContext = new ProgContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, asm6502Parser.RULE_prog);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 34;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 31;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << asm6502Parser.T__2) | (1 << asm6502Parser.T__5) | (1 << asm6502Parser.T__7) | (1 << asm6502Parser.ASSEMBLER_INSTRUCTION) | (1 << asm6502Parser.ADC) | (1 << asm6502Parser.AND) | (1 << asm6502Parser.ASL) | (1 << asm6502Parser.BCC) | (1 << asm6502Parser.BCS) | (1 << asm6502Parser.BEQ) | (1 << asm6502Parser.BIT) | (1 << asm6502Parser.BMI) | (1 << asm6502Parser.BNE) | (1 << asm6502Parser.BPL) | (1 << asm6502Parser.BRA) | (1 << asm6502Parser.BRK) | (1 << asm6502Parser.BVC) | (1 << asm6502Parser.BVS) | (1 << asm6502Parser.CLC) | (1 << asm6502Parser.CLD) | (1 << asm6502Parser.CLI) | (1 << asm6502Parser.CLV) | (1 << asm6502Parser.CMP) | (1 << asm6502Parser.CPX) | (1 << asm6502Parser.CPY) | (1 << asm6502Parser.DEC))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (asm6502Parser.DEX - 32)) | (1 << (asm6502Parser.DEY - 32)) | (1 << (asm6502Parser.EOR - 32)) | (1 << (asm6502Parser.INC - 32)) | (1 << (asm6502Parser.INX - 32)) | (1 << (asm6502Parser.INY - 32)) | (1 << (asm6502Parser.JMP - 32)) | (1 << (asm6502Parser.JSR - 32)) | (1 << (asm6502Parser.LDA - 32)) | (1 << (asm6502Parser.LDY - 32)) | (1 << (asm6502Parser.LDX - 32)) | (1 << (asm6502Parser.LSR - 32)) | (1 << (asm6502Parser.NOP - 32)) | (1 << (asm6502Parser.ORA - 32)) | (1 << (asm6502Parser.PHA - 32)) | (1 << (asm6502Parser.PHX - 32)) | (1 << (asm6502Parser.PHY - 32)) | (1 << (asm6502Parser.PHP - 32)) | (1 << (asm6502Parser.PLA - 32)) | (1 << (asm6502Parser.PLP - 32)) | (1 << (asm6502Parser.PLY - 32)) | (1 << (asm6502Parser.ROL - 32)) | (1 << (asm6502Parser.ROR - 32)) | (1 << (asm6502Parser.RTI - 32)) | (1 << (asm6502Parser.RTS - 32)) | (1 << (asm6502Parser.SBC - 32)) | (1 << (asm6502Parser.SEC - 32)) | (1 << (asm6502Parser.SED - 32)) | (1 << (asm6502Parser.SEI - 32)) | (1 << (asm6502Parser.STA - 32)) | (1 << (asm6502Parser.STX - 32)) | (1 << (asm6502Parser.STY - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (asm6502Parser.STZ - 64)) | (1 << (asm6502Parser.TAX - 64)) | (1 << (asm6502Parser.TAY - 64)) | (1 << (asm6502Parser.TSX - 64)) | (1 << (asm6502Parser.TXA - 64)) | (1 << (asm6502Parser.TXS - 64)) | (1 << (asm6502Parser.TYA - 64)) | (1 << (asm6502Parser.NAME - 64)) | (1 << (asm6502Parser.NUMBER - 64)) | (1 << (asm6502Parser.COMMENT - 64)) | (1 << (asm6502Parser.STRING - 64)))) !== 0)) {
					{
					this.state = 30;
					this.line();
					}
				}

				this.state = 33;
				this.match(asm6502Parser.EOL);
				}
				}
				this.state = 36;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << asm6502Parser.T__2) | (1 << asm6502Parser.T__5) | (1 << asm6502Parser.T__7) | (1 << asm6502Parser.ASSEMBLER_INSTRUCTION) | (1 << asm6502Parser.ADC) | (1 << asm6502Parser.AND) | (1 << asm6502Parser.ASL) | (1 << asm6502Parser.BCC) | (1 << asm6502Parser.BCS) | (1 << asm6502Parser.BEQ) | (1 << asm6502Parser.BIT) | (1 << asm6502Parser.BMI) | (1 << asm6502Parser.BNE) | (1 << asm6502Parser.BPL) | (1 << asm6502Parser.BRA) | (1 << asm6502Parser.BRK) | (1 << asm6502Parser.BVC) | (1 << asm6502Parser.BVS) | (1 << asm6502Parser.CLC) | (1 << asm6502Parser.CLD) | (1 << asm6502Parser.CLI) | (1 << asm6502Parser.CLV) | (1 << asm6502Parser.CMP) | (1 << asm6502Parser.CPX) | (1 << asm6502Parser.CPY) | (1 << asm6502Parser.DEC))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (asm6502Parser.DEX - 32)) | (1 << (asm6502Parser.DEY - 32)) | (1 << (asm6502Parser.EOR - 32)) | (1 << (asm6502Parser.INC - 32)) | (1 << (asm6502Parser.INX - 32)) | (1 << (asm6502Parser.INY - 32)) | (1 << (asm6502Parser.JMP - 32)) | (1 << (asm6502Parser.JSR - 32)) | (1 << (asm6502Parser.LDA - 32)) | (1 << (asm6502Parser.LDY - 32)) | (1 << (asm6502Parser.LDX - 32)) | (1 << (asm6502Parser.LSR - 32)) | (1 << (asm6502Parser.NOP - 32)) | (1 << (asm6502Parser.ORA - 32)) | (1 << (asm6502Parser.PHA - 32)) | (1 << (asm6502Parser.PHX - 32)) | (1 << (asm6502Parser.PHY - 32)) | (1 << (asm6502Parser.PHP - 32)) | (1 << (asm6502Parser.PLA - 32)) | (1 << (asm6502Parser.PLP - 32)) | (1 << (asm6502Parser.PLY - 32)) | (1 << (asm6502Parser.ROL - 32)) | (1 << (asm6502Parser.ROR - 32)) | (1 << (asm6502Parser.RTI - 32)) | (1 << (asm6502Parser.RTS - 32)) | (1 << (asm6502Parser.SBC - 32)) | (1 << (asm6502Parser.SEC - 32)) | (1 << (asm6502Parser.SED - 32)) | (1 << (asm6502Parser.SEI - 32)) | (1 << (asm6502Parser.STA - 32)) | (1 << (asm6502Parser.STX - 32)) | (1 << (asm6502Parser.STY - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (asm6502Parser.STZ - 64)) | (1 << (asm6502Parser.TAX - 64)) | (1 << (asm6502Parser.TAY - 64)) | (1 << (asm6502Parser.TSX - 64)) | (1 << (asm6502Parser.TXA - 64)) | (1 << (asm6502Parser.TXS - 64)) | (1 << (asm6502Parser.TYA - 64)) | (1 << (asm6502Parser.NAME - 64)) | (1 << (asm6502Parser.NUMBER - 64)) | (1 << (asm6502Parser.COMMENT - 64)) | (1 << (asm6502Parser.STRING - 64)) | (1 << (asm6502Parser.EOL - 64)))) !== 0));
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 2, asm6502Parser.RULE_line);
		try {
			this.state = 42;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 2, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 38;
				this.comment();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 39;
				this.instruction();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 40;
				this.assemblerinstruction();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 41;
				this.lbl();
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
	public instruction(): InstructionContext {
		let _localctx: InstructionContext = new InstructionContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, asm6502Parser.RULE_instruction);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 45;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === asm6502Parser.NAME) {
				{
				this.state = 44;
				this.label();
				}
			}

			this.state = 47;
			this.opcode();
			this.state = 49;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << asm6502Parser.T__2) | (1 << asm6502Parser.T__5) | (1 << asm6502Parser.T__7))) !== 0) || ((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & ((1 << (asm6502Parser.NAME - 71)) | (1 << (asm6502Parser.NUMBER - 71)) | (1 << (asm6502Parser.STRING - 71)))) !== 0)) {
				{
				this.state = 48;
				this.argumentlist();
				}
			}

			this.state = 52;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === asm6502Parser.COMMENT) {
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
	public assemblerinstruction(): AssemblerinstructionContext {
		let _localctx: AssemblerinstructionContext = new AssemblerinstructionContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, asm6502Parser.RULE_assemblerinstruction);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 55;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << asm6502Parser.T__2) | (1 << asm6502Parser.T__5) | (1 << asm6502Parser.T__7))) !== 0) || ((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & ((1 << (asm6502Parser.NAME - 71)) | (1 << (asm6502Parser.NUMBER - 71)) | (1 << (asm6502Parser.STRING - 71)))) !== 0)) {
				{
				this.state = 54;
				this.argument();
				}
			}

			this.state = 57;
			this.assembleropcode();
			this.state = 59;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << asm6502Parser.T__2) | (1 << asm6502Parser.T__5) | (1 << asm6502Parser.T__7))) !== 0) || ((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & ((1 << (asm6502Parser.NAME - 71)) | (1 << (asm6502Parser.NUMBER - 71)) | (1 << (asm6502Parser.STRING - 71)))) !== 0)) {
				{
				this.state = 58;
				this.argumentlist();
				}
			}

			this.state = 62;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === asm6502Parser.COMMENT) {
				{
				this.state = 61;
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
	public assembleropcode(): AssembleropcodeContext {
		let _localctx: AssembleropcodeContext = new AssembleropcodeContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, asm6502Parser.RULE_assembleropcode);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 64;
			this.match(asm6502Parser.ASSEMBLER_INSTRUCTION);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 10, asm6502Parser.RULE_lbl);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 66;
			this.label();
			this.state = 67;
			this.match(asm6502Parser.T__0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public argumentlist(): ArgumentlistContext {
		let _localctx: ArgumentlistContext = new ArgumentlistContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, asm6502Parser.RULE_argumentlist);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 69;
			this.argument();
			this.state = 72;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === asm6502Parser.T__1) {
				{
				this.state = 70;
				this.match(asm6502Parser.T__1);
				this.state = 71;
				this.argumentlist();
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
	public label(): LabelContext {
		let _localctx: LabelContext = new LabelContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, asm6502Parser.RULE_label);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 74;
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
	public argument(): ArgumentContext {
		let _localctx: ArgumentContext = new ArgumentContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, asm6502Parser.RULE_argument);
		let _la: number;
		try {
			this.state = 93;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case asm6502Parser.T__2:
			case asm6502Parser.T__7:
			case asm6502Parser.NAME:
			case asm6502Parser.NUMBER:
			case asm6502Parser.STRING:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 77;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === asm6502Parser.T__7) {
					{
					this.state = 76;
					this.prefix();
					}
				}

				this.state = 83;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case asm6502Parser.NUMBER:
					{
					this.state = 79;
					this.number();
					}
					break;
				case asm6502Parser.NAME:
					{
					this.state = 80;
					this.name();
					}
					break;
				case asm6502Parser.STRING:
					{
					this.state = 81;
					this.string();
					}
					break;
				case asm6502Parser.T__2:
					{
					this.state = 82;
					this.match(asm6502Parser.T__2);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 87;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === asm6502Parser.T__3 || _la === asm6502Parser.T__4) {
					{
					this.state = 85;
					_la = this._input.LA(1);
					if (!(_la === asm6502Parser.T__3 || _la === asm6502Parser.T__4)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					this.state = 86;
					this.number();
					}
				}

				}
				break;
			case asm6502Parser.T__5:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 89;
				this.match(asm6502Parser.T__5);
				this.state = 90;
				this.argument();
				this.state = 91;
				this.match(asm6502Parser.T__6);
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
	public prefix(): PrefixContext {
		let _localctx: PrefixContext = new PrefixContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, asm6502Parser.RULE_prefix);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 95;
			this.match(asm6502Parser.T__7);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 20, asm6502Parser.RULE_string);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 97;
			this.match(asm6502Parser.STRING);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 22, asm6502Parser.RULE_name);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 99;
			this.match(asm6502Parser.NAME);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 24, asm6502Parser.RULE_number);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 101;
			this.match(asm6502Parser.NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 26, asm6502Parser.RULE_comment);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 103;
			this.match(asm6502Parser.COMMENT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 28, asm6502Parser.RULE_opcode);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 105;
			_la = this._input.LA(1);
			if (!(((((_la - 10)) & ~0x1F) === 0 && ((1 << (_la - 10)) & ((1 << (asm6502Parser.ADC - 10)) | (1 << (asm6502Parser.AND - 10)) | (1 << (asm6502Parser.ASL - 10)) | (1 << (asm6502Parser.BCC - 10)) | (1 << (asm6502Parser.BCS - 10)) | (1 << (asm6502Parser.BEQ - 10)) | (1 << (asm6502Parser.BIT - 10)) | (1 << (asm6502Parser.BMI - 10)) | (1 << (asm6502Parser.BNE - 10)) | (1 << (asm6502Parser.BPL - 10)) | (1 << (asm6502Parser.BRA - 10)) | (1 << (asm6502Parser.BRK - 10)) | (1 << (asm6502Parser.BVC - 10)) | (1 << (asm6502Parser.BVS - 10)) | (1 << (asm6502Parser.CLC - 10)) | (1 << (asm6502Parser.CLD - 10)) | (1 << (asm6502Parser.CLI - 10)) | (1 << (asm6502Parser.CLV - 10)) | (1 << (asm6502Parser.CMP - 10)) | (1 << (asm6502Parser.CPX - 10)) | (1 << (asm6502Parser.CPY - 10)) | (1 << (asm6502Parser.DEC - 10)) | (1 << (asm6502Parser.DEX - 10)) | (1 << (asm6502Parser.DEY - 10)) | (1 << (asm6502Parser.EOR - 10)) | (1 << (asm6502Parser.INC - 10)) | (1 << (asm6502Parser.INX - 10)) | (1 << (asm6502Parser.INY - 10)) | (1 << (asm6502Parser.JMP - 10)) | (1 << (asm6502Parser.JSR - 10)) | (1 << (asm6502Parser.LDA - 10)) | (1 << (asm6502Parser.LDY - 10)))) !== 0) || ((((_la - 42)) & ~0x1F) === 0 && ((1 << (_la - 42)) & ((1 << (asm6502Parser.LDX - 42)) | (1 << (asm6502Parser.LSR - 42)) | (1 << (asm6502Parser.NOP - 42)) | (1 << (asm6502Parser.ORA - 42)) | (1 << (asm6502Parser.PHA - 42)) | (1 << (asm6502Parser.PHX - 42)) | (1 << (asm6502Parser.PHY - 42)) | (1 << (asm6502Parser.PHP - 42)) | (1 << (asm6502Parser.PLA - 42)) | (1 << (asm6502Parser.PLP - 42)) | (1 << (asm6502Parser.PLY - 42)) | (1 << (asm6502Parser.ROL - 42)) | (1 << (asm6502Parser.ROR - 42)) | (1 << (asm6502Parser.RTI - 42)) | (1 << (asm6502Parser.RTS - 42)) | (1 << (asm6502Parser.SBC - 42)) | (1 << (asm6502Parser.SEC - 42)) | (1 << (asm6502Parser.SED - 42)) | (1 << (asm6502Parser.SEI - 42)) | (1 << (asm6502Parser.STA - 42)) | (1 << (asm6502Parser.STX - 42)) | (1 << (asm6502Parser.STY - 42)) | (1 << (asm6502Parser.STZ - 42)) | (1 << (asm6502Parser.TAX - 42)) | (1 << (asm6502Parser.TAY - 42)) | (1 << (asm6502Parser.TSX - 42)) | (1 << (asm6502Parser.TXA - 42)) | (1 << (asm6502Parser.TXS - 42)) | (1 << (asm6502Parser.TYA - 42)))) !== 0))) {
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03Nn\x04\x02\t\x02" +
		"\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07\t\x07" +
		"\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04\x0E\t" +
		"\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x03\x02\x05\x02\"\n\x02\x03\x02\x06\x02" +
		"%\n\x02\r\x02\x0E\x02&\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03-\n\x03" +
		"\x03\x04\x05\x040\n\x04\x03\x04\x03\x04\x05\x044\n\x04\x03\x04\x05\x04" +
		"7\n\x04\x03\x05\x05\x05:\n\x05\x03\x05\x03\x05\x05\x05>\n\x05\x03\x05" +
		"\x05\x05A\n\x05\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\b\x03\b\x03" +
		"\b\x05\bK\n\b\x03\t\x03\t\x03\n\x05\nP\n\n\x03\n\x03\n\x03\n\x03\n\x05" +
		"\nV\n\n\x03\n\x03\n\x05\nZ\n\n\x03\n\x03\n\x03\n\x03\n\x05\n`\n\n\x03" +
		"\v\x03\v\x03\f\x03\f\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x10" +
		"\x03\x10\x03\x10\x02\x02\x02\x11\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f" +
		"\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E" +
		"\x02\x02\x04\x03\x02\x06\x07\x03\x02\fH\x02p\x02$\x03\x02\x02\x02\x04" +
		",\x03\x02\x02\x02\x06/\x03\x02\x02\x02\b9\x03\x02\x02\x02\nB\x03\x02\x02" +
		"\x02\fD\x03\x02\x02\x02\x0EG\x03\x02\x02\x02\x10L\x03\x02\x02\x02\x12" +
		"_\x03\x02\x02\x02\x14a\x03\x02\x02\x02\x16c\x03\x02\x02\x02\x18e\x03\x02" +
		"\x02\x02\x1Ag\x03\x02\x02\x02\x1Ci\x03\x02\x02\x02\x1Ek\x03\x02\x02\x02" +
		" \"\x05\x04\x03\x02! \x03\x02\x02\x02!\"\x03\x02\x02\x02\"#\x03\x02\x02" +
		"\x02#%\x07M\x02\x02$!\x03\x02\x02\x02%&\x03\x02\x02\x02&$\x03\x02\x02" +
		"\x02&\'\x03\x02\x02\x02\'\x03\x03\x02\x02\x02(-\x05\x1C\x0F\x02)-\x05" +
		"\x06\x04\x02*-\x05\b\x05\x02+-\x05\f\x07\x02,(\x03\x02\x02\x02,)\x03\x02" +
		"\x02\x02,*\x03\x02\x02\x02,+\x03\x02\x02\x02-\x05\x03\x02\x02\x02.0\x05" +
		"\x10\t\x02/.\x03\x02\x02\x02/0\x03\x02\x02\x0201\x03\x02\x02\x0213\x05" +
		"\x1E\x10\x0224\x05\x0E\b\x0232\x03\x02\x02\x0234\x03\x02\x02\x0246\x03" +
		"\x02\x02\x0257\x05\x1C\x0F\x0265\x03\x02\x02\x0267\x03\x02\x02\x027\x07" +
		"\x03\x02\x02\x028:\x05\x12\n\x0298\x03\x02\x02\x029:\x03\x02\x02\x02:" +
		";\x03\x02\x02\x02;=\x05\n\x06\x02<>\x05\x0E\b\x02=<\x03\x02\x02\x02=>" +
		"\x03\x02\x02\x02>@\x03\x02\x02\x02?A\x05\x1C\x0F\x02@?\x03\x02\x02\x02" +
		"@A\x03\x02\x02\x02A\t\x03\x02\x02\x02BC\x07\v\x02\x02C\v\x03\x02\x02\x02" +
		"DE\x05\x10\t\x02EF\x07\x03\x02\x02F\r\x03\x02\x02\x02GJ\x05\x12\n\x02" +
		"HI\x07\x04\x02\x02IK\x05\x0E\b\x02JH\x03\x02\x02\x02JK\x03\x02\x02\x02" +
		"K\x0F\x03\x02\x02\x02LM\x05\x18\r\x02M\x11\x03\x02\x02\x02NP\x05\x14\v" +
		"\x02ON\x03\x02\x02\x02OP\x03\x02\x02\x02PU\x03\x02\x02\x02QV\x05\x1A\x0E" +
		"\x02RV\x05\x18\r\x02SV\x05\x16\f\x02TV\x07\x05\x02\x02UQ\x03\x02\x02\x02" +
		"UR\x03\x02\x02\x02US\x03\x02\x02\x02UT\x03\x02\x02\x02VY\x03\x02\x02\x02" +
		"WX\t\x02\x02\x02XZ\x05\x1A\x0E\x02YW\x03\x02\x02\x02YZ\x03\x02\x02\x02" +
		"Z`\x03\x02\x02\x02[\\\x07\b\x02\x02\\]\x05\x12\n\x02]^\x07\t\x02\x02^" +
		"`\x03\x02\x02\x02_O\x03\x02\x02\x02_[\x03\x02\x02\x02`\x13\x03\x02\x02" +
		"\x02ab\x07\n\x02\x02b\x15\x03\x02\x02\x02cd\x07L\x02\x02d\x17\x03\x02" +
		"\x02\x02ef\x07I\x02\x02f\x19\x03\x02\x02\x02gh\x07J\x02\x02h\x1B\x03\x02" +
		"\x02\x02ij\x07K\x02\x02j\x1D\x03\x02\x02\x02kl\t\x03\x02\x02l\x1F\x03" +
		"\x02\x02\x02\x10!&,/369=@JOUY_";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!asm6502Parser.__ATN) {
			asm6502Parser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(asm6502Parser._serializedATN));
		}

		return asm6502Parser.__ATN;
	}

}

export class ProgContext extends ParserRuleContext {
	public EOL(): TerminalNode[];
	public EOL(i: number): TerminalNode;
	public EOL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(asm6502Parser.EOL);
		} else {
			return this.getToken(asm6502Parser.EOL, i);
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
	public get ruleIndex(): number { return asm6502Parser.RULE_prog; }
	// @Override
	public enterRule(listener: asm6502Listener): void {
		if (listener.enterProg) {
			listener.enterProg(this);
		}
	}
	// @Override
	public exitRule(listener: asm6502Listener): void {
		if (listener.exitProg) {
			listener.exitProg(this);
		}
	}
}


export class LineContext extends ParserRuleContext {
	public comment(): CommentContext | undefined {
		return this.tryGetRuleContext(0, CommentContext);
	}
	public instruction(): InstructionContext | undefined {
		return this.tryGetRuleContext(0, InstructionContext);
	}
	public assemblerinstruction(): AssemblerinstructionContext | undefined {
		return this.tryGetRuleContext(0, AssemblerinstructionContext);
	}
	public lbl(): LblContext | undefined {
		return this.tryGetRuleContext(0, LblContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return asm6502Parser.RULE_line; }
	// @Override
	public enterRule(listener: asm6502Listener): void {
		if (listener.enterLine) {
			listener.enterLine(this);
		}
	}
	// @Override
	public exitRule(listener: asm6502Listener): void {
		if (listener.exitLine) {
			listener.exitLine(this);
		}
	}
}


export class InstructionContext extends ParserRuleContext {
	public opcode(): OpcodeContext {
		return this.getRuleContext(0, OpcodeContext);
	}
	public label(): LabelContext | undefined {
		return this.tryGetRuleContext(0, LabelContext);
	}
	public argumentlist(): ArgumentlistContext | undefined {
		return this.tryGetRuleContext(0, ArgumentlistContext);
	}
	public comment(): CommentContext | undefined {
		return this.tryGetRuleContext(0, CommentContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return asm6502Parser.RULE_instruction; }
	// @Override
	public enterRule(listener: asm6502Listener): void {
		if (listener.enterInstruction) {
			listener.enterInstruction(this);
		}
	}
	// @Override
	public exitRule(listener: asm6502Listener): void {
		if (listener.exitInstruction) {
			listener.exitInstruction(this);
		}
	}
}


export class AssemblerinstructionContext extends ParserRuleContext {
	public assembleropcode(): AssembleropcodeContext {
		return this.getRuleContext(0, AssembleropcodeContext);
	}
	public argument(): ArgumentContext | undefined {
		return this.tryGetRuleContext(0, ArgumentContext);
	}
	public argumentlist(): ArgumentlistContext | undefined {
		return this.tryGetRuleContext(0, ArgumentlistContext);
	}
	public comment(): CommentContext | undefined {
		return this.tryGetRuleContext(0, CommentContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return asm6502Parser.RULE_assemblerinstruction; }
	// @Override
	public enterRule(listener: asm6502Listener): void {
		if (listener.enterAssemblerinstruction) {
			listener.enterAssemblerinstruction(this);
		}
	}
	// @Override
	public exitRule(listener: asm6502Listener): void {
		if (listener.exitAssemblerinstruction) {
			listener.exitAssemblerinstruction(this);
		}
	}
}


export class AssembleropcodeContext extends ParserRuleContext {
	public ASSEMBLER_INSTRUCTION(): TerminalNode { return this.getToken(asm6502Parser.ASSEMBLER_INSTRUCTION, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return asm6502Parser.RULE_assembleropcode; }
	// @Override
	public enterRule(listener: asm6502Listener): void {
		if (listener.enterAssembleropcode) {
			listener.enterAssembleropcode(this);
		}
	}
	// @Override
	public exitRule(listener: asm6502Listener): void {
		if (listener.exitAssembleropcode) {
			listener.exitAssembleropcode(this);
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
	public get ruleIndex(): number { return asm6502Parser.RULE_lbl; }
	// @Override
	public enterRule(listener: asm6502Listener): void {
		if (listener.enterLbl) {
			listener.enterLbl(this);
		}
	}
	// @Override
	public exitRule(listener: asm6502Listener): void {
		if (listener.exitLbl) {
			listener.exitLbl(this);
		}
	}
}


export class ArgumentlistContext extends ParserRuleContext {
	public argument(): ArgumentContext {
		return this.getRuleContext(0, ArgumentContext);
	}
	public argumentlist(): ArgumentlistContext | undefined {
		return this.tryGetRuleContext(0, ArgumentlistContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return asm6502Parser.RULE_argumentlist; }
	// @Override
	public enterRule(listener: asm6502Listener): void {
		if (listener.enterArgumentlist) {
			listener.enterArgumentlist(this);
		}
	}
	// @Override
	public exitRule(listener: asm6502Listener): void {
		if (listener.exitArgumentlist) {
			listener.exitArgumentlist(this);
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
	public get ruleIndex(): number { return asm6502Parser.RULE_label; }
	// @Override
	public enterRule(listener: asm6502Listener): void {
		if (listener.enterLabel) {
			listener.enterLabel(this);
		}
	}
	// @Override
	public exitRule(listener: asm6502Listener): void {
		if (listener.exitLabel) {
			listener.exitLabel(this);
		}
	}
}


export class ArgumentContext extends ParserRuleContext {
	public number(): NumberContext[];
	public number(i: number): NumberContext;
	public number(i?: number): NumberContext | NumberContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NumberContext);
		} else {
			return this.getRuleContext(i, NumberContext);
		}
	}
	public name(): NameContext | undefined {
		return this.tryGetRuleContext(0, NameContext);
	}
	public string(): StringContext | undefined {
		return this.tryGetRuleContext(0, StringContext);
	}
	public prefix(): PrefixContext | undefined {
		return this.tryGetRuleContext(0, PrefixContext);
	}
	public argument(): ArgumentContext | undefined {
		return this.tryGetRuleContext(0, ArgumentContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return asm6502Parser.RULE_argument; }
	// @Override
	public enterRule(listener: asm6502Listener): void {
		if (listener.enterArgument) {
			listener.enterArgument(this);
		}
	}
	// @Override
	public exitRule(listener: asm6502Listener): void {
		if (listener.exitArgument) {
			listener.exitArgument(this);
		}
	}
}


export class PrefixContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return asm6502Parser.RULE_prefix; }
	// @Override
	public enterRule(listener: asm6502Listener): void {
		if (listener.enterPrefix) {
			listener.enterPrefix(this);
		}
	}
	// @Override
	public exitRule(listener: asm6502Listener): void {
		if (listener.exitPrefix) {
			listener.exitPrefix(this);
		}
	}
}


export class StringContext extends ParserRuleContext {
	public STRING(): TerminalNode { return this.getToken(asm6502Parser.STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return asm6502Parser.RULE_string; }
	// @Override
	public enterRule(listener: asm6502Listener): void {
		if (listener.enterString) {
			listener.enterString(this);
		}
	}
	// @Override
	public exitRule(listener: asm6502Listener): void {
		if (listener.exitString) {
			listener.exitString(this);
		}
	}
}


export class NameContext extends ParserRuleContext {
	public NAME(): TerminalNode { return this.getToken(asm6502Parser.NAME, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return asm6502Parser.RULE_name; }
	// @Override
	public enterRule(listener: asm6502Listener): void {
		if (listener.enterName) {
			listener.enterName(this);
		}
	}
	// @Override
	public exitRule(listener: asm6502Listener): void {
		if (listener.exitName) {
			listener.exitName(this);
		}
	}
}


export class NumberContext extends ParserRuleContext {
	public NUMBER(): TerminalNode { return this.getToken(asm6502Parser.NUMBER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return asm6502Parser.RULE_number; }
	// @Override
	public enterRule(listener: asm6502Listener): void {
		if (listener.enterNumber) {
			listener.enterNumber(this);
		}
	}
	// @Override
	public exitRule(listener: asm6502Listener): void {
		if (listener.exitNumber) {
			listener.exitNumber(this);
		}
	}
}


export class CommentContext extends ParserRuleContext {
	public COMMENT(): TerminalNode { return this.getToken(asm6502Parser.COMMENT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return asm6502Parser.RULE_comment; }
	// @Override
	public enterRule(listener: asm6502Listener): void {
		if (listener.enterComment) {
			listener.enterComment(this);
		}
	}
	// @Override
	public exitRule(listener: asm6502Listener): void {
		if (listener.exitComment) {
			listener.exitComment(this);
		}
	}
}


export class OpcodeContext extends ParserRuleContext {
	public ADC(): TerminalNode | undefined { return this.tryGetToken(asm6502Parser.ADC, 0); }
	public AND(): TerminalNode | undefined { return this.tryGetToken(asm6502Parser.AND, 0); }
	public ASL(): TerminalNode | undefined { return this.tryGetToken(asm6502Parser.ASL, 0); }
	public BCC(): TerminalNode | undefined { return this.tryGetToken(asm6502Parser.BCC, 0); }
	public BCS(): TerminalNode | undefined { return this.tryGetToken(asm6502Parser.BCS, 0); }
	public BEQ(): TerminalNode | undefined { return this.tryGetToken(asm6502Parser.BEQ, 0); }
	public BIT(): TerminalNode | undefined { return this.tryGetToken(asm6502Parser.BIT, 0); }
	public BMI(): TerminalNode | undefined { return this.tryGetToken(asm6502Parser.BMI, 0); }
	public BNE(): TerminalNode | undefined { return this.tryGetToken(asm6502Parser.BNE, 0); }
	public BPL(): TerminalNode | undefined { return this.tryGetToken(asm6502Parser.BPL, 0); }
	public BRA(): TerminalNode | undefined { return this.tryGetToken(asm6502Parser.BRA, 0); }
	public BRK(): TerminalNode | undefined { return this.tryGetToken(asm6502Parser.BRK, 0); }
	public BVC(): TerminalNode | undefined { return this.tryGetToken(asm6502Parser.BVC, 0); }
	public BVS(): TerminalNode | undefined { return this.tryGetToken(asm6502Parser.BVS, 0); }
	public CLC(): TerminalNode | undefined { return this.tryGetToken(asm6502Parser.CLC, 0); }
	public CLD(): TerminalNode | undefined { return this.tryGetToken(asm6502Parser.CLD, 0); }
	public CLI(): TerminalNode | undefined { return this.tryGetToken(asm6502Parser.CLI, 0); }
	public CLV(): TerminalNode | undefined { return this.tryGetToken(asm6502Parser.CLV, 0); }
	public CMP(): TerminalNode | undefined { return this.tryGetToken(asm6502Parser.CMP, 0); }
	public CPX(): TerminalNode | undefined { return this.tryGetToken(asm6502Parser.CPX, 0); }
	public CPY(): TerminalNode | undefined { return this.tryGetToken(asm6502Parser.CPY, 0); }
	public DEC(): TerminalNode | undefined { return this.tryGetToken(asm6502Parser.DEC, 0); }
	public DEX(): TerminalNode | undefined { return this.tryGetToken(asm6502Parser.DEX, 0); }
	public DEY(): TerminalNode | undefined { return this.tryGetToken(asm6502Parser.DEY, 0); }
	public EOR(): TerminalNode | undefined { return this.tryGetToken(asm6502Parser.EOR, 0); }
	public INC(): TerminalNode | undefined { return this.tryGetToken(asm6502Parser.INC, 0); }
	public INX(): TerminalNode | undefined { return this.tryGetToken(asm6502Parser.INX, 0); }
	public INY(): TerminalNode | undefined { return this.tryGetToken(asm6502Parser.INY, 0); }
	public JMP(): TerminalNode | undefined { return this.tryGetToken(asm6502Parser.JMP, 0); }
	public JSR(): TerminalNode | undefined { return this.tryGetToken(asm6502Parser.JSR, 0); }
	public LDA(): TerminalNode | undefined { return this.tryGetToken(asm6502Parser.LDA, 0); }
	public LDY(): TerminalNode | undefined { return this.tryGetToken(asm6502Parser.LDY, 0); }
	public LDX(): TerminalNode | undefined { return this.tryGetToken(asm6502Parser.LDX, 0); }
	public LSR(): TerminalNode | undefined { return this.tryGetToken(asm6502Parser.LSR, 0); }
	public NOP(): TerminalNode | undefined { return this.tryGetToken(asm6502Parser.NOP, 0); }
	public ORA(): TerminalNode | undefined { return this.tryGetToken(asm6502Parser.ORA, 0); }
	public PHA(): TerminalNode | undefined { return this.tryGetToken(asm6502Parser.PHA, 0); }
	public PHX(): TerminalNode | undefined { return this.tryGetToken(asm6502Parser.PHX, 0); }
	public PHY(): TerminalNode | undefined { return this.tryGetToken(asm6502Parser.PHY, 0); }
	public PHP(): TerminalNode | undefined { return this.tryGetToken(asm6502Parser.PHP, 0); }
	public PLA(): TerminalNode | undefined { return this.tryGetToken(asm6502Parser.PLA, 0); }
	public PLP(): TerminalNode | undefined { return this.tryGetToken(asm6502Parser.PLP, 0); }
	public PLY(): TerminalNode | undefined { return this.tryGetToken(asm6502Parser.PLY, 0); }
	public ROL(): TerminalNode | undefined { return this.tryGetToken(asm6502Parser.ROL, 0); }
	public ROR(): TerminalNode | undefined { return this.tryGetToken(asm6502Parser.ROR, 0); }
	public RTI(): TerminalNode | undefined { return this.tryGetToken(asm6502Parser.RTI, 0); }
	public RTS(): TerminalNode | undefined { return this.tryGetToken(asm6502Parser.RTS, 0); }
	public SBC(): TerminalNode | undefined { return this.tryGetToken(asm6502Parser.SBC, 0); }
	public SEC(): TerminalNode | undefined { return this.tryGetToken(asm6502Parser.SEC, 0); }
	public SED(): TerminalNode | undefined { return this.tryGetToken(asm6502Parser.SED, 0); }
	public SEI(): TerminalNode | undefined { return this.tryGetToken(asm6502Parser.SEI, 0); }
	public STA(): TerminalNode | undefined { return this.tryGetToken(asm6502Parser.STA, 0); }
	public STX(): TerminalNode | undefined { return this.tryGetToken(asm6502Parser.STX, 0); }
	public STY(): TerminalNode | undefined { return this.tryGetToken(asm6502Parser.STY, 0); }
	public STZ(): TerminalNode | undefined { return this.tryGetToken(asm6502Parser.STZ, 0); }
	public TAX(): TerminalNode | undefined { return this.tryGetToken(asm6502Parser.TAX, 0); }
	public TAY(): TerminalNode | undefined { return this.tryGetToken(asm6502Parser.TAY, 0); }
	public TSX(): TerminalNode | undefined { return this.tryGetToken(asm6502Parser.TSX, 0); }
	public TXA(): TerminalNode | undefined { return this.tryGetToken(asm6502Parser.TXA, 0); }
	public TXS(): TerminalNode | undefined { return this.tryGetToken(asm6502Parser.TXS, 0); }
	public TYA(): TerminalNode | undefined { return this.tryGetToken(asm6502Parser.TYA, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return asm6502Parser.RULE_opcode; }
	// @Override
	public enterRule(listener: asm6502Listener): void {
		if (listener.enterOpcode) {
			listener.enterOpcode(this);
		}
	}
	// @Override
	public exitRule(listener: asm6502Listener): void {
		if (listener.exitOpcode) {
			listener.exitOpcode(this);
		}
	}
}


