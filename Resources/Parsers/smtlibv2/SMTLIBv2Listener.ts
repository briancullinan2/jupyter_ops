// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/smtlibv2/SMTLIBv2.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

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
 * This interface defines a complete listener for a parse tree produced by
 * `SMTLIBv2Parser`.
 */
export interface SMTLIBv2Listener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `SMTLIBv2Parser.start`.
	 * @param ctx the parse tree
	 */
	enterStart?: (ctx: StartContext) => void;
	/**
	 * Exit a parse tree produced by `SMTLIBv2Parser.start`.
	 * @param ctx the parse tree
	 */
	exitStart?: (ctx: StartContext) => void;

	/**
	 * Enter a parse tree produced by `SMTLIBv2Parser.response`.
	 * @param ctx the parse tree
	 */
	enterResponse?: (ctx: ResponseContext) => void;
	/**
	 * Exit a parse tree produced by `SMTLIBv2Parser.response`.
	 * @param ctx the parse tree
	 */
	exitResponse?: (ctx: ResponseContext) => void;

	/**
	 * Enter a parse tree produced by `SMTLIBv2Parser.generalReservedWord`.
	 * @param ctx the parse tree
	 */
	enterGeneralReservedWord?: (ctx: GeneralReservedWordContext) => void;
	/**
	 * Exit a parse tree produced by `SMTLIBv2Parser.generalReservedWord`.
	 * @param ctx the parse tree
	 */
	exitGeneralReservedWord?: (ctx: GeneralReservedWordContext) => void;

	/**
	 * Enter a parse tree produced by `SMTLIBv2Parser.simpleSymbol`.
	 * @param ctx the parse tree
	 */
	enterSimpleSymbol?: (ctx: SimpleSymbolContext) => void;
	/**
	 * Exit a parse tree produced by `SMTLIBv2Parser.simpleSymbol`.
	 * @param ctx the parse tree
	 */
	exitSimpleSymbol?: (ctx: SimpleSymbolContext) => void;

	/**
	 * Enter a parse tree produced by `SMTLIBv2Parser.quotedSymbol`.
	 * @param ctx the parse tree
	 */
	enterQuotedSymbol?: (ctx: QuotedSymbolContext) => void;
	/**
	 * Exit a parse tree produced by `SMTLIBv2Parser.quotedSymbol`.
	 * @param ctx the parse tree
	 */
	exitQuotedSymbol?: (ctx: QuotedSymbolContext) => void;

	/**
	 * Enter a parse tree produced by `SMTLIBv2Parser.predefSymbol`.
	 * @param ctx the parse tree
	 */
	enterPredefSymbol?: (ctx: PredefSymbolContext) => void;
	/**
	 * Exit a parse tree produced by `SMTLIBv2Parser.predefSymbol`.
	 * @param ctx the parse tree
	 */
	exitPredefSymbol?: (ctx: PredefSymbolContext) => void;

	/**
	 * Enter a parse tree produced by `SMTLIBv2Parser.predefKeyword`.
	 * @param ctx the parse tree
	 */
	enterPredefKeyword?: (ctx: PredefKeywordContext) => void;
	/**
	 * Exit a parse tree produced by `SMTLIBv2Parser.predefKeyword`.
	 * @param ctx the parse tree
	 */
	exitPredefKeyword?: (ctx: PredefKeywordContext) => void;

	/**
	 * Enter a parse tree produced by `SMTLIBv2Parser.symbol`.
	 * @param ctx the parse tree
	 */
	enterSymbol?: (ctx: SymbolContext) => void;
	/**
	 * Exit a parse tree produced by `SMTLIBv2Parser.symbol`.
	 * @param ctx the parse tree
	 */
	exitSymbol?: (ctx: SymbolContext) => void;

	/**
	 * Enter a parse tree produced by `SMTLIBv2Parser.numeral`.
	 * @param ctx the parse tree
	 */
	enterNumeral?: (ctx: NumeralContext) => void;
	/**
	 * Exit a parse tree produced by `SMTLIBv2Parser.numeral`.
	 * @param ctx the parse tree
	 */
	exitNumeral?: (ctx: NumeralContext) => void;

	/**
	 * Enter a parse tree produced by `SMTLIBv2Parser.decimal`.
	 * @param ctx the parse tree
	 */
	enterDecimal?: (ctx: DecimalContext) => void;
	/**
	 * Exit a parse tree produced by `SMTLIBv2Parser.decimal`.
	 * @param ctx the parse tree
	 */
	exitDecimal?: (ctx: DecimalContext) => void;

	/**
	 * Enter a parse tree produced by `SMTLIBv2Parser.hexadecimal`.
	 * @param ctx the parse tree
	 */
	enterHexadecimal?: (ctx: HexadecimalContext) => void;
	/**
	 * Exit a parse tree produced by `SMTLIBv2Parser.hexadecimal`.
	 * @param ctx the parse tree
	 */
	exitHexadecimal?: (ctx: HexadecimalContext) => void;

	/**
	 * Enter a parse tree produced by `SMTLIBv2Parser.binary`.
	 * @param ctx the parse tree
	 */
	enterBinary?: (ctx: BinaryContext) => void;
	/**
	 * Exit a parse tree produced by `SMTLIBv2Parser.binary`.
	 * @param ctx the parse tree
	 */
	exitBinary?: (ctx: BinaryContext) => void;

	/**
	 * Enter a parse tree produced by `SMTLIBv2Parser.string`.
	 * @param ctx the parse tree
	 */
	enterString?: (ctx: StringContext) => void;
	/**
	 * Exit a parse tree produced by `SMTLIBv2Parser.string`.
	 * @param ctx the parse tree
	 */
	exitString?: (ctx: StringContext) => void;

	/**
	 * Enter a parse tree produced by `SMTLIBv2Parser.keyword`.
	 * @param ctx the parse tree
	 */
	enterKeyword?: (ctx: KeywordContext) => void;
	/**
	 * Exit a parse tree produced by `SMTLIBv2Parser.keyword`.
	 * @param ctx the parse tree
	 */
	exitKeyword?: (ctx: KeywordContext) => void;

	/**
	 * Enter a parse tree produced by `SMTLIBv2Parser.spec_constant`.
	 * @param ctx the parse tree
	 */
	enterSpec_constant?: (ctx: Spec_constantContext) => void;
	/**
	 * Exit a parse tree produced by `SMTLIBv2Parser.spec_constant`.
	 * @param ctx the parse tree
	 */
	exitSpec_constant?: (ctx: Spec_constantContext) => void;

	/**
	 * Enter a parse tree produced by `SMTLIBv2Parser.s_expr`.
	 * @param ctx the parse tree
	 */
	enterS_expr?: (ctx: S_exprContext) => void;
	/**
	 * Exit a parse tree produced by `SMTLIBv2Parser.s_expr`.
	 * @param ctx the parse tree
	 */
	exitS_expr?: (ctx: S_exprContext) => void;

	/**
	 * Enter a parse tree produced by `SMTLIBv2Parser.index`.
	 * @param ctx the parse tree
	 */
	enterIndex?: (ctx: IndexContext) => void;
	/**
	 * Exit a parse tree produced by `SMTLIBv2Parser.index`.
	 * @param ctx the parse tree
	 */
	exitIndex?: (ctx: IndexContext) => void;

	/**
	 * Enter a parse tree produced by `SMTLIBv2Parser.identifier`.
	 * @param ctx the parse tree
	 */
	enterIdentifier?: (ctx: IdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `SMTLIBv2Parser.identifier`.
	 * @param ctx the parse tree
	 */
	exitIdentifier?: (ctx: IdentifierContext) => void;

	/**
	 * Enter a parse tree produced by `SMTLIBv2Parser.attribute_value`.
	 * @param ctx the parse tree
	 */
	enterAttribute_value?: (ctx: Attribute_valueContext) => void;
	/**
	 * Exit a parse tree produced by `SMTLIBv2Parser.attribute_value`.
	 * @param ctx the parse tree
	 */
	exitAttribute_value?: (ctx: Attribute_valueContext) => void;

	/**
	 * Enter a parse tree produced by `SMTLIBv2Parser.attribute`.
	 * @param ctx the parse tree
	 */
	enterAttribute?: (ctx: AttributeContext) => void;
	/**
	 * Exit a parse tree produced by `SMTLIBv2Parser.attribute`.
	 * @param ctx the parse tree
	 */
	exitAttribute?: (ctx: AttributeContext) => void;

	/**
	 * Enter a parse tree produced by `SMTLIBv2Parser.sort`.
	 * @param ctx the parse tree
	 */
	enterSort?: (ctx: SortContext) => void;
	/**
	 * Exit a parse tree produced by `SMTLIBv2Parser.sort`.
	 * @param ctx the parse tree
	 */
	exitSort?: (ctx: SortContext) => void;

	/**
	 * Enter a parse tree produced by `SMTLIBv2Parser.qual_identifer`.
	 * @param ctx the parse tree
	 */
	enterQual_identifer?: (ctx: Qual_identiferContext) => void;
	/**
	 * Exit a parse tree produced by `SMTLIBv2Parser.qual_identifer`.
	 * @param ctx the parse tree
	 */
	exitQual_identifer?: (ctx: Qual_identiferContext) => void;

	/**
	 * Enter a parse tree produced by `SMTLIBv2Parser.var_binding`.
	 * @param ctx the parse tree
	 */
	enterVar_binding?: (ctx: Var_bindingContext) => void;
	/**
	 * Exit a parse tree produced by `SMTLIBv2Parser.var_binding`.
	 * @param ctx the parse tree
	 */
	exitVar_binding?: (ctx: Var_bindingContext) => void;

	/**
	 * Enter a parse tree produced by `SMTLIBv2Parser.sorted_var`.
	 * @param ctx the parse tree
	 */
	enterSorted_var?: (ctx: Sorted_varContext) => void;
	/**
	 * Exit a parse tree produced by `SMTLIBv2Parser.sorted_var`.
	 * @param ctx the parse tree
	 */
	exitSorted_var?: (ctx: Sorted_varContext) => void;

	/**
	 * Enter a parse tree produced by `SMTLIBv2Parser.pattern`.
	 * @param ctx the parse tree
	 */
	enterPattern?: (ctx: PatternContext) => void;
	/**
	 * Exit a parse tree produced by `SMTLIBv2Parser.pattern`.
	 * @param ctx the parse tree
	 */
	exitPattern?: (ctx: PatternContext) => void;

	/**
	 * Enter a parse tree produced by `SMTLIBv2Parser.match_case`.
	 * @param ctx the parse tree
	 */
	enterMatch_case?: (ctx: Match_caseContext) => void;
	/**
	 * Exit a parse tree produced by `SMTLIBv2Parser.match_case`.
	 * @param ctx the parse tree
	 */
	exitMatch_case?: (ctx: Match_caseContext) => void;

	/**
	 * Enter a parse tree produced by `SMTLIBv2Parser.term`.
	 * @param ctx the parse tree
	 */
	enterTerm?: (ctx: TermContext) => void;
	/**
	 * Exit a parse tree produced by `SMTLIBv2Parser.term`.
	 * @param ctx the parse tree
	 */
	exitTerm?: (ctx: TermContext) => void;

	/**
	 * Enter a parse tree produced by `SMTLIBv2Parser.sort_symbol_decl`.
	 * @param ctx the parse tree
	 */
	enterSort_symbol_decl?: (ctx: Sort_symbol_declContext) => void;
	/**
	 * Exit a parse tree produced by `SMTLIBv2Parser.sort_symbol_decl`.
	 * @param ctx the parse tree
	 */
	exitSort_symbol_decl?: (ctx: Sort_symbol_declContext) => void;

	/**
	 * Enter a parse tree produced by `SMTLIBv2Parser.meta_spec_constant`.
	 * @param ctx the parse tree
	 */
	enterMeta_spec_constant?: (ctx: Meta_spec_constantContext) => void;
	/**
	 * Exit a parse tree produced by `SMTLIBv2Parser.meta_spec_constant`.
	 * @param ctx the parse tree
	 */
	exitMeta_spec_constant?: (ctx: Meta_spec_constantContext) => void;

	/**
	 * Enter a parse tree produced by `SMTLIBv2Parser.fun_symbol_decl`.
	 * @param ctx the parse tree
	 */
	enterFun_symbol_decl?: (ctx: Fun_symbol_declContext) => void;
	/**
	 * Exit a parse tree produced by `SMTLIBv2Parser.fun_symbol_decl`.
	 * @param ctx the parse tree
	 */
	exitFun_symbol_decl?: (ctx: Fun_symbol_declContext) => void;

	/**
	 * Enter a parse tree produced by `SMTLIBv2Parser.par_fun_symbol_decl`.
	 * @param ctx the parse tree
	 */
	enterPar_fun_symbol_decl?: (ctx: Par_fun_symbol_declContext) => void;
	/**
	 * Exit a parse tree produced by `SMTLIBv2Parser.par_fun_symbol_decl`.
	 * @param ctx the parse tree
	 */
	exitPar_fun_symbol_decl?: (ctx: Par_fun_symbol_declContext) => void;

	/**
	 * Enter a parse tree produced by `SMTLIBv2Parser.theory_attribute`.
	 * @param ctx the parse tree
	 */
	enterTheory_attribute?: (ctx: Theory_attributeContext) => void;
	/**
	 * Exit a parse tree produced by `SMTLIBv2Parser.theory_attribute`.
	 * @param ctx the parse tree
	 */
	exitTheory_attribute?: (ctx: Theory_attributeContext) => void;

	/**
	 * Enter a parse tree produced by `SMTLIBv2Parser.theory_decl`.
	 * @param ctx the parse tree
	 */
	enterTheory_decl?: (ctx: Theory_declContext) => void;
	/**
	 * Exit a parse tree produced by `SMTLIBv2Parser.theory_decl`.
	 * @param ctx the parse tree
	 */
	exitTheory_decl?: (ctx: Theory_declContext) => void;

	/**
	 * Enter a parse tree produced by `SMTLIBv2Parser.logic_attribue`.
	 * @param ctx the parse tree
	 */
	enterLogic_attribue?: (ctx: Logic_attribueContext) => void;
	/**
	 * Exit a parse tree produced by `SMTLIBv2Parser.logic_attribue`.
	 * @param ctx the parse tree
	 */
	exitLogic_attribue?: (ctx: Logic_attribueContext) => void;

	/**
	 * Enter a parse tree produced by `SMTLIBv2Parser.logic`.
	 * @param ctx the parse tree
	 */
	enterLogic?: (ctx: LogicContext) => void;
	/**
	 * Exit a parse tree produced by `SMTLIBv2Parser.logic`.
	 * @param ctx the parse tree
	 */
	exitLogic?: (ctx: LogicContext) => void;

	/**
	 * Enter a parse tree produced by `SMTLIBv2Parser.sort_dec`.
	 * @param ctx the parse tree
	 */
	enterSort_dec?: (ctx: Sort_decContext) => void;
	/**
	 * Exit a parse tree produced by `SMTLIBv2Parser.sort_dec`.
	 * @param ctx the parse tree
	 */
	exitSort_dec?: (ctx: Sort_decContext) => void;

	/**
	 * Enter a parse tree produced by `SMTLIBv2Parser.selector_dec`.
	 * @param ctx the parse tree
	 */
	enterSelector_dec?: (ctx: Selector_decContext) => void;
	/**
	 * Exit a parse tree produced by `SMTLIBv2Parser.selector_dec`.
	 * @param ctx the parse tree
	 */
	exitSelector_dec?: (ctx: Selector_decContext) => void;

	/**
	 * Enter a parse tree produced by `SMTLIBv2Parser.constructor_dec`.
	 * @param ctx the parse tree
	 */
	enterConstructor_dec?: (ctx: Constructor_decContext) => void;
	/**
	 * Exit a parse tree produced by `SMTLIBv2Parser.constructor_dec`.
	 * @param ctx the parse tree
	 */
	exitConstructor_dec?: (ctx: Constructor_decContext) => void;

	/**
	 * Enter a parse tree produced by `SMTLIBv2Parser.datatype_dec`.
	 * @param ctx the parse tree
	 */
	enterDatatype_dec?: (ctx: Datatype_decContext) => void;
	/**
	 * Exit a parse tree produced by `SMTLIBv2Parser.datatype_dec`.
	 * @param ctx the parse tree
	 */
	exitDatatype_dec?: (ctx: Datatype_decContext) => void;

	/**
	 * Enter a parse tree produced by `SMTLIBv2Parser.function_dec`.
	 * @param ctx the parse tree
	 */
	enterFunction_dec?: (ctx: Function_decContext) => void;
	/**
	 * Exit a parse tree produced by `SMTLIBv2Parser.function_dec`.
	 * @param ctx the parse tree
	 */
	exitFunction_dec?: (ctx: Function_decContext) => void;

	/**
	 * Enter a parse tree produced by `SMTLIBv2Parser.function_def`.
	 * @param ctx the parse tree
	 */
	enterFunction_def?: (ctx: Function_defContext) => void;
	/**
	 * Exit a parse tree produced by `SMTLIBv2Parser.function_def`.
	 * @param ctx the parse tree
	 */
	exitFunction_def?: (ctx: Function_defContext) => void;

	/**
	 * Enter a parse tree produced by `SMTLIBv2Parser.prop_literal`.
	 * @param ctx the parse tree
	 */
	enterProp_literal?: (ctx: Prop_literalContext) => void;
	/**
	 * Exit a parse tree produced by `SMTLIBv2Parser.prop_literal`.
	 * @param ctx the parse tree
	 */
	exitProp_literal?: (ctx: Prop_literalContext) => void;

	/**
	 * Enter a parse tree produced by `SMTLIBv2Parser.script`.
	 * @param ctx the parse tree
	 */
	enterScript?: (ctx: ScriptContext) => void;
	/**
	 * Exit a parse tree produced by `SMTLIBv2Parser.script`.
	 * @param ctx the parse tree
	 */
	exitScript?: (ctx: ScriptContext) => void;

	/**
	 * Enter a parse tree produced by `SMTLIBv2Parser.cmd_assert`.
	 * @param ctx the parse tree
	 */
	enterCmd_assert?: (ctx: Cmd_assertContext) => void;
	/**
	 * Exit a parse tree produced by `SMTLIBv2Parser.cmd_assert`.
	 * @param ctx the parse tree
	 */
	exitCmd_assert?: (ctx: Cmd_assertContext) => void;

	/**
	 * Enter a parse tree produced by `SMTLIBv2Parser.cmd_checkSat`.
	 * @param ctx the parse tree
	 */
	enterCmd_checkSat?: (ctx: Cmd_checkSatContext) => void;
	/**
	 * Exit a parse tree produced by `SMTLIBv2Parser.cmd_checkSat`.
	 * @param ctx the parse tree
	 */
	exitCmd_checkSat?: (ctx: Cmd_checkSatContext) => void;

	/**
	 * Enter a parse tree produced by `SMTLIBv2Parser.cmd_checkSatAssuming`.
	 * @param ctx the parse tree
	 */
	enterCmd_checkSatAssuming?: (ctx: Cmd_checkSatAssumingContext) => void;
	/**
	 * Exit a parse tree produced by `SMTLIBv2Parser.cmd_checkSatAssuming`.
	 * @param ctx the parse tree
	 */
	exitCmd_checkSatAssuming?: (ctx: Cmd_checkSatAssumingContext) => void;

	/**
	 * Enter a parse tree produced by `SMTLIBv2Parser.cmd_declareConst`.
	 * @param ctx the parse tree
	 */
	enterCmd_declareConst?: (ctx: Cmd_declareConstContext) => void;
	/**
	 * Exit a parse tree produced by `SMTLIBv2Parser.cmd_declareConst`.
	 * @param ctx the parse tree
	 */
	exitCmd_declareConst?: (ctx: Cmd_declareConstContext) => void;

	/**
	 * Enter a parse tree produced by `SMTLIBv2Parser.cmd_declareDatatype`.
	 * @param ctx the parse tree
	 */
	enterCmd_declareDatatype?: (ctx: Cmd_declareDatatypeContext) => void;
	/**
	 * Exit a parse tree produced by `SMTLIBv2Parser.cmd_declareDatatype`.
	 * @param ctx the parse tree
	 */
	exitCmd_declareDatatype?: (ctx: Cmd_declareDatatypeContext) => void;

	/**
	 * Enter a parse tree produced by `SMTLIBv2Parser.cmd_declareDatatypes`.
	 * @param ctx the parse tree
	 */
	enterCmd_declareDatatypes?: (ctx: Cmd_declareDatatypesContext) => void;
	/**
	 * Exit a parse tree produced by `SMTLIBv2Parser.cmd_declareDatatypes`.
	 * @param ctx the parse tree
	 */
	exitCmd_declareDatatypes?: (ctx: Cmd_declareDatatypesContext) => void;

	/**
	 * Enter a parse tree produced by `SMTLIBv2Parser.cmd_declareFun`.
	 * @param ctx the parse tree
	 */
	enterCmd_declareFun?: (ctx: Cmd_declareFunContext) => void;
	/**
	 * Exit a parse tree produced by `SMTLIBv2Parser.cmd_declareFun`.
	 * @param ctx the parse tree
	 */
	exitCmd_declareFun?: (ctx: Cmd_declareFunContext) => void;

	/**
	 * Enter a parse tree produced by `SMTLIBv2Parser.cmd_declareSort`.
	 * @param ctx the parse tree
	 */
	enterCmd_declareSort?: (ctx: Cmd_declareSortContext) => void;
	/**
	 * Exit a parse tree produced by `SMTLIBv2Parser.cmd_declareSort`.
	 * @param ctx the parse tree
	 */
	exitCmd_declareSort?: (ctx: Cmd_declareSortContext) => void;

	/**
	 * Enter a parse tree produced by `SMTLIBv2Parser.cmd_defineFun`.
	 * @param ctx the parse tree
	 */
	enterCmd_defineFun?: (ctx: Cmd_defineFunContext) => void;
	/**
	 * Exit a parse tree produced by `SMTLIBv2Parser.cmd_defineFun`.
	 * @param ctx the parse tree
	 */
	exitCmd_defineFun?: (ctx: Cmd_defineFunContext) => void;

	/**
	 * Enter a parse tree produced by `SMTLIBv2Parser.cmd_defineFunRec`.
	 * @param ctx the parse tree
	 */
	enterCmd_defineFunRec?: (ctx: Cmd_defineFunRecContext) => void;
	/**
	 * Exit a parse tree produced by `SMTLIBv2Parser.cmd_defineFunRec`.
	 * @param ctx the parse tree
	 */
	exitCmd_defineFunRec?: (ctx: Cmd_defineFunRecContext) => void;

	/**
	 * Enter a parse tree produced by `SMTLIBv2Parser.cmd_defineFunsRec`.
	 * @param ctx the parse tree
	 */
	enterCmd_defineFunsRec?: (ctx: Cmd_defineFunsRecContext) => void;
	/**
	 * Exit a parse tree produced by `SMTLIBv2Parser.cmd_defineFunsRec`.
	 * @param ctx the parse tree
	 */
	exitCmd_defineFunsRec?: (ctx: Cmd_defineFunsRecContext) => void;

	/**
	 * Enter a parse tree produced by `SMTLIBv2Parser.cmd_defineSort`.
	 * @param ctx the parse tree
	 */
	enterCmd_defineSort?: (ctx: Cmd_defineSortContext) => void;
	/**
	 * Exit a parse tree produced by `SMTLIBv2Parser.cmd_defineSort`.
	 * @param ctx the parse tree
	 */
	exitCmd_defineSort?: (ctx: Cmd_defineSortContext) => void;

	/**
	 * Enter a parse tree produced by `SMTLIBv2Parser.cmd_echo`.
	 * @param ctx the parse tree
	 */
	enterCmd_echo?: (ctx: Cmd_echoContext) => void;
	/**
	 * Exit a parse tree produced by `SMTLIBv2Parser.cmd_echo`.
	 * @param ctx the parse tree
	 */
	exitCmd_echo?: (ctx: Cmd_echoContext) => void;

	/**
	 * Enter a parse tree produced by `SMTLIBv2Parser.cmd_exit`.
	 * @param ctx the parse tree
	 */
	enterCmd_exit?: (ctx: Cmd_exitContext) => void;
	/**
	 * Exit a parse tree produced by `SMTLIBv2Parser.cmd_exit`.
	 * @param ctx the parse tree
	 */
	exitCmd_exit?: (ctx: Cmd_exitContext) => void;

	/**
	 * Enter a parse tree produced by `SMTLIBv2Parser.cmd_getAssertions`.
	 * @param ctx the parse tree
	 */
	enterCmd_getAssertions?: (ctx: Cmd_getAssertionsContext) => void;
	/**
	 * Exit a parse tree produced by `SMTLIBv2Parser.cmd_getAssertions`.
	 * @param ctx the parse tree
	 */
	exitCmd_getAssertions?: (ctx: Cmd_getAssertionsContext) => void;

	/**
	 * Enter a parse tree produced by `SMTLIBv2Parser.cmd_getAssignment`.
	 * @param ctx the parse tree
	 */
	enterCmd_getAssignment?: (ctx: Cmd_getAssignmentContext) => void;
	/**
	 * Exit a parse tree produced by `SMTLIBv2Parser.cmd_getAssignment`.
	 * @param ctx the parse tree
	 */
	exitCmd_getAssignment?: (ctx: Cmd_getAssignmentContext) => void;

	/**
	 * Enter a parse tree produced by `SMTLIBv2Parser.cmd_getInfo`.
	 * @param ctx the parse tree
	 */
	enterCmd_getInfo?: (ctx: Cmd_getInfoContext) => void;
	/**
	 * Exit a parse tree produced by `SMTLIBv2Parser.cmd_getInfo`.
	 * @param ctx the parse tree
	 */
	exitCmd_getInfo?: (ctx: Cmd_getInfoContext) => void;

	/**
	 * Enter a parse tree produced by `SMTLIBv2Parser.cmd_getModel`.
	 * @param ctx the parse tree
	 */
	enterCmd_getModel?: (ctx: Cmd_getModelContext) => void;
	/**
	 * Exit a parse tree produced by `SMTLIBv2Parser.cmd_getModel`.
	 * @param ctx the parse tree
	 */
	exitCmd_getModel?: (ctx: Cmd_getModelContext) => void;

	/**
	 * Enter a parse tree produced by `SMTLIBv2Parser.cmd_getOption`.
	 * @param ctx the parse tree
	 */
	enterCmd_getOption?: (ctx: Cmd_getOptionContext) => void;
	/**
	 * Exit a parse tree produced by `SMTLIBv2Parser.cmd_getOption`.
	 * @param ctx the parse tree
	 */
	exitCmd_getOption?: (ctx: Cmd_getOptionContext) => void;

	/**
	 * Enter a parse tree produced by `SMTLIBv2Parser.cmd_getProof`.
	 * @param ctx the parse tree
	 */
	enterCmd_getProof?: (ctx: Cmd_getProofContext) => void;
	/**
	 * Exit a parse tree produced by `SMTLIBv2Parser.cmd_getProof`.
	 * @param ctx the parse tree
	 */
	exitCmd_getProof?: (ctx: Cmd_getProofContext) => void;

	/**
	 * Enter a parse tree produced by `SMTLIBv2Parser.cmd_getUnsatAssumptions`.
	 * @param ctx the parse tree
	 */
	enterCmd_getUnsatAssumptions?: (ctx: Cmd_getUnsatAssumptionsContext) => void;
	/**
	 * Exit a parse tree produced by `SMTLIBv2Parser.cmd_getUnsatAssumptions`.
	 * @param ctx the parse tree
	 */
	exitCmd_getUnsatAssumptions?: (ctx: Cmd_getUnsatAssumptionsContext) => void;

	/**
	 * Enter a parse tree produced by `SMTLIBv2Parser.cmd_getUnsatCore`.
	 * @param ctx the parse tree
	 */
	enterCmd_getUnsatCore?: (ctx: Cmd_getUnsatCoreContext) => void;
	/**
	 * Exit a parse tree produced by `SMTLIBv2Parser.cmd_getUnsatCore`.
	 * @param ctx the parse tree
	 */
	exitCmd_getUnsatCore?: (ctx: Cmd_getUnsatCoreContext) => void;

	/**
	 * Enter a parse tree produced by `SMTLIBv2Parser.cmd_getValue`.
	 * @param ctx the parse tree
	 */
	enterCmd_getValue?: (ctx: Cmd_getValueContext) => void;
	/**
	 * Exit a parse tree produced by `SMTLIBv2Parser.cmd_getValue`.
	 * @param ctx the parse tree
	 */
	exitCmd_getValue?: (ctx: Cmd_getValueContext) => void;

	/**
	 * Enter a parse tree produced by `SMTLIBv2Parser.cmd_pop`.
	 * @param ctx the parse tree
	 */
	enterCmd_pop?: (ctx: Cmd_popContext) => void;
	/**
	 * Exit a parse tree produced by `SMTLIBv2Parser.cmd_pop`.
	 * @param ctx the parse tree
	 */
	exitCmd_pop?: (ctx: Cmd_popContext) => void;

	/**
	 * Enter a parse tree produced by `SMTLIBv2Parser.cmd_push`.
	 * @param ctx the parse tree
	 */
	enterCmd_push?: (ctx: Cmd_pushContext) => void;
	/**
	 * Exit a parse tree produced by `SMTLIBv2Parser.cmd_push`.
	 * @param ctx the parse tree
	 */
	exitCmd_push?: (ctx: Cmd_pushContext) => void;

	/**
	 * Enter a parse tree produced by `SMTLIBv2Parser.cmd_reset`.
	 * @param ctx the parse tree
	 */
	enterCmd_reset?: (ctx: Cmd_resetContext) => void;
	/**
	 * Exit a parse tree produced by `SMTLIBv2Parser.cmd_reset`.
	 * @param ctx the parse tree
	 */
	exitCmd_reset?: (ctx: Cmd_resetContext) => void;

	/**
	 * Enter a parse tree produced by `SMTLIBv2Parser.cmd_resetAssertions`.
	 * @param ctx the parse tree
	 */
	enterCmd_resetAssertions?: (ctx: Cmd_resetAssertionsContext) => void;
	/**
	 * Exit a parse tree produced by `SMTLIBv2Parser.cmd_resetAssertions`.
	 * @param ctx the parse tree
	 */
	exitCmd_resetAssertions?: (ctx: Cmd_resetAssertionsContext) => void;

	/**
	 * Enter a parse tree produced by `SMTLIBv2Parser.cmd_setInfo`.
	 * @param ctx the parse tree
	 */
	enterCmd_setInfo?: (ctx: Cmd_setInfoContext) => void;
	/**
	 * Exit a parse tree produced by `SMTLIBv2Parser.cmd_setInfo`.
	 * @param ctx the parse tree
	 */
	exitCmd_setInfo?: (ctx: Cmd_setInfoContext) => void;

	/**
	 * Enter a parse tree produced by `SMTLIBv2Parser.cmd_setLogic`.
	 * @param ctx the parse tree
	 */
	enterCmd_setLogic?: (ctx: Cmd_setLogicContext) => void;
	/**
	 * Exit a parse tree produced by `SMTLIBv2Parser.cmd_setLogic`.
	 * @param ctx the parse tree
	 */
	exitCmd_setLogic?: (ctx: Cmd_setLogicContext) => void;

	/**
	 * Enter a parse tree produced by `SMTLIBv2Parser.cmd_setOption`.
	 * @param ctx the parse tree
	 */
	enterCmd_setOption?: (ctx: Cmd_setOptionContext) => void;
	/**
	 * Exit a parse tree produced by `SMTLIBv2Parser.cmd_setOption`.
	 * @param ctx the parse tree
	 */
	exitCmd_setOption?: (ctx: Cmd_setOptionContext) => void;

	/**
	 * Enter a parse tree produced by `SMTLIBv2Parser.command`.
	 * @param ctx the parse tree
	 */
	enterCommand?: (ctx: CommandContext) => void;
	/**
	 * Exit a parse tree produced by `SMTLIBv2Parser.command`.
	 * @param ctx the parse tree
	 */
	exitCommand?: (ctx: CommandContext) => void;

	/**
	 * Enter a parse tree produced by `SMTLIBv2Parser.b_value`.
	 * @param ctx the parse tree
	 */
	enterB_value?: (ctx: B_valueContext) => void;
	/**
	 * Exit a parse tree produced by `SMTLIBv2Parser.b_value`.
	 * @param ctx the parse tree
	 */
	exitB_value?: (ctx: B_valueContext) => void;

	/**
	 * Enter a parse tree produced by `SMTLIBv2Parser.option`.
	 * @param ctx the parse tree
	 */
	enterOption?: (ctx: OptionContext) => void;
	/**
	 * Exit a parse tree produced by `SMTLIBv2Parser.option`.
	 * @param ctx the parse tree
	 */
	exitOption?: (ctx: OptionContext) => void;

	/**
	 * Enter a parse tree produced by `SMTLIBv2Parser.info_flag`.
	 * @param ctx the parse tree
	 */
	enterInfo_flag?: (ctx: Info_flagContext) => void;
	/**
	 * Exit a parse tree produced by `SMTLIBv2Parser.info_flag`.
	 * @param ctx the parse tree
	 */
	exitInfo_flag?: (ctx: Info_flagContext) => void;

	/**
	 * Enter a parse tree produced by `SMTLIBv2Parser.error_behaviour`.
	 * @param ctx the parse tree
	 */
	enterError_behaviour?: (ctx: Error_behaviourContext) => void;
	/**
	 * Exit a parse tree produced by `SMTLIBv2Parser.error_behaviour`.
	 * @param ctx the parse tree
	 */
	exitError_behaviour?: (ctx: Error_behaviourContext) => void;

	/**
	 * Enter a parse tree produced by `SMTLIBv2Parser.reason_unknown`.
	 * @param ctx the parse tree
	 */
	enterReason_unknown?: (ctx: Reason_unknownContext) => void;
	/**
	 * Exit a parse tree produced by `SMTLIBv2Parser.reason_unknown`.
	 * @param ctx the parse tree
	 */
	exitReason_unknown?: (ctx: Reason_unknownContext) => void;

	/**
	 * Enter a parse tree produced by `SMTLIBv2Parser.model_response`.
	 * @param ctx the parse tree
	 */
	enterModel_response?: (ctx: Model_responseContext) => void;
	/**
	 * Exit a parse tree produced by `SMTLIBv2Parser.model_response`.
	 * @param ctx the parse tree
	 */
	exitModel_response?: (ctx: Model_responseContext) => void;

	/**
	 * Enter a parse tree produced by `SMTLIBv2Parser.info_response`.
	 * @param ctx the parse tree
	 */
	enterInfo_response?: (ctx: Info_responseContext) => void;
	/**
	 * Exit a parse tree produced by `SMTLIBv2Parser.info_response`.
	 * @param ctx the parse tree
	 */
	exitInfo_response?: (ctx: Info_responseContext) => void;

	/**
	 * Enter a parse tree produced by `SMTLIBv2Parser.valuation_pair`.
	 * @param ctx the parse tree
	 */
	enterValuation_pair?: (ctx: Valuation_pairContext) => void;
	/**
	 * Exit a parse tree produced by `SMTLIBv2Parser.valuation_pair`.
	 * @param ctx the parse tree
	 */
	exitValuation_pair?: (ctx: Valuation_pairContext) => void;

	/**
	 * Enter a parse tree produced by `SMTLIBv2Parser.t_valuation_pair`.
	 * @param ctx the parse tree
	 */
	enterT_valuation_pair?: (ctx: T_valuation_pairContext) => void;
	/**
	 * Exit a parse tree produced by `SMTLIBv2Parser.t_valuation_pair`.
	 * @param ctx the parse tree
	 */
	exitT_valuation_pair?: (ctx: T_valuation_pairContext) => void;

	/**
	 * Enter a parse tree produced by `SMTLIBv2Parser.check_sat_response`.
	 * @param ctx the parse tree
	 */
	enterCheck_sat_response?: (ctx: Check_sat_responseContext) => void;
	/**
	 * Exit a parse tree produced by `SMTLIBv2Parser.check_sat_response`.
	 * @param ctx the parse tree
	 */
	exitCheck_sat_response?: (ctx: Check_sat_responseContext) => void;

	/**
	 * Enter a parse tree produced by `SMTLIBv2Parser.echo_response`.
	 * @param ctx the parse tree
	 */
	enterEcho_response?: (ctx: Echo_responseContext) => void;
	/**
	 * Exit a parse tree produced by `SMTLIBv2Parser.echo_response`.
	 * @param ctx the parse tree
	 */
	exitEcho_response?: (ctx: Echo_responseContext) => void;

	/**
	 * Enter a parse tree produced by `SMTLIBv2Parser.get_assertions_response`.
	 * @param ctx the parse tree
	 */
	enterGet_assertions_response?: (ctx: Get_assertions_responseContext) => void;
	/**
	 * Exit a parse tree produced by `SMTLIBv2Parser.get_assertions_response`.
	 * @param ctx the parse tree
	 */
	exitGet_assertions_response?: (ctx: Get_assertions_responseContext) => void;

	/**
	 * Enter a parse tree produced by `SMTLIBv2Parser.get_assignment_response`.
	 * @param ctx the parse tree
	 */
	enterGet_assignment_response?: (ctx: Get_assignment_responseContext) => void;
	/**
	 * Exit a parse tree produced by `SMTLIBv2Parser.get_assignment_response`.
	 * @param ctx the parse tree
	 */
	exitGet_assignment_response?: (ctx: Get_assignment_responseContext) => void;

	/**
	 * Enter a parse tree produced by `SMTLIBv2Parser.get_info_response`.
	 * @param ctx the parse tree
	 */
	enterGet_info_response?: (ctx: Get_info_responseContext) => void;
	/**
	 * Exit a parse tree produced by `SMTLIBv2Parser.get_info_response`.
	 * @param ctx the parse tree
	 */
	exitGet_info_response?: (ctx: Get_info_responseContext) => void;

	/**
	 * Enter a parse tree produced by `SMTLIBv2Parser.get_model_response`.
	 * @param ctx the parse tree
	 */
	enterGet_model_response?: (ctx: Get_model_responseContext) => void;
	/**
	 * Exit a parse tree produced by `SMTLIBv2Parser.get_model_response`.
	 * @param ctx the parse tree
	 */
	exitGet_model_response?: (ctx: Get_model_responseContext) => void;

	/**
	 * Enter a parse tree produced by `SMTLIBv2Parser.get_option_response`.
	 * @param ctx the parse tree
	 */
	enterGet_option_response?: (ctx: Get_option_responseContext) => void;
	/**
	 * Exit a parse tree produced by `SMTLIBv2Parser.get_option_response`.
	 * @param ctx the parse tree
	 */
	exitGet_option_response?: (ctx: Get_option_responseContext) => void;

	/**
	 * Enter a parse tree produced by `SMTLIBv2Parser.get_proof_response`.
	 * @param ctx the parse tree
	 */
	enterGet_proof_response?: (ctx: Get_proof_responseContext) => void;
	/**
	 * Exit a parse tree produced by `SMTLIBv2Parser.get_proof_response`.
	 * @param ctx the parse tree
	 */
	exitGet_proof_response?: (ctx: Get_proof_responseContext) => void;

	/**
	 * Enter a parse tree produced by `SMTLIBv2Parser.get_unsat_assump_response`.
	 * @param ctx the parse tree
	 */
	enterGet_unsat_assump_response?: (ctx: Get_unsat_assump_responseContext) => void;
	/**
	 * Exit a parse tree produced by `SMTLIBv2Parser.get_unsat_assump_response`.
	 * @param ctx the parse tree
	 */
	exitGet_unsat_assump_response?: (ctx: Get_unsat_assump_responseContext) => void;

	/**
	 * Enter a parse tree produced by `SMTLIBv2Parser.get_unsat_core_response`.
	 * @param ctx the parse tree
	 */
	enterGet_unsat_core_response?: (ctx: Get_unsat_core_responseContext) => void;
	/**
	 * Exit a parse tree produced by `SMTLIBv2Parser.get_unsat_core_response`.
	 * @param ctx the parse tree
	 */
	exitGet_unsat_core_response?: (ctx: Get_unsat_core_responseContext) => void;

	/**
	 * Enter a parse tree produced by `SMTLIBv2Parser.get_value_response`.
	 * @param ctx the parse tree
	 */
	enterGet_value_response?: (ctx: Get_value_responseContext) => void;
	/**
	 * Exit a parse tree produced by `SMTLIBv2Parser.get_value_response`.
	 * @param ctx the parse tree
	 */
	exitGet_value_response?: (ctx: Get_value_responseContext) => void;

	/**
	 * Enter a parse tree produced by `SMTLIBv2Parser.specific_success_response`.
	 * @param ctx the parse tree
	 */
	enterSpecific_success_response?: (ctx: Specific_success_responseContext) => void;
	/**
	 * Exit a parse tree produced by `SMTLIBv2Parser.specific_success_response`.
	 * @param ctx the parse tree
	 */
	exitSpecific_success_response?: (ctx: Specific_success_responseContext) => void;

	/**
	 * Enter a parse tree produced by `SMTLIBv2Parser.general_response`.
	 * @param ctx the parse tree
	 */
	enterGeneral_response?: (ctx: General_responseContext) => void;
	/**
	 * Exit a parse tree produced by `SMTLIBv2Parser.general_response`.
	 * @param ctx the parse tree
	 */
	exitGeneral_response?: (ctx: General_responseContext) => void;
}

