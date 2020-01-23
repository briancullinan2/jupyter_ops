// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/mps/mps.g4 by ANTLR 4.7.3-SNAPSHOT


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

import { mpsListener } from "./mpsListener";
import { mpsVisitor } from "./mpsVisitor";


export class mpsParser extends Parser {
	public static readonly NAMEINDICATORCARD = 1;
	public static readonly ROWINDICATORCARD = 2;
	public static readonly COLUMNINDICATORCARD = 3;
	public static readonly RHSINDICATORCARD = 4;
	public static readonly RANGESINDICATORCARD = 5;
	public static readonly BOUNDSINDICATORCARD = 6;
	public static readonly ENDATAINDICATORCARD = 7;
	public static readonly KEYWORDMARKER = 8;
	public static readonly STARTMARKER = 9;
	public static readonly ENDMARKER = 10;
	public static readonly KEYWORDFREE = 11;
	public static readonly BOUNDKEY = 12;
	public static readonly ROWTYPE = 13;
	public static readonly IDENTIFIER = 14;
	public static readonly NUMERICALVALUE = 15;
	public static readonly WS = 16;
	public static readonly LINE_COMMENT = 17;
	public static readonly RULE_modell = 0;
	public static readonly RULE_firstrow = 1;
	public static readonly RULE_rows = 2;
	public static readonly RULE_columns = 3;
	public static readonly RULE_rhs = 4;
	public static readonly RULE_ranges = 5;
	public static readonly RULE_bounds = 6;
	public static readonly RULE_endata = 7;
	public static readonly RULE_rowdatacard = 8;
	public static readonly RULE_columndatacards = 9;
	public static readonly RULE_rhsdatacards = 10;
	public static readonly RULE_rangesdatacards = 11;
	public static readonly RULE_boundsdatacards = 12;
	public static readonly RULE_columndatacard = 13;
	public static readonly RULE_rhsdatacard = 14;
	public static readonly RULE_rangesdatacard = 15;
	public static readonly RULE_boundsdatacard = 16;
	public static readonly RULE_intblock = 17;
	public static readonly RULE_startmarker = 18;
	public static readonly RULE_endmarker = 19;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"modell", "firstrow", "rows", "columns", "rhs", "ranges", "bounds", "endata", 
		"rowdatacard", "columndatacards", "rhsdatacards", "rangesdatacards", "boundsdatacards", 
		"columndatacard", "rhsdatacard", "rangesdatacard", "boundsdatacard", "intblock", 
		"startmarker", "endmarker",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'NAME'", "'ROWS'", "'COLUMNS'", "'RHS'", "'RANGES'", "'BOUNDS'", 
		"'ENDATA'", "''ARKER''", "''NTORG''", "''NTEND''", "'FREE'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "NAMEINDICATORCARD", "ROWINDICATORCARD", "COLUMNINDICATORCARD", 
		"RHSINDICATORCARD", "RANGESINDICATORCARD", "BOUNDSINDICATORCARD", "ENDATAINDICATORCARD", 
		"KEYWORDMARKER", "STARTMARKER", "ENDMARKER", "KEYWORDFREE", "BOUNDKEY", 
		"ROWTYPE", "IDENTIFIER", "NUMERICALVALUE", "WS", "LINE_COMMENT",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(mpsParser._LITERAL_NAMES, mpsParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return mpsParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "mps.g4"; }

	// @Override
	public get ruleNames(): string[] { return mpsParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return mpsParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(mpsParser._ATN, this);
	}
	// @RuleVersion(0)
	public modell(): ModellContext {
		let _localctx: ModellContext = new ModellContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, mpsParser.RULE_modell);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 40;
			this.firstrow();
			this.state = 41;
			this.rows();
			this.state = 42;
			this.columns();
			this.state = 43;
			this.rhs();
			this.state = 45;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === mpsParser.RANGESINDICATORCARD) {
				{
				this.state = 44;
				this.ranges();
				}
			}

			this.state = 48;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === mpsParser.BOUNDSINDICATORCARD) {
				{
				this.state = 47;
				this.bounds();
				}
			}

			this.state = 50;
			this.endata();
			this.state = 51;
			this.match(mpsParser.EOF);
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
	public firstrow(): FirstrowContext {
		let _localctx: FirstrowContext = new FirstrowContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, mpsParser.RULE_firstrow);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 53;
			this.match(mpsParser.NAMEINDICATORCARD);
			this.state = 55;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === mpsParser.IDENTIFIER) {
				{
				this.state = 54;
				this.match(mpsParser.IDENTIFIER);
				}
			}

			this.state = 58;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === mpsParser.KEYWORDFREE) {
				{
				this.state = 57;
				this.match(mpsParser.KEYWORDFREE);
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
	public rows(): RowsContext {
		let _localctx: RowsContext = new RowsContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, mpsParser.RULE_rows);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 60;
			this.match(mpsParser.ROWINDICATORCARD);
			this.state = 62;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 61;
				this.rowdatacard();
				}
				}
				this.state = 64;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === mpsParser.ROWTYPE);
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
	public columns(): ColumnsContext {
		let _localctx: ColumnsContext = new ColumnsContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, mpsParser.RULE_columns);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 66;
			this.match(mpsParser.COLUMNINDICATORCARD);
			this.state = 67;
			this.columndatacards();
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
	public rhs(): RhsContext {
		let _localctx: RhsContext = new RhsContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, mpsParser.RULE_rhs);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 69;
			this.match(mpsParser.RHSINDICATORCARD);
			this.state = 70;
			this.rhsdatacards();
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
	public ranges(): RangesContext {
		let _localctx: RangesContext = new RangesContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, mpsParser.RULE_ranges);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 72;
			this.match(mpsParser.RANGESINDICATORCARD);
			this.state = 73;
			this.rangesdatacards();
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
	public bounds(): BoundsContext {
		let _localctx: BoundsContext = new BoundsContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, mpsParser.RULE_bounds);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 75;
			this.match(mpsParser.BOUNDSINDICATORCARD);
			this.state = 76;
			this.boundsdatacards();
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
	public endata(): EndataContext {
		let _localctx: EndataContext = new EndataContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, mpsParser.RULE_endata);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 78;
			this.match(mpsParser.ENDATAINDICATORCARD);
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
	public rowdatacard(): RowdatacardContext {
		let _localctx: RowdatacardContext = new RowdatacardContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, mpsParser.RULE_rowdatacard);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 80;
			this.match(mpsParser.ROWTYPE);
			this.state = 81;
			this.match(mpsParser.IDENTIFIER);
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
	public columndatacards(): ColumndatacardsContext {
		let _localctx: ColumndatacardsContext = new ColumndatacardsContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, mpsParser.RULE_columndatacards);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 85;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				this.state = 85;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 5, this._ctx) ) {
				case 1:
					{
					this.state = 83;
					this.columndatacard();
					}
					break;

				case 2:
					{
					this.state = 84;
					this.intblock();
					}
					break;
				}
				}
				this.state = 87;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === mpsParser.IDENTIFIER);
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
	public rhsdatacards(): RhsdatacardsContext {
		let _localctx: RhsdatacardsContext = new RhsdatacardsContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, mpsParser.RULE_rhsdatacards);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 90;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 89;
				this.rhsdatacard();
				}
				}
				this.state = 92;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === mpsParser.RHSINDICATORCARD || _la === mpsParser.IDENTIFIER);
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
	public rangesdatacards(): RangesdatacardsContext {
		let _localctx: RangesdatacardsContext = new RangesdatacardsContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, mpsParser.RULE_rangesdatacards);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 95;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 94;
				this.rangesdatacard();
				}
				}
				this.state = 97;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === mpsParser.RANGESINDICATORCARD || _la === mpsParser.IDENTIFIER);
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
	public boundsdatacards(): BoundsdatacardsContext {
		let _localctx: BoundsdatacardsContext = new BoundsdatacardsContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, mpsParser.RULE_boundsdatacards);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 100;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 99;
				this.boundsdatacard();
				}
				}
				this.state = 102;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === mpsParser.BOUNDKEY);
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
	public columndatacard(): ColumndatacardContext {
		let _localctx: ColumndatacardContext = new ColumndatacardContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, mpsParser.RULE_columndatacard);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 104;
			this.match(mpsParser.IDENTIFIER);
			this.state = 105;
			this.match(mpsParser.IDENTIFIER);
			this.state = 106;
			this.match(mpsParser.NUMERICALVALUE);
			this.state = 109;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 10, this._ctx) ) {
			case 1:
				{
				this.state = 107;
				this.match(mpsParser.IDENTIFIER);
				this.state = 108;
				this.match(mpsParser.NUMERICALVALUE);
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
	public rhsdatacard(): RhsdatacardContext {
		let _localctx: RhsdatacardContext = new RhsdatacardContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, mpsParser.RULE_rhsdatacard);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 111;
			_la = this._input.LA(1);
			if (!(_la === mpsParser.RHSINDICATORCARD || _la === mpsParser.IDENTIFIER)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 112;
			this.match(mpsParser.IDENTIFIER);
			this.state = 113;
			this.match(mpsParser.NUMERICALVALUE);
			this.state = 116;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 11, this._ctx) ) {
			case 1:
				{
				this.state = 114;
				this.match(mpsParser.IDENTIFIER);
				this.state = 115;
				this.match(mpsParser.NUMERICALVALUE);
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
	public rangesdatacard(): RangesdatacardContext {
		let _localctx: RangesdatacardContext = new RangesdatacardContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, mpsParser.RULE_rangesdatacard);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 118;
			_la = this._input.LA(1);
			if (!(_la === mpsParser.RANGESINDICATORCARD || _la === mpsParser.IDENTIFIER)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 119;
			this.match(mpsParser.IDENTIFIER);
			this.state = 120;
			this.match(mpsParser.NUMERICALVALUE);
			this.state = 123;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 12, this._ctx) ) {
			case 1:
				{
				this.state = 121;
				this.match(mpsParser.IDENTIFIER);
				this.state = 122;
				this.match(mpsParser.NUMERICALVALUE);
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
	public boundsdatacard(): BoundsdatacardContext {
		let _localctx: BoundsdatacardContext = new BoundsdatacardContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, mpsParser.RULE_boundsdatacard);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 125;
			this.match(mpsParser.BOUNDKEY);
			this.state = 126;
			_la = this._input.LA(1);
			if (!(_la === mpsParser.BOUNDSINDICATORCARD || _la === mpsParser.IDENTIFIER)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 127;
			this.match(mpsParser.IDENTIFIER);
			this.state = 129;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === mpsParser.NUMERICALVALUE) {
				{
				this.state = 128;
				this.match(mpsParser.NUMERICALVALUE);
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
	public intblock(): IntblockContext {
		let _localctx: IntblockContext = new IntblockContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, mpsParser.RULE_intblock);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 131;
			this.startmarker();
			this.state = 133;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 132;
					this.columndatacard();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 135;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 14, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			this.state = 137;
			this.endmarker();
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
	public startmarker(): StartmarkerContext {
		let _localctx: StartmarkerContext = new StartmarkerContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, mpsParser.RULE_startmarker);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 139;
			this.match(mpsParser.IDENTIFIER);
			this.state = 140;
			this.match(mpsParser.KEYWORDMARKER);
			this.state = 141;
			this.match(mpsParser.STARTMARKER);
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
	public endmarker(): EndmarkerContext {
		let _localctx: EndmarkerContext = new EndmarkerContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, mpsParser.RULE_endmarker);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 143;
			this.match(mpsParser.IDENTIFIER);
			this.state = 144;
			this.match(mpsParser.KEYWORDMARKER);
			this.state = 145;
			this.match(mpsParser.ENDMARKER);
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x13\x96\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x03\x02\x03\x02\x03\x02\x03\x02" +
		"\x03\x02\x05\x020\n\x02\x03\x02\x05\x023\n\x02\x03\x02\x03\x02\x03\x02" +
		"\x03\x03\x03\x03\x05\x03:\n\x03\x03\x03\x05\x03=\n\x03\x03\x04\x03\x04" +
		"\x06\x04A\n\x04\r\x04\x0E\x04B\x03\x05\x03\x05\x03\x05\x03\x06\x03\x06" +
		"\x03\x06\x03\x07\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03\t\x03\t\x03\n\x03" +
		"\n\x03\n\x03\v\x03\v\x06\vX\n\v\r\v\x0E\vY\x03\f\x06\f]\n\f\r\f\x0E\f" +
		"^\x03\r\x06\rb\n\r\r\r\x0E\rc\x03\x0E\x06\x0Eg\n\x0E\r\x0E\x0E\x0Eh\x03" +
		"\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0Fp\n\x0F\x03\x10\x03\x10\x03" +
		"\x10\x03\x10\x03\x10\x05\x10w\n\x10\x03\x11\x03\x11\x03\x11\x03\x11\x03" +
		"\x11\x05\x11~\n\x11\x03\x12\x03\x12\x03\x12\x03\x12\x05\x12\x84\n\x12" +
		"\x03\x13\x03\x13\x06\x13\x88\n\x13\r\x13\x0E\x13\x89\x03\x13\x03\x13\x03" +
		"\x14\x03\x14\x03\x14\x03\x14\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x02" +
		"\x02\x02\x16\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02" +
		"\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02" +
		"&\x02(\x02\x02\x05\x04\x02\x06\x06\x10\x10\x04\x02\x07\x07\x10\x10\x04" +
		"\x02\b\b\x10\x10\x02\x90\x02*\x03\x02\x02\x02\x047\x03\x02\x02\x02\x06" +
		">\x03\x02\x02\x02\bD\x03\x02\x02\x02\nG\x03\x02\x02\x02\fJ\x03\x02\x02" +
		"\x02\x0EM\x03\x02\x02\x02\x10P\x03\x02\x02\x02\x12R\x03\x02\x02\x02\x14" +
		"W\x03\x02\x02\x02\x16\\\x03\x02\x02\x02\x18a\x03\x02\x02\x02\x1Af\x03" +
		"\x02\x02\x02\x1Cj\x03\x02\x02\x02\x1Eq\x03\x02\x02\x02 x\x03\x02\x02\x02" +
		"\"\x7F\x03\x02\x02\x02$\x85\x03\x02\x02\x02&\x8D\x03\x02\x02\x02(\x91" +
		"\x03\x02\x02\x02*+\x05\x04\x03\x02+,\x05\x06\x04\x02,-\x05\b\x05\x02-" +
		"/\x05\n\x06\x02.0\x05\f\x07\x02/.\x03\x02\x02\x02/0\x03\x02\x02\x0202" +
		"\x03\x02\x02\x0213\x05\x0E\b\x0221\x03\x02\x02\x0223\x03\x02\x02\x023" +
		"4\x03\x02\x02\x0245\x05\x10\t\x0256\x07\x02\x02\x036\x03\x03\x02\x02\x02" +
		"79\x07\x03\x02\x028:\x07\x10\x02\x0298\x03\x02\x02\x029:\x03\x02\x02\x02" +
		":<\x03\x02\x02\x02;=\x07\r\x02\x02<;\x03\x02\x02\x02<=\x03\x02\x02\x02" +
		"=\x05\x03\x02\x02\x02>@\x07\x04\x02\x02?A\x05\x12\n\x02@?\x03\x02\x02" +
		"\x02AB\x03\x02\x02\x02B@\x03\x02\x02\x02BC\x03\x02\x02\x02C\x07\x03\x02" +
		"\x02\x02DE\x07\x05\x02\x02EF\x05\x14\v\x02F\t\x03\x02\x02\x02GH\x07\x06" +
		"\x02\x02HI\x05\x16\f\x02I\v\x03\x02\x02\x02JK\x07\x07\x02\x02KL\x05\x18" +
		"\r\x02L\r\x03\x02\x02\x02MN\x07\b\x02\x02NO\x05\x1A\x0E\x02O\x0F\x03\x02" +
		"\x02\x02PQ\x07\t\x02\x02Q\x11\x03\x02\x02\x02RS\x07\x0F\x02\x02ST\x07" +
		"\x10\x02\x02T\x13\x03\x02\x02\x02UX\x05\x1C\x0F\x02VX\x05$\x13\x02WU\x03" +
		"\x02\x02\x02WV\x03\x02\x02\x02XY\x03\x02\x02\x02YW\x03\x02\x02\x02YZ\x03" +
		"\x02\x02\x02Z\x15\x03\x02\x02\x02[]\x05\x1E\x10\x02\\[\x03\x02\x02\x02" +
		"]^\x03\x02\x02\x02^\\\x03\x02\x02\x02^_\x03\x02\x02\x02_\x17\x03\x02\x02" +
		"\x02`b\x05 \x11\x02a`\x03\x02\x02\x02bc\x03\x02\x02\x02ca\x03\x02\x02" +
		"\x02cd\x03\x02\x02\x02d\x19\x03\x02\x02\x02eg\x05\"\x12\x02fe\x03\x02" +
		"\x02\x02gh\x03\x02\x02\x02hf\x03\x02\x02\x02hi\x03\x02\x02\x02i\x1B\x03" +
		"\x02\x02\x02jk\x07\x10\x02\x02kl\x07\x10\x02\x02lo\x07\x11\x02\x02mn\x07" +
		"\x10\x02\x02np\x07\x11\x02\x02om\x03\x02\x02\x02op\x03\x02\x02\x02p\x1D" +
		"\x03\x02\x02\x02qr\t\x02\x02\x02rs\x07\x10\x02\x02sv\x07\x11\x02\x02t" +
		"u\x07\x10\x02\x02uw\x07\x11\x02\x02vt\x03\x02\x02\x02vw\x03\x02\x02\x02" +
		"w\x1F\x03\x02\x02\x02xy\t\x03\x02\x02yz\x07\x10\x02\x02z}\x07\x11\x02" +
		"\x02{|\x07\x10\x02\x02|~\x07\x11\x02\x02}{\x03\x02\x02\x02}~\x03\x02\x02" +
		"\x02~!\x03\x02\x02\x02\x7F\x80\x07\x0E\x02\x02\x80\x81\t\x04\x02\x02\x81" +
		"\x83\x07\x10\x02\x02\x82\x84\x07\x11\x02\x02\x83\x82\x03\x02\x02\x02\x83" +
		"\x84\x03\x02\x02\x02\x84#\x03\x02\x02\x02\x85\x87\x05&\x14\x02\x86\x88" +
		"\x05\x1C\x0F\x02\x87\x86\x03\x02\x02\x02\x88\x89\x03\x02\x02\x02\x89\x87" +
		"\x03\x02\x02\x02\x89\x8A\x03\x02\x02\x02\x8A\x8B\x03\x02\x02\x02\x8B\x8C" +
		"\x05(\x15\x02\x8C%\x03\x02\x02\x02\x8D\x8E\x07\x10\x02\x02\x8E\x8F\x07" +
		"\n\x02\x02\x8F\x90\x07\v\x02\x02\x90\'\x03\x02\x02\x02\x91\x92\x07\x10" +
		"\x02\x02\x92\x93\x07\n\x02\x02\x93\x94\x07\f\x02\x02\x94)\x03\x02\x02" +
		"\x02\x11/29<BWY^chov}\x83\x89";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!mpsParser.__ATN) {
			mpsParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(mpsParser._serializedATN));
		}

		return mpsParser.__ATN;
	}

}

export class ModellContext extends ParserRuleContext {
	public firstrow(): FirstrowContext {
		return this.getRuleContext(0, FirstrowContext);
	}
	public rows(): RowsContext {
		return this.getRuleContext(0, RowsContext);
	}
	public columns(): ColumnsContext {
		return this.getRuleContext(0, ColumnsContext);
	}
	public rhs(): RhsContext {
		return this.getRuleContext(0, RhsContext);
	}
	public endata(): EndataContext {
		return this.getRuleContext(0, EndataContext);
	}
	public EOF(): TerminalNode { return this.getToken(mpsParser.EOF, 0); }
	public ranges(): RangesContext | undefined {
		return this.tryGetRuleContext(0, RangesContext);
	}
	public bounds(): BoundsContext | undefined {
		return this.tryGetRuleContext(0, BoundsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mpsParser.RULE_modell; }
	// @Override
	public enterRule(listener: mpsListener): void {
		if (listener.enterModell) {
			listener.enterModell(this);
		}
	}
	// @Override
	public exitRule(listener: mpsListener): void {
		if (listener.exitModell) {
			listener.exitModell(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mpsVisitor<Result>): Result {
		if (visitor.visitModell) {
			return visitor.visitModell(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FirstrowContext extends ParserRuleContext {
	public NAMEINDICATORCARD(): TerminalNode { return this.getToken(mpsParser.NAMEINDICATORCARD, 0); }
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(mpsParser.IDENTIFIER, 0); }
	public KEYWORDFREE(): TerminalNode | undefined { return this.tryGetToken(mpsParser.KEYWORDFREE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mpsParser.RULE_firstrow; }
	// @Override
	public enterRule(listener: mpsListener): void {
		if (listener.enterFirstrow) {
			listener.enterFirstrow(this);
		}
	}
	// @Override
	public exitRule(listener: mpsListener): void {
		if (listener.exitFirstrow) {
			listener.exitFirstrow(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mpsVisitor<Result>): Result {
		if (visitor.visitFirstrow) {
			return visitor.visitFirstrow(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RowsContext extends ParserRuleContext {
	public ROWINDICATORCARD(): TerminalNode { return this.getToken(mpsParser.ROWINDICATORCARD, 0); }
	public rowdatacard(): RowdatacardContext[];
	public rowdatacard(i: number): RowdatacardContext;
	public rowdatacard(i?: number): RowdatacardContext | RowdatacardContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RowdatacardContext);
		} else {
			return this.getRuleContext(i, RowdatacardContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mpsParser.RULE_rows; }
	// @Override
	public enterRule(listener: mpsListener): void {
		if (listener.enterRows) {
			listener.enterRows(this);
		}
	}
	// @Override
	public exitRule(listener: mpsListener): void {
		if (listener.exitRows) {
			listener.exitRows(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mpsVisitor<Result>): Result {
		if (visitor.visitRows) {
			return visitor.visitRows(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ColumnsContext extends ParserRuleContext {
	public COLUMNINDICATORCARD(): TerminalNode { return this.getToken(mpsParser.COLUMNINDICATORCARD, 0); }
	public columndatacards(): ColumndatacardsContext {
		return this.getRuleContext(0, ColumndatacardsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mpsParser.RULE_columns; }
	// @Override
	public enterRule(listener: mpsListener): void {
		if (listener.enterColumns) {
			listener.enterColumns(this);
		}
	}
	// @Override
	public exitRule(listener: mpsListener): void {
		if (listener.exitColumns) {
			listener.exitColumns(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mpsVisitor<Result>): Result {
		if (visitor.visitColumns) {
			return visitor.visitColumns(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RhsContext extends ParserRuleContext {
	public RHSINDICATORCARD(): TerminalNode { return this.getToken(mpsParser.RHSINDICATORCARD, 0); }
	public rhsdatacards(): RhsdatacardsContext {
		return this.getRuleContext(0, RhsdatacardsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mpsParser.RULE_rhs; }
	// @Override
	public enterRule(listener: mpsListener): void {
		if (listener.enterRhs) {
			listener.enterRhs(this);
		}
	}
	// @Override
	public exitRule(listener: mpsListener): void {
		if (listener.exitRhs) {
			listener.exitRhs(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mpsVisitor<Result>): Result {
		if (visitor.visitRhs) {
			return visitor.visitRhs(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RangesContext extends ParserRuleContext {
	public RANGESINDICATORCARD(): TerminalNode { return this.getToken(mpsParser.RANGESINDICATORCARD, 0); }
	public rangesdatacards(): RangesdatacardsContext {
		return this.getRuleContext(0, RangesdatacardsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mpsParser.RULE_ranges; }
	// @Override
	public enterRule(listener: mpsListener): void {
		if (listener.enterRanges) {
			listener.enterRanges(this);
		}
	}
	// @Override
	public exitRule(listener: mpsListener): void {
		if (listener.exitRanges) {
			listener.exitRanges(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mpsVisitor<Result>): Result {
		if (visitor.visitRanges) {
			return visitor.visitRanges(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BoundsContext extends ParserRuleContext {
	public BOUNDSINDICATORCARD(): TerminalNode { return this.getToken(mpsParser.BOUNDSINDICATORCARD, 0); }
	public boundsdatacards(): BoundsdatacardsContext {
		return this.getRuleContext(0, BoundsdatacardsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mpsParser.RULE_bounds; }
	// @Override
	public enterRule(listener: mpsListener): void {
		if (listener.enterBounds) {
			listener.enterBounds(this);
		}
	}
	// @Override
	public exitRule(listener: mpsListener): void {
		if (listener.exitBounds) {
			listener.exitBounds(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mpsVisitor<Result>): Result {
		if (visitor.visitBounds) {
			return visitor.visitBounds(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EndataContext extends ParserRuleContext {
	public ENDATAINDICATORCARD(): TerminalNode { return this.getToken(mpsParser.ENDATAINDICATORCARD, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mpsParser.RULE_endata; }
	// @Override
	public enterRule(listener: mpsListener): void {
		if (listener.enterEndata) {
			listener.enterEndata(this);
		}
	}
	// @Override
	public exitRule(listener: mpsListener): void {
		if (listener.exitEndata) {
			listener.exitEndata(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mpsVisitor<Result>): Result {
		if (visitor.visitEndata) {
			return visitor.visitEndata(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RowdatacardContext extends ParserRuleContext {
	public ROWTYPE(): TerminalNode { return this.getToken(mpsParser.ROWTYPE, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(mpsParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mpsParser.RULE_rowdatacard; }
	// @Override
	public enterRule(listener: mpsListener): void {
		if (listener.enterRowdatacard) {
			listener.enterRowdatacard(this);
		}
	}
	// @Override
	public exitRule(listener: mpsListener): void {
		if (listener.exitRowdatacard) {
			listener.exitRowdatacard(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mpsVisitor<Result>): Result {
		if (visitor.visitRowdatacard) {
			return visitor.visitRowdatacard(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ColumndatacardsContext extends ParserRuleContext {
	public columndatacard(): ColumndatacardContext[];
	public columndatacard(i: number): ColumndatacardContext;
	public columndatacard(i?: number): ColumndatacardContext | ColumndatacardContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ColumndatacardContext);
		} else {
			return this.getRuleContext(i, ColumndatacardContext);
		}
	}
	public intblock(): IntblockContext[];
	public intblock(i: number): IntblockContext;
	public intblock(i?: number): IntblockContext | IntblockContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IntblockContext);
		} else {
			return this.getRuleContext(i, IntblockContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mpsParser.RULE_columndatacards; }
	// @Override
	public enterRule(listener: mpsListener): void {
		if (listener.enterColumndatacards) {
			listener.enterColumndatacards(this);
		}
	}
	// @Override
	public exitRule(listener: mpsListener): void {
		if (listener.exitColumndatacards) {
			listener.exitColumndatacards(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mpsVisitor<Result>): Result {
		if (visitor.visitColumndatacards) {
			return visitor.visitColumndatacards(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RhsdatacardsContext extends ParserRuleContext {
	public rhsdatacard(): RhsdatacardContext[];
	public rhsdatacard(i: number): RhsdatacardContext;
	public rhsdatacard(i?: number): RhsdatacardContext | RhsdatacardContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RhsdatacardContext);
		} else {
			return this.getRuleContext(i, RhsdatacardContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mpsParser.RULE_rhsdatacards; }
	// @Override
	public enterRule(listener: mpsListener): void {
		if (listener.enterRhsdatacards) {
			listener.enterRhsdatacards(this);
		}
	}
	// @Override
	public exitRule(listener: mpsListener): void {
		if (listener.exitRhsdatacards) {
			listener.exitRhsdatacards(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mpsVisitor<Result>): Result {
		if (visitor.visitRhsdatacards) {
			return visitor.visitRhsdatacards(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RangesdatacardsContext extends ParserRuleContext {
	public rangesdatacard(): RangesdatacardContext[];
	public rangesdatacard(i: number): RangesdatacardContext;
	public rangesdatacard(i?: number): RangesdatacardContext | RangesdatacardContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RangesdatacardContext);
		} else {
			return this.getRuleContext(i, RangesdatacardContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mpsParser.RULE_rangesdatacards; }
	// @Override
	public enterRule(listener: mpsListener): void {
		if (listener.enterRangesdatacards) {
			listener.enterRangesdatacards(this);
		}
	}
	// @Override
	public exitRule(listener: mpsListener): void {
		if (listener.exitRangesdatacards) {
			listener.exitRangesdatacards(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mpsVisitor<Result>): Result {
		if (visitor.visitRangesdatacards) {
			return visitor.visitRangesdatacards(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BoundsdatacardsContext extends ParserRuleContext {
	public boundsdatacard(): BoundsdatacardContext[];
	public boundsdatacard(i: number): BoundsdatacardContext;
	public boundsdatacard(i?: number): BoundsdatacardContext | BoundsdatacardContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BoundsdatacardContext);
		} else {
			return this.getRuleContext(i, BoundsdatacardContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mpsParser.RULE_boundsdatacards; }
	// @Override
	public enterRule(listener: mpsListener): void {
		if (listener.enterBoundsdatacards) {
			listener.enterBoundsdatacards(this);
		}
	}
	// @Override
	public exitRule(listener: mpsListener): void {
		if (listener.exitBoundsdatacards) {
			listener.exitBoundsdatacards(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mpsVisitor<Result>): Result {
		if (visitor.visitBoundsdatacards) {
			return visitor.visitBoundsdatacards(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ColumndatacardContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(mpsParser.IDENTIFIER);
		} else {
			return this.getToken(mpsParser.IDENTIFIER, i);
		}
	}
	public NUMERICALVALUE(): TerminalNode[];
	public NUMERICALVALUE(i: number): TerminalNode;
	public NUMERICALVALUE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(mpsParser.NUMERICALVALUE);
		} else {
			return this.getToken(mpsParser.NUMERICALVALUE, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mpsParser.RULE_columndatacard; }
	// @Override
	public enterRule(listener: mpsListener): void {
		if (listener.enterColumndatacard) {
			listener.enterColumndatacard(this);
		}
	}
	// @Override
	public exitRule(listener: mpsListener): void {
		if (listener.exitColumndatacard) {
			listener.exitColumndatacard(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mpsVisitor<Result>): Result {
		if (visitor.visitColumndatacard) {
			return visitor.visitColumndatacard(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RhsdatacardContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(mpsParser.IDENTIFIER);
		} else {
			return this.getToken(mpsParser.IDENTIFIER, i);
		}
	}
	public NUMERICALVALUE(): TerminalNode[];
	public NUMERICALVALUE(i: number): TerminalNode;
	public NUMERICALVALUE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(mpsParser.NUMERICALVALUE);
		} else {
			return this.getToken(mpsParser.NUMERICALVALUE, i);
		}
	}
	public RHSINDICATORCARD(): TerminalNode | undefined { return this.tryGetToken(mpsParser.RHSINDICATORCARD, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mpsParser.RULE_rhsdatacard; }
	// @Override
	public enterRule(listener: mpsListener): void {
		if (listener.enterRhsdatacard) {
			listener.enterRhsdatacard(this);
		}
	}
	// @Override
	public exitRule(listener: mpsListener): void {
		if (listener.exitRhsdatacard) {
			listener.exitRhsdatacard(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mpsVisitor<Result>): Result {
		if (visitor.visitRhsdatacard) {
			return visitor.visitRhsdatacard(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RangesdatacardContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(mpsParser.IDENTIFIER);
		} else {
			return this.getToken(mpsParser.IDENTIFIER, i);
		}
	}
	public NUMERICALVALUE(): TerminalNode[];
	public NUMERICALVALUE(i: number): TerminalNode;
	public NUMERICALVALUE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(mpsParser.NUMERICALVALUE);
		} else {
			return this.getToken(mpsParser.NUMERICALVALUE, i);
		}
	}
	public RANGESINDICATORCARD(): TerminalNode | undefined { return this.tryGetToken(mpsParser.RANGESINDICATORCARD, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mpsParser.RULE_rangesdatacard; }
	// @Override
	public enterRule(listener: mpsListener): void {
		if (listener.enterRangesdatacard) {
			listener.enterRangesdatacard(this);
		}
	}
	// @Override
	public exitRule(listener: mpsListener): void {
		if (listener.exitRangesdatacard) {
			listener.exitRangesdatacard(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mpsVisitor<Result>): Result {
		if (visitor.visitRangesdatacard) {
			return visitor.visitRangesdatacard(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BoundsdatacardContext extends ParserRuleContext {
	public BOUNDKEY(): TerminalNode { return this.getToken(mpsParser.BOUNDKEY, 0); }
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(mpsParser.IDENTIFIER);
		} else {
			return this.getToken(mpsParser.IDENTIFIER, i);
		}
	}
	public BOUNDSINDICATORCARD(): TerminalNode | undefined { return this.tryGetToken(mpsParser.BOUNDSINDICATORCARD, 0); }
	public NUMERICALVALUE(): TerminalNode | undefined { return this.tryGetToken(mpsParser.NUMERICALVALUE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mpsParser.RULE_boundsdatacard; }
	// @Override
	public enterRule(listener: mpsListener): void {
		if (listener.enterBoundsdatacard) {
			listener.enterBoundsdatacard(this);
		}
	}
	// @Override
	public exitRule(listener: mpsListener): void {
		if (listener.exitBoundsdatacard) {
			listener.exitBoundsdatacard(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mpsVisitor<Result>): Result {
		if (visitor.visitBoundsdatacard) {
			return visitor.visitBoundsdatacard(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IntblockContext extends ParserRuleContext {
	public startmarker(): StartmarkerContext {
		return this.getRuleContext(0, StartmarkerContext);
	}
	public endmarker(): EndmarkerContext {
		return this.getRuleContext(0, EndmarkerContext);
	}
	public columndatacard(): ColumndatacardContext[];
	public columndatacard(i: number): ColumndatacardContext;
	public columndatacard(i?: number): ColumndatacardContext | ColumndatacardContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ColumndatacardContext);
		} else {
			return this.getRuleContext(i, ColumndatacardContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mpsParser.RULE_intblock; }
	// @Override
	public enterRule(listener: mpsListener): void {
		if (listener.enterIntblock) {
			listener.enterIntblock(this);
		}
	}
	// @Override
	public exitRule(listener: mpsListener): void {
		if (listener.exitIntblock) {
			listener.exitIntblock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mpsVisitor<Result>): Result {
		if (visitor.visitIntblock) {
			return visitor.visitIntblock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StartmarkerContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(mpsParser.IDENTIFIER, 0); }
	public KEYWORDMARKER(): TerminalNode { return this.getToken(mpsParser.KEYWORDMARKER, 0); }
	public STARTMARKER(): TerminalNode { return this.getToken(mpsParser.STARTMARKER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mpsParser.RULE_startmarker; }
	// @Override
	public enterRule(listener: mpsListener): void {
		if (listener.enterStartmarker) {
			listener.enterStartmarker(this);
		}
	}
	// @Override
	public exitRule(listener: mpsListener): void {
		if (listener.exitStartmarker) {
			listener.exitStartmarker(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mpsVisitor<Result>): Result {
		if (visitor.visitStartmarker) {
			return visitor.visitStartmarker(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EndmarkerContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(mpsParser.IDENTIFIER, 0); }
	public KEYWORDMARKER(): TerminalNode { return this.getToken(mpsParser.KEYWORDMARKER, 0); }
	public ENDMARKER(): TerminalNode { return this.getToken(mpsParser.ENDMARKER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mpsParser.RULE_endmarker; }
	// @Override
	public enterRule(listener: mpsListener): void {
		if (listener.enterEndmarker) {
			listener.enterEndmarker(this);
		}
	}
	// @Override
	public exitRule(listener: mpsListener): void {
		if (listener.exitEndmarker) {
			listener.exitEndmarker(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mpsVisitor<Result>): Result {
		if (visitor.visitEndmarker) {
			return visitor.visitEndmarker(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


