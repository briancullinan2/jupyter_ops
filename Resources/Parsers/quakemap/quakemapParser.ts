// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/quakemap/quakemap.g4 by ANTLR 4.7.3-SNAPSHOT


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

import { quakemapListener } from "./quakemapListener";
import { quakemapVisitor } from "./quakemapVisitor";


export class quakemapParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly TEXT = 5;
	public static readonly NUMBER = 6;
	public static readonly STRING = 7;
	public static readonly WS = 8;
	public static readonly RULE_map = 0;
	public static readonly RULE_entity = 1;
	public static readonly RULE_keyvalue = 2;
	public static readonly RULE_brush = 3;
	public static readonly RULE_brushline = 4;
	public static readonly RULE_coord = 5;
	public static readonly RULE_num = 6;
	public static readonly RULE_string = 7;
	public static readonly RULE_text = 8;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"map", "entity", "keyvalue", "brush", "brushline", "coord", "num", "string", 
		"text",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'{'", "'}'", "'('", "')'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, "TEXT", "NUMBER", 
		"STRING", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(quakemapParser._LITERAL_NAMES, quakemapParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return quakemapParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "quakemap.g4"; }

	// @Override
	public get ruleNames(): string[] { return quakemapParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return quakemapParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(quakemapParser._ATN, this);
	}
	// @RuleVersion(0)
	public map(): MapContext {
		let _localctx: MapContext = new MapContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, quakemapParser.RULE_map);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 21;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === quakemapParser.T__0) {
				{
				{
				this.state = 18;
				this.entity();
				}
				}
				this.state = 23;
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
	public entity(): EntityContext {
		let _localctx: EntityContext = new EntityContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, quakemapParser.RULE_entity);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 24;
			this.match(quakemapParser.T__0);
			this.state = 28;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === quakemapParser.STRING) {
				{
				{
				this.state = 25;
				this.keyvalue();
				}
				}
				this.state = 30;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 34;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === quakemapParser.T__0) {
				{
				{
				this.state = 31;
				this.brush();
				}
				}
				this.state = 36;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 37;
			this.match(quakemapParser.T__1);
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
	public keyvalue(): KeyvalueContext {
		let _localctx: KeyvalueContext = new KeyvalueContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, quakemapParser.RULE_keyvalue);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 39;
			this.string();
			this.state = 40;
			this.string();
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
	public brush(): BrushContext {
		let _localctx: BrushContext = new BrushContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, quakemapParser.RULE_brush);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 42;
			this.match(quakemapParser.T__0);
			this.state = 44;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 43;
				this.brushline();
				}
				}
				this.state = 46;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === quakemapParser.T__2 || _la === quakemapParser.TEXT);
			this.state = 48;
			this.match(quakemapParser.T__1);
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
	public brushline(): BrushlineContext {
		let _localctx: BrushlineContext = new BrushlineContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, quakemapParser.RULE_brushline);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 53;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === quakemapParser.T__2) {
				{
				{
				this.state = 50;
				this.coord();
				}
				}
				this.state = 55;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 56;
			this.text();
			this.state = 60;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === quakemapParser.NUMBER) {
				{
				{
				this.state = 57;
				this.num();
				}
				}
				this.state = 62;
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
	public coord(): CoordContext {
		let _localctx: CoordContext = new CoordContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, quakemapParser.RULE_coord);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 63;
			this.match(quakemapParser.T__2);
			this.state = 67;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === quakemapParser.NUMBER) {
				{
				{
				this.state = 64;
				this.num();
				}
				}
				this.state = 69;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 70;
			this.match(quakemapParser.T__3);
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
	public num(): NumContext {
		let _localctx: NumContext = new NumContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, quakemapParser.RULE_num);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 72;
			this.match(quakemapParser.NUMBER);
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
		this.enterRule(_localctx, 14, quakemapParser.RULE_string);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 74;
			this.match(quakemapParser.STRING);
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
	public text(): TextContext {
		let _localctx: TextContext = new TextContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, quakemapParser.RULE_text);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 76;
			this.match(quakemapParser.TEXT);
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\nQ\x04\x02\t" +
		"\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07\t" +
		"\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x03\x02\x07\x02\x16\n\x02\f\x02\x0E" +
		"\x02\x19\v\x02\x03\x03\x03\x03\x07\x03\x1D\n\x03\f\x03\x0E\x03 \v\x03" +
		"\x03\x03\x07\x03#\n\x03\f\x03\x0E\x03&\v\x03\x03\x03\x03\x03\x03\x04\x03" +
		"\x04\x03\x04\x03\x05\x03\x05\x06\x05/\n\x05\r\x05\x0E\x050\x03\x05\x03" +
		"\x05\x03\x06\x07\x066\n\x06\f\x06\x0E\x069\v\x06\x03\x06\x03\x06\x07\x06" +
		"=\n\x06\f\x06\x0E\x06@\v\x06\x03\x07\x03\x07\x07\x07D\n\x07\f\x07\x0E" +
		"\x07G\v\x07\x03\x07\x03\x07\x03\b\x03\b\x03\t\x03\t\x03\n\x03\n\x03\n" +
		"\x02\x02\x02\v\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02" +
		"\x12\x02\x02\x02\x02N\x02\x17\x03\x02\x02\x02\x04\x1A\x03\x02\x02\x02" +
		"\x06)\x03\x02\x02\x02\b,\x03\x02\x02\x02\n7\x03\x02\x02\x02\fA\x03\x02" +
		"\x02\x02\x0EJ\x03\x02\x02\x02\x10L\x03\x02\x02\x02\x12N\x03\x02\x02\x02" +
		"\x14\x16\x05\x04\x03\x02\x15\x14\x03\x02\x02\x02\x16\x19\x03\x02\x02\x02" +
		"\x17\x15\x03\x02\x02\x02\x17\x18\x03\x02\x02\x02\x18\x03\x03\x02\x02\x02" +
		"\x19\x17\x03\x02\x02\x02\x1A\x1E\x07\x03\x02\x02\x1B\x1D\x05\x06\x04\x02" +
		"\x1C\x1B\x03\x02\x02\x02\x1D \x03\x02\x02\x02\x1E\x1C\x03\x02\x02\x02" +
		"\x1E\x1F\x03\x02\x02\x02\x1F$\x03\x02\x02\x02 \x1E\x03\x02\x02\x02!#\x05" +
		"\b\x05\x02\"!\x03\x02\x02\x02#&\x03\x02\x02\x02$\"\x03\x02\x02\x02$%\x03" +
		"\x02\x02\x02%\'\x03\x02\x02\x02&$\x03\x02\x02\x02\'(\x07\x04\x02\x02(" +
		"\x05\x03\x02\x02\x02)*\x05\x10\t\x02*+\x05\x10\t\x02+\x07\x03\x02\x02" +
		"\x02,.\x07\x03\x02\x02-/\x05\n\x06\x02.-\x03\x02\x02\x02/0\x03\x02\x02" +
		"\x020.\x03\x02\x02\x0201\x03\x02\x02\x0212\x03\x02\x02\x0223\x07\x04\x02" +
		"\x023\t\x03\x02\x02\x0246\x05\f\x07\x0254\x03\x02\x02\x0269\x03\x02\x02" +
		"\x0275\x03\x02\x02\x0278\x03\x02\x02\x028:\x03\x02\x02\x0297\x03\x02\x02" +
		"\x02:>\x05\x12\n\x02;=\x05\x0E\b\x02<;\x03\x02\x02\x02=@\x03\x02\x02\x02" +
		"><\x03\x02\x02\x02>?\x03\x02\x02\x02?\v\x03\x02\x02\x02@>\x03\x02\x02" +
		"\x02AE\x07\x05\x02\x02BD\x05\x0E\b\x02CB\x03\x02\x02\x02DG\x03\x02\x02" +
		"\x02EC\x03\x02\x02\x02EF\x03\x02\x02\x02FH\x03\x02\x02\x02GE\x03\x02\x02" +
		"\x02HI\x07\x06\x02\x02I\r\x03\x02\x02\x02JK\x07\b\x02\x02K\x0F\x03\x02" +
		"\x02\x02LM\x07\t\x02\x02M\x11\x03\x02\x02\x02NO\x07\x07\x02\x02O\x13\x03" +
		"\x02\x02\x02\t\x17\x1E$07>E";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!quakemapParser.__ATN) {
			quakemapParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(quakemapParser._serializedATN));
		}

		return quakemapParser.__ATN;
	}

}

export class MapContext extends ParserRuleContext {
	public entity(): EntityContext[];
	public entity(i: number): EntityContext;
	public entity(i?: number): EntityContext | EntityContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EntityContext);
		} else {
			return this.getRuleContext(i, EntityContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return quakemapParser.RULE_map; }
	// @Override
	public enterRule(listener: quakemapListener): void {
		if (listener.enterMap) {
			listener.enterMap(this);
		}
	}
	// @Override
	public exitRule(listener: quakemapListener): void {
		if (listener.exitMap) {
			listener.exitMap(this);
		}
	}
	// @Override
	public accept<Result>(visitor: quakemapVisitor<Result>): Result {
		if (visitor.visitMap) {
			return visitor.visitMap(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EntityContext extends ParserRuleContext {
	public keyvalue(): KeyvalueContext[];
	public keyvalue(i: number): KeyvalueContext;
	public keyvalue(i?: number): KeyvalueContext | KeyvalueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(KeyvalueContext);
		} else {
			return this.getRuleContext(i, KeyvalueContext);
		}
	}
	public brush(): BrushContext[];
	public brush(i: number): BrushContext;
	public brush(i?: number): BrushContext | BrushContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BrushContext);
		} else {
			return this.getRuleContext(i, BrushContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return quakemapParser.RULE_entity; }
	// @Override
	public enterRule(listener: quakemapListener): void {
		if (listener.enterEntity) {
			listener.enterEntity(this);
		}
	}
	// @Override
	public exitRule(listener: quakemapListener): void {
		if (listener.exitEntity) {
			listener.exitEntity(this);
		}
	}
	// @Override
	public accept<Result>(visitor: quakemapVisitor<Result>): Result {
		if (visitor.visitEntity) {
			return visitor.visitEntity(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class KeyvalueContext extends ParserRuleContext {
	public string(): StringContext[];
	public string(i: number): StringContext;
	public string(i?: number): StringContext | StringContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StringContext);
		} else {
			return this.getRuleContext(i, StringContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return quakemapParser.RULE_keyvalue; }
	// @Override
	public enterRule(listener: quakemapListener): void {
		if (listener.enterKeyvalue) {
			listener.enterKeyvalue(this);
		}
	}
	// @Override
	public exitRule(listener: quakemapListener): void {
		if (listener.exitKeyvalue) {
			listener.exitKeyvalue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: quakemapVisitor<Result>): Result {
		if (visitor.visitKeyvalue) {
			return visitor.visitKeyvalue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BrushContext extends ParserRuleContext {
	public brushline(): BrushlineContext[];
	public brushline(i: number): BrushlineContext;
	public brushline(i?: number): BrushlineContext | BrushlineContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BrushlineContext);
		} else {
			return this.getRuleContext(i, BrushlineContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return quakemapParser.RULE_brush; }
	// @Override
	public enterRule(listener: quakemapListener): void {
		if (listener.enterBrush) {
			listener.enterBrush(this);
		}
	}
	// @Override
	public exitRule(listener: quakemapListener): void {
		if (listener.exitBrush) {
			listener.exitBrush(this);
		}
	}
	// @Override
	public accept<Result>(visitor: quakemapVisitor<Result>): Result {
		if (visitor.visitBrush) {
			return visitor.visitBrush(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BrushlineContext extends ParserRuleContext {
	public text(): TextContext {
		return this.getRuleContext(0, TextContext);
	}
	public coord(): CoordContext[];
	public coord(i: number): CoordContext;
	public coord(i?: number): CoordContext | CoordContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CoordContext);
		} else {
			return this.getRuleContext(i, CoordContext);
		}
	}
	public num(): NumContext[];
	public num(i: number): NumContext;
	public num(i?: number): NumContext | NumContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NumContext);
		} else {
			return this.getRuleContext(i, NumContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return quakemapParser.RULE_brushline; }
	// @Override
	public enterRule(listener: quakemapListener): void {
		if (listener.enterBrushline) {
			listener.enterBrushline(this);
		}
	}
	// @Override
	public exitRule(listener: quakemapListener): void {
		if (listener.exitBrushline) {
			listener.exitBrushline(this);
		}
	}
	// @Override
	public accept<Result>(visitor: quakemapVisitor<Result>): Result {
		if (visitor.visitBrushline) {
			return visitor.visitBrushline(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CoordContext extends ParserRuleContext {
	public num(): NumContext[];
	public num(i: number): NumContext;
	public num(i?: number): NumContext | NumContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NumContext);
		} else {
			return this.getRuleContext(i, NumContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return quakemapParser.RULE_coord; }
	// @Override
	public enterRule(listener: quakemapListener): void {
		if (listener.enterCoord) {
			listener.enterCoord(this);
		}
	}
	// @Override
	public exitRule(listener: quakemapListener): void {
		if (listener.exitCoord) {
			listener.exitCoord(this);
		}
	}
	// @Override
	public accept<Result>(visitor: quakemapVisitor<Result>): Result {
		if (visitor.visitCoord) {
			return visitor.visitCoord(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NumContext extends ParserRuleContext {
	public NUMBER(): TerminalNode { return this.getToken(quakemapParser.NUMBER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return quakemapParser.RULE_num; }
	// @Override
	public enterRule(listener: quakemapListener): void {
		if (listener.enterNum) {
			listener.enterNum(this);
		}
	}
	// @Override
	public exitRule(listener: quakemapListener): void {
		if (listener.exitNum) {
			listener.exitNum(this);
		}
	}
	// @Override
	public accept<Result>(visitor: quakemapVisitor<Result>): Result {
		if (visitor.visitNum) {
			return visitor.visitNum(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StringContext extends ParserRuleContext {
	public STRING(): TerminalNode { return this.getToken(quakemapParser.STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return quakemapParser.RULE_string; }
	// @Override
	public enterRule(listener: quakemapListener): void {
		if (listener.enterString) {
			listener.enterString(this);
		}
	}
	// @Override
	public exitRule(listener: quakemapListener): void {
		if (listener.exitString) {
			listener.exitString(this);
		}
	}
	// @Override
	public accept<Result>(visitor: quakemapVisitor<Result>): Result {
		if (visitor.visitString) {
			return visitor.visitString(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TextContext extends ParserRuleContext {
	public TEXT(): TerminalNode { return this.getToken(quakemapParser.TEXT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return quakemapParser.RULE_text; }
	// @Override
	public enterRule(listener: quakemapListener): void {
		if (listener.enterText) {
			listener.enterText(this);
		}
	}
	// @Override
	public exitRule(listener: quakemapListener): void {
		if (listener.exitText) {
			listener.exitText(this);
		}
	}
	// @Override
	public accept<Result>(visitor: quakemapVisitor<Result>): Result {
		if (visitor.visitText) {
			return visitor.visitText(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


