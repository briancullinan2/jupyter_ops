// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/flatbuffers/FlatBuffers.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { SchemaContext } from "./FlatBuffersParser";
import { IncludeContext } from "./FlatBuffersParser";
import { Namespace_declContext } from "./FlatBuffersParser";
import { Attribute_declContext } from "./FlatBuffersParser";
import { Type_declContext } from "./FlatBuffersParser";
import { Enum_declContext } from "./FlatBuffersParser";
import { Root_declContext } from "./FlatBuffersParser";
import { Field_declContext } from "./FlatBuffersParser";
import { Rpc_declContext } from "./FlatBuffersParser";
import { Rpc_methodContext } from "./FlatBuffersParser";
import { TypeContext } from "./FlatBuffersParser";
import { Enumval_declContext } from "./FlatBuffersParser";
import { Commasep_enumval_declContext } from "./FlatBuffersParser";
import { Ident_with_opt_single_valueContext } from "./FlatBuffersParser";
import { Commasep_ident_with_opt_single_valueContext } from "./FlatBuffersParser";
import { MetadataContext } from "./FlatBuffersParser";
import { ScalarContext } from "./FlatBuffersParser";
import { ObjectContext } from "./FlatBuffersParser";
import { Ident_with_valueContext } from "./FlatBuffersParser";
import { Commasep_ident_with_valueContext } from "./FlatBuffersParser";
import { Single_valueContext } from "./FlatBuffersParser";
import { ValueContext } from "./FlatBuffersParser";
import { Commasep_valueContext } from "./FlatBuffersParser";
import { File_extension_declContext } from "./FlatBuffersParser";
import { File_identifier_declContext } from "./FlatBuffersParser";
import { Ns_identContext } from "./FlatBuffersParser";
import { Integer_constContext } from "./FlatBuffersParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `FlatBuffersParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface FlatBuffersVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `FlatBuffersParser.schema`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSchema?: (ctx: SchemaContext) => Result;

	/**
	 * Visit a parse tree produced by `FlatBuffersParser.include`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInclude?: (ctx: IncludeContext) => Result;

	/**
	 * Visit a parse tree produced by `FlatBuffersParser.namespace_decl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNamespace_decl?: (ctx: Namespace_declContext) => Result;

	/**
	 * Visit a parse tree produced by `FlatBuffersParser.attribute_decl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAttribute_decl?: (ctx: Attribute_declContext) => Result;

	/**
	 * Visit a parse tree produced by `FlatBuffersParser.type_decl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitType_decl?: (ctx: Type_declContext) => Result;

	/**
	 * Visit a parse tree produced by `FlatBuffersParser.enum_decl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnum_decl?: (ctx: Enum_declContext) => Result;

	/**
	 * Visit a parse tree produced by `FlatBuffersParser.root_decl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRoot_decl?: (ctx: Root_declContext) => Result;

	/**
	 * Visit a parse tree produced by `FlatBuffersParser.field_decl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitField_decl?: (ctx: Field_declContext) => Result;

	/**
	 * Visit a parse tree produced by `FlatBuffersParser.rpc_decl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRpc_decl?: (ctx: Rpc_declContext) => Result;

	/**
	 * Visit a parse tree produced by `FlatBuffersParser.rpc_method`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRpc_method?: (ctx: Rpc_methodContext) => Result;

	/**
	 * Visit a parse tree produced by `FlatBuffersParser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitType?: (ctx: TypeContext) => Result;

	/**
	 * Visit a parse tree produced by `FlatBuffersParser.enumval_decl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumval_decl?: (ctx: Enumval_declContext) => Result;

	/**
	 * Visit a parse tree produced by `FlatBuffersParser.commasep_enumval_decl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCommasep_enumval_decl?: (ctx: Commasep_enumval_declContext) => Result;

	/**
	 * Visit a parse tree produced by `FlatBuffersParser.ident_with_opt_single_value`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdent_with_opt_single_value?: (ctx: Ident_with_opt_single_valueContext) => Result;

	/**
	 * Visit a parse tree produced by `FlatBuffersParser.commasep_ident_with_opt_single_value`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCommasep_ident_with_opt_single_value?: (ctx: Commasep_ident_with_opt_single_valueContext) => Result;

	/**
	 * Visit a parse tree produced by `FlatBuffersParser.metadata`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMetadata?: (ctx: MetadataContext) => Result;

	/**
	 * Visit a parse tree produced by `FlatBuffersParser.scalar`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitScalar?: (ctx: ScalarContext) => Result;

	/**
	 * Visit a parse tree produced by `FlatBuffersParser.object`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitObject?: (ctx: ObjectContext) => Result;

	/**
	 * Visit a parse tree produced by `FlatBuffersParser.ident_with_value`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdent_with_value?: (ctx: Ident_with_valueContext) => Result;

	/**
	 * Visit a parse tree produced by `FlatBuffersParser.commasep_ident_with_value`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCommasep_ident_with_value?: (ctx: Commasep_ident_with_valueContext) => Result;

	/**
	 * Visit a parse tree produced by `FlatBuffersParser.single_value`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSingle_value?: (ctx: Single_valueContext) => Result;

	/**
	 * Visit a parse tree produced by `FlatBuffersParser.value`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValue?: (ctx: ValueContext) => Result;

	/**
	 * Visit a parse tree produced by `FlatBuffersParser.commasep_value`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCommasep_value?: (ctx: Commasep_valueContext) => Result;

	/**
	 * Visit a parse tree produced by `FlatBuffersParser.file_extension_decl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFile_extension_decl?: (ctx: File_extension_declContext) => Result;

	/**
	 * Visit a parse tree produced by `FlatBuffersParser.file_identifier_decl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFile_identifier_decl?: (ctx: File_identifier_declContext) => Result;

	/**
	 * Visit a parse tree produced by `FlatBuffersParser.ns_ident`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNs_ident?: (ctx: Ns_identContext) => Result;

	/**
	 * Visit a parse tree produced by `FlatBuffersParser.integer_const`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInteger_const?: (ctx: Integer_constContext) => Result;
}

