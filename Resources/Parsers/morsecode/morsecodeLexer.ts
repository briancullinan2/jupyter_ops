// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/morsecode/morsecode.g4 by ANTLR 4.7.3-SNAPSHOT


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


export class morsecodeLexer extends Lexer {
	public static readonly DOT = 1;
	public static readonly DASH = 2;
	public static readonly SPACE = 3;
	public static readonly WS = 4;

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"DOT", "DASH", "SPACE", "WS",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'.'", "'-'", "' '",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "DOT", "DASH", "SPACE", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(morsecodeLexer._LITERAL_NAMES, morsecodeLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return morsecodeLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(morsecodeLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "morsecode.g4"; }

	// @Override
	public get ruleNames(): string[] { return morsecodeLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return morsecodeLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return morsecodeLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return morsecodeLexer.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\x06\x15\b\x01" +
		"\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x03\x02\x03\x02" +
		"\x03\x03\x03\x03\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03\x05\x02\x02" +
		"\x02\x06\x03\x02\x03\x05\x02\x04\x07\x02\x05\t\x02\x06\x03\x02\x03\x04" +
		"\x02\v\f\x0F\x0F\x02\x14\x02\x03\x03\x02\x02\x02\x02\x05\x03\x02\x02\x02" +
		"\x02\x07\x03\x02\x02\x02\x02\t\x03\x02\x02\x02\x03\v\x03\x02\x02\x02\x05" +
		"\r\x03\x02\x02\x02\x07\x0F\x03\x02\x02\x02\t\x11\x03\x02\x02\x02\v\f\x07" +
		"0\x02\x02\f\x04\x03\x02\x02\x02\r\x0E\x07/\x02\x02\x0E\x06\x03\x02\x02" +
		"\x02\x0F\x10\x07\"\x02\x02\x10\b\x03\x02\x02\x02\x11\x12\t\x02\x02\x02" +
		"\x12\x13\x03\x02\x02\x02\x13\x14\b\x05\x02\x02\x14\n\x03\x02\x02\x02\x03" +
		"\x02\x03\b\x02\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!morsecodeLexer.__ATN) {
			morsecodeLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(morsecodeLexer._serializedATN));
		}

		return morsecodeLexer.__ATN;
	}

}

