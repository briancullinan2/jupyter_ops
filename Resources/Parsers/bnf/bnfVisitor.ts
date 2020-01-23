// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/bnf/bnf.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { RulelistContext } from "./bnfParser";
import { Rule_Context } from "./bnfParser";
import { LhsContext } from "./bnfParser";
import { RhsContext } from "./bnfParser";
import { AlternativesContext } from "./bnfParser";
import { AlternativeContext } from "./bnfParser";
import { ElementContext } from "./bnfParser";
import { OptionalContext } from "./bnfParser";
import { ZeroormoreContext } from "./bnfParser";
import { OneormoreContext } from "./bnfParser";
import { TextContext } from "./bnfParser";
import { IdContext } from "./bnfParser";
import { RuleidContext } from "./bnfParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `bnfParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface bnfVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `bnfParser.rulelist`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRulelist?: (ctx: RulelistContext) => Result;

	/**
	 * Visit a parse tree produced by `bnfParser.rule_`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRule_?: (ctx: Rule_Context) => Result;

	/**
	 * Visit a parse tree produced by `bnfParser.lhs`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLhs?: (ctx: LhsContext) => Result;

	/**
	 * Visit a parse tree produced by `bnfParser.rhs`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRhs?: (ctx: RhsContext) => Result;

	/**
	 * Visit a parse tree produced by `bnfParser.alternatives`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlternatives?: (ctx: AlternativesContext) => Result;

	/**
	 * Visit a parse tree produced by `bnfParser.alternative`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlternative?: (ctx: AlternativeContext) => Result;

	/**
	 * Visit a parse tree produced by `bnfParser.element`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElement?: (ctx: ElementContext) => Result;

	/**
	 * Visit a parse tree produced by `bnfParser.optional`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOptional?: (ctx: OptionalContext) => Result;

	/**
	 * Visit a parse tree produced by `bnfParser.zeroormore`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZeroormore?: (ctx: ZeroormoreContext) => Result;

	/**
	 * Visit a parse tree produced by `bnfParser.oneormore`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOneormore?: (ctx: OneormoreContext) => Result;

	/**
	 * Visit a parse tree produced by `bnfParser.text`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitText?: (ctx: TextContext) => Result;

	/**
	 * Visit a parse tree produced by `bnfParser.id`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitId?: (ctx: IdContext) => Result;

	/**
	 * Visit a parse tree produced by `bnfParser.ruleid`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRuleid?: (ctx: RuleidContext) => Result;
}

