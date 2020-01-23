// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/prolog/prolog.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { VariableContext } from "./prologParser";
import { Braced_termContext } from "./prologParser";
import { Integer_termContext } from "./prologParser";
import { FloatContext } from "./prologParser";
import { Compound_termContext } from "./prologParser";
import { Binary_operatorContext } from "./prologParser";
import { Unary_operatorContext } from "./prologParser";
import { List_termContext } from "./prologParser";
import { Curly_bracketed_termContext } from "./prologParser";
import { Atom_termContext } from "./prologParser";
import { Empty_listContext } from "./prologParser";
import { Empty_bracesContext } from "./prologParser";
import { NameContext } from "./prologParser";
import { GraphicContext } from "./prologParser";
import { Quoted_stringContext } from "./prologParser";
import { Dq_stringContext } from "./prologParser";
import { Backq_stringContext } from "./prologParser";
import { SemicolonContext } from "./prologParser";
import { CutContext } from "./prologParser";
import { P_textContext } from "./prologParser";
import { DirectiveContext } from "./prologParser";
import { ClauseContext } from "./prologParser";
import { TermlistContext } from "./prologParser";
import { TermContext } from "./prologParser";
import { OperatorContext } from "./prologParser";
import { AtomContext } from "./prologParser";
import { IntegerContext } from "./prologParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `prologParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface prologVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by the `variable`
	 * labeled alternative in `prologParser.term`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariable?: (ctx: VariableContext) => Result;

	/**
	 * Visit a parse tree produced by the `braced_term`
	 * labeled alternative in `prologParser.term`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBraced_term?: (ctx: Braced_termContext) => Result;

	/**
	 * Visit a parse tree produced by the `integer_term`
	 * labeled alternative in `prologParser.term`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInteger_term?: (ctx: Integer_termContext) => Result;

	/**
	 * Visit a parse tree produced by the `float`
	 * labeled alternative in `prologParser.term`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFloat?: (ctx: FloatContext) => Result;

	/**
	 * Visit a parse tree produced by the `compound_term`
	 * labeled alternative in `prologParser.term`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCompound_term?: (ctx: Compound_termContext) => Result;

	/**
	 * Visit a parse tree produced by the `binary_operator`
	 * labeled alternative in `prologParser.term`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBinary_operator?: (ctx: Binary_operatorContext) => Result;

	/**
	 * Visit a parse tree produced by the `unary_operator`
	 * labeled alternative in `prologParser.term`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnary_operator?: (ctx: Unary_operatorContext) => Result;

	/**
	 * Visit a parse tree produced by the `list_term`
	 * labeled alternative in `prologParser.term`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitList_term?: (ctx: List_termContext) => Result;

	/**
	 * Visit a parse tree produced by the `curly_bracketed_term`
	 * labeled alternative in `prologParser.term`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCurly_bracketed_term?: (ctx: Curly_bracketed_termContext) => Result;

	/**
	 * Visit a parse tree produced by the `atom_term`
	 * labeled alternative in `prologParser.term`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAtom_term?: (ctx: Atom_termContext) => Result;

	/**
	 * Visit a parse tree produced by the `empty_list`
	 * labeled alternative in `prologParser.atom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEmpty_list?: (ctx: Empty_listContext) => Result;

	/**
	 * Visit a parse tree produced by the `empty_braces`
	 * labeled alternative in `prologParser.atom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEmpty_braces?: (ctx: Empty_bracesContext) => Result;

	/**
	 * Visit a parse tree produced by the `name`
	 * labeled alternative in `prologParser.atom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitName?: (ctx: NameContext) => Result;

	/**
	 * Visit a parse tree produced by the `graphic`
	 * labeled alternative in `prologParser.atom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGraphic?: (ctx: GraphicContext) => Result;

	/**
	 * Visit a parse tree produced by the `quoted_string`
	 * labeled alternative in `prologParser.atom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQuoted_string?: (ctx: Quoted_stringContext) => Result;

	/**
	 * Visit a parse tree produced by the `dq_string`
	 * labeled alternative in `prologParser.atom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDq_string?: (ctx: Dq_stringContext) => Result;

	/**
	 * Visit a parse tree produced by the `backq_string`
	 * labeled alternative in `prologParser.atom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBackq_string?: (ctx: Backq_stringContext) => Result;

	/**
	 * Visit a parse tree produced by the `semicolon`
	 * labeled alternative in `prologParser.atom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSemicolon?: (ctx: SemicolonContext) => Result;

	/**
	 * Visit a parse tree produced by the `cut`
	 * labeled alternative in `prologParser.atom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCut?: (ctx: CutContext) => Result;

	/**
	 * Visit a parse tree produced by `prologParser.p_text`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitP_text?: (ctx: P_textContext) => Result;

	/**
	 * Visit a parse tree produced by `prologParser.directive`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDirective?: (ctx: DirectiveContext) => Result;

	/**
	 * Visit a parse tree produced by `prologParser.clause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClause?: (ctx: ClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `prologParser.termlist`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTermlist?: (ctx: TermlistContext) => Result;

	/**
	 * Visit a parse tree produced by `prologParser.term`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTerm?: (ctx: TermContext) => Result;

	/**
	 * Visit a parse tree produced by `prologParser.operator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOperator?: (ctx: OperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `prologParser.atom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAtom?: (ctx: AtomContext) => Result;

	/**
	 * Visit a parse tree produced by `prologParser.integer`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInteger?: (ctx: IntegerContext) => Result;
}

