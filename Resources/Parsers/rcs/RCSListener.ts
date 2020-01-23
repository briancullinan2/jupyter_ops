// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/rcs/RCS.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

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
 * This interface defines a complete listener for a parse tree produced by
 * `RCSParser`.
 */
export interface RCSListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `RCSParser.rcstext`.
	 * @param ctx the parse tree
	 */
	enterRcstext?: (ctx: RcstextContext) => void;
	/**
	 * Exit a parse tree produced by `RCSParser.rcstext`.
	 * @param ctx the parse tree
	 */
	exitRcstext?: (ctx: RcstextContext) => void;

	/**
	 * Enter a parse tree produced by `RCSParser.rcsheader`.
	 * @param ctx the parse tree
	 */
	enterRcsheader?: (ctx: RcsheaderContext) => void;
	/**
	 * Exit a parse tree produced by `RCSParser.rcsheader`.
	 * @param ctx the parse tree
	 */
	exitRcsheader?: (ctx: RcsheaderContext) => void;

	/**
	 * Enter a parse tree produced by `RCSParser.rcsrevisions`.
	 * @param ctx the parse tree
	 */
	enterRcsrevisions?: (ctx: RcsrevisionsContext) => void;
	/**
	 * Exit a parse tree produced by `RCSParser.rcsrevisions`.
	 * @param ctx the parse tree
	 */
	exitRcsrevisions?: (ctx: RcsrevisionsContext) => void;

	/**
	 * Enter a parse tree produced by `RCSParser.admin`.
	 * @param ctx the parse tree
	 */
	enterAdmin?: (ctx: AdminContext) => void;
	/**
	 * Exit a parse tree produced by `RCSParser.admin`.
	 * @param ctx the parse tree
	 */
	exitAdmin?: (ctx: AdminContext) => void;

	/**
	 * Enter a parse tree produced by `RCSParser.head`.
	 * @param ctx the parse tree
	 */
	enterHead?: (ctx: HeadContext) => void;
	/**
	 * Exit a parse tree produced by `RCSParser.head`.
	 * @param ctx the parse tree
	 */
	exitHead?: (ctx: HeadContext) => void;

	/**
	 * Enter a parse tree produced by `RCSParser.branch`.
	 * @param ctx the parse tree
	 */
	enterBranch?: (ctx: BranchContext) => void;
	/**
	 * Exit a parse tree produced by `RCSParser.branch`.
	 * @param ctx the parse tree
	 */
	exitBranch?: (ctx: BranchContext) => void;

	/**
	 * Enter a parse tree produced by `RCSParser.access`.
	 * @param ctx the parse tree
	 */
	enterAccess?: (ctx: AccessContext) => void;
	/**
	 * Exit a parse tree produced by `RCSParser.access`.
	 * @param ctx the parse tree
	 */
	exitAccess?: (ctx: AccessContext) => void;

	/**
	 * Enter a parse tree produced by `RCSParser.symbols`.
	 * @param ctx the parse tree
	 */
	enterSymbols?: (ctx: SymbolsContext) => void;
	/**
	 * Exit a parse tree produced by `RCSParser.symbols`.
	 * @param ctx the parse tree
	 */
	exitSymbols?: (ctx: SymbolsContext) => void;

	/**
	 * Enter a parse tree produced by `RCSParser.tags`.
	 * @param ctx the parse tree
	 */
	enterTags?: (ctx: TagsContext) => void;
	/**
	 * Exit a parse tree produced by `RCSParser.tags`.
	 * @param ctx the parse tree
	 */
	exitTags?: (ctx: TagsContext) => void;

	/**
	 * Enter a parse tree produced by `RCSParser.locks`.
	 * @param ctx the parse tree
	 */
	enterLocks?: (ctx: LocksContext) => void;
	/**
	 * Exit a parse tree produced by `RCSParser.locks`.
	 * @param ctx the parse tree
	 */
	exitLocks?: (ctx: LocksContext) => void;

	/**
	 * Enter a parse tree produced by `RCSParser.strict`.
	 * @param ctx the parse tree
	 */
	enterStrict?: (ctx: StrictContext) => void;
	/**
	 * Exit a parse tree produced by `RCSParser.strict`.
	 * @param ctx the parse tree
	 */
	exitStrict?: (ctx: StrictContext) => void;

	/**
	 * Enter a parse tree produced by `RCSParser.comment`.
	 * @param ctx the parse tree
	 */
	enterComment?: (ctx: CommentContext) => void;
	/**
	 * Exit a parse tree produced by `RCSParser.comment`.
	 * @param ctx the parse tree
	 */
	exitComment?: (ctx: CommentContext) => void;

	/**
	 * Enter a parse tree produced by `RCSParser.expand`.
	 * @param ctx the parse tree
	 */
	enterExpand?: (ctx: ExpandContext) => void;
	/**
	 * Exit a parse tree produced by `RCSParser.expand`.
	 * @param ctx the parse tree
	 */
	exitExpand?: (ctx: ExpandContext) => void;

	/**
	 * Enter a parse tree produced by `RCSParser.deltalist`.
	 * @param ctx the parse tree
	 */
	enterDeltalist?: (ctx: DeltalistContext) => void;
	/**
	 * Exit a parse tree produced by `RCSParser.deltalist`.
	 * @param ctx the parse tree
	 */
	exitDeltalist?: (ctx: DeltalistContext) => void;

	/**
	 * Enter a parse tree produced by `RCSParser.delta`.
	 * @param ctx the parse tree
	 */
	enterDelta?: (ctx: DeltaContext) => void;
	/**
	 * Exit a parse tree produced by `RCSParser.delta`.
	 * @param ctx the parse tree
	 */
	exitDelta?: (ctx: DeltaContext) => void;

	/**
	 * Enter a parse tree produced by `RCSParser.delta_date`.
	 * @param ctx the parse tree
	 */
	enterDelta_date?: (ctx: Delta_dateContext) => void;
	/**
	 * Exit a parse tree produced by `RCSParser.delta_date`.
	 * @param ctx the parse tree
	 */
	exitDelta_date?: (ctx: Delta_dateContext) => void;

	/**
	 * Enter a parse tree produced by `RCSParser.delta_author`.
	 * @param ctx the parse tree
	 */
	enterDelta_author?: (ctx: Delta_authorContext) => void;
	/**
	 * Exit a parse tree produced by `RCSParser.delta_author`.
	 * @param ctx the parse tree
	 */
	exitDelta_author?: (ctx: Delta_authorContext) => void;

	/**
	 * Enter a parse tree produced by `RCSParser.delta_state`.
	 * @param ctx the parse tree
	 */
	enterDelta_state?: (ctx: Delta_stateContext) => void;
	/**
	 * Exit a parse tree produced by `RCSParser.delta_state`.
	 * @param ctx the parse tree
	 */
	exitDelta_state?: (ctx: Delta_stateContext) => void;

	/**
	 * Enter a parse tree produced by `RCSParser.delta_branches`.
	 * @param ctx the parse tree
	 */
	enterDelta_branches?: (ctx: Delta_branchesContext) => void;
	/**
	 * Exit a parse tree produced by `RCSParser.delta_branches`.
	 * @param ctx the parse tree
	 */
	exitDelta_branches?: (ctx: Delta_branchesContext) => void;

	/**
	 * Enter a parse tree produced by `RCSParser.delta_next`.
	 * @param ctx the parse tree
	 */
	enterDelta_next?: (ctx: Delta_nextContext) => void;
	/**
	 * Exit a parse tree produced by `RCSParser.delta_next`.
	 * @param ctx the parse tree
	 */
	exitDelta_next?: (ctx: Delta_nextContext) => void;

	/**
	 * Enter a parse tree produced by `RCSParser.desc`.
	 * @param ctx the parse tree
	 */
	enterDesc?: (ctx: DescContext) => void;
	/**
	 * Exit a parse tree produced by `RCSParser.desc`.
	 * @param ctx the parse tree
	 */
	exitDesc?: (ctx: DescContext) => void;

	/**
	 * Enter a parse tree produced by `RCSParser.deltatextlist`.
	 * @param ctx the parse tree
	 */
	enterDeltatextlist?: (ctx: DeltatextlistContext) => void;
	/**
	 * Exit a parse tree produced by `RCSParser.deltatextlist`.
	 * @param ctx the parse tree
	 */
	exitDeltatextlist?: (ctx: DeltatextlistContext) => void;

	/**
	 * Enter a parse tree produced by `RCSParser.deltatext`.
	 * @param ctx the parse tree
	 */
	enterDeltatext?: (ctx: DeltatextContext) => void;
	/**
	 * Exit a parse tree produced by `RCSParser.deltatext`.
	 * @param ctx the parse tree
	 */
	exitDeltatext?: (ctx: DeltatextContext) => void;

	/**
	 * Enter a parse tree produced by `RCSParser.deltatext_log`.
	 * @param ctx the parse tree
	 */
	enterDeltatext_log?: (ctx: Deltatext_logContext) => void;
	/**
	 * Exit a parse tree produced by `RCSParser.deltatext_log`.
	 * @param ctx the parse tree
	 */
	exitDeltatext_log?: (ctx: Deltatext_logContext) => void;

	/**
	 * Enter a parse tree produced by `RCSParser.deltatext_text`.
	 * @param ctx the parse tree
	 */
	enterDeltatext_text?: (ctx: Deltatext_textContext) => void;
	/**
	 * Exit a parse tree produced by `RCSParser.deltatext_text`.
	 * @param ctx the parse tree
	 */
	exitDeltatext_text?: (ctx: Deltatext_textContext) => void;

	/**
	 * Enter a parse tree produced by `RCSParser.newphrase`.
	 * @param ctx the parse tree
	 */
	enterNewphrase?: (ctx: NewphraseContext) => void;
	/**
	 * Exit a parse tree produced by `RCSParser.newphrase`.
	 * @param ctx the parse tree
	 */
	exitNewphrase?: (ctx: NewphraseContext) => void;
}

