// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/rfc822/rfc822-emailaddress/emailaddress.g4 by ANTLR 4.7.3-SNAPSHOT


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


export class emailaddressLexer extends Lexer {
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
	public static readonly CHAR = 13;
	public static readonly ALPHA = 14;
	public static readonly DIGIT = 15;
	public static readonly CTL = 16;
	public static readonly CR = 17;
	public static readonly LF = 18;
	public static readonly SPACE = 19;
	public static readonly HTAB = 20;
	public static readonly CRLF = 21;
	public static readonly SPECIALS = 22;
	public static readonly QUOTE = 23;
	public static readonly QTEXT = 24;
	public static readonly DTEXT = 25;
	public static readonly CTEXT = 26;

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
		"T__9", "T__10", "T__11", "CHAR", "ALPHA", "DIGIT", "CTL", "CR", "LF", 
		"SPACE", "HTAB", "CRLF", "SPECIALS", "QUOTE", "QTEXT", "DTEXT", "CTEXT",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "':'", "';'", "'<'", "'>'", "'@'", "'.'", "'\\'", "'['", "']'", 
		"'''", "'('", "')'", undefined, undefined, undefined, undefined, "'\n'", 
		"'\r'", "' '", "'\t'", "'\rn'", undefined, "'\"'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, "CHAR", 
		"ALPHA", "DIGIT", "CTL", "CR", "LF", "SPACE", "HTAB", "CRLF", "SPECIALS", 
		"QUOTE", "QTEXT", "DTEXT", "CTEXT",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(emailaddressLexer._LITERAL_NAMES, emailaddressLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return emailaddressLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(emailaddressLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "emailaddress.g4"; }

	// @Override
	public get ruleNames(): string[] { return emailaddressLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return emailaddressLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return emailaddressLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return emailaddressLexer.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\x1Cl\b\x01\x04" +
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
		"\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r" +
		"\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12" +
		"\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17" +
		"\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x03\x02\x03\x02" +
		"\x03\x03\x03\x03\x03\x04\x03\x04\x03\x05\x03\x05\x03\x06\x03\x06\x03\x07" +
		"\x03\x07\x03\b\x03\b\x03\t\x03\t\x03\n\x03\n\x03\v\x03\v\x03\f\x03\f\x03" +
		"\r\x03\r\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x11\x03\x11" +
		"\x03\x12\x03\x12\x03\x13\x03\x13\x03\x14\x03\x14\x03\x15\x03\x15\x03\x16" +
		"\x03\x16\x03\x16\x03\x17\x03\x17\x03\x18\x03\x18\x03\x19\x03\x19\x03\x1A" +
		"\x03\x1A\x03\x1B\x03\x1B\x02\x02\x02\x1C\x03\x02\x03\x05\x02\x04\x07\x02" +
		"\x05\t\x02\x06\v\x02\x07\r\x02\b\x0F\x02\t\x11\x02\n\x13\x02\v\x15\x02" +
		"\f\x17\x02\r\x19\x02\x0E\x1B\x02\x0F\x1D\x02\x10\x1F\x02\x11!\x02\x12" +
		"#\x02\x13%\x02\x14\'\x02\x15)\x02\x16+\x02\x17-\x02\x18/\x02\x191\x02" +
		"\x1A3\x02\x1B5\x02\x1C\x03\x02\n\x03\x02\x02\u0129\x03\x02g\x92\x03\x02" +
		"JY\x03\x02\x023\t\x02)+..00<>@@BB]_\x04\x02\f\f\x0F\x0F\x04\x02\f\f]_" +
		"\x05\x02\f\f*+^^\x02k\x02\x03\x03\x02\x02\x02\x02\x05\x03\x02\x02\x02" +
		"\x02\x07\x03\x02\x02\x02\x02\t\x03\x02\x02\x02\x02\v\x03\x02\x02\x02\x02" +
		"\r\x03\x02\x02\x02\x02\x0F\x03\x02\x02\x02\x02\x11\x03\x02\x02\x02\x02" +
		"\x13\x03\x02\x02\x02\x02\x15\x03\x02\x02\x02\x02\x17\x03\x02\x02\x02\x02" +
		"\x19\x03\x02\x02\x02\x02\x1B\x03\x02\x02\x02\x02\x1D\x03\x02\x02\x02\x02" +
		"\x1F\x03\x02\x02\x02\x02!\x03\x02\x02\x02\x02#\x03\x02\x02\x02\x02%\x03" +
		"\x02\x02\x02\x02\'\x03\x02\x02\x02\x02)\x03\x02\x02\x02\x02+\x03\x02\x02" +
		"\x02\x02-\x03\x02\x02\x02\x02/\x03\x02\x02\x02\x021\x03\x02\x02\x02\x02" +
		"3\x03\x02\x02\x02\x025\x03\x02\x02\x02\x037\x03\x02\x02\x02\x059\x03\x02" +
		"\x02\x02\x07;\x03\x02\x02\x02\t=\x03\x02\x02\x02\v?\x03\x02\x02\x02\r" +
		"A\x03\x02\x02\x02\x0FC\x03\x02\x02\x02\x11E\x03\x02\x02\x02\x13G\x03\x02" +
		"\x02\x02\x15I\x03\x02\x02\x02\x17K\x03\x02\x02\x02\x19M\x03\x02\x02\x02" +
		"\x1BO\x03\x02\x02\x02\x1DQ\x03\x02\x02\x02\x1FS\x03\x02\x02\x02!U\x03" +
		"\x02\x02\x02#W\x03\x02\x02\x02%Y\x03\x02\x02\x02\'[\x03\x02\x02\x02)]" +
		"\x03\x02\x02\x02+_\x03\x02\x02\x02-b\x03\x02\x02\x02/d\x03\x02\x02\x02" +
		"1f\x03\x02\x02\x023h\x03\x02\x02\x025j\x03\x02\x02\x0278\x07<\x02\x02" +
		"8\x04\x03\x02\x02\x029:\x07=\x02\x02:\x06\x03\x02\x02\x02;<\x07>\x02\x02" +
		"<\b\x03\x02\x02\x02=>\x07@\x02\x02>\n\x03\x02\x02\x02?@\x07B\x02\x02@" +
		"\f\x03\x02\x02\x02AB\x070\x02\x02B\x0E\x03\x02\x02\x02CD\x07^\x02\x02" +
		"D\x10\x03\x02\x02\x02EF\x07]\x02\x02F\x12\x03\x02\x02\x02GH\x07_\x02\x02" +
		"H\x14\x03\x02\x02\x02IJ\x07)\x02\x02J\x16\x03\x02\x02\x02KL\x07*\x02\x02" +
		"L\x18\x03\x02\x02\x02MN\x07+\x02\x02N\x1A\x03\x02\x02\x02OP\t\x02\x02" +
		"\x02P\x1C\x03\x02\x02\x02QR\t\x03\x02\x02R\x1E\x03\x02\x02\x02ST\t\x04" +
		"\x02\x02T \x03\x02\x02\x02UV\t\x05\x02\x02V\"\x03\x02\x02\x02WX\x07\f" +
		"\x02\x02X$\x03\x02\x02\x02YZ\x07\x0F\x02\x02Z&\x03\x02\x02\x02[\\\x07" +
		"\"\x02\x02\\(\x03\x02\x02\x02]^\x07\v\x02\x02^*\x03\x02\x02\x02_`\x07" +
		"\x0F\x02\x02`a\x07\f\x02\x02a,\x03\x02\x02\x02bc\t\x06\x02\x02c.\x03\x02" +
		"\x02\x02de\x07$\x02\x02e0\x03\x02\x02\x02fg\n\x07\x02\x02g2\x03\x02\x02" +
		"\x02hi\n\b\x02\x02i4\x03\x02\x02\x02jk\n\t\x02\x02k6\x03\x02\x02\x02\x03" +
		"\x02\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!emailaddressLexer.__ATN) {
			emailaddressLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(emailaddressLexer._serializedATN));
		}

		return emailaddressLexer.__ATN;
	}

}

