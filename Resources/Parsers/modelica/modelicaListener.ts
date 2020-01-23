// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/modelica/modelica.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

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
 * This interface defines a complete listener for a parse tree produced by
 * `modelicaParser`.
 */
export interface modelicaListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `modelicaParser.stored_definition`.
	 * @param ctx the parse tree
	 */
	enterStored_definition?: (ctx: Stored_definitionContext) => void;
	/**
	 * Exit a parse tree produced by `modelicaParser.stored_definition`.
	 * @param ctx the parse tree
	 */
	exitStored_definition?: (ctx: Stored_definitionContext) => void;

	/**
	 * Enter a parse tree produced by `modelicaParser.class_definition`.
	 * @param ctx the parse tree
	 */
	enterClass_definition?: (ctx: Class_definitionContext) => void;
	/**
	 * Exit a parse tree produced by `modelicaParser.class_definition`.
	 * @param ctx the parse tree
	 */
	exitClass_definition?: (ctx: Class_definitionContext) => void;

	/**
	 * Enter a parse tree produced by `modelicaParser.class_specifier`.
	 * @param ctx the parse tree
	 */
	enterClass_specifier?: (ctx: Class_specifierContext) => void;
	/**
	 * Exit a parse tree produced by `modelicaParser.class_specifier`.
	 * @param ctx the parse tree
	 */
	exitClass_specifier?: (ctx: Class_specifierContext) => void;

	/**
	 * Enter a parse tree produced by `modelicaParser.class_prefixes`.
	 * @param ctx the parse tree
	 */
	enterClass_prefixes?: (ctx: Class_prefixesContext) => void;
	/**
	 * Exit a parse tree produced by `modelicaParser.class_prefixes`.
	 * @param ctx the parse tree
	 */
	exitClass_prefixes?: (ctx: Class_prefixesContext) => void;

	/**
	 * Enter a parse tree produced by `modelicaParser.long_class_specifier`.
	 * @param ctx the parse tree
	 */
	enterLong_class_specifier?: (ctx: Long_class_specifierContext) => void;
	/**
	 * Exit a parse tree produced by `modelicaParser.long_class_specifier`.
	 * @param ctx the parse tree
	 */
	exitLong_class_specifier?: (ctx: Long_class_specifierContext) => void;

	/**
	 * Enter a parse tree produced by `modelicaParser.short_class_specifier`.
	 * @param ctx the parse tree
	 */
	enterShort_class_specifier?: (ctx: Short_class_specifierContext) => void;
	/**
	 * Exit a parse tree produced by `modelicaParser.short_class_specifier`.
	 * @param ctx the parse tree
	 */
	exitShort_class_specifier?: (ctx: Short_class_specifierContext) => void;

	/**
	 * Enter a parse tree produced by `modelicaParser.der_class_specifier`.
	 * @param ctx the parse tree
	 */
	enterDer_class_specifier?: (ctx: Der_class_specifierContext) => void;
	/**
	 * Exit a parse tree produced by `modelicaParser.der_class_specifier`.
	 * @param ctx the parse tree
	 */
	exitDer_class_specifier?: (ctx: Der_class_specifierContext) => void;

	/**
	 * Enter a parse tree produced by `modelicaParser.base_prefix`.
	 * @param ctx the parse tree
	 */
	enterBase_prefix?: (ctx: Base_prefixContext) => void;
	/**
	 * Exit a parse tree produced by `modelicaParser.base_prefix`.
	 * @param ctx the parse tree
	 */
	exitBase_prefix?: (ctx: Base_prefixContext) => void;

	/**
	 * Enter a parse tree produced by `modelicaParser.enum_list`.
	 * @param ctx the parse tree
	 */
	enterEnum_list?: (ctx: Enum_listContext) => void;
	/**
	 * Exit a parse tree produced by `modelicaParser.enum_list`.
	 * @param ctx the parse tree
	 */
	exitEnum_list?: (ctx: Enum_listContext) => void;

	/**
	 * Enter a parse tree produced by `modelicaParser.enumeration_literal`.
	 * @param ctx the parse tree
	 */
	enterEnumeration_literal?: (ctx: Enumeration_literalContext) => void;
	/**
	 * Exit a parse tree produced by `modelicaParser.enumeration_literal`.
	 * @param ctx the parse tree
	 */
	exitEnumeration_literal?: (ctx: Enumeration_literalContext) => void;

	/**
	 * Enter a parse tree produced by `modelicaParser.composition`.
	 * @param ctx the parse tree
	 */
	enterComposition?: (ctx: CompositionContext) => void;
	/**
	 * Exit a parse tree produced by `modelicaParser.composition`.
	 * @param ctx the parse tree
	 */
	exitComposition?: (ctx: CompositionContext) => void;

	/**
	 * Enter a parse tree produced by `modelicaParser.language_specification`.
	 * @param ctx the parse tree
	 */
	enterLanguage_specification?: (ctx: Language_specificationContext) => void;
	/**
	 * Exit a parse tree produced by `modelicaParser.language_specification`.
	 * @param ctx the parse tree
	 */
	exitLanguage_specification?: (ctx: Language_specificationContext) => void;

	/**
	 * Enter a parse tree produced by `modelicaParser.external_function_call`.
	 * @param ctx the parse tree
	 */
	enterExternal_function_call?: (ctx: External_function_callContext) => void;
	/**
	 * Exit a parse tree produced by `modelicaParser.external_function_call`.
	 * @param ctx the parse tree
	 */
	exitExternal_function_call?: (ctx: External_function_callContext) => void;

	/**
	 * Enter a parse tree produced by `modelicaParser.element_list`.
	 * @param ctx the parse tree
	 */
	enterElement_list?: (ctx: Element_listContext) => void;
	/**
	 * Exit a parse tree produced by `modelicaParser.element_list`.
	 * @param ctx the parse tree
	 */
	exitElement_list?: (ctx: Element_listContext) => void;

	/**
	 * Enter a parse tree produced by `modelicaParser.element`.
	 * @param ctx the parse tree
	 */
	enterElement?: (ctx: ElementContext) => void;
	/**
	 * Exit a parse tree produced by `modelicaParser.element`.
	 * @param ctx the parse tree
	 */
	exitElement?: (ctx: ElementContext) => void;

	/**
	 * Enter a parse tree produced by `modelicaParser.import_clause`.
	 * @param ctx the parse tree
	 */
	enterImport_clause?: (ctx: Import_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `modelicaParser.import_clause`.
	 * @param ctx the parse tree
	 */
	exitImport_clause?: (ctx: Import_clauseContext) => void;

	/**
	 * Enter a parse tree produced by `modelicaParser.import_list`.
	 * @param ctx the parse tree
	 */
	enterImport_list?: (ctx: Import_listContext) => void;
	/**
	 * Exit a parse tree produced by `modelicaParser.import_list`.
	 * @param ctx the parse tree
	 */
	exitImport_list?: (ctx: Import_listContext) => void;

	/**
	 * Enter a parse tree produced by `modelicaParser.extends_clause`.
	 * @param ctx the parse tree
	 */
	enterExtends_clause?: (ctx: Extends_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `modelicaParser.extends_clause`.
	 * @param ctx the parse tree
	 */
	exitExtends_clause?: (ctx: Extends_clauseContext) => void;

	/**
	 * Enter a parse tree produced by `modelicaParser.constraining_clause`.
	 * @param ctx the parse tree
	 */
	enterConstraining_clause?: (ctx: Constraining_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `modelicaParser.constraining_clause`.
	 * @param ctx the parse tree
	 */
	exitConstraining_clause?: (ctx: Constraining_clauseContext) => void;

	/**
	 * Enter a parse tree produced by `modelicaParser.component_clause`.
	 * @param ctx the parse tree
	 */
	enterComponent_clause?: (ctx: Component_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `modelicaParser.component_clause`.
	 * @param ctx the parse tree
	 */
	exitComponent_clause?: (ctx: Component_clauseContext) => void;

	/**
	 * Enter a parse tree produced by `modelicaParser.type_prefix`.
	 * @param ctx the parse tree
	 */
	enterType_prefix?: (ctx: Type_prefixContext) => void;
	/**
	 * Exit a parse tree produced by `modelicaParser.type_prefix`.
	 * @param ctx the parse tree
	 */
	exitType_prefix?: (ctx: Type_prefixContext) => void;

	/**
	 * Enter a parse tree produced by `modelicaParser.type_specifier`.
	 * @param ctx the parse tree
	 */
	enterType_specifier?: (ctx: Type_specifierContext) => void;
	/**
	 * Exit a parse tree produced by `modelicaParser.type_specifier`.
	 * @param ctx the parse tree
	 */
	exitType_specifier?: (ctx: Type_specifierContext) => void;

	/**
	 * Enter a parse tree produced by `modelicaParser.component_list`.
	 * @param ctx the parse tree
	 */
	enterComponent_list?: (ctx: Component_listContext) => void;
	/**
	 * Exit a parse tree produced by `modelicaParser.component_list`.
	 * @param ctx the parse tree
	 */
	exitComponent_list?: (ctx: Component_listContext) => void;

	/**
	 * Enter a parse tree produced by `modelicaParser.component_declaration`.
	 * @param ctx the parse tree
	 */
	enterComponent_declaration?: (ctx: Component_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `modelicaParser.component_declaration`.
	 * @param ctx the parse tree
	 */
	exitComponent_declaration?: (ctx: Component_declarationContext) => void;

	/**
	 * Enter a parse tree produced by `modelicaParser.condition_attribute`.
	 * @param ctx the parse tree
	 */
	enterCondition_attribute?: (ctx: Condition_attributeContext) => void;
	/**
	 * Exit a parse tree produced by `modelicaParser.condition_attribute`.
	 * @param ctx the parse tree
	 */
	exitCondition_attribute?: (ctx: Condition_attributeContext) => void;

	/**
	 * Enter a parse tree produced by `modelicaParser.declaration`.
	 * @param ctx the parse tree
	 */
	enterDeclaration?: (ctx: DeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `modelicaParser.declaration`.
	 * @param ctx the parse tree
	 */
	exitDeclaration?: (ctx: DeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `modelicaParser.modification`.
	 * @param ctx the parse tree
	 */
	enterModification?: (ctx: ModificationContext) => void;
	/**
	 * Exit a parse tree produced by `modelicaParser.modification`.
	 * @param ctx the parse tree
	 */
	exitModification?: (ctx: ModificationContext) => void;

	/**
	 * Enter a parse tree produced by `modelicaParser.class_modification`.
	 * @param ctx the parse tree
	 */
	enterClass_modification?: (ctx: Class_modificationContext) => void;
	/**
	 * Exit a parse tree produced by `modelicaParser.class_modification`.
	 * @param ctx the parse tree
	 */
	exitClass_modification?: (ctx: Class_modificationContext) => void;

	/**
	 * Enter a parse tree produced by `modelicaParser.argument_list`.
	 * @param ctx the parse tree
	 */
	enterArgument_list?: (ctx: Argument_listContext) => void;
	/**
	 * Exit a parse tree produced by `modelicaParser.argument_list`.
	 * @param ctx the parse tree
	 */
	exitArgument_list?: (ctx: Argument_listContext) => void;

	/**
	 * Enter a parse tree produced by `modelicaParser.argument`.
	 * @param ctx the parse tree
	 */
	enterArgument?: (ctx: ArgumentContext) => void;
	/**
	 * Exit a parse tree produced by `modelicaParser.argument`.
	 * @param ctx the parse tree
	 */
	exitArgument?: (ctx: ArgumentContext) => void;

	/**
	 * Enter a parse tree produced by `modelicaParser.element_modification_or_replaceable`.
	 * @param ctx the parse tree
	 */
	enterElement_modification_or_replaceable?: (ctx: Element_modification_or_replaceableContext) => void;
	/**
	 * Exit a parse tree produced by `modelicaParser.element_modification_or_replaceable`.
	 * @param ctx the parse tree
	 */
	exitElement_modification_or_replaceable?: (ctx: Element_modification_or_replaceableContext) => void;

	/**
	 * Enter a parse tree produced by `modelicaParser.element_modification`.
	 * @param ctx the parse tree
	 */
	enterElement_modification?: (ctx: Element_modificationContext) => void;
	/**
	 * Exit a parse tree produced by `modelicaParser.element_modification`.
	 * @param ctx the parse tree
	 */
	exitElement_modification?: (ctx: Element_modificationContext) => void;

	/**
	 * Enter a parse tree produced by `modelicaParser.element_redeclaration`.
	 * @param ctx the parse tree
	 */
	enterElement_redeclaration?: (ctx: Element_redeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `modelicaParser.element_redeclaration`.
	 * @param ctx the parse tree
	 */
	exitElement_redeclaration?: (ctx: Element_redeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `modelicaParser.element_replaceable`.
	 * @param ctx the parse tree
	 */
	enterElement_replaceable?: (ctx: Element_replaceableContext) => void;
	/**
	 * Exit a parse tree produced by `modelicaParser.element_replaceable`.
	 * @param ctx the parse tree
	 */
	exitElement_replaceable?: (ctx: Element_replaceableContext) => void;

	/**
	 * Enter a parse tree produced by `modelicaParser.component_clause1`.
	 * @param ctx the parse tree
	 */
	enterComponent_clause1?: (ctx: Component_clause1Context) => void;
	/**
	 * Exit a parse tree produced by `modelicaParser.component_clause1`.
	 * @param ctx the parse tree
	 */
	exitComponent_clause1?: (ctx: Component_clause1Context) => void;

	/**
	 * Enter a parse tree produced by `modelicaParser.component_declaration1`.
	 * @param ctx the parse tree
	 */
	enterComponent_declaration1?: (ctx: Component_declaration1Context) => void;
	/**
	 * Exit a parse tree produced by `modelicaParser.component_declaration1`.
	 * @param ctx the parse tree
	 */
	exitComponent_declaration1?: (ctx: Component_declaration1Context) => void;

	/**
	 * Enter a parse tree produced by `modelicaParser.short_class_definition`.
	 * @param ctx the parse tree
	 */
	enterShort_class_definition?: (ctx: Short_class_definitionContext) => void;
	/**
	 * Exit a parse tree produced by `modelicaParser.short_class_definition`.
	 * @param ctx the parse tree
	 */
	exitShort_class_definition?: (ctx: Short_class_definitionContext) => void;

	/**
	 * Enter a parse tree produced by `modelicaParser.equation_section`.
	 * @param ctx the parse tree
	 */
	enterEquation_section?: (ctx: Equation_sectionContext) => void;
	/**
	 * Exit a parse tree produced by `modelicaParser.equation_section`.
	 * @param ctx the parse tree
	 */
	exitEquation_section?: (ctx: Equation_sectionContext) => void;

	/**
	 * Enter a parse tree produced by `modelicaParser.algorithm_section`.
	 * @param ctx the parse tree
	 */
	enterAlgorithm_section?: (ctx: Algorithm_sectionContext) => void;
	/**
	 * Exit a parse tree produced by `modelicaParser.algorithm_section`.
	 * @param ctx the parse tree
	 */
	exitAlgorithm_section?: (ctx: Algorithm_sectionContext) => void;

	/**
	 * Enter a parse tree produced by `modelicaParser.equation`.
	 * @param ctx the parse tree
	 */
	enterEquation?: (ctx: EquationContext) => void;
	/**
	 * Exit a parse tree produced by `modelicaParser.equation`.
	 * @param ctx the parse tree
	 */
	exitEquation?: (ctx: EquationContext) => void;

	/**
	 * Enter a parse tree produced by `modelicaParser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement?: (ctx: StatementContext) => void;
	/**
	 * Exit a parse tree produced by `modelicaParser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement?: (ctx: StatementContext) => void;

	/**
	 * Enter a parse tree produced by `modelicaParser.if_equation`.
	 * @param ctx the parse tree
	 */
	enterIf_equation?: (ctx: If_equationContext) => void;
	/**
	 * Exit a parse tree produced by `modelicaParser.if_equation`.
	 * @param ctx the parse tree
	 */
	exitIf_equation?: (ctx: If_equationContext) => void;

	/**
	 * Enter a parse tree produced by `modelicaParser.if_statement`.
	 * @param ctx the parse tree
	 */
	enterIf_statement?: (ctx: If_statementContext) => void;
	/**
	 * Exit a parse tree produced by `modelicaParser.if_statement`.
	 * @param ctx the parse tree
	 */
	exitIf_statement?: (ctx: If_statementContext) => void;

	/**
	 * Enter a parse tree produced by `modelicaParser.for_equation`.
	 * @param ctx the parse tree
	 */
	enterFor_equation?: (ctx: For_equationContext) => void;
	/**
	 * Exit a parse tree produced by `modelicaParser.for_equation`.
	 * @param ctx the parse tree
	 */
	exitFor_equation?: (ctx: For_equationContext) => void;

	/**
	 * Enter a parse tree produced by `modelicaParser.for_statement`.
	 * @param ctx the parse tree
	 */
	enterFor_statement?: (ctx: For_statementContext) => void;
	/**
	 * Exit a parse tree produced by `modelicaParser.for_statement`.
	 * @param ctx the parse tree
	 */
	exitFor_statement?: (ctx: For_statementContext) => void;

	/**
	 * Enter a parse tree produced by `modelicaParser.for_indices`.
	 * @param ctx the parse tree
	 */
	enterFor_indices?: (ctx: For_indicesContext) => void;
	/**
	 * Exit a parse tree produced by `modelicaParser.for_indices`.
	 * @param ctx the parse tree
	 */
	exitFor_indices?: (ctx: For_indicesContext) => void;

	/**
	 * Enter a parse tree produced by `modelicaParser.for_index`.
	 * @param ctx the parse tree
	 */
	enterFor_index?: (ctx: For_indexContext) => void;
	/**
	 * Exit a parse tree produced by `modelicaParser.for_index`.
	 * @param ctx the parse tree
	 */
	exitFor_index?: (ctx: For_indexContext) => void;

	/**
	 * Enter a parse tree produced by `modelicaParser.while_statement`.
	 * @param ctx the parse tree
	 */
	enterWhile_statement?: (ctx: While_statementContext) => void;
	/**
	 * Exit a parse tree produced by `modelicaParser.while_statement`.
	 * @param ctx the parse tree
	 */
	exitWhile_statement?: (ctx: While_statementContext) => void;

	/**
	 * Enter a parse tree produced by `modelicaParser.when_equation`.
	 * @param ctx the parse tree
	 */
	enterWhen_equation?: (ctx: When_equationContext) => void;
	/**
	 * Exit a parse tree produced by `modelicaParser.when_equation`.
	 * @param ctx the parse tree
	 */
	exitWhen_equation?: (ctx: When_equationContext) => void;

	/**
	 * Enter a parse tree produced by `modelicaParser.when_statement`.
	 * @param ctx the parse tree
	 */
	enterWhen_statement?: (ctx: When_statementContext) => void;
	/**
	 * Exit a parse tree produced by `modelicaParser.when_statement`.
	 * @param ctx the parse tree
	 */
	exitWhen_statement?: (ctx: When_statementContext) => void;

	/**
	 * Enter a parse tree produced by `modelicaParser.connect_clause`.
	 * @param ctx the parse tree
	 */
	enterConnect_clause?: (ctx: Connect_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `modelicaParser.connect_clause`.
	 * @param ctx the parse tree
	 */
	exitConnect_clause?: (ctx: Connect_clauseContext) => void;

	/**
	 * Enter a parse tree produced by `modelicaParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `modelicaParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `modelicaParser.simple_expression`.
	 * @param ctx the parse tree
	 */
	enterSimple_expression?: (ctx: Simple_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `modelicaParser.simple_expression`.
	 * @param ctx the parse tree
	 */
	exitSimple_expression?: (ctx: Simple_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `modelicaParser.logical_expression`.
	 * @param ctx the parse tree
	 */
	enterLogical_expression?: (ctx: Logical_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `modelicaParser.logical_expression`.
	 * @param ctx the parse tree
	 */
	exitLogical_expression?: (ctx: Logical_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `modelicaParser.logical_term`.
	 * @param ctx the parse tree
	 */
	enterLogical_term?: (ctx: Logical_termContext) => void;
	/**
	 * Exit a parse tree produced by `modelicaParser.logical_term`.
	 * @param ctx the parse tree
	 */
	exitLogical_term?: (ctx: Logical_termContext) => void;

	/**
	 * Enter a parse tree produced by `modelicaParser.logical_factor`.
	 * @param ctx the parse tree
	 */
	enterLogical_factor?: (ctx: Logical_factorContext) => void;
	/**
	 * Exit a parse tree produced by `modelicaParser.logical_factor`.
	 * @param ctx the parse tree
	 */
	exitLogical_factor?: (ctx: Logical_factorContext) => void;

	/**
	 * Enter a parse tree produced by `modelicaParser.relation`.
	 * @param ctx the parse tree
	 */
	enterRelation?: (ctx: RelationContext) => void;
	/**
	 * Exit a parse tree produced by `modelicaParser.relation`.
	 * @param ctx the parse tree
	 */
	exitRelation?: (ctx: RelationContext) => void;

	/**
	 * Enter a parse tree produced by `modelicaParser.rel_op`.
	 * @param ctx the parse tree
	 */
	enterRel_op?: (ctx: Rel_opContext) => void;
	/**
	 * Exit a parse tree produced by `modelicaParser.rel_op`.
	 * @param ctx the parse tree
	 */
	exitRel_op?: (ctx: Rel_opContext) => void;

	/**
	 * Enter a parse tree produced by `modelicaParser.arithmetic_expression`.
	 * @param ctx the parse tree
	 */
	enterArithmetic_expression?: (ctx: Arithmetic_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `modelicaParser.arithmetic_expression`.
	 * @param ctx the parse tree
	 */
	exitArithmetic_expression?: (ctx: Arithmetic_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `modelicaParser.add_op`.
	 * @param ctx the parse tree
	 */
	enterAdd_op?: (ctx: Add_opContext) => void;
	/**
	 * Exit a parse tree produced by `modelicaParser.add_op`.
	 * @param ctx the parse tree
	 */
	exitAdd_op?: (ctx: Add_opContext) => void;

	/**
	 * Enter a parse tree produced by `modelicaParser.term`.
	 * @param ctx the parse tree
	 */
	enterTerm?: (ctx: TermContext) => void;
	/**
	 * Exit a parse tree produced by `modelicaParser.term`.
	 * @param ctx the parse tree
	 */
	exitTerm?: (ctx: TermContext) => void;

	/**
	 * Enter a parse tree produced by `modelicaParser.mul_op`.
	 * @param ctx the parse tree
	 */
	enterMul_op?: (ctx: Mul_opContext) => void;
	/**
	 * Exit a parse tree produced by `modelicaParser.mul_op`.
	 * @param ctx the parse tree
	 */
	exitMul_op?: (ctx: Mul_opContext) => void;

	/**
	 * Enter a parse tree produced by `modelicaParser.factor`.
	 * @param ctx the parse tree
	 */
	enterFactor?: (ctx: FactorContext) => void;
	/**
	 * Exit a parse tree produced by `modelicaParser.factor`.
	 * @param ctx the parse tree
	 */
	exitFactor?: (ctx: FactorContext) => void;

	/**
	 * Enter a parse tree produced by `modelicaParser.primary`.
	 * @param ctx the parse tree
	 */
	enterPrimary?: (ctx: PrimaryContext) => void;
	/**
	 * Exit a parse tree produced by `modelicaParser.primary`.
	 * @param ctx the parse tree
	 */
	exitPrimary?: (ctx: PrimaryContext) => void;

	/**
	 * Enter a parse tree produced by `modelicaParser.name`.
	 * @param ctx the parse tree
	 */
	enterName?: (ctx: NameContext) => void;
	/**
	 * Exit a parse tree produced by `modelicaParser.name`.
	 * @param ctx the parse tree
	 */
	exitName?: (ctx: NameContext) => void;

	/**
	 * Enter a parse tree produced by `modelicaParser.component_reference`.
	 * @param ctx the parse tree
	 */
	enterComponent_reference?: (ctx: Component_referenceContext) => void;
	/**
	 * Exit a parse tree produced by `modelicaParser.component_reference`.
	 * @param ctx the parse tree
	 */
	exitComponent_reference?: (ctx: Component_referenceContext) => void;

	/**
	 * Enter a parse tree produced by `modelicaParser.function_call_args`.
	 * @param ctx the parse tree
	 */
	enterFunction_call_args?: (ctx: Function_call_argsContext) => void;
	/**
	 * Exit a parse tree produced by `modelicaParser.function_call_args`.
	 * @param ctx the parse tree
	 */
	exitFunction_call_args?: (ctx: Function_call_argsContext) => void;

	/**
	 * Enter a parse tree produced by `modelicaParser.function_arguments`.
	 * @param ctx the parse tree
	 */
	enterFunction_arguments?: (ctx: Function_argumentsContext) => void;
	/**
	 * Exit a parse tree produced by `modelicaParser.function_arguments`.
	 * @param ctx the parse tree
	 */
	exitFunction_arguments?: (ctx: Function_argumentsContext) => void;

	/**
	 * Enter a parse tree produced by `modelicaParser.named_arguments`.
	 * @param ctx the parse tree
	 */
	enterNamed_arguments?: (ctx: Named_argumentsContext) => void;
	/**
	 * Exit a parse tree produced by `modelicaParser.named_arguments`.
	 * @param ctx the parse tree
	 */
	exitNamed_arguments?: (ctx: Named_argumentsContext) => void;

	/**
	 * Enter a parse tree produced by `modelicaParser.named_argument`.
	 * @param ctx the parse tree
	 */
	enterNamed_argument?: (ctx: Named_argumentContext) => void;
	/**
	 * Exit a parse tree produced by `modelicaParser.named_argument`.
	 * @param ctx the parse tree
	 */
	exitNamed_argument?: (ctx: Named_argumentContext) => void;

	/**
	 * Enter a parse tree produced by `modelicaParser.function_argument`.
	 * @param ctx the parse tree
	 */
	enterFunction_argument?: (ctx: Function_argumentContext) => void;
	/**
	 * Exit a parse tree produced by `modelicaParser.function_argument`.
	 * @param ctx the parse tree
	 */
	exitFunction_argument?: (ctx: Function_argumentContext) => void;

	/**
	 * Enter a parse tree produced by `modelicaParser.output_expression_list`.
	 * @param ctx the parse tree
	 */
	enterOutput_expression_list?: (ctx: Output_expression_listContext) => void;
	/**
	 * Exit a parse tree produced by `modelicaParser.output_expression_list`.
	 * @param ctx the parse tree
	 */
	exitOutput_expression_list?: (ctx: Output_expression_listContext) => void;

	/**
	 * Enter a parse tree produced by `modelicaParser.expression_list`.
	 * @param ctx the parse tree
	 */
	enterExpression_list?: (ctx: Expression_listContext) => void;
	/**
	 * Exit a parse tree produced by `modelicaParser.expression_list`.
	 * @param ctx the parse tree
	 */
	exitExpression_list?: (ctx: Expression_listContext) => void;

	/**
	 * Enter a parse tree produced by `modelicaParser.array_subscripts`.
	 * @param ctx the parse tree
	 */
	enterArray_subscripts?: (ctx: Array_subscriptsContext) => void;
	/**
	 * Exit a parse tree produced by `modelicaParser.array_subscripts`.
	 * @param ctx the parse tree
	 */
	exitArray_subscripts?: (ctx: Array_subscriptsContext) => void;

	/**
	 * Enter a parse tree produced by `modelicaParser.subscript`.
	 * @param ctx the parse tree
	 */
	enterSubscript?: (ctx: SubscriptContext) => void;
	/**
	 * Exit a parse tree produced by `modelicaParser.subscript`.
	 * @param ctx the parse tree
	 */
	exitSubscript?: (ctx: SubscriptContext) => void;

	/**
	 * Enter a parse tree produced by `modelicaParser.comment`.
	 * @param ctx the parse tree
	 */
	enterComment?: (ctx: CommentContext) => void;
	/**
	 * Exit a parse tree produced by `modelicaParser.comment`.
	 * @param ctx the parse tree
	 */
	exitComment?: (ctx: CommentContext) => void;

	/**
	 * Enter a parse tree produced by `modelicaParser.string_comment`.
	 * @param ctx the parse tree
	 */
	enterString_comment?: (ctx: String_commentContext) => void;
	/**
	 * Exit a parse tree produced by `modelicaParser.string_comment`.
	 * @param ctx the parse tree
	 */
	exitString_comment?: (ctx: String_commentContext) => void;

	/**
	 * Enter a parse tree produced by `modelicaParser.annotation`.
	 * @param ctx the parse tree
	 */
	enterAnnotation?: (ctx: AnnotationContext) => void;
	/**
	 * Exit a parse tree produced by `modelicaParser.annotation`.
	 * @param ctx the parse tree
	 */
	exitAnnotation?: (ctx: AnnotationContext) => void;
}

