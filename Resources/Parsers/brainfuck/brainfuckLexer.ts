// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/brainfuck/brainfuck.g4 by ANTLR 4.7.3-SNAPSHOT


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


export class brainfuckLexer extends Lexer {
	public static readonly GT = 1;
	public static readonly LT = 2;
	public static readonly PLUS = 3;
	public static readonly MINUS = 4;
	public static readonly DOT = 5;
	public static readonly COMMA = 6;
	public static readonly LPAREN = 7;
	public static readonly RPAREN = 8;
	public static readonly WS = 9;

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"GT", "LT", "PLUS", "MINUS", "DOT", "COMMA", "LPAREN", "RPAREN", "WS",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'>'", "'<'", "'+'", "'-'", "'.'", "','", "'['", "']'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "GT", "LT", "PLUS", "MINUS", "DOT", "COMMA", "LPAREN", "RPAREN", 
		"WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(brainfuckLexer._LITERAL_NAMES, brainfuckLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return brainfuckLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(brainfuckLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "brainfuck.g4"; }

	// @Override
	public get ruleNames(): string[] { return brainfuckLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return brainfuckLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return brainfuckLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return brainfuckLexer.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\v)\b\x01\x04" +
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
		"\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x03\x02\x03\x02\x03\x03\x03\x03" +
		"\x03\x04\x03\x04\x03\x05\x03\x05\x03\x06\x03\x06\x03\x07\x03\x07\x03\b" +
		"\x03\b\x03\t\x03\t\x03\n\x03\n\x03\n\x03\n\x02\x02\x02\v\x03\x02\x03\x05" +
		"\x02\x04\x07\x02\x05\t\x02\x06\v\x02\x07\r\x02\b\x0F\x02\t\x11\x02\n\x13" +
		"\x02\v\x03\x02\x02\x02(\x02\x03\x03\x02\x02\x02\x02\x05\x03\x02\x02\x02" +
		"\x02\x07\x03\x02\x02\x02\x02\t\x03\x02\x02\x02\x02\v\x03\x02\x02\x02\x02" +
		"\r\x03\x02\x02\x02\x02\x0F\x03\x02\x02\x02\x02\x11\x03\x02\x02\x02\x02" +
		"\x13\x03\x02\x02\x02\x03\x15\x03\x02\x02\x02\x05\x17\x03\x02\x02\x02\x07" +
		"\x19\x03\x02\x02\x02\t\x1B\x03\x02\x02\x02\v\x1D\x03\x02\x02\x02\r\x1F" +
		"\x03\x02\x02\x02\x0F!\x03\x02\x02\x02\x11#\x03\x02\x02\x02\x13%\x03\x02" +
		"\x02\x02\x15\x16\x07@\x02\x02\x16\x04\x03\x02\x02\x02\x17\x18\x07>\x02" +
		"\x02\x18\x06\x03\x02\x02\x02\x19\x1A\x07-\x02\x02\x1A\b\x03\x02\x02\x02" +
		"\x1B\x1C\x07/\x02\x02\x1C\n\x03\x02\x02\x02\x1D\x1E\x070\x02\x02\x1E\f" +
		"\x03\x02\x02\x02\x1F \x07.\x02\x02 \x0E\x03\x02\x02\x02!\"\x07]\x02\x02" +
		"\"\x10\x03\x02\x02\x02#$\x07_\x02\x02$\x12\x03\x02\x02\x02%&\v\x02\x02" +
		"\x02&\'\x03\x02\x02\x02\'(\b\n\x02\x02(\x14\x03\x02\x02\x02\x03\x02\x03" +
		"\b\x02\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!brainfuckLexer.__ATN) {
			brainfuckLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(brainfuckLexer._serializedATN));
		}

		return brainfuckLexer.__ATN;
	}

}

