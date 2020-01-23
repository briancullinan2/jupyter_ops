// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/fortran77/Fortran77Parser.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { ProgramContext } from "./Fortran77Parser";
import { ExecutableUnitContext } from "./Fortran77Parser";
import { MainProgramContext } from "./Fortran77Parser";
import { FunctionSubprogramContext } from "./Fortran77Parser";
import { SubroutineSubprogramContext } from "./Fortran77Parser";
import { BlockdataSubprogramContext } from "./Fortran77Parser";
import { OtherSpecificationStatementContext } from "./Fortran77Parser";
import { ExecutableStatementContext } from "./Fortran77Parser";
import { ProgramStatementContext } from "./Fortran77Parser";
import { EntryStatementContext } from "./Fortran77Parser";
import { FunctionStatementContext } from "./Fortran77Parser";
import { BlockdataStatementContext } from "./Fortran77Parser";
import { SubroutineStatementContext } from "./Fortran77Parser";
import { NamelistContext } from "./Fortran77Parser";
import { StatementContext } from "./Fortran77Parser";
import { SubprogramBodyContext } from "./Fortran77Parser";
import { WholeStatementContext } from "./Fortran77Parser";
import { EndStatementContext } from "./Fortran77Parser";
import { DimensionStatementContext } from "./Fortran77Parser";
import { ArrayDeclaratorContext } from "./Fortran77Parser";
import { ArrayDeclaratorsContext } from "./Fortran77Parser";
import { ArrayDeclaratorExtentsContext } from "./Fortran77Parser";
import { ArrayDeclaratorExtentContext } from "./Fortran77Parser";
import { EquivalenceStatementContext } from "./Fortran77Parser";
import { EquivEntityGroupContext } from "./Fortran77Parser";
import { EquivEntityContext } from "./Fortran77Parser";
import { CommonStatementContext } from "./Fortran77Parser";
import { CommonNameContext } from "./Fortran77Parser";
import { CommonItemContext } from "./Fortran77Parser";
import { CommonItemsContext } from "./Fortran77Parser";
import { CommonBlockContext } from "./Fortran77Parser";
import { CommentStatementContext } from "./Fortran77Parser";
import { TypeStatementContext } from "./Fortran77Parser";
import { TypeStatementNameListContext } from "./Fortran77Parser";
import { TypeStatementNameContext } from "./Fortran77Parser";
import { TypeStatementNameCharListContext } from "./Fortran77Parser";
import { TypeStatementNameCharContext } from "./Fortran77Parser";
import { TypeStatementLenSpecContext } from "./Fortran77Parser";
import { TypenameContext } from "./Fortran77Parser";
import { TypeContext } from "./Fortran77Parser";
import { TypenameLenContext } from "./Fortran77Parser";
import { PointerStatementContext } from "./Fortran77Parser";
import { PointerDeclContext } from "./Fortran77Parser";
import { ImplicitStatementContext } from "./Fortran77Parser";
import { ImplicitSpecContext } from "./Fortran77Parser";
import { ImplicitSpecsContext } from "./Fortran77Parser";
import { ImplicitNoneContext } from "./Fortran77Parser";
import { ImplicitLetterContext } from "./Fortran77Parser";
import { ImplicitRangeContext } from "./Fortran77Parser";
import { ImplicitLettersContext } from "./Fortran77Parser";
import { LenSpecificationContext } from "./Fortran77Parser";
import { CharacterWithLenContext } from "./Fortran77Parser";
import { CwlLenContext } from "./Fortran77Parser";
import { ParameterStatementContext } from "./Fortran77Parser";
import { ParamlistContext } from "./Fortran77Parser";
import { ParamassignContext } from "./Fortran77Parser";
import { ExternalStatementContext } from "./Fortran77Parser";
import { IntrinsicStatementContext } from "./Fortran77Parser";
import { SaveStatementContext } from "./Fortran77Parser";
import { SaveEntityContext } from "./Fortran77Parser";
import { DataStatementContext } from "./Fortran77Parser";
import { DataStatementItemContext } from "./Fortran77Parser";
import { DataStatementMultipleContext } from "./Fortran77Parser";
import { DataStatementEntityContext } from "./Fortran77Parser";
import { Dse1Context } from "./Fortran77Parser";
import { Dse2Context } from "./Fortran77Parser";
import { DataImpliedDoContext } from "./Fortran77Parser";
import { DataImpliedDoRangeContext } from "./Fortran77Parser";
import { DataImpliedDoListContext } from "./Fortran77Parser";
import { DataImpliedDoListWhatContext } from "./Fortran77Parser";
import { GotoStatementContext } from "./Fortran77Parser";
import { UnconditionalGotoContext } from "./Fortran77Parser";
import { ComputedGotoContext } from "./Fortran77Parser";
import { LblRefContext } from "./Fortran77Parser";
import { LabelListContext } from "./Fortran77Parser";
import { AssignedGotoContext } from "./Fortran77Parser";
import { IfStatementContext } from "./Fortran77Parser";
import { ArithmeticIfStatementContext } from "./Fortran77Parser";
import { LogicalIfStatementContext } from "./Fortran77Parser";
import { BlockIfStatementContext } from "./Fortran77Parser";
import { FirstIfBlockContext } from "./Fortran77Parser";
import { ElseIfStatementContext } from "./Fortran77Parser";
import { ElseStatementContext } from "./Fortran77Parser";
import { EndIfStatementContext } from "./Fortran77Parser";
import { DoStatementContext } from "./Fortran77Parser";
import { DoVarArgsContext } from "./Fortran77Parser";
import { DoWithLabelContext } from "./Fortran77Parser";
import { DoBodyContext } from "./Fortran77Parser";
import { DoWithEndDoContext } from "./Fortran77Parser";
import { EnddoStatementContext } from "./Fortran77Parser";
import { ContinueStatementContext } from "./Fortran77Parser";
import { StopStatementContext } from "./Fortran77Parser";
import { PauseStatementContext } from "./Fortran77Parser";
import { WriteStatementContext } from "./Fortran77Parser";
import { ReadStatementContext } from "./Fortran77Parser";
import { PrintStatementContext } from "./Fortran77Parser";
import { AssignmentStatementContext } from "./Fortran77Parser";
import { ControlInfoListContext } from "./Fortran77Parser";
import { ControlErrSpecContext } from "./Fortran77Parser";
import { ControlInfoListItemContext } from "./Fortran77Parser";
import { IoListContext } from "./Fortran77Parser";
import { IoListItemContext } from "./Fortran77Parser";
import { IoImpliedDoListContext } from "./Fortran77Parser";
import { OpenStatementContext } from "./Fortran77Parser";
import { OpenControlContext } from "./Fortran77Parser";
import { ControlFmtContext } from "./Fortran77Parser";
import { ControlUnitContext } from "./Fortran77Parser";
import { ControlRecContext } from "./Fortran77Parser";
import { ControlEndContext } from "./Fortran77Parser";
import { ControlErrContext } from "./Fortran77Parser";
import { ControlIostatContext } from "./Fortran77Parser";
import { ControlFileContext } from "./Fortran77Parser";
import { ControlStatusContext } from "./Fortran77Parser";
import { ControlAccessContext } from "./Fortran77Parser";
import { ControlPositionContext } from "./Fortran77Parser";
import { ControlFormContext } from "./Fortran77Parser";
import { ControlReclContext } from "./Fortran77Parser";
import { ControlBlankContext } from "./Fortran77Parser";
import { ControlExistContext } from "./Fortran77Parser";
import { ControlOpenedContext } from "./Fortran77Parser";
import { ControlNumberContext } from "./Fortran77Parser";
import { ControlNamedContext } from "./Fortran77Parser";
import { ControlNameContext } from "./Fortran77Parser";
import { ControlSequentialContext } from "./Fortran77Parser";
import { ControlDirectContext } from "./Fortran77Parser";
import { ControlFormattedContext } from "./Fortran77Parser";
import { ControlUnformattedContext } from "./Fortran77Parser";
import { ControlNextrecContext } from "./Fortran77Parser";
import { CloseStatementContext } from "./Fortran77Parser";
import { CloseControlContext } from "./Fortran77Parser";
import { InquireStatementContext } from "./Fortran77Parser";
import { InquireControlContext } from "./Fortran77Parser";
import { BackspaceStatementContext } from "./Fortran77Parser";
import { EndfileStatementContext } from "./Fortran77Parser";
import { RewindStatementContext } from "./Fortran77Parser";
import { BerFinishContext } from "./Fortran77Parser";
import { BerFinishItemContext } from "./Fortran77Parser";
import { UnitIdentifierContext } from "./Fortran77Parser";
import { FormatIdentifierContext } from "./Fortran77Parser";
import { FormatStatementContext } from "./Fortran77Parser";
import { FmtSpecContext } from "./Fortran77Parser";
import { FormatsepContext } from "./Fortran77Parser";
import { FormateditContext } from "./Fortran77Parser";
import { EditElementContext } from "./Fortran77Parser";
import { StatementFunctionStatementContext } from "./Fortran77Parser";
import { SfArgsContext } from "./Fortran77Parser";
import { CallStatementContext } from "./Fortran77Parser";
import { SubroutineCallContext } from "./Fortran77Parser";
import { CallArgumentListContext } from "./Fortran77Parser";
import { CallArgumentContext } from "./Fortran77Parser";
import { ReturnStatementContext } from "./Fortran77Parser";
import { ExpressionContext } from "./Fortran77Parser";
import { NcExprContext } from "./Fortran77Parser";
import { Lexpr0Context } from "./Fortran77Parser";
import { Lexpr1Context } from "./Fortran77Parser";
import { Lexpr2Context } from "./Fortran77Parser";
import { Lexpr3Context } from "./Fortran77Parser";
import { Lexpr4Context } from "./Fortran77Parser";
import { Aexpr0Context } from "./Fortran77Parser";
import { Aexpr1Context } from "./Fortran77Parser";
import { Aexpr2Context } from "./Fortran77Parser";
import { Aexpr3Context } from "./Fortran77Parser";
import { Aexpr4Context } from "./Fortran77Parser";
import { IexprContext } from "./Fortran77Parser";
import { IexprCodeContext } from "./Fortran77Parser";
import { Iexpr1Context } from "./Fortran77Parser";
import { Iexpr2Context } from "./Fortran77Parser";
import { Iexpr3Context } from "./Fortran77Parser";
import { Iexpr4Context } from "./Fortran77Parser";
import { ConstantExprContext } from "./Fortran77Parser";
import { ArithmeticExpressionContext } from "./Fortran77Parser";
import { IntegerExprContext } from "./Fortran77Parser";
import { IntRealDpExprContext } from "./Fortran77Parser";
import { ArithmeticConstExprContext } from "./Fortran77Parser";
import { IntConstantExprContext } from "./Fortran77Parser";
import { CharacterExpressionContext } from "./Fortran77Parser";
import { ConcatOpContext } from "./Fortran77Parser";
import { LogicalExpressionContext } from "./Fortran77Parser";
import { LogicalConstExprContext } from "./Fortran77Parser";
import { ArrayElementNameContext } from "./Fortran77Parser";
import { SubscriptsContext } from "./Fortran77Parser";
import { VarRefContext } from "./Fortran77Parser";
import { VarRefCodeContext } from "./Fortran77Parser";
import { SubstringAppContext } from "./Fortran77Parser";
import { VariableNameContext } from "./Fortran77Parser";
import { ArrayNameContext } from "./Fortran77Parser";
import { SubroutineNameContext } from "./Fortran77Parser";
import { FunctionNameContext } from "./Fortran77Parser";
import { ConstantContext } from "./Fortran77Parser";
import { UnsignedArithmeticConstantContext } from "./Fortran77Parser";
import { ComplexConstantContext } from "./Fortran77Parser";
import { LogicalConstantContext } from "./Fortran77Parser";
import { IdentifierContext } from "./Fortran77Parser";
import { ToContext } from "./Fortran77Parser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `Fortran77Parser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface Fortran77ParserVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `Fortran77Parser.program`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProgram?: (ctx: ProgramContext) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.executableUnit`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExecutableUnit?: (ctx: ExecutableUnitContext) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.mainProgram`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMainProgram?: (ctx: MainProgramContext) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.functionSubprogram`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionSubprogram?: (ctx: FunctionSubprogramContext) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.subroutineSubprogram`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubroutineSubprogram?: (ctx: SubroutineSubprogramContext) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.blockdataSubprogram`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlockdataSubprogram?: (ctx: BlockdataSubprogramContext) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.otherSpecificationStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOtherSpecificationStatement?: (ctx: OtherSpecificationStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.executableStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExecutableStatement?: (ctx: ExecutableStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.programStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProgramStatement?: (ctx: ProgramStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.entryStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEntryStatement?: (ctx: EntryStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.functionStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionStatement?: (ctx: FunctionStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.blockdataStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlockdataStatement?: (ctx: BlockdataStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.subroutineStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubroutineStatement?: (ctx: SubroutineStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.namelist`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNamelist?: (ctx: NamelistContext) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.subprogramBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubprogramBody?: (ctx: SubprogramBodyContext) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.wholeStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWholeStatement?: (ctx: WholeStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.endStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEndStatement?: (ctx: EndStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.dimensionStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDimensionStatement?: (ctx: DimensionStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.arrayDeclarator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrayDeclarator?: (ctx: ArrayDeclaratorContext) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.arrayDeclarators`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrayDeclarators?: (ctx: ArrayDeclaratorsContext) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.arrayDeclaratorExtents`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrayDeclaratorExtents?: (ctx: ArrayDeclaratorExtentsContext) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.arrayDeclaratorExtent`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrayDeclaratorExtent?: (ctx: ArrayDeclaratorExtentContext) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.equivalenceStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEquivalenceStatement?: (ctx: EquivalenceStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.equivEntityGroup`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEquivEntityGroup?: (ctx: EquivEntityGroupContext) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.equivEntity`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEquivEntity?: (ctx: EquivEntityContext) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.commonStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCommonStatement?: (ctx: CommonStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.commonName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCommonName?: (ctx: CommonNameContext) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.commonItem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCommonItem?: (ctx: CommonItemContext) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.commonItems`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCommonItems?: (ctx: CommonItemsContext) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.commonBlock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCommonBlock?: (ctx: CommonBlockContext) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.commentStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCommentStatement?: (ctx: CommentStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.typeStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeStatement?: (ctx: TypeStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.typeStatementNameList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeStatementNameList?: (ctx: TypeStatementNameListContext) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.typeStatementName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeStatementName?: (ctx: TypeStatementNameContext) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.typeStatementNameCharList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeStatementNameCharList?: (ctx: TypeStatementNameCharListContext) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.typeStatementNameChar`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeStatementNameChar?: (ctx: TypeStatementNameCharContext) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.typeStatementLenSpec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeStatementLenSpec?: (ctx: TypeStatementLenSpecContext) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.typename`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypename?: (ctx: TypenameContext) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitType?: (ctx: TypeContext) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.typenameLen`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypenameLen?: (ctx: TypenameLenContext) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.pointerStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPointerStatement?: (ctx: PointerStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.pointerDecl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPointerDecl?: (ctx: PointerDeclContext) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.implicitStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImplicitStatement?: (ctx: ImplicitStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.implicitSpec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImplicitSpec?: (ctx: ImplicitSpecContext) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.implicitSpecs`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImplicitSpecs?: (ctx: ImplicitSpecsContext) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.implicitNone`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImplicitNone?: (ctx: ImplicitNoneContext) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.implicitLetter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImplicitLetter?: (ctx: ImplicitLetterContext) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.implicitRange`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImplicitRange?: (ctx: ImplicitRangeContext) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.implicitLetters`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImplicitLetters?: (ctx: ImplicitLettersContext) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.lenSpecification`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLenSpecification?: (ctx: LenSpecificationContext) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.characterWithLen`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCharacterWithLen?: (ctx: CharacterWithLenContext) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.cwlLen`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCwlLen?: (ctx: CwlLenContext) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.parameterStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParameterStatement?: (ctx: ParameterStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.paramlist`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParamlist?: (ctx: ParamlistContext) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.paramassign`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParamassign?: (ctx: ParamassignContext) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.externalStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExternalStatement?: (ctx: ExternalStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.intrinsicStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIntrinsicStatement?: (ctx: IntrinsicStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.saveStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSaveStatement?: (ctx: SaveStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.saveEntity`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSaveEntity?: (ctx: SaveEntityContext) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.dataStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDataStatement?: (ctx: DataStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.dataStatementItem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDataStatementItem?: (ctx: DataStatementItemContext) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.dataStatementMultiple`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDataStatementMultiple?: (ctx: DataStatementMultipleContext) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.dataStatementEntity`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDataStatementEntity?: (ctx: DataStatementEntityContext) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.dse1`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDse1?: (ctx: Dse1Context) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.dse2`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDse2?: (ctx: Dse2Context) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.dataImpliedDo`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDataImpliedDo?: (ctx: DataImpliedDoContext) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.dataImpliedDoRange`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDataImpliedDoRange?: (ctx: DataImpliedDoRangeContext) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.dataImpliedDoList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDataImpliedDoList?: (ctx: DataImpliedDoListContext) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.dataImpliedDoListWhat`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDataImpliedDoListWhat?: (ctx: DataImpliedDoListWhatContext) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.gotoStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGotoStatement?: (ctx: GotoStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.unconditionalGoto`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnconditionalGoto?: (ctx: UnconditionalGotoContext) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.computedGoto`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComputedGoto?: (ctx: ComputedGotoContext) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.lblRef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLblRef?: (ctx: LblRefContext) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.labelList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLabelList?: (ctx: LabelListContext) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.assignedGoto`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignedGoto?: (ctx: AssignedGotoContext) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.ifStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfStatement?: (ctx: IfStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.arithmeticIfStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArithmeticIfStatement?: (ctx: ArithmeticIfStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.logicalIfStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogicalIfStatement?: (ctx: LogicalIfStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.blockIfStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlockIfStatement?: (ctx: BlockIfStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.firstIfBlock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFirstIfBlock?: (ctx: FirstIfBlockContext) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.elseIfStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElseIfStatement?: (ctx: ElseIfStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.elseStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElseStatement?: (ctx: ElseStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.endIfStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEndIfStatement?: (ctx: EndIfStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.doStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDoStatement?: (ctx: DoStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.doVarArgs`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDoVarArgs?: (ctx: DoVarArgsContext) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.doWithLabel`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDoWithLabel?: (ctx: DoWithLabelContext) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.doBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDoBody?: (ctx: DoBodyContext) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.doWithEndDo`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDoWithEndDo?: (ctx: DoWithEndDoContext) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.enddoStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnddoStatement?: (ctx: EnddoStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.continueStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitContinueStatement?: (ctx: ContinueStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.stopStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStopStatement?: (ctx: StopStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.pauseStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPauseStatement?: (ctx: PauseStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.writeStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWriteStatement?: (ctx: WriteStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.readStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReadStatement?: (ctx: ReadStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.printStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrintStatement?: (ctx: PrintStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.assignmentStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignmentStatement?: (ctx: AssignmentStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.controlInfoList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitControlInfoList?: (ctx: ControlInfoListContext) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.controlErrSpec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitControlErrSpec?: (ctx: ControlErrSpecContext) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.controlInfoListItem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitControlInfoListItem?: (ctx: ControlInfoListItemContext) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.ioList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIoList?: (ctx: IoListContext) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.ioListItem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIoListItem?: (ctx: IoListItemContext) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.ioImpliedDoList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIoImpliedDoList?: (ctx: IoImpliedDoListContext) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.openStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOpenStatement?: (ctx: OpenStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.openControl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOpenControl?: (ctx: OpenControlContext) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.controlFmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitControlFmt?: (ctx: ControlFmtContext) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.controlUnit`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitControlUnit?: (ctx: ControlUnitContext) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.controlRec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitControlRec?: (ctx: ControlRecContext) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.controlEnd`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitControlEnd?: (ctx: ControlEndContext) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.controlErr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitControlErr?: (ctx: ControlErrContext) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.controlIostat`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitControlIostat?: (ctx: ControlIostatContext) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.controlFile`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitControlFile?: (ctx: ControlFileContext) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.controlStatus`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitControlStatus?: (ctx: ControlStatusContext) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.controlAccess`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitControlAccess?: (ctx: ControlAccessContext) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.controlPosition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitControlPosition?: (ctx: ControlPositionContext) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.controlForm`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitControlForm?: (ctx: ControlFormContext) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.controlRecl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitControlRecl?: (ctx: ControlReclContext) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.controlBlank`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitControlBlank?: (ctx: ControlBlankContext) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.controlExist`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitControlExist?: (ctx: ControlExistContext) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.controlOpened`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitControlOpened?: (ctx: ControlOpenedContext) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.controlNumber`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitControlNumber?: (ctx: ControlNumberContext) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.controlNamed`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitControlNamed?: (ctx: ControlNamedContext) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.controlName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitControlName?: (ctx: ControlNameContext) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.controlSequential`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitControlSequential?: (ctx: ControlSequentialContext) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.controlDirect`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitControlDirect?: (ctx: ControlDirectContext) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.controlFormatted`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitControlFormatted?: (ctx: ControlFormattedContext) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.controlUnformatted`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitControlUnformatted?: (ctx: ControlUnformattedContext) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.controlNextrec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitControlNextrec?: (ctx: ControlNextrecContext) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.closeStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCloseStatement?: (ctx: CloseStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.closeControl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCloseControl?: (ctx: CloseControlContext) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.inquireStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInquireStatement?: (ctx: InquireStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.inquireControl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInquireControl?: (ctx: InquireControlContext) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.backspaceStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBackspaceStatement?: (ctx: BackspaceStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.endfileStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEndfileStatement?: (ctx: EndfileStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.rewindStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRewindStatement?: (ctx: RewindStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.berFinish`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBerFinish?: (ctx: BerFinishContext) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.berFinishItem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBerFinishItem?: (ctx: BerFinishItemContext) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.unitIdentifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnitIdentifier?: (ctx: UnitIdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.formatIdentifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFormatIdentifier?: (ctx: FormatIdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.formatStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFormatStatement?: (ctx: FormatStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.fmtSpec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFmtSpec?: (ctx: FmtSpecContext) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.formatsep`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFormatsep?: (ctx: FormatsepContext) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.formatedit`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFormatedit?: (ctx: FormateditContext) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.editElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEditElement?: (ctx: EditElementContext) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.statementFunctionStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatementFunctionStatement?: (ctx: StatementFunctionStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.sfArgs`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSfArgs?: (ctx: SfArgsContext) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.callStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCallStatement?: (ctx: CallStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.subroutineCall`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubroutineCall?: (ctx: SubroutineCallContext) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.callArgumentList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCallArgumentList?: (ctx: CallArgumentListContext) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.callArgument`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCallArgument?: (ctx: CallArgumentContext) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.returnStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReturnStatement?: (ctx: ReturnStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.ncExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNcExpr?: (ctx: NcExprContext) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.lexpr0`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLexpr0?: (ctx: Lexpr0Context) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.lexpr1`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLexpr1?: (ctx: Lexpr1Context) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.lexpr2`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLexpr2?: (ctx: Lexpr2Context) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.lexpr3`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLexpr3?: (ctx: Lexpr3Context) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.lexpr4`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLexpr4?: (ctx: Lexpr4Context) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.aexpr0`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAexpr0?: (ctx: Aexpr0Context) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.aexpr1`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAexpr1?: (ctx: Aexpr1Context) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.aexpr2`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAexpr2?: (ctx: Aexpr2Context) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.aexpr3`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAexpr3?: (ctx: Aexpr3Context) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.aexpr4`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAexpr4?: (ctx: Aexpr4Context) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.iexpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIexpr?: (ctx: IexprContext) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.iexprCode`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIexprCode?: (ctx: IexprCodeContext) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.iexpr1`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIexpr1?: (ctx: Iexpr1Context) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.iexpr2`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIexpr2?: (ctx: Iexpr2Context) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.iexpr3`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIexpr3?: (ctx: Iexpr3Context) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.iexpr4`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIexpr4?: (ctx: Iexpr4Context) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.constantExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstantExpr?: (ctx: ConstantExprContext) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.arithmeticExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArithmeticExpression?: (ctx: ArithmeticExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.integerExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIntegerExpr?: (ctx: IntegerExprContext) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.intRealDpExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIntRealDpExpr?: (ctx: IntRealDpExprContext) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.arithmeticConstExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArithmeticConstExpr?: (ctx: ArithmeticConstExprContext) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.intConstantExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIntConstantExpr?: (ctx: IntConstantExprContext) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.characterExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCharacterExpression?: (ctx: CharacterExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.concatOp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConcatOp?: (ctx: ConcatOpContext) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.logicalExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogicalExpression?: (ctx: LogicalExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.logicalConstExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogicalConstExpr?: (ctx: LogicalConstExprContext) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.arrayElementName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrayElementName?: (ctx: ArrayElementNameContext) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.subscripts`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubscripts?: (ctx: SubscriptsContext) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.varRef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVarRef?: (ctx: VarRefContext) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.varRefCode`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVarRefCode?: (ctx: VarRefCodeContext) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.substringApp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubstringApp?: (ctx: SubstringAppContext) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.variableName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableName?: (ctx: VariableNameContext) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.arrayName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrayName?: (ctx: ArrayNameContext) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.subroutineName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubroutineName?: (ctx: SubroutineNameContext) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.functionName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionName?: (ctx: FunctionNameContext) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.constant`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstant?: (ctx: ConstantContext) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.unsignedArithmeticConstant`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnsignedArithmeticConstant?: (ctx: UnsignedArithmeticConstantContext) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.complexConstant`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComplexConstant?: (ctx: ComplexConstantContext) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.logicalConstant`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogicalConstant?: (ctx: LogicalConstantContext) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifier?: (ctx: IdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by `Fortran77Parser.to`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTo?: (ctx: ToContext) => Result;
}

