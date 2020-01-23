// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/clu/clu.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

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
 * This interface defines a complete listener for a parse tree produced by
 * `cluParser`.
 */
export interface cluListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `cluParser.module`.
	 * @param ctx the parse tree
	 */
	enterModule?: (ctx: ModuleContext) => void;
	/**
	 * Exit a parse tree produced by `cluParser.module`.
	 * @param ctx the parse tree
	 */
	exitModule?: (ctx: ModuleContext) => void;

	/**
	 * Enter a parse tree produced by `cluParser.procedure`.
	 * @param ctx the parse tree
	 */
	enterProcedure?: (ctx: ProcedureContext) => void;
	/**
	 * Exit a parse tree produced by `cluParser.procedure`.
	 * @param ctx the parse tree
	 */
	exitProcedure?: (ctx: ProcedureContext) => void;

	/**
	 * Enter a parse tree produced by `cluParser.iterator`.
	 * @param ctx the parse tree
	 */
	enterIterator?: (ctx: IteratorContext) => void;
	/**
	 * Exit a parse tree produced by `cluParser.iterator`.
	 * @param ctx the parse tree
	 */
	exitIterator?: (ctx: IteratorContext) => void;

	/**
	 * Enter a parse tree produced by `cluParser.cluster`.
	 * @param ctx the parse tree
	 */
	enterCluster?: (ctx: ClusterContext) => void;
	/**
	 * Exit a parse tree produced by `cluParser.cluster`.
	 * @param ctx the parse tree
	 */
	exitCluster?: (ctx: ClusterContext) => void;

	/**
	 * Enter a parse tree produced by `cluParser.parms`.
	 * @param ctx the parse tree
	 */
	enterParms?: (ctx: ParmsContext) => void;
	/**
	 * Exit a parse tree produced by `cluParser.parms`.
	 * @param ctx the parse tree
	 */
	exitParms?: (ctx: ParmsContext) => void;

	/**
	 * Enter a parse tree produced by `cluParser.param`.
	 * @param ctx the parse tree
	 */
	enterParam?: (ctx: ParamContext) => void;
	/**
	 * Exit a parse tree produced by `cluParser.param`.
	 * @param ctx the parse tree
	 */
	exitParam?: (ctx: ParamContext) => void;

	/**
	 * Enter a parse tree produced by `cluParser.args`.
	 * @param ctx the parse tree
	 */
	enterArgs?: (ctx: ArgsContext) => void;
	/**
	 * Exit a parse tree produced by `cluParser.args`.
	 * @param ctx the parse tree
	 */
	exitArgs?: (ctx: ArgsContext) => void;

	/**
	 * Enter a parse tree produced by `cluParser.decl_list`.
	 * @param ctx the parse tree
	 */
	enterDecl_list?: (ctx: Decl_listContext) => void;
	/**
	 * Exit a parse tree produced by `cluParser.decl_list`.
	 * @param ctx the parse tree
	 */
	exitDecl_list?: (ctx: Decl_listContext) => void;

	/**
	 * Enter a parse tree produced by `cluParser.decl`.
	 * @param ctx the parse tree
	 */
	enterDecl?: (ctx: DeclContext) => void;
	/**
	 * Exit a parse tree produced by `cluParser.decl`.
	 * @param ctx the parse tree
	 */
	exitDecl?: (ctx: DeclContext) => void;

	/**
	 * Enter a parse tree produced by `cluParser.returnz`.
	 * @param ctx the parse tree
	 */
	enterReturnz?: (ctx: ReturnzContext) => void;
	/**
	 * Exit a parse tree produced by `cluParser.returnz`.
	 * @param ctx the parse tree
	 */
	exitReturnz?: (ctx: ReturnzContext) => void;

	/**
	 * Enter a parse tree produced by `cluParser.yields`.
	 * @param ctx the parse tree
	 */
	enterYields?: (ctx: YieldsContext) => void;
	/**
	 * Exit a parse tree produced by `cluParser.yields`.
	 * @param ctx the parse tree
	 */
	exitYields?: (ctx: YieldsContext) => void;

	/**
	 * Enter a parse tree produced by `cluParser.signals`.
	 * @param ctx the parse tree
	 */
	enterSignals?: (ctx: SignalsContext) => void;
	/**
	 * Exit a parse tree produced by `cluParser.signals`.
	 * @param ctx the parse tree
	 */
	exitSignals?: (ctx: SignalsContext) => void;

	/**
	 * Enter a parse tree produced by `cluParser.exception`.
	 * @param ctx the parse tree
	 */
	enterException?: (ctx: ExceptionContext) => void;
	/**
	 * Exit a parse tree produced by `cluParser.exception`.
	 * @param ctx the parse tree
	 */
	exitException?: (ctx: ExceptionContext) => void;

	/**
	 * Enter a parse tree produced by `cluParser.type_spec_list`.
	 * @param ctx the parse tree
	 */
	enterType_spec_list?: (ctx: Type_spec_listContext) => void;
	/**
	 * Exit a parse tree produced by `cluParser.type_spec_list`.
	 * @param ctx the parse tree
	 */
	exitType_spec_list?: (ctx: Type_spec_listContext) => void;

	/**
	 * Enter a parse tree produced by `cluParser.where`.
	 * @param ctx the parse tree
	 */
	enterWhere?: (ctx: WhereContext) => void;
	/**
	 * Exit a parse tree produced by `cluParser.where`.
	 * @param ctx the parse tree
	 */
	exitWhere?: (ctx: WhereContext) => void;

	/**
	 * Enter a parse tree produced by `cluParser.restriction`.
	 * @param ctx the parse tree
	 */
	enterRestriction?: (ctx: RestrictionContext) => void;
	/**
	 * Exit a parse tree produced by `cluParser.restriction`.
	 * @param ctx the parse tree
	 */
	exitRestriction?: (ctx: RestrictionContext) => void;

	/**
	 * Enter a parse tree produced by `cluParser.type_set`.
	 * @param ctx the parse tree
	 */
	enterType_set?: (ctx: Type_setContext) => void;
	/**
	 * Exit a parse tree produced by `cluParser.type_set`.
	 * @param ctx the parse tree
	 */
	exitType_set?: (ctx: Type_setContext) => void;

	/**
	 * Enter a parse tree produced by `cluParser.oper_decl_list`.
	 * @param ctx the parse tree
	 */
	enterOper_decl_list?: (ctx: Oper_decl_listContext) => void;
	/**
	 * Exit a parse tree produced by `cluParser.oper_decl_list`.
	 * @param ctx the parse tree
	 */
	exitOper_decl_list?: (ctx: Oper_decl_listContext) => void;

	/**
	 * Enter a parse tree produced by `cluParser.oper_decl`.
	 * @param ctx the parse tree
	 */
	enterOper_decl?: (ctx: Oper_declContext) => void;
	/**
	 * Exit a parse tree produced by `cluParser.oper_decl`.
	 * @param ctx the parse tree
	 */
	exitOper_decl?: (ctx: Oper_declContext) => void;

	/**
	 * Enter a parse tree produced by `cluParser.op_name_list`.
	 * @param ctx the parse tree
	 */
	enterOp_name_list?: (ctx: Op_name_listContext) => void;
	/**
	 * Exit a parse tree produced by `cluParser.op_name_list`.
	 * @param ctx the parse tree
	 */
	exitOp_name_list?: (ctx: Op_name_listContext) => void;

	/**
	 * Enter a parse tree produced by `cluParser.op_name`.
	 * @param ctx the parse tree
	 */
	enterOp_name?: (ctx: Op_nameContext) => void;
	/**
	 * Exit a parse tree produced by `cluParser.op_name`.
	 * @param ctx the parse tree
	 */
	exitOp_name?: (ctx: Op_nameContext) => void;

	/**
	 * Enter a parse tree produced by `cluParser.constant_list`.
	 * @param ctx the parse tree
	 */
	enterConstant_list?: (ctx: Constant_listContext) => void;
	/**
	 * Exit a parse tree produced by `cluParser.constant_list`.
	 * @param ctx the parse tree
	 */
	exitConstant_list?: (ctx: Constant_listContext) => void;

	/**
	 * Enter a parse tree produced by `cluParser.constant`.
	 * @param ctx the parse tree
	 */
	enterConstant?: (ctx: ConstantContext) => void;
	/**
	 * Exit a parse tree produced by `cluParser.constant`.
	 * @param ctx the parse tree
	 */
	exitConstant?: (ctx: ConstantContext) => void;

	/**
	 * Enter a parse tree produced by `cluParser.routine_body`.
	 * @param ctx the parse tree
	 */
	enterRoutine_body?: (ctx: Routine_bodyContext) => void;
	/**
	 * Exit a parse tree produced by `cluParser.routine_body`.
	 * @param ctx the parse tree
	 */
	exitRoutine_body?: (ctx: Routine_bodyContext) => void;

	/**
	 * Enter a parse tree produced by `cluParser.cluster_body`.
	 * @param ctx the parse tree
	 */
	enterCluster_body?: (ctx: Cluster_bodyContext) => void;
	/**
	 * Exit a parse tree produced by `cluParser.cluster_body`.
	 * @param ctx the parse tree
	 */
	exitCluster_body?: (ctx: Cluster_bodyContext) => void;

	/**
	 * Enter a parse tree produced by `cluParser.routine`.
	 * @param ctx the parse tree
	 */
	enterRoutine?: (ctx: RoutineContext) => void;
	/**
	 * Exit a parse tree produced by `cluParser.routine`.
	 * @param ctx the parse tree
	 */
	exitRoutine?: (ctx: RoutineContext) => void;

	/**
	 * Enter a parse tree produced by `cluParser.equate`.
	 * @param ctx the parse tree
	 */
	enterEquate?: (ctx: EquateContext) => void;
	/**
	 * Exit a parse tree produced by `cluParser.equate`.
	 * @param ctx the parse tree
	 */
	exitEquate?: (ctx: EquateContext) => void;

	/**
	 * Enter a parse tree produced by `cluParser.own_var`.
	 * @param ctx the parse tree
	 */
	enterOwn_var?: (ctx: Own_varContext) => void;
	/**
	 * Exit a parse tree produced by `cluParser.own_var`.
	 * @param ctx the parse tree
	 */
	exitOwn_var?: (ctx: Own_varContext) => void;

	/**
	 * Enter a parse tree produced by `cluParser.type_spec`.
	 * @param ctx the parse tree
	 */
	enterType_spec?: (ctx: Type_specContext) => void;
	/**
	 * Exit a parse tree produced by `cluParser.type_spec`.
	 * @param ctx the parse tree
	 */
	exitType_spec?: (ctx: Type_specContext) => void;

	/**
	 * Enter a parse tree produced by `cluParser.field_spec_list`.
	 * @param ctx the parse tree
	 */
	enterField_spec_list?: (ctx: Field_spec_listContext) => void;
	/**
	 * Exit a parse tree produced by `cluParser.field_spec_list`.
	 * @param ctx the parse tree
	 */
	exitField_spec_list?: (ctx: Field_spec_listContext) => void;

	/**
	 * Enter a parse tree produced by `cluParser.field_spec`.
	 * @param ctx the parse tree
	 */
	enterField_spec?: (ctx: Field_specContext) => void;
	/**
	 * Exit a parse tree produced by `cluParser.field_spec`.
	 * @param ctx the parse tree
	 */
	exitField_spec?: (ctx: Field_specContext) => void;

	/**
	 * Enter a parse tree produced by `cluParser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement?: (ctx: StatementContext) => void;
	/**
	 * Exit a parse tree produced by `cluParser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement?: (ctx: StatementContext) => void;

	/**
	 * Enter a parse tree produced by `cluParser.tag_arm`.
	 * @param ctx the parse tree
	 */
	enterTag_arm?: (ctx: Tag_armContext) => void;
	/**
	 * Exit a parse tree produced by `cluParser.tag_arm`.
	 * @param ctx the parse tree
	 */
	exitTag_arm?: (ctx: Tag_armContext) => void;

	/**
	 * Enter a parse tree produced by `cluParser.when_handler`.
	 * @param ctx the parse tree
	 */
	enterWhen_handler?: (ctx: When_handlerContext) => void;
	/**
	 * Exit a parse tree produced by `cluParser.when_handler`.
	 * @param ctx the parse tree
	 */
	exitWhen_handler?: (ctx: When_handlerContext) => void;

	/**
	 * Enter a parse tree produced by `cluParser.others_handler`.
	 * @param ctx the parse tree
	 */
	enterOthers_handler?: (ctx: Others_handlerContext) => void;
	/**
	 * Exit a parse tree produced by `cluParser.others_handler`.
	 * @param ctx the parse tree
	 */
	exitOthers_handler?: (ctx: Others_handlerContext) => void;

	/**
	 * Enter a parse tree produced by `cluParser.body`.
	 * @param ctx the parse tree
	 */
	enterBody?: (ctx: BodyContext) => void;
	/**
	 * Exit a parse tree produced by `cluParser.body`.
	 * @param ctx the parse tree
	 */
	exitBody?: (ctx: BodyContext) => void;

	/**
	 * Enter a parse tree produced by `cluParser.expression_list`.
	 * @param ctx the parse tree
	 */
	enterExpression_list?: (ctx: Expression_listContext) => void;
	/**
	 * Exit a parse tree produced by `cluParser.expression_list`.
	 * @param ctx the parse tree
	 */
	exitExpression_list?: (ctx: Expression_listContext) => void;

	/**
	 * Enter a parse tree produced by `cluParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `cluParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `cluParser.primary`.
	 * @param ctx the parse tree
	 */
	enterPrimary?: (ctx: PrimaryContext) => void;
	/**
	 * Exit a parse tree produced by `cluParser.primary`.
	 * @param ctx the parse tree
	 */
	exitPrimary?: (ctx: PrimaryContext) => void;

	/**
	 * Enter a parse tree produced by `cluParser.invocation`.
	 * @param ctx the parse tree
	 */
	enterInvocation?: (ctx: InvocationContext) => void;
	/**
	 * Exit a parse tree produced by `cluParser.invocation`.
	 * @param ctx the parse tree
	 */
	exitInvocation?: (ctx: InvocationContext) => void;

	/**
	 * Enter a parse tree produced by `cluParser.field_list`.
	 * @param ctx the parse tree
	 */
	enterField_list?: (ctx: Field_listContext) => void;
	/**
	 * Exit a parse tree produced by `cluParser.field_list`.
	 * @param ctx the parse tree
	 */
	exitField_list?: (ctx: Field_listContext) => void;

	/**
	 * Enter a parse tree produced by `cluParser.field`.
	 * @param ctx the parse tree
	 */
	enterField?: (ctx: FieldContext) => void;
	/**
	 * Exit a parse tree produced by `cluParser.field`.
	 * @param ctx the parse tree
	 */
	exitField?: (ctx: FieldContext) => void;

	/**
	 * Enter a parse tree produced by `cluParser.idn_list`.
	 * @param ctx the parse tree
	 */
	enterIdn_list?: (ctx: Idn_listContext) => void;
	/**
	 * Exit a parse tree produced by `cluParser.idn_list`.
	 * @param ctx the parse tree
	 */
	exitIdn_list?: (ctx: Idn_listContext) => void;

	/**
	 * Enter a parse tree produced by `cluParser.idn`.
	 * @param ctx the parse tree
	 */
	enterIdn?: (ctx: IdnContext) => void;
	/**
	 * Exit a parse tree produced by `cluParser.idn`.
	 * @param ctx the parse tree
	 */
	exitIdn?: (ctx: IdnContext) => void;

	/**
	 * Enter a parse tree produced by `cluParser.name_list`.
	 * @param ctx the parse tree
	 */
	enterName_list?: (ctx: Name_listContext) => void;
	/**
	 * Exit a parse tree produced by `cluParser.name_list`.
	 * @param ctx the parse tree
	 */
	exitName_list?: (ctx: Name_listContext) => void;

	/**
	 * Enter a parse tree produced by `cluParser.name`.
	 * @param ctx the parse tree
	 */
	enterName?: (ctx: NameContext) => void;
	/**
	 * Exit a parse tree produced by `cluParser.name`.
	 * @param ctx the parse tree
	 */
	exitName?: (ctx: NameContext) => void;

	/**
	 * Enter a parse tree produced by `cluParser.int_literal`.
	 * @param ctx the parse tree
	 */
	enterInt_literal?: (ctx: Int_literalContext) => void;
	/**
	 * Exit a parse tree produced by `cluParser.int_literal`.
	 * @param ctx the parse tree
	 */
	exitInt_literal?: (ctx: Int_literalContext) => void;

	/**
	 * Enter a parse tree produced by `cluParser.real_literal`.
	 * @param ctx the parse tree
	 */
	enterReal_literal?: (ctx: Real_literalContext) => void;
	/**
	 * Exit a parse tree produced by `cluParser.real_literal`.
	 * @param ctx the parse tree
	 */
	exitReal_literal?: (ctx: Real_literalContext) => void;

	/**
	 * Enter a parse tree produced by `cluParser.string_literal`.
	 * @param ctx the parse tree
	 */
	enterString_literal?: (ctx: String_literalContext) => void;
	/**
	 * Exit a parse tree produced by `cluParser.string_literal`.
	 * @param ctx the parse tree
	 */
	exitString_literal?: (ctx: String_literalContext) => void;
}

