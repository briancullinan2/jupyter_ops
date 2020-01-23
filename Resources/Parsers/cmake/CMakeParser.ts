// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/cmake/CMake.g4 by ANTLR 4.7.3-SNAPSHOT


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

import { CMakeListener } from "./CMakeListener";
import { CMakeVisitor } from "./CMakeVisitor";


export class CMakeParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly Identifier = 3;
	public static readonly Unquoted_argument = 4;
	public static readonly Escape_sequence = 5;
	public static readonly Quoted_argument = 6;
	public static readonly Bracket_argument = 7;
	public static readonly Bracket_comment = 8;
	public static readonly Line_comment = 9;
	public static readonly Newline = 10;
	public static readonly Space = 11;
	public static readonly RULE_file = 0;
	public static readonly RULE_command_invocation = 1;
	public static readonly RULE_single_argument = 2;
	public static readonly RULE_compound_argument = 3;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"file", "command_invocation", "single_argument", "compound_argument",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'('", "')'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, "Identifier", "Unquoted_argument", "Escape_sequence", 
		"Quoted_argument", "Bracket_argument", "Bracket_comment", "Line_comment", 
		"Newline", "Space",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(CMakeParser._LITERAL_NAMES, CMakeParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return CMakeParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "CMake.g4"; }

	// @Override
	public get ruleNames(): string[] { return CMakeParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return CMakeParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(CMakeParser._ATN, this);
	}
	// @RuleVersion(0)
	public file(): FileContext {
		let _localctx: FileContext = new FileContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, CMakeParser.RULE_file);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 11;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CMakeParser.Identifier) {
				{
				{
				this.state = 8;
				this.command_invocation();
				}
				}
				this.state = 13;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 14;
			this.match(CMakeParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public command_invocation(): Command_invocationContext {
		let _localctx: Command_invocationContext = new Command_invocationContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, CMakeParser.RULE_command_invocation);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 16;
			this.match(CMakeParser.Identifier);
			this.state = 17;
			this.match(CMakeParser.T__0);
			this.state = 22;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CMakeParser.T__0) | (1 << CMakeParser.Identifier) | (1 << CMakeParser.Unquoted_argument) | (1 << CMakeParser.Quoted_argument) | (1 << CMakeParser.Bracket_argument))) !== 0)) {
				{
				this.state = 20;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case CMakeParser.Identifier:
				case CMakeParser.Unquoted_argument:
				case CMakeParser.Quoted_argument:
				case CMakeParser.Bracket_argument:
					{
					this.state = 18;
					this.single_argument();
					}
					break;
				case CMakeParser.T__0:
					{
					this.state = 19;
					this.compound_argument();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 24;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 25;
			this.match(CMakeParser.T__1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public single_argument(): Single_argumentContext {
		let _localctx: Single_argumentContext = new Single_argumentContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, CMakeParser.RULE_single_argument);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 27;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CMakeParser.Identifier) | (1 << CMakeParser.Unquoted_argument) | (1 << CMakeParser.Quoted_argument) | (1 << CMakeParser.Bracket_argument))) !== 0))) {
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
	public compound_argument(): Compound_argumentContext {
		let _localctx: Compound_argumentContext = new Compound_argumentContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, CMakeParser.RULE_compound_argument);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 29;
			this.match(CMakeParser.T__0);
			this.state = 34;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CMakeParser.T__0) | (1 << CMakeParser.Identifier) | (1 << CMakeParser.Unquoted_argument) | (1 << CMakeParser.Quoted_argument) | (1 << CMakeParser.Bracket_argument))) !== 0)) {
				{
				this.state = 32;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case CMakeParser.Identifier:
				case CMakeParser.Unquoted_argument:
				case CMakeParser.Quoted_argument:
				case CMakeParser.Bracket_argument:
					{
					this.state = 30;
					this.single_argument();
					}
					break;
				case CMakeParser.T__0:
					{
					this.state = 31;
					this.compound_argument();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 36;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 37;
			this.match(CMakeParser.T__1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\r*\x04\x02\t" +
		"\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x03\x02\x07\x02\f\n\x02" +
		"\f\x02\x0E\x02\x0F\v\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x07\x03\x17\n\x03\f\x03\x0E\x03\x1A\v\x03\x03\x03\x03\x03\x03\x04\x03" +
		"\x04\x03\x05\x03\x05\x03\x05\x07\x05#\n\x05\f\x05\x0E\x05&\v\x05\x03\x05" +
		"\x03\x05\x03\x05\x02\x02\x02\x06\x02\x02\x04\x02\x06\x02\b\x02\x02\x03" +
		"\x04\x02\x05\x06\b\t\x02*\x02\r\x03\x02\x02\x02\x04\x12\x03\x02\x02\x02" +
		"\x06\x1D\x03\x02\x02\x02\b\x1F\x03\x02\x02\x02\n\f\x05\x04\x03\x02\v\n" +
		"\x03\x02\x02\x02\f\x0F\x03\x02\x02\x02\r\v\x03\x02\x02\x02\r\x0E\x03\x02" +
		"\x02\x02\x0E\x10\x03\x02\x02\x02\x0F\r\x03\x02\x02\x02\x10\x11\x07\x02" +
		"\x02\x03\x11\x03\x03\x02\x02\x02\x12\x13\x07\x05\x02\x02\x13\x18\x07\x03" +
		"\x02\x02\x14\x17\x05\x06\x04\x02\x15\x17\x05\b\x05\x02\x16\x14\x03\x02" +
		"\x02\x02\x16\x15\x03\x02\x02\x02\x17\x1A\x03\x02\x02\x02\x18\x16\x03\x02" +
		"\x02\x02\x18\x19\x03\x02\x02\x02\x19\x1B\x03\x02\x02\x02\x1A\x18\x03\x02" +
		"\x02\x02\x1B\x1C\x07\x04\x02\x02\x1C\x05\x03\x02\x02\x02\x1D\x1E\t\x02" +
		"\x02\x02\x1E\x07\x03\x02\x02\x02\x1F$\x07\x03\x02\x02 #\x05\x06\x04\x02" +
		"!#\x05\b\x05\x02\" \x03\x02\x02\x02\"!\x03\x02\x02\x02#&\x03\x02\x02\x02" +
		"$\"\x03\x02\x02\x02$%\x03\x02\x02\x02%\'\x03\x02\x02\x02&$\x03\x02\x02" +
		"\x02\'(\x07\x04\x02\x02(\t\x03\x02\x02\x02\x07\r\x16\x18\"$";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!CMakeParser.__ATN) {
			CMakeParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(CMakeParser._serializedATN));
		}

		return CMakeParser.__ATN;
	}

}

export class FileContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(CMakeParser.EOF, 0); }
	public command_invocation(): Command_invocationContext[];
	public command_invocation(i: number): Command_invocationContext;
	public command_invocation(i?: number): Command_invocationContext | Command_invocationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Command_invocationContext);
		} else {
			return this.getRuleContext(i, Command_invocationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CMakeParser.RULE_file; }
	// @Override
	public enterRule(listener: CMakeListener): void {
		if (listener.enterFile) {
			listener.enterFile(this);
		}
	}
	// @Override
	public exitRule(listener: CMakeListener): void {
		if (listener.exitFile) {
			listener.exitFile(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CMakeVisitor<Result>): Result {
		if (visitor.visitFile) {
			return visitor.visitFile(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Command_invocationContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(CMakeParser.Identifier, 0); }
	public single_argument(): Single_argumentContext[];
	public single_argument(i: number): Single_argumentContext;
	public single_argument(i?: number): Single_argumentContext | Single_argumentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Single_argumentContext);
		} else {
			return this.getRuleContext(i, Single_argumentContext);
		}
	}
	public compound_argument(): Compound_argumentContext[];
	public compound_argument(i: number): Compound_argumentContext;
	public compound_argument(i?: number): Compound_argumentContext | Compound_argumentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Compound_argumentContext);
		} else {
			return this.getRuleContext(i, Compound_argumentContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CMakeParser.RULE_command_invocation; }
	// @Override
	public enterRule(listener: CMakeListener): void {
		if (listener.enterCommand_invocation) {
			listener.enterCommand_invocation(this);
		}
	}
	// @Override
	public exitRule(listener: CMakeListener): void {
		if (listener.exitCommand_invocation) {
			listener.exitCommand_invocation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CMakeVisitor<Result>): Result {
		if (visitor.visitCommand_invocation) {
			return visitor.visitCommand_invocation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Single_argumentContext extends ParserRuleContext {
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(CMakeParser.Identifier, 0); }
	public Unquoted_argument(): TerminalNode | undefined { return this.tryGetToken(CMakeParser.Unquoted_argument, 0); }
	public Bracket_argument(): TerminalNode | undefined { return this.tryGetToken(CMakeParser.Bracket_argument, 0); }
	public Quoted_argument(): TerminalNode | undefined { return this.tryGetToken(CMakeParser.Quoted_argument, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CMakeParser.RULE_single_argument; }
	// @Override
	public enterRule(listener: CMakeListener): void {
		if (listener.enterSingle_argument) {
			listener.enterSingle_argument(this);
		}
	}
	// @Override
	public exitRule(listener: CMakeListener): void {
		if (listener.exitSingle_argument) {
			listener.exitSingle_argument(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CMakeVisitor<Result>): Result {
		if (visitor.visitSingle_argument) {
			return visitor.visitSingle_argument(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Compound_argumentContext extends ParserRuleContext {
	public single_argument(): Single_argumentContext[];
	public single_argument(i: number): Single_argumentContext;
	public single_argument(i?: number): Single_argumentContext | Single_argumentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Single_argumentContext);
		} else {
			return this.getRuleContext(i, Single_argumentContext);
		}
	}
	public compound_argument(): Compound_argumentContext[];
	public compound_argument(i: number): Compound_argumentContext;
	public compound_argument(i?: number): Compound_argumentContext | Compound_argumentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Compound_argumentContext);
		} else {
			return this.getRuleContext(i, Compound_argumentContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CMakeParser.RULE_compound_argument; }
	// @Override
	public enterRule(listener: CMakeListener): void {
		if (listener.enterCompound_argument) {
			listener.enterCompound_argument(this);
		}
	}
	// @Override
	public exitRule(listener: CMakeListener): void {
		if (listener.exitCompound_argument) {
			listener.exitCompound_argument(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CMakeVisitor<Result>): Result {
		if (visitor.visitCompound_argument) {
			return visitor.visitCompound_argument(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


