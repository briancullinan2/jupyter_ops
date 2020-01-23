// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/mdx/mdx.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { Mdx_statementContext } from "./mdxParser";
import { Select_statementContext } from "./mdxParser";
import { Formula_specificationContext } from "./mdxParser";
import { Single_formula_specificationContext } from "./mdxParser";
import { Set_specificationContext } from "./mdxParser";
import { Member_specificationContext } from "./mdxParser";
import { Axis_specification_listContext } from "./mdxParser";
import { Member_property_def_listContext } from "./mdxParser";
import { Member_nameContext } from "./mdxParser";
import { Member_property_definitionContext } from "./mdxParser";
import { Set_nameContext } from "./mdxParser";
import { Compound_idContext } from "./mdxParser";
import { Axis_specificationContext } from "./mdxParser";
import { Axis_nameContext } from "./mdxParser";
import { Dim_propsContext } from "./mdxParser";
import { Property_listContext } from "./mdxParser";
import { PropertyContext } from "./mdxParser";
import { Cube_specificationContext } from "./mdxParser";
import { Cube_nameContext } from "./mdxParser";
import { Slicer_specificationContext } from "./mdxParser";
import { Cell_propsContext } from "./mdxParser";
import { Cell_property_listContext } from "./mdxParser";
import { Cell_propertyContext } from "./mdxParser";
import { Mandatory_cell_propertyContext } from "./mdxParser";
import { Provider_specific_cell_propertyContext } from "./mdxParser";
import { ExpressionContext } from "./mdxParser";
import { Value_expressionContext } from "./mdxParser";
import { Value_xor_expressionContext } from "./mdxParser";
import { Value_or_expressionContext } from "./mdxParser";
import { Term5Context } from "./mdxParser";
import { Term4Context } from "./mdxParser";
import { Term3Context } from "./mdxParser";
import { Term2Context } from "./mdxParser";
import { TermContext } from "./mdxParser";
import { FactorContext } from "./mdxParser";
import { FunctionContext } from "./mdxParser";
import { Value_expression_primaryContext } from "./mdxParser";
import { Value_expression_primary0Context } from "./mdxParser";
import { Exp_listContext } from "./mdxParser";
import { Case_expressionContext } from "./mdxParser";
import { When_listContext } from "./mdxParser";
import { When_clauseContext } from "./mdxParser";
import { Comp_opContext } from "./mdxParser";
import { IdentifierContext } from "./mdxParser";
import { Unquoted_identifierContext } from "./mdxParser";
import { Amp_quoted_identifierContext } from "./mdxParser";
import { Quoted_identifierContext } from "./mdxParser";
import { KeywordContext } from "./mdxParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `mdxParser`.
 */
export interface mdxListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `mdxParser.mdx_statement`.
	 * @param ctx the parse tree
	 */
	enterMdx_statement?: (ctx: Mdx_statementContext) => void;
	/**
	 * Exit a parse tree produced by `mdxParser.mdx_statement`.
	 * @param ctx the parse tree
	 */
	exitMdx_statement?: (ctx: Mdx_statementContext) => void;

	/**
	 * Enter a parse tree produced by `mdxParser.select_statement`.
	 * @param ctx the parse tree
	 */
	enterSelect_statement?: (ctx: Select_statementContext) => void;
	/**
	 * Exit a parse tree produced by `mdxParser.select_statement`.
	 * @param ctx the parse tree
	 */
	exitSelect_statement?: (ctx: Select_statementContext) => void;

	/**
	 * Enter a parse tree produced by `mdxParser.formula_specification`.
	 * @param ctx the parse tree
	 */
	enterFormula_specification?: (ctx: Formula_specificationContext) => void;
	/**
	 * Exit a parse tree produced by `mdxParser.formula_specification`.
	 * @param ctx the parse tree
	 */
	exitFormula_specification?: (ctx: Formula_specificationContext) => void;

	/**
	 * Enter a parse tree produced by `mdxParser.single_formula_specification`.
	 * @param ctx the parse tree
	 */
	enterSingle_formula_specification?: (ctx: Single_formula_specificationContext) => void;
	/**
	 * Exit a parse tree produced by `mdxParser.single_formula_specification`.
	 * @param ctx the parse tree
	 */
	exitSingle_formula_specification?: (ctx: Single_formula_specificationContext) => void;

	/**
	 * Enter a parse tree produced by `mdxParser.set_specification`.
	 * @param ctx the parse tree
	 */
	enterSet_specification?: (ctx: Set_specificationContext) => void;
	/**
	 * Exit a parse tree produced by `mdxParser.set_specification`.
	 * @param ctx the parse tree
	 */
	exitSet_specification?: (ctx: Set_specificationContext) => void;

	/**
	 * Enter a parse tree produced by `mdxParser.member_specification`.
	 * @param ctx the parse tree
	 */
	enterMember_specification?: (ctx: Member_specificationContext) => void;
	/**
	 * Exit a parse tree produced by `mdxParser.member_specification`.
	 * @param ctx the parse tree
	 */
	exitMember_specification?: (ctx: Member_specificationContext) => void;

	/**
	 * Enter a parse tree produced by `mdxParser.axis_specification_list`.
	 * @param ctx the parse tree
	 */
	enterAxis_specification_list?: (ctx: Axis_specification_listContext) => void;
	/**
	 * Exit a parse tree produced by `mdxParser.axis_specification_list`.
	 * @param ctx the parse tree
	 */
	exitAxis_specification_list?: (ctx: Axis_specification_listContext) => void;

	/**
	 * Enter a parse tree produced by `mdxParser.member_property_def_list`.
	 * @param ctx the parse tree
	 */
	enterMember_property_def_list?: (ctx: Member_property_def_listContext) => void;
	/**
	 * Exit a parse tree produced by `mdxParser.member_property_def_list`.
	 * @param ctx the parse tree
	 */
	exitMember_property_def_list?: (ctx: Member_property_def_listContext) => void;

	/**
	 * Enter a parse tree produced by `mdxParser.member_name`.
	 * @param ctx the parse tree
	 */
	enterMember_name?: (ctx: Member_nameContext) => void;
	/**
	 * Exit a parse tree produced by `mdxParser.member_name`.
	 * @param ctx the parse tree
	 */
	exitMember_name?: (ctx: Member_nameContext) => void;

	/**
	 * Enter a parse tree produced by `mdxParser.member_property_definition`.
	 * @param ctx the parse tree
	 */
	enterMember_property_definition?: (ctx: Member_property_definitionContext) => void;
	/**
	 * Exit a parse tree produced by `mdxParser.member_property_definition`.
	 * @param ctx the parse tree
	 */
	exitMember_property_definition?: (ctx: Member_property_definitionContext) => void;

	/**
	 * Enter a parse tree produced by `mdxParser.set_name`.
	 * @param ctx the parse tree
	 */
	enterSet_name?: (ctx: Set_nameContext) => void;
	/**
	 * Exit a parse tree produced by `mdxParser.set_name`.
	 * @param ctx the parse tree
	 */
	exitSet_name?: (ctx: Set_nameContext) => void;

	/**
	 * Enter a parse tree produced by `mdxParser.compound_id`.
	 * @param ctx the parse tree
	 */
	enterCompound_id?: (ctx: Compound_idContext) => void;
	/**
	 * Exit a parse tree produced by `mdxParser.compound_id`.
	 * @param ctx the parse tree
	 */
	exitCompound_id?: (ctx: Compound_idContext) => void;

	/**
	 * Enter a parse tree produced by `mdxParser.axis_specification`.
	 * @param ctx the parse tree
	 */
	enterAxis_specification?: (ctx: Axis_specificationContext) => void;
	/**
	 * Exit a parse tree produced by `mdxParser.axis_specification`.
	 * @param ctx the parse tree
	 */
	exitAxis_specification?: (ctx: Axis_specificationContext) => void;

	/**
	 * Enter a parse tree produced by `mdxParser.axis_name`.
	 * @param ctx the parse tree
	 */
	enterAxis_name?: (ctx: Axis_nameContext) => void;
	/**
	 * Exit a parse tree produced by `mdxParser.axis_name`.
	 * @param ctx the parse tree
	 */
	exitAxis_name?: (ctx: Axis_nameContext) => void;

	/**
	 * Enter a parse tree produced by `mdxParser.dim_props`.
	 * @param ctx the parse tree
	 */
	enterDim_props?: (ctx: Dim_propsContext) => void;
	/**
	 * Exit a parse tree produced by `mdxParser.dim_props`.
	 * @param ctx the parse tree
	 */
	exitDim_props?: (ctx: Dim_propsContext) => void;

	/**
	 * Enter a parse tree produced by `mdxParser.property_list`.
	 * @param ctx the parse tree
	 */
	enterProperty_list?: (ctx: Property_listContext) => void;
	/**
	 * Exit a parse tree produced by `mdxParser.property_list`.
	 * @param ctx the parse tree
	 */
	exitProperty_list?: (ctx: Property_listContext) => void;

	/**
	 * Enter a parse tree produced by `mdxParser.property`.
	 * @param ctx the parse tree
	 */
	enterProperty?: (ctx: PropertyContext) => void;
	/**
	 * Exit a parse tree produced by `mdxParser.property`.
	 * @param ctx the parse tree
	 */
	exitProperty?: (ctx: PropertyContext) => void;

	/**
	 * Enter a parse tree produced by `mdxParser.cube_specification`.
	 * @param ctx the parse tree
	 */
	enterCube_specification?: (ctx: Cube_specificationContext) => void;
	/**
	 * Exit a parse tree produced by `mdxParser.cube_specification`.
	 * @param ctx the parse tree
	 */
	exitCube_specification?: (ctx: Cube_specificationContext) => void;

	/**
	 * Enter a parse tree produced by `mdxParser.cube_name`.
	 * @param ctx the parse tree
	 */
	enterCube_name?: (ctx: Cube_nameContext) => void;
	/**
	 * Exit a parse tree produced by `mdxParser.cube_name`.
	 * @param ctx the parse tree
	 */
	exitCube_name?: (ctx: Cube_nameContext) => void;

	/**
	 * Enter a parse tree produced by `mdxParser.slicer_specification`.
	 * @param ctx the parse tree
	 */
	enterSlicer_specification?: (ctx: Slicer_specificationContext) => void;
	/**
	 * Exit a parse tree produced by `mdxParser.slicer_specification`.
	 * @param ctx the parse tree
	 */
	exitSlicer_specification?: (ctx: Slicer_specificationContext) => void;

	/**
	 * Enter a parse tree produced by `mdxParser.cell_props`.
	 * @param ctx the parse tree
	 */
	enterCell_props?: (ctx: Cell_propsContext) => void;
	/**
	 * Exit a parse tree produced by `mdxParser.cell_props`.
	 * @param ctx the parse tree
	 */
	exitCell_props?: (ctx: Cell_propsContext) => void;

	/**
	 * Enter a parse tree produced by `mdxParser.cell_property_list`.
	 * @param ctx the parse tree
	 */
	enterCell_property_list?: (ctx: Cell_property_listContext) => void;
	/**
	 * Exit a parse tree produced by `mdxParser.cell_property_list`.
	 * @param ctx the parse tree
	 */
	exitCell_property_list?: (ctx: Cell_property_listContext) => void;

	/**
	 * Enter a parse tree produced by `mdxParser.cell_property`.
	 * @param ctx the parse tree
	 */
	enterCell_property?: (ctx: Cell_propertyContext) => void;
	/**
	 * Exit a parse tree produced by `mdxParser.cell_property`.
	 * @param ctx the parse tree
	 */
	exitCell_property?: (ctx: Cell_propertyContext) => void;

	/**
	 * Enter a parse tree produced by `mdxParser.mandatory_cell_property`.
	 * @param ctx the parse tree
	 */
	enterMandatory_cell_property?: (ctx: Mandatory_cell_propertyContext) => void;
	/**
	 * Exit a parse tree produced by `mdxParser.mandatory_cell_property`.
	 * @param ctx the parse tree
	 */
	exitMandatory_cell_property?: (ctx: Mandatory_cell_propertyContext) => void;

	/**
	 * Enter a parse tree produced by `mdxParser.provider_specific_cell_property`.
	 * @param ctx the parse tree
	 */
	enterProvider_specific_cell_property?: (ctx: Provider_specific_cell_propertyContext) => void;
	/**
	 * Exit a parse tree produced by `mdxParser.provider_specific_cell_property`.
	 * @param ctx the parse tree
	 */
	exitProvider_specific_cell_property?: (ctx: Provider_specific_cell_propertyContext) => void;

	/**
	 * Enter a parse tree produced by `mdxParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `mdxParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `mdxParser.value_expression`.
	 * @param ctx the parse tree
	 */
	enterValue_expression?: (ctx: Value_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `mdxParser.value_expression`.
	 * @param ctx the parse tree
	 */
	exitValue_expression?: (ctx: Value_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `mdxParser.value_xor_expression`.
	 * @param ctx the parse tree
	 */
	enterValue_xor_expression?: (ctx: Value_xor_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `mdxParser.value_xor_expression`.
	 * @param ctx the parse tree
	 */
	exitValue_xor_expression?: (ctx: Value_xor_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `mdxParser.value_or_expression`.
	 * @param ctx the parse tree
	 */
	enterValue_or_expression?: (ctx: Value_or_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `mdxParser.value_or_expression`.
	 * @param ctx the parse tree
	 */
	exitValue_or_expression?: (ctx: Value_or_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `mdxParser.term5`.
	 * @param ctx the parse tree
	 */
	enterTerm5?: (ctx: Term5Context) => void;
	/**
	 * Exit a parse tree produced by `mdxParser.term5`.
	 * @param ctx the parse tree
	 */
	exitTerm5?: (ctx: Term5Context) => void;

	/**
	 * Enter a parse tree produced by `mdxParser.term4`.
	 * @param ctx the parse tree
	 */
	enterTerm4?: (ctx: Term4Context) => void;
	/**
	 * Exit a parse tree produced by `mdxParser.term4`.
	 * @param ctx the parse tree
	 */
	exitTerm4?: (ctx: Term4Context) => void;

	/**
	 * Enter a parse tree produced by `mdxParser.term3`.
	 * @param ctx the parse tree
	 */
	enterTerm3?: (ctx: Term3Context) => void;
	/**
	 * Exit a parse tree produced by `mdxParser.term3`.
	 * @param ctx the parse tree
	 */
	exitTerm3?: (ctx: Term3Context) => void;

	/**
	 * Enter a parse tree produced by `mdxParser.term2`.
	 * @param ctx the parse tree
	 */
	enterTerm2?: (ctx: Term2Context) => void;
	/**
	 * Exit a parse tree produced by `mdxParser.term2`.
	 * @param ctx the parse tree
	 */
	exitTerm2?: (ctx: Term2Context) => void;

	/**
	 * Enter a parse tree produced by `mdxParser.term`.
	 * @param ctx the parse tree
	 */
	enterTerm?: (ctx: TermContext) => void;
	/**
	 * Exit a parse tree produced by `mdxParser.term`.
	 * @param ctx the parse tree
	 */
	exitTerm?: (ctx: TermContext) => void;

	/**
	 * Enter a parse tree produced by `mdxParser.factor`.
	 * @param ctx the parse tree
	 */
	enterFactor?: (ctx: FactorContext) => void;
	/**
	 * Exit a parse tree produced by `mdxParser.factor`.
	 * @param ctx the parse tree
	 */
	exitFactor?: (ctx: FactorContext) => void;

	/**
	 * Enter a parse tree produced by `mdxParser.function`.
	 * @param ctx the parse tree
	 */
	enterFunction?: (ctx: FunctionContext) => void;
	/**
	 * Exit a parse tree produced by `mdxParser.function`.
	 * @param ctx the parse tree
	 */
	exitFunction?: (ctx: FunctionContext) => void;

	/**
	 * Enter a parse tree produced by `mdxParser.value_expression_primary`.
	 * @param ctx the parse tree
	 */
	enterValue_expression_primary?: (ctx: Value_expression_primaryContext) => void;
	/**
	 * Exit a parse tree produced by `mdxParser.value_expression_primary`.
	 * @param ctx the parse tree
	 */
	exitValue_expression_primary?: (ctx: Value_expression_primaryContext) => void;

	/**
	 * Enter a parse tree produced by `mdxParser.value_expression_primary0`.
	 * @param ctx the parse tree
	 */
	enterValue_expression_primary0?: (ctx: Value_expression_primary0Context) => void;
	/**
	 * Exit a parse tree produced by `mdxParser.value_expression_primary0`.
	 * @param ctx the parse tree
	 */
	exitValue_expression_primary0?: (ctx: Value_expression_primary0Context) => void;

	/**
	 * Enter a parse tree produced by `mdxParser.exp_list`.
	 * @param ctx the parse tree
	 */
	enterExp_list?: (ctx: Exp_listContext) => void;
	/**
	 * Exit a parse tree produced by `mdxParser.exp_list`.
	 * @param ctx the parse tree
	 */
	exitExp_list?: (ctx: Exp_listContext) => void;

	/**
	 * Enter a parse tree produced by `mdxParser.case_expression`.
	 * @param ctx the parse tree
	 */
	enterCase_expression?: (ctx: Case_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `mdxParser.case_expression`.
	 * @param ctx the parse tree
	 */
	exitCase_expression?: (ctx: Case_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `mdxParser.when_list`.
	 * @param ctx the parse tree
	 */
	enterWhen_list?: (ctx: When_listContext) => void;
	/**
	 * Exit a parse tree produced by `mdxParser.when_list`.
	 * @param ctx the parse tree
	 */
	exitWhen_list?: (ctx: When_listContext) => void;

	/**
	 * Enter a parse tree produced by `mdxParser.when_clause`.
	 * @param ctx the parse tree
	 */
	enterWhen_clause?: (ctx: When_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `mdxParser.when_clause`.
	 * @param ctx the parse tree
	 */
	exitWhen_clause?: (ctx: When_clauseContext) => void;

	/**
	 * Enter a parse tree produced by `mdxParser.comp_op`.
	 * @param ctx the parse tree
	 */
	enterComp_op?: (ctx: Comp_opContext) => void;
	/**
	 * Exit a parse tree produced by `mdxParser.comp_op`.
	 * @param ctx the parse tree
	 */
	exitComp_op?: (ctx: Comp_opContext) => void;

	/**
	 * Enter a parse tree produced by `mdxParser.identifier`.
	 * @param ctx the parse tree
	 */
	enterIdentifier?: (ctx: IdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `mdxParser.identifier`.
	 * @param ctx the parse tree
	 */
	exitIdentifier?: (ctx: IdentifierContext) => void;

	/**
	 * Enter a parse tree produced by `mdxParser.unquoted_identifier`.
	 * @param ctx the parse tree
	 */
	enterUnquoted_identifier?: (ctx: Unquoted_identifierContext) => void;
	/**
	 * Exit a parse tree produced by `mdxParser.unquoted_identifier`.
	 * @param ctx the parse tree
	 */
	exitUnquoted_identifier?: (ctx: Unquoted_identifierContext) => void;

	/**
	 * Enter a parse tree produced by `mdxParser.amp_quoted_identifier`.
	 * @param ctx the parse tree
	 */
	enterAmp_quoted_identifier?: (ctx: Amp_quoted_identifierContext) => void;
	/**
	 * Exit a parse tree produced by `mdxParser.amp_quoted_identifier`.
	 * @param ctx the parse tree
	 */
	exitAmp_quoted_identifier?: (ctx: Amp_quoted_identifierContext) => void;

	/**
	 * Enter a parse tree produced by `mdxParser.quoted_identifier`.
	 * @param ctx the parse tree
	 */
	enterQuoted_identifier?: (ctx: Quoted_identifierContext) => void;
	/**
	 * Exit a parse tree produced by `mdxParser.quoted_identifier`.
	 * @param ctx the parse tree
	 */
	exitQuoted_identifier?: (ctx: Quoted_identifierContext) => void;

	/**
	 * Enter a parse tree produced by `mdxParser.keyword`.
	 * @param ctx the parse tree
	 */
	enterKeyword?: (ctx: KeywordContext) => void;
	/**
	 * Exit a parse tree produced by `mdxParser.keyword`.
	 * @param ctx the parse tree
	 */
	exitKeyword?: (ctx: KeywordContext) => void;
}

