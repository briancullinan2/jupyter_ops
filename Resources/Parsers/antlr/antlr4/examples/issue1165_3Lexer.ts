// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/antlr/antlr4/examples/issue1165_3.g4 by ANTLR 4.7.3-SNAPSHOT


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


export class issue1165_3Lexer extends Lexer {
	public static readonly WS = 1;

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"WS",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(issue1165_3Lexer._LITERAL_NAMES, issue1165_3Lexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return issue1165_3Lexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(issue1165_3Lexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "issue1165_3.g4"; }

	// @Override
	public get ruleNames(): string[] { return issue1165_3Lexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return issue1165_3Lexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return issue1165_3Lexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return issue1165_3Lexer.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\x03\f\b\x01\x04" +
		"\x02\t\x02\x03\x02\x06\x02\x07\n\x02\r\x02\x0E\x02\b\x03\x02\x03\x02\x02" +
		"\x02\x02\x03\x03\x02\x03\x03\x02\x03\x05\x02\v\f\x0F\x0F\"\"\x02\f\x02" +
		"\x03\x03\x02\x02\x02\x03\x06\x03\x02\x02\x02\x05\x07\t\x02\x02\x02\x06" +
		"\x05\x03\x02\x02\x02\x07\b\x03\x02\x02\x02\b\x06\x03\x02\x02\x02\b\t\x03" +
		"\x02\x02\x02\t\n\x03\x02\x02\x02\n\v\b\x02\x02\x02\v\x04\x03\x02\x02\x02" +
		"\x04\x02\b\x03\b\x02\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!issue1165_3Lexer.__ATN) {
			issue1165_3Lexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(issue1165_3Lexer._serializedATN));
		}

		return issue1165_3Lexer.__ATN;
	}

}

