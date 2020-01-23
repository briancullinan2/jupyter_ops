// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/clu/clu.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { ModuleContext } from "./cluParser";
import { ProcedureContext } from "./cluParser";
import { IteratorContext } from "./cluParser";
import { ClusterContext } from "./cluParser";
import { ParmsContext } from "./cluParser";
import { ParamContext } from "./cluParser";
import { ArgsContext } from "./cluParser";
import { Decl_listContext } from "./cluParser";
import { DeclContext } from "./cluParser";
import { ReturnzContext } from "./cluParser";
import { YieldsContext } from "./cluParser";
import { SignalsContext } from "./cluParser";
import { ExceptionContext } from "./cluParser";
import { Type_spec_listContext } from "./cluParser";
import { WhereContext } from "./cluParser";
import { RestrictionContext } from "./cluParser";
import { Type_setContext } from "./cluParser";
import { Oper_decl_listContext } from "./cluParser";
import { Oper_declContext } from "./cluParser";
import { Op_name_listContext } from "./cluParser";
import { Op_nameContext } from "./cluParser";
import { Constant_listContext } from "./cluParser";
import { ConstantContext } from "./cluParser";
import { Routine_bodyContext } from "./cluParser";
import { Cluster_bodyContext } from "./cluParser";
import { RoutineContext } from "./cluParser";
import { EquateContext } from "./cluParser";
import { Own_varContext } from "./cluParser";
import { Type_specContext } from "./cluParser";
import { Field_spec_listContext } from "./cluParser";
import { Field_specContext } from "./cluParser";
import { StatementContext } from "./cluParser";
import { Tag_armContext } from "./cluParser";
import { When_handlerContext } from "./cluParser";
import { Others_handlerContext } from "./cluParser";
import { BodyContext } from "./cluParser";
import { Expression_listContext } from "./cluParser";
import { ExpressionContext } from "./cluParser";
import { PrimaryContext } from "./cluParser";
import { InvocationContext } from "./cluParser";
import { Field_listContext } from "./cluParser";
import { FieldContext } from "./cluParser";
import { Idn_listContext } from "./cluParser";
import { IdnContext } from "./cluParser";
import { Name_listContext } from "./cluParser";
import { NameContext } from "./cluParser";
import { Int_literalContext } from "./cluParser";
import { Real_literalContext } from "./cluParser";
import { String_literalContext } from "./cluParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `cluParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface cluVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `cluParser.module`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitModule?: (ctx: ModuleContext) => Result;

	/**
	 * Visit a parse tree produced by `cluParser.procedure`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProcedure?: (ctx: ProcedureContext) => Result;

	/**
	 * Visit a parse tree produced by `cluParser.iterator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIterator?: (ctx: IteratorContext) => Result;

	/**
	 * Visit a parse tree produced by `cluParser.cluster`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCluster?: (ctx: ClusterContext) => Result;

	/**
	 * Visit a parse tree produced by `cluParser.parms`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParms?: (ctx: ParmsContext) => Result;

	/**
	 * Visit a parse tree produced by `cluParser.param`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParam?: (ctx: ParamContext) => Result;

	/**
	 * Visit a parse tree produced by `cluParser.args`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArgs?: (ctx: ArgsContext) => Result;

	/**
	 * Visit a parse tree produced by `cluParser.decl_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDecl_list?: (ctx: Decl_listContext) => Result;

	/**
	 * Visit a parse tree produced by `cluParser.decl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDecl?: (ctx: DeclContext) => Result;

	/**
	 * Visit a parse tree produced by `cluParser.returnz`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReturnz?: (ctx: ReturnzContext) => Result;

	/**
	 * Visit a parse tree produced by `cluParser.yields`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitYields?: (ctx: YieldsContext) => Result;

	/**
	 * Visit a parse tree produced by `cluParser.signals`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSignals?: (ctx: SignalsContext) => Result;

	/**
	 * Visit a parse tree produced by `cluParser.exception`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitException?: (ctx: ExceptionContext) => Result;

	/**
	 * Visit a parse tree produced by `cluParser.type_spec_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitType_spec_list?: (ctx: Type_spec_listContext) => Result;

	/**
	 * Visit a parse tree produced by `cluParser.where`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhere?: (ctx: WhereContext) => Result;

	/**
	 * Visit a parse tree produced by `cluParser.restriction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRestriction?: (ctx: RestrictionContext) => Result;

	/**
	 * Visit a parse tree produced by `cluParser.type_set`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitType_set?: (ctx: Type_setContext) => Result;

	/**
	 * Visit a parse tree produced by `cluParser.oper_decl_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOper_decl_list?: (ctx: Oper_decl_listContext) => Result;

	/**
	 * Visit a parse tree produced by `cluParser.oper_decl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOper_decl?: (ctx: Oper_declContext) => Result;

	/**
	 * Visit a parse tree produced by `cluParser.op_name_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOp_name_list?: (ctx: Op_name_listContext) => Result;

	/**
	 * Visit a parse tree produced by `cluParser.op_name`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOp_name?: (ctx: Op_nameContext) => Result;

	/**
	 * Visit a parse tree produced by `cluParser.constant_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstant_list?: (ctx: Constant_listContext) => Result;

	/**
	 * Visit a parse tree produced by `cluParser.constant`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstant?: (ctx: ConstantContext) => Result;

	/**
	 * Visit a parse tree produced by `cluParser.routine_body`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRoutine_body?: (ctx: Routine_bodyContext) => Result;

	/**
	 * Visit a parse tree produced by `cluParser.cluster_body`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCluster_body?: (ctx: Cluster_bodyContext) => Result;

	/**
	 * Visit a parse tree produced by `cluParser.routine`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRoutine?: (ctx: RoutineContext) => Result;

	/**
	 * Visit a parse tree produced by `cluParser.equate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEquate?: (ctx: EquateContext) => Result;

	/**
	 * Visit a parse tree produced by `cluParser.own_var`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOwn_var?: (ctx: Own_varContext) => Result;

	/**
	 * Visit a parse tree produced by `cluParser.type_spec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitType_spec?: (ctx: Type_specContext) => Result;

	/**
	 * Visit a parse tree produced by `cluParser.field_spec_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitField_spec_list?: (ctx: Field_spec_listContext) => Result;

	/**
	 * Visit a parse tree produced by `cluParser.field_spec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitField_spec?: (ctx: Field_specContext) => Result;

	/**
	 * Visit a parse tree produced by `cluParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;

	/**
	 * Visit a parse tree produced by `cluParser.tag_arm`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTag_arm?: (ctx: Tag_armContext) => Result;

	/**
	 * Visit a parse tree produced by `cluParser.when_handler`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhen_handler?: (ctx: When_handlerContext) => Result;

	/**
	 * Visit a parse tree produced by `cluParser.others_handler`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOthers_handler?: (ctx: Others_handlerContext) => Result;

	/**
	 * Visit a parse tree produced by `cluParser.body`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBody?: (ctx: BodyContext) => Result;

	/**
	 * Visit a parse tree produced by `cluParser.expression_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression_list?: (ctx: Expression_listContext) => Result;

	/**
	 * Visit a parse tree produced by `cluParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `cluParser.primary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrimary?: (ctx: PrimaryContext) => Result;

	/**
	 * Visit a parse tree produced by `cluParser.invocation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInvocation?: (ctx: InvocationContext) => Result;

	/**
	 * Visit a parse tree produced by `cluParser.field_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitField_list?: (ctx: Field_listContext) => Result;

	/**
	 * Visit a parse tree produced by `cluParser.field`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitField?: (ctx: FieldContext) => Result;

	/**
	 * Visit a parse tree produced by `cluParser.idn_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdn_list?: (ctx: Idn_listContext) => Result;

	/**
	 * Visit a parse tree produced by `cluParser.idn`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdn?: (ctx: IdnContext) => Result;

	/**
	 * Visit a parse tree produced by `cluParser.name_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitName_list?: (ctx: Name_listContext) => Result;

	/**
	 * Visit a parse tree produced by `cluParser.name`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitName?: (ctx: NameContext) => Result;

	/**
	 * Visit a parse tree produced by `cluParser.int_literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInt_literal?: (ctx: Int_literalContext) => Result;

	/**
	 * Visit a parse tree produced by `cluParser.real_literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReal_literal?: (ctx: Real_literalContext) => Result;

	/**
	 * Visit a parse tree produced by `cluParser.string_literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitString_literal?: (ctx: String_literalContext) => Result;
}

