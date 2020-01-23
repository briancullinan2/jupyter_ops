// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/properties/properties.g4 by ANTLR 4.7.3-SNAPSHOT


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


export class propertiesLexer extends Lexer {
	public static readonly T__0 = 1;
	public static readonly TEXT = 2;
	public static readonly STRING = 3;
	public static readonly COMMENT = 4;
	public static readonly TERMINATOR = 5;

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"T__0", "TEXT", "STRING", "COMMENT", "TERMINATOR",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'='",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, "TEXT", "STRING", "COMMENT", "TERMINATOR",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(propertiesLexer._LITERAL_NAMES, propertiesLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return propertiesLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(propertiesLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "properties.g4"; }

	// @Override
	public get ruleNames(): string[] { return propertiesLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return propertiesLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return propertiesLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return propertiesLexer.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\x07-\b\x01\x04" +
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x03" +
		"\x02\x03\x02\x03\x03\x06\x03\x11\n\x03\r\x03\x0E\x03\x12\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x07\x04\x19\n\x04\f\x04\x0E\x04\x1C\v\x04\x03\x04\x03" +
		"\x04\x03\x05\x03\x05\x07\x05\"\n\x05\f\x05\x0E\x05%\v\x05\x03\x06\x06" +
		"\x06(\n\x06\r\x06\x0E\x06)\x03\x06\x03\x06\x02\x02\x02\x07\x03\x02\x03" +
		"\x05\x02\x04\x07\x02\x05\t\x02\x06\v\x02\x07\x03\x02\x05\t\x02\"\"\'\'" +
		".<B\\aac}\x7F\x7F\x03\x02$$\x04\x02\f\f\x0F\x0F\x021\x02\x03\x03\x02\x02" +
		"\x02\x02\x05\x03\x02\x02\x02\x02\x07\x03\x02\x02\x02\x02\t\x03\x02\x02" +
		"\x02\x02\v\x03\x02\x02\x02\x03\r\x03\x02\x02\x02\x05\x10\x03\x02\x02\x02" +
		"\x07\x14\x03\x02\x02\x02\t\x1F\x03\x02\x02\x02\v\'\x03\x02\x02\x02\r\x0E" +
		"\x07?\x02\x02\x0E\x04\x03\x02\x02\x02\x0F\x11\t\x02\x02\x02\x10\x0F\x03" +
		"\x02\x02\x02\x11\x12\x03\x02\x02\x02\x12\x10\x03\x02\x02\x02\x12\x13\x03" +
		"\x02\x02\x02\x13\x06\x03\x02\x02\x02\x14\x1A\x07$\x02\x02\x15\x16\x07" +
		"$\x02\x02\x16\x19\x07$\x02\x02\x17\x19\n\x03\x02\x02\x18\x15\x03\x02\x02" +
		"\x02\x18\x17\x03\x02\x02\x02\x19\x1C\x03\x02\x02\x02\x1A\x18\x03\x02\x02" +
		"\x02\x1A\x1B\x03\x02\x02\x02\x1B\x1D\x03\x02\x02\x02\x1C\x1A\x03\x02\x02" +
		"\x02\x1D\x1E\x07$\x02\x02\x1E\b\x03\x02\x02\x02\x1F#\x07%\x02\x02 \"\n" +
		"\x04\x02\x02! \x03\x02\x02\x02\"%\x03\x02\x02\x02#!\x03\x02\x02\x02#$" +
		"\x03\x02\x02\x02$\n\x03\x02\x02\x02%#\x03\x02\x02\x02&(\t\x04\x02\x02" +
		"\'&\x03\x02\x02\x02()\x03\x02\x02\x02)\'\x03\x02\x02\x02)*\x03\x02\x02" +
		"\x02*+\x03\x02\x02\x02+,\b\x06\x02\x02,\f\x03\x02\x02\x02\b\x02\x12\x18" +
		"\x1A#)\x03\x02\x03\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!propertiesLexer.__ATN) {
			propertiesLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(propertiesLexer._serializedATN));
		}

		return propertiesLexer.__ATN;
	}

}

