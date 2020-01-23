// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/javadoc/JavadocParser.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

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
 * This interface defines a complete listener for a parse tree produced by
 * `JavadocParser`.
 */
export interface JavadocParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `JavadocParser.documentation`.
	 * @param ctx the parse tree
	 */
	enterDocumentation?: (ctx: DocumentationContext) => void;
	/**
	 * Exit a parse tree produced by `JavadocParser.documentation`.
	 * @param ctx the parse tree
	 */
	exitDocumentation?: (ctx: DocumentationContext) => void;

	/**
	 * Enter a parse tree produced by `JavadocParser.documentationContent`.
	 * @param ctx the parse tree
	 */
	enterDocumentationContent?: (ctx: DocumentationContentContext) => void;
	/**
	 * Exit a parse tree produced by `JavadocParser.documentationContent`.
	 * @param ctx the parse tree
	 */
	exitDocumentationContent?: (ctx: DocumentationContentContext) => void;

	/**
	 * Enter a parse tree produced by `JavadocParser.skipWhitespace`.
	 * @param ctx the parse tree
	 */
	enterSkipWhitespace?: (ctx: SkipWhitespaceContext) => void;
	/**
	 * Exit a parse tree produced by `JavadocParser.skipWhitespace`.
	 * @param ctx the parse tree
	 */
	exitSkipWhitespace?: (ctx: SkipWhitespaceContext) => void;

	/**
	 * Enter a parse tree produced by `JavadocParser.description`.
	 * @param ctx the parse tree
	 */
	enterDescription?: (ctx: DescriptionContext) => void;
	/**
	 * Exit a parse tree produced by `JavadocParser.description`.
	 * @param ctx the parse tree
	 */
	exitDescription?: (ctx: DescriptionContext) => void;

	/**
	 * Enter a parse tree produced by `JavadocParser.descriptionLine`.
	 * @param ctx the parse tree
	 */
	enterDescriptionLine?: (ctx: DescriptionLineContext) => void;
	/**
	 * Exit a parse tree produced by `JavadocParser.descriptionLine`.
	 * @param ctx the parse tree
	 */
	exitDescriptionLine?: (ctx: DescriptionLineContext) => void;

	/**
	 * Enter a parse tree produced by `JavadocParser.descriptionLineStart`.
	 * @param ctx the parse tree
	 */
	enterDescriptionLineStart?: (ctx: DescriptionLineStartContext) => void;
	/**
	 * Exit a parse tree produced by `JavadocParser.descriptionLineStart`.
	 * @param ctx the parse tree
	 */
	exitDescriptionLineStart?: (ctx: DescriptionLineStartContext) => void;

	/**
	 * Enter a parse tree produced by `JavadocParser.descriptionLineNoSpaceNoAt`.
	 * @param ctx the parse tree
	 */
	enterDescriptionLineNoSpaceNoAt?: (ctx: DescriptionLineNoSpaceNoAtContext) => void;
	/**
	 * Exit a parse tree produced by `JavadocParser.descriptionLineNoSpaceNoAt`.
	 * @param ctx the parse tree
	 */
	exitDescriptionLineNoSpaceNoAt?: (ctx: DescriptionLineNoSpaceNoAtContext) => void;

	/**
	 * Enter a parse tree produced by `JavadocParser.descriptionLineElement`.
	 * @param ctx the parse tree
	 */
	enterDescriptionLineElement?: (ctx: DescriptionLineElementContext) => void;
	/**
	 * Exit a parse tree produced by `JavadocParser.descriptionLineElement`.
	 * @param ctx the parse tree
	 */
	exitDescriptionLineElement?: (ctx: DescriptionLineElementContext) => void;

	/**
	 * Enter a parse tree produced by `JavadocParser.descriptionLineText`.
	 * @param ctx the parse tree
	 */
	enterDescriptionLineText?: (ctx: DescriptionLineTextContext) => void;
	/**
	 * Exit a parse tree produced by `JavadocParser.descriptionLineText`.
	 * @param ctx the parse tree
	 */
	exitDescriptionLineText?: (ctx: DescriptionLineTextContext) => void;

	/**
	 * Enter a parse tree produced by `JavadocParser.descriptionNewline`.
	 * @param ctx the parse tree
	 */
	enterDescriptionNewline?: (ctx: DescriptionNewlineContext) => void;
	/**
	 * Exit a parse tree produced by `JavadocParser.descriptionNewline`.
	 * @param ctx the parse tree
	 */
	exitDescriptionNewline?: (ctx: DescriptionNewlineContext) => void;

	/**
	 * Enter a parse tree produced by `JavadocParser.tagSection`.
	 * @param ctx the parse tree
	 */
	enterTagSection?: (ctx: TagSectionContext) => void;
	/**
	 * Exit a parse tree produced by `JavadocParser.tagSection`.
	 * @param ctx the parse tree
	 */
	exitTagSection?: (ctx: TagSectionContext) => void;

	/**
	 * Enter a parse tree produced by `JavadocParser.blockTag`.
	 * @param ctx the parse tree
	 */
	enterBlockTag?: (ctx: BlockTagContext) => void;
	/**
	 * Exit a parse tree produced by `JavadocParser.blockTag`.
	 * @param ctx the parse tree
	 */
	exitBlockTag?: (ctx: BlockTagContext) => void;

	/**
	 * Enter a parse tree produced by `JavadocParser.blockTagName`.
	 * @param ctx the parse tree
	 */
	enterBlockTagName?: (ctx: BlockTagNameContext) => void;
	/**
	 * Exit a parse tree produced by `JavadocParser.blockTagName`.
	 * @param ctx the parse tree
	 */
	exitBlockTagName?: (ctx: BlockTagNameContext) => void;

	/**
	 * Enter a parse tree produced by `JavadocParser.blockTagContent`.
	 * @param ctx the parse tree
	 */
	enterBlockTagContent?: (ctx: BlockTagContentContext) => void;
	/**
	 * Exit a parse tree produced by `JavadocParser.blockTagContent`.
	 * @param ctx the parse tree
	 */
	exitBlockTagContent?: (ctx: BlockTagContentContext) => void;

	/**
	 * Enter a parse tree produced by `JavadocParser.blockTagText`.
	 * @param ctx the parse tree
	 */
	enterBlockTagText?: (ctx: BlockTagTextContext) => void;
	/**
	 * Exit a parse tree produced by `JavadocParser.blockTagText`.
	 * @param ctx the parse tree
	 */
	exitBlockTagText?: (ctx: BlockTagTextContext) => void;

	/**
	 * Enter a parse tree produced by `JavadocParser.blockTagTextElement`.
	 * @param ctx the parse tree
	 */
	enterBlockTagTextElement?: (ctx: BlockTagTextElementContext) => void;
	/**
	 * Exit a parse tree produced by `JavadocParser.blockTagTextElement`.
	 * @param ctx the parse tree
	 */
	exitBlockTagTextElement?: (ctx: BlockTagTextElementContext) => void;

	/**
	 * Enter a parse tree produced by `JavadocParser.inlineTag`.
	 * @param ctx the parse tree
	 */
	enterInlineTag?: (ctx: InlineTagContext) => void;
	/**
	 * Exit a parse tree produced by `JavadocParser.inlineTag`.
	 * @param ctx the parse tree
	 */
	exitInlineTag?: (ctx: InlineTagContext) => void;

	/**
	 * Enter a parse tree produced by `JavadocParser.inlineTagName`.
	 * @param ctx the parse tree
	 */
	enterInlineTagName?: (ctx: InlineTagNameContext) => void;
	/**
	 * Exit a parse tree produced by `JavadocParser.inlineTagName`.
	 * @param ctx the parse tree
	 */
	exitInlineTagName?: (ctx: InlineTagNameContext) => void;

	/**
	 * Enter a parse tree produced by `JavadocParser.inlineTagContent`.
	 * @param ctx the parse tree
	 */
	enterInlineTagContent?: (ctx: InlineTagContentContext) => void;
	/**
	 * Exit a parse tree produced by `JavadocParser.inlineTagContent`.
	 * @param ctx the parse tree
	 */
	exitInlineTagContent?: (ctx: InlineTagContentContext) => void;

	/**
	 * Enter a parse tree produced by `JavadocParser.braceExpression`.
	 * @param ctx the parse tree
	 */
	enterBraceExpression?: (ctx: BraceExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `JavadocParser.braceExpression`.
	 * @param ctx the parse tree
	 */
	exitBraceExpression?: (ctx: BraceExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `JavadocParser.braceContent`.
	 * @param ctx the parse tree
	 */
	enterBraceContent?: (ctx: BraceContentContext) => void;
	/**
	 * Exit a parse tree produced by `JavadocParser.braceContent`.
	 * @param ctx the parse tree
	 */
	exitBraceContent?: (ctx: BraceContentContext) => void;

	/**
	 * Enter a parse tree produced by `JavadocParser.braceText`.
	 * @param ctx the parse tree
	 */
	enterBraceText?: (ctx: BraceTextContext) => void;
	/**
	 * Exit a parse tree produced by `JavadocParser.braceText`.
	 * @param ctx the parse tree
	 */
	exitBraceText?: (ctx: BraceTextContext) => void;
}

