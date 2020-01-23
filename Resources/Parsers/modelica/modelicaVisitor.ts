// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/modelica/modelica.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { Stored_definitionContext } from "./modelicaParser";
import { Class_definitionContext } from "./modelicaParser";
import { Class_specifierContext } from "./modelicaParser";
import { Class_prefixesContext } from "./modelicaParser";
import { Long_class_specifierContext } from "./modelicaParser";
import { Short_class_specifierContext } from "./modelicaParser";
import { Der_class_specifierContext } from "./modelicaParser";
import { Base_prefixContext } from "./modelicaParser";
import { Enum_listContext } from "./modelicaParser";
import { Enumeration_literalContext } from "./modelicaParser";
import { CompositionContext } from "./modelicaParser";
import { Language_specificationContext } from "./modelicaParser";
import { External_function_callContext } from "./modelicaParser";
import { Element_listContext } from "./modelicaParser";
import { ElementContext } from "./modelicaParser";
import { Import_clauseContext } from "./modelicaParser";
import { Import_listContext } from "./modelicaParser";
import { Extends_clauseContext } from "./modelicaParser";
import { Constraining_clauseContext } from "./modelicaParser";
import { Component_clauseContext } from "./modelicaParser";
import { Type_prefixContext } from "./modelicaParser";
import { Type_specifierContext } from "./modelicaParser";
import { Component_listContext } from "./modelicaParser";
import { Component_declarationContext } from "./modelicaParser";
import { Condition_attributeContext } from "./modelicaParser";
import { DeclarationContext } from "./modelicaParser";
import { ModificationContext } from "./modelicaParser";
import { Class_modificationContext } from "./modelicaParser";
import { Argument_listContext } from "./modelicaParser";
import { ArgumentContext } from "./modelicaParser";
import { Element_modification_or_replaceableContext } from "./modelicaParser";
import { Element_modificationContext } from "./modelicaParser";
import { Element_redeclarationContext } from "./modelicaParser";
import { Element_replaceableContext } from "./modelicaParser";
import { Component_clause1Context } from "./modelicaParser";
import { Component_declaration1Context } from "./modelicaParser";
import { Short_class_definitionContext } from "./modelicaParser";
import { Equation_sectionContext } from "./modelicaParser";
import { Algorithm_sectionContext } from "./modelicaParser";
import { EquationContext } from "./modelicaParser";
import { StatementContext } from "./modelicaParser";
import { If_equationContext } from "./modelicaParser";
import { If_statementContext } from "./modelicaParser";
import { For_equationContext } from "./modelicaParser";
import { For_statementContext } from "./modelicaParser";
import { For_indicesContext } from "./modelicaParser";
import { For_indexContext } from "./modelicaParser";
import { While_statementContext } from "./modelicaParser";
import { When_equationContext } from "./modelicaParser";
import { When_statementContext } from "./modelicaParser";
import { Connect_clauseContext } from "./modelicaParser";
import { ExpressionContext } from "./modelicaParser";
import { Simple_expressionContext } from "./modelicaParser";
import { Logical_expressionContext } from "./modelicaParser";
import { Logical_termContext } from "./modelicaParser";
import { Logical_factorContext } from "./modelicaParser";
import { RelationContext } from "./modelicaParser";
import { Rel_opContext } from "./modelicaParser";
import { Arithmetic_expressionContext } from "./modelicaParser";
import { Add_opContext } from "./modelicaParser";
import { TermContext } from "./modelicaParser";
import { Mul_opContext } from "./modelicaParser";
import { FactorContext } from "./modelicaParser";
import { PrimaryContext } from "./modelicaParser";
import { NameContext } from "./modelicaParser";
import { Component_referenceContext } from "./modelicaParser";
import { Function_call_argsContext } from "./modelicaParser";
import { Function_argumentsContext } from "./modelicaParser";
import { Named_argumentsContext } from "./modelicaParser";
import { Named_argumentContext } from "./modelicaParser";
import { Function_argumentContext } from "./modelicaParser";
import { Output_expression_listContext } from "./modelicaParser";
import { Expression_listContext } from "./modelicaParser";
import { Array_subscriptsContext } from "./modelicaParser";
import { SubscriptContext } from "./modelicaParser";
import { CommentContext } from "./modelicaParser";
import { String_commentContext } from "./modelicaParser";
import { AnnotationContext } from "./modelicaParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `modelicaParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface modelicaVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `modelicaParser.stored_definition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStored_definition?: (ctx: Stored_definitionContext) => Result;

	/**
	 * Visit a parse tree produced by `modelicaParser.class_definition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClass_definition?: (ctx: Class_definitionContext) => Result;

	/**
	 * Visit a parse tree produced by `modelicaParser.class_specifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClass_specifier?: (ctx: Class_specifierContext) => Result;

	/**
	 * Visit a parse tree produced by `modelicaParser.class_prefixes`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClass_prefixes?: (ctx: Class_prefixesContext) => Result;

	/**
	 * Visit a parse tree produced by `modelicaParser.long_class_specifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLong_class_specifier?: (ctx: Long_class_specifierContext) => Result;

	/**
	 * Visit a parse tree produced by `modelicaParser.short_class_specifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShort_class_specifier?: (ctx: Short_class_specifierContext) => Result;

	/**
	 * Visit a parse tree produced by `modelicaParser.der_class_specifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDer_class_specifier?: (ctx: Der_class_specifierContext) => Result;

	/**
	 * Visit a parse tree produced by `modelicaParser.base_prefix`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBase_prefix?: (ctx: Base_prefixContext) => Result;

	/**
	 * Visit a parse tree produced by `modelicaParser.enum_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnum_list?: (ctx: Enum_listContext) => Result;

	/**
	 * Visit a parse tree produced by `modelicaParser.enumeration_literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumeration_literal?: (ctx: Enumeration_literalContext) => Result;

	/**
	 * Visit a parse tree produced by `modelicaParser.composition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComposition?: (ctx: CompositionContext) => Result;

	/**
	 * Visit a parse tree produced by `modelicaParser.language_specification`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLanguage_specification?: (ctx: Language_specificationContext) => Result;

	/**
	 * Visit a parse tree produced by `modelicaParser.external_function_call`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExternal_function_call?: (ctx: External_function_callContext) => Result;

	/**
	 * Visit a parse tree produced by `modelicaParser.element_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElement_list?: (ctx: Element_listContext) => Result;

	/**
	 * Visit a parse tree produced by `modelicaParser.element`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElement?: (ctx: ElementContext) => Result;

	/**
	 * Visit a parse tree produced by `modelicaParser.import_clause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImport_clause?: (ctx: Import_clauseContext) => Result;

	/**
	 * Visit a parse tree produced by `modelicaParser.import_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImport_list?: (ctx: Import_listContext) => Result;

	/**
	 * Visit a parse tree produced by `modelicaParser.extends_clause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExtends_clause?: (ctx: Extends_clauseContext) => Result;

	/**
	 * Visit a parse tree produced by `modelicaParser.constraining_clause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstraining_clause?: (ctx: Constraining_clauseContext) => Result;

	/**
	 * Visit a parse tree produced by `modelicaParser.component_clause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComponent_clause?: (ctx: Component_clauseContext) => Result;

	/**
	 * Visit a parse tree produced by `modelicaParser.type_prefix`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitType_prefix?: (ctx: Type_prefixContext) => Result;

	/**
	 * Visit a parse tree produced by `modelicaParser.type_specifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitType_specifier?: (ctx: Type_specifierContext) => Result;

	/**
	 * Visit a parse tree produced by `modelicaParser.component_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComponent_list?: (ctx: Component_listContext) => Result;

	/**
	 * Visit a parse tree produced by `modelicaParser.component_declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComponent_declaration?: (ctx: Component_declarationContext) => Result;

	/**
	 * Visit a parse tree produced by `modelicaParser.condition_attribute`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCondition_attribute?: (ctx: Condition_attributeContext) => Result;

	/**
	 * Visit a parse tree produced by `modelicaParser.declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclaration?: (ctx: DeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `modelicaParser.modification`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitModification?: (ctx: ModificationContext) => Result;

	/**
	 * Visit a parse tree produced by `modelicaParser.class_modification`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClass_modification?: (ctx: Class_modificationContext) => Result;

	/**
	 * Visit a parse tree produced by `modelicaParser.argument_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArgument_list?: (ctx: Argument_listContext) => Result;

	/**
	 * Visit a parse tree produced by `modelicaParser.argument`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArgument?: (ctx: ArgumentContext) => Result;

	/**
	 * Visit a parse tree produced by `modelicaParser.element_modification_or_replaceable`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElement_modification_or_replaceable?: (ctx: Element_modification_or_replaceableContext) => Result;

	/**
	 * Visit a parse tree produced by `modelicaParser.element_modification`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElement_modification?: (ctx: Element_modificationContext) => Result;

	/**
	 * Visit a parse tree produced by `modelicaParser.element_redeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElement_redeclaration?: (ctx: Element_redeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `modelicaParser.element_replaceable`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElement_replaceable?: (ctx: Element_replaceableContext) => Result;

	/**
	 * Visit a parse tree produced by `modelicaParser.component_clause1`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComponent_clause1?: (ctx: Component_clause1Context) => Result;

	/**
	 * Visit a parse tree produced by `modelicaParser.component_declaration1`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComponent_declaration1?: (ctx: Component_declaration1Context) => Result;

	/**
	 * Visit a parse tree produced by `modelicaParser.short_class_definition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShort_class_definition?: (ctx: Short_class_definitionContext) => Result;

	/**
	 * Visit a parse tree produced by `modelicaParser.equation_section`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEquation_section?: (ctx: Equation_sectionContext) => Result;

	/**
	 * Visit a parse tree produced by `modelicaParser.algorithm_section`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlgorithm_section?: (ctx: Algorithm_sectionContext) => Result;

	/**
	 * Visit a parse tree produced by `modelicaParser.equation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEquation?: (ctx: EquationContext) => Result;

	/**
	 * Visit a parse tree produced by `modelicaParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;

	/**
	 * Visit a parse tree produced by `modelicaParser.if_equation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIf_equation?: (ctx: If_equationContext) => Result;

	/**
	 * Visit a parse tree produced by `modelicaParser.if_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIf_statement?: (ctx: If_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `modelicaParser.for_equation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFor_equation?: (ctx: For_equationContext) => Result;

	/**
	 * Visit a parse tree produced by `modelicaParser.for_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFor_statement?: (ctx: For_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `modelicaParser.for_indices`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFor_indices?: (ctx: For_indicesContext) => Result;

	/**
	 * Visit a parse tree produced by `modelicaParser.for_index`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFor_index?: (ctx: For_indexContext) => Result;

	/**
	 * Visit a parse tree produced by `modelicaParser.while_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhile_statement?: (ctx: While_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `modelicaParser.when_equation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhen_equation?: (ctx: When_equationContext) => Result;

	/**
	 * Visit a parse tree produced by `modelicaParser.when_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhen_statement?: (ctx: When_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `modelicaParser.connect_clause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConnect_clause?: (ctx: Connect_clauseContext) => Result;

	/**
	 * Visit a parse tree produced by `modelicaParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `modelicaParser.simple_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSimple_expression?: (ctx: Simple_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `modelicaParser.logical_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogical_expression?: (ctx: Logical_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `modelicaParser.logical_term`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogical_term?: (ctx: Logical_termContext) => Result;

	/**
	 * Visit a parse tree produced by `modelicaParser.logical_factor`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogical_factor?: (ctx: Logical_factorContext) => Result;

	/**
	 * Visit a parse tree produced by `modelicaParser.relation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRelation?: (ctx: RelationContext) => Result;

	/**
	 * Visit a parse tree produced by `modelicaParser.rel_op`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRel_op?: (ctx: Rel_opContext) => Result;

	/**
	 * Visit a parse tree produced by `modelicaParser.arithmetic_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArithmetic_expression?: (ctx: Arithmetic_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `modelicaParser.add_op`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAdd_op?: (ctx: Add_opContext) => Result;

	/**
	 * Visit a parse tree produced by `modelicaParser.term`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTerm?: (ctx: TermContext) => Result;

	/**
	 * Visit a parse tree produced by `modelicaParser.mul_op`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMul_op?: (ctx: Mul_opContext) => Result;

	/**
	 * Visit a parse tree produced by `modelicaParser.factor`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFactor?: (ctx: FactorContext) => Result;

	/**
	 * Visit a parse tree produced by `modelicaParser.primary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrimary?: (ctx: PrimaryContext) => Result;

	/**
	 * Visit a parse tree produced by `modelicaParser.name`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitName?: (ctx: NameContext) => Result;

	/**
	 * Visit a parse tree produced by `modelicaParser.component_reference`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComponent_reference?: (ctx: Component_referenceContext) => Result;

	/**
	 * Visit a parse tree produced by `modelicaParser.function_call_args`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunction_call_args?: (ctx: Function_call_argsContext) => Result;

	/**
	 * Visit a parse tree produced by `modelicaParser.function_arguments`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunction_arguments?: (ctx: Function_argumentsContext) => Result;

	/**
	 * Visit a parse tree produced by `modelicaParser.named_arguments`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNamed_arguments?: (ctx: Named_argumentsContext) => Result;

	/**
	 * Visit a parse tree produced by `modelicaParser.named_argument`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNamed_argument?: (ctx: Named_argumentContext) => Result;

	/**
	 * Visit a parse tree produced by `modelicaParser.function_argument`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunction_argument?: (ctx: Function_argumentContext) => Result;

	/**
	 * Visit a parse tree produced by `modelicaParser.output_expression_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOutput_expression_list?: (ctx: Output_expression_listContext) => Result;

	/**
	 * Visit a parse tree produced by `modelicaParser.expression_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression_list?: (ctx: Expression_listContext) => Result;

	/**
	 * Visit a parse tree produced by `modelicaParser.array_subscripts`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArray_subscripts?: (ctx: Array_subscriptsContext) => Result;

	/**
	 * Visit a parse tree produced by `modelicaParser.subscript`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubscript?: (ctx: SubscriptContext) => Result;

	/**
	 * Visit a parse tree produced by `modelicaParser.comment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComment?: (ctx: CommentContext) => Result;

	/**
	 * Visit a parse tree produced by `modelicaParser.string_comment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitString_comment?: (ctx: String_commentContext) => Result;

	/**
	 * Visit a parse tree produced by `modelicaParser.annotation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnnotation?: (ctx: AnnotationContext) => Result;
}

