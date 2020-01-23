// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/pdn/pdn.g4 by ANTLR 4.7.3-SNAPSHOT


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


export class pdnLexer extends Lexer {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly MOVE1 = 8;
	public static readonly MOVE2 = 9;
	public static readonly NUMBER = 10;
	public static readonly TEXT = 11;
	public static readonly STRING = 12;
	public static readonly COMMENT = 13;
	public static readonly WS = 14;

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "MOVE1", "MOVE2", 
		"NUMBER", "TEXT", "STRING", "COMMENT", "WS",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'['", "']'", "'*'", "'.'", "'1/2-1/2'", "'1-0'", "'0-1'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, "MOVE1", "MOVE2", "NUMBER", "TEXT", "STRING", "COMMENT", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(pdnLexer._LITERAL_NAMES, pdnLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return pdnLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(pdnLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "pdn.g4"; }

	// @Override
	public get ruleNames(): string[] { return pdnLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return pdnLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return pdnLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return pdnLexer.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\x10u\b\x01\x04" +
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
		"\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r" +
		"\x04\x0E\t\x0E\x04\x0F\t\x0F\x03\x02\x03\x02\x03\x03\x03\x03\x03\x04\x03" +
		"\x04\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03" +
		"\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03\b\x03" +
		"\t\x06\t9\n\t\r\t\x0E\t:\x03\t\x03\t\x06\t?\n\t\r\t\x0E\t@\x03\n\x06\n" +
		"D\n\n\r\n\x0E\nE\x03\n\x03\n\x06\nJ\n\n\r\n\x0E\nK\x03\v\x06\vO\n\v\r" +
		"\v\x0E\vP\x03\f\x03\f\x06\fU\n\f\r\f\x0E\fV\x03\r\x03\r\x03\r\x03\r\x07" +
		"\r]\n\r\f\r\x0E\r`\v\r\x03\r\x03\r\x03\x0E\x03\x0E\x07\x0Ef\n\x0E\f\x0E" +
		"\x0E\x0Ei\v\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0F\x06\x0Fp\n\x0F" +
		"\r\x0F\x0E\x0Fq\x03\x0F\x03\x0F\x03g\x02\x02\x10\x03\x02\x03\x05\x02\x04" +
		"\x07\x02\x05\t\x02\x06\v\x02\x07\r\x02\b\x0F\x02\t\x11\x02\n\x13\x02\v" +
		"\x15\x02\f\x17\x02\r\x19\x02\x0E\x1B\x02\x0F\x1D\x02\x10\x03\x02\x06\x04" +
		"\x02C\\c|\x06\x022;C\\aac|\x03\x02$$\x05\x02\v\f\x0F\x0F\"\"\x02~\x02" +
		"\x03\x03\x02\x02\x02\x02\x05\x03\x02\x02\x02\x02\x07\x03\x02\x02\x02\x02" +
		"\t\x03\x02\x02\x02\x02\v\x03\x02\x02\x02\x02\r\x03\x02\x02\x02\x02\x0F" +
		"\x03\x02\x02\x02\x02\x11\x03\x02\x02\x02\x02\x13\x03\x02\x02\x02\x02\x15" +
		"\x03\x02\x02\x02\x02\x17\x03\x02\x02\x02\x02\x19\x03\x02\x02\x02\x02\x1B" +
		"\x03\x02\x02\x02\x02\x1D\x03\x02\x02\x02\x03\x1F\x03\x02\x02\x02\x05!" +
		"\x03\x02\x02\x02\x07#\x03\x02\x02\x02\t%\x03\x02\x02\x02\v\'\x03\x02\x02" +
		"\x02\r/\x03\x02\x02\x02\x0F3\x03\x02\x02\x02\x118\x03\x02\x02\x02\x13" +
		"C\x03\x02\x02\x02\x15N\x03\x02\x02\x02\x17R\x03\x02\x02\x02\x19X\x03\x02" +
		"\x02\x02\x1Bc\x03\x02\x02\x02\x1Do\x03\x02\x02\x02\x1F \x07]\x02\x02 " +
		"\x04\x03\x02\x02\x02!\"\x07_\x02\x02\"\x06\x03\x02\x02\x02#$\x07,\x02" +
		"\x02$\b\x03\x02\x02\x02%&\x070\x02\x02&\n\x03\x02\x02\x02\'(\x073\x02" +
		"\x02()\x071\x02\x02)*\x074\x02\x02*+\x07/\x02\x02+,\x073\x02\x02,-\x07" +
		"1\x02\x02-.\x074\x02\x02.\f\x03\x02\x02\x02/0\x073\x02\x0201\x07/\x02" +
		"\x0212\x072\x02\x022\x0E\x03\x02\x02\x0234\x072\x02\x0245\x07/\x02\x02" +
		"56\x073\x02\x026\x10\x03\x02\x02\x0279\x042;\x0287\x03\x02\x02\x029:\x03" +
		"\x02\x02\x02:8\x03\x02\x02\x02:;\x03\x02\x02\x02;<\x03\x02\x02\x02<>\x07" +
		"z\x02\x02=?\x042;\x02>=\x03\x02\x02\x02?@\x03\x02\x02\x02@>\x03\x02\x02" +
		"\x02@A\x03\x02\x02\x02A\x12\x03\x02\x02\x02BD\x042;\x02CB\x03\x02\x02" +
		"\x02DE\x03\x02\x02\x02EC\x03\x02\x02\x02EF\x03\x02\x02\x02FG\x03\x02\x02" +
		"\x02GI\x07/\x02\x02HJ\x042;\x02IH\x03\x02\x02\x02JK\x03\x02\x02\x02KI" +
		"\x03\x02\x02\x02KL\x03\x02\x02\x02L\x14\x03\x02\x02\x02MO\x042;\x02NM" +
		"\x03\x02\x02\x02OP\x03\x02\x02\x02PN\x03\x02\x02\x02PQ\x03\x02\x02\x02" +
		"Q\x16\x03\x02\x02\x02RT\t\x02\x02\x02SU\t\x03\x02\x02TS\x03\x02\x02\x02" +
		"UV\x03\x02\x02\x02VT\x03\x02\x02\x02VW\x03\x02\x02\x02W\x18\x03\x02\x02" +
		"\x02X^\x07$\x02\x02YZ\x07$\x02\x02Z]\x07$\x02\x02[]\n\x04\x02\x02\\Y\x03" +
		"\x02\x02\x02\\[\x03\x02\x02\x02]`\x03\x02\x02\x02^\\\x03\x02\x02\x02^" +
		"_\x03\x02\x02\x02_a\x03\x02\x02\x02`^\x03\x02\x02\x02ab\x07$\x02\x02b" +
		"\x1A\x03\x02\x02\x02cg\x07}\x02\x02df\v\x02\x02\x02ed\x03\x02\x02\x02" +
		"fi\x03\x02\x02\x02gh\x03\x02\x02\x02ge\x03\x02\x02\x02hj\x03\x02\x02\x02" +
		"ig\x03\x02\x02\x02jk\x07\x7F\x02\x02kl\x03\x02\x02\x02lm\b\x0E\x02\x02" +
		"m\x1C\x03\x02\x02\x02np\t\x05\x02\x02on\x03\x02\x02\x02pq\x03\x02\x02" +
		"\x02qo\x03\x02\x02\x02qr\x03\x02\x02\x02rs\x03\x02\x02\x02st\b\x0F\x02" +
		"\x02t\x1E\x03\x02\x02\x02\r\x02:@EKPV\\^gq\x03\b\x02\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!pdnLexer.__ATN) {
			pdnLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(pdnLexer._serializedATN));
		}

		return pdnLexer.__ATN;
	}

}
