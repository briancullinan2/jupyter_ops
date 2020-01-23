// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/http/http.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { Http_messageContext } from "./httpParser";
import { Start_lineContext } from "./httpParser";
import { Request_lineContext } from "./httpParser";
import { MethodContext } from "./httpParser";
import { Request_targetContext } from "./httpParser";
import { Origin_formContext } from "./httpParser";
import { Absolute_pathContext } from "./httpParser";
import { SegmentContext } from "./httpParser";
import { QueryContext } from "./httpParser";
import { Http_versionContext } from "./httpParser";
import { Http_nameContext } from "./httpParser";
import { Header_fieldContext } from "./httpParser";
import { Field_nameContext } from "./httpParser";
import { TokenContext } from "./httpParser";
import { Field_valueContext } from "./httpParser";
import { Field_contentContext } from "./httpParser";
import { Field_vcharContext } from "./httpParser";
import { Obs_textContext } from "./httpParser";
import { Obs_foldContext } from "./httpParser";
import { PcharContext } from "./httpParser";
import { UnreservedContext } from "./httpParser";
import { Sub_delimsContext } from "./httpParser";
import { TcharContext } from "./httpParser";
import { VCHARContext } from "./httpParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `httpParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface httpVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `httpParser.http_message`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHttp_message?: (ctx: Http_messageContext) => Result;

	/**
	 * Visit a parse tree produced by `httpParser.start_line`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStart_line?: (ctx: Start_lineContext) => Result;

	/**
	 * Visit a parse tree produced by `httpParser.request_line`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRequest_line?: (ctx: Request_lineContext) => Result;

	/**
	 * Visit a parse tree produced by `httpParser.method`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMethod?: (ctx: MethodContext) => Result;

	/**
	 * Visit a parse tree produced by `httpParser.request_target`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRequest_target?: (ctx: Request_targetContext) => Result;

	/**
	 * Visit a parse tree produced by `httpParser.origin_form`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOrigin_form?: (ctx: Origin_formContext) => Result;

	/**
	 * Visit a parse tree produced by `httpParser.absolute_path`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAbsolute_path?: (ctx: Absolute_pathContext) => Result;

	/**
	 * Visit a parse tree produced by `httpParser.segment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSegment?: (ctx: SegmentContext) => Result;

	/**
	 * Visit a parse tree produced by `httpParser.query`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQuery?: (ctx: QueryContext) => Result;

	/**
	 * Visit a parse tree produced by `httpParser.http_version`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHttp_version?: (ctx: Http_versionContext) => Result;

	/**
	 * Visit a parse tree produced by `httpParser.http_name`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHttp_name?: (ctx: Http_nameContext) => Result;

	/**
	 * Visit a parse tree produced by `httpParser.header_field`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHeader_field?: (ctx: Header_fieldContext) => Result;

	/**
	 * Visit a parse tree produced by `httpParser.field_name`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitField_name?: (ctx: Field_nameContext) => Result;

	/**
	 * Visit a parse tree produced by `httpParser.token`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitToken?: (ctx: TokenContext) => Result;

	/**
	 * Visit a parse tree produced by `httpParser.field_value`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitField_value?: (ctx: Field_valueContext) => Result;

	/**
	 * Visit a parse tree produced by `httpParser.field_content`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitField_content?: (ctx: Field_contentContext) => Result;

	/**
	 * Visit a parse tree produced by `httpParser.field_vchar`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitField_vchar?: (ctx: Field_vcharContext) => Result;

	/**
	 * Visit a parse tree produced by `httpParser.obs_text`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitObs_text?: (ctx: Obs_textContext) => Result;

	/**
	 * Visit a parse tree produced by `httpParser.obs_fold`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitObs_fold?: (ctx: Obs_foldContext) => Result;

	/**
	 * Visit a parse tree produced by `httpParser.pchar`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPchar?: (ctx: PcharContext) => Result;

	/**
	 * Visit a parse tree produced by `httpParser.unreserved`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnreserved?: (ctx: UnreservedContext) => Result;

	/**
	 * Visit a parse tree produced by `httpParser.sub_delims`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSub_delims?: (ctx: Sub_delimsContext) => Result;

	/**
	 * Visit a parse tree produced by `httpParser.tchar`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTchar?: (ctx: TcharContext) => Result;

	/**
	 * Visit a parse tree produced by `httpParser.vCHAR`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVCHAR?: (ctx: VCHARContext) => Result;
}

