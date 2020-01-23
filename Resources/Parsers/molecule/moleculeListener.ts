// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/molecule/molecule.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { MoleculeContext } from "./moleculeParser";
import { PartContext } from "./moleculeParser";
import { StructureContext } from "./moleculeParser";
import { SymbolContext } from "./moleculeParser";
import { GroupContext } from "./moleculeParser";
import { IonContext } from "./moleculeParser";
import { ElementContext } from "./moleculeParser";
import { CountContext } from "./moleculeParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `moleculeParser`.
 */
export interface moleculeListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `moleculeParser.molecule`.
	 * @param ctx the parse tree
	 */
	enterMolecule?: (ctx: MoleculeContext) => void;
	/**
	 * Exit a parse tree produced by `moleculeParser.molecule`.
	 * @param ctx the parse tree
	 */
	exitMolecule?: (ctx: MoleculeContext) => void;

	/**
	 * Enter a parse tree produced by `moleculeParser.part`.
	 * @param ctx the parse tree
	 */
	enterPart?: (ctx: PartContext) => void;
	/**
	 * Exit a parse tree produced by `moleculeParser.part`.
	 * @param ctx the parse tree
	 */
	exitPart?: (ctx: PartContext) => void;

	/**
	 * Enter a parse tree produced by `moleculeParser.structure`.
	 * @param ctx the parse tree
	 */
	enterStructure?: (ctx: StructureContext) => void;
	/**
	 * Exit a parse tree produced by `moleculeParser.structure`.
	 * @param ctx the parse tree
	 */
	exitStructure?: (ctx: StructureContext) => void;

	/**
	 * Enter a parse tree produced by `moleculeParser.symbol`.
	 * @param ctx the parse tree
	 */
	enterSymbol?: (ctx: SymbolContext) => void;
	/**
	 * Exit a parse tree produced by `moleculeParser.symbol`.
	 * @param ctx the parse tree
	 */
	exitSymbol?: (ctx: SymbolContext) => void;

	/**
	 * Enter a parse tree produced by `moleculeParser.group`.
	 * @param ctx the parse tree
	 */
	enterGroup?: (ctx: GroupContext) => void;
	/**
	 * Exit a parse tree produced by `moleculeParser.group`.
	 * @param ctx the parse tree
	 */
	exitGroup?: (ctx: GroupContext) => void;

	/**
	 * Enter a parse tree produced by `moleculeParser.ion`.
	 * @param ctx the parse tree
	 */
	enterIon?: (ctx: IonContext) => void;
	/**
	 * Exit a parse tree produced by `moleculeParser.ion`.
	 * @param ctx the parse tree
	 */
	exitIon?: (ctx: IonContext) => void;

	/**
	 * Enter a parse tree produced by `moleculeParser.element`.
	 * @param ctx the parse tree
	 */
	enterElement?: (ctx: ElementContext) => void;
	/**
	 * Exit a parse tree produced by `moleculeParser.element`.
	 * @param ctx the parse tree
	 */
	exitElement?: (ctx: ElementContext) => void;

	/**
	 * Enter a parse tree produced by `moleculeParser.count`.
	 * @param ctx the parse tree
	 */
	enterCount?: (ctx: CountContext) => void;
	/**
	 * Exit a parse tree produced by `moleculeParser.count`.
	 * @param ctx the parse tree
	 */
	exitCount?: (ctx: CountContext) => void;
}

