// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/smiles/smiles.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { SmilesContext } from "./smilesParser";
import { AtomContext } from "./smilesParser";
import { Aliphatic_organicContext } from "./smilesParser";
import { Aromatic_organicContext } from "./smilesParser";
import { Bracket_atomContext } from "./smilesParser";
import { SymbolContext } from "./smilesParser";
import { IsotopeContext } from "./smilesParser";
import { Element_symbolsContext } from "./smilesParser";
import { Aromatic_symbolsContext } from "./smilesParser";
import { ChiralContext } from "./smilesParser";
import { HcountContext } from "./smilesParser";
import { ChargeContext } from "./smilesParser";
import { Class_Context } from "./smilesParser";
import { BondContext } from "./smilesParser";
import { RingbondContext } from "./smilesParser";
import { Branched_atomContext } from "./smilesParser";
import { BranchContext } from "./smilesParser";
import { ChainContext } from "./smilesParser";
import { TerminatorContext } from "./smilesParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `smilesParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface smilesVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `smilesParser.smiles`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSmiles?: (ctx: SmilesContext) => Result;

	/**
	 * Visit a parse tree produced by `smilesParser.atom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAtom?: (ctx: AtomContext) => Result;

	/**
	 * Visit a parse tree produced by `smilesParser.aliphatic_organic`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAliphatic_organic?: (ctx: Aliphatic_organicContext) => Result;

	/**
	 * Visit a parse tree produced by `smilesParser.aromatic_organic`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAromatic_organic?: (ctx: Aromatic_organicContext) => Result;

	/**
	 * Visit a parse tree produced by `smilesParser.bracket_atom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBracket_atom?: (ctx: Bracket_atomContext) => Result;

	/**
	 * Visit a parse tree produced by `smilesParser.symbol`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSymbol?: (ctx: SymbolContext) => Result;

	/**
	 * Visit a parse tree produced by `smilesParser.isotope`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIsotope?: (ctx: IsotopeContext) => Result;

	/**
	 * Visit a parse tree produced by `smilesParser.element_symbols`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElement_symbols?: (ctx: Element_symbolsContext) => Result;

	/**
	 * Visit a parse tree produced by `smilesParser.aromatic_symbols`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAromatic_symbols?: (ctx: Aromatic_symbolsContext) => Result;

	/**
	 * Visit a parse tree produced by `smilesParser.chiral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitChiral?: (ctx: ChiralContext) => Result;

	/**
	 * Visit a parse tree produced by `smilesParser.hcount`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHcount?: (ctx: HcountContext) => Result;

	/**
	 * Visit a parse tree produced by `smilesParser.charge`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCharge?: (ctx: ChargeContext) => Result;

	/**
	 * Visit a parse tree produced by `smilesParser.class_`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClass_?: (ctx: Class_Context) => Result;

	/**
	 * Visit a parse tree produced by `smilesParser.bond`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBond?: (ctx: BondContext) => Result;

	/**
	 * Visit a parse tree produced by `smilesParser.ringbond`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRingbond?: (ctx: RingbondContext) => Result;

	/**
	 * Visit a parse tree produced by `smilesParser.branched_atom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBranched_atom?: (ctx: Branched_atomContext) => Result;

	/**
	 * Visit a parse tree produced by `smilesParser.branch`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBranch?: (ctx: BranchContext) => Result;

	/**
	 * Visit a parse tree produced by `smilesParser.chain`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitChain?: (ctx: ChainContext) => Result;

	/**
	 * Visit a parse tree produced by `smilesParser.terminator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTerminator?: (ctx: TerminatorContext) => Result;
}

