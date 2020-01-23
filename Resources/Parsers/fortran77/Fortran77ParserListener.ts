// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/fortran77/Fortran77Parser.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

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
 * This interface defines a complete listener for a parse tree produced by
 * `Fortran77Parser`.
 */
export interface Fortran77ParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `Fortran77Parser.program`.
	 * @param ctx the parse tree
	 */
	enterProgram?: (ctx: ProgramContext) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.program`.
	 * @param ctx the parse tree
	 */
	exitProgram?: (ctx: ProgramContext) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.executableUnit`.
	 * @param ctx the parse tree
	 */
	enterExecutableUnit?: (ctx: ExecutableUnitContext) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.executableUnit`.
	 * @param ctx the parse tree
	 */
	exitExecutableUnit?: (ctx: ExecutableUnitContext) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.mainProgram`.
	 * @param ctx the parse tree
	 */
	enterMainProgram?: (ctx: MainProgramContext) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.mainProgram`.
	 * @param ctx the parse tree
	 */
	exitMainProgram?: (ctx: MainProgramContext) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.functionSubprogram`.
	 * @param ctx the parse tree
	 */
	enterFunctionSubprogram?: (ctx: FunctionSubprogramContext) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.functionSubprogram`.
	 * @param ctx the parse tree
	 */
	exitFunctionSubprogram?: (ctx: FunctionSubprogramContext) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.subroutineSubprogram`.
	 * @param ctx the parse tree
	 */
	enterSubroutineSubprogram?: (ctx: SubroutineSubprogramContext) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.subroutineSubprogram`.
	 * @param ctx the parse tree
	 */
	exitSubroutineSubprogram?: (ctx: SubroutineSubprogramContext) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.blockdataSubprogram`.
	 * @param ctx the parse tree
	 */
	enterBlockdataSubprogram?: (ctx: BlockdataSubprogramContext) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.blockdataSubprogram`.
	 * @param ctx the parse tree
	 */
	exitBlockdataSubprogram?: (ctx: BlockdataSubprogramContext) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.otherSpecificationStatement`.
	 * @param ctx the parse tree
	 */
	enterOtherSpecificationStatement?: (ctx: OtherSpecificationStatementContext) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.otherSpecificationStatement`.
	 * @param ctx the parse tree
	 */
	exitOtherSpecificationStatement?: (ctx: OtherSpecificationStatementContext) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.executableStatement`.
	 * @param ctx the parse tree
	 */
	enterExecutableStatement?: (ctx: ExecutableStatementContext) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.executableStatement`.
	 * @param ctx the parse tree
	 */
	exitExecutableStatement?: (ctx: ExecutableStatementContext) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.programStatement`.
	 * @param ctx the parse tree
	 */
	enterProgramStatement?: (ctx: ProgramStatementContext) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.programStatement`.
	 * @param ctx the parse tree
	 */
	exitProgramStatement?: (ctx: ProgramStatementContext) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.entryStatement`.
	 * @param ctx the parse tree
	 */
	enterEntryStatement?: (ctx: EntryStatementContext) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.entryStatement`.
	 * @param ctx the parse tree
	 */
	exitEntryStatement?: (ctx: EntryStatementContext) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.functionStatement`.
	 * @param ctx the parse tree
	 */
	enterFunctionStatement?: (ctx: FunctionStatementContext) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.functionStatement`.
	 * @param ctx the parse tree
	 */
	exitFunctionStatement?: (ctx: FunctionStatementContext) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.blockdataStatement`.
	 * @param ctx the parse tree
	 */
	enterBlockdataStatement?: (ctx: BlockdataStatementContext) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.blockdataStatement`.
	 * @param ctx the parse tree
	 */
	exitBlockdataStatement?: (ctx: BlockdataStatementContext) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.subroutineStatement`.
	 * @param ctx the parse tree
	 */
	enterSubroutineStatement?: (ctx: SubroutineStatementContext) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.subroutineStatement`.
	 * @param ctx the parse tree
	 */
	exitSubroutineStatement?: (ctx: SubroutineStatementContext) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.namelist`.
	 * @param ctx the parse tree
	 */
	enterNamelist?: (ctx: NamelistContext) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.namelist`.
	 * @param ctx the parse tree
	 */
	exitNamelist?: (ctx: NamelistContext) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement?: (ctx: StatementContext) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement?: (ctx: StatementContext) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.subprogramBody`.
	 * @param ctx the parse tree
	 */
	enterSubprogramBody?: (ctx: SubprogramBodyContext) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.subprogramBody`.
	 * @param ctx the parse tree
	 */
	exitSubprogramBody?: (ctx: SubprogramBodyContext) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.wholeStatement`.
	 * @param ctx the parse tree
	 */
	enterWholeStatement?: (ctx: WholeStatementContext) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.wholeStatement`.
	 * @param ctx the parse tree
	 */
	exitWholeStatement?: (ctx: WholeStatementContext) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.endStatement`.
	 * @param ctx the parse tree
	 */
	enterEndStatement?: (ctx: EndStatementContext) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.endStatement`.
	 * @param ctx the parse tree
	 */
	exitEndStatement?: (ctx: EndStatementContext) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.dimensionStatement`.
	 * @param ctx the parse tree
	 */
	enterDimensionStatement?: (ctx: DimensionStatementContext) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.dimensionStatement`.
	 * @param ctx the parse tree
	 */
	exitDimensionStatement?: (ctx: DimensionStatementContext) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.arrayDeclarator`.
	 * @param ctx the parse tree
	 */
	enterArrayDeclarator?: (ctx: ArrayDeclaratorContext) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.arrayDeclarator`.
	 * @param ctx the parse tree
	 */
	exitArrayDeclarator?: (ctx: ArrayDeclaratorContext) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.arrayDeclarators`.
	 * @param ctx the parse tree
	 */
	enterArrayDeclarators?: (ctx: ArrayDeclaratorsContext) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.arrayDeclarators`.
	 * @param ctx the parse tree
	 */
	exitArrayDeclarators?: (ctx: ArrayDeclaratorsContext) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.arrayDeclaratorExtents`.
	 * @param ctx the parse tree
	 */
	enterArrayDeclaratorExtents?: (ctx: ArrayDeclaratorExtentsContext) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.arrayDeclaratorExtents`.
	 * @param ctx the parse tree
	 */
	exitArrayDeclaratorExtents?: (ctx: ArrayDeclaratorExtentsContext) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.arrayDeclaratorExtent`.
	 * @param ctx the parse tree
	 */
	enterArrayDeclaratorExtent?: (ctx: ArrayDeclaratorExtentContext) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.arrayDeclaratorExtent`.
	 * @param ctx the parse tree
	 */
	exitArrayDeclaratorExtent?: (ctx: ArrayDeclaratorExtentContext) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.equivalenceStatement`.
	 * @param ctx the parse tree
	 */
	enterEquivalenceStatement?: (ctx: EquivalenceStatementContext) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.equivalenceStatement`.
	 * @param ctx the parse tree
	 */
	exitEquivalenceStatement?: (ctx: EquivalenceStatementContext) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.equivEntityGroup`.
	 * @param ctx the parse tree
	 */
	enterEquivEntityGroup?: (ctx: EquivEntityGroupContext) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.equivEntityGroup`.
	 * @param ctx the parse tree
	 */
	exitEquivEntityGroup?: (ctx: EquivEntityGroupContext) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.equivEntity`.
	 * @param ctx the parse tree
	 */
	enterEquivEntity?: (ctx: EquivEntityContext) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.equivEntity`.
	 * @param ctx the parse tree
	 */
	exitEquivEntity?: (ctx: EquivEntityContext) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.commonStatement`.
	 * @param ctx the parse tree
	 */
	enterCommonStatement?: (ctx: CommonStatementContext) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.commonStatement`.
	 * @param ctx the parse tree
	 */
	exitCommonStatement?: (ctx: CommonStatementContext) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.commonName`.
	 * @param ctx the parse tree
	 */
	enterCommonName?: (ctx: CommonNameContext) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.commonName`.
	 * @param ctx the parse tree
	 */
	exitCommonName?: (ctx: CommonNameContext) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.commonItem`.
	 * @param ctx the parse tree
	 */
	enterCommonItem?: (ctx: CommonItemContext) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.commonItem`.
	 * @param ctx the parse tree
	 */
	exitCommonItem?: (ctx: CommonItemContext) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.commonItems`.
	 * @param ctx the parse tree
	 */
	enterCommonItems?: (ctx: CommonItemsContext) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.commonItems`.
	 * @param ctx the parse tree
	 */
	exitCommonItems?: (ctx: CommonItemsContext) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.commonBlock`.
	 * @param ctx the parse tree
	 */
	enterCommonBlock?: (ctx: CommonBlockContext) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.commonBlock`.
	 * @param ctx the parse tree
	 */
	exitCommonBlock?: (ctx: CommonBlockContext) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.commentStatement`.
	 * @param ctx the parse tree
	 */
	enterCommentStatement?: (ctx: CommentStatementContext) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.commentStatement`.
	 * @param ctx the parse tree
	 */
	exitCommentStatement?: (ctx: CommentStatementContext) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.typeStatement`.
	 * @param ctx the parse tree
	 */
	enterTypeStatement?: (ctx: TypeStatementContext) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.typeStatement`.
	 * @param ctx the parse tree
	 */
	exitTypeStatement?: (ctx: TypeStatementContext) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.typeStatementNameList`.
	 * @param ctx the parse tree
	 */
	enterTypeStatementNameList?: (ctx: TypeStatementNameListContext) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.typeStatementNameList`.
	 * @param ctx the parse tree
	 */
	exitTypeStatementNameList?: (ctx: TypeStatementNameListContext) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.typeStatementName`.
	 * @param ctx the parse tree
	 */
	enterTypeStatementName?: (ctx: TypeStatementNameContext) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.typeStatementName`.
	 * @param ctx the parse tree
	 */
	exitTypeStatementName?: (ctx: TypeStatementNameContext) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.typeStatementNameCharList`.
	 * @param ctx the parse tree
	 */
	enterTypeStatementNameCharList?: (ctx: TypeStatementNameCharListContext) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.typeStatementNameCharList`.
	 * @param ctx the parse tree
	 */
	exitTypeStatementNameCharList?: (ctx: TypeStatementNameCharListContext) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.typeStatementNameChar`.
	 * @param ctx the parse tree
	 */
	enterTypeStatementNameChar?: (ctx: TypeStatementNameCharContext) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.typeStatementNameChar`.
	 * @param ctx the parse tree
	 */
	exitTypeStatementNameChar?: (ctx: TypeStatementNameCharContext) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.typeStatementLenSpec`.
	 * @param ctx the parse tree
	 */
	enterTypeStatementLenSpec?: (ctx: TypeStatementLenSpecContext) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.typeStatementLenSpec`.
	 * @param ctx the parse tree
	 */
	exitTypeStatementLenSpec?: (ctx: TypeStatementLenSpecContext) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.typename`.
	 * @param ctx the parse tree
	 */
	enterTypename?: (ctx: TypenameContext) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.typename`.
	 * @param ctx the parse tree
	 */
	exitTypename?: (ctx: TypenameContext) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.type`.
	 * @param ctx the parse tree
	 */
	enterType?: (ctx: TypeContext) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.type`.
	 * @param ctx the parse tree
	 */
	exitType?: (ctx: TypeContext) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.typenameLen`.
	 * @param ctx the parse tree
	 */
	enterTypenameLen?: (ctx: TypenameLenContext) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.typenameLen`.
	 * @param ctx the parse tree
	 */
	exitTypenameLen?: (ctx: TypenameLenContext) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.pointerStatement`.
	 * @param ctx the parse tree
	 */
	enterPointerStatement?: (ctx: PointerStatementContext) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.pointerStatement`.
	 * @param ctx the parse tree
	 */
	exitPointerStatement?: (ctx: PointerStatementContext) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.pointerDecl`.
	 * @param ctx the parse tree
	 */
	enterPointerDecl?: (ctx: PointerDeclContext) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.pointerDecl`.
	 * @param ctx the parse tree
	 */
	exitPointerDecl?: (ctx: PointerDeclContext) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.implicitStatement`.
	 * @param ctx the parse tree
	 */
	enterImplicitStatement?: (ctx: ImplicitStatementContext) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.implicitStatement`.
	 * @param ctx the parse tree
	 */
	exitImplicitStatement?: (ctx: ImplicitStatementContext) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.implicitSpec`.
	 * @param ctx the parse tree
	 */
	enterImplicitSpec?: (ctx: ImplicitSpecContext) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.implicitSpec`.
	 * @param ctx the parse tree
	 */
	exitImplicitSpec?: (ctx: ImplicitSpecContext) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.implicitSpecs`.
	 * @param ctx the parse tree
	 */
	enterImplicitSpecs?: (ctx: ImplicitSpecsContext) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.implicitSpecs`.
	 * @param ctx the parse tree
	 */
	exitImplicitSpecs?: (ctx: ImplicitSpecsContext) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.implicitNone`.
	 * @param ctx the parse tree
	 */
	enterImplicitNone?: (ctx: ImplicitNoneContext) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.implicitNone`.
	 * @param ctx the parse tree
	 */
	exitImplicitNone?: (ctx: ImplicitNoneContext) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.implicitLetter`.
	 * @param ctx the parse tree
	 */
	enterImplicitLetter?: (ctx: ImplicitLetterContext) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.implicitLetter`.
	 * @param ctx the parse tree
	 */
	exitImplicitLetter?: (ctx: ImplicitLetterContext) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.implicitRange`.
	 * @param ctx the parse tree
	 */
	enterImplicitRange?: (ctx: ImplicitRangeContext) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.implicitRange`.
	 * @param ctx the parse tree
	 */
	exitImplicitRange?: (ctx: ImplicitRangeContext) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.implicitLetters`.
	 * @param ctx the parse tree
	 */
	enterImplicitLetters?: (ctx: ImplicitLettersContext) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.implicitLetters`.
	 * @param ctx the parse tree
	 */
	exitImplicitLetters?: (ctx: ImplicitLettersContext) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.lenSpecification`.
	 * @param ctx the parse tree
	 */
	enterLenSpecification?: (ctx: LenSpecificationContext) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.lenSpecification`.
	 * @param ctx the parse tree
	 */
	exitLenSpecification?: (ctx: LenSpecificationContext) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.characterWithLen`.
	 * @param ctx the parse tree
	 */
	enterCharacterWithLen?: (ctx: CharacterWithLenContext) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.characterWithLen`.
	 * @param ctx the parse tree
	 */
	exitCharacterWithLen?: (ctx: CharacterWithLenContext) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.cwlLen`.
	 * @param ctx the parse tree
	 */
	enterCwlLen?: (ctx: CwlLenContext) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.cwlLen`.
	 * @param ctx the parse tree
	 */
	exitCwlLen?: (ctx: CwlLenContext) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.parameterStatement`.
	 * @param ctx the parse tree
	 */
	enterParameterStatement?: (ctx: ParameterStatementContext) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.parameterStatement`.
	 * @param ctx the parse tree
	 */
	exitParameterStatement?: (ctx: ParameterStatementContext) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.paramlist`.
	 * @param ctx the parse tree
	 */
	enterParamlist?: (ctx: ParamlistContext) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.paramlist`.
	 * @param ctx the parse tree
	 */
	exitParamlist?: (ctx: ParamlistContext) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.paramassign`.
	 * @param ctx the parse tree
	 */
	enterParamassign?: (ctx: ParamassignContext) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.paramassign`.
	 * @param ctx the parse tree
	 */
	exitParamassign?: (ctx: ParamassignContext) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.externalStatement`.
	 * @param ctx the parse tree
	 */
	enterExternalStatement?: (ctx: ExternalStatementContext) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.externalStatement`.
	 * @param ctx the parse tree
	 */
	exitExternalStatement?: (ctx: ExternalStatementContext) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.intrinsicStatement`.
	 * @param ctx the parse tree
	 */
	enterIntrinsicStatement?: (ctx: IntrinsicStatementContext) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.intrinsicStatement`.
	 * @param ctx the parse tree
	 */
	exitIntrinsicStatement?: (ctx: IntrinsicStatementContext) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.saveStatement`.
	 * @param ctx the parse tree
	 */
	enterSaveStatement?: (ctx: SaveStatementContext) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.saveStatement`.
	 * @param ctx the parse tree
	 */
	exitSaveStatement?: (ctx: SaveStatementContext) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.saveEntity`.
	 * @param ctx the parse tree
	 */
	enterSaveEntity?: (ctx: SaveEntityContext) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.saveEntity`.
	 * @param ctx the parse tree
	 */
	exitSaveEntity?: (ctx: SaveEntityContext) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.dataStatement`.
	 * @param ctx the parse tree
	 */
	enterDataStatement?: (ctx: DataStatementContext) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.dataStatement`.
	 * @param ctx the parse tree
	 */
	exitDataStatement?: (ctx: DataStatementContext) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.dataStatementItem`.
	 * @param ctx the parse tree
	 */
	enterDataStatementItem?: (ctx: DataStatementItemContext) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.dataStatementItem`.
	 * @param ctx the parse tree
	 */
	exitDataStatementItem?: (ctx: DataStatementItemContext) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.dataStatementMultiple`.
	 * @param ctx the parse tree
	 */
	enterDataStatementMultiple?: (ctx: DataStatementMultipleContext) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.dataStatementMultiple`.
	 * @param ctx the parse tree
	 */
	exitDataStatementMultiple?: (ctx: DataStatementMultipleContext) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.dataStatementEntity`.
	 * @param ctx the parse tree
	 */
	enterDataStatementEntity?: (ctx: DataStatementEntityContext) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.dataStatementEntity`.
	 * @param ctx the parse tree
	 */
	exitDataStatementEntity?: (ctx: DataStatementEntityContext) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.dse1`.
	 * @param ctx the parse tree
	 */
	enterDse1?: (ctx: Dse1Context) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.dse1`.
	 * @param ctx the parse tree
	 */
	exitDse1?: (ctx: Dse1Context) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.dse2`.
	 * @param ctx the parse tree
	 */
	enterDse2?: (ctx: Dse2Context) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.dse2`.
	 * @param ctx the parse tree
	 */
	exitDse2?: (ctx: Dse2Context) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.dataImpliedDo`.
	 * @param ctx the parse tree
	 */
	enterDataImpliedDo?: (ctx: DataImpliedDoContext) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.dataImpliedDo`.
	 * @param ctx the parse tree
	 */
	exitDataImpliedDo?: (ctx: DataImpliedDoContext) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.dataImpliedDoRange`.
	 * @param ctx the parse tree
	 */
	enterDataImpliedDoRange?: (ctx: DataImpliedDoRangeContext) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.dataImpliedDoRange`.
	 * @param ctx the parse tree
	 */
	exitDataImpliedDoRange?: (ctx: DataImpliedDoRangeContext) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.dataImpliedDoList`.
	 * @param ctx the parse tree
	 */
	enterDataImpliedDoList?: (ctx: DataImpliedDoListContext) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.dataImpliedDoList`.
	 * @param ctx the parse tree
	 */
	exitDataImpliedDoList?: (ctx: DataImpliedDoListContext) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.dataImpliedDoListWhat`.
	 * @param ctx the parse tree
	 */
	enterDataImpliedDoListWhat?: (ctx: DataImpliedDoListWhatContext) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.dataImpliedDoListWhat`.
	 * @param ctx the parse tree
	 */
	exitDataImpliedDoListWhat?: (ctx: DataImpliedDoListWhatContext) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.gotoStatement`.
	 * @param ctx the parse tree
	 */
	enterGotoStatement?: (ctx: GotoStatementContext) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.gotoStatement`.
	 * @param ctx the parse tree
	 */
	exitGotoStatement?: (ctx: GotoStatementContext) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.unconditionalGoto`.
	 * @param ctx the parse tree
	 */
	enterUnconditionalGoto?: (ctx: UnconditionalGotoContext) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.unconditionalGoto`.
	 * @param ctx the parse tree
	 */
	exitUnconditionalGoto?: (ctx: UnconditionalGotoContext) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.computedGoto`.
	 * @param ctx the parse tree
	 */
	enterComputedGoto?: (ctx: ComputedGotoContext) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.computedGoto`.
	 * @param ctx the parse tree
	 */
	exitComputedGoto?: (ctx: ComputedGotoContext) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.lblRef`.
	 * @param ctx the parse tree
	 */
	enterLblRef?: (ctx: LblRefContext) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.lblRef`.
	 * @param ctx the parse tree
	 */
	exitLblRef?: (ctx: LblRefContext) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.labelList`.
	 * @param ctx the parse tree
	 */
	enterLabelList?: (ctx: LabelListContext) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.labelList`.
	 * @param ctx the parse tree
	 */
	exitLabelList?: (ctx: LabelListContext) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.assignedGoto`.
	 * @param ctx the parse tree
	 */
	enterAssignedGoto?: (ctx: AssignedGotoContext) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.assignedGoto`.
	 * @param ctx the parse tree
	 */
	exitAssignedGoto?: (ctx: AssignedGotoContext) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.ifStatement`.
	 * @param ctx the parse tree
	 */
	enterIfStatement?: (ctx: IfStatementContext) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.ifStatement`.
	 * @param ctx the parse tree
	 */
	exitIfStatement?: (ctx: IfStatementContext) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.arithmeticIfStatement`.
	 * @param ctx the parse tree
	 */
	enterArithmeticIfStatement?: (ctx: ArithmeticIfStatementContext) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.arithmeticIfStatement`.
	 * @param ctx the parse tree
	 */
	exitArithmeticIfStatement?: (ctx: ArithmeticIfStatementContext) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.logicalIfStatement`.
	 * @param ctx the parse tree
	 */
	enterLogicalIfStatement?: (ctx: LogicalIfStatementContext) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.logicalIfStatement`.
	 * @param ctx the parse tree
	 */
	exitLogicalIfStatement?: (ctx: LogicalIfStatementContext) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.blockIfStatement`.
	 * @param ctx the parse tree
	 */
	enterBlockIfStatement?: (ctx: BlockIfStatementContext) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.blockIfStatement`.
	 * @param ctx the parse tree
	 */
	exitBlockIfStatement?: (ctx: BlockIfStatementContext) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.firstIfBlock`.
	 * @param ctx the parse tree
	 */
	enterFirstIfBlock?: (ctx: FirstIfBlockContext) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.firstIfBlock`.
	 * @param ctx the parse tree
	 */
	exitFirstIfBlock?: (ctx: FirstIfBlockContext) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.elseIfStatement`.
	 * @param ctx the parse tree
	 */
	enterElseIfStatement?: (ctx: ElseIfStatementContext) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.elseIfStatement`.
	 * @param ctx the parse tree
	 */
	exitElseIfStatement?: (ctx: ElseIfStatementContext) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.elseStatement`.
	 * @param ctx the parse tree
	 */
	enterElseStatement?: (ctx: ElseStatementContext) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.elseStatement`.
	 * @param ctx the parse tree
	 */
	exitElseStatement?: (ctx: ElseStatementContext) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.endIfStatement`.
	 * @param ctx the parse tree
	 */
	enterEndIfStatement?: (ctx: EndIfStatementContext) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.endIfStatement`.
	 * @param ctx the parse tree
	 */
	exitEndIfStatement?: (ctx: EndIfStatementContext) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.doStatement`.
	 * @param ctx the parse tree
	 */
	enterDoStatement?: (ctx: DoStatementContext) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.doStatement`.
	 * @param ctx the parse tree
	 */
	exitDoStatement?: (ctx: DoStatementContext) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.doVarArgs`.
	 * @param ctx the parse tree
	 */
	enterDoVarArgs?: (ctx: DoVarArgsContext) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.doVarArgs`.
	 * @param ctx the parse tree
	 */
	exitDoVarArgs?: (ctx: DoVarArgsContext) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.doWithLabel`.
	 * @param ctx the parse tree
	 */
	enterDoWithLabel?: (ctx: DoWithLabelContext) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.doWithLabel`.
	 * @param ctx the parse tree
	 */
	exitDoWithLabel?: (ctx: DoWithLabelContext) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.doBody`.
	 * @param ctx the parse tree
	 */
	enterDoBody?: (ctx: DoBodyContext) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.doBody`.
	 * @param ctx the parse tree
	 */
	exitDoBody?: (ctx: DoBodyContext) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.doWithEndDo`.
	 * @param ctx the parse tree
	 */
	enterDoWithEndDo?: (ctx: DoWithEndDoContext) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.doWithEndDo`.
	 * @param ctx the parse tree
	 */
	exitDoWithEndDo?: (ctx: DoWithEndDoContext) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.enddoStatement`.
	 * @param ctx the parse tree
	 */
	enterEnddoStatement?: (ctx: EnddoStatementContext) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.enddoStatement`.
	 * @param ctx the parse tree
	 */
	exitEnddoStatement?: (ctx: EnddoStatementContext) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.continueStatement`.
	 * @param ctx the parse tree
	 */
	enterContinueStatement?: (ctx: ContinueStatementContext) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.continueStatement`.
	 * @param ctx the parse tree
	 */
	exitContinueStatement?: (ctx: ContinueStatementContext) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.stopStatement`.
	 * @param ctx the parse tree
	 */
	enterStopStatement?: (ctx: StopStatementContext) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.stopStatement`.
	 * @param ctx the parse tree
	 */
	exitStopStatement?: (ctx: StopStatementContext) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.pauseStatement`.
	 * @param ctx the parse tree
	 */
	enterPauseStatement?: (ctx: PauseStatementContext) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.pauseStatement`.
	 * @param ctx the parse tree
	 */
	exitPauseStatement?: (ctx: PauseStatementContext) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.writeStatement`.
	 * @param ctx the parse tree
	 */
	enterWriteStatement?: (ctx: WriteStatementContext) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.writeStatement`.
	 * @param ctx the parse tree
	 */
	exitWriteStatement?: (ctx: WriteStatementContext) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.readStatement`.
	 * @param ctx the parse tree
	 */
	enterReadStatement?: (ctx: ReadStatementContext) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.readStatement`.
	 * @param ctx the parse tree
	 */
	exitReadStatement?: (ctx: ReadStatementContext) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.printStatement`.
	 * @param ctx the parse tree
	 */
	enterPrintStatement?: (ctx: PrintStatementContext) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.printStatement`.
	 * @param ctx the parse tree
	 */
	exitPrintStatement?: (ctx: PrintStatementContext) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.assignmentStatement`.
	 * @param ctx the parse tree
	 */
	enterAssignmentStatement?: (ctx: AssignmentStatementContext) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.assignmentStatement`.
	 * @param ctx the parse tree
	 */
	exitAssignmentStatement?: (ctx: AssignmentStatementContext) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.controlInfoList`.
	 * @param ctx the parse tree
	 */
	enterControlInfoList?: (ctx: ControlInfoListContext) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.controlInfoList`.
	 * @param ctx the parse tree
	 */
	exitControlInfoList?: (ctx: ControlInfoListContext) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.controlErrSpec`.
	 * @param ctx the parse tree
	 */
	enterControlErrSpec?: (ctx: ControlErrSpecContext) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.controlErrSpec`.
	 * @param ctx the parse tree
	 */
	exitControlErrSpec?: (ctx: ControlErrSpecContext) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.controlInfoListItem`.
	 * @param ctx the parse tree
	 */
	enterControlInfoListItem?: (ctx: ControlInfoListItemContext) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.controlInfoListItem`.
	 * @param ctx the parse tree
	 */
	exitControlInfoListItem?: (ctx: ControlInfoListItemContext) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.ioList`.
	 * @param ctx the parse tree
	 */
	enterIoList?: (ctx: IoListContext) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.ioList`.
	 * @param ctx the parse tree
	 */
	exitIoList?: (ctx: IoListContext) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.ioListItem`.
	 * @param ctx the parse tree
	 */
	enterIoListItem?: (ctx: IoListItemContext) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.ioListItem`.
	 * @param ctx the parse tree
	 */
	exitIoListItem?: (ctx: IoListItemContext) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.ioImpliedDoList`.
	 * @param ctx the parse tree
	 */
	enterIoImpliedDoList?: (ctx: IoImpliedDoListContext) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.ioImpliedDoList`.
	 * @param ctx the parse tree
	 */
	exitIoImpliedDoList?: (ctx: IoImpliedDoListContext) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.openStatement`.
	 * @param ctx the parse tree
	 */
	enterOpenStatement?: (ctx: OpenStatementContext) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.openStatement`.
	 * @param ctx the parse tree
	 */
	exitOpenStatement?: (ctx: OpenStatementContext) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.openControl`.
	 * @param ctx the parse tree
	 */
	enterOpenControl?: (ctx: OpenControlContext) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.openControl`.
	 * @param ctx the parse tree
	 */
	exitOpenControl?: (ctx: OpenControlContext) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.controlFmt`.
	 * @param ctx the parse tree
	 */
	enterControlFmt?: (ctx: ControlFmtContext) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.controlFmt`.
	 * @param ctx the parse tree
	 */
	exitControlFmt?: (ctx: ControlFmtContext) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.controlUnit`.
	 * @param ctx the parse tree
	 */
	enterControlUnit?: (ctx: ControlUnitContext) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.controlUnit`.
	 * @param ctx the parse tree
	 */
	exitControlUnit?: (ctx: ControlUnitContext) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.controlRec`.
	 * @param ctx the parse tree
	 */
	enterControlRec?: (ctx: ControlRecContext) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.controlRec`.
	 * @param ctx the parse tree
	 */
	exitControlRec?: (ctx: ControlRecContext) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.controlEnd`.
	 * @param ctx the parse tree
	 */
	enterControlEnd?: (ctx: ControlEndContext) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.controlEnd`.
	 * @param ctx the parse tree
	 */
	exitControlEnd?: (ctx: ControlEndContext) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.controlErr`.
	 * @param ctx the parse tree
	 */
	enterControlErr?: (ctx: ControlErrContext) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.controlErr`.
	 * @param ctx the parse tree
	 */
	exitControlErr?: (ctx: ControlErrContext) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.controlIostat`.
	 * @param ctx the parse tree
	 */
	enterControlIostat?: (ctx: ControlIostatContext) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.controlIostat`.
	 * @param ctx the parse tree
	 */
	exitControlIostat?: (ctx: ControlIostatContext) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.controlFile`.
	 * @param ctx the parse tree
	 */
	enterControlFile?: (ctx: ControlFileContext) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.controlFile`.
	 * @param ctx the parse tree
	 */
	exitControlFile?: (ctx: ControlFileContext) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.controlStatus`.
	 * @param ctx the parse tree
	 */
	enterControlStatus?: (ctx: ControlStatusContext) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.controlStatus`.
	 * @param ctx the parse tree
	 */
	exitControlStatus?: (ctx: ControlStatusContext) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.controlAccess`.
	 * @param ctx the parse tree
	 */
	enterControlAccess?: (ctx: ControlAccessContext) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.controlAccess`.
	 * @param ctx the parse tree
	 */
	exitControlAccess?: (ctx: ControlAccessContext) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.controlPosition`.
	 * @param ctx the parse tree
	 */
	enterControlPosition?: (ctx: ControlPositionContext) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.controlPosition`.
	 * @param ctx the parse tree
	 */
	exitControlPosition?: (ctx: ControlPositionContext) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.controlForm`.
	 * @param ctx the parse tree
	 */
	enterControlForm?: (ctx: ControlFormContext) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.controlForm`.
	 * @param ctx the parse tree
	 */
	exitControlForm?: (ctx: ControlFormContext) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.controlRecl`.
	 * @param ctx the parse tree
	 */
	enterControlRecl?: (ctx: ControlReclContext) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.controlRecl`.
	 * @param ctx the parse tree
	 */
	exitControlRecl?: (ctx: ControlReclContext) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.controlBlank`.
	 * @param ctx the parse tree
	 */
	enterControlBlank?: (ctx: ControlBlankContext) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.controlBlank`.
	 * @param ctx the parse tree
	 */
	exitControlBlank?: (ctx: ControlBlankContext) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.controlExist`.
	 * @param ctx the parse tree
	 */
	enterControlExist?: (ctx: ControlExistContext) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.controlExist`.
	 * @param ctx the parse tree
	 */
	exitControlExist?: (ctx: ControlExistContext) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.controlOpened`.
	 * @param ctx the parse tree
	 */
	enterControlOpened?: (ctx: ControlOpenedContext) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.controlOpened`.
	 * @param ctx the parse tree
	 */
	exitControlOpened?: (ctx: ControlOpenedContext) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.controlNumber`.
	 * @param ctx the parse tree
	 */
	enterControlNumber?: (ctx: ControlNumberContext) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.controlNumber`.
	 * @param ctx the parse tree
	 */
	exitControlNumber?: (ctx: ControlNumberContext) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.controlNamed`.
	 * @param ctx the parse tree
	 */
	enterControlNamed?: (ctx: ControlNamedContext) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.controlNamed`.
	 * @param ctx the parse tree
	 */
	exitControlNamed?: (ctx: ControlNamedContext) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.controlName`.
	 * @param ctx the parse tree
	 */
	enterControlName?: (ctx: ControlNameContext) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.controlName`.
	 * @param ctx the parse tree
	 */
	exitControlName?: (ctx: ControlNameContext) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.controlSequential`.
	 * @param ctx the parse tree
	 */
	enterControlSequential?: (ctx: ControlSequentialContext) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.controlSequential`.
	 * @param ctx the parse tree
	 */
	exitControlSequential?: (ctx: ControlSequentialContext) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.controlDirect`.
	 * @param ctx the parse tree
	 */
	enterControlDirect?: (ctx: ControlDirectContext) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.controlDirect`.
	 * @param ctx the parse tree
	 */
	exitControlDirect?: (ctx: ControlDirectContext) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.controlFormatted`.
	 * @param ctx the parse tree
	 */
	enterControlFormatted?: (ctx: ControlFormattedContext) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.controlFormatted`.
	 * @param ctx the parse tree
	 */
	exitControlFormatted?: (ctx: ControlFormattedContext) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.controlUnformatted`.
	 * @param ctx the parse tree
	 */
	enterControlUnformatted?: (ctx: ControlUnformattedContext) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.controlUnformatted`.
	 * @param ctx the parse tree
	 */
	exitControlUnformatted?: (ctx: ControlUnformattedContext) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.controlNextrec`.
	 * @param ctx the parse tree
	 */
	enterControlNextrec?: (ctx: ControlNextrecContext) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.controlNextrec`.
	 * @param ctx the parse tree
	 */
	exitControlNextrec?: (ctx: ControlNextrecContext) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.closeStatement`.
	 * @param ctx the parse tree
	 */
	enterCloseStatement?: (ctx: CloseStatementContext) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.closeStatement`.
	 * @param ctx the parse tree
	 */
	exitCloseStatement?: (ctx: CloseStatementContext) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.closeControl`.
	 * @param ctx the parse tree
	 */
	enterCloseControl?: (ctx: CloseControlContext) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.closeControl`.
	 * @param ctx the parse tree
	 */
	exitCloseControl?: (ctx: CloseControlContext) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.inquireStatement`.
	 * @param ctx the parse tree
	 */
	enterInquireStatement?: (ctx: InquireStatementContext) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.inquireStatement`.
	 * @param ctx the parse tree
	 */
	exitInquireStatement?: (ctx: InquireStatementContext) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.inquireControl`.
	 * @param ctx the parse tree
	 */
	enterInquireControl?: (ctx: InquireControlContext) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.inquireControl`.
	 * @param ctx the parse tree
	 */
	exitInquireControl?: (ctx: InquireControlContext) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.backspaceStatement`.
	 * @param ctx the parse tree
	 */
	enterBackspaceStatement?: (ctx: BackspaceStatementContext) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.backspaceStatement`.
	 * @param ctx the parse tree
	 */
	exitBackspaceStatement?: (ctx: BackspaceStatementContext) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.endfileStatement`.
	 * @param ctx the parse tree
	 */
	enterEndfileStatement?: (ctx: EndfileStatementContext) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.endfileStatement`.
	 * @param ctx the parse tree
	 */
	exitEndfileStatement?: (ctx: EndfileStatementContext) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.rewindStatement`.
	 * @param ctx the parse tree
	 */
	enterRewindStatement?: (ctx: RewindStatementContext) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.rewindStatement`.
	 * @param ctx the parse tree
	 */
	exitRewindStatement?: (ctx: RewindStatementContext) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.berFinish`.
	 * @param ctx the parse tree
	 */
	enterBerFinish?: (ctx: BerFinishContext) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.berFinish`.
	 * @param ctx the parse tree
	 */
	exitBerFinish?: (ctx: BerFinishContext) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.berFinishItem`.
	 * @param ctx the parse tree
	 */
	enterBerFinishItem?: (ctx: BerFinishItemContext) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.berFinishItem`.
	 * @param ctx the parse tree
	 */
	exitBerFinishItem?: (ctx: BerFinishItemContext) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.unitIdentifier`.
	 * @param ctx the parse tree
	 */
	enterUnitIdentifier?: (ctx: UnitIdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.unitIdentifier`.
	 * @param ctx the parse tree
	 */
	exitUnitIdentifier?: (ctx: UnitIdentifierContext) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.formatIdentifier`.
	 * @param ctx the parse tree
	 */
	enterFormatIdentifier?: (ctx: FormatIdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.formatIdentifier`.
	 * @param ctx the parse tree
	 */
	exitFormatIdentifier?: (ctx: FormatIdentifierContext) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.formatStatement`.
	 * @param ctx the parse tree
	 */
	enterFormatStatement?: (ctx: FormatStatementContext) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.formatStatement`.
	 * @param ctx the parse tree
	 */
	exitFormatStatement?: (ctx: FormatStatementContext) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.fmtSpec`.
	 * @param ctx the parse tree
	 */
	enterFmtSpec?: (ctx: FmtSpecContext) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.fmtSpec`.
	 * @param ctx the parse tree
	 */
	exitFmtSpec?: (ctx: FmtSpecContext) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.formatsep`.
	 * @param ctx the parse tree
	 */
	enterFormatsep?: (ctx: FormatsepContext) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.formatsep`.
	 * @param ctx the parse tree
	 */
	exitFormatsep?: (ctx: FormatsepContext) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.formatedit`.
	 * @param ctx the parse tree
	 */
	enterFormatedit?: (ctx: FormateditContext) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.formatedit`.
	 * @param ctx the parse tree
	 */
	exitFormatedit?: (ctx: FormateditContext) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.editElement`.
	 * @param ctx the parse tree
	 */
	enterEditElement?: (ctx: EditElementContext) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.editElement`.
	 * @param ctx the parse tree
	 */
	exitEditElement?: (ctx: EditElementContext) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.statementFunctionStatement`.
	 * @param ctx the parse tree
	 */
	enterStatementFunctionStatement?: (ctx: StatementFunctionStatementContext) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.statementFunctionStatement`.
	 * @param ctx the parse tree
	 */
	exitStatementFunctionStatement?: (ctx: StatementFunctionStatementContext) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.sfArgs`.
	 * @param ctx the parse tree
	 */
	enterSfArgs?: (ctx: SfArgsContext) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.sfArgs`.
	 * @param ctx the parse tree
	 */
	exitSfArgs?: (ctx: SfArgsContext) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.callStatement`.
	 * @param ctx the parse tree
	 */
	enterCallStatement?: (ctx: CallStatementContext) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.callStatement`.
	 * @param ctx the parse tree
	 */
	exitCallStatement?: (ctx: CallStatementContext) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.subroutineCall`.
	 * @param ctx the parse tree
	 */
	enterSubroutineCall?: (ctx: SubroutineCallContext) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.subroutineCall`.
	 * @param ctx the parse tree
	 */
	exitSubroutineCall?: (ctx: SubroutineCallContext) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.callArgumentList`.
	 * @param ctx the parse tree
	 */
	enterCallArgumentList?: (ctx: CallArgumentListContext) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.callArgumentList`.
	 * @param ctx the parse tree
	 */
	exitCallArgumentList?: (ctx: CallArgumentListContext) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.callArgument`.
	 * @param ctx the parse tree
	 */
	enterCallArgument?: (ctx: CallArgumentContext) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.callArgument`.
	 * @param ctx the parse tree
	 */
	exitCallArgument?: (ctx: CallArgumentContext) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.returnStatement`.
	 * @param ctx the parse tree
	 */
	enterReturnStatement?: (ctx: ReturnStatementContext) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.returnStatement`.
	 * @param ctx the parse tree
	 */
	exitReturnStatement?: (ctx: ReturnStatementContext) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.ncExpr`.
	 * @param ctx the parse tree
	 */
	enterNcExpr?: (ctx: NcExprContext) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.ncExpr`.
	 * @param ctx the parse tree
	 */
	exitNcExpr?: (ctx: NcExprContext) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.lexpr0`.
	 * @param ctx the parse tree
	 */
	enterLexpr0?: (ctx: Lexpr0Context) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.lexpr0`.
	 * @param ctx the parse tree
	 */
	exitLexpr0?: (ctx: Lexpr0Context) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.lexpr1`.
	 * @param ctx the parse tree
	 */
	enterLexpr1?: (ctx: Lexpr1Context) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.lexpr1`.
	 * @param ctx the parse tree
	 */
	exitLexpr1?: (ctx: Lexpr1Context) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.lexpr2`.
	 * @param ctx the parse tree
	 */
	enterLexpr2?: (ctx: Lexpr2Context) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.lexpr2`.
	 * @param ctx the parse tree
	 */
	exitLexpr2?: (ctx: Lexpr2Context) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.lexpr3`.
	 * @param ctx the parse tree
	 */
	enterLexpr3?: (ctx: Lexpr3Context) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.lexpr3`.
	 * @param ctx the parse tree
	 */
	exitLexpr3?: (ctx: Lexpr3Context) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.lexpr4`.
	 * @param ctx the parse tree
	 */
	enterLexpr4?: (ctx: Lexpr4Context) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.lexpr4`.
	 * @param ctx the parse tree
	 */
	exitLexpr4?: (ctx: Lexpr4Context) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.aexpr0`.
	 * @param ctx the parse tree
	 */
	enterAexpr0?: (ctx: Aexpr0Context) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.aexpr0`.
	 * @param ctx the parse tree
	 */
	exitAexpr0?: (ctx: Aexpr0Context) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.aexpr1`.
	 * @param ctx the parse tree
	 */
	enterAexpr1?: (ctx: Aexpr1Context) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.aexpr1`.
	 * @param ctx the parse tree
	 */
	exitAexpr1?: (ctx: Aexpr1Context) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.aexpr2`.
	 * @param ctx the parse tree
	 */
	enterAexpr2?: (ctx: Aexpr2Context) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.aexpr2`.
	 * @param ctx the parse tree
	 */
	exitAexpr2?: (ctx: Aexpr2Context) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.aexpr3`.
	 * @param ctx the parse tree
	 */
	enterAexpr3?: (ctx: Aexpr3Context) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.aexpr3`.
	 * @param ctx the parse tree
	 */
	exitAexpr3?: (ctx: Aexpr3Context) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.aexpr4`.
	 * @param ctx the parse tree
	 */
	enterAexpr4?: (ctx: Aexpr4Context) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.aexpr4`.
	 * @param ctx the parse tree
	 */
	exitAexpr4?: (ctx: Aexpr4Context) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.iexpr`.
	 * @param ctx the parse tree
	 */
	enterIexpr?: (ctx: IexprContext) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.iexpr`.
	 * @param ctx the parse tree
	 */
	exitIexpr?: (ctx: IexprContext) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.iexprCode`.
	 * @param ctx the parse tree
	 */
	enterIexprCode?: (ctx: IexprCodeContext) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.iexprCode`.
	 * @param ctx the parse tree
	 */
	exitIexprCode?: (ctx: IexprCodeContext) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.iexpr1`.
	 * @param ctx the parse tree
	 */
	enterIexpr1?: (ctx: Iexpr1Context) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.iexpr1`.
	 * @param ctx the parse tree
	 */
	exitIexpr1?: (ctx: Iexpr1Context) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.iexpr2`.
	 * @param ctx the parse tree
	 */
	enterIexpr2?: (ctx: Iexpr2Context) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.iexpr2`.
	 * @param ctx the parse tree
	 */
	exitIexpr2?: (ctx: Iexpr2Context) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.iexpr3`.
	 * @param ctx the parse tree
	 */
	enterIexpr3?: (ctx: Iexpr3Context) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.iexpr3`.
	 * @param ctx the parse tree
	 */
	exitIexpr3?: (ctx: Iexpr3Context) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.iexpr4`.
	 * @param ctx the parse tree
	 */
	enterIexpr4?: (ctx: Iexpr4Context) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.iexpr4`.
	 * @param ctx the parse tree
	 */
	exitIexpr4?: (ctx: Iexpr4Context) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.constantExpr`.
	 * @param ctx the parse tree
	 */
	enterConstantExpr?: (ctx: ConstantExprContext) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.constantExpr`.
	 * @param ctx the parse tree
	 */
	exitConstantExpr?: (ctx: ConstantExprContext) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.arithmeticExpression`.
	 * @param ctx the parse tree
	 */
	enterArithmeticExpression?: (ctx: ArithmeticExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.arithmeticExpression`.
	 * @param ctx the parse tree
	 */
	exitArithmeticExpression?: (ctx: ArithmeticExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.integerExpr`.
	 * @param ctx the parse tree
	 */
	enterIntegerExpr?: (ctx: IntegerExprContext) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.integerExpr`.
	 * @param ctx the parse tree
	 */
	exitIntegerExpr?: (ctx: IntegerExprContext) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.intRealDpExpr`.
	 * @param ctx the parse tree
	 */
	enterIntRealDpExpr?: (ctx: IntRealDpExprContext) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.intRealDpExpr`.
	 * @param ctx the parse tree
	 */
	exitIntRealDpExpr?: (ctx: IntRealDpExprContext) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.arithmeticConstExpr`.
	 * @param ctx the parse tree
	 */
	enterArithmeticConstExpr?: (ctx: ArithmeticConstExprContext) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.arithmeticConstExpr`.
	 * @param ctx the parse tree
	 */
	exitArithmeticConstExpr?: (ctx: ArithmeticConstExprContext) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.intConstantExpr`.
	 * @param ctx the parse tree
	 */
	enterIntConstantExpr?: (ctx: IntConstantExprContext) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.intConstantExpr`.
	 * @param ctx the parse tree
	 */
	exitIntConstantExpr?: (ctx: IntConstantExprContext) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.characterExpression`.
	 * @param ctx the parse tree
	 */
	enterCharacterExpression?: (ctx: CharacterExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.characterExpression`.
	 * @param ctx the parse tree
	 */
	exitCharacterExpression?: (ctx: CharacterExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.concatOp`.
	 * @param ctx the parse tree
	 */
	enterConcatOp?: (ctx: ConcatOpContext) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.concatOp`.
	 * @param ctx the parse tree
	 */
	exitConcatOp?: (ctx: ConcatOpContext) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.logicalExpression`.
	 * @param ctx the parse tree
	 */
	enterLogicalExpression?: (ctx: LogicalExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.logicalExpression`.
	 * @param ctx the parse tree
	 */
	exitLogicalExpression?: (ctx: LogicalExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.logicalConstExpr`.
	 * @param ctx the parse tree
	 */
	enterLogicalConstExpr?: (ctx: LogicalConstExprContext) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.logicalConstExpr`.
	 * @param ctx the parse tree
	 */
	exitLogicalConstExpr?: (ctx: LogicalConstExprContext) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.arrayElementName`.
	 * @param ctx the parse tree
	 */
	enterArrayElementName?: (ctx: ArrayElementNameContext) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.arrayElementName`.
	 * @param ctx the parse tree
	 */
	exitArrayElementName?: (ctx: ArrayElementNameContext) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.subscripts`.
	 * @param ctx the parse tree
	 */
	enterSubscripts?: (ctx: SubscriptsContext) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.subscripts`.
	 * @param ctx the parse tree
	 */
	exitSubscripts?: (ctx: SubscriptsContext) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.varRef`.
	 * @param ctx the parse tree
	 */
	enterVarRef?: (ctx: VarRefContext) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.varRef`.
	 * @param ctx the parse tree
	 */
	exitVarRef?: (ctx: VarRefContext) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.varRefCode`.
	 * @param ctx the parse tree
	 */
	enterVarRefCode?: (ctx: VarRefCodeContext) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.varRefCode`.
	 * @param ctx the parse tree
	 */
	exitVarRefCode?: (ctx: VarRefCodeContext) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.substringApp`.
	 * @param ctx the parse tree
	 */
	enterSubstringApp?: (ctx: SubstringAppContext) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.substringApp`.
	 * @param ctx the parse tree
	 */
	exitSubstringApp?: (ctx: SubstringAppContext) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.variableName`.
	 * @param ctx the parse tree
	 */
	enterVariableName?: (ctx: VariableNameContext) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.variableName`.
	 * @param ctx the parse tree
	 */
	exitVariableName?: (ctx: VariableNameContext) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.arrayName`.
	 * @param ctx the parse tree
	 */
	enterArrayName?: (ctx: ArrayNameContext) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.arrayName`.
	 * @param ctx the parse tree
	 */
	exitArrayName?: (ctx: ArrayNameContext) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.subroutineName`.
	 * @param ctx the parse tree
	 */
	enterSubroutineName?: (ctx: SubroutineNameContext) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.subroutineName`.
	 * @param ctx the parse tree
	 */
	exitSubroutineName?: (ctx: SubroutineNameContext) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.functionName`.
	 * @param ctx the parse tree
	 */
	enterFunctionName?: (ctx: FunctionNameContext) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.functionName`.
	 * @param ctx the parse tree
	 */
	exitFunctionName?: (ctx: FunctionNameContext) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.constant`.
	 * @param ctx the parse tree
	 */
	enterConstant?: (ctx: ConstantContext) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.constant`.
	 * @param ctx the parse tree
	 */
	exitConstant?: (ctx: ConstantContext) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.unsignedArithmeticConstant`.
	 * @param ctx the parse tree
	 */
	enterUnsignedArithmeticConstant?: (ctx: UnsignedArithmeticConstantContext) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.unsignedArithmeticConstant`.
	 * @param ctx the parse tree
	 */
	exitUnsignedArithmeticConstant?: (ctx: UnsignedArithmeticConstantContext) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.complexConstant`.
	 * @param ctx the parse tree
	 */
	enterComplexConstant?: (ctx: ComplexConstantContext) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.complexConstant`.
	 * @param ctx the parse tree
	 */
	exitComplexConstant?: (ctx: ComplexConstantContext) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.logicalConstant`.
	 * @param ctx the parse tree
	 */
	enterLogicalConstant?: (ctx: LogicalConstantContext) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.logicalConstant`.
	 * @param ctx the parse tree
	 */
	exitLogicalConstant?: (ctx: LogicalConstantContext) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.identifier`.
	 * @param ctx the parse tree
	 */
	enterIdentifier?: (ctx: IdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.identifier`.
	 * @param ctx the parse tree
	 */
	exitIdentifier?: (ctx: IdentifierContext) => void;

	/**
	 * Enter a parse tree produced by `Fortran77Parser.to`.
	 * @param ctx the parse tree
	 */
	enterTo?: (ctx: ToContext) => void;
	/**
	 * Exit a parse tree produced by `Fortran77Parser.to`.
	 * @param ctx the parse tree
	 */
	exitTo?: (ctx: ToContext) => void;
}

