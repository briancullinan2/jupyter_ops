// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/scotty/scotty.g4 by ANTLR 4.7.3-SNAPSHOT


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

import { scottyListener } from "./scottyListener";
import { scottyVisitor } from "./scottyVisitor";


export class scottyParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly DIGIT = 10;
	public static readonly LETTER = 11;
	public static readonly WS = 12;
	public static readonly RULE_prog = 0;
	public static readonly RULE_program_lines = 1;
	public static readonly RULE_var_assign = 2;
	public static readonly RULE_fn_def = 3;
	public static readonly RULE_prefix_exp = 4;
	public static readonly RULE_identifier = 5;
	public static readonly RULE_id_tail = 6;
	public static readonly RULE_number = 7;
	public static readonly RULE_digits = 8;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"prog", "program_lines", "var_assign", "fn_def", "prefix_exp", "identifier", 
		"id_tail", "number", "digits",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'='", "'fun'", "'+'", "'-'", "'*'", "'/'", "'('", "')'", "'.'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, "DIGIT", "LETTER", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(scottyParser._LITERAL_NAMES, scottyParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return scottyParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "scotty.g4"; }

	// @Override
	public get ruleNames(): string[] { return scottyParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return scottyParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(scottyParser._ATN, this);
	}
	// @RuleVersion(0)
	public prog(): ProgContext {
		let _localctx: ProgContext = new ProgContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, scottyParser.RULE_prog);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 18;
			this.program_lines();
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
	public program_lines(): Program_linesContext {
		let _localctx: Program_linesContext = new Program_linesContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, scottyParser.RULE_program_lines);
		try {
			this.state = 27;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 0, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 20;
				this.prefix_exp();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 21;
				this.fn_def();
				this.state = 22;
				this.program_lines();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 24;
				this.var_assign();
				this.state = 25;
				this.program_lines();
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
	public var_assign(): Var_assignContext {
		let _localctx: Var_assignContext = new Var_assignContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, scottyParser.RULE_var_assign);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 29;
			this.identifier();
			this.state = 30;
			this.match(scottyParser.T__0);
			this.state = 31;
			this.prefix_exp();
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
	public fn_def(): Fn_defContext {
		let _localctx: Fn_defContext = new Fn_defContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, scottyParser.RULE_fn_def);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 33;
			this.match(scottyParser.T__1);
			this.state = 34;
			this.identifier();
			this.state = 35;
			this.identifier();
			this.state = 36;
			this.match(scottyParser.T__0);
			this.state = 37;
			this.prefix_exp();
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
	public prefix_exp(): Prefix_expContext {
		let _localctx: Prefix_expContext = new Prefix_expContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, scottyParser.RULE_prefix_exp);
		try {
			this.state = 62;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				{
				this.state = 39;
				this.match(scottyParser.T__2);
				this.state = 40;
				this.prefix_exp();
				this.state = 41;
				this.prefix_exp();
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				{
				this.state = 43;
				this.match(scottyParser.T__3);
				this.state = 44;
				this.prefix_exp();
				this.state = 45;
				this.prefix_exp();
				}
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				{
				this.state = 47;
				this.match(scottyParser.T__4);
				this.state = 48;
				this.prefix_exp();
				this.state = 49;
				this.prefix_exp();
				}
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				{
				this.state = 51;
				this.match(scottyParser.T__5);
				this.state = 52;
				this.prefix_exp();
				this.state = 53;
				this.prefix_exp();
				}
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				{
				this.state = 55;
				this.match(scottyParser.T__6);
				this.state = 56;
				this.identifier();
				this.state = 57;
				this.prefix_exp();
				this.state = 58;
				this.match(scottyParser.T__7);
				}
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 60;
				this.identifier();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 61;
				this.number();
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
	public identifier(): IdentifierContext {
		let _localctx: IdentifierContext = new IdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, scottyParser.RULE_identifier);
		try {
			this.state = 67;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 2, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 64;
				this.match(scottyParser.LETTER);
				this.state = 65;
				this.id_tail();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 66;
				this.match(scottyParser.LETTER);
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
	public id_tail(): Id_tailContext {
		let _localctx: Id_tailContext = new Id_tailContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, scottyParser.RULE_id_tail);
		try {
			this.state = 75;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 3, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 69;
				this.match(scottyParser.LETTER);
				this.state = 70;
				this.id_tail();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 71;
				this.match(scottyParser.DIGIT);
				this.state = 72;
				this.id_tail();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 73;
				this.match(scottyParser.LETTER);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 74;
				this.match(scottyParser.DIGIT);
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
	public number(): NumberContext {
		let _localctx: NumberContext = new NumberContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, scottyParser.RULE_number);
		try {
			this.state = 80;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case scottyParser.T__3:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 77;
				this.match(scottyParser.T__3);
				this.state = 78;
				this.digits();
				}
				break;
			case scottyParser.T__8:
			case scottyParser.DIGIT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 79;
				this.digits();
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
	public digits(): DigitsContext {
		let _localctx: DigitsContext = new DigitsContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, scottyParser.RULE_digits);
		try {
			this.state = 87;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 5, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 82;
				this.match(scottyParser.DIGIT);
				this.state = 83;
				this.digits();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 84;
				this.match(scottyParser.T__8);
				this.state = 85;
				this.digits();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 86;
				this.match(scottyParser.DIGIT);
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

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x0E\\\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x03\x02\x03\x02\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03\x1E\n\x03\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x06" +
		"\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06" +
		"\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06" +
		"\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06A\n\x06\x03\x07\x03\x07\x03\x07" +
		"\x05\x07F\n\x07\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x05\bN\n\b\x03\t\x03" +
		"\t\x03\t\x05\tS\n\t\x03\n\x03\n\x03\n\x03\n\x03\n\x05\nZ\n\n\x03\n\x02" +
		"\x02\x02\v\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12" +
		"\x02\x02\x02\x02a\x02\x14\x03\x02\x02\x02\x04\x1D\x03\x02\x02\x02\x06" +
		"\x1F\x03\x02\x02\x02\b#\x03\x02\x02\x02\n@\x03\x02\x02\x02\fE\x03\x02" +
		"\x02\x02\x0EM\x03\x02\x02\x02\x10R\x03\x02\x02\x02\x12Y\x03\x02\x02\x02" +
		"\x14\x15\x05\x04\x03\x02\x15\x03\x03\x02\x02\x02\x16\x1E\x05\n\x06\x02" +
		"\x17\x18\x05\b\x05\x02\x18\x19\x05\x04\x03\x02\x19\x1E\x03\x02\x02\x02" +
		"\x1A\x1B\x05\x06\x04\x02\x1B\x1C\x05\x04\x03\x02\x1C\x1E\x03\x02\x02\x02" +
		"\x1D\x16\x03\x02\x02\x02\x1D\x17\x03\x02\x02\x02\x1D\x1A\x03\x02\x02\x02" +
		"\x1E\x05\x03\x02\x02\x02\x1F \x05\f\x07\x02 !\x07\x03\x02\x02!\"\x05\n" +
		"\x06\x02\"\x07\x03\x02\x02\x02#$\x07\x04\x02\x02$%\x05\f\x07\x02%&\x05" +
		"\f\x07\x02&\'\x07\x03\x02\x02\'(\x05\n\x06\x02(\t\x03\x02\x02\x02)*\x07" +
		"\x05\x02\x02*+\x05\n\x06\x02+,\x05\n\x06\x02,A\x03\x02\x02\x02-.\x07\x06" +
		"\x02\x02./\x05\n\x06\x02/0\x05\n\x06\x020A\x03\x02\x02\x0212\x07\x07\x02" +
		"\x0223\x05\n\x06\x0234\x05\n\x06\x024A\x03\x02\x02\x0256\x07\b\x02\x02" +
		"67\x05\n\x06\x0278\x05\n\x06\x028A\x03\x02\x02\x029:\x07\t\x02\x02:;\x05" +
		"\f\x07\x02;<\x05\n\x06\x02<=\x07\n\x02\x02=A\x03\x02\x02\x02>A\x05\f\x07" +
		"\x02?A\x05\x10\t\x02@)\x03\x02\x02\x02@-\x03\x02\x02\x02@1\x03\x02\x02" +
		"\x02@5\x03\x02\x02\x02@9\x03\x02\x02\x02@>\x03\x02\x02\x02@?\x03\x02\x02" +
		"\x02A\v\x03\x02\x02\x02BC\x07\r\x02\x02CF\x05\x0E\b\x02DF\x07\r\x02\x02" +
		"EB\x03\x02\x02\x02ED\x03\x02\x02\x02F\r\x03\x02\x02\x02GH\x07\r\x02\x02" +
		"HN\x05\x0E\b\x02IJ\x07\f\x02\x02JN\x05\x0E\b\x02KN\x07\r\x02\x02LN\x07" +
		"\f\x02\x02MG\x03\x02\x02\x02MI\x03\x02\x02\x02MK\x03\x02\x02\x02ML\x03" +
		"\x02\x02\x02N\x0F\x03\x02\x02\x02OP\x07\x06\x02\x02PS\x05\x12\n\x02QS" +
		"\x05\x12\n\x02RO\x03\x02\x02\x02RQ\x03\x02\x02\x02S\x11\x03\x02\x02\x02" +
		"TU\x07\f\x02\x02UZ\x05\x12\n\x02VW\x07\v\x02\x02WZ\x05\x12\n\x02XZ\x07" +
		"\f\x02\x02YT\x03\x02\x02\x02YV\x03\x02\x02\x02YX\x03\x02\x02\x02Z\x13" +
		"\x03\x02\x02\x02\b\x1D@EMRY";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!scottyParser.__ATN) {
			scottyParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(scottyParser._serializedATN));
		}

		return scottyParser.__ATN;
	}

}

export class ProgContext extends ParserRuleContext {
	public program_lines(): Program_linesContext {
		return this.getRuleContext(0, Program_linesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return scottyParser.RULE_prog; }
	// @Override
	public enterRule(listener: scottyListener): void {
		if (listener.enterProg) {
			listener.enterProg(this);
		}
	}
	// @Override
	public exitRule(listener: scottyListener): void {
		if (listener.exitProg) {
			listener.exitProg(this);
		}
	}
	// @Override
	public accept<Result>(visitor: scottyVisitor<Result>): Result {
		if (visitor.visitProg) {
			return visitor.visitProg(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Program_linesContext extends ParserRuleContext {
	public prefix_exp(): Prefix_expContext | undefined {
		return this.tryGetRuleContext(0, Prefix_expContext);
	}
	public fn_def(): Fn_defContext | undefined {
		return this.tryGetRuleContext(0, Fn_defContext);
	}
	public program_lines(): Program_linesContext | undefined {
		return this.tryGetRuleContext(0, Program_linesContext);
	}
	public var_assign(): Var_assignContext | undefined {
		return this.tryGetRuleContext(0, Var_assignContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return scottyParser.RULE_program_lines; }
	// @Override
	public enterRule(listener: scottyListener): void {
		if (listener.enterProgram_lines) {
			listener.enterProgram_lines(this);
		}
	}
	// @Override
	public exitRule(listener: scottyListener): void {
		if (listener.exitProgram_lines) {
			listener.exitProgram_lines(this);
		}
	}
	// @Override
	public accept<Result>(visitor: scottyVisitor<Result>): Result {
		if (visitor.visitProgram_lines) {
			return visitor.visitProgram_lines(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Var_assignContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public prefix_exp(): Prefix_expContext {
		return this.getRuleContext(0, Prefix_expContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return scottyParser.RULE_var_assign; }
	// @Override
	public enterRule(listener: scottyListener): void {
		if (listener.enterVar_assign) {
			listener.enterVar_assign(this);
		}
	}
	// @Override
	public exitRule(listener: scottyListener): void {
		if (listener.exitVar_assign) {
			listener.exitVar_assign(this);
		}
	}
	// @Override
	public accept<Result>(visitor: scottyVisitor<Result>): Result {
		if (visitor.visitVar_assign) {
			return visitor.visitVar_assign(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Fn_defContext extends ParserRuleContext {
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	public prefix_exp(): Prefix_expContext {
		return this.getRuleContext(0, Prefix_expContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return scottyParser.RULE_fn_def; }
	// @Override
	public enterRule(listener: scottyListener): void {
		if (listener.enterFn_def) {
			listener.enterFn_def(this);
		}
	}
	// @Override
	public exitRule(listener: scottyListener): void {
		if (listener.exitFn_def) {
			listener.exitFn_def(this);
		}
	}
	// @Override
	public accept<Result>(visitor: scottyVisitor<Result>): Result {
		if (visitor.visitFn_def) {
			return visitor.visitFn_def(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Prefix_expContext extends ParserRuleContext {
	public prefix_exp(): Prefix_expContext[];
	public prefix_exp(i: number): Prefix_expContext;
	public prefix_exp(i?: number): Prefix_expContext | Prefix_expContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Prefix_expContext);
		} else {
			return this.getRuleContext(i, Prefix_expContext);
		}
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public number(): NumberContext | undefined {
		return this.tryGetRuleContext(0, NumberContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return scottyParser.RULE_prefix_exp; }
	// @Override
	public enterRule(listener: scottyListener): void {
		if (listener.enterPrefix_exp) {
			listener.enterPrefix_exp(this);
		}
	}
	// @Override
	public exitRule(listener: scottyListener): void {
		if (listener.exitPrefix_exp) {
			listener.exitPrefix_exp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: scottyVisitor<Result>): Result {
		if (visitor.visitPrefix_exp) {
			return visitor.visitPrefix_exp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdentifierContext extends ParserRuleContext {
	public LETTER(): TerminalNode { return this.getToken(scottyParser.LETTER, 0); }
	public id_tail(): Id_tailContext | undefined {
		return this.tryGetRuleContext(0, Id_tailContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return scottyParser.RULE_identifier; }
	// @Override
	public enterRule(listener: scottyListener): void {
		if (listener.enterIdentifier) {
			listener.enterIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: scottyListener): void {
		if (listener.exitIdentifier) {
			listener.exitIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: scottyVisitor<Result>): Result {
		if (visitor.visitIdentifier) {
			return visitor.visitIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Id_tailContext extends ParserRuleContext {
	public LETTER(): TerminalNode | undefined { return this.tryGetToken(scottyParser.LETTER, 0); }
	public id_tail(): Id_tailContext | undefined {
		return this.tryGetRuleContext(0, Id_tailContext);
	}
	public DIGIT(): TerminalNode | undefined { return this.tryGetToken(scottyParser.DIGIT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return scottyParser.RULE_id_tail; }
	// @Override
	public enterRule(listener: scottyListener): void {
		if (listener.enterId_tail) {
			listener.enterId_tail(this);
		}
	}
	// @Override
	public exitRule(listener: scottyListener): void {
		if (listener.exitId_tail) {
			listener.exitId_tail(this);
		}
	}
	// @Override
	public accept<Result>(visitor: scottyVisitor<Result>): Result {
		if (visitor.visitId_tail) {
			return visitor.visitId_tail(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NumberContext extends ParserRuleContext {
	public digits(): DigitsContext {
		return this.getRuleContext(0, DigitsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return scottyParser.RULE_number; }
	// @Override
	public enterRule(listener: scottyListener): void {
		if (listener.enterNumber) {
			listener.enterNumber(this);
		}
	}
	// @Override
	public exitRule(listener: scottyListener): void {
		if (listener.exitNumber) {
			listener.exitNumber(this);
		}
	}
	// @Override
	public accept<Result>(visitor: scottyVisitor<Result>): Result {
		if (visitor.visitNumber) {
			return visitor.visitNumber(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DigitsContext extends ParserRuleContext {
	public DIGIT(): TerminalNode | undefined { return this.tryGetToken(scottyParser.DIGIT, 0); }
	public digits(): DigitsContext | undefined {
		return this.tryGetRuleContext(0, DigitsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return scottyParser.RULE_digits; }
	// @Override
	public enterRule(listener: scottyListener): void {
		if (listener.enterDigits) {
			listener.enterDigits(this);
		}
	}
	// @Override
	public exitRule(listener: scottyListener): void {
		if (listener.exitDigits) {
			listener.exitDigits(this);
		}
	}
	// @Override
	public accept<Result>(visitor: scottyVisitor<Result>): Result {
		if (visitor.visitDigits) {
			return visitor.visitDigits(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


