// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/capnproto/CapnProto.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { DocumentContext } from "./CapnProtoParser";
import { File_identifierContext } from "./CapnProtoParser";
import { Using_importContext } from "./CapnProtoParser";
import { NamespaceContext } from "./CapnProtoParser";
import { Document_contentContext } from "./CapnProtoParser";
import { Struct_defContext } from "./CapnProtoParser";
import { Struct_contentContext } from "./CapnProtoParser";
import { Interface_defContext } from "./CapnProtoParser";
import { Interface_contentContext } from "./CapnProtoParser";
import { Field_defContext } from "./CapnProtoParser";
import { TypeContext } from "./CapnProtoParser";
import { Inner_typeContext } from "./CapnProtoParser";
import { Enum_defContext } from "./CapnProtoParser";
import { Annotation_referenceContext } from "./CapnProtoParser";
import { Enum_contentContext } from "./CapnProtoParser";
import { Named_union_defContext } from "./CapnProtoParser";
import { Unnamed_union_defContext } from "./CapnProtoParser";
import { Union_contentContext } from "./CapnProtoParser";
import { Group_defContext } from "./CapnProtoParser";
import { Group_contentContext } from "./CapnProtoParser";
import { Function_defContext } from "./CapnProtoParser";
import { Generic_type_parametersContext } from "./CapnProtoParser";
import { Function_parametersContext } from "./CapnProtoParser";
import { Annotation_defContext } from "./CapnProtoParser";
import { Annotation_parametersContext } from "./CapnProtoParser";
import { Const_defContext } from "./CapnProtoParser";
import { Const_valueContext } from "./CapnProtoParser";
import { Literal_unionContext } from "./CapnProtoParser";
import { Literal_listContext } from "./CapnProtoParser";
import { Literal_bytesContext } from "./CapnProtoParser";
import { Union_mappingContext } from "./CapnProtoParser";
import { Inner_usingContext } from "./CapnProtoParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `CapnProtoParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface CapnProtoVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `CapnProtoParser.document`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDocument?: (ctx: DocumentContext) => Result;

	/**
	 * Visit a parse tree produced by `CapnProtoParser.file_identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFile_identifier?: (ctx: File_identifierContext) => Result;

	/**
	 * Visit a parse tree produced by `CapnProtoParser.using_import`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUsing_import?: (ctx: Using_importContext) => Result;

	/**
	 * Visit a parse tree produced by `CapnProtoParser.namespace`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNamespace?: (ctx: NamespaceContext) => Result;

	/**
	 * Visit a parse tree produced by `CapnProtoParser.document_content`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDocument_content?: (ctx: Document_contentContext) => Result;

	/**
	 * Visit a parse tree produced by `CapnProtoParser.struct_def`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStruct_def?: (ctx: Struct_defContext) => Result;

	/**
	 * Visit a parse tree produced by `CapnProtoParser.struct_content`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStruct_content?: (ctx: Struct_contentContext) => Result;

	/**
	 * Visit a parse tree produced by `CapnProtoParser.interface_def`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInterface_def?: (ctx: Interface_defContext) => Result;

	/**
	 * Visit a parse tree produced by `CapnProtoParser.interface_content`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInterface_content?: (ctx: Interface_contentContext) => Result;

	/**
	 * Visit a parse tree produced by `CapnProtoParser.field_def`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitField_def?: (ctx: Field_defContext) => Result;

	/**
	 * Visit a parse tree produced by `CapnProtoParser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitType?: (ctx: TypeContext) => Result;

	/**
	 * Visit a parse tree produced by `CapnProtoParser.inner_type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInner_type?: (ctx: Inner_typeContext) => Result;

	/**
	 * Visit a parse tree produced by `CapnProtoParser.enum_def`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnum_def?: (ctx: Enum_defContext) => Result;

	/**
	 * Visit a parse tree produced by `CapnProtoParser.annotation_reference`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnnotation_reference?: (ctx: Annotation_referenceContext) => Result;

	/**
	 * Visit a parse tree produced by `CapnProtoParser.enum_content`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnum_content?: (ctx: Enum_contentContext) => Result;

	/**
	 * Visit a parse tree produced by `CapnProtoParser.named_union_def`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNamed_union_def?: (ctx: Named_union_defContext) => Result;

	/**
	 * Visit a parse tree produced by `CapnProtoParser.unnamed_union_def`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnnamed_union_def?: (ctx: Unnamed_union_defContext) => Result;

	/**
	 * Visit a parse tree produced by `CapnProtoParser.union_content`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnion_content?: (ctx: Union_contentContext) => Result;

	/**
	 * Visit a parse tree produced by `CapnProtoParser.group_def`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGroup_def?: (ctx: Group_defContext) => Result;

	/**
	 * Visit a parse tree produced by `CapnProtoParser.group_content`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGroup_content?: (ctx: Group_contentContext) => Result;

	/**
	 * Visit a parse tree produced by `CapnProtoParser.function_def`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunction_def?: (ctx: Function_defContext) => Result;

	/**
	 * Visit a parse tree produced by `CapnProtoParser.generic_type_parameters`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGeneric_type_parameters?: (ctx: Generic_type_parametersContext) => Result;

	/**
	 * Visit a parse tree produced by `CapnProtoParser.function_parameters`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunction_parameters?: (ctx: Function_parametersContext) => Result;

	/**
	 * Visit a parse tree produced by `CapnProtoParser.annotation_def`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnnotation_def?: (ctx: Annotation_defContext) => Result;

	/**
	 * Visit a parse tree produced by `CapnProtoParser.annotation_parameters`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnnotation_parameters?: (ctx: Annotation_parametersContext) => Result;

	/**
	 * Visit a parse tree produced by `CapnProtoParser.const_def`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConst_def?: (ctx: Const_defContext) => Result;

	/**
	 * Visit a parse tree produced by `CapnProtoParser.const_value`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConst_value?: (ctx: Const_valueContext) => Result;

	/**
	 * Visit a parse tree produced by `CapnProtoParser.literal_union`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiteral_union?: (ctx: Literal_unionContext) => Result;

	/**
	 * Visit a parse tree produced by `CapnProtoParser.literal_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiteral_list?: (ctx: Literal_listContext) => Result;

	/**
	 * Visit a parse tree produced by `CapnProtoParser.literal_bytes`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiteral_bytes?: (ctx: Literal_bytesContext) => Result;

	/**
	 * Visit a parse tree produced by `CapnProtoParser.union_mapping`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnion_mapping?: (ctx: Union_mappingContext) => Result;

	/**
	 * Visit a parse tree produced by `CapnProtoParser.inner_using`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInner_using?: (ctx: Inner_usingContext) => Result;
}

