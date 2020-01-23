// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/tnt/tnt.g4 by ANTLR 4.7.3-SNAPSHOT


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


export class tntLexer extends Lexer {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly ZERO = 8;
	public static readonly SUCCESSOR = 9;
	public static readonly A = 10;
	public static readonly B = 11;
	public static readonly C = 12;
	public static readonly D = 13;
	public static readonly E = 14;
	public static readonly PRIME = 15;
	public static readonly FOREVERY = 16;
	public static readonly EXISTS = 17;
	public static readonly WS = 18;

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "ZERO", "SUCCESSOR", 
		"A", "B", "C", "D", "E", "PRIME", "FOREVERY", "EXISTS", "WS",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'='", "'+'", "'*'", "'('", "')'", "'~'", "':'", "'0'", "'S'", 
		"'a'", "'b'", "'c'", "'d'", "'e'", "'''", "'A'", "'E'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, "ZERO", "SUCCESSOR", "A", "B", "C", "D", "E", "PRIME", "FOREVERY", 
		"EXISTS", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(tntLexer._LITERAL_NAMES, tntLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return tntLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(tntLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "tnt.g4"; }

	// @Override
	public get ruleNames(): string[] { return tntLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return tntLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return tntLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return tntLexer.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\x14M\b\x01\x04" +
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
		"\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r" +
		"\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12" +
		"\x04\x13\t\x13\x03\x02\x03\x02\x03\x03\x03\x03\x03\x04\x03\x04\x03\x05" +
		"\x03\x05\x03\x06\x03\x06\x03\x07\x03\x07\x03\b\x03\b\x03\t\x03\t\x03\n" +
		"\x03\n\x03\v\x03\v\x03\f\x03\f\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0F\x03" +
		"\x0F\x03\x10\x03\x10\x03\x11\x03\x11\x03\x12\x03\x12\x03\x13\x03\x13\x03" +
		"\x13\x03\x13\x02\x02\x02\x14\x03\x02\x03\x05\x02\x04\x07\x02\x05\t\x02" +
		"\x06\v\x02\x07\r\x02\b\x0F\x02\t\x11\x02\n\x13\x02\v\x15\x02\f\x17\x02" +
		"\r\x19\x02\x0E\x1B\x02\x0F\x1D\x02\x10\x1F\x02\x11!\x02\x12#\x02\x13%" +
		"\x02\x14\x03\x02\x03\x05\x02\v\f\x0F\x0F\"\"\x02L\x02\x03\x03\x02\x02" +
		"\x02\x02\x05\x03\x02\x02\x02\x02\x07\x03\x02\x02\x02\x02\t\x03\x02\x02" +
		"\x02\x02\v\x03\x02\x02\x02\x02\r\x03\x02\x02\x02\x02\x0F\x03\x02\x02\x02" +
		"\x02\x11\x03\x02\x02\x02\x02\x13\x03\x02\x02\x02\x02\x15\x03\x02\x02\x02" +
		"\x02\x17\x03\x02\x02\x02\x02\x19\x03\x02\x02\x02\x02\x1B\x03\x02\x02\x02" +
		"\x02\x1D\x03\x02\x02\x02\x02\x1F\x03\x02\x02\x02\x02!\x03\x02\x02\x02" +
		"\x02#\x03\x02\x02\x02\x02%\x03\x02\x02\x02\x03\'\x03\x02\x02\x02\x05)" +
		"\x03\x02\x02\x02\x07+\x03\x02\x02\x02\t-\x03\x02\x02\x02\v/\x03\x02\x02" +
		"\x02\r1\x03\x02\x02\x02\x0F3\x03\x02\x02\x02\x115\x03\x02\x02\x02\x13" +
		"7\x03\x02\x02\x02\x159\x03\x02\x02\x02\x17;\x03\x02\x02\x02\x19=\x03\x02" +
		"\x02\x02\x1B?\x03\x02\x02\x02\x1DA\x03\x02\x02\x02\x1FC\x03\x02\x02\x02" +
		"!E\x03\x02\x02\x02#G\x03\x02\x02\x02%I\x03\x02\x02\x02\'(\x07?\x02\x02" +
		"(\x04\x03\x02\x02\x02)*\x07-\x02\x02*\x06\x03\x02\x02\x02+,\x07,\x02\x02" +
		",\b\x03\x02\x02\x02-.\x07*\x02\x02.\n\x03\x02\x02\x02/0\x07+\x02\x020" +
		"\f\x03\x02\x02\x0212\x07\x80\x02\x022\x0E\x03\x02\x02\x0234\x07<\x02\x02" +
		"4\x10\x03\x02\x02\x0256\x072\x02\x026\x12\x03\x02\x02\x0278\x07U\x02\x02" +
		"8\x14\x03\x02\x02\x029:\x07c\x02\x02:\x16\x03\x02\x02\x02;<\x07d\x02\x02" +
		"<\x18\x03\x02\x02\x02=>\x07e\x02\x02>\x1A\x03\x02\x02\x02?@\x07f\x02\x02" +
		"@\x1C\x03\x02\x02\x02AB\x07g\x02\x02B\x1E\x03\x02\x02\x02CD\x07)\x02\x02" +
		"D \x03\x02\x02\x02EF\x07C\x02\x02F\"\x03\x02\x02\x02GH\x07G\x02\x02H$" +
		"\x03\x02\x02\x02IJ\t\x02\x02\x02JK\x03\x02\x02\x02KL\b\x13\x02\x02L&\x03" +
		"\x02\x02\x02\x03\x02\x03\b\x02\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!tntLexer.__ATN) {
			tntLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(tntLexer._serializedATN));
		}

		return tntLexer.__ATN;
	}

}

