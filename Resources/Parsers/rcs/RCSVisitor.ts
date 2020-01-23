// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/rcs/RCS.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { RcstextContext } from "./RCSParser";
import { RcsheaderContext } from "./RCSParser";
import { RcsrevisionsContext } from "./RCSParser";
import { AdminContext } from "./RCSParser";
import { HeadContext } from "./RCSParser";
import { BranchContext } from "./RCSParser";
import { AccessContext } from "./RCSParser";
import { SymbolsContext } from "./RCSParser";
import { TagsContext } from "./RCSParser";
import { LocksContext } from "./RCSParser";
import { StrictContext } from "./RCSParser";
import { CommentContext } from "./RCSParser";
import { ExpandContext } from "./RCSParser";
import { DeltalistContext } from "./RCSParser";
import { DeltaContext } from "./RCSParser";
import { Delta_dateContext } from "./RCSParser";
import { Delta_authorContext } from "./RCSParser";
import { Delta_stateContext } from "./RCSParser";
import { Delta_branchesContext } from "./RCSParser";
import { Delta_nextContext } from "./RCSParser";
import { DescContext } from "./RCSParser";
import { DeltatextlistContext } from "./RCSParser";
import { DeltatextContext } from "./RCSParser";
import { Deltatext_logContext } from "./RCSParser";
import { Deltatext_textContext } from "./RCSParser";
import { NewphraseContext } from "./RCSParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `RCSParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface RCSVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `RCSParser.rcstext`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRcstext?: (ctx: RcstextContext) => Result;

	/**
	 * Visit a parse tree produced by `RCSParser.rcsheader`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRcsheader?: (ctx: RcsheaderContext) => Result;

	/**
	 * Visit a parse tree produced by `RCSParser.rcsrevisions`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRcsrevisions?: (ctx: RcsrevisionsContext) => Result;

	/**
	 * Visit a parse tree produced by `RCSParser.admin`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAdmin?: (ctx: AdminContext) => Result;

	/**
	 * Visit a parse tree produced by `RCSParser.head`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHead?: (ctx: HeadContext) => Result;

	/**
	 * Visit a parse tree produced by `RCSParser.branch`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBranch?: (ctx: BranchContext) => Result;

	/**
	 * Visit a parse tree produced by `RCSParser.access`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAccess?: (ctx: AccessContext) => Result;

	/**
	 * Visit a parse tree produced by `RCSParser.symbols`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSymbols?: (ctx: SymbolsContext) => Result;

	/**
	 * Visit a parse tree produced by `RCSParser.tags`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTags?: (ctx: TagsContext) => Result;

	/**
	 * Visit a parse tree produced by `RCSParser.locks`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLocks?: (ctx: LocksContext) => Result;

	/**
	 * Visit a parse tree produced by `RCSParser.strict`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStrict?: (ctx: StrictContext) => Result;

	/**
	 * Visit a parse tree produced by `RCSParser.comment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComment?: (ctx: CommentContext) => Result;

	/**
	 * Visit a parse tree produced by `RCSParser.expand`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpand?: (ctx: ExpandContext) => Result;

	/**
	 * Visit a parse tree produced by `RCSParser.deltalist`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeltalist?: (ctx: DeltalistContext) => Result;

	/**
	 * Visit a parse tree produced by `RCSParser.delta`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDelta?: (ctx: DeltaContext) => Result;

	/**
	 * Visit a parse tree produced by `RCSParser.delta_date`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDelta_date?: (ctx: Delta_dateContext) => Result;

	/**
	 * Visit a parse tree produced by `RCSParser.delta_author`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDelta_author?: (ctx: Delta_authorContext) => Result;

	/**
	 * Visit a parse tree produced by `RCSParser.delta_state`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDelta_state?: (ctx: Delta_stateContext) => Result;

	/**
	 * Visit a parse tree produced by `RCSParser.delta_branches`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDelta_branches?: (ctx: Delta_branchesContext) => Result;

	/**
	 * Visit a parse tree produced by `RCSParser.delta_next`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDelta_next?: (ctx: Delta_nextContext) => Result;

	/**
	 * Visit a parse tree produced by `RCSParser.desc`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDesc?: (ctx: DescContext) => Result;

	/**
	 * Visit a parse tree produced by `RCSParser.deltatextlist`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeltatextlist?: (ctx: DeltatextlistContext) => Result;

	/**
	 * Visit a parse tree produced by `RCSParser.deltatext`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeltatext?: (ctx: DeltatextContext) => Result;

	/**
	 * Visit a parse tree produced by `RCSParser.deltatext_log`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeltatext_log?: (ctx: Deltatext_logContext) => Result;

	/**
	 * Visit a parse tree produced by `RCSParser.deltatext_text`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeltatext_text?: (ctx: Deltatext_textContext) => Result;

	/**
	 * Visit a parse tree produced by `RCSParser.newphrase`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNewphrase?: (ctx: NewphraseContext) => Result;
}

