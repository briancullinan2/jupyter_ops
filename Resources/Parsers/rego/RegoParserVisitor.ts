// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/rego/RegoParser.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { RootContext } from "./RegoParser";
import { StmtContext } from "./RegoParser";
import { RegoPackageContext } from "./RegoParser";
import { ImportDirectiveContext } from "./RegoParser";
import { RegoRulesContext } from "./RegoParser";
import { RuleHeadContext } from "./RegoParser";
import { RuleBodyContext } from "./RegoParser";
import { RuleExtContext } from "./RegoParser";
import { RegoElseContext } from "./RegoParser";
import { RegoBodyContext } from "./RegoParser";
import { NonEmptyBraceEnclosedBodyContext } from "./RegoParser";
import { QueryContext } from "./RegoParser";
import { LiteralContext } from "./RegoParser";
import { LiteralExprContext } from "./RegoParser";
import { WithKeywordContext } from "./RegoParser";
import { FunctionCallContext } from "./RegoParser";
import { ExprTermPairContext } from "./RegoParser";
import { TermPairContext } from "./RegoParser";
import { ExprTermPairListContext } from "./RegoParser";
import { ExprTermContext } from "./RegoParser";
import { ExprTermListContext } from "./RegoParser";
import { RelationExprContext } from "./RegoParser";
import { BitwiseOrExprContext } from "./RegoParser";
import { BitwiseAndExprContext } from "./RegoParser";
import { ArithExprContext } from "./RegoParser";
import { FactorExprContext } from "./RegoParser";
import { TermContext } from "./RegoParser";
import { ArrayComprehensionContext } from "./RegoParser";
import { SetComprehensionContext } from "./RegoParser";
import { ObjectComprehensionContext } from "./RegoParser";
import { ObjectContext } from "./RegoParser";
import { ObjectItemContext } from "./RegoParser";
import { ArrayContext } from "./RegoParser";
import { SetContext } from "./RegoParser";
import { EmptySetContext } from "./RegoParser";
import { NonEmptySetContext } from "./RegoParser";
import { RefContext } from "./RegoParser";
import { RefOperandContext } from "./RegoParser";
import { RefOperandDotContext } from "./RegoParser";
import { RefOperandCanonicalContext } from "./RegoParser";
import { ScalarContext } from "./RegoParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `RegoParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface RegoParserVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `RegoParser.root`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRoot?: (ctx: RootContext) => Result;

	/**
	 * Visit a parse tree produced by `RegoParser.stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStmt?: (ctx: StmtContext) => Result;

	/**
	 * Visit a parse tree produced by `RegoParser.regoPackage`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRegoPackage?: (ctx: RegoPackageContext) => Result;

	/**
	 * Visit a parse tree produced by `RegoParser.importDirective`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImportDirective?: (ctx: ImportDirectiveContext) => Result;

	/**
	 * Visit a parse tree produced by `RegoParser.regoRules`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRegoRules?: (ctx: RegoRulesContext) => Result;

	/**
	 * Visit a parse tree produced by `RegoParser.ruleHead`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRuleHead?: (ctx: RuleHeadContext) => Result;

	/**
	 * Visit a parse tree produced by `RegoParser.ruleBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRuleBody?: (ctx: RuleBodyContext) => Result;

	/**
	 * Visit a parse tree produced by `RegoParser.ruleExt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRuleExt?: (ctx: RuleExtContext) => Result;

	/**
	 * Visit a parse tree produced by `RegoParser.regoElse`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRegoElse?: (ctx: RegoElseContext) => Result;

	/**
	 * Visit a parse tree produced by `RegoParser.regoBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRegoBody?: (ctx: RegoBodyContext) => Result;

	/**
	 * Visit a parse tree produced by `RegoParser.nonEmptyBraceEnclosedBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNonEmptyBraceEnclosedBody?: (ctx: NonEmptyBraceEnclosedBodyContext) => Result;

	/**
	 * Visit a parse tree produced by `RegoParser.query`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQuery?: (ctx: QueryContext) => Result;

	/**
	 * Visit a parse tree produced by `RegoParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiteral?: (ctx: LiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `RegoParser.literalExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiteralExpr?: (ctx: LiteralExprContext) => Result;

	/**
	 * Visit a parse tree produced by `RegoParser.withKeyword`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWithKeyword?: (ctx: WithKeywordContext) => Result;

	/**
	 * Visit a parse tree produced by `RegoParser.functionCall`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionCall?: (ctx: FunctionCallContext) => Result;

	/**
	 * Visit a parse tree produced by `RegoParser.exprTermPair`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExprTermPair?: (ctx: ExprTermPairContext) => Result;

	/**
	 * Visit a parse tree produced by `RegoParser.termPair`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTermPair?: (ctx: TermPairContext) => Result;

	/**
	 * Visit a parse tree produced by `RegoParser.exprTermPairList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExprTermPairList?: (ctx: ExprTermPairListContext) => Result;

	/**
	 * Visit a parse tree produced by `RegoParser.exprTerm`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExprTerm?: (ctx: ExprTermContext) => Result;

	/**
	 * Visit a parse tree produced by `RegoParser.exprTermList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExprTermList?: (ctx: ExprTermListContext) => Result;

	/**
	 * Visit a parse tree produced by `RegoParser.relationExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRelationExpr?: (ctx: RelationExprContext) => Result;

	/**
	 * Visit a parse tree produced by `RegoParser.bitwiseOrExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBitwiseOrExpr?: (ctx: BitwiseOrExprContext) => Result;

	/**
	 * Visit a parse tree produced by `RegoParser.bitwiseAndExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBitwiseAndExpr?: (ctx: BitwiseAndExprContext) => Result;

	/**
	 * Visit a parse tree produced by `RegoParser.arithExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArithExpr?: (ctx: ArithExprContext) => Result;

	/**
	 * Visit a parse tree produced by `RegoParser.factorExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFactorExpr?: (ctx: FactorExprContext) => Result;

	/**
	 * Visit a parse tree produced by `RegoParser.term`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTerm?: (ctx: TermContext) => Result;

	/**
	 * Visit a parse tree produced by `RegoParser.arrayComprehension`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrayComprehension?: (ctx: ArrayComprehensionContext) => Result;

	/**
	 * Visit a parse tree produced by `RegoParser.setComprehension`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetComprehension?: (ctx: SetComprehensionContext) => Result;

	/**
	 * Visit a parse tree produced by `RegoParser.objectComprehension`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitObjectComprehension?: (ctx: ObjectComprehensionContext) => Result;

	/**
	 * Visit a parse tree produced by `RegoParser.object`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitObject?: (ctx: ObjectContext) => Result;

	/**
	 * Visit a parse tree produced by `RegoParser.objectItem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitObjectItem?: (ctx: ObjectItemContext) => Result;

	/**
	 * Visit a parse tree produced by `RegoParser.array`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArray?: (ctx: ArrayContext) => Result;

	/**
	 * Visit a parse tree produced by `RegoParser.set`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSet?: (ctx: SetContext) => Result;

	/**
	 * Visit a parse tree produced by `RegoParser.emptySet`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEmptySet?: (ctx: EmptySetContext) => Result;

	/**
	 * Visit a parse tree produced by `RegoParser.nonEmptySet`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNonEmptySet?: (ctx: NonEmptySetContext) => Result;

	/**
	 * Visit a parse tree produced by `RegoParser.ref`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRef?: (ctx: RefContext) => Result;

	/**
	 * Visit a parse tree produced by `RegoParser.refOperand`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRefOperand?: (ctx: RefOperandContext) => Result;

	/**
	 * Visit a parse tree produced by `RegoParser.refOperandDot`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRefOperandDot?: (ctx: RefOperandDotContext) => Result;

	/**
	 * Visit a parse tree produced by `RegoParser.refOperandCanonical`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRefOperandCanonical?: (ctx: RefOperandCanonicalContext) => Result;

	/**
	 * Visit a parse tree produced by `RegoParser.scalar`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitScalar?: (ctx: ScalarContext) => Result;
}

