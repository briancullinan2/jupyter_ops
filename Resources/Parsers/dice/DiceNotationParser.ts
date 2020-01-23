// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/dice/DiceNotation.g4 by ANTLR 4.7.3-SNAPSHOT


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

import { DiceNotationListener } from "./DiceNotationListener";
import { DiceNotationVisitor } from "./DiceNotationVisitor";


export class DiceNotationParser extends Parser {
	public static readonly DSEPARATOR = 1;
	public static readonly DIGIT = 2;
	public static readonly ADDOPERATOR = 3;
	public static readonly MULTOPERATOR = 4;
	public static readonly LPAREN = 5;
	public static readonly RPAREN = 6;
	public static readonly WS = 7;
	public static readonly RULE_notation = 0;
	public static readonly RULE_addOp = 1;
	public static readonly RULE_multOp = 2;
	public static readonly RULE_operand = 3;
	public static readonly RULE_dice = 4;
	public static readonly RULE_number = 5;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"notation", "addOp", "multOp", "operand", "dice", "number",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, "'('", "')'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "DSEPARATOR", "DIGIT", "ADDOPERATOR", "MULTOPERATOR", "LPAREN", 
		"RPAREN", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(DiceNotationParser._LITERAL_NAMES, DiceNotationParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return DiceNotationParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "DiceNotation.g4"; }

	// @Override
	public get ruleNames(): string[] { return DiceNotationParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return DiceNotationParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(DiceNotationParser._ATN, this);
	}
	// @RuleVersion(0)
	public notation(): NotationContext {
		let _localctx: NotationContext = new NotationContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, DiceNotationParser.RULE_notation);
		try {
			this.state = 15;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 0, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 12;
				this.dice();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 13;
				this.number();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 14;
				this.addOp();
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
	public addOp(): AddOpContext {
		let _localctx: AddOpContext = new AddOpContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, DiceNotationParser.RULE_addOp);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 17;
			this.multOp();
			this.state = 22;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === DiceNotationParser.ADDOPERATOR) {
				{
				{
				this.state = 18;
				this.match(DiceNotationParser.ADDOPERATOR);
				this.state = 19;
				this.multOp();
				}
				}
				this.state = 24;
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
	public multOp(): MultOpContext {
		let _localctx: MultOpContext = new MultOpContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, DiceNotationParser.RULE_multOp);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 25;
			this.operand();
			this.state = 30;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === DiceNotationParser.MULTOPERATOR) {
				{
				{
				this.state = 26;
				this.match(DiceNotationParser.MULTOPERATOR);
				this.state = 27;
				this.operand();
				}
				}
				this.state = 32;
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
	public operand(): OperandContext {
		let _localctx: OperandContext = new OperandContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, DiceNotationParser.RULE_operand);
		try {
			this.state = 39;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 3, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 33;
				this.dice();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 34;
				this.number();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 35;
				this.match(DiceNotationParser.LPAREN);
				this.state = 36;
				this.notation();
				this.state = 37;
				this.match(DiceNotationParser.RPAREN);
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
	public dice(): DiceContext {
		let _localctx: DiceContext = new DiceContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, DiceNotationParser.RULE_dice);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 42;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === DiceNotationParser.ADDOPERATOR) {
				{
				this.state = 41;
				this.match(DiceNotationParser.ADDOPERATOR);
				}
			}

			this.state = 45;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === DiceNotationParser.DIGIT) {
				{
				this.state = 44;
				this.match(DiceNotationParser.DIGIT);
				}
			}

			this.state = 47;
			this.match(DiceNotationParser.DSEPARATOR);
			this.state = 48;
			this.match(DiceNotationParser.DIGIT);
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
		this.enterRule(_localctx, 10, DiceNotationParser.RULE_number);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 51;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === DiceNotationParser.ADDOPERATOR) {
				{
				this.state = 50;
				this.match(DiceNotationParser.ADDOPERATOR);
				}
			}

			this.state = 53;
			this.match(DiceNotationParser.DIGIT);
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\t:\x04\x02\t" +
		"\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07\t" +
		"\x07\x03\x02\x03\x02\x03\x02\x05\x02\x12\n\x02\x03\x03\x03\x03\x03\x03" +
		"\x07\x03\x17\n\x03\f\x03\x0E\x03\x1A\v\x03\x03\x04\x03\x04\x03\x04\x07" +
		"\x04\x1F\n\x04\f\x04\x0E\x04\"\v\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03" +
		"\x05\x03\x05\x05\x05*\n\x05\x03\x06\x05\x06-\n\x06\x03\x06\x05\x060\n" +
		"\x06\x03\x06\x03\x06\x03\x06\x03\x07\x05\x076\n\x07\x03\x07\x03\x07\x03" +
		"\x07\x02\x02\x02\b\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x02\x02\x02" +
		"<\x02\x11\x03\x02\x02\x02\x04\x13\x03\x02\x02\x02\x06\x1B\x03\x02\x02" +
		"\x02\b)\x03\x02\x02\x02\n,\x03\x02\x02\x02\f5\x03\x02\x02\x02\x0E\x12" +
		"\x05\n\x06\x02\x0F\x12\x05\f\x07\x02\x10\x12\x05\x04\x03\x02\x11\x0E\x03" +
		"\x02\x02\x02\x11\x0F\x03\x02\x02\x02\x11\x10\x03\x02\x02\x02\x12\x03\x03" +
		"\x02\x02\x02\x13\x18\x05\x06\x04\x02\x14\x15\x07\x05\x02\x02\x15\x17\x05" +
		"\x06\x04\x02\x16\x14\x03\x02\x02\x02\x17\x1A\x03\x02\x02\x02\x18\x16\x03" +
		"\x02\x02\x02\x18\x19\x03\x02\x02\x02\x19\x05\x03\x02\x02\x02\x1A\x18\x03" +
		"\x02\x02\x02\x1B \x05\b\x05\x02\x1C\x1D\x07\x06\x02\x02\x1D\x1F\x05\b" +
		"\x05\x02\x1E\x1C\x03\x02\x02\x02\x1F\"\x03\x02\x02\x02 \x1E\x03\x02\x02" +
		"\x02 !\x03\x02\x02\x02!\x07\x03\x02\x02\x02\" \x03\x02\x02\x02#*\x05\n" +
		"\x06\x02$*\x05\f\x07\x02%&\x07\x07\x02\x02&\'\x05\x02\x02\x02\'(\x07\b" +
		"\x02\x02(*\x03\x02\x02\x02)#\x03\x02\x02\x02)$\x03\x02\x02\x02)%\x03\x02" +
		"\x02\x02*\t\x03\x02\x02\x02+-\x07\x05\x02\x02,+\x03\x02\x02\x02,-\x03" +
		"\x02\x02\x02-/\x03\x02\x02\x02.0\x07\x04\x02\x02/.\x03\x02\x02\x02/0\x03" +
		"\x02\x02\x0201\x03\x02\x02\x0212\x07\x03\x02\x0223\x07\x04\x02\x023\v" +
		"\x03\x02\x02\x0246\x07\x05\x02\x0254\x03\x02\x02\x0256\x03\x02\x02\x02" +
		"67\x03\x02\x02\x0278\x07\x04\x02\x028\r\x03\x02\x02\x02\t\x11\x18 ),/" +
		"5";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!DiceNotationParser.__ATN) {
			DiceNotationParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(DiceNotationParser._serializedATN));
		}

		return DiceNotationParser.__ATN;
	}

}

export class NotationContext extends ParserRuleContext {
	public dice(): DiceContext | undefined {
		return this.tryGetRuleContext(0, DiceContext);
	}
	public number(): NumberContext | undefined {
		return this.tryGetRuleContext(0, NumberContext);
	}
	public addOp(): AddOpContext | undefined {
		return this.tryGetRuleContext(0, AddOpContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DiceNotationParser.RULE_notation; }
	// @Override
	public enterRule(listener: DiceNotationListener): void {
		if (listener.enterNotation) {
			listener.enterNotation(this);
		}
	}
	// @Override
	public exitRule(listener: DiceNotationListener): void {
		if (listener.exitNotation) {
			listener.exitNotation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DiceNotationVisitor<Result>): Result {
		if (visitor.visitNotation) {
			return visitor.visitNotation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AddOpContext extends ParserRuleContext {
	public multOp(): MultOpContext[];
	public multOp(i: number): MultOpContext;
	public multOp(i?: number): MultOpContext | MultOpContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MultOpContext);
		} else {
			return this.getRuleContext(i, MultOpContext);
		}
	}
	public ADDOPERATOR(): TerminalNode[];
	public ADDOPERATOR(i: number): TerminalNode;
	public ADDOPERATOR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(DiceNotationParser.ADDOPERATOR);
		} else {
			return this.getToken(DiceNotationParser.ADDOPERATOR, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DiceNotationParser.RULE_addOp; }
	// @Override
	public enterRule(listener: DiceNotationListener): void {
		if (listener.enterAddOp) {
			listener.enterAddOp(this);
		}
	}
	// @Override
	public exitRule(listener: DiceNotationListener): void {
		if (listener.exitAddOp) {
			listener.exitAddOp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DiceNotationVisitor<Result>): Result {
		if (visitor.visitAddOp) {
			return visitor.visitAddOp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MultOpContext extends ParserRuleContext {
	public operand(): OperandContext[];
	public operand(i: number): OperandContext;
	public operand(i?: number): OperandContext | OperandContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OperandContext);
		} else {
			return this.getRuleContext(i, OperandContext);
		}
	}
	public MULTOPERATOR(): TerminalNode[];
	public MULTOPERATOR(i: number): TerminalNode;
	public MULTOPERATOR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(DiceNotationParser.MULTOPERATOR);
		} else {
			return this.getToken(DiceNotationParser.MULTOPERATOR, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DiceNotationParser.RULE_multOp; }
	// @Override
	public enterRule(listener: DiceNotationListener): void {
		if (listener.enterMultOp) {
			listener.enterMultOp(this);
		}
	}
	// @Override
	public exitRule(listener: DiceNotationListener): void {
		if (listener.exitMultOp) {
			listener.exitMultOp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DiceNotationVisitor<Result>): Result {
		if (visitor.visitMultOp) {
			return visitor.visitMultOp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OperandContext extends ParserRuleContext {
	public dice(): DiceContext | undefined {
		return this.tryGetRuleContext(0, DiceContext);
	}
	public number(): NumberContext | undefined {
		return this.tryGetRuleContext(0, NumberContext);
	}
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(DiceNotationParser.LPAREN, 0); }
	public notation(): NotationContext | undefined {
		return this.tryGetRuleContext(0, NotationContext);
	}
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(DiceNotationParser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DiceNotationParser.RULE_operand; }
	// @Override
	public enterRule(listener: DiceNotationListener): void {
		if (listener.enterOperand) {
			listener.enterOperand(this);
		}
	}
	// @Override
	public exitRule(listener: DiceNotationListener): void {
		if (listener.exitOperand) {
			listener.exitOperand(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DiceNotationVisitor<Result>): Result {
		if (visitor.visitOperand) {
			return visitor.visitOperand(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DiceContext extends ParserRuleContext {
	public DSEPARATOR(): TerminalNode { return this.getToken(DiceNotationParser.DSEPARATOR, 0); }
	public DIGIT(): TerminalNode[];
	public DIGIT(i: number): TerminalNode;
	public DIGIT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(DiceNotationParser.DIGIT);
		} else {
			return this.getToken(DiceNotationParser.DIGIT, i);
		}
	}
	public ADDOPERATOR(): TerminalNode | undefined { return this.tryGetToken(DiceNotationParser.ADDOPERATOR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DiceNotationParser.RULE_dice; }
	// @Override
	public enterRule(listener: DiceNotationListener): void {
		if (listener.enterDice) {
			listener.enterDice(this);
		}
	}
	// @Override
	public exitRule(listener: DiceNotationListener): void {
		if (listener.exitDice) {
			listener.exitDice(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DiceNotationVisitor<Result>): Result {
		if (visitor.visitDice) {
			return visitor.visitDice(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NumberContext extends ParserRuleContext {
	public DIGIT(): TerminalNode { return this.getToken(DiceNotationParser.DIGIT, 0); }
	public ADDOPERATOR(): TerminalNode | undefined { return this.tryGetToken(DiceNotationParser.ADDOPERATOR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DiceNotationParser.RULE_number; }
	// @Override
	public enterRule(listener: DiceNotationListener): void {
		if (listener.enterNumber) {
			listener.enterNumber(this);
		}
	}
	// @Override
	public exitRule(listener: DiceNotationListener): void {
		if (listener.exitNumber) {
			listener.exitNumber(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DiceNotationVisitor<Result>): Result {
		if (visitor.visitNumber) {
			return visitor.visitNumber(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


