// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/modula2pim4/m2pim4.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { IdentContext } from "./m2pim4Parser";
import { NumberContext } from "./m2pim4Parser";
import { IntegerContext } from "./m2pim4Parser";
import { RealContext } from "./m2pim4Parser";
import { ScaleFactorContext } from "./m2pim4Parser";
import { HexDigitContext } from "./m2pim4Parser";
import { DigitContext } from "./m2pim4Parser";
import { OctalDigitContext } from "./m2pim4Parser";
import { StringContext } from "./m2pim4Parser";
import { QualidentContext } from "./m2pim4Parser";
import { ConstantDeclarationContext } from "./m2pim4Parser";
import { ConstExpressionContext } from "./m2pim4Parser";
import { RelationContext } from "./m2pim4Parser";
import { SimpleConstExprContext } from "./m2pim4Parser";
import { AddOperatorContext } from "./m2pim4Parser";
import { ConstTermContext } from "./m2pim4Parser";
import { MulOperatorContext } from "./m2pim4Parser";
import { ConstFactorContext } from "./m2pim4Parser";
import { SetOrQualidentContext } from "./m2pim4Parser";
import { SetContext } from "./m2pim4Parser";
import { ElementContext } from "./m2pim4Parser";
import { TypeDeclarationContext } from "./m2pim4Parser";
import { TypeContext } from "./m2pim4Parser";
import { SimpleTypeContext } from "./m2pim4Parser";
import { EnumerationContext } from "./m2pim4Parser";
import { IdentListContext } from "./m2pim4Parser";
import { SubrangeTypeContext } from "./m2pim4Parser";
import { ArrayTypeContext } from "./m2pim4Parser";
import { RecordTypeContext } from "./m2pim4Parser";
import { FieldListSequenceContext } from "./m2pim4Parser";
import { FieldListContext } from "./m2pim4Parser";
import { VariantContext } from "./m2pim4Parser";
import { CaseLabelListContext } from "./m2pim4Parser";
import { CaseLabelsContext } from "./m2pim4Parser";
import { SetTypeContext } from "./m2pim4Parser";
import { PointerTypeContext } from "./m2pim4Parser";
import { ProcedureTypeContext } from "./m2pim4Parser";
import { FormalTypeListContext } from "./m2pim4Parser";
import { VariableDeclarationContext } from "./m2pim4Parser";
import { DesignatorContext } from "./m2pim4Parser";
import { DesignatorTailContext } from "./m2pim4Parser";
import { ExpListContext } from "./m2pim4Parser";
import { ExpressionContext } from "./m2pim4Parser";
import { SimpleExpressionContext } from "./m2pim4Parser";
import { TermContext } from "./m2pim4Parser";
import { FactorContext } from "./m2pim4Parser";
import { SetOrDesignatorOrProcCallContext } from "./m2pim4Parser";
import { ActualParametersContext } from "./m2pim4Parser";
import { StatementContext } from "./m2pim4Parser";
import { AssignmentOrProcCallContext } from "./m2pim4Parser";
import { StatementSequenceContext } from "./m2pim4Parser";
import { IfStatementContext } from "./m2pim4Parser";
import { CaseStatementContext } from "./m2pim4Parser";
import { CcaseContext } from "./m2pim4Parser";
import { WhileStatementContext } from "./m2pim4Parser";
import { RepeatStatementContext } from "./m2pim4Parser";
import { ForStatementContext } from "./m2pim4Parser";
import { LoopStatementContext } from "./m2pim4Parser";
import { WithStatementContext } from "./m2pim4Parser";
import { ProcedureDeclarationContext } from "./m2pim4Parser";
import { ProcedureHeadingContext } from "./m2pim4Parser";
import { BlockContext } from "./m2pim4Parser";
import { DeclarationContext } from "./m2pim4Parser";
import { FormalParametersContext } from "./m2pim4Parser";
import { FpSectionContext } from "./m2pim4Parser";
import { FormalTypeContext } from "./m2pim4Parser";
import { ModuleDeclarationContext } from "./m2pim4Parser";
import { PriorityContext } from "./m2pim4Parser";
import { ExportListContext } from "./m2pim4Parser";
import { ImportListContext } from "./m2pim4Parser";
import { DefinitionModuleContext } from "./m2pim4Parser";
import { DefinitionContext } from "./m2pim4Parser";
import { ProgramModuleContext } from "./m2pim4Parser";
import { CompilationUnitContext } from "./m2pim4Parser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `m2pim4Parser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface m2pim4Visitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `m2pim4Parser.ident`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdent?: (ctx: IdentContext) => Result;

	/**
	 * Visit a parse tree produced by `m2pim4Parser.number`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumber?: (ctx: NumberContext) => Result;

	/**
	 * Visit a parse tree produced by `m2pim4Parser.integer`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInteger?: (ctx: IntegerContext) => Result;

	/**
	 * Visit a parse tree produced by `m2pim4Parser.real`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReal?: (ctx: RealContext) => Result;

	/**
	 * Visit a parse tree produced by `m2pim4Parser.scaleFactor`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitScaleFactor?: (ctx: ScaleFactorContext) => Result;

	/**
	 * Visit a parse tree produced by `m2pim4Parser.hexDigit`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHexDigit?: (ctx: HexDigitContext) => Result;

	/**
	 * Visit a parse tree produced by `m2pim4Parser.digit`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDigit?: (ctx: DigitContext) => Result;

	/**
	 * Visit a parse tree produced by `m2pim4Parser.octalDigit`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOctalDigit?: (ctx: OctalDigitContext) => Result;

	/**
	 * Visit a parse tree produced by `m2pim4Parser.string`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitString?: (ctx: StringContext) => Result;

	/**
	 * Visit a parse tree produced by `m2pim4Parser.qualident`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQualident?: (ctx: QualidentContext) => Result;

	/**
	 * Visit a parse tree produced by `m2pim4Parser.constantDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstantDeclaration?: (ctx: ConstantDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `m2pim4Parser.constExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstExpression?: (ctx: ConstExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `m2pim4Parser.relation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRelation?: (ctx: RelationContext) => Result;

	/**
	 * Visit a parse tree produced by `m2pim4Parser.simpleConstExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSimpleConstExpr?: (ctx: SimpleConstExprContext) => Result;

	/**
	 * Visit a parse tree produced by `m2pim4Parser.addOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAddOperator?: (ctx: AddOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `m2pim4Parser.constTerm`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstTerm?: (ctx: ConstTermContext) => Result;

	/**
	 * Visit a parse tree produced by `m2pim4Parser.mulOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMulOperator?: (ctx: MulOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `m2pim4Parser.constFactor`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstFactor?: (ctx: ConstFactorContext) => Result;

	/**
	 * Visit a parse tree produced by `m2pim4Parser.setOrQualident`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetOrQualident?: (ctx: SetOrQualidentContext) => Result;

	/**
	 * Visit a parse tree produced by `m2pim4Parser.set`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSet?: (ctx: SetContext) => Result;

	/**
	 * Visit a parse tree produced by `m2pim4Parser.element`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElement?: (ctx: ElementContext) => Result;

	/**
	 * Visit a parse tree produced by `m2pim4Parser.typeDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeDeclaration?: (ctx: TypeDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `m2pim4Parser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitType?: (ctx: TypeContext) => Result;

	/**
	 * Visit a parse tree produced by `m2pim4Parser.simpleType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSimpleType?: (ctx: SimpleTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `m2pim4Parser.enumeration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumeration?: (ctx: EnumerationContext) => Result;

	/**
	 * Visit a parse tree produced by `m2pim4Parser.identList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentList?: (ctx: IdentListContext) => Result;

	/**
	 * Visit a parse tree produced by `m2pim4Parser.subrangeType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubrangeType?: (ctx: SubrangeTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `m2pim4Parser.arrayType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrayType?: (ctx: ArrayTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `m2pim4Parser.recordType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRecordType?: (ctx: RecordTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `m2pim4Parser.fieldListSequence`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFieldListSequence?: (ctx: FieldListSequenceContext) => Result;

	/**
	 * Visit a parse tree produced by `m2pim4Parser.fieldList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFieldList?: (ctx: FieldListContext) => Result;

	/**
	 * Visit a parse tree produced by `m2pim4Parser.variant`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariant?: (ctx: VariantContext) => Result;

	/**
	 * Visit a parse tree produced by `m2pim4Parser.caseLabelList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCaseLabelList?: (ctx: CaseLabelListContext) => Result;

	/**
	 * Visit a parse tree produced by `m2pim4Parser.caseLabels`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCaseLabels?: (ctx: CaseLabelsContext) => Result;

	/**
	 * Visit a parse tree produced by `m2pim4Parser.setType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetType?: (ctx: SetTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `m2pim4Parser.pointerType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPointerType?: (ctx: PointerTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `m2pim4Parser.procedureType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProcedureType?: (ctx: ProcedureTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `m2pim4Parser.formalTypeList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFormalTypeList?: (ctx: FormalTypeListContext) => Result;

	/**
	 * Visit a parse tree produced by `m2pim4Parser.variableDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableDeclaration?: (ctx: VariableDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `m2pim4Parser.designator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDesignator?: (ctx: DesignatorContext) => Result;

	/**
	 * Visit a parse tree produced by `m2pim4Parser.designatorTail`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDesignatorTail?: (ctx: DesignatorTailContext) => Result;

	/**
	 * Visit a parse tree produced by `m2pim4Parser.expList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpList?: (ctx: ExpListContext) => Result;

	/**
	 * Visit a parse tree produced by `m2pim4Parser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `m2pim4Parser.simpleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSimpleExpression?: (ctx: SimpleExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `m2pim4Parser.term`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTerm?: (ctx: TermContext) => Result;

	/**
	 * Visit a parse tree produced by `m2pim4Parser.factor`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFactor?: (ctx: FactorContext) => Result;

	/**
	 * Visit a parse tree produced by `m2pim4Parser.setOrDesignatorOrProcCall`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetOrDesignatorOrProcCall?: (ctx: SetOrDesignatorOrProcCallContext) => Result;

	/**
	 * Visit a parse tree produced by `m2pim4Parser.actualParameters`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitActualParameters?: (ctx: ActualParametersContext) => Result;

	/**
	 * Visit a parse tree produced by `m2pim4Parser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;

	/**
	 * Visit a parse tree produced by `m2pim4Parser.assignmentOrProcCall`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignmentOrProcCall?: (ctx: AssignmentOrProcCallContext) => Result;

	/**
	 * Visit a parse tree produced by `m2pim4Parser.statementSequence`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatementSequence?: (ctx: StatementSequenceContext) => Result;

	/**
	 * Visit a parse tree produced by `m2pim4Parser.ifStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfStatement?: (ctx: IfStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `m2pim4Parser.caseStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCaseStatement?: (ctx: CaseStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `m2pim4Parser.ccase`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCcase?: (ctx: CcaseContext) => Result;

	/**
	 * Visit a parse tree produced by `m2pim4Parser.whileStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhileStatement?: (ctx: WhileStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `m2pim4Parser.repeatStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRepeatStatement?: (ctx: RepeatStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `m2pim4Parser.forStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForStatement?: (ctx: ForStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `m2pim4Parser.loopStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLoopStatement?: (ctx: LoopStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `m2pim4Parser.withStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWithStatement?: (ctx: WithStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `m2pim4Parser.procedureDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProcedureDeclaration?: (ctx: ProcedureDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `m2pim4Parser.procedureHeading`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProcedureHeading?: (ctx: ProcedureHeadingContext) => Result;

	/**
	 * Visit a parse tree produced by `m2pim4Parser.block`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlock?: (ctx: BlockContext) => Result;

	/**
	 * Visit a parse tree produced by `m2pim4Parser.declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclaration?: (ctx: DeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `m2pim4Parser.formalParameters`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFormalParameters?: (ctx: FormalParametersContext) => Result;

	/**
	 * Visit a parse tree produced by `m2pim4Parser.fpSection`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFpSection?: (ctx: FpSectionContext) => Result;

	/**
	 * Visit a parse tree produced by `m2pim4Parser.formalType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFormalType?: (ctx: FormalTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `m2pim4Parser.moduleDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitModuleDeclaration?: (ctx: ModuleDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `m2pim4Parser.priority`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPriority?: (ctx: PriorityContext) => Result;

	/**
	 * Visit a parse tree produced by `m2pim4Parser.exportList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExportList?: (ctx: ExportListContext) => Result;

	/**
	 * Visit a parse tree produced by `m2pim4Parser.importList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImportList?: (ctx: ImportListContext) => Result;

	/**
	 * Visit a parse tree produced by `m2pim4Parser.definitionModule`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDefinitionModule?: (ctx: DefinitionModuleContext) => Result;

	/**
	 * Visit a parse tree produced by `m2pim4Parser.definition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDefinition?: (ctx: DefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `m2pim4Parser.programModule`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProgramModule?: (ctx: ProgramModuleContext) => Result;

	/**
	 * Visit a parse tree produced by `m2pim4Parser.compilationUnit`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCompilationUnit?: (ctx: CompilationUnitContext) => Result;
}

