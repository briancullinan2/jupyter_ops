// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/jsonquery/JsonQuery.g4 by ANTLR 4.7.3-SNAPSHOT


    package ud.antlr.json;


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

import { JsonQueryListener } from "./JsonQueryListener";

export class JsonQueryParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly NOT = 6;
	public static readonly LOGICAL_OPERATOR = 7;
	public static readonly BOOLEAN = 8;
	public static readonly NULL = 9;
	public static readonly EQ = 10;
	public static readonly NE = 11;
	public static readonly GT = 12;
	public static readonly LT = 13;
	public static readonly GE = 14;
	public static readonly LE = 15;
	public static readonly CO = 16;
	public static readonly SW = 17;
	public static readonly EW = 18;
	public static readonly ATTRNAME = 19;
	public static readonly STRING = 20;
	public static readonly DOUBLE = 21;
	public static readonly INT = 22;
	public static readonly EXP = 23;
	public static readonly SP = 24;
	public static readonly RULE_query = 0;
	public static readonly RULE_attrPath = 1;
	public static readonly RULE_subAttr = 2;
	public static readonly RULE_value = 3;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"query", "attrPath", "subAttr", "value",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'('", "')'", "'pr'", "'.'", "'-'", "'not'", undefined, undefined, 
		"'null'", "'eq'", "'ne'", "'gt'", "'lt'", "'ge'", "'le'", "'co'", "'sw'", 
		"'ew'", undefined, undefined, undefined, undefined, undefined, "' '",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, "NOT", 
		"LOGICAL_OPERATOR", "BOOLEAN", "NULL", "EQ", "NE", "GT", "LT", "GE", "LE", 
		"CO", "SW", "EW", "ATTRNAME", "STRING", "DOUBLE", "INT", "EXP", "SP",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(JsonQueryParser._LITERAL_NAMES, JsonQueryParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return JsonQueryParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "JsonQuery.g4"; }

	// @Override
	public get ruleNames(): string[] { return JsonQueryParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return JsonQueryParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(JsonQueryParser._ATN, this);
	}
	public query(): QueryContext;
	public query(_p: number): QueryContext;
	// @RuleVersion(0)
	public query(_p?: number): QueryContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: QueryContext = new QueryContext(this._ctx, _parentState);
		let _prevctx: QueryContext = _localctx;
		let _startState: number = 0;
		this.enterRecursionRule(_localctx, 0, JsonQueryParser.RULE_query, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 29;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 2, this._ctx) ) {
			case 1:
				{
				_localctx = new ParenExpContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 10;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JsonQueryParser.NOT) {
					{
					this.state = 9;
					this.match(JsonQueryParser.NOT);
					}
				}

				this.state = 13;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JsonQueryParser.SP) {
					{
					this.state = 12;
					this.match(JsonQueryParser.SP);
					}
				}

				this.state = 15;
				this.match(JsonQueryParser.T__0);
				this.state = 16;
				this.query(0);
				this.state = 17;
				this.match(JsonQueryParser.T__1);
				}
				break;

			case 2:
				{
				_localctx = new PresentExpContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 19;
				this.attrPath();
				this.state = 20;
				this.match(JsonQueryParser.SP);
				this.state = 21;
				this.match(JsonQueryParser.T__2);
				}
				break;

			case 3:
				{
				_localctx = new CompareExpContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 23;
				this.attrPath();
				this.state = 24;
				this.match(JsonQueryParser.SP);
				this.state = 25;
				(_localctx as CompareExpContext)._op = this._input.LT(1);
				_la = this._input.LA(1);
				if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JsonQueryParser.EQ) | (1 << JsonQueryParser.NE) | (1 << JsonQueryParser.GT) | (1 << JsonQueryParser.LT) | (1 << JsonQueryParser.GE) | (1 << JsonQueryParser.LE) | (1 << JsonQueryParser.CO) | (1 << JsonQueryParser.SW) | (1 << JsonQueryParser.EW))) !== 0))) {
					(_localctx as CompareExpContext)._op = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 26;
				this.match(JsonQueryParser.SP);
				this.state = 27;
				this.value();
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 38;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new LogicalExpContext(new QueryContext(_parentctx, _parentState));
					this.pushNewRecursionContext(_localctx, _startState, JsonQueryParser.RULE_query);
					this.state = 31;
					if (!(this.precpred(this._ctx, 3))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 3)");
					}
					this.state = 32;
					this.match(JsonQueryParser.SP);
					this.state = 33;
					this.match(JsonQueryParser.LOGICAL_OPERATOR);
					this.state = 34;
					this.match(JsonQueryParser.SP);
					this.state = 35;
					this.query(4);
					}
					}
				}
				this.state = 40;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
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
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public attrPath(): AttrPathContext {
		let _localctx: AttrPathContext = new AttrPathContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, JsonQueryParser.RULE_attrPath);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 41;
			this.match(JsonQueryParser.ATTRNAME);
			this.state = 43;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === JsonQueryParser.T__3) {
				{
				this.state = 42;
				this.subAttr();
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
	public subAttr(): SubAttrContext {
		let _localctx: SubAttrContext = new SubAttrContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, JsonQueryParser.RULE_subAttr);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 45;
			this.match(JsonQueryParser.T__3);
			this.state = 46;
			this.attrPath();
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
	public value(): ValueContext {
		let _localctx: ValueContext = new ValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, JsonQueryParser.RULE_value);
		let _la: number;
		try {
			this.state = 59;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JsonQueryParser.BOOLEAN:
				_localctx = new BooleanContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 48;
				this.match(JsonQueryParser.BOOLEAN);
				}
				break;
			case JsonQueryParser.NULL:
				_localctx = new NullContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 49;
				this.match(JsonQueryParser.NULL);
				}
				break;
			case JsonQueryParser.STRING:
				_localctx = new StringContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 50;
				this.match(JsonQueryParser.STRING);
				}
				break;
			case JsonQueryParser.DOUBLE:
				_localctx = new DoubleContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 51;
				this.match(JsonQueryParser.DOUBLE);
				}
				break;
			case JsonQueryParser.T__4:
			case JsonQueryParser.INT:
				_localctx = new LongContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 53;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JsonQueryParser.T__4) {
					{
					this.state = 52;
					this.match(JsonQueryParser.T__4);
					}
				}

				this.state = 55;
				this.match(JsonQueryParser.INT);
				this.state = 57;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 6, this._ctx) ) {
				case 1:
					{
					this.state = 56;
					this.match(JsonQueryParser.EXP);
					}
					break;
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

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 0:
			return this.query_sempred(_localctx as QueryContext, predIndex);
		}
		return true;
	}
	private query_sempred(_localctx: QueryContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 3);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x1A@\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x03\x02\x03\x02\x05\x02" +
		"\r\n\x02\x03\x02\x05\x02\x10\n\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03" +
		"\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03" +
		"\x02\x05\x02 \n\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x07\x02\'" +
		"\n\x02\f\x02\x0E\x02*\v\x02\x03\x03\x03\x03\x05\x03.\n\x03\x03\x04\x03" +
		"\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x05\x058\n\x05\x03" +
		"\x05\x03\x05\x05\x05<\n\x05\x05\x05>\n\x05\x03\x05\x02\x02\x03\x02\x06" +
		"\x02\x02\x04\x02\x06\x02\b\x02\x02\x03\x03\x02\f\x14\x02G\x02\x1F\x03" +
		"\x02\x02\x02\x04+\x03\x02\x02\x02\x06/\x03\x02\x02\x02\b=\x03\x02\x02" +
		"\x02\n\f\b\x02\x01\x02\v\r\x07\b\x02\x02\f\v\x03\x02\x02\x02\f\r\x03\x02" +
		"\x02\x02\r\x0F\x03\x02\x02\x02\x0E\x10\x07\x1A\x02\x02\x0F\x0E\x03\x02" +
		"\x02\x02\x0F\x10\x03\x02\x02\x02\x10\x11\x03\x02\x02\x02\x11\x12\x07\x03" +
		"\x02\x02\x12\x13\x05\x02\x02\x02\x13\x14\x07\x04\x02\x02\x14 \x03\x02" +
		"\x02\x02\x15\x16\x05\x04\x03\x02\x16\x17\x07\x1A\x02\x02\x17\x18\x07\x05" +
		"\x02\x02\x18 \x03\x02\x02\x02\x19\x1A\x05\x04\x03\x02\x1A\x1B\x07\x1A" +
		"\x02\x02\x1B\x1C\t\x02\x02\x02\x1C\x1D\x07\x1A\x02\x02\x1D\x1E\x05\b\x05" +
		"\x02\x1E \x03\x02\x02\x02\x1F\n\x03\x02\x02\x02\x1F\x15\x03\x02\x02\x02" +
		"\x1F\x19\x03\x02\x02\x02 (\x03\x02\x02\x02!\"\f\x05\x02\x02\"#\x07\x1A" +
		"\x02\x02#$\x07\t\x02\x02$%\x07\x1A\x02\x02%\'\x05\x02\x02\x06&!\x03\x02" +
		"\x02\x02\'*\x03\x02\x02\x02(&\x03\x02\x02\x02()\x03\x02\x02\x02)\x03\x03" +
		"\x02\x02\x02*(\x03\x02\x02\x02+-\x07\x15\x02\x02,.\x05\x06\x04\x02-,\x03" +
		"\x02\x02\x02-.\x03\x02\x02\x02.\x05\x03\x02\x02\x02/0\x07\x06\x02\x02" +
		"01\x05\x04\x03\x021\x07\x03\x02\x02\x022>\x07\n\x02\x023>\x07\v\x02\x02" +
		"4>\x07\x16\x02\x025>\x07\x17\x02\x0268\x07\x07\x02\x0276\x03\x02\x02\x02" +
		"78\x03\x02\x02\x0289\x03\x02\x02\x029;\x07\x18\x02\x02:<\x07\x19\x02\x02" +
		";:\x03\x02\x02\x02;<\x03\x02\x02\x02<>\x03\x02\x02\x02=2\x03\x02\x02\x02" +
		"=3\x03\x02\x02\x02=4\x03\x02\x02\x02=5\x03\x02\x02\x02=7\x03\x02\x02\x02" +
		">\t\x03\x02\x02\x02\n\f\x0F\x1F(-7;=";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!JsonQueryParser.__ATN) {
			JsonQueryParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(JsonQueryParser._serializedATN));
		}

		return JsonQueryParser.__ATN;
	}

}

export class QueryContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JsonQueryParser.RULE_query; }
	public copyFrom(ctx: QueryContext): void {
		super.copyFrom(ctx);
	}
}
export class ParenExpContext extends QueryContext {
	public query(): QueryContext {
		return this.getRuleContext(0, QueryContext);
	}
	public NOT(): TerminalNode | undefined { return this.tryGetToken(JsonQueryParser.NOT, 0); }
	public SP(): TerminalNode | undefined { return this.tryGetToken(JsonQueryParser.SP, 0); }
	constructor(ctx: QueryContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JsonQueryListener): void {
		if (listener.enterParenExp) {
			listener.enterParenExp(this);
		}
	}
	// @Override
	public exitRule(listener: JsonQueryListener): void {
		if (listener.exitParenExp) {
			listener.exitParenExp(this);
		}
	}
}
export class LogicalExpContext extends QueryContext {
	public query(): QueryContext[];
	public query(i: number): QueryContext;
	public query(i?: number): QueryContext | QueryContext[] {
		if (i === undefined) {
			return this.getRuleContexts(QueryContext);
		} else {
			return this.getRuleContext(i, QueryContext);
		}
	}
	public SP(): TerminalNode[];
	public SP(i: number): TerminalNode;
	public SP(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JsonQueryParser.SP);
		} else {
			return this.getToken(JsonQueryParser.SP, i);
		}
	}
	public LOGICAL_OPERATOR(): TerminalNode { return this.getToken(JsonQueryParser.LOGICAL_OPERATOR, 0); }
	constructor(ctx: QueryContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JsonQueryListener): void {
		if (listener.enterLogicalExp) {
			listener.enterLogicalExp(this);
		}
	}
	// @Override
	public exitRule(listener: JsonQueryListener): void {
		if (listener.exitLogicalExp) {
			listener.exitLogicalExp(this);
		}
	}
}
export class PresentExpContext extends QueryContext {
	public attrPath(): AttrPathContext {
		return this.getRuleContext(0, AttrPathContext);
	}
	public SP(): TerminalNode { return this.getToken(JsonQueryParser.SP, 0); }
	constructor(ctx: QueryContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JsonQueryListener): void {
		if (listener.enterPresentExp) {
			listener.enterPresentExp(this);
		}
	}
	// @Override
	public exitRule(listener: JsonQueryListener): void {
		if (listener.exitPresentExp) {
			listener.exitPresentExp(this);
		}
	}
}
export class CompareExpContext extends QueryContext {
	public _op: Token;
	public attrPath(): AttrPathContext {
		return this.getRuleContext(0, AttrPathContext);
	}
	public SP(): TerminalNode[];
	public SP(i: number): TerminalNode;
	public SP(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JsonQueryParser.SP);
		} else {
			return this.getToken(JsonQueryParser.SP, i);
		}
	}
	public value(): ValueContext {
		return this.getRuleContext(0, ValueContext);
	}
	public EQ(): TerminalNode | undefined { return this.tryGetToken(JsonQueryParser.EQ, 0); }
	public NE(): TerminalNode | undefined { return this.tryGetToken(JsonQueryParser.NE, 0); }
	public GT(): TerminalNode | undefined { return this.tryGetToken(JsonQueryParser.GT, 0); }
	public LT(): TerminalNode | undefined { return this.tryGetToken(JsonQueryParser.LT, 0); }
	public GE(): TerminalNode | undefined { return this.tryGetToken(JsonQueryParser.GE, 0); }
	public LE(): TerminalNode | undefined { return this.tryGetToken(JsonQueryParser.LE, 0); }
	public CO(): TerminalNode | undefined { return this.tryGetToken(JsonQueryParser.CO, 0); }
	public SW(): TerminalNode | undefined { return this.tryGetToken(JsonQueryParser.SW, 0); }
	public EW(): TerminalNode | undefined { return this.tryGetToken(JsonQueryParser.EW, 0); }
	constructor(ctx: QueryContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JsonQueryListener): void {
		if (listener.enterCompareExp) {
			listener.enterCompareExp(this);
		}
	}
	// @Override
	public exitRule(listener: JsonQueryListener): void {
		if (listener.exitCompareExp) {
			listener.exitCompareExp(this);
		}
	}
}


export class AttrPathContext extends ParserRuleContext {
	public ATTRNAME(): TerminalNode { return this.getToken(JsonQueryParser.ATTRNAME, 0); }
	public subAttr(): SubAttrContext | undefined {
		return this.tryGetRuleContext(0, SubAttrContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JsonQueryParser.RULE_attrPath; }
	// @Override
	public enterRule(listener: JsonQueryListener): void {
		if (listener.enterAttrPath) {
			listener.enterAttrPath(this);
		}
	}
	// @Override
	public exitRule(listener: JsonQueryListener): void {
		if (listener.exitAttrPath) {
			listener.exitAttrPath(this);
		}
	}
}


export class SubAttrContext extends ParserRuleContext {
	public attrPath(): AttrPathContext {
		return this.getRuleContext(0, AttrPathContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JsonQueryParser.RULE_subAttr; }
	// @Override
	public enterRule(listener: JsonQueryListener): void {
		if (listener.enterSubAttr) {
			listener.enterSubAttr(this);
		}
	}
	// @Override
	public exitRule(listener: JsonQueryListener): void {
		if (listener.exitSubAttr) {
			listener.exitSubAttr(this);
		}
	}
}


export class ValueContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JsonQueryParser.RULE_value; }
	public copyFrom(ctx: ValueContext): void {
		super.copyFrom(ctx);
	}
}
export class BooleanContext extends ValueContext {
	public BOOLEAN(): TerminalNode { return this.getToken(JsonQueryParser.BOOLEAN, 0); }
	constructor(ctx: ValueContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JsonQueryListener): void {
		if (listener.enterBoolean) {
			listener.enterBoolean(this);
		}
	}
	// @Override
	public exitRule(listener: JsonQueryListener): void {
		if (listener.exitBoolean) {
			listener.exitBoolean(this);
		}
	}
}
export class NullContext extends ValueContext {
	public NULL(): TerminalNode { return this.getToken(JsonQueryParser.NULL, 0); }
	constructor(ctx: ValueContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JsonQueryListener): void {
		if (listener.enterNull) {
			listener.enterNull(this);
		}
	}
	// @Override
	public exitRule(listener: JsonQueryListener): void {
		if (listener.exitNull) {
			listener.exitNull(this);
		}
	}
}
export class StringContext extends ValueContext {
	public STRING(): TerminalNode { return this.getToken(JsonQueryParser.STRING, 0); }
	constructor(ctx: ValueContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JsonQueryListener): void {
		if (listener.enterString) {
			listener.enterString(this);
		}
	}
	// @Override
	public exitRule(listener: JsonQueryListener): void {
		if (listener.exitString) {
			listener.exitString(this);
		}
	}
}
export class DoubleContext extends ValueContext {
	public DOUBLE(): TerminalNode { return this.getToken(JsonQueryParser.DOUBLE, 0); }
	constructor(ctx: ValueContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JsonQueryListener): void {
		if (listener.enterDouble) {
			listener.enterDouble(this);
		}
	}
	// @Override
	public exitRule(listener: JsonQueryListener): void {
		if (listener.exitDouble) {
			listener.exitDouble(this);
		}
	}
}
export class LongContext extends ValueContext {
	public INT(): TerminalNode { return this.getToken(JsonQueryParser.INT, 0); }
	public EXP(): TerminalNode | undefined { return this.tryGetToken(JsonQueryParser.EXP, 0); }
	constructor(ctx: ValueContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JsonQueryListener): void {
		if (listener.enterLong) {
			listener.enterLong(this);
		}
	}
	// @Override
	public exitRule(listener: JsonQueryListener): void {
		if (listener.exitLong) {
			listener.exitLong(this);
		}
	}
}


