// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/restructuredtext/ReStructuredText.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

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
 * This interface defines a complete listener for a parse tree produced by
 * `ReStructuredTextParser`.
 */
export interface ReStructuredTextListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `ReStructuredTextParser.parse`.
	 * @param ctx the parse tree
	 */
	enterParse?: (ctx: ParseContext) => void;
	/**
	 * Exit a parse tree produced by `ReStructuredTextParser.parse`.
	 * @param ctx the parse tree
	 */
	exitParse?: (ctx: ParseContext) => void;

	/**
	 * Enter a parse tree produced by `ReStructuredTextParser.element`.
	 * @param ctx the parse tree
	 */
	enterElement?: (ctx: ElementContext) => void;
	/**
	 * Exit a parse tree produced by `ReStructuredTextParser.element`.
	 * @param ctx the parse tree
	 */
	exitElement?: (ctx: ElementContext) => void;

	/**
	 * Enter a parse tree produced by `ReStructuredTextParser.sectionElement`.
	 * @param ctx the parse tree
	 */
	enterSectionElement?: (ctx: SectionElementContext) => void;
	/**
	 * Exit a parse tree produced by `ReStructuredTextParser.sectionElement`.
	 * @param ctx the parse tree
	 */
	exitSectionElement?: (ctx: SectionElementContext) => void;

	/**
	 * Enter a parse tree produced by `ReStructuredTextParser.comment`.
	 * @param ctx the parse tree
	 */
	enterComment?: (ctx: CommentContext) => void;
	/**
	 * Exit a parse tree produced by `ReStructuredTextParser.comment`.
	 * @param ctx the parse tree
	 */
	exitComment?: (ctx: CommentContext) => void;

	/**
	 * Enter a parse tree produced by `ReStructuredTextParser.commentParagraphs`.
	 * @param ctx the parse tree
	 */
	enterCommentParagraphs?: (ctx: CommentParagraphsContext) => void;
	/**
	 * Exit a parse tree produced by `ReStructuredTextParser.commentParagraphs`.
	 * @param ctx the parse tree
	 */
	exitCommentParagraphs?: (ctx: CommentParagraphsContext) => void;

	/**
	 * Enter a parse tree produced by `ReStructuredTextParser.commentRest`.
	 * @param ctx the parse tree
	 */
	enterCommentRest?: (ctx: CommentRestContext) => void;
	/**
	 * Exit a parse tree produced by `ReStructuredTextParser.commentRest`.
	 * @param ctx the parse tree
	 */
	exitCommentRest?: (ctx: CommentRestContext) => void;

	/**
	 * Enter a parse tree produced by `ReStructuredTextParser.commentParagraph`.
	 * @param ctx the parse tree
	 */
	enterCommentParagraph?: (ctx: CommentParagraphContext) => void;
	/**
	 * Exit a parse tree produced by `ReStructuredTextParser.commentParagraph`.
	 * @param ctx the parse tree
	 */
	exitCommentParagraph?: (ctx: CommentParagraphContext) => void;

	/**
	 * Enter a parse tree produced by `ReStructuredTextParser.commentLineNoBreak`.
	 * @param ctx the parse tree
	 */
	enterCommentLineNoBreak?: (ctx: CommentLineNoBreakContext) => void;
	/**
	 * Exit a parse tree produced by `ReStructuredTextParser.commentLineNoBreak`.
	 * @param ctx the parse tree
	 */
	exitCommentLineNoBreak?: (ctx: CommentLineNoBreakContext) => void;

	/**
	 * Enter a parse tree produced by `ReStructuredTextParser.commentLine`.
	 * @param ctx the parse tree
	 */
	enterCommentLine?: (ctx: CommentLineContext) => void;
	/**
	 * Exit a parse tree produced by `ReStructuredTextParser.commentLine`.
	 * @param ctx the parse tree
	 */
	exitCommentLine?: (ctx: CommentLineContext) => void;

	/**
	 * Enter a parse tree produced by `ReStructuredTextParser.commentLineAtoms`.
	 * @param ctx the parse tree
	 */
	enterCommentLineAtoms?: (ctx: CommentLineAtomsContext) => void;
	/**
	 * Exit a parse tree produced by `ReStructuredTextParser.commentLineAtoms`.
	 * @param ctx the parse tree
	 */
	exitCommentLineAtoms?: (ctx: CommentLineAtomsContext) => void;

	/**
	 * Enter a parse tree produced by `ReStructuredTextParser.paragraph`.
	 * @param ctx the parse tree
	 */
	enterParagraph?: (ctx: ParagraphContext) => void;
	/**
	 * Exit a parse tree produced by `ReStructuredTextParser.paragraph`.
	 * @param ctx the parse tree
	 */
	exitParagraph?: (ctx: ParagraphContext) => void;

	/**
	 * Enter a parse tree produced by `ReStructuredTextParser.section`.
	 * @param ctx the parse tree
	 */
	enterSection?: (ctx: SectionContext) => void;
	/**
	 * Exit a parse tree produced by `ReStructuredTextParser.section`.
	 * @param ctx the parse tree
	 */
	exitSection?: (ctx: SectionContext) => void;

	/**
	 * Enter a parse tree produced by `ReStructuredTextParser.title`.
	 * @param ctx the parse tree
	 */
	enterTitle?: (ctx: TitleContext) => void;
	/**
	 * Exit a parse tree produced by `ReStructuredTextParser.title`.
	 * @param ctx the parse tree
	 */
	exitTitle?: (ctx: TitleContext) => void;

	/**
	 * Enter a parse tree produced by `ReStructuredTextParser.lineBlock`.
	 * @param ctx the parse tree
	 */
	enterLineBlock?: (ctx: LineBlockContext) => void;
	/**
	 * Exit a parse tree produced by `ReStructuredTextParser.lineBlock`.
	 * @param ctx the parse tree
	 */
	exitLineBlock?: (ctx: LineBlockContext) => void;

	/**
	 * Enter a parse tree produced by `ReStructuredTextParser.lineBlockLine`.
	 * @param ctx the parse tree
	 */
	enterLineBlockLine?: (ctx: LineBlockLineContext) => void;
	/**
	 * Exit a parse tree produced by `ReStructuredTextParser.lineBlockLine`.
	 * @param ctx the parse tree
	 */
	exitLineBlockLine?: (ctx: LineBlockLineContext) => void;

	/**
	 * Enter a parse tree produced by `ReStructuredTextParser.listItemBullet`.
	 * @param ctx the parse tree
	 */
	enterListItemBullet?: (ctx: ListItemBulletContext) => void;
	/**
	 * Exit a parse tree produced by `ReStructuredTextParser.listItemBullet`.
	 * @param ctx the parse tree
	 */
	exitListItemBullet?: (ctx: ListItemBulletContext) => void;

	/**
	 * Enter a parse tree produced by `ReStructuredTextParser.bulletCrossLine`.
	 * @param ctx the parse tree
	 */
	enterBulletCrossLine?: (ctx: BulletCrossLineContext) => void;
	/**
	 * Exit a parse tree produced by `ReStructuredTextParser.bulletCrossLine`.
	 * @param ctx the parse tree
	 */
	exitBulletCrossLine?: (ctx: BulletCrossLineContext) => void;

	/**
	 * Enter a parse tree produced by `ReStructuredTextParser.bulletSimple`.
	 * @param ctx the parse tree
	 */
	enterBulletSimple?: (ctx: BulletSimpleContext) => void;
	/**
	 * Exit a parse tree produced by `ReStructuredTextParser.bulletSimple`.
	 * @param ctx the parse tree
	 */
	exitBulletSimple?: (ctx: BulletSimpleContext) => void;

	/**
	 * Enter a parse tree produced by `ReStructuredTextParser.bullet`.
	 * @param ctx the parse tree
	 */
	enterBullet?: (ctx: BulletContext) => void;
	/**
	 * Exit a parse tree produced by `ReStructuredTextParser.bullet`.
	 * @param ctx the parse tree
	 */
	exitBullet?: (ctx: BulletContext) => void;

	/**
	 * Enter a parse tree produced by `ReStructuredTextParser.listItemEnumerated`.
	 * @param ctx the parse tree
	 */
	enterListItemEnumerated?: (ctx: ListItemEnumeratedContext) => void;
	/**
	 * Exit a parse tree produced by `ReStructuredTextParser.listItemEnumerated`.
	 * @param ctx the parse tree
	 */
	exitListItemEnumerated?: (ctx: ListItemEnumeratedContext) => void;

	/**
	 * Enter a parse tree produced by `ReStructuredTextParser.paragraphNoBreak`.
	 * @param ctx the parse tree
	 */
	enterParagraphNoBreak?: (ctx: ParagraphNoBreakContext) => void;
	/**
	 * Exit a parse tree produced by `ReStructuredTextParser.paragraphNoBreak`.
	 * @param ctx the parse tree
	 */
	exitParagraphNoBreak?: (ctx: ParagraphNoBreakContext) => void;

	/**
	 * Enter a parse tree produced by `ReStructuredTextParser.lineNoBreak`.
	 * @param ctx the parse tree
	 */
	enterLineNoBreak?: (ctx: LineNoBreakContext) => void;
	/**
	 * Exit a parse tree produced by `ReStructuredTextParser.lineNoBreak`.
	 * @param ctx the parse tree
	 */
	exitLineNoBreak?: (ctx: LineNoBreakContext) => void;

	/**
	 * Enter a parse tree produced by `ReStructuredTextParser.lines`.
	 * @param ctx the parse tree
	 */
	enterLines?: (ctx: LinesContext) => void;
	/**
	 * Exit a parse tree produced by `ReStructuredTextParser.lines`.
	 * @param ctx the parse tree
	 */
	exitLines?: (ctx: LinesContext) => void;

	/**
	 * Enter a parse tree produced by `ReStructuredTextParser.linesNormal`.
	 * @param ctx the parse tree
	 */
	enterLinesNormal?: (ctx: LinesNormalContext) => void;
	/**
	 * Exit a parse tree produced by `ReStructuredTextParser.linesNormal`.
	 * @param ctx the parse tree
	 */
	exitLinesNormal?: (ctx: LinesNormalContext) => void;

	/**
	 * Enter a parse tree produced by `ReStructuredTextParser.linesStar`.
	 * @param ctx the parse tree
	 */
	enterLinesStar?: (ctx: LinesStarContext) => void;
	/**
	 * Exit a parse tree produced by `ReStructuredTextParser.linesStar`.
	 * @param ctx the parse tree
	 */
	exitLinesStar?: (ctx: LinesStarContext) => void;

	/**
	 * Enter a parse tree produced by `ReStructuredTextParser.lineNormal`.
	 * @param ctx the parse tree
	 */
	enterLineNormal?: (ctx: LineNormalContext) => void;
	/**
	 * Exit a parse tree produced by `ReStructuredTextParser.lineNormal`.
	 * @param ctx the parse tree
	 */
	exitLineNormal?: (ctx: LineNormalContext) => void;

	/**
	 * Enter a parse tree produced by `ReStructuredTextParser.lineStar`.
	 * @param ctx the parse tree
	 */
	enterLineStar?: (ctx: LineStarContext) => void;
	/**
	 * Exit a parse tree produced by `ReStructuredTextParser.lineStar`.
	 * @param ctx the parse tree
	 */
	exitLineStar?: (ctx: LineStarContext) => void;

	/**
	 * Enter a parse tree produced by `ReStructuredTextParser.lineSpecial`.
	 * @param ctx the parse tree
	 */
	enterLineSpecial?: (ctx: LineSpecialContext) => void;
	/**
	 * Exit a parse tree produced by `ReStructuredTextParser.lineSpecial`.
	 * @param ctx the parse tree
	 */
	exitLineSpecial?: (ctx: LineSpecialContext) => void;

	/**
	 * Enter a parse tree produced by `ReStructuredTextParser.empty_line`.
	 * @param ctx the parse tree
	 */
	enterEmpty_line?: (ctx: Empty_lineContext) => void;
	/**
	 * Exit a parse tree produced by `ReStructuredTextParser.empty_line`.
	 * @param ctx the parse tree
	 */
	exitEmpty_line?: (ctx: Empty_lineContext) => void;

	/**
	 * Enter a parse tree produced by `ReStructuredTextParser.indentation`.
	 * @param ctx the parse tree
	 */
	enterIndentation?: (ctx: IndentationContext) => void;
	/**
	 * Exit a parse tree produced by `ReStructuredTextParser.indentation`.
	 * @param ctx the parse tree
	 */
	exitIndentation?: (ctx: IndentationContext) => void;

	/**
	 * Enter a parse tree produced by `ReStructuredTextParser.spanLineStartNoStar`.
	 * @param ctx the parse tree
	 */
	enterSpanLineStartNoStar?: (ctx: SpanLineStartNoStarContext) => void;
	/**
	 * Exit a parse tree produced by `ReStructuredTextParser.spanLineStartNoStar`.
	 * @param ctx the parse tree
	 */
	exitSpanLineStartNoStar?: (ctx: SpanLineStartNoStarContext) => void;

	/**
	 * Enter a parse tree produced by `ReStructuredTextParser.textLineStart`.
	 * @param ctx the parse tree
	 */
	enterTextLineStart?: (ctx: TextLineStartContext) => void;
	/**
	 * Exit a parse tree produced by `ReStructuredTextParser.textLineStart`.
	 * @param ctx the parse tree
	 */
	exitTextLineStart?: (ctx: TextLineStartContext) => void;

	/**
	 * Enter a parse tree produced by `ReStructuredTextParser.lineStart_fragment`.
	 * @param ctx the parse tree
	 */
	enterLineStart_fragment?: (ctx: LineStart_fragmentContext) => void;
	/**
	 * Exit a parse tree produced by `ReStructuredTextParser.lineStart_fragment`.
	 * @param ctx the parse tree
	 */
	exitLineStart_fragment?: (ctx: LineStart_fragmentContext) => void;

	/**
	 * Enter a parse tree produced by `ReStructuredTextParser.text`.
	 * @param ctx the parse tree
	 */
	enterText?: (ctx: TextContext) => void;
	/**
	 * Exit a parse tree produced by `ReStructuredTextParser.text`.
	 * @param ctx the parse tree
	 */
	exitText?: (ctx: TextContext) => void;

	/**
	 * Enter a parse tree produced by `ReStructuredTextParser.textStart`.
	 * @param ctx the parse tree
	 */
	enterTextStart?: (ctx: TextStartContext) => void;
	/**
	 * Exit a parse tree produced by `ReStructuredTextParser.textStart`.
	 * @param ctx the parse tree
	 */
	exitTextStart?: (ctx: TextStartContext) => void;

	/**
	 * Enter a parse tree produced by `ReStructuredTextParser.forcedText`.
	 * @param ctx the parse tree
	 */
	enterForcedText?: (ctx: ForcedTextContext) => void;
	/**
	 * Exit a parse tree produced by `ReStructuredTextParser.forcedText`.
	 * @param ctx the parse tree
	 */
	exitForcedText?: (ctx: ForcedTextContext) => void;

	/**
	 * Enter a parse tree produced by `ReStructuredTextParser.spanNoStar`.
	 * @param ctx the parse tree
	 */
	enterSpanNoStar?: (ctx: SpanNoStarContext) => void;
	/**
	 * Exit a parse tree produced by `ReStructuredTextParser.spanNoStar`.
	 * @param ctx the parse tree
	 */
	exitSpanNoStar?: (ctx: SpanNoStarContext) => void;

	/**
	 * Enter a parse tree produced by `ReStructuredTextParser.span`.
	 * @param ctx the parse tree
	 */
	enterSpan?: (ctx: SpanContext) => void;
	/**
	 * Exit a parse tree produced by `ReStructuredTextParser.span`.
	 * @param ctx the parse tree
	 */
	exitSpan?: (ctx: SpanContext) => void;

	/**
	 * Enter a parse tree produced by `ReStructuredTextParser.quotedLiteral`.
	 * @param ctx the parse tree
	 */
	enterQuotedLiteral?: (ctx: QuotedLiteralContext) => void;
	/**
	 * Exit a parse tree produced by `ReStructuredTextParser.quotedLiteral`.
	 * @param ctx the parse tree
	 */
	exitQuotedLiteral?: (ctx: QuotedLiteralContext) => void;

	/**
	 * Enter a parse tree produced by `ReStructuredTextParser.text_fragment_start`.
	 * @param ctx the parse tree
	 */
	enterText_fragment_start?: (ctx: Text_fragment_startContext) => void;
	/**
	 * Exit a parse tree produced by `ReStructuredTextParser.text_fragment_start`.
	 * @param ctx the parse tree
	 */
	exitText_fragment_start?: (ctx: Text_fragment_startContext) => void;

	/**
	 * Enter a parse tree produced by `ReStructuredTextParser.text_fragment`.
	 * @param ctx the parse tree
	 */
	enterText_fragment?: (ctx: Text_fragmentContext) => void;
	/**
	 * Exit a parse tree produced by `ReStructuredTextParser.text_fragment`.
	 * @param ctx the parse tree
	 */
	exitText_fragment?: (ctx: Text_fragmentContext) => void;

	/**
	 * Enter a parse tree produced by `ReStructuredTextParser.starText`.
	 * @param ctx the parse tree
	 */
	enterStarText?: (ctx: StarTextContext) => void;
	/**
	 * Exit a parse tree produced by `ReStructuredTextParser.starText`.
	 * @param ctx the parse tree
	 */
	exitStarText?: (ctx: StarTextContext) => void;

	/**
	 * Enter a parse tree produced by `ReStructuredTextParser.starAtoms`.
	 * @param ctx the parse tree
	 */
	enterStarAtoms?: (ctx: StarAtomsContext) => void;
	/**
	 * Exit a parse tree produced by `ReStructuredTextParser.starAtoms`.
	 * @param ctx the parse tree
	 */
	exitStarAtoms?: (ctx: StarAtomsContext) => void;

	/**
	 * Enter a parse tree produced by `ReStructuredTextParser.starNoSpace`.
	 * @param ctx the parse tree
	 */
	enterStarNoSpace?: (ctx: StarNoSpaceContext) => void;
	/**
	 * Exit a parse tree produced by `ReStructuredTextParser.starNoSpace`.
	 * @param ctx the parse tree
	 */
	exitStarNoSpace?: (ctx: StarNoSpaceContext) => void;

	/**
	 * Enter a parse tree produced by `ReStructuredTextParser.starAtom`.
	 * @param ctx the parse tree
	 */
	enterStarAtom?: (ctx: StarAtomContext) => void;
	/**
	 * Exit a parse tree produced by `ReStructuredTextParser.starAtom`.
	 * @param ctx the parse tree
	 */
	exitStarAtom?: (ctx: StarAtomContext) => void;

	/**
	 * Enter a parse tree produced by `ReStructuredTextParser.backTickText`.
	 * @param ctx the parse tree
	 */
	enterBackTickText?: (ctx: BackTickTextContext) => void;
	/**
	 * Exit a parse tree produced by `ReStructuredTextParser.backTickText`.
	 * @param ctx the parse tree
	 */
	exitBackTickText?: (ctx: BackTickTextContext) => void;

	/**
	 * Enter a parse tree produced by `ReStructuredTextParser.body`.
	 * @param ctx the parse tree
	 */
	enterBody?: (ctx: BodyContext) => void;
	/**
	 * Exit a parse tree produced by `ReStructuredTextParser.body`.
	 * @param ctx the parse tree
	 */
	exitBody?: (ctx: BodyContext) => void;

	/**
	 * Enter a parse tree produced by `ReStructuredTextParser.backTickAtoms`.
	 * @param ctx the parse tree
	 */
	enterBackTickAtoms?: (ctx: BackTickAtomsContext) => void;
	/**
	 * Exit a parse tree produced by `ReStructuredTextParser.backTickAtoms`.
	 * @param ctx the parse tree
	 */
	exitBackTickAtoms?: (ctx: BackTickAtomsContext) => void;

	/**
	 * Enter a parse tree produced by `ReStructuredTextParser.backTickNoSpace`.
	 * @param ctx the parse tree
	 */
	enterBackTickNoSpace?: (ctx: BackTickNoSpaceContext) => void;
	/**
	 * Exit a parse tree produced by `ReStructuredTextParser.backTickNoSpace`.
	 * @param ctx the parse tree
	 */
	exitBackTickNoSpace?: (ctx: BackTickNoSpaceContext) => void;

	/**
	 * Enter a parse tree produced by `ReStructuredTextParser.backTickAtom`.
	 * @param ctx the parse tree
	 */
	enterBackTickAtom?: (ctx: BackTickAtomContext) => void;
	/**
	 * Exit a parse tree produced by `ReStructuredTextParser.backTickAtom`.
	 * @param ctx the parse tree
	 */
	exitBackTickAtom?: (ctx: BackTickAtomContext) => void;

	/**
	 * Enter a parse tree produced by `ReStructuredTextParser.reference`.
	 * @param ctx the parse tree
	 */
	enterReference?: (ctx: ReferenceContext) => void;
	/**
	 * Exit a parse tree produced by `ReStructuredTextParser.reference`.
	 * @param ctx the parse tree
	 */
	exitReference?: (ctx: ReferenceContext) => void;

	/**
	 * Enter a parse tree produced by `ReStructuredTextParser.referenceIn`.
	 * @param ctx the parse tree
	 */
	enterReferenceIn?: (ctx: ReferenceInContext) => void;
	/**
	 * Exit a parse tree produced by `ReStructuredTextParser.referenceIn`.
	 * @param ctx the parse tree
	 */
	exitReferenceIn?: (ctx: ReferenceInContext) => void;

	/**
	 * Enter a parse tree produced by `ReStructuredTextParser.hyperlinkTarget`.
	 * @param ctx the parse tree
	 */
	enterHyperlinkTarget?: (ctx: HyperlinkTargetContext) => void;
	/**
	 * Exit a parse tree produced by `ReStructuredTextParser.hyperlinkTarget`.
	 * @param ctx the parse tree
	 */
	exitHyperlinkTarget?: (ctx: HyperlinkTargetContext) => void;

	/**
	 * Enter a parse tree produced by `ReStructuredTextParser.hyperlink`.
	 * @param ctx the parse tree
	 */
	enterHyperlink?: (ctx: HyperlinkContext) => void;
	/**
	 * Exit a parse tree produced by `ReStructuredTextParser.hyperlink`.
	 * @param ctx the parse tree
	 */
	exitHyperlink?: (ctx: HyperlinkContext) => void;

	/**
	 * Enter a parse tree produced by `ReStructuredTextParser.hyperlinkDoc`.
	 * @param ctx the parse tree
	 */
	enterHyperlinkDoc?: (ctx: HyperlinkDocContext) => void;
	/**
	 * Exit a parse tree produced by `ReStructuredTextParser.hyperlinkDoc`.
	 * @param ctx the parse tree
	 */
	exitHyperlinkDoc?: (ctx: HyperlinkDocContext) => void;

	/**
	 * Enter a parse tree produced by `ReStructuredTextParser.url`.
	 * @param ctx the parse tree
	 */
	enterUrl?: (ctx: UrlContext) => void;
	/**
	 * Exit a parse tree produced by `ReStructuredTextParser.url`.
	 * @param ctx the parse tree
	 */
	exitUrl?: (ctx: UrlContext) => void;

	/**
	 * Enter a parse tree produced by `ReStructuredTextParser.urlAtom`.
	 * @param ctx the parse tree
	 */
	enterUrlAtom?: (ctx: UrlAtomContext) => void;
	/**
	 * Exit a parse tree produced by `ReStructuredTextParser.urlAtom`.
	 * @param ctx the parse tree
	 */
	exitUrlAtom?: (ctx: UrlAtomContext) => void;

	/**
	 * Enter a parse tree produced by `ReStructuredTextParser.hyperlinkAtom`.
	 * @param ctx the parse tree
	 */
	enterHyperlinkAtom?: (ctx: HyperlinkAtomContext) => void;
	/**
	 * Exit a parse tree produced by `ReStructuredTextParser.hyperlinkAtom`.
	 * @param ctx the parse tree
	 */
	exitHyperlinkAtom?: (ctx: HyperlinkAtomContext) => void;

	/**
	 * Enter a parse tree produced by `ReStructuredTextParser.separator`.
	 * @param ctx the parse tree
	 */
	enterSeparator?: (ctx: SeparatorContext) => void;
	/**
	 * Exit a parse tree produced by `ReStructuredTextParser.separator`.
	 * @param ctx the parse tree
	 */
	exitSeparator?: (ctx: SeparatorContext) => void;
}

