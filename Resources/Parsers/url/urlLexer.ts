// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/url/url.g4 by ANTLR 4.7.3-SNAPSHOT


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


export class urlLexer extends Lexer {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly T__9 = 10;
	public static readonly T__10 = 11;
	public static readonly T__11 = 12;
	public static readonly DIGITS = 13;
	public static readonly HEX = 14;
	public static readonly STRING = 15;
	public static readonly WS = 16;

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", "T__8", 
		"T__9", "T__10", "T__11", "DIGITS", "HEX", "STRING", "WS",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'://'", "':'", "'/'", "'.'", "'['", "']'", "'::'", "'@'", 
		"'#'", "'?'", "'&'", "'='",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, "DIGITS", 
		"HEX", "STRING", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(urlLexer._LITERAL_NAMES, urlLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return urlLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(urlLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "url.g4"; }

	// @Override
	public get ruleNames(): string[] { return urlLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return urlLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return urlLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return urlLexer.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\x12Z\b\x01\x04" +
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
		"\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r" +
		"\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x03\x02\x03\x02" +
		"\x03\x02\x03\x02\x03\x03\x03\x03\x03\x04\x03\x04\x03\x05\x03\x05\x03\x06" +
		"\x03\x06\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03\t\x03\t\x03\n\x03\n\x03" +
		"\v\x03\v\x03\f\x03\f\x03\r\x03\r\x03\x0E\x06\x0E@\n\x0E\r\x0E\x0E\x0E" +
		"A\x03\x0F\x03\x0F\x03\x0F\x06\x0FG\n\x0F\r\x0F\x0E\x0FH\x03\x10\x03\x10" +
		"\x05\x10M\n\x10\x03\x10\x03\x10\x07\x10Q\n\x10\f\x10\x0E\x10T\v\x10\x03" +
		"\x11\x06\x11W\n\x11\r\x11\x0E\x11X\x02\x02\x02\x12\x03\x02\x03\x05\x02" +
		"\x04\x07\x02\x05\t\x02\x06\v\x02\x07\r\x02\b\x0F\x02\t\x11\x02\n\x13\x02" +
		"\v\x15\x02\f\x17\x02\r\x19\x02\x0E\x1B\x02\x0F\x1D\x02\x10\x1F\x02\x11" +
		"!\x02\x12\x03\x02\x07\x03\x022;\x05\x022;CHch\x06\x022;C\\c|\x80\x80\x07" +
		"\x02--/02;C\\c|\x04\x02\f\f\x0F\x0F\x02_\x02\x03\x03\x02\x02\x02\x02\x05" +
		"\x03\x02\x02\x02\x02\x07\x03\x02\x02\x02\x02\t\x03\x02\x02\x02\x02\v\x03" +
		"\x02\x02\x02\x02\r\x03\x02\x02\x02\x02\x0F\x03\x02\x02\x02\x02\x11\x03" +
		"\x02\x02\x02\x02\x13\x03\x02\x02\x02\x02\x15\x03\x02\x02\x02\x02\x17\x03" +
		"\x02\x02\x02\x02\x19\x03\x02\x02\x02\x02\x1B\x03\x02\x02\x02\x02\x1D\x03" +
		"\x02\x02\x02\x02\x1F\x03\x02\x02\x02\x02!\x03\x02\x02\x02\x03#\x03\x02" +
		"\x02\x02\x05\'\x03\x02\x02\x02\x07)\x03\x02\x02\x02\t+\x03\x02\x02\x02" +
		"\v-\x03\x02\x02\x02\r/\x03\x02\x02\x02\x0F1\x03\x02\x02\x02\x114\x03\x02" +
		"\x02\x02\x136\x03\x02\x02\x02\x158\x03\x02\x02\x02\x17:\x03\x02\x02\x02" +
		"\x19<\x03\x02\x02\x02\x1B?\x03\x02\x02\x02\x1DF\x03\x02\x02\x02\x1FL\x03" +
		"\x02\x02\x02!V\x03\x02\x02\x02#$\x07<\x02\x02$%\x071\x02\x02%&\x071\x02" +
		"\x02&\x04\x03\x02\x02\x02\'(\x07<\x02\x02(\x06\x03\x02\x02\x02)*\x071" +
		"\x02\x02*\b\x03\x02\x02\x02+,\x070\x02\x02,\n\x03\x02\x02\x02-.\x07]\x02" +
		"\x02.\f\x03\x02\x02\x02/0\x07_\x02\x020\x0E\x03\x02\x02\x0212\x07<\x02" +
		"\x0223\x07<\x02\x023\x10\x03\x02\x02\x0245\x07B\x02\x025\x12\x03\x02\x02" +
		"\x0267\x07%\x02\x027\x14\x03\x02\x02\x0289\x07A\x02\x029\x16\x03\x02\x02" +
		"\x02:;\x07(\x02\x02;\x18\x03\x02\x02\x02<=\x07?\x02\x02=\x1A\x03\x02\x02" +
		"\x02>@\t\x02\x02\x02?>\x03\x02\x02\x02@A\x03\x02\x02\x02A?\x03\x02\x02" +
		"\x02AB\x03\x02\x02\x02B\x1C\x03\x02\x02\x02CD\x07\'\x02\x02DE\t\x03\x02" +
		"\x02EG\t\x03\x02\x02FC\x03\x02\x02\x02GH\x03\x02\x02\x02HF\x03\x02\x02" +
		"\x02HI\x03\x02\x02\x02I\x1E\x03\x02\x02\x02JM\t\x04\x02\x02KM\x05\x1D" +
		"\x0F\x02LJ\x03\x02\x02\x02LK\x03\x02\x02\x02MR\x03\x02\x02\x02NQ\t\x05" +
		"\x02\x02OQ\x05\x1D\x0F\x02PN\x03\x02\x02\x02PO\x03\x02\x02\x02QT\x03\x02" +
		"\x02\x02RP\x03\x02\x02\x02RS\x03\x02\x02\x02S \x03\x02\x02\x02TR\x03\x02" +
		"\x02\x02UW\t\x06\x02\x02VU\x03\x02\x02\x02WX\x03\x02\x02\x02XV\x03\x02" +
		"\x02\x02XY\x03\x02\x02\x02Y\"\x03\x02\x02\x02\t\x02AHLPRX\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!urlLexer.__ATN) {
			urlLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(urlLexer._serializedATN));
		}

		return urlLexer.__ATN;
	}

}

