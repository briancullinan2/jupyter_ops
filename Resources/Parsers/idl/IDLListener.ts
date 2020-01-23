// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/idl/IDL.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { SpecificationContext } from "./IDLParser";
import { DefinitionContext } from "./IDLParser";
import { ModuleContext } from "./IDLParser";
import { Interface_or_forward_declContext } from "./IDLParser";
import { Interface_declContext } from "./IDLParser";
import { Forward_declContext } from "./IDLParser";
import { Interface_headerContext } from "./IDLParser";
import { Interface_bodyContext } from "./IDLParser";
import { ExportContext } from "./IDLParser";
import { Interface_inheritance_specContext } from "./IDLParser";
import { Interface_nameContext } from "./IDLParser";
import { Scoped_nameContext } from "./IDLParser";
import { ValueContext } from "./IDLParser";
import { Value_forward_declContext } from "./IDLParser";
import { Value_box_declContext } from "./IDLParser";
import { Value_abs_declContext } from "./IDLParser";
import { Value_declContext } from "./IDLParser";
import { Value_headerContext } from "./IDLParser";
import { Value_inheritance_specContext } from "./IDLParser";
import { Value_nameContext } from "./IDLParser";
import { Value_elementContext } from "./IDLParser";
import { State_memberContext } from "./IDLParser";
import { Init_declContext } from "./IDLParser";
import { Init_param_declsContext } from "./IDLParser";
import { Init_param_declContext } from "./IDLParser";
import { Init_param_attributeContext } from "./IDLParser";
import { Const_declContext } from "./IDLParser";
import { Const_typeContext } from "./IDLParser";
import { Const_expContext } from "./IDLParser";
import { Or_exprContext } from "./IDLParser";
import { Xor_exprContext } from "./IDLParser";
import { And_exprContext } from "./IDLParser";
import { Shift_exprContext } from "./IDLParser";
import { Add_exprContext } from "./IDLParser";
import { Mult_exprContext } from "./IDLParser";
import { Unary_exprContext } from "./IDLParser";
import { Unary_operatorContext } from "./IDLParser";
import { Primary_exprContext } from "./IDLParser";
import { LiteralContext } from "./IDLParser";
import { Positive_int_constContext } from "./IDLParser";
import { Type_declContext } from "./IDLParser";
import { Type_declaratorContext } from "./IDLParser";
import { Type_specContext } from "./IDLParser";
import { Simple_type_specContext } from "./IDLParser";
import { Base_type_specContext } from "./IDLParser";
import { Template_type_specContext } from "./IDLParser";
import { Constr_type_specContext } from "./IDLParser";
import { DeclaratorsContext } from "./IDLParser";
import { DeclaratorContext } from "./IDLParser";
import { Simple_declaratorContext } from "./IDLParser";
import { Complex_declaratorContext } from "./IDLParser";
import { Floating_pt_typeContext } from "./IDLParser";
import { Integer_typeContext } from "./IDLParser";
import { Signed_intContext } from "./IDLParser";
import { Signed_short_intContext } from "./IDLParser";
import { Signed_long_intContext } from "./IDLParser";
import { Signed_longlong_intContext } from "./IDLParser";
import { Unsigned_intContext } from "./IDLParser";
import { Unsigned_short_intContext } from "./IDLParser";
import { Unsigned_long_intContext } from "./IDLParser";
import { Unsigned_longlong_intContext } from "./IDLParser";
import { Char_typeContext } from "./IDLParser";
import { Wide_char_typeContext } from "./IDLParser";
import { Boolean_typeContext } from "./IDLParser";
import { Octet_typeContext } from "./IDLParser";
import { Any_typeContext } from "./IDLParser";
import { Object_typeContext } from "./IDLParser";
import { Struct_typeContext } from "./IDLParser";
import { Member_listContext } from "./IDLParser";
import { MemberContext } from "./IDLParser";
import { Union_typeContext } from "./IDLParser";
import { Switch_type_specContext } from "./IDLParser";
import { Switch_bodyContext } from "./IDLParser";
import { Case_stmtContext } from "./IDLParser";
import { Case_labelContext } from "./IDLParser";
import { Element_specContext } from "./IDLParser";
import { Enum_typeContext } from "./IDLParser";
import { EnumeratorContext } from "./IDLParser";
import { Sequence_typeContext } from "./IDLParser";
import { String_typeContext } from "./IDLParser";
import { Wide_string_typeContext } from "./IDLParser";
import { Array_declaratorContext } from "./IDLParser";
import { Fixed_array_sizeContext } from "./IDLParser";
import { Attr_declContext } from "./IDLParser";
import { Except_declContext } from "./IDLParser";
import { Op_declContext } from "./IDLParser";
import { Op_attributeContext } from "./IDLParser";
import { Op_type_specContext } from "./IDLParser";
import { Parameter_declsContext } from "./IDLParser";
import { Param_declContext } from "./IDLParser";
import { Param_attributeContext } from "./IDLParser";
import { Raises_exprContext } from "./IDLParser";
import { Context_exprContext } from "./IDLParser";
import { Param_type_specContext } from "./IDLParser";
import { Fixed_pt_typeContext } from "./IDLParser";
import { Fixed_pt_const_typeContext } from "./IDLParser";
import { Value_base_typeContext } from "./IDLParser";
import { Constr_forward_declContext } from "./IDLParser";
import { Import_declContext } from "./IDLParser";
import { Imported_scopeContext } from "./IDLParser";
import { Type_id_declContext } from "./IDLParser";
import { Type_prefix_declContext } from "./IDLParser";
import { Readonly_attr_specContext } from "./IDLParser";
import { Readonly_attr_declaratorContext } from "./IDLParser";
import { Attr_specContext } from "./IDLParser";
import { Attr_declaratorContext } from "./IDLParser";
import { Attr_raises_exprContext } from "./IDLParser";
import { Get_excep_exprContext } from "./IDLParser";
import { Set_excep_exprContext } from "./IDLParser";
import { Exception_listContext } from "./IDLParser";
import { ComponentContext } from "./IDLParser";
import { Component_forward_declContext } from "./IDLParser";
import { Component_declContext } from "./IDLParser";
import { Component_headerContext } from "./IDLParser";
import { Supported_interface_specContext } from "./IDLParser";
import { Component_inheritance_specContext } from "./IDLParser";
import { Component_bodyContext } from "./IDLParser";
import { Component_exportContext } from "./IDLParser";
import { Provides_declContext } from "./IDLParser";
import { Interface_typeContext } from "./IDLParser";
import { Uses_declContext } from "./IDLParser";
import { Emits_declContext } from "./IDLParser";
import { Publishes_declContext } from "./IDLParser";
import { Consumes_declContext } from "./IDLParser";
import { Home_declContext } from "./IDLParser";
import { Home_headerContext } from "./IDLParser";
import { Home_inheritance_specContext } from "./IDLParser";
import { Primary_key_specContext } from "./IDLParser";
import { Home_bodyContext } from "./IDLParser";
import { Home_exportContext } from "./IDLParser";
import { Factory_declContext } from "./IDLParser";
import { Finder_declContext } from "./IDLParser";
import { EventContext } from "./IDLParser";
import { Event_forward_declContext } from "./IDLParser";
import { Event_abs_declContext } from "./IDLParser";
import { Event_declContext } from "./IDLParser";
import { Event_headerContext } from "./IDLParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `IDLParser`.
 */
export interface IDLListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `IDLParser.specification`.
	 * @param ctx the parse tree
	 */
	enterSpecification?: (ctx: SpecificationContext) => void;
	/**
	 * Exit a parse tree produced by `IDLParser.specification`.
	 * @param ctx the parse tree
	 */
	exitSpecification?: (ctx: SpecificationContext) => void;

	/**
	 * Enter a parse tree produced by `IDLParser.definition`.
	 * @param ctx the parse tree
	 */
	enterDefinition?: (ctx: DefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `IDLParser.definition`.
	 * @param ctx the parse tree
	 */
	exitDefinition?: (ctx: DefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `IDLParser.module`.
	 * @param ctx the parse tree
	 */
	enterModule?: (ctx: ModuleContext) => void;
	/**
	 * Exit a parse tree produced by `IDLParser.module`.
	 * @param ctx the parse tree
	 */
	exitModule?: (ctx: ModuleContext) => void;

	/**
	 * Enter a parse tree produced by `IDLParser.interface_or_forward_decl`.
	 * @param ctx the parse tree
	 */
	enterInterface_or_forward_decl?: (ctx: Interface_or_forward_declContext) => void;
	/**
	 * Exit a parse tree produced by `IDLParser.interface_or_forward_decl`.
	 * @param ctx the parse tree
	 */
	exitInterface_or_forward_decl?: (ctx: Interface_or_forward_declContext) => void;

	/**
	 * Enter a parse tree produced by `IDLParser.interface_decl`.
	 * @param ctx the parse tree
	 */
	enterInterface_decl?: (ctx: Interface_declContext) => void;
	/**
	 * Exit a parse tree produced by `IDLParser.interface_decl`.
	 * @param ctx the parse tree
	 */
	exitInterface_decl?: (ctx: Interface_declContext) => void;

	/**
	 * Enter a parse tree produced by `IDLParser.forward_decl`.
	 * @param ctx the parse tree
	 */
	enterForward_decl?: (ctx: Forward_declContext) => void;
	/**
	 * Exit a parse tree produced by `IDLParser.forward_decl`.
	 * @param ctx the parse tree
	 */
	exitForward_decl?: (ctx: Forward_declContext) => void;

	/**
	 * Enter a parse tree produced by `IDLParser.interface_header`.
	 * @param ctx the parse tree
	 */
	enterInterface_header?: (ctx: Interface_headerContext) => void;
	/**
	 * Exit a parse tree produced by `IDLParser.interface_header`.
	 * @param ctx the parse tree
	 */
	exitInterface_header?: (ctx: Interface_headerContext) => void;

	/**
	 * Enter a parse tree produced by `IDLParser.interface_body`.
	 * @param ctx the parse tree
	 */
	enterInterface_body?: (ctx: Interface_bodyContext) => void;
	/**
	 * Exit a parse tree produced by `IDLParser.interface_body`.
	 * @param ctx the parse tree
	 */
	exitInterface_body?: (ctx: Interface_bodyContext) => void;

	/**
	 * Enter a parse tree produced by `IDLParser.export`.
	 * @param ctx the parse tree
	 */
	enterExport?: (ctx: ExportContext) => void;
	/**
	 * Exit a parse tree produced by `IDLParser.export`.
	 * @param ctx the parse tree
	 */
	exitExport?: (ctx: ExportContext) => void;

	/**
	 * Enter a parse tree produced by `IDLParser.interface_inheritance_spec`.
	 * @param ctx the parse tree
	 */
	enterInterface_inheritance_spec?: (ctx: Interface_inheritance_specContext) => void;
	/**
	 * Exit a parse tree produced by `IDLParser.interface_inheritance_spec`.
	 * @param ctx the parse tree
	 */
	exitInterface_inheritance_spec?: (ctx: Interface_inheritance_specContext) => void;

	/**
	 * Enter a parse tree produced by `IDLParser.interface_name`.
	 * @param ctx the parse tree
	 */
	enterInterface_name?: (ctx: Interface_nameContext) => void;
	/**
	 * Exit a parse tree produced by `IDLParser.interface_name`.
	 * @param ctx the parse tree
	 */
	exitInterface_name?: (ctx: Interface_nameContext) => void;

	/**
	 * Enter a parse tree produced by `IDLParser.scoped_name`.
	 * @param ctx the parse tree
	 */
	enterScoped_name?: (ctx: Scoped_nameContext) => void;
	/**
	 * Exit a parse tree produced by `IDLParser.scoped_name`.
	 * @param ctx the parse tree
	 */
	exitScoped_name?: (ctx: Scoped_nameContext) => void;

	/**
	 * Enter a parse tree produced by `IDLParser.value`.
	 * @param ctx the parse tree
	 */
	enterValue?: (ctx: ValueContext) => void;
	/**
	 * Exit a parse tree produced by `IDLParser.value`.
	 * @param ctx the parse tree
	 */
	exitValue?: (ctx: ValueContext) => void;

	/**
	 * Enter a parse tree produced by `IDLParser.value_forward_decl`.
	 * @param ctx the parse tree
	 */
	enterValue_forward_decl?: (ctx: Value_forward_declContext) => void;
	/**
	 * Exit a parse tree produced by `IDLParser.value_forward_decl`.
	 * @param ctx the parse tree
	 */
	exitValue_forward_decl?: (ctx: Value_forward_declContext) => void;

	/**
	 * Enter a parse tree produced by `IDLParser.value_box_decl`.
	 * @param ctx the parse tree
	 */
	enterValue_box_decl?: (ctx: Value_box_declContext) => void;
	/**
	 * Exit a parse tree produced by `IDLParser.value_box_decl`.
	 * @param ctx the parse tree
	 */
	exitValue_box_decl?: (ctx: Value_box_declContext) => void;

	/**
	 * Enter a parse tree produced by `IDLParser.value_abs_decl`.
	 * @param ctx the parse tree
	 */
	enterValue_abs_decl?: (ctx: Value_abs_declContext) => void;
	/**
	 * Exit a parse tree produced by `IDLParser.value_abs_decl`.
	 * @param ctx the parse tree
	 */
	exitValue_abs_decl?: (ctx: Value_abs_declContext) => void;

	/**
	 * Enter a parse tree produced by `IDLParser.value_decl`.
	 * @param ctx the parse tree
	 */
	enterValue_decl?: (ctx: Value_declContext) => void;
	/**
	 * Exit a parse tree produced by `IDLParser.value_decl`.
	 * @param ctx the parse tree
	 */
	exitValue_decl?: (ctx: Value_declContext) => void;

	/**
	 * Enter a parse tree produced by `IDLParser.value_header`.
	 * @param ctx the parse tree
	 */
	enterValue_header?: (ctx: Value_headerContext) => void;
	/**
	 * Exit a parse tree produced by `IDLParser.value_header`.
	 * @param ctx the parse tree
	 */
	exitValue_header?: (ctx: Value_headerContext) => void;

	/**
	 * Enter a parse tree produced by `IDLParser.value_inheritance_spec`.
	 * @param ctx the parse tree
	 */
	enterValue_inheritance_spec?: (ctx: Value_inheritance_specContext) => void;
	/**
	 * Exit a parse tree produced by `IDLParser.value_inheritance_spec`.
	 * @param ctx the parse tree
	 */
	exitValue_inheritance_spec?: (ctx: Value_inheritance_specContext) => void;

	/**
	 * Enter a parse tree produced by `IDLParser.value_name`.
	 * @param ctx the parse tree
	 */
	enterValue_name?: (ctx: Value_nameContext) => void;
	/**
	 * Exit a parse tree produced by `IDLParser.value_name`.
	 * @param ctx the parse tree
	 */
	exitValue_name?: (ctx: Value_nameContext) => void;

	/**
	 * Enter a parse tree produced by `IDLParser.value_element`.
	 * @param ctx the parse tree
	 */
	enterValue_element?: (ctx: Value_elementContext) => void;
	/**
	 * Exit a parse tree produced by `IDLParser.value_element`.
	 * @param ctx the parse tree
	 */
	exitValue_element?: (ctx: Value_elementContext) => void;

	/**
	 * Enter a parse tree produced by `IDLParser.state_member`.
	 * @param ctx the parse tree
	 */
	enterState_member?: (ctx: State_memberContext) => void;
	/**
	 * Exit a parse tree produced by `IDLParser.state_member`.
	 * @param ctx the parse tree
	 */
	exitState_member?: (ctx: State_memberContext) => void;

	/**
	 * Enter a parse tree produced by `IDLParser.init_decl`.
	 * @param ctx the parse tree
	 */
	enterInit_decl?: (ctx: Init_declContext) => void;
	/**
	 * Exit a parse tree produced by `IDLParser.init_decl`.
	 * @param ctx the parse tree
	 */
	exitInit_decl?: (ctx: Init_declContext) => void;

	/**
	 * Enter a parse tree produced by `IDLParser.init_param_decls`.
	 * @param ctx the parse tree
	 */
	enterInit_param_decls?: (ctx: Init_param_declsContext) => void;
	/**
	 * Exit a parse tree produced by `IDLParser.init_param_decls`.
	 * @param ctx the parse tree
	 */
	exitInit_param_decls?: (ctx: Init_param_declsContext) => void;

	/**
	 * Enter a parse tree produced by `IDLParser.init_param_decl`.
	 * @param ctx the parse tree
	 */
	enterInit_param_decl?: (ctx: Init_param_declContext) => void;
	/**
	 * Exit a parse tree produced by `IDLParser.init_param_decl`.
	 * @param ctx the parse tree
	 */
	exitInit_param_decl?: (ctx: Init_param_declContext) => void;

	/**
	 * Enter a parse tree produced by `IDLParser.init_param_attribute`.
	 * @param ctx the parse tree
	 */
	enterInit_param_attribute?: (ctx: Init_param_attributeContext) => void;
	/**
	 * Exit a parse tree produced by `IDLParser.init_param_attribute`.
	 * @param ctx the parse tree
	 */
	exitInit_param_attribute?: (ctx: Init_param_attributeContext) => void;

	/**
	 * Enter a parse tree produced by `IDLParser.const_decl`.
	 * @param ctx the parse tree
	 */
	enterConst_decl?: (ctx: Const_declContext) => void;
	/**
	 * Exit a parse tree produced by `IDLParser.const_decl`.
	 * @param ctx the parse tree
	 */
	exitConst_decl?: (ctx: Const_declContext) => void;

	/**
	 * Enter a parse tree produced by `IDLParser.const_type`.
	 * @param ctx the parse tree
	 */
	enterConst_type?: (ctx: Const_typeContext) => void;
	/**
	 * Exit a parse tree produced by `IDLParser.const_type`.
	 * @param ctx the parse tree
	 */
	exitConst_type?: (ctx: Const_typeContext) => void;

	/**
	 * Enter a parse tree produced by `IDLParser.const_exp`.
	 * @param ctx the parse tree
	 */
	enterConst_exp?: (ctx: Const_expContext) => void;
	/**
	 * Exit a parse tree produced by `IDLParser.const_exp`.
	 * @param ctx the parse tree
	 */
	exitConst_exp?: (ctx: Const_expContext) => void;

	/**
	 * Enter a parse tree produced by `IDLParser.or_expr`.
	 * @param ctx the parse tree
	 */
	enterOr_expr?: (ctx: Or_exprContext) => void;
	/**
	 * Exit a parse tree produced by `IDLParser.or_expr`.
	 * @param ctx the parse tree
	 */
	exitOr_expr?: (ctx: Or_exprContext) => void;

	/**
	 * Enter a parse tree produced by `IDLParser.xor_expr`.
	 * @param ctx the parse tree
	 */
	enterXor_expr?: (ctx: Xor_exprContext) => void;
	/**
	 * Exit a parse tree produced by `IDLParser.xor_expr`.
	 * @param ctx the parse tree
	 */
	exitXor_expr?: (ctx: Xor_exprContext) => void;

	/**
	 * Enter a parse tree produced by `IDLParser.and_expr`.
	 * @param ctx the parse tree
	 */
	enterAnd_expr?: (ctx: And_exprContext) => void;
	/**
	 * Exit a parse tree produced by `IDLParser.and_expr`.
	 * @param ctx the parse tree
	 */
	exitAnd_expr?: (ctx: And_exprContext) => void;

	/**
	 * Enter a parse tree produced by `IDLParser.shift_expr`.
	 * @param ctx the parse tree
	 */
	enterShift_expr?: (ctx: Shift_exprContext) => void;
	/**
	 * Exit a parse tree produced by `IDLParser.shift_expr`.
	 * @param ctx the parse tree
	 */
	exitShift_expr?: (ctx: Shift_exprContext) => void;

	/**
	 * Enter a parse tree produced by `IDLParser.add_expr`.
	 * @param ctx the parse tree
	 */
	enterAdd_expr?: (ctx: Add_exprContext) => void;
	/**
	 * Exit a parse tree produced by `IDLParser.add_expr`.
	 * @param ctx the parse tree
	 */
	exitAdd_expr?: (ctx: Add_exprContext) => void;

	/**
	 * Enter a parse tree produced by `IDLParser.mult_expr`.
	 * @param ctx the parse tree
	 */
	enterMult_expr?: (ctx: Mult_exprContext) => void;
	/**
	 * Exit a parse tree produced by `IDLParser.mult_expr`.
	 * @param ctx the parse tree
	 */
	exitMult_expr?: (ctx: Mult_exprContext) => void;

	/**
	 * Enter a parse tree produced by `IDLParser.unary_expr`.
	 * @param ctx the parse tree
	 */
	enterUnary_expr?: (ctx: Unary_exprContext) => void;
	/**
	 * Exit a parse tree produced by `IDLParser.unary_expr`.
	 * @param ctx the parse tree
	 */
	exitUnary_expr?: (ctx: Unary_exprContext) => void;

	/**
	 * Enter a parse tree produced by `IDLParser.unary_operator`.
	 * @param ctx the parse tree
	 */
	enterUnary_operator?: (ctx: Unary_operatorContext) => void;
	/**
	 * Exit a parse tree produced by `IDLParser.unary_operator`.
	 * @param ctx the parse tree
	 */
	exitUnary_operator?: (ctx: Unary_operatorContext) => void;

	/**
	 * Enter a parse tree produced by `IDLParser.primary_expr`.
	 * @param ctx the parse tree
	 */
	enterPrimary_expr?: (ctx: Primary_exprContext) => void;
	/**
	 * Exit a parse tree produced by `IDLParser.primary_expr`.
	 * @param ctx the parse tree
	 */
	exitPrimary_expr?: (ctx: Primary_exprContext) => void;

	/**
	 * Enter a parse tree produced by `IDLParser.literal`.
	 * @param ctx the parse tree
	 */
	enterLiteral?: (ctx: LiteralContext) => void;
	/**
	 * Exit a parse tree produced by `IDLParser.literal`.
	 * @param ctx the parse tree
	 */
	exitLiteral?: (ctx: LiteralContext) => void;

	/**
	 * Enter a parse tree produced by `IDLParser.positive_int_const`.
	 * @param ctx the parse tree
	 */
	enterPositive_int_const?: (ctx: Positive_int_constContext) => void;
	/**
	 * Exit a parse tree produced by `IDLParser.positive_int_const`.
	 * @param ctx the parse tree
	 */
	exitPositive_int_const?: (ctx: Positive_int_constContext) => void;

	/**
	 * Enter a parse tree produced by `IDLParser.type_decl`.
	 * @param ctx the parse tree
	 */
	enterType_decl?: (ctx: Type_declContext) => void;
	/**
	 * Exit a parse tree produced by `IDLParser.type_decl`.
	 * @param ctx the parse tree
	 */
	exitType_decl?: (ctx: Type_declContext) => void;

	/**
	 * Enter a parse tree produced by `IDLParser.type_declarator`.
	 * @param ctx the parse tree
	 */
	enterType_declarator?: (ctx: Type_declaratorContext) => void;
	/**
	 * Exit a parse tree produced by `IDLParser.type_declarator`.
	 * @param ctx the parse tree
	 */
	exitType_declarator?: (ctx: Type_declaratorContext) => void;

	/**
	 * Enter a parse tree produced by `IDLParser.type_spec`.
	 * @param ctx the parse tree
	 */
	enterType_spec?: (ctx: Type_specContext) => void;
	/**
	 * Exit a parse tree produced by `IDLParser.type_spec`.
	 * @param ctx the parse tree
	 */
	exitType_spec?: (ctx: Type_specContext) => void;

	/**
	 * Enter a parse tree produced by `IDLParser.simple_type_spec`.
	 * @param ctx the parse tree
	 */
	enterSimple_type_spec?: (ctx: Simple_type_specContext) => void;
	/**
	 * Exit a parse tree produced by `IDLParser.simple_type_spec`.
	 * @param ctx the parse tree
	 */
	exitSimple_type_spec?: (ctx: Simple_type_specContext) => void;

	/**
	 * Enter a parse tree produced by `IDLParser.base_type_spec`.
	 * @param ctx the parse tree
	 */
	enterBase_type_spec?: (ctx: Base_type_specContext) => void;
	/**
	 * Exit a parse tree produced by `IDLParser.base_type_spec`.
	 * @param ctx the parse tree
	 */
	exitBase_type_spec?: (ctx: Base_type_specContext) => void;

	/**
	 * Enter a parse tree produced by `IDLParser.template_type_spec`.
	 * @param ctx the parse tree
	 */
	enterTemplate_type_spec?: (ctx: Template_type_specContext) => void;
	/**
	 * Exit a parse tree produced by `IDLParser.template_type_spec`.
	 * @param ctx the parse tree
	 */
	exitTemplate_type_spec?: (ctx: Template_type_specContext) => void;

	/**
	 * Enter a parse tree produced by `IDLParser.constr_type_spec`.
	 * @param ctx the parse tree
	 */
	enterConstr_type_spec?: (ctx: Constr_type_specContext) => void;
	/**
	 * Exit a parse tree produced by `IDLParser.constr_type_spec`.
	 * @param ctx the parse tree
	 */
	exitConstr_type_spec?: (ctx: Constr_type_specContext) => void;

	/**
	 * Enter a parse tree produced by `IDLParser.declarators`.
	 * @param ctx the parse tree
	 */
	enterDeclarators?: (ctx: DeclaratorsContext) => void;
	/**
	 * Exit a parse tree produced by `IDLParser.declarators`.
	 * @param ctx the parse tree
	 */
	exitDeclarators?: (ctx: DeclaratorsContext) => void;

	/**
	 * Enter a parse tree produced by `IDLParser.declarator`.
	 * @param ctx the parse tree
	 */
	enterDeclarator?: (ctx: DeclaratorContext) => void;
	/**
	 * Exit a parse tree produced by `IDLParser.declarator`.
	 * @param ctx the parse tree
	 */
	exitDeclarator?: (ctx: DeclaratorContext) => void;

	/**
	 * Enter a parse tree produced by `IDLParser.simple_declarator`.
	 * @param ctx the parse tree
	 */
	enterSimple_declarator?: (ctx: Simple_declaratorContext) => void;
	/**
	 * Exit a parse tree produced by `IDLParser.simple_declarator`.
	 * @param ctx the parse tree
	 */
	exitSimple_declarator?: (ctx: Simple_declaratorContext) => void;

	/**
	 * Enter a parse tree produced by `IDLParser.complex_declarator`.
	 * @param ctx the parse tree
	 */
	enterComplex_declarator?: (ctx: Complex_declaratorContext) => void;
	/**
	 * Exit a parse tree produced by `IDLParser.complex_declarator`.
	 * @param ctx the parse tree
	 */
	exitComplex_declarator?: (ctx: Complex_declaratorContext) => void;

	/**
	 * Enter a parse tree produced by `IDLParser.floating_pt_type`.
	 * @param ctx the parse tree
	 */
	enterFloating_pt_type?: (ctx: Floating_pt_typeContext) => void;
	/**
	 * Exit a parse tree produced by `IDLParser.floating_pt_type`.
	 * @param ctx the parse tree
	 */
	exitFloating_pt_type?: (ctx: Floating_pt_typeContext) => void;

	/**
	 * Enter a parse tree produced by `IDLParser.integer_type`.
	 * @param ctx the parse tree
	 */
	enterInteger_type?: (ctx: Integer_typeContext) => void;
	/**
	 * Exit a parse tree produced by `IDLParser.integer_type`.
	 * @param ctx the parse tree
	 */
	exitInteger_type?: (ctx: Integer_typeContext) => void;

	/**
	 * Enter a parse tree produced by `IDLParser.signed_int`.
	 * @param ctx the parse tree
	 */
	enterSigned_int?: (ctx: Signed_intContext) => void;
	/**
	 * Exit a parse tree produced by `IDLParser.signed_int`.
	 * @param ctx the parse tree
	 */
	exitSigned_int?: (ctx: Signed_intContext) => void;

	/**
	 * Enter a parse tree produced by `IDLParser.signed_short_int`.
	 * @param ctx the parse tree
	 */
	enterSigned_short_int?: (ctx: Signed_short_intContext) => void;
	/**
	 * Exit a parse tree produced by `IDLParser.signed_short_int`.
	 * @param ctx the parse tree
	 */
	exitSigned_short_int?: (ctx: Signed_short_intContext) => void;

	/**
	 * Enter a parse tree produced by `IDLParser.signed_long_int`.
	 * @param ctx the parse tree
	 */
	enterSigned_long_int?: (ctx: Signed_long_intContext) => void;
	/**
	 * Exit a parse tree produced by `IDLParser.signed_long_int`.
	 * @param ctx the parse tree
	 */
	exitSigned_long_int?: (ctx: Signed_long_intContext) => void;

	/**
	 * Enter a parse tree produced by `IDLParser.signed_longlong_int`.
	 * @param ctx the parse tree
	 */
	enterSigned_longlong_int?: (ctx: Signed_longlong_intContext) => void;
	/**
	 * Exit a parse tree produced by `IDLParser.signed_longlong_int`.
	 * @param ctx the parse tree
	 */
	exitSigned_longlong_int?: (ctx: Signed_longlong_intContext) => void;

	/**
	 * Enter a parse tree produced by `IDLParser.unsigned_int`.
	 * @param ctx the parse tree
	 */
	enterUnsigned_int?: (ctx: Unsigned_intContext) => void;
	/**
	 * Exit a parse tree produced by `IDLParser.unsigned_int`.
	 * @param ctx the parse tree
	 */
	exitUnsigned_int?: (ctx: Unsigned_intContext) => void;

	/**
	 * Enter a parse tree produced by `IDLParser.unsigned_short_int`.
	 * @param ctx the parse tree
	 */
	enterUnsigned_short_int?: (ctx: Unsigned_short_intContext) => void;
	/**
	 * Exit a parse tree produced by `IDLParser.unsigned_short_int`.
	 * @param ctx the parse tree
	 */
	exitUnsigned_short_int?: (ctx: Unsigned_short_intContext) => void;

	/**
	 * Enter a parse tree produced by `IDLParser.unsigned_long_int`.
	 * @param ctx the parse tree
	 */
	enterUnsigned_long_int?: (ctx: Unsigned_long_intContext) => void;
	/**
	 * Exit a parse tree produced by `IDLParser.unsigned_long_int`.
	 * @param ctx the parse tree
	 */
	exitUnsigned_long_int?: (ctx: Unsigned_long_intContext) => void;

	/**
	 * Enter a parse tree produced by `IDLParser.unsigned_longlong_int`.
	 * @param ctx the parse tree
	 */
	enterUnsigned_longlong_int?: (ctx: Unsigned_longlong_intContext) => void;
	/**
	 * Exit a parse tree produced by `IDLParser.unsigned_longlong_int`.
	 * @param ctx the parse tree
	 */
	exitUnsigned_longlong_int?: (ctx: Unsigned_longlong_intContext) => void;

	/**
	 * Enter a parse tree produced by `IDLParser.char_type`.
	 * @param ctx the parse tree
	 */
	enterChar_type?: (ctx: Char_typeContext) => void;
	/**
	 * Exit a parse tree produced by `IDLParser.char_type`.
	 * @param ctx the parse tree
	 */
	exitChar_type?: (ctx: Char_typeContext) => void;

	/**
	 * Enter a parse tree produced by `IDLParser.wide_char_type`.
	 * @param ctx the parse tree
	 */
	enterWide_char_type?: (ctx: Wide_char_typeContext) => void;
	/**
	 * Exit a parse tree produced by `IDLParser.wide_char_type`.
	 * @param ctx the parse tree
	 */
	exitWide_char_type?: (ctx: Wide_char_typeContext) => void;

	/**
	 * Enter a parse tree produced by `IDLParser.boolean_type`.
	 * @param ctx the parse tree
	 */
	enterBoolean_type?: (ctx: Boolean_typeContext) => void;
	/**
	 * Exit a parse tree produced by `IDLParser.boolean_type`.
	 * @param ctx the parse tree
	 */
	exitBoolean_type?: (ctx: Boolean_typeContext) => void;

	/**
	 * Enter a parse tree produced by `IDLParser.octet_type`.
	 * @param ctx the parse tree
	 */
	enterOctet_type?: (ctx: Octet_typeContext) => void;
	/**
	 * Exit a parse tree produced by `IDLParser.octet_type`.
	 * @param ctx the parse tree
	 */
	exitOctet_type?: (ctx: Octet_typeContext) => void;

	/**
	 * Enter a parse tree produced by `IDLParser.any_type`.
	 * @param ctx the parse tree
	 */
	enterAny_type?: (ctx: Any_typeContext) => void;
	/**
	 * Exit a parse tree produced by `IDLParser.any_type`.
	 * @param ctx the parse tree
	 */
	exitAny_type?: (ctx: Any_typeContext) => void;

	/**
	 * Enter a parse tree produced by `IDLParser.object_type`.
	 * @param ctx the parse tree
	 */
	enterObject_type?: (ctx: Object_typeContext) => void;
	/**
	 * Exit a parse tree produced by `IDLParser.object_type`.
	 * @param ctx the parse tree
	 */
	exitObject_type?: (ctx: Object_typeContext) => void;

	/**
	 * Enter a parse tree produced by `IDLParser.struct_type`.
	 * @param ctx the parse tree
	 */
	enterStruct_type?: (ctx: Struct_typeContext) => void;
	/**
	 * Exit a parse tree produced by `IDLParser.struct_type`.
	 * @param ctx the parse tree
	 */
	exitStruct_type?: (ctx: Struct_typeContext) => void;

	/**
	 * Enter a parse tree produced by `IDLParser.member_list`.
	 * @param ctx the parse tree
	 */
	enterMember_list?: (ctx: Member_listContext) => void;
	/**
	 * Exit a parse tree produced by `IDLParser.member_list`.
	 * @param ctx the parse tree
	 */
	exitMember_list?: (ctx: Member_listContext) => void;

	/**
	 * Enter a parse tree produced by `IDLParser.member`.
	 * @param ctx the parse tree
	 */
	enterMember?: (ctx: MemberContext) => void;
	/**
	 * Exit a parse tree produced by `IDLParser.member`.
	 * @param ctx the parse tree
	 */
	exitMember?: (ctx: MemberContext) => void;

	/**
	 * Enter a parse tree produced by `IDLParser.union_type`.
	 * @param ctx the parse tree
	 */
	enterUnion_type?: (ctx: Union_typeContext) => void;
	/**
	 * Exit a parse tree produced by `IDLParser.union_type`.
	 * @param ctx the parse tree
	 */
	exitUnion_type?: (ctx: Union_typeContext) => void;

	/**
	 * Enter a parse tree produced by `IDLParser.switch_type_spec`.
	 * @param ctx the parse tree
	 */
	enterSwitch_type_spec?: (ctx: Switch_type_specContext) => void;
	/**
	 * Exit a parse tree produced by `IDLParser.switch_type_spec`.
	 * @param ctx the parse tree
	 */
	exitSwitch_type_spec?: (ctx: Switch_type_specContext) => void;

	/**
	 * Enter a parse tree produced by `IDLParser.switch_body`.
	 * @param ctx the parse tree
	 */
	enterSwitch_body?: (ctx: Switch_bodyContext) => void;
	/**
	 * Exit a parse tree produced by `IDLParser.switch_body`.
	 * @param ctx the parse tree
	 */
	exitSwitch_body?: (ctx: Switch_bodyContext) => void;

	/**
	 * Enter a parse tree produced by `IDLParser.case_stmt`.
	 * @param ctx the parse tree
	 */
	enterCase_stmt?: (ctx: Case_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `IDLParser.case_stmt`.
	 * @param ctx the parse tree
	 */
	exitCase_stmt?: (ctx: Case_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `IDLParser.case_label`.
	 * @param ctx the parse tree
	 */
	enterCase_label?: (ctx: Case_labelContext) => void;
	/**
	 * Exit a parse tree produced by `IDLParser.case_label`.
	 * @param ctx the parse tree
	 */
	exitCase_label?: (ctx: Case_labelContext) => void;

	/**
	 * Enter a parse tree produced by `IDLParser.element_spec`.
	 * @param ctx the parse tree
	 */
	enterElement_spec?: (ctx: Element_specContext) => void;
	/**
	 * Exit a parse tree produced by `IDLParser.element_spec`.
	 * @param ctx the parse tree
	 */
	exitElement_spec?: (ctx: Element_specContext) => void;

	/**
	 * Enter a parse tree produced by `IDLParser.enum_type`.
	 * @param ctx the parse tree
	 */
	enterEnum_type?: (ctx: Enum_typeContext) => void;
	/**
	 * Exit a parse tree produced by `IDLParser.enum_type`.
	 * @param ctx the parse tree
	 */
	exitEnum_type?: (ctx: Enum_typeContext) => void;

	/**
	 * Enter a parse tree produced by `IDLParser.enumerator`.
	 * @param ctx the parse tree
	 */
	enterEnumerator?: (ctx: EnumeratorContext) => void;
	/**
	 * Exit a parse tree produced by `IDLParser.enumerator`.
	 * @param ctx the parse tree
	 */
	exitEnumerator?: (ctx: EnumeratorContext) => void;

	/**
	 * Enter a parse tree produced by `IDLParser.sequence_type`.
	 * @param ctx the parse tree
	 */
	enterSequence_type?: (ctx: Sequence_typeContext) => void;
	/**
	 * Exit a parse tree produced by `IDLParser.sequence_type`.
	 * @param ctx the parse tree
	 */
	exitSequence_type?: (ctx: Sequence_typeContext) => void;

	/**
	 * Enter a parse tree produced by `IDLParser.string_type`.
	 * @param ctx the parse tree
	 */
	enterString_type?: (ctx: String_typeContext) => void;
	/**
	 * Exit a parse tree produced by `IDLParser.string_type`.
	 * @param ctx the parse tree
	 */
	exitString_type?: (ctx: String_typeContext) => void;

	/**
	 * Enter a parse tree produced by `IDLParser.wide_string_type`.
	 * @param ctx the parse tree
	 */
	enterWide_string_type?: (ctx: Wide_string_typeContext) => void;
	/**
	 * Exit a parse tree produced by `IDLParser.wide_string_type`.
	 * @param ctx the parse tree
	 */
	exitWide_string_type?: (ctx: Wide_string_typeContext) => void;

	/**
	 * Enter a parse tree produced by `IDLParser.array_declarator`.
	 * @param ctx the parse tree
	 */
	enterArray_declarator?: (ctx: Array_declaratorContext) => void;
	/**
	 * Exit a parse tree produced by `IDLParser.array_declarator`.
	 * @param ctx the parse tree
	 */
	exitArray_declarator?: (ctx: Array_declaratorContext) => void;

	/**
	 * Enter a parse tree produced by `IDLParser.fixed_array_size`.
	 * @param ctx the parse tree
	 */
	enterFixed_array_size?: (ctx: Fixed_array_sizeContext) => void;
	/**
	 * Exit a parse tree produced by `IDLParser.fixed_array_size`.
	 * @param ctx the parse tree
	 */
	exitFixed_array_size?: (ctx: Fixed_array_sizeContext) => void;

	/**
	 * Enter a parse tree produced by `IDLParser.attr_decl`.
	 * @param ctx the parse tree
	 */
	enterAttr_decl?: (ctx: Attr_declContext) => void;
	/**
	 * Exit a parse tree produced by `IDLParser.attr_decl`.
	 * @param ctx the parse tree
	 */
	exitAttr_decl?: (ctx: Attr_declContext) => void;

	/**
	 * Enter a parse tree produced by `IDLParser.except_decl`.
	 * @param ctx the parse tree
	 */
	enterExcept_decl?: (ctx: Except_declContext) => void;
	/**
	 * Exit a parse tree produced by `IDLParser.except_decl`.
	 * @param ctx the parse tree
	 */
	exitExcept_decl?: (ctx: Except_declContext) => void;

	/**
	 * Enter a parse tree produced by `IDLParser.op_decl`.
	 * @param ctx the parse tree
	 */
	enterOp_decl?: (ctx: Op_declContext) => void;
	/**
	 * Exit a parse tree produced by `IDLParser.op_decl`.
	 * @param ctx the parse tree
	 */
	exitOp_decl?: (ctx: Op_declContext) => void;

	/**
	 * Enter a parse tree produced by `IDLParser.op_attribute`.
	 * @param ctx the parse tree
	 */
	enterOp_attribute?: (ctx: Op_attributeContext) => void;
	/**
	 * Exit a parse tree produced by `IDLParser.op_attribute`.
	 * @param ctx the parse tree
	 */
	exitOp_attribute?: (ctx: Op_attributeContext) => void;

	/**
	 * Enter a parse tree produced by `IDLParser.op_type_spec`.
	 * @param ctx the parse tree
	 */
	enterOp_type_spec?: (ctx: Op_type_specContext) => void;
	/**
	 * Exit a parse tree produced by `IDLParser.op_type_spec`.
	 * @param ctx the parse tree
	 */
	exitOp_type_spec?: (ctx: Op_type_specContext) => void;

	/**
	 * Enter a parse tree produced by `IDLParser.parameter_decls`.
	 * @param ctx the parse tree
	 */
	enterParameter_decls?: (ctx: Parameter_declsContext) => void;
	/**
	 * Exit a parse tree produced by `IDLParser.parameter_decls`.
	 * @param ctx the parse tree
	 */
	exitParameter_decls?: (ctx: Parameter_declsContext) => void;

	/**
	 * Enter a parse tree produced by `IDLParser.param_decl`.
	 * @param ctx the parse tree
	 */
	enterParam_decl?: (ctx: Param_declContext) => void;
	/**
	 * Exit a parse tree produced by `IDLParser.param_decl`.
	 * @param ctx the parse tree
	 */
	exitParam_decl?: (ctx: Param_declContext) => void;

	/**
	 * Enter a parse tree produced by `IDLParser.param_attribute`.
	 * @param ctx the parse tree
	 */
	enterParam_attribute?: (ctx: Param_attributeContext) => void;
	/**
	 * Exit a parse tree produced by `IDLParser.param_attribute`.
	 * @param ctx the parse tree
	 */
	exitParam_attribute?: (ctx: Param_attributeContext) => void;

	/**
	 * Enter a parse tree produced by `IDLParser.raises_expr`.
	 * @param ctx the parse tree
	 */
	enterRaises_expr?: (ctx: Raises_exprContext) => void;
	/**
	 * Exit a parse tree produced by `IDLParser.raises_expr`.
	 * @param ctx the parse tree
	 */
	exitRaises_expr?: (ctx: Raises_exprContext) => void;

	/**
	 * Enter a parse tree produced by `IDLParser.context_expr`.
	 * @param ctx the parse tree
	 */
	enterContext_expr?: (ctx: Context_exprContext) => void;
	/**
	 * Exit a parse tree produced by `IDLParser.context_expr`.
	 * @param ctx the parse tree
	 */
	exitContext_expr?: (ctx: Context_exprContext) => void;

	/**
	 * Enter a parse tree produced by `IDLParser.param_type_spec`.
	 * @param ctx the parse tree
	 */
	enterParam_type_spec?: (ctx: Param_type_specContext) => void;
	/**
	 * Exit a parse tree produced by `IDLParser.param_type_spec`.
	 * @param ctx the parse tree
	 */
	exitParam_type_spec?: (ctx: Param_type_specContext) => void;

	/**
	 * Enter a parse tree produced by `IDLParser.fixed_pt_type`.
	 * @param ctx the parse tree
	 */
	enterFixed_pt_type?: (ctx: Fixed_pt_typeContext) => void;
	/**
	 * Exit a parse tree produced by `IDLParser.fixed_pt_type`.
	 * @param ctx the parse tree
	 */
	exitFixed_pt_type?: (ctx: Fixed_pt_typeContext) => void;

	/**
	 * Enter a parse tree produced by `IDLParser.fixed_pt_const_type`.
	 * @param ctx the parse tree
	 */
	enterFixed_pt_const_type?: (ctx: Fixed_pt_const_typeContext) => void;
	/**
	 * Exit a parse tree produced by `IDLParser.fixed_pt_const_type`.
	 * @param ctx the parse tree
	 */
	exitFixed_pt_const_type?: (ctx: Fixed_pt_const_typeContext) => void;

	/**
	 * Enter a parse tree produced by `IDLParser.value_base_type`.
	 * @param ctx the parse tree
	 */
	enterValue_base_type?: (ctx: Value_base_typeContext) => void;
	/**
	 * Exit a parse tree produced by `IDLParser.value_base_type`.
	 * @param ctx the parse tree
	 */
	exitValue_base_type?: (ctx: Value_base_typeContext) => void;

	/**
	 * Enter a parse tree produced by `IDLParser.constr_forward_decl`.
	 * @param ctx the parse tree
	 */
	enterConstr_forward_decl?: (ctx: Constr_forward_declContext) => void;
	/**
	 * Exit a parse tree produced by `IDLParser.constr_forward_decl`.
	 * @param ctx the parse tree
	 */
	exitConstr_forward_decl?: (ctx: Constr_forward_declContext) => void;

	/**
	 * Enter a parse tree produced by `IDLParser.import_decl`.
	 * @param ctx the parse tree
	 */
	enterImport_decl?: (ctx: Import_declContext) => void;
	/**
	 * Exit a parse tree produced by `IDLParser.import_decl`.
	 * @param ctx the parse tree
	 */
	exitImport_decl?: (ctx: Import_declContext) => void;

	/**
	 * Enter a parse tree produced by `IDLParser.imported_scope`.
	 * @param ctx the parse tree
	 */
	enterImported_scope?: (ctx: Imported_scopeContext) => void;
	/**
	 * Exit a parse tree produced by `IDLParser.imported_scope`.
	 * @param ctx the parse tree
	 */
	exitImported_scope?: (ctx: Imported_scopeContext) => void;

	/**
	 * Enter a parse tree produced by `IDLParser.type_id_decl`.
	 * @param ctx the parse tree
	 */
	enterType_id_decl?: (ctx: Type_id_declContext) => void;
	/**
	 * Exit a parse tree produced by `IDLParser.type_id_decl`.
	 * @param ctx the parse tree
	 */
	exitType_id_decl?: (ctx: Type_id_declContext) => void;

	/**
	 * Enter a parse tree produced by `IDLParser.type_prefix_decl`.
	 * @param ctx the parse tree
	 */
	enterType_prefix_decl?: (ctx: Type_prefix_declContext) => void;
	/**
	 * Exit a parse tree produced by `IDLParser.type_prefix_decl`.
	 * @param ctx the parse tree
	 */
	exitType_prefix_decl?: (ctx: Type_prefix_declContext) => void;

	/**
	 * Enter a parse tree produced by `IDLParser.readonly_attr_spec`.
	 * @param ctx the parse tree
	 */
	enterReadonly_attr_spec?: (ctx: Readonly_attr_specContext) => void;
	/**
	 * Exit a parse tree produced by `IDLParser.readonly_attr_spec`.
	 * @param ctx the parse tree
	 */
	exitReadonly_attr_spec?: (ctx: Readonly_attr_specContext) => void;

	/**
	 * Enter a parse tree produced by `IDLParser.readonly_attr_declarator`.
	 * @param ctx the parse tree
	 */
	enterReadonly_attr_declarator?: (ctx: Readonly_attr_declaratorContext) => void;
	/**
	 * Exit a parse tree produced by `IDLParser.readonly_attr_declarator`.
	 * @param ctx the parse tree
	 */
	exitReadonly_attr_declarator?: (ctx: Readonly_attr_declaratorContext) => void;

	/**
	 * Enter a parse tree produced by `IDLParser.attr_spec`.
	 * @param ctx the parse tree
	 */
	enterAttr_spec?: (ctx: Attr_specContext) => void;
	/**
	 * Exit a parse tree produced by `IDLParser.attr_spec`.
	 * @param ctx the parse tree
	 */
	exitAttr_spec?: (ctx: Attr_specContext) => void;

	/**
	 * Enter a parse tree produced by `IDLParser.attr_declarator`.
	 * @param ctx the parse tree
	 */
	enterAttr_declarator?: (ctx: Attr_declaratorContext) => void;
	/**
	 * Exit a parse tree produced by `IDLParser.attr_declarator`.
	 * @param ctx the parse tree
	 */
	exitAttr_declarator?: (ctx: Attr_declaratorContext) => void;

	/**
	 * Enter a parse tree produced by `IDLParser.attr_raises_expr`.
	 * @param ctx the parse tree
	 */
	enterAttr_raises_expr?: (ctx: Attr_raises_exprContext) => void;
	/**
	 * Exit a parse tree produced by `IDLParser.attr_raises_expr`.
	 * @param ctx the parse tree
	 */
	exitAttr_raises_expr?: (ctx: Attr_raises_exprContext) => void;

	/**
	 * Enter a parse tree produced by `IDLParser.get_excep_expr`.
	 * @param ctx the parse tree
	 */
	enterGet_excep_expr?: (ctx: Get_excep_exprContext) => void;
	/**
	 * Exit a parse tree produced by `IDLParser.get_excep_expr`.
	 * @param ctx the parse tree
	 */
	exitGet_excep_expr?: (ctx: Get_excep_exprContext) => void;

	/**
	 * Enter a parse tree produced by `IDLParser.set_excep_expr`.
	 * @param ctx the parse tree
	 */
	enterSet_excep_expr?: (ctx: Set_excep_exprContext) => void;
	/**
	 * Exit a parse tree produced by `IDLParser.set_excep_expr`.
	 * @param ctx the parse tree
	 */
	exitSet_excep_expr?: (ctx: Set_excep_exprContext) => void;

	/**
	 * Enter a parse tree produced by `IDLParser.exception_list`.
	 * @param ctx the parse tree
	 */
	enterException_list?: (ctx: Exception_listContext) => void;
	/**
	 * Exit a parse tree produced by `IDLParser.exception_list`.
	 * @param ctx the parse tree
	 */
	exitException_list?: (ctx: Exception_listContext) => void;

	/**
	 * Enter a parse tree produced by `IDLParser.component`.
	 * @param ctx the parse tree
	 */
	enterComponent?: (ctx: ComponentContext) => void;
	/**
	 * Exit a parse tree produced by `IDLParser.component`.
	 * @param ctx the parse tree
	 */
	exitComponent?: (ctx: ComponentContext) => void;

	/**
	 * Enter a parse tree produced by `IDLParser.component_forward_decl`.
	 * @param ctx the parse tree
	 */
	enterComponent_forward_decl?: (ctx: Component_forward_declContext) => void;
	/**
	 * Exit a parse tree produced by `IDLParser.component_forward_decl`.
	 * @param ctx the parse tree
	 */
	exitComponent_forward_decl?: (ctx: Component_forward_declContext) => void;

	/**
	 * Enter a parse tree produced by `IDLParser.component_decl`.
	 * @param ctx the parse tree
	 */
	enterComponent_decl?: (ctx: Component_declContext) => void;
	/**
	 * Exit a parse tree produced by `IDLParser.component_decl`.
	 * @param ctx the parse tree
	 */
	exitComponent_decl?: (ctx: Component_declContext) => void;

	/**
	 * Enter a parse tree produced by `IDLParser.component_header`.
	 * @param ctx the parse tree
	 */
	enterComponent_header?: (ctx: Component_headerContext) => void;
	/**
	 * Exit a parse tree produced by `IDLParser.component_header`.
	 * @param ctx the parse tree
	 */
	exitComponent_header?: (ctx: Component_headerContext) => void;

	/**
	 * Enter a parse tree produced by `IDLParser.supported_interface_spec`.
	 * @param ctx the parse tree
	 */
	enterSupported_interface_spec?: (ctx: Supported_interface_specContext) => void;
	/**
	 * Exit a parse tree produced by `IDLParser.supported_interface_spec`.
	 * @param ctx the parse tree
	 */
	exitSupported_interface_spec?: (ctx: Supported_interface_specContext) => void;

	/**
	 * Enter a parse tree produced by `IDLParser.component_inheritance_spec`.
	 * @param ctx the parse tree
	 */
	enterComponent_inheritance_spec?: (ctx: Component_inheritance_specContext) => void;
	/**
	 * Exit a parse tree produced by `IDLParser.component_inheritance_spec`.
	 * @param ctx the parse tree
	 */
	exitComponent_inheritance_spec?: (ctx: Component_inheritance_specContext) => void;

	/**
	 * Enter a parse tree produced by `IDLParser.component_body`.
	 * @param ctx the parse tree
	 */
	enterComponent_body?: (ctx: Component_bodyContext) => void;
	/**
	 * Exit a parse tree produced by `IDLParser.component_body`.
	 * @param ctx the parse tree
	 */
	exitComponent_body?: (ctx: Component_bodyContext) => void;

	/**
	 * Enter a parse tree produced by `IDLParser.component_export`.
	 * @param ctx the parse tree
	 */
	enterComponent_export?: (ctx: Component_exportContext) => void;
	/**
	 * Exit a parse tree produced by `IDLParser.component_export`.
	 * @param ctx the parse tree
	 */
	exitComponent_export?: (ctx: Component_exportContext) => void;

	/**
	 * Enter a parse tree produced by `IDLParser.provides_decl`.
	 * @param ctx the parse tree
	 */
	enterProvides_decl?: (ctx: Provides_declContext) => void;
	/**
	 * Exit a parse tree produced by `IDLParser.provides_decl`.
	 * @param ctx the parse tree
	 */
	exitProvides_decl?: (ctx: Provides_declContext) => void;

	/**
	 * Enter a parse tree produced by `IDLParser.interface_type`.
	 * @param ctx the parse tree
	 */
	enterInterface_type?: (ctx: Interface_typeContext) => void;
	/**
	 * Exit a parse tree produced by `IDLParser.interface_type`.
	 * @param ctx the parse tree
	 */
	exitInterface_type?: (ctx: Interface_typeContext) => void;

	/**
	 * Enter a parse tree produced by `IDLParser.uses_decl`.
	 * @param ctx the parse tree
	 */
	enterUses_decl?: (ctx: Uses_declContext) => void;
	/**
	 * Exit a parse tree produced by `IDLParser.uses_decl`.
	 * @param ctx the parse tree
	 */
	exitUses_decl?: (ctx: Uses_declContext) => void;

	/**
	 * Enter a parse tree produced by `IDLParser.emits_decl`.
	 * @param ctx the parse tree
	 */
	enterEmits_decl?: (ctx: Emits_declContext) => void;
	/**
	 * Exit a parse tree produced by `IDLParser.emits_decl`.
	 * @param ctx the parse tree
	 */
	exitEmits_decl?: (ctx: Emits_declContext) => void;

	/**
	 * Enter a parse tree produced by `IDLParser.publishes_decl`.
	 * @param ctx the parse tree
	 */
	enterPublishes_decl?: (ctx: Publishes_declContext) => void;
	/**
	 * Exit a parse tree produced by `IDLParser.publishes_decl`.
	 * @param ctx the parse tree
	 */
	exitPublishes_decl?: (ctx: Publishes_declContext) => void;

	/**
	 * Enter a parse tree produced by `IDLParser.consumes_decl`.
	 * @param ctx the parse tree
	 */
	enterConsumes_decl?: (ctx: Consumes_declContext) => void;
	/**
	 * Exit a parse tree produced by `IDLParser.consumes_decl`.
	 * @param ctx the parse tree
	 */
	exitConsumes_decl?: (ctx: Consumes_declContext) => void;

	/**
	 * Enter a parse tree produced by `IDLParser.home_decl`.
	 * @param ctx the parse tree
	 */
	enterHome_decl?: (ctx: Home_declContext) => void;
	/**
	 * Exit a parse tree produced by `IDLParser.home_decl`.
	 * @param ctx the parse tree
	 */
	exitHome_decl?: (ctx: Home_declContext) => void;

	/**
	 * Enter a parse tree produced by `IDLParser.home_header`.
	 * @param ctx the parse tree
	 */
	enterHome_header?: (ctx: Home_headerContext) => void;
	/**
	 * Exit a parse tree produced by `IDLParser.home_header`.
	 * @param ctx the parse tree
	 */
	exitHome_header?: (ctx: Home_headerContext) => void;

	/**
	 * Enter a parse tree produced by `IDLParser.home_inheritance_spec`.
	 * @param ctx the parse tree
	 */
	enterHome_inheritance_spec?: (ctx: Home_inheritance_specContext) => void;
	/**
	 * Exit a parse tree produced by `IDLParser.home_inheritance_spec`.
	 * @param ctx the parse tree
	 */
	exitHome_inheritance_spec?: (ctx: Home_inheritance_specContext) => void;

	/**
	 * Enter a parse tree produced by `IDLParser.primary_key_spec`.
	 * @param ctx the parse tree
	 */
	enterPrimary_key_spec?: (ctx: Primary_key_specContext) => void;
	/**
	 * Exit a parse tree produced by `IDLParser.primary_key_spec`.
	 * @param ctx the parse tree
	 */
	exitPrimary_key_spec?: (ctx: Primary_key_specContext) => void;

	/**
	 * Enter a parse tree produced by `IDLParser.home_body`.
	 * @param ctx the parse tree
	 */
	enterHome_body?: (ctx: Home_bodyContext) => void;
	/**
	 * Exit a parse tree produced by `IDLParser.home_body`.
	 * @param ctx the parse tree
	 */
	exitHome_body?: (ctx: Home_bodyContext) => void;

	/**
	 * Enter a parse tree produced by `IDLParser.home_export`.
	 * @param ctx the parse tree
	 */
	enterHome_export?: (ctx: Home_exportContext) => void;
	/**
	 * Exit a parse tree produced by `IDLParser.home_export`.
	 * @param ctx the parse tree
	 */
	exitHome_export?: (ctx: Home_exportContext) => void;

	/**
	 * Enter a parse tree produced by `IDLParser.factory_decl`.
	 * @param ctx the parse tree
	 */
	enterFactory_decl?: (ctx: Factory_declContext) => void;
	/**
	 * Exit a parse tree produced by `IDLParser.factory_decl`.
	 * @param ctx the parse tree
	 */
	exitFactory_decl?: (ctx: Factory_declContext) => void;

	/**
	 * Enter a parse tree produced by `IDLParser.finder_decl`.
	 * @param ctx the parse tree
	 */
	enterFinder_decl?: (ctx: Finder_declContext) => void;
	/**
	 * Exit a parse tree produced by `IDLParser.finder_decl`.
	 * @param ctx the parse tree
	 */
	exitFinder_decl?: (ctx: Finder_declContext) => void;

	/**
	 * Enter a parse tree produced by `IDLParser.event`.
	 * @param ctx the parse tree
	 */
	enterEvent?: (ctx: EventContext) => void;
	/**
	 * Exit a parse tree produced by `IDLParser.event`.
	 * @param ctx the parse tree
	 */
	exitEvent?: (ctx: EventContext) => void;

	/**
	 * Enter a parse tree produced by `IDLParser.event_forward_decl`.
	 * @param ctx the parse tree
	 */
	enterEvent_forward_decl?: (ctx: Event_forward_declContext) => void;
	/**
	 * Exit a parse tree produced by `IDLParser.event_forward_decl`.
	 * @param ctx the parse tree
	 */
	exitEvent_forward_decl?: (ctx: Event_forward_declContext) => void;

	/**
	 * Enter a parse tree produced by `IDLParser.event_abs_decl`.
	 * @param ctx the parse tree
	 */
	enterEvent_abs_decl?: (ctx: Event_abs_declContext) => void;
	/**
	 * Exit a parse tree produced by `IDLParser.event_abs_decl`.
	 * @param ctx the parse tree
	 */
	exitEvent_abs_decl?: (ctx: Event_abs_declContext) => void;

	/**
	 * Enter a parse tree produced by `IDLParser.event_decl`.
	 * @param ctx the parse tree
	 */
	enterEvent_decl?: (ctx: Event_declContext) => void;
	/**
	 * Exit a parse tree produced by `IDLParser.event_decl`.
	 * @param ctx the parse tree
	 */
	exitEvent_decl?: (ctx: Event_declContext) => void;

	/**
	 * Enter a parse tree produced by `IDLParser.event_header`.
	 * @param ctx the parse tree
	 */
	enterEvent_header?: (ctx: Event_headerContext) => void;
	/**
	 * Exit a parse tree produced by `IDLParser.event_header`.
	 * @param ctx the parse tree
	 */
	exitEvent_header?: (ctx: Event_headerContext) => void;
}

