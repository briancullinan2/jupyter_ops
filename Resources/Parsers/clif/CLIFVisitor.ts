// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/clif/CLIF.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `CLIFParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface CLIFVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `CLIFParser.termseq`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTermseq?: (ctx: TermseqContext) => Result;

	/**
	 * Visit a parse tree produced by `CLIFParser.interpretedname`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInterpretedname?: (ctx: InterpretednameContext) => Result;

	/**
	 * Visit a parse tree produced by `CLIFParser.interpretablename`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInterpretablename?: (ctx: InterpretablenameContext) => Result;

	/**
	 * Visit a parse tree produced by `CLIFParser.name`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitName?: (ctx: NameContext) => Result;

	/**
	 * Visit a parse tree produced by `CLIFParser.term`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTerm?: (ctx: TermContext) => Result;

	/**
	 * Visit a parse tree produced by `CLIFParser.operator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOperator?: (ctx: OperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `CLIFParser.equation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEquation?: (ctx: EquationContext) => Result;

	/**
	 * Visit a parse tree produced by `CLIFParser.sentence`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSentence?: (ctx: SentenceContext) => Result;

	/**
	 * Visit a parse tree produced by `CLIFParser.atomsent`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAtomsent?: (ctx: AtomsentContext) => Result;

	/**
	 * Visit a parse tree produced by `CLIFParser.atom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAtom?: (ctx: AtomContext) => Result;

	/**
	 * Visit a parse tree produced by `CLIFParser.predicate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPredicate?: (ctx: PredicateContext) => Result;

	/**
	 * Visit a parse tree produced by `CLIFParser.boolsent`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBoolsent?: (ctx: BoolsentContext) => Result;

	/**
	 * Visit a parse tree produced by `CLIFParser.quantsent`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQuantsent?: (ctx: QuantsentContext) => Result;

	/**
	 * Visit a parse tree produced by `CLIFParser.boundlist`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBoundlist?: (ctx: BoundlistContext) => Result;

	/**
	 * Visit a parse tree produced by `CLIFParser.commentsent`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCommentsent?: (ctx: CommentsentContext) => Result;

	/**
	 * Visit a parse tree produced by `CLIFParser.module`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitModule?: (ctx: ModuleContext) => Result;

	/**
	 * Visit a parse tree produced by `CLIFParser.phrase`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPhrase?: (ctx: PhraseContext) => Result;

	/**
	 * Visit a parse tree produced by `CLIFParser.text`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitText?: (ctx: TextContext) => Result;

	/**
	 * Visit a parse tree produced by `CLIFParser.cltext`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCltext?: (ctx: CltextContext) => Result;

	/**
	 * Visit a parse tree produced by `CLIFParser.namedtext`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNamedtext?: (ctx: NamedtextContext) => Result;
}

