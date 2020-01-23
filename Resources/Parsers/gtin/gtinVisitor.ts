// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/gtin/gtin.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { GtinContext } from "./gtinParser";
import { Gtin8Context } from "./gtinParser";
import { Ean8Context } from "./gtinParser";
import { Gtin12Context } from "./gtinParser";
import { Gtin13Context } from "./gtinParser";
import { Gtin14Context } from "./gtinParser";
import { UpcContext } from "./gtinParser";
import { Upc_aContext } from "./gtinParser";
import { Upc_a_manufacturerContext } from "./gtinParser";
import { Upc_a_productContext } from "./gtinParser";
import { Upc_a_5Context } from "./gtinParser";
import { Upc_eContext } from "./gtinParser";
import { Num_systemContext } from "./gtinParser";
import { Check_codeContext } from "./gtinParser";
import { Supplemental_codeContext } from "./gtinParser";
import { Supplemental_code_5Context } from "./gtinParser";
import { Supplemental_code_2Context } from "./gtinParser";
import { Ean13Context } from "./gtinParser";
import { Ean13_genericContext } from "./gtinParser";
import { Ean13_ismnContext } from "./gtinParser";
import { Gs1_prefix_ismnContext } from "./gtinParser";
import { Ismn_publisher_numberContext } from "./gtinParser";
import { Ismn_item_numberContext } from "./gtinParser";
import { Ean13_booklandContext } from "./gtinParser";
import { Bookland_isbnContext } from "./gtinParser";
import { Gs1_prefix_bookland_1Context } from "./gtinParser";
import { Gs1_prefix_bookland_2Context } from "./gtinParser";
import { Gs1_prefix_issnContext } from "./gtinParser";
import { Ean13_issnContext } from "./gtinParser";
import { IssnContext } from "./gtinParser";
import { Ean_13_manprodContext } from "./gtinParser";
import { Gs1_prefixContext } from "./gtinParser";
import { Ean14Context } from "./gtinParser";
import { Ean14_appidContext } from "./gtinParser";
import { Ean14_packagingContext } from "./gtinParser";
import { Ean14_productContext } from "./gtinParser";
import { Any_digitContext } from "./gtinParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `gtinParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface gtinVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `gtinParser.gtin`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGtin?: (ctx: GtinContext) => Result;

	/**
	 * Visit a parse tree produced by `gtinParser.gtin8`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGtin8?: (ctx: Gtin8Context) => Result;

	/**
	 * Visit a parse tree produced by `gtinParser.ean8`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEan8?: (ctx: Ean8Context) => Result;

	/**
	 * Visit a parse tree produced by `gtinParser.gtin12`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGtin12?: (ctx: Gtin12Context) => Result;

	/**
	 * Visit a parse tree produced by `gtinParser.gtin13`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGtin13?: (ctx: Gtin13Context) => Result;

	/**
	 * Visit a parse tree produced by `gtinParser.gtin14`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGtin14?: (ctx: Gtin14Context) => Result;

	/**
	 * Visit a parse tree produced by `gtinParser.upc`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUpc?: (ctx: UpcContext) => Result;

	/**
	 * Visit a parse tree produced by `gtinParser.upc_a`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUpc_a?: (ctx: Upc_aContext) => Result;

	/**
	 * Visit a parse tree produced by `gtinParser.upc_a_manufacturer`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUpc_a_manufacturer?: (ctx: Upc_a_manufacturerContext) => Result;

	/**
	 * Visit a parse tree produced by `gtinParser.upc_a_product`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUpc_a_product?: (ctx: Upc_a_productContext) => Result;

	/**
	 * Visit a parse tree produced by `gtinParser.upc_a_5`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUpc_a_5?: (ctx: Upc_a_5Context) => Result;

	/**
	 * Visit a parse tree produced by `gtinParser.upc_e`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUpc_e?: (ctx: Upc_eContext) => Result;

	/**
	 * Visit a parse tree produced by `gtinParser.num_system`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNum_system?: (ctx: Num_systemContext) => Result;

	/**
	 * Visit a parse tree produced by `gtinParser.check_code`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCheck_code?: (ctx: Check_codeContext) => Result;

	/**
	 * Visit a parse tree produced by `gtinParser.supplemental_code`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSupplemental_code?: (ctx: Supplemental_codeContext) => Result;

	/**
	 * Visit a parse tree produced by `gtinParser.supplemental_code_5`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSupplemental_code_5?: (ctx: Supplemental_code_5Context) => Result;

	/**
	 * Visit a parse tree produced by `gtinParser.supplemental_code_2`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSupplemental_code_2?: (ctx: Supplemental_code_2Context) => Result;

	/**
	 * Visit a parse tree produced by `gtinParser.ean13`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEan13?: (ctx: Ean13Context) => Result;

	/**
	 * Visit a parse tree produced by `gtinParser.ean13_generic`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEan13_generic?: (ctx: Ean13_genericContext) => Result;

	/**
	 * Visit a parse tree produced by `gtinParser.ean13_ismn`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEan13_ismn?: (ctx: Ean13_ismnContext) => Result;

	/**
	 * Visit a parse tree produced by `gtinParser.gs1_prefix_ismn`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGs1_prefix_ismn?: (ctx: Gs1_prefix_ismnContext) => Result;

	/**
	 * Visit a parse tree produced by `gtinParser.ismn_publisher_number`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIsmn_publisher_number?: (ctx: Ismn_publisher_numberContext) => Result;

	/**
	 * Visit a parse tree produced by `gtinParser.ismn_item_number`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIsmn_item_number?: (ctx: Ismn_item_numberContext) => Result;

	/**
	 * Visit a parse tree produced by `gtinParser.ean13_bookland`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEan13_bookland?: (ctx: Ean13_booklandContext) => Result;

	/**
	 * Visit a parse tree produced by `gtinParser.bookland_isbn`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBookland_isbn?: (ctx: Bookland_isbnContext) => Result;

	/**
	 * Visit a parse tree produced by `gtinParser.gs1_prefix_bookland_1`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGs1_prefix_bookland_1?: (ctx: Gs1_prefix_bookland_1Context) => Result;

	/**
	 * Visit a parse tree produced by `gtinParser.gs1_prefix_bookland_2`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGs1_prefix_bookland_2?: (ctx: Gs1_prefix_bookland_2Context) => Result;

	/**
	 * Visit a parse tree produced by `gtinParser.gs1_prefix_issn`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGs1_prefix_issn?: (ctx: Gs1_prefix_issnContext) => Result;

	/**
	 * Visit a parse tree produced by `gtinParser.ean13_issn`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEan13_issn?: (ctx: Ean13_issnContext) => Result;

	/**
	 * Visit a parse tree produced by `gtinParser.issn`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIssn?: (ctx: IssnContext) => Result;

	/**
	 * Visit a parse tree produced by `gtinParser.ean_13_manprod`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEan_13_manprod?: (ctx: Ean_13_manprodContext) => Result;

	/**
	 * Visit a parse tree produced by `gtinParser.gs1_prefix`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGs1_prefix?: (ctx: Gs1_prefixContext) => Result;

	/**
	 * Visit a parse tree produced by `gtinParser.ean14`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEan14?: (ctx: Ean14Context) => Result;

	/**
	 * Visit a parse tree produced by `gtinParser.ean14_appid`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEan14_appid?: (ctx: Ean14_appidContext) => Result;

	/**
	 * Visit a parse tree produced by `gtinParser.ean14_packaging`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEan14_packaging?: (ctx: Ean14_packagingContext) => Result;

	/**
	 * Visit a parse tree produced by `gtinParser.ean14_product`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEan14_product?: (ctx: Ean14_productContext) => Result;

	/**
	 * Visit a parse tree produced by `gtinParser.any_digit`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAny_digit?: (ctx: Any_digitContext) => Result;
}

