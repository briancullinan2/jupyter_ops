// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/mdx/mdx.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `mdxParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface mdxVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `mdxParser.mdx_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMdx_statement?: (ctx: Mdx_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `mdxParser.select_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelect_statement?: (ctx: Select_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `mdxParser.formula_specification`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFormula_specification?: (ctx: Formula_specificationContext) => Result;

	/**
	 * Visit a parse tree produced by `mdxParser.single_formula_specification`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSingle_formula_specification?: (ctx: Single_formula_specificationContext) => Result;

	/**
	 * Visit a parse tree produced by `mdxParser.set_specification`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSet_specification?: (ctx: Set_specificationContext) => Result;

	/**
	 * Visit a parse tree produced by `mdxParser.member_specification`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMember_specification?: (ctx: Member_specificationContext) => Result;

	/**
	 * Visit a parse tree produced by `mdxParser.axis_specification_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAxis_specification_list?: (ctx: Axis_specification_listContext) => Result;

	/**
	 * Visit a parse tree produced by `mdxParser.member_property_def_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMember_property_def_list?: (ctx: Member_property_def_listContext) => Result;

	/**
	 * Visit a parse tree produced by `mdxParser.member_name`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMember_name?: (ctx: Member_nameContext) => Result;

	/**
	 * Visit a parse tree produced by `mdxParser.member_property_definition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMember_property_definition?: (ctx: Member_property_definitionContext) => Result;

	/**
	 * Visit a parse tree produced by `mdxParser.set_name`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSet_name?: (ctx: Set_nameContext) => Result;

	/**
	 * Visit a parse tree produced by `mdxParser.compound_id`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCompound_id?: (ctx: Compound_idContext) => Result;

	/**
	 * Visit a parse tree produced by `mdxParser.axis_specification`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAxis_specification?: (ctx: Axis_specificationContext) => Result;

	/**
	 * Visit a parse tree produced by `mdxParser.axis_name`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAxis_name?: (ctx: Axis_nameContext) => Result;

	/**
	 * Visit a parse tree produced by `mdxParser.dim_props`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDim_props?: (ctx: Dim_propsContext) => Result;

	/**
	 * Visit a parse tree produced by `mdxParser.property_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProperty_list?: (ctx: Property_listContext) => Result;

	/**
	 * Visit a parse tree produced by `mdxParser.property`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProperty?: (ctx: PropertyContext) => Result;

	/**
	 * Visit a parse tree produced by `mdxParser.cube_specification`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCube_specification?: (ctx: Cube_specificationContext) => Result;

	/**
	 * Visit a parse tree produced by `mdxParser.cube_name`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCube_name?: (ctx: Cube_nameContext) => Result;

	/**
	 * Visit a parse tree produced by `mdxParser.slicer_specification`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSlicer_specification?: (ctx: Slicer_specificationContext) => Result;

	/**
	 * Visit a parse tree produced by `mdxParser.cell_props`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCell_props?: (ctx: Cell_propsContext) => Result;

	/**
	 * Visit a parse tree produced by `mdxParser.cell_property_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCell_property_list?: (ctx: Cell_property_listContext) => Result;

	/**
	 * Visit a parse tree produced by `mdxParser.cell_property`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCell_property?: (ctx: Cell_propertyContext) => Result;

	/**
	 * Visit a parse tree produced by `mdxParser.mandatory_cell_property`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMandatory_cell_property?: (ctx: Mandatory_cell_propertyContext) => Result;

	/**
	 * Visit a parse tree produced by `mdxParser.provider_specific_cell_property`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProvider_specific_cell_property?: (ctx: Provider_specific_cell_propertyContext) => Result;

	/**
	 * Visit a parse tree produced by `mdxParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `mdxParser.value_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValue_expression?: (ctx: Value_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `mdxParser.value_xor_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValue_xor_expression?: (ctx: Value_xor_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `mdxParser.value_or_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValue_or_expression?: (ctx: Value_or_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `mdxParser.term5`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTerm5?: (ctx: Term5Context) => Result;

	/**
	 * Visit a parse tree produced by `mdxParser.term4`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTerm4?: (ctx: Term4Context) => Result;

	/**
	 * Visit a parse tree produced by `mdxParser.term3`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTerm3?: (ctx: Term3Context) => Result;

	/**
	 * Visit a parse tree produced by `mdxParser.term2`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTerm2?: (ctx: Term2Context) => Result;

	/**
	 * Visit a parse tree produced by `mdxParser.term`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTerm?: (ctx: TermContext) => Result;

	/**
	 * Visit a parse tree produced by `mdxParser.factor`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFactor?: (ctx: FactorContext) => Result;

	/**
	 * Visit a parse tree produced by `mdxParser.function`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunction?: (ctx: FunctionContext) => Result;

	/**
	 * Visit a parse tree produced by `mdxParser.value_expression_primary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValue_expression_primary?: (ctx: Value_expression_primaryContext) => Result;

	/**
	 * Visit a parse tree produced by `mdxParser.value_expression_primary0`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValue_expression_primary0?: (ctx: Value_expression_primary0Context) => Result;

	/**
	 * Visit a parse tree produced by `mdxParser.exp_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExp_list?: (ctx: Exp_listContext) => Result;

	/**
	 * Visit a parse tree produced by `mdxParser.case_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCase_expression?: (ctx: Case_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `mdxParser.when_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhen_list?: (ctx: When_listContext) => Result;

	/**
	 * Visit a parse tree produced by `mdxParser.when_clause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhen_clause?: (ctx: When_clauseContext) => Result;

	/**
	 * Visit a parse tree produced by `mdxParser.comp_op`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComp_op?: (ctx: Comp_opContext) => Result;

	/**
	 * Visit a parse tree produced by `mdxParser.identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifier?: (ctx: IdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by `mdxParser.unquoted_identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnquoted_identifier?: (ctx: Unquoted_identifierContext) => Result;

	/**
	 * Visit a parse tree produced by `mdxParser.amp_quoted_identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAmp_quoted_identifier?: (ctx: Amp_quoted_identifierContext) => Result;

	/**
	 * Visit a parse tree produced by `mdxParser.quoted_identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQuoted_identifier?: (ctx: Quoted_identifierContext) => Result;

	/**
	 * Visit a parse tree produced by `mdxParser.keyword`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKeyword?: (ctx: KeywordContext) => Result;
}

