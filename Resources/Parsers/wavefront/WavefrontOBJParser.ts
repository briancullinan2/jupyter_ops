// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/wavefront/WavefrontOBJ.g4 by ANTLR 4.7.3-SNAPSHOT


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

import { WavefrontOBJListener } from "./WavefrontOBJListener";

export class WavefrontOBJParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly GEOMETRIC_VERTEX = 6;
	public static readonly TEXTURE_VERTEX = 7;
	public static readonly VERTEX_NORMAL = 8;
	public static readonly PARAMETER_SPACE_VERTEX = 9;
	public static readonly DEGREE = 10;
	public static readonly BASIS_MATRIX = 11;
	public static readonly STEP_SIZE = 12;
	public static readonly CURVE_SURF_TYPE = 13;
	public static readonly POINT = 14;
	public static readonly LINE = 15;
	public static readonly FACE = 16;
	public static readonly CURVE = 17;
	public static readonly CURVE2D = 18;
	public static readonly SURF = 19;
	public static readonly PARAM = 20;
	public static readonly OUTER_TRIMMING_HOLE = 21;
	public static readonly INNER_TRIMMING_HOLE = 22;
	public static readonly SPECIAL_CURVE = 23;
	public static readonly SPECIAL_POINT = 24;
	public static readonly END = 25;
	public static readonly CONNECT = 26;
	public static readonly GROUP_NAME = 27;
	public static readonly SMOOTHING_GROUP = 28;
	public static readonly MERGING_GROUP = 29;
	public static readonly OBJECT_NAME = 30;
	public static readonly BEVEL_INTERPOLATION = 31;
	public static readonly COLOR_INTERPOLATION = 32;
	public static readonly DISSOLVE_INTERPOLATION = 33;
	public static readonly LEVEL_OF_DETAIL = 34;
	public static readonly MATERIAL_NAME = 35;
	public static readonly MATERIAL_LIBRARY = 36;
	public static readonly SHADOW_CASTING = 37;
	public static readonly RAY_TRACING = 38;
	public static readonly CURVE_APPROX = 39;
	public static readonly SURF_APPROX = 40;
	public static readonly INTEGER = 41;
	public static readonly DECIMAL = 42;
	public static readonly COMMENT = 43;
	public static readonly NAME = 44;
	public static readonly WS = 45;
	public static readonly RULE_start = 0;
	public static readonly RULE_line = 1;
	public static readonly RULE_face = 2;
	public static readonly RULE_vertex = 3;
	public static readonly RULE_mtllib = 4;
	public static readonly RULE_object = 5;
	public static readonly RULE_use_material = 6;
	public static readonly RULE_group = 7;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"start", "line", "face", "vertex", "mtllib", "object", "use_material", 
		"group",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'\r'", "'\n'", "'.mtl'", "'on'", "'off'", "'v'", "'vt'", "'vn'", 
		"'vp'", "'deg'", "'bmat'", "'step'", "'cstype'", "'p'", "'l'", "'f'", 
		"'curv'", "'curv2'", "'surf'", "'parm'", "'trim'", "'hole'", "'scrv'", 
		"'sp'", "'end'", "'con'", "'g'", "'s'", "'mg'", "'o'", "'bevel'", "'c_interp'", 
		"'d_interp'", "'lod'", "'usemtl'", "'mtllib'", "'shadow_obj'", "'trace_obj'", 
		"'ctech'", "'stech'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
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
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(WavefrontOBJParser._LITERAL_NAMES, WavefrontOBJParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return WavefrontOBJParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "WavefrontOBJ.g4"; }

	// @Override
	public get ruleNames(): string[] { return WavefrontOBJParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return WavefrontOBJParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(WavefrontOBJParser._ATN, this);
	}
	// @RuleVersion(0)
	public start(): StartContext {
		let _localctx: StartContext = new StartContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, WavefrontOBJParser.RULE_start);
		let _la: number;
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
		this.enterRule(_localctx, 2, WavefrontOBJParser.RULE_line);
		let _la: number;
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
				throw new NoViableAltException(this);
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
		this.enterRule(_localctx, 4, WavefrontOBJParser.RULE_face);
		let _la: number;
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
		this.enterRule(_localctx, 6, WavefrontOBJParser.RULE_vertex);
		let _la: number;
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
				} else {
					if (this._input.LA(1) === Token.EOF) {
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
	public mtllib(): MtllibContext {
		let _localctx: MtllibContext = new MtllibContext(this._ctx, this.state);
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
	public object(): ObjectContext {
		let _localctx: ObjectContext = new ObjectContext(this._ctx, this.state);
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
	public use_material(): Use_materialContext {
		let _localctx: Use_materialContext = new Use_materialContext(this._ctx, this.state);
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
		this.enterRule(_localctx, 14, WavefrontOBJParser.RULE_group);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 59;
			this.match(WavefrontOBJParser.SMOOTHING_GROUP);
			this.state = 60;
			_la = this._input.LA(1);
			if (!(_la === WavefrontOBJParser.T__3 || _la === WavefrontOBJParser.T__4)) {
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03/A\x04\x02\t\x02" +
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
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!WavefrontOBJParser.__ATN) {
			WavefrontOBJParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(WavefrontOBJParser._serializedATN));
		}

		return WavefrontOBJParser.__ATN;
	}

}

export class StartContext extends ParserRuleContext {
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
	public get ruleIndex(): number { return WavefrontOBJParser.RULE_start; }
	// @Override
	public enterRule(listener: WavefrontOBJListener): void {
		if (listener.enterStart) {
			listener.enterStart(this);
		}
	}
	// @Override
	public exitRule(listener: WavefrontOBJListener): void {
		if (listener.exitStart) {
			listener.exitStart(this);
		}
	}
}


export class LineContext extends ParserRuleContext {
	public vertex(): VertexContext | undefined {
		return this.tryGetRuleContext(0, VertexContext);
	}
	public face(): FaceContext | undefined {
		return this.tryGetRuleContext(0, FaceContext);
	}
	public mtllib(): MtllibContext | undefined {
		return this.tryGetRuleContext(0, MtllibContext);
	}
	public object(): ObjectContext | undefined {
		return this.tryGetRuleContext(0, ObjectContext);
	}
	public use_material(): Use_materialContext | undefined {
		return this.tryGetRuleContext(0, Use_materialContext);
	}
	public group(): GroupContext | undefined {
		return this.tryGetRuleContext(0, GroupContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WavefrontOBJParser.RULE_line; }
	// @Override
	public enterRule(listener: WavefrontOBJListener): void {
		if (listener.enterLine) {
			listener.enterLine(this);
		}
	}
	// @Override
	public exitRule(listener: WavefrontOBJListener): void {
		if (listener.exitLine) {
			listener.exitLine(this);
		}
	}
}


export class FaceContext extends ParserRuleContext {
	public FACE(): TerminalNode { return this.getToken(WavefrontOBJParser.FACE, 0); }
	public INTEGER(): TerminalNode[];
	public INTEGER(i: number): TerminalNode;
	public INTEGER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(WavefrontOBJParser.INTEGER);
		} else {
			return this.getToken(WavefrontOBJParser.INTEGER, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WavefrontOBJParser.RULE_face; }
	// @Override
	public enterRule(listener: WavefrontOBJListener): void {
		if (listener.enterFace) {
			listener.enterFace(this);
		}
	}
	// @Override
	public exitRule(listener: WavefrontOBJListener): void {
		if (listener.exitFace) {
			listener.exitFace(this);
		}
	}
}


export class VertexContext extends ParserRuleContext {
	public DECIMAL(): TerminalNode[];
	public DECIMAL(i: number): TerminalNode;
	public DECIMAL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(WavefrontOBJParser.DECIMAL);
		} else {
			return this.getToken(WavefrontOBJParser.DECIMAL, i);
		}
	}
	public GEOMETRIC_VERTEX(): TerminalNode | undefined { return this.tryGetToken(WavefrontOBJParser.GEOMETRIC_VERTEX, 0); }
	public TEXTURE_VERTEX(): TerminalNode | undefined { return this.tryGetToken(WavefrontOBJParser.TEXTURE_VERTEX, 0); }
	public VERTEX_NORMAL(): TerminalNode | undefined { return this.tryGetToken(WavefrontOBJParser.VERTEX_NORMAL, 0); }
	public PARAMETER_SPACE_VERTEX(): TerminalNode | undefined { return this.tryGetToken(WavefrontOBJParser.PARAMETER_SPACE_VERTEX, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WavefrontOBJParser.RULE_vertex; }
	// @Override
	public enterRule(listener: WavefrontOBJListener): void {
		if (listener.enterVertex) {
			listener.enterVertex(this);
		}
	}
	// @Override
	public exitRule(listener: WavefrontOBJListener): void {
		if (listener.exitVertex) {
			listener.exitVertex(this);
		}
	}
}


export class MtllibContext extends ParserRuleContext {
	public _a: Token;
	public MATERIAL_LIBRARY(): TerminalNode { return this.getToken(WavefrontOBJParser.MATERIAL_LIBRARY, 0); }
	public NAME(): TerminalNode { return this.getToken(WavefrontOBJParser.NAME, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WavefrontOBJParser.RULE_mtllib; }
	// @Override
	public enterRule(listener: WavefrontOBJListener): void {
		if (listener.enterMtllib) {
			listener.enterMtllib(this);
		}
	}
	// @Override
	public exitRule(listener: WavefrontOBJListener): void {
		if (listener.exitMtllib) {
			listener.exitMtllib(this);
		}
	}
}


export class ObjectContext extends ParserRuleContext {
	public OBJECT_NAME(): TerminalNode { return this.getToken(WavefrontOBJParser.OBJECT_NAME, 0); }
	public NAME(): TerminalNode { return this.getToken(WavefrontOBJParser.NAME, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WavefrontOBJParser.RULE_object; }
	// @Override
	public enterRule(listener: WavefrontOBJListener): void {
		if (listener.enterObject) {
			listener.enterObject(this);
		}
	}
	// @Override
	public exitRule(listener: WavefrontOBJListener): void {
		if (listener.exitObject) {
			listener.exitObject(this);
		}
	}
}


export class Use_materialContext extends ParserRuleContext {
	public MATERIAL_NAME(): TerminalNode { return this.getToken(WavefrontOBJParser.MATERIAL_NAME, 0); }
	public NAME(): TerminalNode { return this.getToken(WavefrontOBJParser.NAME, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WavefrontOBJParser.RULE_use_material; }
	// @Override
	public enterRule(listener: WavefrontOBJListener): void {
		if (listener.enterUse_material) {
			listener.enterUse_material(this);
		}
	}
	// @Override
	public exitRule(listener: WavefrontOBJListener): void {
		if (listener.exitUse_material) {
			listener.exitUse_material(this);
		}
	}
}


export class GroupContext extends ParserRuleContext {
	public SMOOTHING_GROUP(): TerminalNode { return this.getToken(WavefrontOBJParser.SMOOTHING_GROUP, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WavefrontOBJParser.RULE_group; }
	// @Override
	public enterRule(listener: WavefrontOBJListener): void {
		if (listener.enterGroup) {
			listener.enterGroup(this);
		}
	}
	// @Override
	public exitRule(listener: WavefrontOBJListener): void {
		if (listener.exitGroup) {
			listener.exitGroup(this);
		}
	}
}


