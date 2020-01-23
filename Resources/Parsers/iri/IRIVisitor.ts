// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/iri/IRI.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { ParseContext } from "./IRIParser";
import { IriContext } from "./IRIParser";
import { Ihier_partContext } from "./IRIParser";
import { Iri_referenceContext } from "./IRIParser";
import { Absolute_iriContext } from "./IRIParser";
import { Irelative_refContext } from "./IRIParser";
import { Irelative_partContext } from "./IRIParser";
import { IauthorityContext } from "./IRIParser";
import { IuserinfoContext } from "./IRIParser";
import { IhostContext } from "./IRIParser";
import { Ireg_nameContext } from "./IRIParser";
import { IpathContext } from "./IRIParser";
import { Ipath_abemptyContext } from "./IRIParser";
import { Ipath_absoluteContext } from "./IRIParser";
import { Ipath_noschemeContext } from "./IRIParser";
import { Ipath_rootlessContext } from "./IRIParser";
import { Ipath_emptyContext } from "./IRIParser";
import { IsegmentContext } from "./IRIParser";
import { Isegment_nzContext } from "./IRIParser";
import { Isegment_nz_ncContext } from "./IRIParser";
import { IpcharContext } from "./IRIParser";
import { IqueryContext } from "./IRIParser";
import { IfragmentContext } from "./IRIParser";
import { IunreservedContext } from "./IRIParser";
import { SchemeContext } from "./IRIParser";
import { PortContext } from "./IRIParser";
import { Ip_literalContext } from "./IRIParser";
import { Ip_v_futureContext } from "./IRIParser";
import { Ip_v6_addressContext } from "./IRIParser";
import { H16Context } from "./IRIParser";
import { Ls32Context } from "./IRIParser";
import { Ip_v4_addressContext } from "./IRIParser";
import { Dec_octetContext } from "./IRIParser";
import { Pct_encodedContext } from "./IRIParser";
import { UnreservedContext } from "./IRIParser";
import { ReservedContext } from "./IRIParser";
import { Gen_delimsContext } from "./IRIParser";
import { Sub_delimsContext } from "./IRIParser";
import { AlphaContext } from "./IRIParser";
import { HexdigContext } from "./IRIParser";
import { DigitContext } from "./IRIParser";
import { Non_zero_digitContext } from "./IRIParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `IRIParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface IRIVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `IRIParser.parse`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParse?: (ctx: ParseContext) => Result;

	/**
	 * Visit a parse tree produced by `IRIParser.iri`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIri?: (ctx: IriContext) => Result;

	/**
	 * Visit a parse tree produced by `IRIParser.ihier_part`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIhier_part?: (ctx: Ihier_partContext) => Result;

	/**
	 * Visit a parse tree produced by `IRIParser.iri_reference`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIri_reference?: (ctx: Iri_referenceContext) => Result;

	/**
	 * Visit a parse tree produced by `IRIParser.absolute_iri`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAbsolute_iri?: (ctx: Absolute_iriContext) => Result;

	/**
	 * Visit a parse tree produced by `IRIParser.irelative_ref`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIrelative_ref?: (ctx: Irelative_refContext) => Result;

	/**
	 * Visit a parse tree produced by `IRIParser.irelative_part`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIrelative_part?: (ctx: Irelative_partContext) => Result;

	/**
	 * Visit a parse tree produced by `IRIParser.iauthority`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIauthority?: (ctx: IauthorityContext) => Result;

	/**
	 * Visit a parse tree produced by `IRIParser.iuserinfo`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIuserinfo?: (ctx: IuserinfoContext) => Result;

	/**
	 * Visit a parse tree produced by `IRIParser.ihost`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIhost?: (ctx: IhostContext) => Result;

	/**
	 * Visit a parse tree produced by `IRIParser.ireg_name`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIreg_name?: (ctx: Ireg_nameContext) => Result;

	/**
	 * Visit a parse tree produced by `IRIParser.ipath`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIpath?: (ctx: IpathContext) => Result;

	/**
	 * Visit a parse tree produced by `IRIParser.ipath_abempty`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIpath_abempty?: (ctx: Ipath_abemptyContext) => Result;

	/**
	 * Visit a parse tree produced by `IRIParser.ipath_absolute`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIpath_absolute?: (ctx: Ipath_absoluteContext) => Result;

	/**
	 * Visit a parse tree produced by `IRIParser.ipath_noscheme`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIpath_noscheme?: (ctx: Ipath_noschemeContext) => Result;

	/**
	 * Visit a parse tree produced by `IRIParser.ipath_rootless`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIpath_rootless?: (ctx: Ipath_rootlessContext) => Result;

	/**
	 * Visit a parse tree produced by `IRIParser.ipath_empty`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIpath_empty?: (ctx: Ipath_emptyContext) => Result;

	/**
	 * Visit a parse tree produced by `IRIParser.isegment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIsegment?: (ctx: IsegmentContext) => Result;

	/**
	 * Visit a parse tree produced by `IRIParser.isegment_nz`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIsegment_nz?: (ctx: Isegment_nzContext) => Result;

	/**
	 * Visit a parse tree produced by `IRIParser.isegment_nz_nc`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIsegment_nz_nc?: (ctx: Isegment_nz_ncContext) => Result;

	/**
	 * Visit a parse tree produced by `IRIParser.ipchar`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIpchar?: (ctx: IpcharContext) => Result;

	/**
	 * Visit a parse tree produced by `IRIParser.iquery`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIquery?: (ctx: IqueryContext) => Result;

	/**
	 * Visit a parse tree produced by `IRIParser.ifragment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfragment?: (ctx: IfragmentContext) => Result;

	/**
	 * Visit a parse tree produced by `IRIParser.iunreserved`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIunreserved?: (ctx: IunreservedContext) => Result;

	/**
	 * Visit a parse tree produced by `IRIParser.scheme`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitScheme?: (ctx: SchemeContext) => Result;

	/**
	 * Visit a parse tree produced by `IRIParser.port`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPort?: (ctx: PortContext) => Result;

	/**
	 * Visit a parse tree produced by `IRIParser.ip_literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIp_literal?: (ctx: Ip_literalContext) => Result;

	/**
	 * Visit a parse tree produced by `IRIParser.ip_v_future`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIp_v_future?: (ctx: Ip_v_futureContext) => Result;

	/**
	 * Visit a parse tree produced by `IRIParser.ip_v6_address`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIp_v6_address?: (ctx: Ip_v6_addressContext) => Result;

	/**
	 * Visit a parse tree produced by `IRIParser.h16`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitH16?: (ctx: H16Context) => Result;

	/**
	 * Visit a parse tree produced by `IRIParser.ls32`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLs32?: (ctx: Ls32Context) => Result;

	/**
	 * Visit a parse tree produced by `IRIParser.ip_v4_address`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIp_v4_address?: (ctx: Ip_v4_addressContext) => Result;

	/**
	 * Visit a parse tree produced by `IRIParser.dec_octet`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDec_octet?: (ctx: Dec_octetContext) => Result;

	/**
	 * Visit a parse tree produced by `IRIParser.pct_encoded`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPct_encoded?: (ctx: Pct_encodedContext) => Result;

	/**
	 * Visit a parse tree produced by `IRIParser.unreserved`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnreserved?: (ctx: UnreservedContext) => Result;

	/**
	 * Visit a parse tree produced by `IRIParser.reserved`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReserved?: (ctx: ReservedContext) => Result;

	/**
	 * Visit a parse tree produced by `IRIParser.gen_delims`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGen_delims?: (ctx: Gen_delimsContext) => Result;

	/**
	 * Visit a parse tree produced by `IRIParser.sub_delims`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSub_delims?: (ctx: Sub_delimsContext) => Result;

	/**
	 * Visit a parse tree produced by `IRIParser.alpha`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlpha?: (ctx: AlphaContext) => Result;

	/**
	 * Visit a parse tree produced by `IRIParser.hexdig`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHexdig?: (ctx: HexdigContext) => Result;

	/**
	 * Visit a parse tree produced by `IRIParser.digit`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDigit?: (ctx: DigitContext) => Result;

	/**
	 * Visit a parse tree produced by `IRIParser.non_zero_digit`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNon_zero_digit?: (ctx: Non_zero_digitContext) => Result;
}

