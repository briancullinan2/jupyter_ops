// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/capnproto/CapnProto.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

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
 * This interface defines a complete listener for a parse tree produced by
 * `CapnProtoParser`.
 */
export interface CapnProtoListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `CapnProtoParser.document`.
	 * @param ctx the parse tree
	 */
	enterDocument?: (ctx: DocumentContext) => void;
	/**
	 * Exit a parse tree produced by `CapnProtoParser.document`.
	 * @param ctx the parse tree
	 */
	exitDocument?: (ctx: DocumentContext) => void;

	/**
	 * Enter a parse tree produced by `CapnProtoParser.file_identifier`.
	 * @param ctx the parse tree
	 */
	enterFile_identifier?: (ctx: File_identifierContext) => void;
	/**
	 * Exit a parse tree produced by `CapnProtoParser.file_identifier`.
	 * @param ctx the parse tree
	 */
	exitFile_identifier?: (ctx: File_identifierContext) => void;

	/**
	 * Enter a parse tree produced by `CapnProtoParser.using_import`.
	 * @param ctx the parse tree
	 */
	enterUsing_import?: (ctx: Using_importContext) => void;
	/**
	 * Exit a parse tree produced by `CapnProtoParser.using_import`.
	 * @param ctx the parse tree
	 */
	exitUsing_import?: (ctx: Using_importContext) => void;

	/**
	 * Enter a parse tree produced by `CapnProtoParser.namespace`.
	 * @param ctx the parse tree
	 */
	enterNamespace?: (ctx: NamespaceContext) => void;
	/**
	 * Exit a parse tree produced by `CapnProtoParser.namespace`.
	 * @param ctx the parse tree
	 */
	exitNamespace?: (ctx: NamespaceContext) => void;

	/**
	 * Enter a parse tree produced by `CapnProtoParser.document_content`.
	 * @param ctx the parse tree
	 */
	enterDocument_content?: (ctx: Document_contentContext) => void;
	/**
	 * Exit a parse tree produced by `CapnProtoParser.document_content`.
	 * @param ctx the parse tree
	 */
	exitDocument_content?: (ctx: Document_contentContext) => void;

	/**
	 * Enter a parse tree produced by `CapnProtoParser.struct_def`.
	 * @param ctx the parse tree
	 */
	enterStruct_def?: (ctx: Struct_defContext) => void;
	/**
	 * Exit a parse tree produced by `CapnProtoParser.struct_def`.
	 * @param ctx the parse tree
	 */
	exitStruct_def?: (ctx: Struct_defContext) => void;

	/**
	 * Enter a parse tree produced by `CapnProtoParser.struct_content`.
	 * @param ctx the parse tree
	 */
	enterStruct_content?: (ctx: Struct_contentContext) => void;
	/**
	 * Exit a parse tree produced by `CapnProtoParser.struct_content`.
	 * @param ctx the parse tree
	 */
	exitStruct_content?: (ctx: Struct_contentContext) => void;

	/**
	 * Enter a parse tree produced by `CapnProtoParser.interface_def`.
	 * @param ctx the parse tree
	 */
	enterInterface_def?: (ctx: Interface_defContext) => void;
	/**
	 * Exit a parse tree produced by `CapnProtoParser.interface_def`.
	 * @param ctx the parse tree
	 */
	exitInterface_def?: (ctx: Interface_defContext) => void;

	/**
	 * Enter a parse tree produced by `CapnProtoParser.interface_content`.
	 * @param ctx the parse tree
	 */
	enterInterface_content?: (ctx: Interface_contentContext) => void;
	/**
	 * Exit a parse tree produced by `CapnProtoParser.interface_content`.
	 * @param ctx the parse tree
	 */
	exitInterface_content?: (ctx: Interface_contentContext) => void;

	/**
	 * Enter a parse tree produced by `CapnProtoParser.field_def`.
	 * @param ctx the parse tree
	 */
	enterField_def?: (ctx: Field_defContext) => void;
	/**
	 * Exit a parse tree produced by `CapnProtoParser.field_def`.
	 * @param ctx the parse tree
	 */
	exitField_def?: (ctx: Field_defContext) => void;

	/**
	 * Enter a parse tree produced by `CapnProtoParser.type`.
	 * @param ctx the parse tree
	 */
	enterType?: (ctx: TypeContext) => void;
	/**
	 * Exit a parse tree produced by `CapnProtoParser.type`.
	 * @param ctx the parse tree
	 */
	exitType?: (ctx: TypeContext) => void;

	/**
	 * Enter a parse tree produced by `CapnProtoParser.inner_type`.
	 * @param ctx the parse tree
	 */
	enterInner_type?: (ctx: Inner_typeContext) => void;
	/**
	 * Exit a parse tree produced by `CapnProtoParser.inner_type`.
	 * @param ctx the parse tree
	 */
	exitInner_type?: (ctx: Inner_typeContext) => void;

	/**
	 * Enter a parse tree produced by `CapnProtoParser.enum_def`.
	 * @param ctx the parse tree
	 */
	enterEnum_def?: (ctx: Enum_defContext) => void;
	/**
	 * Exit a parse tree produced by `CapnProtoParser.enum_def`.
	 * @param ctx the parse tree
	 */
	exitEnum_def?: (ctx: Enum_defContext) => void;

	/**
	 * Enter a parse tree produced by `CapnProtoParser.annotation_reference`.
	 * @param ctx the parse tree
	 */
	enterAnnotation_reference?: (ctx: Annotation_referenceContext) => void;
	/**
	 * Exit a parse tree produced by `CapnProtoParser.annotation_reference`.
	 * @param ctx the parse tree
	 */
	exitAnnotation_reference?: (ctx: Annotation_referenceContext) => void;

	/**
	 * Enter a parse tree produced by `CapnProtoParser.enum_content`.
	 * @param ctx the parse tree
	 */
	enterEnum_content?: (ctx: Enum_contentContext) => void;
	/**
	 * Exit a parse tree produced by `CapnProtoParser.enum_content`.
	 * @param ctx the parse tree
	 */
	exitEnum_content?: (ctx: Enum_contentContext) => void;

	/**
	 * Enter a parse tree produced by `CapnProtoParser.named_union_def`.
	 * @param ctx the parse tree
	 */
	enterNamed_union_def?: (ctx: Named_union_defContext) => void;
	/**
	 * Exit a parse tree produced by `CapnProtoParser.named_union_def`.
	 * @param ctx the parse tree
	 */
	exitNamed_union_def?: (ctx: Named_union_defContext) => void;

	/**
	 * Enter a parse tree produced by `CapnProtoParser.unnamed_union_def`.
	 * @param ctx the parse tree
	 */
	enterUnnamed_union_def?: (ctx: Unnamed_union_defContext) => void;
	/**
	 * Exit a parse tree produced by `CapnProtoParser.unnamed_union_def`.
	 * @param ctx the parse tree
	 */
	exitUnnamed_union_def?: (ctx: Unnamed_union_defContext) => void;

	/**
	 * Enter a parse tree produced by `CapnProtoParser.union_content`.
	 * @param ctx the parse tree
	 */
	enterUnion_content?: (ctx: Union_contentContext) => void;
	/**
	 * Exit a parse tree produced by `CapnProtoParser.union_content`.
	 * @param ctx the parse tree
	 */
	exitUnion_content?: (ctx: Union_contentContext) => void;

	/**
	 * Enter a parse tree produced by `CapnProtoParser.group_def`.
	 * @param ctx the parse tree
	 */
	enterGroup_def?: (ctx: Group_defContext) => void;
	/**
	 * Exit a parse tree produced by `CapnProtoParser.group_def`.
	 * @param ctx the parse tree
	 */
	exitGroup_def?: (ctx: Group_defContext) => void;

	/**
	 * Enter a parse tree produced by `CapnProtoParser.group_content`.
	 * @param ctx the parse tree
	 */
	enterGroup_content?: (ctx: Group_contentContext) => void;
	/**
	 * Exit a parse tree produced by `CapnProtoParser.group_content`.
	 * @param ctx the parse tree
	 */
	exitGroup_content?: (ctx: Group_contentContext) => void;

	/**
	 * Enter a parse tree produced by `CapnProtoParser.function_def`.
	 * @param ctx the parse tree
	 */
	enterFunction_def?: (ctx: Function_defContext) => void;
	/**
	 * Exit a parse tree produced by `CapnProtoParser.function_def`.
	 * @param ctx the parse tree
	 */
	exitFunction_def?: (ctx: Function_defContext) => void;

	/**
	 * Enter a parse tree produced by `CapnProtoParser.generic_type_parameters`.
	 * @param ctx the parse tree
	 */
	enterGeneric_type_parameters?: (ctx: Generic_type_parametersContext) => void;
	/**
	 * Exit a parse tree produced by `CapnProtoParser.generic_type_parameters`.
	 * @param ctx the parse tree
	 */
	exitGeneric_type_parameters?: (ctx: Generic_type_parametersContext) => void;

	/**
	 * Enter a parse tree produced by `CapnProtoParser.function_parameters`.
	 * @param ctx the parse tree
	 */
	enterFunction_parameters?: (ctx: Function_parametersContext) => void;
	/**
	 * Exit a parse tree produced by `CapnProtoParser.function_parameters`.
	 * @param ctx the parse tree
	 */
	exitFunction_parameters?: (ctx: Function_parametersContext) => void;

	/**
	 * Enter a parse tree produced by `CapnProtoParser.annotation_def`.
	 * @param ctx the parse tree
	 */
	enterAnnotation_def?: (ctx: Annotation_defContext) => void;
	/**
	 * Exit a parse tree produced by `CapnProtoParser.annotation_def`.
	 * @param ctx the parse tree
	 */
	exitAnnotation_def?: (ctx: Annotation_defContext) => void;

	/**
	 * Enter a parse tree produced by `CapnProtoParser.annotation_parameters`.
	 * @param ctx the parse tree
	 */
	enterAnnotation_parameters?: (ctx: Annotation_parametersContext) => void;
	/**
	 * Exit a parse tree produced by `CapnProtoParser.annotation_parameters`.
	 * @param ctx the parse tree
	 */
	exitAnnotation_parameters?: (ctx: Annotation_parametersContext) => void;

	/**
	 * Enter a parse tree produced by `CapnProtoParser.const_def`.
	 * @param ctx the parse tree
	 */
	enterConst_def?: (ctx: Const_defContext) => void;
	/**
	 * Exit a parse tree produced by `CapnProtoParser.const_def`.
	 * @param ctx the parse tree
	 */
	exitConst_def?: (ctx: Const_defContext) => void;

	/**
	 * Enter a parse tree produced by `CapnProtoParser.const_value`.
	 * @param ctx the parse tree
	 */
	enterConst_value?: (ctx: Const_valueContext) => void;
	/**
	 * Exit a parse tree produced by `CapnProtoParser.const_value`.
	 * @param ctx the parse tree
	 */
	exitConst_value?: (ctx: Const_valueContext) => void;

	/**
	 * Enter a parse tree produced by `CapnProtoParser.literal_union`.
	 * @param ctx the parse tree
	 */
	enterLiteral_union?: (ctx: Literal_unionContext) => void;
	/**
	 * Exit a parse tree produced by `CapnProtoParser.literal_union`.
	 * @param ctx the parse tree
	 */
	exitLiteral_union?: (ctx: Literal_unionContext) => void;

	/**
	 * Enter a parse tree produced by `CapnProtoParser.literal_list`.
	 * @param ctx the parse tree
	 */
	enterLiteral_list?: (ctx: Literal_listContext) => void;
	/**
	 * Exit a parse tree produced by `CapnProtoParser.literal_list`.
	 * @param ctx the parse tree
	 */
	exitLiteral_list?: (ctx: Literal_listContext) => void;

	/**
	 * Enter a parse tree produced by `CapnProtoParser.literal_bytes`.
	 * @param ctx the parse tree
	 */
	enterLiteral_bytes?: (ctx: Literal_bytesContext) => void;
	/**
	 * Exit a parse tree produced by `CapnProtoParser.literal_bytes`.
	 * @param ctx the parse tree
	 */
	exitLiteral_bytes?: (ctx: Literal_bytesContext) => void;

	/**
	 * Enter a parse tree produced by `CapnProtoParser.union_mapping`.
	 * @param ctx the parse tree
	 */
	enterUnion_mapping?: (ctx: Union_mappingContext) => void;
	/**
	 * Exit a parse tree produced by `CapnProtoParser.union_mapping`.
	 * @param ctx the parse tree
	 */
	exitUnion_mapping?: (ctx: Union_mappingContext) => void;

	/**
	 * Enter a parse tree produced by `CapnProtoParser.inner_using`.
	 * @param ctx the parse tree
	 */
	enterInner_using?: (ctx: Inner_usingContext) => void;
	/**
	 * Exit a parse tree produced by `CapnProtoParser.inner_using`.
	 * @param ctx the parse tree
	 */
	exitInner_using?: (ctx: Inner_usingContext) => void;
}

