// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/dcm/DCM_2_0_grammar.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { KonservierungContext } from "./DCM_2_0_grammarParser";
import { Kons_kopfContext } from "./DCM_2_0_grammarParser";
import { Modulkopf_infoContext } from "./DCM_2_0_grammarParser";
import { Mod_zeileContext } from "./DCM_2_0_grammarParser";
import { Mod_anf_zeileContext } from "./DCM_2_0_grammarParser";
import { Mod_fort_zeileContext } from "./DCM_2_0_grammarParser";
import { Mod_ele_nameContext } from "./DCM_2_0_grammarParser";
import { Mod_ele_wertContext } from "./DCM_2_0_grammarParser";
import { FunktionsdefContext } from "./DCM_2_0_grammarParser";
import { FunktionszeileContext } from "./DCM_2_0_grammarParser";
import { Fkt_versionContext } from "./DCM_2_0_grammarParser";
import { Fkt_langnameContext } from "./DCM_2_0_grammarParser";
import { VariantendefContext } from "./DCM_2_0_grammarParser";
import { VariantenkritContext } from "./DCM_2_0_grammarParser";
import { Krit_nameContext } from "./DCM_2_0_grammarParser";
import { Krit_wertContext } from "./DCM_2_0_grammarParser";
import { Kons_rumpfContext } from "./DCM_2_0_grammarParser";
import { KenngroesseContext } from "./DCM_2_0_grammarParser";
import { KennwertContext } from "./DCM_2_0_grammarParser";
import { KennwerteblockContext } from "./DCM_2_0_grammarParser";
import { KennlinieContext } from "./DCM_2_0_grammarParser";
import { KennfeldContext } from "./DCM_2_0_grammarParser";
import { GruppenstuetzstellenContext } from "./DCM_2_0_grammarParser";
import { KenntextContext } from "./DCM_2_0_grammarParser";
import { Kgr_infoContext } from "./DCM_2_0_grammarParser";
import { Einheit_xContext } from "./DCM_2_0_grammarParser";
import { Einheit_yContext } from "./DCM_2_0_grammarParser";
import { Einheit_wContext } from "./DCM_2_0_grammarParser";
import { LangnameContext } from "./DCM_2_0_grammarParser";
import { DisplaynameContext } from "./DCM_2_0_grammarParser";
import { Var_abhangigkeitenContext } from "./DCM_2_0_grammarParser";
import { Var_abhContext } from "./DCM_2_0_grammarParser";
import { FunktionszugehorigkeitContext } from "./DCM_2_0_grammarParser";
import { Anzahl_xContext } from "./DCM_2_0_grammarParser";
import { Anzahl_yContext } from "./DCM_2_0_grammarParser";
import { WertelisteContext } from "./DCM_2_0_grammarParser";
import { Werteliste_kwbContext } from "./DCM_2_0_grammarParser";
import { Sst_liste_xContext } from "./DCM_2_0_grammarParser";
import { Kf_zeile_listeContext } from "./DCM_2_0_grammarParser";
import { Kf_zeile_liste_rContext } from "./DCM_2_0_grammarParser";
import { Kf_zeile_liste_txContext } from "./DCM_2_0_grammarParser";
import { RealzahlContext } from "./DCM_2_0_grammarParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `DCM_2_0_grammarParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface DCM_2_0_grammarVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `DCM_2_0_grammarParser.konservierung`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKonservierung?: (ctx: KonservierungContext) => Result;

	/**
	 * Visit a parse tree produced by `DCM_2_0_grammarParser.kons_kopf`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKons_kopf?: (ctx: Kons_kopfContext) => Result;

	/**
	 * Visit a parse tree produced by `DCM_2_0_grammarParser.modulkopf_info`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitModulkopf_info?: (ctx: Modulkopf_infoContext) => Result;

	/**
	 * Visit a parse tree produced by `DCM_2_0_grammarParser.mod_zeile`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMod_zeile?: (ctx: Mod_zeileContext) => Result;

	/**
	 * Visit a parse tree produced by `DCM_2_0_grammarParser.mod_anf_zeile`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMod_anf_zeile?: (ctx: Mod_anf_zeileContext) => Result;

	/**
	 * Visit a parse tree produced by `DCM_2_0_grammarParser.mod_fort_zeile`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMod_fort_zeile?: (ctx: Mod_fort_zeileContext) => Result;

	/**
	 * Visit a parse tree produced by `DCM_2_0_grammarParser.mod_ele_name`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMod_ele_name?: (ctx: Mod_ele_nameContext) => Result;

	/**
	 * Visit a parse tree produced by `DCM_2_0_grammarParser.mod_ele_wert`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMod_ele_wert?: (ctx: Mod_ele_wertContext) => Result;

	/**
	 * Visit a parse tree produced by `DCM_2_0_grammarParser.funktionsdef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunktionsdef?: (ctx: FunktionsdefContext) => Result;

	/**
	 * Visit a parse tree produced by `DCM_2_0_grammarParser.funktionszeile`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunktionszeile?: (ctx: FunktionszeileContext) => Result;

	/**
	 * Visit a parse tree produced by `DCM_2_0_grammarParser.fkt_version`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFkt_version?: (ctx: Fkt_versionContext) => Result;

	/**
	 * Visit a parse tree produced by `DCM_2_0_grammarParser.fkt_langname`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFkt_langname?: (ctx: Fkt_langnameContext) => Result;

	/**
	 * Visit a parse tree produced by `DCM_2_0_grammarParser.variantendef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariantendef?: (ctx: VariantendefContext) => Result;

	/**
	 * Visit a parse tree produced by `DCM_2_0_grammarParser.variantenkrit`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariantenkrit?: (ctx: VariantenkritContext) => Result;

	/**
	 * Visit a parse tree produced by `DCM_2_0_grammarParser.krit_name`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKrit_name?: (ctx: Krit_nameContext) => Result;

	/**
	 * Visit a parse tree produced by `DCM_2_0_grammarParser.krit_wert`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKrit_wert?: (ctx: Krit_wertContext) => Result;

	/**
	 * Visit a parse tree produced by `DCM_2_0_grammarParser.kons_rumpf`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKons_rumpf?: (ctx: Kons_rumpfContext) => Result;

	/**
	 * Visit a parse tree produced by `DCM_2_0_grammarParser.kenngroesse`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKenngroesse?: (ctx: KenngroesseContext) => Result;

	/**
	 * Visit a parse tree produced by `DCM_2_0_grammarParser.kennwert`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKennwert?: (ctx: KennwertContext) => Result;

	/**
	 * Visit a parse tree produced by `DCM_2_0_grammarParser.kennwerteblock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKennwerteblock?: (ctx: KennwerteblockContext) => Result;

	/**
	 * Visit a parse tree produced by `DCM_2_0_grammarParser.kennlinie`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKennlinie?: (ctx: KennlinieContext) => Result;

	/**
	 * Visit a parse tree produced by `DCM_2_0_grammarParser.kennfeld`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKennfeld?: (ctx: KennfeldContext) => Result;

	/**
	 * Visit a parse tree produced by `DCM_2_0_grammarParser.gruppenstuetzstellen`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGruppenstuetzstellen?: (ctx: GruppenstuetzstellenContext) => Result;

	/**
	 * Visit a parse tree produced by `DCM_2_0_grammarParser.kenntext`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKenntext?: (ctx: KenntextContext) => Result;

	/**
	 * Visit a parse tree produced by `DCM_2_0_grammarParser.kgr_info`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKgr_info?: (ctx: Kgr_infoContext) => Result;

	/**
	 * Visit a parse tree produced by `DCM_2_0_grammarParser.einheit_x`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEinheit_x?: (ctx: Einheit_xContext) => Result;

	/**
	 * Visit a parse tree produced by `DCM_2_0_grammarParser.einheit_y`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEinheit_y?: (ctx: Einheit_yContext) => Result;

	/**
	 * Visit a parse tree produced by `DCM_2_0_grammarParser.einheit_w`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEinheit_w?: (ctx: Einheit_wContext) => Result;

	/**
	 * Visit a parse tree produced by `DCM_2_0_grammarParser.langname`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLangname?: (ctx: LangnameContext) => Result;

	/**
	 * Visit a parse tree produced by `DCM_2_0_grammarParser.displayname`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDisplayname?: (ctx: DisplaynameContext) => Result;

	/**
	 * Visit a parse tree produced by `DCM_2_0_grammarParser.var_abhangigkeiten`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVar_abhangigkeiten?: (ctx: Var_abhangigkeitenContext) => Result;

	/**
	 * Visit a parse tree produced by `DCM_2_0_grammarParser.var_abh`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVar_abh?: (ctx: Var_abhContext) => Result;

	/**
	 * Visit a parse tree produced by `DCM_2_0_grammarParser.funktionszugehorigkeit`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunktionszugehorigkeit?: (ctx: FunktionszugehorigkeitContext) => Result;

	/**
	 * Visit a parse tree produced by `DCM_2_0_grammarParser.anzahl_x`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnzahl_x?: (ctx: Anzahl_xContext) => Result;

	/**
	 * Visit a parse tree produced by `DCM_2_0_grammarParser.anzahl_y`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnzahl_y?: (ctx: Anzahl_yContext) => Result;

	/**
	 * Visit a parse tree produced by `DCM_2_0_grammarParser.werteliste`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWerteliste?: (ctx: WertelisteContext) => Result;

	/**
	 * Visit a parse tree produced by `DCM_2_0_grammarParser.werteliste_kwb`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWerteliste_kwb?: (ctx: Werteliste_kwbContext) => Result;

	/**
	 * Visit a parse tree produced by `DCM_2_0_grammarParser.sst_liste_x`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSst_liste_x?: (ctx: Sst_liste_xContext) => Result;

	/**
	 * Visit a parse tree produced by `DCM_2_0_grammarParser.kf_zeile_liste`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKf_zeile_liste?: (ctx: Kf_zeile_listeContext) => Result;

	/**
	 * Visit a parse tree produced by `DCM_2_0_grammarParser.kf_zeile_liste_r`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKf_zeile_liste_r?: (ctx: Kf_zeile_liste_rContext) => Result;

	/**
	 * Visit a parse tree produced by `DCM_2_0_grammarParser.kf_zeile_liste_tx`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKf_zeile_liste_tx?: (ctx: Kf_zeile_liste_txContext) => Result;

	/**
	 * Visit a parse tree produced by `DCM_2_0_grammarParser.realzahl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRealzahl?: (ctx: RealzahlContext) => Result;
}

