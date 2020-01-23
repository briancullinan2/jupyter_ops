// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/p/p.g4 by ANTLR 4.7.3-SNAPSHOT


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


export class pLexer extends Lexer {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly R = 3;
	public static readonly L = 4;
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
		"T__0", "T__1", "R", "L", "WS",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'('", "')'", "'R'", "'\u03BB'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, "R", "L", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(pLexer._LITERAL_NAMES, pLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return pLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(pLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "p.g4"; }

	// @Override
	public get ruleNames(): string[] { return pLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return pLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return pLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return pLexer.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\x07\x19\b\x01" +
		"\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06" +
		"\x03\x02\x03\x02\x03\x03\x03\x03\x03\x04\x03\x04\x03\x05\x03\x05\x03\x06" +
		"\x03\x06\x03\x06\x03\x06\x02\x02\x02\x07\x03\x02\x03\x05\x02\x04\x07\x02" +
		"\x05\t\x02\x06\v\x02\x07\x03\x02\x03\x05\x02\v\f\x0F\x0F\"\"\x02\x18\x02" +
		"\x03\x03\x02\x02\x02\x02\x05\x03\x02\x02\x02\x02\x07\x03\x02\x02\x02\x02" +
		"\t\x03\x02\x02\x02\x02\v\x03\x02\x02\x02\x03\r\x03\x02\x02\x02\x05\x0F" +
		"\x03\x02\x02\x02\x07\x11\x03\x02\x02\x02\t\x13\x03\x02\x02\x02\v\x15\x03" +
		"\x02\x02\x02\r\x0E\x07*\x02\x02\x0E\x04\x03\x02\x02\x02\x0F\x10\x07+\x02" +
		"\x02\x10\x06\x03\x02\x02\x02\x11\x12\x07T\x02\x02\x12\b\x03\x02\x02\x02" +
		"\x13\x14\x07\u03BD\x02\x02\x14\n\x03\x02\x02\x02\x15\x16\t\x02\x02\x02" +
		"\x16\x17\x03\x02\x02\x02\x17\x18\b\x06\x02\x02\x18\f\x03\x02\x02\x02\x03" +
		"\x02\x03\b\x02\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!pLexer.__ATN) {
			pLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(pLexer._serializedATN));
		}

		return pLexer.__ATN;
	}

}

