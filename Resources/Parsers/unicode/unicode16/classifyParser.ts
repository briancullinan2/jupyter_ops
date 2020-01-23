// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/unicode/unicode16/classify.g4 by ANTLR 4.7.3-SNAPSHOT


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

import { classifyListener } from "./classifyListener";
import { classifyVisitor } from "./classifyVisitor";


export class classifyParser extends Parser {
	public static readonly CLASSIFY___ = 1;
	public static readonly CLASSIFY_Cc = 2;
	public static readonly CLASSIFY_Cf = 3;
	public static readonly CLASSIFY_Cn = 4;
	public static readonly CLASSIFY_Co = 5;
	public static readonly CLASSIFY_Cs = 6;
	public static readonly CLASSIFY_Ll = 7;
	public static readonly CLASSIFY_Lm = 8;
	public static readonly CLASSIFY_Lo = 9;
	public static readonly CLASSIFY_Lt = 10;
	public static readonly CLASSIFY_Lu = 11;
	public static readonly CLASSIFY_Mc = 12;
	public static readonly CLASSIFY_Me = 13;
	public static readonly CLASSIFY_Mn = 14;
	public static readonly CLASSIFY_Nd = 15;
	public static readonly CLASSIFY_Nl = 16;
	public static readonly CLASSIFY_No = 17;
	public static readonly CLASSIFY_Pc = 18;
	public static readonly CLASSIFY_Pd = 19;
	public static readonly CLASSIFY_Pe = 20;
	public static readonly CLASSIFY_Pf = 21;
	public static readonly CLASSIFY_Pi = 22;
	public static readonly CLASSIFY_Po = 23;
	public static readonly CLASSIFY_Ps = 24;
	public static readonly CLASSIFY_Sc = 25;
	public static readonly CLASSIFY_Sk = 26;
	public static readonly CLASSIFY_Sm = 27;
	public static readonly CLASSIFY_So = 28;
	public static readonly CLASSIFY_Zl = 29;
	public static readonly CLASSIFY_Zp = 30;
	public static readonly CLASSIFY_Zs = 31;
	public static readonly CLASSIFY_C = 32;
	public static readonly CLASSIFY_LC = 33;
	public static readonly CLASSIFY_M = 34;
	public static readonly CLASSIFY_L = 35;
	public static readonly CLASSIFY_N = 36;
	public static readonly CLASSIFY_P = 37;
	public static readonly CLASSIFY_S = 38;
	public static readonly CLASSIFY_Z = 39;
	public static readonly CLASSIFY_WS = 40;
	public static readonly CLASSIFY_ID0 = 41;
	public static readonly CLASSIFY_ID1 = 42;
	public static readonly ID = 43;
	public static readonly RULE_codepoint = 0;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"codepoint",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, "'\u2028'", "'\u2029'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "CLASSIFY___", "CLASSIFY_Cc", "CLASSIFY_Cf", "CLASSIFY_Cn", 
		"CLASSIFY_Co", "CLASSIFY_Cs", "CLASSIFY_Ll", "CLASSIFY_Lm", "CLASSIFY_Lo", 
		"CLASSIFY_Lt", "CLASSIFY_Lu", "CLASSIFY_Mc", "CLASSIFY_Me", "CLASSIFY_Mn", 
		"CLASSIFY_Nd", "CLASSIFY_Nl", "CLASSIFY_No", "CLASSIFY_Pc", "CLASSIFY_Pd", 
		"CLASSIFY_Pe", "CLASSIFY_Pf", "CLASSIFY_Pi", "CLASSIFY_Po", "CLASSIFY_Ps", 
		"CLASSIFY_Sc", "CLASSIFY_Sk", "CLASSIFY_Sm", "CLASSIFY_So", "CLASSIFY_Zl", 
		"CLASSIFY_Zp", "CLASSIFY_Zs", "CLASSIFY_C", "CLASSIFY_LC", "CLASSIFY_M", 
		"CLASSIFY_L", "CLASSIFY_N", "CLASSIFY_P", "CLASSIFY_S", "CLASSIFY_Z", 
		"CLASSIFY_WS", "CLASSIFY_ID0", "CLASSIFY_ID1", "ID",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(classifyParser._LITERAL_NAMES, classifyParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return classifyParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "classify.g4"; }

	// @Override
	public get ruleNames(): string[] { return classifyParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return classifyParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(classifyParser._ATN, this);
	}
	// @RuleVersion(0)
	public codepoint(): CodepointContext {
		let _localctx: CodepointContext = new CodepointContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, classifyParser.RULE_codepoint);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << classifyParser.CLASSIFY___) | (1 << classifyParser.CLASSIFY_Cc) | (1 << classifyParser.CLASSIFY_Cf) | (1 << classifyParser.CLASSIFY_Cn) | (1 << classifyParser.CLASSIFY_Co) | (1 << classifyParser.CLASSIFY_Cs) | (1 << classifyParser.CLASSIFY_Ll) | (1 << classifyParser.CLASSIFY_Lm) | (1 << classifyParser.CLASSIFY_Lo) | (1 << classifyParser.CLASSIFY_Lt) | (1 << classifyParser.CLASSIFY_Lu) | (1 << classifyParser.CLASSIFY_Mc) | (1 << classifyParser.CLASSIFY_Me) | (1 << classifyParser.CLASSIFY_Mn) | (1 << classifyParser.CLASSIFY_Nd) | (1 << classifyParser.CLASSIFY_Nl) | (1 << classifyParser.CLASSIFY_No) | (1 << classifyParser.CLASSIFY_Pc) | (1 << classifyParser.CLASSIFY_Pd) | (1 << classifyParser.CLASSIFY_Pe) | (1 << classifyParser.CLASSIFY_Pf) | (1 << classifyParser.CLASSIFY_Pi) | (1 << classifyParser.CLASSIFY_Po) | (1 << classifyParser.CLASSIFY_Ps) | (1 << classifyParser.CLASSIFY_Sc) | (1 << classifyParser.CLASSIFY_Sk) | (1 << classifyParser.CLASSIFY_Sm) | (1 << classifyParser.CLASSIFY_So) | (1 << classifyParser.CLASSIFY_Zl) | (1 << classifyParser.CLASSIFY_Zp) | (1 << classifyParser.CLASSIFY_Zs))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03-\x07\x04\x02" +
		"\t\x02\x03\x02\x03\x02\x03\x02\x02\x02\x02\x03\x02\x02\x02\x03\x03\x02" +
		"\x03!\x02\x05\x02\x04\x03\x02\x02\x02\x04\x05\t\x02\x02\x02\x05\x03\x03" +
		"\x02\x02\x02\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!classifyParser.__ATN) {
			classifyParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(classifyParser._serializedATN));
		}

		return classifyParser.__ATN;
	}

}

export class CodepointContext extends ParserRuleContext {
	public CLASSIFY___(): TerminalNode | undefined { return this.tryGetToken(classifyParser.CLASSIFY___, 0); }
	public CLASSIFY_Cc(): TerminalNode | undefined { return this.tryGetToken(classifyParser.CLASSIFY_Cc, 0); }
	public CLASSIFY_Cf(): TerminalNode | undefined { return this.tryGetToken(classifyParser.CLASSIFY_Cf, 0); }
	public CLASSIFY_Cn(): TerminalNode | undefined { return this.tryGetToken(classifyParser.CLASSIFY_Cn, 0); }
	public CLASSIFY_Co(): TerminalNode | undefined { return this.tryGetToken(classifyParser.CLASSIFY_Co, 0); }
	public CLASSIFY_Cs(): TerminalNode | undefined { return this.tryGetToken(classifyParser.CLASSIFY_Cs, 0); }
	public CLASSIFY_Ll(): TerminalNode | undefined { return this.tryGetToken(classifyParser.CLASSIFY_Ll, 0); }
	public CLASSIFY_Lm(): TerminalNode | undefined { return this.tryGetToken(classifyParser.CLASSIFY_Lm, 0); }
	public CLASSIFY_Lo(): TerminalNode | undefined { return this.tryGetToken(classifyParser.CLASSIFY_Lo, 0); }
	public CLASSIFY_Lt(): TerminalNode | undefined { return this.tryGetToken(classifyParser.CLASSIFY_Lt, 0); }
	public CLASSIFY_Lu(): TerminalNode | undefined { return this.tryGetToken(classifyParser.CLASSIFY_Lu, 0); }
	public CLASSIFY_Mc(): TerminalNode | undefined { return this.tryGetToken(classifyParser.CLASSIFY_Mc, 0); }
	public CLASSIFY_Me(): TerminalNode | undefined { return this.tryGetToken(classifyParser.CLASSIFY_Me, 0); }
	public CLASSIFY_Mn(): TerminalNode | undefined { return this.tryGetToken(classifyParser.CLASSIFY_Mn, 0); }
	public CLASSIFY_Nd(): TerminalNode | undefined { return this.tryGetToken(classifyParser.CLASSIFY_Nd, 0); }
	public CLASSIFY_Nl(): TerminalNode | undefined { return this.tryGetToken(classifyParser.CLASSIFY_Nl, 0); }
	public CLASSIFY_No(): TerminalNode | undefined { return this.tryGetToken(classifyParser.CLASSIFY_No, 0); }
	public CLASSIFY_Pc(): TerminalNode | undefined { return this.tryGetToken(classifyParser.CLASSIFY_Pc, 0); }
	public CLASSIFY_Pd(): TerminalNode | undefined { return this.tryGetToken(classifyParser.CLASSIFY_Pd, 0); }
	public CLASSIFY_Pe(): TerminalNode | undefined { return this.tryGetToken(classifyParser.CLASSIFY_Pe, 0); }
	public CLASSIFY_Pf(): TerminalNode | undefined { return this.tryGetToken(classifyParser.CLASSIFY_Pf, 0); }
	public CLASSIFY_Pi(): TerminalNode | undefined { return this.tryGetToken(classifyParser.CLASSIFY_Pi, 0); }
	public CLASSIFY_Po(): TerminalNode | undefined { return this.tryGetToken(classifyParser.CLASSIFY_Po, 0); }
	public CLASSIFY_Ps(): TerminalNode | undefined { return this.tryGetToken(classifyParser.CLASSIFY_Ps, 0); }
	public CLASSIFY_Sc(): TerminalNode | undefined { return this.tryGetToken(classifyParser.CLASSIFY_Sc, 0); }
	public CLASSIFY_Sk(): TerminalNode | undefined { return this.tryGetToken(classifyParser.CLASSIFY_Sk, 0); }
	public CLASSIFY_Sm(): TerminalNode | undefined { return this.tryGetToken(classifyParser.CLASSIFY_Sm, 0); }
	public CLASSIFY_So(): TerminalNode | undefined { return this.tryGetToken(classifyParser.CLASSIFY_So, 0); }
	public CLASSIFY_Zl(): TerminalNode | undefined { return this.tryGetToken(classifyParser.CLASSIFY_Zl, 0); }
	public CLASSIFY_Zp(): TerminalNode | undefined { return this.tryGetToken(classifyParser.CLASSIFY_Zp, 0); }
	public CLASSIFY_Zs(): TerminalNode | undefined { return this.tryGetToken(classifyParser.CLASSIFY_Zs, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return classifyParser.RULE_codepoint; }
	// @Override
	public enterRule(listener: classifyListener): void {
		if (listener.enterCodepoint) {
			listener.enterCodepoint(this);
		}
	}
	// @Override
	public exitRule(listener: classifyListener): void {
		if (listener.exitCodepoint) {
			listener.exitCodepoint(this);
		}
	}
	// @Override
	public accept<Result>(visitor: classifyVisitor<Result>): Result {
		if (visitor.visitCodepoint) {
			return visitor.visitCodepoint(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


