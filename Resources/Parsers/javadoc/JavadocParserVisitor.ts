// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/javadoc/JavadocParser.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { DocumentationContext } from "./JavadocParser";
import { DocumentationContentContext } from "./JavadocParser";
import { SkipWhitespaceContext } from "./JavadocParser";
import { DescriptionContext } from "./JavadocParser";
import { DescriptionLineContext } from "./JavadocParser";
import { DescriptionLineStartContext } from "./JavadocParser";
import { DescriptionLineNoSpaceNoAtContext } from "./JavadocParser";
import { DescriptionLineElementContext } from "./JavadocParser";
import { DescriptionLineTextContext } from "./JavadocParser";
import { DescriptionNewlineContext } from "./JavadocParser";
import { TagSectionContext } from "./JavadocParser";
import { BlockTagContext } from "./JavadocParser";
import { BlockTagNameContext } from "./JavadocParser";
import { BlockTagContentContext } from "./JavadocParser";
import { BlockTagTextContext } from "./JavadocParser";
import { BlockTagTextElementContext } from "./JavadocParser";
import { InlineTagContext } from "./JavadocParser";
import { InlineTagNameContext } from "./JavadocParser";
import { InlineTagContentContext } from "./JavadocParser";
import { BraceExpressionContext } from "./JavadocParser";
import { BraceContentContext } from "./JavadocParser";
import { BraceTextContext } from "./JavadocParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `JavadocParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface JavadocParserVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `JavadocParser.documentation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDocumentation?: (ctx: DocumentationContext) => Result;

	/**
	 * Visit a parse tree produced by `JavadocParser.documentationContent`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDocumentationContent?: (ctx: DocumentationContentContext) => Result;

	/**
	 * Visit a parse tree produced by `JavadocParser.skipWhitespace`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSkipWhitespace?: (ctx: SkipWhitespaceContext) => Result;

	/**
	 * Visit a parse tree produced by `JavadocParser.description`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDescription?: (ctx: DescriptionContext) => Result;

	/**
	 * Visit a parse tree produced by `JavadocParser.descriptionLine`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDescriptionLine?: (ctx: DescriptionLineContext) => Result;

	/**
	 * Visit a parse tree produced by `JavadocParser.descriptionLineStart`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDescriptionLineStart?: (ctx: DescriptionLineStartContext) => Result;

	/**
	 * Visit a parse tree produced by `JavadocParser.descriptionLineNoSpaceNoAt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDescriptionLineNoSpaceNoAt?: (ctx: DescriptionLineNoSpaceNoAtContext) => Result;

	/**
	 * Visit a parse tree produced by `JavadocParser.descriptionLineElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDescriptionLineElement?: (ctx: DescriptionLineElementContext) => Result;

	/**
	 * Visit a parse tree produced by `JavadocParser.descriptionLineText`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDescriptionLineText?: (ctx: DescriptionLineTextContext) => Result;

	/**
	 * Visit a parse tree produced by `JavadocParser.descriptionNewline`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDescriptionNewline?: (ctx: DescriptionNewlineContext) => Result;

	/**
	 * Visit a parse tree produced by `JavadocParser.tagSection`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTagSection?: (ctx: TagSectionContext) => Result;

	/**
	 * Visit a parse tree produced by `JavadocParser.blockTag`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlockTag?: (ctx: BlockTagContext) => Result;

	/**
	 * Visit a parse tree produced by `JavadocParser.blockTagName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlockTagName?: (ctx: BlockTagNameContext) => Result;

	/**
	 * Visit a parse tree produced by `JavadocParser.blockTagContent`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlockTagContent?: (ctx: BlockTagContentContext) => Result;

	/**
	 * Visit a parse tree produced by `JavadocParser.blockTagText`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlockTagText?: (ctx: BlockTagTextContext) => Result;

	/**
	 * Visit a parse tree produced by `JavadocParser.blockTagTextElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlockTagTextElement?: (ctx: BlockTagTextElementContext) => Result;

	/**
	 * Visit a parse tree produced by `JavadocParser.inlineTag`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInlineTag?: (ctx: InlineTagContext) => Result;

	/**
	 * Visit a parse tree produced by `JavadocParser.inlineTagName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInlineTagName?: (ctx: InlineTagNameContext) => Result;

	/**
	 * Visit a parse tree produced by `JavadocParser.inlineTagContent`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInlineTagContent?: (ctx: InlineTagContentContext) => Result;

	/**
	 * Visit a parse tree produced by `JavadocParser.braceExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBraceExpression?: (ctx: BraceExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `JavadocParser.braceContent`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBraceContent?: (ctx: BraceContentContext) => Result;

	/**
	 * Visit a parse tree produced by `JavadocParser.braceText`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBraceText?: (ctx: BraceTextContext) => Result;
}

