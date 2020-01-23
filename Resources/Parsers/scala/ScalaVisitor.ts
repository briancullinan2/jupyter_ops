// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/scala/Scala.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `ScalaParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface ScalaVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `ScalaParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiteral?: (ctx: LiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `ScalaParser.qualId`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQualId?: (ctx: QualIdContext) => Result;

	/**
	 * Visit a parse tree produced by `ScalaParser.ids`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIds?: (ctx: IdsContext) => Result;

	/**
	 * Visit a parse tree produced by `ScalaParser.stableId`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStableId?: (ctx: StableIdContext) => Result;

	/**
	 * Visit a parse tree produced by `ScalaParser.classQualifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassQualifier?: (ctx: ClassQualifierContext) => Result;

	/**
	 * Visit a parse tree produced by `ScalaParser.type_`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitType_?: (ctx: Type_Context) => Result;

	/**
	 * Visit a parse tree produced by `ScalaParser.functionArgTypes`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionArgTypes?: (ctx: FunctionArgTypesContext) => Result;

	/**
	 * Visit a parse tree produced by `ScalaParser.existentialClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExistentialClause?: (ctx: ExistentialClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `ScalaParser.existentialDcl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExistentialDcl?: (ctx: ExistentialDclContext) => Result;

	/**
	 * Visit a parse tree produced by `ScalaParser.infixType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInfixType?: (ctx: InfixTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `ScalaParser.compoundType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCompoundType?: (ctx: CompoundTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `ScalaParser.annotType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnnotType?: (ctx: AnnotTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `ScalaParser.simpleType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSimpleType?: (ctx: SimpleTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `ScalaParser.typeArgs`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeArgs?: (ctx: TypeArgsContext) => Result;

	/**
	 * Visit a parse tree produced by `ScalaParser.types`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypes?: (ctx: TypesContext) => Result;

	/**
	 * Visit a parse tree produced by `ScalaParser.refinement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRefinement?: (ctx: RefinementContext) => Result;

	/**
	 * Visit a parse tree produced by `ScalaParser.refineStat`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRefineStat?: (ctx: RefineStatContext) => Result;

	/**
	 * Visit a parse tree produced by `ScalaParser.typePat`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypePat?: (ctx: TypePatContext) => Result;

	/**
	 * Visit a parse tree produced by `ScalaParser.ascription`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAscription?: (ctx: AscriptionContext) => Result;

	/**
	 * Visit a parse tree produced by `ScalaParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpr?: (ctx: ExprContext) => Result;

	/**
	 * Visit a parse tree produced by `ScalaParser.expr1`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpr1?: (ctx: Expr1Context) => Result;

	/**
	 * Visit a parse tree produced by `ScalaParser.postfixExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPostfixExpr?: (ctx: PostfixExprContext) => Result;

	/**
	 * Visit a parse tree produced by `ScalaParser.infixExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInfixExpr?: (ctx: InfixExprContext) => Result;

	/**
	 * Visit a parse tree produced by `ScalaParser.prefixExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrefixExpr?: (ctx: PrefixExprContext) => Result;

	/**
	 * Visit a parse tree produced by `ScalaParser.simpleExpr1`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSimpleExpr1?: (ctx: SimpleExpr1Context) => Result;

	/**
	 * Visit a parse tree produced by `ScalaParser.exprs`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExprs?: (ctx: ExprsContext) => Result;

	/**
	 * Visit a parse tree produced by `ScalaParser.argumentExprs`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArgumentExprs?: (ctx: ArgumentExprsContext) => Result;

	/**
	 * Visit a parse tree produced by `ScalaParser.blockExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlockExpr?: (ctx: BlockExprContext) => Result;

	/**
	 * Visit a parse tree produced by `ScalaParser.block`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlock?: (ctx: BlockContext) => Result;

	/**
	 * Visit a parse tree produced by `ScalaParser.blockStat`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlockStat?: (ctx: BlockStatContext) => Result;

	/**
	 * Visit a parse tree produced by `ScalaParser.resultExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitResultExpr?: (ctx: ResultExprContext) => Result;

	/**
	 * Visit a parse tree produced by `ScalaParser.enumerators`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumerators?: (ctx: EnumeratorsContext) => Result;

	/**
	 * Visit a parse tree produced by `ScalaParser.generator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGenerator?: (ctx: GeneratorContext) => Result;

	/**
	 * Visit a parse tree produced by `ScalaParser.caseClauses`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCaseClauses?: (ctx: CaseClausesContext) => Result;

	/**
	 * Visit a parse tree produced by `ScalaParser.caseClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCaseClause?: (ctx: CaseClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `ScalaParser.guard`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGuard?: (ctx: GuardContext) => Result;

	/**
	 * Visit a parse tree produced by `ScalaParser.pattern`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPattern?: (ctx: PatternContext) => Result;

	/**
	 * Visit a parse tree produced by `ScalaParser.pattern1`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPattern1?: (ctx: Pattern1Context) => Result;

	/**
	 * Visit a parse tree produced by `ScalaParser.pattern2`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPattern2?: (ctx: Pattern2Context) => Result;

	/**
	 * Visit a parse tree produced by `ScalaParser.pattern3`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPattern3?: (ctx: Pattern3Context) => Result;

	/**
	 * Visit a parse tree produced by `ScalaParser.simplePattern`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSimplePattern?: (ctx: SimplePatternContext) => Result;

	/**
	 * Visit a parse tree produced by `ScalaParser.patterns`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPatterns?: (ctx: PatternsContext) => Result;

	/**
	 * Visit a parse tree produced by `ScalaParser.typeParamClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeParamClause?: (ctx: TypeParamClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `ScalaParser.funTypeParamClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunTypeParamClause?: (ctx: FunTypeParamClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `ScalaParser.variantTypeParam`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariantTypeParam?: (ctx: VariantTypeParamContext) => Result;

	/**
	 * Visit a parse tree produced by `ScalaParser.typeParam`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeParam?: (ctx: TypeParamContext) => Result;

	/**
	 * Visit a parse tree produced by `ScalaParser.paramClauses`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParamClauses?: (ctx: ParamClausesContext) => Result;

	/**
	 * Visit a parse tree produced by `ScalaParser.paramClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParamClause?: (ctx: ParamClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `ScalaParser.params`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParams?: (ctx: ParamsContext) => Result;

	/**
	 * Visit a parse tree produced by `ScalaParser.param`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParam?: (ctx: ParamContext) => Result;

	/**
	 * Visit a parse tree produced by `ScalaParser.paramType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParamType?: (ctx: ParamTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `ScalaParser.classParamClauses`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassParamClauses?: (ctx: ClassParamClausesContext) => Result;

	/**
	 * Visit a parse tree produced by `ScalaParser.classParamClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassParamClause?: (ctx: ClassParamClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `ScalaParser.classParams`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassParams?: (ctx: ClassParamsContext) => Result;

	/**
	 * Visit a parse tree produced by `ScalaParser.classParam`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassParam?: (ctx: ClassParamContext) => Result;

	/**
	 * Visit a parse tree produced by `ScalaParser.bindings`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBindings?: (ctx: BindingsContext) => Result;

	/**
	 * Visit a parse tree produced by `ScalaParser.binding`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBinding?: (ctx: BindingContext) => Result;

	/**
	 * Visit a parse tree produced by `ScalaParser.modifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitModifier?: (ctx: ModifierContext) => Result;

	/**
	 * Visit a parse tree produced by `ScalaParser.localModifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLocalModifier?: (ctx: LocalModifierContext) => Result;

	/**
	 * Visit a parse tree produced by `ScalaParser.accessModifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAccessModifier?: (ctx: AccessModifierContext) => Result;

	/**
	 * Visit a parse tree produced by `ScalaParser.accessQualifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAccessQualifier?: (ctx: AccessQualifierContext) => Result;

	/**
	 * Visit a parse tree produced by `ScalaParser.annotation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnnotation?: (ctx: AnnotationContext) => Result;

	/**
	 * Visit a parse tree produced by `ScalaParser.constrAnnotation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstrAnnotation?: (ctx: ConstrAnnotationContext) => Result;

	/**
	 * Visit a parse tree produced by `ScalaParser.templateBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTemplateBody?: (ctx: TemplateBodyContext) => Result;

	/**
	 * Visit a parse tree produced by `ScalaParser.templateStat`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTemplateStat?: (ctx: TemplateStatContext) => Result;

	/**
	 * Visit a parse tree produced by `ScalaParser.selfType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelfType?: (ctx: SelfTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `ScalaParser.import_`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImport_?: (ctx: Import_Context) => Result;

	/**
	 * Visit a parse tree produced by `ScalaParser.importExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImportExpr?: (ctx: ImportExprContext) => Result;

	/**
	 * Visit a parse tree produced by `ScalaParser.importSelectors`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImportSelectors?: (ctx: ImportSelectorsContext) => Result;

	/**
	 * Visit a parse tree produced by `ScalaParser.importSelector`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImportSelector?: (ctx: ImportSelectorContext) => Result;

	/**
	 * Visit a parse tree produced by `ScalaParser.dcl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDcl?: (ctx: DclContext) => Result;

	/**
	 * Visit a parse tree produced by `ScalaParser.valDcl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValDcl?: (ctx: ValDclContext) => Result;

	/**
	 * Visit a parse tree produced by `ScalaParser.varDcl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVarDcl?: (ctx: VarDclContext) => Result;

	/**
	 * Visit a parse tree produced by `ScalaParser.funDcl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunDcl?: (ctx: FunDclContext) => Result;

	/**
	 * Visit a parse tree produced by `ScalaParser.funSig`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunSig?: (ctx: FunSigContext) => Result;

	/**
	 * Visit a parse tree produced by `ScalaParser.typeDcl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeDcl?: (ctx: TypeDclContext) => Result;

	/**
	 * Visit a parse tree produced by `ScalaParser.patVarDef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPatVarDef?: (ctx: PatVarDefContext) => Result;

	/**
	 * Visit a parse tree produced by `ScalaParser.def`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDef?: (ctx: DefContext) => Result;

	/**
	 * Visit a parse tree produced by `ScalaParser.patDef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPatDef?: (ctx: PatDefContext) => Result;

	/**
	 * Visit a parse tree produced by `ScalaParser.varDef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVarDef?: (ctx: VarDefContext) => Result;

	/**
	 * Visit a parse tree produced by `ScalaParser.funDef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunDef?: (ctx: FunDefContext) => Result;

	/**
	 * Visit a parse tree produced by `ScalaParser.typeDef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeDef?: (ctx: TypeDefContext) => Result;

	/**
	 * Visit a parse tree produced by `ScalaParser.tmplDef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTmplDef?: (ctx: TmplDefContext) => Result;

	/**
	 * Visit a parse tree produced by `ScalaParser.classDef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassDef?: (ctx: ClassDefContext) => Result;

	/**
	 * Visit a parse tree produced by `ScalaParser.traitDef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTraitDef?: (ctx: TraitDefContext) => Result;

	/**
	 * Visit a parse tree produced by `ScalaParser.objectDef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitObjectDef?: (ctx: ObjectDefContext) => Result;

	/**
	 * Visit a parse tree produced by `ScalaParser.classTemplateOpt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassTemplateOpt?: (ctx: ClassTemplateOptContext) => Result;

	/**
	 * Visit a parse tree produced by `ScalaParser.traitTemplateOpt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTraitTemplateOpt?: (ctx: TraitTemplateOptContext) => Result;

	/**
	 * Visit a parse tree produced by `ScalaParser.classTemplate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassTemplate?: (ctx: ClassTemplateContext) => Result;

	/**
	 * Visit a parse tree produced by `ScalaParser.traitTemplate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTraitTemplate?: (ctx: TraitTemplateContext) => Result;

	/**
	 * Visit a parse tree produced by `ScalaParser.classParents`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassParents?: (ctx: ClassParentsContext) => Result;

	/**
	 * Visit a parse tree produced by `ScalaParser.traitParents`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTraitParents?: (ctx: TraitParentsContext) => Result;

	/**
	 * Visit a parse tree produced by `ScalaParser.constr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstr?: (ctx: ConstrContext) => Result;

	/**
	 * Visit a parse tree produced by `ScalaParser.earlyDefs`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEarlyDefs?: (ctx: EarlyDefsContext) => Result;

	/**
	 * Visit a parse tree produced by `ScalaParser.earlyDef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEarlyDef?: (ctx: EarlyDefContext) => Result;

	/**
	 * Visit a parse tree produced by `ScalaParser.constrExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstrExpr?: (ctx: ConstrExprContext) => Result;

	/**
	 * Visit a parse tree produced by `ScalaParser.constrBlock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstrBlock?: (ctx: ConstrBlockContext) => Result;

	/**
	 * Visit a parse tree produced by `ScalaParser.selfInvocation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelfInvocation?: (ctx: SelfInvocationContext) => Result;

	/**
	 * Visit a parse tree produced by `ScalaParser.topStatSeq`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTopStatSeq?: (ctx: TopStatSeqContext) => Result;

	/**
	 * Visit a parse tree produced by `ScalaParser.topStat`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTopStat?: (ctx: TopStatContext) => Result;

	/**
	 * Visit a parse tree produced by `ScalaParser.packaging`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPackaging?: (ctx: PackagingContext) => Result;

	/**
	 * Visit a parse tree produced by `ScalaParser.packageObject`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPackageObject?: (ctx: PackageObjectContext) => Result;

	/**
	 * Visit a parse tree produced by `ScalaParser.compilationUnit`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCompilationUnit?: (ctx: CompilationUnitContext) => Result;
}

