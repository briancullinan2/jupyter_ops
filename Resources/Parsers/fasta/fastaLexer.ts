// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/fasta/fasta.g4 by ANTLR 4.7.3-SNAPSHOT


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


export class fastaLexer extends Lexer {
	public static readonly COMMENTLINE = 1;
	public static readonly DESCRIPTIONLINE = 2;
	public static readonly TEXT = 3;
	public static readonly EOL = 4;
	public static readonly SEQUENCELINE = 5;

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"COMMENTLINE", "DESCRIPTIONLINE", "TEXT", "EOL", "DIGIT", "LETTER", "SYMBOL", 
		"SEQUENCELINE",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "COMMENTLINE", "DESCRIPTIONLINE", "TEXT", "EOL", "SEQUENCELINE",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(fastaLexer._LITERAL_NAMES, fastaLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return fastaLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(fastaLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "fasta.g4"; }

	// @Override
	public get ruleNames(): string[] { return fastaLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return fastaLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return fastaLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return fastaLexer.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\x07@\b\x01\x04" +
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
		"\x07\t\x07\x04\b\t\b\x04\t\t\t\x03\x02\x03\x02\x07\x02\x16\n\x02\f\x02" +
		"\x0E\x02\x19\v\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03\x07" +
		"\x03!\n\x03\f\x03\x0E\x03$\v\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04" +
		"\x06\x04+\n\x04\r\x04\x0E\x04,\x03\x05\x05\x050\n\x05\x03\x05\x03\x05" +
		"\x03\x06\x03\x06\x03\x07\x03\x07\x03\b\x03\b\x03\t\x06\t;\n\t\r\t\x0E" +
		"\t<\x03\t\x03\t\x03\x17\x02\x02\n\x03\x02\x03\x05\x02\x04\x07\x02\x05" +
		"\t\x02\x06\v\x02\x02\r\x02\x02\x0F\x02\x02\x11\x02\x07\x03\x02\x05\x03" +
		"\x022;\x04\x02C\\c|\t\x02\"\"(+-1<<]]__aa\x02C\x02\x03\x03\x02\x02\x02" +
		"\x02\x05\x03\x02\x02\x02\x02\x07\x03\x02\x02\x02\x02\t\x03\x02\x02\x02" +
		"\x02\x11\x03\x02\x02\x02\x03\x13\x03\x02\x02\x02\x05\x1C\x03\x02\x02\x02" +
		"\x07*\x03\x02\x02\x02\t/\x03\x02\x02\x02\v3\x03\x02\x02\x02\r5\x03\x02" +
		"\x02\x02\x0F7\x03\x02\x02\x02\x11:\x03\x02\x02\x02\x13\x17\x07=\x02\x02" +
		"\x14\x16\v\x02\x02\x02\x15\x14\x03\x02\x02\x02\x16\x19\x03\x02\x02\x02" +
		"\x17\x18\x03\x02\x02\x02\x17\x15\x03\x02\x02\x02\x18\x1A\x03\x02\x02\x02" +
		"\x19\x17\x03\x02\x02\x02\x1A\x1B\x05\t\x05\x02\x1B\x04\x03\x02\x02\x02" +
		"\x1C\x1D\x07@\x02\x02\x1D\"\x05\x07\x04\x02\x1E\x1F\x07~\x02\x02\x1F!" +
		"\x05\x07\x04\x02 \x1E\x03\x02\x02\x02!$\x03\x02\x02\x02\" \x03\x02\x02" +
		"\x02\"#\x03\x02\x02\x02#%\x03\x02\x02\x02$\"\x03\x02\x02\x02%&\x05\t\x05" +
		"\x02&\x06\x03\x02\x02\x02\'+\x05\v\x06\x02(+\x05\r\x07\x02)+\x05\x0F\b" +
		"\x02*\'\x03\x02\x02\x02*(\x03\x02\x02\x02*)\x03\x02\x02\x02+,\x03\x02" +
		"\x02\x02,*\x03\x02\x02\x02,-\x03\x02\x02\x02-\b\x03\x02\x02\x02.0\x07" +
		"\x0F\x02\x02/.\x03\x02\x02\x02/0\x03\x02\x02\x0201\x03\x02\x02\x0212\x07" +
		"\f\x02\x022\n\x03\x02\x02\x0234\t\x02\x02\x024\f\x03\x02\x02\x0256\t\x03" +
		"\x02\x026\x0E\x03\x02\x02\x0278\t\x04\x02\x028\x10\x03\x02\x02\x029;\x05" +
		"\r\x07\x02:9\x03\x02\x02\x02;<\x03\x02\x02\x02<:\x03\x02\x02\x02<=\x03" +
		"\x02\x02\x02=>\x03\x02\x02\x02>?\x05\t\x05\x02?\x12\x03\x02\x02\x02\t" +
		"\x02\x17\"*,/<\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!fastaLexer.__ATN) {
			fastaLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(fastaLexer._serializedATN));
		}

		return fastaLexer.__ATN;
	}

}

