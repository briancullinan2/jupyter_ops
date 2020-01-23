// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/z/ZOperatorParser.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

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
 * This interface defines a complete listener for a parse tree produced by
 * `ZOperatorParser`.
 */
export interface ZOperatorParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by the `OperatorTemplateParagraph`
	 * labeled alternative in `ZOperatorParser.paragraph`.
	 * @param ctx the parse tree
	 */
	enterOperatorTemplateParagraph?: (ctx: OperatorTemplateParagraphContext) => void;
	/**
	 * Exit a parse tree produced by the `OperatorTemplateParagraph`
	 * labeled alternative in `ZOperatorParser.paragraph`.
	 * @param ctx the parse tree
	 */
	exitOperatorTemplateParagraph?: (ctx: OperatorTemplateParagraphContext) => void;

	/**
	 * Enter a parse tree produced by the `AxiomaticDescriptionParagraph`
	 * labeled alternative in `ZOperatorParser.paragraph`.
	 * @param ctx the parse tree
	 */
	enterAxiomaticDescriptionParagraph?: (ctx: AxiomaticDescriptionParagraphContext) => void;
	/**
	 * Exit a parse tree produced by the `AxiomaticDescriptionParagraph`
	 * labeled alternative in `ZOperatorParser.paragraph`.
	 * @param ctx the parse tree
	 */
	exitAxiomaticDescriptionParagraph?: (ctx: AxiomaticDescriptionParagraphContext) => void;

	/**
	 * Enter a parse tree produced by the `SchemaDefinitionParagraph`
	 * labeled alternative in `ZOperatorParser.paragraph`.
	 * @param ctx the parse tree
	 */
	enterSchemaDefinitionParagraph?: (ctx: SchemaDefinitionParagraphContext) => void;
	/**
	 * Exit a parse tree produced by the `SchemaDefinitionParagraph`
	 * labeled alternative in `ZOperatorParser.paragraph`.
	 * @param ctx the parse tree
	 */
	exitSchemaDefinitionParagraph?: (ctx: SchemaDefinitionParagraphContext) => void;

	/**
	 * Enter a parse tree produced by the `NONOperatorTemplateParagraph`
	 * labeled alternative in `ZOperatorParser.paragraph`.
	 * @param ctx the parse tree
	 */
	enterNONOperatorTemplateParagraph?: (ctx: NONOperatorTemplateParagraphContext) => void;
	/**
	 * Exit a parse tree produced by the `NONOperatorTemplateParagraph`
	 * labeled alternative in `ZOperatorParser.paragraph`.
	 * @param ctx the parse tree
	 */
	exitNONOperatorTemplateParagraph?: (ctx: NONOperatorTemplateParagraphContext) => void;

	/**
	 * Enter a parse tree produced by the `InheritingSection`
	 * labeled alternative in `ZOperatorParser.section`.
	 * @param ctx the parse tree
	 */
	enterInheritingSection?: (ctx: InheritingSectionContext) => void;
	/**
	 * Exit a parse tree produced by the `InheritingSection`
	 * labeled alternative in `ZOperatorParser.section`.
	 * @param ctx the parse tree
	 */
	exitInheritingSection?: (ctx: InheritingSectionContext) => void;

	/**
	 * Enter a parse tree produced by the `BaseSection`
	 * labeled alternative in `ZOperatorParser.section`.
	 * @param ctx the parse tree
	 */
	enterBaseSection?: (ctx: BaseSectionContext) => void;
	/**
	 * Exit a parse tree produced by the `BaseSection`
	 * labeled alternative in `ZOperatorParser.section`.
	 * @param ctx the parse tree
	 */
	exitBaseSection?: (ctx: BaseSectionContext) => void;

	/**
	 * Enter a parse tree produced by the `RelationOperatorTemplate`
	 * labeled alternative in `ZOperatorParser.operatorTemplate`.
	 * @param ctx the parse tree
	 */
	enterRelationOperatorTemplate?: (ctx: RelationOperatorTemplateContext) => void;
	/**
	 * Exit a parse tree produced by the `RelationOperatorTemplate`
	 * labeled alternative in `ZOperatorParser.operatorTemplate`.
	 * @param ctx the parse tree
	 */
	exitRelationOperatorTemplate?: (ctx: RelationOperatorTemplateContext) => void;

	/**
	 * Enter a parse tree produced by the `FunctionOperatorTemplate`
	 * labeled alternative in `ZOperatorParser.operatorTemplate`.
	 * @param ctx the parse tree
	 */
	enterFunctionOperatorTemplate?: (ctx: FunctionOperatorTemplateContext) => void;
	/**
	 * Exit a parse tree produced by the `FunctionOperatorTemplate`
	 * labeled alternative in `ZOperatorParser.operatorTemplate`.
	 * @param ctx the parse tree
	 */
	exitFunctionOperatorTemplate?: (ctx: FunctionOperatorTemplateContext) => void;

	/**
	 * Enter a parse tree produced by the `GenericOperatorTemplate`
	 * labeled alternative in `ZOperatorParser.operatorTemplate`.
	 * @param ctx the parse tree
	 */
	enterGenericOperatorTemplate?: (ctx: GenericOperatorTemplateContext) => void;
	/**
	 * Exit a parse tree produced by the `GenericOperatorTemplate`
	 * labeled alternative in `ZOperatorParser.operatorTemplate`.
	 * @param ctx the parse tree
	 */
	exitGenericOperatorTemplate?: (ctx: GenericOperatorTemplateContext) => void;

	/**
	 * Enter a parse tree produced by `ZOperatorParser.specification`.
	 * @param ctx the parse tree
	 */
	enterSpecification?: (ctx: SpecificationContext) => void;
	/**
	 * Exit a parse tree produced by `ZOperatorParser.specification`.
	 * @param ctx the parse tree
	 */
	exitSpecification?: (ctx: SpecificationContext) => void;

	/**
	 * Enter a parse tree produced by `ZOperatorParser.section`.
	 * @param ctx the parse tree
	 */
	enterSection?: (ctx: SectionContext) => void;
	/**
	 * Exit a parse tree produced by `ZOperatorParser.section`.
	 * @param ctx the parse tree
	 */
	exitSection?: (ctx: SectionContext) => void;

	/**
	 * Enter a parse tree produced by `ZOperatorParser.paragraph`.
	 * @param ctx the parse tree
	 */
	enterParagraph?: (ctx: ParagraphContext) => void;
	/**
	 * Exit a parse tree produced by `ZOperatorParser.paragraph`.
	 * @param ctx the parse tree
	 */
	exitParagraph?: (ctx: ParagraphContext) => void;

	/**
	 * Enter a parse tree produced by `ZOperatorParser.formals`.
	 * @param ctx the parse tree
	 */
	enterFormals?: (ctx: FormalsContext) => void;
	/**
	 * Exit a parse tree produced by `ZOperatorParser.formals`.
	 * @param ctx the parse tree
	 */
	exitFormals?: (ctx: FormalsContext) => void;

	/**
	 * Enter a parse tree produced by `ZOperatorParser.operatorTemplate`.
	 * @param ctx the parse tree
	 */
	enterOperatorTemplate?: (ctx: OperatorTemplateContext) => void;
	/**
	 * Exit a parse tree produced by `ZOperatorParser.operatorTemplate`.
	 * @param ctx the parse tree
	 */
	exitOperatorTemplate?: (ctx: OperatorTemplateContext) => void;

	/**
	 * Enter a parse tree produced by `ZOperatorParser.categoryTemplate`.
	 * @param ctx the parse tree
	 */
	enterCategoryTemplate?: (ctx: CategoryTemplateContext) => void;
	/**
	 * Exit a parse tree produced by `ZOperatorParser.categoryTemplate`.
	 * @param ctx the parse tree
	 */
	exitCategoryTemplate?: (ctx: CategoryTemplateContext) => void;

	/**
	 * Enter a parse tree produced by `ZOperatorParser.prec`.
	 * @param ctx the parse tree
	 */
	enterPrec?: (ctx: PrecContext) => void;
	/**
	 * Exit a parse tree produced by `ZOperatorParser.prec`.
	 * @param ctx the parse tree
	 */
	exitPrec?: (ctx: PrecContext) => void;

	/**
	 * Enter a parse tree produced by `ZOperatorParser.assoc`.
	 * @param ctx the parse tree
	 */
	enterAssoc?: (ctx: AssocContext) => void;
	/**
	 * Exit a parse tree produced by `ZOperatorParser.assoc`.
	 * @param ctx the parse tree
	 */
	exitAssoc?: (ctx: AssocContext) => void;

	/**
	 * Enter a parse tree produced by `ZOperatorParser.template`.
	 * @param ctx the parse tree
	 */
	enterTemplate?: (ctx: TemplateContext) => void;
	/**
	 * Exit a parse tree produced by `ZOperatorParser.template`.
	 * @param ctx the parse tree
	 */
	exitTemplate?: (ctx: TemplateContext) => void;

	/**
	 * Enter a parse tree produced by `ZOperatorParser.prefixTemplate`.
	 * @param ctx the parse tree
	 */
	enterPrefixTemplate?: (ctx: PrefixTemplateContext) => void;
	/**
	 * Exit a parse tree produced by `ZOperatorParser.prefixTemplate`.
	 * @param ctx the parse tree
	 */
	exitPrefixTemplate?: (ctx: PrefixTemplateContext) => void;

	/**
	 * Enter a parse tree produced by `ZOperatorParser.postfixTemplate`.
	 * @param ctx the parse tree
	 */
	enterPostfixTemplate?: (ctx: PostfixTemplateContext) => void;
	/**
	 * Exit a parse tree produced by `ZOperatorParser.postfixTemplate`.
	 * @param ctx the parse tree
	 */
	exitPostfixTemplate?: (ctx: PostfixTemplateContext) => void;

	/**
	 * Enter a parse tree produced by `ZOperatorParser.infixTemplate`.
	 * @param ctx the parse tree
	 */
	enterInfixTemplate?: (ctx: InfixTemplateContext) => void;
	/**
	 * Exit a parse tree produced by `ZOperatorParser.infixTemplate`.
	 * @param ctx the parse tree
	 */
	exitInfixTemplate?: (ctx: InfixTemplateContext) => void;

	/**
	 * Enter a parse tree produced by `ZOperatorParser.nofixTemplate`.
	 * @param ctx the parse tree
	 */
	enterNofixTemplate?: (ctx: NofixTemplateContext) => void;
	/**
	 * Exit a parse tree produced by `ZOperatorParser.nofixTemplate`.
	 * @param ctx the parse tree
	 */
	exitNofixTemplate?: (ctx: NofixTemplateContext) => void;

	/**
	 * Enter a parse tree produced by `ZOperatorParser.optArgName`.
	 * @param ctx the parse tree
	 */
	enterOptArgName?: (ctx: OptArgNameContext) => void;
	/**
	 * Exit a parse tree produced by `ZOperatorParser.optArgName`.
	 * @param ctx the parse tree
	 */
	exitOptArgName?: (ctx: OptArgNameContext) => void;

	/**
	 * Enter a parse tree produced by `ZOperatorParser.optListName`.
	 * @param ctx the parse tree
	 */
	enterOptListName?: (ctx: OptListNameContext) => void;
	/**
	 * Exit a parse tree produced by `ZOperatorParser.optListName`.
	 * @param ctx the parse tree
	 */
	exitOptListName?: (ctx: OptListNameContext) => void;

	/**
	 * Enter a parse tree produced by `ZOperatorParser.argName`.
	 * @param ctx the parse tree
	 */
	enterArgName?: (ctx: ArgNameContext) => void;
	/**
	 * Exit a parse tree produced by `ZOperatorParser.argName`.
	 * @param ctx the parse tree
	 */
	exitArgName?: (ctx: ArgNameContext) => void;

	/**
	 * Enter a parse tree produced by `ZOperatorParser.listName`.
	 * @param ctx the parse tree
	 */
	enterListName?: (ctx: ListNameContext) => void;
	/**
	 * Exit a parse tree produced by `ZOperatorParser.listName`.
	 * @param ctx the parse tree
	 */
	exitListName?: (ctx: ListNameContext) => void;

	/**
	 * Enter a parse tree produced by `ZOperatorParser.prefixName`.
	 * @param ctx the parse tree
	 */
	enterPrefixName?: (ctx: PrefixNameContext) => void;
	/**
	 * Exit a parse tree produced by `ZOperatorParser.prefixName`.
	 * @param ctx the parse tree
	 */
	exitPrefixName?: (ctx: PrefixNameContext) => void;

	/**
	 * Enter a parse tree produced by `ZOperatorParser.postfixName`.
	 * @param ctx the parse tree
	 */
	enterPostfixName?: (ctx: PostfixNameContext) => void;
	/**
	 * Exit a parse tree produced by `ZOperatorParser.postfixName`.
	 * @param ctx the parse tree
	 */
	exitPostfixName?: (ctx: PostfixNameContext) => void;

	/**
	 * Enter a parse tree produced by `ZOperatorParser.infixName`.
	 * @param ctx the parse tree
	 */
	enterInfixName?: (ctx: InfixNameContext) => void;
	/**
	 * Exit a parse tree produced by `ZOperatorParser.infixName`.
	 * @param ctx the parse tree
	 */
	exitInfixName?: (ctx: InfixNameContext) => void;

	/**
	 * Enter a parse tree produced by `ZOperatorParser.nofixName`.
	 * @param ctx the parse tree
	 */
	enterNofixName?: (ctx: NofixNameContext) => void;
	/**
	 * Exit a parse tree produced by `ZOperatorParser.nofixName`.
	 * @param ctx the parse tree
	 */
	exitNofixName?: (ctx: NofixNameContext) => void;
}

