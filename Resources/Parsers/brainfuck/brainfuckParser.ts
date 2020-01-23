// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/brainfuck/brainfuck.g4 by ANTLR 4.7.3-SNAPSHOT


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

import { brainfuckListener } from "./brainfuckListener";
import { brainfuckVisitor } from "./brainfuckVisitor";


export class brainfuckParser extends Parser {
	public static readonly GT = 1;
	public static readonly LT = 2;
	public static readonly PLUS = 3;
	public static readonly MINUS = 4;
	public static readonly DOT = 5;
	public static readonly COMMA = 6;
	public static readonly LPAREN = 7;
	public static readonly RPAREN = 8;
	public static readonly WS = 9;
	public static readonly RULE_file = 0;
	public static readonly RULE_statement = 1;
	public static readonly RULE_opcode = 2;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"file", "statement", "opcode",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'>'", "'<'", "'+'", "'-'", "'.'", "','", "'['", "']'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "GT", "LT", "PLUS", "MINUS", "DOT", "COMMA", "LPAREN", "RPAREN", 
		"WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(brainfuckParser._LITERAL_NAMES, brainfuckParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return brainfuckParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "brainfuck.g4"; }

	// @Override
	public get ruleNames(): string[] { return brainfuckParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return brainfuckParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(brainfuckParser._ATN, this);
	}
	// @RuleVersion(0)
	public file(): FileContext {
		let _localctx: FileContext = new FileContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, brainfuckParser.RULE_file);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 9;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << brainfuckParser.GT) | (1 << brainfuckParser.LT) | (1 << brainfuckParser.PLUS) | (1 << brainfuckParser.MINUS) | (1 << brainfuckParser.DOT) | (1 << brainfuckParser.COMMA) | (1 << brainfuckParser.LPAREN))) !== 0)) {
				{
				{
				this.state = 6;
				this.statement();
				}
				}
				this.state = 11;
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
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, brainfuckParser.RULE_statement);
		let _la: number;
		try {
			this.state = 21;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case brainfuckParser.GT:
			case brainfuckParser.LT:
			case brainfuckParser.PLUS:
			case brainfuckParser.MINUS:
			case brainfuckParser.DOT:
			case brainfuckParser.COMMA:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 12;
				this.opcode();
				}
				break;
			case brainfuckParser.LPAREN:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 13;
				this.match(brainfuckParser.LPAREN);
				this.state = 17;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << brainfuckParser.GT) | (1 << brainfuckParser.LT) | (1 << brainfuckParser.PLUS) | (1 << brainfuckParser.MINUS) | (1 << brainfuckParser.DOT) | (1 << brainfuckParser.COMMA) | (1 << brainfuckParser.LPAREN))) !== 0)) {
					{
					{
					this.state = 14;
					this.statement();
					}
					}
					this.state = 19;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 20;
				this.match(brainfuckParser.RPAREN);
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
	public opcode(): OpcodeContext {
		let _localctx: OpcodeContext = new OpcodeContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, brainfuckParser.RULE_opcode);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 23;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << brainfuckParser.GT) | (1 << brainfuckParser.LT) | (1 << brainfuckParser.PLUS) | (1 << brainfuckParser.MINUS) | (1 << brainfuckParser.DOT) | (1 << brainfuckParser.COMMA))) !== 0))) {
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\v\x1C\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x03\x02\x07\x02\n\n\x02\f\x02\x0E\x02" +
		"\r\v\x02\x03\x03\x03\x03\x03\x03\x07\x03\x12\n\x03\f\x03\x0E\x03\x15\v" +
		"\x03\x03\x03\x05\x03\x18\n\x03\x03\x04\x03\x04\x03\x04\x02\x02\x02\x05" +
		"\x02\x02\x04\x02\x06\x02\x02\x03\x03\x02\x03\b\x02\x1B\x02\v\x03\x02\x02" +
		"\x02\x04\x17\x03\x02\x02\x02\x06\x19\x03\x02\x02\x02\b\n\x05\x04\x03\x02" +
		"\t\b\x03\x02\x02\x02\n\r\x03\x02\x02\x02\v\t\x03\x02\x02\x02\v\f\x03\x02" +
		"\x02\x02\f\x03\x03\x02\x02\x02\r\v\x03\x02\x02\x02\x0E\x18\x05\x06\x04" +
		"\x02\x0F\x13\x07\t\x02\x02\x10\x12\x05\x04\x03\x02\x11\x10\x03\x02\x02" +
		"\x02\x12\x15\x03\x02\x02\x02\x13\x11\x03\x02\x02\x02\x13\x14\x03\x02\x02" +
		"\x02\x14\x16\x03\x02\x02\x02\x15\x13\x03\x02\x02\x02\x16\x18\x07\n\x02" +
		"\x02\x17\x0E\x03\x02\x02\x02\x17\x0F\x03\x02\x02\x02\x18\x05\x03\x02\x02" +
		"\x02\x19\x1A\t\x02\x02\x02\x1A\x07\x03\x02\x02\x02\x05\v\x13\x17";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!brainfuckParser.__ATN) {
			brainfuckParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(brainfuckParser._serializedATN));
		}

		return brainfuckParser.__ATN;
	}

}

export class FileContext extends ParserRuleContext {
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return brainfuckParser.RULE_file; }
	// @Override
	public enterRule(listener: brainfuckListener): void {
		if (listener.enterFile) {
			listener.enterFile(this);
		}
	}
	// @Override
	public exitRule(listener: brainfuckListener): void {
		if (listener.exitFile) {
			listener.exitFile(this);
		}
	}
	// @Override
	public accept<Result>(visitor: brainfuckVisitor<Result>): Result {
		if (visitor.visitFile) {
			return visitor.visitFile(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	public opcode(): OpcodeContext | undefined {
		return this.tryGetRuleContext(0, OpcodeContext);
	}
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(brainfuckParser.LPAREN, 0); }
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(brainfuckParser.RPAREN, 0); }
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return brainfuckParser.RULE_statement; }
	// @Override
	public enterRule(listener: brainfuckListener): void {
		if (listener.enterStatement) {
			listener.enterStatement(this);
		}
	}
	// @Override
	public exitRule(listener: brainfuckListener): void {
		if (listener.exitStatement) {
			listener.exitStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: brainfuckVisitor<Result>): Result {
		if (visitor.visitStatement) {
			return visitor.visitStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OpcodeContext extends ParserRuleContext {
	public GT(): TerminalNode | undefined { return this.tryGetToken(brainfuckParser.GT, 0); }
	public LT(): TerminalNode | undefined { return this.tryGetToken(brainfuckParser.LT, 0); }
	public PLUS(): TerminalNode | undefined { return this.tryGetToken(brainfuckParser.PLUS, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(brainfuckParser.MINUS, 0); }
	public DOT(): TerminalNode | undefined { return this.tryGetToken(brainfuckParser.DOT, 0); }
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(brainfuckParser.COMMA, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return brainfuckParser.RULE_opcode; }
	// @Override
	public enterRule(listener: brainfuckListener): void {
		if (listener.enterOpcode) {
			listener.enterOpcode(this);
		}
	}
	// @Override
	public exitRule(listener: brainfuckListener): void {
		if (listener.exitOpcode) {
			listener.exitOpcode(this);
		}
	}
	// @Override
	public accept<Result>(visitor: brainfuckVisitor<Result>): Result {
		if (visitor.visitOpcode) {
			return visitor.visitOpcode(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


