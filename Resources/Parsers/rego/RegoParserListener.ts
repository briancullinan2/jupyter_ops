// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/rego/RegoParser.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

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
 * This interface defines a complete listener for a parse tree produced by
 * `RegoParser`.
 */
export interface RegoParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `RegoParser.root`.
	 * @param ctx the parse tree
	 */
	enterRoot?: (ctx: RootContext) => void;
	/**
	 * Exit a parse tree produced by `RegoParser.root`.
	 * @param ctx the parse tree
	 */
	exitRoot?: (ctx: RootContext) => void;

	/**
	 * Enter a parse tree produced by `RegoParser.stmt`.
	 * @param ctx the parse tree
	 */
	enterStmt?: (ctx: StmtContext) => void;
	/**
	 * Exit a parse tree produced by `RegoParser.stmt`.
	 * @param ctx the parse tree
	 */
	exitStmt?: (ctx: StmtContext) => void;

	/**
	 * Enter a parse tree produced by `RegoParser.regoPackage`.
	 * @param ctx the parse tree
	 */
	enterRegoPackage?: (ctx: RegoPackageContext) => void;
	/**
	 * Exit a parse tree produced by `RegoParser.regoPackage`.
	 * @param ctx the parse tree
	 */
	exitRegoPackage?: (ctx: RegoPackageContext) => void;

	/**
	 * Enter a parse tree produced by `RegoParser.importDirective`.
	 * @param ctx the parse tree
	 */
	enterImportDirective?: (ctx: ImportDirectiveContext) => void;
	/**
	 * Exit a parse tree produced by `RegoParser.importDirective`.
	 * @param ctx the parse tree
	 */
	exitImportDirective?: (ctx: ImportDirectiveContext) => void;

	/**
	 * Enter a parse tree produced by `RegoParser.regoRules`.
	 * @param ctx the parse tree
	 */
	enterRegoRules?: (ctx: RegoRulesContext) => void;
	/**
	 * Exit a parse tree produced by `RegoParser.regoRules`.
	 * @param ctx the parse tree
	 */
	exitRegoRules?: (ctx: RegoRulesContext) => void;

	/**
	 * Enter a parse tree produced by `RegoParser.ruleHead`.
	 * @param ctx the parse tree
	 */
	enterRuleHead?: (ctx: RuleHeadContext) => void;
	/**
	 * Exit a parse tree produced by `RegoParser.ruleHead`.
	 * @param ctx the parse tree
	 */
	exitRuleHead?: (ctx: RuleHeadContext) => void;

	/**
	 * Enter a parse tree produced by `RegoParser.ruleBody`.
	 * @param ctx the parse tree
	 */
	enterRuleBody?: (ctx: RuleBodyContext) => void;
	/**
	 * Exit a parse tree produced by `RegoParser.ruleBody`.
	 * @param ctx the parse tree
	 */
	exitRuleBody?: (ctx: RuleBodyContext) => void;

	/**
	 * Enter a parse tree produced by `RegoParser.ruleExt`.
	 * @param ctx the parse tree
	 */
	enterRuleExt?: (ctx: RuleExtContext) => void;
	/**
	 * Exit a parse tree produced by `RegoParser.ruleExt`.
	 * @param ctx the parse tree
	 */
	exitRuleExt?: (ctx: RuleExtContext) => void;

	/**
	 * Enter a parse tree produced by `RegoParser.regoElse`.
	 * @param ctx the parse tree
	 */
	enterRegoElse?: (ctx: RegoElseContext) => void;
	/**
	 * Exit a parse tree produced by `RegoParser.regoElse`.
	 * @param ctx the parse tree
	 */
	exitRegoElse?: (ctx: RegoElseContext) => void;

	/**
	 * Enter a parse tree produced by `RegoParser.regoBody`.
	 * @param ctx the parse tree
	 */
	enterRegoBody?: (ctx: RegoBodyContext) => void;
	/**
	 * Exit a parse tree produced by `RegoParser.regoBody`.
	 * @param ctx the parse tree
	 */
	exitRegoBody?: (ctx: RegoBodyContext) => void;

	/**
	 * Enter a parse tree produced by `RegoParser.nonEmptyBraceEnclosedBody`.
	 * @param ctx the parse tree
	 */
	enterNonEmptyBraceEnclosedBody?: (ctx: NonEmptyBraceEnclosedBodyContext) => void;
	/**
	 * Exit a parse tree produced by `RegoParser.nonEmptyBraceEnclosedBody`.
	 * @param ctx the parse tree
	 */
	exitNonEmptyBraceEnclosedBody?: (ctx: NonEmptyBraceEnclosedBodyContext) => void;

	/**
	 * Enter a parse tree produced by `RegoParser.query`.
	 * @param ctx the parse tree
	 */
	enterQuery?: (ctx: QueryContext) => void;
	/**
	 * Exit a parse tree produced by `RegoParser.query`.
	 * @param ctx the parse tree
	 */
	exitQuery?: (ctx: QueryContext) => void;

	/**
	 * Enter a parse tree produced by `RegoParser.literal`.
	 * @param ctx the parse tree
	 */
	enterLiteral?: (ctx: LiteralContext) => void;
	/**
	 * Exit a parse tree produced by `RegoParser.literal`.
	 * @param ctx the parse tree
	 */
	exitLiteral?: (ctx: LiteralContext) => void;

	/**
	 * Enter a parse tree produced by `RegoParser.literalExpr`.
	 * @param ctx the parse tree
	 */
	enterLiteralExpr?: (ctx: LiteralExprContext) => void;
	/**
	 * Exit a parse tree produced by `RegoParser.literalExpr`.
	 * @param ctx the parse tree
	 */
	exitLiteralExpr?: (ctx: LiteralExprContext) => void;

	/**
	 * Enter a parse tree produced by `RegoParser.withKeyword`.
	 * @param ctx the parse tree
	 */
	enterWithKeyword?: (ctx: WithKeywordContext) => void;
	/**
	 * Exit a parse tree produced by `RegoParser.withKeyword`.
	 * @param ctx the parse tree
	 */
	exitWithKeyword?: (ctx: WithKeywordContext) => void;

	/**
	 * Enter a parse tree produced by `RegoParser.functionCall`.
	 * @param ctx the parse tree
	 */
	enterFunctionCall?: (ctx: FunctionCallContext) => void;
	/**
	 * Exit a parse tree produced by `RegoParser.functionCall`.
	 * @param ctx the parse tree
	 */
	exitFunctionCall?: (ctx: FunctionCallContext) => void;

	/**
	 * Enter a parse tree produced by `RegoParser.exprTermPair`.
	 * @param ctx the parse tree
	 */
	enterExprTermPair?: (ctx: ExprTermPairContext) => void;
	/**
	 * Exit a parse tree produced by `RegoParser.exprTermPair`.
	 * @param ctx the parse tree
	 */
	exitExprTermPair?: (ctx: ExprTermPairContext) => void;

	/**
	 * Enter a parse tree produced by `RegoParser.termPair`.
	 * @param ctx the parse tree
	 */
	enterTermPair?: (ctx: TermPairContext) => void;
	/**
	 * Exit a parse tree produced by `RegoParser.termPair`.
	 * @param ctx the parse tree
	 */
	exitTermPair?: (ctx: TermPairContext) => void;

	/**
	 * Enter a parse tree produced by `RegoParser.exprTermPairList`.
	 * @param ctx the parse tree
	 */
	enterExprTermPairList?: (ctx: ExprTermPairListContext) => void;
	/**
	 * Exit a parse tree produced by `RegoParser.exprTermPairList`.
	 * @param ctx the parse tree
	 */
	exitExprTermPairList?: (ctx: ExprTermPairListContext) => void;

	/**
	 * Enter a parse tree produced by `RegoParser.exprTerm`.
	 * @param ctx the parse tree
	 */
	enterExprTerm?: (ctx: ExprTermContext) => void;
	/**
	 * Exit a parse tree produced by `RegoParser.exprTerm`.
	 * @param ctx the parse tree
	 */
	exitExprTerm?: (ctx: ExprTermContext) => void;

	/**
	 * Enter a parse tree produced by `RegoParser.exprTermList`.
	 * @param ctx the parse tree
	 */
	enterExprTermList?: (ctx: ExprTermListContext) => void;
	/**
	 * Exit a parse tree produced by `RegoParser.exprTermList`.
	 * @param ctx the parse tree
	 */
	exitExprTermList?: (ctx: ExprTermListContext) => void;

	/**
	 * Enter a parse tree produced by `RegoParser.relationExpr`.
	 * @param ctx the parse tree
	 */
	enterRelationExpr?: (ctx: RelationExprContext) => void;
	/**
	 * Exit a parse tree produced by `RegoParser.relationExpr`.
	 * @param ctx the parse tree
	 */
	exitRelationExpr?: (ctx: RelationExprContext) => void;

	/**
	 * Enter a parse tree produced by `RegoParser.bitwiseOrExpr`.
	 * @param ctx the parse tree
	 */
	enterBitwiseOrExpr?: (ctx: BitwiseOrExprContext) => void;
	/**
	 * Exit a parse tree produced by `RegoParser.bitwiseOrExpr`.
	 * @param ctx the parse tree
	 */
	exitBitwiseOrExpr?: (ctx: BitwiseOrExprContext) => void;

	/**
	 * Enter a parse tree produced by `RegoParser.bitwiseAndExpr`.
	 * @param ctx the parse tree
	 */
	enterBitwiseAndExpr?: (ctx: BitwiseAndExprContext) => void;
	/**
	 * Exit a parse tree produced by `RegoParser.bitwiseAndExpr`.
	 * @param ctx the parse tree
	 */
	exitBitwiseAndExpr?: (ctx: BitwiseAndExprContext) => void;

	/**
	 * Enter a parse tree produced by `RegoParser.arithExpr`.
	 * @param ctx the parse tree
	 */
	enterArithExpr?: (ctx: ArithExprContext) => void;
	/**
	 * Exit a parse tree produced by `RegoParser.arithExpr`.
	 * @param ctx the parse tree
	 */
	exitArithExpr?: (ctx: ArithExprContext) => void;

	/**
	 * Enter a parse tree produced by `RegoParser.factorExpr`.
	 * @param ctx the parse tree
	 */
	enterFactorExpr?: (ctx: FactorExprContext) => void;
	/**
	 * Exit a parse tree produced by `RegoParser.factorExpr`.
	 * @param ctx the parse tree
	 */
	exitFactorExpr?: (ctx: FactorExprContext) => void;

	/**
	 * Enter a parse tree produced by `RegoParser.term`.
	 * @param ctx the parse tree
	 */
	enterTerm?: (ctx: TermContext) => void;
	/**
	 * Exit a parse tree produced by `RegoParser.term`.
	 * @param ctx the parse tree
	 */
	exitTerm?: (ctx: TermContext) => void;

	/**
	 * Enter a parse tree produced by `RegoParser.arrayComprehension`.
	 * @param ctx the parse tree
	 */
	enterArrayComprehension?: (ctx: ArrayComprehensionContext) => void;
	/**
	 * Exit a parse tree produced by `RegoParser.arrayComprehension`.
	 * @param ctx the parse tree
	 */
	exitArrayComprehension?: (ctx: ArrayComprehensionContext) => void;

	/**
	 * Enter a parse tree produced by `RegoParser.setComprehension`.
	 * @param ctx the parse tree
	 */
	enterSetComprehension?: (ctx: SetComprehensionContext) => void;
	/**
	 * Exit a parse tree produced by `RegoParser.setComprehension`.
	 * @param ctx the parse tree
	 */
	exitSetComprehension?: (ctx: SetComprehensionContext) => void;

	/**
	 * Enter a parse tree produced by `RegoParser.objectComprehension`.
	 * @param ctx the parse tree
	 */
	enterObjectComprehension?: (ctx: ObjectComprehensionContext) => void;
	/**
	 * Exit a parse tree produced by `RegoParser.objectComprehension`.
	 * @param ctx the parse tree
	 */
	exitObjectComprehension?: (ctx: ObjectComprehensionContext) => void;

	/**
	 * Enter a parse tree produced by `RegoParser.object`.
	 * @param ctx the parse tree
	 */
	enterObject?: (ctx: ObjectContext) => void;
	/**
	 * Exit a parse tree produced by `RegoParser.object`.
	 * @param ctx the parse tree
	 */
	exitObject?: (ctx: ObjectContext) => void;

	/**
	 * Enter a parse tree produced by `RegoParser.objectItem`.
	 * @param ctx the parse tree
	 */
	enterObjectItem?: (ctx: ObjectItemContext) => void;
	/**
	 * Exit a parse tree produced by `RegoParser.objectItem`.
	 * @param ctx the parse tree
	 */
	exitObjectItem?: (ctx: ObjectItemContext) => void;

	/**
	 * Enter a parse tree produced by `RegoParser.array`.
	 * @param ctx the parse tree
	 */
	enterArray?: (ctx: ArrayContext) => void;
	/**
	 * Exit a parse tree produced by `RegoParser.array`.
	 * @param ctx the parse tree
	 */
	exitArray?: (ctx: ArrayContext) => void;

	/**
	 * Enter a parse tree produced by `RegoParser.set`.
	 * @param ctx the parse tree
	 */
	enterSet?: (ctx: SetContext) => void;
	/**
	 * Exit a parse tree produced by `RegoParser.set`.
	 * @param ctx the parse tree
	 */
	exitSet?: (ctx: SetContext) => void;

	/**
	 * Enter a parse tree produced by `RegoParser.emptySet`.
	 * @param ctx the parse tree
	 */
	enterEmptySet?: (ctx: EmptySetContext) => void;
	/**
	 * Exit a parse tree produced by `RegoParser.emptySet`.
	 * @param ctx the parse tree
	 */
	exitEmptySet?: (ctx: EmptySetContext) => void;

	/**
	 * Enter a parse tree produced by `RegoParser.nonEmptySet`.
	 * @param ctx the parse tree
	 */
	enterNonEmptySet?: (ctx: NonEmptySetContext) => void;
	/**
	 * Exit a parse tree produced by `RegoParser.nonEmptySet`.
	 * @param ctx the parse tree
	 */
	exitNonEmptySet?: (ctx: NonEmptySetContext) => void;

	/**
	 * Enter a parse tree produced by `RegoParser.ref`.
	 * @param ctx the parse tree
	 */
	enterRef?: (ctx: RefContext) => void;
	/**
	 * Exit a parse tree produced by `RegoParser.ref`.
	 * @param ctx the parse tree
	 */
	exitRef?: (ctx: RefContext) => void;

	/**
	 * Enter a parse tree produced by `RegoParser.refOperand`.
	 * @param ctx the parse tree
	 */
	enterRefOperand?: (ctx: RefOperandContext) => void;
	/**
	 * Exit a parse tree produced by `RegoParser.refOperand`.
	 * @param ctx the parse tree
	 */
	exitRefOperand?: (ctx: RefOperandContext) => void;

	/**
	 * Enter a parse tree produced by `RegoParser.refOperandDot`.
	 * @param ctx the parse tree
	 */
	enterRefOperandDot?: (ctx: RefOperandDotContext) => void;
	/**
	 * Exit a parse tree produced by `RegoParser.refOperandDot`.
	 * @param ctx the parse tree
	 */
	exitRefOperandDot?: (ctx: RefOperandDotContext) => void;

	/**
	 * Enter a parse tree produced by `RegoParser.refOperandCanonical`.
	 * @param ctx the parse tree
	 */
	enterRefOperandCanonical?: (ctx: RefOperandCanonicalContext) => void;
	/**
	 * Exit a parse tree produced by `RegoParser.refOperandCanonical`.
	 * @param ctx the parse tree
	 */
	exitRefOperandCanonical?: (ctx: RefOperandCanonicalContext) => void;

	/**
	 * Enter a parse tree produced by `RegoParser.scalar`.
	 * @param ctx the parse tree
	 */
	enterScalar?: (ctx: ScalarContext) => void;
	/**
	 * Exit a parse tree produced by `RegoParser.scalar`.
	 * @param ctx the parse tree
	 */
	exitScalar?: (ctx: ScalarContext) => void;
}

