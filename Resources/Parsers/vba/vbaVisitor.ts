// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/vba/vba.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { CaseCondIsContext } from "./vbaParser";
import { CaseCondToContext } from "./vbaParser";
import { CaseCondValueContext } from "./vbaParser";
import { InlineIfThenElseContext } from "./vbaParser";
import { BlockIfThenElseContext } from "./vbaParser";
import { VsLiteralContext } from "./vbaParser";
import { VsICSContext } from "./vbaParser";
import { VsStructContext } from "./vbaParser";
import { VsNewContext } from "./vbaParser";
import { VsTypeOfContext } from "./vbaParser";
import { VsMidContext } from "./vbaParser";
import { VsAddressOfContext } from "./vbaParser";
import { VsAssignContext } from "./vbaParser";
import { VsIsContext } from "./vbaParser";
import { VsLikeContext } from "./vbaParser";
import { VsGeqContext } from "./vbaParser";
import { VsLeqContext } from "./vbaParser";
import { VsGtContext } from "./vbaParser";
import { VsLtContext } from "./vbaParser";
import { VsNeqContext } from "./vbaParser";
import { VsEqContext } from "./vbaParser";
import { VsPowContext } from "./vbaParser";
import { VsNegationContext } from "./vbaParser";
import { VsPlusContext } from "./vbaParser";
import { VsDivContext } from "./vbaParser";
import { VsMultContext } from "./vbaParser";
import { VsModContext } from "./vbaParser";
import { VsAddContext } from "./vbaParser";
import { VsMinusContext } from "./vbaParser";
import { VsAmpContext } from "./vbaParser";
import { VsImpContext } from "./vbaParser";
import { VsEqvContext } from "./vbaParser";
import { VsXorContext } from "./vbaParser";
import { VsOrContext } from "./vbaParser";
import { VsAndContext } from "./vbaParser";
import { VsNotContext } from "./vbaParser";
import { OptionBaseStmtContext } from "./vbaParser";
import { OptionCompareStmtContext } from "./vbaParser";
import { OptionExplicitStmtContext } from "./vbaParser";
import { OptionPrivateModuleStmtContext } from "./vbaParser";
import { CaseCondElseContext } from "./vbaParser";
import { CaseCondSelectionContext } from "./vbaParser";
import { StartRuleContext } from "./vbaParser";
import { ModuleContext } from "./vbaParser";
import { ModuleHeaderContext } from "./vbaParser";
import { ModuleConfigContext } from "./vbaParser";
import { ModuleConfigElementContext } from "./vbaParser";
import { ModuleAttributesContext } from "./vbaParser";
import { ModuleDeclarationsContext } from "./vbaParser";
import { ModuleOptionContext } from "./vbaParser";
import { ModuleDeclarationsElementContext } from "./vbaParser";
import { MacroStmtContext } from "./vbaParser";
import { ModuleBodyContext } from "./vbaParser";
import { ModuleBodyElementContext } from "./vbaParser";
import { AttributeStmtContext } from "./vbaParser";
import { BlockContext } from "./vbaParser";
import { BlockStmtContext } from "./vbaParser";
import { AppactivateStmtContext } from "./vbaParser";
import { BeepStmtContext } from "./vbaParser";
import { ChdirStmtContext } from "./vbaParser";
import { ChdriveStmtContext } from "./vbaParser";
import { CloseStmtContext } from "./vbaParser";
import { ConstStmtContext } from "./vbaParser";
import { ConstSubStmtContext } from "./vbaParser";
import { DateStmtContext } from "./vbaParser";
import { DeclareStmtContext } from "./vbaParser";
import { DeftypeStmtContext } from "./vbaParser";
import { DeleteSettingStmtContext } from "./vbaParser";
import { DoLoopStmtContext } from "./vbaParser";
import { EndStmtContext } from "./vbaParser";
import { EnumerationStmtContext } from "./vbaParser";
import { EnumerationStmt_ConstantContext } from "./vbaParser";
import { EraseStmtContext } from "./vbaParser";
import { ErrorStmtContext } from "./vbaParser";
import { EventStmtContext } from "./vbaParser";
import { ExitStmtContext } from "./vbaParser";
import { FilecopyStmtContext } from "./vbaParser";
import { ForEachStmtContext } from "./vbaParser";
import { ForNextStmtContext } from "./vbaParser";
import { FunctionStmtContext } from "./vbaParser";
import { GetStmtContext } from "./vbaParser";
import { GoSubStmtContext } from "./vbaParser";
import { GoToStmtContext } from "./vbaParser";
import { IfThenElseStmtContext } from "./vbaParser";
import { IfBlockStmtContext } from "./vbaParser";
import { IfConditionStmtContext } from "./vbaParser";
import { IfElseIfBlockStmtContext } from "./vbaParser";
import { IfElseBlockStmtContext } from "./vbaParser";
import { ImplementsStmtContext } from "./vbaParser";
import { InputStmtContext } from "./vbaParser";
import { KillStmtContext } from "./vbaParser";
import { LetStmtContext } from "./vbaParser";
import { LineInputStmtContext } from "./vbaParser";
import { LoadStmtContext } from "./vbaParser";
import { LockStmtContext } from "./vbaParser";
import { LsetStmtContext } from "./vbaParser";
import { MacroConstStmtContext } from "./vbaParser";
import { MacroIfThenElseStmtContext } from "./vbaParser";
import { MacroIfBlockStmtContext } from "./vbaParser";
import { MacroElseIfBlockStmtContext } from "./vbaParser";
import { MacroElseBlockStmtContext } from "./vbaParser";
import { MidStmtContext } from "./vbaParser";
import { MkdirStmtContext } from "./vbaParser";
import { NameStmtContext } from "./vbaParser";
import { OnErrorStmtContext } from "./vbaParser";
import { OnGoToStmtContext } from "./vbaParser";
import { OnGoSubStmtContext } from "./vbaParser";
import { OpenStmtContext } from "./vbaParser";
import { OutputListContext } from "./vbaParser";
import { OutputList_ExpressionContext } from "./vbaParser";
import { PrintStmtContext } from "./vbaParser";
import { PropertyGetStmtContext } from "./vbaParser";
import { PropertySetStmtContext } from "./vbaParser";
import { PropertyLetStmtContext } from "./vbaParser";
import { PutStmtContext } from "./vbaParser";
import { RaiseEventStmtContext } from "./vbaParser";
import { RandomizeStmtContext } from "./vbaParser";
import { RedimStmtContext } from "./vbaParser";
import { RedimSubStmtContext } from "./vbaParser";
import { ResetStmtContext } from "./vbaParser";
import { ResumeStmtContext } from "./vbaParser";
import { ReturnStmtContext } from "./vbaParser";
import { RmdirStmtContext } from "./vbaParser";
import { RsetStmtContext } from "./vbaParser";
import { SavepictureStmtContext } from "./vbaParser";
import { SaveSettingStmtContext } from "./vbaParser";
import { SeekStmtContext } from "./vbaParser";
import { SelectCaseStmtContext } from "./vbaParser";
import { SC_SelectionContext } from "./vbaParser";
import { SC_CaseContext } from "./vbaParser";
import { SC_CondContext } from "./vbaParser";
import { SendkeysStmtContext } from "./vbaParser";
import { SetattrStmtContext } from "./vbaParser";
import { SetStmtContext } from "./vbaParser";
import { StopStmtContext } from "./vbaParser";
import { SubStmtContext } from "./vbaParser";
import { TimeStmtContext } from "./vbaParser";
import { TypeStmtContext } from "./vbaParser";
import { TypeStmt_ElementContext } from "./vbaParser";
import { TypeOfStmtContext } from "./vbaParser";
import { UnloadStmtContext } from "./vbaParser";
import { UnlockStmtContext } from "./vbaParser";
import { ValueStmtContext } from "./vbaParser";
import { VariableStmtContext } from "./vbaParser";
import { VariableListStmtContext } from "./vbaParser";
import { VariableSubStmtContext } from "./vbaParser";
import { WhileWendStmtContext } from "./vbaParser";
import { WidthStmtContext } from "./vbaParser";
import { WithStmtContext } from "./vbaParser";
import { WriteStmtContext } from "./vbaParser";
import { FileNumberContext } from "./vbaParser";
import { ExplicitCallStmtContext } from "./vbaParser";
import { ECS_ProcedureCallContext } from "./vbaParser";
import { ECS_MemberProcedureCallContext } from "./vbaParser";
import { ImplicitCallStmt_InBlockContext } from "./vbaParser";
import { ICS_B_MemberProcedureCallContext } from "./vbaParser";
import { ICS_B_ProcedureCallContext } from "./vbaParser";
import { ImplicitCallStmt_InStmtContext } from "./vbaParser";
import { ICS_S_VariableOrProcedureCallContext } from "./vbaParser";
import { ICS_S_ProcedureOrArrayCallContext } from "./vbaParser";
import { ICS_S_MembersCallContext } from "./vbaParser";
import { ICS_S_MemberCallContext } from "./vbaParser";
import { ICS_S_DictionaryCallContext } from "./vbaParser";
import { ArgsCallContext } from "./vbaParser";
import { ArgCallContext } from "./vbaParser";
import { DictionaryCallStmtContext } from "./vbaParser";
import { ArgListContext } from "./vbaParser";
import { ArgContext } from "./vbaParser";
import { ArgDefaultValueContext } from "./vbaParser";
import { SubscriptsContext } from "./vbaParser";
import { SubscriptContext } from "./vbaParser";
import { AmbiguousIdentifierContext } from "./vbaParser";
import { AsTypeClauseContext } from "./vbaParser";
import { BaseTypeContext } from "./vbaParser";
import { CertainIdentifierContext } from "./vbaParser";
import { ComparisonOperatorContext } from "./vbaParser";
import { ComplexTypeContext } from "./vbaParser";
import { FieldLengthContext } from "./vbaParser";
import { LetterrangeContext } from "./vbaParser";
import { LineLabelContext } from "./vbaParser";
import { LiteralContext } from "./vbaParser";
import { TypeContext } from "./vbaParser";
import { TypeHintContext } from "./vbaParser";
import { VisibilityContext } from "./vbaParser";
import { AmbiguousKeywordContext } from "./vbaParser";
import { RemCommentContext } from "./vbaParser";
import { CommentContext } from "./vbaParser";
import { EndOfLineContext } from "./vbaParser";
import { EndOfStatementContext } from "./vbaParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `vbaParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface vbaVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by the `caseCondIs`
	 * labeled alternative in `vbaParser.sC_Selection`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCaseCondIs?: (ctx: CaseCondIsContext) => Result;

	/**
	 * Visit a parse tree produced by the `caseCondTo`
	 * labeled alternative in `vbaParser.sC_Selection`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCaseCondTo?: (ctx: CaseCondToContext) => Result;

	/**
	 * Visit a parse tree produced by the `caseCondValue`
	 * labeled alternative in `vbaParser.sC_Selection`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCaseCondValue?: (ctx: CaseCondValueContext) => Result;

	/**
	 * Visit a parse tree produced by the `inlineIfThenElse`
	 * labeled alternative in `vbaParser.ifThenElseStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInlineIfThenElse?: (ctx: InlineIfThenElseContext) => Result;

	/**
	 * Visit a parse tree produced by the `blockIfThenElse`
	 * labeled alternative in `vbaParser.ifThenElseStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlockIfThenElse?: (ctx: BlockIfThenElseContext) => Result;

	/**
	 * Visit a parse tree produced by the `vsLiteral`
	 * labeled alternative in `vbaParser.valueStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVsLiteral?: (ctx: VsLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by the `vsICS`
	 * labeled alternative in `vbaParser.valueStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVsICS?: (ctx: VsICSContext) => Result;

	/**
	 * Visit a parse tree produced by the `vsStruct`
	 * labeled alternative in `vbaParser.valueStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVsStruct?: (ctx: VsStructContext) => Result;

	/**
	 * Visit a parse tree produced by the `vsNew`
	 * labeled alternative in `vbaParser.valueStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVsNew?: (ctx: VsNewContext) => Result;

	/**
	 * Visit a parse tree produced by the `vsTypeOf`
	 * labeled alternative in `vbaParser.valueStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVsTypeOf?: (ctx: VsTypeOfContext) => Result;

	/**
	 * Visit a parse tree produced by the `vsMid`
	 * labeled alternative in `vbaParser.valueStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVsMid?: (ctx: VsMidContext) => Result;

	/**
	 * Visit a parse tree produced by the `vsAddressOf`
	 * labeled alternative in `vbaParser.valueStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVsAddressOf?: (ctx: VsAddressOfContext) => Result;

	/**
	 * Visit a parse tree produced by the `vsAssign`
	 * labeled alternative in `vbaParser.valueStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVsAssign?: (ctx: VsAssignContext) => Result;

	/**
	 * Visit a parse tree produced by the `vsIs`
	 * labeled alternative in `vbaParser.valueStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVsIs?: (ctx: VsIsContext) => Result;

	/**
	 * Visit a parse tree produced by the `vsLike`
	 * labeled alternative in `vbaParser.valueStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVsLike?: (ctx: VsLikeContext) => Result;

	/**
	 * Visit a parse tree produced by the `vsGeq`
	 * labeled alternative in `vbaParser.valueStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVsGeq?: (ctx: VsGeqContext) => Result;

	/**
	 * Visit a parse tree produced by the `vsLeq`
	 * labeled alternative in `vbaParser.valueStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVsLeq?: (ctx: VsLeqContext) => Result;

	/**
	 * Visit a parse tree produced by the `vsGt`
	 * labeled alternative in `vbaParser.valueStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVsGt?: (ctx: VsGtContext) => Result;

	/**
	 * Visit a parse tree produced by the `vsLt`
	 * labeled alternative in `vbaParser.valueStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVsLt?: (ctx: VsLtContext) => Result;

	/**
	 * Visit a parse tree produced by the `vsNeq`
	 * labeled alternative in `vbaParser.valueStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVsNeq?: (ctx: VsNeqContext) => Result;

	/**
	 * Visit a parse tree produced by the `vsEq`
	 * labeled alternative in `vbaParser.valueStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVsEq?: (ctx: VsEqContext) => Result;

	/**
	 * Visit a parse tree produced by the `vsPow`
	 * labeled alternative in `vbaParser.valueStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVsPow?: (ctx: VsPowContext) => Result;

	/**
	 * Visit a parse tree produced by the `vsNegation`
	 * labeled alternative in `vbaParser.valueStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVsNegation?: (ctx: VsNegationContext) => Result;

	/**
	 * Visit a parse tree produced by the `vsPlus`
	 * labeled alternative in `vbaParser.valueStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVsPlus?: (ctx: VsPlusContext) => Result;

	/**
	 * Visit a parse tree produced by the `vsDiv`
	 * labeled alternative in `vbaParser.valueStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVsDiv?: (ctx: VsDivContext) => Result;

	/**
	 * Visit a parse tree produced by the `vsMult`
	 * labeled alternative in `vbaParser.valueStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVsMult?: (ctx: VsMultContext) => Result;

	/**
	 * Visit a parse tree produced by the `vsMod`
	 * labeled alternative in `vbaParser.valueStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVsMod?: (ctx: VsModContext) => Result;

	/**
	 * Visit a parse tree produced by the `vsAdd`
	 * labeled alternative in `vbaParser.valueStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVsAdd?: (ctx: VsAddContext) => Result;

	/**
	 * Visit a parse tree produced by the `vsMinus`
	 * labeled alternative in `vbaParser.valueStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVsMinus?: (ctx: VsMinusContext) => Result;

	/**
	 * Visit a parse tree produced by the `vsAmp`
	 * labeled alternative in `vbaParser.valueStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVsAmp?: (ctx: VsAmpContext) => Result;

	/**
	 * Visit a parse tree produced by the `vsImp`
	 * labeled alternative in `vbaParser.valueStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVsImp?: (ctx: VsImpContext) => Result;

	/**
	 * Visit a parse tree produced by the `vsEqv`
	 * labeled alternative in `vbaParser.valueStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVsEqv?: (ctx: VsEqvContext) => Result;

	/**
	 * Visit a parse tree produced by the `vsXor`
	 * labeled alternative in `vbaParser.valueStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVsXor?: (ctx: VsXorContext) => Result;

	/**
	 * Visit a parse tree produced by the `vsOr`
	 * labeled alternative in `vbaParser.valueStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVsOr?: (ctx: VsOrContext) => Result;

	/**
	 * Visit a parse tree produced by the `vsAnd`
	 * labeled alternative in `vbaParser.valueStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVsAnd?: (ctx: VsAndContext) => Result;

	/**
	 * Visit a parse tree produced by the `vsNot`
	 * labeled alternative in `vbaParser.valueStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVsNot?: (ctx: VsNotContext) => Result;

	/**
	 * Visit a parse tree produced by the `optionBaseStmt`
	 * labeled alternative in `vbaParser.moduleOption`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOptionBaseStmt?: (ctx: OptionBaseStmtContext) => Result;

	/**
	 * Visit a parse tree produced by the `optionCompareStmt`
	 * labeled alternative in `vbaParser.moduleOption`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOptionCompareStmt?: (ctx: OptionCompareStmtContext) => Result;

	/**
	 * Visit a parse tree produced by the `optionExplicitStmt`
	 * labeled alternative in `vbaParser.moduleOption`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOptionExplicitStmt?: (ctx: OptionExplicitStmtContext) => Result;

	/**
	 * Visit a parse tree produced by the `optionPrivateModuleStmt`
	 * labeled alternative in `vbaParser.moduleOption`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOptionPrivateModuleStmt?: (ctx: OptionPrivateModuleStmtContext) => Result;

	/**
	 * Visit a parse tree produced by the `caseCondElse`
	 * labeled alternative in `vbaParser.sC_Cond`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCaseCondElse?: (ctx: CaseCondElseContext) => Result;

	/**
	 * Visit a parse tree produced by the `caseCondSelection`
	 * labeled alternative in `vbaParser.sC_Cond`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCaseCondSelection?: (ctx: CaseCondSelectionContext) => Result;

	/**
	 * Visit a parse tree produced by `vbaParser.startRule`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStartRule?: (ctx: StartRuleContext) => Result;

	/**
	 * Visit a parse tree produced by `vbaParser.module`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitModule?: (ctx: ModuleContext) => Result;

	/**
	 * Visit a parse tree produced by `vbaParser.moduleHeader`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitModuleHeader?: (ctx: ModuleHeaderContext) => Result;

	/**
	 * Visit a parse tree produced by `vbaParser.moduleConfig`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitModuleConfig?: (ctx: ModuleConfigContext) => Result;

	/**
	 * Visit a parse tree produced by `vbaParser.moduleConfigElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitModuleConfigElement?: (ctx: ModuleConfigElementContext) => Result;

	/**
	 * Visit a parse tree produced by `vbaParser.moduleAttributes`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitModuleAttributes?: (ctx: ModuleAttributesContext) => Result;

	/**
	 * Visit a parse tree produced by `vbaParser.moduleDeclarations`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitModuleDeclarations?: (ctx: ModuleDeclarationsContext) => Result;

	/**
	 * Visit a parse tree produced by `vbaParser.moduleOption`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitModuleOption?: (ctx: ModuleOptionContext) => Result;

	/**
	 * Visit a parse tree produced by `vbaParser.moduleDeclarationsElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitModuleDeclarationsElement?: (ctx: ModuleDeclarationsElementContext) => Result;

	/**
	 * Visit a parse tree produced by `vbaParser.macroStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMacroStmt?: (ctx: MacroStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `vbaParser.moduleBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitModuleBody?: (ctx: ModuleBodyContext) => Result;

	/**
	 * Visit a parse tree produced by `vbaParser.moduleBodyElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitModuleBodyElement?: (ctx: ModuleBodyElementContext) => Result;

	/**
	 * Visit a parse tree produced by `vbaParser.attributeStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAttributeStmt?: (ctx: AttributeStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `vbaParser.block`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlock?: (ctx: BlockContext) => Result;

	/**
	 * Visit a parse tree produced by `vbaParser.blockStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlockStmt?: (ctx: BlockStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `vbaParser.appactivateStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAppactivateStmt?: (ctx: AppactivateStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `vbaParser.beepStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBeepStmt?: (ctx: BeepStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `vbaParser.chdirStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitChdirStmt?: (ctx: ChdirStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `vbaParser.chdriveStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitChdriveStmt?: (ctx: ChdriveStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `vbaParser.closeStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCloseStmt?: (ctx: CloseStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `vbaParser.constStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstStmt?: (ctx: ConstStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `vbaParser.constSubStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstSubStmt?: (ctx: ConstSubStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `vbaParser.dateStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDateStmt?: (ctx: DateStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `vbaParser.declareStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclareStmt?: (ctx: DeclareStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `vbaParser.deftypeStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeftypeStmt?: (ctx: DeftypeStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `vbaParser.deleteSettingStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeleteSettingStmt?: (ctx: DeleteSettingStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `vbaParser.doLoopStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDoLoopStmt?: (ctx: DoLoopStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `vbaParser.endStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEndStmt?: (ctx: EndStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `vbaParser.enumerationStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumerationStmt?: (ctx: EnumerationStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `vbaParser.enumerationStmt_Constant`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumerationStmt_Constant?: (ctx: EnumerationStmt_ConstantContext) => Result;

	/**
	 * Visit a parse tree produced by `vbaParser.eraseStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEraseStmt?: (ctx: EraseStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `vbaParser.errorStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitErrorStmt?: (ctx: ErrorStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `vbaParser.eventStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEventStmt?: (ctx: EventStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `vbaParser.exitStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExitStmt?: (ctx: ExitStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `vbaParser.filecopyStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFilecopyStmt?: (ctx: FilecopyStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `vbaParser.forEachStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForEachStmt?: (ctx: ForEachStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `vbaParser.forNextStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForNextStmt?: (ctx: ForNextStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `vbaParser.functionStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionStmt?: (ctx: FunctionStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `vbaParser.getStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGetStmt?: (ctx: GetStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `vbaParser.goSubStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGoSubStmt?: (ctx: GoSubStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `vbaParser.goToStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGoToStmt?: (ctx: GoToStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `vbaParser.ifThenElseStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfThenElseStmt?: (ctx: IfThenElseStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `vbaParser.ifBlockStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfBlockStmt?: (ctx: IfBlockStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `vbaParser.ifConditionStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfConditionStmt?: (ctx: IfConditionStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `vbaParser.ifElseIfBlockStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfElseIfBlockStmt?: (ctx: IfElseIfBlockStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `vbaParser.ifElseBlockStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfElseBlockStmt?: (ctx: IfElseBlockStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `vbaParser.implementsStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImplementsStmt?: (ctx: ImplementsStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `vbaParser.inputStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInputStmt?: (ctx: InputStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `vbaParser.killStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKillStmt?: (ctx: KillStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `vbaParser.letStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLetStmt?: (ctx: LetStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `vbaParser.lineInputStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLineInputStmt?: (ctx: LineInputStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `vbaParser.loadStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLoadStmt?: (ctx: LoadStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `vbaParser.lockStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLockStmt?: (ctx: LockStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `vbaParser.lsetStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLsetStmt?: (ctx: LsetStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `vbaParser.macroConstStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMacroConstStmt?: (ctx: MacroConstStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `vbaParser.macroIfThenElseStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMacroIfThenElseStmt?: (ctx: MacroIfThenElseStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `vbaParser.macroIfBlockStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMacroIfBlockStmt?: (ctx: MacroIfBlockStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `vbaParser.macroElseIfBlockStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMacroElseIfBlockStmt?: (ctx: MacroElseIfBlockStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `vbaParser.macroElseBlockStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMacroElseBlockStmt?: (ctx: MacroElseBlockStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `vbaParser.midStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMidStmt?: (ctx: MidStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `vbaParser.mkdirStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMkdirStmt?: (ctx: MkdirStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `vbaParser.nameStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNameStmt?: (ctx: NameStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `vbaParser.onErrorStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOnErrorStmt?: (ctx: OnErrorStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `vbaParser.onGoToStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOnGoToStmt?: (ctx: OnGoToStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `vbaParser.onGoSubStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOnGoSubStmt?: (ctx: OnGoSubStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `vbaParser.openStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOpenStmt?: (ctx: OpenStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `vbaParser.outputList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOutputList?: (ctx: OutputListContext) => Result;

	/**
	 * Visit a parse tree produced by `vbaParser.outputList_Expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOutputList_Expression?: (ctx: OutputList_ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `vbaParser.printStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrintStmt?: (ctx: PrintStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `vbaParser.propertyGetStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPropertyGetStmt?: (ctx: PropertyGetStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `vbaParser.propertySetStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPropertySetStmt?: (ctx: PropertySetStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `vbaParser.propertyLetStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPropertyLetStmt?: (ctx: PropertyLetStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `vbaParser.putStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPutStmt?: (ctx: PutStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `vbaParser.raiseEventStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRaiseEventStmt?: (ctx: RaiseEventStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `vbaParser.randomizeStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRandomizeStmt?: (ctx: RandomizeStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `vbaParser.redimStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRedimStmt?: (ctx: RedimStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `vbaParser.redimSubStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRedimSubStmt?: (ctx: RedimSubStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `vbaParser.resetStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitResetStmt?: (ctx: ResetStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `vbaParser.resumeStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitResumeStmt?: (ctx: ResumeStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `vbaParser.returnStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReturnStmt?: (ctx: ReturnStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `vbaParser.rmdirStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRmdirStmt?: (ctx: RmdirStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `vbaParser.rsetStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRsetStmt?: (ctx: RsetStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `vbaParser.savepictureStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSavepictureStmt?: (ctx: SavepictureStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `vbaParser.saveSettingStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSaveSettingStmt?: (ctx: SaveSettingStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `vbaParser.seekStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSeekStmt?: (ctx: SeekStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `vbaParser.selectCaseStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelectCaseStmt?: (ctx: SelectCaseStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `vbaParser.sC_Selection`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSC_Selection?: (ctx: SC_SelectionContext) => Result;

	/**
	 * Visit a parse tree produced by `vbaParser.sC_Case`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSC_Case?: (ctx: SC_CaseContext) => Result;

	/**
	 * Visit a parse tree produced by `vbaParser.sC_Cond`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSC_Cond?: (ctx: SC_CondContext) => Result;

	/**
	 * Visit a parse tree produced by `vbaParser.sendkeysStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSendkeysStmt?: (ctx: SendkeysStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `vbaParser.setattrStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetattrStmt?: (ctx: SetattrStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `vbaParser.setStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetStmt?: (ctx: SetStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `vbaParser.stopStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStopStmt?: (ctx: StopStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `vbaParser.subStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubStmt?: (ctx: SubStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `vbaParser.timeStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTimeStmt?: (ctx: TimeStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `vbaParser.typeStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeStmt?: (ctx: TypeStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `vbaParser.typeStmt_Element`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeStmt_Element?: (ctx: TypeStmt_ElementContext) => Result;

	/**
	 * Visit a parse tree produced by `vbaParser.typeOfStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeOfStmt?: (ctx: TypeOfStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `vbaParser.unloadStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnloadStmt?: (ctx: UnloadStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `vbaParser.unlockStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnlockStmt?: (ctx: UnlockStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `vbaParser.valueStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValueStmt?: (ctx: ValueStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `vbaParser.variableStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableStmt?: (ctx: VariableStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `vbaParser.variableListStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableListStmt?: (ctx: VariableListStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `vbaParser.variableSubStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableSubStmt?: (ctx: VariableSubStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `vbaParser.whileWendStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhileWendStmt?: (ctx: WhileWendStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `vbaParser.widthStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWidthStmt?: (ctx: WidthStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `vbaParser.withStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWithStmt?: (ctx: WithStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `vbaParser.writeStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWriteStmt?: (ctx: WriteStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `vbaParser.fileNumber`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFileNumber?: (ctx: FileNumberContext) => Result;

	/**
	 * Visit a parse tree produced by `vbaParser.explicitCallStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExplicitCallStmt?: (ctx: ExplicitCallStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `vbaParser.eCS_ProcedureCall`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitECS_ProcedureCall?: (ctx: ECS_ProcedureCallContext) => Result;

	/**
	 * Visit a parse tree produced by `vbaParser.eCS_MemberProcedureCall`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitECS_MemberProcedureCall?: (ctx: ECS_MemberProcedureCallContext) => Result;

	/**
	 * Visit a parse tree produced by `vbaParser.implicitCallStmt_InBlock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImplicitCallStmt_InBlock?: (ctx: ImplicitCallStmt_InBlockContext) => Result;

	/**
	 * Visit a parse tree produced by `vbaParser.iCS_B_MemberProcedureCall`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitICS_B_MemberProcedureCall?: (ctx: ICS_B_MemberProcedureCallContext) => Result;

	/**
	 * Visit a parse tree produced by `vbaParser.iCS_B_ProcedureCall`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitICS_B_ProcedureCall?: (ctx: ICS_B_ProcedureCallContext) => Result;

	/**
	 * Visit a parse tree produced by `vbaParser.implicitCallStmt_InStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImplicitCallStmt_InStmt?: (ctx: ImplicitCallStmt_InStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `vbaParser.iCS_S_VariableOrProcedureCall`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitICS_S_VariableOrProcedureCall?: (ctx: ICS_S_VariableOrProcedureCallContext) => Result;

	/**
	 * Visit a parse tree produced by `vbaParser.iCS_S_ProcedureOrArrayCall`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitICS_S_ProcedureOrArrayCall?: (ctx: ICS_S_ProcedureOrArrayCallContext) => Result;

	/**
	 * Visit a parse tree produced by `vbaParser.iCS_S_MembersCall`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitICS_S_MembersCall?: (ctx: ICS_S_MembersCallContext) => Result;

	/**
	 * Visit a parse tree produced by `vbaParser.iCS_S_MemberCall`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitICS_S_MemberCall?: (ctx: ICS_S_MemberCallContext) => Result;

	/**
	 * Visit a parse tree produced by `vbaParser.iCS_S_DictionaryCall`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitICS_S_DictionaryCall?: (ctx: ICS_S_DictionaryCallContext) => Result;

	/**
	 * Visit a parse tree produced by `vbaParser.argsCall`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArgsCall?: (ctx: ArgsCallContext) => Result;

	/**
	 * Visit a parse tree produced by `vbaParser.argCall`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArgCall?: (ctx: ArgCallContext) => Result;

	/**
	 * Visit a parse tree produced by `vbaParser.dictionaryCallStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDictionaryCallStmt?: (ctx: DictionaryCallStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `vbaParser.argList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArgList?: (ctx: ArgListContext) => Result;

	/**
	 * Visit a parse tree produced by `vbaParser.arg`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArg?: (ctx: ArgContext) => Result;

	/**
	 * Visit a parse tree produced by `vbaParser.argDefaultValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArgDefaultValue?: (ctx: ArgDefaultValueContext) => Result;

	/**
	 * Visit a parse tree produced by `vbaParser.subscripts`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubscripts?: (ctx: SubscriptsContext) => Result;

	/**
	 * Visit a parse tree produced by `vbaParser.subscript`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubscript?: (ctx: SubscriptContext) => Result;

	/**
	 * Visit a parse tree produced by `vbaParser.ambiguousIdentifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAmbiguousIdentifier?: (ctx: AmbiguousIdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by `vbaParser.asTypeClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAsTypeClause?: (ctx: AsTypeClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `vbaParser.baseType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBaseType?: (ctx: BaseTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `vbaParser.certainIdentifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCertainIdentifier?: (ctx: CertainIdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by `vbaParser.comparisonOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComparisonOperator?: (ctx: ComparisonOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `vbaParser.complexType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComplexType?: (ctx: ComplexTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `vbaParser.fieldLength`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFieldLength?: (ctx: FieldLengthContext) => Result;

	/**
	 * Visit a parse tree produced by `vbaParser.letterrange`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLetterrange?: (ctx: LetterrangeContext) => Result;

	/**
	 * Visit a parse tree produced by `vbaParser.lineLabel`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLineLabel?: (ctx: LineLabelContext) => Result;

	/**
	 * Visit a parse tree produced by `vbaParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiteral?: (ctx: LiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `vbaParser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitType?: (ctx: TypeContext) => Result;

	/**
	 * Visit a parse tree produced by `vbaParser.typeHint`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeHint?: (ctx: TypeHintContext) => Result;

	/**
	 * Visit a parse tree produced by `vbaParser.visibility`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVisibility?: (ctx: VisibilityContext) => Result;

	/**
	 * Visit a parse tree produced by `vbaParser.ambiguousKeyword`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAmbiguousKeyword?: (ctx: AmbiguousKeywordContext) => Result;

	/**
	 * Visit a parse tree produced by `vbaParser.remComment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRemComment?: (ctx: RemCommentContext) => Result;

	/**
	 * Visit a parse tree produced by `vbaParser.comment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComment?: (ctx: CommentContext) => Result;

	/**
	 * Visit a parse tree produced by `vbaParser.endOfLine`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEndOfLine?: (ctx: EndOfLineContext) => Result;

	/**
	 * Visit a parse tree produced by `vbaParser.endOfStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEndOfStatement?: (ctx: EndOfStatementContext) => Result;
}

