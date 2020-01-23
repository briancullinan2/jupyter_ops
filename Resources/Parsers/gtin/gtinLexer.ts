// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/gtin/gtin.g4 by ANTLR 4.7.3-SNAPSHOT


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


export class gtinLexer extends Lexer {
	public static readonly DIGIT_0 = 1;
	public static readonly DIGIT_1 = 2;
	public static readonly DIGIT_2 = 3;
	public static readonly DIGIT_3 = 4;
	public static readonly DIGIT_4 = 5;
	public static readonly DIGIT_5 = 6;
	public static readonly DIGIT_6 = 7;
	public static readonly DIGIT_7 = 8;
	public static readonly DIGIT_8 = 9;
	public static readonly DIGIT_9 = 10;
	public static readonly HYPHEN = 11;
	public static readonly WS = 12;

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"DIGIT_0", "DIGIT_1", "DIGIT_2", "DIGIT_3", "DIGIT_4", "DIGIT_5", "DIGIT_6", 
		"DIGIT_7", "DIGIT_8", "DIGIT_9", "HYPHEN", "WS",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'0'", "'1'", "'2'", "'3'", "'4'", "'5'", "'6'", "'7'", "'8'", 
		"'9'", "'-'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "DIGIT_0", "DIGIT_1", "DIGIT_2", "DIGIT_3", "DIGIT_4", "DIGIT_5", 
		"DIGIT_6", "DIGIT_7", "DIGIT_8", "DIGIT_9", "HYPHEN", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(gtinLexer._LITERAL_NAMES, gtinLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return gtinLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(gtinLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "gtin.g4"; }

	// @Override
	public get ruleNames(): string[] { return gtinLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return gtinLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return gtinLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return gtinLexer.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\x0E:\b\x01\x04" +
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
		"\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r" +
		"\x03\x02\x03\x02\x03\x03\x03\x03\x03\x04\x03\x04\x03\x05\x03\x05\x03\x06" +
		"\x03\x06\x03\x07\x03\x07\x03\b\x03\b\x03\t\x03\t\x03\n\x03\n\x03\v\x03" +
		"\v\x03\f\x03\f\x03\f\x03\f\x03\r\x06\r5\n\r\r\r\x0E\r6\x03\r\x03\r\x02" +
		"\x02\x02\x0E\x03\x02\x03\x05\x02\x04\x07\x02\x05\t\x02\x06\v\x02\x07\r" +
		"\x02\b\x0F\x02\t\x11\x02\n\x13\x02\v\x15\x02\f\x17\x02\r\x19\x02\x0E\x03" +
		"\x02\x03\x05\x02\v\f\x0F\x0F\"\"\x02:\x02\x03\x03\x02\x02\x02\x02\x05" +
		"\x03\x02\x02\x02\x02\x07\x03\x02\x02\x02\x02\t\x03\x02\x02\x02\x02\v\x03" +
		"\x02\x02\x02\x02\r\x03\x02\x02\x02\x02\x0F\x03\x02\x02\x02\x02\x11\x03" +
		"\x02\x02\x02\x02\x13\x03\x02\x02\x02\x02\x15\x03\x02\x02\x02\x02\x17\x03" +
		"\x02\x02\x02\x02\x19\x03\x02\x02\x02\x03\x1B\x03\x02\x02\x02\x05\x1D\x03" +
		"\x02\x02\x02\x07\x1F\x03\x02\x02\x02\t!\x03\x02\x02\x02\v#\x03\x02\x02" +
		"\x02\r%\x03\x02\x02\x02\x0F\'\x03\x02\x02\x02\x11)\x03\x02\x02\x02\x13" +
		"+\x03\x02\x02\x02\x15-\x03\x02\x02\x02\x17/\x03\x02\x02\x02\x194\x03\x02" +
		"\x02\x02\x1B\x1C\x072\x02\x02\x1C\x04\x03\x02\x02\x02\x1D\x1E\x073\x02" +
		"\x02\x1E\x06\x03\x02\x02\x02\x1F \x074\x02\x02 \b\x03\x02\x02\x02!\"\x07" +
		"5\x02\x02\"\n\x03\x02\x02\x02#$\x076\x02\x02$\f\x03\x02\x02\x02%&\x07" +
		"7\x02\x02&\x0E\x03\x02\x02\x02\'(\x078\x02\x02(\x10\x03\x02\x02\x02)*" +
		"\x079\x02\x02*\x12\x03\x02\x02\x02+,\x07:\x02\x02,\x14\x03\x02\x02\x02" +
		"-.\x07;\x02\x02.\x16\x03\x02\x02\x02/0\x07/\x02\x0201\x03\x02\x02\x02" +
		"12\b\f\x02\x022\x18\x03\x02\x02\x0235\t\x02\x02\x0243\x03\x02\x02\x02" +
		"56\x03\x02\x02\x0264\x03\x02\x02\x0267\x03\x02\x02\x0278\x03\x02\x02\x02" +
		"89\b\r\x02\x029\x1A\x03\x02\x02\x02\x04\x026\x03\b\x02\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!gtinLexer.__ATN) {
			gtinLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(gtinLexer._serializedATN));
		}

		return gtinLexer.__ATN;
	}

}

