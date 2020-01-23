"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/muddb/muddb.g4 by ANTLR 4.7.3-SNAPSHOT
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
var Parser_1 = require("antlr4ts/Parser");
var ParserRuleContext_1 = require("antlr4ts/ParserRuleContext");
var ParserATNSimulator_1 = require("antlr4ts/atn/ParserATNSimulator");
var RecognitionException_1 = require("antlr4ts/RecognitionException");
var VocabularyImpl_1 = require("antlr4ts/VocabularyImpl");
var Utils = require("antlr4ts/misc/Utils");
var muddbParser = /** @class */ (function (_super) {
    __extends(muddbParser, _super);
    function muddbParser(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new ParserATNSimulator_1.ParserATNSimulator(muddbParser._ATN, _this);
        return _this;
    }
    Object.defineProperty(muddbParser.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return muddbParser.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(muddbParser.prototype, "grammarFileName", {
        // tslint:enable:no-trailing-whitespace
        // @Override
        get: function () { return "muddb.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(muddbParser.prototype, "ruleNames", {
        // @Override
        get: function () { return muddbParser.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(muddbParser.prototype, "serializedATN", {
        // @Override
        get: function () { return muddbParser._serializedATN; },
        enumerable: true,
        configurable: true
    });
    // @RuleVersion(0)
    muddbParser.prototype.db = function () {
        var _localctx = new DbContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, muddbParser.RULE_db);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 45;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === muddbParser.STRING) {
                    {
                        {
                            this.state = 42;
                            this.room();
                        }
                    }
                    this.state = 47;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 48;
                this.match(muddbParser.END);
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
    muddbParser.prototype.room = function () {
        var _localctx = new RoomContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, muddbParser.RULE_room);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 50;
                this.roomno();
                this.state = 51;
                this.name();
                this.state = 52;
                this.description();
                this.state = 53;
                this.location();
                this.state = 54;
                this.contents();
                this.state = 55;
                this.exits();
                this.state = 56;
                this.next();
                this.state = 57;
                this.key();
                this.state = 58;
                this.fail_message();
                this.state = 59;
                this.succ_message();
                this.state = 60;
                this.ofail();
                this.state = 61;
                this.osuccess();
                this.state = 62;
                this.owner();
                this.state = 63;
                this.pennies();
                this.state = 64;
                this.flags();
                this.state = 65;
                this.password();
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
    muddbParser.prototype.roomno = function () {
        var _localctx = new RoomnoContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, muddbParser.RULE_roomno);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 67;
                this.match(muddbParser.STRING);
                this.state = 68;
                this.match(muddbParser.EOL);
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
    muddbParser.prototype.name = function () {
        var _localctx = new NameContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, muddbParser.RULE_name);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 70;
                this.string();
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
    muddbParser.prototype.description = function () {
        var _localctx = new DescriptionContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, muddbParser.RULE_description);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 72;
                this.string();
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
    muddbParser.prototype.location = function () {
        var _localctx = new LocationContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, muddbParser.RULE_location);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 74;
                this.ref();
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
    muddbParser.prototype.contents = function () {
        var _localctx = new ContentsContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, muddbParser.RULE_contents);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 76;
                this.ref();
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
    muddbParser.prototype.exits = function () {
        var _localctx = new ExitsContext(this._ctx, this.state);
        this.enterRule(_localctx, 14, muddbParser.RULE_exits);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 78;
                this.ref();
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
    muddbParser.prototype.next = function () {
        var _localctx = new NextContext(this._ctx, this.state);
        this.enterRule(_localctx, 16, muddbParser.RULE_next);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 80;
                this.ref();
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
    muddbParser.prototype.key = function () {
        var _localctx = new KeyContext(this._ctx, this.state);
        this.enterRule(_localctx, 18, muddbParser.RULE_key);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 82;
                this.bool();
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
    muddbParser.prototype.fail_message = function () {
        var _localctx = new Fail_messageContext(this._ctx, this.state);
        this.enterRule(_localctx, 20, muddbParser.RULE_fail_message);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 84;
                this.string();
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
    muddbParser.prototype.succ_message = function () {
        var _localctx = new Succ_messageContext(this._ctx, this.state);
        this.enterRule(_localctx, 22, muddbParser.RULE_succ_message);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 86;
                this.string();
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
    muddbParser.prototype.ofail = function () {
        var _localctx = new OfailContext(this._ctx, this.state);
        this.enterRule(_localctx, 24, muddbParser.RULE_ofail);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 88;
                this.string();
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
    muddbParser.prototype.osuccess = function () {
        var _localctx = new OsuccessContext(this._ctx, this.state);
        this.enterRule(_localctx, 26, muddbParser.RULE_osuccess);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 90;
                this.string();
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
    muddbParser.prototype.owner = function () {
        var _localctx = new OwnerContext(this._ctx, this.state);
        this.enterRule(_localctx, 28, muddbParser.RULE_owner);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 92;
                this.ref();
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
    muddbParser.prototype.pennies = function () {
        var _localctx = new PenniesContext(this._ctx, this.state);
        this.enterRule(_localctx, 30, muddbParser.RULE_pennies);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 94;
                this.ref();
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
    muddbParser.prototype.flags = function () {
        var _localctx = new FlagsContext(this._ctx, this.state);
        this.enterRule(_localctx, 32, muddbParser.RULE_flags);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 96;
                this.ref();
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
    muddbParser.prototype.password = function () {
        var _localctx = new PasswordContext(this._ctx, this.state);
        this.enterRule(_localctx, 34, muddbParser.RULE_password);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 98;
                this.string();
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
    muddbParser.prototype.string = function () {
        var _localctx = new StringContext(this._ctx, this.state);
        this.enterRule(_localctx, 36, muddbParser.RULE_string);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 101;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === muddbParser.STRING) {
                    {
                        this.state = 100;
                        this.match(muddbParser.STRING);
                    }
                }
                this.state = 103;
                this.match(muddbParser.EOL);
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
    muddbParser.prototype.ref = function () {
        var _localctx = new RefContext(this._ctx, this.state);
        this.enterRule(_localctx, 38, muddbParser.RULE_ref);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 106;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === muddbParser.NUM) {
                    {
                        this.state = 105;
                        this.match(muddbParser.NUM);
                    }
                }
                this.state = 108;
                this.match(muddbParser.EOL);
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
    muddbParser.prototype.bool = function () {
        var _localctx = new BoolContext(this._ctx, this.state);
        this.enterRule(_localctx, 40, muddbParser.RULE_bool);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 111;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === muddbParser.NUM) {
                    {
                        this.state = 110;
                        this.match(muddbParser.NUM);
                    }
                }
                this.state = 113;
                this.match(muddbParser.EOL);
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
    Object.defineProperty(muddbParser, "_ATN", {
        get: function () {
            if (!muddbParser.__ATN) {
                muddbParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(muddbParser._serializedATN));
            }
            return muddbParser.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    muddbParser.END = 1;
    muddbParser.NUM = 2;
    muddbParser.STRING = 3;
    muddbParser.EOL = 4;
    muddbParser.RULE_db = 0;
    muddbParser.RULE_room = 1;
    muddbParser.RULE_roomno = 2;
    muddbParser.RULE_name = 3;
    muddbParser.RULE_description = 4;
    muddbParser.RULE_location = 5;
    muddbParser.RULE_contents = 6;
    muddbParser.RULE_exits = 7;
    muddbParser.RULE_next = 8;
    muddbParser.RULE_key = 9;
    muddbParser.RULE_fail_message = 10;
    muddbParser.RULE_succ_message = 11;
    muddbParser.RULE_ofail = 12;
    muddbParser.RULE_osuccess = 13;
    muddbParser.RULE_owner = 14;
    muddbParser.RULE_pennies = 15;
    muddbParser.RULE_flags = 16;
    muddbParser.RULE_password = 17;
    muddbParser.RULE_string = 18;
    muddbParser.RULE_ref = 19;
    muddbParser.RULE_bool = 20;
    // tslint:disable:no-trailing-whitespace
    muddbParser.ruleNames = [
        "db", "room", "roomno", "name", "description", "location", "contents",
        "exits", "next", "key", "fail_message", "succ_message", "ofail", "osuccess",
        "owner", "pennies", "flags", "password", "string", "ref", "bool",
    ];
    muddbParser._LITERAL_NAMES = [
        undefined, "'***END OF DUMP***'",
    ];
    muddbParser._SYMBOLIC_NAMES = [
        undefined, "END", "NUM", "STRING", "EOL",
    ];
    muddbParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(muddbParser._LITERAL_NAMES, muddbParser._SYMBOLIC_NAMES, []);
    muddbParser._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x06v\x04\x02" +
        "\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
        "\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
        "\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
        "\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x03\x02\x07\x02." +
        "\n\x02\f\x02\x0E\x021\v\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03" +
        "\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
        "\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x03\x05\x03" +
        "\x05\x03\x06\x03\x06\x03\x07\x03\x07\x03\b\x03\b\x03\t\x03\t\x03\n\x03" +
        "\n\x03\v\x03\v\x03\f\x03\f\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0F\x03\x0F" +
        "\x03\x10\x03\x10\x03\x11\x03\x11\x03\x12\x03\x12\x03\x13\x03\x13\x03\x14" +
        "\x05\x14h\n\x14\x03\x14\x03\x14\x03\x15\x05\x15m\n\x15\x03\x15\x03\x15" +
        "\x03\x16\x05\x16r\n\x16\x03\x16\x03\x16\x03\x16\x02\x02\x02\x17\x02\x02" +
        "\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16" +
        "\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02\x02" +
        "\x02\x02d\x02/\x03\x02\x02\x02\x044\x03\x02\x02\x02\x06E\x03\x02\x02\x02" +
        "\bH\x03\x02\x02\x02\nJ\x03\x02\x02\x02\fL\x03\x02\x02\x02\x0EN\x03\x02" +
        "\x02\x02\x10P\x03\x02\x02\x02\x12R\x03\x02\x02\x02\x14T\x03\x02\x02\x02" +
        "\x16V\x03\x02\x02\x02\x18X\x03\x02\x02\x02\x1AZ\x03\x02\x02\x02\x1C\\" +
        "\x03\x02\x02\x02\x1E^\x03\x02\x02\x02 `\x03\x02\x02\x02\"b\x03\x02\x02" +
        "\x02$d\x03\x02\x02\x02&g\x03\x02\x02\x02(l\x03\x02\x02\x02*q\x03\x02\x02" +
        "\x02,.\x05\x04\x03\x02-,\x03\x02\x02\x02.1\x03\x02\x02\x02/-\x03\x02\x02" +
        "\x02/0\x03\x02\x02\x0202\x03\x02\x02\x021/\x03\x02\x02\x0223\x07\x03\x02" +
        "\x023\x03\x03\x02\x02\x0245\x05\x06\x04\x0256\x05\b\x05\x0267\x05\n\x06" +
        "\x0278\x05\f\x07\x0289\x05\x0E\b\x029:\x05\x10\t\x02:;\x05\x12\n\x02;" +
        "<\x05\x14\v\x02<=\x05\x16\f\x02=>\x05\x18\r\x02>?\x05\x1A\x0E\x02?@\x05" +
        "\x1C\x0F\x02@A\x05\x1E\x10\x02AB\x05 \x11\x02BC\x05\"\x12\x02CD\x05$\x13" +
        "\x02D\x05\x03\x02\x02\x02EF\x07\x05\x02\x02FG\x07\x06\x02\x02G\x07\x03" +
        "\x02\x02\x02HI\x05&\x14\x02I\t\x03\x02\x02\x02JK\x05&\x14\x02K\v\x03\x02" +
        "\x02\x02LM\x05(\x15\x02M\r\x03\x02\x02\x02NO\x05(\x15\x02O\x0F\x03\x02" +
        "\x02\x02PQ\x05(\x15\x02Q\x11\x03\x02\x02\x02RS\x05(\x15\x02S\x13\x03\x02" +
        "\x02\x02TU\x05*\x16\x02U\x15\x03\x02\x02\x02VW\x05&\x14\x02W\x17\x03\x02" +
        "\x02\x02XY\x05&\x14\x02Y\x19\x03\x02\x02\x02Z[\x05&\x14\x02[\x1B\x03\x02" +
        "\x02\x02\\]\x05&\x14\x02]\x1D\x03\x02\x02\x02^_\x05(\x15\x02_\x1F\x03" +
        "\x02\x02\x02`a\x05(\x15\x02a!\x03\x02\x02\x02bc\x05(\x15\x02c#\x03\x02" +
        "\x02\x02de\x05&\x14\x02e%\x03\x02\x02\x02fh\x07\x05\x02\x02gf\x03\x02" +
        "\x02\x02gh\x03\x02\x02\x02hi\x03\x02\x02\x02ij\x07\x06\x02\x02j\'\x03" +
        "\x02\x02\x02km\x07\x04\x02\x02lk\x03\x02\x02\x02lm\x03\x02\x02\x02mn\x03" +
        "\x02\x02\x02no\x07\x06\x02\x02o)\x03\x02\x02\x02pr\x07\x04\x02\x02qp\x03" +
        "\x02\x02\x02qr\x03\x02\x02\x02rs\x03\x02\x02\x02st\x07\x06\x02\x02t+\x03" +
        "\x02\x02\x02\x06/glq";
    return muddbParser;
}(Parser_1.Parser));
exports.muddbParser = muddbParser;
var DbContext = /** @class */ (function (_super) {
    __extends(DbContext, _super);
    function DbContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DbContext.prototype.END = function () { return this.getToken(muddbParser.END, 0); };
    DbContext.prototype.room = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(RoomContext);
        }
        else {
            return this.getRuleContext(i, RoomContext);
        }
    };
    Object.defineProperty(DbContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return muddbParser.RULE_db; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DbContext.prototype.enterRule = function (listener) {
        if (listener.enterDb) {
            listener.enterDb(this);
        }
    };
    // @Override
    DbContext.prototype.exitRule = function (listener) {
        if (listener.exitDb) {
            listener.exitDb(this);
        }
    };
    // @Override
    DbContext.prototype.accept = function (visitor) {
        if (visitor.visitDb) {
            return visitor.visitDb(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DbContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DbContext = DbContext;
var RoomContext = /** @class */ (function (_super) {
    __extends(RoomContext, _super);
    function RoomContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    RoomContext.prototype.roomno = function () {
        return this.getRuleContext(0, RoomnoContext);
    };
    RoomContext.prototype.name = function () {
        return this.getRuleContext(0, NameContext);
    };
    RoomContext.prototype.description = function () {
        return this.getRuleContext(0, DescriptionContext);
    };
    RoomContext.prototype.location = function () {
        return this.getRuleContext(0, LocationContext);
    };
    RoomContext.prototype.contents = function () {
        return this.getRuleContext(0, ContentsContext);
    };
    RoomContext.prototype.exits = function () {
        return this.getRuleContext(0, ExitsContext);
    };
    RoomContext.prototype.next = function () {
        return this.getRuleContext(0, NextContext);
    };
    RoomContext.prototype.key = function () {
        return this.getRuleContext(0, KeyContext);
    };
    RoomContext.prototype.fail_message = function () {
        return this.getRuleContext(0, Fail_messageContext);
    };
    RoomContext.prototype.succ_message = function () {
        return this.getRuleContext(0, Succ_messageContext);
    };
    RoomContext.prototype.ofail = function () {
        return this.getRuleContext(0, OfailContext);
    };
    RoomContext.prototype.osuccess = function () {
        return this.getRuleContext(0, OsuccessContext);
    };
    RoomContext.prototype.owner = function () {
        return this.getRuleContext(0, OwnerContext);
    };
    RoomContext.prototype.pennies = function () {
        return this.getRuleContext(0, PenniesContext);
    };
    RoomContext.prototype.flags = function () {
        return this.getRuleContext(0, FlagsContext);
    };
    RoomContext.prototype.password = function () {
        return this.getRuleContext(0, PasswordContext);
    };
    Object.defineProperty(RoomContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return muddbParser.RULE_room; },
        enumerable: true,
        configurable: true
    });
    // @Override
    RoomContext.prototype.enterRule = function (listener) {
        if (listener.enterRoom) {
            listener.enterRoom(this);
        }
    };
    // @Override
    RoomContext.prototype.exitRule = function (listener) {
        if (listener.exitRoom) {
            listener.exitRoom(this);
        }
    };
    // @Override
    RoomContext.prototype.accept = function (visitor) {
        if (visitor.visitRoom) {
            return visitor.visitRoom(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return RoomContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.RoomContext = RoomContext;
var RoomnoContext = /** @class */ (function (_super) {
    __extends(RoomnoContext, _super);
    function RoomnoContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    RoomnoContext.prototype.STRING = function () { return this.getToken(muddbParser.STRING, 0); };
    RoomnoContext.prototype.EOL = function () { return this.getToken(muddbParser.EOL, 0); };
    Object.defineProperty(RoomnoContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return muddbParser.RULE_roomno; },
        enumerable: true,
        configurable: true
    });
    // @Override
    RoomnoContext.prototype.enterRule = function (listener) {
        if (listener.enterRoomno) {
            listener.enterRoomno(this);
        }
    };
    // @Override
    RoomnoContext.prototype.exitRule = function (listener) {
        if (listener.exitRoomno) {
            listener.exitRoomno(this);
        }
    };
    // @Override
    RoomnoContext.prototype.accept = function (visitor) {
        if (visitor.visitRoomno) {
            return visitor.visitRoomno(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return RoomnoContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.RoomnoContext = RoomnoContext;
var NameContext = /** @class */ (function (_super) {
    __extends(NameContext, _super);
    function NameContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    NameContext.prototype.string = function () {
        return this.getRuleContext(0, StringContext);
    };
    Object.defineProperty(NameContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return muddbParser.RULE_name; },
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
var DescriptionContext = /** @class */ (function (_super) {
    __extends(DescriptionContext, _super);
    function DescriptionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DescriptionContext.prototype.string = function () {
        return this.getRuleContext(0, StringContext);
    };
    Object.defineProperty(DescriptionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return muddbParser.RULE_description; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DescriptionContext.prototype.enterRule = function (listener) {
        if (listener.enterDescription) {
            listener.enterDescription(this);
        }
    };
    // @Override
    DescriptionContext.prototype.exitRule = function (listener) {
        if (listener.exitDescription) {
            listener.exitDescription(this);
        }
    };
    // @Override
    DescriptionContext.prototype.accept = function (visitor) {
        if (visitor.visitDescription) {
            return visitor.visitDescription(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DescriptionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DescriptionContext = DescriptionContext;
var LocationContext = /** @class */ (function (_super) {
    __extends(LocationContext, _super);
    function LocationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    LocationContext.prototype.ref = function () {
        return this.getRuleContext(0, RefContext);
    };
    Object.defineProperty(LocationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return muddbParser.RULE_location; },
        enumerable: true,
        configurable: true
    });
    // @Override
    LocationContext.prototype.enterRule = function (listener) {
        if (listener.enterLocation) {
            listener.enterLocation(this);
        }
    };
    // @Override
    LocationContext.prototype.exitRule = function (listener) {
        if (listener.exitLocation) {
            listener.exitLocation(this);
        }
    };
    // @Override
    LocationContext.prototype.accept = function (visitor) {
        if (visitor.visitLocation) {
            return visitor.visitLocation(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return LocationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.LocationContext = LocationContext;
var ContentsContext = /** @class */ (function (_super) {
    __extends(ContentsContext, _super);
    function ContentsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ContentsContext.prototype.ref = function () {
        return this.getRuleContext(0, RefContext);
    };
    Object.defineProperty(ContentsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return muddbParser.RULE_contents; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ContentsContext.prototype.enterRule = function (listener) {
        if (listener.enterContents) {
            listener.enterContents(this);
        }
    };
    // @Override
    ContentsContext.prototype.exitRule = function (listener) {
        if (listener.exitContents) {
            listener.exitContents(this);
        }
    };
    // @Override
    ContentsContext.prototype.accept = function (visitor) {
        if (visitor.visitContents) {
            return visitor.visitContents(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ContentsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ContentsContext = ContentsContext;
var ExitsContext = /** @class */ (function (_super) {
    __extends(ExitsContext, _super);
    function ExitsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ExitsContext.prototype.ref = function () {
        return this.getRuleContext(0, RefContext);
    };
    Object.defineProperty(ExitsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return muddbParser.RULE_exits; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ExitsContext.prototype.enterRule = function (listener) {
        if (listener.enterExits) {
            listener.enterExits(this);
        }
    };
    // @Override
    ExitsContext.prototype.exitRule = function (listener) {
        if (listener.exitExits) {
            listener.exitExits(this);
        }
    };
    // @Override
    ExitsContext.prototype.accept = function (visitor) {
        if (visitor.visitExits) {
            return visitor.visitExits(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ExitsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ExitsContext = ExitsContext;
var NextContext = /** @class */ (function (_super) {
    __extends(NextContext, _super);
    function NextContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    NextContext.prototype.ref = function () {
        return this.getRuleContext(0, RefContext);
    };
    Object.defineProperty(NextContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return muddbParser.RULE_next; },
        enumerable: true,
        configurable: true
    });
    // @Override
    NextContext.prototype.enterRule = function (listener) {
        if (listener.enterNext) {
            listener.enterNext(this);
        }
    };
    // @Override
    NextContext.prototype.exitRule = function (listener) {
        if (listener.exitNext) {
            listener.exitNext(this);
        }
    };
    // @Override
    NextContext.prototype.accept = function (visitor) {
        if (visitor.visitNext) {
            return visitor.visitNext(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return NextContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.NextContext = NextContext;
var KeyContext = /** @class */ (function (_super) {
    __extends(KeyContext, _super);
    function KeyContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    KeyContext.prototype.bool = function () {
        return this.getRuleContext(0, BoolContext);
    };
    Object.defineProperty(KeyContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return muddbParser.RULE_key; },
        enumerable: true,
        configurable: true
    });
    // @Override
    KeyContext.prototype.enterRule = function (listener) {
        if (listener.enterKey) {
            listener.enterKey(this);
        }
    };
    // @Override
    KeyContext.prototype.exitRule = function (listener) {
        if (listener.exitKey) {
            listener.exitKey(this);
        }
    };
    // @Override
    KeyContext.prototype.accept = function (visitor) {
        if (visitor.visitKey) {
            return visitor.visitKey(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return KeyContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.KeyContext = KeyContext;
var Fail_messageContext = /** @class */ (function (_super) {
    __extends(Fail_messageContext, _super);
    function Fail_messageContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Fail_messageContext.prototype.string = function () {
        return this.getRuleContext(0, StringContext);
    };
    Object.defineProperty(Fail_messageContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return muddbParser.RULE_fail_message; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Fail_messageContext.prototype.enterRule = function (listener) {
        if (listener.enterFail_message) {
            listener.enterFail_message(this);
        }
    };
    // @Override
    Fail_messageContext.prototype.exitRule = function (listener) {
        if (listener.exitFail_message) {
            listener.exitFail_message(this);
        }
    };
    // @Override
    Fail_messageContext.prototype.accept = function (visitor) {
        if (visitor.visitFail_message) {
            return visitor.visitFail_message(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Fail_messageContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Fail_messageContext = Fail_messageContext;
var Succ_messageContext = /** @class */ (function (_super) {
    __extends(Succ_messageContext, _super);
    function Succ_messageContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Succ_messageContext.prototype.string = function () {
        return this.getRuleContext(0, StringContext);
    };
    Object.defineProperty(Succ_messageContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return muddbParser.RULE_succ_message; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Succ_messageContext.prototype.enterRule = function (listener) {
        if (listener.enterSucc_message) {
            listener.enterSucc_message(this);
        }
    };
    // @Override
    Succ_messageContext.prototype.exitRule = function (listener) {
        if (listener.exitSucc_message) {
            listener.exitSucc_message(this);
        }
    };
    // @Override
    Succ_messageContext.prototype.accept = function (visitor) {
        if (visitor.visitSucc_message) {
            return visitor.visitSucc_message(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Succ_messageContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Succ_messageContext = Succ_messageContext;
var OfailContext = /** @class */ (function (_super) {
    __extends(OfailContext, _super);
    function OfailContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    OfailContext.prototype.string = function () {
        return this.getRuleContext(0, StringContext);
    };
    Object.defineProperty(OfailContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return muddbParser.RULE_ofail; },
        enumerable: true,
        configurable: true
    });
    // @Override
    OfailContext.prototype.enterRule = function (listener) {
        if (listener.enterOfail) {
            listener.enterOfail(this);
        }
    };
    // @Override
    OfailContext.prototype.exitRule = function (listener) {
        if (listener.exitOfail) {
            listener.exitOfail(this);
        }
    };
    // @Override
    OfailContext.prototype.accept = function (visitor) {
        if (visitor.visitOfail) {
            return visitor.visitOfail(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return OfailContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.OfailContext = OfailContext;
var OsuccessContext = /** @class */ (function (_super) {
    __extends(OsuccessContext, _super);
    function OsuccessContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    OsuccessContext.prototype.string = function () {
        return this.getRuleContext(0, StringContext);
    };
    Object.defineProperty(OsuccessContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return muddbParser.RULE_osuccess; },
        enumerable: true,
        configurable: true
    });
    // @Override
    OsuccessContext.prototype.enterRule = function (listener) {
        if (listener.enterOsuccess) {
            listener.enterOsuccess(this);
        }
    };
    // @Override
    OsuccessContext.prototype.exitRule = function (listener) {
        if (listener.exitOsuccess) {
            listener.exitOsuccess(this);
        }
    };
    // @Override
    OsuccessContext.prototype.accept = function (visitor) {
        if (visitor.visitOsuccess) {
            return visitor.visitOsuccess(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return OsuccessContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.OsuccessContext = OsuccessContext;
var OwnerContext = /** @class */ (function (_super) {
    __extends(OwnerContext, _super);
    function OwnerContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    OwnerContext.prototype.ref = function () {
        return this.getRuleContext(0, RefContext);
    };
    Object.defineProperty(OwnerContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return muddbParser.RULE_owner; },
        enumerable: true,
        configurable: true
    });
    // @Override
    OwnerContext.prototype.enterRule = function (listener) {
        if (listener.enterOwner) {
            listener.enterOwner(this);
        }
    };
    // @Override
    OwnerContext.prototype.exitRule = function (listener) {
        if (listener.exitOwner) {
            listener.exitOwner(this);
        }
    };
    // @Override
    OwnerContext.prototype.accept = function (visitor) {
        if (visitor.visitOwner) {
            return visitor.visitOwner(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return OwnerContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.OwnerContext = OwnerContext;
var PenniesContext = /** @class */ (function (_super) {
    __extends(PenniesContext, _super);
    function PenniesContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PenniesContext.prototype.ref = function () {
        return this.getRuleContext(0, RefContext);
    };
    Object.defineProperty(PenniesContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return muddbParser.RULE_pennies; },
        enumerable: true,
        configurable: true
    });
    // @Override
    PenniesContext.prototype.enterRule = function (listener) {
        if (listener.enterPennies) {
            listener.enterPennies(this);
        }
    };
    // @Override
    PenniesContext.prototype.exitRule = function (listener) {
        if (listener.exitPennies) {
            listener.exitPennies(this);
        }
    };
    // @Override
    PenniesContext.prototype.accept = function (visitor) {
        if (visitor.visitPennies) {
            return visitor.visitPennies(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PenniesContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PenniesContext = PenniesContext;
var FlagsContext = /** @class */ (function (_super) {
    __extends(FlagsContext, _super);
    function FlagsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FlagsContext.prototype.ref = function () {
        return this.getRuleContext(0, RefContext);
    };
    Object.defineProperty(FlagsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return muddbParser.RULE_flags; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FlagsContext.prototype.enterRule = function (listener) {
        if (listener.enterFlags) {
            listener.enterFlags(this);
        }
    };
    // @Override
    FlagsContext.prototype.exitRule = function (listener) {
        if (listener.exitFlags) {
            listener.exitFlags(this);
        }
    };
    // @Override
    FlagsContext.prototype.accept = function (visitor) {
        if (visitor.visitFlags) {
            return visitor.visitFlags(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FlagsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FlagsContext = FlagsContext;
var PasswordContext = /** @class */ (function (_super) {
    __extends(PasswordContext, _super);
    function PasswordContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PasswordContext.prototype.string = function () {
        return this.getRuleContext(0, StringContext);
    };
    Object.defineProperty(PasswordContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return muddbParser.RULE_password; },
        enumerable: true,
        configurable: true
    });
    // @Override
    PasswordContext.prototype.enterRule = function (listener) {
        if (listener.enterPassword) {
            listener.enterPassword(this);
        }
    };
    // @Override
    PasswordContext.prototype.exitRule = function (listener) {
        if (listener.exitPassword) {
            listener.exitPassword(this);
        }
    };
    // @Override
    PasswordContext.prototype.accept = function (visitor) {
        if (visitor.visitPassword) {
            return visitor.visitPassword(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PasswordContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PasswordContext = PasswordContext;
var StringContext = /** @class */ (function (_super) {
    __extends(StringContext, _super);
    function StringContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    StringContext.prototype.EOL = function () { return this.getToken(muddbParser.EOL, 0); };
    StringContext.prototype.STRING = function () { return this.tryGetToken(muddbParser.STRING, 0); };
    Object.defineProperty(StringContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return muddbParser.RULE_string; },
        enumerable: true,
        configurable: true
    });
    // @Override
    StringContext.prototype.enterRule = function (listener) {
        if (listener.enterString) {
            listener.enterString(this);
        }
    };
    // @Override
    StringContext.prototype.exitRule = function (listener) {
        if (listener.exitString) {
            listener.exitString(this);
        }
    };
    // @Override
    StringContext.prototype.accept = function (visitor) {
        if (visitor.visitString) {
            return visitor.visitString(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return StringContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.StringContext = StringContext;
var RefContext = /** @class */ (function (_super) {
    __extends(RefContext, _super);
    function RefContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    RefContext.prototype.EOL = function () { return this.getToken(muddbParser.EOL, 0); };
    RefContext.prototype.NUM = function () { return this.tryGetToken(muddbParser.NUM, 0); };
    Object.defineProperty(RefContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return muddbParser.RULE_ref; },
        enumerable: true,
        configurable: true
    });
    // @Override
    RefContext.prototype.enterRule = function (listener) {
        if (listener.enterRef) {
            listener.enterRef(this);
        }
    };
    // @Override
    RefContext.prototype.exitRule = function (listener) {
        if (listener.exitRef) {
            listener.exitRef(this);
        }
    };
    // @Override
    RefContext.prototype.accept = function (visitor) {
        if (visitor.visitRef) {
            return visitor.visitRef(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return RefContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.RefContext = RefContext;
var BoolContext = /** @class */ (function (_super) {
    __extends(BoolContext, _super);
    function BoolContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    BoolContext.prototype.EOL = function () { return this.getToken(muddbParser.EOL, 0); };
    BoolContext.prototype.NUM = function () { return this.tryGetToken(muddbParser.NUM, 0); };
    Object.defineProperty(BoolContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return muddbParser.RULE_bool; },
        enumerable: true,
        configurable: true
    });
    // @Override
    BoolContext.prototype.enterRule = function (listener) {
        if (listener.enterBool) {
            listener.enterBool(this);
        }
    };
    // @Override
    BoolContext.prototype.exitRule = function (listener) {
        if (listener.exitBool) {
            listener.exitBool(this);
        }
    };
    // @Override
    BoolContext.prototype.accept = function (visitor) {
        if (visitor.visitBool) {
            return visitor.visitBool(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return BoolContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.BoolContext = BoolContext;
