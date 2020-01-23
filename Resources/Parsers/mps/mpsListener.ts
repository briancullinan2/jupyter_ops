// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/mps/mps.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { ModellContext } from "./mpsParser";
import { FirstrowContext } from "./mpsParser";
import { RowsContext } from "./mpsParser";
import { ColumnsContext } from "./mpsParser";
import { RhsContext } from "./mpsParser";
import { RangesContext } from "./mpsParser";
import { BoundsContext } from "./mpsParser";
import { EndataContext } from "./mpsParser";
import { RowdatacardContext } from "./mpsParser";
import { ColumndatacardsContext } from "./mpsParser";
import { RhsdatacardsContext } from "./mpsParser";
import { RangesdatacardsContext } from "./mpsParser";
import { BoundsdatacardsContext } from "./mpsParser";
import { ColumndatacardContext } from "./mpsParser";
import { RhsdatacardContext } from "./mpsParser";
import { RangesdatacardContext } from "./mpsParser";
import { BoundsdatacardContext } from "./mpsParser";
import { IntblockContext } from "./mpsParser";
import { StartmarkerContext } from "./mpsParser";
import { EndmarkerContext } from "./mpsParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `mpsParser`.
 */
export interface mpsListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `mpsParser.modell`.
	 * @param ctx the parse tree
	 */
	enterModell?: (ctx: ModellContext) => void;
	/**
	 * Exit a parse tree produced by `mpsParser.modell`.
	 * @param ctx the parse tree
	 */
	exitModell?: (ctx: ModellContext) => void;

	/**
	 * Enter a parse tree produced by `mpsParser.firstrow`.
	 * @param ctx the parse tree
	 */
	enterFirstrow?: (ctx: FirstrowContext) => void;
	/**
	 * Exit a parse tree produced by `mpsParser.firstrow`.
	 * @param ctx the parse tree
	 */
	exitFirstrow?: (ctx: FirstrowContext) => void;

	/**
	 * Enter a parse tree produced by `mpsParser.rows`.
	 * @param ctx the parse tree
	 */
	enterRows?: (ctx: RowsContext) => void;
	/**
	 * Exit a parse tree produced by `mpsParser.rows`.
	 * @param ctx the parse tree
	 */
	exitRows?: (ctx: RowsContext) => void;

	/**
	 * Enter a parse tree produced by `mpsParser.columns`.
	 * @param ctx the parse tree
	 */
	enterColumns?: (ctx: ColumnsContext) => void;
	/**
	 * Exit a parse tree produced by `mpsParser.columns`.
	 * @param ctx the parse tree
	 */
	exitColumns?: (ctx: ColumnsContext) => void;

	/**
	 * Enter a parse tree produced by `mpsParser.rhs`.
	 * @param ctx the parse tree
	 */
	enterRhs?: (ctx: RhsContext) => void;
	/**
	 * Exit a parse tree produced by `mpsParser.rhs`.
	 * @param ctx the parse tree
	 */
	exitRhs?: (ctx: RhsContext) => void;

	/**
	 * Enter a parse tree produced by `mpsParser.ranges`.
	 * @param ctx the parse tree
	 */
	enterRanges?: (ctx: RangesContext) => void;
	/**
	 * Exit a parse tree produced by `mpsParser.ranges`.
	 * @param ctx the parse tree
	 */
	exitRanges?: (ctx: RangesContext) => void;

	/**
	 * Enter a parse tree produced by `mpsParser.bounds`.
	 * @param ctx the parse tree
	 */
	enterBounds?: (ctx: BoundsContext) => void;
	/**
	 * Exit a parse tree produced by `mpsParser.bounds`.
	 * @param ctx the parse tree
	 */
	exitBounds?: (ctx: BoundsContext) => void;

	/**
	 * Enter a parse tree produced by `mpsParser.endata`.
	 * @param ctx the parse tree
	 */
	enterEndata?: (ctx: EndataContext) => void;
	/**
	 * Exit a parse tree produced by `mpsParser.endata`.
	 * @param ctx the parse tree
	 */
	exitEndata?: (ctx: EndataContext) => void;

	/**
	 * Enter a parse tree produced by `mpsParser.rowdatacard`.
	 * @param ctx the parse tree
	 */
	enterRowdatacard?: (ctx: RowdatacardContext) => void;
	/**
	 * Exit a parse tree produced by `mpsParser.rowdatacard`.
	 * @param ctx the parse tree
	 */
	exitRowdatacard?: (ctx: RowdatacardContext) => void;

	/**
	 * Enter a parse tree produced by `mpsParser.columndatacards`.
	 * @param ctx the parse tree
	 */
	enterColumndatacards?: (ctx: ColumndatacardsContext) => void;
	/**
	 * Exit a parse tree produced by `mpsParser.columndatacards`.
	 * @param ctx the parse tree
	 */
	exitColumndatacards?: (ctx: ColumndatacardsContext) => void;

	/**
	 * Enter a parse tree produced by `mpsParser.rhsdatacards`.
	 * @param ctx the parse tree
	 */
	enterRhsdatacards?: (ctx: RhsdatacardsContext) => void;
	/**
	 * Exit a parse tree produced by `mpsParser.rhsdatacards`.
	 * @param ctx the parse tree
	 */
	exitRhsdatacards?: (ctx: RhsdatacardsContext) => void;

	/**
	 * Enter a parse tree produced by `mpsParser.rangesdatacards`.
	 * @param ctx the parse tree
	 */
	enterRangesdatacards?: (ctx: RangesdatacardsContext) => void;
	/**
	 * Exit a parse tree produced by `mpsParser.rangesdatacards`.
	 * @param ctx the parse tree
	 */
	exitRangesdatacards?: (ctx: RangesdatacardsContext) => void;

	/**
	 * Enter a parse tree produced by `mpsParser.boundsdatacards`.
	 * @param ctx the parse tree
	 */
	enterBoundsdatacards?: (ctx: BoundsdatacardsContext) => void;
	/**
	 * Exit a parse tree produced by `mpsParser.boundsdatacards`.
	 * @param ctx the parse tree
	 */
	exitBoundsdatacards?: (ctx: BoundsdatacardsContext) => void;

	/**
	 * Enter a parse tree produced by `mpsParser.columndatacard`.
	 * @param ctx the parse tree
	 */
	enterColumndatacard?: (ctx: ColumndatacardContext) => void;
	/**
	 * Exit a parse tree produced by `mpsParser.columndatacard`.
	 * @param ctx the parse tree
	 */
	exitColumndatacard?: (ctx: ColumndatacardContext) => void;

	/**
	 * Enter a parse tree produced by `mpsParser.rhsdatacard`.
	 * @param ctx the parse tree
	 */
	enterRhsdatacard?: (ctx: RhsdatacardContext) => void;
	/**
	 * Exit a parse tree produced by `mpsParser.rhsdatacard`.
	 * @param ctx the parse tree
	 */
	exitRhsdatacard?: (ctx: RhsdatacardContext) => void;

	/**
	 * Enter a parse tree produced by `mpsParser.rangesdatacard`.
	 * @param ctx the parse tree
	 */
	enterRangesdatacard?: (ctx: RangesdatacardContext) => void;
	/**
	 * Exit a parse tree produced by `mpsParser.rangesdatacard`.
	 * @param ctx the parse tree
	 */
	exitRangesdatacard?: (ctx: RangesdatacardContext) => void;

	/**
	 * Enter a parse tree produced by `mpsParser.boundsdatacard`.
	 * @param ctx the parse tree
	 */
	enterBoundsdatacard?: (ctx: BoundsdatacardContext) => void;
	/**
	 * Exit a parse tree produced by `mpsParser.boundsdatacard`.
	 * @param ctx the parse tree
	 */
	exitBoundsdatacard?: (ctx: BoundsdatacardContext) => void;

	/**
	 * Enter a parse tree produced by `mpsParser.intblock`.
	 * @param ctx the parse tree
	 */
	enterIntblock?: (ctx: IntblockContext) => void;
	/**
	 * Exit a parse tree produced by `mpsParser.intblock`.
	 * @param ctx the parse tree
	 */
	exitIntblock?: (ctx: IntblockContext) => void;

	/**
	 * Enter a parse tree produced by `mpsParser.startmarker`.
	 * @param ctx the parse tree
	 */
	enterStartmarker?: (ctx: StartmarkerContext) => void;
	/**
	 * Exit a parse tree produced by `mpsParser.startmarker`.
	 * @param ctx the parse tree
	 */
	exitStartmarker?: (ctx: StartmarkerContext) => void;

	/**
	 * Enter a parse tree produced by `mpsParser.endmarker`.
	 * @param ctx the parse tree
	 */
	enterEndmarker?: (ctx: EndmarkerContext) => void;
	/**
	 * Exit a parse tree produced by `mpsParser.endmarker`.
	 * @param ctx the parse tree
	 */
	exitEndmarker?: (ctx: EndmarkerContext) => void;
}

