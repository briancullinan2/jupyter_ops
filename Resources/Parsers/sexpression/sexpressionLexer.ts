// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/sexpression/sexpression.g4 by ANTLR 4.7.3-SNAPSHOT


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


export class sexpressionLexer extends Lexer {
	public static readonly STRING = 1;
	public static readonly WHITESPACE = 2;
	public static readonly NUMBER = 3;
	public static readonly SYMBOL = 4;
	public static readonly LPAREN = 5;
	public static readonly RPAREN = 6;
	public static readonly DOT = 7;

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"STRING", "WHITESPACE", "NUMBER", "SYMBOL", "LPAREN", "RPAREN", "DOT", 
		"SYMBOL_START", "DIGIT",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, "'('", "')'", "'.'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "STRING", "WHITESPACE", "NUMBER", "SYMBOL", "LPAREN", "RPAREN", 
		"DOT",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(sexpressionLexer._LITERAL_NAMES, sexpressionLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return sexpressionLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(sexpressionLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "sexpression.g4"; }

	// @Override
	public get ruleNames(): string[] { return sexpressionLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return sexpressionLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return sexpressionLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return sexpressionLexer.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\tJ\b\x01\x04" +
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
		"\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x03\x02\x03\x02\x03\x02\x03\x02" +
		"\x07\x02\x1A\n\x02\f\x02\x0E\x02\x1D\v\x02\x03\x02\x03\x02\x03\x03\x06" +
		"\x03\"\n\x03\r\x03\x0E\x03#\x03\x03\x03\x03\x03\x04\x05\x04)\n\x04\x03" +
		"\x04\x06\x04,\n\x04\r\x04\x0E\x04-\x03\x04\x03\x04\x06\x042\n\x04\r\x04" +
		"\x0E\x043\x05\x046\n\x04\x03\x05\x03\x05\x03\x05\x07\x05;\n\x05\f\x05" +
		"\x0E\x05>\v\x05\x03\x06\x03\x06\x03\x07\x03\x07\x03\b\x03\b\x03\t\x05" +
		"\tG\n\t\x03\n\x03\n\x02\x02\x02\v\x03\x02\x03\x05\x02\x04\x07\x02\x05" +
		"\t\x02\x06\v\x02\x07\r\x02\b\x0F\x02\t\x11\x02\x02\x13\x02\x02\x03\x02" +
		"\x06\x04\x02$$^^\x05\x02\v\f\x0F\x0F\"\"\x04\x02--//\x06\x02,-/1C\\c|" +
		"\x02P\x02\x03\x03\x02\x02\x02\x02\x05\x03\x02\x02\x02\x02\x07\x03\x02" +
		"\x02\x02\x02\t\x03\x02\x02\x02\x02\v\x03\x02\x02\x02\x02\r\x03\x02\x02" +
		"\x02\x02\x0F\x03\x02\x02\x02\x03\x15\x03\x02\x02\x02\x05!\x03\x02\x02" +
		"\x02\x07(\x03\x02\x02\x02\t7\x03\x02\x02\x02\v?\x03\x02\x02\x02\rA\x03" +
		"\x02\x02\x02\x0FC\x03\x02\x02\x02\x11F\x03\x02\x02\x02\x13H\x03\x02\x02" +
		"\x02\x15\x1B\x07$\x02\x02\x16\x17\x07^\x02\x02\x17\x1A\v\x02\x02\x02\x18" +
		"\x1A\n\x02\x02\x02\x19\x16\x03\x02\x02\x02\x19\x18\x03\x02\x02\x02\x1A" +
		"\x1D\x03\x02\x02\x02\x1B\x19\x03\x02\x02\x02\x1B\x1C\x03\x02\x02\x02\x1C" +
		"\x1E\x03\x02\x02\x02\x1D\x1B\x03\x02\x02\x02\x1E\x1F\x07$\x02\x02\x1F" +
		"\x04\x03\x02\x02\x02 \"\t\x03\x02\x02! \x03\x02\x02\x02\"#\x03\x02\x02" +
		"\x02#!\x03\x02\x02\x02#$\x03\x02\x02\x02$%\x03\x02\x02\x02%&\b\x03\x02" +
		"\x02&\x06\x03\x02\x02\x02\')\t\x04\x02\x02(\'\x03\x02\x02\x02()\x03\x02" +
		"\x02\x02)+\x03\x02\x02\x02*,\x05\x13\n\x02+*\x03\x02\x02\x02,-\x03\x02" +
		"\x02\x02-+\x03\x02\x02\x02-.\x03\x02\x02\x02.5\x03\x02\x02\x02/1\x070" +
		"\x02\x0202\x05\x13\n\x0210\x03\x02\x02\x0223\x03\x02\x02\x0231\x03\x02" +
		"\x02\x0234\x03\x02\x02\x0246\x03\x02\x02\x025/\x03\x02\x02\x0256\x03\x02" +
		"\x02\x026\b\x03\x02\x02\x027<\x05\x11\t\x028;\x05\x11\t\x029;\x05\x13" +
		"\n\x02:8\x03\x02\x02\x02:9\x03\x02\x02\x02;>\x03\x02\x02\x02<:\x03\x02" +
		"\x02\x02<=\x03\x02\x02\x02=\n\x03\x02\x02\x02><\x03\x02\x02\x02?@\x07" +
		"*\x02\x02@\f\x03\x02\x02\x02AB\x07+\x02\x02B\x0E\x03\x02\x02\x02CD\x07" +
		"0\x02\x02D\x10\x03\x02\x02\x02EG\t\x05\x02\x02FE\x03\x02\x02\x02G\x12" +
		"\x03\x02\x02\x02HI\x042;\x02I\x14\x03\x02\x02\x02\r\x02\x19\x1B#(-35:" +
		"<F\x03\b\x02\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!sexpressionLexer.__ATN) {
			sexpressionLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(sexpressionLexer._serializedATN));
		}

		return sexpressionLexer.__ATN;
	}

}

