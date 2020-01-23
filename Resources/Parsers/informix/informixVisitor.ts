// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/informix/informix.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { Compilation_unitContext } from "./informixParser";
import { IdentifierContext } from "./informixParser";
import { MainBlockContext } from "./informixParser";
import { MainStatementsContext } from "./informixParser";
import { DeferStatementContext } from "./informixParser";
import { FunctionOrReportDefinitionsContext } from "./informixParser";
import { ReturnStatementContext } from "./informixParser";
import { FunctionDefinitionContext } from "./informixParser";
import { ParameterListContext } from "./informixParser";
import { ParameterGroupContext } from "./informixParser";
import { GlobalDeclarationContext } from "./informixParser";
import { TypeDeclarationsContext } from "./informixParser";
import { TypeDeclarationContext } from "./informixParser";
import { VariableDeclarationContext } from "./informixParser";
import { TypeContext } from "./informixParser";
import { IndirectTypeContext } from "./informixParser";
import { TypeIdentifierContext } from "./informixParser";
import { LargeTypeContext } from "./informixParser";
import { NumberTypeContext } from "./informixParser";
import { CharTypeContext } from "./informixParser";
import { TimeTypeContext } from "./informixParser";
import { DatetimeQualifierContext } from "./informixParser";
import { IntervalQualifierContext } from "./informixParser";
import { UnitTypeContext } from "./informixParser";
import { YearQualifierContext } from "./informixParser";
import { MonthQualifierContext } from "./informixParser";
import { DayQualifierContext } from "./informixParser";
import { HourQualifierContext } from "./informixParser";
import { MinuteQualifierContext } from "./informixParser";
import { SecondQualifierContext } from "./informixParser";
import { FractionQualifierContext } from "./informixParser";
import { StructuredTypeContext } from "./informixParser";
import { RecordTypeContext } from "./informixParser";
import { ArrayIndexerContext } from "./informixParser";
import { ArrayTypeContext } from "./informixParser";
import { DynArrayTypeContext } from "./informixParser";
import { StringContext } from "./informixParser";
import { StatementContext } from "./informixParser";
import { CodeBlockContext } from "./informixParser";
import { LabelContext } from "./informixParser";
import { UnlabelledStatementContext } from "./informixParser";
import { SimpleStatementContext } from "./informixParser";
import { RunStatementContext } from "./informixParser";
import { AssignmentStatementContext } from "./informixParser";
import { ProcedureStatementContext } from "./informixParser";
import { ProcedureIdentifierContext } from "./informixParser";
import { ActualParameterContext } from "./informixParser";
import { GotoStatementContext } from "./informixParser";
import { ConditionContext } from "./informixParser";
import { LogicalTermContext } from "./informixParser";
import { LogicalFactorContext } from "./informixParser";
import { QuantifiedFactorContext } from "./informixParser";
import { ExpressionSetContext } from "./informixParser";
import { SubqueryContext } from "./informixParser";
import { SqlExpressionContext } from "./informixParser";
import { SqlAliasContext } from "./informixParser";
import { SqlTermContext } from "./informixParser";
import { SqlMultiplyContext } from "./informixParser";
import { SqlFactorContext } from "./informixParser";
import { SqlFactor2Context } from "./informixParser";
import { SqlExpressionListContext } from "./informixParser";
import { SqlLiteralContext } from "./informixParser";
import { SqlVariableContext } from "./informixParser";
import { SqlFunctionContext } from "./informixParser";
import { DateFunctionContext } from "./informixParser";
import { NumberFunctionContext } from "./informixParser";
import { CharFunctionContext } from "./informixParser";
import { GroupFunctionContext } from "./informixParser";
import { OtherFunctionContext } from "./informixParser";
import { SqlPseudoColumnContext } from "./informixParser";
import { RelationalOperatorContext } from "./informixParser";
import { IfConditionContext } from "./informixParser";
import { IfCondition2Context } from "./informixParser";
import { IfLogicalTermContext } from "./informixParser";
import { ExpressionContext } from "./informixParser";
import { IfLogicalFactorContext } from "./informixParser";
import { SimpleExpressionContext } from "./informixParser";
import { AddingOperatorContext } from "./informixParser";
import { TermContext } from "./informixParser";
import { MultiplyingOperatorContext } from "./informixParser";
import { FactorContext } from "./informixParser";
import { FunctionDesignatorContext } from "./informixParser";
import { FunctionIdentifierContext } from "./informixParser";
import { UnsignedConstantContext } from "./informixParser";
import { ConstantContext } from "./informixParser";
import { NumericConstantContext } from "./informixParser";
import { VariableContext } from "./informixParser";
import { EntireVariableContext } from "./informixParser";
import { VariableIdentifierContext } from "./informixParser";
import { IndexingVariableContext } from "./informixParser";
import { ComponentVariableContext } from "./informixParser";
import { RecordVariableContext } from "./informixParser";
import { FieldIdentifierContext } from "./informixParser";
import { StructuredStatementContext } from "./informixParser";
import { ConditionalStatementContext } from "./informixParser";
import { IfStatementContext } from "./informixParser";
import { RepetetiveStatementContext } from "./informixParser";
import { WhileStatementContext } from "./informixParser";
import { ForStatementContext } from "./informixParser";
import { ForListContext } from "./informixParser";
import { ControlVariableContext } from "./informixParser";
import { InitialValueContext } from "./informixParser";
import { FinalValueContext } from "./informixParser";
import { ForEachStatementContext } from "./informixParser";
import { VariableListContext } from "./informixParser";
import { VariableOrConstantListContext } from "./informixParser";
import { CaseStatementContext } from "./informixParser";
import { OtherFGLStatementContext } from "./informixParser";
import { OtherProgramFlowStatementContext } from "./informixParser";
import { ExitTypesContext } from "./informixParser";
import { ExitStatementsContext } from "./informixParser";
import { ContinueStatementsContext } from "./informixParser";
import { OtherStorageStatementContext } from "./informixParser";
import { PrintExpressionItemContext } from "./informixParser";
import { PrintExpressionListContext } from "./informixParser";
import { ReportStatementContext } from "./informixParser";
import { FieldNameContext } from "./informixParser";
import { ThruNotationContext } from "./informixParser";
import { FieldListContext } from "./informixParser";
import { KeyListContext } from "./informixParser";
import { ConstructEventsContext } from "./informixParser";
import { ConstructInsideStatementContext } from "./informixParser";
import { SpecialAttributeContext } from "./informixParser";
import { AttributeContext } from "./informixParser";
import { AttributeListContext } from "./informixParser";
import { ConstructGroupStatementContext } from "./informixParser";
import { ConstructStatementContext } from "./informixParser";
import { DisplayArrayStatementContext } from "./informixParser";
import { DisplayInsideStatementContext } from "./informixParser";
import { DisplayEventsContext } from "./informixParser";
import { DisplayStatementContext } from "./informixParser";
import { ErrorStatementContext } from "./informixParser";
import { MessageStatementContext } from "./informixParser";
import { PromptStatementContext } from "./informixParser";
import { InputEventsContext } from "./informixParser";
import { InputInsideStatementContext } from "./informixParser";
import { InputGroupStatementContext } from "./informixParser";
import { InputStatementContext } from "./informixParser";
import { InputArrayStatementContext } from "./informixParser";
import { MenuEventsContext } from "./informixParser";
import { MenuInsideStatementContext } from "./informixParser";
import { MenuGroupStatementContext } from "./informixParser";
import { MenuStatementContext } from "./informixParser";
import { ReservedLinePositionContext } from "./informixParser";
import { SpecialWindowAttributeContext } from "./informixParser";
import { WindowAttributeContext } from "./informixParser";
import { WindowAttributeListContext } from "./informixParser";
import { OptionStatementContext } from "./informixParser";
import { OptionsStatementContext } from "./informixParser";
import { ScreenStatementContext } from "./informixParser";
import { SqlStatementsContext } from "./informixParser";
import { CursorManipulationStatementContext } from "./informixParser";
import { ColumnsListContext } from "./informixParser";
import { StatementIdContext } from "./informixParser";
import { CursorNameContext } from "./informixParser";
import { DataTypeContext } from "./informixParser";
import { ColumnItemContext } from "./informixParser";
import { DataDefinitionStatementContext } from "./informixParser";
import { DataManipulationStatementContext } from "./informixParser";
import { SqlSelectStatementContext } from "./informixParser";
import { ColumnsTableIdContext } from "./informixParser";
import { SelectListContext } from "./informixParser";
import { HeadSelectStatementContext } from "./informixParser";
import { TableQualifierContext } from "./informixParser";
import { TableIdentifierContext } from "./informixParser";
import { FromTableContext } from "./informixParser";
import { TableExpressionContext } from "./informixParser";
import { FromSelectStatementContext } from "./informixParser";
import { AliasNameContext } from "./informixParser";
import { MainSelectStatementContext } from "./informixParser";
import { UnionSelectStatementContext } from "./informixParser";
import { SimpleSelectStatementContext } from "./informixParser";
import { WhereStatementContext } from "./informixParser";
import { GroupByStatementContext } from "./informixParser";
import { HavingStatementContext } from "./informixParser";
import { OrderbyColumnContext } from "./informixParser";
import { OrderbyStatementContext } from "./informixParser";
import { SqlLoadStatementContext } from "./informixParser";
import { SqlUnLoadStatementContext } from "./informixParser";
import { SqlInsertStatementContext } from "./informixParser";
import { SqlUpdateStatementContext } from "./informixParser";
import { SqlDeleteStatementContext } from "./informixParser";
import { ActualParameterListContext } from "./informixParser";
import { DynamicManagementStatementContext } from "./informixParser";
import { QueryOptimizationStatementContext } from "./informixParser";
import { DatabaseDeclarationContext } from "./informixParser";
import { ClientServerStatementContext } from "./informixParser";
import { DataIntegrityStatementContext } from "./informixParser";
import { WheneverStatementContext } from "./informixParser";
import { WheneverTypeContext } from "./informixParser";
import { WheneverFlowContext } from "./informixParser";
import { ReportDefinitionContext } from "./informixParser";
import { OutputReportContext } from "./informixParser";
import { FormatReportContext } from "./informixParser";
import { EolContext } from "./informixParser";
import { UnsignedNumberContext } from "./informixParser";
import { UnsignedIntegerContext } from "./informixParser";
import { UnsignedRealContext } from "./informixParser";
import { SignContext } from "./informixParser";
import { ConstantIdentifierContext } from "./informixParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `informixParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface informixVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `informixParser.compilation_unit`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCompilation_unit?: (ctx: Compilation_unitContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifier?: (ctx: IdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.mainBlock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMainBlock?: (ctx: MainBlockContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.mainStatements`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMainStatements?: (ctx: MainStatementsContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.deferStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeferStatement?: (ctx: DeferStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.functionOrReportDefinitions`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionOrReportDefinitions?: (ctx: FunctionOrReportDefinitionsContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.returnStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReturnStatement?: (ctx: ReturnStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.functionDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionDefinition?: (ctx: FunctionDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.parameterList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParameterList?: (ctx: ParameterListContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.parameterGroup`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParameterGroup?: (ctx: ParameterGroupContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.globalDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGlobalDeclaration?: (ctx: GlobalDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.typeDeclarations`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeDeclarations?: (ctx: TypeDeclarationsContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.typeDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeDeclaration?: (ctx: TypeDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.variableDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableDeclaration?: (ctx: VariableDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitType?: (ctx: TypeContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.indirectType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIndirectType?: (ctx: IndirectTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.typeIdentifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeIdentifier?: (ctx: TypeIdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.largeType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLargeType?: (ctx: LargeTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.numberType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumberType?: (ctx: NumberTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.charType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCharType?: (ctx: CharTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.timeType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTimeType?: (ctx: TimeTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.datetimeQualifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDatetimeQualifier?: (ctx: DatetimeQualifierContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.intervalQualifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIntervalQualifier?: (ctx: IntervalQualifierContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.unitType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnitType?: (ctx: UnitTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.yearQualifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitYearQualifier?: (ctx: YearQualifierContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.monthQualifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMonthQualifier?: (ctx: MonthQualifierContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.dayQualifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDayQualifier?: (ctx: DayQualifierContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.hourQualifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHourQualifier?: (ctx: HourQualifierContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.minuteQualifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMinuteQualifier?: (ctx: MinuteQualifierContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.secondQualifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSecondQualifier?: (ctx: SecondQualifierContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.fractionQualifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFractionQualifier?: (ctx: FractionQualifierContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.structuredType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStructuredType?: (ctx: StructuredTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.recordType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRecordType?: (ctx: RecordTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.arrayIndexer`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrayIndexer?: (ctx: ArrayIndexerContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.arrayType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrayType?: (ctx: ArrayTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.dynArrayType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDynArrayType?: (ctx: DynArrayTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.string`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitString?: (ctx: StringContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.codeBlock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCodeBlock?: (ctx: CodeBlockContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.label`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLabel?: (ctx: LabelContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.unlabelledStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnlabelledStatement?: (ctx: UnlabelledStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.simpleStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSimpleStatement?: (ctx: SimpleStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.runStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRunStatement?: (ctx: RunStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.assignmentStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignmentStatement?: (ctx: AssignmentStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.procedureStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProcedureStatement?: (ctx: ProcedureStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.procedureIdentifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProcedureIdentifier?: (ctx: ProcedureIdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.actualParameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitActualParameter?: (ctx: ActualParameterContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.gotoStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGotoStatement?: (ctx: GotoStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.condition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCondition?: (ctx: ConditionContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.logicalTerm`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogicalTerm?: (ctx: LogicalTermContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.logicalFactor`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogicalFactor?: (ctx: LogicalFactorContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.quantifiedFactor`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQuantifiedFactor?: (ctx: QuantifiedFactorContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.expressionSet`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionSet?: (ctx: ExpressionSetContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.subquery`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubquery?: (ctx: SubqueryContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.sqlExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSqlExpression?: (ctx: SqlExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.sqlAlias`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSqlAlias?: (ctx: SqlAliasContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.sqlTerm`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSqlTerm?: (ctx: SqlTermContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.sqlMultiply`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSqlMultiply?: (ctx: SqlMultiplyContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.sqlFactor`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSqlFactor?: (ctx: SqlFactorContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.sqlFactor2`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSqlFactor2?: (ctx: SqlFactor2Context) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.sqlExpressionList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSqlExpressionList?: (ctx: SqlExpressionListContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.sqlLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSqlLiteral?: (ctx: SqlLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.sqlVariable`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSqlVariable?: (ctx: SqlVariableContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.sqlFunction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSqlFunction?: (ctx: SqlFunctionContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.dateFunction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDateFunction?: (ctx: DateFunctionContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.numberFunction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumberFunction?: (ctx: NumberFunctionContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.charFunction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCharFunction?: (ctx: CharFunctionContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.groupFunction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGroupFunction?: (ctx: GroupFunctionContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.otherFunction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOtherFunction?: (ctx: OtherFunctionContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.sqlPseudoColumn`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSqlPseudoColumn?: (ctx: SqlPseudoColumnContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.relationalOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRelationalOperator?: (ctx: RelationalOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.ifCondition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfCondition?: (ctx: IfConditionContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.ifCondition2`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfCondition2?: (ctx: IfCondition2Context) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.ifLogicalTerm`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfLogicalTerm?: (ctx: IfLogicalTermContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.ifLogicalFactor`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfLogicalFactor?: (ctx: IfLogicalFactorContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.simpleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSimpleExpression?: (ctx: SimpleExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.addingOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAddingOperator?: (ctx: AddingOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.term`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTerm?: (ctx: TermContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.multiplyingOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMultiplyingOperator?: (ctx: MultiplyingOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.factor`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFactor?: (ctx: FactorContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.functionDesignator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionDesignator?: (ctx: FunctionDesignatorContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.functionIdentifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionIdentifier?: (ctx: FunctionIdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.unsignedConstant`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnsignedConstant?: (ctx: UnsignedConstantContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.constant`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstant?: (ctx: ConstantContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.numericConstant`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumericConstant?: (ctx: NumericConstantContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.variable`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariable?: (ctx: VariableContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.entireVariable`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEntireVariable?: (ctx: EntireVariableContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.variableIdentifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableIdentifier?: (ctx: VariableIdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.indexingVariable`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIndexingVariable?: (ctx: IndexingVariableContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.componentVariable`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComponentVariable?: (ctx: ComponentVariableContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.recordVariable`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRecordVariable?: (ctx: RecordVariableContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.fieldIdentifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFieldIdentifier?: (ctx: FieldIdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.structuredStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStructuredStatement?: (ctx: StructuredStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.conditionalStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConditionalStatement?: (ctx: ConditionalStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.ifStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfStatement?: (ctx: IfStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.repetetiveStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRepetetiveStatement?: (ctx: RepetetiveStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.whileStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhileStatement?: (ctx: WhileStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.forStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForStatement?: (ctx: ForStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.forList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForList?: (ctx: ForListContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.controlVariable`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitControlVariable?: (ctx: ControlVariableContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.initialValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInitialValue?: (ctx: InitialValueContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.finalValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFinalValue?: (ctx: FinalValueContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.forEachStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForEachStatement?: (ctx: ForEachStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.variableList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableList?: (ctx: VariableListContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.variableOrConstantList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableOrConstantList?: (ctx: VariableOrConstantListContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.caseStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCaseStatement?: (ctx: CaseStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.otherFGLStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOtherFGLStatement?: (ctx: OtherFGLStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.otherProgramFlowStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOtherProgramFlowStatement?: (ctx: OtherProgramFlowStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.exitTypes`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExitTypes?: (ctx: ExitTypesContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.exitStatements`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExitStatements?: (ctx: ExitStatementsContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.continueStatements`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitContinueStatements?: (ctx: ContinueStatementsContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.otherStorageStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOtherStorageStatement?: (ctx: OtherStorageStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.printExpressionItem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrintExpressionItem?: (ctx: PrintExpressionItemContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.printExpressionList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrintExpressionList?: (ctx: PrintExpressionListContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.reportStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReportStatement?: (ctx: ReportStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.fieldName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFieldName?: (ctx: FieldNameContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.thruNotation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitThruNotation?: (ctx: ThruNotationContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.fieldList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFieldList?: (ctx: FieldListContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.keyList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKeyList?: (ctx: KeyListContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.constructEvents`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstructEvents?: (ctx: ConstructEventsContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.constructInsideStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstructInsideStatement?: (ctx: ConstructInsideStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.specialAttribute`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSpecialAttribute?: (ctx: SpecialAttributeContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.attribute`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAttribute?: (ctx: AttributeContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.attributeList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAttributeList?: (ctx: AttributeListContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.constructGroupStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstructGroupStatement?: (ctx: ConstructGroupStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.constructStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstructStatement?: (ctx: ConstructStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.displayArrayStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDisplayArrayStatement?: (ctx: DisplayArrayStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.displayInsideStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDisplayInsideStatement?: (ctx: DisplayInsideStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.displayEvents`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDisplayEvents?: (ctx: DisplayEventsContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.displayStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDisplayStatement?: (ctx: DisplayStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.errorStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitErrorStatement?: (ctx: ErrorStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.messageStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMessageStatement?: (ctx: MessageStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.promptStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPromptStatement?: (ctx: PromptStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.inputEvents`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInputEvents?: (ctx: InputEventsContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.inputInsideStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInputInsideStatement?: (ctx: InputInsideStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.inputGroupStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInputGroupStatement?: (ctx: InputGroupStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.inputStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInputStatement?: (ctx: InputStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.inputArrayStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInputArrayStatement?: (ctx: InputArrayStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.menuEvents`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMenuEvents?: (ctx: MenuEventsContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.menuInsideStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMenuInsideStatement?: (ctx: MenuInsideStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.menuGroupStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMenuGroupStatement?: (ctx: MenuGroupStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.menuStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMenuStatement?: (ctx: MenuStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.reservedLinePosition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReservedLinePosition?: (ctx: ReservedLinePositionContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.specialWindowAttribute`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSpecialWindowAttribute?: (ctx: SpecialWindowAttributeContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.windowAttribute`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWindowAttribute?: (ctx: WindowAttributeContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.windowAttributeList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWindowAttributeList?: (ctx: WindowAttributeListContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.optionStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOptionStatement?: (ctx: OptionStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.optionsStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOptionsStatement?: (ctx: OptionsStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.screenStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitScreenStatement?: (ctx: ScreenStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.sqlStatements`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSqlStatements?: (ctx: SqlStatementsContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.cursorManipulationStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCursorManipulationStatement?: (ctx: CursorManipulationStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.columnsList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColumnsList?: (ctx: ColumnsListContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.statementId`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatementId?: (ctx: StatementIdContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.cursorName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCursorName?: (ctx: CursorNameContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.dataType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDataType?: (ctx: DataTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.columnItem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColumnItem?: (ctx: ColumnItemContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.dataDefinitionStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDataDefinitionStatement?: (ctx: DataDefinitionStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.dataManipulationStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDataManipulationStatement?: (ctx: DataManipulationStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.sqlSelectStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSqlSelectStatement?: (ctx: SqlSelectStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.columnsTableId`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColumnsTableId?: (ctx: ColumnsTableIdContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.selectList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelectList?: (ctx: SelectListContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.headSelectStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHeadSelectStatement?: (ctx: HeadSelectStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.tableQualifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableQualifier?: (ctx: TableQualifierContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.tableIdentifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableIdentifier?: (ctx: TableIdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.fromTable`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFromTable?: (ctx: FromTableContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.tableExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableExpression?: (ctx: TableExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.fromSelectStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFromSelectStatement?: (ctx: FromSelectStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.aliasName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAliasName?: (ctx: AliasNameContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.mainSelectStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMainSelectStatement?: (ctx: MainSelectStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.unionSelectStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnionSelectStatement?: (ctx: UnionSelectStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.simpleSelectStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSimpleSelectStatement?: (ctx: SimpleSelectStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.whereStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhereStatement?: (ctx: WhereStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.groupByStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGroupByStatement?: (ctx: GroupByStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.havingStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHavingStatement?: (ctx: HavingStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.orderbyColumn`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOrderbyColumn?: (ctx: OrderbyColumnContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.orderbyStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOrderbyStatement?: (ctx: OrderbyStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.sqlLoadStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSqlLoadStatement?: (ctx: SqlLoadStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.sqlUnLoadStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSqlUnLoadStatement?: (ctx: SqlUnLoadStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.sqlInsertStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSqlInsertStatement?: (ctx: SqlInsertStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.sqlUpdateStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSqlUpdateStatement?: (ctx: SqlUpdateStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.sqlDeleteStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSqlDeleteStatement?: (ctx: SqlDeleteStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.actualParameterList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitActualParameterList?: (ctx: ActualParameterListContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.dynamicManagementStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDynamicManagementStatement?: (ctx: DynamicManagementStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.queryOptimizationStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQueryOptimizationStatement?: (ctx: QueryOptimizationStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.databaseDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDatabaseDeclaration?: (ctx: DatabaseDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.clientServerStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClientServerStatement?: (ctx: ClientServerStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.dataIntegrityStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDataIntegrityStatement?: (ctx: DataIntegrityStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.wheneverStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWheneverStatement?: (ctx: WheneverStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.wheneverType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWheneverType?: (ctx: WheneverTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.wheneverFlow`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWheneverFlow?: (ctx: WheneverFlowContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.reportDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReportDefinition?: (ctx: ReportDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.outputReport`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOutputReport?: (ctx: OutputReportContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.formatReport`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFormatReport?: (ctx: FormatReportContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.eol`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEol?: (ctx: EolContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.unsignedNumber`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnsignedNumber?: (ctx: UnsignedNumberContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.unsignedInteger`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnsignedInteger?: (ctx: UnsignedIntegerContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.unsignedReal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnsignedReal?: (ctx: UnsignedRealContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.sign`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSign?: (ctx: SignContext) => Result;

	/**
	 * Visit a parse tree produced by `informixParser.constantIdentifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstantIdentifier?: (ctx: ConstantIdentifierContext) => Result;
}

