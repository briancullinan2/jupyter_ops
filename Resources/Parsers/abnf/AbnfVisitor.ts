// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/abnf/Abnf.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { RulelistContext } from "./AbnfParser";
import { Rule_Context } from "./AbnfParser";
import { ElementsContext } from "./AbnfParser";
import { AlternationContext } from "./AbnfParser";
import { ConcatenationContext } from "./AbnfParser";
import { RepetitionContext } from "./AbnfParser";
import { RepeatContext } from "./AbnfParser";
import { ElementContext } from "./AbnfParser";
import { GroupContext } from "./AbnfParser";
import { OptionContext } from "./AbnfParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `AbnfParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface AbnfVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `AbnfParser.rulelist`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRulelist?: (ctx: RulelistContext) => Result;

	/**
	 * Visit a parse tree produced by `AbnfParser.rule_`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRule_?: (ctx: Rule_Context) => Result;

	/**
	 * Visit a parse tree produced by `AbnfParser.elements`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElements?: (ctx: ElementsContext) => Result;

	/**
	 * Visit a parse tree produced by `AbnfParser.alternation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlternation?: (ctx: AlternationContext) => Result;

	/**
	 * Visit a parse tree produced by `AbnfParser.concatenation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConcatenation?: (ctx: ConcatenationContext) => Result;

	/**
	 * Visit a parse tree produced by `AbnfParser.repetition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRepetition?: (ctx: RepetitionContext) => Result;

	/**
	 * Visit a parse tree produced by `AbnfParser.repeat`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRepeat?: (ctx: RepeatContext) => Result;

	/**
	 * Visit a parse tree produced by `AbnfParser.element`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElement?: (ctx: ElementContext) => Result;

	/**
	 * Visit a parse tree produced by `AbnfParser.group`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGroup?: (ctx: GroupContext) => Result;

	/**
	 * Visit a parse tree produced by `AbnfParser.option`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOption?: (ctx: OptionContext) => Result;
}

