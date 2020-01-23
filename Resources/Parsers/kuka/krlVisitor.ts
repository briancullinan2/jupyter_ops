// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/kuka/krl.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { ModuleContext } from "./krlParser";
import { ModuleRoutinesContext } from "./krlParser";
import { MainRoutineContext } from "./krlParser";
import { SubRoutineContext } from "./krlParser";
import { ProcedureDefinitionContext } from "./krlParser";
import { ProcedureNameContext } from "./krlParser";
import { FunctionDefinitionContext } from "./krlParser";
import { FunctionNameContext } from "./krlParser";
import { ModuleDataContext } from "./krlParser";
import { ModuleNameContext } from "./krlParser";
import { DataListContext } from "./krlParser";
import { ArrayInitialisationContext } from "./krlParser";
import { TypeDeclarationContext } from "./krlParser";
import { StructureDefinitionContext } from "./krlParser";
import { EnumDefinitionContext } from "./krlParser";
import { EnumValueContext } from "./krlParser";
import { VariableDeclarationContext } from "./krlParser";
import { SignalDeclarationContext } from "./krlParser";
import { VariableDeclarationInDataListContext } from "./krlParser";
import { VariableListRestContext } from "./krlParser";
import { VariableInitialisationContext } from "./krlParser";
import { StructLiteralContext } from "./krlParser";
import { StructElementListContext } from "./krlParser";
import { StructElementContext } from "./krlParser";
import { FormalParametersContext } from "./krlParser";
import { ParameterContext } from "./krlParser";
import { RoutineBodyContext } from "./krlParser";
import { RoutineDataSectionContext } from "./krlParser";
import { ForwardDeclarationContext } from "./krlParser";
import { FormalParametersWithTypeContext } from "./krlParser";
import { ParameterWithTypeContext } from "./krlParser";
import { ParameterCallTypeContext } from "./krlParser";
import { ImportStatementContext } from "./krlParser";
import { VariableNameContext } from "./krlParser";
import { ArrayVariableSuffixContext } from "./krlParser";
import { RoutineImplementationSectionContext } from "./krlParser";
import { StatementListContext } from "./krlParser";
import { StatementContext } from "./krlParser";
import { AnalogOutputStatementContext } from "./krlParser";
import { AnalogInputStatementContext } from "./krlParser";
import { SwitchBlockStatementGroupsContext } from "./krlParser";
import { CaseLabelContext } from "./krlParser";
import { DefaultLabelContext } from "./krlParser";
import { ExpressionListContext } from "./krlParser";
import { AssignmentExpressionContext } from "./krlParser";
import { ExpressionContext } from "./krlParser";
import { RelationalOpContext } from "./krlParser";
import { ConditionalOrExpressionContext } from "./krlParser";
import { ExclusiveOrExpressionContext } from "./krlParser";
import { ConditionalAndExpressionContext } from "./krlParser";
import { AdditiveExpressionContext } from "./krlParser";
import { MultiplicativeExpressionContext } from "./krlParser";
import { GeometricExpressionContext } from "./krlParser";
import { UnaryNotExpressionContext } from "./krlParser";
import { UnaryPlusMinuxExpressionContext } from "./krlParser";
import { PrimaryContext } from "./krlParser";
import { ParExpressionContext } from "./krlParser";
import { TypeContext } from "./krlParser";
import { TypeNameContext } from "./krlParser";
import { PrimitiveTypeContext } from "./krlParser";
import { ArgumentsContext } from "./krlParser";
import { LiteralContext } from "./krlParser";
import { EnumElementContext } from "./krlParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `krlParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface krlVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `krlParser.module`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitModule?: (ctx: ModuleContext) => Result;

	/**
	 * Visit a parse tree produced by `krlParser.moduleRoutines`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitModuleRoutines?: (ctx: ModuleRoutinesContext) => Result;

	/**
	 * Visit a parse tree produced by `krlParser.mainRoutine`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMainRoutine?: (ctx: MainRoutineContext) => Result;

	/**
	 * Visit a parse tree produced by `krlParser.subRoutine`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubRoutine?: (ctx: SubRoutineContext) => Result;

	/**
	 * Visit a parse tree produced by `krlParser.procedureDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProcedureDefinition?: (ctx: ProcedureDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `krlParser.procedureName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProcedureName?: (ctx: ProcedureNameContext) => Result;

	/**
	 * Visit a parse tree produced by `krlParser.functionDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionDefinition?: (ctx: FunctionDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `krlParser.functionName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionName?: (ctx: FunctionNameContext) => Result;

	/**
	 * Visit a parse tree produced by `krlParser.moduleData`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitModuleData?: (ctx: ModuleDataContext) => Result;

	/**
	 * Visit a parse tree produced by `krlParser.moduleName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitModuleName?: (ctx: ModuleNameContext) => Result;

	/**
	 * Visit a parse tree produced by `krlParser.dataList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDataList?: (ctx: DataListContext) => Result;

	/**
	 * Visit a parse tree produced by `krlParser.arrayInitialisation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrayInitialisation?: (ctx: ArrayInitialisationContext) => Result;

	/**
	 * Visit a parse tree produced by `krlParser.typeDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeDeclaration?: (ctx: TypeDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `krlParser.structureDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStructureDefinition?: (ctx: StructureDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `krlParser.enumDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumDefinition?: (ctx: EnumDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `krlParser.enumValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumValue?: (ctx: EnumValueContext) => Result;

	/**
	 * Visit a parse tree produced by `krlParser.variableDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableDeclaration?: (ctx: VariableDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `krlParser.signalDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSignalDeclaration?: (ctx: SignalDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `krlParser.variableDeclarationInDataList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableDeclarationInDataList?: (ctx: VariableDeclarationInDataListContext) => Result;

	/**
	 * Visit a parse tree produced by `krlParser.variableListRest`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableListRest?: (ctx: VariableListRestContext) => Result;

	/**
	 * Visit a parse tree produced by `krlParser.variableInitialisation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableInitialisation?: (ctx: VariableInitialisationContext) => Result;

	/**
	 * Visit a parse tree produced by `krlParser.structLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStructLiteral?: (ctx: StructLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `krlParser.structElementList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStructElementList?: (ctx: StructElementListContext) => Result;

	/**
	 * Visit a parse tree produced by `krlParser.structElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStructElement?: (ctx: StructElementContext) => Result;

	/**
	 * Visit a parse tree produced by `krlParser.formalParameters`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFormalParameters?: (ctx: FormalParametersContext) => Result;

	/**
	 * Visit a parse tree produced by `krlParser.parameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParameter?: (ctx: ParameterContext) => Result;

	/**
	 * Visit a parse tree produced by `krlParser.routineBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRoutineBody?: (ctx: RoutineBodyContext) => Result;

	/**
	 * Visit a parse tree produced by `krlParser.routineDataSection`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRoutineDataSection?: (ctx: RoutineDataSectionContext) => Result;

	/**
	 * Visit a parse tree produced by `krlParser.forwardDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForwardDeclaration?: (ctx: ForwardDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `krlParser.formalParametersWithType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFormalParametersWithType?: (ctx: FormalParametersWithTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `krlParser.parameterWithType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParameterWithType?: (ctx: ParameterWithTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `krlParser.parameterCallType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParameterCallType?: (ctx: ParameterCallTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `krlParser.importStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImportStatement?: (ctx: ImportStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `krlParser.variableName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableName?: (ctx: VariableNameContext) => Result;

	/**
	 * Visit a parse tree produced by `krlParser.arrayVariableSuffix`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrayVariableSuffix?: (ctx: ArrayVariableSuffixContext) => Result;

	/**
	 * Visit a parse tree produced by `krlParser.routineImplementationSection`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRoutineImplementationSection?: (ctx: RoutineImplementationSectionContext) => Result;

	/**
	 * Visit a parse tree produced by `krlParser.statementList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatementList?: (ctx: StatementListContext) => Result;

	/**
	 * Visit a parse tree produced by `krlParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;

	/**
	 * Visit a parse tree produced by `krlParser.analogOutputStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnalogOutputStatement?: (ctx: AnalogOutputStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `krlParser.analogInputStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnalogInputStatement?: (ctx: AnalogInputStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `krlParser.switchBlockStatementGroups`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSwitchBlockStatementGroups?: (ctx: SwitchBlockStatementGroupsContext) => Result;

	/**
	 * Visit a parse tree produced by `krlParser.caseLabel`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCaseLabel?: (ctx: CaseLabelContext) => Result;

	/**
	 * Visit a parse tree produced by `krlParser.defaultLabel`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDefaultLabel?: (ctx: DefaultLabelContext) => Result;

	/**
	 * Visit a parse tree produced by `krlParser.expressionList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionList?: (ctx: ExpressionListContext) => Result;

	/**
	 * Visit a parse tree produced by `krlParser.assignmentExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignmentExpression?: (ctx: AssignmentExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `krlParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `krlParser.relationalOp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRelationalOp?: (ctx: RelationalOpContext) => Result;

	/**
	 * Visit a parse tree produced by `krlParser.conditionalOrExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConditionalOrExpression?: (ctx: ConditionalOrExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `krlParser.exclusiveOrExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExclusiveOrExpression?: (ctx: ExclusiveOrExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `krlParser.conditionalAndExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConditionalAndExpression?: (ctx: ConditionalAndExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `krlParser.additiveExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAdditiveExpression?: (ctx: AdditiveExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `krlParser.multiplicativeExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMultiplicativeExpression?: (ctx: MultiplicativeExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `krlParser.geometricExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGeometricExpression?: (ctx: GeometricExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `krlParser.unaryNotExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnaryNotExpression?: (ctx: UnaryNotExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `krlParser.unaryPlusMinuxExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnaryPlusMinuxExpression?: (ctx: UnaryPlusMinuxExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `krlParser.primary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrimary?: (ctx: PrimaryContext) => Result;

	/**
	 * Visit a parse tree produced by `krlParser.parExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParExpression?: (ctx: ParExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `krlParser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitType?: (ctx: TypeContext) => Result;

	/**
	 * Visit a parse tree produced by `krlParser.typeName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeName?: (ctx: TypeNameContext) => Result;

	/**
	 * Visit a parse tree produced by `krlParser.primitiveType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrimitiveType?: (ctx: PrimitiveTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `krlParser.arguments`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArguments?: (ctx: ArgumentsContext) => Result;

	/**
	 * Visit a parse tree produced by `krlParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiteral?: (ctx: LiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `krlParser.enumElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumElement?: (ctx: EnumElementContext) => Result;
}

