// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/databank/databank.g4 by ANTLR 4.7.3-SNAPSHOT


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


export class databankLexer extends Lexer {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly FLOATINGPOINT = 5;
	public static readonly COMMENT = 6;
	public static readonly EOL = 7;
	public static readonly WS = 8;

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"T__0", "T__1", "T__2", "T__3", "FLOATINGPOINT", "NUMBER", "E", "SIGN", 
		"COMMENT", "EOL", "WS",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'-1'", "'-4'", "'-12'", "'NA'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, "FLOATINGPOINT", 
		"COMMENT", "EOL", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(databankLexer._LITERAL_NAMES, databankLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return databankLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(databankLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "databank.g4"; }

	// @Override
	public get ruleNames(): string[] { return databankLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return databankLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return databankLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return databankLexer.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\n^\b\x01\x04" +
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
		"\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x03\x02\x03" +
		"\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
		"\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x05\x06*\n\x06\x03\x06\x03" +
		"\x06\x05\x06.\n\x06\x03\x07\x06\x071\n\x07\r\x07\x0E\x072\x03\x07\x03" +
		"\x07\x07\x077\n\x07\f\x07\x0E\x07:\v\x07\x05\x07<\n\x07\x03\b\x03\b\x03" +
		"\t\x03\t\x03\n\x03\n\x03\n\x03\n\x07\nF\n\n\f\n\x0E\nI\v\n\x03\n\x03\n" +
		"\x07\nM\n\n\f\n\x0E\nP\v\n\x03\n\x03\n\x03\n\x03\n\x03\v\x06\vW\n\v\r" +
		"\v\x0E\vX\x03\f\x03\f\x03\f\x03\f\x02\x02\x02\r\x03\x02\x03\x05\x02\x04" +
		"\x07\x02\x05\t\x02\x06\v\x02\x07\r\x02\x02\x0F\x02\x02\x11\x02\x02\x13" +
		"\x02\b\x15\x02\t\x17\x02\n\x03\x02\x07\x04\x02GGgg\x04\x02--//\x03\x02" +
		"$$\x04\x02\f\f\x0F\x0F\x05\x02\v\f\x0F\x0F\"\"\x02b\x02\x03\x03\x02\x02" +
		"\x02\x02\x05\x03\x02\x02\x02\x02\x07\x03\x02\x02\x02\x02\t\x03\x02\x02" +
		"\x02\x02\v\x03\x02\x02\x02\x02\x13\x03\x02\x02\x02\x02\x15\x03\x02\x02" +
		"\x02\x02\x17\x03\x02\x02\x02\x03\x19\x03\x02\x02\x02\x05\x1C\x03\x02\x02" +
		"\x02\x07\x1F\x03\x02\x02\x02\t#\x03\x02\x02\x02\v&\x03\x02\x02\x02\r0" +
		"\x03\x02\x02\x02\x0F=\x03\x02\x02\x02\x11?\x03\x02\x02\x02\x13A\x03\x02" +
		"\x02\x02\x15V\x03\x02\x02\x02\x17Z\x03\x02\x02\x02\x19\x1A\x07/\x02\x02" +
		"\x1A\x1B\x073\x02\x02\x1B\x04\x03\x02\x02\x02\x1C\x1D\x07/\x02\x02\x1D" +
		"\x1E\x076\x02\x02\x1E\x06\x03\x02\x02\x02\x1F \x07/\x02\x02 !\x073\x02" +
		"\x02!\"\x074\x02\x02\"\b\x03\x02\x02\x02#$\x07P\x02\x02$%\x07C\x02\x02" +
		"%\n\x03\x02\x02\x02&-\x05\r\x07\x02\')\x05\x0F\b\x02(*\x05\x11\t\x02)" +
		"(\x03\x02\x02\x02)*\x03\x02\x02\x02*+\x03\x02\x02\x02+,\x05\r\x07\x02" +
		",.\x03\x02\x02\x02-\'\x03\x02\x02\x02-.\x03\x02\x02\x02.\f\x03\x02\x02" +
		"\x02/1\x042;\x020/\x03\x02\x02\x0212\x03\x02\x02\x0220\x03\x02\x02\x02" +
		"23\x03\x02\x02\x023;\x03\x02\x02\x0248\x070\x02\x0257\x042;\x0265\x03" +
		"\x02\x02\x027:\x03\x02\x02\x0286\x03\x02\x02\x0289\x03\x02\x02\x029<\x03" +
		"\x02\x02\x02:8\x03\x02\x02\x02;4\x03\x02\x02\x02;<\x03\x02\x02\x02<\x0E" +
		"\x03\x02\x02\x02=>\t\x02\x02\x02>\x10\x03\x02\x02\x02?@\t\x03\x02\x02" +
		"@\x12\x03\x02\x02\x02AB\x07$\x02\x02BC\x07e\x02\x02CG\x03\x02\x02\x02" +
		"DF\n\x04\x02\x02ED\x03\x02\x02\x02FI\x03\x02\x02\x02GE\x03\x02\x02\x02" +
		"GH\x03\x02\x02\x02HJ\x03\x02\x02\x02IG\x03\x02\x02\x02JN\x07$\x02\x02" +
		"KM\x07\"\x02\x02LK\x03\x02\x02\x02MP\x03\x02\x02\x02NL\x03\x02\x02\x02" +
		"NO\x03\x02\x02\x02OQ\x03\x02\x02\x02PN\x03\x02\x02\x02QR\x05\x15\v\x02" +
		"RS\x03\x02\x02\x02ST\b\n\x02\x02T\x14\x03\x02\x02\x02UW\t\x05\x02\x02" +
		"VU\x03\x02\x02\x02WX\x03\x02\x02\x02XV\x03\x02\x02\x02XY\x03\x02\x02\x02" +
		"Y\x16\x03\x02\x02\x02Z[\t\x06\x02\x02[\\\x03\x02\x02\x02\\]\b\f\x02\x02" +
		"]\x18\x03\x02\x02\x02\v\x02)-28;GNX\x03\b\x02\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!databankLexer.__ATN) {
			databankLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(databankLexer._serializedATN));
		}

		return databankLexer.__ATN;
	}

}

