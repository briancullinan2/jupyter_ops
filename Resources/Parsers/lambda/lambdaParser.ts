// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/lambda/lambda.g4 by ANTLR 4.7.3-SNAPSHOT


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

import { lambdaListener } from "./lambdaListener";

export class lambdaParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly VARIABLE = 5;
	public static readonly WS = 6;
	public static readonly RULE_expression = 0;
	public static readonly RULE_function = 1;
	public static readonly RULE_application = 2;
	public static readonly RULE_scope = 3;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"expression", "function", "application", "scope",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'\u03BB'", "'.'", "'('", "')'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, "VARIABLE", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(lambdaParser._LITERAL_NAMES, lambdaParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return lambdaParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "lambda.g4"; }

	// @Override
	public get ruleNames(): string[] { return lambdaParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return lambdaParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(lambdaParser._ATN, this);
	}
	// @RuleVersion(0)
	public expression(): ExpressionContext {
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, lambdaParser.RULE_expression);
		try {
			this.state = 11;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case lambdaParser.VARIABLE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 8;
				this.match(lambdaParser.VARIABLE);
				}
				break;
			case lambdaParser.T__0:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 9;
				this.function();
				}
				break;
			case lambdaParser.T__2:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 10;
				this.application();
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
	public function(): FunctionContext {
		let _localctx: FunctionContext = new FunctionContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, lambdaParser.RULE_function);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 13;
			this.match(lambdaParser.T__0);
			this.state = 14;
			this.match(lambdaParser.VARIABLE);
			this.state = 15;
			this.match(lambdaParser.T__1);
			this.state = 16;
			this.scope();
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
	public application(): ApplicationContext {
		let _localctx: ApplicationContext = new ApplicationContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, lambdaParser.RULE_application);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 18;
			this.match(lambdaParser.T__2);
			this.state = 19;
			this.expression();
			this.state = 20;
			this.expression();
			this.state = 21;
			this.match(lambdaParser.T__3);
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
	public scope(): ScopeContext {
		let _localctx: ScopeContext = new ScopeContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, lambdaParser.RULE_scope);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 23;
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

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\b\x1C\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x03\x02\x03\x02\x03\x02" +
		"\x05\x02\x0E\n\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x02\x02\x02\x06\x02" +
		"\x02\x04\x02\x06\x02\b\x02\x02\x02\x02\x19\x02\r\x03\x02\x02\x02\x04\x0F" +
		"\x03\x02\x02\x02\x06\x14\x03\x02\x02\x02\b\x19\x03\x02\x02\x02\n\x0E\x07" +
		"\x07\x02\x02\v\x0E\x05\x04\x03\x02\f\x0E\x05\x06\x04\x02\r\n\x03\x02\x02" +
		"\x02\r\v\x03\x02\x02\x02\r\f\x03\x02\x02\x02\x0E\x03\x03\x02\x02\x02\x0F" +
		"\x10\x07\x03\x02\x02\x10\x11\x07\x07\x02\x02\x11\x12\x07\x04\x02\x02\x12" +
		"\x13\x05\b\x05\x02\x13\x05\x03\x02\x02\x02\x14\x15\x07\x05\x02\x02\x15" +
		"\x16\x05\x02\x02\x02\x16\x17\x05\x02\x02\x02\x17\x18\x07\x06\x02\x02\x18" +
		"\x07\x03\x02\x02\x02\x19\x1A\x05\x02\x02\x02\x1A\t\x03\x02\x02\x02\x03" +
		"\r";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!lambdaParser.__ATN) {
			lambdaParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(lambdaParser._serializedATN));
		}

		return lambdaParser.__ATN;
	}

}

export class ExpressionContext extends ParserRuleContext {
	public VARIABLE(): TerminalNode | undefined { return this.tryGetToken(lambdaParser.VARIABLE, 0); }
	public function(): FunctionContext | undefined {
		return this.tryGetRuleContext(0, FunctionContext);
	}
	public application(): ApplicationContext | undefined {
		return this.tryGetRuleContext(0, ApplicationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return lambdaParser.RULE_expression; }
	// @Override
	public enterRule(listener: lambdaListener): void {
		if (listener.enterExpression) {
			listener.enterExpression(this);
		}
	}
	// @Override
	public exitRule(listener: lambdaListener): void {
		if (listener.exitExpression) {
			listener.exitExpression(this);
		}
	}
}


export class FunctionContext extends ParserRuleContext {
	public VARIABLE(): TerminalNode { return this.getToken(lambdaParser.VARIABLE, 0); }
	public scope(): ScopeContext {
		return this.getRuleContext(0, ScopeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return lambdaParser.RULE_function; }
	// @Override
	public enterRule(listener: lambdaListener): void {
		if (listener.enterFunction) {
			listener.enterFunction(this);
		}
	}
	// @Override
	public exitRule(listener: lambdaListener): void {
		if (listener.exitFunction) {
			listener.exitFunction(this);
		}
	}
}


export class ApplicationContext extends ParserRuleContext {
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
	public get ruleIndex(): number { return lambdaParser.RULE_application; }
	// @Override
	public enterRule(listener: lambdaListener): void {
		if (listener.enterApplication) {
			listener.enterApplication(this);
		}
	}
	// @Override
	public exitRule(listener: lambdaListener): void {
		if (listener.exitApplication) {
			listener.exitApplication(this);
		}
	}
}


export class ScopeContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return lambdaParser.RULE_scope; }
	// @Override
	public enterRule(listener: lambdaListener): void {
		if (listener.enterScope) {
			listener.enterScope(this);
		}
	}
	// @Override
	public exitRule(listener: lambdaListener): void {
		if (listener.exitScope) {
			listener.exitScope(this);
		}
	}
}


