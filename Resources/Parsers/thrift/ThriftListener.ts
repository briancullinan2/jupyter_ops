// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/thrift/Thrift.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { DocumentContext } from "./ThriftParser";
import { HeaderContext } from "./ThriftParser";
import { IncludeContext } from "./ThriftParser";
import { NamespaceContext } from "./ThriftParser";
import { Cpp_includeContext } from "./ThriftParser";
import { DefinitionContext } from "./ThriftParser";
import { Const_ruleContext } from "./ThriftParser";
import { TypedefContext } from "./ThriftParser";
import { Enum_ruleContext } from "./ThriftParser";
import { Enum_fieldContext } from "./ThriftParser";
import { SenumContext } from "./ThriftParser";
import { StructContext } from "./ThriftParser";
import { UnionContext } from "./ThriftParser";
import { ExceptionContext } from "./ThriftParser";
import { ServiceContext } from "./ThriftParser";
import { FieldContext } from "./ThriftParser";
import { Field_idContext } from "./ThriftParser";
import { Field_reqContext } from "./ThriftParser";
import { FunctionContext } from "./ThriftParser";
import { OnewayContext } from "./ThriftParser";
import { Function_typeContext } from "./ThriftParser";
import { Throws_listContext } from "./ThriftParser";
import { Type_annotationsContext } from "./ThriftParser";
import { Type_annotationContext } from "./ThriftParser";
import { Annotation_valueContext } from "./ThriftParser";
import { Field_typeContext } from "./ThriftParser";
import { Base_typeContext } from "./ThriftParser";
import { Container_typeContext } from "./ThriftParser";
import { Map_typeContext } from "./ThriftParser";
import { Set_typeContext } from "./ThriftParser";
import { List_typeContext } from "./ThriftParser";
import { Cpp_typeContext } from "./ThriftParser";
import { Const_valueContext } from "./ThriftParser";
import { IntegerContext } from "./ThriftParser";
import { Const_listContext } from "./ThriftParser";
import { Const_map_entryContext } from "./ThriftParser";
import { Const_mapContext } from "./ThriftParser";
import { List_separatorContext } from "./ThriftParser";
import { Real_base_typeContext } from "./ThriftParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `ThriftParser`.
 */
export interface ThriftListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `ThriftParser.document`.
	 * @param ctx the parse tree
	 */
	enterDocument?: (ctx: DocumentContext) => void;
	/**
	 * Exit a parse tree produced by `ThriftParser.document`.
	 * @param ctx the parse tree
	 */
	exitDocument?: (ctx: DocumentContext) => void;

	/**
	 * Enter a parse tree produced by `ThriftParser.header`.
	 * @param ctx the parse tree
	 */
	enterHeader?: (ctx: HeaderContext) => void;
	/**
	 * Exit a parse tree produced by `ThriftParser.header`.
	 * @param ctx the parse tree
	 */
	exitHeader?: (ctx: HeaderContext) => void;

	/**
	 * Enter a parse tree produced by `ThriftParser.include`.
	 * @param ctx the parse tree
	 */
	enterInclude?: (ctx: IncludeContext) => void;
	/**
	 * Exit a parse tree produced by `ThriftParser.include`.
	 * @param ctx the parse tree
	 */
	exitInclude?: (ctx: IncludeContext) => void;

	/**
	 * Enter a parse tree produced by `ThriftParser.namespace`.
	 * @param ctx the parse tree
	 */
	enterNamespace?: (ctx: NamespaceContext) => void;
	/**
	 * Exit a parse tree produced by `ThriftParser.namespace`.
	 * @param ctx the parse tree
	 */
	exitNamespace?: (ctx: NamespaceContext) => void;

	/**
	 * Enter a parse tree produced by `ThriftParser.cpp_include`.
	 * @param ctx the parse tree
	 */
	enterCpp_include?: (ctx: Cpp_includeContext) => void;
	/**
	 * Exit a parse tree produced by `ThriftParser.cpp_include`.
	 * @param ctx the parse tree
	 */
	exitCpp_include?: (ctx: Cpp_includeContext) => void;

	/**
	 * Enter a parse tree produced by `ThriftParser.definition`.
	 * @param ctx the parse tree
	 */
	enterDefinition?: (ctx: DefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `ThriftParser.definition`.
	 * @param ctx the parse tree
	 */
	exitDefinition?: (ctx: DefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `ThriftParser.const_rule`.
	 * @param ctx the parse tree
	 */
	enterConst_rule?: (ctx: Const_ruleContext) => void;
	/**
	 * Exit a parse tree produced by `ThriftParser.const_rule`.
	 * @param ctx the parse tree
	 */
	exitConst_rule?: (ctx: Const_ruleContext) => void;

	/**
	 * Enter a parse tree produced by `ThriftParser.typedef`.
	 * @param ctx the parse tree
	 */
	enterTypedef?: (ctx: TypedefContext) => void;
	/**
	 * Exit a parse tree produced by `ThriftParser.typedef`.
	 * @param ctx the parse tree
	 */
	exitTypedef?: (ctx: TypedefContext) => void;

	/**
	 * Enter a parse tree produced by `ThriftParser.enum_rule`.
	 * @param ctx the parse tree
	 */
	enterEnum_rule?: (ctx: Enum_ruleContext) => void;
	/**
	 * Exit a parse tree produced by `ThriftParser.enum_rule`.
	 * @param ctx the parse tree
	 */
	exitEnum_rule?: (ctx: Enum_ruleContext) => void;

	/**
	 * Enter a parse tree produced by `ThriftParser.enum_field`.
	 * @param ctx the parse tree
	 */
	enterEnum_field?: (ctx: Enum_fieldContext) => void;
	/**
	 * Exit a parse tree produced by `ThriftParser.enum_field`.
	 * @param ctx the parse tree
	 */
	exitEnum_field?: (ctx: Enum_fieldContext) => void;

	/**
	 * Enter a parse tree produced by `ThriftParser.senum`.
	 * @param ctx the parse tree
	 */
	enterSenum?: (ctx: SenumContext) => void;
	/**
	 * Exit a parse tree produced by `ThriftParser.senum`.
	 * @param ctx the parse tree
	 */
	exitSenum?: (ctx: SenumContext) => void;

	/**
	 * Enter a parse tree produced by `ThriftParser.struct`.
	 * @param ctx the parse tree
	 */
	enterStruct?: (ctx: StructContext) => void;
	/**
	 * Exit a parse tree produced by `ThriftParser.struct`.
	 * @param ctx the parse tree
	 */
	exitStruct?: (ctx: StructContext) => void;

	/**
	 * Enter a parse tree produced by `ThriftParser.union`.
	 * @param ctx the parse tree
	 */
	enterUnion?: (ctx: UnionContext) => void;
	/**
	 * Exit a parse tree produced by `ThriftParser.union`.
	 * @param ctx the parse tree
	 */
	exitUnion?: (ctx: UnionContext) => void;

	/**
	 * Enter a parse tree produced by `ThriftParser.exception`.
	 * @param ctx the parse tree
	 */
	enterException?: (ctx: ExceptionContext) => void;
	/**
	 * Exit a parse tree produced by `ThriftParser.exception`.
	 * @param ctx the parse tree
	 */
	exitException?: (ctx: ExceptionContext) => void;

	/**
	 * Enter a parse tree produced by `ThriftParser.service`.
	 * @param ctx the parse tree
	 */
	enterService?: (ctx: ServiceContext) => void;
	/**
	 * Exit a parse tree produced by `ThriftParser.service`.
	 * @param ctx the parse tree
	 */
	exitService?: (ctx: ServiceContext) => void;

	/**
	 * Enter a parse tree produced by `ThriftParser.field`.
	 * @param ctx the parse tree
	 */
	enterField?: (ctx: FieldContext) => void;
	/**
	 * Exit a parse tree produced by `ThriftParser.field`.
	 * @param ctx the parse tree
	 */
	exitField?: (ctx: FieldContext) => void;

	/**
	 * Enter a parse tree produced by `ThriftParser.field_id`.
	 * @param ctx the parse tree
	 */
	enterField_id?: (ctx: Field_idContext) => void;
	/**
	 * Exit a parse tree produced by `ThriftParser.field_id`.
	 * @param ctx the parse tree
	 */
	exitField_id?: (ctx: Field_idContext) => void;

	/**
	 * Enter a parse tree produced by `ThriftParser.field_req`.
	 * @param ctx the parse tree
	 */
	enterField_req?: (ctx: Field_reqContext) => void;
	/**
	 * Exit a parse tree produced by `ThriftParser.field_req`.
	 * @param ctx the parse tree
	 */
	exitField_req?: (ctx: Field_reqContext) => void;

	/**
	 * Enter a parse tree produced by `ThriftParser.function`.
	 * @param ctx the parse tree
	 */
	enterFunction?: (ctx: FunctionContext) => void;
	/**
	 * Exit a parse tree produced by `ThriftParser.function`.
	 * @param ctx the parse tree
	 */
	exitFunction?: (ctx: FunctionContext) => void;

	/**
	 * Enter a parse tree produced by `ThriftParser.oneway`.
	 * @param ctx the parse tree
	 */
	enterOneway?: (ctx: OnewayContext) => void;
	/**
	 * Exit a parse tree produced by `ThriftParser.oneway`.
	 * @param ctx the parse tree
	 */
	exitOneway?: (ctx: OnewayContext) => void;

	/**
	 * Enter a parse tree produced by `ThriftParser.function_type`.
	 * @param ctx the parse tree
	 */
	enterFunction_type?: (ctx: Function_typeContext) => void;
	/**
	 * Exit a parse tree produced by `ThriftParser.function_type`.
	 * @param ctx the parse tree
	 */
	exitFunction_type?: (ctx: Function_typeContext) => void;

	/**
	 * Enter a parse tree produced by `ThriftParser.throws_list`.
	 * @param ctx the parse tree
	 */
	enterThrows_list?: (ctx: Throws_listContext) => void;
	/**
	 * Exit a parse tree produced by `ThriftParser.throws_list`.
	 * @param ctx the parse tree
	 */
	exitThrows_list?: (ctx: Throws_listContext) => void;

	/**
	 * Enter a parse tree produced by `ThriftParser.type_annotations`.
	 * @param ctx the parse tree
	 */
	enterType_annotations?: (ctx: Type_annotationsContext) => void;
	/**
	 * Exit a parse tree produced by `ThriftParser.type_annotations`.
	 * @param ctx the parse tree
	 */
	exitType_annotations?: (ctx: Type_annotationsContext) => void;

	/**
	 * Enter a parse tree produced by `ThriftParser.type_annotation`.
	 * @param ctx the parse tree
	 */
	enterType_annotation?: (ctx: Type_annotationContext) => void;
	/**
	 * Exit a parse tree produced by `ThriftParser.type_annotation`.
	 * @param ctx the parse tree
	 */
	exitType_annotation?: (ctx: Type_annotationContext) => void;

	/**
	 * Enter a parse tree produced by `ThriftParser.annotation_value`.
	 * @param ctx the parse tree
	 */
	enterAnnotation_value?: (ctx: Annotation_valueContext) => void;
	/**
	 * Exit a parse tree produced by `ThriftParser.annotation_value`.
	 * @param ctx the parse tree
	 */
	exitAnnotation_value?: (ctx: Annotation_valueContext) => void;

	/**
	 * Enter a parse tree produced by `ThriftParser.field_type`.
	 * @param ctx the parse tree
	 */
	enterField_type?: (ctx: Field_typeContext) => void;
	/**
	 * Exit a parse tree produced by `ThriftParser.field_type`.
	 * @param ctx the parse tree
	 */
	exitField_type?: (ctx: Field_typeContext) => void;

	/**
	 * Enter a parse tree produced by `ThriftParser.base_type`.
	 * @param ctx the parse tree
	 */
	enterBase_type?: (ctx: Base_typeContext) => void;
	/**
	 * Exit a parse tree produced by `ThriftParser.base_type`.
	 * @param ctx the parse tree
	 */
	exitBase_type?: (ctx: Base_typeContext) => void;

	/**
	 * Enter a parse tree produced by `ThriftParser.container_type`.
	 * @param ctx the parse tree
	 */
	enterContainer_type?: (ctx: Container_typeContext) => void;
	/**
	 * Exit a parse tree produced by `ThriftParser.container_type`.
	 * @param ctx the parse tree
	 */
	exitContainer_type?: (ctx: Container_typeContext) => void;

	/**
	 * Enter a parse tree produced by `ThriftParser.map_type`.
	 * @param ctx the parse tree
	 */
	enterMap_type?: (ctx: Map_typeContext) => void;
	/**
	 * Exit a parse tree produced by `ThriftParser.map_type`.
	 * @param ctx the parse tree
	 */
	exitMap_type?: (ctx: Map_typeContext) => void;

	/**
	 * Enter a parse tree produced by `ThriftParser.set_type`.
	 * @param ctx the parse tree
	 */
	enterSet_type?: (ctx: Set_typeContext) => void;
	/**
	 * Exit a parse tree produced by `ThriftParser.set_type`.
	 * @param ctx the parse tree
	 */
	exitSet_type?: (ctx: Set_typeContext) => void;

	/**
	 * Enter a parse tree produced by `ThriftParser.list_type`.
	 * @param ctx the parse tree
	 */
	enterList_type?: (ctx: List_typeContext) => void;
	/**
	 * Exit a parse tree produced by `ThriftParser.list_type`.
	 * @param ctx the parse tree
	 */
	exitList_type?: (ctx: List_typeContext) => void;

	/**
	 * Enter a parse tree produced by `ThriftParser.cpp_type`.
	 * @param ctx the parse tree
	 */
	enterCpp_type?: (ctx: Cpp_typeContext) => void;
	/**
	 * Exit a parse tree produced by `ThriftParser.cpp_type`.
	 * @param ctx the parse tree
	 */
	exitCpp_type?: (ctx: Cpp_typeContext) => void;

	/**
	 * Enter a parse tree produced by `ThriftParser.const_value`.
	 * @param ctx the parse tree
	 */
	enterConst_value?: (ctx: Const_valueContext) => void;
	/**
	 * Exit a parse tree produced by `ThriftParser.const_value`.
	 * @param ctx the parse tree
	 */
	exitConst_value?: (ctx: Const_valueContext) => void;

	/**
	 * Enter a parse tree produced by `ThriftParser.integer`.
	 * @param ctx the parse tree
	 */
	enterInteger?: (ctx: IntegerContext) => void;
	/**
	 * Exit a parse tree produced by `ThriftParser.integer`.
	 * @param ctx the parse tree
	 */
	exitInteger?: (ctx: IntegerContext) => void;

	/**
	 * Enter a parse tree produced by `ThriftParser.const_list`.
	 * @param ctx the parse tree
	 */
	enterConst_list?: (ctx: Const_listContext) => void;
	/**
	 * Exit a parse tree produced by `ThriftParser.const_list`.
	 * @param ctx the parse tree
	 */
	exitConst_list?: (ctx: Const_listContext) => void;

	/**
	 * Enter a parse tree produced by `ThriftParser.const_map_entry`.
	 * @param ctx the parse tree
	 */
	enterConst_map_entry?: (ctx: Const_map_entryContext) => void;
	/**
	 * Exit a parse tree produced by `ThriftParser.const_map_entry`.
	 * @param ctx the parse tree
	 */
	exitConst_map_entry?: (ctx: Const_map_entryContext) => void;

	/**
	 * Enter a parse tree produced by `ThriftParser.const_map`.
	 * @param ctx the parse tree
	 */
	enterConst_map?: (ctx: Const_mapContext) => void;
	/**
	 * Exit a parse tree produced by `ThriftParser.const_map`.
	 * @param ctx the parse tree
	 */
	exitConst_map?: (ctx: Const_mapContext) => void;

	/**
	 * Enter a parse tree produced by `ThriftParser.list_separator`.
	 * @param ctx the parse tree
	 */
	enterList_separator?: (ctx: List_separatorContext) => void;
	/**
	 * Exit a parse tree produced by `ThriftParser.list_separator`.
	 * @param ctx the parse tree
	 */
	exitList_separator?: (ctx: List_separatorContext) => void;

	/**
	 * Enter a parse tree produced by `ThriftParser.real_base_type`.
	 * @param ctx the parse tree
	 */
	enterReal_base_type?: (ctx: Real_base_typeContext) => void;
	/**
	 * Exit a parse tree produced by `ThriftParser.real_base_type`.
	 * @param ctx the parse tree
	 */
	exitReal_base_type?: (ctx: Real_base_typeContext) => void;
}

