// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/ply/ply.g4 by ANTLR 4.7.3-SNAPSHOT


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

import { plyListener } from "./plyListener";
import { plyVisitor } from "./plyVisitor";


export class plyParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly T__9 = 10;
	public static readonly T__10 = 11;
	public static readonly T__11 = 12;
	public static readonly T__12 = 13;
	public static readonly T__13 = 14;
	public static readonly T__14 = 15;
	public static readonly T__15 = 16;
	public static readonly T__16 = 17;
	public static readonly T__17 = 18;
	public static readonly STRING = 19;
	public static readonly NUMBER = 20;
	public static readonly COMMENT = 21;
	public static readonly EOL = 22;
	public static readonly WS = 23;
	public static readonly RULE_ply = 0;
	public static readonly RULE_header = 1;
	public static readonly RULE_end_header = 2;
	public static readonly RULE_format = 3;
	public static readonly RULE_element = 4;
	public static readonly RULE_property = 5;
	public static readonly RULE_scalarproperty = 6;
	public static readonly RULE_listproperty = 7;
	public static readonly RULE_type = 8;
	public static readonly RULE_plydeclaration = 9;
	public static readonly RULE_vertices = 10;
	public static readonly RULE_faces = 11;
	public static readonly RULE_vertex = 12;
	public static readonly RULE_face = 13;
	public static readonly RULE_number = 14;
	public static readonly RULE_string = 15;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"ply", "header", "end_header", "format", "element", "property", "scalarproperty", 
		"listproperty", "type", "plydeclaration", "vertices", "faces", "vertex", 
		"face", "number", "string",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'end_header'", "'format'", "'ascii 1.0'", "'element'", "'property'", 
		"'list'", "'char'", "'uchar'", "'short'", "'ushort'", "'int'", "'uint'", 
		"'float'", "'double'", "'float32'", "'uint8'", "'int32'", "'ply'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, "STRING", "NUMBER", 
		"COMMENT", "EOL", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(plyParser._LITERAL_NAMES, plyParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return plyParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "ply.g4"; }

	// @Override
	public get ruleNames(): string[] { return plyParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return plyParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(plyParser._ATN, this);
	}
	// @RuleVersion(0)
	public ply(): PlyContext {
		let _localctx: PlyContext = new PlyContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, plyParser.RULE_ply);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 32;
			this.header();
			this.state = 34;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 0, this._ctx) ) {
			case 1:
				{
				this.state = 33;
				this.vertices();
				}
				break;
			}
			this.state = 37;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === plyParser.NUMBER) {
				{
				this.state = 36;
				this.faces();
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
	public header(): HeaderContext {
		let _localctx: HeaderContext = new HeaderContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, plyParser.RULE_header);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 39;
			this.plydeclaration();
			this.state = 40;
			this.format();
			this.state = 45;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === plyParser.T__3 || _la === plyParser.T__4) {
				{
				this.state = 43;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case plyParser.T__3:
					{
					this.state = 41;
					this.element();
					}
					break;
				case plyParser.T__4:
					{
					this.state = 42;
					this.property();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 47;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 48;
			this.end_header();
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
	public end_header(): End_headerContext {
		let _localctx: End_headerContext = new End_headerContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, plyParser.RULE_end_header);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 50;
			this.match(plyParser.T__0);
			this.state = 51;
			this.match(plyParser.EOL);
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
	public format(): FormatContext {
		let _localctx: FormatContext = new FormatContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, plyParser.RULE_format);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 53;
			this.match(plyParser.T__1);
			this.state = 54;
			this.match(plyParser.T__2);
			this.state = 55;
			this.match(plyParser.EOL);
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
		this.enterRule(_localctx, 8, plyParser.RULE_element);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 57;
			this.match(plyParser.T__3);
			this.state = 58;
			this.string();
			this.state = 59;
			this.number();
			this.state = 60;
			this.match(plyParser.EOL);
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
	public property(): PropertyContext {
		let _localctx: PropertyContext = new PropertyContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, plyParser.RULE_property);
		try {
			this.state = 64;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 4, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 62;
				this.scalarproperty();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 63;
				this.listproperty();
				}
				break;
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
	public scalarproperty(): ScalarpropertyContext {
		let _localctx: ScalarpropertyContext = new ScalarpropertyContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, plyParser.RULE_scalarproperty);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 66;
			this.match(plyParser.T__4);
			this.state = 67;
			this.type();
			this.state = 68;
			this.string();
			this.state = 69;
			this.match(plyParser.EOL);
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
	public listproperty(): ListpropertyContext {
		let _localctx: ListpropertyContext = new ListpropertyContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, plyParser.RULE_listproperty);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 71;
			this.match(plyParser.T__4);
			this.state = 72;
			this.match(plyParser.T__5);
			this.state = 73;
			this.type();
			this.state = 74;
			this.type();
			this.state = 75;
			this.string();
			this.state = 76;
			this.match(plyParser.EOL);
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
		this.enterRule(_localctx, 16, plyParser.RULE_type);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 78;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << plyParser.T__6) | (1 << plyParser.T__7) | (1 << plyParser.T__8) | (1 << plyParser.T__9) | (1 << plyParser.T__10) | (1 << plyParser.T__11) | (1 << plyParser.T__12) | (1 << plyParser.T__13) | (1 << plyParser.T__14) | (1 << plyParser.T__15) | (1 << plyParser.T__16))) !== 0))) {
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
	// @RuleVersion(0)
	public plydeclaration(): PlydeclarationContext {
		let _localctx: PlydeclarationContext = new PlydeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, plyParser.RULE_plydeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 80;
			this.match(plyParser.T__17);
			this.state = 81;
			this.match(plyParser.EOL);
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
	public vertices(): VerticesContext {
		let _localctx: VerticesContext = new VerticesContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, plyParser.RULE_vertices);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 84;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 83;
					this.vertex();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 86;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 5, this._ctx);
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
	public faces(): FacesContext {
		let _localctx: FacesContext = new FacesContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, plyParser.RULE_faces);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 89;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 88;
				this.face();
				}
				}
				this.state = 91;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === plyParser.NUMBER);
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
	public vertex(): VertexContext {
		let _localctx: VertexContext = new VertexContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, plyParser.RULE_vertex);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 93;
			this.number();
			this.state = 94;
			this.number();
			this.state = 95;
			this.number();
			this.state = 96;
			this.match(plyParser.EOL);
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
	public face(): FaceContext {
		let _localctx: FaceContext = new FaceContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, plyParser.RULE_face);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 98;
			this.number();
			this.state = 99;
			this.number();
			this.state = 100;
			this.number();
			this.state = 102;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 101;
				this.number();
				}
				}
				this.state = 104;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === plyParser.NUMBER);
			this.state = 106;
			this.match(plyParser.EOL);
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
	public number(): NumberContext {
		let _localctx: NumberContext = new NumberContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, plyParser.RULE_number);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 108;
			this.match(plyParser.NUMBER);
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
		this.enterRule(_localctx, 30, plyParser.RULE_string);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 110;
			this.match(plyParser.STRING);
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x19s\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x03\x02\x03\x02\x05" +
		"\x02%\n\x02\x03\x02\x05\x02(\n\x02\x03\x03\x03\x03\x03\x03\x03\x03\x07" +
		"\x03.\n\x03\f\x03\x0E\x031\v\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04" +
		"\x03\x05\x03\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06" +
		"\x03\x07\x03\x07\x05\x07C\n\x07\x03\b\x03\b\x03\b\x03\b\x03\b\x03\t\x03" +
		"\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\n\x03\n\x03\v\x03\v\x03\v\x03\f\x06" +
		"\fW\n\f\r\f\x0E\fX\x03\r\x06\r\\\n\r\r\r\x0E\r]\x03\x0E\x03\x0E\x03\x0E" +
		"\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x06\x0Fi\n\x0F\r\x0F" +
		"\x0E\x0Fj\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x11\x03\x11\x03\x11\x02" +
		"\x02\x02\x12\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02" +
		"\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\x02\x03" +
		"\x03\x02\t\x13\x02j\x02\"\x03\x02\x02\x02\x04)\x03\x02\x02\x02\x064\x03" +
		"\x02\x02\x02\b7\x03\x02\x02\x02\n;\x03\x02\x02\x02\fB\x03\x02\x02\x02" +
		"\x0ED\x03\x02\x02\x02\x10I\x03\x02\x02\x02\x12P\x03\x02\x02\x02\x14R\x03" +
		"\x02\x02\x02\x16V\x03\x02\x02\x02\x18[\x03\x02\x02\x02\x1A_\x03\x02\x02" +
		"\x02\x1Cd\x03\x02\x02\x02\x1En\x03\x02\x02\x02 p\x03\x02\x02\x02\"$\x05" +
		"\x04\x03\x02#%\x05\x16\f\x02$#\x03\x02\x02\x02$%\x03\x02\x02\x02%\'\x03" +
		"\x02\x02\x02&(\x05\x18\r\x02\'&\x03\x02\x02\x02\'(\x03\x02\x02\x02(\x03" +
		"\x03\x02\x02\x02)*\x05\x14\v\x02*/\x05\b\x05\x02+.\x05\n\x06\x02,.\x05" +
		"\f\x07\x02-+\x03\x02\x02\x02-,\x03\x02\x02\x02.1\x03\x02\x02\x02/-\x03" +
		"\x02\x02\x02/0\x03\x02\x02\x0202\x03\x02\x02\x021/\x03\x02\x02\x0223\x05" +
		"\x06\x04\x023\x05\x03\x02\x02\x0245\x07\x03\x02\x0256\x07\x18\x02\x02" +
		"6\x07\x03\x02\x02\x0278\x07\x04\x02\x0289\x07\x05\x02\x029:\x07\x18\x02" +
		"\x02:\t\x03\x02\x02\x02;<\x07\x06\x02\x02<=\x05 \x11\x02=>\x05\x1E\x10" +
		"\x02>?\x07\x18\x02\x02?\v\x03\x02\x02\x02@C\x05\x0E\b\x02AC\x05\x10\t" +
		"\x02B@\x03\x02\x02\x02BA\x03\x02\x02\x02C\r\x03\x02\x02\x02DE\x07\x07" +
		"\x02\x02EF\x05\x12\n\x02FG\x05 \x11\x02GH\x07\x18\x02\x02H\x0F\x03\x02" +
		"\x02\x02IJ\x07\x07\x02\x02JK\x07\b\x02\x02KL\x05\x12\n\x02LM\x05\x12\n" +
		"\x02MN\x05 \x11\x02NO\x07\x18\x02\x02O\x11\x03\x02\x02\x02PQ\t\x02\x02" +
		"\x02Q\x13\x03\x02\x02\x02RS\x07\x14\x02\x02ST\x07\x18\x02\x02T\x15\x03" +
		"\x02\x02\x02UW\x05\x1A\x0E\x02VU\x03\x02\x02\x02WX\x03\x02\x02\x02XV\x03" +
		"\x02\x02\x02XY\x03\x02\x02\x02Y\x17\x03\x02\x02\x02Z\\\x05\x1C\x0F\x02" +
		"[Z\x03\x02\x02\x02\\]\x03\x02\x02\x02][\x03\x02\x02\x02]^\x03\x02\x02" +
		"\x02^\x19\x03\x02\x02\x02_`\x05\x1E\x10\x02`a\x05\x1E\x10\x02ab\x05\x1E" +
		"\x10\x02bc\x07\x18\x02\x02c\x1B\x03\x02\x02\x02de\x05\x1E\x10\x02ef\x05" +
		"\x1E\x10\x02fh\x05\x1E\x10\x02gi\x05\x1E\x10\x02hg\x03\x02\x02\x02ij\x03" +
		"\x02\x02\x02jh\x03\x02\x02\x02jk\x03\x02\x02\x02kl\x03\x02\x02\x02lm\x07" +
		"\x18\x02\x02m\x1D\x03\x02\x02\x02no\x07\x16\x02\x02o\x1F\x03\x02\x02\x02" +
		"pq\x07\x15\x02\x02q!\x03\x02\x02\x02\n$\'-/BX]j";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!plyParser.__ATN) {
			plyParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(plyParser._serializedATN));
		}

		return plyParser.__ATN;
	}

}

export class PlyContext extends ParserRuleContext {
	public header(): HeaderContext {
		return this.getRuleContext(0, HeaderContext);
	}
	public vertices(): VerticesContext | undefined {
		return this.tryGetRuleContext(0, VerticesContext);
	}
	public faces(): FacesContext | undefined {
		return this.tryGetRuleContext(0, FacesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return plyParser.RULE_ply; }
	// @Override
	public enterRule(listener: plyListener): void {
		if (listener.enterPly) {
			listener.enterPly(this);
		}
	}
	// @Override
	public exitRule(listener: plyListener): void {
		if (listener.exitPly) {
			listener.exitPly(this);
		}
	}
	// @Override
	public accept<Result>(visitor: plyVisitor<Result>): Result {
		if (visitor.visitPly) {
			return visitor.visitPly(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class HeaderContext extends ParserRuleContext {
	public plydeclaration(): PlydeclarationContext {
		return this.getRuleContext(0, PlydeclarationContext);
	}
	public format(): FormatContext {
		return this.getRuleContext(0, FormatContext);
	}
	public end_header(): End_headerContext {
		return this.getRuleContext(0, End_headerContext);
	}
	public element(): ElementContext[];
	public element(i: number): ElementContext;
	public element(i?: number): ElementContext | ElementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ElementContext);
		} else {
			return this.getRuleContext(i, ElementContext);
		}
	}
	public property(): PropertyContext[];
	public property(i: number): PropertyContext;
	public property(i?: number): PropertyContext | PropertyContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PropertyContext);
		} else {
			return this.getRuleContext(i, PropertyContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return plyParser.RULE_header; }
	// @Override
	public enterRule(listener: plyListener): void {
		if (listener.enterHeader) {
			listener.enterHeader(this);
		}
	}
	// @Override
	public exitRule(listener: plyListener): void {
		if (listener.exitHeader) {
			listener.exitHeader(this);
		}
	}
	// @Override
	public accept<Result>(visitor: plyVisitor<Result>): Result {
		if (visitor.visitHeader) {
			return visitor.visitHeader(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class End_headerContext extends ParserRuleContext {
	public EOL(): TerminalNode { return this.getToken(plyParser.EOL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return plyParser.RULE_end_header; }
	// @Override
	public enterRule(listener: plyListener): void {
		if (listener.enterEnd_header) {
			listener.enterEnd_header(this);
		}
	}
	// @Override
	public exitRule(listener: plyListener): void {
		if (listener.exitEnd_header) {
			listener.exitEnd_header(this);
		}
	}
	// @Override
	public accept<Result>(visitor: plyVisitor<Result>): Result {
		if (visitor.visitEnd_header) {
			return visitor.visitEnd_header(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FormatContext extends ParserRuleContext {
	public EOL(): TerminalNode { return this.getToken(plyParser.EOL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return plyParser.RULE_format; }
	// @Override
	public enterRule(listener: plyListener): void {
		if (listener.enterFormat) {
			listener.enterFormat(this);
		}
	}
	// @Override
	public exitRule(listener: plyListener): void {
		if (listener.exitFormat) {
			listener.exitFormat(this);
		}
	}
	// @Override
	public accept<Result>(visitor: plyVisitor<Result>): Result {
		if (visitor.visitFormat) {
			return visitor.visitFormat(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElementContext extends ParserRuleContext {
	public string(): StringContext {
		return this.getRuleContext(0, StringContext);
	}
	public number(): NumberContext {
		return this.getRuleContext(0, NumberContext);
	}
	public EOL(): TerminalNode { return this.getToken(plyParser.EOL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return plyParser.RULE_element; }
	// @Override
	public enterRule(listener: plyListener): void {
		if (listener.enterElement) {
			listener.enterElement(this);
		}
	}
	// @Override
	public exitRule(listener: plyListener): void {
		if (listener.exitElement) {
			listener.exitElement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: plyVisitor<Result>): Result {
		if (visitor.visitElement) {
			return visitor.visitElement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PropertyContext extends ParserRuleContext {
	public scalarproperty(): ScalarpropertyContext | undefined {
		return this.tryGetRuleContext(0, ScalarpropertyContext);
	}
	public listproperty(): ListpropertyContext | undefined {
		return this.tryGetRuleContext(0, ListpropertyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return plyParser.RULE_property; }
	// @Override
	public enterRule(listener: plyListener): void {
		if (listener.enterProperty) {
			listener.enterProperty(this);
		}
	}
	// @Override
	public exitRule(listener: plyListener): void {
		if (listener.exitProperty) {
			listener.exitProperty(this);
		}
	}
	// @Override
	public accept<Result>(visitor: plyVisitor<Result>): Result {
		if (visitor.visitProperty) {
			return visitor.visitProperty(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ScalarpropertyContext extends ParserRuleContext {
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public string(): StringContext {
		return this.getRuleContext(0, StringContext);
	}
	public EOL(): TerminalNode { return this.getToken(plyParser.EOL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return plyParser.RULE_scalarproperty; }
	// @Override
	public enterRule(listener: plyListener): void {
		if (listener.enterScalarproperty) {
			listener.enterScalarproperty(this);
		}
	}
	// @Override
	public exitRule(listener: plyListener): void {
		if (listener.exitScalarproperty) {
			listener.exitScalarproperty(this);
		}
	}
	// @Override
	public accept<Result>(visitor: plyVisitor<Result>): Result {
		if (visitor.visitScalarproperty) {
			return visitor.visitScalarproperty(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ListpropertyContext extends ParserRuleContext {
	public type(): TypeContext[];
	public type(i: number): TypeContext;
	public type(i?: number): TypeContext | TypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeContext);
		} else {
			return this.getRuleContext(i, TypeContext);
		}
	}
	public string(): StringContext {
		return this.getRuleContext(0, StringContext);
	}
	public EOL(): TerminalNode { return this.getToken(plyParser.EOL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return plyParser.RULE_listproperty; }
	// @Override
	public enterRule(listener: plyListener): void {
		if (listener.enterListproperty) {
			listener.enterListproperty(this);
		}
	}
	// @Override
	public exitRule(listener: plyListener): void {
		if (listener.exitListproperty) {
			listener.exitListproperty(this);
		}
	}
	// @Override
	public accept<Result>(visitor: plyVisitor<Result>): Result {
		if (visitor.visitListproperty) {
			return visitor.visitListproperty(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return plyParser.RULE_type; }
	// @Override
	public enterRule(listener: plyListener): void {
		if (listener.enterType) {
			listener.enterType(this);
		}
	}
	// @Override
	public exitRule(listener: plyListener): void {
		if (listener.exitType) {
			listener.exitType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: plyVisitor<Result>): Result {
		if (visitor.visitType) {
			return visitor.visitType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PlydeclarationContext extends ParserRuleContext {
	public EOL(): TerminalNode { return this.getToken(plyParser.EOL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return plyParser.RULE_plydeclaration; }
	// @Override
	public enterRule(listener: plyListener): void {
		if (listener.enterPlydeclaration) {
			listener.enterPlydeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: plyListener): void {
		if (listener.exitPlydeclaration) {
			listener.exitPlydeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: plyVisitor<Result>): Result {
		if (visitor.visitPlydeclaration) {
			return visitor.visitPlydeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VerticesContext extends ParserRuleContext {
	public vertex(): VertexContext[];
	public vertex(i: number): VertexContext;
	public vertex(i?: number): VertexContext | VertexContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VertexContext);
		} else {
			return this.getRuleContext(i, VertexContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return plyParser.RULE_vertices; }
	// @Override
	public enterRule(listener: plyListener): void {
		if (listener.enterVertices) {
			listener.enterVertices(this);
		}
	}
	// @Override
	public exitRule(listener: plyListener): void {
		if (listener.exitVertices) {
			listener.exitVertices(this);
		}
	}
	// @Override
	public accept<Result>(visitor: plyVisitor<Result>): Result {
		if (visitor.visitVertices) {
			return visitor.visitVertices(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FacesContext extends ParserRuleContext {
	public face(): FaceContext[];
	public face(i: number): FaceContext;
	public face(i?: number): FaceContext | FaceContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FaceContext);
		} else {
			return this.getRuleContext(i, FaceContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return plyParser.RULE_faces; }
	// @Override
	public enterRule(listener: plyListener): void {
		if (listener.enterFaces) {
			listener.enterFaces(this);
		}
	}
	// @Override
	public exitRule(listener: plyListener): void {
		if (listener.exitFaces) {
			listener.exitFaces(this);
		}
	}
	// @Override
	public accept<Result>(visitor: plyVisitor<Result>): Result {
		if (visitor.visitFaces) {
			return visitor.visitFaces(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VertexContext extends ParserRuleContext {
	public number(): NumberContext[];
	public number(i: number): NumberContext;
	public number(i?: number): NumberContext | NumberContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NumberContext);
		} else {
			return this.getRuleContext(i, NumberContext);
		}
	}
	public EOL(): TerminalNode { return this.getToken(plyParser.EOL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return plyParser.RULE_vertex; }
	// @Override
	public enterRule(listener: plyListener): void {
		if (listener.enterVertex) {
			listener.enterVertex(this);
		}
	}
	// @Override
	public exitRule(listener: plyListener): void {
		if (listener.exitVertex) {
			listener.exitVertex(this);
		}
	}
	// @Override
	public accept<Result>(visitor: plyVisitor<Result>): Result {
		if (visitor.visitVertex) {
			return visitor.visitVertex(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FaceContext extends ParserRuleContext {
	public number(): NumberContext[];
	public number(i: number): NumberContext;
	public number(i?: number): NumberContext | NumberContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NumberContext);
		} else {
			return this.getRuleContext(i, NumberContext);
		}
	}
	public EOL(): TerminalNode { return this.getToken(plyParser.EOL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return plyParser.RULE_face; }
	// @Override
	public enterRule(listener: plyListener): void {
		if (listener.enterFace) {
			listener.enterFace(this);
		}
	}
	// @Override
	public exitRule(listener: plyListener): void {
		if (listener.exitFace) {
			listener.exitFace(this);
		}
	}
	// @Override
	public accept<Result>(visitor: plyVisitor<Result>): Result {
		if (visitor.visitFace) {
			return visitor.visitFace(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NumberContext extends ParserRuleContext {
	public NUMBER(): TerminalNode { return this.getToken(plyParser.NUMBER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return plyParser.RULE_number; }
	// @Override
	public enterRule(listener: plyListener): void {
		if (listener.enterNumber) {
			listener.enterNumber(this);
		}
	}
	// @Override
	public exitRule(listener: plyListener): void {
		if (listener.exitNumber) {
			listener.exitNumber(this);
		}
	}
	// @Override
	public accept<Result>(visitor: plyVisitor<Result>): Result {
		if (visitor.visitNumber) {
			return visitor.visitNumber(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StringContext extends ParserRuleContext {
	public STRING(): TerminalNode { return this.getToken(plyParser.STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return plyParser.RULE_string; }
	// @Override
	public enterRule(listener: plyListener): void {
		if (listener.enterString) {
			listener.enterString(this);
		}
	}
	// @Override
	public exitRule(listener: plyListener): void {
		if (listener.exitString) {
			listener.exitString(this);
		}
	}
	// @Override
	public accept<Result>(visitor: plyVisitor<Result>): Result {
		if (visitor.visitString) {
			return visitor.visitString(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


