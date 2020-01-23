// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/wkt/wkt.g4 by ANTLR 4.7.3-SNAPSHOT


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

import { wktListener } from "./wktListener";
import { wktVisitor } from "./wktVisitor";


export class wktParser extends Parser {
	public static readonly DECIMAL = 1;
	public static readonly INTEGERPART = 2;
	public static readonly DECIMALPART = 3;
	public static readonly COMMA = 4;
	public static readonly LPAR = 5;
	public static readonly RPAR = 6;
	public static readonly POINT = 7;
	public static readonly LINESTRING = 8;
	public static readonly POLYGON = 9;
	public static readonly MULTIPOINT = 10;
	public static readonly MULTILINESTRING = 11;
	public static readonly MULTIPOLYGON = 12;
	public static readonly GEOMETRYCOLLECTION = 13;
	public static readonly EMPTY = 14;
	public static readonly CIRCULARSTRING = 15;
	public static readonly COMPOUNDCURVE = 16;
	public static readonly CURVEPOLYGON = 17;
	public static readonly MULTICURVE = 18;
	public static readonly TRIANGLE = 19;
	public static readonly TIN = 20;
	public static readonly POLYHEDRALSURFACE = 21;
	public static readonly STRING = 22;
	public static readonly WS = 23;
	public static readonly RULE_geometry = 0;
	public static readonly RULE_pointGeometry = 1;
	public static readonly RULE_lineStringGeometry = 2;
	public static readonly RULE_polygonGeometry = 3;
	public static readonly RULE_multiPointGeometry = 4;
	public static readonly RULE_multiLineStringGeometry = 5;
	public static readonly RULE_multiPolygonGeometry = 6;
	public static readonly RULE_circularStringGeometry = 7;
	public static readonly RULE_pointOrClosedPoint = 8;
	public static readonly RULE_polygon = 9;
	public static readonly RULE_lineString = 10;
	public static readonly RULE_point = 11;
	public static readonly RULE_name = 12;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"geometry", "pointGeometry", "lineStringGeometry", "polygonGeometry", 
		"multiPointGeometry", "multiLineStringGeometry", "multiPolygonGeometry", 
		"circularStringGeometry", "pointOrClosedPoint", "polygon", "lineString", 
		"point", "name",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, "','", "'('", "')'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "DECIMAL", "INTEGERPART", "DECIMALPART", "COMMA", "LPAR", "RPAR", 
		"POINT", "LINESTRING", "POLYGON", "MULTIPOINT", "MULTILINESTRING", "MULTIPOLYGON", 
		"GEOMETRYCOLLECTION", "EMPTY", "CIRCULARSTRING", "COMPOUNDCURVE", "CURVEPOLYGON", 
		"MULTICURVE", "TRIANGLE", "TIN", "POLYHEDRALSURFACE", "STRING", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(wktParser._LITERAL_NAMES, wktParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return wktParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "wkt.g4"; }

	// @Override
	public get ruleNames(): string[] { return wktParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return wktParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(wktParser._ATN, this);
	}
	// @RuleVersion(0)
	public geometry(): GeometryContext {
		let _localctx: GeometryContext = new GeometryContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, wktParser.RULE_geometry);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 33;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				this.state = 33;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case wktParser.POLYGON:
					{
					this.state = 26;
					this.polygonGeometry();
					}
					break;
				case wktParser.LINESTRING:
					{
					this.state = 27;
					this.lineStringGeometry();
					}
					break;
				case wktParser.POINT:
					{
					this.state = 28;
					this.pointGeometry();
					}
					break;
				case wktParser.MULTIPOINT:
					{
					this.state = 29;
					this.multiPointGeometry();
					}
					break;
				case wktParser.MULTILINESTRING:
					{
					this.state = 30;
					this.multiLineStringGeometry();
					}
					break;
				case wktParser.MULTIPOLYGON:
					{
					this.state = 31;
					this.multiPolygonGeometry();
					}
					break;
				case wktParser.CIRCULARSTRING:
					{
					this.state = 32;
					this.circularStringGeometry();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 35;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << wktParser.POINT) | (1 << wktParser.LINESTRING) | (1 << wktParser.POLYGON) | (1 << wktParser.MULTIPOINT) | (1 << wktParser.MULTILINESTRING) | (1 << wktParser.MULTIPOLYGON) | (1 << wktParser.CIRCULARSTRING))) !== 0));
			this.state = 37;
			this.match(wktParser.EOF);
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
	public pointGeometry(): PointGeometryContext {
		let _localctx: PointGeometryContext = new PointGeometryContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, wktParser.RULE_pointGeometry);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 39;
			this.match(wktParser.POINT);
			this.state = 48;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case wktParser.LPAR:
			case wktParser.STRING:
				{
				{
				this.state = 41;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === wktParser.STRING) {
					{
					this.state = 40;
					this.name();
					}
				}

				this.state = 43;
				this.match(wktParser.LPAR);
				this.state = 44;
				this.point();
				this.state = 45;
				this.match(wktParser.RPAR);
				}
				}
				break;
			case wktParser.EMPTY:
				{
				this.state = 47;
				this.match(wktParser.EMPTY);
				}
				break;
			default:
				throw new NoViableAltException(this);
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
	public lineStringGeometry(): LineStringGeometryContext {
		let _localctx: LineStringGeometryContext = new LineStringGeometryContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, wktParser.RULE_lineStringGeometry);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 50;
			this.match(wktParser.LINESTRING);
			this.state = 51;
			this.lineString();
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
	public polygonGeometry(): PolygonGeometryContext {
		let _localctx: PolygonGeometryContext = new PolygonGeometryContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, wktParser.RULE_polygonGeometry);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 53;
			this.match(wktParser.POLYGON);
			this.state = 54;
			this.polygon();
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
	public multiPointGeometry(): MultiPointGeometryContext {
		let _localctx: MultiPointGeometryContext = new MultiPointGeometryContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, wktParser.RULE_multiPointGeometry);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 56;
			this.match(wktParser.MULTIPOINT);
			this.state = 57;
			this.match(wktParser.LPAR);
			this.state = 58;
			this.pointOrClosedPoint();
			this.state = 63;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === wktParser.COMMA) {
				{
				{
				this.state = 59;
				this.match(wktParser.COMMA);
				this.state = 60;
				this.pointOrClosedPoint();
				}
				}
				this.state = 65;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 66;
			this.match(wktParser.RPAR);
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
	public multiLineStringGeometry(): MultiLineStringGeometryContext {
		let _localctx: MultiLineStringGeometryContext = new MultiLineStringGeometryContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, wktParser.RULE_multiLineStringGeometry);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 68;
			this.match(wktParser.MULTILINESTRING);
			this.state = 69;
			this.match(wktParser.LPAR);
			this.state = 70;
			this.lineString();
			this.state = 75;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === wktParser.COMMA) {
				{
				{
				this.state = 71;
				this.match(wktParser.COMMA);
				this.state = 72;
				this.lineString();
				}
				}
				this.state = 77;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 78;
			this.match(wktParser.RPAR);
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
	public multiPolygonGeometry(): MultiPolygonGeometryContext {
		let _localctx: MultiPolygonGeometryContext = new MultiPolygonGeometryContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, wktParser.RULE_multiPolygonGeometry);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 80;
			this.match(wktParser.MULTIPOLYGON);
			this.state = 93;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case wktParser.LPAR:
				{
				{
				this.state = 81;
				this.match(wktParser.LPAR);
				this.state = 82;
				this.polygon();
				this.state = 87;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === wktParser.COMMA) {
					{
					{
					this.state = 83;
					this.match(wktParser.COMMA);
					this.state = 84;
					this.polygon();
					}
					}
					this.state = 89;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 90;
				this.match(wktParser.RPAR);
				}
				}
				break;
			case wktParser.EMPTY:
				{
				this.state = 92;
				this.match(wktParser.EMPTY);
				}
				break;
			default:
				throw new NoViableAltException(this);
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
	public circularStringGeometry(): CircularStringGeometryContext {
		let _localctx: CircularStringGeometryContext = new CircularStringGeometryContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, wktParser.RULE_circularStringGeometry);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 95;
			this.match(wktParser.CIRCULARSTRING);
			this.state = 96;
			this.match(wktParser.LPAR);
			this.state = 97;
			this.point();
			this.state = 102;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === wktParser.COMMA) {
				{
				{
				this.state = 98;
				this.match(wktParser.COMMA);
				this.state = 99;
				this.point();
				}
				}
				this.state = 104;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 105;
			this.match(wktParser.RPAR);
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
	public pointOrClosedPoint(): PointOrClosedPointContext {
		let _localctx: PointOrClosedPointContext = new PointOrClosedPointContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, wktParser.RULE_pointOrClosedPoint);
		try {
			this.state = 112;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case wktParser.DECIMAL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 107;
				this.point();
				}
				break;
			case wktParser.LPAR:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 108;
				this.match(wktParser.LPAR);
				this.state = 109;
				this.point();
				this.state = 110;
				this.match(wktParser.RPAR);
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
	public polygon(): PolygonContext {
		let _localctx: PolygonContext = new PolygonContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, wktParser.RULE_polygon);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 114;
			this.match(wktParser.LPAR);
			this.state = 115;
			this.lineString();
			this.state = 120;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === wktParser.COMMA) {
				{
				{
				this.state = 116;
				this.match(wktParser.COMMA);
				this.state = 117;
				this.lineString();
				}
				}
				this.state = 122;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 123;
			this.match(wktParser.RPAR);
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
	public lineString(): LineStringContext {
		let _localctx: LineStringContext = new LineStringContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, wktParser.RULE_lineString);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 125;
			this.match(wktParser.LPAR);
			this.state = 126;
			this.point();
			this.state = 131;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === wktParser.COMMA) {
				{
				{
				this.state = 127;
				this.match(wktParser.COMMA);
				this.state = 128;
				this.point();
				}
				}
				this.state = 133;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 134;
			this.match(wktParser.RPAR);
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
	public point(): PointContext {
		let _localctx: PointContext = new PointContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, wktParser.RULE_point);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 137;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 136;
				this.match(wktParser.DECIMAL);
				}
				}
				this.state = 139;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === wktParser.DECIMAL);
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
	public name(): NameContext {
		let _localctx: NameContext = new NameContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, wktParser.RULE_name);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 141;
			this.match(wktParser.STRING);
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x19\x92\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x06" +
		"\x02$\n\x02\r\x02\x0E\x02%\x03\x02\x03\x02\x03\x03\x03\x03\x05\x03,\n" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x033\n\x03\x03\x04\x03" +
		"\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03" +
		"\x06\x07\x06@\n\x06\f\x06\x0E\x06C\v\x06\x03\x06\x03\x06\x03\x07\x03\x07" +
		"\x03\x07\x03\x07\x03\x07\x07\x07L\n\x07\f\x07\x0E\x07O\v\x07\x03\x07\x03" +
		"\x07\x03\b\x03\b\x03\b\x03\b\x03\b\x07\bX\n\b\f\b\x0E\b[\v\b\x03\b\x03" +
		"\b\x03\b\x05\b`\n\b\x03\t\x03\t\x03\t\x03\t\x03\t\x07\tg\n\t\f\t\x0E\t" +
		"j\v\t\x03\t\x03\t\x03\n\x03\n\x03\n\x03\n\x03\n\x05\ns\n\n\x03\v\x03\v" +
		"\x03\v\x03\v\x07\vy\n\v\f\v\x0E\v|\v\v\x03\v\x03\v\x03\f\x03\f\x03\f\x03" +
		"\f\x07\f\x84\n\f\f\f\x0E\f\x87\v\f\x03\f\x03\f\x03\r\x06\r\x8C\n\r\r\r" +
		"\x0E\r\x8D\x03\x0E\x03\x0E\x03\x0E\x02\x02\x02\x0F\x02\x02\x04\x02\x06" +
		"\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02" +
		"\x1A\x02\x02\x02\x02\x96\x02#\x03\x02\x02\x02\x04)\x03\x02\x02\x02\x06" +
		"4\x03\x02\x02\x02\b7\x03\x02\x02\x02\n:\x03\x02\x02\x02\fF\x03\x02\x02" +
		"\x02\x0ER\x03\x02\x02\x02\x10a\x03\x02\x02\x02\x12r\x03\x02\x02\x02\x14" +
		"t\x03\x02\x02\x02\x16\x7F\x03\x02\x02\x02\x18\x8B\x03\x02\x02\x02\x1A" +
		"\x8F\x03\x02\x02\x02\x1C$\x05\b\x05\x02\x1D$\x05\x06\x04\x02\x1E$\x05" +
		"\x04\x03\x02\x1F$\x05\n\x06\x02 $\x05\f\x07\x02!$\x05\x0E\b\x02\"$\x05" +
		"\x10\t\x02#\x1C\x03\x02\x02\x02#\x1D\x03\x02\x02\x02#\x1E\x03\x02\x02" +
		"\x02#\x1F\x03\x02\x02\x02# \x03\x02\x02\x02#!\x03\x02\x02\x02#\"\x03\x02" +
		"\x02\x02$%\x03\x02\x02\x02%#\x03\x02\x02\x02%&\x03\x02\x02\x02&\'\x03" +
		"\x02\x02\x02\'(\x07\x02\x02\x03(\x03\x03\x02\x02\x02)2\x07\t\x02\x02*" +
		",\x05\x1A\x0E\x02+*\x03\x02\x02\x02+,\x03\x02\x02\x02,-\x03\x02\x02\x02" +
		"-.\x07\x07\x02\x02./\x05\x18\r\x02/0\x07\b\x02\x0203\x03\x02\x02\x021" +
		"3\x07\x10\x02\x022+\x03\x02\x02\x0221\x03\x02\x02\x023\x05\x03\x02\x02" +
		"\x0245\x07\n\x02\x0256\x05\x16\f\x026\x07\x03\x02\x02\x0278\x07\v\x02" +
		"\x0289\x05\x14\v\x029\t\x03\x02\x02\x02:;\x07\f\x02\x02;<\x07\x07\x02" +
		"\x02<A\x05\x12\n\x02=>\x07\x06\x02\x02>@\x05\x12\n\x02?=\x03\x02\x02\x02" +
		"@C\x03\x02\x02\x02A?\x03\x02\x02\x02AB\x03\x02\x02\x02BD\x03\x02\x02\x02" +
		"CA\x03\x02\x02\x02DE\x07\b\x02\x02E\v\x03\x02\x02\x02FG\x07\r\x02\x02" +
		"GH\x07\x07\x02\x02HM\x05\x16\f\x02IJ\x07\x06\x02\x02JL\x05\x16\f\x02K" +
		"I\x03\x02\x02\x02LO\x03\x02\x02\x02MK\x03\x02\x02\x02MN\x03\x02\x02\x02" +
		"NP\x03\x02\x02\x02OM\x03\x02\x02\x02PQ\x07\b\x02\x02Q\r\x03\x02\x02\x02" +
		"R_\x07\x0E\x02\x02ST\x07\x07\x02\x02TY\x05\x14\v\x02UV\x07\x06\x02\x02" +
		"VX\x05\x14\v\x02WU\x03\x02\x02\x02X[\x03\x02\x02\x02YW\x03\x02\x02\x02" +
		"YZ\x03\x02\x02\x02Z\\\x03\x02\x02\x02[Y\x03\x02\x02\x02\\]\x07\b\x02\x02" +
		"]`\x03\x02\x02\x02^`\x07\x10\x02\x02_S\x03\x02\x02\x02_^\x03\x02\x02\x02" +
		"`\x0F\x03\x02\x02\x02ab\x07\x11\x02\x02bc\x07\x07\x02\x02ch\x05\x18\r" +
		"\x02de\x07\x06\x02\x02eg\x05\x18\r\x02fd\x03\x02\x02\x02gj\x03\x02\x02" +
		"\x02hf\x03\x02\x02\x02hi\x03\x02\x02\x02ik\x03\x02\x02\x02jh\x03\x02\x02" +
		"\x02kl\x07\b\x02\x02l\x11\x03\x02\x02\x02ms\x05\x18\r\x02no\x07\x07\x02" +
		"\x02op\x05\x18\r\x02pq\x07\b\x02\x02qs\x03\x02\x02\x02rm\x03\x02\x02\x02" +
		"rn\x03\x02\x02\x02s\x13\x03\x02\x02\x02tu\x07\x07\x02\x02uz\x05\x16\f" +
		"\x02vw\x07\x06\x02\x02wy\x05\x16\f\x02xv\x03\x02\x02\x02y|\x03\x02\x02" +
		"\x02zx\x03\x02\x02\x02z{\x03\x02\x02\x02{}\x03\x02\x02\x02|z\x03\x02\x02" +
		"\x02}~\x07\b\x02\x02~\x15\x03\x02\x02\x02\x7F\x80\x07\x07\x02\x02\x80" +
		"\x85\x05\x18\r\x02\x81\x82\x07\x06\x02\x02\x82\x84\x05\x18\r\x02\x83\x81" +
		"\x03\x02\x02\x02\x84\x87\x03\x02\x02\x02\x85\x83\x03\x02\x02\x02\x85\x86" +
		"\x03\x02\x02\x02\x86\x88\x03\x02\x02\x02\x87\x85\x03\x02\x02\x02\x88\x89" +
		"\x07\b\x02\x02\x89\x17\x03\x02\x02\x02\x8A\x8C\x07\x03\x02\x02\x8B\x8A" +
		"\x03\x02\x02\x02\x8C\x8D\x03\x02\x02\x02\x8D\x8B\x03\x02\x02\x02\x8D\x8E" +
		"\x03\x02\x02\x02\x8E\x19\x03\x02\x02\x02\x8F\x90\x07\x18\x02\x02\x90\x1B" +
		"\x03\x02\x02\x02\x0F#%+2AMY_hrz\x85\x8D";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!wktParser.__ATN) {
			wktParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(wktParser._serializedATN));
		}

		return wktParser.__ATN;
	}

}

export class GeometryContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(wktParser.EOF, 0); }
	public polygonGeometry(): PolygonGeometryContext[];
	public polygonGeometry(i: number): PolygonGeometryContext;
	public polygonGeometry(i?: number): PolygonGeometryContext | PolygonGeometryContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PolygonGeometryContext);
		} else {
			return this.getRuleContext(i, PolygonGeometryContext);
		}
	}
	public lineStringGeometry(): LineStringGeometryContext[];
	public lineStringGeometry(i: number): LineStringGeometryContext;
	public lineStringGeometry(i?: number): LineStringGeometryContext | LineStringGeometryContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LineStringGeometryContext);
		} else {
			return this.getRuleContext(i, LineStringGeometryContext);
		}
	}
	public pointGeometry(): PointGeometryContext[];
	public pointGeometry(i: number): PointGeometryContext;
	public pointGeometry(i?: number): PointGeometryContext | PointGeometryContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PointGeometryContext);
		} else {
			return this.getRuleContext(i, PointGeometryContext);
		}
	}
	public multiPointGeometry(): MultiPointGeometryContext[];
	public multiPointGeometry(i: number): MultiPointGeometryContext;
	public multiPointGeometry(i?: number): MultiPointGeometryContext | MultiPointGeometryContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MultiPointGeometryContext);
		} else {
			return this.getRuleContext(i, MultiPointGeometryContext);
		}
	}
	public multiLineStringGeometry(): MultiLineStringGeometryContext[];
	public multiLineStringGeometry(i: number): MultiLineStringGeometryContext;
	public multiLineStringGeometry(i?: number): MultiLineStringGeometryContext | MultiLineStringGeometryContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MultiLineStringGeometryContext);
		} else {
			return this.getRuleContext(i, MultiLineStringGeometryContext);
		}
	}
	public multiPolygonGeometry(): MultiPolygonGeometryContext[];
	public multiPolygonGeometry(i: number): MultiPolygonGeometryContext;
	public multiPolygonGeometry(i?: number): MultiPolygonGeometryContext | MultiPolygonGeometryContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MultiPolygonGeometryContext);
		} else {
			return this.getRuleContext(i, MultiPolygonGeometryContext);
		}
	}
	public circularStringGeometry(): CircularStringGeometryContext[];
	public circularStringGeometry(i: number): CircularStringGeometryContext;
	public circularStringGeometry(i?: number): CircularStringGeometryContext | CircularStringGeometryContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CircularStringGeometryContext);
		} else {
			return this.getRuleContext(i, CircularStringGeometryContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return wktParser.RULE_geometry; }
	// @Override
	public enterRule(listener: wktListener): void {
		if (listener.enterGeometry) {
			listener.enterGeometry(this);
		}
	}
	// @Override
	public exitRule(listener: wktListener): void {
		if (listener.exitGeometry) {
			listener.exitGeometry(this);
		}
	}
	// @Override
	public accept<Result>(visitor: wktVisitor<Result>): Result {
		if (visitor.visitGeometry) {
			return visitor.visitGeometry(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PointGeometryContext extends ParserRuleContext {
	public POINT(): TerminalNode { return this.getToken(wktParser.POINT, 0); }
	public EMPTY(): TerminalNode | undefined { return this.tryGetToken(wktParser.EMPTY, 0); }
	public LPAR(): TerminalNode | undefined { return this.tryGetToken(wktParser.LPAR, 0); }
	public point(): PointContext | undefined {
		return this.tryGetRuleContext(0, PointContext);
	}
	public RPAR(): TerminalNode | undefined { return this.tryGetToken(wktParser.RPAR, 0); }
	public name(): NameContext | undefined {
		return this.tryGetRuleContext(0, NameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return wktParser.RULE_pointGeometry; }
	// @Override
	public enterRule(listener: wktListener): void {
		if (listener.enterPointGeometry) {
			listener.enterPointGeometry(this);
		}
	}
	// @Override
	public exitRule(listener: wktListener): void {
		if (listener.exitPointGeometry) {
			listener.exitPointGeometry(this);
		}
	}
	// @Override
	public accept<Result>(visitor: wktVisitor<Result>): Result {
		if (visitor.visitPointGeometry) {
			return visitor.visitPointGeometry(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LineStringGeometryContext extends ParserRuleContext {
	public LINESTRING(): TerminalNode { return this.getToken(wktParser.LINESTRING, 0); }
	public lineString(): LineStringContext {
		return this.getRuleContext(0, LineStringContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return wktParser.RULE_lineStringGeometry; }
	// @Override
	public enterRule(listener: wktListener): void {
		if (listener.enterLineStringGeometry) {
			listener.enterLineStringGeometry(this);
		}
	}
	// @Override
	public exitRule(listener: wktListener): void {
		if (listener.exitLineStringGeometry) {
			listener.exitLineStringGeometry(this);
		}
	}
	// @Override
	public accept<Result>(visitor: wktVisitor<Result>): Result {
		if (visitor.visitLineStringGeometry) {
			return visitor.visitLineStringGeometry(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PolygonGeometryContext extends ParserRuleContext {
	public POLYGON(): TerminalNode { return this.getToken(wktParser.POLYGON, 0); }
	public polygon(): PolygonContext {
		return this.getRuleContext(0, PolygonContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return wktParser.RULE_polygonGeometry; }
	// @Override
	public enterRule(listener: wktListener): void {
		if (listener.enterPolygonGeometry) {
			listener.enterPolygonGeometry(this);
		}
	}
	// @Override
	public exitRule(listener: wktListener): void {
		if (listener.exitPolygonGeometry) {
			listener.exitPolygonGeometry(this);
		}
	}
	// @Override
	public accept<Result>(visitor: wktVisitor<Result>): Result {
		if (visitor.visitPolygonGeometry) {
			return visitor.visitPolygonGeometry(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MultiPointGeometryContext extends ParserRuleContext {
	public MULTIPOINT(): TerminalNode { return this.getToken(wktParser.MULTIPOINT, 0); }
	public LPAR(): TerminalNode { return this.getToken(wktParser.LPAR, 0); }
	public pointOrClosedPoint(): PointOrClosedPointContext[];
	public pointOrClosedPoint(i: number): PointOrClosedPointContext;
	public pointOrClosedPoint(i?: number): PointOrClosedPointContext | PointOrClosedPointContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PointOrClosedPointContext);
		} else {
			return this.getRuleContext(i, PointOrClosedPointContext);
		}
	}
	public RPAR(): TerminalNode { return this.getToken(wktParser.RPAR, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(wktParser.COMMA);
		} else {
			return this.getToken(wktParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return wktParser.RULE_multiPointGeometry; }
	// @Override
	public enterRule(listener: wktListener): void {
		if (listener.enterMultiPointGeometry) {
			listener.enterMultiPointGeometry(this);
		}
	}
	// @Override
	public exitRule(listener: wktListener): void {
		if (listener.exitMultiPointGeometry) {
			listener.exitMultiPointGeometry(this);
		}
	}
	// @Override
	public accept<Result>(visitor: wktVisitor<Result>): Result {
		if (visitor.visitMultiPointGeometry) {
			return visitor.visitMultiPointGeometry(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MultiLineStringGeometryContext extends ParserRuleContext {
	public MULTILINESTRING(): TerminalNode { return this.getToken(wktParser.MULTILINESTRING, 0); }
	public LPAR(): TerminalNode { return this.getToken(wktParser.LPAR, 0); }
	public lineString(): LineStringContext[];
	public lineString(i: number): LineStringContext;
	public lineString(i?: number): LineStringContext | LineStringContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LineStringContext);
		} else {
			return this.getRuleContext(i, LineStringContext);
		}
	}
	public RPAR(): TerminalNode { return this.getToken(wktParser.RPAR, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(wktParser.COMMA);
		} else {
			return this.getToken(wktParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return wktParser.RULE_multiLineStringGeometry; }
	// @Override
	public enterRule(listener: wktListener): void {
		if (listener.enterMultiLineStringGeometry) {
			listener.enterMultiLineStringGeometry(this);
		}
	}
	// @Override
	public exitRule(listener: wktListener): void {
		if (listener.exitMultiLineStringGeometry) {
			listener.exitMultiLineStringGeometry(this);
		}
	}
	// @Override
	public accept<Result>(visitor: wktVisitor<Result>): Result {
		if (visitor.visitMultiLineStringGeometry) {
			return visitor.visitMultiLineStringGeometry(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MultiPolygonGeometryContext extends ParserRuleContext {
	public MULTIPOLYGON(): TerminalNode { return this.getToken(wktParser.MULTIPOLYGON, 0); }
	public EMPTY(): TerminalNode | undefined { return this.tryGetToken(wktParser.EMPTY, 0); }
	public LPAR(): TerminalNode | undefined { return this.tryGetToken(wktParser.LPAR, 0); }
	public polygon(): PolygonContext[];
	public polygon(i: number): PolygonContext;
	public polygon(i?: number): PolygonContext | PolygonContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PolygonContext);
		} else {
			return this.getRuleContext(i, PolygonContext);
		}
	}
	public RPAR(): TerminalNode | undefined { return this.tryGetToken(wktParser.RPAR, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(wktParser.COMMA);
		} else {
			return this.getToken(wktParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return wktParser.RULE_multiPolygonGeometry; }
	// @Override
	public enterRule(listener: wktListener): void {
		if (listener.enterMultiPolygonGeometry) {
			listener.enterMultiPolygonGeometry(this);
		}
	}
	// @Override
	public exitRule(listener: wktListener): void {
		if (listener.exitMultiPolygonGeometry) {
			listener.exitMultiPolygonGeometry(this);
		}
	}
	// @Override
	public accept<Result>(visitor: wktVisitor<Result>): Result {
		if (visitor.visitMultiPolygonGeometry) {
			return visitor.visitMultiPolygonGeometry(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CircularStringGeometryContext extends ParserRuleContext {
	public CIRCULARSTRING(): TerminalNode { return this.getToken(wktParser.CIRCULARSTRING, 0); }
	public LPAR(): TerminalNode { return this.getToken(wktParser.LPAR, 0); }
	public point(): PointContext[];
	public point(i: number): PointContext;
	public point(i?: number): PointContext | PointContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PointContext);
		} else {
			return this.getRuleContext(i, PointContext);
		}
	}
	public RPAR(): TerminalNode { return this.getToken(wktParser.RPAR, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(wktParser.COMMA);
		} else {
			return this.getToken(wktParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return wktParser.RULE_circularStringGeometry; }
	// @Override
	public enterRule(listener: wktListener): void {
		if (listener.enterCircularStringGeometry) {
			listener.enterCircularStringGeometry(this);
		}
	}
	// @Override
	public exitRule(listener: wktListener): void {
		if (listener.exitCircularStringGeometry) {
			listener.exitCircularStringGeometry(this);
		}
	}
	// @Override
	public accept<Result>(visitor: wktVisitor<Result>): Result {
		if (visitor.visitCircularStringGeometry) {
			return visitor.visitCircularStringGeometry(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PointOrClosedPointContext extends ParserRuleContext {
	public point(): PointContext {
		return this.getRuleContext(0, PointContext);
	}
	public LPAR(): TerminalNode | undefined { return this.tryGetToken(wktParser.LPAR, 0); }
	public RPAR(): TerminalNode | undefined { return this.tryGetToken(wktParser.RPAR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return wktParser.RULE_pointOrClosedPoint; }
	// @Override
	public enterRule(listener: wktListener): void {
		if (listener.enterPointOrClosedPoint) {
			listener.enterPointOrClosedPoint(this);
		}
	}
	// @Override
	public exitRule(listener: wktListener): void {
		if (listener.exitPointOrClosedPoint) {
			listener.exitPointOrClosedPoint(this);
		}
	}
	// @Override
	public accept<Result>(visitor: wktVisitor<Result>): Result {
		if (visitor.visitPointOrClosedPoint) {
			return visitor.visitPointOrClosedPoint(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PolygonContext extends ParserRuleContext {
	public LPAR(): TerminalNode { return this.getToken(wktParser.LPAR, 0); }
	public lineString(): LineStringContext[];
	public lineString(i: number): LineStringContext;
	public lineString(i?: number): LineStringContext | LineStringContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LineStringContext);
		} else {
			return this.getRuleContext(i, LineStringContext);
		}
	}
	public RPAR(): TerminalNode { return this.getToken(wktParser.RPAR, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(wktParser.COMMA);
		} else {
			return this.getToken(wktParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return wktParser.RULE_polygon; }
	// @Override
	public enterRule(listener: wktListener): void {
		if (listener.enterPolygon) {
			listener.enterPolygon(this);
		}
	}
	// @Override
	public exitRule(listener: wktListener): void {
		if (listener.exitPolygon) {
			listener.exitPolygon(this);
		}
	}
	// @Override
	public accept<Result>(visitor: wktVisitor<Result>): Result {
		if (visitor.visitPolygon) {
			return visitor.visitPolygon(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LineStringContext extends ParserRuleContext {
	public LPAR(): TerminalNode { return this.getToken(wktParser.LPAR, 0); }
	public point(): PointContext[];
	public point(i: number): PointContext;
	public point(i?: number): PointContext | PointContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PointContext);
		} else {
			return this.getRuleContext(i, PointContext);
		}
	}
	public RPAR(): TerminalNode { return this.getToken(wktParser.RPAR, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(wktParser.COMMA);
		} else {
			return this.getToken(wktParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return wktParser.RULE_lineString; }
	// @Override
	public enterRule(listener: wktListener): void {
		if (listener.enterLineString) {
			listener.enterLineString(this);
		}
	}
	// @Override
	public exitRule(listener: wktListener): void {
		if (listener.exitLineString) {
			listener.exitLineString(this);
		}
	}
	// @Override
	public accept<Result>(visitor: wktVisitor<Result>): Result {
		if (visitor.visitLineString) {
			return visitor.visitLineString(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PointContext extends ParserRuleContext {
	public DECIMAL(): TerminalNode[];
	public DECIMAL(i: number): TerminalNode;
	public DECIMAL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(wktParser.DECIMAL);
		} else {
			return this.getToken(wktParser.DECIMAL, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return wktParser.RULE_point; }
	// @Override
	public enterRule(listener: wktListener): void {
		if (listener.enterPoint) {
			listener.enterPoint(this);
		}
	}
	// @Override
	public exitRule(listener: wktListener): void {
		if (listener.exitPoint) {
			listener.exitPoint(this);
		}
	}
	// @Override
	public accept<Result>(visitor: wktVisitor<Result>): Result {
		if (visitor.visitPoint) {
			return visitor.visitPoint(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NameContext extends ParserRuleContext {
	public STRING(): TerminalNode { return this.getToken(wktParser.STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return wktParser.RULE_name; }
	// @Override
	public enterRule(listener: wktListener): void {
		if (listener.enterName) {
			listener.enterName(this);
		}
	}
	// @Override
	public exitRule(listener: wktListener): void {
		if (listener.exitName) {
			listener.exitName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: wktVisitor<Result>): Result {
		if (visitor.visitName) {
			return visitor.visitName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


