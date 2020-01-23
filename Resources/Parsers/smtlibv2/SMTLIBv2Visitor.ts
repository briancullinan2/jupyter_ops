// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/smtlibv2/SMTLIBv2.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { StartContext } from "./SMTLIBv2Parser";
import { ResponseContext } from "./SMTLIBv2Parser";
import { GeneralReservedWordContext } from "./SMTLIBv2Parser";
import { SimpleSymbolContext } from "./SMTLIBv2Parser";
import { QuotedSymbolContext } from "./SMTLIBv2Parser";
import { PredefSymbolContext } from "./SMTLIBv2Parser";
import { PredefKeywordContext } from "./SMTLIBv2Parser";
import { SymbolContext } from "./SMTLIBv2Parser";
import { NumeralContext } from "./SMTLIBv2Parser";
import { DecimalContext } from "./SMTLIBv2Parser";
import { HexadecimalContext } from "./SMTLIBv2Parser";
import { BinaryContext } from "./SMTLIBv2Parser";
import { StringContext } from "./SMTLIBv2Parser";
import { KeywordContext } from "./SMTLIBv2Parser";
import { Spec_constantContext } from "./SMTLIBv2Parser";
import { S_exprContext } from "./SMTLIBv2Parser";
import { IndexContext } from "./SMTLIBv2Parser";
import { IdentifierContext } from "./SMTLIBv2Parser";
import { Attribute_valueContext } from "./SMTLIBv2Parser";
import { AttributeContext } from "./SMTLIBv2Parser";
import { SortContext } from "./SMTLIBv2Parser";
import { Qual_identiferContext } from "./SMTLIBv2Parser";
import { Var_bindingContext } from "./SMTLIBv2Parser";
import { Sorted_varContext } from "./SMTLIBv2Parser";
import { PatternContext } from "./SMTLIBv2Parser";
import { Match_caseContext } from "./SMTLIBv2Parser";
import { TermContext } from "./SMTLIBv2Parser";
import { Sort_symbol_declContext } from "./SMTLIBv2Parser";
import { Meta_spec_constantContext } from "./SMTLIBv2Parser";
import { Fun_symbol_declContext } from "./SMTLIBv2Parser";
import { Par_fun_symbol_declContext } from "./SMTLIBv2Parser";
import { Theory_attributeContext } from "./SMTLIBv2Parser";
import { Theory_declContext } from "./SMTLIBv2Parser";
import { Logic_attribueContext } from "./SMTLIBv2Parser";
import { LogicContext } from "./SMTLIBv2Parser";
import { Sort_decContext } from "./SMTLIBv2Parser";
import { Selector_decContext } from "./SMTLIBv2Parser";
import { Constructor_decContext } from "./SMTLIBv2Parser";
import { Datatype_decContext } from "./SMTLIBv2Parser";
import { Function_decContext } from "./SMTLIBv2Parser";
import { Function_defContext } from "./SMTLIBv2Parser";
import { Prop_literalContext } from "./SMTLIBv2Parser";
import { ScriptContext } from "./SMTLIBv2Parser";
import { Cmd_assertContext } from "./SMTLIBv2Parser";
import { Cmd_checkSatContext } from "./SMTLIBv2Parser";
import { Cmd_checkSatAssumingContext } from "./SMTLIBv2Parser";
import { Cmd_declareConstContext } from "./SMTLIBv2Parser";
import { Cmd_declareDatatypeContext } from "./SMTLIBv2Parser";
import { Cmd_declareDatatypesContext } from "./SMTLIBv2Parser";
import { Cmd_declareFunContext } from "./SMTLIBv2Parser";
import { Cmd_declareSortContext } from "./SMTLIBv2Parser";
import { Cmd_defineFunContext } from "./SMTLIBv2Parser";
import { Cmd_defineFunRecContext } from "./SMTLIBv2Parser";
import { Cmd_defineFunsRecContext } from "./SMTLIBv2Parser";
import { Cmd_defineSortContext } from "./SMTLIBv2Parser";
import { Cmd_echoContext } from "./SMTLIBv2Parser";
import { Cmd_exitContext } from "./SMTLIBv2Parser";
import { Cmd_getAssertionsContext } from "./SMTLIBv2Parser";
import { Cmd_getAssignmentContext } from "./SMTLIBv2Parser";
import { Cmd_getInfoContext } from "./SMTLIBv2Parser";
import { Cmd_getModelContext } from "./SMTLIBv2Parser";
import { Cmd_getOptionContext } from "./SMTLIBv2Parser";
import { Cmd_getProofContext } from "./SMTLIBv2Parser";
import { Cmd_getUnsatAssumptionsContext } from "./SMTLIBv2Parser";
import { Cmd_getUnsatCoreContext } from "./SMTLIBv2Parser";
import { Cmd_getValueContext } from "./SMTLIBv2Parser";
import { Cmd_popContext } from "./SMTLIBv2Parser";
import { Cmd_pushContext } from "./SMTLIBv2Parser";
import { Cmd_resetContext } from "./SMTLIBv2Parser";
import { Cmd_resetAssertionsContext } from "./SMTLIBv2Parser";
import { Cmd_setInfoContext } from "./SMTLIBv2Parser";
import { Cmd_setLogicContext } from "./SMTLIBv2Parser";
import { Cmd_setOptionContext } from "./SMTLIBv2Parser";
import { CommandContext } from "./SMTLIBv2Parser";
import { B_valueContext } from "./SMTLIBv2Parser";
import { OptionContext } from "./SMTLIBv2Parser";
import { Info_flagContext } from "./SMTLIBv2Parser";
import { Error_behaviourContext } from "./SMTLIBv2Parser";
import { Reason_unknownContext } from "./SMTLIBv2Parser";
import { Model_responseContext } from "./SMTLIBv2Parser";
import { Info_responseContext } from "./SMTLIBv2Parser";
import { Valuation_pairContext } from "./SMTLIBv2Parser";
import { T_valuation_pairContext } from "./SMTLIBv2Parser";
import { Check_sat_responseContext } from "./SMTLIBv2Parser";
import { Echo_responseContext } from "./SMTLIBv2Parser";
import { Get_assertions_responseContext } from "./SMTLIBv2Parser";
import { Get_assignment_responseContext } from "./SMTLIBv2Parser";
import { Get_info_responseContext } from "./SMTLIBv2Parser";
import { Get_model_responseContext } from "./SMTLIBv2Parser";
import { Get_option_responseContext } from "./SMTLIBv2Parser";
import { Get_proof_responseContext } from "./SMTLIBv2Parser";
import { Get_unsat_assump_responseContext } from "./SMTLIBv2Parser";
import { Get_unsat_core_responseContext } from "./SMTLIBv2Parser";
import { Get_value_responseContext } from "./SMTLIBv2Parser";
import { Specific_success_responseContext } from "./SMTLIBv2Parser";
import { General_responseContext } from "./SMTLIBv2Parser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `SMTLIBv2Parser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface SMTLIBv2Visitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `SMTLIBv2Parser.start`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStart?: (ctx: StartContext) => Result;

	/**
	 * Visit a parse tree produced by `SMTLIBv2Parser.response`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitResponse?: (ctx: ResponseContext) => Result;

	/**
	 * Visit a parse tree produced by `SMTLIBv2Parser.generalReservedWord`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGeneralReservedWord?: (ctx: GeneralReservedWordContext) => Result;

	/**
	 * Visit a parse tree produced by `SMTLIBv2Parser.simpleSymbol`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSimpleSymbol?: (ctx: SimpleSymbolContext) => Result;

	/**
	 * Visit a parse tree produced by `SMTLIBv2Parser.quotedSymbol`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQuotedSymbol?: (ctx: QuotedSymbolContext) => Result;

	/**
	 * Visit a parse tree produced by `SMTLIBv2Parser.predefSymbol`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPredefSymbol?: (ctx: PredefSymbolContext) => Result;

	/**
	 * Visit a parse tree produced by `SMTLIBv2Parser.predefKeyword`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPredefKeyword?: (ctx: PredefKeywordContext) => Result;

	/**
	 * Visit a parse tree produced by `SMTLIBv2Parser.symbol`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSymbol?: (ctx: SymbolContext) => Result;

	/**
	 * Visit a parse tree produced by `SMTLIBv2Parser.numeral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumeral?: (ctx: NumeralContext) => Result;

	/**
	 * Visit a parse tree produced by `SMTLIBv2Parser.decimal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDecimal?: (ctx: DecimalContext) => Result;

	/**
	 * Visit a parse tree produced by `SMTLIBv2Parser.hexadecimal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHexadecimal?: (ctx: HexadecimalContext) => Result;

	/**
	 * Visit a parse tree produced by `SMTLIBv2Parser.binary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBinary?: (ctx: BinaryContext) => Result;

	/**
	 * Visit a parse tree produced by `SMTLIBv2Parser.string`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitString?: (ctx: StringContext) => Result;

	/**
	 * Visit a parse tree produced by `SMTLIBv2Parser.keyword`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKeyword?: (ctx: KeywordContext) => Result;

	/**
	 * Visit a parse tree produced by `SMTLIBv2Parser.spec_constant`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSpec_constant?: (ctx: Spec_constantContext) => Result;

	/**
	 * Visit a parse tree produced by `SMTLIBv2Parser.s_expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitS_expr?: (ctx: S_exprContext) => Result;

	/**
	 * Visit a parse tree produced by `SMTLIBv2Parser.index`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIndex?: (ctx: IndexContext) => Result;

	/**
	 * Visit a parse tree produced by `SMTLIBv2Parser.identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifier?: (ctx: IdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by `SMTLIBv2Parser.attribute_value`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAttribute_value?: (ctx: Attribute_valueContext) => Result;

	/**
	 * Visit a parse tree produced by `SMTLIBv2Parser.attribute`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAttribute?: (ctx: AttributeContext) => Result;

	/**
	 * Visit a parse tree produced by `SMTLIBv2Parser.sort`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSort?: (ctx: SortContext) => Result;

	/**
	 * Visit a parse tree produced by `SMTLIBv2Parser.qual_identifer`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQual_identifer?: (ctx: Qual_identiferContext) => Result;

	/**
	 * Visit a parse tree produced by `SMTLIBv2Parser.var_binding`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVar_binding?: (ctx: Var_bindingContext) => Result;

	/**
	 * Visit a parse tree produced by `SMTLIBv2Parser.sorted_var`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSorted_var?: (ctx: Sorted_varContext) => Result;

	/**
	 * Visit a parse tree produced by `SMTLIBv2Parser.pattern`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPattern?: (ctx: PatternContext) => Result;

	/**
	 * Visit a parse tree produced by `SMTLIBv2Parser.match_case`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMatch_case?: (ctx: Match_caseContext) => Result;

	/**
	 * Visit a parse tree produced by `SMTLIBv2Parser.term`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTerm?: (ctx: TermContext) => Result;

	/**
	 * Visit a parse tree produced by `SMTLIBv2Parser.sort_symbol_decl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSort_symbol_decl?: (ctx: Sort_symbol_declContext) => Result;

	/**
	 * Visit a parse tree produced by `SMTLIBv2Parser.meta_spec_constant`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMeta_spec_constant?: (ctx: Meta_spec_constantContext) => Result;

	/**
	 * Visit a parse tree produced by `SMTLIBv2Parser.fun_symbol_decl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFun_symbol_decl?: (ctx: Fun_symbol_declContext) => Result;

	/**
	 * Visit a parse tree produced by `SMTLIBv2Parser.par_fun_symbol_decl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPar_fun_symbol_decl?: (ctx: Par_fun_symbol_declContext) => Result;

	/**
	 * Visit a parse tree produced by `SMTLIBv2Parser.theory_attribute`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTheory_attribute?: (ctx: Theory_attributeContext) => Result;

	/**
	 * Visit a parse tree produced by `SMTLIBv2Parser.theory_decl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTheory_decl?: (ctx: Theory_declContext) => Result;

	/**
	 * Visit a parse tree produced by `SMTLIBv2Parser.logic_attribue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogic_attribue?: (ctx: Logic_attribueContext) => Result;

	/**
	 * Visit a parse tree produced by `SMTLIBv2Parser.logic`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogic?: (ctx: LogicContext) => Result;

	/**
	 * Visit a parse tree produced by `SMTLIBv2Parser.sort_dec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSort_dec?: (ctx: Sort_decContext) => Result;

	/**
	 * Visit a parse tree produced by `SMTLIBv2Parser.selector_dec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelector_dec?: (ctx: Selector_decContext) => Result;

	/**
	 * Visit a parse tree produced by `SMTLIBv2Parser.constructor_dec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstructor_dec?: (ctx: Constructor_decContext) => Result;

	/**
	 * Visit a parse tree produced by `SMTLIBv2Parser.datatype_dec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDatatype_dec?: (ctx: Datatype_decContext) => Result;

	/**
	 * Visit a parse tree produced by `SMTLIBv2Parser.function_dec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunction_dec?: (ctx: Function_decContext) => Result;

	/**
	 * Visit a parse tree produced by `SMTLIBv2Parser.function_def`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunction_def?: (ctx: Function_defContext) => Result;

	/**
	 * Visit a parse tree produced by `SMTLIBv2Parser.prop_literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProp_literal?: (ctx: Prop_literalContext) => Result;

	/**
	 * Visit a parse tree produced by `SMTLIBv2Parser.script`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitScript?: (ctx: ScriptContext) => Result;

	/**
	 * Visit a parse tree produced by `SMTLIBv2Parser.cmd_assert`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCmd_assert?: (ctx: Cmd_assertContext) => Result;

	/**
	 * Visit a parse tree produced by `SMTLIBv2Parser.cmd_checkSat`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCmd_checkSat?: (ctx: Cmd_checkSatContext) => Result;

	/**
	 * Visit a parse tree produced by `SMTLIBv2Parser.cmd_checkSatAssuming`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCmd_checkSatAssuming?: (ctx: Cmd_checkSatAssumingContext) => Result;

	/**
	 * Visit a parse tree produced by `SMTLIBv2Parser.cmd_declareConst`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCmd_declareConst?: (ctx: Cmd_declareConstContext) => Result;

	/**
	 * Visit a parse tree produced by `SMTLIBv2Parser.cmd_declareDatatype`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCmd_declareDatatype?: (ctx: Cmd_declareDatatypeContext) => Result;

	/**
	 * Visit a parse tree produced by `SMTLIBv2Parser.cmd_declareDatatypes`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCmd_declareDatatypes?: (ctx: Cmd_declareDatatypesContext) => Result;

	/**
	 * Visit a parse tree produced by `SMTLIBv2Parser.cmd_declareFun`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCmd_declareFun?: (ctx: Cmd_declareFunContext) => Result;

	/**
	 * Visit a parse tree produced by `SMTLIBv2Parser.cmd_declareSort`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCmd_declareSort?: (ctx: Cmd_declareSortContext) => Result;

	/**
	 * Visit a parse tree produced by `SMTLIBv2Parser.cmd_defineFun`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCmd_defineFun?: (ctx: Cmd_defineFunContext) => Result;

	/**
	 * Visit a parse tree produced by `SMTLIBv2Parser.cmd_defineFunRec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCmd_defineFunRec?: (ctx: Cmd_defineFunRecContext) => Result;

	/**
	 * Visit a parse tree produced by `SMTLIBv2Parser.cmd_defineFunsRec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCmd_defineFunsRec?: (ctx: Cmd_defineFunsRecContext) => Result;

	/**
	 * Visit a parse tree produced by `SMTLIBv2Parser.cmd_defineSort`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCmd_defineSort?: (ctx: Cmd_defineSortContext) => Result;

	/**
	 * Visit a parse tree produced by `SMTLIBv2Parser.cmd_echo`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCmd_echo?: (ctx: Cmd_echoContext) => Result;

	/**
	 * Visit a parse tree produced by `SMTLIBv2Parser.cmd_exit`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCmd_exit?: (ctx: Cmd_exitContext) => Result;

	/**
	 * Visit a parse tree produced by `SMTLIBv2Parser.cmd_getAssertions`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCmd_getAssertions?: (ctx: Cmd_getAssertionsContext) => Result;

	/**
	 * Visit a parse tree produced by `SMTLIBv2Parser.cmd_getAssignment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCmd_getAssignment?: (ctx: Cmd_getAssignmentContext) => Result;

	/**
	 * Visit a parse tree produced by `SMTLIBv2Parser.cmd_getInfo`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCmd_getInfo?: (ctx: Cmd_getInfoContext) => Result;

	/**
	 * Visit a parse tree produced by `SMTLIBv2Parser.cmd_getModel`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCmd_getModel?: (ctx: Cmd_getModelContext) => Result;

	/**
	 * Visit a parse tree produced by `SMTLIBv2Parser.cmd_getOption`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCmd_getOption?: (ctx: Cmd_getOptionContext) => Result;

	/**
	 * Visit a parse tree produced by `SMTLIBv2Parser.cmd_getProof`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCmd_getProof?: (ctx: Cmd_getProofContext) => Result;

	/**
	 * Visit a parse tree produced by `SMTLIBv2Parser.cmd_getUnsatAssumptions`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCmd_getUnsatAssumptions?: (ctx: Cmd_getUnsatAssumptionsContext) => Result;

	/**
	 * Visit a parse tree produced by `SMTLIBv2Parser.cmd_getUnsatCore`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCmd_getUnsatCore?: (ctx: Cmd_getUnsatCoreContext) => Result;

	/**
	 * Visit a parse tree produced by `SMTLIBv2Parser.cmd_getValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCmd_getValue?: (ctx: Cmd_getValueContext) => Result;

	/**
	 * Visit a parse tree produced by `SMTLIBv2Parser.cmd_pop`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCmd_pop?: (ctx: Cmd_popContext) => Result;

	/**
	 * Visit a parse tree produced by `SMTLIBv2Parser.cmd_push`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCmd_push?: (ctx: Cmd_pushContext) => Result;

	/**
	 * Visit a parse tree produced by `SMTLIBv2Parser.cmd_reset`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCmd_reset?: (ctx: Cmd_resetContext) => Result;

	/**
	 * Visit a parse tree produced by `SMTLIBv2Parser.cmd_resetAssertions`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCmd_resetAssertions?: (ctx: Cmd_resetAssertionsContext) => Result;

	/**
	 * Visit a parse tree produced by `SMTLIBv2Parser.cmd_setInfo`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCmd_setInfo?: (ctx: Cmd_setInfoContext) => Result;

	/**
	 * Visit a parse tree produced by `SMTLIBv2Parser.cmd_setLogic`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCmd_setLogic?: (ctx: Cmd_setLogicContext) => Result;

	/**
	 * Visit a parse tree produced by `SMTLIBv2Parser.cmd_setOption`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCmd_setOption?: (ctx: Cmd_setOptionContext) => Result;

	/**
	 * Visit a parse tree produced by `SMTLIBv2Parser.command`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCommand?: (ctx: CommandContext) => Result;

	/**
	 * Visit a parse tree produced by `SMTLIBv2Parser.b_value`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitB_value?: (ctx: B_valueContext) => Result;

	/**
	 * Visit a parse tree produced by `SMTLIBv2Parser.option`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOption?: (ctx: OptionContext) => Result;

	/**
	 * Visit a parse tree produced by `SMTLIBv2Parser.info_flag`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInfo_flag?: (ctx: Info_flagContext) => Result;

	/**
	 * Visit a parse tree produced by `SMTLIBv2Parser.error_behaviour`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitError_behaviour?: (ctx: Error_behaviourContext) => Result;

	/**
	 * Visit a parse tree produced by `SMTLIBv2Parser.reason_unknown`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReason_unknown?: (ctx: Reason_unknownContext) => Result;

	/**
	 * Visit a parse tree produced by `SMTLIBv2Parser.model_response`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitModel_response?: (ctx: Model_responseContext) => Result;

	/**
	 * Visit a parse tree produced by `SMTLIBv2Parser.info_response`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInfo_response?: (ctx: Info_responseContext) => Result;

	/**
	 * Visit a parse tree produced by `SMTLIBv2Parser.valuation_pair`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValuation_pair?: (ctx: Valuation_pairContext) => Result;

	/**
	 * Visit a parse tree produced by `SMTLIBv2Parser.t_valuation_pair`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitT_valuation_pair?: (ctx: T_valuation_pairContext) => Result;

	/**
	 * Visit a parse tree produced by `SMTLIBv2Parser.check_sat_response`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCheck_sat_response?: (ctx: Check_sat_responseContext) => Result;

	/**
	 * Visit a parse tree produced by `SMTLIBv2Parser.echo_response`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEcho_response?: (ctx: Echo_responseContext) => Result;

	/**
	 * Visit a parse tree produced by `SMTLIBv2Parser.get_assertions_response`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGet_assertions_response?: (ctx: Get_assertions_responseContext) => Result;

	/**
	 * Visit a parse tree produced by `SMTLIBv2Parser.get_assignment_response`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGet_assignment_response?: (ctx: Get_assignment_responseContext) => Result;

	/**
	 * Visit a parse tree produced by `SMTLIBv2Parser.get_info_response`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGet_info_response?: (ctx: Get_info_responseContext) => Result;

	/**
	 * Visit a parse tree produced by `SMTLIBv2Parser.get_model_response`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGet_model_response?: (ctx: Get_model_responseContext) => Result;

	/**
	 * Visit a parse tree produced by `SMTLIBv2Parser.get_option_response`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGet_option_response?: (ctx: Get_option_responseContext) => Result;

	/**
	 * Visit a parse tree produced by `SMTLIBv2Parser.get_proof_response`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGet_proof_response?: (ctx: Get_proof_responseContext) => Result;

	/**
	 * Visit a parse tree produced by `SMTLIBv2Parser.get_unsat_assump_response`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGet_unsat_assump_response?: (ctx: Get_unsat_assump_responseContext) => Result;

	/**
	 * Visit a parse tree produced by `SMTLIBv2Parser.get_unsat_core_response`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGet_unsat_core_response?: (ctx: Get_unsat_core_responseContext) => Result;

	/**
	 * Visit a parse tree produced by `SMTLIBv2Parser.get_value_response`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGet_value_response?: (ctx: Get_value_responseContext) => Result;

	/**
	 * Visit a parse tree produced by `SMTLIBv2Parser.specific_success_response`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSpecific_success_response?: (ctx: Specific_success_responseContext) => Result;

	/**
	 * Visit a parse tree produced by `SMTLIBv2Parser.general_response`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGeneral_response?: (ctx: General_responseContext) => Result;
}

