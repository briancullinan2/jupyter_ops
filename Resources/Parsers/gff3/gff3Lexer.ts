// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/gff3/gff3.g4 by ANTLR 4.7.3-SNAPSHOT


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


export class gff3Lexer extends Lexer {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly HEADER = 4;
	public static readonly COMMENTLINE = 5;
	public static readonly EOL = 6;
	public static readonly TEXT = 7;

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"T__0", "T__1", "T__2", "HEADER", "COMMENTLINE", "EOL", "TEXT", "CHAR", 
		"DIGIT", "SYMBOL",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'\t'", "';'", "'='",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, "HEADER", "COMMENTLINE", "EOL", 
		"TEXT",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(gff3Lexer._LITERAL_NAMES, gff3Lexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return gff3Lexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(gff3Lexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "gff3.g4"; }

	// @Override
	public get ruleNames(): string[] { return gff3Lexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return gff3Lexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return gff3Lexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return gff3Lexer.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\tJ\b\x01\x04" +
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
		"\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x03\x02\x03\x02\x03" +
		"\x03\x03\x03\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03" +
		"\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03" +
		"\x05\x03\x05\x03\x05\x03\x05\x03\x06\x03\x06\x07\x062\n\x06\f\x06\x0E" +
		"\x065\v\x06\x03\x06\x03\x06\x03\x07\x05\x07:\n\x07\x03\x07\x03\x07\x03" +
		"\b\x03\b\x03\b\x06\bA\n\b\r\b\x0E\bB\x03\t\x03\t\x03\n\x03\n\x03\v\x03" +
		"\v\x033\x02\x02\f\x03\x02\x03\x05\x02\x04\x07\x02\x05\t\x02\x06\v\x02" +
		"\x07\r\x02\b\x0F\x02\t\x11\x02\x02\x13\x02\x02\x15\x02\x02\x03\x02\x05" +
		"\x04\x02C\\c|\x03\x022;\t\x02\"#&\',0<<AB`a~~\x02K\x02\x03\x03\x02\x02" +
		"\x02\x02\x05\x03\x02\x02\x02\x02\x07\x03\x02\x02\x02\x02\t\x03\x02\x02" +
		"\x02\x02\v\x03\x02\x02\x02\x02\r\x03\x02\x02\x02\x02\x0F\x03\x02\x02\x02" +
		"\x03\x17\x03\x02\x02\x02\x05\x19\x03\x02\x02\x02\x07\x1B\x03\x02\x02\x02" +
		"\t\x1D\x03\x02\x02\x02\v/\x03\x02\x02\x02\r9\x03\x02\x02\x02\x0F@\x03" +
		"\x02\x02\x02\x11D\x03\x02\x02\x02\x13F\x03\x02\x02\x02\x15H\x03\x02\x02" +
		"\x02\x17\x18\x07\v\x02\x02\x18\x04\x03\x02\x02\x02\x19\x1A\x07=\x02\x02" +
		"\x1A\x06\x03\x02\x02\x02\x1B\x1C\x07?\x02\x02\x1C\b\x03\x02\x02\x02\x1D" +
		"\x1E\x07%\x02\x02\x1E\x1F\x07%\x02\x02\x1F \x07i\x02\x02 !\x07h\x02\x02" +
		"!\"\x07h\x02\x02\"#\x07/\x02\x02#$\x07x\x02\x02$%\x07g\x02\x02%&\x07t" +
		"\x02\x02&\'\x07u\x02\x02\'(\x07k\x02\x02()\x07q\x02\x02)*\x07p\x02\x02" +
		"*+\x07\"\x02\x02+,\x075\x02\x02,-\x03\x02\x02\x02-.\x05\r\x07\x02.\n\x03" +
		"\x02\x02\x02/3\x07%\x02\x0202\v\x02\x02\x0210\x03\x02\x02\x0225\x03\x02" +
		"\x02\x0234\x03\x02\x02\x0231\x03\x02\x02\x0246\x03\x02\x02\x0253\x03\x02" +
		"\x02\x0267\x05\r\x07\x027\f\x03\x02\x02\x028:\x07\x0F\x02\x0298\x03\x02" +
		"\x02\x029:\x03\x02\x02\x02:;\x03\x02\x02\x02;<\x07\f\x02\x02<\x0E\x03" +
		"\x02\x02\x02=A\x05\x11\t\x02>A\x05\x15\v\x02?A\x05\x13\n\x02@=\x03\x02" +
		"\x02\x02@>\x03\x02\x02\x02@?\x03\x02\x02\x02AB\x03\x02\x02\x02B@\x03\x02" +
		"\x02\x02BC\x03\x02\x02\x02C\x10\x03\x02\x02\x02DE\t\x02\x02\x02E\x12\x03" +
		"\x02\x02\x02FG\t\x03\x02\x02G\x14\x03\x02\x02\x02HI\t\x04\x02\x02I\x16" +
		"\x03\x02\x02\x02\x07\x0239@B\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!gff3Lexer.__ATN) {
			gff3Lexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(gff3Lexer._serializedATN));
		}

		return gff3Lexer.__ATN;
	}

}

