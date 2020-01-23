// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/molecule/molecule.g4 by ANTLR 4.7.3-SNAPSHOT


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

import { moleculeListener } from "./moleculeListener";

export class moleculeParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly ELEMENT = 6;
	public static readonly NUMBER = 7;
	public static readonly WS = 8;
	public static readonly RULE_molecule = 0;
	public static readonly RULE_part = 1;
	public static readonly RULE_structure = 2;
	public static readonly RULE_symbol = 3;
	public static readonly RULE_group = 4;
	public static readonly RULE_ion = 5;
	public static readonly RULE_element = 6;
	public static readonly RULE_count = 7;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"molecule", "part", "structure", "symbol", "group", "ion", "element", 
		"count",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'\u00B7'", "'('", "')'", "'['", "']'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, "ELEMENT", 
		"NUMBER", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(moleculeParser._LITERAL_NAMES, moleculeParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return moleculeParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "molecule.g4"; }

	// @Override
	public get ruleNames(): string[] { return moleculeParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return moleculeParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(moleculeParser._ATN, this);
	}
	// @RuleVersion(0)
	public molecule(): MoleculeContext {
		let _localctx: MoleculeContext = new MoleculeContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, moleculeParser.RULE_molecule);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 16;
			this.part();
			this.state = 21;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === moleculeParser.T__0) {
				{
				{
				this.state = 17;
				this.match(moleculeParser.T__0);
				this.state = 18;
				this.part();
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
	public part(): PartContext {
		let _localctx: PartContext = new PartContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, moleculeParser.RULE_part);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 28;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 25;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === moleculeParser.NUMBER) {
					{
					this.state = 24;
					this.count();
					}
				}

				this.state = 27;
				this.structure();
				}
				}
				this.state = 30;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << moleculeParser.T__1) | (1 << moleculeParser.T__3) | (1 << moleculeParser.ELEMENT) | (1 << moleculeParser.NUMBER))) !== 0));
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
	public structure(): StructureContext {
		let _localctx: StructureContext = new StructureContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, moleculeParser.RULE_structure);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 32;
			this.symbol();
			this.state = 34;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 3, this._ctx) ) {
			case 1:
				{
				this.state = 33;
				this.count();
				}
				break;
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
	public symbol(): SymbolContext {
		let _localctx: SymbolContext = new SymbolContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, moleculeParser.RULE_symbol);
		try {
			this.state = 39;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case moleculeParser.ELEMENT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 36;
				this.element();
				}
				break;
			case moleculeParser.T__1:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 37;
				this.group();
				}
				break;
			case moleculeParser.T__3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 38;
				this.ion();
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
	public group(): GroupContext {
		let _localctx: GroupContext = new GroupContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, moleculeParser.RULE_group);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 41;
			this.match(moleculeParser.T__1);
			this.state = 43;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 42;
				this.structure();
				}
				}
				this.state = 45;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << moleculeParser.T__1) | (1 << moleculeParser.T__3) | (1 << moleculeParser.ELEMENT))) !== 0));
			this.state = 47;
			this.match(moleculeParser.T__2);
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
	public ion(): IonContext {
		let _localctx: IonContext = new IonContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, moleculeParser.RULE_ion);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 49;
			this.match(moleculeParser.T__3);
			this.state = 51;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 50;
				this.structure();
				}
				}
				this.state = 53;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << moleculeParser.T__1) | (1 << moleculeParser.T__3) | (1 << moleculeParser.ELEMENT))) !== 0));
			this.state = 55;
			this.match(moleculeParser.T__4);
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
	public element(): ElementContext {
		let _localctx: ElementContext = new ElementContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, moleculeParser.RULE_element);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 57;
			this.match(moleculeParser.ELEMENT);
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
	public count(): CountContext {
		let _localctx: CountContext = new CountContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, moleculeParser.RULE_count);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 59;
			this.match(moleculeParser.NUMBER);
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\n@\x04\x02\t" +
		"\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07\t" +
		"\x07\x04\b\t\b\x04\t\t\t\x03\x02\x03\x02\x03\x02\x07\x02\x16\n\x02\f\x02" +
		"\x0E\x02\x19\v\x02\x03\x03\x05\x03\x1C\n\x03\x03\x03\x06\x03\x1F\n\x03" +
		"\r\x03\x0E\x03 \x03\x04\x03\x04\x05\x04%\n\x04\x03\x05\x03\x05\x03\x05" +
		"\x05\x05*\n\x05\x03\x06\x03\x06\x06\x06.\n\x06\r\x06\x0E\x06/\x03\x06" +
		"\x03\x06\x03\x07\x03\x07\x06\x076\n\x07\r\x07\x0E\x077\x03\x07\x03\x07" +
		"\x03\b\x03\b\x03\t\x03\t\x03\t\x02\x02\x02\n\x02\x02\x04\x02\x06\x02\b" +
		"\x02\n\x02\f\x02\x0E\x02\x10\x02\x02\x02\x02?\x02\x12\x03\x02\x02\x02" +
		"\x04\x1E\x03\x02\x02\x02\x06\"\x03\x02\x02\x02\b)\x03\x02\x02\x02\n+\x03" +
		"\x02\x02\x02\f3\x03\x02\x02\x02\x0E;\x03\x02\x02\x02\x10=\x03\x02\x02" +
		"\x02\x12\x17\x05\x04\x03\x02\x13\x14\x07\x03\x02\x02\x14\x16\x05\x04\x03" +
		"\x02\x15\x13\x03\x02\x02\x02\x16\x19\x03\x02\x02\x02\x17\x15\x03\x02\x02" +
		"\x02\x17\x18\x03\x02\x02\x02\x18\x03\x03\x02\x02\x02\x19\x17\x03\x02\x02" +
		"\x02\x1A\x1C\x05\x10\t\x02\x1B\x1A\x03\x02\x02\x02\x1B\x1C\x03\x02\x02" +
		"\x02\x1C\x1D\x03\x02\x02\x02\x1D\x1F\x05\x06\x04\x02\x1E\x1B\x03\x02\x02" +
		"\x02\x1F \x03\x02\x02\x02 \x1E\x03\x02\x02\x02 !\x03\x02\x02\x02!\x05" +
		"\x03\x02\x02\x02\"$\x05\b\x05\x02#%\x05\x10\t\x02$#\x03\x02\x02\x02$%" +
		"\x03\x02\x02\x02%\x07\x03\x02\x02\x02&*\x05\x0E\b\x02\'*\x05\n\x06\x02" +
		"(*\x05\f\x07\x02)&\x03\x02\x02\x02)\'\x03\x02\x02\x02)(\x03\x02\x02\x02" +
		"*\t\x03\x02\x02\x02+-\x07\x04\x02\x02,.\x05\x06\x04\x02-,\x03\x02\x02" +
		"\x02./\x03\x02\x02\x02/-\x03\x02\x02\x02/0\x03\x02\x02\x0201\x03\x02\x02" +
		"\x0212\x07\x05\x02\x022\v\x03\x02\x02\x0235\x07\x06\x02\x0246\x05\x06" +
		"\x04\x0254\x03\x02\x02\x0267\x03\x02\x02\x0275\x03\x02\x02\x0278\x03\x02" +
		"\x02\x0289\x03\x02\x02\x029:\x07\x07\x02\x02:\r\x03\x02\x02\x02;<\x07" +
		"\b\x02\x02<\x0F\x03\x02\x02\x02=>\x07\t\x02\x02>\x11\x03\x02\x02\x02\t" +
		"\x17\x1B $)/7";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!moleculeParser.__ATN) {
			moleculeParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(moleculeParser._serializedATN));
		}

		return moleculeParser.__ATN;
	}

}

export class MoleculeContext extends ParserRuleContext {
	public part(): PartContext[];
	public part(i: number): PartContext;
	public part(i?: number): PartContext | PartContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PartContext);
		} else {
			return this.getRuleContext(i, PartContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return moleculeParser.RULE_molecule; }
	// @Override
	public enterRule(listener: moleculeListener): void {
		if (listener.enterMolecule) {
			listener.enterMolecule(this);
		}
	}
	// @Override
	public exitRule(listener: moleculeListener): void {
		if (listener.exitMolecule) {
			listener.exitMolecule(this);
		}
	}
}


export class PartContext extends ParserRuleContext {
	public structure(): StructureContext[];
	public structure(i: number): StructureContext;
	public structure(i?: number): StructureContext | StructureContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StructureContext);
		} else {
			return this.getRuleContext(i, StructureContext);
		}
	}
	public count(): CountContext[];
	public count(i: number): CountContext;
	public count(i?: number): CountContext | CountContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CountContext);
		} else {
			return this.getRuleContext(i, CountContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return moleculeParser.RULE_part; }
	// @Override
	public enterRule(listener: moleculeListener): void {
		if (listener.enterPart) {
			listener.enterPart(this);
		}
	}
	// @Override
	public exitRule(listener: moleculeListener): void {
		if (listener.exitPart) {
			listener.exitPart(this);
		}
	}
}


export class StructureContext extends ParserRuleContext {
	public symbol(): SymbolContext {
		return this.getRuleContext(0, SymbolContext);
	}
	public count(): CountContext | undefined {
		return this.tryGetRuleContext(0, CountContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return moleculeParser.RULE_structure; }
	// @Override
	public enterRule(listener: moleculeListener): void {
		if (listener.enterStructure) {
			listener.enterStructure(this);
		}
	}
	// @Override
	public exitRule(listener: moleculeListener): void {
		if (listener.exitStructure) {
			listener.exitStructure(this);
		}
	}
}


export class SymbolContext extends ParserRuleContext {
	public element(): ElementContext | undefined {
		return this.tryGetRuleContext(0, ElementContext);
	}
	public group(): GroupContext | undefined {
		return this.tryGetRuleContext(0, GroupContext);
	}
	public ion(): IonContext | undefined {
		return this.tryGetRuleContext(0, IonContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return moleculeParser.RULE_symbol; }
	// @Override
	public enterRule(listener: moleculeListener): void {
		if (listener.enterSymbol) {
			listener.enterSymbol(this);
		}
	}
	// @Override
	public exitRule(listener: moleculeListener): void {
		if (listener.exitSymbol) {
			listener.exitSymbol(this);
		}
	}
}


export class GroupContext extends ParserRuleContext {
	public structure(): StructureContext[];
	public structure(i: number): StructureContext;
	public structure(i?: number): StructureContext | StructureContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StructureContext);
		} else {
			return this.getRuleContext(i, StructureContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return moleculeParser.RULE_group; }
	// @Override
	public enterRule(listener: moleculeListener): void {
		if (listener.enterGroup) {
			listener.enterGroup(this);
		}
	}
	// @Override
	public exitRule(listener: moleculeListener): void {
		if (listener.exitGroup) {
			listener.exitGroup(this);
		}
	}
}


export class IonContext extends ParserRuleContext {
	public structure(): StructureContext[];
	public structure(i: number): StructureContext;
	public structure(i?: number): StructureContext | StructureContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StructureContext);
		} else {
			return this.getRuleContext(i, StructureContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return moleculeParser.RULE_ion; }
	// @Override
	public enterRule(listener: moleculeListener): void {
		if (listener.enterIon) {
			listener.enterIon(this);
		}
	}
	// @Override
	public exitRule(listener: moleculeListener): void {
		if (listener.exitIon) {
			listener.exitIon(this);
		}
	}
}


export class ElementContext extends ParserRuleContext {
	public ELEMENT(): TerminalNode { return this.getToken(moleculeParser.ELEMENT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return moleculeParser.RULE_element; }
	// @Override
	public enterRule(listener: moleculeListener): void {
		if (listener.enterElement) {
			listener.enterElement(this);
		}
	}
	// @Override
	public exitRule(listener: moleculeListener): void {
		if (listener.exitElement) {
			listener.exitElement(this);
		}
	}
}


export class CountContext extends ParserRuleContext {
	public NUMBER(): TerminalNode { return this.getToken(moleculeParser.NUMBER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return moleculeParser.RULE_count; }
	// @Override
	public enterRule(listener: moleculeListener): void {
		if (listener.enterCount) {
			listener.enterCount(this);
		}
	}
	// @Override
	public exitRule(listener: moleculeListener): void {
		if (listener.exitCount) {
			listener.exitCount(this);
		}
	}
}


