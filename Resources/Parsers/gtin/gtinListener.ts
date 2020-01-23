// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/gtin/gtin.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

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
 * This interface defines a complete listener for a parse tree produced by
 * `gtinParser`.
 */
export interface gtinListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `gtinParser.gtin`.
	 * @param ctx the parse tree
	 */
	enterGtin?: (ctx: GtinContext) => void;
	/**
	 * Exit a parse tree produced by `gtinParser.gtin`.
	 * @param ctx the parse tree
	 */
	exitGtin?: (ctx: GtinContext) => void;

	/**
	 * Enter a parse tree produced by `gtinParser.gtin8`.
	 * @param ctx the parse tree
	 */
	enterGtin8?: (ctx: Gtin8Context) => void;
	/**
	 * Exit a parse tree produced by `gtinParser.gtin8`.
	 * @param ctx the parse tree
	 */
	exitGtin8?: (ctx: Gtin8Context) => void;

	/**
	 * Enter a parse tree produced by `gtinParser.ean8`.
	 * @param ctx the parse tree
	 */
	enterEan8?: (ctx: Ean8Context) => void;
	/**
	 * Exit a parse tree produced by `gtinParser.ean8`.
	 * @param ctx the parse tree
	 */
	exitEan8?: (ctx: Ean8Context) => void;

	/**
	 * Enter a parse tree produced by `gtinParser.gtin12`.
	 * @param ctx the parse tree
	 */
	enterGtin12?: (ctx: Gtin12Context) => void;
	/**
	 * Exit a parse tree produced by `gtinParser.gtin12`.
	 * @param ctx the parse tree
	 */
	exitGtin12?: (ctx: Gtin12Context) => void;

	/**
	 * Enter a parse tree produced by `gtinParser.gtin13`.
	 * @param ctx the parse tree
	 */
	enterGtin13?: (ctx: Gtin13Context) => void;
	/**
	 * Exit a parse tree produced by `gtinParser.gtin13`.
	 * @param ctx the parse tree
	 */
	exitGtin13?: (ctx: Gtin13Context) => void;

	/**
	 * Enter a parse tree produced by `gtinParser.gtin14`.
	 * @param ctx the parse tree
	 */
	enterGtin14?: (ctx: Gtin14Context) => void;
	/**
	 * Exit a parse tree produced by `gtinParser.gtin14`.
	 * @param ctx the parse tree
	 */
	exitGtin14?: (ctx: Gtin14Context) => void;

	/**
	 * Enter a parse tree produced by `gtinParser.upc`.
	 * @param ctx the parse tree
	 */
	enterUpc?: (ctx: UpcContext) => void;
	/**
	 * Exit a parse tree produced by `gtinParser.upc`.
	 * @param ctx the parse tree
	 */
	exitUpc?: (ctx: UpcContext) => void;

	/**
	 * Enter a parse tree produced by `gtinParser.upc_a`.
	 * @param ctx the parse tree
	 */
	enterUpc_a?: (ctx: Upc_aContext) => void;
	/**
	 * Exit a parse tree produced by `gtinParser.upc_a`.
	 * @param ctx the parse tree
	 */
	exitUpc_a?: (ctx: Upc_aContext) => void;

	/**
	 * Enter a parse tree produced by `gtinParser.upc_a_manufacturer`.
	 * @param ctx the parse tree
	 */
	enterUpc_a_manufacturer?: (ctx: Upc_a_manufacturerContext) => void;
	/**
	 * Exit a parse tree produced by `gtinParser.upc_a_manufacturer`.
	 * @param ctx the parse tree
	 */
	exitUpc_a_manufacturer?: (ctx: Upc_a_manufacturerContext) => void;

	/**
	 * Enter a parse tree produced by `gtinParser.upc_a_product`.
	 * @param ctx the parse tree
	 */
	enterUpc_a_product?: (ctx: Upc_a_productContext) => void;
	/**
	 * Exit a parse tree produced by `gtinParser.upc_a_product`.
	 * @param ctx the parse tree
	 */
	exitUpc_a_product?: (ctx: Upc_a_productContext) => void;

	/**
	 * Enter a parse tree produced by `gtinParser.upc_a_5`.
	 * @param ctx the parse tree
	 */
	enterUpc_a_5?: (ctx: Upc_a_5Context) => void;
	/**
	 * Exit a parse tree produced by `gtinParser.upc_a_5`.
	 * @param ctx the parse tree
	 */
	exitUpc_a_5?: (ctx: Upc_a_5Context) => void;

	/**
	 * Enter a parse tree produced by `gtinParser.upc_e`.
	 * @param ctx the parse tree
	 */
	enterUpc_e?: (ctx: Upc_eContext) => void;
	/**
	 * Exit a parse tree produced by `gtinParser.upc_e`.
	 * @param ctx the parse tree
	 */
	exitUpc_e?: (ctx: Upc_eContext) => void;

	/**
	 * Enter a parse tree produced by `gtinParser.num_system`.
	 * @param ctx the parse tree
	 */
	enterNum_system?: (ctx: Num_systemContext) => void;
	/**
	 * Exit a parse tree produced by `gtinParser.num_system`.
	 * @param ctx the parse tree
	 */
	exitNum_system?: (ctx: Num_systemContext) => void;

	/**
	 * Enter a parse tree produced by `gtinParser.check_code`.
	 * @param ctx the parse tree
	 */
	enterCheck_code?: (ctx: Check_codeContext) => void;
	/**
	 * Exit a parse tree produced by `gtinParser.check_code`.
	 * @param ctx the parse tree
	 */
	exitCheck_code?: (ctx: Check_codeContext) => void;

	/**
	 * Enter a parse tree produced by `gtinParser.supplemental_code`.
	 * @param ctx the parse tree
	 */
	enterSupplemental_code?: (ctx: Supplemental_codeContext) => void;
	/**
	 * Exit a parse tree produced by `gtinParser.supplemental_code`.
	 * @param ctx the parse tree
	 */
	exitSupplemental_code?: (ctx: Supplemental_codeContext) => void;

	/**
	 * Enter a parse tree produced by `gtinParser.supplemental_code_5`.
	 * @param ctx the parse tree
	 */
	enterSupplemental_code_5?: (ctx: Supplemental_code_5Context) => void;
	/**
	 * Exit a parse tree produced by `gtinParser.supplemental_code_5`.
	 * @param ctx the parse tree
	 */
	exitSupplemental_code_5?: (ctx: Supplemental_code_5Context) => void;

	/**
	 * Enter a parse tree produced by `gtinParser.supplemental_code_2`.
	 * @param ctx the parse tree
	 */
	enterSupplemental_code_2?: (ctx: Supplemental_code_2Context) => void;
	/**
	 * Exit a parse tree produced by `gtinParser.supplemental_code_2`.
	 * @param ctx the parse tree
	 */
	exitSupplemental_code_2?: (ctx: Supplemental_code_2Context) => void;

	/**
	 * Enter a parse tree produced by `gtinParser.ean13`.
	 * @param ctx the parse tree
	 */
	enterEan13?: (ctx: Ean13Context) => void;
	/**
	 * Exit a parse tree produced by `gtinParser.ean13`.
	 * @param ctx the parse tree
	 */
	exitEan13?: (ctx: Ean13Context) => void;

	/**
	 * Enter a parse tree produced by `gtinParser.ean13_generic`.
	 * @param ctx the parse tree
	 */
	enterEan13_generic?: (ctx: Ean13_genericContext) => void;
	/**
	 * Exit a parse tree produced by `gtinParser.ean13_generic`.
	 * @param ctx the parse tree
	 */
	exitEan13_generic?: (ctx: Ean13_genericContext) => void;

	/**
	 * Enter a parse tree produced by `gtinParser.ean13_ismn`.
	 * @param ctx the parse tree
	 */
	enterEan13_ismn?: (ctx: Ean13_ismnContext) => void;
	/**
	 * Exit a parse tree produced by `gtinParser.ean13_ismn`.
	 * @param ctx the parse tree
	 */
	exitEan13_ismn?: (ctx: Ean13_ismnContext) => void;

	/**
	 * Enter a parse tree produced by `gtinParser.gs1_prefix_ismn`.
	 * @param ctx the parse tree
	 */
	enterGs1_prefix_ismn?: (ctx: Gs1_prefix_ismnContext) => void;
	/**
	 * Exit a parse tree produced by `gtinParser.gs1_prefix_ismn`.
	 * @param ctx the parse tree
	 */
	exitGs1_prefix_ismn?: (ctx: Gs1_prefix_ismnContext) => void;

	/**
	 * Enter a parse tree produced by `gtinParser.ismn_publisher_number`.
	 * @param ctx the parse tree
	 */
	enterIsmn_publisher_number?: (ctx: Ismn_publisher_numberContext) => void;
	/**
	 * Exit a parse tree produced by `gtinParser.ismn_publisher_number`.
	 * @param ctx the parse tree
	 */
	exitIsmn_publisher_number?: (ctx: Ismn_publisher_numberContext) => void;

	/**
	 * Enter a parse tree produced by `gtinParser.ismn_item_number`.
	 * @param ctx the parse tree
	 */
	enterIsmn_item_number?: (ctx: Ismn_item_numberContext) => void;
	/**
	 * Exit a parse tree produced by `gtinParser.ismn_item_number`.
	 * @param ctx the parse tree
	 */
	exitIsmn_item_number?: (ctx: Ismn_item_numberContext) => void;

	/**
	 * Enter a parse tree produced by `gtinParser.ean13_bookland`.
	 * @param ctx the parse tree
	 */
	enterEan13_bookland?: (ctx: Ean13_booklandContext) => void;
	/**
	 * Exit a parse tree produced by `gtinParser.ean13_bookland`.
	 * @param ctx the parse tree
	 */
	exitEan13_bookland?: (ctx: Ean13_booklandContext) => void;

	/**
	 * Enter a parse tree produced by `gtinParser.bookland_isbn`.
	 * @param ctx the parse tree
	 */
	enterBookland_isbn?: (ctx: Bookland_isbnContext) => void;
	/**
	 * Exit a parse tree produced by `gtinParser.bookland_isbn`.
	 * @param ctx the parse tree
	 */
	exitBookland_isbn?: (ctx: Bookland_isbnContext) => void;

	/**
	 * Enter a parse tree produced by `gtinParser.gs1_prefix_bookland_1`.
	 * @param ctx the parse tree
	 */
	enterGs1_prefix_bookland_1?: (ctx: Gs1_prefix_bookland_1Context) => void;
	/**
	 * Exit a parse tree produced by `gtinParser.gs1_prefix_bookland_1`.
	 * @param ctx the parse tree
	 */
	exitGs1_prefix_bookland_1?: (ctx: Gs1_prefix_bookland_1Context) => void;

	/**
	 * Enter a parse tree produced by `gtinParser.gs1_prefix_bookland_2`.
	 * @param ctx the parse tree
	 */
	enterGs1_prefix_bookland_2?: (ctx: Gs1_prefix_bookland_2Context) => void;
	/**
	 * Exit a parse tree produced by `gtinParser.gs1_prefix_bookland_2`.
	 * @param ctx the parse tree
	 */
	exitGs1_prefix_bookland_2?: (ctx: Gs1_prefix_bookland_2Context) => void;

	/**
	 * Enter a parse tree produced by `gtinParser.gs1_prefix_issn`.
	 * @param ctx the parse tree
	 */
	enterGs1_prefix_issn?: (ctx: Gs1_prefix_issnContext) => void;
	/**
	 * Exit a parse tree produced by `gtinParser.gs1_prefix_issn`.
	 * @param ctx the parse tree
	 */
	exitGs1_prefix_issn?: (ctx: Gs1_prefix_issnContext) => void;

	/**
	 * Enter a parse tree produced by `gtinParser.ean13_issn`.
	 * @param ctx the parse tree
	 */
	enterEan13_issn?: (ctx: Ean13_issnContext) => void;
	/**
	 * Exit a parse tree produced by `gtinParser.ean13_issn`.
	 * @param ctx the parse tree
	 */
	exitEan13_issn?: (ctx: Ean13_issnContext) => void;

	/**
	 * Enter a parse tree produced by `gtinParser.issn`.
	 * @param ctx the parse tree
	 */
	enterIssn?: (ctx: IssnContext) => void;
	/**
	 * Exit a parse tree produced by `gtinParser.issn`.
	 * @param ctx the parse tree
	 */
	exitIssn?: (ctx: IssnContext) => void;

	/**
	 * Enter a parse tree produced by `gtinParser.ean_13_manprod`.
	 * @param ctx the parse tree
	 */
	enterEan_13_manprod?: (ctx: Ean_13_manprodContext) => void;
	/**
	 * Exit a parse tree produced by `gtinParser.ean_13_manprod`.
	 * @param ctx the parse tree
	 */
	exitEan_13_manprod?: (ctx: Ean_13_manprodContext) => void;

	/**
	 * Enter a parse tree produced by `gtinParser.gs1_prefix`.
	 * @param ctx the parse tree
	 */
	enterGs1_prefix?: (ctx: Gs1_prefixContext) => void;
	/**
	 * Exit a parse tree produced by `gtinParser.gs1_prefix`.
	 * @param ctx the parse tree
	 */
	exitGs1_prefix?: (ctx: Gs1_prefixContext) => void;

	/**
	 * Enter a parse tree produced by `gtinParser.ean14`.
	 * @param ctx the parse tree
	 */
	enterEan14?: (ctx: Ean14Context) => void;
	/**
	 * Exit a parse tree produced by `gtinParser.ean14`.
	 * @param ctx the parse tree
	 */
	exitEan14?: (ctx: Ean14Context) => void;

	/**
	 * Enter a parse tree produced by `gtinParser.ean14_appid`.
	 * @param ctx the parse tree
	 */
	enterEan14_appid?: (ctx: Ean14_appidContext) => void;
	/**
	 * Exit a parse tree produced by `gtinParser.ean14_appid`.
	 * @param ctx the parse tree
	 */
	exitEan14_appid?: (ctx: Ean14_appidContext) => void;

	/**
	 * Enter a parse tree produced by `gtinParser.ean14_packaging`.
	 * @param ctx the parse tree
	 */
	enterEan14_packaging?: (ctx: Ean14_packagingContext) => void;
	/**
	 * Exit a parse tree produced by `gtinParser.ean14_packaging`.
	 * @param ctx the parse tree
	 */
	exitEan14_packaging?: (ctx: Ean14_packagingContext) => void;

	/**
	 * Enter a parse tree produced by `gtinParser.ean14_product`.
	 * @param ctx the parse tree
	 */
	enterEan14_product?: (ctx: Ean14_productContext) => void;
	/**
	 * Exit a parse tree produced by `gtinParser.ean14_product`.
	 * @param ctx the parse tree
	 */
	exitEan14_product?: (ctx: Ean14_productContext) => void;

	/**
	 * Enter a parse tree produced by `gtinParser.any_digit`.
	 * @param ctx the parse tree
	 */
	enterAny_digit?: (ctx: Any_digitContext) => void;
	/**
	 * Exit a parse tree produced by `gtinParser.any_digit`.
	 * @param ctx the parse tree
	 */
	exitAny_digit?: (ctx: Any_digitContext) => void;
}

