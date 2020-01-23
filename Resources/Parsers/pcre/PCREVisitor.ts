// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/pcre/PCRE.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `PCREParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface PCREVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `PCREParser.parse`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParse?: (ctx: ParseContext) => Result;

	/**
	 * Visit a parse tree produced by `PCREParser.alternation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlternation?: (ctx: AlternationContext) => Result;

	/**
	 * Visit a parse tree produced by `PCREParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpr?: (ctx: ExprContext) => Result;

	/**
	 * Visit a parse tree produced by `PCREParser.element`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElement?: (ctx: ElementContext) => Result;

	/**
	 * Visit a parse tree produced by `PCREParser.quantifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQuantifier?: (ctx: QuantifierContext) => Result;

	/**
	 * Visit a parse tree produced by `PCREParser.quantifier_type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQuantifier_type?: (ctx: Quantifier_typeContext) => Result;

	/**
	 * Visit a parse tree produced by `PCREParser.character_class`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCharacter_class?: (ctx: Character_classContext) => Result;

	/**
	 * Visit a parse tree produced by `PCREParser.backreference`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBackreference?: (ctx: BackreferenceContext) => Result;

	/**
	 * Visit a parse tree produced by `PCREParser.backreference_or_octal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBackreference_or_octal?: (ctx: Backreference_or_octalContext) => Result;

	/**
	 * Visit a parse tree produced by `PCREParser.capture`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCapture?: (ctx: CaptureContext) => Result;

	/**
	 * Visit a parse tree produced by `PCREParser.non_capture`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNon_capture?: (ctx: Non_captureContext) => Result;

	/**
	 * Visit a parse tree produced by `PCREParser.comment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComment?: (ctx: CommentContext) => Result;

	/**
	 * Visit a parse tree produced by `PCREParser.option`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOption?: (ctx: OptionContext) => Result;

	/**
	 * Visit a parse tree produced by `PCREParser.option_flags`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOption_flags?: (ctx: Option_flagsContext) => Result;

	/**
	 * Visit a parse tree produced by `PCREParser.option_flag`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOption_flag?: (ctx: Option_flagContext) => Result;

	/**
	 * Visit a parse tree produced by `PCREParser.look_around`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLook_around?: (ctx: Look_aroundContext) => Result;

	/**
	 * Visit a parse tree produced by `PCREParser.subroutine_reference`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubroutine_reference?: (ctx: Subroutine_referenceContext) => Result;

	/**
	 * Visit a parse tree produced by `PCREParser.conditional`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConditional?: (ctx: ConditionalContext) => Result;

	/**
	 * Visit a parse tree produced by `PCREParser.backtrack_control`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBacktrack_control?: (ctx: Backtrack_controlContext) => Result;

	/**
	 * Visit a parse tree produced by `PCREParser.newline_convention`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNewline_convention?: (ctx: Newline_conventionContext) => Result;

	/**
	 * Visit a parse tree produced by `PCREParser.callout`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCallout?: (ctx: CalloutContext) => Result;

	/**
	 * Visit a parse tree produced by `PCREParser.atom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAtom?: (ctx: AtomContext) => Result;

	/**
	 * Visit a parse tree produced by `PCREParser.cc_atom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCc_atom?: (ctx: Cc_atomContext) => Result;

	/**
	 * Visit a parse tree produced by `PCREParser.shared_atom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShared_atom?: (ctx: Shared_atomContext) => Result;

	/**
	 * Visit a parse tree produced by `PCREParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiteral?: (ctx: LiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `PCREParser.cc_literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCc_literal?: (ctx: Cc_literalContext) => Result;

	/**
	 * Visit a parse tree produced by `PCREParser.shared_literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShared_literal?: (ctx: Shared_literalContext) => Result;

	/**
	 * Visit a parse tree produced by `PCREParser.number`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumber?: (ctx: NumberContext) => Result;

	/**
	 * Visit a parse tree produced by `PCREParser.octal_char`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOctal_char?: (ctx: Octal_charContext) => Result;

	/**
	 * Visit a parse tree produced by `PCREParser.octal_digit`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOctal_digit?: (ctx: Octal_digitContext) => Result;

	/**
	 * Visit a parse tree produced by `PCREParser.digits`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDigits?: (ctx: DigitsContext) => Result;

	/**
	 * Visit a parse tree produced by `PCREParser.digit`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDigit?: (ctx: DigitContext) => Result;

	/**
	 * Visit a parse tree produced by `PCREParser.name`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitName?: (ctx: NameContext) => Result;

	/**
	 * Visit a parse tree produced by `PCREParser.alpha_nums`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlpha_nums?: (ctx: Alpha_numsContext) => Result;

	/**
	 * Visit a parse tree produced by `PCREParser.non_close_parens`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNon_close_parens?: (ctx: Non_close_parensContext) => Result;

	/**
	 * Visit a parse tree produced by `PCREParser.non_close_paren`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNon_close_paren?: (ctx: Non_close_parenContext) => Result;

	/**
	 * Visit a parse tree produced by `PCREParser.letter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLetter?: (ctx: LetterContext) => Result;
}

