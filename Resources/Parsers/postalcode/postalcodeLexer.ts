// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/postalcode/postalcode.g4 by ANTLR 4.7.3-SNAPSHOT


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


export class postalcodeLexer extends Lexer {
	public static readonly DIGIT = 1;
	public static readonly LETTER = 2;
	public static readonly WS = 3;

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"DIGIT", "LETTER", "WS",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "DIGIT", "LETTER", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(postalcodeLexer._LITERAL_NAMES, postalcodeLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return postalcodeLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(postalcodeLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "postalcode.g4"; }

	// @Override
	public get ruleNames(): string[] { return postalcodeLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return postalcodeLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return postalcodeLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return postalcodeLexer.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\x05\x11\b\x01" +
		"\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x03\x02\x03\x02\x03\x03\x03" +
		"\x03\x03\x04\x03\x04\x03\x04\x03\x04\x02\x02\x02\x05\x03\x02\x03\x05\x02" +
		"\x04\x07\x02\x05\x03\x02\x03\x05\x02\v\f\x0F\x0F\"\"\x02\x10\x02\x03\x03" +
		"\x02\x02\x02\x02\x05\x03\x02\x02\x02\x02\x07\x03\x02\x02\x02\x03\t\x03" +
		"\x02\x02\x02\x05\v\x03\x02\x02\x02\x07\r\x03\x02\x02\x02\t\n\x042;\x02" +
		"\n\x04\x03\x02\x02\x02\v\f\x04C\\\x02\f\x06\x03\x02\x02\x02\r\x0E\t\x02" +
		"\x02\x02\x0E\x0F\x03\x02\x02\x02\x0F\x10\b\x04\x02\x02\x10\b\x03\x02\x02" +
		"\x02\x03\x02\x03\b\x02\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!postalcodeLexer.__ATN) {
			postalcodeLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(postalcodeLexer._serializedATN));
		}

		return postalcodeLexer.__ATN;
	}

}

