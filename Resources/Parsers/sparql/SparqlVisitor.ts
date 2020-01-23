// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/sparql/Sparql.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { QueryContext } from "./SparqlParser";
import { PrologueContext } from "./SparqlParser";
import { BaseDeclContext } from "./SparqlParser";
import { PrefixDeclContext } from "./SparqlParser";
import { SelectQueryContext } from "./SparqlParser";
import { ConstructQueryContext } from "./SparqlParser";
import { DescribeQueryContext } from "./SparqlParser";
import { AskQueryContext } from "./SparqlParser";
import { DatasetClauseContext } from "./SparqlParser";
import { DefaultGraphClauseContext } from "./SparqlParser";
import { NamedGraphClauseContext } from "./SparqlParser";
import { SourceSelectorContext } from "./SparqlParser";
import { WhereClauseContext } from "./SparqlParser";
import { SolutionModifierContext } from "./SparqlParser";
import { LimitOffsetClausesContext } from "./SparqlParser";
import { OrderClauseContext } from "./SparqlParser";
import { OrderConditionContext } from "./SparqlParser";
import { LimitClauseContext } from "./SparqlParser";
import { OffsetClauseContext } from "./SparqlParser";
import { GroupGraphPatternContext } from "./SparqlParser";
import { TriplesBlockContext } from "./SparqlParser";
import { GraphPatternNotTriplesContext } from "./SparqlParser";
import { OptionalGraphPatternContext } from "./SparqlParser";
import { GraphGraphPatternContext } from "./SparqlParser";
import { GroupOrUnionGraphPatternContext } from "./SparqlParser";
import { FilterContext } from "./SparqlParser";
import { ConstraintContext } from "./SparqlParser";
import { FunctionCallContext } from "./SparqlParser";
import { ArgListContext } from "./SparqlParser";
import { ConstructTemplateContext } from "./SparqlParser";
import { ConstructTriplesContext } from "./SparqlParser";
import { TriplesSameSubjectContext } from "./SparqlParser";
import { PropertyListNotEmptyContext } from "./SparqlParser";
import { PropertyListContext } from "./SparqlParser";
import { ObjectListContext } from "./SparqlParser";
import { ObjectContext } from "./SparqlParser";
import { VerbContext } from "./SparqlParser";
import { TriplesNodeContext } from "./SparqlParser";
import { BlankNodePropertyListContext } from "./SparqlParser";
import { CollectionContext } from "./SparqlParser";
import { GraphNodeContext } from "./SparqlParser";
import { VarOrTermContext } from "./SparqlParser";
import { VarOrIRIrefContext } from "./SparqlParser";
import { VarContext } from "./SparqlParser";
import { GraphTermContext } from "./SparqlParser";
import { ExpressionContext } from "./SparqlParser";
import { ConditionalOrExpressionContext } from "./SparqlParser";
import { ConditionalAndExpressionContext } from "./SparqlParser";
import { ValueLogicalContext } from "./SparqlParser";
import { RelationalExpressionContext } from "./SparqlParser";
import { NumericExpressionContext } from "./SparqlParser";
import { AdditiveExpressionContext } from "./SparqlParser";
import { MultiplicativeExpressionContext } from "./SparqlParser";
import { UnaryExpressionContext } from "./SparqlParser";
import { PrimaryExpressionContext } from "./SparqlParser";
import { BrackettedExpressionContext } from "./SparqlParser";
import { BuiltInCallContext } from "./SparqlParser";
import { RegexExpressionContext } from "./SparqlParser";
import { IriRefOrFunctionContext } from "./SparqlParser";
import { RdfLiteralContext } from "./SparqlParser";
import { NumericLiteralContext } from "./SparqlParser";
import { NumericLiteralUnsignedContext } from "./SparqlParser";
import { NumericLiteralPositiveContext } from "./SparqlParser";
import { NumericLiteralNegativeContext } from "./SparqlParser";
import { BooleanLiteralContext } from "./SparqlParser";
import { StringContext } from "./SparqlParser";
import { IriRefContext } from "./SparqlParser";
import { PrefixedNameContext } from "./SparqlParser";
import { BlankNodeContext } from "./SparqlParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `SparqlParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface SparqlVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `SparqlParser.query`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQuery?: (ctx: QueryContext) => Result;

	/**
	 * Visit a parse tree produced by `SparqlParser.prologue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrologue?: (ctx: PrologueContext) => Result;

	/**
	 * Visit a parse tree produced by `SparqlParser.baseDecl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBaseDecl?: (ctx: BaseDeclContext) => Result;

	/**
	 * Visit a parse tree produced by `SparqlParser.prefixDecl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrefixDecl?: (ctx: PrefixDeclContext) => Result;

	/**
	 * Visit a parse tree produced by `SparqlParser.selectQuery`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelectQuery?: (ctx: SelectQueryContext) => Result;

	/**
	 * Visit a parse tree produced by `SparqlParser.constructQuery`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstructQuery?: (ctx: ConstructQueryContext) => Result;

	/**
	 * Visit a parse tree produced by `SparqlParser.describeQuery`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDescribeQuery?: (ctx: DescribeQueryContext) => Result;

	/**
	 * Visit a parse tree produced by `SparqlParser.askQuery`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAskQuery?: (ctx: AskQueryContext) => Result;

	/**
	 * Visit a parse tree produced by `SparqlParser.datasetClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDatasetClause?: (ctx: DatasetClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `SparqlParser.defaultGraphClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDefaultGraphClause?: (ctx: DefaultGraphClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `SparqlParser.namedGraphClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNamedGraphClause?: (ctx: NamedGraphClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `SparqlParser.sourceSelector`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSourceSelector?: (ctx: SourceSelectorContext) => Result;

	/**
	 * Visit a parse tree produced by `SparqlParser.whereClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhereClause?: (ctx: WhereClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `SparqlParser.solutionModifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSolutionModifier?: (ctx: SolutionModifierContext) => Result;

	/**
	 * Visit a parse tree produced by `SparqlParser.limitOffsetClauses`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLimitOffsetClauses?: (ctx: LimitOffsetClausesContext) => Result;

	/**
	 * Visit a parse tree produced by `SparqlParser.orderClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOrderClause?: (ctx: OrderClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `SparqlParser.orderCondition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOrderCondition?: (ctx: OrderConditionContext) => Result;

	/**
	 * Visit a parse tree produced by `SparqlParser.limitClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLimitClause?: (ctx: LimitClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `SparqlParser.offsetClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOffsetClause?: (ctx: OffsetClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `SparqlParser.groupGraphPattern`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGroupGraphPattern?: (ctx: GroupGraphPatternContext) => Result;

	/**
	 * Visit a parse tree produced by `SparqlParser.triplesBlock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTriplesBlock?: (ctx: TriplesBlockContext) => Result;

	/**
	 * Visit a parse tree produced by `SparqlParser.graphPatternNotTriples`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGraphPatternNotTriples?: (ctx: GraphPatternNotTriplesContext) => Result;

	/**
	 * Visit a parse tree produced by `SparqlParser.optionalGraphPattern`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOptionalGraphPattern?: (ctx: OptionalGraphPatternContext) => Result;

	/**
	 * Visit a parse tree produced by `SparqlParser.graphGraphPattern`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGraphGraphPattern?: (ctx: GraphGraphPatternContext) => Result;

	/**
	 * Visit a parse tree produced by `SparqlParser.groupOrUnionGraphPattern`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGroupOrUnionGraphPattern?: (ctx: GroupOrUnionGraphPatternContext) => Result;

	/**
	 * Visit a parse tree produced by `SparqlParser.filter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFilter?: (ctx: FilterContext) => Result;

	/**
	 * Visit a parse tree produced by `SparqlParser.constraint`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstraint?: (ctx: ConstraintContext) => Result;

	/**
	 * Visit a parse tree produced by `SparqlParser.functionCall`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionCall?: (ctx: FunctionCallContext) => Result;

	/**
	 * Visit a parse tree produced by `SparqlParser.argList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArgList?: (ctx: ArgListContext) => Result;

	/**
	 * Visit a parse tree produced by `SparqlParser.constructTemplate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstructTemplate?: (ctx: ConstructTemplateContext) => Result;

	/**
	 * Visit a parse tree produced by `SparqlParser.constructTriples`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstructTriples?: (ctx: ConstructTriplesContext) => Result;

	/**
	 * Visit a parse tree produced by `SparqlParser.triplesSameSubject`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTriplesSameSubject?: (ctx: TriplesSameSubjectContext) => Result;

	/**
	 * Visit a parse tree produced by `SparqlParser.propertyListNotEmpty`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPropertyListNotEmpty?: (ctx: PropertyListNotEmptyContext) => Result;

	/**
	 * Visit a parse tree produced by `SparqlParser.propertyList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPropertyList?: (ctx: PropertyListContext) => Result;

	/**
	 * Visit a parse tree produced by `SparqlParser.objectList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitObjectList?: (ctx: ObjectListContext) => Result;

	/**
	 * Visit a parse tree produced by `SparqlParser.object`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitObject?: (ctx: ObjectContext) => Result;

	/**
	 * Visit a parse tree produced by `SparqlParser.verb`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVerb?: (ctx: VerbContext) => Result;

	/**
	 * Visit a parse tree produced by `SparqlParser.triplesNode`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTriplesNode?: (ctx: TriplesNodeContext) => Result;

	/**
	 * Visit a parse tree produced by `SparqlParser.blankNodePropertyList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlankNodePropertyList?: (ctx: BlankNodePropertyListContext) => Result;

	/**
	 * Visit a parse tree produced by `SparqlParser.collection`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCollection?: (ctx: CollectionContext) => Result;

	/**
	 * Visit a parse tree produced by `SparqlParser.graphNode`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGraphNode?: (ctx: GraphNodeContext) => Result;

	/**
	 * Visit a parse tree produced by `SparqlParser.varOrTerm`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVarOrTerm?: (ctx: VarOrTermContext) => Result;

	/**
	 * Visit a parse tree produced by `SparqlParser.varOrIRIref`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVarOrIRIref?: (ctx: VarOrIRIrefContext) => Result;

	/**
	 * Visit a parse tree produced by `SparqlParser.var`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVar?: (ctx: VarContext) => Result;

	/**
	 * Visit a parse tree produced by `SparqlParser.graphTerm`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGraphTerm?: (ctx: GraphTermContext) => Result;

	/**
	 * Visit a parse tree produced by `SparqlParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `SparqlParser.conditionalOrExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConditionalOrExpression?: (ctx: ConditionalOrExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `SparqlParser.conditionalAndExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConditionalAndExpression?: (ctx: ConditionalAndExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `SparqlParser.valueLogical`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValueLogical?: (ctx: ValueLogicalContext) => Result;

	/**
	 * Visit a parse tree produced by `SparqlParser.relationalExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRelationalExpression?: (ctx: RelationalExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `SparqlParser.numericExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumericExpression?: (ctx: NumericExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `SparqlParser.additiveExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAdditiveExpression?: (ctx: AdditiveExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `SparqlParser.multiplicativeExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMultiplicativeExpression?: (ctx: MultiplicativeExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `SparqlParser.unaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnaryExpression?: (ctx: UnaryExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `SparqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrimaryExpression?: (ctx: PrimaryExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `SparqlParser.brackettedExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBrackettedExpression?: (ctx: BrackettedExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `SparqlParser.builtInCall`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBuiltInCall?: (ctx: BuiltInCallContext) => Result;

	/**
	 * Visit a parse tree produced by `SparqlParser.regexExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRegexExpression?: (ctx: RegexExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `SparqlParser.iriRefOrFunction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIriRefOrFunction?: (ctx: IriRefOrFunctionContext) => Result;

	/**
	 * Visit a parse tree produced by `SparqlParser.rdfLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRdfLiteral?: (ctx: RdfLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `SparqlParser.numericLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumericLiteral?: (ctx: NumericLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `SparqlParser.numericLiteralUnsigned`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumericLiteralUnsigned?: (ctx: NumericLiteralUnsignedContext) => Result;

	/**
	 * Visit a parse tree produced by `SparqlParser.numericLiteralPositive`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumericLiteralPositive?: (ctx: NumericLiteralPositiveContext) => Result;

	/**
	 * Visit a parse tree produced by `SparqlParser.numericLiteralNegative`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumericLiteralNegative?: (ctx: NumericLiteralNegativeContext) => Result;

	/**
	 * Visit a parse tree produced by `SparqlParser.booleanLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBooleanLiteral?: (ctx: BooleanLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `SparqlParser.string`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitString?: (ctx: StringContext) => Result;

	/**
	 * Visit a parse tree produced by `SparqlParser.iriRef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIriRef?: (ctx: IriRefContext) => Result;

	/**
	 * Visit a parse tree produced by `SparqlParser.prefixedName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrefixedName?: (ctx: PrefixedNameContext) => Result;

	/**
	 * Visit a parse tree produced by `SparqlParser.blankNode`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlankNode?: (ctx: BlankNodeContext) => Result;
}

