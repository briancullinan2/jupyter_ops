// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/postalcode/postalcode.g4 by ANTLR 4.7.3-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { postalcodeListener } from "./postalcodeListener";

export class postalcodeParser extends Parser {
	public static readonly DIGIT = 1;
	public static readonly LETTER = 2;
	public static readonly WS = 3;
	public static readonly RULE_postalcode = 0;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"postalcode",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "DIGIT", "LETTER", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(postalcodeParser._LITERAL_NAMES, postalcodeParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return postalcodeParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "postalcode.g4"; }

	// @Override
	public get ruleNames(): string[] { return postalcodeParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return postalcodeParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(postalcodeParser._ATN, this);
	}
	// @RuleVersion(0)
	public postalcode(): PostalcodeContext {
		let _localctx: PostalcodeContext = new PostalcodeContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, postalcodeParser.RULE_postalcode);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2;
			this.match(postalcodeParser.LETTER);
			this.state = 3;
			this.match(postalcodeParser.DIGIT);
			this.state = 4;
			this.match(postalcodeParser.LETTER);
			this.state = 5;
			this.match(postalcodeParser.DIGIT);
			this.state = 6;
			this.match(postalcodeParser.LETTER);
			this.state = 7;
			this.match(postalcodeParser.DIGIT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x05\f\x04\x02" +
		"\t\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02" +
		"\x02\x02\x02\x03\x02\x02\x02\x02\x02\n\x02\x04\x03\x02\x02\x02\x04\x05" +
		"\x07\x04\x02\x02\x05\x06\x07\x03\x02\x02\x06\x07\x07\x04\x02\x02\x07\b" +
		"\x07\x03\x02\x02\b\t\x07\x04\x02\x02\t\n\x07\x03\x02\x02\n\x03\x03\x02" +
		"\x02\x02\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!postalcodeParser.__ATN) {
			postalcodeParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(postalcodeParser._serializedATN));
		}

		return postalcodeParser.__ATN;
	}

}

export class PostalcodeContext extends ParserRuleContext {
	public LETTER(): TerminalNode[];
	public LETTER(i: number): TerminalNode;
	public LETTER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(postalcodeParser.LETTER);
		} else {
			return this.getToken(postalcodeParser.LETTER, i);
		}
	}
	public DIGIT(): TerminalNode[];
	public DIGIT(i: number): TerminalNode;
	public DIGIT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(postalcodeParser.DIGIT);
		} else {
			return this.getToken(postalcodeParser.DIGIT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return postalcodeParser.RULE_postalcode; }
	// @Override
	public enterRule(listener: postalcodeListener): void {
		if (listener.enterPostalcode) {
			listener.enterPostalcode(this);
		}
	}
	// @Override
	public exitRule(listener: postalcodeListener): void {
		if (listener.exitPostalcode) {
			listener.exitPostalcode(this);
		}
	}
}


