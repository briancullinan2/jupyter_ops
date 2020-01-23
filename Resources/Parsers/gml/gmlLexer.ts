// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/gml/gml.g4 by ANTLR 4.7.3-SNAPSHOT


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


export class gmlLexer extends Lexer {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly STRINGLITERAL = 3;
	public static readonly REAL = 4;
	public static readonly SIGN = 5;
	public static readonly DIGIT = 6;
	public static readonly MANTISSA = 7;
	public static readonly VALUE = 8;
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
		"T__0", "T__1", "STRINGLITERAL", "REAL", "SIGN", "DIGIT", "MANTISSA", 
		"VALUE", "WS",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'['", "']'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, "STRINGLITERAL", "REAL", "SIGN", "DIGIT", 
		"MANTISSA", "VALUE", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(gmlLexer._LITERAL_NAMES, gmlLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return gmlLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(gmlLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "gml.g4"; }

	// @Override
	public get ruleNames(): string[] { return gmlLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return gmlLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return gmlLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return gmlLexer.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\vE\b\x01\x04" +
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
		"\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x03\x02\x03\x02\x03\x03\x03\x03" +
		"\x03\x04\x03\x04\x07\x04\x1C\n\x04\f\x04\x0E\x04\x1F\v\x04\x03\x04\x03" +
		"\x04\x03\x05\x05\x05$\n\x05\x03\x05\x07\x05\'\n\x05\f\x05\x0E\x05*\v\x05" +
		"\x03\x05\x03\x05\x06\x05.\n\x05\r\x05\x0E\x05/\x03\x05\x05\x053\n\x05" +
		"\x03\x06\x03\x06\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03\b\x03\t\x06\t>" +
		"\n\t\r\t\x0E\t?\x03\n\x03\n\x03\n\x03\n\x02\x02\x02\v\x03\x02\x03\x05" +
		"\x02\x04\x07\x02\x05\t\x02\x06\v\x02\x07\r\x02\b\x0F\x02\t\x11\x02\n\x13" +
		"\x02\v\x03\x02\x07\x03\x02$$\x04\x02--//\x03\x022;\x05\x022;C\\c|\x05" +
		"\x02\v\f\x0F\x0F\"\"\x02J\x02\x03\x03\x02\x02\x02\x02\x05\x03\x02\x02" +
		"\x02\x02\x07\x03\x02\x02\x02\x02\t\x03\x02\x02\x02\x02\v\x03\x02\x02\x02" +
		"\x02\r\x03\x02\x02\x02\x02\x0F\x03\x02\x02\x02\x02\x11\x03\x02\x02\x02" +
		"\x02\x13\x03\x02\x02\x02\x03\x15\x03\x02\x02\x02\x05\x17\x03\x02\x02\x02" +
		"\x07\x19\x03\x02\x02\x02\t#\x03\x02\x02\x02\v4\x03\x02\x02\x02\r6\x03" +
		"\x02\x02\x02\x0F8\x03\x02\x02\x02\x11=\x03\x02\x02\x02\x13A\x03\x02\x02" +
		"\x02\x15\x16\x07]\x02\x02\x16\x04\x03\x02\x02\x02\x17\x18\x07_\x02\x02" +
		"\x18\x06\x03\x02\x02\x02\x19\x1D\x07$\x02\x02\x1A\x1C\n\x02\x02\x02\x1B" +
		"\x1A\x03\x02\x02\x02\x1C\x1F\x03\x02\x02\x02\x1D\x1B\x03\x02\x02\x02\x1D" +
		"\x1E\x03\x02\x02\x02\x1E \x03\x02\x02\x02\x1F\x1D\x03\x02\x02\x02 !\x07" +
		"$\x02\x02!\b\x03\x02\x02\x02\"$\x05\v\x06\x02#\"\x03\x02\x02\x02#$\x03" +
		"\x02\x02\x02$(\x03\x02\x02\x02%\'\x05\r\x07\x02&%\x03\x02\x02\x02\'*\x03" +
		"\x02\x02\x02(&\x03\x02\x02\x02()\x03\x02\x02\x02)+\x03\x02\x02\x02*(\x03" +
		"\x02\x02\x02+-\x070\x02\x02,.\x05\r\x07\x02-,\x03\x02\x02\x02./\x03\x02" +
		"\x02\x02/-\x03\x02\x02\x02/0\x03\x02\x02\x0202\x03\x02\x02\x0213\x05\x0F" +
		"\b\x0221\x03\x02\x02\x0223\x03\x02\x02\x023\n\x03\x02\x02\x0245\t\x03" +
		"\x02\x025\f\x03\x02\x02\x0267\t\x04\x02\x027\x0E\x03\x02\x02\x0289\x07" +
		"G\x02\x029:\x05\v\x06\x02:;\x05\r\x07\x02;\x10\x03\x02\x02\x02<>\t\x05" +
		"\x02\x02=<\x03\x02\x02\x02>?\x03\x02\x02\x02?=\x03\x02\x02\x02?@\x03\x02" +
		"\x02\x02@\x12\x03\x02\x02\x02AB\t\x06\x02\x02BC\x03\x02\x02\x02CD\b\n" +
		"\x02\x02D\x14\x03\x02\x02\x02\t\x02\x1D#(/2?\x03\b\x02\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!gmlLexer.__ATN) {
			gmlLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(gmlLexer._serializedATN));
		}

		return gmlLexer.__ATN;
	}

}

