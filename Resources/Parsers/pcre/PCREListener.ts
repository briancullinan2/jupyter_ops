// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/pcre/PCRE.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { ParseContext } from "./PCREParser";
import { AlternationContext } from "./PCREParser";
import { ExprContext } from "./PCREParser";
import { ElementContext } from "./PCREParser";
import { QuantifierContext } from "./PCREParser";
import { Quantifier_typeContext } from "./PCREParser";
import { Character_classContext } from "./PCREParser";
import { BackreferenceContext } from "./PCREParser";
import { Backreference_or_octalContext } from "./PCREParser";
import { CaptureContext } from "./PCREParser";
import { Non_captureContext } from "./PCREParser";
import { CommentContext } from "./PCREParser";
import { OptionContext } from "./PCREParser";
import { Option_flagsContext } from "./PCREParser";
import { Option_flagContext } from "./PCREParser";
import { Look_aroundContext } from "./PCREParser";
import { Subroutine_referenceContext } from "./PCREParser";
import { ConditionalContext } from "./PCREParser";
import { Backtrack_controlContext } from "./PCREParser";
import { Newline_conventionContext } from "./PCREParser";
import { CalloutContext } from "./PCREParser";
import { AtomContext } from "./PCREParser";
import { Cc_atomContext } from "./PCREParser";
import { Shared_atomContext } from "./PCREParser";
import { LiteralContext } from "./PCREParser";
import { Cc_literalContext } from "./PCREParser";
import { Shared_literalContext } from "./PCREParser";
import { NumberContext } from "./PCREParser";
import { Octal_charContext } from "./PCREParser";
import { Octal_digitContext } from "./PCREParser";
import { DigitsContext } from "./PCREParser";
import { DigitContext } from "./PCREParser";
import { NameContext } from "./PCREParser";
import { Alpha_numsContext } from "./PCREParser";
import { Non_close_parensContext } from "./PCREParser";
import { Non_close_parenContext } from "./PCREParser";
import { LetterContext } from "./PCREParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `PCREParser`.
 */
export interface PCREListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `PCREParser.parse`.
	 * @param ctx the parse tree
	 */
	enterParse?: (ctx: ParseContext) => void;
	/**
	 * Exit a parse tree produced by `PCREParser.parse`.
	 * @param ctx the parse tree
	 */
	exitParse?: (ctx: ParseContext) => void;

	/**
	 * Enter a parse tree produced by `PCREParser.alternation`.
	 * @param ctx the parse tree
	 */
	enterAlternation?: (ctx: AlternationContext) => void;
	/**
	 * Exit a parse tree produced by `PCREParser.alternation`.
	 * @param ctx the parse tree
	 */
	exitAlternation?: (ctx: AlternationContext) => void;

	/**
	 * Enter a parse tree produced by `PCREParser.expr`.
	 * @param ctx the parse tree
	 */
	enterExpr?: (ctx: ExprContext) => void;
	/**
	 * Exit a parse tree produced by `PCREParser.expr`.
	 * @param ctx the parse tree
	 */
	exitExpr?: (ctx: ExprContext) => void;

	/**
	 * Enter a parse tree produced by `PCREParser.element`.
	 * @param ctx the parse tree
	 */
	enterElement?: (ctx: ElementContext) => void;
	/**
	 * Exit a parse tree produced by `PCREParser.element`.
	 * @param ctx the parse tree
	 */
	exitElement?: (ctx: ElementContext) => void;

	/**
	 * Enter a parse tree produced by `PCREParser.quantifier`.
	 * @param ctx the parse tree
	 */
	enterQuantifier?: (ctx: QuantifierContext) => void;
	/**
	 * Exit a parse tree produced by `PCREParser.quantifier`.
	 * @param ctx the parse tree
	 */
	exitQuantifier?: (ctx: QuantifierContext) => void;

	/**
	 * Enter a parse tree produced by `PCREParser.quantifier_type`.
	 * @param ctx the parse tree
	 */
	enterQuantifier_type?: (ctx: Quantifier_typeContext) => void;
	/**
	 * Exit a parse tree produced by `PCREParser.quantifier_type`.
	 * @param ctx the parse tree
	 */
	exitQuantifier_type?: (ctx: Quantifier_typeContext) => void;

	/**
	 * Enter a parse tree produced by `PCREParser.character_class`.
	 * @param ctx the parse tree
	 */
	enterCharacter_class?: (ctx: Character_classContext) => void;
	/**
	 * Exit a parse tree produced by `PCREParser.character_class`.
	 * @param ctx the parse tree
	 */
	exitCharacter_class?: (ctx: Character_classContext) => void;

	/**
	 * Enter a parse tree produced by `PCREParser.backreference`.
	 * @param ctx the parse tree
	 */
	enterBackreference?: (ctx: BackreferenceContext) => void;
	/**
	 * Exit a parse tree produced by `PCREParser.backreference`.
	 * @param ctx the parse tree
	 */
	exitBackreference?: (ctx: BackreferenceContext) => void;

	/**
	 * Enter a parse tree produced by `PCREParser.backreference_or_octal`.
	 * @param ctx the parse tree
	 */
	enterBackreference_or_octal?: (ctx: Backreference_or_octalContext) => void;
	/**
	 * Exit a parse tree produced by `PCREParser.backreference_or_octal`.
	 * @param ctx the parse tree
	 */
	exitBackreference_or_octal?: (ctx: Backreference_or_octalContext) => void;

	/**
	 * Enter a parse tree produced by `PCREParser.capture`.
	 * @param ctx the parse tree
	 */
	enterCapture?: (ctx: CaptureContext) => void;
	/**
	 * Exit a parse tree produced by `PCREParser.capture`.
	 * @param ctx the parse tree
	 */
	exitCapture?: (ctx: CaptureContext) => void;

	/**
	 * Enter a parse tree produced by `PCREParser.non_capture`.
	 * @param ctx the parse tree
	 */
	enterNon_capture?: (ctx: Non_captureContext) => void;
	/**
	 * Exit a parse tree produced by `PCREParser.non_capture`.
	 * @param ctx the parse tree
	 */
	exitNon_capture?: (ctx: Non_captureContext) => void;

	/**
	 * Enter a parse tree produced by `PCREParser.comment`.
	 * @param ctx the parse tree
	 */
	enterComment?: (ctx: CommentContext) => void;
	/**
	 * Exit a parse tree produced by `PCREParser.comment`.
	 * @param ctx the parse tree
	 */
	exitComment?: (ctx: CommentContext) => void;

	/**
	 * Enter a parse tree produced by `PCREParser.option`.
	 * @param ctx the parse tree
	 */
	enterOption?: (ctx: OptionContext) => void;
	/**
	 * Exit a parse tree produced by `PCREParser.option`.
	 * @param ctx the parse tree
	 */
	exitOption?: (ctx: OptionContext) => void;

	/**
	 * Enter a parse tree produced by `PCREParser.option_flags`.
	 * @param ctx the parse tree
	 */
	enterOption_flags?: (ctx: Option_flagsContext) => void;
	/**
	 * Exit a parse tree produced by `PCREParser.option_flags`.
	 * @param ctx the parse tree
	 */
	exitOption_flags?: (ctx: Option_flagsContext) => void;

	/**
	 * Enter a parse tree produced by `PCREParser.option_flag`.
	 * @param ctx the parse tree
	 */
	enterOption_flag?: (ctx: Option_flagContext) => void;
	/**
	 * Exit a parse tree produced by `PCREParser.option_flag`.
	 * @param ctx the parse tree
	 */
	exitOption_flag?: (ctx: Option_flagContext) => void;

	/**
	 * Enter a parse tree produced by `PCREParser.look_around`.
	 * @param ctx the parse tree
	 */
	enterLook_around?: (ctx: Look_aroundContext) => void;
	/**
	 * Exit a parse tree produced by `PCREParser.look_around`.
	 * @param ctx the parse tree
	 */
	exitLook_around?: (ctx: Look_aroundContext) => void;

	/**
	 * Enter a parse tree produced by `PCREParser.subroutine_reference`.
	 * @param ctx the parse tree
	 */
	enterSubroutine_reference?: (ctx: Subroutine_referenceContext) => void;
	/**
	 * Exit a parse tree produced by `PCREParser.subroutine_reference`.
	 * @param ctx the parse tree
	 */
	exitSubroutine_reference?: (ctx: Subroutine_referenceContext) => void;

	/**
	 * Enter a parse tree produced by `PCREParser.conditional`.
	 * @param ctx the parse tree
	 */
	enterConditional?: (ctx: ConditionalContext) => void;
	/**
	 * Exit a parse tree produced by `PCREParser.conditional`.
	 * @param ctx the parse tree
	 */
	exitConditional?: (ctx: ConditionalContext) => void;

	/**
	 * Enter a parse tree produced by `PCREParser.backtrack_control`.
	 * @param ctx the parse tree
	 */
	enterBacktrack_control?: (ctx: Backtrack_controlContext) => void;
	/**
	 * Exit a parse tree produced by `PCREParser.backtrack_control`.
	 * @param ctx the parse tree
	 */
	exitBacktrack_control?: (ctx: Backtrack_controlContext) => void;

	/**
	 * Enter a parse tree produced by `PCREParser.newline_convention`.
	 * @param ctx the parse tree
	 */
	enterNewline_convention?: (ctx: Newline_conventionContext) => void;
	/**
	 * Exit a parse tree produced by `PCREParser.newline_convention`.
	 * @param ctx the parse tree
	 */
	exitNewline_convention?: (ctx: Newline_conventionContext) => void;

	/**
	 * Enter a parse tree produced by `PCREParser.callout`.
	 * @param ctx the parse tree
	 */
	enterCallout?: (ctx: CalloutContext) => void;
	/**
	 * Exit a parse tree produced by `PCREParser.callout`.
	 * @param ctx the parse tree
	 */
	exitCallout?: (ctx: CalloutContext) => void;

	/**
	 * Enter a parse tree produced by `PCREParser.atom`.
	 * @param ctx the parse tree
	 */
	enterAtom?: (ctx: AtomContext) => void;
	/**
	 * Exit a parse tree produced by `PCREParser.atom`.
	 * @param ctx the parse tree
	 */
	exitAtom?: (ctx: AtomContext) => void;

	/**
	 * Enter a parse tree produced by `PCREParser.cc_atom`.
	 * @param ctx the parse tree
	 */
	enterCc_atom?: (ctx: Cc_atomContext) => void;
	/**
	 * Exit a parse tree produced by `PCREParser.cc_atom`.
	 * @param ctx the parse tree
	 */
	exitCc_atom?: (ctx: Cc_atomContext) => void;

	/**
	 * Enter a parse tree produced by `PCREParser.shared_atom`.
	 * @param ctx the parse tree
	 */
	enterShared_atom?: (ctx: Shared_atomContext) => void;
	/**
	 * Exit a parse tree produced by `PCREParser.shared_atom`.
	 * @param ctx the parse tree
	 */
	exitShared_atom?: (ctx: Shared_atomContext) => void;

	/**
	 * Enter a parse tree produced by `PCREParser.literal`.
	 * @param ctx the parse tree
	 */
	enterLiteral?: (ctx: LiteralContext) => void;
	/**
	 * Exit a parse tree produced by `PCREParser.literal`.
	 * @param ctx the parse tree
	 */
	exitLiteral?: (ctx: LiteralContext) => void;

	/**
	 * Enter a parse tree produced by `PCREParser.cc_literal`.
	 * @param ctx the parse tree
	 */
	enterCc_literal?: (ctx: Cc_literalContext) => void;
	/**
	 * Exit a parse tree produced by `PCREParser.cc_literal`.
	 * @param ctx the parse tree
	 */
	exitCc_literal?: (ctx: Cc_literalContext) => void;

	/**
	 * Enter a parse tree produced by `PCREParser.shared_literal`.
	 * @param ctx the parse tree
	 */
	enterShared_literal?: (ctx: Shared_literalContext) => void;
	/**
	 * Exit a parse tree produced by `PCREParser.shared_literal`.
	 * @param ctx the parse tree
	 */
	exitShared_literal?: (ctx: Shared_literalContext) => void;

	/**
	 * Enter a parse tree produced by `PCREParser.number`.
	 * @param ctx the parse tree
	 */
	enterNumber?: (ctx: NumberContext) => void;
	/**
	 * Exit a parse tree produced by `PCREParser.number`.
	 * @param ctx the parse tree
	 */
	exitNumber?: (ctx: NumberContext) => void;

	/**
	 * Enter a parse tree produced by `PCREParser.octal_char`.
	 * @param ctx the parse tree
	 */
	enterOctal_char?: (ctx: Octal_charContext) => void;
	/**
	 * Exit a parse tree produced by `PCREParser.octal_char`.
	 * @param ctx the parse tree
	 */
	exitOctal_char?: (ctx: Octal_charContext) => void;

	/**
	 * Enter a parse tree produced by `PCREParser.octal_digit`.
	 * @param ctx the parse tree
	 */
	enterOctal_digit?: (ctx: Octal_digitContext) => void;
	/**
	 * Exit a parse tree produced by `PCREParser.octal_digit`.
	 * @param ctx the parse tree
	 */
	exitOctal_digit?: (ctx: Octal_digitContext) => void;

	/**
	 * Enter a parse tree produced by `PCREParser.digits`.
	 * @param ctx the parse tree
	 */
	enterDigits?: (ctx: DigitsContext) => void;
	/**
	 * Exit a parse tree produced by `PCREParser.digits`.
	 * @param ctx the parse tree
	 */
	exitDigits?: (ctx: DigitsContext) => void;

	/**
	 * Enter a parse tree produced by `PCREParser.digit`.
	 * @param ctx the parse tree
	 */
	enterDigit?: (ctx: DigitContext) => void;
	/**
	 * Exit a parse tree produced by `PCREParser.digit`.
	 * @param ctx the parse tree
	 */
	exitDigit?: (ctx: DigitContext) => void;

	/**
	 * Enter a parse tree produced by `PCREParser.name`.
	 * @param ctx the parse tree
	 */
	enterName?: (ctx: NameContext) => void;
	/**
	 * Exit a parse tree produced by `PCREParser.name`.
	 * @param ctx the parse tree
	 */
	exitName?: (ctx: NameContext) => void;

	/**
	 * Enter a parse tree produced by `PCREParser.alpha_nums`.
	 * @param ctx the parse tree
	 */
	enterAlpha_nums?: (ctx: Alpha_numsContext) => void;
	/**
	 * Exit a parse tree produced by `PCREParser.alpha_nums`.
	 * @param ctx the parse tree
	 */
	exitAlpha_nums?: (ctx: Alpha_numsContext) => void;

	/**
	 * Enter a parse tree produced by `PCREParser.non_close_parens`.
	 * @param ctx the parse tree
	 */
	enterNon_close_parens?: (ctx: Non_close_parensContext) => void;
	/**
	 * Exit a parse tree produced by `PCREParser.non_close_parens`.
	 * @param ctx the parse tree
	 */
	exitNon_close_parens?: (ctx: Non_close_parensContext) => void;

	/**
	 * Enter a parse tree produced by `PCREParser.non_close_paren`.
	 * @param ctx the parse tree
	 */
	enterNon_close_paren?: (ctx: Non_close_parenContext) => void;
	/**
	 * Exit a parse tree produced by `PCREParser.non_close_paren`.
	 * @param ctx the parse tree
	 */
	exitNon_close_paren?: (ctx: Non_close_parenContext) => void;

	/**
	 * Enter a parse tree produced by `PCREParser.letter`.
	 * @param ctx the parse tree
	 */
	enterLetter?: (ctx: LetterContext) => void;
	/**
	 * Exit a parse tree produced by `PCREParser.letter`.
	 * @param ctx the parse tree
	 */
	exitLetter?: (ctx: LetterContext) => void;
}

