// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/muddb/muddb.g4 by ANTLR 4.7.3-SNAPSHOT


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


export class muddbLexer extends Lexer {
	public static readonly END = 1;
	public static readonly NUM = 2;
	public static readonly STRING = 3;
	public static readonly EOL = 4;

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"END", "NUM", "STRING", "EOL",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'***END OF DUMP***'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "END", "NUM", "STRING", "EOL",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(muddbLexer._LITERAL_NAMES, muddbLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return muddbLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(muddbLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "muddb.g4"; }

	// @Override
	public get ruleNames(): string[] { return muddbLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return muddbLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return muddbLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return muddbLexer.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\x06/\b\x01\x04" +
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x03\x02\x03\x02\x03" +
		"\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03" +
		"\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x03\x05\x03\x1F" +
		"\n\x03\x03\x03\x06\x03\"\n\x03\r\x03\x0E\x03#\x03\x04\x06\x04\'\n\x04" +
		"\r\x04\x0E\x04(\x03\x05\x05\x05,\n\x05\x03\x05\x03\x05\x02\x02\x02\x06" +
		"\x03\x02\x03\x05\x02\x04\x07\x02\x05\t\x02\x06\x03\x02\x04\x03\x022;\b" +
		"\x02\v\v\"%)]__a}\x7F\x7F\x022\x02\x03\x03\x02\x02\x02\x02\x05\x03\x02" +
		"\x02\x02\x02\x07\x03\x02\x02\x02\x02\t\x03\x02\x02\x02\x03\v\x03\x02\x02" +
		"\x02\x05\x1E\x03\x02\x02\x02\x07&\x03\x02\x02\x02\t+\x03\x02\x02\x02\v" +
		"\f\x07,\x02\x02\f\r\x07,\x02\x02\r\x0E\x07,\x02\x02\x0E\x0F\x07G\x02\x02" +
		"\x0F\x10\x07P\x02\x02\x10\x11\x07F\x02\x02\x11\x12\x07\"\x02\x02\x12\x13" +
		"\x07Q\x02\x02\x13\x14\x07H\x02\x02\x14\x15\x07\"\x02\x02\x15\x16\x07F" +
		"\x02\x02\x16\x17\x07W\x02\x02\x17\x18\x07O\x02\x02\x18\x19\x07R\x02\x02" +
		"\x19\x1A\x07,\x02\x02\x1A\x1B\x07,\x02\x02\x1B\x1C\x07,\x02\x02\x1C\x04" +
		"\x03\x02\x02\x02\x1D\x1F\x07/\x02\x02\x1E\x1D\x03\x02\x02\x02\x1E\x1F" +
		"\x03\x02\x02\x02\x1F!\x03\x02\x02\x02 \"\t\x02\x02\x02! \x03\x02\x02\x02" +
		"\"#\x03\x02\x02\x02#!\x03\x02\x02\x02#$\x03\x02\x02\x02$\x06\x03\x02\x02" +
		"\x02%\'\t\x03\x02\x02&%\x03\x02\x02\x02\'(\x03\x02\x02\x02(&\x03\x02\x02" +
		"\x02()\x03\x02\x02\x02)\b\x03\x02\x02\x02*,\x07\x0F\x02\x02+*\x03\x02" +
		"\x02\x02+,\x03\x02\x02\x02,-\x03\x02\x02\x02-.\x07\f\x02\x02.\n\x03\x02" +
		"\x02\x02\x07\x02\x1E#(+\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!muddbLexer.__ATN) {
			muddbLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(muddbLexer._serializedATN));
		}

		return muddbLexer.__ATN;
	}

}

