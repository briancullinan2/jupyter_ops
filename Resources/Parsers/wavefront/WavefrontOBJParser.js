"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/wavefront/WavefrontOBJ.g4 by ANTLR 4.7.3-SNAPSHOT
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
var Token_1 = require("antlr4ts/Token");
var VocabularyImpl_1 = require("antlr4ts/VocabularyImpl");
var Utils = require("antlr4ts/misc/Utils");
var WavefrontOBJParser = /** @class */ (function (_super) {
    __extends(WavefrontOBJParser, _super);
    function WavefrontOBJParser(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new ParserATNSimulator_1.ParserATNSimulator(WavefrontOBJParser._ATN, _this);
        return _this;
    }
    Object.defineProperty(WavefrontOBJParser.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return WavefrontOBJParser.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WavefrontOBJParser.prototype, "grammarFileName", {
        // tslint:enable:no-trailing-whitespace
        // @Override
        get: function () { return "WavefrontOBJ.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WavefrontOBJParser.prototype, "ruleNames", {
        // @Override
        get: function () { return WavefrontOBJParser.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WavefrontOBJParser.prototype, "serializedATN", {
        // @Override
        get: function () { return WavefrontOBJParser._serializedATN; },
        enumerable: true,
        configurable: true
    });
    // @RuleVersion(0)
    WavefrontOBJParser.prototype.start = function () {
        var _localctx = new StartContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, WavefrontOBJParser.RULE_start);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 17;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 16;
                            this.line();
                        }
                    }
                    this.state = 19;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (((((_la - 6)) & ~0x1F) === 0 && ((1 << (_la - 6)) & ((1 << (WavefrontOBJParser.GEOMETRIC_VERTEX - 6)) | (1 << (WavefrontOBJParser.TEXTURE_VERTEX - 6)) | (1 << (WavefrontOBJParser.VERTEX_NORMAL - 6)) | (1 << (WavefrontOBJParser.PARAMETER_SPACE_VERTEX - 6)) | (1 << (WavefrontOBJParser.FACE - 6)) | (1 << (WavefrontOBJParser.SMOOTHING_GROUP - 6)) | (1 << (WavefrontOBJParser.OBJECT_NAME - 6)) | (1 << (WavefrontOBJParser.MATERIAL_NAME - 6)) | (1 << (WavefrontOBJParser.MATERIAL_LIBRARY - 6)))) !== 0));
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
    WavefrontOBJParser.prototype.line = function () {
        var _localctx = new LineContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, WavefrontOBJParser.RULE_line);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 27;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case WavefrontOBJParser.GEOMETRIC_VERTEX:
                    case WavefrontOBJParser.TEXTURE_VERTEX:
                    case WavefrontOBJParser.VERTEX_NORMAL:
                    case WavefrontOBJParser.PARAMETER_SPACE_VERTEX:
                        {
                            this.state = 21;
                            this.vertex();
                        }
                        break;
                    case WavefrontOBJParser.FACE:
                        {
                            this.state = 22;
                            this.face();
                        }
                        break;
                    case WavefrontOBJParser.MATERIAL_LIBRARY:
                        {
                            this.state = 23;
                            this.mtllib();
                        }
                        break;
                    case WavefrontOBJParser.OBJECT_NAME:
                        {
                            this.state = 24;
                            this.object();
                        }
                        break;
                    case WavefrontOBJParser.MATERIAL_NAME:
                        {
                            this.state = 25;
                            this.use_material();
                        }
                        break;
                    case WavefrontOBJParser.SMOOTHING_GROUP:
                        {
                            this.state = 26;
                            this.group();
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
                this.state = 30;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === WavefrontOBJParser.T__0) {
                    {
                        this.state = 29;
                        this.match(WavefrontOBJParser.T__0);
                    }
                }
                this.state = 32;
                this.match(WavefrontOBJParser.T__1);
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
    WavefrontOBJParser.prototype.face = function () {
        var _localctx = new FaceContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, WavefrontOBJParser.RULE_face);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 34;
                this.match(WavefrontOBJParser.FACE);
                this.state = 36;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 35;
                            this.match(WavefrontOBJParser.INTEGER);
                        }
                    }
                    this.state = 38;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (_la === WavefrontOBJParser.INTEGER);
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
    WavefrontOBJParser.prototype.vertex = function () {
        var _localctx = new VertexContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, WavefrontOBJParser.RULE_vertex);
        var _la;
        try {
            this.state = 47;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case WavefrontOBJParser.GEOMETRIC_VERTEX:
                case WavefrontOBJParser.TEXTURE_VERTEX:
                case WavefrontOBJParser.VERTEX_NORMAL:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        {
                            this.state = 40;
                            _la = this._input.LA(1);
                            if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << WavefrontOBJParser.GEOMETRIC_VERTEX) | (1 << WavefrontOBJParser.TEXTURE_VERTEX) | (1 << WavefrontOBJParser.VERTEX_NORMAL))) !== 0))) {
                                this._errHandler.recoverInline(this);
                            }
                            else {
                                if (this._input.LA(1) === Token_1.Token.EOF) {
                                    this.matchedEOF = true;
                                }
                                this._errHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 41;
                            this.match(WavefrontOBJParser.DECIMAL);
                            this.state = 42;
                            this.match(WavefrontOBJParser.DECIMAL);
                            this.state = 43;
                            this.match(WavefrontOBJParser.DECIMAL);
                        }
                    }
                    break;
                case WavefrontOBJParser.PARAMETER_SPACE_VERTEX:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        {
                            this.state = 44;
                            this.match(WavefrontOBJParser.PARAMETER_SPACE_VERTEX);
                            this.state = 45;
                            this.match(WavefrontOBJParser.DECIMAL);
                            this.state = 46;
                            this.match(WavefrontOBJParser.DECIMAL);
                        }
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
    WavefrontOBJParser.prototype.mtllib = function () {
        var _localctx = new MtllibContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, WavefrontOBJParser.RULE_mtllib);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 49;
                this.match(WavefrontOBJParser.MATERIAL_LIBRARY);
                this.state = 50;
                _localctx._a = this.match(WavefrontOBJParser.NAME);
                this.state = 51;
                this.match(WavefrontOBJParser.T__2);
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
    WavefrontOBJParser.prototype.object = function () {
        var _localctx = new ObjectContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, WavefrontOBJParser.RULE_object);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 53;
                this.match(WavefrontOBJParser.OBJECT_NAME);
                this.state = 54;
                this.match(WavefrontOBJParser.NAME);
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
    WavefrontOBJParser.prototype.use_material = function () {
        var _localctx = new Use_materialContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, WavefrontOBJParser.RULE_use_material);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 56;
                this.match(WavefrontOBJParser.MATERIAL_NAME);
                this.state = 57;
                this.match(WavefrontOBJParser.NAME);
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
    WavefrontOBJParser.prototype.group = function () {
        var _localctx = new GroupContext(this._ctx, this.state);
        this.enterRule(_localctx, 14, WavefrontOBJParser.RULE_group);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 59;
                this.match(WavefrontOBJParser.SMOOTHING_GROUP);
                this.state = 60;
                _la = this._input.LA(1);
                if (!(_la === WavefrontOBJParser.T__3 || _la === WavefrontOBJParser.T__4)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
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
    Object.defineProperty(WavefrontOBJParser, "_ATN", {
        get: function () {
            if (!WavefrontOBJParser.__ATN) {
                WavefrontOBJParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(WavefrontOBJParser._serializedATN));
            }
            return WavefrontOBJParser.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    WavefrontOBJParser.T__0 = 1;
    WavefrontOBJParser.T__1 = 2;
    WavefrontOBJParser.T__2 = 3;
    WavefrontOBJParser.T__3 = 4;
    WavefrontOBJParser.T__4 = 5;
    WavefrontOBJParser.GEOMETRIC_VERTEX = 6;
    WavefrontOBJParser.TEXTURE_VERTEX = 7;
    WavefrontOBJParser.VERTEX_NORMAL = 8;
    WavefrontOBJParser.PARAMETER_SPACE_VERTEX = 9;
    WavefrontOBJParser.DEGREE = 10;
    WavefrontOBJParser.BASIS_MATRIX = 11;
    WavefrontOBJParser.STEP_SIZE = 12;
    WavefrontOBJParser.CURVE_SURF_TYPE = 13;
    WavefrontOBJParser.POINT = 14;
    WavefrontOBJParser.LINE = 15;
    WavefrontOBJParser.FACE = 16;
    WavefrontOBJParser.CURVE = 17;
    WavefrontOBJParser.CURVE2D = 18;
    WavefrontOBJParser.SURF = 19;
    WavefrontOBJParser.PARAM = 20;
    WavefrontOBJParser.OUTER_TRIMMING_HOLE = 21;
    WavefrontOBJParser.INNER_TRIMMING_HOLE = 22;
    WavefrontOBJParser.SPECIAL_CURVE = 23;
    WavefrontOBJParser.SPECIAL_POINT = 24;
    WavefrontOBJParser.END = 25;
    WavefrontOBJParser.CONNECT = 26;
    WavefrontOBJParser.GROUP_NAME = 27;
    WavefrontOBJParser.SMOOTHING_GROUP = 28;
    WavefrontOBJParser.MERGING_GROUP = 29;
    WavefrontOBJParser.OBJECT_NAME = 30;
    WavefrontOBJParser.BEVEL_INTERPOLATION = 31;
    WavefrontOBJParser.COLOR_INTERPOLATION = 32;
    WavefrontOBJParser.DISSOLVE_INTERPOLATION = 33;
    WavefrontOBJParser.LEVEL_OF_DETAIL = 34;
    WavefrontOBJParser.MATERIAL_NAME = 35;
    WavefrontOBJParser.MATERIAL_LIBRARY = 36;
    WavefrontOBJParser.SHADOW_CASTING = 37;
    WavefrontOBJParser.RAY_TRACING = 38;
    WavefrontOBJParser.CURVE_APPROX = 39;
    WavefrontOBJParser.SURF_APPROX = 40;
    WavefrontOBJParser.INTEGER = 41;
    WavefrontOBJParser.DECIMAL = 42;
    WavefrontOBJParser.COMMENT = 43;
    WavefrontOBJParser.NAME = 44;
    WavefrontOBJParser.WS = 45;
    WavefrontOBJParser.RULE_start = 0;
    WavefrontOBJParser.RULE_line = 1;
    WavefrontOBJParser.RULE_face = 2;
    WavefrontOBJParser.RULE_vertex = 3;
    WavefrontOBJParser.RULE_mtllib = 4;
    WavefrontOBJParser.RULE_object = 5;
    WavefrontOBJParser.RULE_use_material = 6;
    WavefrontOBJParser.RULE_group = 7;
    // tslint:disable:no-trailing-whitespace
    WavefrontOBJParser.ruleNames = [
        "start", "line", "face", "vertex", "mtllib", "object", "use_material",
        "group",
    ];
    WavefrontOBJParser._LITERAL_NAMES = [
        undefined, "'\r'", "'\n'", "'.mtl'", "'on'", "'off'", "'v'", "'vt'", "'vn'",
        "'vp'", "'deg'", "'bmat'", "'step'", "'cstype'", "'p'", "'l'", "'f'",
        "'curv'", "'curv2'", "'surf'", "'parm'", "'trim'", "'hole'", "'scrv'",
        "'sp'", "'end'", "'con'", "'g'", "'s'", "'mg'", "'o'", "'bevel'", "'c_interp'",
        "'d_interp'", "'lod'", "'usemtl'", "'mtllib'", "'shadow_obj'", "'trace_obj'",
        "'ctech'", "'stech'",
    ];
    WavefrontOBJParser._SYMBOLIC_NAMES = [
        undefined, undefined, undefined, undefined, undefined, undefined, "GEOMETRIC_VERTEX",
        "TEXTURE_VERTEX", "VERTEX_NORMAL", "PARAMETER_SPACE_VERTEX", "DEGREE",
        "BASIS_MATRIX", "STEP_SIZE", "CURVE_SURF_TYPE", "POINT", "LINE", "FACE",
        "CURVE", "CURVE2D", "SURF", "PARAM", "OUTER_TRIMMING_HOLE", "INNER_TRIMMING_HOLE",
        "SPECIAL_CURVE", "SPECIAL_POINT", "END", "CONNECT", "GROUP_NAME", "SMOOTHING_GROUP",
        "MERGING_GROUP", "OBJECT_NAME", "BEVEL_INTERPOLATION", "COLOR_INTERPOLATION",
        "DISSOLVE_INTERPOLATION", "LEVEL_OF_DETAIL", "MATERIAL_NAME", "MATERIAL_LIBRARY",
        "SHADOW_CASTING", "RAY_TRACING", "CURVE_APPROX", "SURF_APPROX", "INTEGER",
        "DECIMAL", "COMMENT", "NAME", "WS",
    ];
    WavefrontOBJParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(WavefrontOBJParser._LITERAL_NAMES, WavefrontOBJParser._SYMBOLIC_NAMES, []);
    WavefrontOBJParser._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03/A\x04\x02\t\x02" +
        "\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07\t\x07" +
        "\x04\b\t\b\x04\t\t\t\x03\x02\x06\x02\x14\n\x02\r\x02\x0E\x02\x15\x03\x03" +
        "\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03\x1E\n\x03\x03\x03\x05" +
        "\x03!\n\x03\x03\x03\x03\x03\x03\x04\x03\x04\x06\x04\'\n\x04\r\x04\x0E" +
        "\x04(\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05" +
        "2\n\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\b" +
        "\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t\x02\x02\x02\n\x02\x02\x04\x02\x06" +
        "\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x02\x04\x03\x02\b\n\x03\x02\x06" +
        "\x07\x02A\x02\x13\x03\x02\x02\x02\x04\x1D\x03\x02\x02\x02\x06$\x03\x02" +
        "\x02\x02\b1\x03\x02\x02\x02\n3\x03\x02\x02\x02\f7\x03\x02\x02\x02\x0E" +
        ":\x03\x02\x02\x02\x10=\x03\x02\x02\x02\x12\x14\x05\x04\x03\x02\x13\x12" +
        "\x03\x02\x02\x02\x14\x15\x03\x02\x02\x02\x15\x13\x03\x02\x02\x02\x15\x16" +
        "\x03\x02\x02\x02\x16\x03\x03\x02\x02\x02\x17\x1E\x05\b\x05\x02\x18\x1E" +
        "\x05\x06\x04\x02\x19\x1E\x05\n\x06\x02\x1A\x1E\x05\f\x07\x02\x1B\x1E\x05" +
        "\x0E\b\x02\x1C\x1E\x05\x10\t\x02\x1D\x17\x03\x02\x02\x02\x1D\x18\x03\x02" +
        "\x02\x02\x1D\x19\x03\x02\x02\x02\x1D\x1A\x03\x02\x02\x02\x1D\x1B\x03\x02" +
        "\x02\x02\x1D\x1C\x03\x02\x02\x02\x1E \x03\x02\x02\x02\x1F!\x07\x03\x02" +
        "\x02 \x1F\x03\x02\x02\x02 !\x03\x02\x02\x02!\"\x03\x02\x02\x02\"#\x07" +
        "\x04\x02\x02#\x05\x03\x02\x02\x02$&\x07\x12\x02\x02%\'\x07+\x02\x02&%" +
        "\x03\x02\x02\x02\'(\x03\x02\x02\x02(&\x03\x02\x02\x02()\x03\x02\x02\x02" +
        ")\x07\x03\x02\x02\x02*+\t\x02\x02\x02+,\x07,\x02\x02,-\x07,\x02\x02-2" +
        "\x07,\x02\x02./\x07\v\x02\x02/0\x07,\x02\x0202\x07,\x02\x021*\x03\x02" +
        "\x02\x021.\x03\x02\x02\x022\t\x03\x02\x02\x0234\x07&\x02\x0245\x07.\x02" +
        "\x0256\x07\x05\x02\x026\v\x03\x02\x02\x0278\x07 \x02\x0289\x07.\x02\x02" +
        "9\r\x03\x02\x02\x02:;\x07%\x02\x02;<\x07.\x02\x02<\x0F\x03\x02\x02\x02" +
        "=>\x07\x1E\x02\x02>?\t\x03\x02\x02?\x11\x03\x02\x02\x02\x07\x15\x1D (" +
        "1";
    return WavefrontOBJParser;
}(Parser_1.Parser));
exports.WavefrontOBJParser = WavefrontOBJParser;
var StartContext = /** @class */ (function (_super) {
    __extends(StartContext, _super);
    function StartContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    StartContext.prototype.line = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(LineContext);
        }
        else {
            return this.getRuleContext(i, LineContext);
        }
    };
    Object.defineProperty(StartContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return WavefrontOBJParser.RULE_start; },
        enumerable: true,
        configurable: true
    });
    // @Override
    StartContext.prototype.enterRule = function (listener) {
        if (listener.enterStart) {
            listener.enterStart(this);
        }
    };
    // @Override
    StartContext.prototype.exitRule = function (listener) {
        if (listener.exitStart) {
            listener.exitStart(this);
        }
    };
    // @Override
    StartContext.prototype.accept = function (visitor) {
        if (visitor.visitStart) {
            return visitor.visitStart(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return StartContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.StartContext = StartContext;
var LineContext = /** @class */ (function (_super) {
    __extends(LineContext, _super);
    function LineContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    LineContext.prototype.vertex = function () {
        return this.tryGetRuleContext(0, VertexContext);
    };
    LineContext.prototype.face = function () {
        return this.tryGetRuleContext(0, FaceContext);
    };
    LineContext.prototype.mtllib = function () {
        return this.tryGetRuleContext(0, MtllibContext);
    };
    LineContext.prototype.object = function () {
        return this.tryGetRuleContext(0, ObjectContext);
    };
    LineContext.prototype.use_material = function () {
        return this.tryGetRuleContext(0, Use_materialContext);
    };
    LineContext.prototype.group = function () {
        return this.tryGetRuleContext(0, GroupContext);
    };
    Object.defineProperty(LineContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return WavefrontOBJParser.RULE_line; },
        enumerable: true,
        configurable: true
    });
    // @Override
    LineContext.prototype.enterRule = function (listener) {
        if (listener.enterLine) {
            listener.enterLine(this);
        }
    };
    // @Override
    LineContext.prototype.exitRule = function (listener) {
        if (listener.exitLine) {
            listener.exitLine(this);
        }
    };
    // @Override
    LineContext.prototype.accept = function (visitor) {
        if (visitor.visitLine) {
            return visitor.visitLine(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return LineContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.LineContext = LineContext;
var FaceContext = /** @class */ (function (_super) {
    __extends(FaceContext, _super);
    function FaceContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FaceContext.prototype.FACE = function () { return this.getToken(WavefrontOBJParser.FACE, 0); };
    FaceContext.prototype.INTEGER = function (i) {
        if (i === undefined) {
            return this.getTokens(WavefrontOBJParser.INTEGER);
        }
        else {
            return this.getToken(WavefrontOBJParser.INTEGER, i);
        }
    };
    Object.defineProperty(FaceContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return WavefrontOBJParser.RULE_face; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FaceContext.prototype.enterRule = function (listener) {
        if (listener.enterFace) {
            listener.enterFace(this);
        }
    };
    // @Override
    FaceContext.prototype.exitRule = function (listener) {
        if (listener.exitFace) {
            listener.exitFace(this);
        }
    };
    // @Override
    FaceContext.prototype.accept = function (visitor) {
        if (visitor.visitFace) {
            return visitor.visitFace(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FaceContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FaceContext = FaceContext;
var VertexContext = /** @class */ (function (_super) {
    __extends(VertexContext, _super);
    function VertexContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    VertexContext.prototype.DECIMAL = function (i) {
        if (i === undefined) {
            return this.getTokens(WavefrontOBJParser.DECIMAL);
        }
        else {
            return this.getToken(WavefrontOBJParser.DECIMAL, i);
        }
    };
    VertexContext.prototype.GEOMETRIC_VERTEX = function () { return this.tryGetToken(WavefrontOBJParser.GEOMETRIC_VERTEX, 0); };
    VertexContext.prototype.TEXTURE_VERTEX = function () { return this.tryGetToken(WavefrontOBJParser.TEXTURE_VERTEX, 0); };
    VertexContext.prototype.VERTEX_NORMAL = function () { return this.tryGetToken(WavefrontOBJParser.VERTEX_NORMAL, 0); };
    VertexContext.prototype.PARAMETER_SPACE_VERTEX = function () { return this.tryGetToken(WavefrontOBJParser.PARAMETER_SPACE_VERTEX, 0); };
    Object.defineProperty(VertexContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return WavefrontOBJParser.RULE_vertex; },
        enumerable: true,
        configurable: true
    });
    // @Override
    VertexContext.prototype.enterRule = function (listener) {
        if (listener.enterVertex) {
            listener.enterVertex(this);
        }
    };
    // @Override
    VertexContext.prototype.exitRule = function (listener) {
        if (listener.exitVertex) {
            listener.exitVertex(this);
        }
    };
    // @Override
    VertexContext.prototype.accept = function (visitor) {
        if (visitor.visitVertex) {
            return visitor.visitVertex(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return VertexContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.VertexContext = VertexContext;
var MtllibContext = /** @class */ (function (_super) {
    __extends(MtllibContext, _super);
    function MtllibContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    MtllibContext.prototype.MATERIAL_LIBRARY = function () { return this.getToken(WavefrontOBJParser.MATERIAL_LIBRARY, 0); };
    MtllibContext.prototype.NAME = function () { return this.getToken(WavefrontOBJParser.NAME, 0); };
    Object.defineProperty(MtllibContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return WavefrontOBJParser.RULE_mtllib; },
        enumerable: true,
        configurable: true
    });
    // @Override
    MtllibContext.prototype.enterRule = function (listener) {
        if (listener.enterMtllib) {
            listener.enterMtllib(this);
        }
    };
    // @Override
    MtllibContext.prototype.exitRule = function (listener) {
        if (listener.exitMtllib) {
            listener.exitMtllib(this);
        }
    };
    // @Override
    MtllibContext.prototype.accept = function (visitor) {
        if (visitor.visitMtllib) {
            return visitor.visitMtllib(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return MtllibContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.MtllibContext = MtllibContext;
var ObjectContext = /** @class */ (function (_super) {
    __extends(ObjectContext, _super);
    function ObjectContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ObjectContext.prototype.OBJECT_NAME = function () { return this.getToken(WavefrontOBJParser.OBJECT_NAME, 0); };
    ObjectContext.prototype.NAME = function () { return this.getToken(WavefrontOBJParser.NAME, 0); };
    Object.defineProperty(ObjectContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return WavefrontOBJParser.RULE_object; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ObjectContext.prototype.enterRule = function (listener) {
        if (listener.enterObject) {
            listener.enterObject(this);
        }
    };
    // @Override
    ObjectContext.prototype.exitRule = function (listener) {
        if (listener.exitObject) {
            listener.exitObject(this);
        }
    };
    // @Override
    ObjectContext.prototype.accept = function (visitor) {
        if (visitor.visitObject) {
            return visitor.visitObject(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ObjectContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ObjectContext = ObjectContext;
var Use_materialContext = /** @class */ (function (_super) {
    __extends(Use_materialContext, _super);
    function Use_materialContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Use_materialContext.prototype.MATERIAL_NAME = function () { return this.getToken(WavefrontOBJParser.MATERIAL_NAME, 0); };
    Use_materialContext.prototype.NAME = function () { return this.getToken(WavefrontOBJParser.NAME, 0); };
    Object.defineProperty(Use_materialContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return WavefrontOBJParser.RULE_use_material; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Use_materialContext.prototype.enterRule = function (listener) {
        if (listener.enterUse_material) {
            listener.enterUse_material(this);
        }
    };
    // @Override
    Use_materialContext.prototype.exitRule = function (listener) {
        if (listener.exitUse_material) {
            listener.exitUse_material(this);
        }
    };
    // @Override
    Use_materialContext.prototype.accept = function (visitor) {
        if (visitor.visitUse_material) {
            return visitor.visitUse_material(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Use_materialContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Use_materialContext = Use_materialContext;
var GroupContext = /** @class */ (function (_super) {
    __extends(GroupContext, _super);
    function GroupContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    GroupContext.prototype.SMOOTHING_GROUP = function () { return this.getToken(WavefrontOBJParser.SMOOTHING_GROUP, 0); };
    Object.defineProperty(GroupContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return WavefrontOBJParser.RULE_group; },
        enumerable: true,
        configurable: true
    });
    // @Override
    GroupContext.prototype.enterRule = function (listener) {
        if (listener.enterGroup) {
            listener.enterGroup(this);
        }
    };
    // @Override
    GroupContext.prototype.exitRule = function (listener) {
        if (listener.exitGroup) {
            listener.exitGroup(this);
        }
    };
    // @Override
    GroupContext.prototype.accept = function (visitor) {
        if (visitor.visitGroup) {
            return visitor.visitGroup(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return GroupContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.GroupContext = GroupContext;
