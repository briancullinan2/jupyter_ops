// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/istc/istc.g4 by ANTLR 4.7.3-SNAPSHOT


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


export class istcLexer extends Lexer {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly SEP = 3;
	public static readonly CHAR = 4;
	public static readonly WS = 5;

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"T__0", "T__1", "SEP", "CHAR", "WS",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'ISTC'", "' '",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, "SEP", "CHAR", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(istcLexer._LITERAL_NAMES, istcLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return istcLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(istcLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "istc.g4"; }

	// @Override
	public get ruleNames(): string[] { return istcLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return istcLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return istcLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return istcLexer.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\x07\x1F\b\x01" +
		"\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06" +
		"\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x04\x03\x04" +
		"\x03\x05\x03\x05\x03\x06\x06\x06\x1A\n\x06\r\x06\x0E\x06\x1B\x03\x06\x03" +
		"\x06\x02\x02\x02\x07\x03\x02\x03\x05\x02\x04\x07\x02\x05\t\x02\x06\v\x02" +
		"\x07\x03\x02\x05\x04\x02\"\"//\x04\x022;CH\x04\x02\v\f\x0F\x0F\x02\x1F" +
		"\x02\x03\x03\x02\x02\x02\x02\x05\x03\x02\x02\x02\x02\x07\x03\x02\x02\x02" +
		"\x02\t\x03\x02\x02\x02\x02\v\x03\x02\x02\x02\x03\r\x03\x02\x02\x02\x05" +
		"\x12\x03\x02\x02\x02\x07\x14\x03\x02\x02\x02\t\x16\x03\x02\x02\x02\v\x19" +
		"\x03\x02\x02\x02\r\x0E\x07K\x02\x02\x0E\x0F\x07U\x02\x02\x0F\x10\x07V" +
		"\x02\x02\x10\x11\x07E\x02\x02\x11\x04\x03\x02\x02\x02\x12\x13\x07\"\x02" +
		"\x02\x13\x06\x03\x02\x02\x02\x14\x15\t\x02\x02\x02\x15\b\x03\x02\x02\x02" +
		"\x16\x17\t\x03\x02\x02\x17\n\x03\x02\x02\x02\x18\x1A\t\x04\x02\x02\x19" +
		"\x18\x03\x02\x02\x02\x1A\x1B\x03\x02\x02\x02\x1B\x19\x03\x02\x02\x02\x1B" +
		"\x1C\x03\x02\x02\x02\x1C\x1D\x03\x02\x02\x02\x1D\x1E\b\x06\x02\x02\x1E" +
		"\f\x03\x02\x02\x02\x04\x02\x1B\x03\b\x02\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!istcLexer.__ATN) {
			istcLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(istcLexer._serializedATN));
		}

		return istcLexer.__ATN;
	}

}

