// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/gff3/gff3.g4 by ANTLR 4.7.3-SNAPSHOT


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

import { gff3Listener } from "./gff3Listener";
import { gff3Visitor } from "./gff3Visitor";


export class gff3Parser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly HEADER = 4;
	public static readonly COMMENTLINE = 5;
	public static readonly EOL = 6;
	public static readonly TEXT = 7;
	public static readonly RULE_document = 0;
	public static readonly RULE_line = 1;
	public static readonly RULE_dataline = 2;
	public static readonly RULE_attributes = 3;
	public static readonly RULE_attribute = 4;
	public static readonly RULE_seqid = 5;
	public static readonly RULE_source = 6;
	public static readonly RULE_type = 7;
	public static readonly RULE_start = 8;
	public static readonly RULE_end = 9;
	public static readonly RULE_strand = 10;
	public static readonly RULE_score = 11;
	public static readonly RULE_phase = 12;
	public static readonly RULE_commentline = 13;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"document", "line", "dataline", "attributes", "attribute", "seqid", "source", 
		"type", "start", "end", "strand", "score", "phase", "commentline",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'\t'", "';'", "'='",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, "HEADER", "COMMENTLINE", "EOL", 
		"TEXT",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(gff3Parser._LITERAL_NAMES, gff3Parser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return gff3Parser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "gff3.g4"; }

	// @Override
	public get ruleNames(): string[] { return gff3Parser.ruleNames; }

	// @Override
	public get serializedATN(): string { return gff3Parser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(gff3Parser._ATN, this);
	}
	// @RuleVersion(0)
	public document(): DocumentContext {
		let _localctx: DocumentContext = new DocumentContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, gff3Parser.RULE_document);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 28;
			this.match(gff3Parser.HEADER);
			this.state = 30;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 29;
				this.line();
				}
				}
				this.state = 32;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === gff3Parser.COMMENTLINE || _la === gff3Parser.TEXT);
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
	public line(): LineContext {
		let _localctx: LineContext = new LineContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, gff3Parser.RULE_line);
		try {
			this.state = 36;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case gff3Parser.COMMENTLINE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 34;
				this.commentline();
				}
				break;
			case gff3Parser.TEXT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 35;
				this.dataline();
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
	public dataline(): DatalineContext {
		let _localctx: DatalineContext = new DatalineContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, gff3Parser.RULE_dataline);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 38;
			this.seqid();
			this.state = 39;
			this.match(gff3Parser.T__0);
			this.state = 40;
			this.source();
			this.state = 41;
			this.match(gff3Parser.T__0);
			this.state = 42;
			this.type();
			this.state = 43;
			this.match(gff3Parser.T__0);
			this.state = 44;
			this.start();
			this.state = 45;
			this.match(gff3Parser.T__0);
			this.state = 46;
			this.end();
			this.state = 47;
			this.match(gff3Parser.T__0);
			this.state = 48;
			this.score();
			this.state = 49;
			this.match(gff3Parser.T__0);
			this.state = 50;
			this.strand();
			this.state = 51;
			this.match(gff3Parser.T__0);
			this.state = 52;
			this.phase();
			this.state = 53;
			this.match(gff3Parser.T__0);
			this.state = 55;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === gff3Parser.TEXT) {
				{
				this.state = 54;
				this.attributes();
				}
			}

			this.state = 57;
			this.match(gff3Parser.EOL);
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
	public attributes(): AttributesContext {
		let _localctx: AttributesContext = new AttributesContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, gff3Parser.RULE_attributes);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 59;
			this.attribute();
			this.state = 64;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === gff3Parser.T__1) {
				{
				{
				this.state = 60;
				this.match(gff3Parser.T__1);
				this.state = 61;
				this.attribute();
				}
				}
				this.state = 66;
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
	public attribute(): AttributeContext {
		let _localctx: AttributeContext = new AttributeContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, gff3Parser.RULE_attribute);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 67;
			this.match(gff3Parser.TEXT);
			this.state = 68;
			this.match(gff3Parser.T__2);
			this.state = 69;
			this.match(gff3Parser.TEXT);
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
	public seqid(): SeqidContext {
		let _localctx: SeqidContext = new SeqidContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, gff3Parser.RULE_seqid);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 71;
			this.match(gff3Parser.TEXT);
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
	public source(): SourceContext {
		let _localctx: SourceContext = new SourceContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, gff3Parser.RULE_source);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 73;
			this.match(gff3Parser.TEXT);
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
	public type(): TypeContext {
		let _localctx: TypeContext = new TypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, gff3Parser.RULE_type);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 75;
			this.match(gff3Parser.TEXT);
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
	public start(): StartContext {
		let _localctx: StartContext = new StartContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, gff3Parser.RULE_start);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 77;
			this.match(gff3Parser.TEXT);
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
	public end(): EndContext {
		let _localctx: EndContext = new EndContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, gff3Parser.RULE_end);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 79;
			this.match(gff3Parser.TEXT);
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
	public strand(): StrandContext {
		let _localctx: StrandContext = new StrandContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, gff3Parser.RULE_strand);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 81;
			this.match(gff3Parser.TEXT);
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
	public score(): ScoreContext {
		let _localctx: ScoreContext = new ScoreContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, gff3Parser.RULE_score);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 83;
			this.match(gff3Parser.TEXT);
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
	public phase(): PhaseContext {
		let _localctx: PhaseContext = new PhaseContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, gff3Parser.RULE_phase);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 85;
			this.match(gff3Parser.TEXT);
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
		this.enterRule(_localctx, 26, gff3Parser.RULE_commentline);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 87;
			this.match(gff3Parser.COMMENTLINE);
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\t\\\x04\x02\t" +
		"\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07\t" +
		"\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04\x0E" +
		"\t\x0E\x04\x0F\t\x0F\x03\x02\x03\x02\x06\x02!\n\x02\r\x02\x0E\x02\"\x03" +
		"\x03\x03\x03\x05\x03\'\n\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x05\x04:\n\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03" +
		"\x05\x07\x05A\n\x05\f\x05\x0E\x05D\v\x05\x03\x06\x03\x06\x03\x06\x03\x06" +
		"\x03\x07\x03\x07\x03\b\x03\b\x03\t\x03\t\x03\n\x03\n\x03\v\x03\v\x03\f" +
		"\x03\f\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x02\x02\x02" +
		"\x10\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02" +
		"\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x02\x02\x02Q\x02\x1E\x03\x02" +
		"\x02\x02\x04&\x03\x02\x02\x02\x06(\x03\x02\x02\x02\b=\x03\x02\x02\x02" +
		"\nE\x03\x02\x02\x02\fI\x03\x02\x02\x02\x0EK\x03\x02\x02\x02\x10M\x03\x02" +
		"\x02\x02\x12O\x03\x02\x02\x02\x14Q\x03\x02\x02\x02\x16S\x03\x02\x02\x02" +
		"\x18U\x03\x02\x02\x02\x1AW\x03\x02\x02\x02\x1CY\x03\x02\x02\x02\x1E \x07" +
		"\x06\x02\x02\x1F!\x05\x04\x03\x02 \x1F\x03\x02\x02\x02!\"\x03\x02\x02" +
		"\x02\" \x03\x02\x02\x02\"#\x03\x02\x02\x02#\x03\x03\x02\x02\x02$\'\x05" +
		"\x1C\x0F\x02%\'\x05\x06\x04\x02&$\x03\x02\x02\x02&%\x03\x02\x02\x02\'" +
		"\x05\x03\x02\x02\x02()\x05\f\x07\x02)*\x07\x03\x02\x02*+\x05\x0E\b\x02" +
		"+,\x07\x03\x02\x02,-\x05\x10\t\x02-.\x07\x03\x02\x02./\x05\x12\n\x02/" +
		"0\x07\x03\x02\x0201\x05\x14\v\x0212\x07\x03\x02\x0223\x05\x18\r\x0234" +
		"\x07\x03\x02\x0245\x05\x16\f\x0256\x07\x03\x02\x0267\x05\x1A\x0E\x027" +
		"9\x07\x03\x02\x028:\x05\b\x05\x0298\x03\x02\x02\x029:\x03\x02\x02\x02" +
		":;\x03\x02\x02\x02;<\x07\b\x02\x02<\x07\x03\x02\x02\x02=B\x05\n\x06\x02" +
		">?\x07\x04\x02\x02?A\x05\n\x06\x02@>\x03\x02\x02\x02AD\x03\x02\x02\x02" +
		"B@\x03\x02\x02\x02BC\x03\x02\x02\x02C\t\x03\x02\x02\x02DB\x03\x02\x02" +
		"\x02EF\x07\t\x02\x02FG\x07\x05\x02\x02GH\x07\t\x02\x02H\v\x03\x02\x02" +
		"\x02IJ\x07\t\x02\x02J\r\x03\x02\x02\x02KL\x07\t\x02\x02L\x0F\x03\x02\x02" +
		"\x02MN\x07\t\x02\x02N\x11\x03\x02\x02\x02OP\x07\t\x02\x02P\x13\x03\x02" +
		"\x02\x02QR\x07\t\x02\x02R\x15\x03\x02\x02\x02ST\x07\t\x02\x02T\x17\x03" +
		"\x02\x02\x02UV\x07\t\x02\x02V\x19\x03\x02\x02\x02WX\x07\t\x02\x02X\x1B" +
		"\x03\x02\x02\x02YZ\x07\x07\x02\x02Z\x1D\x03\x02\x02\x02\x06\"&9B";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!gff3Parser.__ATN) {
			gff3Parser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(gff3Parser._serializedATN));
		}

		return gff3Parser.__ATN;
	}

}

export class DocumentContext extends ParserRuleContext {
	public HEADER(): TerminalNode { return this.getToken(gff3Parser.HEADER, 0); }
	public line(): LineContext[];
	public line(i: number): LineContext;
	public line(i?: number): LineContext | LineContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LineContext);
		} else {
			return this.getRuleContext(i, LineContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gff3Parser.RULE_document; }
	// @Override
	public enterRule(listener: gff3Listener): void {
		if (listener.enterDocument) {
			listener.enterDocument(this);
		}
	}
	// @Override
	public exitRule(listener: gff3Listener): void {
		if (listener.exitDocument) {
			listener.exitDocument(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gff3Visitor<Result>): Result {
		if (visitor.visitDocument) {
			return visitor.visitDocument(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LineContext extends ParserRuleContext {
	public commentline(): CommentlineContext | undefined {
		return this.tryGetRuleContext(0, CommentlineContext);
	}
	public dataline(): DatalineContext | undefined {
		return this.tryGetRuleContext(0, DatalineContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gff3Parser.RULE_line; }
	// @Override
	public enterRule(listener: gff3Listener): void {
		if (listener.enterLine) {
			listener.enterLine(this);
		}
	}
	// @Override
	public exitRule(listener: gff3Listener): void {
		if (listener.exitLine) {
			listener.exitLine(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gff3Visitor<Result>): Result {
		if (visitor.visitLine) {
			return visitor.visitLine(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DatalineContext extends ParserRuleContext {
	public seqid(): SeqidContext {
		return this.getRuleContext(0, SeqidContext);
	}
	public source(): SourceContext {
		return this.getRuleContext(0, SourceContext);
	}
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public start(): StartContext {
		return this.getRuleContext(0, StartContext);
	}
	public end(): EndContext {
		return this.getRuleContext(0, EndContext);
	}
	public score(): ScoreContext {
		return this.getRuleContext(0, ScoreContext);
	}
	public strand(): StrandContext {
		return this.getRuleContext(0, StrandContext);
	}
	public phase(): PhaseContext {
		return this.getRuleContext(0, PhaseContext);
	}
	public EOL(): TerminalNode { return this.getToken(gff3Parser.EOL, 0); }
	public attributes(): AttributesContext | undefined {
		return this.tryGetRuleContext(0, AttributesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gff3Parser.RULE_dataline; }
	// @Override
	public enterRule(listener: gff3Listener): void {
		if (listener.enterDataline) {
			listener.enterDataline(this);
		}
	}
	// @Override
	public exitRule(listener: gff3Listener): void {
		if (listener.exitDataline) {
			listener.exitDataline(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gff3Visitor<Result>): Result {
		if (visitor.visitDataline) {
			return visitor.visitDataline(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AttributesContext extends ParserRuleContext {
	public attribute(): AttributeContext[];
	public attribute(i: number): AttributeContext;
	public attribute(i?: number): AttributeContext | AttributeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AttributeContext);
		} else {
			return this.getRuleContext(i, AttributeContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gff3Parser.RULE_attributes; }
	// @Override
	public enterRule(listener: gff3Listener): void {
		if (listener.enterAttributes) {
			listener.enterAttributes(this);
		}
	}
	// @Override
	public exitRule(listener: gff3Listener): void {
		if (listener.exitAttributes) {
			listener.exitAttributes(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gff3Visitor<Result>): Result {
		if (visitor.visitAttributes) {
			return visitor.visitAttributes(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AttributeContext extends ParserRuleContext {
	public TEXT(): TerminalNode[];
	public TEXT(i: number): TerminalNode;
	public TEXT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(gff3Parser.TEXT);
		} else {
			return this.getToken(gff3Parser.TEXT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gff3Parser.RULE_attribute; }
	// @Override
	public enterRule(listener: gff3Listener): void {
		if (listener.enterAttribute) {
			listener.enterAttribute(this);
		}
	}
	// @Override
	public exitRule(listener: gff3Listener): void {
		if (listener.exitAttribute) {
			listener.exitAttribute(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gff3Visitor<Result>): Result {
		if (visitor.visitAttribute) {
			return visitor.visitAttribute(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SeqidContext extends ParserRuleContext {
	public TEXT(): TerminalNode { return this.getToken(gff3Parser.TEXT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gff3Parser.RULE_seqid; }
	// @Override
	public enterRule(listener: gff3Listener): void {
		if (listener.enterSeqid) {
			listener.enterSeqid(this);
		}
	}
	// @Override
	public exitRule(listener: gff3Listener): void {
		if (listener.exitSeqid) {
			listener.exitSeqid(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gff3Visitor<Result>): Result {
		if (visitor.visitSeqid) {
			return visitor.visitSeqid(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SourceContext extends ParserRuleContext {
	public TEXT(): TerminalNode { return this.getToken(gff3Parser.TEXT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gff3Parser.RULE_source; }
	// @Override
	public enterRule(listener: gff3Listener): void {
		if (listener.enterSource) {
			listener.enterSource(this);
		}
	}
	// @Override
	public exitRule(listener: gff3Listener): void {
		if (listener.exitSource) {
			listener.exitSource(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gff3Visitor<Result>): Result {
		if (visitor.visitSource) {
			return visitor.visitSource(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeContext extends ParserRuleContext {
	public TEXT(): TerminalNode { return this.getToken(gff3Parser.TEXT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gff3Parser.RULE_type; }
	// @Override
	public enterRule(listener: gff3Listener): void {
		if (listener.enterType) {
			listener.enterType(this);
		}
	}
	// @Override
	public exitRule(listener: gff3Listener): void {
		if (listener.exitType) {
			listener.exitType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gff3Visitor<Result>): Result {
		if (visitor.visitType) {
			return visitor.visitType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StartContext extends ParserRuleContext {
	public TEXT(): TerminalNode { return this.getToken(gff3Parser.TEXT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gff3Parser.RULE_start; }
	// @Override
	public enterRule(listener: gff3Listener): void {
		if (listener.enterStart) {
			listener.enterStart(this);
		}
	}
	// @Override
	public exitRule(listener: gff3Listener): void {
		if (listener.exitStart) {
			listener.exitStart(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gff3Visitor<Result>): Result {
		if (visitor.visitStart) {
			return visitor.visitStart(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EndContext extends ParserRuleContext {
	public TEXT(): TerminalNode { return this.getToken(gff3Parser.TEXT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gff3Parser.RULE_end; }
	// @Override
	public enterRule(listener: gff3Listener): void {
		if (listener.enterEnd) {
			listener.enterEnd(this);
		}
	}
	// @Override
	public exitRule(listener: gff3Listener): void {
		if (listener.exitEnd) {
			listener.exitEnd(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gff3Visitor<Result>): Result {
		if (visitor.visitEnd) {
			return visitor.visitEnd(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StrandContext extends ParserRuleContext {
	public TEXT(): TerminalNode { return this.getToken(gff3Parser.TEXT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gff3Parser.RULE_strand; }
	// @Override
	public enterRule(listener: gff3Listener): void {
		if (listener.enterStrand) {
			listener.enterStrand(this);
		}
	}
	// @Override
	public exitRule(listener: gff3Listener): void {
		if (listener.exitStrand) {
			listener.exitStrand(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gff3Visitor<Result>): Result {
		if (visitor.visitStrand) {
			return visitor.visitStrand(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ScoreContext extends ParserRuleContext {
	public TEXT(): TerminalNode { return this.getToken(gff3Parser.TEXT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gff3Parser.RULE_score; }
	// @Override
	public enterRule(listener: gff3Listener): void {
		if (listener.enterScore) {
			listener.enterScore(this);
		}
	}
	// @Override
	public exitRule(listener: gff3Listener): void {
		if (listener.exitScore) {
			listener.exitScore(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gff3Visitor<Result>): Result {
		if (visitor.visitScore) {
			return visitor.visitScore(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PhaseContext extends ParserRuleContext {
	public TEXT(): TerminalNode { return this.getToken(gff3Parser.TEXT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gff3Parser.RULE_phase; }
	// @Override
	public enterRule(listener: gff3Listener): void {
		if (listener.enterPhase) {
			listener.enterPhase(this);
		}
	}
	// @Override
	public exitRule(listener: gff3Listener): void {
		if (listener.exitPhase) {
			listener.exitPhase(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gff3Visitor<Result>): Result {
		if (visitor.visitPhase) {
			return visitor.visitPhase(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CommentlineContext extends ParserRuleContext {
	public COMMENTLINE(): TerminalNode { return this.getToken(gff3Parser.COMMENTLINE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gff3Parser.RULE_commentline; }
	// @Override
	public enterRule(listener: gff3Listener): void {
		if (listener.enterCommentline) {
			listener.enterCommentline(this);
		}
	}
	// @Override
	public exitRule(listener: gff3Listener): void {
		if (listener.exitCommentline) {
			listener.exitCommentline(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gff3Visitor<Result>): Result {
		if (visitor.visitCommentline) {
			return visitor.visitCommentline(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


