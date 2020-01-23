// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/pgn/PGN.g4 by ANTLR 4.7.3-SNAPSHOT


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

import { PGNListener } from "./PGNListener";

export class PGNParser extends Parser {
	public static readonly WHITE_WINS = 1;
	public static readonly BLACK_WINS = 2;
	public static readonly DRAWN_GAME = 3;
	public static readonly REST_OF_LINE_COMMENT = 4;
	public static readonly BRACE_COMMENT = 5;
	public static readonly ESCAPE = 6;
	public static readonly SPACES = 7;
	public static readonly STRING = 8;
	public static readonly INTEGER = 9;
	public static readonly PERIOD = 10;
	public static readonly ASTERISK = 11;
	public static readonly LEFT_BRACKET = 12;
	public static readonly RIGHT_BRACKET = 13;
	public static readonly LEFT_PARENTHESIS = 14;
	public static readonly RIGHT_PARENTHESIS = 15;
	public static readonly LEFT_ANGLE_BRACKET = 16;
	public static readonly RIGHT_ANGLE_BRACKET = 17;
	public static readonly NUMERIC_ANNOTATION_GLYPH = 18;
	public static readonly SYMBOL = 19;
	public static readonly SUFFIX_ANNOTATION = 20;
	public static readonly UNEXPECTED_CHAR = 21;
	public static readonly RULE_parse = 0;
	public static readonly RULE_pgn_database = 1;
	public static readonly RULE_pgn_game = 2;
	public static readonly RULE_tag_section = 3;
	public static readonly RULE_tag_pair = 4;
	public static readonly RULE_tag_name = 5;
	public static readonly RULE_tag_value = 6;
	public static readonly RULE_movetext_section = 7;
	public static readonly RULE_element_sequence = 8;
	public static readonly RULE_element = 9;
	public static readonly RULE_move_number_indication = 10;
	public static readonly RULE_san_move = 11;
	public static readonly RULE_recursive_variation = 12;
	public static readonly RULE_game_termination = 13;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"parse", "pgn_database", "pgn_game", "tag_section", "tag_pair", "tag_name", 
		"tag_value", "movetext_section", "element_sequence", "element", "move_number_indication", 
		"san_move", "recursive_variation", "game_termination",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'1-0'", "'0-1'", "'1/2-1/2'", undefined, undefined, undefined, 
		undefined, undefined, undefined, "'.'", "'*'", "'['", "']'", "'('", "')'", 
		"'<'", "'>'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "WHITE_WINS", "BLACK_WINS", "DRAWN_GAME", "REST_OF_LINE_COMMENT", 
		"BRACE_COMMENT", "ESCAPE", "SPACES", "STRING", "INTEGER", "PERIOD", "ASTERISK", 
		"LEFT_BRACKET", "RIGHT_BRACKET", "LEFT_PARENTHESIS", "RIGHT_PARENTHESIS", 
		"LEFT_ANGLE_BRACKET", "RIGHT_ANGLE_BRACKET", "NUMERIC_ANNOTATION_GLYPH", 
		"SYMBOL", "SUFFIX_ANNOTATION", "UNEXPECTED_CHAR",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(PGNParser._LITERAL_NAMES, PGNParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return PGNParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "PGN.g4"; }

	// @Override
	public get ruleNames(): string[] { return PGNParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return PGNParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(PGNParser._ATN, this);
	}
	// @RuleVersion(0)
	public parse(): ParseContext {
		let _localctx: ParseContext = new ParseContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, PGNParser.RULE_parse);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 28;
			this.pgn_database();
			this.state = 29;
			this.match(PGNParser.EOF);
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
	// @RuleVersion(0)
	public pgn_database(): Pgn_databaseContext {
		let _localctx: Pgn_databaseContext = new Pgn_databaseContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, PGNParser.RULE_pgn_database);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 34;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << PGNParser.WHITE_WINS) | (1 << PGNParser.BLACK_WINS) | (1 << PGNParser.DRAWN_GAME) | (1 << PGNParser.INTEGER) | (1 << PGNParser.ASTERISK) | (1 << PGNParser.LEFT_BRACKET) | (1 << PGNParser.LEFT_PARENTHESIS) | (1 << PGNParser.RIGHT_PARENTHESIS) | (1 << PGNParser.NUMERIC_ANNOTATION_GLYPH) | (1 << PGNParser.SYMBOL))) !== 0)) {
				{
				{
				this.state = 31;
				this.pgn_game();
				}
				}
				this.state = 36;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
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
	// @RuleVersion(0)
	public pgn_game(): Pgn_gameContext {
		let _localctx: Pgn_gameContext = new Pgn_gameContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, PGNParser.RULE_pgn_game);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 37;
			this.tag_section();
			this.state = 38;
			this.movetext_section();
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
	// @RuleVersion(0)
	public tag_section(): Tag_sectionContext {
		let _localctx: Tag_sectionContext = new Tag_sectionContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, PGNParser.RULE_tag_section);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 43;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === PGNParser.LEFT_BRACKET) {
				{
				{
				this.state = 40;
				this.tag_pair();
				}
				}
				this.state = 45;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
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
	// @RuleVersion(0)
	public tag_pair(): Tag_pairContext {
		let _localctx: Tag_pairContext = new Tag_pairContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, PGNParser.RULE_tag_pair);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 46;
			this.match(PGNParser.LEFT_BRACKET);
			this.state = 47;
			this.tag_name();
			this.state = 48;
			this.tag_value();
			this.state = 49;
			this.match(PGNParser.RIGHT_BRACKET);
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
	// @RuleVersion(0)
	public tag_name(): Tag_nameContext {
		let _localctx: Tag_nameContext = new Tag_nameContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, PGNParser.RULE_tag_name);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 51;
			this.match(PGNParser.SYMBOL);
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
	// @RuleVersion(0)
	public tag_value(): Tag_valueContext {
		let _localctx: Tag_valueContext = new Tag_valueContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, PGNParser.RULE_tag_value);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 53;
			this.match(PGNParser.STRING);
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
	// @RuleVersion(0)
	public movetext_section(): Movetext_sectionContext {
		let _localctx: Movetext_sectionContext = new Movetext_sectionContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, PGNParser.RULE_movetext_section);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 55;
			this.element_sequence();
			this.state = 56;
			this.game_termination();
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
	// @RuleVersion(0)
	public element_sequence(): Element_sequenceContext {
		let _localctx: Element_sequenceContext = new Element_sequenceContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, PGNParser.RULE_element_sequence);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 62;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << PGNParser.INTEGER) | (1 << PGNParser.LEFT_PARENTHESIS) | (1 << PGNParser.NUMERIC_ANNOTATION_GLYPH) | (1 << PGNParser.SYMBOL))) !== 0)) {
				{
				this.state = 60;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case PGNParser.INTEGER:
				case PGNParser.NUMERIC_ANNOTATION_GLYPH:
				case PGNParser.SYMBOL:
					{
					this.state = 58;
					this.element();
					}
					break;
				case PGNParser.LEFT_PARENTHESIS:
					{
					this.state = 59;
					this.recursive_variation();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 64;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
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
	// @RuleVersion(0)
	public element(): ElementContext {
		let _localctx: ElementContext = new ElementContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, PGNParser.RULE_element);
		try {
			this.state = 68;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case PGNParser.INTEGER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 65;
				this.move_number_indication();
				}
				break;
			case PGNParser.SYMBOL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 66;
				this.san_move();
				}
				break;
			case PGNParser.NUMERIC_ANNOTATION_GLYPH:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 67;
				this.match(PGNParser.NUMERIC_ANNOTATION_GLYPH);
				}
				break;
			default:
				throw new NoViableAltException(this);
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
	// @RuleVersion(0)
	public move_number_indication(): Move_number_indicationContext {
		let _localctx: Move_number_indicationContext = new Move_number_indicationContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, PGNParser.RULE_move_number_indication);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 70;
			this.match(PGNParser.INTEGER);
			this.state = 72;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === PGNParser.PERIOD) {
				{
				this.state = 71;
				this.match(PGNParser.PERIOD);
				}
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
	// @RuleVersion(0)
	public san_move(): San_moveContext {
		let _localctx: San_moveContext = new San_moveContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, PGNParser.RULE_san_move);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 74;
			this.match(PGNParser.SYMBOL);
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
	// @RuleVersion(0)
	public recursive_variation(): Recursive_variationContext {
		let _localctx: Recursive_variationContext = new Recursive_variationContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, PGNParser.RULE_recursive_variation);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 76;
			this.match(PGNParser.LEFT_PARENTHESIS);
			this.state = 77;
			this.element_sequence();
			this.state = 78;
			this.match(PGNParser.RIGHT_PARENTHESIS);
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
	// @RuleVersion(0)
	public game_termination(): Game_terminationContext {
		let _localctx: Game_terminationContext = new Game_terminationContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, PGNParser.RULE_game_termination);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 80;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << PGNParser.WHITE_WINS) | (1 << PGNParser.BLACK_WINS) | (1 << PGNParser.DRAWN_GAME) | (1 << PGNParser.ASTERISK))) !== 0))) {
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x17U\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x03\x02\x03\x02\x03\x02\x03\x03\x07\x03#\n\x03" +
		"\f\x03\x0E\x03&\v\x03\x03\x04\x03\x04\x03\x04\x03\x05\x07\x05,\n\x05\f" +
		"\x05\x0E\x05/\v\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x07\x03" +
		"\x07\x03\b\x03\b\x03\t\x03\t\x03\t\x03\n\x03\n\x07\n?\n\n\f\n\x0E\nB\v" +
		"\n\x03\v\x03\v\x03\v\x05\vG\n\v\x03\f\x03\f\x05\fK\n\f\x03\r\x03\r\x03" +
		"\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x02\x02\x02\x10\x02" +
		"\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02" +
		"\x16\x02\x18\x02\x1A\x02\x1C\x02\x02\x03\x04\x02\x03\x05\r\r\x02M\x02" +
		"\x1E\x03\x02\x02\x02\x04$\x03\x02\x02\x02\x06\'\x03\x02\x02\x02\b-\x03" +
		"\x02\x02\x02\n0\x03\x02\x02\x02\f5\x03\x02\x02\x02\x0E7\x03\x02\x02\x02" +
		"\x109\x03\x02\x02\x02\x12@\x03\x02\x02\x02\x14F\x03\x02\x02\x02\x16H\x03" +
		"\x02\x02\x02\x18L\x03\x02\x02\x02\x1AN\x03\x02\x02\x02\x1CR\x03\x02\x02" +
		"\x02\x1E\x1F\x05\x04\x03\x02\x1F \x07\x02\x02\x03 \x03\x03\x02\x02\x02" +
		"!#\x05\x06\x04\x02\"!\x03\x02\x02\x02#&\x03\x02\x02\x02$\"\x03\x02\x02" +
		"\x02$%\x03\x02\x02\x02%\x05\x03\x02\x02\x02&$\x03\x02\x02\x02\'(\x05\b" +
		"\x05\x02()\x05\x10\t\x02)\x07\x03\x02\x02\x02*,\x05\n\x06\x02+*\x03\x02" +
		"\x02\x02,/\x03\x02\x02\x02-+\x03\x02\x02\x02-.\x03\x02\x02\x02.\t\x03" +
		"\x02\x02\x02/-\x03\x02\x02\x0201\x07\x0E\x02\x0212\x05\f\x07\x0223\x05" +
		"\x0E\b\x0234\x07\x0F\x02\x024\v\x03\x02\x02\x0256\x07\x15\x02\x026\r\x03" +
		"\x02\x02\x0278\x07\n\x02\x028\x0F\x03\x02\x02\x029:\x05\x12\n\x02:;\x05" +
		"\x1C\x0F\x02;\x11\x03\x02\x02\x02<?\x05\x14\v\x02=?\x05\x1A\x0E\x02><" +
		"\x03\x02\x02\x02>=\x03\x02\x02\x02?B\x03\x02\x02\x02@>\x03\x02\x02\x02" +
		"@A\x03\x02\x02\x02A\x13\x03\x02\x02\x02B@\x03\x02\x02\x02CG\x05\x16\f" +
		"\x02DG\x05\x18\r\x02EG\x07\x14\x02\x02FC\x03\x02\x02\x02FD\x03\x02\x02" +
		"\x02FE\x03\x02\x02\x02G\x15\x03\x02\x02\x02HJ\x07\v\x02\x02IK\x07\f\x02" +
		"\x02JI\x03\x02\x02\x02JK\x03\x02\x02\x02K\x17\x03\x02\x02\x02LM\x07\x15" +
		"\x02\x02M\x19\x03\x02\x02\x02NO\x07\x10\x02\x02OP\x05\x12\n\x02PQ\x07" +
		"\x11\x02\x02Q\x1B\x03\x02\x02\x02RS\t\x02\x02\x02S\x1D\x03\x02\x02\x02" +
		"\b$->@FJ";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!PGNParser.__ATN) {
			PGNParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(PGNParser._serializedATN));
		}

		return PGNParser.__ATN;
	}

}

export class ParseContext extends ParserRuleContext {
	public pgn_database(): Pgn_databaseContext {
		return this.getRuleContext(0, Pgn_databaseContext);
	}
	public EOF(): TerminalNode { return this.getToken(PGNParser.EOF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PGNParser.RULE_parse; }
	// @Override
	public enterRule(listener: PGNListener): void {
		if (listener.enterParse) {
			listener.enterParse(this);
		}
	}
	// @Override
	public exitRule(listener: PGNListener): void {
		if (listener.exitParse) {
			listener.exitParse(this);
		}
	}
}


export class Pgn_databaseContext extends ParserRuleContext {
	public pgn_game(): Pgn_gameContext[];
	public pgn_game(i: number): Pgn_gameContext;
	public pgn_game(i?: number): Pgn_gameContext | Pgn_gameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Pgn_gameContext);
		} else {
			return this.getRuleContext(i, Pgn_gameContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PGNParser.RULE_pgn_database; }
	// @Override
	public enterRule(listener: PGNListener): void {
		if (listener.enterPgn_database) {
			listener.enterPgn_database(this);
		}
	}
	// @Override
	public exitRule(listener: PGNListener): void {
		if (listener.exitPgn_database) {
			listener.exitPgn_database(this);
		}
	}
}


export class Pgn_gameContext extends ParserRuleContext {
	public tag_section(): Tag_sectionContext {
		return this.getRuleContext(0, Tag_sectionContext);
	}
	public movetext_section(): Movetext_sectionContext {
		return this.getRuleContext(0, Movetext_sectionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PGNParser.RULE_pgn_game; }
	// @Override
	public enterRule(listener: PGNListener): void {
		if (listener.enterPgn_game) {
			listener.enterPgn_game(this);
		}
	}
	// @Override
	public exitRule(listener: PGNListener): void {
		if (listener.exitPgn_game) {
			listener.exitPgn_game(this);
		}
	}
}


export class Tag_sectionContext extends ParserRuleContext {
	public tag_pair(): Tag_pairContext[];
	public tag_pair(i: number): Tag_pairContext;
	public tag_pair(i?: number): Tag_pairContext | Tag_pairContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Tag_pairContext);
		} else {
			return this.getRuleContext(i, Tag_pairContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PGNParser.RULE_tag_section; }
	// @Override
	public enterRule(listener: PGNListener): void {
		if (listener.enterTag_section) {
			listener.enterTag_section(this);
		}
	}
	// @Override
	public exitRule(listener: PGNListener): void {
		if (listener.exitTag_section) {
			listener.exitTag_section(this);
		}
	}
}


export class Tag_pairContext extends ParserRuleContext {
	public LEFT_BRACKET(): TerminalNode { return this.getToken(PGNParser.LEFT_BRACKET, 0); }
	public tag_name(): Tag_nameContext {
		return this.getRuleContext(0, Tag_nameContext);
	}
	public tag_value(): Tag_valueContext {
		return this.getRuleContext(0, Tag_valueContext);
	}
	public RIGHT_BRACKET(): TerminalNode { return this.getToken(PGNParser.RIGHT_BRACKET, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PGNParser.RULE_tag_pair; }
	// @Override
	public enterRule(listener: PGNListener): void {
		if (listener.enterTag_pair) {
			listener.enterTag_pair(this);
		}
	}
	// @Override
	public exitRule(listener: PGNListener): void {
		if (listener.exitTag_pair) {
			listener.exitTag_pair(this);
		}
	}
}


export class Tag_nameContext extends ParserRuleContext {
	public SYMBOL(): TerminalNode { return this.getToken(PGNParser.SYMBOL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PGNParser.RULE_tag_name; }
	// @Override
	public enterRule(listener: PGNListener): void {
		if (listener.enterTag_name) {
			listener.enterTag_name(this);
		}
	}
	// @Override
	public exitRule(listener: PGNListener): void {
		if (listener.exitTag_name) {
			listener.exitTag_name(this);
		}
	}
}


export class Tag_valueContext extends ParserRuleContext {
	public STRING(): TerminalNode { return this.getToken(PGNParser.STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PGNParser.RULE_tag_value; }
	// @Override
	public enterRule(listener: PGNListener): void {
		if (listener.enterTag_value) {
			listener.enterTag_value(this);
		}
	}
	// @Override
	public exitRule(listener: PGNListener): void {
		if (listener.exitTag_value) {
			listener.exitTag_value(this);
		}
	}
}


export class Movetext_sectionContext extends ParserRuleContext {
	public element_sequence(): Element_sequenceContext {
		return this.getRuleContext(0, Element_sequenceContext);
	}
	public game_termination(): Game_terminationContext {
		return this.getRuleContext(0, Game_terminationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PGNParser.RULE_movetext_section; }
	// @Override
	public enterRule(listener: PGNListener): void {
		if (listener.enterMovetext_section) {
			listener.enterMovetext_section(this);
		}
	}
	// @Override
	public exitRule(listener: PGNListener): void {
		if (listener.exitMovetext_section) {
			listener.exitMovetext_section(this);
		}
	}
}


export class Element_sequenceContext extends ParserRuleContext {
	public element(): ElementContext[];
	public element(i: number): ElementContext;
	public element(i?: number): ElementContext | ElementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ElementContext);
		} else {
			return this.getRuleContext(i, ElementContext);
		}
	}
	public recursive_variation(): Recursive_variationContext[];
	public recursive_variation(i: number): Recursive_variationContext;
	public recursive_variation(i?: number): Recursive_variationContext | Recursive_variationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Recursive_variationContext);
		} else {
			return this.getRuleContext(i, Recursive_variationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PGNParser.RULE_element_sequence; }
	// @Override
	public enterRule(listener: PGNListener): void {
		if (listener.enterElement_sequence) {
			listener.enterElement_sequence(this);
		}
	}
	// @Override
	public exitRule(listener: PGNListener): void {
		if (listener.exitElement_sequence) {
			listener.exitElement_sequence(this);
		}
	}
}


export class ElementContext extends ParserRuleContext {
	public move_number_indication(): Move_number_indicationContext | undefined {
		return this.tryGetRuleContext(0, Move_number_indicationContext);
	}
	public san_move(): San_moveContext | undefined {
		return this.tryGetRuleContext(0, San_moveContext);
	}
	public NUMERIC_ANNOTATION_GLYPH(): TerminalNode | undefined { return this.tryGetToken(PGNParser.NUMERIC_ANNOTATION_GLYPH, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PGNParser.RULE_element; }
	// @Override
	public enterRule(listener: PGNListener): void {
		if (listener.enterElement) {
			listener.enterElement(this);
		}
	}
	// @Override
	public exitRule(listener: PGNListener): void {
		if (listener.exitElement) {
			listener.exitElement(this);
		}
	}
}


export class Move_number_indicationContext extends ParserRuleContext {
	public INTEGER(): TerminalNode { return this.getToken(PGNParser.INTEGER, 0); }
	public PERIOD(): TerminalNode | undefined { return this.tryGetToken(PGNParser.PERIOD, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PGNParser.RULE_move_number_indication; }
	// @Override
	public enterRule(listener: PGNListener): void {
		if (listener.enterMove_number_indication) {
			listener.enterMove_number_indication(this);
		}
	}
	// @Override
	public exitRule(listener: PGNListener): void {
		if (listener.exitMove_number_indication) {
			listener.exitMove_number_indication(this);
		}
	}
}


export class San_moveContext extends ParserRuleContext {
	public SYMBOL(): TerminalNode { return this.getToken(PGNParser.SYMBOL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PGNParser.RULE_san_move; }
	// @Override
	public enterRule(listener: PGNListener): void {
		if (listener.enterSan_move) {
			listener.enterSan_move(this);
		}
	}
	// @Override
	public exitRule(listener: PGNListener): void {
		if (listener.exitSan_move) {
			listener.exitSan_move(this);
		}
	}
}


export class Recursive_variationContext extends ParserRuleContext {
	public LEFT_PARENTHESIS(): TerminalNode { return this.getToken(PGNParser.LEFT_PARENTHESIS, 0); }
	public element_sequence(): Element_sequenceContext {
		return this.getRuleContext(0, Element_sequenceContext);
	}
	public RIGHT_PARENTHESIS(): TerminalNode { return this.getToken(PGNParser.RIGHT_PARENTHESIS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PGNParser.RULE_recursive_variation; }
	// @Override
	public enterRule(listener: PGNListener): void {
		if (listener.enterRecursive_variation) {
			listener.enterRecursive_variation(this);
		}
	}
	// @Override
	public exitRule(listener: PGNListener): void {
		if (listener.exitRecursive_variation) {
			listener.exitRecursive_variation(this);
		}
	}
}


export class Game_terminationContext extends ParserRuleContext {
	public WHITE_WINS(): TerminalNode | undefined { return this.tryGetToken(PGNParser.WHITE_WINS, 0); }
	public BLACK_WINS(): TerminalNode | undefined { return this.tryGetToken(PGNParser.BLACK_WINS, 0); }
	public DRAWN_GAME(): TerminalNode | undefined { return this.tryGetToken(PGNParser.DRAWN_GAME, 0); }
	public ASTERISK(): TerminalNode | undefined { return this.tryGetToken(PGNParser.ASTERISK, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PGNParser.RULE_game_termination; }
	// @Override
	public enterRule(listener: PGNListener): void {
		if (listener.enterGame_termination) {
			listener.enterGame_termination(this);
		}
	}
	// @Override
	public exitRule(listener: PGNListener): void {
		if (listener.exitGame_termination) {
			listener.exitGame_termination(this);
		}
	}
}


