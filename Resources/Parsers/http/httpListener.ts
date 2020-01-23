// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/http/http.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

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
 * This interface defines a complete listener for a parse tree produced by
 * `httpParser`.
 */
export interface httpListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `httpParser.http_message`.
	 * @param ctx the parse tree
	 */
	enterHttp_message?: (ctx: Http_messageContext) => void;
	/**
	 * Exit a parse tree produced by `httpParser.http_message`.
	 * @param ctx the parse tree
	 */
	exitHttp_message?: (ctx: Http_messageContext) => void;

	/**
	 * Enter a parse tree produced by `httpParser.start_line`.
	 * @param ctx the parse tree
	 */
	enterStart_line?: (ctx: Start_lineContext) => void;
	/**
	 * Exit a parse tree produced by `httpParser.start_line`.
	 * @param ctx the parse tree
	 */
	exitStart_line?: (ctx: Start_lineContext) => void;

	/**
	 * Enter a parse tree produced by `httpParser.request_line`.
	 * @param ctx the parse tree
	 */
	enterRequest_line?: (ctx: Request_lineContext) => void;
	/**
	 * Exit a parse tree produced by `httpParser.request_line`.
	 * @param ctx the parse tree
	 */
	exitRequest_line?: (ctx: Request_lineContext) => void;

	/**
	 * Enter a parse tree produced by `httpParser.method`.
	 * @param ctx the parse tree
	 */
	enterMethod?: (ctx: MethodContext) => void;
	/**
	 * Exit a parse tree produced by `httpParser.method`.
	 * @param ctx the parse tree
	 */
	exitMethod?: (ctx: MethodContext) => void;

	/**
	 * Enter a parse tree produced by `httpParser.request_target`.
	 * @param ctx the parse tree
	 */
	enterRequest_target?: (ctx: Request_targetContext) => void;
	/**
	 * Exit a parse tree produced by `httpParser.request_target`.
	 * @param ctx the parse tree
	 */
	exitRequest_target?: (ctx: Request_targetContext) => void;

	/**
	 * Enter a parse tree produced by `httpParser.origin_form`.
	 * @param ctx the parse tree
	 */
	enterOrigin_form?: (ctx: Origin_formContext) => void;
	/**
	 * Exit a parse tree produced by `httpParser.origin_form`.
	 * @param ctx the parse tree
	 */
	exitOrigin_form?: (ctx: Origin_formContext) => void;

	/**
	 * Enter a parse tree produced by `httpParser.absolute_path`.
	 * @param ctx the parse tree
	 */
	enterAbsolute_path?: (ctx: Absolute_pathContext) => void;
	/**
	 * Exit a parse tree produced by `httpParser.absolute_path`.
	 * @param ctx the parse tree
	 */
	exitAbsolute_path?: (ctx: Absolute_pathContext) => void;

	/**
	 * Enter a parse tree produced by `httpParser.segment`.
	 * @param ctx the parse tree
	 */
	enterSegment?: (ctx: SegmentContext) => void;
	/**
	 * Exit a parse tree produced by `httpParser.segment`.
	 * @param ctx the parse tree
	 */
	exitSegment?: (ctx: SegmentContext) => void;

	/**
	 * Enter a parse tree produced by `httpParser.query`.
	 * @param ctx the parse tree
	 */
	enterQuery?: (ctx: QueryContext) => void;
	/**
	 * Exit a parse tree produced by `httpParser.query`.
	 * @param ctx the parse tree
	 */
	exitQuery?: (ctx: QueryContext) => void;

	/**
	 * Enter a parse tree produced by `httpParser.http_version`.
	 * @param ctx the parse tree
	 */
	enterHttp_version?: (ctx: Http_versionContext) => void;
	/**
	 * Exit a parse tree produced by `httpParser.http_version`.
	 * @param ctx the parse tree
	 */
	exitHttp_version?: (ctx: Http_versionContext) => void;

	/**
	 * Enter a parse tree produced by `httpParser.http_name`.
	 * @param ctx the parse tree
	 */
	enterHttp_name?: (ctx: Http_nameContext) => void;
	/**
	 * Exit a parse tree produced by `httpParser.http_name`.
	 * @param ctx the parse tree
	 */
	exitHttp_name?: (ctx: Http_nameContext) => void;

	/**
	 * Enter a parse tree produced by `httpParser.header_field`.
	 * @param ctx the parse tree
	 */
	enterHeader_field?: (ctx: Header_fieldContext) => void;
	/**
	 * Exit a parse tree produced by `httpParser.header_field`.
	 * @param ctx the parse tree
	 */
	exitHeader_field?: (ctx: Header_fieldContext) => void;

	/**
	 * Enter a parse tree produced by `httpParser.field_name`.
	 * @param ctx the parse tree
	 */
	enterField_name?: (ctx: Field_nameContext) => void;
	/**
	 * Exit a parse tree produced by `httpParser.field_name`.
	 * @param ctx the parse tree
	 */
	exitField_name?: (ctx: Field_nameContext) => void;

	/**
	 * Enter a parse tree produced by `httpParser.token`.
	 * @param ctx the parse tree
	 */
	enterToken?: (ctx: TokenContext) => void;
	/**
	 * Exit a parse tree produced by `httpParser.token`.
	 * @param ctx the parse tree
	 */
	exitToken?: (ctx: TokenContext) => void;

	/**
	 * Enter a parse tree produced by `httpParser.field_value`.
	 * @param ctx the parse tree
	 */
	enterField_value?: (ctx: Field_valueContext) => void;
	/**
	 * Exit a parse tree produced by `httpParser.field_value`.
	 * @param ctx the parse tree
	 */
	exitField_value?: (ctx: Field_valueContext) => void;

	/**
	 * Enter a parse tree produced by `httpParser.field_content`.
	 * @param ctx the parse tree
	 */
	enterField_content?: (ctx: Field_contentContext) => void;
	/**
	 * Exit a parse tree produced by `httpParser.field_content`.
	 * @param ctx the parse tree
	 */
	exitField_content?: (ctx: Field_contentContext) => void;

	/**
	 * Enter a parse tree produced by `httpParser.field_vchar`.
	 * @param ctx the parse tree
	 */
	enterField_vchar?: (ctx: Field_vcharContext) => void;
	/**
	 * Exit a parse tree produced by `httpParser.field_vchar`.
	 * @param ctx the parse tree
	 */
	exitField_vchar?: (ctx: Field_vcharContext) => void;

	/**
	 * Enter a parse tree produced by `httpParser.obs_text`.
	 * @param ctx the parse tree
	 */
	enterObs_text?: (ctx: Obs_textContext) => void;
	/**
	 * Exit a parse tree produced by `httpParser.obs_text`.
	 * @param ctx the parse tree
	 */
	exitObs_text?: (ctx: Obs_textContext) => void;

	/**
	 * Enter a parse tree produced by `httpParser.obs_fold`.
	 * @param ctx the parse tree
	 */
	enterObs_fold?: (ctx: Obs_foldContext) => void;
	/**
	 * Exit a parse tree produced by `httpParser.obs_fold`.
	 * @param ctx the parse tree
	 */
	exitObs_fold?: (ctx: Obs_foldContext) => void;

	/**
	 * Enter a parse tree produced by `httpParser.pchar`.
	 * @param ctx the parse tree
	 */
	enterPchar?: (ctx: PcharContext) => void;
	/**
	 * Exit a parse tree produced by `httpParser.pchar`.
	 * @param ctx the parse tree
	 */
	exitPchar?: (ctx: PcharContext) => void;

	/**
	 * Enter a parse tree produced by `httpParser.unreserved`.
	 * @param ctx the parse tree
	 */
	enterUnreserved?: (ctx: UnreservedContext) => void;
	/**
	 * Exit a parse tree produced by `httpParser.unreserved`.
	 * @param ctx the parse tree
	 */
	exitUnreserved?: (ctx: UnreservedContext) => void;

	/**
	 * Enter a parse tree produced by `httpParser.sub_delims`.
	 * @param ctx the parse tree
	 */
	enterSub_delims?: (ctx: Sub_delimsContext) => void;
	/**
	 * Exit a parse tree produced by `httpParser.sub_delims`.
	 * @param ctx the parse tree
	 */
	exitSub_delims?: (ctx: Sub_delimsContext) => void;

	/**
	 * Enter a parse tree produced by `httpParser.tchar`.
	 * @param ctx the parse tree
	 */
	enterTchar?: (ctx: TcharContext) => void;
	/**
	 * Exit a parse tree produced by `httpParser.tchar`.
	 * @param ctx the parse tree
	 */
	exitTchar?: (ctx: TcharContext) => void;

	/**
	 * Enter a parse tree produced by `httpParser.vCHAR`.
	 * @param ctx the parse tree
	 */
	enterVCHAR?: (ctx: VCHARContext) => void;
	/**
	 * Exit a parse tree produced by `httpParser.vCHAR`.
	 * @param ctx the parse tree
	 */
	exitVCHAR?: (ctx: VCHARContext) => void;
}

