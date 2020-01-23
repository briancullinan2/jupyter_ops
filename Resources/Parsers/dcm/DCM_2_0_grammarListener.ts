// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/dcm/DCM_2_0_grammar.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

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
 * This interface defines a complete listener for a parse tree produced by
 * `DCM_2_0_grammarParser`.
 */
export interface DCM_2_0_grammarListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `DCM_2_0_grammarParser.konservierung`.
	 * @param ctx the parse tree
	 */
	enterKonservierung?: (ctx: KonservierungContext) => void;
	/**
	 * Exit a parse tree produced by `DCM_2_0_grammarParser.konservierung`.
	 * @param ctx the parse tree
	 */
	exitKonservierung?: (ctx: KonservierungContext) => void;

	/**
	 * Enter a parse tree produced by `DCM_2_0_grammarParser.kons_kopf`.
	 * @param ctx the parse tree
	 */
	enterKons_kopf?: (ctx: Kons_kopfContext) => void;
	/**
	 * Exit a parse tree produced by `DCM_2_0_grammarParser.kons_kopf`.
	 * @param ctx the parse tree
	 */
	exitKons_kopf?: (ctx: Kons_kopfContext) => void;

	/**
	 * Enter a parse tree produced by `DCM_2_0_grammarParser.modulkopf_info`.
	 * @param ctx the parse tree
	 */
	enterModulkopf_info?: (ctx: Modulkopf_infoContext) => void;
	/**
	 * Exit a parse tree produced by `DCM_2_0_grammarParser.modulkopf_info`.
	 * @param ctx the parse tree
	 */
	exitModulkopf_info?: (ctx: Modulkopf_infoContext) => void;

	/**
	 * Enter a parse tree produced by `DCM_2_0_grammarParser.mod_zeile`.
	 * @param ctx the parse tree
	 */
	enterMod_zeile?: (ctx: Mod_zeileContext) => void;
	/**
	 * Exit a parse tree produced by `DCM_2_0_grammarParser.mod_zeile`.
	 * @param ctx the parse tree
	 */
	exitMod_zeile?: (ctx: Mod_zeileContext) => void;

	/**
	 * Enter a parse tree produced by `DCM_2_0_grammarParser.mod_anf_zeile`.
	 * @param ctx the parse tree
	 */
	enterMod_anf_zeile?: (ctx: Mod_anf_zeileContext) => void;
	/**
	 * Exit a parse tree produced by `DCM_2_0_grammarParser.mod_anf_zeile`.
	 * @param ctx the parse tree
	 */
	exitMod_anf_zeile?: (ctx: Mod_anf_zeileContext) => void;

	/**
	 * Enter a parse tree produced by `DCM_2_0_grammarParser.mod_fort_zeile`.
	 * @param ctx the parse tree
	 */
	enterMod_fort_zeile?: (ctx: Mod_fort_zeileContext) => void;
	/**
	 * Exit a parse tree produced by `DCM_2_0_grammarParser.mod_fort_zeile`.
	 * @param ctx the parse tree
	 */
	exitMod_fort_zeile?: (ctx: Mod_fort_zeileContext) => void;

	/**
	 * Enter a parse tree produced by `DCM_2_0_grammarParser.mod_ele_name`.
	 * @param ctx the parse tree
	 */
	enterMod_ele_name?: (ctx: Mod_ele_nameContext) => void;
	/**
	 * Exit a parse tree produced by `DCM_2_0_grammarParser.mod_ele_name`.
	 * @param ctx the parse tree
	 */
	exitMod_ele_name?: (ctx: Mod_ele_nameContext) => void;

	/**
	 * Enter a parse tree produced by `DCM_2_0_grammarParser.mod_ele_wert`.
	 * @param ctx the parse tree
	 */
	enterMod_ele_wert?: (ctx: Mod_ele_wertContext) => void;
	/**
	 * Exit a parse tree produced by `DCM_2_0_grammarParser.mod_ele_wert`.
	 * @param ctx the parse tree
	 */
	exitMod_ele_wert?: (ctx: Mod_ele_wertContext) => void;

	/**
	 * Enter a parse tree produced by `DCM_2_0_grammarParser.funktionsdef`.
	 * @param ctx the parse tree
	 */
	enterFunktionsdef?: (ctx: FunktionsdefContext) => void;
	/**
	 * Exit a parse tree produced by `DCM_2_0_grammarParser.funktionsdef`.
	 * @param ctx the parse tree
	 */
	exitFunktionsdef?: (ctx: FunktionsdefContext) => void;

	/**
	 * Enter a parse tree produced by `DCM_2_0_grammarParser.funktionszeile`.
	 * @param ctx the parse tree
	 */
	enterFunktionszeile?: (ctx: FunktionszeileContext) => void;
	/**
	 * Exit a parse tree produced by `DCM_2_0_grammarParser.funktionszeile`.
	 * @param ctx the parse tree
	 */
	exitFunktionszeile?: (ctx: FunktionszeileContext) => void;

	/**
	 * Enter a parse tree produced by `DCM_2_0_grammarParser.fkt_version`.
	 * @param ctx the parse tree
	 */
	enterFkt_version?: (ctx: Fkt_versionContext) => void;
	/**
	 * Exit a parse tree produced by `DCM_2_0_grammarParser.fkt_version`.
	 * @param ctx the parse tree
	 */
	exitFkt_version?: (ctx: Fkt_versionContext) => void;

	/**
	 * Enter a parse tree produced by `DCM_2_0_grammarParser.fkt_langname`.
	 * @param ctx the parse tree
	 */
	enterFkt_langname?: (ctx: Fkt_langnameContext) => void;
	/**
	 * Exit a parse tree produced by `DCM_2_0_grammarParser.fkt_langname`.
	 * @param ctx the parse tree
	 */
	exitFkt_langname?: (ctx: Fkt_langnameContext) => void;

	/**
	 * Enter a parse tree produced by `DCM_2_0_grammarParser.variantendef`.
	 * @param ctx the parse tree
	 */
	enterVariantendef?: (ctx: VariantendefContext) => void;
	/**
	 * Exit a parse tree produced by `DCM_2_0_grammarParser.variantendef`.
	 * @param ctx the parse tree
	 */
	exitVariantendef?: (ctx: VariantendefContext) => void;

	/**
	 * Enter a parse tree produced by `DCM_2_0_grammarParser.variantenkrit`.
	 * @param ctx the parse tree
	 */
	enterVariantenkrit?: (ctx: VariantenkritContext) => void;
	/**
	 * Exit a parse tree produced by `DCM_2_0_grammarParser.variantenkrit`.
	 * @param ctx the parse tree
	 */
	exitVariantenkrit?: (ctx: VariantenkritContext) => void;

	/**
	 * Enter a parse tree produced by `DCM_2_0_grammarParser.krit_name`.
	 * @param ctx the parse tree
	 */
	enterKrit_name?: (ctx: Krit_nameContext) => void;
	/**
	 * Exit a parse tree produced by `DCM_2_0_grammarParser.krit_name`.
	 * @param ctx the parse tree
	 */
	exitKrit_name?: (ctx: Krit_nameContext) => void;

	/**
	 * Enter a parse tree produced by `DCM_2_0_grammarParser.krit_wert`.
	 * @param ctx the parse tree
	 */
	enterKrit_wert?: (ctx: Krit_wertContext) => void;
	/**
	 * Exit a parse tree produced by `DCM_2_0_grammarParser.krit_wert`.
	 * @param ctx the parse tree
	 */
	exitKrit_wert?: (ctx: Krit_wertContext) => void;

	/**
	 * Enter a parse tree produced by `DCM_2_0_grammarParser.kons_rumpf`.
	 * @param ctx the parse tree
	 */
	enterKons_rumpf?: (ctx: Kons_rumpfContext) => void;
	/**
	 * Exit a parse tree produced by `DCM_2_0_grammarParser.kons_rumpf`.
	 * @param ctx the parse tree
	 */
	exitKons_rumpf?: (ctx: Kons_rumpfContext) => void;

	/**
	 * Enter a parse tree produced by `DCM_2_0_grammarParser.kenngroesse`.
	 * @param ctx the parse tree
	 */
	enterKenngroesse?: (ctx: KenngroesseContext) => void;
	/**
	 * Exit a parse tree produced by `DCM_2_0_grammarParser.kenngroesse`.
	 * @param ctx the parse tree
	 */
	exitKenngroesse?: (ctx: KenngroesseContext) => void;

	/**
	 * Enter a parse tree produced by `DCM_2_0_grammarParser.kennwert`.
	 * @param ctx the parse tree
	 */
	enterKennwert?: (ctx: KennwertContext) => void;
	/**
	 * Exit a parse tree produced by `DCM_2_0_grammarParser.kennwert`.
	 * @param ctx the parse tree
	 */
	exitKennwert?: (ctx: KennwertContext) => void;

	/**
	 * Enter a parse tree produced by `DCM_2_0_grammarParser.kennwerteblock`.
	 * @param ctx the parse tree
	 */
	enterKennwerteblock?: (ctx: KennwerteblockContext) => void;
	/**
	 * Exit a parse tree produced by `DCM_2_0_grammarParser.kennwerteblock`.
	 * @param ctx the parse tree
	 */
	exitKennwerteblock?: (ctx: KennwerteblockContext) => void;

	/**
	 * Enter a parse tree produced by `DCM_2_0_grammarParser.kennlinie`.
	 * @param ctx the parse tree
	 */
	enterKennlinie?: (ctx: KennlinieContext) => void;
	/**
	 * Exit a parse tree produced by `DCM_2_0_grammarParser.kennlinie`.
	 * @param ctx the parse tree
	 */
	exitKennlinie?: (ctx: KennlinieContext) => void;

	/**
	 * Enter a parse tree produced by `DCM_2_0_grammarParser.kennfeld`.
	 * @param ctx the parse tree
	 */
	enterKennfeld?: (ctx: KennfeldContext) => void;
	/**
	 * Exit a parse tree produced by `DCM_2_0_grammarParser.kennfeld`.
	 * @param ctx the parse tree
	 */
	exitKennfeld?: (ctx: KennfeldContext) => void;

	/**
	 * Enter a parse tree produced by `DCM_2_0_grammarParser.gruppenstuetzstellen`.
	 * @param ctx the parse tree
	 */
	enterGruppenstuetzstellen?: (ctx: GruppenstuetzstellenContext) => void;
	/**
	 * Exit a parse tree produced by `DCM_2_0_grammarParser.gruppenstuetzstellen`.
	 * @param ctx the parse tree
	 */
	exitGruppenstuetzstellen?: (ctx: GruppenstuetzstellenContext) => void;

	/**
	 * Enter a parse tree produced by `DCM_2_0_grammarParser.kenntext`.
	 * @param ctx the parse tree
	 */
	enterKenntext?: (ctx: KenntextContext) => void;
	/**
	 * Exit a parse tree produced by `DCM_2_0_grammarParser.kenntext`.
	 * @param ctx the parse tree
	 */
	exitKenntext?: (ctx: KenntextContext) => void;

	/**
	 * Enter a parse tree produced by `DCM_2_0_grammarParser.kgr_info`.
	 * @param ctx the parse tree
	 */
	enterKgr_info?: (ctx: Kgr_infoContext) => void;
	/**
	 * Exit a parse tree produced by `DCM_2_0_grammarParser.kgr_info`.
	 * @param ctx the parse tree
	 */
	exitKgr_info?: (ctx: Kgr_infoContext) => void;

	/**
	 * Enter a parse tree produced by `DCM_2_0_grammarParser.einheit_x`.
	 * @param ctx the parse tree
	 */
	enterEinheit_x?: (ctx: Einheit_xContext) => void;
	/**
	 * Exit a parse tree produced by `DCM_2_0_grammarParser.einheit_x`.
	 * @param ctx the parse tree
	 */
	exitEinheit_x?: (ctx: Einheit_xContext) => void;

	/**
	 * Enter a parse tree produced by `DCM_2_0_grammarParser.einheit_y`.
	 * @param ctx the parse tree
	 */
	enterEinheit_y?: (ctx: Einheit_yContext) => void;
	/**
	 * Exit a parse tree produced by `DCM_2_0_grammarParser.einheit_y`.
	 * @param ctx the parse tree
	 */
	exitEinheit_y?: (ctx: Einheit_yContext) => void;

	/**
	 * Enter a parse tree produced by `DCM_2_0_grammarParser.einheit_w`.
	 * @param ctx the parse tree
	 */
	enterEinheit_w?: (ctx: Einheit_wContext) => void;
	/**
	 * Exit a parse tree produced by `DCM_2_0_grammarParser.einheit_w`.
	 * @param ctx the parse tree
	 */
	exitEinheit_w?: (ctx: Einheit_wContext) => void;

	/**
	 * Enter a parse tree produced by `DCM_2_0_grammarParser.langname`.
	 * @param ctx the parse tree
	 */
	enterLangname?: (ctx: LangnameContext) => void;
	/**
	 * Exit a parse tree produced by `DCM_2_0_grammarParser.langname`.
	 * @param ctx the parse tree
	 */
	exitLangname?: (ctx: LangnameContext) => void;

	/**
	 * Enter a parse tree produced by `DCM_2_0_grammarParser.displayname`.
	 * @param ctx the parse tree
	 */
	enterDisplayname?: (ctx: DisplaynameContext) => void;
	/**
	 * Exit a parse tree produced by `DCM_2_0_grammarParser.displayname`.
	 * @param ctx the parse tree
	 */
	exitDisplayname?: (ctx: DisplaynameContext) => void;

	/**
	 * Enter a parse tree produced by `DCM_2_0_grammarParser.var_abhangigkeiten`.
	 * @param ctx the parse tree
	 */
	enterVar_abhangigkeiten?: (ctx: Var_abhangigkeitenContext) => void;
	/**
	 * Exit a parse tree produced by `DCM_2_0_grammarParser.var_abhangigkeiten`.
	 * @param ctx the parse tree
	 */
	exitVar_abhangigkeiten?: (ctx: Var_abhangigkeitenContext) => void;

	/**
	 * Enter a parse tree produced by `DCM_2_0_grammarParser.var_abh`.
	 * @param ctx the parse tree
	 */
	enterVar_abh?: (ctx: Var_abhContext) => void;
	/**
	 * Exit a parse tree produced by `DCM_2_0_grammarParser.var_abh`.
	 * @param ctx the parse tree
	 */
	exitVar_abh?: (ctx: Var_abhContext) => void;

	/**
	 * Enter a parse tree produced by `DCM_2_0_grammarParser.funktionszugehorigkeit`.
	 * @param ctx the parse tree
	 */
	enterFunktionszugehorigkeit?: (ctx: FunktionszugehorigkeitContext) => void;
	/**
	 * Exit a parse tree produced by `DCM_2_0_grammarParser.funktionszugehorigkeit`.
	 * @param ctx the parse tree
	 */
	exitFunktionszugehorigkeit?: (ctx: FunktionszugehorigkeitContext) => void;

	/**
	 * Enter a parse tree produced by `DCM_2_0_grammarParser.anzahl_x`.
	 * @param ctx the parse tree
	 */
	enterAnzahl_x?: (ctx: Anzahl_xContext) => void;
	/**
	 * Exit a parse tree produced by `DCM_2_0_grammarParser.anzahl_x`.
	 * @param ctx the parse tree
	 */
	exitAnzahl_x?: (ctx: Anzahl_xContext) => void;

	/**
	 * Enter a parse tree produced by `DCM_2_0_grammarParser.anzahl_y`.
	 * @param ctx the parse tree
	 */
	enterAnzahl_y?: (ctx: Anzahl_yContext) => void;
	/**
	 * Exit a parse tree produced by `DCM_2_0_grammarParser.anzahl_y`.
	 * @param ctx the parse tree
	 */
	exitAnzahl_y?: (ctx: Anzahl_yContext) => void;

	/**
	 * Enter a parse tree produced by `DCM_2_0_grammarParser.werteliste`.
	 * @param ctx the parse tree
	 */
	enterWerteliste?: (ctx: WertelisteContext) => void;
	/**
	 * Exit a parse tree produced by `DCM_2_0_grammarParser.werteliste`.
	 * @param ctx the parse tree
	 */
	exitWerteliste?: (ctx: WertelisteContext) => void;

	/**
	 * Enter a parse tree produced by `DCM_2_0_grammarParser.werteliste_kwb`.
	 * @param ctx the parse tree
	 */
	enterWerteliste_kwb?: (ctx: Werteliste_kwbContext) => void;
	/**
	 * Exit a parse tree produced by `DCM_2_0_grammarParser.werteliste_kwb`.
	 * @param ctx the parse tree
	 */
	exitWerteliste_kwb?: (ctx: Werteliste_kwbContext) => void;

	/**
	 * Enter a parse tree produced by `DCM_2_0_grammarParser.sst_liste_x`.
	 * @param ctx the parse tree
	 */
	enterSst_liste_x?: (ctx: Sst_liste_xContext) => void;
	/**
	 * Exit a parse tree produced by `DCM_2_0_grammarParser.sst_liste_x`.
	 * @param ctx the parse tree
	 */
	exitSst_liste_x?: (ctx: Sst_liste_xContext) => void;

	/**
	 * Enter a parse tree produced by `DCM_2_0_grammarParser.kf_zeile_liste`.
	 * @param ctx the parse tree
	 */
	enterKf_zeile_liste?: (ctx: Kf_zeile_listeContext) => void;
	/**
	 * Exit a parse tree produced by `DCM_2_0_grammarParser.kf_zeile_liste`.
	 * @param ctx the parse tree
	 */
	exitKf_zeile_liste?: (ctx: Kf_zeile_listeContext) => void;

	/**
	 * Enter a parse tree produced by `DCM_2_0_grammarParser.kf_zeile_liste_r`.
	 * @param ctx the parse tree
	 */
	enterKf_zeile_liste_r?: (ctx: Kf_zeile_liste_rContext) => void;
	/**
	 * Exit a parse tree produced by `DCM_2_0_grammarParser.kf_zeile_liste_r`.
	 * @param ctx the parse tree
	 */
	exitKf_zeile_liste_r?: (ctx: Kf_zeile_liste_rContext) => void;

	/**
	 * Enter a parse tree produced by `DCM_2_0_grammarParser.kf_zeile_liste_tx`.
	 * @param ctx the parse tree
	 */
	enterKf_zeile_liste_tx?: (ctx: Kf_zeile_liste_txContext) => void;
	/**
	 * Exit a parse tree produced by `DCM_2_0_grammarParser.kf_zeile_liste_tx`.
	 * @param ctx the parse tree
	 */
	exitKf_zeile_liste_tx?: (ctx: Kf_zeile_liste_txContext) => void;

	/**
	 * Enter a parse tree produced by `DCM_2_0_grammarParser.realzahl`.
	 * @param ctx the parse tree
	 */
	enterRealzahl?: (ctx: RealzahlContext) => void;
	/**
	 * Exit a parse tree produced by `DCM_2_0_grammarParser.realzahl`.
	 * @param ctx the parse tree
	 */
	exitRealzahl?: (ctx: RealzahlContext) => void;
}

