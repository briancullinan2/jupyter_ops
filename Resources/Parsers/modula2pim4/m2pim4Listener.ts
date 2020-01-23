// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/modula2pim4/m2pim4.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

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
 * This interface defines a complete listener for a parse tree produced by
 * `m2pim4Parser`.
 */
export interface m2pim4Listener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `m2pim4Parser.ident`.
	 * @param ctx the parse tree
	 */
	enterIdent?: (ctx: IdentContext) => void;
	/**
	 * Exit a parse tree produced by `m2pim4Parser.ident`.
	 * @param ctx the parse tree
	 */
	exitIdent?: (ctx: IdentContext) => void;

	/**
	 * Enter a parse tree produced by `m2pim4Parser.number`.
	 * @param ctx the parse tree
	 */
	enterNumber?: (ctx: NumberContext) => void;
	/**
	 * Exit a parse tree produced by `m2pim4Parser.number`.
	 * @param ctx the parse tree
	 */
	exitNumber?: (ctx: NumberContext) => void;

	/**
	 * Enter a parse tree produced by `m2pim4Parser.integer`.
	 * @param ctx the parse tree
	 */
	enterInteger?: (ctx: IntegerContext) => void;
	/**
	 * Exit a parse tree produced by `m2pim4Parser.integer`.
	 * @param ctx the parse tree
	 */
	exitInteger?: (ctx: IntegerContext) => void;

	/**
	 * Enter a parse tree produced by `m2pim4Parser.real`.
	 * @param ctx the parse tree
	 */
	enterReal?: (ctx: RealContext) => void;
	/**
	 * Exit a parse tree produced by `m2pim4Parser.real`.
	 * @param ctx the parse tree
	 */
	exitReal?: (ctx: RealContext) => void;

	/**
	 * Enter a parse tree produced by `m2pim4Parser.scaleFactor`.
	 * @param ctx the parse tree
	 */
	enterScaleFactor?: (ctx: ScaleFactorContext) => void;
	/**
	 * Exit a parse tree produced by `m2pim4Parser.scaleFactor`.
	 * @param ctx the parse tree
	 */
	exitScaleFactor?: (ctx: ScaleFactorContext) => void;

	/**
	 * Enter a parse tree produced by `m2pim4Parser.hexDigit`.
	 * @param ctx the parse tree
	 */
	enterHexDigit?: (ctx: HexDigitContext) => void;
	/**
	 * Exit a parse tree produced by `m2pim4Parser.hexDigit`.
	 * @param ctx the parse tree
	 */
	exitHexDigit?: (ctx: HexDigitContext) => void;

	/**
	 * Enter a parse tree produced by `m2pim4Parser.digit`.
	 * @param ctx the parse tree
	 */
	enterDigit?: (ctx: DigitContext) => void;
	/**
	 * Exit a parse tree produced by `m2pim4Parser.digit`.
	 * @param ctx the parse tree
	 */
	exitDigit?: (ctx: DigitContext) => void;

	/**
	 * Enter a parse tree produced by `m2pim4Parser.octalDigit`.
	 * @param ctx the parse tree
	 */
	enterOctalDigit?: (ctx: OctalDigitContext) => void;
	/**
	 * Exit a parse tree produced by `m2pim4Parser.octalDigit`.
	 * @param ctx the parse tree
	 */
	exitOctalDigit?: (ctx: OctalDigitContext) => void;

	/**
	 * Enter a parse tree produced by `m2pim4Parser.string`.
	 * @param ctx the parse tree
	 */
	enterString?: (ctx: StringContext) => void;
	/**
	 * Exit a parse tree produced by `m2pim4Parser.string`.
	 * @param ctx the parse tree
	 */
	exitString?: (ctx: StringContext) => void;

	/**
	 * Enter a parse tree produced by `m2pim4Parser.qualident`.
	 * @param ctx the parse tree
	 */
	enterQualident?: (ctx: QualidentContext) => void;
	/**
	 * Exit a parse tree produced by `m2pim4Parser.qualident`.
	 * @param ctx the parse tree
	 */
	exitQualident?: (ctx: QualidentContext) => void;

	/**
	 * Enter a parse tree produced by `m2pim4Parser.constantDeclaration`.
	 * @param ctx the parse tree
	 */
	enterConstantDeclaration?: (ctx: ConstantDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `m2pim4Parser.constantDeclaration`.
	 * @param ctx the parse tree
	 */
	exitConstantDeclaration?: (ctx: ConstantDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `m2pim4Parser.constExpression`.
	 * @param ctx the parse tree
	 */
	enterConstExpression?: (ctx: ConstExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `m2pim4Parser.constExpression`.
	 * @param ctx the parse tree
	 */
	exitConstExpression?: (ctx: ConstExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `m2pim4Parser.relation`.
	 * @param ctx the parse tree
	 */
	enterRelation?: (ctx: RelationContext) => void;
	/**
	 * Exit a parse tree produced by `m2pim4Parser.relation`.
	 * @param ctx the parse tree
	 */
	exitRelation?: (ctx: RelationContext) => void;

	/**
	 * Enter a parse tree produced by `m2pim4Parser.simpleConstExpr`.
	 * @param ctx the parse tree
	 */
	enterSimpleConstExpr?: (ctx: SimpleConstExprContext) => void;
	/**
	 * Exit a parse tree produced by `m2pim4Parser.simpleConstExpr`.
	 * @param ctx the parse tree
	 */
	exitSimpleConstExpr?: (ctx: SimpleConstExprContext) => void;

	/**
	 * Enter a parse tree produced by `m2pim4Parser.addOperator`.
	 * @param ctx the parse tree
	 */
	enterAddOperator?: (ctx: AddOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `m2pim4Parser.addOperator`.
	 * @param ctx the parse tree
	 */
	exitAddOperator?: (ctx: AddOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `m2pim4Parser.constTerm`.
	 * @param ctx the parse tree
	 */
	enterConstTerm?: (ctx: ConstTermContext) => void;
	/**
	 * Exit a parse tree produced by `m2pim4Parser.constTerm`.
	 * @param ctx the parse tree
	 */
	exitConstTerm?: (ctx: ConstTermContext) => void;

	/**
	 * Enter a parse tree produced by `m2pim4Parser.mulOperator`.
	 * @param ctx the parse tree
	 */
	enterMulOperator?: (ctx: MulOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `m2pim4Parser.mulOperator`.
	 * @param ctx the parse tree
	 */
	exitMulOperator?: (ctx: MulOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `m2pim4Parser.constFactor`.
	 * @param ctx the parse tree
	 */
	enterConstFactor?: (ctx: ConstFactorContext) => void;
	/**
	 * Exit a parse tree produced by `m2pim4Parser.constFactor`.
	 * @param ctx the parse tree
	 */
	exitConstFactor?: (ctx: ConstFactorContext) => void;

	/**
	 * Enter a parse tree produced by `m2pim4Parser.setOrQualident`.
	 * @param ctx the parse tree
	 */
	enterSetOrQualident?: (ctx: SetOrQualidentContext) => void;
	/**
	 * Exit a parse tree produced by `m2pim4Parser.setOrQualident`.
	 * @param ctx the parse tree
	 */
	exitSetOrQualident?: (ctx: SetOrQualidentContext) => void;

	/**
	 * Enter a parse tree produced by `m2pim4Parser.set`.
	 * @param ctx the parse tree
	 */
	enterSet?: (ctx: SetContext) => void;
	/**
	 * Exit a parse tree produced by `m2pim4Parser.set`.
	 * @param ctx the parse tree
	 */
	exitSet?: (ctx: SetContext) => void;

	/**
	 * Enter a parse tree produced by `m2pim4Parser.element`.
	 * @param ctx the parse tree
	 */
	enterElement?: (ctx: ElementContext) => void;
	/**
	 * Exit a parse tree produced by `m2pim4Parser.element`.
	 * @param ctx the parse tree
	 */
	exitElement?: (ctx: ElementContext) => void;

	/**
	 * Enter a parse tree produced by `m2pim4Parser.typeDeclaration`.
	 * @param ctx the parse tree
	 */
	enterTypeDeclaration?: (ctx: TypeDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `m2pim4Parser.typeDeclaration`.
	 * @param ctx the parse tree
	 */
	exitTypeDeclaration?: (ctx: TypeDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `m2pim4Parser.type`.
	 * @param ctx the parse tree
	 */
	enterType?: (ctx: TypeContext) => void;
	/**
	 * Exit a parse tree produced by `m2pim4Parser.type`.
	 * @param ctx the parse tree
	 */
	exitType?: (ctx: TypeContext) => void;

	/**
	 * Enter a parse tree produced by `m2pim4Parser.simpleType`.
	 * @param ctx the parse tree
	 */
	enterSimpleType?: (ctx: SimpleTypeContext) => void;
	/**
	 * Exit a parse tree produced by `m2pim4Parser.simpleType`.
	 * @param ctx the parse tree
	 */
	exitSimpleType?: (ctx: SimpleTypeContext) => void;

	/**
	 * Enter a parse tree produced by `m2pim4Parser.enumeration`.
	 * @param ctx the parse tree
	 */
	enterEnumeration?: (ctx: EnumerationContext) => void;
	/**
	 * Exit a parse tree produced by `m2pim4Parser.enumeration`.
	 * @param ctx the parse tree
	 */
	exitEnumeration?: (ctx: EnumerationContext) => void;

	/**
	 * Enter a parse tree produced by `m2pim4Parser.identList`.
	 * @param ctx the parse tree
	 */
	enterIdentList?: (ctx: IdentListContext) => void;
	/**
	 * Exit a parse tree produced by `m2pim4Parser.identList`.
	 * @param ctx the parse tree
	 */
	exitIdentList?: (ctx: IdentListContext) => void;

	/**
	 * Enter a parse tree produced by `m2pim4Parser.subrangeType`.
	 * @param ctx the parse tree
	 */
	enterSubrangeType?: (ctx: SubrangeTypeContext) => void;
	/**
	 * Exit a parse tree produced by `m2pim4Parser.subrangeType`.
	 * @param ctx the parse tree
	 */
	exitSubrangeType?: (ctx: SubrangeTypeContext) => void;

	/**
	 * Enter a parse tree produced by `m2pim4Parser.arrayType`.
	 * @param ctx the parse tree
	 */
	enterArrayType?: (ctx: ArrayTypeContext) => void;
	/**
	 * Exit a parse tree produced by `m2pim4Parser.arrayType`.
	 * @param ctx the parse tree
	 */
	exitArrayType?: (ctx: ArrayTypeContext) => void;

	/**
	 * Enter a parse tree produced by `m2pim4Parser.recordType`.
	 * @param ctx the parse tree
	 */
	enterRecordType?: (ctx: RecordTypeContext) => void;
	/**
	 * Exit a parse tree produced by `m2pim4Parser.recordType`.
	 * @param ctx the parse tree
	 */
	exitRecordType?: (ctx: RecordTypeContext) => void;

	/**
	 * Enter a parse tree produced by `m2pim4Parser.fieldListSequence`.
	 * @param ctx the parse tree
	 */
	enterFieldListSequence?: (ctx: FieldListSequenceContext) => void;
	/**
	 * Exit a parse tree produced by `m2pim4Parser.fieldListSequence`.
	 * @param ctx the parse tree
	 */
	exitFieldListSequence?: (ctx: FieldListSequenceContext) => void;

	/**
	 * Enter a parse tree produced by `m2pim4Parser.fieldList`.
	 * @param ctx the parse tree
	 */
	enterFieldList?: (ctx: FieldListContext) => void;
	/**
	 * Exit a parse tree produced by `m2pim4Parser.fieldList`.
	 * @param ctx the parse tree
	 */
	exitFieldList?: (ctx: FieldListContext) => void;

	/**
	 * Enter a parse tree produced by `m2pim4Parser.variant`.
	 * @param ctx the parse tree
	 */
	enterVariant?: (ctx: VariantContext) => void;
	/**
	 * Exit a parse tree produced by `m2pim4Parser.variant`.
	 * @param ctx the parse tree
	 */
	exitVariant?: (ctx: VariantContext) => void;

	/**
	 * Enter a parse tree produced by `m2pim4Parser.caseLabelList`.
	 * @param ctx the parse tree
	 */
	enterCaseLabelList?: (ctx: CaseLabelListContext) => void;
	/**
	 * Exit a parse tree produced by `m2pim4Parser.caseLabelList`.
	 * @param ctx the parse tree
	 */
	exitCaseLabelList?: (ctx: CaseLabelListContext) => void;

	/**
	 * Enter a parse tree produced by `m2pim4Parser.caseLabels`.
	 * @param ctx the parse tree
	 */
	enterCaseLabels?: (ctx: CaseLabelsContext) => void;
	/**
	 * Exit a parse tree produced by `m2pim4Parser.caseLabels`.
	 * @param ctx the parse tree
	 */
	exitCaseLabels?: (ctx: CaseLabelsContext) => void;

	/**
	 * Enter a parse tree produced by `m2pim4Parser.setType`.
	 * @param ctx the parse tree
	 */
	enterSetType?: (ctx: SetTypeContext) => void;
	/**
	 * Exit a parse tree produced by `m2pim4Parser.setType`.
	 * @param ctx the parse tree
	 */
	exitSetType?: (ctx: SetTypeContext) => void;

	/**
	 * Enter a parse tree produced by `m2pim4Parser.pointerType`.
	 * @param ctx the parse tree
	 */
	enterPointerType?: (ctx: PointerTypeContext) => void;
	/**
	 * Exit a parse tree produced by `m2pim4Parser.pointerType`.
	 * @param ctx the parse tree
	 */
	exitPointerType?: (ctx: PointerTypeContext) => void;

	/**
	 * Enter a parse tree produced by `m2pim4Parser.procedureType`.
	 * @param ctx the parse tree
	 */
	enterProcedureType?: (ctx: ProcedureTypeContext) => void;
	/**
	 * Exit a parse tree produced by `m2pim4Parser.procedureType`.
	 * @param ctx the parse tree
	 */
	exitProcedureType?: (ctx: ProcedureTypeContext) => void;

	/**
	 * Enter a parse tree produced by `m2pim4Parser.formalTypeList`.
	 * @param ctx the parse tree
	 */
	enterFormalTypeList?: (ctx: FormalTypeListContext) => void;
	/**
	 * Exit a parse tree produced by `m2pim4Parser.formalTypeList`.
	 * @param ctx the parse tree
	 */
	exitFormalTypeList?: (ctx: FormalTypeListContext) => void;

	/**
	 * Enter a parse tree produced by `m2pim4Parser.variableDeclaration`.
	 * @param ctx the parse tree
	 */
	enterVariableDeclaration?: (ctx: VariableDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `m2pim4Parser.variableDeclaration`.
	 * @param ctx the parse tree
	 */
	exitVariableDeclaration?: (ctx: VariableDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `m2pim4Parser.designator`.
	 * @param ctx the parse tree
	 */
	enterDesignator?: (ctx: DesignatorContext) => void;
	/**
	 * Exit a parse tree produced by `m2pim4Parser.designator`.
	 * @param ctx the parse tree
	 */
	exitDesignator?: (ctx: DesignatorContext) => void;

	/**
	 * Enter a parse tree produced by `m2pim4Parser.designatorTail`.
	 * @param ctx the parse tree
	 */
	enterDesignatorTail?: (ctx: DesignatorTailContext) => void;
	/**
	 * Exit a parse tree produced by `m2pim4Parser.designatorTail`.
	 * @param ctx the parse tree
	 */
	exitDesignatorTail?: (ctx: DesignatorTailContext) => void;

	/**
	 * Enter a parse tree produced by `m2pim4Parser.expList`.
	 * @param ctx the parse tree
	 */
	enterExpList?: (ctx: ExpListContext) => void;
	/**
	 * Exit a parse tree produced by `m2pim4Parser.expList`.
	 * @param ctx the parse tree
	 */
	exitExpList?: (ctx: ExpListContext) => void;

	/**
	 * Enter a parse tree produced by `m2pim4Parser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `m2pim4Parser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `m2pim4Parser.simpleExpression`.
	 * @param ctx the parse tree
	 */
	enterSimpleExpression?: (ctx: SimpleExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `m2pim4Parser.simpleExpression`.
	 * @param ctx the parse tree
	 */
	exitSimpleExpression?: (ctx: SimpleExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `m2pim4Parser.term`.
	 * @param ctx the parse tree
	 */
	enterTerm?: (ctx: TermContext) => void;
	/**
	 * Exit a parse tree produced by `m2pim4Parser.term`.
	 * @param ctx the parse tree
	 */
	exitTerm?: (ctx: TermContext) => void;

	/**
	 * Enter a parse tree produced by `m2pim4Parser.factor`.
	 * @param ctx the parse tree
	 */
	enterFactor?: (ctx: FactorContext) => void;
	/**
	 * Exit a parse tree produced by `m2pim4Parser.factor`.
	 * @param ctx the parse tree
	 */
	exitFactor?: (ctx: FactorContext) => void;

	/**
	 * Enter a parse tree produced by `m2pim4Parser.setOrDesignatorOrProcCall`.
	 * @param ctx the parse tree
	 */
	enterSetOrDesignatorOrProcCall?: (ctx: SetOrDesignatorOrProcCallContext) => void;
	/**
	 * Exit a parse tree produced by `m2pim4Parser.setOrDesignatorOrProcCall`.
	 * @param ctx the parse tree
	 */
	exitSetOrDesignatorOrProcCall?: (ctx: SetOrDesignatorOrProcCallContext) => void;

	/**
	 * Enter a parse tree produced by `m2pim4Parser.actualParameters`.
	 * @param ctx the parse tree
	 */
	enterActualParameters?: (ctx: ActualParametersContext) => void;
	/**
	 * Exit a parse tree produced by `m2pim4Parser.actualParameters`.
	 * @param ctx the parse tree
	 */
	exitActualParameters?: (ctx: ActualParametersContext) => void;

	/**
	 * Enter a parse tree produced by `m2pim4Parser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement?: (ctx: StatementContext) => void;
	/**
	 * Exit a parse tree produced by `m2pim4Parser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement?: (ctx: StatementContext) => void;

	/**
	 * Enter a parse tree produced by `m2pim4Parser.assignmentOrProcCall`.
	 * @param ctx the parse tree
	 */
	enterAssignmentOrProcCall?: (ctx: AssignmentOrProcCallContext) => void;
	/**
	 * Exit a parse tree produced by `m2pim4Parser.assignmentOrProcCall`.
	 * @param ctx the parse tree
	 */
	exitAssignmentOrProcCall?: (ctx: AssignmentOrProcCallContext) => void;

	/**
	 * Enter a parse tree produced by `m2pim4Parser.statementSequence`.
	 * @param ctx the parse tree
	 */
	enterStatementSequence?: (ctx: StatementSequenceContext) => void;
	/**
	 * Exit a parse tree produced by `m2pim4Parser.statementSequence`.
	 * @param ctx the parse tree
	 */
	exitStatementSequence?: (ctx: StatementSequenceContext) => void;

	/**
	 * Enter a parse tree produced by `m2pim4Parser.ifStatement`.
	 * @param ctx the parse tree
	 */
	enterIfStatement?: (ctx: IfStatementContext) => void;
	/**
	 * Exit a parse tree produced by `m2pim4Parser.ifStatement`.
	 * @param ctx the parse tree
	 */
	exitIfStatement?: (ctx: IfStatementContext) => void;

	/**
	 * Enter a parse tree produced by `m2pim4Parser.caseStatement`.
	 * @param ctx the parse tree
	 */
	enterCaseStatement?: (ctx: CaseStatementContext) => void;
	/**
	 * Exit a parse tree produced by `m2pim4Parser.caseStatement`.
	 * @param ctx the parse tree
	 */
	exitCaseStatement?: (ctx: CaseStatementContext) => void;

	/**
	 * Enter a parse tree produced by `m2pim4Parser.ccase`.
	 * @param ctx the parse tree
	 */
	enterCcase?: (ctx: CcaseContext) => void;
	/**
	 * Exit a parse tree produced by `m2pim4Parser.ccase`.
	 * @param ctx the parse tree
	 */
	exitCcase?: (ctx: CcaseContext) => void;

	/**
	 * Enter a parse tree produced by `m2pim4Parser.whileStatement`.
	 * @param ctx the parse tree
	 */
	enterWhileStatement?: (ctx: WhileStatementContext) => void;
	/**
	 * Exit a parse tree produced by `m2pim4Parser.whileStatement`.
	 * @param ctx the parse tree
	 */
	exitWhileStatement?: (ctx: WhileStatementContext) => void;

	/**
	 * Enter a parse tree produced by `m2pim4Parser.repeatStatement`.
	 * @param ctx the parse tree
	 */
	enterRepeatStatement?: (ctx: RepeatStatementContext) => void;
	/**
	 * Exit a parse tree produced by `m2pim4Parser.repeatStatement`.
	 * @param ctx the parse tree
	 */
	exitRepeatStatement?: (ctx: RepeatStatementContext) => void;

	/**
	 * Enter a parse tree produced by `m2pim4Parser.forStatement`.
	 * @param ctx the parse tree
	 */
	enterForStatement?: (ctx: ForStatementContext) => void;
	/**
	 * Exit a parse tree produced by `m2pim4Parser.forStatement`.
	 * @param ctx the parse tree
	 */
	exitForStatement?: (ctx: ForStatementContext) => void;

	/**
	 * Enter a parse tree produced by `m2pim4Parser.loopStatement`.
	 * @param ctx the parse tree
	 */
	enterLoopStatement?: (ctx: LoopStatementContext) => void;
	/**
	 * Exit a parse tree produced by `m2pim4Parser.loopStatement`.
	 * @param ctx the parse tree
	 */
	exitLoopStatement?: (ctx: LoopStatementContext) => void;

	/**
	 * Enter a parse tree produced by `m2pim4Parser.withStatement`.
	 * @param ctx the parse tree
	 */
	enterWithStatement?: (ctx: WithStatementContext) => void;
	/**
	 * Exit a parse tree produced by `m2pim4Parser.withStatement`.
	 * @param ctx the parse tree
	 */
	exitWithStatement?: (ctx: WithStatementContext) => void;

	/**
	 * Enter a parse tree produced by `m2pim4Parser.procedureDeclaration`.
	 * @param ctx the parse tree
	 */
	enterProcedureDeclaration?: (ctx: ProcedureDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `m2pim4Parser.procedureDeclaration`.
	 * @param ctx the parse tree
	 */
	exitProcedureDeclaration?: (ctx: ProcedureDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `m2pim4Parser.procedureHeading`.
	 * @param ctx the parse tree
	 */
	enterProcedureHeading?: (ctx: ProcedureHeadingContext) => void;
	/**
	 * Exit a parse tree produced by `m2pim4Parser.procedureHeading`.
	 * @param ctx the parse tree
	 */
	exitProcedureHeading?: (ctx: ProcedureHeadingContext) => void;

	/**
	 * Enter a parse tree produced by `m2pim4Parser.block`.
	 * @param ctx the parse tree
	 */
	enterBlock?: (ctx: BlockContext) => void;
	/**
	 * Exit a parse tree produced by `m2pim4Parser.block`.
	 * @param ctx the parse tree
	 */
	exitBlock?: (ctx: BlockContext) => void;

	/**
	 * Enter a parse tree produced by `m2pim4Parser.declaration`.
	 * @param ctx the parse tree
	 */
	enterDeclaration?: (ctx: DeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `m2pim4Parser.declaration`.
	 * @param ctx the parse tree
	 */
	exitDeclaration?: (ctx: DeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `m2pim4Parser.formalParameters`.
	 * @param ctx the parse tree
	 */
	enterFormalParameters?: (ctx: FormalParametersContext) => void;
	/**
	 * Exit a parse tree produced by `m2pim4Parser.formalParameters`.
	 * @param ctx the parse tree
	 */
	exitFormalParameters?: (ctx: FormalParametersContext) => void;

	/**
	 * Enter a parse tree produced by `m2pim4Parser.fpSection`.
	 * @param ctx the parse tree
	 */
	enterFpSection?: (ctx: FpSectionContext) => void;
	/**
	 * Exit a parse tree produced by `m2pim4Parser.fpSection`.
	 * @param ctx the parse tree
	 */
	exitFpSection?: (ctx: FpSectionContext) => void;

	/**
	 * Enter a parse tree produced by `m2pim4Parser.formalType`.
	 * @param ctx the parse tree
	 */
	enterFormalType?: (ctx: FormalTypeContext) => void;
	/**
	 * Exit a parse tree produced by `m2pim4Parser.formalType`.
	 * @param ctx the parse tree
	 */
	exitFormalType?: (ctx: FormalTypeContext) => void;

	/**
	 * Enter a parse tree produced by `m2pim4Parser.moduleDeclaration`.
	 * @param ctx the parse tree
	 */
	enterModuleDeclaration?: (ctx: ModuleDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `m2pim4Parser.moduleDeclaration`.
	 * @param ctx the parse tree
	 */
	exitModuleDeclaration?: (ctx: ModuleDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `m2pim4Parser.priority`.
	 * @param ctx the parse tree
	 */
	enterPriority?: (ctx: PriorityContext) => void;
	/**
	 * Exit a parse tree produced by `m2pim4Parser.priority`.
	 * @param ctx the parse tree
	 */
	exitPriority?: (ctx: PriorityContext) => void;

	/**
	 * Enter a parse tree produced by `m2pim4Parser.exportList`.
	 * @param ctx the parse tree
	 */
	enterExportList?: (ctx: ExportListContext) => void;
	/**
	 * Exit a parse tree produced by `m2pim4Parser.exportList`.
	 * @param ctx the parse tree
	 */
	exitExportList?: (ctx: ExportListContext) => void;

	/**
	 * Enter a parse tree produced by `m2pim4Parser.importList`.
	 * @param ctx the parse tree
	 */
	enterImportList?: (ctx: ImportListContext) => void;
	/**
	 * Exit a parse tree produced by `m2pim4Parser.importList`.
	 * @param ctx the parse tree
	 */
	exitImportList?: (ctx: ImportListContext) => void;

	/**
	 * Enter a parse tree produced by `m2pim4Parser.definitionModule`.
	 * @param ctx the parse tree
	 */
	enterDefinitionModule?: (ctx: DefinitionModuleContext) => void;
	/**
	 * Exit a parse tree produced by `m2pim4Parser.definitionModule`.
	 * @param ctx the parse tree
	 */
	exitDefinitionModule?: (ctx: DefinitionModuleContext) => void;

	/**
	 * Enter a parse tree produced by `m2pim4Parser.definition`.
	 * @param ctx the parse tree
	 */
	enterDefinition?: (ctx: DefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `m2pim4Parser.definition`.
	 * @param ctx the parse tree
	 */
	exitDefinition?: (ctx: DefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `m2pim4Parser.programModule`.
	 * @param ctx the parse tree
	 */
	enterProgramModule?: (ctx: ProgramModuleContext) => void;
	/**
	 * Exit a parse tree produced by `m2pim4Parser.programModule`.
	 * @param ctx the parse tree
	 */
	exitProgramModule?: (ctx: ProgramModuleContext) => void;

	/**
	 * Enter a parse tree produced by `m2pim4Parser.compilationUnit`.
	 * @param ctx the parse tree
	 */
	enterCompilationUnit?: (ctx: CompilationUnitContext) => void;
	/**
	 * Exit a parse tree produced by `m2pim4Parser.compilationUnit`.
	 * @param ctx the parse tree
	 */
	exitCompilationUnit?: (ctx: CompilationUnitContext) => void;
}

