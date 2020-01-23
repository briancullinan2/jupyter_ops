// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/thrift/Thrift.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `ThriftParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface ThriftVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `ThriftParser.document`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDocument?: (ctx: DocumentContext) => Result;

	/**
	 * Visit a parse tree produced by `ThriftParser.header`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHeader?: (ctx: HeaderContext) => Result;

	/**
	 * Visit a parse tree produced by `ThriftParser.include`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInclude?: (ctx: IncludeContext) => Result;

	/**
	 * Visit a parse tree produced by `ThriftParser.namespace`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNamespace?: (ctx: NamespaceContext) => Result;

	/**
	 * Visit a parse tree produced by `ThriftParser.cpp_include`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCpp_include?: (ctx: Cpp_includeContext) => Result;

	/**
	 * Visit a parse tree produced by `ThriftParser.definition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDefinition?: (ctx: DefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `ThriftParser.const_rule`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConst_rule?: (ctx: Const_ruleContext) => Result;

	/**
	 * Visit a parse tree produced by `ThriftParser.typedef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypedef?: (ctx: TypedefContext) => Result;

	/**
	 * Visit a parse tree produced by `ThriftParser.enum_rule`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnum_rule?: (ctx: Enum_ruleContext) => Result;

	/**
	 * Visit a parse tree produced by `ThriftParser.enum_field`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnum_field?: (ctx: Enum_fieldContext) => Result;

	/**
	 * Visit a parse tree produced by `ThriftParser.senum`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSenum?: (ctx: SenumContext) => Result;

	/**
	 * Visit a parse tree produced by `ThriftParser.struct`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStruct?: (ctx: StructContext) => Result;

	/**
	 * Visit a parse tree produced by `ThriftParser.union`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnion?: (ctx: UnionContext) => Result;

	/**
	 * Visit a parse tree produced by `ThriftParser.exception`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitException?: (ctx: ExceptionContext) => Result;

	/**
	 * Visit a parse tree produced by `ThriftParser.service`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitService?: (ctx: ServiceContext) => Result;

	/**
	 * Visit a parse tree produced by `ThriftParser.field`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitField?: (ctx: FieldContext) => Result;

	/**
	 * Visit a parse tree produced by `ThriftParser.field_id`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitField_id?: (ctx: Field_idContext) => Result;

	/**
	 * Visit a parse tree produced by `ThriftParser.field_req`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitField_req?: (ctx: Field_reqContext) => Result;

	/**
	 * Visit a parse tree produced by `ThriftParser.function`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunction?: (ctx: FunctionContext) => Result;

	/**
	 * Visit a parse tree produced by `ThriftParser.oneway`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOneway?: (ctx: OnewayContext) => Result;

	/**
	 * Visit a parse tree produced by `ThriftParser.function_type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunction_type?: (ctx: Function_typeContext) => Result;

	/**
	 * Visit a parse tree produced by `ThriftParser.throws_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitThrows_list?: (ctx: Throws_listContext) => Result;

	/**
	 * Visit a parse tree produced by `ThriftParser.type_annotations`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitType_annotations?: (ctx: Type_annotationsContext) => Result;

	/**
	 * Visit a parse tree produced by `ThriftParser.type_annotation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitType_annotation?: (ctx: Type_annotationContext) => Result;

	/**
	 * Visit a parse tree produced by `ThriftParser.annotation_value`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnnotation_value?: (ctx: Annotation_valueContext) => Result;

	/**
	 * Visit a parse tree produced by `ThriftParser.field_type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitField_type?: (ctx: Field_typeContext) => Result;

	/**
	 * Visit a parse tree produced by `ThriftParser.base_type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBase_type?: (ctx: Base_typeContext) => Result;

	/**
	 * Visit a parse tree produced by `ThriftParser.container_type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitContainer_type?: (ctx: Container_typeContext) => Result;

	/**
	 * Visit a parse tree produced by `ThriftParser.map_type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMap_type?: (ctx: Map_typeContext) => Result;

	/**
	 * Visit a parse tree produced by `ThriftParser.set_type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSet_type?: (ctx: Set_typeContext) => Result;

	/**
	 * Visit a parse tree produced by `ThriftParser.list_type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitList_type?: (ctx: List_typeContext) => Result;

	/**
	 * Visit a parse tree produced by `ThriftParser.cpp_type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCpp_type?: (ctx: Cpp_typeContext) => Result;

	/**
	 * Visit a parse tree produced by `ThriftParser.const_value`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConst_value?: (ctx: Const_valueContext) => Result;

	/**
	 * Visit a parse tree produced by `ThriftParser.integer`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInteger?: (ctx: IntegerContext) => Result;

	/**
	 * Visit a parse tree produced by `ThriftParser.const_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConst_list?: (ctx: Const_listContext) => Result;

	/**
	 * Visit a parse tree produced by `ThriftParser.const_map_entry`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConst_map_entry?: (ctx: Const_map_entryContext) => Result;

	/**
	 * Visit a parse tree produced by `ThriftParser.const_map`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConst_map?: (ctx: Const_mapContext) => Result;

	/**
	 * Visit a parse tree produced by `ThriftParser.list_separator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitList_separator?: (ctx: List_separatorContext) => Result;

	/**
	 * Visit a parse tree produced by `ThriftParser.real_base_type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReal_base_type?: (ctx: Real_base_typeContext) => Result;
}

