// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/kuka/krl.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

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
 * This interface defines a complete listener for a parse tree produced by
 * `krlParser`.
 */
export interface krlListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `krlParser.module`.
	 * @param ctx the parse tree
	 */
	enterModule?: (ctx: ModuleContext) => void;
	/**
	 * Exit a parse tree produced by `krlParser.module`.
	 * @param ctx the parse tree
	 */
	exitModule?: (ctx: ModuleContext) => void;

	/**
	 * Enter a parse tree produced by `krlParser.moduleRoutines`.
	 * @param ctx the parse tree
	 */
	enterModuleRoutines?: (ctx: ModuleRoutinesContext) => void;
	/**
	 * Exit a parse tree produced by `krlParser.moduleRoutines`.
	 * @param ctx the parse tree
	 */
	exitModuleRoutines?: (ctx: ModuleRoutinesContext) => void;

	/**
	 * Enter a parse tree produced by `krlParser.mainRoutine`.
	 * @param ctx the parse tree
	 */
	enterMainRoutine?: (ctx: MainRoutineContext) => void;
	/**
	 * Exit a parse tree produced by `krlParser.mainRoutine`.
	 * @param ctx the parse tree
	 */
	exitMainRoutine?: (ctx: MainRoutineContext) => void;

	/**
	 * Enter a parse tree produced by `krlParser.subRoutine`.
	 * @param ctx the parse tree
	 */
	enterSubRoutine?: (ctx: SubRoutineContext) => void;
	/**
	 * Exit a parse tree produced by `krlParser.subRoutine`.
	 * @param ctx the parse tree
	 */
	exitSubRoutine?: (ctx: SubRoutineContext) => void;

	/**
	 * Enter a parse tree produced by `krlParser.procedureDefinition`.
	 * @param ctx the parse tree
	 */
	enterProcedureDefinition?: (ctx: ProcedureDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `krlParser.procedureDefinition`.
	 * @param ctx the parse tree
	 */
	exitProcedureDefinition?: (ctx: ProcedureDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `krlParser.procedureName`.
	 * @param ctx the parse tree
	 */
	enterProcedureName?: (ctx: ProcedureNameContext) => void;
	/**
	 * Exit a parse tree produced by `krlParser.procedureName`.
	 * @param ctx the parse tree
	 */
	exitProcedureName?: (ctx: ProcedureNameContext) => void;

	/**
	 * Enter a parse tree produced by `krlParser.functionDefinition`.
	 * @param ctx the parse tree
	 */
	enterFunctionDefinition?: (ctx: FunctionDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `krlParser.functionDefinition`.
	 * @param ctx the parse tree
	 */
	exitFunctionDefinition?: (ctx: FunctionDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `krlParser.functionName`.
	 * @param ctx the parse tree
	 */
	enterFunctionName?: (ctx: FunctionNameContext) => void;
	/**
	 * Exit a parse tree produced by `krlParser.functionName`.
	 * @param ctx the parse tree
	 */
	exitFunctionName?: (ctx: FunctionNameContext) => void;

	/**
	 * Enter a parse tree produced by `krlParser.moduleData`.
	 * @param ctx the parse tree
	 */
	enterModuleData?: (ctx: ModuleDataContext) => void;
	/**
	 * Exit a parse tree produced by `krlParser.moduleData`.
	 * @param ctx the parse tree
	 */
	exitModuleData?: (ctx: ModuleDataContext) => void;

	/**
	 * Enter a parse tree produced by `krlParser.moduleName`.
	 * @param ctx the parse tree
	 */
	enterModuleName?: (ctx: ModuleNameContext) => void;
	/**
	 * Exit a parse tree produced by `krlParser.moduleName`.
	 * @param ctx the parse tree
	 */
	exitModuleName?: (ctx: ModuleNameContext) => void;

	/**
	 * Enter a parse tree produced by `krlParser.dataList`.
	 * @param ctx the parse tree
	 */
	enterDataList?: (ctx: DataListContext) => void;
	/**
	 * Exit a parse tree produced by `krlParser.dataList`.
	 * @param ctx the parse tree
	 */
	exitDataList?: (ctx: DataListContext) => void;

	/**
	 * Enter a parse tree produced by `krlParser.arrayInitialisation`.
	 * @param ctx the parse tree
	 */
	enterArrayInitialisation?: (ctx: ArrayInitialisationContext) => void;
	/**
	 * Exit a parse tree produced by `krlParser.arrayInitialisation`.
	 * @param ctx the parse tree
	 */
	exitArrayInitialisation?: (ctx: ArrayInitialisationContext) => void;

	/**
	 * Enter a parse tree produced by `krlParser.typeDeclaration`.
	 * @param ctx the parse tree
	 */
	enterTypeDeclaration?: (ctx: TypeDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `krlParser.typeDeclaration`.
	 * @param ctx the parse tree
	 */
	exitTypeDeclaration?: (ctx: TypeDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `krlParser.structureDefinition`.
	 * @param ctx the parse tree
	 */
	enterStructureDefinition?: (ctx: StructureDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `krlParser.structureDefinition`.
	 * @param ctx the parse tree
	 */
	exitStructureDefinition?: (ctx: StructureDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `krlParser.enumDefinition`.
	 * @param ctx the parse tree
	 */
	enterEnumDefinition?: (ctx: EnumDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `krlParser.enumDefinition`.
	 * @param ctx the parse tree
	 */
	exitEnumDefinition?: (ctx: EnumDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `krlParser.enumValue`.
	 * @param ctx the parse tree
	 */
	enterEnumValue?: (ctx: EnumValueContext) => void;
	/**
	 * Exit a parse tree produced by `krlParser.enumValue`.
	 * @param ctx the parse tree
	 */
	exitEnumValue?: (ctx: EnumValueContext) => void;

	/**
	 * Enter a parse tree produced by `krlParser.variableDeclaration`.
	 * @param ctx the parse tree
	 */
	enterVariableDeclaration?: (ctx: VariableDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `krlParser.variableDeclaration`.
	 * @param ctx the parse tree
	 */
	exitVariableDeclaration?: (ctx: VariableDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `krlParser.signalDeclaration`.
	 * @param ctx the parse tree
	 */
	enterSignalDeclaration?: (ctx: SignalDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `krlParser.signalDeclaration`.
	 * @param ctx the parse tree
	 */
	exitSignalDeclaration?: (ctx: SignalDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `krlParser.variableDeclarationInDataList`.
	 * @param ctx the parse tree
	 */
	enterVariableDeclarationInDataList?: (ctx: VariableDeclarationInDataListContext) => void;
	/**
	 * Exit a parse tree produced by `krlParser.variableDeclarationInDataList`.
	 * @param ctx the parse tree
	 */
	exitVariableDeclarationInDataList?: (ctx: VariableDeclarationInDataListContext) => void;

	/**
	 * Enter a parse tree produced by `krlParser.variableListRest`.
	 * @param ctx the parse tree
	 */
	enterVariableListRest?: (ctx: VariableListRestContext) => void;
	/**
	 * Exit a parse tree produced by `krlParser.variableListRest`.
	 * @param ctx the parse tree
	 */
	exitVariableListRest?: (ctx: VariableListRestContext) => void;

	/**
	 * Enter a parse tree produced by `krlParser.variableInitialisation`.
	 * @param ctx the parse tree
	 */
	enterVariableInitialisation?: (ctx: VariableInitialisationContext) => void;
	/**
	 * Exit a parse tree produced by `krlParser.variableInitialisation`.
	 * @param ctx the parse tree
	 */
	exitVariableInitialisation?: (ctx: VariableInitialisationContext) => void;

	/**
	 * Enter a parse tree produced by `krlParser.structLiteral`.
	 * @param ctx the parse tree
	 */
	enterStructLiteral?: (ctx: StructLiteralContext) => void;
	/**
	 * Exit a parse tree produced by `krlParser.structLiteral`.
	 * @param ctx the parse tree
	 */
	exitStructLiteral?: (ctx: StructLiteralContext) => void;

	/**
	 * Enter a parse tree produced by `krlParser.structElementList`.
	 * @param ctx the parse tree
	 */
	enterStructElementList?: (ctx: StructElementListContext) => void;
	/**
	 * Exit a parse tree produced by `krlParser.structElementList`.
	 * @param ctx the parse tree
	 */
	exitStructElementList?: (ctx: StructElementListContext) => void;

	/**
	 * Enter a parse tree produced by `krlParser.structElement`.
	 * @param ctx the parse tree
	 */
	enterStructElement?: (ctx: StructElementContext) => void;
	/**
	 * Exit a parse tree produced by `krlParser.structElement`.
	 * @param ctx the parse tree
	 */
	exitStructElement?: (ctx: StructElementContext) => void;

	/**
	 * Enter a parse tree produced by `krlParser.formalParameters`.
	 * @param ctx the parse tree
	 */
	enterFormalParameters?: (ctx: FormalParametersContext) => void;
	/**
	 * Exit a parse tree produced by `krlParser.formalParameters`.
	 * @param ctx the parse tree
	 */
	exitFormalParameters?: (ctx: FormalParametersContext) => void;

	/**
	 * Enter a parse tree produced by `krlParser.parameter`.
	 * @param ctx the parse tree
	 */
	enterParameter?: (ctx: ParameterContext) => void;
	/**
	 * Exit a parse tree produced by `krlParser.parameter`.
	 * @param ctx the parse tree
	 */
	exitParameter?: (ctx: ParameterContext) => void;

	/**
	 * Enter a parse tree produced by `krlParser.routineBody`.
	 * @param ctx the parse tree
	 */
	enterRoutineBody?: (ctx: RoutineBodyContext) => void;
	/**
	 * Exit a parse tree produced by `krlParser.routineBody`.
	 * @param ctx the parse tree
	 */
	exitRoutineBody?: (ctx: RoutineBodyContext) => void;

	/**
	 * Enter a parse tree produced by `krlParser.routineDataSection`.
	 * @param ctx the parse tree
	 */
	enterRoutineDataSection?: (ctx: RoutineDataSectionContext) => void;
	/**
	 * Exit a parse tree produced by `krlParser.routineDataSection`.
	 * @param ctx the parse tree
	 */
	exitRoutineDataSection?: (ctx: RoutineDataSectionContext) => void;

	/**
	 * Enter a parse tree produced by `krlParser.forwardDeclaration`.
	 * @param ctx the parse tree
	 */
	enterForwardDeclaration?: (ctx: ForwardDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `krlParser.forwardDeclaration`.
	 * @param ctx the parse tree
	 */
	exitForwardDeclaration?: (ctx: ForwardDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `krlParser.formalParametersWithType`.
	 * @param ctx the parse tree
	 */
	enterFormalParametersWithType?: (ctx: FormalParametersWithTypeContext) => void;
	/**
	 * Exit a parse tree produced by `krlParser.formalParametersWithType`.
	 * @param ctx the parse tree
	 */
	exitFormalParametersWithType?: (ctx: FormalParametersWithTypeContext) => void;

	/**
	 * Enter a parse tree produced by `krlParser.parameterWithType`.
	 * @param ctx the parse tree
	 */
	enterParameterWithType?: (ctx: ParameterWithTypeContext) => void;
	/**
	 * Exit a parse tree produced by `krlParser.parameterWithType`.
	 * @param ctx the parse tree
	 */
	exitParameterWithType?: (ctx: ParameterWithTypeContext) => void;

	/**
	 * Enter a parse tree produced by `krlParser.parameterCallType`.
	 * @param ctx the parse tree
	 */
	enterParameterCallType?: (ctx: ParameterCallTypeContext) => void;
	/**
	 * Exit a parse tree produced by `krlParser.parameterCallType`.
	 * @param ctx the parse tree
	 */
	exitParameterCallType?: (ctx: ParameterCallTypeContext) => void;

	/**
	 * Enter a parse tree produced by `krlParser.importStatement`.
	 * @param ctx the parse tree
	 */
	enterImportStatement?: (ctx: ImportStatementContext) => void;
	/**
	 * Exit a parse tree produced by `krlParser.importStatement`.
	 * @param ctx the parse tree
	 */
	exitImportStatement?: (ctx: ImportStatementContext) => void;

	/**
	 * Enter a parse tree produced by `krlParser.variableName`.
	 * @param ctx the parse tree
	 */
	enterVariableName?: (ctx: VariableNameContext) => void;
	/**
	 * Exit a parse tree produced by `krlParser.variableName`.
	 * @param ctx the parse tree
	 */
	exitVariableName?: (ctx: VariableNameContext) => void;

	/**
	 * Enter a parse tree produced by `krlParser.arrayVariableSuffix`.
	 * @param ctx the parse tree
	 */
	enterArrayVariableSuffix?: (ctx: ArrayVariableSuffixContext) => void;
	/**
	 * Exit a parse tree produced by `krlParser.arrayVariableSuffix`.
	 * @param ctx the parse tree
	 */
	exitArrayVariableSuffix?: (ctx: ArrayVariableSuffixContext) => void;

	/**
	 * Enter a parse tree produced by `krlParser.routineImplementationSection`.
	 * @param ctx the parse tree
	 */
	enterRoutineImplementationSection?: (ctx: RoutineImplementationSectionContext) => void;
	/**
	 * Exit a parse tree produced by `krlParser.routineImplementationSection`.
	 * @param ctx the parse tree
	 */
	exitRoutineImplementationSection?: (ctx: RoutineImplementationSectionContext) => void;

	/**
	 * Enter a parse tree produced by `krlParser.statementList`.
	 * @param ctx the parse tree
	 */
	enterStatementList?: (ctx: StatementListContext) => void;
	/**
	 * Exit a parse tree produced by `krlParser.statementList`.
	 * @param ctx the parse tree
	 */
	exitStatementList?: (ctx: StatementListContext) => void;

	/**
	 * Enter a parse tree produced by `krlParser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement?: (ctx: StatementContext) => void;
	/**
	 * Exit a parse tree produced by `krlParser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement?: (ctx: StatementContext) => void;

	/**
	 * Enter a parse tree produced by `krlParser.analogOutputStatement`.
	 * @param ctx the parse tree
	 */
	enterAnalogOutputStatement?: (ctx: AnalogOutputStatementContext) => void;
	/**
	 * Exit a parse tree produced by `krlParser.analogOutputStatement`.
	 * @param ctx the parse tree
	 */
	exitAnalogOutputStatement?: (ctx: AnalogOutputStatementContext) => void;

	/**
	 * Enter a parse tree produced by `krlParser.analogInputStatement`.
	 * @param ctx the parse tree
	 */
	enterAnalogInputStatement?: (ctx: AnalogInputStatementContext) => void;
	/**
	 * Exit a parse tree produced by `krlParser.analogInputStatement`.
	 * @param ctx the parse tree
	 */
	exitAnalogInputStatement?: (ctx: AnalogInputStatementContext) => void;

	/**
	 * Enter a parse tree produced by `krlParser.switchBlockStatementGroups`.
	 * @param ctx the parse tree
	 */
	enterSwitchBlockStatementGroups?: (ctx: SwitchBlockStatementGroupsContext) => void;
	/**
	 * Exit a parse tree produced by `krlParser.switchBlockStatementGroups`.
	 * @param ctx the parse tree
	 */
	exitSwitchBlockStatementGroups?: (ctx: SwitchBlockStatementGroupsContext) => void;

	/**
	 * Enter a parse tree produced by `krlParser.caseLabel`.
	 * @param ctx the parse tree
	 */
	enterCaseLabel?: (ctx: CaseLabelContext) => void;
	/**
	 * Exit a parse tree produced by `krlParser.caseLabel`.
	 * @param ctx the parse tree
	 */
	exitCaseLabel?: (ctx: CaseLabelContext) => void;

	/**
	 * Enter a parse tree produced by `krlParser.defaultLabel`.
	 * @param ctx the parse tree
	 */
	enterDefaultLabel?: (ctx: DefaultLabelContext) => void;
	/**
	 * Exit a parse tree produced by `krlParser.defaultLabel`.
	 * @param ctx the parse tree
	 */
	exitDefaultLabel?: (ctx: DefaultLabelContext) => void;

	/**
	 * Enter a parse tree produced by `krlParser.expressionList`.
	 * @param ctx the parse tree
	 */
	enterExpressionList?: (ctx: ExpressionListContext) => void;
	/**
	 * Exit a parse tree produced by `krlParser.expressionList`.
	 * @param ctx the parse tree
	 */
	exitExpressionList?: (ctx: ExpressionListContext) => void;

	/**
	 * Enter a parse tree produced by `krlParser.assignmentExpression`.
	 * @param ctx the parse tree
	 */
	enterAssignmentExpression?: (ctx: AssignmentExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `krlParser.assignmentExpression`.
	 * @param ctx the parse tree
	 */
	exitAssignmentExpression?: (ctx: AssignmentExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `krlParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `krlParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `krlParser.relationalOp`.
	 * @param ctx the parse tree
	 */
	enterRelationalOp?: (ctx: RelationalOpContext) => void;
	/**
	 * Exit a parse tree produced by `krlParser.relationalOp`.
	 * @param ctx the parse tree
	 */
	exitRelationalOp?: (ctx: RelationalOpContext) => void;

	/**
	 * Enter a parse tree produced by `krlParser.conditionalOrExpression`.
	 * @param ctx the parse tree
	 */
	enterConditionalOrExpression?: (ctx: ConditionalOrExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `krlParser.conditionalOrExpression`.
	 * @param ctx the parse tree
	 */
	exitConditionalOrExpression?: (ctx: ConditionalOrExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `krlParser.exclusiveOrExpression`.
	 * @param ctx the parse tree
	 */
	enterExclusiveOrExpression?: (ctx: ExclusiveOrExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `krlParser.exclusiveOrExpression`.
	 * @param ctx the parse tree
	 */
	exitExclusiveOrExpression?: (ctx: ExclusiveOrExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `krlParser.conditionalAndExpression`.
	 * @param ctx the parse tree
	 */
	enterConditionalAndExpression?: (ctx: ConditionalAndExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `krlParser.conditionalAndExpression`.
	 * @param ctx the parse tree
	 */
	exitConditionalAndExpression?: (ctx: ConditionalAndExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `krlParser.additiveExpression`.
	 * @param ctx the parse tree
	 */
	enterAdditiveExpression?: (ctx: AdditiveExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `krlParser.additiveExpression`.
	 * @param ctx the parse tree
	 */
	exitAdditiveExpression?: (ctx: AdditiveExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `krlParser.multiplicativeExpression`.
	 * @param ctx the parse tree
	 */
	enterMultiplicativeExpression?: (ctx: MultiplicativeExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `krlParser.multiplicativeExpression`.
	 * @param ctx the parse tree
	 */
	exitMultiplicativeExpression?: (ctx: MultiplicativeExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `krlParser.geometricExpression`.
	 * @param ctx the parse tree
	 */
	enterGeometricExpression?: (ctx: GeometricExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `krlParser.geometricExpression`.
	 * @param ctx the parse tree
	 */
	exitGeometricExpression?: (ctx: GeometricExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `krlParser.unaryNotExpression`.
	 * @param ctx the parse tree
	 */
	enterUnaryNotExpression?: (ctx: UnaryNotExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `krlParser.unaryNotExpression`.
	 * @param ctx the parse tree
	 */
	exitUnaryNotExpression?: (ctx: UnaryNotExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `krlParser.unaryPlusMinuxExpression`.
	 * @param ctx the parse tree
	 */
	enterUnaryPlusMinuxExpression?: (ctx: UnaryPlusMinuxExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `krlParser.unaryPlusMinuxExpression`.
	 * @param ctx the parse tree
	 */
	exitUnaryPlusMinuxExpression?: (ctx: UnaryPlusMinuxExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `krlParser.primary`.
	 * @param ctx the parse tree
	 */
	enterPrimary?: (ctx: PrimaryContext) => void;
	/**
	 * Exit a parse tree produced by `krlParser.primary`.
	 * @param ctx the parse tree
	 */
	exitPrimary?: (ctx: PrimaryContext) => void;

	/**
	 * Enter a parse tree produced by `krlParser.parExpression`.
	 * @param ctx the parse tree
	 */
	enterParExpression?: (ctx: ParExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `krlParser.parExpression`.
	 * @param ctx the parse tree
	 */
	exitParExpression?: (ctx: ParExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `krlParser.type`.
	 * @param ctx the parse tree
	 */
	enterType?: (ctx: TypeContext) => void;
	/**
	 * Exit a parse tree produced by `krlParser.type`.
	 * @param ctx the parse tree
	 */
	exitType?: (ctx: TypeContext) => void;

	/**
	 * Enter a parse tree produced by `krlParser.typeName`.
	 * @param ctx the parse tree
	 */
	enterTypeName?: (ctx: TypeNameContext) => void;
	/**
	 * Exit a parse tree produced by `krlParser.typeName`.
	 * @param ctx the parse tree
	 */
	exitTypeName?: (ctx: TypeNameContext) => void;

	/**
	 * Enter a parse tree produced by `krlParser.primitiveType`.
	 * @param ctx the parse tree
	 */
	enterPrimitiveType?: (ctx: PrimitiveTypeContext) => void;
	/**
	 * Exit a parse tree produced by `krlParser.primitiveType`.
	 * @param ctx the parse tree
	 */
	exitPrimitiveType?: (ctx: PrimitiveTypeContext) => void;

	/**
	 * Enter a parse tree produced by `krlParser.arguments`.
	 * @param ctx the parse tree
	 */
	enterArguments?: (ctx: ArgumentsContext) => void;
	/**
	 * Exit a parse tree produced by `krlParser.arguments`.
	 * @param ctx the parse tree
	 */
	exitArguments?: (ctx: ArgumentsContext) => void;

	/**
	 * Enter a parse tree produced by `krlParser.literal`.
	 * @param ctx the parse tree
	 */
	enterLiteral?: (ctx: LiteralContext) => void;
	/**
	 * Exit a parse tree produced by `krlParser.literal`.
	 * @param ctx the parse tree
	 */
	exitLiteral?: (ctx: LiteralContext) => void;

	/**
	 * Enter a parse tree produced by `krlParser.enumElement`.
	 * @param ctx the parse tree
	 */
	enterEnumElement?: (ctx: EnumElementContext) => void;
	/**
	 * Exit a parse tree produced by `krlParser.enumElement`.
	 * @param ctx the parse tree
	 */
	exitEnumElement?: (ctx: EnumElementContext) => void;
}

