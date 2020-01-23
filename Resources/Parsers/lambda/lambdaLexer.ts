// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/lambda/lambda.g4 by ANTLR 4.7.3-SNAPSHOT


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


export class lambdaLexer extends Lexer {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly VARIABLE = 5;
	public static readonly WS = 6;

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"T__0", "T__1", "T__2", "T__3", "VARIABLE", "WS",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'\u03BB'", "'.'", "'('", "')'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, "VARIABLE", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(lambdaLexer._LITERAL_NAMES, lambdaLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return lambdaLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(lambdaLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "lambda.g4"; }

	// @Override
	public get ruleNames(): string[] { return lambdaLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return lambdaLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return lambdaLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return lambdaLexer.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\b\"\b\x01\x04" +
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
		"\x07\t\x07\x03\x02\x03\x02\x03\x03\x03\x03\x03\x04\x03\x04\x03\x05\x03" +
		"\x05\x03\x06\x03\x06\x07\x06\x1A\n\x06\f\x06\x0E\x06\x1D\v\x06\x03\x07" +
		"\x03\x07\x03\x07\x03\x07\x02\x02\x02\b\x03\x02\x03\x05\x02\x04\x07\x02" +
		"\x05\t\x02\x06\v\x02\x07\r\x02\b\x03\x02\x05\x03\x02c|\x05\x022;C\\c|" +
		"\x05\x02\v\f\x0F\x0F\"\"\x02\"\x02\x03\x03\x02\x02\x02\x02\x05\x03\x02" +
		"\x02\x02\x02\x07\x03\x02\x02\x02\x02\t\x03\x02\x02\x02\x02\v\x03\x02\x02" +
		"\x02\x02\r\x03\x02\x02\x02\x03\x0F\x03\x02\x02\x02\x05\x11\x03\x02\x02" +
		"\x02\x07\x13\x03\x02\x02\x02\t\x15\x03\x02\x02\x02\v\x17\x03\x02\x02\x02" +
		"\r\x1E\x03\x02\x02\x02\x0F\x10\x07\u03BD\x02\x02\x10\x04\x03\x02\x02\x02" +
		"\x11\x12\x070\x02\x02\x12\x06\x03\x02\x02\x02\x13\x14\x07*\x02\x02\x14" +
		"\b\x03\x02\x02\x02\x15\x16\x07+\x02\x02\x16\n\x03\x02\x02\x02\x17\x1B" +
		"\t\x02\x02\x02\x18\x1A\t\x03\x02\x02\x19\x18\x03\x02\x02\x02\x1A\x1D\x03" +
		"\x02\x02\x02\x1B\x19\x03\x02\x02\x02\x1B\x1C\x03\x02\x02\x02\x1C\f\x03" +
		"\x02\x02\x02\x1D\x1B\x03\x02\x02\x02\x1E\x1F\t\x04\x02\x02\x1F \x03\x02" +
		"\x02\x02 !\b\x07\x02\x02!\x0E\x03\x02\x02\x02\x04\x02\x1B\x03\b\x02\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!lambdaLexer.__ATN) {
			lambdaLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(lambdaLexer._serializedATN));
		}

		return lambdaLexer.__ATN;
	}

}

