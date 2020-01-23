// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/z/ZOperatorParser.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { OperatorTemplateParagraphContext } from "./ZOperatorParser";
import { AxiomaticDescriptionParagraphContext } from "./ZOperatorParser";
import { SchemaDefinitionParagraphContext } from "./ZOperatorParser";
import { NONOperatorTemplateParagraphContext } from "./ZOperatorParser";
import { InheritingSectionContext } from "./ZOperatorParser";
import { BaseSectionContext } from "./ZOperatorParser";
import { RelationOperatorTemplateContext } from "./ZOperatorParser";
import { FunctionOperatorTemplateContext } from "./ZOperatorParser";
import { GenericOperatorTemplateContext } from "./ZOperatorParser";
import { SpecificationContext } from "./ZOperatorParser";
import { SectionContext } from "./ZOperatorParser";
import { ParagraphContext } from "./ZOperatorParser";
import { FormalsContext } from "./ZOperatorParser";
import { OperatorTemplateContext } from "./ZOperatorParser";
import { CategoryTemplateContext } from "./ZOperatorParser";
import { PrecContext } from "./ZOperatorParser";
import { AssocContext } from "./ZOperatorParser";
import { TemplateContext } from "./ZOperatorParser";
import { PrefixTemplateContext } from "./ZOperatorParser";
import { PostfixTemplateContext } from "./ZOperatorParser";
import { InfixTemplateContext } from "./ZOperatorParser";
import { NofixTemplateContext } from "./ZOperatorParser";
import { OptArgNameContext } from "./ZOperatorParser";
import { OptListNameContext } from "./ZOperatorParser";
import { ArgNameContext } from "./ZOperatorParser";
import { ListNameContext } from "./ZOperatorParser";
import { PrefixNameContext } from "./ZOperatorParser";
import { PostfixNameContext } from "./ZOperatorParser";
import { InfixNameContext } from "./ZOperatorParser";
import { NofixNameContext } from "./ZOperatorParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `ZOperatorParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface ZOperatorParserVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by the `OperatorTemplateParagraph`
	 * labeled alternative in `ZOperatorParser.paragraph`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOperatorTemplateParagraph?: (ctx: OperatorTemplateParagraphContext) => Result;

	/**
	 * Visit a parse tree produced by the `AxiomaticDescriptionParagraph`
	 * labeled alternative in `ZOperatorParser.paragraph`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAxiomaticDescriptionParagraph?: (ctx: AxiomaticDescriptionParagraphContext) => Result;

	/**
	 * Visit a parse tree produced by the `SchemaDefinitionParagraph`
	 * labeled alternative in `ZOperatorParser.paragraph`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSchemaDefinitionParagraph?: (ctx: SchemaDefinitionParagraphContext) => Result;

	/**
	 * Visit a parse tree produced by the `NONOperatorTemplateParagraph`
	 * labeled alternative in `ZOperatorParser.paragraph`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNONOperatorTemplateParagraph?: (ctx: NONOperatorTemplateParagraphContext) => Result;

	/**
	 * Visit a parse tree produced by the `InheritingSection`
	 * labeled alternative in `ZOperatorParser.section`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInheritingSection?: (ctx: InheritingSectionContext) => Result;

	/**
	 * Visit a parse tree produced by the `BaseSection`
	 * labeled alternative in `ZOperatorParser.section`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBaseSection?: (ctx: BaseSectionContext) => Result;

	/**
	 * Visit a parse tree produced by the `RelationOperatorTemplate`
	 * labeled alternative in `ZOperatorParser.operatorTemplate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRelationOperatorTemplate?: (ctx: RelationOperatorTemplateContext) => Result;

	/**
	 * Visit a parse tree produced by the `FunctionOperatorTemplate`
	 * labeled alternative in `ZOperatorParser.operatorTemplate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionOperatorTemplate?: (ctx: FunctionOperatorTemplateContext) => Result;

	/**
	 * Visit a parse tree produced by the `GenericOperatorTemplate`
	 * labeled alternative in `ZOperatorParser.operatorTemplate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGenericOperatorTemplate?: (ctx: GenericOperatorTemplateContext) => Result;

	/**
	 * Visit a parse tree produced by `ZOperatorParser.specification`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSpecification?: (ctx: SpecificationContext) => Result;

	/**
	 * Visit a parse tree produced by `ZOperatorParser.section`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSection?: (ctx: SectionContext) => Result;

	/**
	 * Visit a parse tree produced by `ZOperatorParser.paragraph`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParagraph?: (ctx: ParagraphContext) => Result;

	/**
	 * Visit a parse tree produced by `ZOperatorParser.formals`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFormals?: (ctx: FormalsContext) => Result;

	/**
	 * Visit a parse tree produced by `ZOperatorParser.operatorTemplate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOperatorTemplate?: (ctx: OperatorTemplateContext) => Result;

	/**
	 * Visit a parse tree produced by `ZOperatorParser.categoryTemplate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCategoryTemplate?: (ctx: CategoryTemplateContext) => Result;

	/**
	 * Visit a parse tree produced by `ZOperatorParser.prec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrec?: (ctx: PrecContext) => Result;

	/**
	 * Visit a parse tree produced by `ZOperatorParser.assoc`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssoc?: (ctx: AssocContext) => Result;

	/**
	 * Visit a parse tree produced by `ZOperatorParser.template`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTemplate?: (ctx: TemplateContext) => Result;

	/**
	 * Visit a parse tree produced by `ZOperatorParser.prefixTemplate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrefixTemplate?: (ctx: PrefixTemplateContext) => Result;

	/**
	 * Visit a parse tree produced by `ZOperatorParser.postfixTemplate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPostfixTemplate?: (ctx: PostfixTemplateContext) => Result;

	/**
	 * Visit a parse tree produced by `ZOperatorParser.infixTemplate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInfixTemplate?: (ctx: InfixTemplateContext) => Result;

	/**
	 * Visit a parse tree produced by `ZOperatorParser.nofixTemplate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNofixTemplate?: (ctx: NofixTemplateContext) => Result;

	/**
	 * Visit a parse tree produced by `ZOperatorParser.optArgName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOptArgName?: (ctx: OptArgNameContext) => Result;

	/**
	 * Visit a parse tree produced by `ZOperatorParser.optListName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOptListName?: (ctx: OptListNameContext) => Result;

	/**
	 * Visit a parse tree produced by `ZOperatorParser.argName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArgName?: (ctx: ArgNameContext) => Result;

	/**
	 * Visit a parse tree produced by `ZOperatorParser.listName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitListName?: (ctx: ListNameContext) => Result;

	/**
	 * Visit a parse tree produced by `ZOperatorParser.prefixName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrefixName?: (ctx: PrefixNameContext) => Result;

	/**
	 * Visit a parse tree produced by `ZOperatorParser.postfixName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPostfixName?: (ctx: PostfixNameContext) => Result;

	/**
	 * Visit a parse tree produced by `ZOperatorParser.infixName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInfixName?: (ctx: InfixNameContext) => Result;

	/**
	 * Visit a parse tree produced by `ZOperatorParser.nofixName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNofixName?: (ctx: NofixNameContext) => Result;
}

