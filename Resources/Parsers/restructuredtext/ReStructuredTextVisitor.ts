// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/restructuredtext/ReStructuredText.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { ParseContext } from "./ReStructuredTextParser";
import { ElementContext } from "./ReStructuredTextParser";
import { SectionElementContext } from "./ReStructuredTextParser";
import { CommentContext } from "./ReStructuredTextParser";
import { CommentParagraphsContext } from "./ReStructuredTextParser";
import { CommentRestContext } from "./ReStructuredTextParser";
import { CommentParagraphContext } from "./ReStructuredTextParser";
import { CommentLineNoBreakContext } from "./ReStructuredTextParser";
import { CommentLineContext } from "./ReStructuredTextParser";
import { CommentLineAtomsContext } from "./ReStructuredTextParser";
import { ParagraphContext } from "./ReStructuredTextParser";
import { SectionContext } from "./ReStructuredTextParser";
import { TitleContext } from "./ReStructuredTextParser";
import { LineBlockContext } from "./ReStructuredTextParser";
import { LineBlockLineContext } from "./ReStructuredTextParser";
import { ListItemBulletContext } from "./ReStructuredTextParser";
import { BulletCrossLineContext } from "./ReStructuredTextParser";
import { BulletSimpleContext } from "./ReStructuredTextParser";
import { BulletContext } from "./ReStructuredTextParser";
import { ListItemEnumeratedContext } from "./ReStructuredTextParser";
import { ParagraphNoBreakContext } from "./ReStructuredTextParser";
import { LineNoBreakContext } from "./ReStructuredTextParser";
import { LinesContext } from "./ReStructuredTextParser";
import { LinesNormalContext } from "./ReStructuredTextParser";
import { LinesStarContext } from "./ReStructuredTextParser";
import { LineNormalContext } from "./ReStructuredTextParser";
import { LineStarContext } from "./ReStructuredTextParser";
import { LineSpecialContext } from "./ReStructuredTextParser";
import { Empty_lineContext } from "./ReStructuredTextParser";
import { IndentationContext } from "./ReStructuredTextParser";
import { SpanLineStartNoStarContext } from "./ReStructuredTextParser";
import { TextLineStartContext } from "./ReStructuredTextParser";
import { LineStart_fragmentContext } from "./ReStructuredTextParser";
import { TextContext } from "./ReStructuredTextParser";
import { TextStartContext } from "./ReStructuredTextParser";
import { ForcedTextContext } from "./ReStructuredTextParser";
import { SpanNoStarContext } from "./ReStructuredTextParser";
import { SpanContext } from "./ReStructuredTextParser";
import { QuotedLiteralContext } from "./ReStructuredTextParser";
import { Text_fragment_startContext } from "./ReStructuredTextParser";
import { Text_fragmentContext } from "./ReStructuredTextParser";
import { StarTextContext } from "./ReStructuredTextParser";
import { StarAtomsContext } from "./ReStructuredTextParser";
import { StarNoSpaceContext } from "./ReStructuredTextParser";
import { StarAtomContext } from "./ReStructuredTextParser";
import { BackTickTextContext } from "./ReStructuredTextParser";
import { BodyContext } from "./ReStructuredTextParser";
import { BackTickAtomsContext } from "./ReStructuredTextParser";
import { BackTickNoSpaceContext } from "./ReStructuredTextParser";
import { BackTickAtomContext } from "./ReStructuredTextParser";
import { ReferenceContext } from "./ReStructuredTextParser";
import { ReferenceInContext } from "./ReStructuredTextParser";
import { HyperlinkTargetContext } from "./ReStructuredTextParser";
import { HyperlinkContext } from "./ReStructuredTextParser";
import { HyperlinkDocContext } from "./ReStructuredTextParser";
import { UrlContext } from "./ReStructuredTextParser";
import { UrlAtomContext } from "./ReStructuredTextParser";
import { HyperlinkAtomContext } from "./ReStructuredTextParser";
import { SeparatorContext } from "./ReStructuredTextParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `ReStructuredTextParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface ReStructuredTextVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `ReStructuredTextParser.parse`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParse?: (ctx: ParseContext) => Result;

	/**
	 * Visit a parse tree produced by `ReStructuredTextParser.element`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElement?: (ctx: ElementContext) => Result;

	/**
	 * Visit a parse tree produced by `ReStructuredTextParser.sectionElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSectionElement?: (ctx: SectionElementContext) => Result;

	/**
	 * Visit a parse tree produced by `ReStructuredTextParser.comment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComment?: (ctx: CommentContext) => Result;

	/**
	 * Visit a parse tree produced by `ReStructuredTextParser.commentParagraphs`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCommentParagraphs?: (ctx: CommentParagraphsContext) => Result;

	/**
	 * Visit a parse tree produced by `ReStructuredTextParser.commentRest`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCommentRest?: (ctx: CommentRestContext) => Result;

	/**
	 * Visit a parse tree produced by `ReStructuredTextParser.commentParagraph`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCommentParagraph?: (ctx: CommentParagraphContext) => Result;

	/**
	 * Visit a parse tree produced by `ReStructuredTextParser.commentLineNoBreak`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCommentLineNoBreak?: (ctx: CommentLineNoBreakContext) => Result;

	/**
	 * Visit a parse tree produced by `ReStructuredTextParser.commentLine`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCommentLine?: (ctx: CommentLineContext) => Result;

	/**
	 * Visit a parse tree produced by `ReStructuredTextParser.commentLineAtoms`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCommentLineAtoms?: (ctx: CommentLineAtomsContext) => Result;

	/**
	 * Visit a parse tree produced by `ReStructuredTextParser.paragraph`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParagraph?: (ctx: ParagraphContext) => Result;

	/**
	 * Visit a parse tree produced by `ReStructuredTextParser.section`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSection?: (ctx: SectionContext) => Result;

	/**
	 * Visit a parse tree produced by `ReStructuredTextParser.title`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTitle?: (ctx: TitleContext) => Result;

	/**
	 * Visit a parse tree produced by `ReStructuredTextParser.lineBlock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLineBlock?: (ctx: LineBlockContext) => Result;

	/**
	 * Visit a parse tree produced by `ReStructuredTextParser.lineBlockLine`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLineBlockLine?: (ctx: LineBlockLineContext) => Result;

	/**
	 * Visit a parse tree produced by `ReStructuredTextParser.listItemBullet`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitListItemBullet?: (ctx: ListItemBulletContext) => Result;

	/**
	 * Visit a parse tree produced by `ReStructuredTextParser.bulletCrossLine`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBulletCrossLine?: (ctx: BulletCrossLineContext) => Result;

	/**
	 * Visit a parse tree produced by `ReStructuredTextParser.bulletSimple`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBulletSimple?: (ctx: BulletSimpleContext) => Result;

	/**
	 * Visit a parse tree produced by `ReStructuredTextParser.bullet`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBullet?: (ctx: BulletContext) => Result;

	/**
	 * Visit a parse tree produced by `ReStructuredTextParser.listItemEnumerated`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitListItemEnumerated?: (ctx: ListItemEnumeratedContext) => Result;

	/**
	 * Visit a parse tree produced by `ReStructuredTextParser.paragraphNoBreak`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParagraphNoBreak?: (ctx: ParagraphNoBreakContext) => Result;

	/**
	 * Visit a parse tree produced by `ReStructuredTextParser.lineNoBreak`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLineNoBreak?: (ctx: LineNoBreakContext) => Result;

	/**
	 * Visit a parse tree produced by `ReStructuredTextParser.lines`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLines?: (ctx: LinesContext) => Result;

	/**
	 * Visit a parse tree produced by `ReStructuredTextParser.linesNormal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLinesNormal?: (ctx: LinesNormalContext) => Result;

	/**
	 * Visit a parse tree produced by `ReStructuredTextParser.linesStar`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLinesStar?: (ctx: LinesStarContext) => Result;

	/**
	 * Visit a parse tree produced by `ReStructuredTextParser.lineNormal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLineNormal?: (ctx: LineNormalContext) => Result;

	/**
	 * Visit a parse tree produced by `ReStructuredTextParser.lineStar`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLineStar?: (ctx: LineStarContext) => Result;

	/**
	 * Visit a parse tree produced by `ReStructuredTextParser.lineSpecial`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLineSpecial?: (ctx: LineSpecialContext) => Result;

	/**
	 * Visit a parse tree produced by `ReStructuredTextParser.empty_line`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEmpty_line?: (ctx: Empty_lineContext) => Result;

	/**
	 * Visit a parse tree produced by `ReStructuredTextParser.indentation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIndentation?: (ctx: IndentationContext) => Result;

	/**
	 * Visit a parse tree produced by `ReStructuredTextParser.spanLineStartNoStar`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSpanLineStartNoStar?: (ctx: SpanLineStartNoStarContext) => Result;

	/**
	 * Visit a parse tree produced by `ReStructuredTextParser.textLineStart`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTextLineStart?: (ctx: TextLineStartContext) => Result;

	/**
	 * Visit a parse tree produced by `ReStructuredTextParser.lineStart_fragment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLineStart_fragment?: (ctx: LineStart_fragmentContext) => Result;

	/**
	 * Visit a parse tree produced by `ReStructuredTextParser.text`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitText?: (ctx: TextContext) => Result;

	/**
	 * Visit a parse tree produced by `ReStructuredTextParser.textStart`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTextStart?: (ctx: TextStartContext) => Result;

	/**
	 * Visit a parse tree produced by `ReStructuredTextParser.forcedText`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForcedText?: (ctx: ForcedTextContext) => Result;

	/**
	 * Visit a parse tree produced by `ReStructuredTextParser.spanNoStar`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSpanNoStar?: (ctx: SpanNoStarContext) => Result;

	/**
	 * Visit a parse tree produced by `ReStructuredTextParser.span`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSpan?: (ctx: SpanContext) => Result;

	/**
	 * Visit a parse tree produced by `ReStructuredTextParser.quotedLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQuotedLiteral?: (ctx: QuotedLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `ReStructuredTextParser.text_fragment_start`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitText_fragment_start?: (ctx: Text_fragment_startContext) => Result;

	/**
	 * Visit a parse tree produced by `ReStructuredTextParser.text_fragment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitText_fragment?: (ctx: Text_fragmentContext) => Result;

	/**
	 * Visit a parse tree produced by `ReStructuredTextParser.starText`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStarText?: (ctx: StarTextContext) => Result;

	/**
	 * Visit a parse tree produced by `ReStructuredTextParser.starAtoms`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStarAtoms?: (ctx: StarAtomsContext) => Result;

	/**
	 * Visit a parse tree produced by `ReStructuredTextParser.starNoSpace`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStarNoSpace?: (ctx: StarNoSpaceContext) => Result;

	/**
	 * Visit a parse tree produced by `ReStructuredTextParser.starAtom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStarAtom?: (ctx: StarAtomContext) => Result;

	/**
	 * Visit a parse tree produced by `ReStructuredTextParser.backTickText`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBackTickText?: (ctx: BackTickTextContext) => Result;

	/**
	 * Visit a parse tree produced by `ReStructuredTextParser.body`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBody?: (ctx: BodyContext) => Result;

	/**
	 * Visit a parse tree produced by `ReStructuredTextParser.backTickAtoms`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBackTickAtoms?: (ctx: BackTickAtomsContext) => Result;

	/**
	 * Visit a parse tree produced by `ReStructuredTextParser.backTickNoSpace`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBackTickNoSpace?: (ctx: BackTickNoSpaceContext) => Result;

	/**
	 * Visit a parse tree produced by `ReStructuredTextParser.backTickAtom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBackTickAtom?: (ctx: BackTickAtomContext) => Result;

	/**
	 * Visit a parse tree produced by `ReStructuredTextParser.reference`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReference?: (ctx: ReferenceContext) => Result;

	/**
	 * Visit a parse tree produced by `ReStructuredTextParser.referenceIn`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReferenceIn?: (ctx: ReferenceInContext) => Result;

	/**
	 * Visit a parse tree produced by `ReStructuredTextParser.hyperlinkTarget`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHyperlinkTarget?: (ctx: HyperlinkTargetContext) => Result;

	/**
	 * Visit a parse tree produced by `ReStructuredTextParser.hyperlink`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHyperlink?: (ctx: HyperlinkContext) => Result;

	/**
	 * Visit a parse tree produced by `ReStructuredTextParser.hyperlinkDoc`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHyperlinkDoc?: (ctx: HyperlinkDocContext) => Result;

	/**
	 * Visit a parse tree produced by `ReStructuredTextParser.url`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUrl?: (ctx: UrlContext) => Result;

	/**
	 * Visit a parse tree produced by `ReStructuredTextParser.urlAtom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUrlAtom?: (ctx: UrlAtomContext) => Result;

	/**
	 * Visit a parse tree produced by `ReStructuredTextParser.hyperlinkAtom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHyperlinkAtom?: (ctx: HyperlinkAtomContext) => Result;

	/**
	 * Visit a parse tree produced by `ReStructuredTextParser.separator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSeparator?: (ctx: SeparatorContext) => Result;
}

