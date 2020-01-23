// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/clif/CLIF.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { TermseqContext } from "./CLIFParser";
import { InterpretednameContext } from "./CLIFParser";
import { InterpretablenameContext } from "./CLIFParser";
import { NameContext } from "./CLIFParser";
import { TermContext } from "./CLIFParser";
import { OperatorContext } from "./CLIFParser";
import { EquationContext } from "./CLIFParser";
import { SentenceContext } from "./CLIFParser";
import { AtomsentContext } from "./CLIFParser";
import { AtomContext } from "./CLIFParser";
import { PredicateContext } from "./CLIFParser";
import { BoolsentContext } from "./CLIFParser";
import { QuantsentContext } from "./CLIFParser";
import { BoundlistContext } from "./CLIFParser";
import { CommentsentContext } from "./CLIFParser";
import { ModuleContext } from "./CLIFParser";
import { PhraseContext } from "./CLIFParser";
import { TextContext } from "./CLIFParser";
import { CltextContext } from "./CLIFParser";
import { NamedtextContext } from "./CLIFParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `CLIFParser`.
 */
export interface CLIFListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `CLIFParser.termseq`.
	 * @param ctx the parse tree
	 */
	enterTermseq?: (ctx: TermseqContext) => void;
	/**
	 * Exit a parse tree produced by `CLIFParser.termseq`.
	 * @param ctx the parse tree
	 */
	exitTermseq?: (ctx: TermseqContext) => void;

	/**
	 * Enter a parse tree produced by `CLIFParser.interpretedname`.
	 * @param ctx the parse tree
	 */
	enterInterpretedname?: (ctx: InterpretednameContext) => void;
	/**
	 * Exit a parse tree produced by `CLIFParser.interpretedname`.
	 * @param ctx the parse tree
	 */
	exitInterpretedname?: (ctx: InterpretednameContext) => void;

	/**
	 * Enter a parse tree produced by `CLIFParser.interpretablename`.
	 * @param ctx the parse tree
	 */
	enterInterpretablename?: (ctx: InterpretablenameContext) => void;
	/**
	 * Exit a parse tree produced by `CLIFParser.interpretablename`.
	 * @param ctx the parse tree
	 */
	exitInterpretablename?: (ctx: InterpretablenameContext) => void;

	/**
	 * Enter a parse tree produced by `CLIFParser.name`.
	 * @param ctx the parse tree
	 */
	enterName?: (ctx: NameContext) => void;
	/**
	 * Exit a parse tree produced by `CLIFParser.name`.
	 * @param ctx the parse tree
	 */
	exitName?: (ctx: NameContext) => void;

	/**
	 * Enter a parse tree produced by `CLIFParser.term`.
	 * @param ctx the parse tree
	 */
	enterTerm?: (ctx: TermContext) => void;
	/**
	 * Exit a parse tree produced by `CLIFParser.term`.
	 * @param ctx the parse tree
	 */
	exitTerm?: (ctx: TermContext) => void;

	/**
	 * Enter a parse tree produced by `CLIFParser.operator`.
	 * @param ctx the parse tree
	 */
	enterOperator?: (ctx: OperatorContext) => void;
	/**
	 * Exit a parse tree produced by `CLIFParser.operator`.
	 * @param ctx the parse tree
	 */
	exitOperator?: (ctx: OperatorContext) => void;

	/**
	 * Enter a parse tree produced by `CLIFParser.equation`.
	 * @param ctx the parse tree
	 */
	enterEquation?: (ctx: EquationContext) => void;
	/**
	 * Exit a parse tree produced by `CLIFParser.equation`.
	 * @param ctx the parse tree
	 */
	exitEquation?: (ctx: EquationContext) => void;

	/**
	 * Enter a parse tree produced by `CLIFParser.sentence`.
	 * @param ctx the parse tree
	 */
	enterSentence?: (ctx: SentenceContext) => void;
	/**
	 * Exit a parse tree produced by `CLIFParser.sentence`.
	 * @param ctx the parse tree
	 */
	exitSentence?: (ctx: SentenceContext) => void;

	/**
	 * Enter a parse tree produced by `CLIFParser.atomsent`.
	 * @param ctx the parse tree
	 */
	enterAtomsent?: (ctx: AtomsentContext) => void;
	/**
	 * Exit a parse tree produced by `CLIFParser.atomsent`.
	 * @param ctx the parse tree
	 */
	exitAtomsent?: (ctx: AtomsentContext) => void;

	/**
	 * Enter a parse tree produced by `CLIFParser.atom`.
	 * @param ctx the parse tree
	 */
	enterAtom?: (ctx: AtomContext) => void;
	/**
	 * Exit a parse tree produced by `CLIFParser.atom`.
	 * @param ctx the parse tree
	 */
	exitAtom?: (ctx: AtomContext) => void;

	/**
	 * Enter a parse tree produced by `CLIFParser.predicate`.
	 * @param ctx the parse tree
	 */
	enterPredicate?: (ctx: PredicateContext) => void;
	/**
	 * Exit a parse tree produced by `CLIFParser.predicate`.
	 * @param ctx the parse tree
	 */
	exitPredicate?: (ctx: PredicateContext) => void;

	/**
	 * Enter a parse tree produced by `CLIFParser.boolsent`.
	 * @param ctx the parse tree
	 */
	enterBoolsent?: (ctx: BoolsentContext) => void;
	/**
	 * Exit a parse tree produced by `CLIFParser.boolsent`.
	 * @param ctx the parse tree
	 */
	exitBoolsent?: (ctx: BoolsentContext) => void;

	/**
	 * Enter a parse tree produced by `CLIFParser.quantsent`.
	 * @param ctx the parse tree
	 */
	enterQuantsent?: (ctx: QuantsentContext) => void;
	/**
	 * Exit a parse tree produced by `CLIFParser.quantsent`.
	 * @param ctx the parse tree
	 */
	exitQuantsent?: (ctx: QuantsentContext) => void;

	/**
	 * Enter a parse tree produced by `CLIFParser.boundlist`.
	 * @param ctx the parse tree
	 */
	enterBoundlist?: (ctx: BoundlistContext) => void;
	/**
	 * Exit a parse tree produced by `CLIFParser.boundlist`.
	 * @param ctx the parse tree
	 */
	exitBoundlist?: (ctx: BoundlistContext) => void;

	/**
	 * Enter a parse tree produced by `CLIFParser.commentsent`.
	 * @param ctx the parse tree
	 */
	enterCommentsent?: (ctx: CommentsentContext) => void;
	/**
	 * Exit a parse tree produced by `CLIFParser.commentsent`.
	 * @param ctx the parse tree
	 */
	exitCommentsent?: (ctx: CommentsentContext) => void;

	/**
	 * Enter a parse tree produced by `CLIFParser.module`.
	 * @param ctx the parse tree
	 */
	enterModule?: (ctx: ModuleContext) => void;
	/**
	 * Exit a parse tree produced by `CLIFParser.module`.
	 * @param ctx the parse tree
	 */
	exitModule?: (ctx: ModuleContext) => void;

	/**
	 * Enter a parse tree produced by `CLIFParser.phrase`.
	 * @param ctx the parse tree
	 */
	enterPhrase?: (ctx: PhraseContext) => void;
	/**
	 * Exit a parse tree produced by `CLIFParser.phrase`.
	 * @param ctx the parse tree
	 */
	exitPhrase?: (ctx: PhraseContext) => void;

	/**
	 * Enter a parse tree produced by `CLIFParser.text`.
	 * @param ctx the parse tree
	 */
	enterText?: (ctx: TextContext) => void;
	/**
	 * Exit a parse tree produced by `CLIFParser.text`.
	 * @param ctx the parse tree
	 */
	exitText?: (ctx: TextContext) => void;

	/**
	 * Enter a parse tree produced by `CLIFParser.cltext`.
	 * @param ctx the parse tree
	 */
	enterCltext?: (ctx: CltextContext) => void;
	/**
	 * Exit a parse tree produced by `CLIFParser.cltext`.
	 * @param ctx the parse tree
	 */
	exitCltext?: (ctx: CltextContext) => void;

	/**
	 * Enter a parse tree produced by `CLIFParser.namedtext`.
	 * @param ctx the parse tree
	 */
	enterNamedtext?: (ctx: NamedtextContext) => void;
	/**
	 * Exit a parse tree produced by `CLIFParser.namedtext`.
	 * @param ctx the parse tree
	 */
	exitNamedtext?: (ctx: NamedtextContext) => void;
}

