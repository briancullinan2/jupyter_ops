// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/rpn/rpn.g4 by ANTLR 4.7.3-SNAPSHOT


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

import { rpnListener } from "./rpnListener";

export class rpnParser extends Parser {
	public static readonly SCIENTIFIC_NUMBER = 1;
	public static readonly VARIABLE = 2;
	public static readonly POW = 3;
	public static readonly PLUS = 4;
	public static readonly MINUS = 5;
	public static readonly TIMES = 6;
	public static readonly DIV = 7;
	public static readonly COS = 8;
	public static readonly SIN = 9;
	public static readonly TAN = 10;
	public static readonly ACOS = 11;
	public static readonly ASIN = 12;
	public static readonly ATAN = 13;
	public static readonly LN = 14;
	public static readonly LOG = 15;
	public static readonly POINT = 16;
	public static readonly WS = 17;
	public static readonly RULE_expression = 0;
	public static readonly RULE_term = 1;
	public static readonly RULE_oper = 2;
	public static readonly RULE_signedAtom = 3;
	public static readonly RULE_variable = 4;
	public static readonly RULE_scientific = 5;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"expression", "term", "oper", "signedAtom", "variable", "scientific",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, "'^'", "'+'", "'-'", "'*'", "'/'", "'cos'", 
		"'sin'", "'tan'", "'acos'", "'asin'", "'atan'", "'ln'", "'log'", "'.'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "SCIENTIFIC_NUMBER", "VARIABLE", "POW", "PLUS", "MINUS", "TIMES", 
		"DIV", "COS", "SIN", "TAN", "ACOS", "ASIN", "ATAN", "LN", "LOG", "POINT", 
		"WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(rpnParser._LITERAL_NAMES, rpnParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return rpnParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "rpn.g4"; }

	// @Override
	public get ruleNames(): string[] { return rpnParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return rpnParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(rpnParser._ATN, this);
	}
	// @RuleVersion(0)
	public expression(): ExpressionContext {
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, rpnParser.RULE_expression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 12;
			this.signedAtom();
			this.state = 16;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << rpnParser.SCIENTIFIC_NUMBER) | (1 << rpnParser.VARIABLE) | (1 << rpnParser.POW) | (1 << rpnParser.PLUS) | (1 << rpnParser.MINUS) | (1 << rpnParser.TIMES) | (1 << rpnParser.DIV) | (1 << rpnParser.COS) | (1 << rpnParser.SIN) | (1 << rpnParser.TAN) | (1 << rpnParser.ACOS) | (1 << rpnParser.ASIN) | (1 << rpnParser.ATAN) | (1 << rpnParser.LN) | (1 << rpnParser.LOG))) !== 0)) {
				{
				{
				this.state = 13;
				this.term();
				}
				}
				this.state = 18;
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
	public term(): TermContext {
		let _localctx: TermContext = new TermContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, rpnParser.RULE_term);
		try {
			this.state = 21;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 19;
				this.signedAtom();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 20;
				this.oper();
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
	public oper(): OperContext {
		let _localctx: OperContext = new OperContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, rpnParser.RULE_oper);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 23;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << rpnParser.POW) | (1 << rpnParser.PLUS) | (1 << rpnParser.MINUS) | (1 << rpnParser.TIMES) | (1 << rpnParser.DIV) | (1 << rpnParser.COS) | (1 << rpnParser.SIN) | (1 << rpnParser.TAN) | (1 << rpnParser.ACOS) | (1 << rpnParser.ASIN) | (1 << rpnParser.ATAN) | (1 << rpnParser.LN) | (1 << rpnParser.LOG))) !== 0))) {
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
	public signedAtom(): SignedAtomContext {
		let _localctx: SignedAtomContext = new SignedAtomContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, rpnParser.RULE_signedAtom);
		try {
			this.state = 31;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case rpnParser.PLUS:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 25;
				this.match(rpnParser.PLUS);
				this.state = 26;
				this.signedAtom();
				}
				break;
			case rpnParser.MINUS:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 27;
				this.match(rpnParser.MINUS);
				this.state = 28;
				this.signedAtom();
				}
				break;
			case rpnParser.SCIENTIFIC_NUMBER:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 29;
				this.scientific();
				}
				break;
			case rpnParser.VARIABLE:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 30;
				this.variable();
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
	public variable(): VariableContext {
		let _localctx: VariableContext = new VariableContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, rpnParser.RULE_variable);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 33;
			this.match(rpnParser.VARIABLE);
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
	public scientific(): ScientificContext {
		let _localctx: ScientificContext = new ScientificContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, rpnParser.RULE_scientific);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 35;
			this.match(rpnParser.SCIENTIFIC_NUMBER);
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x13(\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x03\x02\x03\x02\x07\x02\x11\n\x02\f\x02\x0E\x02\x14\v\x02\x03\x03" +
		"\x03\x03\x05\x03\x18\n\x03\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03" +
		"\x05\x03\x05\x03\x05\x05\x05\"\n\x05\x03\x06\x03\x06\x03\x07\x03\x07\x03" +
		"\x07\x02\x02\x02\b\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x02\x03\x03" +
		"\x02\x05\x11\x02&\x02\x0E\x03\x02\x02\x02\x04\x17\x03\x02\x02\x02\x06" +
		"\x19\x03\x02\x02\x02\b!\x03\x02\x02\x02\n#\x03\x02\x02\x02\f%\x03\x02" +
		"\x02\x02\x0E\x12\x05\b\x05\x02\x0F\x11\x05\x04\x03\x02\x10\x0F\x03\x02" +
		"\x02\x02\x11\x14\x03\x02\x02\x02\x12\x10\x03\x02\x02\x02\x12\x13\x03\x02" +
		"\x02\x02\x13\x03\x03\x02\x02\x02\x14\x12\x03\x02\x02\x02\x15\x18\x05\b" +
		"\x05\x02\x16\x18\x05\x06\x04\x02\x17\x15\x03\x02\x02\x02\x17\x16\x03\x02" +
		"\x02\x02\x18\x05\x03\x02\x02\x02\x19\x1A\t\x02\x02\x02\x1A\x07\x03\x02" +
		"\x02\x02\x1B\x1C\x07\x06\x02\x02\x1C\"\x05\b\x05\x02\x1D\x1E\x07\x07\x02" +
		"\x02\x1E\"\x05\b\x05\x02\x1F\"\x05\f\x07\x02 \"\x05\n\x06\x02!\x1B\x03" +
		"\x02\x02\x02!\x1D\x03\x02\x02\x02!\x1F\x03\x02\x02\x02! \x03\x02\x02\x02" +
		"\"\t\x03\x02\x02\x02#$\x07\x04\x02\x02$\v\x03\x02\x02\x02%&\x07\x03\x02" +
		"\x02&\r\x03\x02\x02\x02\x05\x12\x17!";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!rpnParser.__ATN) {
			rpnParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(rpnParser._serializedATN));
		}

		return rpnParser.__ATN;
	}

}

export class ExpressionContext extends ParserRuleContext {
	public signedAtom(): SignedAtomContext {
		return this.getRuleContext(0, SignedAtomContext);
	}
	public term(): TermContext[];
	public term(i: number): TermContext;
	public term(i?: number): TermContext | TermContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TermContext);
		} else {
			return this.getRuleContext(i, TermContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return rpnParser.RULE_expression; }
	// @Override
	public enterRule(listener: rpnListener): void {
		if (listener.enterExpression) {
			listener.enterExpression(this);
		}
	}
	// @Override
	public exitRule(listener: rpnListener): void {
		if (listener.exitExpression) {
			listener.exitExpression(this);
		}
	}
}


export class TermContext extends ParserRuleContext {
	public signedAtom(): SignedAtomContext | undefined {
		return this.tryGetRuleContext(0, SignedAtomContext);
	}
	public oper(): OperContext | undefined {
		return this.tryGetRuleContext(0, OperContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return rpnParser.RULE_term; }
	// @Override
	public enterRule(listener: rpnListener): void {
		if (listener.enterTerm) {
			listener.enterTerm(this);
		}
	}
	// @Override
	public exitRule(listener: rpnListener): void {
		if (listener.exitTerm) {
			listener.exitTerm(this);
		}
	}
}


export class OperContext extends ParserRuleContext {
	public POW(): TerminalNode | undefined { return this.tryGetToken(rpnParser.POW, 0); }
	public PLUS(): TerminalNode | undefined { return this.tryGetToken(rpnParser.PLUS, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(rpnParser.MINUS, 0); }
	public TIMES(): TerminalNode | undefined { return this.tryGetToken(rpnParser.TIMES, 0); }
	public DIV(): TerminalNode | undefined { return this.tryGetToken(rpnParser.DIV, 0); }
	public COS(): TerminalNode | undefined { return this.tryGetToken(rpnParser.COS, 0); }
	public TAN(): TerminalNode | undefined { return this.tryGetToken(rpnParser.TAN, 0); }
	public SIN(): TerminalNode | undefined { return this.tryGetToken(rpnParser.SIN, 0); }
	public ACOS(): TerminalNode | undefined { return this.tryGetToken(rpnParser.ACOS, 0); }
	public ATAN(): TerminalNode | undefined { return this.tryGetToken(rpnParser.ATAN, 0); }
	public ASIN(): TerminalNode | undefined { return this.tryGetToken(rpnParser.ASIN, 0); }
	public LOG(): TerminalNode | undefined { return this.tryGetToken(rpnParser.LOG, 0); }
	public LN(): TerminalNode | undefined { return this.tryGetToken(rpnParser.LN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return rpnParser.RULE_oper; }
	// @Override
	public enterRule(listener: rpnListener): void {
		if (listener.enterOper) {
			listener.enterOper(this);
		}
	}
	// @Override
	public exitRule(listener: rpnListener): void {
		if (listener.exitOper) {
			listener.exitOper(this);
		}
	}
}


export class SignedAtomContext extends ParserRuleContext {
	public PLUS(): TerminalNode | undefined { return this.tryGetToken(rpnParser.PLUS, 0); }
	public signedAtom(): SignedAtomContext | undefined {
		return this.tryGetRuleContext(0, SignedAtomContext);
	}
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(rpnParser.MINUS, 0); }
	public scientific(): ScientificContext | undefined {
		return this.tryGetRuleContext(0, ScientificContext);
	}
	public variable(): VariableContext | undefined {
		return this.tryGetRuleContext(0, VariableContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return rpnParser.RULE_signedAtom; }
	// @Override
	public enterRule(listener: rpnListener): void {
		if (listener.enterSignedAtom) {
			listener.enterSignedAtom(this);
		}
	}
	// @Override
	public exitRule(listener: rpnListener): void {
		if (listener.exitSignedAtom) {
			listener.exitSignedAtom(this);
		}
	}
}


export class VariableContext extends ParserRuleContext {
	public VARIABLE(): TerminalNode { return this.getToken(rpnParser.VARIABLE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return rpnParser.RULE_variable; }
	// @Override
	public enterRule(listener: rpnListener): void {
		if (listener.enterVariable) {
			listener.enterVariable(this);
		}
	}
	// @Override
	public exitRule(listener: rpnListener): void {
		if (listener.exitVariable) {
			listener.exitVariable(this);
		}
	}
}


export class ScientificContext extends ParserRuleContext {
	public SCIENTIFIC_NUMBER(): TerminalNode { return this.getToken(rpnParser.SCIENTIFIC_NUMBER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return rpnParser.RULE_scientific; }
	// @Override
	public enterRule(listener: rpnListener): void {
		if (listener.enterScientific) {
			listener.enterScientific(this);
		}
	}
	// @Override
	public exitRule(listener: rpnListener): void {
		if (listener.exitScientific) {
			listener.exitScientific(this);
		}
	}
}


