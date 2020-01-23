// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/informix/informix.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

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
 * This interface defines a complete listener for a parse tree produced by
 * `informixParser`.
 */
export interface informixListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `informixParser.compilation_unit`.
	 * @param ctx the parse tree
	 */
	enterCompilation_unit?: (ctx: Compilation_unitContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.compilation_unit`.
	 * @param ctx the parse tree
	 */
	exitCompilation_unit?: (ctx: Compilation_unitContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.identifier`.
	 * @param ctx the parse tree
	 */
	enterIdentifier?: (ctx: IdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.identifier`.
	 * @param ctx the parse tree
	 */
	exitIdentifier?: (ctx: IdentifierContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.mainBlock`.
	 * @param ctx the parse tree
	 */
	enterMainBlock?: (ctx: MainBlockContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.mainBlock`.
	 * @param ctx the parse tree
	 */
	exitMainBlock?: (ctx: MainBlockContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.mainStatements`.
	 * @param ctx the parse tree
	 */
	enterMainStatements?: (ctx: MainStatementsContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.mainStatements`.
	 * @param ctx the parse tree
	 */
	exitMainStatements?: (ctx: MainStatementsContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.deferStatement`.
	 * @param ctx the parse tree
	 */
	enterDeferStatement?: (ctx: DeferStatementContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.deferStatement`.
	 * @param ctx the parse tree
	 */
	exitDeferStatement?: (ctx: DeferStatementContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.functionOrReportDefinitions`.
	 * @param ctx the parse tree
	 */
	enterFunctionOrReportDefinitions?: (ctx: FunctionOrReportDefinitionsContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.functionOrReportDefinitions`.
	 * @param ctx the parse tree
	 */
	exitFunctionOrReportDefinitions?: (ctx: FunctionOrReportDefinitionsContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.returnStatement`.
	 * @param ctx the parse tree
	 */
	enterReturnStatement?: (ctx: ReturnStatementContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.returnStatement`.
	 * @param ctx the parse tree
	 */
	exitReturnStatement?: (ctx: ReturnStatementContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.functionDefinition`.
	 * @param ctx the parse tree
	 */
	enterFunctionDefinition?: (ctx: FunctionDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.functionDefinition`.
	 * @param ctx the parse tree
	 */
	exitFunctionDefinition?: (ctx: FunctionDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.parameterList`.
	 * @param ctx the parse tree
	 */
	enterParameterList?: (ctx: ParameterListContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.parameterList`.
	 * @param ctx the parse tree
	 */
	exitParameterList?: (ctx: ParameterListContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.parameterGroup`.
	 * @param ctx the parse tree
	 */
	enterParameterGroup?: (ctx: ParameterGroupContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.parameterGroup`.
	 * @param ctx the parse tree
	 */
	exitParameterGroup?: (ctx: ParameterGroupContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.globalDeclaration`.
	 * @param ctx the parse tree
	 */
	enterGlobalDeclaration?: (ctx: GlobalDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.globalDeclaration`.
	 * @param ctx the parse tree
	 */
	exitGlobalDeclaration?: (ctx: GlobalDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.typeDeclarations`.
	 * @param ctx the parse tree
	 */
	enterTypeDeclarations?: (ctx: TypeDeclarationsContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.typeDeclarations`.
	 * @param ctx the parse tree
	 */
	exitTypeDeclarations?: (ctx: TypeDeclarationsContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.typeDeclaration`.
	 * @param ctx the parse tree
	 */
	enterTypeDeclaration?: (ctx: TypeDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.typeDeclaration`.
	 * @param ctx the parse tree
	 */
	exitTypeDeclaration?: (ctx: TypeDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.variableDeclaration`.
	 * @param ctx the parse tree
	 */
	enterVariableDeclaration?: (ctx: VariableDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.variableDeclaration`.
	 * @param ctx the parse tree
	 */
	exitVariableDeclaration?: (ctx: VariableDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.type`.
	 * @param ctx the parse tree
	 */
	enterType?: (ctx: TypeContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.type`.
	 * @param ctx the parse tree
	 */
	exitType?: (ctx: TypeContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.indirectType`.
	 * @param ctx the parse tree
	 */
	enterIndirectType?: (ctx: IndirectTypeContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.indirectType`.
	 * @param ctx the parse tree
	 */
	exitIndirectType?: (ctx: IndirectTypeContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.typeIdentifier`.
	 * @param ctx the parse tree
	 */
	enterTypeIdentifier?: (ctx: TypeIdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.typeIdentifier`.
	 * @param ctx the parse tree
	 */
	exitTypeIdentifier?: (ctx: TypeIdentifierContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.largeType`.
	 * @param ctx the parse tree
	 */
	enterLargeType?: (ctx: LargeTypeContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.largeType`.
	 * @param ctx the parse tree
	 */
	exitLargeType?: (ctx: LargeTypeContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.numberType`.
	 * @param ctx the parse tree
	 */
	enterNumberType?: (ctx: NumberTypeContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.numberType`.
	 * @param ctx the parse tree
	 */
	exitNumberType?: (ctx: NumberTypeContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.charType`.
	 * @param ctx the parse tree
	 */
	enterCharType?: (ctx: CharTypeContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.charType`.
	 * @param ctx the parse tree
	 */
	exitCharType?: (ctx: CharTypeContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.timeType`.
	 * @param ctx the parse tree
	 */
	enterTimeType?: (ctx: TimeTypeContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.timeType`.
	 * @param ctx the parse tree
	 */
	exitTimeType?: (ctx: TimeTypeContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.datetimeQualifier`.
	 * @param ctx the parse tree
	 */
	enterDatetimeQualifier?: (ctx: DatetimeQualifierContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.datetimeQualifier`.
	 * @param ctx the parse tree
	 */
	exitDatetimeQualifier?: (ctx: DatetimeQualifierContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.intervalQualifier`.
	 * @param ctx the parse tree
	 */
	enterIntervalQualifier?: (ctx: IntervalQualifierContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.intervalQualifier`.
	 * @param ctx the parse tree
	 */
	exitIntervalQualifier?: (ctx: IntervalQualifierContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.unitType`.
	 * @param ctx the parse tree
	 */
	enterUnitType?: (ctx: UnitTypeContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.unitType`.
	 * @param ctx the parse tree
	 */
	exitUnitType?: (ctx: UnitTypeContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.yearQualifier`.
	 * @param ctx the parse tree
	 */
	enterYearQualifier?: (ctx: YearQualifierContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.yearQualifier`.
	 * @param ctx the parse tree
	 */
	exitYearQualifier?: (ctx: YearQualifierContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.monthQualifier`.
	 * @param ctx the parse tree
	 */
	enterMonthQualifier?: (ctx: MonthQualifierContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.monthQualifier`.
	 * @param ctx the parse tree
	 */
	exitMonthQualifier?: (ctx: MonthQualifierContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.dayQualifier`.
	 * @param ctx the parse tree
	 */
	enterDayQualifier?: (ctx: DayQualifierContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.dayQualifier`.
	 * @param ctx the parse tree
	 */
	exitDayQualifier?: (ctx: DayQualifierContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.hourQualifier`.
	 * @param ctx the parse tree
	 */
	enterHourQualifier?: (ctx: HourQualifierContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.hourQualifier`.
	 * @param ctx the parse tree
	 */
	exitHourQualifier?: (ctx: HourQualifierContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.minuteQualifier`.
	 * @param ctx the parse tree
	 */
	enterMinuteQualifier?: (ctx: MinuteQualifierContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.minuteQualifier`.
	 * @param ctx the parse tree
	 */
	exitMinuteQualifier?: (ctx: MinuteQualifierContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.secondQualifier`.
	 * @param ctx the parse tree
	 */
	enterSecondQualifier?: (ctx: SecondQualifierContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.secondQualifier`.
	 * @param ctx the parse tree
	 */
	exitSecondQualifier?: (ctx: SecondQualifierContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.fractionQualifier`.
	 * @param ctx the parse tree
	 */
	enterFractionQualifier?: (ctx: FractionQualifierContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.fractionQualifier`.
	 * @param ctx the parse tree
	 */
	exitFractionQualifier?: (ctx: FractionQualifierContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.structuredType`.
	 * @param ctx the parse tree
	 */
	enterStructuredType?: (ctx: StructuredTypeContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.structuredType`.
	 * @param ctx the parse tree
	 */
	exitStructuredType?: (ctx: StructuredTypeContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.recordType`.
	 * @param ctx the parse tree
	 */
	enterRecordType?: (ctx: RecordTypeContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.recordType`.
	 * @param ctx the parse tree
	 */
	exitRecordType?: (ctx: RecordTypeContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.arrayIndexer`.
	 * @param ctx the parse tree
	 */
	enterArrayIndexer?: (ctx: ArrayIndexerContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.arrayIndexer`.
	 * @param ctx the parse tree
	 */
	exitArrayIndexer?: (ctx: ArrayIndexerContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.arrayType`.
	 * @param ctx the parse tree
	 */
	enterArrayType?: (ctx: ArrayTypeContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.arrayType`.
	 * @param ctx the parse tree
	 */
	exitArrayType?: (ctx: ArrayTypeContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.dynArrayType`.
	 * @param ctx the parse tree
	 */
	enterDynArrayType?: (ctx: DynArrayTypeContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.dynArrayType`.
	 * @param ctx the parse tree
	 */
	exitDynArrayType?: (ctx: DynArrayTypeContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.string`.
	 * @param ctx the parse tree
	 */
	enterString?: (ctx: StringContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.string`.
	 * @param ctx the parse tree
	 */
	exitString?: (ctx: StringContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement?: (ctx: StatementContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement?: (ctx: StatementContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.codeBlock`.
	 * @param ctx the parse tree
	 */
	enterCodeBlock?: (ctx: CodeBlockContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.codeBlock`.
	 * @param ctx the parse tree
	 */
	exitCodeBlock?: (ctx: CodeBlockContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.label`.
	 * @param ctx the parse tree
	 */
	enterLabel?: (ctx: LabelContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.label`.
	 * @param ctx the parse tree
	 */
	exitLabel?: (ctx: LabelContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.unlabelledStatement`.
	 * @param ctx the parse tree
	 */
	enterUnlabelledStatement?: (ctx: UnlabelledStatementContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.unlabelledStatement`.
	 * @param ctx the parse tree
	 */
	exitUnlabelledStatement?: (ctx: UnlabelledStatementContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.simpleStatement`.
	 * @param ctx the parse tree
	 */
	enterSimpleStatement?: (ctx: SimpleStatementContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.simpleStatement`.
	 * @param ctx the parse tree
	 */
	exitSimpleStatement?: (ctx: SimpleStatementContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.runStatement`.
	 * @param ctx the parse tree
	 */
	enterRunStatement?: (ctx: RunStatementContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.runStatement`.
	 * @param ctx the parse tree
	 */
	exitRunStatement?: (ctx: RunStatementContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.assignmentStatement`.
	 * @param ctx the parse tree
	 */
	enterAssignmentStatement?: (ctx: AssignmentStatementContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.assignmentStatement`.
	 * @param ctx the parse tree
	 */
	exitAssignmentStatement?: (ctx: AssignmentStatementContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.procedureStatement`.
	 * @param ctx the parse tree
	 */
	enterProcedureStatement?: (ctx: ProcedureStatementContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.procedureStatement`.
	 * @param ctx the parse tree
	 */
	exitProcedureStatement?: (ctx: ProcedureStatementContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.procedureIdentifier`.
	 * @param ctx the parse tree
	 */
	enterProcedureIdentifier?: (ctx: ProcedureIdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.procedureIdentifier`.
	 * @param ctx the parse tree
	 */
	exitProcedureIdentifier?: (ctx: ProcedureIdentifierContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.actualParameter`.
	 * @param ctx the parse tree
	 */
	enterActualParameter?: (ctx: ActualParameterContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.actualParameter`.
	 * @param ctx the parse tree
	 */
	exitActualParameter?: (ctx: ActualParameterContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.gotoStatement`.
	 * @param ctx the parse tree
	 */
	enterGotoStatement?: (ctx: GotoStatementContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.gotoStatement`.
	 * @param ctx the parse tree
	 */
	exitGotoStatement?: (ctx: GotoStatementContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.condition`.
	 * @param ctx the parse tree
	 */
	enterCondition?: (ctx: ConditionContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.condition`.
	 * @param ctx the parse tree
	 */
	exitCondition?: (ctx: ConditionContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.logicalTerm`.
	 * @param ctx the parse tree
	 */
	enterLogicalTerm?: (ctx: LogicalTermContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.logicalTerm`.
	 * @param ctx the parse tree
	 */
	exitLogicalTerm?: (ctx: LogicalTermContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.logicalFactor`.
	 * @param ctx the parse tree
	 */
	enterLogicalFactor?: (ctx: LogicalFactorContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.logicalFactor`.
	 * @param ctx the parse tree
	 */
	exitLogicalFactor?: (ctx: LogicalFactorContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.quantifiedFactor`.
	 * @param ctx the parse tree
	 */
	enterQuantifiedFactor?: (ctx: QuantifiedFactorContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.quantifiedFactor`.
	 * @param ctx the parse tree
	 */
	exitQuantifiedFactor?: (ctx: QuantifiedFactorContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.expressionSet`.
	 * @param ctx the parse tree
	 */
	enterExpressionSet?: (ctx: ExpressionSetContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.expressionSet`.
	 * @param ctx the parse tree
	 */
	exitExpressionSet?: (ctx: ExpressionSetContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.subquery`.
	 * @param ctx the parse tree
	 */
	enterSubquery?: (ctx: SubqueryContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.subquery`.
	 * @param ctx the parse tree
	 */
	exitSubquery?: (ctx: SubqueryContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.sqlExpression`.
	 * @param ctx the parse tree
	 */
	enterSqlExpression?: (ctx: SqlExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.sqlExpression`.
	 * @param ctx the parse tree
	 */
	exitSqlExpression?: (ctx: SqlExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.sqlAlias`.
	 * @param ctx the parse tree
	 */
	enterSqlAlias?: (ctx: SqlAliasContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.sqlAlias`.
	 * @param ctx the parse tree
	 */
	exitSqlAlias?: (ctx: SqlAliasContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.sqlTerm`.
	 * @param ctx the parse tree
	 */
	enterSqlTerm?: (ctx: SqlTermContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.sqlTerm`.
	 * @param ctx the parse tree
	 */
	exitSqlTerm?: (ctx: SqlTermContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.sqlMultiply`.
	 * @param ctx the parse tree
	 */
	enterSqlMultiply?: (ctx: SqlMultiplyContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.sqlMultiply`.
	 * @param ctx the parse tree
	 */
	exitSqlMultiply?: (ctx: SqlMultiplyContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.sqlFactor`.
	 * @param ctx the parse tree
	 */
	enterSqlFactor?: (ctx: SqlFactorContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.sqlFactor`.
	 * @param ctx the parse tree
	 */
	exitSqlFactor?: (ctx: SqlFactorContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.sqlFactor2`.
	 * @param ctx the parse tree
	 */
	enterSqlFactor2?: (ctx: SqlFactor2Context) => void;
	/**
	 * Exit a parse tree produced by `informixParser.sqlFactor2`.
	 * @param ctx the parse tree
	 */
	exitSqlFactor2?: (ctx: SqlFactor2Context) => void;

	/**
	 * Enter a parse tree produced by `informixParser.sqlExpressionList`.
	 * @param ctx the parse tree
	 */
	enterSqlExpressionList?: (ctx: SqlExpressionListContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.sqlExpressionList`.
	 * @param ctx the parse tree
	 */
	exitSqlExpressionList?: (ctx: SqlExpressionListContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.sqlLiteral`.
	 * @param ctx the parse tree
	 */
	enterSqlLiteral?: (ctx: SqlLiteralContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.sqlLiteral`.
	 * @param ctx the parse tree
	 */
	exitSqlLiteral?: (ctx: SqlLiteralContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.sqlVariable`.
	 * @param ctx the parse tree
	 */
	enterSqlVariable?: (ctx: SqlVariableContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.sqlVariable`.
	 * @param ctx the parse tree
	 */
	exitSqlVariable?: (ctx: SqlVariableContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.sqlFunction`.
	 * @param ctx the parse tree
	 */
	enterSqlFunction?: (ctx: SqlFunctionContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.sqlFunction`.
	 * @param ctx the parse tree
	 */
	exitSqlFunction?: (ctx: SqlFunctionContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.dateFunction`.
	 * @param ctx the parse tree
	 */
	enterDateFunction?: (ctx: DateFunctionContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.dateFunction`.
	 * @param ctx the parse tree
	 */
	exitDateFunction?: (ctx: DateFunctionContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.numberFunction`.
	 * @param ctx the parse tree
	 */
	enterNumberFunction?: (ctx: NumberFunctionContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.numberFunction`.
	 * @param ctx the parse tree
	 */
	exitNumberFunction?: (ctx: NumberFunctionContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.charFunction`.
	 * @param ctx the parse tree
	 */
	enterCharFunction?: (ctx: CharFunctionContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.charFunction`.
	 * @param ctx the parse tree
	 */
	exitCharFunction?: (ctx: CharFunctionContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.groupFunction`.
	 * @param ctx the parse tree
	 */
	enterGroupFunction?: (ctx: GroupFunctionContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.groupFunction`.
	 * @param ctx the parse tree
	 */
	exitGroupFunction?: (ctx: GroupFunctionContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.otherFunction`.
	 * @param ctx the parse tree
	 */
	enterOtherFunction?: (ctx: OtherFunctionContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.otherFunction`.
	 * @param ctx the parse tree
	 */
	exitOtherFunction?: (ctx: OtherFunctionContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.sqlPseudoColumn`.
	 * @param ctx the parse tree
	 */
	enterSqlPseudoColumn?: (ctx: SqlPseudoColumnContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.sqlPseudoColumn`.
	 * @param ctx the parse tree
	 */
	exitSqlPseudoColumn?: (ctx: SqlPseudoColumnContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.relationalOperator`.
	 * @param ctx the parse tree
	 */
	enterRelationalOperator?: (ctx: RelationalOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.relationalOperator`.
	 * @param ctx the parse tree
	 */
	exitRelationalOperator?: (ctx: RelationalOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.ifCondition`.
	 * @param ctx the parse tree
	 */
	enterIfCondition?: (ctx: IfConditionContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.ifCondition`.
	 * @param ctx the parse tree
	 */
	exitIfCondition?: (ctx: IfConditionContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.ifCondition2`.
	 * @param ctx the parse tree
	 */
	enterIfCondition2?: (ctx: IfCondition2Context) => void;
	/**
	 * Exit a parse tree produced by `informixParser.ifCondition2`.
	 * @param ctx the parse tree
	 */
	exitIfCondition2?: (ctx: IfCondition2Context) => void;

	/**
	 * Enter a parse tree produced by `informixParser.ifLogicalTerm`.
	 * @param ctx the parse tree
	 */
	enterIfLogicalTerm?: (ctx: IfLogicalTermContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.ifLogicalTerm`.
	 * @param ctx the parse tree
	 */
	exitIfLogicalTerm?: (ctx: IfLogicalTermContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.ifLogicalFactor`.
	 * @param ctx the parse tree
	 */
	enterIfLogicalFactor?: (ctx: IfLogicalFactorContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.ifLogicalFactor`.
	 * @param ctx the parse tree
	 */
	exitIfLogicalFactor?: (ctx: IfLogicalFactorContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.simpleExpression`.
	 * @param ctx the parse tree
	 */
	enterSimpleExpression?: (ctx: SimpleExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.simpleExpression`.
	 * @param ctx the parse tree
	 */
	exitSimpleExpression?: (ctx: SimpleExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.addingOperator`.
	 * @param ctx the parse tree
	 */
	enterAddingOperator?: (ctx: AddingOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.addingOperator`.
	 * @param ctx the parse tree
	 */
	exitAddingOperator?: (ctx: AddingOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.term`.
	 * @param ctx the parse tree
	 */
	enterTerm?: (ctx: TermContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.term`.
	 * @param ctx the parse tree
	 */
	exitTerm?: (ctx: TermContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.multiplyingOperator`.
	 * @param ctx the parse tree
	 */
	enterMultiplyingOperator?: (ctx: MultiplyingOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.multiplyingOperator`.
	 * @param ctx the parse tree
	 */
	exitMultiplyingOperator?: (ctx: MultiplyingOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.factor`.
	 * @param ctx the parse tree
	 */
	enterFactor?: (ctx: FactorContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.factor`.
	 * @param ctx the parse tree
	 */
	exitFactor?: (ctx: FactorContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.functionDesignator`.
	 * @param ctx the parse tree
	 */
	enterFunctionDesignator?: (ctx: FunctionDesignatorContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.functionDesignator`.
	 * @param ctx the parse tree
	 */
	exitFunctionDesignator?: (ctx: FunctionDesignatorContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.functionIdentifier`.
	 * @param ctx the parse tree
	 */
	enterFunctionIdentifier?: (ctx: FunctionIdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.functionIdentifier`.
	 * @param ctx the parse tree
	 */
	exitFunctionIdentifier?: (ctx: FunctionIdentifierContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.unsignedConstant`.
	 * @param ctx the parse tree
	 */
	enterUnsignedConstant?: (ctx: UnsignedConstantContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.unsignedConstant`.
	 * @param ctx the parse tree
	 */
	exitUnsignedConstant?: (ctx: UnsignedConstantContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.constant`.
	 * @param ctx the parse tree
	 */
	enterConstant?: (ctx: ConstantContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.constant`.
	 * @param ctx the parse tree
	 */
	exitConstant?: (ctx: ConstantContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.numericConstant`.
	 * @param ctx the parse tree
	 */
	enterNumericConstant?: (ctx: NumericConstantContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.numericConstant`.
	 * @param ctx the parse tree
	 */
	exitNumericConstant?: (ctx: NumericConstantContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.variable`.
	 * @param ctx the parse tree
	 */
	enterVariable?: (ctx: VariableContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.variable`.
	 * @param ctx the parse tree
	 */
	exitVariable?: (ctx: VariableContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.entireVariable`.
	 * @param ctx the parse tree
	 */
	enterEntireVariable?: (ctx: EntireVariableContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.entireVariable`.
	 * @param ctx the parse tree
	 */
	exitEntireVariable?: (ctx: EntireVariableContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.variableIdentifier`.
	 * @param ctx the parse tree
	 */
	enterVariableIdentifier?: (ctx: VariableIdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.variableIdentifier`.
	 * @param ctx the parse tree
	 */
	exitVariableIdentifier?: (ctx: VariableIdentifierContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.indexingVariable`.
	 * @param ctx the parse tree
	 */
	enterIndexingVariable?: (ctx: IndexingVariableContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.indexingVariable`.
	 * @param ctx the parse tree
	 */
	exitIndexingVariable?: (ctx: IndexingVariableContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.componentVariable`.
	 * @param ctx the parse tree
	 */
	enterComponentVariable?: (ctx: ComponentVariableContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.componentVariable`.
	 * @param ctx the parse tree
	 */
	exitComponentVariable?: (ctx: ComponentVariableContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.recordVariable`.
	 * @param ctx the parse tree
	 */
	enterRecordVariable?: (ctx: RecordVariableContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.recordVariable`.
	 * @param ctx the parse tree
	 */
	exitRecordVariable?: (ctx: RecordVariableContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.fieldIdentifier`.
	 * @param ctx the parse tree
	 */
	enterFieldIdentifier?: (ctx: FieldIdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.fieldIdentifier`.
	 * @param ctx the parse tree
	 */
	exitFieldIdentifier?: (ctx: FieldIdentifierContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.structuredStatement`.
	 * @param ctx the parse tree
	 */
	enterStructuredStatement?: (ctx: StructuredStatementContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.structuredStatement`.
	 * @param ctx the parse tree
	 */
	exitStructuredStatement?: (ctx: StructuredStatementContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.conditionalStatement`.
	 * @param ctx the parse tree
	 */
	enterConditionalStatement?: (ctx: ConditionalStatementContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.conditionalStatement`.
	 * @param ctx the parse tree
	 */
	exitConditionalStatement?: (ctx: ConditionalStatementContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.ifStatement`.
	 * @param ctx the parse tree
	 */
	enterIfStatement?: (ctx: IfStatementContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.ifStatement`.
	 * @param ctx the parse tree
	 */
	exitIfStatement?: (ctx: IfStatementContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.repetetiveStatement`.
	 * @param ctx the parse tree
	 */
	enterRepetetiveStatement?: (ctx: RepetetiveStatementContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.repetetiveStatement`.
	 * @param ctx the parse tree
	 */
	exitRepetetiveStatement?: (ctx: RepetetiveStatementContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.whileStatement`.
	 * @param ctx the parse tree
	 */
	enterWhileStatement?: (ctx: WhileStatementContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.whileStatement`.
	 * @param ctx the parse tree
	 */
	exitWhileStatement?: (ctx: WhileStatementContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.forStatement`.
	 * @param ctx the parse tree
	 */
	enterForStatement?: (ctx: ForStatementContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.forStatement`.
	 * @param ctx the parse tree
	 */
	exitForStatement?: (ctx: ForStatementContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.forList`.
	 * @param ctx the parse tree
	 */
	enterForList?: (ctx: ForListContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.forList`.
	 * @param ctx the parse tree
	 */
	exitForList?: (ctx: ForListContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.controlVariable`.
	 * @param ctx the parse tree
	 */
	enterControlVariable?: (ctx: ControlVariableContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.controlVariable`.
	 * @param ctx the parse tree
	 */
	exitControlVariable?: (ctx: ControlVariableContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.initialValue`.
	 * @param ctx the parse tree
	 */
	enterInitialValue?: (ctx: InitialValueContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.initialValue`.
	 * @param ctx the parse tree
	 */
	exitInitialValue?: (ctx: InitialValueContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.finalValue`.
	 * @param ctx the parse tree
	 */
	enterFinalValue?: (ctx: FinalValueContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.finalValue`.
	 * @param ctx the parse tree
	 */
	exitFinalValue?: (ctx: FinalValueContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.forEachStatement`.
	 * @param ctx the parse tree
	 */
	enterForEachStatement?: (ctx: ForEachStatementContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.forEachStatement`.
	 * @param ctx the parse tree
	 */
	exitForEachStatement?: (ctx: ForEachStatementContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.variableList`.
	 * @param ctx the parse tree
	 */
	enterVariableList?: (ctx: VariableListContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.variableList`.
	 * @param ctx the parse tree
	 */
	exitVariableList?: (ctx: VariableListContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.variableOrConstantList`.
	 * @param ctx the parse tree
	 */
	enterVariableOrConstantList?: (ctx: VariableOrConstantListContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.variableOrConstantList`.
	 * @param ctx the parse tree
	 */
	exitVariableOrConstantList?: (ctx: VariableOrConstantListContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.caseStatement`.
	 * @param ctx the parse tree
	 */
	enterCaseStatement?: (ctx: CaseStatementContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.caseStatement`.
	 * @param ctx the parse tree
	 */
	exitCaseStatement?: (ctx: CaseStatementContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.otherFGLStatement`.
	 * @param ctx the parse tree
	 */
	enterOtherFGLStatement?: (ctx: OtherFGLStatementContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.otherFGLStatement`.
	 * @param ctx the parse tree
	 */
	exitOtherFGLStatement?: (ctx: OtherFGLStatementContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.otherProgramFlowStatement`.
	 * @param ctx the parse tree
	 */
	enterOtherProgramFlowStatement?: (ctx: OtherProgramFlowStatementContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.otherProgramFlowStatement`.
	 * @param ctx the parse tree
	 */
	exitOtherProgramFlowStatement?: (ctx: OtherProgramFlowStatementContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.exitTypes`.
	 * @param ctx the parse tree
	 */
	enterExitTypes?: (ctx: ExitTypesContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.exitTypes`.
	 * @param ctx the parse tree
	 */
	exitExitTypes?: (ctx: ExitTypesContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.exitStatements`.
	 * @param ctx the parse tree
	 */
	enterExitStatements?: (ctx: ExitStatementsContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.exitStatements`.
	 * @param ctx the parse tree
	 */
	exitExitStatements?: (ctx: ExitStatementsContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.continueStatements`.
	 * @param ctx the parse tree
	 */
	enterContinueStatements?: (ctx: ContinueStatementsContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.continueStatements`.
	 * @param ctx the parse tree
	 */
	exitContinueStatements?: (ctx: ContinueStatementsContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.otherStorageStatement`.
	 * @param ctx the parse tree
	 */
	enterOtherStorageStatement?: (ctx: OtherStorageStatementContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.otherStorageStatement`.
	 * @param ctx the parse tree
	 */
	exitOtherStorageStatement?: (ctx: OtherStorageStatementContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.printExpressionItem`.
	 * @param ctx the parse tree
	 */
	enterPrintExpressionItem?: (ctx: PrintExpressionItemContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.printExpressionItem`.
	 * @param ctx the parse tree
	 */
	exitPrintExpressionItem?: (ctx: PrintExpressionItemContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.printExpressionList`.
	 * @param ctx the parse tree
	 */
	enterPrintExpressionList?: (ctx: PrintExpressionListContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.printExpressionList`.
	 * @param ctx the parse tree
	 */
	exitPrintExpressionList?: (ctx: PrintExpressionListContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.reportStatement`.
	 * @param ctx the parse tree
	 */
	enterReportStatement?: (ctx: ReportStatementContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.reportStatement`.
	 * @param ctx the parse tree
	 */
	exitReportStatement?: (ctx: ReportStatementContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.fieldName`.
	 * @param ctx the parse tree
	 */
	enterFieldName?: (ctx: FieldNameContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.fieldName`.
	 * @param ctx the parse tree
	 */
	exitFieldName?: (ctx: FieldNameContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.thruNotation`.
	 * @param ctx the parse tree
	 */
	enterThruNotation?: (ctx: ThruNotationContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.thruNotation`.
	 * @param ctx the parse tree
	 */
	exitThruNotation?: (ctx: ThruNotationContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.fieldList`.
	 * @param ctx the parse tree
	 */
	enterFieldList?: (ctx: FieldListContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.fieldList`.
	 * @param ctx the parse tree
	 */
	exitFieldList?: (ctx: FieldListContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.keyList`.
	 * @param ctx the parse tree
	 */
	enterKeyList?: (ctx: KeyListContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.keyList`.
	 * @param ctx the parse tree
	 */
	exitKeyList?: (ctx: KeyListContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.constructEvents`.
	 * @param ctx the parse tree
	 */
	enterConstructEvents?: (ctx: ConstructEventsContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.constructEvents`.
	 * @param ctx the parse tree
	 */
	exitConstructEvents?: (ctx: ConstructEventsContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.constructInsideStatement`.
	 * @param ctx the parse tree
	 */
	enterConstructInsideStatement?: (ctx: ConstructInsideStatementContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.constructInsideStatement`.
	 * @param ctx the parse tree
	 */
	exitConstructInsideStatement?: (ctx: ConstructInsideStatementContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.specialAttribute`.
	 * @param ctx the parse tree
	 */
	enterSpecialAttribute?: (ctx: SpecialAttributeContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.specialAttribute`.
	 * @param ctx the parse tree
	 */
	exitSpecialAttribute?: (ctx: SpecialAttributeContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.attribute`.
	 * @param ctx the parse tree
	 */
	enterAttribute?: (ctx: AttributeContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.attribute`.
	 * @param ctx the parse tree
	 */
	exitAttribute?: (ctx: AttributeContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.attributeList`.
	 * @param ctx the parse tree
	 */
	enterAttributeList?: (ctx: AttributeListContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.attributeList`.
	 * @param ctx the parse tree
	 */
	exitAttributeList?: (ctx: AttributeListContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.constructGroupStatement`.
	 * @param ctx the parse tree
	 */
	enterConstructGroupStatement?: (ctx: ConstructGroupStatementContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.constructGroupStatement`.
	 * @param ctx the parse tree
	 */
	exitConstructGroupStatement?: (ctx: ConstructGroupStatementContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.constructStatement`.
	 * @param ctx the parse tree
	 */
	enterConstructStatement?: (ctx: ConstructStatementContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.constructStatement`.
	 * @param ctx the parse tree
	 */
	exitConstructStatement?: (ctx: ConstructStatementContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.displayArrayStatement`.
	 * @param ctx the parse tree
	 */
	enterDisplayArrayStatement?: (ctx: DisplayArrayStatementContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.displayArrayStatement`.
	 * @param ctx the parse tree
	 */
	exitDisplayArrayStatement?: (ctx: DisplayArrayStatementContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.displayInsideStatement`.
	 * @param ctx the parse tree
	 */
	enterDisplayInsideStatement?: (ctx: DisplayInsideStatementContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.displayInsideStatement`.
	 * @param ctx the parse tree
	 */
	exitDisplayInsideStatement?: (ctx: DisplayInsideStatementContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.displayEvents`.
	 * @param ctx the parse tree
	 */
	enterDisplayEvents?: (ctx: DisplayEventsContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.displayEvents`.
	 * @param ctx the parse tree
	 */
	exitDisplayEvents?: (ctx: DisplayEventsContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.displayStatement`.
	 * @param ctx the parse tree
	 */
	enterDisplayStatement?: (ctx: DisplayStatementContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.displayStatement`.
	 * @param ctx the parse tree
	 */
	exitDisplayStatement?: (ctx: DisplayStatementContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.errorStatement`.
	 * @param ctx the parse tree
	 */
	enterErrorStatement?: (ctx: ErrorStatementContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.errorStatement`.
	 * @param ctx the parse tree
	 */
	exitErrorStatement?: (ctx: ErrorStatementContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.messageStatement`.
	 * @param ctx the parse tree
	 */
	enterMessageStatement?: (ctx: MessageStatementContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.messageStatement`.
	 * @param ctx the parse tree
	 */
	exitMessageStatement?: (ctx: MessageStatementContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.promptStatement`.
	 * @param ctx the parse tree
	 */
	enterPromptStatement?: (ctx: PromptStatementContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.promptStatement`.
	 * @param ctx the parse tree
	 */
	exitPromptStatement?: (ctx: PromptStatementContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.inputEvents`.
	 * @param ctx the parse tree
	 */
	enterInputEvents?: (ctx: InputEventsContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.inputEvents`.
	 * @param ctx the parse tree
	 */
	exitInputEvents?: (ctx: InputEventsContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.inputInsideStatement`.
	 * @param ctx the parse tree
	 */
	enterInputInsideStatement?: (ctx: InputInsideStatementContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.inputInsideStatement`.
	 * @param ctx the parse tree
	 */
	exitInputInsideStatement?: (ctx: InputInsideStatementContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.inputGroupStatement`.
	 * @param ctx the parse tree
	 */
	enterInputGroupStatement?: (ctx: InputGroupStatementContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.inputGroupStatement`.
	 * @param ctx the parse tree
	 */
	exitInputGroupStatement?: (ctx: InputGroupStatementContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.inputStatement`.
	 * @param ctx the parse tree
	 */
	enterInputStatement?: (ctx: InputStatementContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.inputStatement`.
	 * @param ctx the parse tree
	 */
	exitInputStatement?: (ctx: InputStatementContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.inputArrayStatement`.
	 * @param ctx the parse tree
	 */
	enterInputArrayStatement?: (ctx: InputArrayStatementContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.inputArrayStatement`.
	 * @param ctx the parse tree
	 */
	exitInputArrayStatement?: (ctx: InputArrayStatementContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.menuEvents`.
	 * @param ctx the parse tree
	 */
	enterMenuEvents?: (ctx: MenuEventsContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.menuEvents`.
	 * @param ctx the parse tree
	 */
	exitMenuEvents?: (ctx: MenuEventsContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.menuInsideStatement`.
	 * @param ctx the parse tree
	 */
	enterMenuInsideStatement?: (ctx: MenuInsideStatementContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.menuInsideStatement`.
	 * @param ctx the parse tree
	 */
	exitMenuInsideStatement?: (ctx: MenuInsideStatementContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.menuGroupStatement`.
	 * @param ctx the parse tree
	 */
	enterMenuGroupStatement?: (ctx: MenuGroupStatementContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.menuGroupStatement`.
	 * @param ctx the parse tree
	 */
	exitMenuGroupStatement?: (ctx: MenuGroupStatementContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.menuStatement`.
	 * @param ctx the parse tree
	 */
	enterMenuStatement?: (ctx: MenuStatementContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.menuStatement`.
	 * @param ctx the parse tree
	 */
	exitMenuStatement?: (ctx: MenuStatementContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.reservedLinePosition`.
	 * @param ctx the parse tree
	 */
	enterReservedLinePosition?: (ctx: ReservedLinePositionContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.reservedLinePosition`.
	 * @param ctx the parse tree
	 */
	exitReservedLinePosition?: (ctx: ReservedLinePositionContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.specialWindowAttribute`.
	 * @param ctx the parse tree
	 */
	enterSpecialWindowAttribute?: (ctx: SpecialWindowAttributeContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.specialWindowAttribute`.
	 * @param ctx the parse tree
	 */
	exitSpecialWindowAttribute?: (ctx: SpecialWindowAttributeContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.windowAttribute`.
	 * @param ctx the parse tree
	 */
	enterWindowAttribute?: (ctx: WindowAttributeContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.windowAttribute`.
	 * @param ctx the parse tree
	 */
	exitWindowAttribute?: (ctx: WindowAttributeContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.windowAttributeList`.
	 * @param ctx the parse tree
	 */
	enterWindowAttributeList?: (ctx: WindowAttributeListContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.windowAttributeList`.
	 * @param ctx the parse tree
	 */
	exitWindowAttributeList?: (ctx: WindowAttributeListContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.optionStatement`.
	 * @param ctx the parse tree
	 */
	enterOptionStatement?: (ctx: OptionStatementContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.optionStatement`.
	 * @param ctx the parse tree
	 */
	exitOptionStatement?: (ctx: OptionStatementContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.optionsStatement`.
	 * @param ctx the parse tree
	 */
	enterOptionsStatement?: (ctx: OptionsStatementContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.optionsStatement`.
	 * @param ctx the parse tree
	 */
	exitOptionsStatement?: (ctx: OptionsStatementContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.screenStatement`.
	 * @param ctx the parse tree
	 */
	enterScreenStatement?: (ctx: ScreenStatementContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.screenStatement`.
	 * @param ctx the parse tree
	 */
	exitScreenStatement?: (ctx: ScreenStatementContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.sqlStatements`.
	 * @param ctx the parse tree
	 */
	enterSqlStatements?: (ctx: SqlStatementsContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.sqlStatements`.
	 * @param ctx the parse tree
	 */
	exitSqlStatements?: (ctx: SqlStatementsContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.cursorManipulationStatement`.
	 * @param ctx the parse tree
	 */
	enterCursorManipulationStatement?: (ctx: CursorManipulationStatementContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.cursorManipulationStatement`.
	 * @param ctx the parse tree
	 */
	exitCursorManipulationStatement?: (ctx: CursorManipulationStatementContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.columnsList`.
	 * @param ctx the parse tree
	 */
	enterColumnsList?: (ctx: ColumnsListContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.columnsList`.
	 * @param ctx the parse tree
	 */
	exitColumnsList?: (ctx: ColumnsListContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.statementId`.
	 * @param ctx the parse tree
	 */
	enterStatementId?: (ctx: StatementIdContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.statementId`.
	 * @param ctx the parse tree
	 */
	exitStatementId?: (ctx: StatementIdContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.cursorName`.
	 * @param ctx the parse tree
	 */
	enterCursorName?: (ctx: CursorNameContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.cursorName`.
	 * @param ctx the parse tree
	 */
	exitCursorName?: (ctx: CursorNameContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.dataType`.
	 * @param ctx the parse tree
	 */
	enterDataType?: (ctx: DataTypeContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.dataType`.
	 * @param ctx the parse tree
	 */
	exitDataType?: (ctx: DataTypeContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.columnItem`.
	 * @param ctx the parse tree
	 */
	enterColumnItem?: (ctx: ColumnItemContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.columnItem`.
	 * @param ctx the parse tree
	 */
	exitColumnItem?: (ctx: ColumnItemContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.dataDefinitionStatement`.
	 * @param ctx the parse tree
	 */
	enterDataDefinitionStatement?: (ctx: DataDefinitionStatementContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.dataDefinitionStatement`.
	 * @param ctx the parse tree
	 */
	exitDataDefinitionStatement?: (ctx: DataDefinitionStatementContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.dataManipulationStatement`.
	 * @param ctx the parse tree
	 */
	enterDataManipulationStatement?: (ctx: DataManipulationStatementContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.dataManipulationStatement`.
	 * @param ctx the parse tree
	 */
	exitDataManipulationStatement?: (ctx: DataManipulationStatementContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.sqlSelectStatement`.
	 * @param ctx the parse tree
	 */
	enterSqlSelectStatement?: (ctx: SqlSelectStatementContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.sqlSelectStatement`.
	 * @param ctx the parse tree
	 */
	exitSqlSelectStatement?: (ctx: SqlSelectStatementContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.columnsTableId`.
	 * @param ctx the parse tree
	 */
	enterColumnsTableId?: (ctx: ColumnsTableIdContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.columnsTableId`.
	 * @param ctx the parse tree
	 */
	exitColumnsTableId?: (ctx: ColumnsTableIdContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.selectList`.
	 * @param ctx the parse tree
	 */
	enterSelectList?: (ctx: SelectListContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.selectList`.
	 * @param ctx the parse tree
	 */
	exitSelectList?: (ctx: SelectListContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.headSelectStatement`.
	 * @param ctx the parse tree
	 */
	enterHeadSelectStatement?: (ctx: HeadSelectStatementContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.headSelectStatement`.
	 * @param ctx the parse tree
	 */
	exitHeadSelectStatement?: (ctx: HeadSelectStatementContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.tableQualifier`.
	 * @param ctx the parse tree
	 */
	enterTableQualifier?: (ctx: TableQualifierContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.tableQualifier`.
	 * @param ctx the parse tree
	 */
	exitTableQualifier?: (ctx: TableQualifierContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.tableIdentifier`.
	 * @param ctx the parse tree
	 */
	enterTableIdentifier?: (ctx: TableIdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.tableIdentifier`.
	 * @param ctx the parse tree
	 */
	exitTableIdentifier?: (ctx: TableIdentifierContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.fromTable`.
	 * @param ctx the parse tree
	 */
	enterFromTable?: (ctx: FromTableContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.fromTable`.
	 * @param ctx the parse tree
	 */
	exitFromTable?: (ctx: FromTableContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.tableExpression`.
	 * @param ctx the parse tree
	 */
	enterTableExpression?: (ctx: TableExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.tableExpression`.
	 * @param ctx the parse tree
	 */
	exitTableExpression?: (ctx: TableExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.fromSelectStatement`.
	 * @param ctx the parse tree
	 */
	enterFromSelectStatement?: (ctx: FromSelectStatementContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.fromSelectStatement`.
	 * @param ctx the parse tree
	 */
	exitFromSelectStatement?: (ctx: FromSelectStatementContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.aliasName`.
	 * @param ctx the parse tree
	 */
	enterAliasName?: (ctx: AliasNameContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.aliasName`.
	 * @param ctx the parse tree
	 */
	exitAliasName?: (ctx: AliasNameContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.mainSelectStatement`.
	 * @param ctx the parse tree
	 */
	enterMainSelectStatement?: (ctx: MainSelectStatementContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.mainSelectStatement`.
	 * @param ctx the parse tree
	 */
	exitMainSelectStatement?: (ctx: MainSelectStatementContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.unionSelectStatement`.
	 * @param ctx the parse tree
	 */
	enterUnionSelectStatement?: (ctx: UnionSelectStatementContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.unionSelectStatement`.
	 * @param ctx the parse tree
	 */
	exitUnionSelectStatement?: (ctx: UnionSelectStatementContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.simpleSelectStatement`.
	 * @param ctx the parse tree
	 */
	enterSimpleSelectStatement?: (ctx: SimpleSelectStatementContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.simpleSelectStatement`.
	 * @param ctx the parse tree
	 */
	exitSimpleSelectStatement?: (ctx: SimpleSelectStatementContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.whereStatement`.
	 * @param ctx the parse tree
	 */
	enterWhereStatement?: (ctx: WhereStatementContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.whereStatement`.
	 * @param ctx the parse tree
	 */
	exitWhereStatement?: (ctx: WhereStatementContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.groupByStatement`.
	 * @param ctx the parse tree
	 */
	enterGroupByStatement?: (ctx: GroupByStatementContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.groupByStatement`.
	 * @param ctx the parse tree
	 */
	exitGroupByStatement?: (ctx: GroupByStatementContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.havingStatement`.
	 * @param ctx the parse tree
	 */
	enterHavingStatement?: (ctx: HavingStatementContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.havingStatement`.
	 * @param ctx the parse tree
	 */
	exitHavingStatement?: (ctx: HavingStatementContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.orderbyColumn`.
	 * @param ctx the parse tree
	 */
	enterOrderbyColumn?: (ctx: OrderbyColumnContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.orderbyColumn`.
	 * @param ctx the parse tree
	 */
	exitOrderbyColumn?: (ctx: OrderbyColumnContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.orderbyStatement`.
	 * @param ctx the parse tree
	 */
	enterOrderbyStatement?: (ctx: OrderbyStatementContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.orderbyStatement`.
	 * @param ctx the parse tree
	 */
	exitOrderbyStatement?: (ctx: OrderbyStatementContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.sqlLoadStatement`.
	 * @param ctx the parse tree
	 */
	enterSqlLoadStatement?: (ctx: SqlLoadStatementContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.sqlLoadStatement`.
	 * @param ctx the parse tree
	 */
	exitSqlLoadStatement?: (ctx: SqlLoadStatementContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.sqlUnLoadStatement`.
	 * @param ctx the parse tree
	 */
	enterSqlUnLoadStatement?: (ctx: SqlUnLoadStatementContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.sqlUnLoadStatement`.
	 * @param ctx the parse tree
	 */
	exitSqlUnLoadStatement?: (ctx: SqlUnLoadStatementContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.sqlInsertStatement`.
	 * @param ctx the parse tree
	 */
	enterSqlInsertStatement?: (ctx: SqlInsertStatementContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.sqlInsertStatement`.
	 * @param ctx the parse tree
	 */
	exitSqlInsertStatement?: (ctx: SqlInsertStatementContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.sqlUpdateStatement`.
	 * @param ctx the parse tree
	 */
	enterSqlUpdateStatement?: (ctx: SqlUpdateStatementContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.sqlUpdateStatement`.
	 * @param ctx the parse tree
	 */
	exitSqlUpdateStatement?: (ctx: SqlUpdateStatementContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.sqlDeleteStatement`.
	 * @param ctx the parse tree
	 */
	enterSqlDeleteStatement?: (ctx: SqlDeleteStatementContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.sqlDeleteStatement`.
	 * @param ctx the parse tree
	 */
	exitSqlDeleteStatement?: (ctx: SqlDeleteStatementContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.actualParameterList`.
	 * @param ctx the parse tree
	 */
	enterActualParameterList?: (ctx: ActualParameterListContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.actualParameterList`.
	 * @param ctx the parse tree
	 */
	exitActualParameterList?: (ctx: ActualParameterListContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.dynamicManagementStatement`.
	 * @param ctx the parse tree
	 */
	enterDynamicManagementStatement?: (ctx: DynamicManagementStatementContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.dynamicManagementStatement`.
	 * @param ctx the parse tree
	 */
	exitDynamicManagementStatement?: (ctx: DynamicManagementStatementContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.queryOptimizationStatement`.
	 * @param ctx the parse tree
	 */
	enterQueryOptimizationStatement?: (ctx: QueryOptimizationStatementContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.queryOptimizationStatement`.
	 * @param ctx the parse tree
	 */
	exitQueryOptimizationStatement?: (ctx: QueryOptimizationStatementContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.databaseDeclaration`.
	 * @param ctx the parse tree
	 */
	enterDatabaseDeclaration?: (ctx: DatabaseDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.databaseDeclaration`.
	 * @param ctx the parse tree
	 */
	exitDatabaseDeclaration?: (ctx: DatabaseDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.clientServerStatement`.
	 * @param ctx the parse tree
	 */
	enterClientServerStatement?: (ctx: ClientServerStatementContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.clientServerStatement`.
	 * @param ctx the parse tree
	 */
	exitClientServerStatement?: (ctx: ClientServerStatementContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.dataIntegrityStatement`.
	 * @param ctx the parse tree
	 */
	enterDataIntegrityStatement?: (ctx: DataIntegrityStatementContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.dataIntegrityStatement`.
	 * @param ctx the parse tree
	 */
	exitDataIntegrityStatement?: (ctx: DataIntegrityStatementContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.wheneverStatement`.
	 * @param ctx the parse tree
	 */
	enterWheneverStatement?: (ctx: WheneverStatementContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.wheneverStatement`.
	 * @param ctx the parse tree
	 */
	exitWheneverStatement?: (ctx: WheneverStatementContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.wheneverType`.
	 * @param ctx the parse tree
	 */
	enterWheneverType?: (ctx: WheneverTypeContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.wheneverType`.
	 * @param ctx the parse tree
	 */
	exitWheneverType?: (ctx: WheneverTypeContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.wheneverFlow`.
	 * @param ctx the parse tree
	 */
	enterWheneverFlow?: (ctx: WheneverFlowContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.wheneverFlow`.
	 * @param ctx the parse tree
	 */
	exitWheneverFlow?: (ctx: WheneverFlowContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.reportDefinition`.
	 * @param ctx the parse tree
	 */
	enterReportDefinition?: (ctx: ReportDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.reportDefinition`.
	 * @param ctx the parse tree
	 */
	exitReportDefinition?: (ctx: ReportDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.outputReport`.
	 * @param ctx the parse tree
	 */
	enterOutputReport?: (ctx: OutputReportContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.outputReport`.
	 * @param ctx the parse tree
	 */
	exitOutputReport?: (ctx: OutputReportContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.formatReport`.
	 * @param ctx the parse tree
	 */
	enterFormatReport?: (ctx: FormatReportContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.formatReport`.
	 * @param ctx the parse tree
	 */
	exitFormatReport?: (ctx: FormatReportContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.eol`.
	 * @param ctx the parse tree
	 */
	enterEol?: (ctx: EolContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.eol`.
	 * @param ctx the parse tree
	 */
	exitEol?: (ctx: EolContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.unsignedNumber`.
	 * @param ctx the parse tree
	 */
	enterUnsignedNumber?: (ctx: UnsignedNumberContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.unsignedNumber`.
	 * @param ctx the parse tree
	 */
	exitUnsignedNumber?: (ctx: UnsignedNumberContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.unsignedInteger`.
	 * @param ctx the parse tree
	 */
	enterUnsignedInteger?: (ctx: UnsignedIntegerContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.unsignedInteger`.
	 * @param ctx the parse tree
	 */
	exitUnsignedInteger?: (ctx: UnsignedIntegerContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.unsignedReal`.
	 * @param ctx the parse tree
	 */
	enterUnsignedReal?: (ctx: UnsignedRealContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.unsignedReal`.
	 * @param ctx the parse tree
	 */
	exitUnsignedReal?: (ctx: UnsignedRealContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.sign`.
	 * @param ctx the parse tree
	 */
	enterSign?: (ctx: SignContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.sign`.
	 * @param ctx the parse tree
	 */
	exitSign?: (ctx: SignContext) => void;

	/**
	 * Enter a parse tree produced by `informixParser.constantIdentifier`.
	 * @param ctx the parse tree
	 */
	enterConstantIdentifier?: (ctx: ConstantIdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `informixParser.constantIdentifier`.
	 * @param ctx the parse tree
	 */
	exitConstantIdentifier?: (ctx: ConstantIdentifierContext) => void;
}

