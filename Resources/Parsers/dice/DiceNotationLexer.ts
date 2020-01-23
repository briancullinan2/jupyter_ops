// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/dice/DiceNotationLexer.g4 by ANTLR 4.7.3-SNAPSHOT


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


export class DiceNotationLexer extends Lexer {
	public static readonly DSEPARATOR = 1;
	public static readonly DIGIT = 2;
	public static readonly ADDOPERATOR = 3;
	public static readonly MULTOPERATOR = 4;
	public static readonly LPAREN = 5;
	public static readonly RPAREN = 6;
	public static readonly WS = 7;

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"DSEPARATOR", "DIGIT", "ADDOPERATOR", "MULTOPERATOR", "ADD", "SUB", "MULT", 
		"DIV", "LPAREN", "RPAREN", "WS",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, "'('", "')'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "DSEPARATOR", "DIGIT", "ADDOPERATOR", "MULTOPERATOR", "LPAREN", 
		"RPAREN", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(DiceNotationLexer._LITERAL_NAMES, DiceNotationLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return DiceNotationLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(DiceNotationLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "DiceNotationLexer.g4"; }

	// @Override
	public get ruleNames(): string[] { return DiceNotationLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return DiceNotationLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return DiceNotationLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return DiceNotationLexer.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\t;\b\x01\x04" +
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
		"\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x03\x02\x03" +
		"\x02\x03\x03\x06\x03\x1D\n\x03\r\x03\x0E\x03\x1E\x03\x04\x03\x04\x05\x04" +
		"#\n\x04\x03\x05\x03\x05\x05\x05\'\n\x05\x03\x06\x03\x06\x03\x07\x03\x07" +
		"\x03\b\x03\b\x03\t\x03\t\x03\n\x03\n\x03\v\x03\v\x03\f\x06\f6\n\f\r\f" +
		"\x0E\f7\x03\f\x03\f\x02\x02\x02\r\x03\x02\x03\x05\x02\x04\x07\x02\x05" +
		"\t\x02\x06\v\x02\x02\r\x02\x02\x0F\x02\x02\x11\x02\x02\x13\x02\x07\x15" +
		"\x02\b\x17\x02\t\x03\x02\x04\x04\x02FFff\x04\x02\v\f\x0F\x0F\x02:\x02" +
		"\x03\x03\x02\x02\x02\x02\x05\x03\x02\x02\x02\x02\x07\x03\x02\x02\x02\x02" +
		"\t\x03\x02\x02\x02\x02\x13\x03\x02\x02\x02\x02\x15\x03\x02\x02\x02\x02" +
		"\x17\x03\x02\x02\x02\x03\x19\x03\x02\x02\x02\x05\x1C\x03\x02\x02\x02\x07" +
		"\"\x03\x02\x02\x02\t&\x03\x02\x02\x02\v(\x03\x02\x02\x02\r*\x03\x02\x02" +
		"\x02\x0F,\x03\x02\x02\x02\x11.\x03\x02\x02\x02\x130\x03\x02\x02\x02\x15" +
		"2\x03\x02\x02\x02\x175\x03\x02\x02\x02\x19\x1A\t\x02\x02\x02\x1A\x04\x03" +
		"\x02\x02\x02\x1B\x1D\x042;\x02\x1C\x1B\x03\x02\x02\x02\x1D\x1E\x03\x02" +
		"\x02\x02\x1E\x1C\x03\x02\x02\x02\x1E\x1F\x03\x02\x02\x02\x1F\x06\x03\x02" +
		"\x02\x02 #\x05\v\x06\x02!#\x05\r\x07\x02\" \x03\x02\x02\x02\"!\x03\x02" +
		"\x02\x02#\b\x03\x02\x02\x02$\'\x05\x0F\b\x02%\'\x05\x11\t\x02&$\x03\x02" +
		"\x02\x02&%\x03\x02\x02\x02\'\n\x03\x02\x02\x02()\x07-\x02\x02)\f\x03\x02" +
		"\x02\x02*+\x07/\x02\x02+\x0E\x03\x02\x02\x02,-\x07,\x02\x02-\x10\x03\x02" +
		"\x02\x02./\x071\x02\x02/\x12\x03\x02\x02\x0201\x07*\x02\x021\x14\x03\x02" +
		"\x02\x0223\x07+\x02\x023\x16\x03\x02\x02\x0246\t\x03\x02\x0254\x03\x02" +
		"\x02\x0267\x03\x02\x02\x0275\x03\x02\x02\x0278\x03\x02\x02\x0289\x03\x02" +
		"\x02\x029:\b\f\x02\x02:\x18\x03\x02\x02\x02\x07\x02\x1E\"&7\x03\b\x02" +
		"\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!DiceNotationLexer.__ATN) {
			DiceNotationLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(DiceNotationLexer._serializedATN));
		}

		return DiceNotationLexer.__ATN;
	}

}

