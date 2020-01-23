// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/romannumerals/romannumerals.g4 by ANTLR 4.7.3-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { CharStream } from "antlr4ts/CharStream";
import { Lexer } from "antlr4ts/Lexer";
import { LexerATNSimulator } from "antlr4ts/atn/LexerATNSimulator";
import { NotNull } from "antlr4ts/Decorators";
import { Override } from "antlr4ts/Decorators";
import { RuleContext } from "antlr4ts/RuleContext";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";


export class romannumeralsLexer extends Lexer {
	public static readonly M = 1;
	public static readonly CD = 2;
	public static readonly D = 3;
	public static readonly CM = 4;
	public static readonly C = 5;
	public static readonly CC = 6;
	public static readonly CCC = 7;
	public static readonly XL = 8;
	public static readonly L = 9;
	public static readonly XC = 10;
	public static readonly X = 11;
	public static readonly XX = 12;
	public static readonly XXX = 13;
	public static readonly IV = 14;
	public static readonly V = 15;
	public static readonly IX = 16;
	public static readonly I = 17;
	public static readonly II = 18;
	public static readonly III = 19;
	public static readonly WS = 20;

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"M", "CD", "D", "CM", "C", "CC", "CCC", "XL", "L", "XC", "X", "XX", "XXX", 
		"IV", "V", "IX", "I", "II", "III", "WS",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'M'", "'CD'", "'D'", "'CM'", "'C'", "'CC'", "'CCC'", "'XL'", 
		"'L'", "'XC'", "'X'", "'XX'", "'XXX'", "'IV'", "'V'", "'IX'", "'I'", "'II'", 
		"'III'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "M", "CD", "D", "CM", "C", "CC", "CCC", "XL", "L", "XC", "X", 
		"XX", "XXX", "IV", "V", "IX", "I", "II", "III", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(romannumeralsLexer._LITERAL_NAMES, romannumeralsLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return romannumeralsLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(romannumeralsLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "romannumerals.g4"; }

	// @Override
	public get ruleNames(): string[] { return romannumeralsLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return romannumeralsLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return romannumeralsLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return romannumeralsLexer.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\x16g\b\x01\x04" +
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
		"\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r" +
		"\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12" +
		"\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x03\x02\x03\x02\x03\x03\x03" +
		"\x03\x03\x03\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03" +
		"\x07\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03\b\x03\t\x03\t\x03\t\x03\n\x03" +
		"\n\x03\v\x03\v\x03\v\x03\f\x03\f\x03\r\x03\r\x03\r\x03\x0E\x03\x0E\x03" +
		"\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x11\x03\x11\x03" +
		"\x11\x03\x12\x03\x12\x03\x13\x03\x13\x03\x13\x03\x14\x03\x14\x03\x14\x03" +
		"\x14\x03\x15\x06\x15b\n\x15\r\x15\x0E\x15c\x03\x15\x03\x15\x02\x02\x02" +
		"\x16\x03\x02\x03\x05\x02\x04\x07\x02\x05\t\x02\x06\v\x02\x07\r\x02\b\x0F" +
		"\x02\t\x11\x02\n\x13\x02\v\x15\x02\f\x17\x02\r\x19\x02\x0E\x1B\x02\x0F" +
		"\x1D\x02\x10\x1F\x02\x11!\x02\x12#\x02\x13%\x02\x14\'\x02\x15)\x02\x16" +
		"\x03\x02\x03\x05\x02\v\f\x0F\x0F\"\"\x02g\x02\x03\x03\x02\x02\x02\x02" +
		"\x05\x03\x02\x02\x02\x02\x07\x03\x02\x02\x02\x02\t\x03\x02\x02\x02\x02" +
		"\v\x03\x02\x02\x02\x02\r\x03\x02\x02\x02\x02\x0F\x03\x02\x02\x02\x02\x11" +
		"\x03\x02\x02\x02\x02\x13\x03\x02\x02\x02\x02\x15\x03\x02\x02\x02\x02\x17" +
		"\x03\x02\x02\x02\x02\x19\x03\x02\x02\x02\x02\x1B\x03\x02\x02\x02\x02\x1D" +
		"\x03\x02\x02\x02\x02\x1F\x03\x02\x02\x02\x02!\x03\x02\x02\x02\x02#\x03" +
		"\x02\x02\x02\x02%\x03\x02\x02\x02\x02\'\x03\x02\x02\x02\x02)\x03\x02\x02" +
		"\x02\x03+\x03\x02\x02\x02\x05-\x03\x02\x02\x02\x070\x03\x02\x02\x02\t" +
		"2\x03\x02\x02\x02\v5\x03\x02\x02\x02\r7\x03\x02\x02\x02\x0F:\x03\x02\x02" +
		"\x02\x11>\x03\x02\x02\x02\x13A\x03\x02\x02\x02\x15C\x03\x02\x02\x02\x17" +
		"F\x03\x02\x02\x02\x19H\x03\x02\x02\x02\x1BK\x03\x02\x02\x02\x1DO\x03\x02" +
		"\x02\x02\x1FR\x03\x02\x02\x02!T\x03\x02\x02\x02#W\x03\x02\x02\x02%Y\x03" +
		"\x02\x02\x02\'\\\x03\x02\x02\x02)a\x03\x02\x02\x02+,\x07O\x02\x02,\x04" +
		"\x03\x02\x02\x02-.\x07E\x02\x02./\x07F\x02\x02/\x06\x03\x02\x02\x0201" +
		"\x07F\x02\x021\b\x03\x02\x02\x0223\x07E\x02\x0234\x07O\x02\x024\n\x03" +
		"\x02\x02\x0256\x07E\x02\x026\f\x03\x02\x02\x0278\x07E\x02\x0289\x07E\x02" +
		"\x029\x0E\x03\x02\x02\x02:;\x07E\x02\x02;<\x07E\x02\x02<=\x07E\x02\x02" +
		"=\x10\x03\x02\x02\x02>?\x07Z\x02\x02?@\x07N\x02\x02@\x12\x03\x02\x02\x02" +
		"AB\x07N\x02\x02B\x14\x03\x02\x02\x02CD\x07Z\x02\x02DE\x07E\x02\x02E\x16" +
		"\x03\x02\x02\x02FG\x07Z\x02\x02G\x18\x03\x02\x02\x02HI\x07Z\x02\x02IJ" +
		"\x07Z\x02\x02J\x1A\x03\x02\x02\x02KL\x07Z\x02\x02LM\x07Z\x02\x02MN\x07" +
		"Z\x02\x02N\x1C\x03\x02\x02\x02OP\x07K\x02\x02PQ\x07X\x02\x02Q\x1E\x03" +
		"\x02\x02\x02RS\x07X\x02\x02S \x03\x02\x02\x02TU\x07K\x02\x02UV\x07Z\x02" +
		"\x02V\"\x03\x02\x02\x02WX\x07K\x02\x02X$\x03\x02\x02\x02YZ\x07K\x02\x02" +
		"Z[\x07K\x02\x02[&\x03\x02\x02\x02\\]\x07K\x02\x02]^\x07K\x02\x02^_\x07" +
		"K\x02\x02_(\x03\x02\x02\x02`b\t\x02\x02\x02a`\x03\x02\x02\x02bc\x03\x02" +
		"\x02\x02ca\x03\x02\x02\x02cd\x03\x02\x02\x02de\x03\x02\x02\x02ef\b\x15" +
		"\x02\x02f*\x03\x02\x02\x02\x04\x02c\x03\b\x02\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!romannumeralsLexer.__ATN) {
			romannumeralsLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(romannumeralsLexer._serializedATN));
		}

		return romannumeralsLexer.__ATN;
	}

}

