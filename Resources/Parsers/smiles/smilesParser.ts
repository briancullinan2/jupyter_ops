// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/smiles/smiles.g4 by ANTLR 4.7.3-SNAPSHOT


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

import { smilesListener } from "./smilesListener";
import { smilesVisitor } from "./smilesVisitor";


export class smilesParser extends Parser {
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
	public static readonly T__94 = 95;
	public static readonly T__95 = 96;
	public static readonly T__96 = 97;
	public static readonly T__97 = 98;
	public static readonly T__98 = 99;
	public static readonly T__99 = 100;
	public static readonly T__100 = 101;
	public static readonly T__101 = 102;
	public static readonly T__102 = 103;
	public static readonly T__103 = 104;
	public static readonly T__104 = 105;
	public static readonly T__105 = 106;
	public static readonly T__106 = 107;
	public static readonly T__107 = 108;
	public static readonly T__108 = 109;
	public static readonly T__109 = 110;
	public static readonly T__110 = 111;
	public static readonly T__111 = 112;
	public static readonly T__112 = 113;
	public static readonly T__113 = 114;
	public static readonly T__114 = 115;
	public static readonly T__115 = 116;
	public static readonly T__116 = 117;
	public static readonly T__117 = 118;
	public static readonly T__118 = 119;
	public static readonly T__119 = 120;
	public static readonly T__120 = 121;
	public static readonly T__121 = 122;
	public static readonly T__122 = 123;
	public static readonly T__123 = 124;
	public static readonly T__124 = 125;
	public static readonly T__125 = 126;
	public static readonly T__126 = 127;
	public static readonly T__127 = 128;
	public static readonly T__128 = 129;
	public static readonly T__129 = 130;
	public static readonly T__130 = 131;
	public static readonly T__131 = 132;
	public static readonly T__132 = 133;
	public static readonly T__133 = 134;
	public static readonly T__134 = 135;
	public static readonly T__135 = 136;
	public static readonly T__136 = 137;
	public static readonly T__137 = 138;
	public static readonly T__138 = 139;
	public static readonly T__139 = 140;
	public static readonly T__140 = 141;
	public static readonly T__141 = 142;
	public static readonly T__142 = 143;
	public static readonly T__143 = 144;
	public static readonly T__144 = 145;
	public static readonly T__145 = 146;
	public static readonly T__146 = 147;
	public static readonly T__147 = 148;
	public static readonly T__148 = 149;
	public static readonly T__149 = 150;
	public static readonly T__150 = 151;
	public static readonly T__151 = 152;
	public static readonly T__152 = 153;
	public static readonly T__153 = 154;
	public static readonly T__154 = 155;
	public static readonly T__155 = 156;
	public static readonly T__156 = 157;
	public static readonly T__157 = 158;
	public static readonly T__158 = 159;
	public static readonly T__159 = 160;
	public static readonly T__160 = 161;
	public static readonly T__161 = 162;
	public static readonly T__162 = 163;
	public static readonly T__163 = 164;
	public static readonly T__164 = 165;
	public static readonly T__165 = 166;
	public static readonly T__166 = 167;
	public static readonly T__167 = 168;
	public static readonly T__168 = 169;
	public static readonly T__169 = 170;
	public static readonly T__170 = 171;
	public static readonly T__171 = 172;
	public static readonly T__172 = 173;
	public static readonly T__173 = 174;
	public static readonly T__174 = 175;
	public static readonly T__175 = 176;
	public static readonly T__176 = 177;
	public static readonly T__177 = 178;
	public static readonly T__178 = 179;
	public static readonly T__179 = 180;
	public static readonly T__180 = 181;
	public static readonly T__181 = 182;
	public static readonly T__182 = 183;
	public static readonly T__183 = 184;
	public static readonly T__184 = 185;
	public static readonly T__185 = 186;
	public static readonly T__186 = 187;
	public static readonly T__187 = 188;
	public static readonly T__188 = 189;
	public static readonly T__189 = 190;
	public static readonly T__190 = 191;
	public static readonly T__191 = 192;
	public static readonly T__192 = 193;
	public static readonly T__193 = 194;
	public static readonly T__194 = 195;
	public static readonly T__195 = 196;
	public static readonly T__196 = 197;
	public static readonly T__197 = 198;
	public static readonly T__198 = 199;
	public static readonly T__199 = 200;
	public static readonly T__200 = 201;
	public static readonly T__201 = 202;
	public static readonly T__202 = 203;
	public static readonly T__203 = 204;
	public static readonly DOT = 205;
	public static readonly LINEFEED = 206;
	public static readonly CARRIAGE_RETURN = 207;
	public static readonly SPACE = 208;
	public static readonly DIGIT = 209;
	public static readonly NUMBER = 210;
	public static readonly TAB = 211;
	public static readonly RULE_smiles = 0;
	public static readonly RULE_atom = 1;
	public static readonly RULE_aliphatic_organic = 2;
	public static readonly RULE_aromatic_organic = 3;
	public static readonly RULE_bracket_atom = 4;
	public static readonly RULE_symbol = 5;
	public static readonly RULE_isotope = 6;
	public static readonly RULE_element_symbols = 7;
	public static readonly RULE_aromatic_symbols = 8;
	public static readonly RULE_chiral = 9;
	public static readonly RULE_hcount = 10;
	public static readonly RULE_charge = 11;
	public static readonly RULE_class_ = 12;
	public static readonly RULE_bond = 13;
	public static readonly RULE_ringbond = 14;
	public static readonly RULE_branched_atom = 15;
	public static readonly RULE_branch = 16;
	public static readonly RULE_chain = 17;
	public static readonly RULE_terminator = 18;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"smiles", "atom", "aliphatic_organic", "aromatic_organic", "bracket_atom", 
		"symbol", "isotope", "element_symbols", "aromatic_symbols", "chiral", 
		"hcount", "charge", "class_", "bond", "ringbond", "branched_atom", "branch", 
		"chain", "terminator",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'*'", "'B'", "'C'", "'N'", "'O'", "'S'", "'P'", "'F'", "'Cl'", 
		"'Br'", "'I'", "'b'", "'c'", "'n'", "'o'", "'s'", "'p'", "'['", "']'", 
		"'H'", "'He'", "'Li'", "'Be'", "'Ne'", "'Na'", "'Mg'", "'Al'", "'Si'", 
		"'Ar'", "'K'", "'Ca'", "'Sc'", "'Ti'", "'V'", "'Cr'", "'Mn'", "'Fe'", 
		"'Co'", "'Ni'", "'Cu'", "'Zn'", "'Ga'", "'Ge'", "'As'", "'Se'", "'Kr'", 
		"'Rb'", "'Sr'", "'Y'", "'Zr'", "'Nb'", "'Mo'", "'Tc'", "'Ru'", "'Rh'", 
		"'Pd'", "'Ag'", "'Cd'", "'In'", "'Sn'", "'Sb'", "'Te'", "'Xe'", "'Cs'", 
		"'Ba'", "'Hf'", "'Ta'", "'W'", "'Re'", "'Os'", "'Ir'", "'Pt'", "'Au'", 
		"'Hg'", "'Tl'", "'Pb'", "'Bi'", "'Po'", "'At'", "'Rn'", "'Fr'", "'Ra'", 
		"'Rf'", "'Db'", "'Sg'", "'Bh'", "'Hs'", "'Mt'", "'Ds'", "'Rg'", "'La'", 
		"'Ce'", "'Pr'", "'Nd'", "'Pm'", "'Sm'", "'Eu'", "'Gd'", "'Tb'", "'Dy'", 
		"'Ho'", "'Er'", "'Tm'", "'Yb'", "'Lu'", "'Ac'", "'Th'", "'Pa'", "'U'", 
		"'Np'", "'Pu'", "'Am'", "'Cm'", "'Bk'", "'Cf'", "'Es'", "'Fm'", "'Md'", 
		"'No'", "'Lr'", "'se'", "'as'", "'@'", "'@@'", "'@TH1'", "'@TH2'", "'@AL1'", 
		"'@AL2'", "'@SP1'", "'@SP2'", "'@SP3'", "'@TB1'", "'@TB2'", "'@TB3'", 
		"'@TB4'", "'@TB5'", "'@TB6'", "'@TB7'", "'@TB8'", "'@TB9'", "'@TB10'", 
		"'@TB11'", "'@TB12'", "'@TB13'", "'@TB14'", "'@TB15'", "'@TB16'", "'@TB17'", 
		"'@TB18'", "'@TB19'", "'@TB20'", "'@TB21'", "'@TB22'", "'@TB23'", "'@TB24'", 
		"'@TB25'", "'@TB26'", "'@TB27'", "'@TB28'", "'@TB29'", "'@TB30'", "'@OH1'", 
		"'@OH2'", "'@OH3'", "'@OH4'", "'@OH5'", "'@OH6'", "'@OH7'", "'@OH8'", 
		"'@OH9'", "'@OH10'", "'@OH11'", "'@OH12'", "'@OH13'", "'@OH14'", "'@OH15'", 
		"'@OH16'", "'@OH17'", "'@OH18'", "'@OH19'", "'@OH20'", "'@OH21'", "'@OH22'", 
		"'@OH23'", "'@OH24'", "'@OH25'", "'@OH26'", "'@OH27'", "'@OH28'", "'@OH29'", 
		"'@OH30'", "'-'", "'+'", "'--'", "'++'", "':'", "'='", "'#'", "'$'", "'/'", 
		"'\\'", "'%'", "'('", "')'", "'.'", "'\r'", "'\n'", "' '", undefined, 
		undefined, "'\t'",
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
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, "DOT", "LINEFEED", "CARRIAGE_RETURN", "SPACE", "DIGIT", 
		"NUMBER", "TAB",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(smilesParser._LITERAL_NAMES, smilesParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return smilesParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "smiles.g4"; }

	// @Override
	public get ruleNames(): string[] { return smilesParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return smilesParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(smilesParser._ATN, this);
	}
	// @RuleVersion(0)
	public smiles(): SmilesContext {
		let _localctx: SmilesContext = new SmilesContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, smilesParser.RULE_smiles);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 38;
			this.chain(0);
			this.state = 39;
			this.terminator();
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
		this.enterRule(_localctx, 2, smilesParser.RULE_atom);
		try {
			this.state = 45;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case smilesParser.T__17:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 41;
				this.bracket_atom();
				}
				break;
			case smilesParser.T__1:
			case smilesParser.T__2:
			case smilesParser.T__3:
			case smilesParser.T__4:
			case smilesParser.T__5:
			case smilesParser.T__6:
			case smilesParser.T__7:
			case smilesParser.T__8:
			case smilesParser.T__9:
			case smilesParser.T__10:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 42;
				this.aliphatic_organic();
				}
				break;
			case smilesParser.T__11:
			case smilesParser.T__12:
			case smilesParser.T__13:
			case smilesParser.T__14:
			case smilesParser.T__15:
			case smilesParser.T__16:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 43;
				this.aromatic_organic();
				}
				break;
			case smilesParser.T__0:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 44;
				this.match(smilesParser.T__0);
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
	public aliphatic_organic(): Aliphatic_organicContext {
		let _localctx: Aliphatic_organicContext = new Aliphatic_organicContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, smilesParser.RULE_aliphatic_organic);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 47;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << smilesParser.T__1) | (1 << smilesParser.T__2) | (1 << smilesParser.T__3) | (1 << smilesParser.T__4) | (1 << smilesParser.T__5) | (1 << smilesParser.T__6) | (1 << smilesParser.T__7) | (1 << smilesParser.T__8) | (1 << smilesParser.T__9) | (1 << smilesParser.T__10))) !== 0))) {
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
	public aromatic_organic(): Aromatic_organicContext {
		let _localctx: Aromatic_organicContext = new Aromatic_organicContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, smilesParser.RULE_aromatic_organic);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 49;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << smilesParser.T__11) | (1 << smilesParser.T__12) | (1 << smilesParser.T__13) | (1 << smilesParser.T__14) | (1 << smilesParser.T__15) | (1 << smilesParser.T__16))) !== 0))) {
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
	public bracket_atom(): Bracket_atomContext {
		let _localctx: Bracket_atomContext = new Bracket_atomContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, smilesParser.RULE_bracket_atom);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 51;
			this.match(smilesParser.T__17);
			this.state = 53;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === smilesParser.NUMBER) {
				{
				this.state = 52;
				this.isotope();
				}
			}

			this.state = 55;
			this.symbol();
			this.state = 57;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 123)) & ~0x1F) === 0 && ((1 << (_la - 123)) & ((1 << (smilesParser.T__122 - 123)) | (1 << (smilesParser.T__123 - 123)) | (1 << (smilesParser.T__124 - 123)) | (1 << (smilesParser.T__125 - 123)) | (1 << (smilesParser.T__126 - 123)) | (1 << (smilesParser.T__127 - 123)) | (1 << (smilesParser.T__128 - 123)) | (1 << (smilesParser.T__129 - 123)) | (1 << (smilesParser.T__130 - 123)) | (1 << (smilesParser.T__131 - 123)) | (1 << (smilesParser.T__132 - 123)) | (1 << (smilesParser.T__133 - 123)) | (1 << (smilesParser.T__134 - 123)) | (1 << (smilesParser.T__135 - 123)) | (1 << (smilesParser.T__136 - 123)) | (1 << (smilesParser.T__137 - 123)) | (1 << (smilesParser.T__138 - 123)) | (1 << (smilesParser.T__139 - 123)) | (1 << (smilesParser.T__140 - 123)) | (1 << (smilesParser.T__141 - 123)) | (1 << (smilesParser.T__142 - 123)) | (1 << (smilesParser.T__143 - 123)) | (1 << (smilesParser.T__144 - 123)) | (1 << (smilesParser.T__145 - 123)) | (1 << (smilesParser.T__146 - 123)) | (1 << (smilesParser.T__147 - 123)) | (1 << (smilesParser.T__148 - 123)) | (1 << (smilesParser.T__149 - 123)) | (1 << (smilesParser.T__150 - 123)) | (1 << (smilesParser.T__151 - 123)) | (1 << (smilesParser.T__152 - 123)) | (1 << (smilesParser.T__153 - 123)))) !== 0) || ((((_la - 155)) & ~0x1F) === 0 && ((1 << (_la - 155)) & ((1 << (smilesParser.T__154 - 155)) | (1 << (smilesParser.T__155 - 155)) | (1 << (smilesParser.T__156 - 155)) | (1 << (smilesParser.T__157 - 155)) | (1 << (smilesParser.T__158 - 155)) | (1 << (smilesParser.T__159 - 155)) | (1 << (smilesParser.T__160 - 155)) | (1 << (smilesParser.T__161 - 155)) | (1 << (smilesParser.T__162 - 155)) | (1 << (smilesParser.T__163 - 155)) | (1 << (smilesParser.T__164 - 155)) | (1 << (smilesParser.T__165 - 155)) | (1 << (smilesParser.T__166 - 155)) | (1 << (smilesParser.T__167 - 155)) | (1 << (smilesParser.T__168 - 155)) | (1 << (smilesParser.T__169 - 155)) | (1 << (smilesParser.T__170 - 155)) | (1 << (smilesParser.T__171 - 155)) | (1 << (smilesParser.T__172 - 155)) | (1 << (smilesParser.T__173 - 155)) | (1 << (smilesParser.T__174 - 155)) | (1 << (smilesParser.T__175 - 155)) | (1 << (smilesParser.T__176 - 155)) | (1 << (smilesParser.T__177 - 155)) | (1 << (smilesParser.T__178 - 155)) | (1 << (smilesParser.T__179 - 155)) | (1 << (smilesParser.T__180 - 155)) | (1 << (smilesParser.T__181 - 155)) | (1 << (smilesParser.T__182 - 155)) | (1 << (smilesParser.T__183 - 155)) | (1 << (smilesParser.T__184 - 155)) | (1 << (smilesParser.T__185 - 155)))) !== 0) || ((((_la - 187)) & ~0x1F) === 0 && ((1 << (_la - 187)) & ((1 << (smilesParser.T__186 - 187)) | (1 << (smilesParser.T__187 - 187)) | (1 << (smilesParser.T__188 - 187)) | (1 << (smilesParser.T__189 - 187)) | (1 << (smilesParser.T__190 - 187)))) !== 0)) {
				{
				this.state = 56;
				this.chiral();
				}
			}

			this.state = 60;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === smilesParser.T__19) {
				{
				this.state = 59;
				this.hcount();
				}
			}

			this.state = 63;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 192)) & ~0x1F) === 0 && ((1 << (_la - 192)) & ((1 << (smilesParser.T__191 - 192)) | (1 << (smilesParser.T__192 - 192)) | (1 << (smilesParser.T__193 - 192)) | (1 << (smilesParser.T__194 - 192)))) !== 0)) {
				{
				this.state = 62;
				this.charge();
				}
			}

			this.state = 66;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === smilesParser.T__195) {
				{
				this.state = 65;
				this.class_();
				}
			}

			this.state = 68;
			this.match(smilesParser.T__18);
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
		this.enterRule(_localctx, 10, smilesParser.RULE_symbol);
		try {
			this.state = 73;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case smilesParser.T__1:
			case smilesParser.T__2:
			case smilesParser.T__3:
			case smilesParser.T__4:
			case smilesParser.T__5:
			case smilesParser.T__6:
			case smilesParser.T__7:
			case smilesParser.T__8:
			case smilesParser.T__9:
			case smilesParser.T__10:
			case smilesParser.T__19:
			case smilesParser.T__20:
			case smilesParser.T__21:
			case smilesParser.T__22:
			case smilesParser.T__23:
			case smilesParser.T__24:
			case smilesParser.T__25:
			case smilesParser.T__26:
			case smilesParser.T__27:
			case smilesParser.T__28:
			case smilesParser.T__29:
			case smilesParser.T__30:
			case smilesParser.T__31:
			case smilesParser.T__32:
			case smilesParser.T__33:
			case smilesParser.T__34:
			case smilesParser.T__35:
			case smilesParser.T__36:
			case smilesParser.T__37:
			case smilesParser.T__38:
			case smilesParser.T__39:
			case smilesParser.T__40:
			case smilesParser.T__41:
			case smilesParser.T__42:
			case smilesParser.T__43:
			case smilesParser.T__44:
			case smilesParser.T__45:
			case smilesParser.T__46:
			case smilesParser.T__47:
			case smilesParser.T__48:
			case smilesParser.T__49:
			case smilesParser.T__50:
			case smilesParser.T__51:
			case smilesParser.T__52:
			case smilesParser.T__53:
			case smilesParser.T__54:
			case smilesParser.T__55:
			case smilesParser.T__56:
			case smilesParser.T__57:
			case smilesParser.T__58:
			case smilesParser.T__59:
			case smilesParser.T__60:
			case smilesParser.T__61:
			case smilesParser.T__62:
			case smilesParser.T__63:
			case smilesParser.T__64:
			case smilesParser.T__65:
			case smilesParser.T__66:
			case smilesParser.T__67:
			case smilesParser.T__68:
			case smilesParser.T__69:
			case smilesParser.T__70:
			case smilesParser.T__71:
			case smilesParser.T__72:
			case smilesParser.T__73:
			case smilesParser.T__74:
			case smilesParser.T__75:
			case smilesParser.T__76:
			case smilesParser.T__77:
			case smilesParser.T__78:
			case smilesParser.T__79:
			case smilesParser.T__80:
			case smilesParser.T__81:
			case smilesParser.T__82:
			case smilesParser.T__83:
			case smilesParser.T__84:
			case smilesParser.T__85:
			case smilesParser.T__86:
			case smilesParser.T__87:
			case smilesParser.T__88:
			case smilesParser.T__89:
			case smilesParser.T__90:
			case smilesParser.T__91:
			case smilesParser.T__92:
			case smilesParser.T__93:
			case smilesParser.T__94:
			case smilesParser.T__95:
			case smilesParser.T__96:
			case smilesParser.T__97:
			case smilesParser.T__98:
			case smilesParser.T__99:
			case smilesParser.T__100:
			case smilesParser.T__101:
			case smilesParser.T__102:
			case smilesParser.T__103:
			case smilesParser.T__104:
			case smilesParser.T__105:
			case smilesParser.T__106:
			case smilesParser.T__107:
			case smilesParser.T__108:
			case smilesParser.T__109:
			case smilesParser.T__110:
			case smilesParser.T__111:
			case smilesParser.T__112:
			case smilesParser.T__113:
			case smilesParser.T__114:
			case smilesParser.T__115:
			case smilesParser.T__116:
			case smilesParser.T__117:
			case smilesParser.T__118:
			case smilesParser.T__119:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 70;
				this.element_symbols();
				}
				break;
			case smilesParser.T__12:
			case smilesParser.T__13:
			case smilesParser.T__14:
			case smilesParser.T__15:
			case smilesParser.T__16:
			case smilesParser.T__120:
			case smilesParser.T__121:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 71;
				this.aromatic_symbols();
				}
				break;
			case smilesParser.T__0:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 72;
				this.match(smilesParser.T__0);
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
	public isotope(): IsotopeContext {
		let _localctx: IsotopeContext = new IsotopeContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, smilesParser.RULE_isotope);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 75;
			this.match(smilesParser.NUMBER);
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
	public element_symbols(): Element_symbolsContext {
		let _localctx: Element_symbolsContext = new Element_symbolsContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, smilesParser.RULE_element_symbols);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 77;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << smilesParser.T__1) | (1 << smilesParser.T__2) | (1 << smilesParser.T__3) | (1 << smilesParser.T__4) | (1 << smilesParser.T__5) | (1 << smilesParser.T__6) | (1 << smilesParser.T__7) | (1 << smilesParser.T__8) | (1 << smilesParser.T__9) | (1 << smilesParser.T__10) | (1 << smilesParser.T__19) | (1 << smilesParser.T__20) | (1 << smilesParser.T__21) | (1 << smilesParser.T__22) | (1 << smilesParser.T__23) | (1 << smilesParser.T__24) | (1 << smilesParser.T__25) | (1 << smilesParser.T__26) | (1 << smilesParser.T__27) | (1 << smilesParser.T__28) | (1 << smilesParser.T__29) | (1 << smilesParser.T__30))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (smilesParser.T__31 - 32)) | (1 << (smilesParser.T__32 - 32)) | (1 << (smilesParser.T__33 - 32)) | (1 << (smilesParser.T__34 - 32)) | (1 << (smilesParser.T__35 - 32)) | (1 << (smilesParser.T__36 - 32)) | (1 << (smilesParser.T__37 - 32)) | (1 << (smilesParser.T__38 - 32)) | (1 << (smilesParser.T__39 - 32)) | (1 << (smilesParser.T__40 - 32)) | (1 << (smilesParser.T__41 - 32)) | (1 << (smilesParser.T__42 - 32)) | (1 << (smilesParser.T__43 - 32)) | (1 << (smilesParser.T__44 - 32)) | (1 << (smilesParser.T__45 - 32)) | (1 << (smilesParser.T__46 - 32)) | (1 << (smilesParser.T__47 - 32)) | (1 << (smilesParser.T__48 - 32)) | (1 << (smilesParser.T__49 - 32)) | (1 << (smilesParser.T__50 - 32)) | (1 << (smilesParser.T__51 - 32)) | (1 << (smilesParser.T__52 - 32)) | (1 << (smilesParser.T__53 - 32)) | (1 << (smilesParser.T__54 - 32)) | (1 << (smilesParser.T__55 - 32)) | (1 << (smilesParser.T__56 - 32)) | (1 << (smilesParser.T__57 - 32)) | (1 << (smilesParser.T__58 - 32)) | (1 << (smilesParser.T__59 - 32)) | (1 << (smilesParser.T__60 - 32)) | (1 << (smilesParser.T__61 - 32)) | (1 << (smilesParser.T__62 - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (smilesParser.T__63 - 64)) | (1 << (smilesParser.T__64 - 64)) | (1 << (smilesParser.T__65 - 64)) | (1 << (smilesParser.T__66 - 64)) | (1 << (smilesParser.T__67 - 64)) | (1 << (smilesParser.T__68 - 64)) | (1 << (smilesParser.T__69 - 64)) | (1 << (smilesParser.T__70 - 64)) | (1 << (smilesParser.T__71 - 64)) | (1 << (smilesParser.T__72 - 64)) | (1 << (smilesParser.T__73 - 64)) | (1 << (smilesParser.T__74 - 64)) | (1 << (smilesParser.T__75 - 64)) | (1 << (smilesParser.T__76 - 64)) | (1 << (smilesParser.T__77 - 64)) | (1 << (smilesParser.T__78 - 64)) | (1 << (smilesParser.T__79 - 64)) | (1 << (smilesParser.T__80 - 64)) | (1 << (smilesParser.T__81 - 64)) | (1 << (smilesParser.T__82 - 64)) | (1 << (smilesParser.T__83 - 64)) | (1 << (smilesParser.T__84 - 64)) | (1 << (smilesParser.T__85 - 64)) | (1 << (smilesParser.T__86 - 64)) | (1 << (smilesParser.T__87 - 64)) | (1 << (smilesParser.T__88 - 64)) | (1 << (smilesParser.T__89 - 64)) | (1 << (smilesParser.T__90 - 64)) | (1 << (smilesParser.T__91 - 64)) | (1 << (smilesParser.T__92 - 64)) | (1 << (smilesParser.T__93 - 64)) | (1 << (smilesParser.T__94 - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (smilesParser.T__95 - 96)) | (1 << (smilesParser.T__96 - 96)) | (1 << (smilesParser.T__97 - 96)) | (1 << (smilesParser.T__98 - 96)) | (1 << (smilesParser.T__99 - 96)) | (1 << (smilesParser.T__100 - 96)) | (1 << (smilesParser.T__101 - 96)) | (1 << (smilesParser.T__102 - 96)) | (1 << (smilesParser.T__103 - 96)) | (1 << (smilesParser.T__104 - 96)) | (1 << (smilesParser.T__105 - 96)) | (1 << (smilesParser.T__106 - 96)) | (1 << (smilesParser.T__107 - 96)) | (1 << (smilesParser.T__108 - 96)) | (1 << (smilesParser.T__109 - 96)) | (1 << (smilesParser.T__110 - 96)) | (1 << (smilesParser.T__111 - 96)) | (1 << (smilesParser.T__112 - 96)) | (1 << (smilesParser.T__113 - 96)) | (1 << (smilesParser.T__114 - 96)) | (1 << (smilesParser.T__115 - 96)) | (1 << (smilesParser.T__116 - 96)) | (1 << (smilesParser.T__117 - 96)) | (1 << (smilesParser.T__118 - 96)) | (1 << (smilesParser.T__119 - 96)))) !== 0))) {
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
	public aromatic_symbols(): Aromatic_symbolsContext {
		let _localctx: Aromatic_symbolsContext = new Aromatic_symbolsContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, smilesParser.RULE_aromatic_symbols);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 79;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << smilesParser.T__12) | (1 << smilesParser.T__13) | (1 << smilesParser.T__14) | (1 << smilesParser.T__15) | (1 << smilesParser.T__16))) !== 0) || _la === smilesParser.T__120 || _la === smilesParser.T__121)) {
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
	public chiral(): ChiralContext {
		let _localctx: ChiralContext = new ChiralContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, smilesParser.RULE_chiral);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 81;
			_la = this._input.LA(1);
			if (!(((((_la - 123)) & ~0x1F) === 0 && ((1 << (_la - 123)) & ((1 << (smilesParser.T__122 - 123)) | (1 << (smilesParser.T__123 - 123)) | (1 << (smilesParser.T__124 - 123)) | (1 << (smilesParser.T__125 - 123)) | (1 << (smilesParser.T__126 - 123)) | (1 << (smilesParser.T__127 - 123)) | (1 << (smilesParser.T__128 - 123)) | (1 << (smilesParser.T__129 - 123)) | (1 << (smilesParser.T__130 - 123)) | (1 << (smilesParser.T__131 - 123)) | (1 << (smilesParser.T__132 - 123)) | (1 << (smilesParser.T__133 - 123)) | (1 << (smilesParser.T__134 - 123)) | (1 << (smilesParser.T__135 - 123)) | (1 << (smilesParser.T__136 - 123)) | (1 << (smilesParser.T__137 - 123)) | (1 << (smilesParser.T__138 - 123)) | (1 << (smilesParser.T__139 - 123)) | (1 << (smilesParser.T__140 - 123)) | (1 << (smilesParser.T__141 - 123)) | (1 << (smilesParser.T__142 - 123)) | (1 << (smilesParser.T__143 - 123)) | (1 << (smilesParser.T__144 - 123)) | (1 << (smilesParser.T__145 - 123)) | (1 << (smilesParser.T__146 - 123)) | (1 << (smilesParser.T__147 - 123)) | (1 << (smilesParser.T__148 - 123)) | (1 << (smilesParser.T__149 - 123)) | (1 << (smilesParser.T__150 - 123)) | (1 << (smilesParser.T__151 - 123)) | (1 << (smilesParser.T__152 - 123)) | (1 << (smilesParser.T__153 - 123)))) !== 0) || ((((_la - 155)) & ~0x1F) === 0 && ((1 << (_la - 155)) & ((1 << (smilesParser.T__154 - 155)) | (1 << (smilesParser.T__155 - 155)) | (1 << (smilesParser.T__156 - 155)) | (1 << (smilesParser.T__157 - 155)) | (1 << (smilesParser.T__158 - 155)) | (1 << (smilesParser.T__159 - 155)) | (1 << (smilesParser.T__160 - 155)) | (1 << (smilesParser.T__161 - 155)) | (1 << (smilesParser.T__162 - 155)) | (1 << (smilesParser.T__163 - 155)) | (1 << (smilesParser.T__164 - 155)) | (1 << (smilesParser.T__165 - 155)) | (1 << (smilesParser.T__166 - 155)) | (1 << (smilesParser.T__167 - 155)) | (1 << (smilesParser.T__168 - 155)) | (1 << (smilesParser.T__169 - 155)) | (1 << (smilesParser.T__170 - 155)) | (1 << (smilesParser.T__171 - 155)) | (1 << (smilesParser.T__172 - 155)) | (1 << (smilesParser.T__173 - 155)) | (1 << (smilesParser.T__174 - 155)) | (1 << (smilesParser.T__175 - 155)) | (1 << (smilesParser.T__176 - 155)) | (1 << (smilesParser.T__177 - 155)) | (1 << (smilesParser.T__178 - 155)) | (1 << (smilesParser.T__179 - 155)) | (1 << (smilesParser.T__180 - 155)) | (1 << (smilesParser.T__181 - 155)) | (1 << (smilesParser.T__182 - 155)) | (1 << (smilesParser.T__183 - 155)) | (1 << (smilesParser.T__184 - 155)) | (1 << (smilesParser.T__185 - 155)))) !== 0) || ((((_la - 187)) & ~0x1F) === 0 && ((1 << (_la - 187)) & ((1 << (smilesParser.T__186 - 187)) | (1 << (smilesParser.T__187 - 187)) | (1 << (smilesParser.T__188 - 187)) | (1 << (smilesParser.T__189 - 187)) | (1 << (smilesParser.T__190 - 187)))) !== 0))) {
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
	public hcount(): HcountContext {
		let _localctx: HcountContext = new HcountContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, smilesParser.RULE_hcount);
		try {
			this.state = 86;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 7, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 83;
				this.match(smilesParser.T__19);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 84;
				this.match(smilesParser.T__19);
				this.state = 85;
				this.match(smilesParser.DIGIT);
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
	public charge(): ChargeContext {
		let _localctx: ChargeContext = new ChargeContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, smilesParser.RULE_charge);
		try {
			this.state = 96;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 8, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 88;
				this.match(smilesParser.T__191);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 89;
				this.match(smilesParser.T__191);
				this.state = 90;
				this.match(smilesParser.DIGIT);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 91;
				this.match(smilesParser.T__192);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 92;
				this.match(smilesParser.T__192);
				this.state = 93;
				this.match(smilesParser.DIGIT);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 94;
				this.match(smilesParser.T__193);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 95;
				this.match(smilesParser.T__194);
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
	public class_(): Class_Context {
		let _localctx: Class_Context = new Class_Context(this._ctx, this.state);
		this.enterRule(_localctx, 24, smilesParser.RULE_class_);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 98;
			this.match(smilesParser.T__195);
			this.state = 99;
			this.match(smilesParser.NUMBER);
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
	public bond(): BondContext {
		let _localctx: BondContext = new BondContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, smilesParser.RULE_bond);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 101;
			_la = this._input.LA(1);
			if (!(((((_la - 192)) & ~0x1F) === 0 && ((1 << (_la - 192)) & ((1 << (smilesParser.T__191 - 192)) | (1 << (smilesParser.T__195 - 192)) | (1 << (smilesParser.T__196 - 192)) | (1 << (smilesParser.T__197 - 192)) | (1 << (smilesParser.T__198 - 192)) | (1 << (smilesParser.T__199 - 192)) | (1 << (smilesParser.T__200 - 192)))) !== 0))) {
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
	public ringbond(): RingbondContext {
		let _localctx: RingbondContext = new RingbondContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, smilesParser.RULE_ringbond);
		let _la: number;
		try {
			this.state = 113;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 11, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 104;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 192)) & ~0x1F) === 0 && ((1 << (_la - 192)) & ((1 << (smilesParser.T__191 - 192)) | (1 << (smilesParser.T__195 - 192)) | (1 << (smilesParser.T__196 - 192)) | (1 << (smilesParser.T__197 - 192)) | (1 << (smilesParser.T__198 - 192)) | (1 << (smilesParser.T__199 - 192)) | (1 << (smilesParser.T__200 - 192)))) !== 0)) {
					{
					this.state = 103;
					this.bond();
					}
				}

				this.state = 106;
				this.match(smilesParser.DIGIT);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 108;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 192)) & ~0x1F) === 0 && ((1 << (_la - 192)) & ((1 << (smilesParser.T__191 - 192)) | (1 << (smilesParser.T__195 - 192)) | (1 << (smilesParser.T__196 - 192)) | (1 << (smilesParser.T__197 - 192)) | (1 << (smilesParser.T__198 - 192)) | (1 << (smilesParser.T__199 - 192)) | (1 << (smilesParser.T__200 - 192)))) !== 0)) {
					{
					this.state = 107;
					this.bond();
					}
				}

				this.state = 110;
				this.match(smilesParser.T__201);
				this.state = 111;
				this.match(smilesParser.DIGIT);
				this.state = 112;
				this.match(smilesParser.DIGIT);
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
	public branched_atom(): Branched_atomContext {
		let _localctx: Branched_atomContext = new Branched_atomContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, smilesParser.RULE_branched_atom);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 115;
			this.atom();
			this.state = 119;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 12, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 116;
					this.ringbond();
					}
					}
				}
				this.state = 121;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 12, this._ctx);
			}
			this.state = 125;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 13, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 122;
					this.branch();
					}
					}
				}
				this.state = 127;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 13, this._ctx);
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
	public branch(): BranchContext {
		let _localctx: BranchContext = new BranchContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, smilesParser.RULE_branch);
		try {
			this.state = 142;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 14, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 128;
				this.match(smilesParser.T__202);
				this.state = 129;
				this.chain(0);
				this.state = 130;
				this.match(smilesParser.T__203);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 132;
				this.match(smilesParser.T__202);
				this.state = 133;
				this.bond();
				this.state = 134;
				this.chain(0);
				this.state = 135;
				this.match(smilesParser.T__203);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 137;
				this.match(smilesParser.T__202);
				this.state = 138;
				this.match(smilesParser.DOT);
				this.state = 139;
				this.chain(0);
				this.state = 140;
				this.match(smilesParser.T__203);
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

	public chain(): ChainContext;
	public chain(_p: number): ChainContext;
	// @RuleVersion(0)
	public chain(_p?: number): ChainContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ChainContext = new ChainContext(this._ctx, _parentState);
		let _prevctx: ChainContext = _localctx;
		let _startState: number = 34;
		this.enterRecursionRule(_localctx, 34, smilesParser.RULE_chain, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 145;
			this.branched_atom();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 158;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 156;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 15, this._ctx) ) {
					case 1:
						{
						_localctx = new ChainContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, smilesParser.RULE_chain);
						this.state = 147;
						if (!(this.precpred(this._ctx, 3))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 3)");
						}
						this.state = 148;
						this.branched_atom();
						}
						break;

					case 2:
						{
						_localctx = new ChainContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, smilesParser.RULE_chain);
						this.state = 149;
						if (!(this.precpred(this._ctx, 2))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
						}
						this.state = 150;
						this.bond();
						this.state = 151;
						this.branched_atom();
						}
						break;

					case 3:
						{
						_localctx = new ChainContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, smilesParser.RULE_chain);
						this.state = 153;
						if (!(this.precpred(this._ctx, 1))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
						}
						this.state = 154;
						this.match(smilesParser.DOT);
						this.state = 155;
						this.branched_atom();
						}
						break;
					}
					}
				}
				this.state = 160;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx);
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
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public terminator(): TerminatorContext {
		let _localctx: TerminatorContext = new TerminatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, smilesParser.RULE_terminator);
		try {
			this.state = 165;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case smilesParser.SPACE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 161;
				this.match(smilesParser.SPACE);
				this.state = 162;
				this.match(smilesParser.TAB);
				}
				break;
			case smilesParser.LINEFEED:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 163;
				this.match(smilesParser.LINEFEED);
				}
				break;
			case smilesParser.CARRIAGE_RETURN:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 164;
				this.match(smilesParser.CARRIAGE_RETURN);
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

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 17:
			return this.chain_sempred(_localctx as ChainContext, predIndex);
		}
		return true;
	}
	private chain_sempred(_localctx: ChainContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 3);

		case 1:
			return this.precpred(this._ctx, 2);

		case 2:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\xD5\xAA\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x03\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x05\x030\n\x03\x03\x04\x03\x04\x03\x05\x03\x05\x03\x06\x03\x06" +
		"\x05\x068\n\x06\x03\x06\x03\x06\x05\x06<\n\x06\x03\x06\x05\x06?\n\x06" +
		"\x03\x06\x05\x06B\n\x06\x03\x06\x05\x06E\n\x06\x03\x06\x03\x06\x03\x07" +
		"\x03\x07\x03\x07\x05\x07L\n\x07\x03\b\x03\b\x03\t\x03\t\x03\n\x03\n\x03" +
		"\v\x03\v\x03\f\x03\f\x03\f\x05\fY\n\f\x03\r\x03\r\x03\r\x03\r\x03\r\x03" +
		"\r\x03\r\x03\r\x05\rc\n\r\x03\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03" +
		"\x10\x05\x10k\n\x10\x03\x10\x03\x10\x05\x10o\n\x10\x03\x10\x03\x10\x03" +
		"\x10\x05\x10t\n\x10\x03\x11\x03\x11\x07\x11x\n\x11\f\x11\x0E\x11{\v\x11" +
		"\x03\x11\x07\x11~\n\x11\f\x11\x0E\x11\x81\v\x11\x03\x12\x03\x12\x03\x12" +
		"\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12" +
		"\x03\x12\x03\x12\x05\x12\x91\n\x12\x03\x13\x03\x13\x03\x13\x03\x13\x03" +
		"\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x07\x13\x9F" +
		"\n\x13\f\x13\x0E\x13\xA2\v\x13\x03\x14\x03\x14\x03\x14\x03\x14\x05\x14" +
		"\xA8\n\x14\x03\x14\x02\x02\x03$\x15\x02\x02\x04\x02\x06\x02\b\x02\n\x02" +
		"\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02" +
		"\x1E\x02 \x02\"\x02$\x02&\x02\x02\b\x03\x02\x04\r\x03\x02\x0E\x13\x04" +
		"\x02\x04\r\x16z\x04\x02\x0F\x13{|\x03\x02}\xC1\x04\x02\xC2\xC2\xC6\xCB" +
		"\x02\xB2\x02(\x03\x02\x02\x02\x04/\x03\x02\x02\x02\x061\x03\x02\x02\x02" +
		"\b3\x03\x02\x02\x02\n5\x03\x02\x02\x02\fK\x03\x02\x02\x02\x0EM\x03\x02" +
		"\x02\x02\x10O\x03\x02\x02\x02\x12Q\x03\x02\x02\x02\x14S\x03\x02\x02\x02" +
		"\x16X\x03\x02\x02\x02\x18b\x03\x02\x02\x02\x1Ad\x03\x02\x02\x02\x1Cg\x03" +
		"\x02\x02\x02\x1Es\x03\x02\x02\x02 u\x03\x02\x02\x02\"\x90\x03\x02\x02" +
		"\x02$\x92\x03\x02\x02\x02&\xA7\x03\x02\x02\x02()\x05$\x13\x02)*\x05&\x14" +
		"\x02*\x03\x03\x02\x02\x02+0\x05\n\x06\x02,0\x05\x06\x04\x02-0\x05\b\x05" +
		"\x02.0\x07\x03\x02\x02/+\x03\x02\x02\x02/,\x03\x02\x02\x02/-\x03\x02\x02" +
		"\x02/.\x03\x02\x02\x020\x05\x03\x02\x02\x0212\t\x02\x02\x022\x07\x03\x02" +
		"\x02\x0234\t\x03\x02\x024\t\x03\x02\x02\x0257\x07\x14\x02\x0268\x05\x0E" +
		"\b\x0276\x03\x02\x02\x0278\x03\x02\x02\x0289\x03\x02\x02\x029;\x05\f\x07" +
		"\x02:<\x05\x14\v\x02;:\x03\x02\x02\x02;<\x03\x02\x02\x02<>\x03\x02\x02" +
		"\x02=?\x05\x16\f\x02>=\x03\x02\x02\x02>?\x03\x02\x02\x02?A\x03\x02\x02" +
		"\x02@B\x05\x18\r\x02A@\x03\x02\x02\x02AB\x03\x02\x02\x02BD\x03\x02\x02" +
		"\x02CE\x05\x1A\x0E\x02DC\x03\x02\x02\x02DE\x03\x02\x02\x02EF\x03\x02\x02" +
		"\x02FG\x07\x15\x02\x02G\v\x03\x02\x02\x02HL\x05\x10\t\x02IL\x05\x12\n" +
		"\x02JL\x07\x03\x02\x02KH\x03\x02\x02\x02KI\x03\x02\x02\x02KJ\x03\x02\x02" +
		"\x02L\r\x03\x02\x02\x02MN\x07\xD4\x02\x02N\x0F\x03\x02\x02\x02OP\t\x04" +
		"\x02\x02P\x11\x03\x02\x02\x02QR\t\x05\x02\x02R\x13\x03\x02\x02\x02ST\t" +
		"\x06\x02\x02T\x15\x03\x02\x02\x02UY\x07\x16\x02\x02VW\x07\x16\x02\x02" +
		"WY\x07\xD3\x02\x02XU\x03\x02\x02\x02XV\x03\x02\x02\x02Y\x17\x03\x02\x02" +
		"\x02Zc\x07\xC2\x02\x02[\\\x07\xC2\x02\x02\\c\x07\xD3\x02\x02]c\x07\xC3" +
		"\x02\x02^_\x07\xC3\x02\x02_c\x07\xD3\x02\x02`c\x07\xC4\x02\x02ac\x07\xC5" +
		"\x02\x02bZ\x03\x02\x02\x02b[\x03\x02\x02\x02b]\x03\x02\x02\x02b^\x03\x02" +
		"\x02\x02b`\x03\x02\x02\x02ba\x03\x02\x02\x02c\x19\x03\x02\x02\x02de\x07" +
		"\xC6\x02\x02ef\x07\xD4\x02\x02f\x1B\x03\x02\x02\x02gh\t\x07\x02\x02h\x1D" +
		"\x03\x02\x02\x02ik\x05\x1C\x0F\x02ji\x03\x02\x02\x02jk\x03\x02\x02\x02" +
		"kl\x03\x02\x02\x02lt\x07\xD3\x02\x02mo\x05\x1C\x0F\x02nm\x03\x02\x02\x02" +
		"no\x03\x02\x02\x02op\x03\x02\x02\x02pq\x07\xCC\x02\x02qr\x07\xD3\x02\x02" +
		"rt\x07\xD3\x02\x02sj\x03\x02\x02\x02sn\x03\x02\x02\x02t\x1F\x03\x02\x02" +
		"\x02uy\x05\x04\x03\x02vx\x05\x1E\x10\x02wv\x03\x02\x02\x02x{\x03\x02\x02" +
		"\x02yw\x03\x02\x02\x02yz\x03\x02\x02\x02z\x7F\x03\x02\x02\x02{y\x03\x02" +
		"\x02\x02|~\x05\"\x12\x02}|\x03\x02\x02\x02~\x81\x03\x02\x02\x02\x7F}\x03" +
		"\x02\x02\x02\x7F\x80\x03\x02\x02\x02\x80!\x03\x02\x02\x02\x81\x7F\x03" +
		"\x02\x02\x02\x82\x83\x07\xCD\x02\x02\x83\x84\x05$\x13\x02\x84\x85\x07" +
		"\xCE\x02\x02\x85\x91\x03\x02\x02\x02\x86\x87\x07\xCD\x02\x02\x87\x88\x05" +
		"\x1C\x0F\x02\x88\x89\x05$\x13\x02\x89\x8A\x07\xCE\x02\x02\x8A\x91\x03" +
		"\x02\x02\x02\x8B\x8C\x07\xCD\x02\x02\x8C\x8D\x07\xCF\x02\x02\x8D\x8E\x05" +
		"$\x13\x02\x8E\x8F\x07\xCE\x02\x02\x8F\x91\x03\x02\x02\x02\x90\x82\x03" +
		"\x02\x02\x02\x90\x86\x03\x02\x02\x02\x90\x8B\x03\x02\x02\x02\x91#\x03" +
		"\x02\x02\x02\x92\x93\b\x13\x01\x02\x93\x94\x05 \x11\x02\x94\xA0\x03\x02" +
		"\x02\x02\x95\x96\f\x05\x02\x02\x96\x9F\x05 \x11\x02\x97\x98\f\x04\x02" +
		"\x02\x98\x99\x05\x1C\x0F\x02\x99\x9A\x05 \x11\x02\x9A\x9F\x03\x02\x02" +
		"\x02\x9B\x9C\f\x03\x02\x02\x9C\x9D\x07\xCF\x02\x02\x9D\x9F\x05 \x11\x02" +
		"\x9E\x95\x03\x02\x02\x02\x9E\x97\x03\x02\x02\x02\x9E\x9B\x03\x02\x02\x02" +
		"\x9F\xA2\x03\x02\x02\x02\xA0\x9E\x03\x02\x02\x02\xA0\xA1\x03\x02\x02\x02" +
		"\xA1%\x03\x02\x02\x02\xA2\xA0\x03\x02\x02\x02\xA3\xA4\x07\xD2\x02\x02" +
		"\xA4\xA8\x07\xD5\x02\x02\xA5\xA8\x07\xD0\x02\x02\xA6\xA8\x07\xD1\x02\x02" +
		"\xA7\xA3\x03\x02\x02\x02\xA7\xA5\x03\x02\x02\x02\xA7\xA6\x03\x02\x02\x02" +
		"\xA8\'\x03\x02\x02\x02\x14/7;>ADKXbjnsy\x7F\x90\x9E\xA0\xA7";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!smilesParser.__ATN) {
			smilesParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(smilesParser._serializedATN));
		}

		return smilesParser.__ATN;
	}

}

export class SmilesContext extends ParserRuleContext {
	public chain(): ChainContext {
		return this.getRuleContext(0, ChainContext);
	}
	public terminator(): TerminatorContext {
		return this.getRuleContext(0, TerminatorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return smilesParser.RULE_smiles; }
	// @Override
	public enterRule(listener: smilesListener): void {
		if (listener.enterSmiles) {
			listener.enterSmiles(this);
		}
	}
	// @Override
	public exitRule(listener: smilesListener): void {
		if (listener.exitSmiles) {
			listener.exitSmiles(this);
		}
	}
	// @Override
	public accept<Result>(visitor: smilesVisitor<Result>): Result {
		if (visitor.visitSmiles) {
			return visitor.visitSmiles(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AtomContext extends ParserRuleContext {
	public bracket_atom(): Bracket_atomContext | undefined {
		return this.tryGetRuleContext(0, Bracket_atomContext);
	}
	public aliphatic_organic(): Aliphatic_organicContext | undefined {
		return this.tryGetRuleContext(0, Aliphatic_organicContext);
	}
	public aromatic_organic(): Aromatic_organicContext | undefined {
		return this.tryGetRuleContext(0, Aromatic_organicContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return smilesParser.RULE_atom; }
	// @Override
	public enterRule(listener: smilesListener): void {
		if (listener.enterAtom) {
			listener.enterAtom(this);
		}
	}
	// @Override
	public exitRule(listener: smilesListener): void {
		if (listener.exitAtom) {
			listener.exitAtom(this);
		}
	}
	// @Override
	public accept<Result>(visitor: smilesVisitor<Result>): Result {
		if (visitor.visitAtom) {
			return visitor.visitAtom(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Aliphatic_organicContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return smilesParser.RULE_aliphatic_organic; }
	// @Override
	public enterRule(listener: smilesListener): void {
		if (listener.enterAliphatic_organic) {
			listener.enterAliphatic_organic(this);
		}
	}
	// @Override
	public exitRule(listener: smilesListener): void {
		if (listener.exitAliphatic_organic) {
			listener.exitAliphatic_organic(this);
		}
	}
	// @Override
	public accept<Result>(visitor: smilesVisitor<Result>): Result {
		if (visitor.visitAliphatic_organic) {
			return visitor.visitAliphatic_organic(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Aromatic_organicContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return smilesParser.RULE_aromatic_organic; }
	// @Override
	public enterRule(listener: smilesListener): void {
		if (listener.enterAromatic_organic) {
			listener.enterAromatic_organic(this);
		}
	}
	// @Override
	public exitRule(listener: smilesListener): void {
		if (listener.exitAromatic_organic) {
			listener.exitAromatic_organic(this);
		}
	}
	// @Override
	public accept<Result>(visitor: smilesVisitor<Result>): Result {
		if (visitor.visitAromatic_organic) {
			return visitor.visitAromatic_organic(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Bracket_atomContext extends ParserRuleContext {
	public symbol(): SymbolContext {
		return this.getRuleContext(0, SymbolContext);
	}
	public isotope(): IsotopeContext | undefined {
		return this.tryGetRuleContext(0, IsotopeContext);
	}
	public chiral(): ChiralContext | undefined {
		return this.tryGetRuleContext(0, ChiralContext);
	}
	public hcount(): HcountContext | undefined {
		return this.tryGetRuleContext(0, HcountContext);
	}
	public charge(): ChargeContext | undefined {
		return this.tryGetRuleContext(0, ChargeContext);
	}
	public class_(): Class_Context | undefined {
		return this.tryGetRuleContext(0, Class_Context);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return smilesParser.RULE_bracket_atom; }
	// @Override
	public enterRule(listener: smilesListener): void {
		if (listener.enterBracket_atom) {
			listener.enterBracket_atom(this);
		}
	}
	// @Override
	public exitRule(listener: smilesListener): void {
		if (listener.exitBracket_atom) {
			listener.exitBracket_atom(this);
		}
	}
	// @Override
	public accept<Result>(visitor: smilesVisitor<Result>): Result {
		if (visitor.visitBracket_atom) {
			return visitor.visitBracket_atom(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SymbolContext extends ParserRuleContext {
	public element_symbols(): Element_symbolsContext | undefined {
		return this.tryGetRuleContext(0, Element_symbolsContext);
	}
	public aromatic_symbols(): Aromatic_symbolsContext | undefined {
		return this.tryGetRuleContext(0, Aromatic_symbolsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return smilesParser.RULE_symbol; }
	// @Override
	public enterRule(listener: smilesListener): void {
		if (listener.enterSymbol) {
			listener.enterSymbol(this);
		}
	}
	// @Override
	public exitRule(listener: smilesListener): void {
		if (listener.exitSymbol) {
			listener.exitSymbol(this);
		}
	}
	// @Override
	public accept<Result>(visitor: smilesVisitor<Result>): Result {
		if (visitor.visitSymbol) {
			return visitor.visitSymbol(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IsotopeContext extends ParserRuleContext {
	public NUMBER(): TerminalNode { return this.getToken(smilesParser.NUMBER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return smilesParser.RULE_isotope; }
	// @Override
	public enterRule(listener: smilesListener): void {
		if (listener.enterIsotope) {
			listener.enterIsotope(this);
		}
	}
	// @Override
	public exitRule(listener: smilesListener): void {
		if (listener.exitIsotope) {
			listener.exitIsotope(this);
		}
	}
	// @Override
	public accept<Result>(visitor: smilesVisitor<Result>): Result {
		if (visitor.visitIsotope) {
			return visitor.visitIsotope(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Element_symbolsContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return smilesParser.RULE_element_symbols; }
	// @Override
	public enterRule(listener: smilesListener): void {
		if (listener.enterElement_symbols) {
			listener.enterElement_symbols(this);
		}
	}
	// @Override
	public exitRule(listener: smilesListener): void {
		if (listener.exitElement_symbols) {
			listener.exitElement_symbols(this);
		}
	}
	// @Override
	public accept<Result>(visitor: smilesVisitor<Result>): Result {
		if (visitor.visitElement_symbols) {
			return visitor.visitElement_symbols(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Aromatic_symbolsContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return smilesParser.RULE_aromatic_symbols; }
	// @Override
	public enterRule(listener: smilesListener): void {
		if (listener.enterAromatic_symbols) {
			listener.enterAromatic_symbols(this);
		}
	}
	// @Override
	public exitRule(listener: smilesListener): void {
		if (listener.exitAromatic_symbols) {
			listener.exitAromatic_symbols(this);
		}
	}
	// @Override
	public accept<Result>(visitor: smilesVisitor<Result>): Result {
		if (visitor.visitAromatic_symbols) {
			return visitor.visitAromatic_symbols(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ChiralContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return smilesParser.RULE_chiral; }
	// @Override
	public enterRule(listener: smilesListener): void {
		if (listener.enterChiral) {
			listener.enterChiral(this);
		}
	}
	// @Override
	public exitRule(listener: smilesListener): void {
		if (listener.exitChiral) {
			listener.exitChiral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: smilesVisitor<Result>): Result {
		if (visitor.visitChiral) {
			return visitor.visitChiral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class HcountContext extends ParserRuleContext {
	public DIGIT(): TerminalNode | undefined { return this.tryGetToken(smilesParser.DIGIT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return smilesParser.RULE_hcount; }
	// @Override
	public enterRule(listener: smilesListener): void {
		if (listener.enterHcount) {
			listener.enterHcount(this);
		}
	}
	// @Override
	public exitRule(listener: smilesListener): void {
		if (listener.exitHcount) {
			listener.exitHcount(this);
		}
	}
	// @Override
	public accept<Result>(visitor: smilesVisitor<Result>): Result {
		if (visitor.visitHcount) {
			return visitor.visitHcount(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ChargeContext extends ParserRuleContext {
	public DIGIT(): TerminalNode | undefined { return this.tryGetToken(smilesParser.DIGIT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return smilesParser.RULE_charge; }
	// @Override
	public enterRule(listener: smilesListener): void {
		if (listener.enterCharge) {
			listener.enterCharge(this);
		}
	}
	// @Override
	public exitRule(listener: smilesListener): void {
		if (listener.exitCharge) {
			listener.exitCharge(this);
		}
	}
	// @Override
	public accept<Result>(visitor: smilesVisitor<Result>): Result {
		if (visitor.visitCharge) {
			return visitor.visitCharge(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Class_Context extends ParserRuleContext {
	public NUMBER(): TerminalNode { return this.getToken(smilesParser.NUMBER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return smilesParser.RULE_class_; }
	// @Override
	public enterRule(listener: smilesListener): void {
		if (listener.enterClass_) {
			listener.enterClass_(this);
		}
	}
	// @Override
	public exitRule(listener: smilesListener): void {
		if (listener.exitClass_) {
			listener.exitClass_(this);
		}
	}
	// @Override
	public accept<Result>(visitor: smilesVisitor<Result>): Result {
		if (visitor.visitClass_) {
			return visitor.visitClass_(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BondContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return smilesParser.RULE_bond; }
	// @Override
	public enterRule(listener: smilesListener): void {
		if (listener.enterBond) {
			listener.enterBond(this);
		}
	}
	// @Override
	public exitRule(listener: smilesListener): void {
		if (listener.exitBond) {
			listener.exitBond(this);
		}
	}
	// @Override
	public accept<Result>(visitor: smilesVisitor<Result>): Result {
		if (visitor.visitBond) {
			return visitor.visitBond(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RingbondContext extends ParserRuleContext {
	public DIGIT(): TerminalNode[];
	public DIGIT(i: number): TerminalNode;
	public DIGIT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(smilesParser.DIGIT);
		} else {
			return this.getToken(smilesParser.DIGIT, i);
		}
	}
	public bond(): BondContext | undefined {
		return this.tryGetRuleContext(0, BondContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return smilesParser.RULE_ringbond; }
	// @Override
	public enterRule(listener: smilesListener): void {
		if (listener.enterRingbond) {
			listener.enterRingbond(this);
		}
	}
	// @Override
	public exitRule(listener: smilesListener): void {
		if (listener.exitRingbond) {
			listener.exitRingbond(this);
		}
	}
	// @Override
	public accept<Result>(visitor: smilesVisitor<Result>): Result {
		if (visitor.visitRingbond) {
			return visitor.visitRingbond(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Branched_atomContext extends ParserRuleContext {
	public atom(): AtomContext {
		return this.getRuleContext(0, AtomContext);
	}
	public ringbond(): RingbondContext[];
	public ringbond(i: number): RingbondContext;
	public ringbond(i?: number): RingbondContext | RingbondContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RingbondContext);
		} else {
			return this.getRuleContext(i, RingbondContext);
		}
	}
	public branch(): BranchContext[];
	public branch(i: number): BranchContext;
	public branch(i?: number): BranchContext | BranchContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BranchContext);
		} else {
			return this.getRuleContext(i, BranchContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return smilesParser.RULE_branched_atom; }
	// @Override
	public enterRule(listener: smilesListener): void {
		if (listener.enterBranched_atom) {
			listener.enterBranched_atom(this);
		}
	}
	// @Override
	public exitRule(listener: smilesListener): void {
		if (listener.exitBranched_atom) {
			listener.exitBranched_atom(this);
		}
	}
	// @Override
	public accept<Result>(visitor: smilesVisitor<Result>): Result {
		if (visitor.visitBranched_atom) {
			return visitor.visitBranched_atom(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BranchContext extends ParserRuleContext {
	public chain(): ChainContext {
		return this.getRuleContext(0, ChainContext);
	}
	public bond(): BondContext | undefined {
		return this.tryGetRuleContext(0, BondContext);
	}
	public DOT(): TerminalNode | undefined { return this.tryGetToken(smilesParser.DOT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return smilesParser.RULE_branch; }
	// @Override
	public enterRule(listener: smilesListener): void {
		if (listener.enterBranch) {
			listener.enterBranch(this);
		}
	}
	// @Override
	public exitRule(listener: smilesListener): void {
		if (listener.exitBranch) {
			listener.exitBranch(this);
		}
	}
	// @Override
	public accept<Result>(visitor: smilesVisitor<Result>): Result {
		if (visitor.visitBranch) {
			return visitor.visitBranch(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ChainContext extends ParserRuleContext {
	public branched_atom(): Branched_atomContext {
		return this.getRuleContext(0, Branched_atomContext);
	}
	public chain(): ChainContext | undefined {
		return this.tryGetRuleContext(0, ChainContext);
	}
	public bond(): BondContext | undefined {
		return this.tryGetRuleContext(0, BondContext);
	}
	public DOT(): TerminalNode | undefined { return this.tryGetToken(smilesParser.DOT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return smilesParser.RULE_chain; }
	// @Override
	public enterRule(listener: smilesListener): void {
		if (listener.enterChain) {
			listener.enterChain(this);
		}
	}
	// @Override
	public exitRule(listener: smilesListener): void {
		if (listener.exitChain) {
			listener.exitChain(this);
		}
	}
	// @Override
	public accept<Result>(visitor: smilesVisitor<Result>): Result {
		if (visitor.visitChain) {
			return visitor.visitChain(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TerminatorContext extends ParserRuleContext {
	public SPACE(): TerminalNode | undefined { return this.tryGetToken(smilesParser.SPACE, 0); }
	public TAB(): TerminalNode | undefined { return this.tryGetToken(smilesParser.TAB, 0); }
	public LINEFEED(): TerminalNode | undefined { return this.tryGetToken(smilesParser.LINEFEED, 0); }
	public CARRIAGE_RETURN(): TerminalNode | undefined { return this.tryGetToken(smilesParser.CARRIAGE_RETURN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return smilesParser.RULE_terminator; }
	// @Override
	public enterRule(listener: smilesListener): void {
		if (listener.enterTerminator) {
			listener.enterTerminator(this);
		}
	}
	// @Override
	public exitRule(listener: smilesListener): void {
		if (listener.exitTerminator) {
			listener.exitTerminator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: smilesVisitor<Result>): Result {
		if (visitor.visitTerminator) {
			return visitor.visitTerminator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


