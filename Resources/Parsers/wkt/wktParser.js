"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/wkt/wkt.g4 by ANTLR 4.7.3-SNAPSHOT
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ATNDeserializer_1 = require("antlr4ts/atn/ATNDeserializer");
var NoViableAltException_1 = require("antlr4ts/NoViableAltException");
var Parser_1 = require("antlr4ts/Parser");
var ParserRuleContext_1 = require("antlr4ts/ParserRuleContext");
var ParserATNSimulator_1 = require("antlr4ts/atn/ParserATNSimulator");
var RecognitionException_1 = require("antlr4ts/RecognitionException");
var VocabularyImpl_1 = require("antlr4ts/VocabularyImpl");
var Utils = require("antlr4ts/misc/Utils");
var wktParser = /** @class */ (function (_super) {
    __extends(wktParser, _super);
    function wktParser(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new ParserATNSimulator_1.ParserATNSimulator(wktParser._ATN, _this);
        return _this;
    }
    Object.defineProperty(wktParser.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return wktParser.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(wktParser.prototype, "grammarFileName", {
        // tslint:enable:no-trailing-whitespace
        // @Override
        get: function () { return "wkt.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(wktParser.prototype, "ruleNames", {
        // @Override
        get: function () { return wktParser.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(wktParser.prototype, "serializedATN", {
        // @Override
        get: function () { return wktParser._serializedATN; },
        enumerable: true,
        configurable: true
    });
    // @RuleVersion(0)
    wktParser.prototype.geometry = function () {
        var _localctx = new GeometryContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, wktParser.RULE_geometry);
        var _la;
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
                                throw new NoViableAltException_1.NoViableAltException(this);
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    wktParser.prototype.pointGeometry = function () {
        var _localctx = new PointGeometryContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, wktParser.RULE_pointGeometry);
        var _la;
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
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    wktParser.prototype.lineStringGeometry = function () {
        var _localctx = new LineStringGeometryContext(this._ctx, this.state);
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    wktParser.prototype.polygonGeometry = function () {
        var _localctx = new PolygonGeometryContext(this._ctx, this.state);
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    wktParser.prototype.multiPointGeometry = function () {
        var _localctx = new MultiPointGeometryContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, wktParser.RULE_multiPointGeometry);
        var _la;
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    wktParser.prototype.multiLineStringGeometry = function () {
        var _localctx = new MultiLineStringGeometryContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, wktParser.RULE_multiLineStringGeometry);
        var _la;
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    wktParser.prototype.multiPolygonGeometry = function () {
        var _localctx = new MultiPolygonGeometryContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, wktParser.RULE_multiPolygonGeometry);
        var _la;
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
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    wktParser.prototype.circularStringGeometry = function () {
        var _localctx = new CircularStringGeometryContext(this._ctx, this.state);
        this.enterRule(_localctx, 14, wktParser.RULE_circularStringGeometry);
        var _la;
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    wktParser.prototype.pointOrClosedPoint = function () {
        var _localctx = new PointOrClosedPointContext(this._ctx, this.state);
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
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    wktParser.prototype.polygon = function () {
        var _localctx = new PolygonContext(this._ctx, this.state);
        this.enterRule(_localctx, 18, wktParser.RULE_polygon);
        var _la;
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    wktParser.prototype.lineString = function () {
        var _localctx = new LineStringContext(this._ctx, this.state);
        this.enterRule(_localctx, 20, wktParser.RULE_lineString);
        var _la;
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    wktParser.prototype.point = function () {
        var _localctx = new PointContext(this._ctx, this.state);
        this.enterRule(_localctx, 22, wktParser.RULE_point);
        var _la;
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    wktParser.prototype.name = function () {
        var _localctx = new NameContext(this._ctx, this.state);
        this.enterRule(_localctx, 24, wktParser.RULE_name);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 141;
                this.match(wktParser.STRING);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    Object.defineProperty(wktParser, "_ATN", {
        get: function () {
            if (!wktParser.__ATN) {
                wktParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(wktParser._serializedATN));
            }
            return wktParser.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    wktParser.DECIMAL = 1;
    wktParser.INTEGERPART = 2;
    wktParser.DECIMALPART = 3;
    wktParser.COMMA = 4;
    wktParser.LPAR = 5;
    wktParser.RPAR = 6;
    wktParser.POINT = 7;
    wktParser.LINESTRING = 8;
    wktParser.POLYGON = 9;
    wktParser.MULTIPOINT = 10;
    wktParser.MULTILINESTRING = 11;
    wktParser.MULTIPOLYGON = 12;
    wktParser.GEOMETRYCOLLECTION = 13;
    wktParser.EMPTY = 14;
    wktParser.CIRCULARSTRING = 15;
    wktParser.COMPOUNDCURVE = 16;
    wktParser.CURVEPOLYGON = 17;
    wktParser.MULTICURVE = 18;
    wktParser.TRIANGLE = 19;
    wktParser.TIN = 20;
    wktParser.POLYHEDRALSURFACE = 21;
    wktParser.STRING = 22;
    wktParser.WS = 23;
    wktParser.RULE_geometry = 0;
    wktParser.RULE_pointGeometry = 1;
    wktParser.RULE_lineStringGeometry = 2;
    wktParser.RULE_polygonGeometry = 3;
    wktParser.RULE_multiPointGeometry = 4;
    wktParser.RULE_multiLineStringGeometry = 5;
    wktParser.RULE_multiPolygonGeometry = 6;
    wktParser.RULE_circularStringGeometry = 7;
    wktParser.RULE_pointOrClosedPoint = 8;
    wktParser.RULE_polygon = 9;
    wktParser.RULE_lineString = 10;
    wktParser.RULE_point = 11;
    wktParser.RULE_name = 12;
    // tslint:disable:no-trailing-whitespace
    wktParser.ruleNames = [
        "geometry", "pointGeometry", "lineStringGeometry", "polygonGeometry",
        "multiPointGeometry", "multiLineStringGeometry", "multiPolygonGeometry",
        "circularStringGeometry", "pointOrClosedPoint", "polygon", "lineString",
        "point", "name",
    ];
    wktParser._LITERAL_NAMES = [
        undefined, undefined, undefined, undefined, "','", "'('", "')'",
    ];
    wktParser._SYMBOLIC_NAMES = [
        undefined, "DECIMAL", "INTEGERPART", "DECIMALPART", "COMMA", "LPAR", "RPAR",
        "POINT", "LINESTRING", "POLYGON", "MULTIPOINT", "MULTILINESTRING", "MULTIPOLYGON",
        "GEOMETRYCOLLECTION", "EMPTY", "CIRCULARSTRING", "COMPOUNDCURVE", "CURVEPOLYGON",
        "MULTICURVE", "TRIANGLE", "TIN", "POLYHEDRALSURFACE", "STRING", "WS",
    ];
    wktParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(wktParser._LITERAL_NAMES, wktParser._SYMBOLIC_NAMES, []);
    wktParser._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x19\x92\x04\x02" +
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
    return wktParser;
}(Parser_1.Parser));
exports.wktParser = wktParser;
var GeometryContext = /** @class */ (function (_super) {
    __extends(GeometryContext, _super);
    function GeometryContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    GeometryContext.prototype.EOF = function () { return this.getToken(wktParser.EOF, 0); };
    GeometryContext.prototype.polygonGeometry = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(PolygonGeometryContext);
        }
        else {
            return this.getRuleContext(i, PolygonGeometryContext);
        }
    };
    GeometryContext.prototype.lineStringGeometry = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(LineStringGeometryContext);
        }
        else {
            return this.getRuleContext(i, LineStringGeometryContext);
        }
    };
    GeometryContext.prototype.pointGeometry = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(PointGeometryContext);
        }
        else {
            return this.getRuleContext(i, PointGeometryContext);
        }
    };
    GeometryContext.prototype.multiPointGeometry = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(MultiPointGeometryContext);
        }
        else {
            return this.getRuleContext(i, MultiPointGeometryContext);
        }
    };
    GeometryContext.prototype.multiLineStringGeometry = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(MultiLineStringGeometryContext);
        }
        else {
            return this.getRuleContext(i, MultiLineStringGeometryContext);
        }
    };
    GeometryContext.prototype.multiPolygonGeometry = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(MultiPolygonGeometryContext);
        }
        else {
            return this.getRuleContext(i, MultiPolygonGeometryContext);
        }
    };
    GeometryContext.prototype.circularStringGeometry = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(CircularStringGeometryContext);
        }
        else {
            return this.getRuleContext(i, CircularStringGeometryContext);
        }
    };
    Object.defineProperty(GeometryContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return wktParser.RULE_geometry; },
        enumerable: true,
        configurable: true
    });
    // @Override
    GeometryContext.prototype.enterRule = function (listener) {
        if (listener.enterGeometry) {
            listener.enterGeometry(this);
        }
    };
    // @Override
    GeometryContext.prototype.exitRule = function (listener) {
        if (listener.exitGeometry) {
            listener.exitGeometry(this);
        }
    };
    // @Override
    GeometryContext.prototype.accept = function (visitor) {
        if (visitor.visitGeometry) {
            return visitor.visitGeometry(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return GeometryContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.GeometryContext = GeometryContext;
var PointGeometryContext = /** @class */ (function (_super) {
    __extends(PointGeometryContext, _super);
    function PointGeometryContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PointGeometryContext.prototype.POINT = function () { return this.getToken(wktParser.POINT, 0); };
    PointGeometryContext.prototype.EMPTY = function () { return this.tryGetToken(wktParser.EMPTY, 0); };
    PointGeometryContext.prototype.LPAR = function () { return this.tryGetToken(wktParser.LPAR, 0); };
    PointGeometryContext.prototype.point = function () {
        return this.tryGetRuleContext(0, PointContext);
    };
    PointGeometryContext.prototype.RPAR = function () { return this.tryGetToken(wktParser.RPAR, 0); };
    PointGeometryContext.prototype.name = function () {
        return this.tryGetRuleContext(0, NameContext);
    };
    Object.defineProperty(PointGeometryContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return wktParser.RULE_pointGeometry; },
        enumerable: true,
        configurable: true
    });
    // @Override
    PointGeometryContext.prototype.enterRule = function (listener) {
        if (listener.enterPointGeometry) {
            listener.enterPointGeometry(this);
        }
    };
    // @Override
    PointGeometryContext.prototype.exitRule = function (listener) {
        if (listener.exitPointGeometry) {
            listener.exitPointGeometry(this);
        }
    };
    // @Override
    PointGeometryContext.prototype.accept = function (visitor) {
        if (visitor.visitPointGeometry) {
            return visitor.visitPointGeometry(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PointGeometryContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PointGeometryContext = PointGeometryContext;
var LineStringGeometryContext = /** @class */ (function (_super) {
    __extends(LineStringGeometryContext, _super);
    function LineStringGeometryContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    LineStringGeometryContext.prototype.LINESTRING = function () { return this.getToken(wktParser.LINESTRING, 0); };
    LineStringGeometryContext.prototype.lineString = function () {
        return this.getRuleContext(0, LineStringContext);
    };
    Object.defineProperty(LineStringGeometryContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return wktParser.RULE_lineStringGeometry; },
        enumerable: true,
        configurable: true
    });
    // @Override
    LineStringGeometryContext.prototype.enterRule = function (listener) {
        if (listener.enterLineStringGeometry) {
            listener.enterLineStringGeometry(this);
        }
    };
    // @Override
    LineStringGeometryContext.prototype.exitRule = function (listener) {
        if (listener.exitLineStringGeometry) {
            listener.exitLineStringGeometry(this);
        }
    };
    // @Override
    LineStringGeometryContext.prototype.accept = function (visitor) {
        if (visitor.visitLineStringGeometry) {
            return visitor.visitLineStringGeometry(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return LineStringGeometryContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.LineStringGeometryContext = LineStringGeometryContext;
var PolygonGeometryContext = /** @class */ (function (_super) {
    __extends(PolygonGeometryContext, _super);
    function PolygonGeometryContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PolygonGeometryContext.prototype.POLYGON = function () { return this.getToken(wktParser.POLYGON, 0); };
    PolygonGeometryContext.prototype.polygon = function () {
        return this.getRuleContext(0, PolygonContext);
    };
    Object.defineProperty(PolygonGeometryContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return wktParser.RULE_polygonGeometry; },
        enumerable: true,
        configurable: true
    });
    // @Override
    PolygonGeometryContext.prototype.enterRule = function (listener) {
        if (listener.enterPolygonGeometry) {
            listener.enterPolygonGeometry(this);
        }
    };
    // @Override
    PolygonGeometryContext.prototype.exitRule = function (listener) {
        if (listener.exitPolygonGeometry) {
            listener.exitPolygonGeometry(this);
        }
    };
    // @Override
    PolygonGeometryContext.prototype.accept = function (visitor) {
        if (visitor.visitPolygonGeometry) {
            return visitor.visitPolygonGeometry(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PolygonGeometryContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PolygonGeometryContext = PolygonGeometryContext;
var MultiPointGeometryContext = /** @class */ (function (_super) {
    __extends(MultiPointGeometryContext, _super);
    function MultiPointGeometryContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    MultiPointGeometryContext.prototype.MULTIPOINT = function () { return this.getToken(wktParser.MULTIPOINT, 0); };
    MultiPointGeometryContext.prototype.LPAR = function () { return this.getToken(wktParser.LPAR, 0); };
    MultiPointGeometryContext.prototype.pointOrClosedPoint = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(PointOrClosedPointContext);
        }
        else {
            return this.getRuleContext(i, PointOrClosedPointContext);
        }
    };
    MultiPointGeometryContext.prototype.RPAR = function () { return this.getToken(wktParser.RPAR, 0); };
    MultiPointGeometryContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(wktParser.COMMA);
        }
        else {
            return this.getToken(wktParser.COMMA, i);
        }
    };
    Object.defineProperty(MultiPointGeometryContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return wktParser.RULE_multiPointGeometry; },
        enumerable: true,
        configurable: true
    });
    // @Override
    MultiPointGeometryContext.prototype.enterRule = function (listener) {
        if (listener.enterMultiPointGeometry) {
            listener.enterMultiPointGeometry(this);
        }
    };
    // @Override
    MultiPointGeometryContext.prototype.exitRule = function (listener) {
        if (listener.exitMultiPointGeometry) {
            listener.exitMultiPointGeometry(this);
        }
    };
    // @Override
    MultiPointGeometryContext.prototype.accept = function (visitor) {
        if (visitor.visitMultiPointGeometry) {
            return visitor.visitMultiPointGeometry(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return MultiPointGeometryContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.MultiPointGeometryContext = MultiPointGeometryContext;
var MultiLineStringGeometryContext = /** @class */ (function (_super) {
    __extends(MultiLineStringGeometryContext, _super);
    function MultiLineStringGeometryContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    MultiLineStringGeometryContext.prototype.MULTILINESTRING = function () { return this.getToken(wktParser.MULTILINESTRING, 0); };
    MultiLineStringGeometryContext.prototype.LPAR = function () { return this.getToken(wktParser.LPAR, 0); };
    MultiLineStringGeometryContext.prototype.lineString = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(LineStringContext);
        }
        else {
            return this.getRuleContext(i, LineStringContext);
        }
    };
    MultiLineStringGeometryContext.prototype.RPAR = function () { return this.getToken(wktParser.RPAR, 0); };
    MultiLineStringGeometryContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(wktParser.COMMA);
        }
        else {
            return this.getToken(wktParser.COMMA, i);
        }
    };
    Object.defineProperty(MultiLineStringGeometryContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return wktParser.RULE_multiLineStringGeometry; },
        enumerable: true,
        configurable: true
    });
    // @Override
    MultiLineStringGeometryContext.prototype.enterRule = function (listener) {
        if (listener.enterMultiLineStringGeometry) {
            listener.enterMultiLineStringGeometry(this);
        }
    };
    // @Override
    MultiLineStringGeometryContext.prototype.exitRule = function (listener) {
        if (listener.exitMultiLineStringGeometry) {
            listener.exitMultiLineStringGeometry(this);
        }
    };
    // @Override
    MultiLineStringGeometryContext.prototype.accept = function (visitor) {
        if (visitor.visitMultiLineStringGeometry) {
            return visitor.visitMultiLineStringGeometry(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return MultiLineStringGeometryContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.MultiLineStringGeometryContext = MultiLineStringGeometryContext;
var MultiPolygonGeometryContext = /** @class */ (function (_super) {
    __extends(MultiPolygonGeometryContext, _super);
    function MultiPolygonGeometryContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    MultiPolygonGeometryContext.prototype.MULTIPOLYGON = function () { return this.getToken(wktParser.MULTIPOLYGON, 0); };
    MultiPolygonGeometryContext.prototype.EMPTY = function () { return this.tryGetToken(wktParser.EMPTY, 0); };
    MultiPolygonGeometryContext.prototype.LPAR = function () { return this.tryGetToken(wktParser.LPAR, 0); };
    MultiPolygonGeometryContext.prototype.polygon = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(PolygonContext);
        }
        else {
            return this.getRuleContext(i, PolygonContext);
        }
    };
    MultiPolygonGeometryContext.prototype.RPAR = function () { return this.tryGetToken(wktParser.RPAR, 0); };
    MultiPolygonGeometryContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(wktParser.COMMA);
        }
        else {
            return this.getToken(wktParser.COMMA, i);
        }
    };
    Object.defineProperty(MultiPolygonGeometryContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return wktParser.RULE_multiPolygonGeometry; },
        enumerable: true,
        configurable: true
    });
    // @Override
    MultiPolygonGeometryContext.prototype.enterRule = function (listener) {
        if (listener.enterMultiPolygonGeometry) {
            listener.enterMultiPolygonGeometry(this);
        }
    };
    // @Override
    MultiPolygonGeometryContext.prototype.exitRule = function (listener) {
        if (listener.exitMultiPolygonGeometry) {
            listener.exitMultiPolygonGeometry(this);
        }
    };
    // @Override
    MultiPolygonGeometryContext.prototype.accept = function (visitor) {
        if (visitor.visitMultiPolygonGeometry) {
            return visitor.visitMultiPolygonGeometry(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return MultiPolygonGeometryContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.MultiPolygonGeometryContext = MultiPolygonGeometryContext;
var CircularStringGeometryContext = /** @class */ (function (_super) {
    __extends(CircularStringGeometryContext, _super);
    function CircularStringGeometryContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CircularStringGeometryContext.prototype.CIRCULARSTRING = function () { return this.getToken(wktParser.CIRCULARSTRING, 0); };
    CircularStringGeometryContext.prototype.LPAR = function () { return this.getToken(wktParser.LPAR, 0); };
    CircularStringGeometryContext.prototype.point = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(PointContext);
        }
        else {
            return this.getRuleContext(i, PointContext);
        }
    };
    CircularStringGeometryContext.prototype.RPAR = function () { return this.getToken(wktParser.RPAR, 0); };
    CircularStringGeometryContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(wktParser.COMMA);
        }
        else {
            return this.getToken(wktParser.COMMA, i);
        }
    };
    Object.defineProperty(CircularStringGeometryContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return wktParser.RULE_circularStringGeometry; },
        enumerable: true,
        configurable: true
    });
    // @Override
    CircularStringGeometryContext.prototype.enterRule = function (listener) {
        if (listener.enterCircularStringGeometry) {
            listener.enterCircularStringGeometry(this);
        }
    };
    // @Override
    CircularStringGeometryContext.prototype.exitRule = function (listener) {
        if (listener.exitCircularStringGeometry) {
            listener.exitCircularStringGeometry(this);
        }
    };
    // @Override
    CircularStringGeometryContext.prototype.accept = function (visitor) {
        if (visitor.visitCircularStringGeometry) {
            return visitor.visitCircularStringGeometry(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CircularStringGeometryContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CircularStringGeometryContext = CircularStringGeometryContext;
var PointOrClosedPointContext = /** @class */ (function (_super) {
    __extends(PointOrClosedPointContext, _super);
    function PointOrClosedPointContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PointOrClosedPointContext.prototype.point = function () {
        return this.getRuleContext(0, PointContext);
    };
    PointOrClosedPointContext.prototype.LPAR = function () { return this.tryGetToken(wktParser.LPAR, 0); };
    PointOrClosedPointContext.prototype.RPAR = function () { return this.tryGetToken(wktParser.RPAR, 0); };
    Object.defineProperty(PointOrClosedPointContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return wktParser.RULE_pointOrClosedPoint; },
        enumerable: true,
        configurable: true
    });
    // @Override
    PointOrClosedPointContext.prototype.enterRule = function (listener) {
        if (listener.enterPointOrClosedPoint) {
            listener.enterPointOrClosedPoint(this);
        }
    };
    // @Override
    PointOrClosedPointContext.prototype.exitRule = function (listener) {
        if (listener.exitPointOrClosedPoint) {
            listener.exitPointOrClosedPoint(this);
        }
    };
    // @Override
    PointOrClosedPointContext.prototype.accept = function (visitor) {
        if (visitor.visitPointOrClosedPoint) {
            return visitor.visitPointOrClosedPoint(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PointOrClosedPointContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PointOrClosedPointContext = PointOrClosedPointContext;
var PolygonContext = /** @class */ (function (_super) {
    __extends(PolygonContext, _super);
    function PolygonContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PolygonContext.prototype.LPAR = function () { return this.getToken(wktParser.LPAR, 0); };
    PolygonContext.prototype.lineString = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(LineStringContext);
        }
        else {
            return this.getRuleContext(i, LineStringContext);
        }
    };
    PolygonContext.prototype.RPAR = function () { return this.getToken(wktParser.RPAR, 0); };
    PolygonContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(wktParser.COMMA);
        }
        else {
            return this.getToken(wktParser.COMMA, i);
        }
    };
    Object.defineProperty(PolygonContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return wktParser.RULE_polygon; },
        enumerable: true,
        configurable: true
    });
    // @Override
    PolygonContext.prototype.enterRule = function (listener) {
        if (listener.enterPolygon) {
            listener.enterPolygon(this);
        }
    };
    // @Override
    PolygonContext.prototype.exitRule = function (listener) {
        if (listener.exitPolygon) {
            listener.exitPolygon(this);
        }
    };
    // @Override
    PolygonContext.prototype.accept = function (visitor) {
        if (visitor.visitPolygon) {
            return visitor.visitPolygon(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PolygonContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PolygonContext = PolygonContext;
var LineStringContext = /** @class */ (function (_super) {
    __extends(LineStringContext, _super);
    function LineStringContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    LineStringContext.prototype.LPAR = function () { return this.getToken(wktParser.LPAR, 0); };
    LineStringContext.prototype.point = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(PointContext);
        }
        else {
            return this.getRuleContext(i, PointContext);
        }
    };
    LineStringContext.prototype.RPAR = function () { return this.getToken(wktParser.RPAR, 0); };
    LineStringContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(wktParser.COMMA);
        }
        else {
            return this.getToken(wktParser.COMMA, i);
        }
    };
    Object.defineProperty(LineStringContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return wktParser.RULE_lineString; },
        enumerable: true,
        configurable: true
    });
    // @Override
    LineStringContext.prototype.enterRule = function (listener) {
        if (listener.enterLineString) {
            listener.enterLineString(this);
        }
    };
    // @Override
    LineStringContext.prototype.exitRule = function (listener) {
        if (listener.exitLineString) {
            listener.exitLineString(this);
        }
    };
    // @Override
    LineStringContext.prototype.accept = function (visitor) {
        if (visitor.visitLineString) {
            return visitor.visitLineString(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return LineStringContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.LineStringContext = LineStringContext;
var PointContext = /** @class */ (function (_super) {
    __extends(PointContext, _super);
    function PointContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PointContext.prototype.DECIMAL = function (i) {
        if (i === undefined) {
            return this.getTokens(wktParser.DECIMAL);
        }
        else {
            return this.getToken(wktParser.DECIMAL, i);
        }
    };
    Object.defineProperty(PointContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return wktParser.RULE_point; },
        enumerable: true,
        configurable: true
    });
    // @Override
    PointContext.prototype.enterRule = function (listener) {
        if (listener.enterPoint) {
            listener.enterPoint(this);
        }
    };
    // @Override
    PointContext.prototype.exitRule = function (listener) {
        if (listener.exitPoint) {
            listener.exitPoint(this);
        }
    };
    // @Override
    PointContext.prototype.accept = function (visitor) {
        if (visitor.visitPoint) {
            return visitor.visitPoint(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PointContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PointContext = PointContext;
var NameContext = /** @class */ (function (_super) {
    __extends(NameContext, _super);
    function NameContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    NameContext.prototype.STRING = function () { return this.getToken(wktParser.STRING, 0); };
    Object.defineProperty(NameContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return wktParser.RULE_name; },
        enumerable: true,
        configurable: true
    });
    // @Override
    NameContext.prototype.enterRule = function (listener) {
        if (listener.enterName) {
            listener.enterName(this);
        }
    };
    // @Override
    NameContext.prototype.exitRule = function (listener) {
        if (listener.exitName) {
            listener.exitName(this);
        }
    };
    // @Override
    NameContext.prototype.accept = function (visitor) {
        if (visitor.visitName) {
            return visitor.visitName(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return NameContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.NameContext = NameContext;
