// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/iri/IRI.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

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
 * This interface defines a complete listener for a parse tree produced by
 * `IRIParser`.
 */
export interface IRIListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `IRIParser.parse`.
	 * @param ctx the parse tree
	 */
	enterParse?: (ctx: ParseContext) => void;
	/**
	 * Exit a parse tree produced by `IRIParser.parse`.
	 * @param ctx the parse tree
	 */
	exitParse?: (ctx: ParseContext) => void;

	/**
	 * Enter a parse tree produced by `IRIParser.iri`.
	 * @param ctx the parse tree
	 */
	enterIri?: (ctx: IriContext) => void;
	/**
	 * Exit a parse tree produced by `IRIParser.iri`.
	 * @param ctx the parse tree
	 */
	exitIri?: (ctx: IriContext) => void;

	/**
	 * Enter a parse tree produced by `IRIParser.ihier_part`.
	 * @param ctx the parse tree
	 */
	enterIhier_part?: (ctx: Ihier_partContext) => void;
	/**
	 * Exit a parse tree produced by `IRIParser.ihier_part`.
	 * @param ctx the parse tree
	 */
	exitIhier_part?: (ctx: Ihier_partContext) => void;

	/**
	 * Enter a parse tree produced by `IRIParser.iri_reference`.
	 * @param ctx the parse tree
	 */
	enterIri_reference?: (ctx: Iri_referenceContext) => void;
	/**
	 * Exit a parse tree produced by `IRIParser.iri_reference`.
	 * @param ctx the parse tree
	 */
	exitIri_reference?: (ctx: Iri_referenceContext) => void;

	/**
	 * Enter a parse tree produced by `IRIParser.absolute_iri`.
	 * @param ctx the parse tree
	 */
	enterAbsolute_iri?: (ctx: Absolute_iriContext) => void;
	/**
	 * Exit a parse tree produced by `IRIParser.absolute_iri`.
	 * @param ctx the parse tree
	 */
	exitAbsolute_iri?: (ctx: Absolute_iriContext) => void;

	/**
	 * Enter a parse tree produced by `IRIParser.irelative_ref`.
	 * @param ctx the parse tree
	 */
	enterIrelative_ref?: (ctx: Irelative_refContext) => void;
	/**
	 * Exit a parse tree produced by `IRIParser.irelative_ref`.
	 * @param ctx the parse tree
	 */
	exitIrelative_ref?: (ctx: Irelative_refContext) => void;

	/**
	 * Enter a parse tree produced by `IRIParser.irelative_part`.
	 * @param ctx the parse tree
	 */
	enterIrelative_part?: (ctx: Irelative_partContext) => void;
	/**
	 * Exit a parse tree produced by `IRIParser.irelative_part`.
	 * @param ctx the parse tree
	 */
	exitIrelative_part?: (ctx: Irelative_partContext) => void;

	/**
	 * Enter a parse tree produced by `IRIParser.iauthority`.
	 * @param ctx the parse tree
	 */
	enterIauthority?: (ctx: IauthorityContext) => void;
	/**
	 * Exit a parse tree produced by `IRIParser.iauthority`.
	 * @param ctx the parse tree
	 */
	exitIauthority?: (ctx: IauthorityContext) => void;

	/**
	 * Enter a parse tree produced by `IRIParser.iuserinfo`.
	 * @param ctx the parse tree
	 */
	enterIuserinfo?: (ctx: IuserinfoContext) => void;
	/**
	 * Exit a parse tree produced by `IRIParser.iuserinfo`.
	 * @param ctx the parse tree
	 */
	exitIuserinfo?: (ctx: IuserinfoContext) => void;

	/**
	 * Enter a parse tree produced by `IRIParser.ihost`.
	 * @param ctx the parse tree
	 */
	enterIhost?: (ctx: IhostContext) => void;
	/**
	 * Exit a parse tree produced by `IRIParser.ihost`.
	 * @param ctx the parse tree
	 */
	exitIhost?: (ctx: IhostContext) => void;

	/**
	 * Enter a parse tree produced by `IRIParser.ireg_name`.
	 * @param ctx the parse tree
	 */
	enterIreg_name?: (ctx: Ireg_nameContext) => void;
	/**
	 * Exit a parse tree produced by `IRIParser.ireg_name`.
	 * @param ctx the parse tree
	 */
	exitIreg_name?: (ctx: Ireg_nameContext) => void;

	/**
	 * Enter a parse tree produced by `IRIParser.ipath`.
	 * @param ctx the parse tree
	 */
	enterIpath?: (ctx: IpathContext) => void;
	/**
	 * Exit a parse tree produced by `IRIParser.ipath`.
	 * @param ctx the parse tree
	 */
	exitIpath?: (ctx: IpathContext) => void;

	/**
	 * Enter a parse tree produced by `IRIParser.ipath_abempty`.
	 * @param ctx the parse tree
	 */
	enterIpath_abempty?: (ctx: Ipath_abemptyContext) => void;
	/**
	 * Exit a parse tree produced by `IRIParser.ipath_abempty`.
	 * @param ctx the parse tree
	 */
	exitIpath_abempty?: (ctx: Ipath_abemptyContext) => void;

	/**
	 * Enter a parse tree produced by `IRIParser.ipath_absolute`.
	 * @param ctx the parse tree
	 */
	enterIpath_absolute?: (ctx: Ipath_absoluteContext) => void;
	/**
	 * Exit a parse tree produced by `IRIParser.ipath_absolute`.
	 * @param ctx the parse tree
	 */
	exitIpath_absolute?: (ctx: Ipath_absoluteContext) => void;

	/**
	 * Enter a parse tree produced by `IRIParser.ipath_noscheme`.
	 * @param ctx the parse tree
	 */
	enterIpath_noscheme?: (ctx: Ipath_noschemeContext) => void;
	/**
	 * Exit a parse tree produced by `IRIParser.ipath_noscheme`.
	 * @param ctx the parse tree
	 */
	exitIpath_noscheme?: (ctx: Ipath_noschemeContext) => void;

	/**
	 * Enter a parse tree produced by `IRIParser.ipath_rootless`.
	 * @param ctx the parse tree
	 */
	enterIpath_rootless?: (ctx: Ipath_rootlessContext) => void;
	/**
	 * Exit a parse tree produced by `IRIParser.ipath_rootless`.
	 * @param ctx the parse tree
	 */
	exitIpath_rootless?: (ctx: Ipath_rootlessContext) => void;

	/**
	 * Enter a parse tree produced by `IRIParser.ipath_empty`.
	 * @param ctx the parse tree
	 */
	enterIpath_empty?: (ctx: Ipath_emptyContext) => void;
	/**
	 * Exit a parse tree produced by `IRIParser.ipath_empty`.
	 * @param ctx the parse tree
	 */
	exitIpath_empty?: (ctx: Ipath_emptyContext) => void;

	/**
	 * Enter a parse tree produced by `IRIParser.isegment`.
	 * @param ctx the parse tree
	 */
	enterIsegment?: (ctx: IsegmentContext) => void;
	/**
	 * Exit a parse tree produced by `IRIParser.isegment`.
	 * @param ctx the parse tree
	 */
	exitIsegment?: (ctx: IsegmentContext) => void;

	/**
	 * Enter a parse tree produced by `IRIParser.isegment_nz`.
	 * @param ctx the parse tree
	 */
	enterIsegment_nz?: (ctx: Isegment_nzContext) => void;
	/**
	 * Exit a parse tree produced by `IRIParser.isegment_nz`.
	 * @param ctx the parse tree
	 */
	exitIsegment_nz?: (ctx: Isegment_nzContext) => void;

	/**
	 * Enter a parse tree produced by `IRIParser.isegment_nz_nc`.
	 * @param ctx the parse tree
	 */
	enterIsegment_nz_nc?: (ctx: Isegment_nz_ncContext) => void;
	/**
	 * Exit a parse tree produced by `IRIParser.isegment_nz_nc`.
	 * @param ctx the parse tree
	 */
	exitIsegment_nz_nc?: (ctx: Isegment_nz_ncContext) => void;

	/**
	 * Enter a parse tree produced by `IRIParser.ipchar`.
	 * @param ctx the parse tree
	 */
	enterIpchar?: (ctx: IpcharContext) => void;
	/**
	 * Exit a parse tree produced by `IRIParser.ipchar`.
	 * @param ctx the parse tree
	 */
	exitIpchar?: (ctx: IpcharContext) => void;

	/**
	 * Enter a parse tree produced by `IRIParser.iquery`.
	 * @param ctx the parse tree
	 */
	enterIquery?: (ctx: IqueryContext) => void;
	/**
	 * Exit a parse tree produced by `IRIParser.iquery`.
	 * @param ctx the parse tree
	 */
	exitIquery?: (ctx: IqueryContext) => void;

	/**
	 * Enter a parse tree produced by `IRIParser.ifragment`.
	 * @param ctx the parse tree
	 */
	enterIfragment?: (ctx: IfragmentContext) => void;
	/**
	 * Exit a parse tree produced by `IRIParser.ifragment`.
	 * @param ctx the parse tree
	 */
	exitIfragment?: (ctx: IfragmentContext) => void;

	/**
	 * Enter a parse tree produced by `IRIParser.iunreserved`.
	 * @param ctx the parse tree
	 */
	enterIunreserved?: (ctx: IunreservedContext) => void;
	/**
	 * Exit a parse tree produced by `IRIParser.iunreserved`.
	 * @param ctx the parse tree
	 */
	exitIunreserved?: (ctx: IunreservedContext) => void;

	/**
	 * Enter a parse tree produced by `IRIParser.scheme`.
	 * @param ctx the parse tree
	 */
	enterScheme?: (ctx: SchemeContext) => void;
	/**
	 * Exit a parse tree produced by `IRIParser.scheme`.
	 * @param ctx the parse tree
	 */
	exitScheme?: (ctx: SchemeContext) => void;

	/**
	 * Enter a parse tree produced by `IRIParser.port`.
	 * @param ctx the parse tree
	 */
	enterPort?: (ctx: PortContext) => void;
	/**
	 * Exit a parse tree produced by `IRIParser.port`.
	 * @param ctx the parse tree
	 */
	exitPort?: (ctx: PortContext) => void;

	/**
	 * Enter a parse tree produced by `IRIParser.ip_literal`.
	 * @param ctx the parse tree
	 */
	enterIp_literal?: (ctx: Ip_literalContext) => void;
	/**
	 * Exit a parse tree produced by `IRIParser.ip_literal`.
	 * @param ctx the parse tree
	 */
	exitIp_literal?: (ctx: Ip_literalContext) => void;

	/**
	 * Enter a parse tree produced by `IRIParser.ip_v_future`.
	 * @param ctx the parse tree
	 */
	enterIp_v_future?: (ctx: Ip_v_futureContext) => void;
	/**
	 * Exit a parse tree produced by `IRIParser.ip_v_future`.
	 * @param ctx the parse tree
	 */
	exitIp_v_future?: (ctx: Ip_v_futureContext) => void;

	/**
	 * Enter a parse tree produced by `IRIParser.ip_v6_address`.
	 * @param ctx the parse tree
	 */
	enterIp_v6_address?: (ctx: Ip_v6_addressContext) => void;
	/**
	 * Exit a parse tree produced by `IRIParser.ip_v6_address`.
	 * @param ctx the parse tree
	 */
	exitIp_v6_address?: (ctx: Ip_v6_addressContext) => void;

	/**
	 * Enter a parse tree produced by `IRIParser.h16`.
	 * @param ctx the parse tree
	 */
	enterH16?: (ctx: H16Context) => void;
	/**
	 * Exit a parse tree produced by `IRIParser.h16`.
	 * @param ctx the parse tree
	 */
	exitH16?: (ctx: H16Context) => void;

	/**
	 * Enter a parse tree produced by `IRIParser.ls32`.
	 * @param ctx the parse tree
	 */
	enterLs32?: (ctx: Ls32Context) => void;
	/**
	 * Exit a parse tree produced by `IRIParser.ls32`.
	 * @param ctx the parse tree
	 */
	exitLs32?: (ctx: Ls32Context) => void;

	/**
	 * Enter a parse tree produced by `IRIParser.ip_v4_address`.
	 * @param ctx the parse tree
	 */
	enterIp_v4_address?: (ctx: Ip_v4_addressContext) => void;
	/**
	 * Exit a parse tree produced by `IRIParser.ip_v4_address`.
	 * @param ctx the parse tree
	 */
	exitIp_v4_address?: (ctx: Ip_v4_addressContext) => void;

	/**
	 * Enter a parse tree produced by `IRIParser.dec_octet`.
	 * @param ctx the parse tree
	 */
	enterDec_octet?: (ctx: Dec_octetContext) => void;
	/**
	 * Exit a parse tree produced by `IRIParser.dec_octet`.
	 * @param ctx the parse tree
	 */
	exitDec_octet?: (ctx: Dec_octetContext) => void;

	/**
	 * Enter a parse tree produced by `IRIParser.pct_encoded`.
	 * @param ctx the parse tree
	 */
	enterPct_encoded?: (ctx: Pct_encodedContext) => void;
	/**
	 * Exit a parse tree produced by `IRIParser.pct_encoded`.
	 * @param ctx the parse tree
	 */
	exitPct_encoded?: (ctx: Pct_encodedContext) => void;

	/**
	 * Enter a parse tree produced by `IRIParser.unreserved`.
	 * @param ctx the parse tree
	 */
	enterUnreserved?: (ctx: UnreservedContext) => void;
	/**
	 * Exit a parse tree produced by `IRIParser.unreserved`.
	 * @param ctx the parse tree
	 */
	exitUnreserved?: (ctx: UnreservedContext) => void;

	/**
	 * Enter a parse tree produced by `IRIParser.reserved`.
	 * @param ctx the parse tree
	 */
	enterReserved?: (ctx: ReservedContext) => void;
	/**
	 * Exit a parse tree produced by `IRIParser.reserved`.
	 * @param ctx the parse tree
	 */
	exitReserved?: (ctx: ReservedContext) => void;

	/**
	 * Enter a parse tree produced by `IRIParser.gen_delims`.
	 * @param ctx the parse tree
	 */
	enterGen_delims?: (ctx: Gen_delimsContext) => void;
	/**
	 * Exit a parse tree produced by `IRIParser.gen_delims`.
	 * @param ctx the parse tree
	 */
	exitGen_delims?: (ctx: Gen_delimsContext) => void;

	/**
	 * Enter a parse tree produced by `IRIParser.sub_delims`.
	 * @param ctx the parse tree
	 */
	enterSub_delims?: (ctx: Sub_delimsContext) => void;
	/**
	 * Exit a parse tree produced by `IRIParser.sub_delims`.
	 * @param ctx the parse tree
	 */
	exitSub_delims?: (ctx: Sub_delimsContext) => void;

	/**
	 * Enter a parse tree produced by `IRIParser.alpha`.
	 * @param ctx the parse tree
	 */
	enterAlpha?: (ctx: AlphaContext) => void;
	/**
	 * Exit a parse tree produced by `IRIParser.alpha`.
	 * @param ctx the parse tree
	 */
	exitAlpha?: (ctx: AlphaContext) => void;

	/**
	 * Enter a parse tree produced by `IRIParser.hexdig`.
	 * @param ctx the parse tree
	 */
	enterHexdig?: (ctx: HexdigContext) => void;
	/**
	 * Exit a parse tree produced by `IRIParser.hexdig`.
	 * @param ctx the parse tree
	 */
	exitHexdig?: (ctx: HexdigContext) => void;

	/**
	 * Enter a parse tree produced by `IRIParser.digit`.
	 * @param ctx the parse tree
	 */
	enterDigit?: (ctx: DigitContext) => void;
	/**
	 * Exit a parse tree produced by `IRIParser.digit`.
	 * @param ctx the parse tree
	 */
	exitDigit?: (ctx: DigitContext) => void;

	/**
	 * Enter a parse tree produced by `IRIParser.non_zero_digit`.
	 * @param ctx the parse tree
	 */
	enterNon_zero_digit?: (ctx: Non_zero_digitContext) => void;
	/**
	 * Exit a parse tree produced by `IRIParser.non_zero_digit`.
	 * @param ctx the parse tree
	 */
	exitNon_zero_digit?: (ctx: Non_zero_digitContext) => void;
}

