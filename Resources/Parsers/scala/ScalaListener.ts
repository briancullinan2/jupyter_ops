// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/scala/Scala.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { LiteralContext } from "./ScalaParser";
import { QualIdContext } from "./ScalaParser";
import { IdsContext } from "./ScalaParser";
import { StableIdContext } from "./ScalaParser";
import { ClassQualifierContext } from "./ScalaParser";
import { Type_Context } from "./ScalaParser";
import { FunctionArgTypesContext } from "./ScalaParser";
import { ExistentialClauseContext } from "./ScalaParser";
import { ExistentialDclContext } from "./ScalaParser";
import { InfixTypeContext } from "./ScalaParser";
import { CompoundTypeContext } from "./ScalaParser";
import { AnnotTypeContext } from "./ScalaParser";
import { SimpleTypeContext } from "./ScalaParser";
import { TypeArgsContext } from "./ScalaParser";
import { TypesContext } from "./ScalaParser";
import { RefinementContext } from "./ScalaParser";
import { RefineStatContext } from "./ScalaParser";
import { TypePatContext } from "./ScalaParser";
import { AscriptionContext } from "./ScalaParser";
import { ExprContext } from "./ScalaParser";
import { Expr1Context } from "./ScalaParser";
import { PostfixExprContext } from "./ScalaParser";
import { InfixExprContext } from "./ScalaParser";
import { PrefixExprContext } from "./ScalaParser";
import { SimpleExpr1Context } from "./ScalaParser";
import { ExprsContext } from "./ScalaParser";
import { ArgumentExprsContext } from "./ScalaParser";
import { BlockExprContext } from "./ScalaParser";
import { BlockContext } from "./ScalaParser";
import { BlockStatContext } from "./ScalaParser";
import { ResultExprContext } from "./ScalaParser";
import { EnumeratorsContext } from "./ScalaParser";
import { GeneratorContext } from "./ScalaParser";
import { CaseClausesContext } from "./ScalaParser";
import { CaseClauseContext } from "./ScalaParser";
import { GuardContext } from "./ScalaParser";
import { PatternContext } from "./ScalaParser";
import { Pattern1Context } from "./ScalaParser";
import { Pattern2Context } from "./ScalaParser";
import { Pattern3Context } from "./ScalaParser";
import { SimplePatternContext } from "./ScalaParser";
import { PatternsContext } from "./ScalaParser";
import { TypeParamClauseContext } from "./ScalaParser";
import { FunTypeParamClauseContext } from "./ScalaParser";
import { VariantTypeParamContext } from "./ScalaParser";
import { TypeParamContext } from "./ScalaParser";
import { ParamClausesContext } from "./ScalaParser";
import { ParamClauseContext } from "./ScalaParser";
import { ParamsContext } from "./ScalaParser";
import { ParamContext } from "./ScalaParser";
import { ParamTypeContext } from "./ScalaParser";
import { ClassParamClausesContext } from "./ScalaParser";
import { ClassParamClauseContext } from "./ScalaParser";
import { ClassParamsContext } from "./ScalaParser";
import { ClassParamContext } from "./ScalaParser";
import { BindingsContext } from "./ScalaParser";
import { BindingContext } from "./ScalaParser";
import { ModifierContext } from "./ScalaParser";
import { LocalModifierContext } from "./ScalaParser";
import { AccessModifierContext } from "./ScalaParser";
import { AccessQualifierContext } from "./ScalaParser";
import { AnnotationContext } from "./ScalaParser";
import { ConstrAnnotationContext } from "./ScalaParser";
import { TemplateBodyContext } from "./ScalaParser";
import { TemplateStatContext } from "./ScalaParser";
import { SelfTypeContext } from "./ScalaParser";
import { Import_Context } from "./ScalaParser";
import { ImportExprContext } from "./ScalaParser";
import { ImportSelectorsContext } from "./ScalaParser";
import { ImportSelectorContext } from "./ScalaParser";
import { DclContext } from "./ScalaParser";
import { ValDclContext } from "./ScalaParser";
import { VarDclContext } from "./ScalaParser";
import { FunDclContext } from "./ScalaParser";
import { FunSigContext } from "./ScalaParser";
import { TypeDclContext } from "./ScalaParser";
import { PatVarDefContext } from "./ScalaParser";
import { DefContext } from "./ScalaParser";
import { PatDefContext } from "./ScalaParser";
import { VarDefContext } from "./ScalaParser";
import { FunDefContext } from "./ScalaParser";
import { TypeDefContext } from "./ScalaParser";
import { TmplDefContext } from "./ScalaParser";
import { ClassDefContext } from "./ScalaParser";
import { TraitDefContext } from "./ScalaParser";
import { ObjectDefContext } from "./ScalaParser";
import { ClassTemplateOptContext } from "./ScalaParser";
import { TraitTemplateOptContext } from "./ScalaParser";
import { ClassTemplateContext } from "./ScalaParser";
import { TraitTemplateContext } from "./ScalaParser";
import { ClassParentsContext } from "./ScalaParser";
import { TraitParentsContext } from "./ScalaParser";
import { ConstrContext } from "./ScalaParser";
import { EarlyDefsContext } from "./ScalaParser";
import { EarlyDefContext } from "./ScalaParser";
import { ConstrExprContext } from "./ScalaParser";
import { ConstrBlockContext } from "./ScalaParser";
import { SelfInvocationContext } from "./ScalaParser";
import { TopStatSeqContext } from "./ScalaParser";
import { TopStatContext } from "./ScalaParser";
import { PackagingContext } from "./ScalaParser";
import { PackageObjectContext } from "./ScalaParser";
import { CompilationUnitContext } from "./ScalaParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `ScalaParser`.
 */
export interface ScalaListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `ScalaParser.literal`.
	 * @param ctx the parse tree
	 */
	enterLiteral?: (ctx: LiteralContext) => void;
	/**
	 * Exit a parse tree produced by `ScalaParser.literal`.
	 * @param ctx the parse tree
	 */
	exitLiteral?: (ctx: LiteralContext) => void;

	/**
	 * Enter a parse tree produced by `ScalaParser.qualId`.
	 * @param ctx the parse tree
	 */
	enterQualId?: (ctx: QualIdContext) => void;
	/**
	 * Exit a parse tree produced by `ScalaParser.qualId`.
	 * @param ctx the parse tree
	 */
	exitQualId?: (ctx: QualIdContext) => void;

	/**
	 * Enter a parse tree produced by `ScalaParser.ids`.
	 * @param ctx the parse tree
	 */
	enterIds?: (ctx: IdsContext) => void;
	/**
	 * Exit a parse tree produced by `ScalaParser.ids`.
	 * @param ctx the parse tree
	 */
	exitIds?: (ctx: IdsContext) => void;

	/**
	 * Enter a parse tree produced by `ScalaParser.stableId`.
	 * @param ctx the parse tree
	 */
	enterStableId?: (ctx: StableIdContext) => void;
	/**
	 * Exit a parse tree produced by `ScalaParser.stableId`.
	 * @param ctx the parse tree
	 */
	exitStableId?: (ctx: StableIdContext) => void;

	/**
	 * Enter a parse tree produced by `ScalaParser.classQualifier`.
	 * @param ctx the parse tree
	 */
	enterClassQualifier?: (ctx: ClassQualifierContext) => void;
	/**
	 * Exit a parse tree produced by `ScalaParser.classQualifier`.
	 * @param ctx the parse tree
	 */
	exitClassQualifier?: (ctx: ClassQualifierContext) => void;

	/**
	 * Enter a parse tree produced by `ScalaParser.type_`.
	 * @param ctx the parse tree
	 */
	enterType_?: (ctx: Type_Context) => void;
	/**
	 * Exit a parse tree produced by `ScalaParser.type_`.
	 * @param ctx the parse tree
	 */
	exitType_?: (ctx: Type_Context) => void;

	/**
	 * Enter a parse tree produced by `ScalaParser.functionArgTypes`.
	 * @param ctx the parse tree
	 */
	enterFunctionArgTypes?: (ctx: FunctionArgTypesContext) => void;
	/**
	 * Exit a parse tree produced by `ScalaParser.functionArgTypes`.
	 * @param ctx the parse tree
	 */
	exitFunctionArgTypes?: (ctx: FunctionArgTypesContext) => void;

	/**
	 * Enter a parse tree produced by `ScalaParser.existentialClause`.
	 * @param ctx the parse tree
	 */
	enterExistentialClause?: (ctx: ExistentialClauseContext) => void;
	/**
	 * Exit a parse tree produced by `ScalaParser.existentialClause`.
	 * @param ctx the parse tree
	 */
	exitExistentialClause?: (ctx: ExistentialClauseContext) => void;

	/**
	 * Enter a parse tree produced by `ScalaParser.existentialDcl`.
	 * @param ctx the parse tree
	 */
	enterExistentialDcl?: (ctx: ExistentialDclContext) => void;
	/**
	 * Exit a parse tree produced by `ScalaParser.existentialDcl`.
	 * @param ctx the parse tree
	 */
	exitExistentialDcl?: (ctx: ExistentialDclContext) => void;

	/**
	 * Enter a parse tree produced by `ScalaParser.infixType`.
	 * @param ctx the parse tree
	 */
	enterInfixType?: (ctx: InfixTypeContext) => void;
	/**
	 * Exit a parse tree produced by `ScalaParser.infixType`.
	 * @param ctx the parse tree
	 */
	exitInfixType?: (ctx: InfixTypeContext) => void;

	/**
	 * Enter a parse tree produced by `ScalaParser.compoundType`.
	 * @param ctx the parse tree
	 */
	enterCompoundType?: (ctx: CompoundTypeContext) => void;
	/**
	 * Exit a parse tree produced by `ScalaParser.compoundType`.
	 * @param ctx the parse tree
	 */
	exitCompoundType?: (ctx: CompoundTypeContext) => void;

	/**
	 * Enter a parse tree produced by `ScalaParser.annotType`.
	 * @param ctx the parse tree
	 */
	enterAnnotType?: (ctx: AnnotTypeContext) => void;
	/**
	 * Exit a parse tree produced by `ScalaParser.annotType`.
	 * @param ctx the parse tree
	 */
	exitAnnotType?: (ctx: AnnotTypeContext) => void;

	/**
	 * Enter a parse tree produced by `ScalaParser.simpleType`.
	 * @param ctx the parse tree
	 */
	enterSimpleType?: (ctx: SimpleTypeContext) => void;
	/**
	 * Exit a parse tree produced by `ScalaParser.simpleType`.
	 * @param ctx the parse tree
	 */
	exitSimpleType?: (ctx: SimpleTypeContext) => void;

	/**
	 * Enter a parse tree produced by `ScalaParser.typeArgs`.
	 * @param ctx the parse tree
	 */
	enterTypeArgs?: (ctx: TypeArgsContext) => void;
	/**
	 * Exit a parse tree produced by `ScalaParser.typeArgs`.
	 * @param ctx the parse tree
	 */
	exitTypeArgs?: (ctx: TypeArgsContext) => void;

	/**
	 * Enter a parse tree produced by `ScalaParser.types`.
	 * @param ctx the parse tree
	 */
	enterTypes?: (ctx: TypesContext) => void;
	/**
	 * Exit a parse tree produced by `ScalaParser.types`.
	 * @param ctx the parse tree
	 */
	exitTypes?: (ctx: TypesContext) => void;

	/**
	 * Enter a parse tree produced by `ScalaParser.refinement`.
	 * @param ctx the parse tree
	 */
	enterRefinement?: (ctx: RefinementContext) => void;
	/**
	 * Exit a parse tree produced by `ScalaParser.refinement`.
	 * @param ctx the parse tree
	 */
	exitRefinement?: (ctx: RefinementContext) => void;

	/**
	 * Enter a parse tree produced by `ScalaParser.refineStat`.
	 * @param ctx the parse tree
	 */
	enterRefineStat?: (ctx: RefineStatContext) => void;
	/**
	 * Exit a parse tree produced by `ScalaParser.refineStat`.
	 * @param ctx the parse tree
	 */
	exitRefineStat?: (ctx: RefineStatContext) => void;

	/**
	 * Enter a parse tree produced by `ScalaParser.typePat`.
	 * @param ctx the parse tree
	 */
	enterTypePat?: (ctx: TypePatContext) => void;
	/**
	 * Exit a parse tree produced by `ScalaParser.typePat`.
	 * @param ctx the parse tree
	 */
	exitTypePat?: (ctx: TypePatContext) => void;

	/**
	 * Enter a parse tree produced by `ScalaParser.ascription`.
	 * @param ctx the parse tree
	 */
	enterAscription?: (ctx: AscriptionContext) => void;
	/**
	 * Exit a parse tree produced by `ScalaParser.ascription`.
	 * @param ctx the parse tree
	 */
	exitAscription?: (ctx: AscriptionContext) => void;

	/**
	 * Enter a parse tree produced by `ScalaParser.expr`.
	 * @param ctx the parse tree
	 */
	enterExpr?: (ctx: ExprContext) => void;
	/**
	 * Exit a parse tree produced by `ScalaParser.expr`.
	 * @param ctx the parse tree
	 */
	exitExpr?: (ctx: ExprContext) => void;

	/**
	 * Enter a parse tree produced by `ScalaParser.expr1`.
	 * @param ctx the parse tree
	 */
	enterExpr1?: (ctx: Expr1Context) => void;
	/**
	 * Exit a parse tree produced by `ScalaParser.expr1`.
	 * @param ctx the parse tree
	 */
	exitExpr1?: (ctx: Expr1Context) => void;

	/**
	 * Enter a parse tree produced by `ScalaParser.postfixExpr`.
	 * @param ctx the parse tree
	 */
	enterPostfixExpr?: (ctx: PostfixExprContext) => void;
	/**
	 * Exit a parse tree produced by `ScalaParser.postfixExpr`.
	 * @param ctx the parse tree
	 */
	exitPostfixExpr?: (ctx: PostfixExprContext) => void;

	/**
	 * Enter a parse tree produced by `ScalaParser.infixExpr`.
	 * @param ctx the parse tree
	 */
	enterInfixExpr?: (ctx: InfixExprContext) => void;
	/**
	 * Exit a parse tree produced by `ScalaParser.infixExpr`.
	 * @param ctx the parse tree
	 */
	exitInfixExpr?: (ctx: InfixExprContext) => void;

	/**
	 * Enter a parse tree produced by `ScalaParser.prefixExpr`.
	 * @param ctx the parse tree
	 */
	enterPrefixExpr?: (ctx: PrefixExprContext) => void;
	/**
	 * Exit a parse tree produced by `ScalaParser.prefixExpr`.
	 * @param ctx the parse tree
	 */
	exitPrefixExpr?: (ctx: PrefixExprContext) => void;

	/**
	 * Enter a parse tree produced by `ScalaParser.simpleExpr1`.
	 * @param ctx the parse tree
	 */
	enterSimpleExpr1?: (ctx: SimpleExpr1Context) => void;
	/**
	 * Exit a parse tree produced by `ScalaParser.simpleExpr1`.
	 * @param ctx the parse tree
	 */
	exitSimpleExpr1?: (ctx: SimpleExpr1Context) => void;

	/**
	 * Enter a parse tree produced by `ScalaParser.exprs`.
	 * @param ctx the parse tree
	 */
	enterExprs?: (ctx: ExprsContext) => void;
	/**
	 * Exit a parse tree produced by `ScalaParser.exprs`.
	 * @param ctx the parse tree
	 */
	exitExprs?: (ctx: ExprsContext) => void;

	/**
	 * Enter a parse tree produced by `ScalaParser.argumentExprs`.
	 * @param ctx the parse tree
	 */
	enterArgumentExprs?: (ctx: ArgumentExprsContext) => void;
	/**
	 * Exit a parse tree produced by `ScalaParser.argumentExprs`.
	 * @param ctx the parse tree
	 */
	exitArgumentExprs?: (ctx: ArgumentExprsContext) => void;

	/**
	 * Enter a parse tree produced by `ScalaParser.blockExpr`.
	 * @param ctx the parse tree
	 */
	enterBlockExpr?: (ctx: BlockExprContext) => void;
	/**
	 * Exit a parse tree produced by `ScalaParser.blockExpr`.
	 * @param ctx the parse tree
	 */
	exitBlockExpr?: (ctx: BlockExprContext) => void;

	/**
	 * Enter a parse tree produced by `ScalaParser.block`.
	 * @param ctx the parse tree
	 */
	enterBlock?: (ctx: BlockContext) => void;
	/**
	 * Exit a parse tree produced by `ScalaParser.block`.
	 * @param ctx the parse tree
	 */
	exitBlock?: (ctx: BlockContext) => void;

	/**
	 * Enter a parse tree produced by `ScalaParser.blockStat`.
	 * @param ctx the parse tree
	 */
	enterBlockStat?: (ctx: BlockStatContext) => void;
	/**
	 * Exit a parse tree produced by `ScalaParser.blockStat`.
	 * @param ctx the parse tree
	 */
	exitBlockStat?: (ctx: BlockStatContext) => void;

	/**
	 * Enter a parse tree produced by `ScalaParser.resultExpr`.
	 * @param ctx the parse tree
	 */
	enterResultExpr?: (ctx: ResultExprContext) => void;
	/**
	 * Exit a parse tree produced by `ScalaParser.resultExpr`.
	 * @param ctx the parse tree
	 */
	exitResultExpr?: (ctx: ResultExprContext) => void;

	/**
	 * Enter a parse tree produced by `ScalaParser.enumerators`.
	 * @param ctx the parse tree
	 */
	enterEnumerators?: (ctx: EnumeratorsContext) => void;
	/**
	 * Exit a parse tree produced by `ScalaParser.enumerators`.
	 * @param ctx the parse tree
	 */
	exitEnumerators?: (ctx: EnumeratorsContext) => void;

	/**
	 * Enter a parse tree produced by `ScalaParser.generator`.
	 * @param ctx the parse tree
	 */
	enterGenerator?: (ctx: GeneratorContext) => void;
	/**
	 * Exit a parse tree produced by `ScalaParser.generator`.
	 * @param ctx the parse tree
	 */
	exitGenerator?: (ctx: GeneratorContext) => void;

	/**
	 * Enter a parse tree produced by `ScalaParser.caseClauses`.
	 * @param ctx the parse tree
	 */
	enterCaseClauses?: (ctx: CaseClausesContext) => void;
	/**
	 * Exit a parse tree produced by `ScalaParser.caseClauses`.
	 * @param ctx the parse tree
	 */
	exitCaseClauses?: (ctx: CaseClausesContext) => void;

	/**
	 * Enter a parse tree produced by `ScalaParser.caseClause`.
	 * @param ctx the parse tree
	 */
	enterCaseClause?: (ctx: CaseClauseContext) => void;
	/**
	 * Exit a parse tree produced by `ScalaParser.caseClause`.
	 * @param ctx the parse tree
	 */
	exitCaseClause?: (ctx: CaseClauseContext) => void;

	/**
	 * Enter a parse tree produced by `ScalaParser.guard`.
	 * @param ctx the parse tree
	 */
	enterGuard?: (ctx: GuardContext) => void;
	/**
	 * Exit a parse tree produced by `ScalaParser.guard`.
	 * @param ctx the parse tree
	 */
	exitGuard?: (ctx: GuardContext) => void;

	/**
	 * Enter a parse tree produced by `ScalaParser.pattern`.
	 * @param ctx the parse tree
	 */
	enterPattern?: (ctx: PatternContext) => void;
	/**
	 * Exit a parse tree produced by `ScalaParser.pattern`.
	 * @param ctx the parse tree
	 */
	exitPattern?: (ctx: PatternContext) => void;

	/**
	 * Enter a parse tree produced by `ScalaParser.pattern1`.
	 * @param ctx the parse tree
	 */
	enterPattern1?: (ctx: Pattern1Context) => void;
	/**
	 * Exit a parse tree produced by `ScalaParser.pattern1`.
	 * @param ctx the parse tree
	 */
	exitPattern1?: (ctx: Pattern1Context) => void;

	/**
	 * Enter a parse tree produced by `ScalaParser.pattern2`.
	 * @param ctx the parse tree
	 */
	enterPattern2?: (ctx: Pattern2Context) => void;
	/**
	 * Exit a parse tree produced by `ScalaParser.pattern2`.
	 * @param ctx the parse tree
	 */
	exitPattern2?: (ctx: Pattern2Context) => void;

	/**
	 * Enter a parse tree produced by `ScalaParser.pattern3`.
	 * @param ctx the parse tree
	 */
	enterPattern3?: (ctx: Pattern3Context) => void;
	/**
	 * Exit a parse tree produced by `ScalaParser.pattern3`.
	 * @param ctx the parse tree
	 */
	exitPattern3?: (ctx: Pattern3Context) => void;

	/**
	 * Enter a parse tree produced by `ScalaParser.simplePattern`.
	 * @param ctx the parse tree
	 */
	enterSimplePattern?: (ctx: SimplePatternContext) => void;
	/**
	 * Exit a parse tree produced by `ScalaParser.simplePattern`.
	 * @param ctx the parse tree
	 */
	exitSimplePattern?: (ctx: SimplePatternContext) => void;

	/**
	 * Enter a parse tree produced by `ScalaParser.patterns`.
	 * @param ctx the parse tree
	 */
	enterPatterns?: (ctx: PatternsContext) => void;
	/**
	 * Exit a parse tree produced by `ScalaParser.patterns`.
	 * @param ctx the parse tree
	 */
	exitPatterns?: (ctx: PatternsContext) => void;

	/**
	 * Enter a parse tree produced by `ScalaParser.typeParamClause`.
	 * @param ctx the parse tree
	 */
	enterTypeParamClause?: (ctx: TypeParamClauseContext) => void;
	/**
	 * Exit a parse tree produced by `ScalaParser.typeParamClause`.
	 * @param ctx the parse tree
	 */
	exitTypeParamClause?: (ctx: TypeParamClauseContext) => void;

	/**
	 * Enter a parse tree produced by `ScalaParser.funTypeParamClause`.
	 * @param ctx the parse tree
	 */
	enterFunTypeParamClause?: (ctx: FunTypeParamClauseContext) => void;
	/**
	 * Exit a parse tree produced by `ScalaParser.funTypeParamClause`.
	 * @param ctx the parse tree
	 */
	exitFunTypeParamClause?: (ctx: FunTypeParamClauseContext) => void;

	/**
	 * Enter a parse tree produced by `ScalaParser.variantTypeParam`.
	 * @param ctx the parse tree
	 */
	enterVariantTypeParam?: (ctx: VariantTypeParamContext) => void;
	/**
	 * Exit a parse tree produced by `ScalaParser.variantTypeParam`.
	 * @param ctx the parse tree
	 */
	exitVariantTypeParam?: (ctx: VariantTypeParamContext) => void;

	/**
	 * Enter a parse tree produced by `ScalaParser.typeParam`.
	 * @param ctx the parse tree
	 */
	enterTypeParam?: (ctx: TypeParamContext) => void;
	/**
	 * Exit a parse tree produced by `ScalaParser.typeParam`.
	 * @param ctx the parse tree
	 */
	exitTypeParam?: (ctx: TypeParamContext) => void;

	/**
	 * Enter a parse tree produced by `ScalaParser.paramClauses`.
	 * @param ctx the parse tree
	 */
	enterParamClauses?: (ctx: ParamClausesContext) => void;
	/**
	 * Exit a parse tree produced by `ScalaParser.paramClauses`.
	 * @param ctx the parse tree
	 */
	exitParamClauses?: (ctx: ParamClausesContext) => void;

	/**
	 * Enter a parse tree produced by `ScalaParser.paramClause`.
	 * @param ctx the parse tree
	 */
	enterParamClause?: (ctx: ParamClauseContext) => void;
	/**
	 * Exit a parse tree produced by `ScalaParser.paramClause`.
	 * @param ctx the parse tree
	 */
	exitParamClause?: (ctx: ParamClauseContext) => void;

	/**
	 * Enter a parse tree produced by `ScalaParser.params`.
	 * @param ctx the parse tree
	 */
	enterParams?: (ctx: ParamsContext) => void;
	/**
	 * Exit a parse tree produced by `ScalaParser.params`.
	 * @param ctx the parse tree
	 */
	exitParams?: (ctx: ParamsContext) => void;

	/**
	 * Enter a parse tree produced by `ScalaParser.param`.
	 * @param ctx the parse tree
	 */
	enterParam?: (ctx: ParamContext) => void;
	/**
	 * Exit a parse tree produced by `ScalaParser.param`.
	 * @param ctx the parse tree
	 */
	exitParam?: (ctx: ParamContext) => void;

	/**
	 * Enter a parse tree produced by `ScalaParser.paramType`.
	 * @param ctx the parse tree
	 */
	enterParamType?: (ctx: ParamTypeContext) => void;
	/**
	 * Exit a parse tree produced by `ScalaParser.paramType`.
	 * @param ctx the parse tree
	 */
	exitParamType?: (ctx: ParamTypeContext) => void;

	/**
	 * Enter a parse tree produced by `ScalaParser.classParamClauses`.
	 * @param ctx the parse tree
	 */
	enterClassParamClauses?: (ctx: ClassParamClausesContext) => void;
	/**
	 * Exit a parse tree produced by `ScalaParser.classParamClauses`.
	 * @param ctx the parse tree
	 */
	exitClassParamClauses?: (ctx: ClassParamClausesContext) => void;

	/**
	 * Enter a parse tree produced by `ScalaParser.classParamClause`.
	 * @param ctx the parse tree
	 */
	enterClassParamClause?: (ctx: ClassParamClauseContext) => void;
	/**
	 * Exit a parse tree produced by `ScalaParser.classParamClause`.
	 * @param ctx the parse tree
	 */
	exitClassParamClause?: (ctx: ClassParamClauseContext) => void;

	/**
	 * Enter a parse tree produced by `ScalaParser.classParams`.
	 * @param ctx the parse tree
	 */
	enterClassParams?: (ctx: ClassParamsContext) => void;
	/**
	 * Exit a parse tree produced by `ScalaParser.classParams`.
	 * @param ctx the parse tree
	 */
	exitClassParams?: (ctx: ClassParamsContext) => void;

	/**
	 * Enter a parse tree produced by `ScalaParser.classParam`.
	 * @param ctx the parse tree
	 */
	enterClassParam?: (ctx: ClassParamContext) => void;
	/**
	 * Exit a parse tree produced by `ScalaParser.classParam`.
	 * @param ctx the parse tree
	 */
	exitClassParam?: (ctx: ClassParamContext) => void;

	/**
	 * Enter a parse tree produced by `ScalaParser.bindings`.
	 * @param ctx the parse tree
	 */
	enterBindings?: (ctx: BindingsContext) => void;
	/**
	 * Exit a parse tree produced by `ScalaParser.bindings`.
	 * @param ctx the parse tree
	 */
	exitBindings?: (ctx: BindingsContext) => void;

	/**
	 * Enter a parse tree produced by `ScalaParser.binding`.
	 * @param ctx the parse tree
	 */
	enterBinding?: (ctx: BindingContext) => void;
	/**
	 * Exit a parse tree produced by `ScalaParser.binding`.
	 * @param ctx the parse tree
	 */
	exitBinding?: (ctx: BindingContext) => void;

	/**
	 * Enter a parse tree produced by `ScalaParser.modifier`.
	 * @param ctx the parse tree
	 */
	enterModifier?: (ctx: ModifierContext) => void;
	/**
	 * Exit a parse tree produced by `ScalaParser.modifier`.
	 * @param ctx the parse tree
	 */
	exitModifier?: (ctx: ModifierContext) => void;

	/**
	 * Enter a parse tree produced by `ScalaParser.localModifier`.
	 * @param ctx the parse tree
	 */
	enterLocalModifier?: (ctx: LocalModifierContext) => void;
	/**
	 * Exit a parse tree produced by `ScalaParser.localModifier`.
	 * @param ctx the parse tree
	 */
	exitLocalModifier?: (ctx: LocalModifierContext) => void;

	/**
	 * Enter a parse tree produced by `ScalaParser.accessModifier`.
	 * @param ctx the parse tree
	 */
	enterAccessModifier?: (ctx: AccessModifierContext) => void;
	/**
	 * Exit a parse tree produced by `ScalaParser.accessModifier`.
	 * @param ctx the parse tree
	 */
	exitAccessModifier?: (ctx: AccessModifierContext) => void;

	/**
	 * Enter a parse tree produced by `ScalaParser.accessQualifier`.
	 * @param ctx the parse tree
	 */
	enterAccessQualifier?: (ctx: AccessQualifierContext) => void;
	/**
	 * Exit a parse tree produced by `ScalaParser.accessQualifier`.
	 * @param ctx the parse tree
	 */
	exitAccessQualifier?: (ctx: AccessQualifierContext) => void;

	/**
	 * Enter a parse tree produced by `ScalaParser.annotation`.
	 * @param ctx the parse tree
	 */
	enterAnnotation?: (ctx: AnnotationContext) => void;
	/**
	 * Exit a parse tree produced by `ScalaParser.annotation`.
	 * @param ctx the parse tree
	 */
	exitAnnotation?: (ctx: AnnotationContext) => void;

	/**
	 * Enter a parse tree produced by `ScalaParser.constrAnnotation`.
	 * @param ctx the parse tree
	 */
	enterConstrAnnotation?: (ctx: ConstrAnnotationContext) => void;
	/**
	 * Exit a parse tree produced by `ScalaParser.constrAnnotation`.
	 * @param ctx the parse tree
	 */
	exitConstrAnnotation?: (ctx: ConstrAnnotationContext) => void;

	/**
	 * Enter a parse tree produced by `ScalaParser.templateBody`.
	 * @param ctx the parse tree
	 */
	enterTemplateBody?: (ctx: TemplateBodyContext) => void;
	/**
	 * Exit a parse tree produced by `ScalaParser.templateBody`.
	 * @param ctx the parse tree
	 */
	exitTemplateBody?: (ctx: TemplateBodyContext) => void;

	/**
	 * Enter a parse tree produced by `ScalaParser.templateStat`.
	 * @param ctx the parse tree
	 */
	enterTemplateStat?: (ctx: TemplateStatContext) => void;
	/**
	 * Exit a parse tree produced by `ScalaParser.templateStat`.
	 * @param ctx the parse tree
	 */
	exitTemplateStat?: (ctx: TemplateStatContext) => void;

	/**
	 * Enter a parse tree produced by `ScalaParser.selfType`.
	 * @param ctx the parse tree
	 */
	enterSelfType?: (ctx: SelfTypeContext) => void;
	/**
	 * Exit a parse tree produced by `ScalaParser.selfType`.
	 * @param ctx the parse tree
	 */
	exitSelfType?: (ctx: SelfTypeContext) => void;

	/**
	 * Enter a parse tree produced by `ScalaParser.import_`.
	 * @param ctx the parse tree
	 */
	enterImport_?: (ctx: Import_Context) => void;
	/**
	 * Exit a parse tree produced by `ScalaParser.import_`.
	 * @param ctx the parse tree
	 */
	exitImport_?: (ctx: Import_Context) => void;

	/**
	 * Enter a parse tree produced by `ScalaParser.importExpr`.
	 * @param ctx the parse tree
	 */
	enterImportExpr?: (ctx: ImportExprContext) => void;
	/**
	 * Exit a parse tree produced by `ScalaParser.importExpr`.
	 * @param ctx the parse tree
	 */
	exitImportExpr?: (ctx: ImportExprContext) => void;

	/**
	 * Enter a parse tree produced by `ScalaParser.importSelectors`.
	 * @param ctx the parse tree
	 */
	enterImportSelectors?: (ctx: ImportSelectorsContext) => void;
	/**
	 * Exit a parse tree produced by `ScalaParser.importSelectors`.
	 * @param ctx the parse tree
	 */
	exitImportSelectors?: (ctx: ImportSelectorsContext) => void;

	/**
	 * Enter a parse tree produced by `ScalaParser.importSelector`.
	 * @param ctx the parse tree
	 */
	enterImportSelector?: (ctx: ImportSelectorContext) => void;
	/**
	 * Exit a parse tree produced by `ScalaParser.importSelector`.
	 * @param ctx the parse tree
	 */
	exitImportSelector?: (ctx: ImportSelectorContext) => void;

	/**
	 * Enter a parse tree produced by `ScalaParser.dcl`.
	 * @param ctx the parse tree
	 */
	enterDcl?: (ctx: DclContext) => void;
	/**
	 * Exit a parse tree produced by `ScalaParser.dcl`.
	 * @param ctx the parse tree
	 */
	exitDcl?: (ctx: DclContext) => void;

	/**
	 * Enter a parse tree produced by `ScalaParser.valDcl`.
	 * @param ctx the parse tree
	 */
	enterValDcl?: (ctx: ValDclContext) => void;
	/**
	 * Exit a parse tree produced by `ScalaParser.valDcl`.
	 * @param ctx the parse tree
	 */
	exitValDcl?: (ctx: ValDclContext) => void;

	/**
	 * Enter a parse tree produced by `ScalaParser.varDcl`.
	 * @param ctx the parse tree
	 */
	enterVarDcl?: (ctx: VarDclContext) => void;
	/**
	 * Exit a parse tree produced by `ScalaParser.varDcl`.
	 * @param ctx the parse tree
	 */
	exitVarDcl?: (ctx: VarDclContext) => void;

	/**
	 * Enter a parse tree produced by `ScalaParser.funDcl`.
	 * @param ctx the parse tree
	 */
	enterFunDcl?: (ctx: FunDclContext) => void;
	/**
	 * Exit a parse tree produced by `ScalaParser.funDcl`.
	 * @param ctx the parse tree
	 */
	exitFunDcl?: (ctx: FunDclContext) => void;

	/**
	 * Enter a parse tree produced by `ScalaParser.funSig`.
	 * @param ctx the parse tree
	 */
	enterFunSig?: (ctx: FunSigContext) => void;
	/**
	 * Exit a parse tree produced by `ScalaParser.funSig`.
	 * @param ctx the parse tree
	 */
	exitFunSig?: (ctx: FunSigContext) => void;

	/**
	 * Enter a parse tree produced by `ScalaParser.typeDcl`.
	 * @param ctx the parse tree
	 */
	enterTypeDcl?: (ctx: TypeDclContext) => void;
	/**
	 * Exit a parse tree produced by `ScalaParser.typeDcl`.
	 * @param ctx the parse tree
	 */
	exitTypeDcl?: (ctx: TypeDclContext) => void;

	/**
	 * Enter a parse tree produced by `ScalaParser.patVarDef`.
	 * @param ctx the parse tree
	 */
	enterPatVarDef?: (ctx: PatVarDefContext) => void;
	/**
	 * Exit a parse tree produced by `ScalaParser.patVarDef`.
	 * @param ctx the parse tree
	 */
	exitPatVarDef?: (ctx: PatVarDefContext) => void;

	/**
	 * Enter a parse tree produced by `ScalaParser.def`.
	 * @param ctx the parse tree
	 */
	enterDef?: (ctx: DefContext) => void;
	/**
	 * Exit a parse tree produced by `ScalaParser.def`.
	 * @param ctx the parse tree
	 */
	exitDef?: (ctx: DefContext) => void;

	/**
	 * Enter a parse tree produced by `ScalaParser.patDef`.
	 * @param ctx the parse tree
	 */
	enterPatDef?: (ctx: PatDefContext) => void;
	/**
	 * Exit a parse tree produced by `ScalaParser.patDef`.
	 * @param ctx the parse tree
	 */
	exitPatDef?: (ctx: PatDefContext) => void;

	/**
	 * Enter a parse tree produced by `ScalaParser.varDef`.
	 * @param ctx the parse tree
	 */
	enterVarDef?: (ctx: VarDefContext) => void;
	/**
	 * Exit a parse tree produced by `ScalaParser.varDef`.
	 * @param ctx the parse tree
	 */
	exitVarDef?: (ctx: VarDefContext) => void;

	/**
	 * Enter a parse tree produced by `ScalaParser.funDef`.
	 * @param ctx the parse tree
	 */
	enterFunDef?: (ctx: FunDefContext) => void;
	/**
	 * Exit a parse tree produced by `ScalaParser.funDef`.
	 * @param ctx the parse tree
	 */
	exitFunDef?: (ctx: FunDefContext) => void;

	/**
	 * Enter a parse tree produced by `ScalaParser.typeDef`.
	 * @param ctx the parse tree
	 */
	enterTypeDef?: (ctx: TypeDefContext) => void;
	/**
	 * Exit a parse tree produced by `ScalaParser.typeDef`.
	 * @param ctx the parse tree
	 */
	exitTypeDef?: (ctx: TypeDefContext) => void;

	/**
	 * Enter a parse tree produced by `ScalaParser.tmplDef`.
	 * @param ctx the parse tree
	 */
	enterTmplDef?: (ctx: TmplDefContext) => void;
	/**
	 * Exit a parse tree produced by `ScalaParser.tmplDef`.
	 * @param ctx the parse tree
	 */
	exitTmplDef?: (ctx: TmplDefContext) => void;

	/**
	 * Enter a parse tree produced by `ScalaParser.classDef`.
	 * @param ctx the parse tree
	 */
	enterClassDef?: (ctx: ClassDefContext) => void;
	/**
	 * Exit a parse tree produced by `ScalaParser.classDef`.
	 * @param ctx the parse tree
	 */
	exitClassDef?: (ctx: ClassDefContext) => void;

	/**
	 * Enter a parse tree produced by `ScalaParser.traitDef`.
	 * @param ctx the parse tree
	 */
	enterTraitDef?: (ctx: TraitDefContext) => void;
	/**
	 * Exit a parse tree produced by `ScalaParser.traitDef`.
	 * @param ctx the parse tree
	 */
	exitTraitDef?: (ctx: TraitDefContext) => void;

	/**
	 * Enter a parse tree produced by `ScalaParser.objectDef`.
	 * @param ctx the parse tree
	 */
	enterObjectDef?: (ctx: ObjectDefContext) => void;
	/**
	 * Exit a parse tree produced by `ScalaParser.objectDef`.
	 * @param ctx the parse tree
	 */
	exitObjectDef?: (ctx: ObjectDefContext) => void;

	/**
	 * Enter a parse tree produced by `ScalaParser.classTemplateOpt`.
	 * @param ctx the parse tree
	 */
	enterClassTemplateOpt?: (ctx: ClassTemplateOptContext) => void;
	/**
	 * Exit a parse tree produced by `ScalaParser.classTemplateOpt`.
	 * @param ctx the parse tree
	 */
	exitClassTemplateOpt?: (ctx: ClassTemplateOptContext) => void;

	/**
	 * Enter a parse tree produced by `ScalaParser.traitTemplateOpt`.
	 * @param ctx the parse tree
	 */
	enterTraitTemplateOpt?: (ctx: TraitTemplateOptContext) => void;
	/**
	 * Exit a parse tree produced by `ScalaParser.traitTemplateOpt`.
	 * @param ctx the parse tree
	 */
	exitTraitTemplateOpt?: (ctx: TraitTemplateOptContext) => void;

	/**
	 * Enter a parse tree produced by `ScalaParser.classTemplate`.
	 * @param ctx the parse tree
	 */
	enterClassTemplate?: (ctx: ClassTemplateContext) => void;
	/**
	 * Exit a parse tree produced by `ScalaParser.classTemplate`.
	 * @param ctx the parse tree
	 */
	exitClassTemplate?: (ctx: ClassTemplateContext) => void;

	/**
	 * Enter a parse tree produced by `ScalaParser.traitTemplate`.
	 * @param ctx the parse tree
	 */
	enterTraitTemplate?: (ctx: TraitTemplateContext) => void;
	/**
	 * Exit a parse tree produced by `ScalaParser.traitTemplate`.
	 * @param ctx the parse tree
	 */
	exitTraitTemplate?: (ctx: TraitTemplateContext) => void;

	/**
	 * Enter a parse tree produced by `ScalaParser.classParents`.
	 * @param ctx the parse tree
	 */
	enterClassParents?: (ctx: ClassParentsContext) => void;
	/**
	 * Exit a parse tree produced by `ScalaParser.classParents`.
	 * @param ctx the parse tree
	 */
	exitClassParents?: (ctx: ClassParentsContext) => void;

	/**
	 * Enter a parse tree produced by `ScalaParser.traitParents`.
	 * @param ctx the parse tree
	 */
	enterTraitParents?: (ctx: TraitParentsContext) => void;
	/**
	 * Exit a parse tree produced by `ScalaParser.traitParents`.
	 * @param ctx the parse tree
	 */
	exitTraitParents?: (ctx: TraitParentsContext) => void;

	/**
	 * Enter a parse tree produced by `ScalaParser.constr`.
	 * @param ctx the parse tree
	 */
	enterConstr?: (ctx: ConstrContext) => void;
	/**
	 * Exit a parse tree produced by `ScalaParser.constr`.
	 * @param ctx the parse tree
	 */
	exitConstr?: (ctx: ConstrContext) => void;

	/**
	 * Enter a parse tree produced by `ScalaParser.earlyDefs`.
	 * @param ctx the parse tree
	 */
	enterEarlyDefs?: (ctx: EarlyDefsContext) => void;
	/**
	 * Exit a parse tree produced by `ScalaParser.earlyDefs`.
	 * @param ctx the parse tree
	 */
	exitEarlyDefs?: (ctx: EarlyDefsContext) => void;

	/**
	 * Enter a parse tree produced by `ScalaParser.earlyDef`.
	 * @param ctx the parse tree
	 */
	enterEarlyDef?: (ctx: EarlyDefContext) => void;
	/**
	 * Exit a parse tree produced by `ScalaParser.earlyDef`.
	 * @param ctx the parse tree
	 */
	exitEarlyDef?: (ctx: EarlyDefContext) => void;

	/**
	 * Enter a parse tree produced by `ScalaParser.constrExpr`.
	 * @param ctx the parse tree
	 */
	enterConstrExpr?: (ctx: ConstrExprContext) => void;
	/**
	 * Exit a parse tree produced by `ScalaParser.constrExpr`.
	 * @param ctx the parse tree
	 */
	exitConstrExpr?: (ctx: ConstrExprContext) => void;

	/**
	 * Enter a parse tree produced by `ScalaParser.constrBlock`.
	 * @param ctx the parse tree
	 */
	enterConstrBlock?: (ctx: ConstrBlockContext) => void;
	/**
	 * Exit a parse tree produced by `ScalaParser.constrBlock`.
	 * @param ctx the parse tree
	 */
	exitConstrBlock?: (ctx: ConstrBlockContext) => void;

	/**
	 * Enter a parse tree produced by `ScalaParser.selfInvocation`.
	 * @param ctx the parse tree
	 */
	enterSelfInvocation?: (ctx: SelfInvocationContext) => void;
	/**
	 * Exit a parse tree produced by `ScalaParser.selfInvocation`.
	 * @param ctx the parse tree
	 */
	exitSelfInvocation?: (ctx: SelfInvocationContext) => void;

	/**
	 * Enter a parse tree produced by `ScalaParser.topStatSeq`.
	 * @param ctx the parse tree
	 */
	enterTopStatSeq?: (ctx: TopStatSeqContext) => void;
	/**
	 * Exit a parse tree produced by `ScalaParser.topStatSeq`.
	 * @param ctx the parse tree
	 */
	exitTopStatSeq?: (ctx: TopStatSeqContext) => void;

	/**
	 * Enter a parse tree produced by `ScalaParser.topStat`.
	 * @param ctx the parse tree
	 */
	enterTopStat?: (ctx: TopStatContext) => void;
	/**
	 * Exit a parse tree produced by `ScalaParser.topStat`.
	 * @param ctx the parse tree
	 */
	exitTopStat?: (ctx: TopStatContext) => void;

	/**
	 * Enter a parse tree produced by `ScalaParser.packaging`.
	 * @param ctx the parse tree
	 */
	enterPackaging?: (ctx: PackagingContext) => void;
	/**
	 * Exit a parse tree produced by `ScalaParser.packaging`.
	 * @param ctx the parse tree
	 */
	exitPackaging?: (ctx: PackagingContext) => void;

	/**
	 * Enter a parse tree produced by `ScalaParser.packageObject`.
	 * @param ctx the parse tree
	 */
	enterPackageObject?: (ctx: PackageObjectContext) => void;
	/**
	 * Exit a parse tree produced by `ScalaParser.packageObject`.
	 * @param ctx the parse tree
	 */
	exitPackageObject?: (ctx: PackageObjectContext) => void;

	/**
	 * Enter a parse tree produced by `ScalaParser.compilationUnit`.
	 * @param ctx the parse tree
	 */
	enterCompilationUnit?: (ctx: CompilationUnitContext) => void;
	/**
	 * Exit a parse tree produced by `ScalaParser.compilationUnit`.
	 * @param ctx the parse tree
	 */
	exitCompilationUnit?: (ctx: CompilationUnitContext) => void;
}

