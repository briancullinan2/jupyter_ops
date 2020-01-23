// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/stringtemplate/STParser.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

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
 * This interface defines a complete listener for a parse tree produced by
 * `STParser`.
 */
export interface STParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `STParser.template`.
	 * @param ctx the parse tree
	 */
	enterTemplate?: (ctx: TemplateContext) => void;
	/**
	 * Exit a parse tree produced by `STParser.template`.
	 * @param ctx the parse tree
	 */
	exitTemplate?: (ctx: TemplateContext) => void;

	/**
	 * Enter a parse tree produced by `STParser.elements`.
	 * @param ctx the parse tree
	 */
	enterElements?: (ctx: ElementsContext) => void;
	/**
	 * Exit a parse tree produced by `STParser.elements`.
	 * @param ctx the parse tree
	 */
	exitElements?: (ctx: ElementsContext) => void;

	/**
	 * Enter a parse tree produced by `STParser.element`.
	 * @param ctx the parse tree
	 */
	enterElement?: (ctx: ElementContext) => void;
	/**
	 * Exit a parse tree produced by `STParser.element`.
	 * @param ctx the parse tree
	 */
	exitElement?: (ctx: ElementContext) => void;

	/**
	 * Enter a parse tree produced by `STParser.singleElement`.
	 * @param ctx the parse tree
	 */
	enterSingleElement?: (ctx: SingleElementContext) => void;
	/**
	 * Exit a parse tree produced by `STParser.singleElement`.
	 * @param ctx the parse tree
	 */
	exitSingleElement?: (ctx: SingleElementContext) => void;

	/**
	 * Enter a parse tree produced by `STParser.compoundElement`.
	 * @param ctx the parse tree
	 */
	enterCompoundElement?: (ctx: CompoundElementContext) => void;
	/**
	 * Exit a parse tree produced by `STParser.compoundElement`.
	 * @param ctx the parse tree
	 */
	exitCompoundElement?: (ctx: CompoundElementContext) => void;

	/**
	 * Enter a parse tree produced by `STParser.exprTag`.
	 * @param ctx the parse tree
	 */
	enterExprTag?: (ctx: ExprTagContext) => void;
	/**
	 * Exit a parse tree produced by `STParser.exprTag`.
	 * @param ctx the parse tree
	 */
	exitExprTag?: (ctx: ExprTagContext) => void;

	/**
	 * Enter a parse tree produced by `STParser.region`.
	 * @param ctx the parse tree
	 */
	enterRegion?: (ctx: RegionContext) => void;
	/**
	 * Exit a parse tree produced by `STParser.region`.
	 * @param ctx the parse tree
	 */
	exitRegion?: (ctx: RegionContext) => void;

	/**
	 * Enter a parse tree produced by `STParser.subtemplate`.
	 * @param ctx the parse tree
	 */
	enterSubtemplate?: (ctx: SubtemplateContext) => void;
	/**
	 * Exit a parse tree produced by `STParser.subtemplate`.
	 * @param ctx the parse tree
	 */
	exitSubtemplate?: (ctx: SubtemplateContext) => void;

	/**
	 * Enter a parse tree produced by `STParser.ifstat`.
	 * @param ctx the parse tree
	 */
	enterIfstat?: (ctx: IfstatContext) => void;
	/**
	 * Exit a parse tree produced by `STParser.ifstat`.
	 * @param ctx the parse tree
	 */
	exitIfstat?: (ctx: IfstatContext) => void;

	/**
	 * Enter a parse tree produced by `STParser.conditional`.
	 * @param ctx the parse tree
	 */
	enterConditional?: (ctx: ConditionalContext) => void;
	/**
	 * Exit a parse tree produced by `STParser.conditional`.
	 * @param ctx the parse tree
	 */
	exitConditional?: (ctx: ConditionalContext) => void;

	/**
	 * Enter a parse tree produced by `STParser.andConditional`.
	 * @param ctx the parse tree
	 */
	enterAndConditional?: (ctx: AndConditionalContext) => void;
	/**
	 * Exit a parse tree produced by `STParser.andConditional`.
	 * @param ctx the parse tree
	 */
	exitAndConditional?: (ctx: AndConditionalContext) => void;

	/**
	 * Enter a parse tree produced by `STParser.notConditional`.
	 * @param ctx the parse tree
	 */
	enterNotConditional?: (ctx: NotConditionalContext) => void;
	/**
	 * Exit a parse tree produced by `STParser.notConditional`.
	 * @param ctx the parse tree
	 */
	exitNotConditional?: (ctx: NotConditionalContext) => void;

	/**
	 * Enter a parse tree produced by `STParser.notConditionalExpr`.
	 * @param ctx the parse tree
	 */
	enterNotConditionalExpr?: (ctx: NotConditionalExprContext) => void;
	/**
	 * Exit a parse tree produced by `STParser.notConditionalExpr`.
	 * @param ctx the parse tree
	 */
	exitNotConditionalExpr?: (ctx: NotConditionalExprContext) => void;

	/**
	 * Enter a parse tree produced by `STParser.exprOptions`.
	 * @param ctx the parse tree
	 */
	enterExprOptions?: (ctx: ExprOptionsContext) => void;
	/**
	 * Exit a parse tree produced by `STParser.exprOptions`.
	 * @param ctx the parse tree
	 */
	exitExprOptions?: (ctx: ExprOptionsContext) => void;

	/**
	 * Enter a parse tree produced by `STParser.option`.
	 * @param ctx the parse tree
	 */
	enterOption?: (ctx: OptionContext) => void;
	/**
	 * Exit a parse tree produced by `STParser.option`.
	 * @param ctx the parse tree
	 */
	exitOption?: (ctx: OptionContext) => void;

	/**
	 * Enter a parse tree produced by `STParser.expr`.
	 * @param ctx the parse tree
	 */
	enterExpr?: (ctx: ExprContext) => void;
	/**
	 * Exit a parse tree produced by `STParser.expr`.
	 * @param ctx the parse tree
	 */
	exitExpr?: (ctx: ExprContext) => void;

	/**
	 * Enter a parse tree produced by `STParser.mapExpr`.
	 * @param ctx the parse tree
	 */
	enterMapExpr?: (ctx: MapExprContext) => void;
	/**
	 * Exit a parse tree produced by `STParser.mapExpr`.
	 * @param ctx the parse tree
	 */
	exitMapExpr?: (ctx: MapExprContext) => void;

	/**
	 * Enter a parse tree produced by `STParser.memberExpr`.
	 * @param ctx the parse tree
	 */
	enterMemberExpr?: (ctx: MemberExprContext) => void;
	/**
	 * Exit a parse tree produced by `STParser.memberExpr`.
	 * @param ctx the parse tree
	 */
	exitMemberExpr?: (ctx: MemberExprContext) => void;

	/**
	 * Enter a parse tree produced by `STParser.mapTemplateRef`.
	 * @param ctx the parse tree
	 */
	enterMapTemplateRef?: (ctx: MapTemplateRefContext) => void;
	/**
	 * Exit a parse tree produced by `STParser.mapTemplateRef`.
	 * @param ctx the parse tree
	 */
	exitMapTemplateRef?: (ctx: MapTemplateRefContext) => void;

	/**
	 * Enter a parse tree produced by `STParser.includeExpr`.
	 * @param ctx the parse tree
	 */
	enterIncludeExpr?: (ctx: IncludeExprContext) => void;
	/**
	 * Exit a parse tree produced by `STParser.includeExpr`.
	 * @param ctx the parse tree
	 */
	exitIncludeExpr?: (ctx: IncludeExprContext) => void;

	/**
	 * Enter a parse tree produced by `STParser.primary`.
	 * @param ctx the parse tree
	 */
	enterPrimary?: (ctx: PrimaryContext) => void;
	/**
	 * Exit a parse tree produced by `STParser.primary`.
	 * @param ctx the parse tree
	 */
	exitPrimary?: (ctx: PrimaryContext) => void;

	/**
	 * Enter a parse tree produced by `STParser.list`.
	 * @param ctx the parse tree
	 */
	enterList?: (ctx: ListContext) => void;
	/**
	 * Exit a parse tree produced by `STParser.list`.
	 * @param ctx the parse tree
	 */
	exitList?: (ctx: ListContext) => void;

	/**
	 * Enter a parse tree produced by `STParser.args`.
	 * @param ctx the parse tree
	 */
	enterArgs?: (ctx: ArgsContext) => void;
	/**
	 * Exit a parse tree produced by `STParser.args`.
	 * @param ctx the parse tree
	 */
	exitArgs?: (ctx: ArgsContext) => void;

	/**
	 * Enter a parse tree produced by `STParser.argExprList`.
	 * @param ctx the parse tree
	 */
	enterArgExprList?: (ctx: ArgExprListContext) => void;
	/**
	 * Exit a parse tree produced by `STParser.argExprList`.
	 * @param ctx the parse tree
	 */
	exitArgExprList?: (ctx: ArgExprListContext) => void;

	/**
	 * Enter a parse tree produced by `STParser.namedArg`.
	 * @param ctx the parse tree
	 */
	enterNamedArg?: (ctx: NamedArgContext) => void;
	/**
	 * Exit a parse tree produced by `STParser.namedArg`.
	 * @param ctx the parse tree
	 */
	exitNamedArg?: (ctx: NamedArgContext) => void;
}

