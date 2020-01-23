// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/flatbuffers/FlatBuffers.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

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
 * This interface defines a complete listener for a parse tree produced by
 * `FlatBuffersParser`.
 */
export interface FlatBuffersListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `FlatBuffersParser.schema`.
	 * @param ctx the parse tree
	 */
	enterSchema?: (ctx: SchemaContext) => void;
	/**
	 * Exit a parse tree produced by `FlatBuffersParser.schema`.
	 * @param ctx the parse tree
	 */
	exitSchema?: (ctx: SchemaContext) => void;

	/**
	 * Enter a parse tree produced by `FlatBuffersParser.include`.
	 * @param ctx the parse tree
	 */
	enterInclude?: (ctx: IncludeContext) => void;
	/**
	 * Exit a parse tree produced by `FlatBuffersParser.include`.
	 * @param ctx the parse tree
	 */
	exitInclude?: (ctx: IncludeContext) => void;

	/**
	 * Enter a parse tree produced by `FlatBuffersParser.namespace_decl`.
	 * @param ctx the parse tree
	 */
	enterNamespace_decl?: (ctx: Namespace_declContext) => void;
	/**
	 * Exit a parse tree produced by `FlatBuffersParser.namespace_decl`.
	 * @param ctx the parse tree
	 */
	exitNamespace_decl?: (ctx: Namespace_declContext) => void;

	/**
	 * Enter a parse tree produced by `FlatBuffersParser.attribute_decl`.
	 * @param ctx the parse tree
	 */
	enterAttribute_decl?: (ctx: Attribute_declContext) => void;
	/**
	 * Exit a parse tree produced by `FlatBuffersParser.attribute_decl`.
	 * @param ctx the parse tree
	 */
	exitAttribute_decl?: (ctx: Attribute_declContext) => void;

	/**
	 * Enter a parse tree produced by `FlatBuffersParser.type_decl`.
	 * @param ctx the parse tree
	 */
	enterType_decl?: (ctx: Type_declContext) => void;
	/**
	 * Exit a parse tree produced by `FlatBuffersParser.type_decl`.
	 * @param ctx the parse tree
	 */
	exitType_decl?: (ctx: Type_declContext) => void;

	/**
	 * Enter a parse tree produced by `FlatBuffersParser.enum_decl`.
	 * @param ctx the parse tree
	 */
	enterEnum_decl?: (ctx: Enum_declContext) => void;
	/**
	 * Exit a parse tree produced by `FlatBuffersParser.enum_decl`.
	 * @param ctx the parse tree
	 */
	exitEnum_decl?: (ctx: Enum_declContext) => void;

	/**
	 * Enter a parse tree produced by `FlatBuffersParser.root_decl`.
	 * @param ctx the parse tree
	 */
	enterRoot_decl?: (ctx: Root_declContext) => void;
	/**
	 * Exit a parse tree produced by `FlatBuffersParser.root_decl`.
	 * @param ctx the parse tree
	 */
	exitRoot_decl?: (ctx: Root_declContext) => void;

	/**
	 * Enter a parse tree produced by `FlatBuffersParser.field_decl`.
	 * @param ctx the parse tree
	 */
	enterField_decl?: (ctx: Field_declContext) => void;
	/**
	 * Exit a parse tree produced by `FlatBuffersParser.field_decl`.
	 * @param ctx the parse tree
	 */
	exitField_decl?: (ctx: Field_declContext) => void;

	/**
	 * Enter a parse tree produced by `FlatBuffersParser.rpc_decl`.
	 * @param ctx the parse tree
	 */
	enterRpc_decl?: (ctx: Rpc_declContext) => void;
	/**
	 * Exit a parse tree produced by `FlatBuffersParser.rpc_decl`.
	 * @param ctx the parse tree
	 */
	exitRpc_decl?: (ctx: Rpc_declContext) => void;

	/**
	 * Enter a parse tree produced by `FlatBuffersParser.rpc_method`.
	 * @param ctx the parse tree
	 */
	enterRpc_method?: (ctx: Rpc_methodContext) => void;
	/**
	 * Exit a parse tree produced by `FlatBuffersParser.rpc_method`.
	 * @param ctx the parse tree
	 */
	exitRpc_method?: (ctx: Rpc_methodContext) => void;

	/**
	 * Enter a parse tree produced by `FlatBuffersParser.type`.
	 * @param ctx the parse tree
	 */
	enterType?: (ctx: TypeContext) => void;
	/**
	 * Exit a parse tree produced by `FlatBuffersParser.type`.
	 * @param ctx the parse tree
	 */
	exitType?: (ctx: TypeContext) => void;

	/**
	 * Enter a parse tree produced by `FlatBuffersParser.enumval_decl`.
	 * @param ctx the parse tree
	 */
	enterEnumval_decl?: (ctx: Enumval_declContext) => void;
	/**
	 * Exit a parse tree produced by `FlatBuffersParser.enumval_decl`.
	 * @param ctx the parse tree
	 */
	exitEnumval_decl?: (ctx: Enumval_declContext) => void;

	/**
	 * Enter a parse tree produced by `FlatBuffersParser.commasep_enumval_decl`.
	 * @param ctx the parse tree
	 */
	enterCommasep_enumval_decl?: (ctx: Commasep_enumval_declContext) => void;
	/**
	 * Exit a parse tree produced by `FlatBuffersParser.commasep_enumval_decl`.
	 * @param ctx the parse tree
	 */
	exitCommasep_enumval_decl?: (ctx: Commasep_enumval_declContext) => void;

	/**
	 * Enter a parse tree produced by `FlatBuffersParser.ident_with_opt_single_value`.
	 * @param ctx the parse tree
	 */
	enterIdent_with_opt_single_value?: (ctx: Ident_with_opt_single_valueContext) => void;
	/**
	 * Exit a parse tree produced by `FlatBuffersParser.ident_with_opt_single_value`.
	 * @param ctx the parse tree
	 */
	exitIdent_with_opt_single_value?: (ctx: Ident_with_opt_single_valueContext) => void;

	/**
	 * Enter a parse tree produced by `FlatBuffersParser.commasep_ident_with_opt_single_value`.
	 * @param ctx the parse tree
	 */
	enterCommasep_ident_with_opt_single_value?: (ctx: Commasep_ident_with_opt_single_valueContext) => void;
	/**
	 * Exit a parse tree produced by `FlatBuffersParser.commasep_ident_with_opt_single_value`.
	 * @param ctx the parse tree
	 */
	exitCommasep_ident_with_opt_single_value?: (ctx: Commasep_ident_with_opt_single_valueContext) => void;

	/**
	 * Enter a parse tree produced by `FlatBuffersParser.metadata`.
	 * @param ctx the parse tree
	 */
	enterMetadata?: (ctx: MetadataContext) => void;
	/**
	 * Exit a parse tree produced by `FlatBuffersParser.metadata`.
	 * @param ctx the parse tree
	 */
	exitMetadata?: (ctx: MetadataContext) => void;

	/**
	 * Enter a parse tree produced by `FlatBuffersParser.scalar`.
	 * @param ctx the parse tree
	 */
	enterScalar?: (ctx: ScalarContext) => void;
	/**
	 * Exit a parse tree produced by `FlatBuffersParser.scalar`.
	 * @param ctx the parse tree
	 */
	exitScalar?: (ctx: ScalarContext) => void;

	/**
	 * Enter a parse tree produced by `FlatBuffersParser.object`.
	 * @param ctx the parse tree
	 */
	enterObject?: (ctx: ObjectContext) => void;
	/**
	 * Exit a parse tree produced by `FlatBuffersParser.object`.
	 * @param ctx the parse tree
	 */
	exitObject?: (ctx: ObjectContext) => void;

	/**
	 * Enter a parse tree produced by `FlatBuffersParser.ident_with_value`.
	 * @param ctx the parse tree
	 */
	enterIdent_with_value?: (ctx: Ident_with_valueContext) => void;
	/**
	 * Exit a parse tree produced by `FlatBuffersParser.ident_with_value`.
	 * @param ctx the parse tree
	 */
	exitIdent_with_value?: (ctx: Ident_with_valueContext) => void;

	/**
	 * Enter a parse tree produced by `FlatBuffersParser.commasep_ident_with_value`.
	 * @param ctx the parse tree
	 */
	enterCommasep_ident_with_value?: (ctx: Commasep_ident_with_valueContext) => void;
	/**
	 * Exit a parse tree produced by `FlatBuffersParser.commasep_ident_with_value`.
	 * @param ctx the parse tree
	 */
	exitCommasep_ident_with_value?: (ctx: Commasep_ident_with_valueContext) => void;

	/**
	 * Enter a parse tree produced by `FlatBuffersParser.single_value`.
	 * @param ctx the parse tree
	 */
	enterSingle_value?: (ctx: Single_valueContext) => void;
	/**
	 * Exit a parse tree produced by `FlatBuffersParser.single_value`.
	 * @param ctx the parse tree
	 */
	exitSingle_value?: (ctx: Single_valueContext) => void;

	/**
	 * Enter a parse tree produced by `FlatBuffersParser.value`.
	 * @param ctx the parse tree
	 */
	enterValue?: (ctx: ValueContext) => void;
	/**
	 * Exit a parse tree produced by `FlatBuffersParser.value`.
	 * @param ctx the parse tree
	 */
	exitValue?: (ctx: ValueContext) => void;

	/**
	 * Enter a parse tree produced by `FlatBuffersParser.commasep_value`.
	 * @param ctx the parse tree
	 */
	enterCommasep_value?: (ctx: Commasep_valueContext) => void;
	/**
	 * Exit a parse tree produced by `FlatBuffersParser.commasep_value`.
	 * @param ctx the parse tree
	 */
	exitCommasep_value?: (ctx: Commasep_valueContext) => void;

	/**
	 * Enter a parse tree produced by `FlatBuffersParser.file_extension_decl`.
	 * @param ctx the parse tree
	 */
	enterFile_extension_decl?: (ctx: File_extension_declContext) => void;
	/**
	 * Exit a parse tree produced by `FlatBuffersParser.file_extension_decl`.
	 * @param ctx the parse tree
	 */
	exitFile_extension_decl?: (ctx: File_extension_declContext) => void;

	/**
	 * Enter a parse tree produced by `FlatBuffersParser.file_identifier_decl`.
	 * @param ctx the parse tree
	 */
	enterFile_identifier_decl?: (ctx: File_identifier_declContext) => void;
	/**
	 * Exit a parse tree produced by `FlatBuffersParser.file_identifier_decl`.
	 * @param ctx the parse tree
	 */
	exitFile_identifier_decl?: (ctx: File_identifier_declContext) => void;

	/**
	 * Enter a parse tree produced by `FlatBuffersParser.ns_ident`.
	 * @param ctx the parse tree
	 */
	enterNs_ident?: (ctx: Ns_identContext) => void;
	/**
	 * Exit a parse tree produced by `FlatBuffersParser.ns_ident`.
	 * @param ctx the parse tree
	 */
	exitNs_ident?: (ctx: Ns_identContext) => void;

	/**
	 * Enter a parse tree produced by `FlatBuffersParser.integer_const`.
	 * @param ctx the parse tree
	 */
	enterInteger_const?: (ctx: Integer_constContext) => void;
	/**
	 * Exit a parse tree produced by `FlatBuffersParser.integer_const`.
	 * @param ctx the parse tree
	 */
	exitInteger_const?: (ctx: Integer_constContext) => void;
}

