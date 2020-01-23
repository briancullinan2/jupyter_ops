// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/fasta/fasta.g4 by ANTLR 4.7.3-SNAPSHOT


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

import { fastaListener } from "./fastaListener";

export class fastaParser extends Parser {
	public static readonly COMMENTLINE = 1;
	public static readonly DESCRIPTIONLINE = 2;
	public static readonly TEXT = 3;
	public static readonly EOL = 4;
	public static readonly SEQUENCELINE = 5;
	public static readonly RULE_sequence = 0;
	public static readonly RULE_section = 1;
	public static readonly RULE_sequencelines = 2;
	public static readonly RULE_descriptionline = 3;
	public static readonly RULE_commentline = 4;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"sequence", "section", "sequencelines", "descriptionline", "commentline",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "COMMENTLINE", "DESCRIPTIONLINE", "TEXT", "EOL", "SEQUENCELINE",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(fastaParser._LITERAL_NAMES, fastaParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return fastaParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "fasta.g4"; }

	// @Override
	public get ruleNames(): string[] { return fastaParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return fastaParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(fastaParser._ATN, this);
	}
	// @RuleVersion(0)
	public sequence(): SequenceContext {
		let _localctx: SequenceContext = new SequenceContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, fastaParser.RULE_sequence);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 11;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 10;
				this.section();
				}
				}
				this.state = 13;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << fastaParser.COMMENTLINE) | (1 << fastaParser.DESCRIPTIONLINE) | (1 << fastaParser.SEQUENCELINE))) !== 0));
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
	public section(): SectionContext {
		let _localctx: SectionContext = new SectionContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, fastaParser.RULE_section);
		try {
			this.state = 18;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case fastaParser.DESCRIPTIONLINE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 15;
				this.descriptionline();
				}
				break;
			case fastaParser.SEQUENCELINE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 16;
				this.sequencelines();
				}
				break;
			case fastaParser.COMMENTLINE:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 17;
				this.commentline();
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
	public sequencelines(): SequencelinesContext {
		let _localctx: SequencelinesContext = new SequencelinesContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, fastaParser.RULE_sequencelines);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 21;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 20;
					this.match(fastaParser.SEQUENCELINE);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 23;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 2, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
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
	public descriptionline(): DescriptionlineContext {
		let _localctx: DescriptionlineContext = new DescriptionlineContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, fastaParser.RULE_descriptionline);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 25;
			this.match(fastaParser.DESCRIPTIONLINE);
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
	public commentline(): CommentlineContext {
		let _localctx: CommentlineContext = new CommentlineContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, fastaParser.RULE_commentline);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 27;
			this.match(fastaParser.COMMENTLINE);
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x07 \x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x03\x02" +
		"\x06\x02\x0E\n\x02\r\x02\x0E\x02\x0F\x03\x03\x03\x03\x03\x03\x05\x03\x15" +
		"\n\x03\x03\x04\x06\x04\x18\n\x04\r\x04\x0E\x04\x19\x03\x05\x03\x05\x03" +
		"\x06\x03\x06\x03\x06\x02\x02\x02\x07\x02\x02\x04\x02\x06\x02\b\x02\n\x02" +
		"\x02\x02\x02\x1E\x02\r\x03\x02\x02\x02\x04\x14\x03\x02\x02\x02\x06\x17" +
		"\x03\x02\x02\x02\b\x1B\x03\x02\x02\x02\n\x1D\x03\x02\x02\x02\f\x0E\x05" +
		"\x04\x03\x02\r\f\x03\x02\x02\x02\x0E\x0F\x03\x02\x02\x02\x0F\r\x03\x02" +
		"\x02\x02\x0F\x10\x03\x02\x02\x02\x10\x03\x03\x02\x02\x02\x11\x15\x05\b" +
		"\x05\x02\x12\x15\x05\x06\x04\x02\x13\x15\x05\n\x06\x02\x14\x11\x03\x02" +
		"\x02\x02\x14\x12\x03\x02\x02\x02\x14\x13\x03\x02\x02\x02\x15\x05\x03\x02" +
		"\x02\x02\x16\x18\x07\x07\x02\x02\x17\x16\x03\x02\x02\x02\x18\x19\x03\x02" +
		"\x02\x02\x19\x17\x03\x02\x02\x02\x19\x1A\x03\x02\x02\x02\x1A\x07\x03\x02" +
		"\x02\x02\x1B\x1C\x07\x04\x02\x02\x1C\t\x03\x02\x02\x02\x1D\x1E\x07\x03" +
		"\x02\x02\x1E\v\x03\x02\x02\x02\x05\x0F\x14\x19";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!fastaParser.__ATN) {
			fastaParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(fastaParser._serializedATN));
		}

		return fastaParser.__ATN;
	}

}

export class SequenceContext extends ParserRuleContext {
	public section(): SectionContext[];
	public section(i: number): SectionContext;
	public section(i?: number): SectionContext | SectionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SectionContext);
		} else {
			return this.getRuleContext(i, SectionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return fastaParser.RULE_sequence; }
	// @Override
	public enterRule(listener: fastaListener): void {
		if (listener.enterSequence) {
			listener.enterSequence(this);
		}
	}
	// @Override
	public exitRule(listener: fastaListener): void {
		if (listener.exitSequence) {
			listener.exitSequence(this);
		}
	}
}


export class SectionContext extends ParserRuleContext {
	public descriptionline(): DescriptionlineContext | undefined {
		return this.tryGetRuleContext(0, DescriptionlineContext);
	}
	public sequencelines(): SequencelinesContext | undefined {
		return this.tryGetRuleContext(0, SequencelinesContext);
	}
	public commentline(): CommentlineContext | undefined {
		return this.tryGetRuleContext(0, CommentlineContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return fastaParser.RULE_section; }
	// @Override
	public enterRule(listener: fastaListener): void {
		if (listener.enterSection) {
			listener.enterSection(this);
		}
	}
	// @Override
	public exitRule(listener: fastaListener): void {
		if (listener.exitSection) {
			listener.exitSection(this);
		}
	}
}


export class SequencelinesContext extends ParserRuleContext {
	public SEQUENCELINE(): TerminalNode[];
	public SEQUENCELINE(i: number): TerminalNode;
	public SEQUENCELINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(fastaParser.SEQUENCELINE);
		} else {
			return this.getToken(fastaParser.SEQUENCELINE, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return fastaParser.RULE_sequencelines; }
	// @Override
	public enterRule(listener: fastaListener): void {
		if (listener.enterSequencelines) {
			listener.enterSequencelines(this);
		}
	}
	// @Override
	public exitRule(listener: fastaListener): void {
		if (listener.exitSequencelines) {
			listener.exitSequencelines(this);
		}
	}
}


export class DescriptionlineContext extends ParserRuleContext {
	public DESCRIPTIONLINE(): TerminalNode { return this.getToken(fastaParser.DESCRIPTIONLINE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return fastaParser.RULE_descriptionline; }
	// @Override
	public enterRule(listener: fastaListener): void {
		if (listener.enterDescriptionline) {
			listener.enterDescriptionline(this);
		}
	}
	// @Override
	public exitRule(listener: fastaListener): void {
		if (listener.exitDescriptionline) {
			listener.exitDescriptionline(this);
		}
	}
}


export class CommentlineContext extends ParserRuleContext {
	public COMMENTLINE(): TerminalNode { return this.getToken(fastaParser.COMMENTLINE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return fastaParser.RULE_commentline; }
	// @Override
	public enterRule(listener: fastaListener): void {
		if (listener.enterCommentline) {
			listener.enterCommentline(this);
		}
	}
	// @Override
	public exitRule(listener: fastaListener): void {
		if (listener.exitCommentline) {
			listener.exitCommentline(this);
		}
	}
}


