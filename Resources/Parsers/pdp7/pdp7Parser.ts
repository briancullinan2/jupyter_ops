// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/pdp7/pdp7.g4 by ANTLR 4.7.3-SNAPSHOT


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

import { pdp7Listener } from "./pdp7Listener";

export class pdp7Parser extends Parser {
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
	public static readonly T__18 = 19;
	public static readonly T__19 = 20;
	public static readonly T__20 = 21;
	public static readonly T__21 = 22;
	public static readonly T__22 = 23;
	public static readonly T__23 = 24;
	public static readonly T__24 = 25;
	public static readonly T__25 = 26;
	public static readonly T__26 = 27;
	public static readonly T__27 = 28;
	public static readonly T__28 = 29;
	public static readonly T__29 = 30;
	public static readonly T__30 = 31;
	public static readonly T__31 = 32;
	public static readonly T__32 = 33;
	public static readonly T__33 = 34;
	public static readonly T__34 = 35;
	public static readonly T__35 = 36;
	public static readonly T__36 = 37;
	public static readonly T__37 = 38;
	public static readonly T__38 = 39;
	public static readonly T__39 = 40;
	public static readonly T__40 = 41;
	public static readonly T__41 = 42;
	public static readonly T__42 = 43;
	public static readonly T__43 = 44;
	public static readonly T__44 = 45;
	public static readonly T__45 = 46;
	public static readonly T__46 = 47;
	public static readonly T__47 = 48;
	public static readonly T__48 = 49;
	public static readonly T__49 = 50;
	public static readonly T__50 = 51;
	public static readonly T__51 = 52;
	public static readonly T__52 = 53;
	public static readonly T__53 = 54;
	public static readonly T__54 = 55;
	public static readonly T__55 = 56;
	public static readonly T__56 = 57;
	public static readonly T__57 = 58;
	public static readonly T__58 = 59;
	public static readonly T__59 = 60;
	public static readonly T__60 = 61;
	public static readonly T__61 = 62;
	public static readonly T__62 = 63;
	public static readonly T__63 = 64;
	public static readonly T__64 = 65;
	public static readonly T__65 = 66;
	public static readonly T__66 = 67;
	public static readonly T__67 = 68;
	public static readonly T__68 = 69;
	public static readonly T__69 = 70;
	public static readonly T__70 = 71;
	public static readonly T__71 = 72;
	public static readonly T__72 = 73;
	public static readonly T__73 = 74;
	public static readonly T__74 = 75;
	public static readonly T__75 = 76;
	public static readonly T__76 = 77;
	public static readonly T__77 = 78;
	public static readonly T__78 = 79;
	public static readonly T__79 = 80;
	public static readonly T__80 = 81;
	public static readonly T__81 = 82;
	public static readonly T__82 = 83;
	public static readonly T__83 = 84;
	public static readonly T__84 = 85;
	public static readonly T__85 = 86;
	public static readonly T__86 = 87;
	public static readonly T__87 = 88;
	public static readonly T__88 = 89;
	public static readonly T__89 = 90;
	public static readonly T__90 = 91;
	public static readonly T__91 = 92;
	public static readonly T__92 = 93;
	public static readonly T__93 = 94;
	public static readonly LOC = 95;
	public static readonly RELOC = 96;
	public static readonly PLUS = 97;
	public static readonly MINUS = 98;
	public static readonly TIMES = 99;
	public static readonly DIV = 100;
	public static readonly LABEL = 101;
	public static readonly IDENTIFIER = 102;
	public static readonly NUMERIC_LITERAL = 103;
	public static readonly DECIMAL = 104;
	public static readonly OCTAL = 105;
	public static readonly DECIMAL_MINUS = 106;
	public static readonly STRING = 107;
	public static readonly CHAR = 108;
	public static readonly COMMENT = 109;
	public static readonly EOL = 110;
	public static readonly WS = 111;
	public static readonly RULE_prog = 0;
	public static readonly RULE_line = 1;
	public static readonly RULE_declarations = 2;
	public static readonly RULE_declaration = 3;
	public static readonly RULE_declarationRight = 4;
	public static readonly RULE_instruction = 5;
	public static readonly RULE_argument = 6;
	public static readonly RULE_assignment = 7;
	public static readonly RULE_symbol = 8;
	public static readonly RULE_expression = 9;
	public static readonly RULE_multiplyingExpression = 10;
	public static readonly RULE_atom = 11;
	public static readonly RULE_string = 12;
	public static readonly RULE_eol = 13;
	public static readonly RULE_comment = 14;
	public static readonly RULE_label = 15;
	public static readonly RULE_variable = 16;
	public static readonly RULE_opcode = 17;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"prog", "line", "declarations", "declaration", "declarationRight", "instruction", 
		"argument", "assignment", "symbol", "expression", "multiplyingExpression", 
		"atom", "string", "eol", "comment", "label", "variable", "opcode",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "';'", "'='", "'>'", "'dac'", "'jms'", "'dzm'", "'lac'", "'xor'", 
		"'add'", "'tad'", "'xct'", "'isz'", "'and'", "'sad'", "'jmp'", "'nop'", 
		"'law'", "'cma'", "'las'", "'ral'", "'rar'", "'hlt'", "'sma'", "'sza'", 
		"'snl'", "'skp'", "'sna'", "'szl'", "'rtl'", "'rtr'", "'cil'", "'rcl'", 
		"'rcr'", "'cia'", "'lrs'", "'lrss'", "'lls'", "'llss'", "'als'", "'alss'", 
		"'mul'", "'idiv'", "'lacq'", "'clq'", "'omq'", "'cmq'", "'lmq'", "'dscs'", 
		"'dslw'", "'dslm'", "'dsld'", "'dsls'", "'dssf'", "'dsrs'", "'iof'", "'ion'", 
		"'caf'", "'clon'", "'clsf'", "'clof'", "'ksf'", "'krb'", "'tsf'", "'tcf'", 
		"'tls'", "'sck'", "'cck'", "'lck'", "'rsf'", "'rsa'", "'rrb'", "'psf'", 
		"'pcf'", "'psa'", "'cdf'", "'rlpd'", "'lda'", "'wcga'", "'raef'", "'beg'", 
		"'spb'", "'cpb'", "'lpb'", "'wbl'", "'dprs'", "'dpsf'", "'dpcf'", "'dprc'", 
		"'crsf'", "'crrb'", "'sys'", "'czm'", "'irss'", "'dsm'", "'.'", "'..'", 
		"'+'", "'-'", "'*'", "'/'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, "LOC", "RELOC", "PLUS", "MINUS", 
		"TIMES", "DIV", "LABEL", "IDENTIFIER", "NUMERIC_LITERAL", "DECIMAL", "OCTAL", 
		"DECIMAL_MINUS", "STRING", "CHAR", "COMMENT", "EOL", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(pdp7Parser._LITERAL_NAMES, pdp7Parser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return pdp7Parser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "pdp7.g4"; }

	// @Override
	public get ruleNames(): string[] { return pdp7Parser.ruleNames; }

	// @Override
	public get serializedATN(): string { return pdp7Parser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(pdp7Parser._ATN, this);
	}
	// @RuleVersion(0)
	public prog(): ProgContext {
		let _localctx: ProgContext = new ProgContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, pdp7Parser.RULE_prog);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 40;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 37;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << pdp7Parser.T__3) | (1 << pdp7Parser.T__4) | (1 << pdp7Parser.T__5) | (1 << pdp7Parser.T__6) | (1 << pdp7Parser.T__7) | (1 << pdp7Parser.T__8) | (1 << pdp7Parser.T__9) | (1 << pdp7Parser.T__10) | (1 << pdp7Parser.T__11) | (1 << pdp7Parser.T__12) | (1 << pdp7Parser.T__13) | (1 << pdp7Parser.T__14) | (1 << pdp7Parser.T__15) | (1 << pdp7Parser.T__16) | (1 << pdp7Parser.T__17) | (1 << pdp7Parser.T__18) | (1 << pdp7Parser.T__19) | (1 << pdp7Parser.T__20) | (1 << pdp7Parser.T__21) | (1 << pdp7Parser.T__22) | (1 << pdp7Parser.T__23) | (1 << pdp7Parser.T__24) | (1 << pdp7Parser.T__25) | (1 << pdp7Parser.T__26) | (1 << pdp7Parser.T__27) | (1 << pdp7Parser.T__28) | (1 << pdp7Parser.T__29) | (1 << pdp7Parser.T__30))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (pdp7Parser.T__31 - 32)) | (1 << (pdp7Parser.T__32 - 32)) | (1 << (pdp7Parser.T__33 - 32)) | (1 << (pdp7Parser.T__34 - 32)) | (1 << (pdp7Parser.T__35 - 32)) | (1 << (pdp7Parser.T__36 - 32)) | (1 << (pdp7Parser.T__37 - 32)) | (1 << (pdp7Parser.T__38 - 32)) | (1 << (pdp7Parser.T__39 - 32)) | (1 << (pdp7Parser.T__40 - 32)) | (1 << (pdp7Parser.T__41 - 32)) | (1 << (pdp7Parser.T__42 - 32)) | (1 << (pdp7Parser.T__43 - 32)) | (1 << (pdp7Parser.T__44 - 32)) | (1 << (pdp7Parser.T__45 - 32)) | (1 << (pdp7Parser.T__46 - 32)) | (1 << (pdp7Parser.T__47 - 32)) | (1 << (pdp7Parser.T__48 - 32)) | (1 << (pdp7Parser.T__49 - 32)) | (1 << (pdp7Parser.T__50 - 32)) | (1 << (pdp7Parser.T__51 - 32)) | (1 << (pdp7Parser.T__52 - 32)) | (1 << (pdp7Parser.T__53 - 32)) | (1 << (pdp7Parser.T__54 - 32)) | (1 << (pdp7Parser.T__55 - 32)) | (1 << (pdp7Parser.T__56 - 32)) | (1 << (pdp7Parser.T__57 - 32)) | (1 << (pdp7Parser.T__58 - 32)) | (1 << (pdp7Parser.T__59 - 32)) | (1 << (pdp7Parser.T__60 - 32)) | (1 << (pdp7Parser.T__61 - 32)) | (1 << (pdp7Parser.T__62 - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (pdp7Parser.T__63 - 64)) | (1 << (pdp7Parser.T__64 - 64)) | (1 << (pdp7Parser.T__65 - 64)) | (1 << (pdp7Parser.T__66 - 64)) | (1 << (pdp7Parser.T__67 - 64)) | (1 << (pdp7Parser.T__68 - 64)) | (1 << (pdp7Parser.T__69 - 64)) | (1 << (pdp7Parser.T__70 - 64)) | (1 << (pdp7Parser.T__71 - 64)) | (1 << (pdp7Parser.T__72 - 64)) | (1 << (pdp7Parser.T__73 - 64)) | (1 << (pdp7Parser.T__74 - 64)) | (1 << (pdp7Parser.T__75 - 64)) | (1 << (pdp7Parser.T__76 - 64)) | (1 << (pdp7Parser.T__77 - 64)) | (1 << (pdp7Parser.T__78 - 64)) | (1 << (pdp7Parser.T__79 - 64)) | (1 << (pdp7Parser.T__80 - 64)) | (1 << (pdp7Parser.T__81 - 64)) | (1 << (pdp7Parser.T__82 - 64)) | (1 << (pdp7Parser.T__83 - 64)) | (1 << (pdp7Parser.T__84 - 64)) | (1 << (pdp7Parser.T__85 - 64)) | (1 << (pdp7Parser.T__86 - 64)) | (1 << (pdp7Parser.T__87 - 64)) | (1 << (pdp7Parser.T__88 - 64)) | (1 << (pdp7Parser.T__89 - 64)) | (1 << (pdp7Parser.T__90 - 64)) | (1 << (pdp7Parser.T__91 - 64)) | (1 << (pdp7Parser.T__92 - 64)) | (1 << (pdp7Parser.T__93 - 64)) | (1 << (pdp7Parser.LOC - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (pdp7Parser.RELOC - 96)) | (1 << (pdp7Parser.MINUS - 96)) | (1 << (pdp7Parser.LABEL - 96)) | (1 << (pdp7Parser.IDENTIFIER - 96)) | (1 << (pdp7Parser.NUMERIC_LITERAL - 96)) | (1 << (pdp7Parser.DECIMAL - 96)) | (1 << (pdp7Parser.OCTAL - 96)) | (1 << (pdp7Parser.DECIMAL_MINUS - 96)) | (1 << (pdp7Parser.STRING - 96)) | (1 << (pdp7Parser.CHAR - 96)) | (1 << (pdp7Parser.COMMENT - 96)))) !== 0)) {
						{
						this.state = 36;
						this.line();
						}
					}

					this.state = 39;
					this.eol();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 42;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			this.state = 45;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << pdp7Parser.T__3) | (1 << pdp7Parser.T__4) | (1 << pdp7Parser.T__5) | (1 << pdp7Parser.T__6) | (1 << pdp7Parser.T__7) | (1 << pdp7Parser.T__8) | (1 << pdp7Parser.T__9) | (1 << pdp7Parser.T__10) | (1 << pdp7Parser.T__11) | (1 << pdp7Parser.T__12) | (1 << pdp7Parser.T__13) | (1 << pdp7Parser.T__14) | (1 << pdp7Parser.T__15) | (1 << pdp7Parser.T__16) | (1 << pdp7Parser.T__17) | (1 << pdp7Parser.T__18) | (1 << pdp7Parser.T__19) | (1 << pdp7Parser.T__20) | (1 << pdp7Parser.T__21) | (1 << pdp7Parser.T__22) | (1 << pdp7Parser.T__23) | (1 << pdp7Parser.T__24) | (1 << pdp7Parser.T__25) | (1 << pdp7Parser.T__26) | (1 << pdp7Parser.T__27) | (1 << pdp7Parser.T__28) | (1 << pdp7Parser.T__29) | (1 << pdp7Parser.T__30))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (pdp7Parser.T__31 - 32)) | (1 << (pdp7Parser.T__32 - 32)) | (1 << (pdp7Parser.T__33 - 32)) | (1 << (pdp7Parser.T__34 - 32)) | (1 << (pdp7Parser.T__35 - 32)) | (1 << (pdp7Parser.T__36 - 32)) | (1 << (pdp7Parser.T__37 - 32)) | (1 << (pdp7Parser.T__38 - 32)) | (1 << (pdp7Parser.T__39 - 32)) | (1 << (pdp7Parser.T__40 - 32)) | (1 << (pdp7Parser.T__41 - 32)) | (1 << (pdp7Parser.T__42 - 32)) | (1 << (pdp7Parser.T__43 - 32)) | (1 << (pdp7Parser.T__44 - 32)) | (1 << (pdp7Parser.T__45 - 32)) | (1 << (pdp7Parser.T__46 - 32)) | (1 << (pdp7Parser.T__47 - 32)) | (1 << (pdp7Parser.T__48 - 32)) | (1 << (pdp7Parser.T__49 - 32)) | (1 << (pdp7Parser.T__50 - 32)) | (1 << (pdp7Parser.T__51 - 32)) | (1 << (pdp7Parser.T__52 - 32)) | (1 << (pdp7Parser.T__53 - 32)) | (1 << (pdp7Parser.T__54 - 32)) | (1 << (pdp7Parser.T__55 - 32)) | (1 << (pdp7Parser.T__56 - 32)) | (1 << (pdp7Parser.T__57 - 32)) | (1 << (pdp7Parser.T__58 - 32)) | (1 << (pdp7Parser.T__59 - 32)) | (1 << (pdp7Parser.T__60 - 32)) | (1 << (pdp7Parser.T__61 - 32)) | (1 << (pdp7Parser.T__62 - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (pdp7Parser.T__63 - 64)) | (1 << (pdp7Parser.T__64 - 64)) | (1 << (pdp7Parser.T__65 - 64)) | (1 << (pdp7Parser.T__66 - 64)) | (1 << (pdp7Parser.T__67 - 64)) | (1 << (pdp7Parser.T__68 - 64)) | (1 << (pdp7Parser.T__69 - 64)) | (1 << (pdp7Parser.T__70 - 64)) | (1 << (pdp7Parser.T__71 - 64)) | (1 << (pdp7Parser.T__72 - 64)) | (1 << (pdp7Parser.T__73 - 64)) | (1 << (pdp7Parser.T__74 - 64)) | (1 << (pdp7Parser.T__75 - 64)) | (1 << (pdp7Parser.T__76 - 64)) | (1 << (pdp7Parser.T__77 - 64)) | (1 << (pdp7Parser.T__78 - 64)) | (1 << (pdp7Parser.T__79 - 64)) | (1 << (pdp7Parser.T__80 - 64)) | (1 << (pdp7Parser.T__81 - 64)) | (1 << (pdp7Parser.T__82 - 64)) | (1 << (pdp7Parser.T__83 - 64)) | (1 << (pdp7Parser.T__84 - 64)) | (1 << (pdp7Parser.T__85 - 64)) | (1 << (pdp7Parser.T__86 - 64)) | (1 << (pdp7Parser.T__87 - 64)) | (1 << (pdp7Parser.T__88 - 64)) | (1 << (pdp7Parser.T__89 - 64)) | (1 << (pdp7Parser.T__90 - 64)) | (1 << (pdp7Parser.T__91 - 64)) | (1 << (pdp7Parser.T__92 - 64)) | (1 << (pdp7Parser.T__93 - 64)) | (1 << (pdp7Parser.LOC - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (pdp7Parser.RELOC - 96)) | (1 << (pdp7Parser.MINUS - 96)) | (1 << (pdp7Parser.LABEL - 96)) | (1 << (pdp7Parser.IDENTIFIER - 96)) | (1 << (pdp7Parser.NUMERIC_LITERAL - 96)) | (1 << (pdp7Parser.DECIMAL - 96)) | (1 << (pdp7Parser.OCTAL - 96)) | (1 << (pdp7Parser.DECIMAL_MINUS - 96)) | (1 << (pdp7Parser.STRING - 96)) | (1 << (pdp7Parser.CHAR - 96)) | (1 << (pdp7Parser.COMMENT - 96)))) !== 0)) {
				{
				this.state = 44;
				this.line();
				}
			}

			this.state = 47;
			this.match(pdp7Parser.EOF);
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
		this.enterRule(_localctx, 2, pdp7Parser.RULE_line);
		let _la: number;
		try {
			this.state = 54;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case pdp7Parser.T__3:
			case pdp7Parser.T__4:
			case pdp7Parser.T__5:
			case pdp7Parser.T__6:
			case pdp7Parser.T__7:
			case pdp7Parser.T__8:
			case pdp7Parser.T__9:
			case pdp7Parser.T__10:
			case pdp7Parser.T__11:
			case pdp7Parser.T__12:
			case pdp7Parser.T__13:
			case pdp7Parser.T__14:
			case pdp7Parser.T__15:
			case pdp7Parser.T__16:
			case pdp7Parser.T__17:
			case pdp7Parser.T__18:
			case pdp7Parser.T__19:
			case pdp7Parser.T__20:
			case pdp7Parser.T__21:
			case pdp7Parser.T__22:
			case pdp7Parser.T__23:
			case pdp7Parser.T__24:
			case pdp7Parser.T__25:
			case pdp7Parser.T__26:
			case pdp7Parser.T__27:
			case pdp7Parser.T__28:
			case pdp7Parser.T__29:
			case pdp7Parser.T__30:
			case pdp7Parser.T__31:
			case pdp7Parser.T__32:
			case pdp7Parser.T__33:
			case pdp7Parser.T__34:
			case pdp7Parser.T__35:
			case pdp7Parser.T__36:
			case pdp7Parser.T__37:
			case pdp7Parser.T__38:
			case pdp7Parser.T__39:
			case pdp7Parser.T__40:
			case pdp7Parser.T__41:
			case pdp7Parser.T__42:
			case pdp7Parser.T__43:
			case pdp7Parser.T__44:
			case pdp7Parser.T__45:
			case pdp7Parser.T__46:
			case pdp7Parser.T__47:
			case pdp7Parser.T__48:
			case pdp7Parser.T__49:
			case pdp7Parser.T__50:
			case pdp7Parser.T__51:
			case pdp7Parser.T__52:
			case pdp7Parser.T__53:
			case pdp7Parser.T__54:
			case pdp7Parser.T__55:
			case pdp7Parser.T__56:
			case pdp7Parser.T__57:
			case pdp7Parser.T__58:
			case pdp7Parser.T__59:
			case pdp7Parser.T__60:
			case pdp7Parser.T__61:
			case pdp7Parser.T__62:
			case pdp7Parser.T__63:
			case pdp7Parser.T__64:
			case pdp7Parser.T__65:
			case pdp7Parser.T__66:
			case pdp7Parser.T__67:
			case pdp7Parser.T__68:
			case pdp7Parser.T__69:
			case pdp7Parser.T__70:
			case pdp7Parser.T__71:
			case pdp7Parser.T__72:
			case pdp7Parser.T__73:
			case pdp7Parser.T__74:
			case pdp7Parser.T__75:
			case pdp7Parser.T__76:
			case pdp7Parser.T__77:
			case pdp7Parser.T__78:
			case pdp7Parser.T__79:
			case pdp7Parser.T__80:
			case pdp7Parser.T__81:
			case pdp7Parser.T__82:
			case pdp7Parser.T__83:
			case pdp7Parser.T__84:
			case pdp7Parser.T__85:
			case pdp7Parser.T__86:
			case pdp7Parser.T__87:
			case pdp7Parser.T__88:
			case pdp7Parser.T__89:
			case pdp7Parser.T__90:
			case pdp7Parser.T__91:
			case pdp7Parser.T__92:
			case pdp7Parser.T__93:
			case pdp7Parser.LOC:
			case pdp7Parser.RELOC:
			case pdp7Parser.MINUS:
			case pdp7Parser.LABEL:
			case pdp7Parser.IDENTIFIER:
			case pdp7Parser.NUMERIC_LITERAL:
			case pdp7Parser.DECIMAL:
			case pdp7Parser.OCTAL:
			case pdp7Parser.DECIMAL_MINUS:
			case pdp7Parser.STRING:
			case pdp7Parser.CHAR:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 49;
				this.declarations();
				this.state = 51;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === pdp7Parser.COMMENT) {
					{
					this.state = 50;
					this.comment();
					}
				}

				}
				break;
			case pdp7Parser.COMMENT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 53;
				this.comment();
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
	public declarations(): DeclarationsContext {
		let _localctx: DeclarationsContext = new DeclarationsContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, pdp7Parser.RULE_declarations);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 56;
			this.declaration();
			this.state = 63;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === pdp7Parser.T__0) {
				{
				{
				this.state = 57;
				this.match(pdp7Parser.T__0);
				this.state = 59;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << pdp7Parser.T__3) | (1 << pdp7Parser.T__4) | (1 << pdp7Parser.T__5) | (1 << pdp7Parser.T__6) | (1 << pdp7Parser.T__7) | (1 << pdp7Parser.T__8) | (1 << pdp7Parser.T__9) | (1 << pdp7Parser.T__10) | (1 << pdp7Parser.T__11) | (1 << pdp7Parser.T__12) | (1 << pdp7Parser.T__13) | (1 << pdp7Parser.T__14) | (1 << pdp7Parser.T__15) | (1 << pdp7Parser.T__16) | (1 << pdp7Parser.T__17) | (1 << pdp7Parser.T__18) | (1 << pdp7Parser.T__19) | (1 << pdp7Parser.T__20) | (1 << pdp7Parser.T__21) | (1 << pdp7Parser.T__22) | (1 << pdp7Parser.T__23) | (1 << pdp7Parser.T__24) | (1 << pdp7Parser.T__25) | (1 << pdp7Parser.T__26) | (1 << pdp7Parser.T__27) | (1 << pdp7Parser.T__28) | (1 << pdp7Parser.T__29) | (1 << pdp7Parser.T__30))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (pdp7Parser.T__31 - 32)) | (1 << (pdp7Parser.T__32 - 32)) | (1 << (pdp7Parser.T__33 - 32)) | (1 << (pdp7Parser.T__34 - 32)) | (1 << (pdp7Parser.T__35 - 32)) | (1 << (pdp7Parser.T__36 - 32)) | (1 << (pdp7Parser.T__37 - 32)) | (1 << (pdp7Parser.T__38 - 32)) | (1 << (pdp7Parser.T__39 - 32)) | (1 << (pdp7Parser.T__40 - 32)) | (1 << (pdp7Parser.T__41 - 32)) | (1 << (pdp7Parser.T__42 - 32)) | (1 << (pdp7Parser.T__43 - 32)) | (1 << (pdp7Parser.T__44 - 32)) | (1 << (pdp7Parser.T__45 - 32)) | (1 << (pdp7Parser.T__46 - 32)) | (1 << (pdp7Parser.T__47 - 32)) | (1 << (pdp7Parser.T__48 - 32)) | (1 << (pdp7Parser.T__49 - 32)) | (1 << (pdp7Parser.T__50 - 32)) | (1 << (pdp7Parser.T__51 - 32)) | (1 << (pdp7Parser.T__52 - 32)) | (1 << (pdp7Parser.T__53 - 32)) | (1 << (pdp7Parser.T__54 - 32)) | (1 << (pdp7Parser.T__55 - 32)) | (1 << (pdp7Parser.T__56 - 32)) | (1 << (pdp7Parser.T__57 - 32)) | (1 << (pdp7Parser.T__58 - 32)) | (1 << (pdp7Parser.T__59 - 32)) | (1 << (pdp7Parser.T__60 - 32)) | (1 << (pdp7Parser.T__61 - 32)) | (1 << (pdp7Parser.T__62 - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (pdp7Parser.T__63 - 64)) | (1 << (pdp7Parser.T__64 - 64)) | (1 << (pdp7Parser.T__65 - 64)) | (1 << (pdp7Parser.T__66 - 64)) | (1 << (pdp7Parser.T__67 - 64)) | (1 << (pdp7Parser.T__68 - 64)) | (1 << (pdp7Parser.T__69 - 64)) | (1 << (pdp7Parser.T__70 - 64)) | (1 << (pdp7Parser.T__71 - 64)) | (1 << (pdp7Parser.T__72 - 64)) | (1 << (pdp7Parser.T__73 - 64)) | (1 << (pdp7Parser.T__74 - 64)) | (1 << (pdp7Parser.T__75 - 64)) | (1 << (pdp7Parser.T__76 - 64)) | (1 << (pdp7Parser.T__77 - 64)) | (1 << (pdp7Parser.T__78 - 64)) | (1 << (pdp7Parser.T__79 - 64)) | (1 << (pdp7Parser.T__80 - 64)) | (1 << (pdp7Parser.T__81 - 64)) | (1 << (pdp7Parser.T__82 - 64)) | (1 << (pdp7Parser.T__83 - 64)) | (1 << (pdp7Parser.T__84 - 64)) | (1 << (pdp7Parser.T__85 - 64)) | (1 << (pdp7Parser.T__86 - 64)) | (1 << (pdp7Parser.T__87 - 64)) | (1 << (pdp7Parser.T__88 - 64)) | (1 << (pdp7Parser.T__89 - 64)) | (1 << (pdp7Parser.T__90 - 64)) | (1 << (pdp7Parser.T__91 - 64)) | (1 << (pdp7Parser.T__92 - 64)) | (1 << (pdp7Parser.T__93 - 64)) | (1 << (pdp7Parser.LOC - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (pdp7Parser.RELOC - 96)) | (1 << (pdp7Parser.MINUS - 96)) | (1 << (pdp7Parser.LABEL - 96)) | (1 << (pdp7Parser.IDENTIFIER - 96)) | (1 << (pdp7Parser.NUMERIC_LITERAL - 96)) | (1 << (pdp7Parser.DECIMAL - 96)) | (1 << (pdp7Parser.OCTAL - 96)) | (1 << (pdp7Parser.DECIMAL_MINUS - 96)) | (1 << (pdp7Parser.STRING - 96)) | (1 << (pdp7Parser.CHAR - 96)))) !== 0)) {
					{
					this.state = 58;
					this.declaration();
					}
				}

				}
				}
				this.state = 65;
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
	public declaration(): DeclarationContext {
		let _localctx: DeclarationContext = new DeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, pdp7Parser.RULE_declaration);
		let _la: number;
		try {
			this.state = 82;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case pdp7Parser.LABEL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 67;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 66;
					this.label();
					}
					}
					this.state = 69;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === pdp7Parser.LABEL);
				this.state = 74;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << pdp7Parser.T__3) | (1 << pdp7Parser.T__4) | (1 << pdp7Parser.T__5) | (1 << pdp7Parser.T__6) | (1 << pdp7Parser.T__7) | (1 << pdp7Parser.T__8) | (1 << pdp7Parser.T__9) | (1 << pdp7Parser.T__10) | (1 << pdp7Parser.T__11) | (1 << pdp7Parser.T__12) | (1 << pdp7Parser.T__13) | (1 << pdp7Parser.T__14) | (1 << pdp7Parser.T__15) | (1 << pdp7Parser.T__16) | (1 << pdp7Parser.T__17) | (1 << pdp7Parser.T__18) | (1 << pdp7Parser.T__19) | (1 << pdp7Parser.T__20) | (1 << pdp7Parser.T__21) | (1 << pdp7Parser.T__22) | (1 << pdp7Parser.T__23) | (1 << pdp7Parser.T__24) | (1 << pdp7Parser.T__25) | (1 << pdp7Parser.T__26) | (1 << pdp7Parser.T__27) | (1 << pdp7Parser.T__28) | (1 << pdp7Parser.T__29) | (1 << pdp7Parser.T__30))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (pdp7Parser.T__31 - 32)) | (1 << (pdp7Parser.T__32 - 32)) | (1 << (pdp7Parser.T__33 - 32)) | (1 << (pdp7Parser.T__34 - 32)) | (1 << (pdp7Parser.T__35 - 32)) | (1 << (pdp7Parser.T__36 - 32)) | (1 << (pdp7Parser.T__37 - 32)) | (1 << (pdp7Parser.T__38 - 32)) | (1 << (pdp7Parser.T__39 - 32)) | (1 << (pdp7Parser.T__40 - 32)) | (1 << (pdp7Parser.T__41 - 32)) | (1 << (pdp7Parser.T__42 - 32)) | (1 << (pdp7Parser.T__43 - 32)) | (1 << (pdp7Parser.T__44 - 32)) | (1 << (pdp7Parser.T__45 - 32)) | (1 << (pdp7Parser.T__46 - 32)) | (1 << (pdp7Parser.T__47 - 32)) | (1 << (pdp7Parser.T__48 - 32)) | (1 << (pdp7Parser.T__49 - 32)) | (1 << (pdp7Parser.T__50 - 32)) | (1 << (pdp7Parser.T__51 - 32)) | (1 << (pdp7Parser.T__52 - 32)) | (1 << (pdp7Parser.T__53 - 32)) | (1 << (pdp7Parser.T__54 - 32)) | (1 << (pdp7Parser.T__55 - 32)) | (1 << (pdp7Parser.T__56 - 32)) | (1 << (pdp7Parser.T__57 - 32)) | (1 << (pdp7Parser.T__58 - 32)) | (1 << (pdp7Parser.T__59 - 32)) | (1 << (pdp7Parser.T__60 - 32)) | (1 << (pdp7Parser.T__61 - 32)) | (1 << (pdp7Parser.T__62 - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (pdp7Parser.T__63 - 64)) | (1 << (pdp7Parser.T__64 - 64)) | (1 << (pdp7Parser.T__65 - 64)) | (1 << (pdp7Parser.T__66 - 64)) | (1 << (pdp7Parser.T__67 - 64)) | (1 << (pdp7Parser.T__68 - 64)) | (1 << (pdp7Parser.T__69 - 64)) | (1 << (pdp7Parser.T__70 - 64)) | (1 << (pdp7Parser.T__71 - 64)) | (1 << (pdp7Parser.T__72 - 64)) | (1 << (pdp7Parser.T__73 - 64)) | (1 << (pdp7Parser.T__74 - 64)) | (1 << (pdp7Parser.T__75 - 64)) | (1 << (pdp7Parser.T__76 - 64)) | (1 << (pdp7Parser.T__77 - 64)) | (1 << (pdp7Parser.T__78 - 64)) | (1 << (pdp7Parser.T__79 - 64)) | (1 << (pdp7Parser.T__80 - 64)) | (1 << (pdp7Parser.T__81 - 64)) | (1 << (pdp7Parser.T__82 - 64)) | (1 << (pdp7Parser.T__83 - 64)) | (1 << (pdp7Parser.T__84 - 64)) | (1 << (pdp7Parser.T__85 - 64)) | (1 << (pdp7Parser.T__86 - 64)) | (1 << (pdp7Parser.T__87 - 64)) | (1 << (pdp7Parser.T__88 - 64)) | (1 << (pdp7Parser.T__89 - 64)) | (1 << (pdp7Parser.T__90 - 64)) | (1 << (pdp7Parser.T__91 - 64)) | (1 << (pdp7Parser.T__92 - 64)) | (1 << (pdp7Parser.T__93 - 64)) | (1 << (pdp7Parser.LOC - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (pdp7Parser.RELOC - 96)) | (1 << (pdp7Parser.MINUS - 96)) | (1 << (pdp7Parser.IDENTIFIER - 96)) | (1 << (pdp7Parser.NUMERIC_LITERAL - 96)) | (1 << (pdp7Parser.DECIMAL - 96)) | (1 << (pdp7Parser.OCTAL - 96)) | (1 << (pdp7Parser.DECIMAL_MINUS - 96)) | (1 << (pdp7Parser.STRING - 96)) | (1 << (pdp7Parser.CHAR - 96)))) !== 0)) {
					{
					{
					this.state = 71;
					this.declarationRight();
					}
					}
					this.state = 76;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			case pdp7Parser.T__3:
			case pdp7Parser.T__4:
			case pdp7Parser.T__5:
			case pdp7Parser.T__6:
			case pdp7Parser.T__7:
			case pdp7Parser.T__8:
			case pdp7Parser.T__9:
			case pdp7Parser.T__10:
			case pdp7Parser.T__11:
			case pdp7Parser.T__12:
			case pdp7Parser.T__13:
			case pdp7Parser.T__14:
			case pdp7Parser.T__15:
			case pdp7Parser.T__16:
			case pdp7Parser.T__17:
			case pdp7Parser.T__18:
			case pdp7Parser.T__19:
			case pdp7Parser.T__20:
			case pdp7Parser.T__21:
			case pdp7Parser.T__22:
			case pdp7Parser.T__23:
			case pdp7Parser.T__24:
			case pdp7Parser.T__25:
			case pdp7Parser.T__26:
			case pdp7Parser.T__27:
			case pdp7Parser.T__28:
			case pdp7Parser.T__29:
			case pdp7Parser.T__30:
			case pdp7Parser.T__31:
			case pdp7Parser.T__32:
			case pdp7Parser.T__33:
			case pdp7Parser.T__34:
			case pdp7Parser.T__35:
			case pdp7Parser.T__36:
			case pdp7Parser.T__37:
			case pdp7Parser.T__38:
			case pdp7Parser.T__39:
			case pdp7Parser.T__40:
			case pdp7Parser.T__41:
			case pdp7Parser.T__42:
			case pdp7Parser.T__43:
			case pdp7Parser.T__44:
			case pdp7Parser.T__45:
			case pdp7Parser.T__46:
			case pdp7Parser.T__47:
			case pdp7Parser.T__48:
			case pdp7Parser.T__49:
			case pdp7Parser.T__50:
			case pdp7Parser.T__51:
			case pdp7Parser.T__52:
			case pdp7Parser.T__53:
			case pdp7Parser.T__54:
			case pdp7Parser.T__55:
			case pdp7Parser.T__56:
			case pdp7Parser.T__57:
			case pdp7Parser.T__58:
			case pdp7Parser.T__59:
			case pdp7Parser.T__60:
			case pdp7Parser.T__61:
			case pdp7Parser.T__62:
			case pdp7Parser.T__63:
			case pdp7Parser.T__64:
			case pdp7Parser.T__65:
			case pdp7Parser.T__66:
			case pdp7Parser.T__67:
			case pdp7Parser.T__68:
			case pdp7Parser.T__69:
			case pdp7Parser.T__70:
			case pdp7Parser.T__71:
			case pdp7Parser.T__72:
			case pdp7Parser.T__73:
			case pdp7Parser.T__74:
			case pdp7Parser.T__75:
			case pdp7Parser.T__76:
			case pdp7Parser.T__77:
			case pdp7Parser.T__78:
			case pdp7Parser.T__79:
			case pdp7Parser.T__80:
			case pdp7Parser.T__81:
			case pdp7Parser.T__82:
			case pdp7Parser.T__83:
			case pdp7Parser.T__84:
			case pdp7Parser.T__85:
			case pdp7Parser.T__86:
			case pdp7Parser.T__87:
			case pdp7Parser.T__88:
			case pdp7Parser.T__89:
			case pdp7Parser.T__90:
			case pdp7Parser.T__91:
			case pdp7Parser.T__92:
			case pdp7Parser.T__93:
			case pdp7Parser.LOC:
			case pdp7Parser.RELOC:
			case pdp7Parser.MINUS:
			case pdp7Parser.IDENTIFIER:
			case pdp7Parser.NUMERIC_LITERAL:
			case pdp7Parser.DECIMAL:
			case pdp7Parser.OCTAL:
			case pdp7Parser.DECIMAL_MINUS:
			case pdp7Parser.STRING:
			case pdp7Parser.CHAR:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 78;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 77;
					this.declarationRight();
					}
					}
					this.state = 80;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << pdp7Parser.T__3) | (1 << pdp7Parser.T__4) | (1 << pdp7Parser.T__5) | (1 << pdp7Parser.T__6) | (1 << pdp7Parser.T__7) | (1 << pdp7Parser.T__8) | (1 << pdp7Parser.T__9) | (1 << pdp7Parser.T__10) | (1 << pdp7Parser.T__11) | (1 << pdp7Parser.T__12) | (1 << pdp7Parser.T__13) | (1 << pdp7Parser.T__14) | (1 << pdp7Parser.T__15) | (1 << pdp7Parser.T__16) | (1 << pdp7Parser.T__17) | (1 << pdp7Parser.T__18) | (1 << pdp7Parser.T__19) | (1 << pdp7Parser.T__20) | (1 << pdp7Parser.T__21) | (1 << pdp7Parser.T__22) | (1 << pdp7Parser.T__23) | (1 << pdp7Parser.T__24) | (1 << pdp7Parser.T__25) | (1 << pdp7Parser.T__26) | (1 << pdp7Parser.T__27) | (1 << pdp7Parser.T__28) | (1 << pdp7Parser.T__29) | (1 << pdp7Parser.T__30))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (pdp7Parser.T__31 - 32)) | (1 << (pdp7Parser.T__32 - 32)) | (1 << (pdp7Parser.T__33 - 32)) | (1 << (pdp7Parser.T__34 - 32)) | (1 << (pdp7Parser.T__35 - 32)) | (1 << (pdp7Parser.T__36 - 32)) | (1 << (pdp7Parser.T__37 - 32)) | (1 << (pdp7Parser.T__38 - 32)) | (1 << (pdp7Parser.T__39 - 32)) | (1 << (pdp7Parser.T__40 - 32)) | (1 << (pdp7Parser.T__41 - 32)) | (1 << (pdp7Parser.T__42 - 32)) | (1 << (pdp7Parser.T__43 - 32)) | (1 << (pdp7Parser.T__44 - 32)) | (1 << (pdp7Parser.T__45 - 32)) | (1 << (pdp7Parser.T__46 - 32)) | (1 << (pdp7Parser.T__47 - 32)) | (1 << (pdp7Parser.T__48 - 32)) | (1 << (pdp7Parser.T__49 - 32)) | (1 << (pdp7Parser.T__50 - 32)) | (1 << (pdp7Parser.T__51 - 32)) | (1 << (pdp7Parser.T__52 - 32)) | (1 << (pdp7Parser.T__53 - 32)) | (1 << (pdp7Parser.T__54 - 32)) | (1 << (pdp7Parser.T__55 - 32)) | (1 << (pdp7Parser.T__56 - 32)) | (1 << (pdp7Parser.T__57 - 32)) | (1 << (pdp7Parser.T__58 - 32)) | (1 << (pdp7Parser.T__59 - 32)) | (1 << (pdp7Parser.T__60 - 32)) | (1 << (pdp7Parser.T__61 - 32)) | (1 << (pdp7Parser.T__62 - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (pdp7Parser.T__63 - 64)) | (1 << (pdp7Parser.T__64 - 64)) | (1 << (pdp7Parser.T__65 - 64)) | (1 << (pdp7Parser.T__66 - 64)) | (1 << (pdp7Parser.T__67 - 64)) | (1 << (pdp7Parser.T__68 - 64)) | (1 << (pdp7Parser.T__69 - 64)) | (1 << (pdp7Parser.T__70 - 64)) | (1 << (pdp7Parser.T__71 - 64)) | (1 << (pdp7Parser.T__72 - 64)) | (1 << (pdp7Parser.T__73 - 64)) | (1 << (pdp7Parser.T__74 - 64)) | (1 << (pdp7Parser.T__75 - 64)) | (1 << (pdp7Parser.T__76 - 64)) | (1 << (pdp7Parser.T__77 - 64)) | (1 << (pdp7Parser.T__78 - 64)) | (1 << (pdp7Parser.T__79 - 64)) | (1 << (pdp7Parser.T__80 - 64)) | (1 << (pdp7Parser.T__81 - 64)) | (1 << (pdp7Parser.T__82 - 64)) | (1 << (pdp7Parser.T__83 - 64)) | (1 << (pdp7Parser.T__84 - 64)) | (1 << (pdp7Parser.T__85 - 64)) | (1 << (pdp7Parser.T__86 - 64)) | (1 << (pdp7Parser.T__87 - 64)) | (1 << (pdp7Parser.T__88 - 64)) | (1 << (pdp7Parser.T__89 - 64)) | (1 << (pdp7Parser.T__90 - 64)) | (1 << (pdp7Parser.T__91 - 64)) | (1 << (pdp7Parser.T__92 - 64)) | (1 << (pdp7Parser.T__93 - 64)) | (1 << (pdp7Parser.LOC - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (pdp7Parser.RELOC - 96)) | (1 << (pdp7Parser.MINUS - 96)) | (1 << (pdp7Parser.IDENTIFIER - 96)) | (1 << (pdp7Parser.NUMERIC_LITERAL - 96)) | (1 << (pdp7Parser.DECIMAL - 96)) | (1 << (pdp7Parser.OCTAL - 96)) | (1 << (pdp7Parser.DECIMAL_MINUS - 96)) | (1 << (pdp7Parser.STRING - 96)) | (1 << (pdp7Parser.CHAR - 96)))) !== 0));
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
	public declarationRight(): DeclarationRightContext {
		let _localctx: DeclarationRightContext = new DeclarationRightContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, pdp7Parser.RULE_declarationRight);
		try {
			this.state = 87;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 11, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 84;
				this.instruction();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 85;
				this.assignment();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 86;
				this.expression();
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
	public instruction(): InstructionContext {
		let _localctx: InstructionContext = new InstructionContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, pdp7Parser.RULE_instruction);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 89;
			this.opcode();
			this.state = 93;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 12, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 90;
					this.argument();
					}
					}
				}
				this.state = 95;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 12, this._ctx);
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
	public argument(): ArgumentContext {
		let _localctx: ArgumentContext = new ArgumentContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, pdp7Parser.RULE_argument);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 96;
			this.expression();
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
	public assignment(): AssignmentContext {
		let _localctx: AssignmentContext = new AssignmentContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, pdp7Parser.RULE_assignment);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 98;
			this.symbol();
			this.state = 99;
			this.match(pdp7Parser.T__1);
			this.state = 100;
			this.expression();
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
	public symbol(): SymbolContext {
		let _localctx: SymbolContext = new SymbolContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, pdp7Parser.RULE_symbol);
		try {
			this.state = 106;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case pdp7Parser.T__3:
			case pdp7Parser.T__4:
			case pdp7Parser.T__5:
			case pdp7Parser.T__6:
			case pdp7Parser.T__7:
			case pdp7Parser.T__8:
			case pdp7Parser.T__9:
			case pdp7Parser.T__10:
			case pdp7Parser.T__11:
			case pdp7Parser.T__12:
			case pdp7Parser.T__13:
			case pdp7Parser.T__14:
			case pdp7Parser.T__15:
			case pdp7Parser.T__16:
			case pdp7Parser.T__17:
			case pdp7Parser.T__18:
			case pdp7Parser.T__19:
			case pdp7Parser.T__20:
			case pdp7Parser.T__21:
			case pdp7Parser.T__22:
			case pdp7Parser.T__23:
			case pdp7Parser.T__24:
			case pdp7Parser.T__25:
			case pdp7Parser.T__26:
			case pdp7Parser.T__27:
			case pdp7Parser.T__28:
			case pdp7Parser.T__29:
			case pdp7Parser.T__30:
			case pdp7Parser.T__31:
			case pdp7Parser.T__32:
			case pdp7Parser.T__33:
			case pdp7Parser.T__34:
			case pdp7Parser.T__35:
			case pdp7Parser.T__36:
			case pdp7Parser.T__37:
			case pdp7Parser.T__38:
			case pdp7Parser.T__39:
			case pdp7Parser.T__40:
			case pdp7Parser.T__41:
			case pdp7Parser.T__42:
			case pdp7Parser.T__43:
			case pdp7Parser.T__44:
			case pdp7Parser.T__45:
			case pdp7Parser.T__46:
			case pdp7Parser.T__47:
			case pdp7Parser.T__48:
			case pdp7Parser.T__49:
			case pdp7Parser.T__50:
			case pdp7Parser.T__51:
			case pdp7Parser.T__52:
			case pdp7Parser.T__53:
			case pdp7Parser.T__54:
			case pdp7Parser.T__55:
			case pdp7Parser.T__56:
			case pdp7Parser.T__57:
			case pdp7Parser.T__58:
			case pdp7Parser.T__59:
			case pdp7Parser.T__60:
			case pdp7Parser.T__61:
			case pdp7Parser.T__62:
			case pdp7Parser.T__63:
			case pdp7Parser.T__64:
			case pdp7Parser.T__65:
			case pdp7Parser.T__66:
			case pdp7Parser.T__67:
			case pdp7Parser.T__68:
			case pdp7Parser.T__69:
			case pdp7Parser.T__70:
			case pdp7Parser.T__71:
			case pdp7Parser.T__72:
			case pdp7Parser.T__73:
			case pdp7Parser.T__74:
			case pdp7Parser.T__75:
			case pdp7Parser.T__76:
			case pdp7Parser.T__77:
			case pdp7Parser.T__78:
			case pdp7Parser.T__79:
			case pdp7Parser.T__80:
			case pdp7Parser.T__81:
			case pdp7Parser.T__82:
			case pdp7Parser.T__83:
			case pdp7Parser.T__84:
			case pdp7Parser.T__85:
			case pdp7Parser.T__86:
			case pdp7Parser.T__87:
			case pdp7Parser.T__88:
			case pdp7Parser.T__89:
			case pdp7Parser.T__90:
			case pdp7Parser.T__91:
			case pdp7Parser.T__92:
			case pdp7Parser.T__93:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 102;
				this.opcode();
				}
				break;
			case pdp7Parser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 103;
				this.variable();
				}
				break;
			case pdp7Parser.LOC:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 104;
				this.match(pdp7Parser.LOC);
				}
				break;
			case pdp7Parser.RELOC:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 105;
				this.match(pdp7Parser.RELOC);
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
	public expression(): ExpressionContext {
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, pdp7Parser.RULE_expression);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 108;
			this.multiplyingExpression();
			this.state = 113;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 14, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 109;
					_la = this._input.LA(1);
					if (!(_la === pdp7Parser.PLUS || _la === pdp7Parser.MINUS)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					this.state = 110;
					this.multiplyingExpression();
					}
					}
				}
				this.state = 115;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 14, this._ctx);
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
	public multiplyingExpression(): MultiplyingExpressionContext {
		let _localctx: MultiplyingExpressionContext = new MultiplyingExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, pdp7Parser.RULE_multiplyingExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 116;
			this.atom();
			this.state = 121;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === pdp7Parser.TIMES || _la === pdp7Parser.DIV) {
				{
				{
				this.state = 117;
				_la = this._input.LA(1);
				if (!(_la === pdp7Parser.TIMES || _la === pdp7Parser.DIV)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 118;
				this.atom();
				}
				}
				this.state = 123;
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
	public atom(): AtomContext {
		let _localctx: AtomContext = new AtomContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, pdp7Parser.RULE_atom);
		try {
			this.state = 135;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case pdp7Parser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 124;
				this.variable();
				}
				break;
			case pdp7Parser.LOC:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 125;
				this.match(pdp7Parser.LOC);
				}
				break;
			case pdp7Parser.CHAR:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 126;
				this.match(pdp7Parser.CHAR);
				}
				break;
			case pdp7Parser.RELOC:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 127;
				this.match(pdp7Parser.RELOC);
				}
				break;
			case pdp7Parser.STRING:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 128;
				this.string();
				}
				break;
			case pdp7Parser.DECIMAL:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 129;
				this.match(pdp7Parser.DECIMAL);
				}
				break;
			case pdp7Parser.DECIMAL_MINUS:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 130;
				this.match(pdp7Parser.DECIMAL_MINUS);
				}
				break;
			case pdp7Parser.OCTAL:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 131;
				this.match(pdp7Parser.OCTAL);
				}
				break;
			case pdp7Parser.NUMERIC_LITERAL:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 132;
				this.match(pdp7Parser.NUMERIC_LITERAL);
				}
				break;
			case pdp7Parser.MINUS:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 133;
				this.match(pdp7Parser.MINUS);
				this.state = 134;
				this.atom();
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
	public string(): StringContext {
		let _localctx: StringContext = new StringContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, pdp7Parser.RULE_string);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 137;
			this.match(pdp7Parser.STRING);
			this.state = 141;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 17, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 138;
					this.match(pdp7Parser.NUMERIC_LITERAL);
					}
					}
				}
				this.state = 143;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 17, this._ctx);
			}
			this.state = 145;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === pdp7Parser.T__2) {
				{
				this.state = 144;
				this.match(pdp7Parser.T__2);
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
	public eol(): EolContext {
		let _localctx: EolContext = new EolContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, pdp7Parser.RULE_eol);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 147;
			this.match(pdp7Parser.EOL);
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
	public comment(): CommentContext {
		let _localctx: CommentContext = new CommentContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, pdp7Parser.RULE_comment);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 149;
			this.match(pdp7Parser.COMMENT);
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
	public label(): LabelContext {
		let _localctx: LabelContext = new LabelContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, pdp7Parser.RULE_label);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 151;
			this.match(pdp7Parser.LABEL);
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
	public variable(): VariableContext {
		let _localctx: VariableContext = new VariableContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, pdp7Parser.RULE_variable);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 153;
			this.match(pdp7Parser.IDENTIFIER);
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
	public opcode(): OpcodeContext {
		let _localctx: OpcodeContext = new OpcodeContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, pdp7Parser.RULE_opcode);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 155;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << pdp7Parser.T__3) | (1 << pdp7Parser.T__4) | (1 << pdp7Parser.T__5) | (1 << pdp7Parser.T__6) | (1 << pdp7Parser.T__7) | (1 << pdp7Parser.T__8) | (1 << pdp7Parser.T__9) | (1 << pdp7Parser.T__10) | (1 << pdp7Parser.T__11) | (1 << pdp7Parser.T__12) | (1 << pdp7Parser.T__13) | (1 << pdp7Parser.T__14) | (1 << pdp7Parser.T__15) | (1 << pdp7Parser.T__16) | (1 << pdp7Parser.T__17) | (1 << pdp7Parser.T__18) | (1 << pdp7Parser.T__19) | (1 << pdp7Parser.T__20) | (1 << pdp7Parser.T__21) | (1 << pdp7Parser.T__22) | (1 << pdp7Parser.T__23) | (1 << pdp7Parser.T__24) | (1 << pdp7Parser.T__25) | (1 << pdp7Parser.T__26) | (1 << pdp7Parser.T__27) | (1 << pdp7Parser.T__28) | (1 << pdp7Parser.T__29) | (1 << pdp7Parser.T__30))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (pdp7Parser.T__31 - 32)) | (1 << (pdp7Parser.T__32 - 32)) | (1 << (pdp7Parser.T__33 - 32)) | (1 << (pdp7Parser.T__34 - 32)) | (1 << (pdp7Parser.T__35 - 32)) | (1 << (pdp7Parser.T__36 - 32)) | (1 << (pdp7Parser.T__37 - 32)) | (1 << (pdp7Parser.T__38 - 32)) | (1 << (pdp7Parser.T__39 - 32)) | (1 << (pdp7Parser.T__40 - 32)) | (1 << (pdp7Parser.T__41 - 32)) | (1 << (pdp7Parser.T__42 - 32)) | (1 << (pdp7Parser.T__43 - 32)) | (1 << (pdp7Parser.T__44 - 32)) | (1 << (pdp7Parser.T__45 - 32)) | (1 << (pdp7Parser.T__46 - 32)) | (1 << (pdp7Parser.T__47 - 32)) | (1 << (pdp7Parser.T__48 - 32)) | (1 << (pdp7Parser.T__49 - 32)) | (1 << (pdp7Parser.T__50 - 32)) | (1 << (pdp7Parser.T__51 - 32)) | (1 << (pdp7Parser.T__52 - 32)) | (1 << (pdp7Parser.T__53 - 32)) | (1 << (pdp7Parser.T__54 - 32)) | (1 << (pdp7Parser.T__55 - 32)) | (1 << (pdp7Parser.T__56 - 32)) | (1 << (pdp7Parser.T__57 - 32)) | (1 << (pdp7Parser.T__58 - 32)) | (1 << (pdp7Parser.T__59 - 32)) | (1 << (pdp7Parser.T__60 - 32)) | (1 << (pdp7Parser.T__61 - 32)) | (1 << (pdp7Parser.T__62 - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (pdp7Parser.T__63 - 64)) | (1 << (pdp7Parser.T__64 - 64)) | (1 << (pdp7Parser.T__65 - 64)) | (1 << (pdp7Parser.T__66 - 64)) | (1 << (pdp7Parser.T__67 - 64)) | (1 << (pdp7Parser.T__68 - 64)) | (1 << (pdp7Parser.T__69 - 64)) | (1 << (pdp7Parser.T__70 - 64)) | (1 << (pdp7Parser.T__71 - 64)) | (1 << (pdp7Parser.T__72 - 64)) | (1 << (pdp7Parser.T__73 - 64)) | (1 << (pdp7Parser.T__74 - 64)) | (1 << (pdp7Parser.T__75 - 64)) | (1 << (pdp7Parser.T__76 - 64)) | (1 << (pdp7Parser.T__77 - 64)) | (1 << (pdp7Parser.T__78 - 64)) | (1 << (pdp7Parser.T__79 - 64)) | (1 << (pdp7Parser.T__80 - 64)) | (1 << (pdp7Parser.T__81 - 64)) | (1 << (pdp7Parser.T__82 - 64)) | (1 << (pdp7Parser.T__83 - 64)) | (1 << (pdp7Parser.T__84 - 64)) | (1 << (pdp7Parser.T__85 - 64)) | (1 << (pdp7Parser.T__86 - 64)) | (1 << (pdp7Parser.T__87 - 64)) | (1 << (pdp7Parser.T__88 - 64)) | (1 << (pdp7Parser.T__89 - 64)) | (1 << (pdp7Parser.T__90 - 64)) | (1 << (pdp7Parser.T__91 - 64)) | (1 << (pdp7Parser.T__92 - 64)) | (1 << (pdp7Parser.T__93 - 64)))) !== 0))) {
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03q\xA0\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x03\x02\x05\x02(\n\x02\x03\x02\x06\x02+\n\x02\r\x02\x0E\x02" +
		",\x03\x02\x05\x020\n\x02\x03\x02\x03\x02\x03\x03\x03\x03\x05\x036\n\x03" +
		"\x03\x03\x05\x039\n\x03\x03\x04\x03\x04\x03\x04\x05\x04>\n\x04\x07\x04" +
		"@\n\x04\f\x04\x0E\x04C\v\x04\x03\x05\x06\x05F\n\x05\r\x05\x0E\x05G\x03" +
		"\x05\x07\x05K\n\x05\f\x05\x0E\x05N\v\x05\x03\x05\x06\x05Q\n\x05\r\x05" +
		"\x0E\x05R\x05\x05U\n\x05\x03\x06\x03\x06\x03\x06\x05\x06Z\n\x06\x03\x07" +
		"\x03\x07\x07\x07^\n\x07\f\x07\x0E\x07a\v\x07\x03\b\x03\b\x03\t\x03\t\x03" +
		"\t\x03\t\x03\n\x03\n\x03\n\x03\n\x05\nm\n\n\x03\v\x03\v\x03\v\x07\vr\n" +
		"\v\f\v\x0E\vu\v\v\x03\f\x03\f\x03\f\x07\fz\n\f\f\f\x0E\f}\v\f\x03\r\x03" +
		"\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x05\r\x8A\n\r" +
		"\x03\x0E\x03\x0E\x07\x0E\x8E\n\x0E\f\x0E\x0E\x0E\x91\v\x0E\x03\x0E\x05" +
		"\x0E\x94\n\x0E\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x11\x03\x11\x03\x12" +
		"\x03\x12\x03\x13\x03\x13\x03\x13\x02\x02\x02\x14\x02\x02\x04\x02\x06\x02" +
		"\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A" +
		"\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02\x02\x05\x03\x02cd\x03\x02ef\x03\x02" +
		"\x06`\x02\xAB\x02*\x03\x02\x02\x02\x048\x03\x02\x02\x02\x06:\x03\x02\x02" +
		"\x02\bT\x03\x02\x02\x02\nY\x03\x02\x02\x02\f[\x03\x02\x02\x02\x0Eb\x03" +
		"\x02\x02\x02\x10d\x03\x02\x02\x02\x12l\x03\x02\x02\x02\x14n\x03\x02\x02" +
		"\x02\x16v\x03\x02\x02\x02\x18\x89\x03\x02\x02\x02\x1A\x8B\x03\x02\x02" +
		"\x02\x1C\x95\x03\x02\x02\x02\x1E\x97\x03\x02\x02\x02 \x99\x03\x02\x02" +
		"\x02\"\x9B\x03\x02\x02\x02$\x9D\x03\x02\x02\x02&(\x05\x04\x03\x02\'&\x03" +
		"\x02\x02\x02\'(\x03\x02\x02\x02()\x03\x02\x02\x02)+\x05\x1C\x0F\x02*\'" +
		"\x03\x02\x02\x02+,\x03\x02\x02\x02,*\x03\x02\x02\x02,-\x03\x02\x02\x02" +
		"-/\x03\x02\x02\x02.0\x05\x04\x03\x02/.\x03\x02\x02\x02/0\x03\x02\x02\x02" +
		"01\x03\x02\x02\x0212\x07\x02\x02\x032\x03\x03\x02\x02\x0235\x05\x06\x04" +
		"\x0246\x05\x1E\x10\x0254\x03\x02\x02\x0256\x03\x02\x02\x0269\x03\x02\x02" +
		"\x0279\x05\x1E\x10\x0283\x03\x02\x02\x0287\x03\x02\x02\x029\x05\x03\x02" +
		"\x02\x02:A\x05\b\x05\x02;=\x07\x03\x02\x02<>\x05\b\x05\x02=<\x03\x02\x02" +
		"\x02=>\x03\x02\x02\x02>@\x03\x02\x02\x02?;\x03\x02\x02\x02@C\x03\x02\x02" +
		"\x02A?\x03\x02\x02\x02AB\x03\x02\x02\x02B\x07\x03\x02\x02\x02CA\x03\x02" +
		"\x02\x02DF\x05 \x11\x02ED\x03\x02\x02\x02FG\x03\x02\x02\x02GE\x03\x02" +
		"\x02\x02GH\x03\x02\x02\x02HL\x03\x02\x02\x02IK\x05\n\x06\x02JI\x03\x02" +
		"\x02\x02KN\x03\x02\x02\x02LJ\x03\x02\x02\x02LM\x03\x02\x02\x02MU\x03\x02" +
		"\x02\x02NL\x03\x02\x02\x02OQ\x05\n\x06\x02PO\x03\x02\x02\x02QR\x03\x02" +
		"\x02\x02RP\x03\x02\x02\x02RS\x03\x02\x02\x02SU\x03\x02\x02\x02TE\x03\x02" +
		"\x02\x02TP\x03\x02\x02\x02U\t\x03\x02\x02\x02VZ\x05\f\x07\x02WZ\x05\x10" +
		"\t\x02XZ\x05\x14\v\x02YV\x03\x02\x02\x02YW\x03\x02\x02\x02YX\x03\x02\x02" +
		"\x02Z\v\x03\x02\x02\x02[_\x05$\x13\x02\\^\x05\x0E\b\x02]\\\x03\x02\x02" +
		"\x02^a\x03\x02\x02\x02_]\x03\x02\x02\x02_`\x03\x02\x02\x02`\r\x03\x02" +
		"\x02\x02a_\x03\x02\x02\x02bc\x05\x14\v\x02c\x0F\x03\x02\x02\x02de\x05" +
		"\x12\n\x02ef\x07\x04\x02\x02fg\x05\x14\v\x02g\x11\x03\x02\x02\x02hm\x05" +
		"$\x13\x02im\x05\"\x12\x02jm\x07a\x02\x02km\x07b\x02\x02lh\x03\x02\x02" +
		"\x02li\x03\x02\x02\x02lj\x03\x02\x02\x02lk\x03\x02\x02\x02m\x13\x03\x02" +
		"\x02\x02ns\x05\x16\f\x02op\t\x02\x02\x02pr\x05\x16\f\x02qo\x03\x02\x02" +
		"\x02ru\x03\x02\x02\x02sq\x03\x02\x02\x02st\x03\x02\x02\x02t\x15\x03\x02" +
		"\x02\x02us\x03\x02\x02\x02v{\x05\x18\r\x02wx\t\x03\x02\x02xz\x05\x18\r" +
		"\x02yw\x03\x02\x02\x02z}\x03\x02\x02\x02{y\x03\x02\x02\x02{|\x03\x02\x02" +
		"\x02|\x17\x03\x02\x02\x02}{\x03\x02\x02\x02~\x8A\x05\"\x12\x02\x7F\x8A" +
		"\x07a\x02\x02\x80\x8A\x07n\x02\x02\x81\x8A\x07b\x02\x02\x82\x8A\x05\x1A" +
		"\x0E\x02\x83\x8A\x07j\x02\x02\x84\x8A\x07l\x02\x02\x85\x8A\x07k\x02\x02" +
		"\x86\x8A\x07i\x02\x02\x87\x88\x07d\x02\x02\x88\x8A\x05\x18\r\x02\x89~" +
		"\x03\x02\x02\x02\x89\x7F\x03\x02\x02\x02\x89\x80\x03\x02\x02\x02\x89\x81" +
		"\x03\x02\x02\x02\x89\x82\x03\x02\x02\x02\x89\x83\x03\x02\x02\x02\x89\x84" +
		"\x03\x02\x02\x02\x89\x85\x03\x02\x02\x02\x89\x86\x03\x02\x02\x02\x89\x87" +
		"\x03\x02\x02\x02\x8A\x19\x03\x02\x02\x02\x8B\x8F\x07m\x02\x02\x8C\x8E" +
		"\x07i\x02\x02\x8D\x8C\x03\x02\x02\x02\x8E\x91\x03\x02\x02\x02\x8F\x8D" +
		"\x03\x02\x02\x02\x8F\x90\x03\x02\x02\x02\x90\x93\x03\x02\x02\x02\x91\x8F" +
		"\x03\x02\x02\x02\x92\x94\x07\x05\x02\x02\x93\x92\x03\x02\x02\x02\x93\x94" +
		"\x03\x02\x02\x02\x94\x1B\x03\x02\x02\x02\x95\x96\x07p\x02\x02\x96\x1D" +
		"\x03\x02\x02\x02\x97\x98\x07o\x02\x02\x98\x1F\x03\x02\x02\x02\x99\x9A" +
		"\x07g\x02\x02\x9A!\x03\x02\x02\x02\x9B\x9C\x07h\x02\x02\x9C#\x03\x02\x02" +
		"\x02\x9D\x9E\t\x04\x02\x02\x9E%\x03\x02\x02\x02\x15\',/58=AGLRTY_ls{\x89" +
		"\x8F\x93";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!pdp7Parser.__ATN) {
			pdp7Parser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(pdp7Parser._serializedATN));
		}

		return pdp7Parser.__ATN;
	}

}

export class ProgContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(pdp7Parser.EOF, 0); }
	public eol(): EolContext[];
	public eol(i: number): EolContext;
	public eol(i?: number): EolContext | EolContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EolContext);
		} else {
			return this.getRuleContext(i, EolContext);
		}
	}
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
	public get ruleIndex(): number { return pdp7Parser.RULE_prog; }
	// @Override
	public enterRule(listener: pdp7Listener): void {
		if (listener.enterProg) {
			listener.enterProg(this);
		}
	}
	// @Override
	public exitRule(listener: pdp7Listener): void {
		if (listener.exitProg) {
			listener.exitProg(this);
		}
	}
}


export class LineContext extends ParserRuleContext {
	public declarations(): DeclarationsContext | undefined {
		return this.tryGetRuleContext(0, DeclarationsContext);
	}
	public comment(): CommentContext | undefined {
		return this.tryGetRuleContext(0, CommentContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pdp7Parser.RULE_line; }
	// @Override
	public enterRule(listener: pdp7Listener): void {
		if (listener.enterLine) {
			listener.enterLine(this);
		}
	}
	// @Override
	public exitRule(listener: pdp7Listener): void {
		if (listener.exitLine) {
			listener.exitLine(this);
		}
	}
}


export class DeclarationsContext extends ParserRuleContext {
	public declaration(): DeclarationContext[];
	public declaration(i: number): DeclarationContext;
	public declaration(i?: number): DeclarationContext | DeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DeclarationContext);
		} else {
			return this.getRuleContext(i, DeclarationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pdp7Parser.RULE_declarations; }
	// @Override
	public enterRule(listener: pdp7Listener): void {
		if (listener.enterDeclarations) {
			listener.enterDeclarations(this);
		}
	}
	// @Override
	public exitRule(listener: pdp7Listener): void {
		if (listener.exitDeclarations) {
			listener.exitDeclarations(this);
		}
	}
}


export class DeclarationContext extends ParserRuleContext {
	public label(): LabelContext[];
	public label(i: number): LabelContext;
	public label(i?: number): LabelContext | LabelContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LabelContext);
		} else {
			return this.getRuleContext(i, LabelContext);
		}
	}
	public declarationRight(): DeclarationRightContext[];
	public declarationRight(i: number): DeclarationRightContext;
	public declarationRight(i?: number): DeclarationRightContext | DeclarationRightContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DeclarationRightContext);
		} else {
			return this.getRuleContext(i, DeclarationRightContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pdp7Parser.RULE_declaration; }
	// @Override
	public enterRule(listener: pdp7Listener): void {
		if (listener.enterDeclaration) {
			listener.enterDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: pdp7Listener): void {
		if (listener.exitDeclaration) {
			listener.exitDeclaration(this);
		}
	}
}


export class DeclarationRightContext extends ParserRuleContext {
	public instruction(): InstructionContext | undefined {
		return this.tryGetRuleContext(0, InstructionContext);
	}
	public assignment(): AssignmentContext | undefined {
		return this.tryGetRuleContext(0, AssignmentContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pdp7Parser.RULE_declarationRight; }
	// @Override
	public enterRule(listener: pdp7Listener): void {
		if (listener.enterDeclarationRight) {
			listener.enterDeclarationRight(this);
		}
	}
	// @Override
	public exitRule(listener: pdp7Listener): void {
		if (listener.exitDeclarationRight) {
			listener.exitDeclarationRight(this);
		}
	}
}


export class InstructionContext extends ParserRuleContext {
	public opcode(): OpcodeContext {
		return this.getRuleContext(0, OpcodeContext);
	}
	public argument(): ArgumentContext[];
	public argument(i: number): ArgumentContext;
	public argument(i?: number): ArgumentContext | ArgumentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ArgumentContext);
		} else {
			return this.getRuleContext(i, ArgumentContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pdp7Parser.RULE_instruction; }
	// @Override
	public enterRule(listener: pdp7Listener): void {
		if (listener.enterInstruction) {
			listener.enterInstruction(this);
		}
	}
	// @Override
	public exitRule(listener: pdp7Listener): void {
		if (listener.exitInstruction) {
			listener.exitInstruction(this);
		}
	}
}


export class ArgumentContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pdp7Parser.RULE_argument; }
	// @Override
	public enterRule(listener: pdp7Listener): void {
		if (listener.enterArgument) {
			listener.enterArgument(this);
		}
	}
	// @Override
	public exitRule(listener: pdp7Listener): void {
		if (listener.exitArgument) {
			listener.exitArgument(this);
		}
	}
}


export class AssignmentContext extends ParserRuleContext {
	public symbol(): SymbolContext {
		return this.getRuleContext(0, SymbolContext);
	}
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pdp7Parser.RULE_assignment; }
	// @Override
	public enterRule(listener: pdp7Listener): void {
		if (listener.enterAssignment) {
			listener.enterAssignment(this);
		}
	}
	// @Override
	public exitRule(listener: pdp7Listener): void {
		if (listener.exitAssignment) {
			listener.exitAssignment(this);
		}
	}
}


export class SymbolContext extends ParserRuleContext {
	public opcode(): OpcodeContext | undefined {
		return this.tryGetRuleContext(0, OpcodeContext);
	}
	public variable(): VariableContext | undefined {
		return this.tryGetRuleContext(0, VariableContext);
	}
	public LOC(): TerminalNode | undefined { return this.tryGetToken(pdp7Parser.LOC, 0); }
	public RELOC(): TerminalNode | undefined { return this.tryGetToken(pdp7Parser.RELOC, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pdp7Parser.RULE_symbol; }
	// @Override
	public enterRule(listener: pdp7Listener): void {
		if (listener.enterSymbol) {
			listener.enterSymbol(this);
		}
	}
	// @Override
	public exitRule(listener: pdp7Listener): void {
		if (listener.exitSymbol) {
			listener.exitSymbol(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	public multiplyingExpression(): MultiplyingExpressionContext[];
	public multiplyingExpression(i: number): MultiplyingExpressionContext;
	public multiplyingExpression(i?: number): MultiplyingExpressionContext | MultiplyingExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MultiplyingExpressionContext);
		} else {
			return this.getRuleContext(i, MultiplyingExpressionContext);
		}
	}
	public PLUS(): TerminalNode[];
	public PLUS(i: number): TerminalNode;
	public PLUS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(pdp7Parser.PLUS);
		} else {
			return this.getToken(pdp7Parser.PLUS, i);
		}
	}
	public MINUS(): TerminalNode[];
	public MINUS(i: number): TerminalNode;
	public MINUS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(pdp7Parser.MINUS);
		} else {
			return this.getToken(pdp7Parser.MINUS, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pdp7Parser.RULE_expression; }
	// @Override
	public enterRule(listener: pdp7Listener): void {
		if (listener.enterExpression) {
			listener.enterExpression(this);
		}
	}
	// @Override
	public exitRule(listener: pdp7Listener): void {
		if (listener.exitExpression) {
			listener.exitExpression(this);
		}
	}
}


export class MultiplyingExpressionContext extends ParserRuleContext {
	public atom(): AtomContext[];
	public atom(i: number): AtomContext;
	public atom(i?: number): AtomContext | AtomContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AtomContext);
		} else {
			return this.getRuleContext(i, AtomContext);
		}
	}
	public TIMES(): TerminalNode[];
	public TIMES(i: number): TerminalNode;
	public TIMES(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(pdp7Parser.TIMES);
		} else {
			return this.getToken(pdp7Parser.TIMES, i);
		}
	}
	public DIV(): TerminalNode[];
	public DIV(i: number): TerminalNode;
	public DIV(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(pdp7Parser.DIV);
		} else {
			return this.getToken(pdp7Parser.DIV, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pdp7Parser.RULE_multiplyingExpression; }
	// @Override
	public enterRule(listener: pdp7Listener): void {
		if (listener.enterMultiplyingExpression) {
			listener.enterMultiplyingExpression(this);
		}
	}
	// @Override
	public exitRule(listener: pdp7Listener): void {
		if (listener.exitMultiplyingExpression) {
			listener.exitMultiplyingExpression(this);
		}
	}
}


export class AtomContext extends ParserRuleContext {
	public variable(): VariableContext | undefined {
		return this.tryGetRuleContext(0, VariableContext);
	}
	public LOC(): TerminalNode | undefined { return this.tryGetToken(pdp7Parser.LOC, 0); }
	public CHAR(): TerminalNode | undefined { return this.tryGetToken(pdp7Parser.CHAR, 0); }
	public RELOC(): TerminalNode | undefined { return this.tryGetToken(pdp7Parser.RELOC, 0); }
	public string(): StringContext | undefined {
		return this.tryGetRuleContext(0, StringContext);
	}
	public DECIMAL(): TerminalNode | undefined { return this.tryGetToken(pdp7Parser.DECIMAL, 0); }
	public DECIMAL_MINUS(): TerminalNode | undefined { return this.tryGetToken(pdp7Parser.DECIMAL_MINUS, 0); }
	public OCTAL(): TerminalNode | undefined { return this.tryGetToken(pdp7Parser.OCTAL, 0); }
	public NUMERIC_LITERAL(): TerminalNode | undefined { return this.tryGetToken(pdp7Parser.NUMERIC_LITERAL, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(pdp7Parser.MINUS, 0); }
	public atom(): AtomContext | undefined {
		return this.tryGetRuleContext(0, AtomContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pdp7Parser.RULE_atom; }
	// @Override
	public enterRule(listener: pdp7Listener): void {
		if (listener.enterAtom) {
			listener.enterAtom(this);
		}
	}
	// @Override
	public exitRule(listener: pdp7Listener): void {
		if (listener.exitAtom) {
			listener.exitAtom(this);
		}
	}
}


export class StringContext extends ParserRuleContext {
	public STRING(): TerminalNode { return this.getToken(pdp7Parser.STRING, 0); }
	public NUMERIC_LITERAL(): TerminalNode[];
	public NUMERIC_LITERAL(i: number): TerminalNode;
	public NUMERIC_LITERAL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(pdp7Parser.NUMERIC_LITERAL);
		} else {
			return this.getToken(pdp7Parser.NUMERIC_LITERAL, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pdp7Parser.RULE_string; }
	// @Override
	public enterRule(listener: pdp7Listener): void {
		if (listener.enterString) {
			listener.enterString(this);
		}
	}
	// @Override
	public exitRule(listener: pdp7Listener): void {
		if (listener.exitString) {
			listener.exitString(this);
		}
	}
}


export class EolContext extends ParserRuleContext {
	public EOL(): TerminalNode { return this.getToken(pdp7Parser.EOL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pdp7Parser.RULE_eol; }
	// @Override
	public enterRule(listener: pdp7Listener): void {
		if (listener.enterEol) {
			listener.enterEol(this);
		}
	}
	// @Override
	public exitRule(listener: pdp7Listener): void {
		if (listener.exitEol) {
			listener.exitEol(this);
		}
	}
}


export class CommentContext extends ParserRuleContext {
	public COMMENT(): TerminalNode { return this.getToken(pdp7Parser.COMMENT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pdp7Parser.RULE_comment; }
	// @Override
	public enterRule(listener: pdp7Listener): void {
		if (listener.enterComment) {
			listener.enterComment(this);
		}
	}
	// @Override
	public exitRule(listener: pdp7Listener): void {
		if (listener.exitComment) {
			listener.exitComment(this);
		}
	}
}


export class LabelContext extends ParserRuleContext {
	public LABEL(): TerminalNode { return this.getToken(pdp7Parser.LABEL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pdp7Parser.RULE_label; }
	// @Override
	public enterRule(listener: pdp7Listener): void {
		if (listener.enterLabel) {
			listener.enterLabel(this);
		}
	}
	// @Override
	public exitRule(listener: pdp7Listener): void {
		if (listener.exitLabel) {
			listener.exitLabel(this);
		}
	}
}


export class VariableContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(pdp7Parser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pdp7Parser.RULE_variable; }
	// @Override
	public enterRule(listener: pdp7Listener): void {
		if (listener.enterVariable) {
			listener.enterVariable(this);
		}
	}
	// @Override
	public exitRule(listener: pdp7Listener): void {
		if (listener.exitVariable) {
			listener.exitVariable(this);
		}
	}
}


export class OpcodeContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pdp7Parser.RULE_opcode; }
	// @Override
	public enterRule(listener: pdp7Listener): void {
		if (listener.enterOpcode) {
			listener.enterOpcode(this);
		}
	}
	// @Override
	public exitRule(listener: pdp7Listener): void {
		if (listener.exitOpcode) {
			listener.exitOpcode(this);
		}
	}
}


