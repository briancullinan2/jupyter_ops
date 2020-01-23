// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/tsv/tsv.g4 by ANTLR 4.7.3-SNAPSHOT


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

import { tsvListener } from "./tsvListener";

export class tsvParser extends Parser {
	public static readonly TAB = 1;
	public static readonly EOL = 2;
	public static readonly TEXT = 3;
	public static readonly STRING = 4;
	public static readonly RULE_tsvFile = 0;
	public static readonly RULE_hdr = 1;
	public static readonly RULE_row = 2;
	public static readonly RULE_field = 3;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"tsvFile", "hdr", "row", "field",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'\t'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "TAB", "EOL", "TEXT", "STRING",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(tsvParser._LITERAL_NAMES, tsvParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return tsvParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "tsv.g4"; }

	// @Override
	public get ruleNames(): string[] { return tsvParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return tsvParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(tsvParser._ATN, this);
	}
	// @RuleVersion(0)
	public tsvFile(): TsvFileContext {
		let _localctx: TsvFileContext = new TsvFileContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, tsvParser.RULE_tsvFile);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 8;
			this.hdr();
			this.state = 12;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === tsvParser.TEXT || _la === tsvParser.STRING) {
				{
				{
				this.state = 9;
				this.row();
				}
				}
				this.state = 14;
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
	public hdr(): HdrContext {
		let _localctx: HdrContext = new HdrContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, tsvParser.RULE_hdr);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 15;
			this.row();
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
	public row(): RowContext {
		let _localctx: RowContext = new RowContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, tsvParser.RULE_row);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 17;
			this.field();
			this.state = 22;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === tsvParser.TAB) {
				{
				{
				this.state = 18;
				this.match(tsvParser.TAB);
				this.state = 19;
				this.field();
				}
				}
				this.state = 24;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 25;
			this.match(tsvParser.EOL);
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
	public field(): FieldContext {
		let _localctx: FieldContext = new FieldContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, tsvParser.RULE_field);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 27;
			_la = this._input.LA(1);
			if (!(_la === tsvParser.TEXT || _la === tsvParser.STRING)) {
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x06 \x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x03\x02\x03\x02\x07\x02" +
		"\r\n\x02\f\x02\x0E\x02\x10\v\x02\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04" +
		"\x07\x04\x17\n\x04\f\x04\x0E\x04\x1A\v\x04\x03\x04\x03\x04\x03\x05\x03" +
		"\x05\x03\x05\x02\x02\x02\x06\x02\x02\x04\x02\x06\x02\b\x02\x02\x03\x03" +
		"\x02\x05\x06\x02\x1D\x02\n\x03\x02\x02\x02\x04\x11\x03\x02\x02\x02\x06" +
		"\x13\x03\x02\x02\x02\b\x1D\x03\x02\x02\x02\n\x0E\x05\x04\x03\x02\v\r\x05" +
		"\x06\x04\x02\f\v\x03\x02\x02\x02\r\x10\x03\x02\x02\x02\x0E\f\x03\x02\x02" +
		"\x02\x0E\x0F\x03\x02\x02\x02\x0F\x03\x03\x02\x02\x02\x10\x0E\x03\x02\x02" +
		"\x02\x11\x12\x05\x06\x04\x02\x12\x05\x03\x02\x02\x02\x13\x18\x05\b\x05" +
		"\x02\x14\x15\x07\x03\x02\x02\x15\x17\x05\b\x05\x02\x16\x14\x03\x02\x02" +
		"\x02\x17\x1A\x03\x02\x02\x02\x18\x16\x03\x02\x02\x02\x18\x19\x03\x02\x02" +
		"\x02\x19\x1B\x03\x02\x02\x02\x1A\x18\x03\x02\x02\x02\x1B\x1C\x07\x04\x02" +
		"\x02\x1C\x07\x03\x02\x02\x02\x1D\x1E\t\x02\x02\x02\x1E\t\x03\x02\x02\x02" +
		"\x04\x0E\x18";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!tsvParser.__ATN) {
			tsvParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(tsvParser._serializedATN));
		}

		return tsvParser.__ATN;
	}

}

export class TsvFileContext extends ParserRuleContext {
	public hdr(): HdrContext {
		return this.getRuleContext(0, HdrContext);
	}
	public row(): RowContext[];
	public row(i: number): RowContext;
	public row(i?: number): RowContext | RowContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RowContext);
		} else {
			return this.getRuleContext(i, RowContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tsvParser.RULE_tsvFile; }
	// @Override
	public enterRule(listener: tsvListener): void {
		if (listener.enterTsvFile) {
			listener.enterTsvFile(this);
		}
	}
	// @Override
	public exitRule(listener: tsvListener): void {
		if (listener.exitTsvFile) {
			listener.exitTsvFile(this);
		}
	}
}


export class HdrContext extends ParserRuleContext {
	public row(): RowContext {
		return this.getRuleContext(0, RowContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tsvParser.RULE_hdr; }
	// @Override
	public enterRule(listener: tsvListener): void {
		if (listener.enterHdr) {
			listener.enterHdr(this);
		}
	}
	// @Override
	public exitRule(listener: tsvListener): void {
		if (listener.exitHdr) {
			listener.exitHdr(this);
		}
	}
}


export class RowContext extends ParserRuleContext {
	public field(): FieldContext[];
	public field(i: number): FieldContext;
	public field(i?: number): FieldContext | FieldContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FieldContext);
		} else {
			return this.getRuleContext(i, FieldContext);
		}
	}
	public EOL(): TerminalNode { return this.getToken(tsvParser.EOL, 0); }
	public TAB(): TerminalNode[];
	public TAB(i: number): TerminalNode;
	public TAB(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(tsvParser.TAB);
		} else {
			return this.getToken(tsvParser.TAB, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tsvParser.RULE_row; }
	// @Override
	public enterRule(listener: tsvListener): void {
		if (listener.enterRow) {
			listener.enterRow(this);
		}
	}
	// @Override
	public exitRule(listener: tsvListener): void {
		if (listener.exitRow) {
			listener.exitRow(this);
		}
	}
}


export class FieldContext extends ParserRuleContext {
	public TEXT(): TerminalNode | undefined { return this.tryGetToken(tsvParser.TEXT, 0); }
	public STRING(): TerminalNode | undefined { return this.tryGetToken(tsvParser.STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tsvParser.RULE_field; }
	// @Override
	public enterRule(listener: tsvListener): void {
		if (listener.enterField) {
			listener.enterField(this);
		}
	}
	// @Override
	public exitRule(listener: tsvListener): void {
		if (listener.exitField) {
			listener.exitField(this);
		}
	}
}


