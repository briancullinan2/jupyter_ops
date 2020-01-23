// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/tsv/tsv.g4 by ANTLR 4.7.3-SNAPSHOT


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


export class tsvLexer extends Lexer {
	public static readonly TAB = 1;
	public static readonly EOL = 2;
	public static readonly TEXT = 3;
	public static readonly STRING = 4;

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"TAB", "EOL", "TEXT", "STRING",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'\t'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "TAB", "EOL", "TEXT", "STRING",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(tsvLexer._LITERAL_NAMES, tsvLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return tsvLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(tsvLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "tsv.g4"; }

	// @Override
	public get ruleNames(): string[] { return tsvLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return tsvLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return tsvLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return tsvLexer.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\x06\"\b\x01\x04" +
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x03\x02\x03\x02\x03" +
		"\x03\x06\x03\x0F\n\x03\r\x03\x0E\x03\x10\x03\x04\x06\x04\x14\n\x04\r\x04" +
		"\x0E\x04\x15\x03\x05\x03\x05\x03\x05\x03\x05\x07\x05\x1C\n\x05\f\x05\x0E" +
		"\x05\x1F\v\x05\x03\x05\x03\x05\x02\x02\x02\x06\x03\x02\x03\x05\x02\x04" +
		"\x07\x02\x05\t\x02\x06\x03\x02\x05\x04\x02\f\f\x0F\x0F\x06\x02\f\f\x0F" +
		"\x0F$$..\x03\x02$$\x02%\x02\x03\x03\x02\x02\x02\x02\x05\x03\x02\x02\x02" +
		"\x02\x07\x03\x02\x02\x02\x02\t\x03\x02\x02\x02\x03\v\x03\x02\x02\x02\x05" +
		"\x0E\x03\x02\x02\x02\x07\x13\x03\x02\x02\x02\t\x17\x03\x02\x02\x02\v\f" +
		"\x07\v\x02\x02\f\x04\x03\x02\x02\x02\r\x0F\t\x02\x02\x02\x0E\r\x03\x02" +
		"\x02\x02\x0F\x10\x03\x02\x02\x02\x10\x0E\x03\x02\x02\x02\x10\x11\x03\x02" +
		"\x02\x02\x11\x06\x03\x02\x02\x02\x12\x14\n\x03\x02\x02\x13\x12\x03\x02" +
		"\x02\x02\x14\x15\x03\x02\x02\x02\x15\x13\x03\x02\x02\x02\x15\x16\x03\x02" +
		"\x02\x02\x16\b\x03\x02\x02\x02\x17\x1D\x07$\x02\x02\x18\x19\x07$\x02\x02" +
		"\x19\x1C\x07$\x02\x02\x1A\x1C\n\x04\x02\x02\x1B\x18\x03\x02\x02\x02\x1B" +
		"\x1A\x03\x02\x02\x02\x1C\x1F\x03\x02\x02\x02\x1D\x1B\x03\x02\x02\x02\x1D" +
		"\x1E\x03\x02\x02\x02\x1E \x03\x02\x02\x02\x1F\x1D\x03\x02\x02\x02 !\x07" +
		"$\x02\x02!\n\x03\x02\x02\x02\x07\x02\x10\x15\x1B\x1D\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!tsvLexer.__ATN) {
			tsvLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(tsvLexer._serializedATN));
		}

		return tsvLexer.__ATN;
	}

}

