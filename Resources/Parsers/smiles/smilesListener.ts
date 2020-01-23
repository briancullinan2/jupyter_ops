// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/smiles/smiles.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

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
 * This interface defines a complete listener for a parse tree produced by
 * `smilesParser`.
 */
export interface smilesListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `smilesParser.smiles`.
	 * @param ctx the parse tree
	 */
	enterSmiles?: (ctx: SmilesContext) => void;
	/**
	 * Exit a parse tree produced by `smilesParser.smiles`.
	 * @param ctx the parse tree
	 */
	exitSmiles?: (ctx: SmilesContext) => void;

	/**
	 * Enter a parse tree produced by `smilesParser.atom`.
	 * @param ctx the parse tree
	 */
	enterAtom?: (ctx: AtomContext) => void;
	/**
	 * Exit a parse tree produced by `smilesParser.atom`.
	 * @param ctx the parse tree
	 */
	exitAtom?: (ctx: AtomContext) => void;

	/**
	 * Enter a parse tree produced by `smilesParser.aliphatic_organic`.
	 * @param ctx the parse tree
	 */
	enterAliphatic_organic?: (ctx: Aliphatic_organicContext) => void;
	/**
	 * Exit a parse tree produced by `smilesParser.aliphatic_organic`.
	 * @param ctx the parse tree
	 */
	exitAliphatic_organic?: (ctx: Aliphatic_organicContext) => void;

	/**
	 * Enter a parse tree produced by `smilesParser.aromatic_organic`.
	 * @param ctx the parse tree
	 */
	enterAromatic_organic?: (ctx: Aromatic_organicContext) => void;
	/**
	 * Exit a parse tree produced by `smilesParser.aromatic_organic`.
	 * @param ctx the parse tree
	 */
	exitAromatic_organic?: (ctx: Aromatic_organicContext) => void;

	/**
	 * Enter a parse tree produced by `smilesParser.bracket_atom`.
	 * @param ctx the parse tree
	 */
	enterBracket_atom?: (ctx: Bracket_atomContext) => void;
	/**
	 * Exit a parse tree produced by `smilesParser.bracket_atom`.
	 * @param ctx the parse tree
	 */
	exitBracket_atom?: (ctx: Bracket_atomContext) => void;

	/**
	 * Enter a parse tree produced by `smilesParser.symbol`.
	 * @param ctx the parse tree
	 */
	enterSymbol?: (ctx: SymbolContext) => void;
	/**
	 * Exit a parse tree produced by `smilesParser.symbol`.
	 * @param ctx the parse tree
	 */
	exitSymbol?: (ctx: SymbolContext) => void;

	/**
	 * Enter a parse tree produced by `smilesParser.isotope`.
	 * @param ctx the parse tree
	 */
	enterIsotope?: (ctx: IsotopeContext) => void;
	/**
	 * Exit a parse tree produced by `smilesParser.isotope`.
	 * @param ctx the parse tree
	 */
	exitIsotope?: (ctx: IsotopeContext) => void;

	/**
	 * Enter a parse tree produced by `smilesParser.element_symbols`.
	 * @param ctx the parse tree
	 */
	enterElement_symbols?: (ctx: Element_symbolsContext) => void;
	/**
	 * Exit a parse tree produced by `smilesParser.element_symbols`.
	 * @param ctx the parse tree
	 */
	exitElement_symbols?: (ctx: Element_symbolsContext) => void;

	/**
	 * Enter a parse tree produced by `smilesParser.aromatic_symbols`.
	 * @param ctx the parse tree
	 */
	enterAromatic_symbols?: (ctx: Aromatic_symbolsContext) => void;
	/**
	 * Exit a parse tree produced by `smilesParser.aromatic_symbols`.
	 * @param ctx the parse tree
	 */
	exitAromatic_symbols?: (ctx: Aromatic_symbolsContext) => void;

	/**
	 * Enter a parse tree produced by `smilesParser.chiral`.
	 * @param ctx the parse tree
	 */
	enterChiral?: (ctx: ChiralContext) => void;
	/**
	 * Exit a parse tree produced by `smilesParser.chiral`.
	 * @param ctx the parse tree
	 */
	exitChiral?: (ctx: ChiralContext) => void;

	/**
	 * Enter a parse tree produced by `smilesParser.hcount`.
	 * @param ctx the parse tree
	 */
	enterHcount?: (ctx: HcountContext) => void;
	/**
	 * Exit a parse tree produced by `smilesParser.hcount`.
	 * @param ctx the parse tree
	 */
	exitHcount?: (ctx: HcountContext) => void;

	/**
	 * Enter a parse tree produced by `smilesParser.charge`.
	 * @param ctx the parse tree
	 */
	enterCharge?: (ctx: ChargeContext) => void;
	/**
	 * Exit a parse tree produced by `smilesParser.charge`.
	 * @param ctx the parse tree
	 */
	exitCharge?: (ctx: ChargeContext) => void;

	/**
	 * Enter a parse tree produced by `smilesParser.class_`.
	 * @param ctx the parse tree
	 */
	enterClass_?: (ctx: Class_Context) => void;
	/**
	 * Exit a parse tree produced by `smilesParser.class_`.
	 * @param ctx the parse tree
	 */
	exitClass_?: (ctx: Class_Context) => void;

	/**
	 * Enter a parse tree produced by `smilesParser.bond`.
	 * @param ctx the parse tree
	 */
	enterBond?: (ctx: BondContext) => void;
	/**
	 * Exit a parse tree produced by `smilesParser.bond`.
	 * @param ctx the parse tree
	 */
	exitBond?: (ctx: BondContext) => void;

	/**
	 * Enter a parse tree produced by `smilesParser.ringbond`.
	 * @param ctx the parse tree
	 */
	enterRingbond?: (ctx: RingbondContext) => void;
	/**
	 * Exit a parse tree produced by `smilesParser.ringbond`.
	 * @param ctx the parse tree
	 */
	exitRingbond?: (ctx: RingbondContext) => void;

	/**
	 * Enter a parse tree produced by `smilesParser.branched_atom`.
	 * @param ctx the parse tree
	 */
	enterBranched_atom?: (ctx: Branched_atomContext) => void;
	/**
	 * Exit a parse tree produced by `smilesParser.branched_atom`.
	 * @param ctx the parse tree
	 */
	exitBranched_atom?: (ctx: Branched_atomContext) => void;

	/**
	 * Enter a parse tree produced by `smilesParser.branch`.
	 * @param ctx the parse tree
	 */
	enterBranch?: (ctx: BranchContext) => void;
	/**
	 * Exit a parse tree produced by `smilesParser.branch`.
	 * @param ctx the parse tree
	 */
	exitBranch?: (ctx: BranchContext) => void;

	/**
	 * Enter a parse tree produced by `smilesParser.chain`.
	 * @param ctx the parse tree
	 */
	enterChain?: (ctx: ChainContext) => void;
	/**
	 * Exit a parse tree produced by `smilesParser.chain`.
	 * @param ctx the parse tree
	 */
	exitChain?: (ctx: ChainContext) => void;

	/**
	 * Enter a parse tree produced by `smilesParser.terminator`.
	 * @param ctx the parse tree
	 */
	enterTerminator?: (ctx: TerminatorContext) => void;
	/**
	 * Exit a parse tree produced by `smilesParser.terminator`.
	 * @param ctx the parse tree
	 */
	exitTerminator?: (ctx: TerminatorContext) => void;
}

