// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/stringtemplate/STParser.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { TemplateContext } from "./STParser";
import { ElementsContext } from "./STParser";
import { ElementContext } from "./STParser";
import { SingleElementContext } from "./STParser";
import { CompoundElementContext } from "./STParser";
import { ExprTagContext } from "./STParser";
import { RegionContext } from "./STParser";
import { SubtemplateContext } from "./STParser";
import { IfstatContext } from "./STParser";
import { ConditionalContext } from "./STParser";
import { AndConditionalContext } from "./STParser";
import { NotConditionalContext } from "./STParser";
import { NotConditionalExprContext } from "./STParser";
import { ExprOptionsContext } from "./STParser";
import { OptionContext } from "./STParser";
import { ExprContext } from "./STParser";
import { MapExprContext } from "./STParser";
import { MemberExprContext } from "./STParser";
import { MapTemplateRefContext } from "./STParser";
import { IncludeExprContext } from "./STParser";
import { PrimaryContext } from "./STParser";
import { ListContext } from "./STParser";
import { ArgsContext } from "./STParser";
import { ArgExprListContext } from "./STParser";
import { NamedArgContext } from "./STParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `STParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface STParserVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `STParser.template`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTemplate?: (ctx: TemplateContext) => Result;

	/**
	 * Visit a parse tree produced by `STParser.elements`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElements?: (ctx: ElementsContext) => Result;

	/**
	 * Visit a parse tree produced by `STParser.element`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElement?: (ctx: ElementContext) => Result;

	/**
	 * Visit a parse tree produced by `STParser.singleElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSingleElement?: (ctx: SingleElementContext) => Result;

	/**
	 * Visit a parse tree produced by `STParser.compoundElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCompoundElement?: (ctx: CompoundElementContext) => Result;

	/**
	 * Visit a parse tree produced by `STParser.exprTag`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExprTag?: (ctx: ExprTagContext) => Result;

	/**
	 * Visit a parse tree produced by `STParser.region`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRegion?: (ctx: RegionContext) => Result;

	/**
	 * Visit a parse tree produced by `STParser.subtemplate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubtemplate?: (ctx: SubtemplateContext) => Result;

	/**
	 * Visit a parse tree produced by `STParser.ifstat`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfstat?: (ctx: IfstatContext) => Result;

	/**
	 * Visit a parse tree produced by `STParser.conditional`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConditional?: (ctx: ConditionalContext) => Result;

	/**
	 * Visit a parse tree produced by `STParser.andConditional`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAndConditional?: (ctx: AndConditionalContext) => Result;

	/**
	 * Visit a parse tree produced by `STParser.notConditional`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNotConditional?: (ctx: NotConditionalContext) => Result;

	/**
	 * Visit a parse tree produced by `STParser.notConditionalExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNotConditionalExpr?: (ctx: NotConditionalExprContext) => Result;

	/**
	 * Visit a parse tree produced by `STParser.exprOptions`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExprOptions?: (ctx: ExprOptionsContext) => Result;

	/**
	 * Visit a parse tree produced by `STParser.option`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOption?: (ctx: OptionContext) => Result;

	/**
	 * Visit a parse tree produced by `STParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpr?: (ctx: ExprContext) => Result;

	/**
	 * Visit a parse tree produced by `STParser.mapExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMapExpr?: (ctx: MapExprContext) => Result;

	/**
	 * Visit a parse tree produced by `STParser.memberExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMemberExpr?: (ctx: MemberExprContext) => Result;

	/**
	 * Visit a parse tree produced by `STParser.mapTemplateRef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMapTemplateRef?: (ctx: MapTemplateRefContext) => Result;

	/**
	 * Visit a parse tree produced by `STParser.includeExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIncludeExpr?: (ctx: IncludeExprContext) => Result;

	/**
	 * Visit a parse tree produced by `STParser.primary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrimary?: (ctx: PrimaryContext) => Result;

	/**
	 * Visit a parse tree produced by `STParser.list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitList?: (ctx: ListContext) => Result;

	/**
	 * Visit a parse tree produced by `STParser.args`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArgs?: (ctx: ArgsContext) => Result;

	/**
	 * Visit a parse tree produced by `STParser.argExprList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArgExprList?: (ctx: ArgExprListContext) => Result;

	/**
	 * Visit a parse tree produced by `STParser.namedArg`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNamedArg?: (ctx: NamedArgContext) => Result;
}

