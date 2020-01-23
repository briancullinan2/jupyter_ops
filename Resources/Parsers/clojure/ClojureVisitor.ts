// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/clojure/Clojure.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { FileContext } from "./ClojureParser";
import { FormContext } from "./ClojureParser";
import { FormsContext } from "./ClojureParser";
import { ListContext } from "./ClojureParser";
import { VectorContext } from "./ClojureParser";
import { MapContext } from "./ClojureParser";
import { SetContext } from "./ClojureParser";
import { Reader_macroContext } from "./ClojureParser";
import { QuoteContext } from "./ClojureParser";
import { BacktickContext } from "./ClojureParser";
import { UnquoteContext } from "./ClojureParser";
import { Unquote_splicingContext } from "./ClojureParser";
import { TagContext } from "./ClojureParser";
import { DerefContext } from "./ClojureParser";
import { GensymContext } from "./ClojureParser";
import { LambdaContext } from "./ClojureParser";
import { Meta_dataContext } from "./ClojureParser";
import { Var_quoteContext } from "./ClojureParser";
import { Host_exprContext } from "./ClojureParser";
import { DiscardContext } from "./ClojureParser";
import { DispatchContext } from "./ClojureParser";
import { RegexContext } from "./ClojureParser";
import { LiteralContext } from "./ClojureParser";
import { StringContext } from "./ClojureParser";
import { HexContext } from "./ClojureParser";
import { BinContext } from "./ClojureParser";
import { BignContext } from "./ClojureParser";
import { NumberContext } from "./ClojureParser";
import { CharacterContext } from "./ClojureParser";
import { Named_charContext } from "./ClojureParser";
import { Any_charContext } from "./ClojureParser";
import { U_hex_quadContext } from "./ClojureParser";
import { NilContext } from "./ClojureParser";
import { KeywordContext } from "./ClojureParser";
import { Simple_keywordContext } from "./ClojureParser";
import { Macro_keywordContext } from "./ClojureParser";
import { SymbolContext } from "./ClojureParser";
import { Simple_symContext } from "./ClojureParser";
import { Ns_symbolContext } from "./ClojureParser";
import { Param_nameContext } from "./ClojureParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `ClojureParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface ClojureVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `ClojureParser.file`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFile?: (ctx: FileContext) => Result;

	/**
	 * Visit a parse tree produced by `ClojureParser.form`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForm?: (ctx: FormContext) => Result;

	/**
	 * Visit a parse tree produced by `ClojureParser.forms`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForms?: (ctx: FormsContext) => Result;

	/**
	 * Visit a parse tree produced by `ClojureParser.list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitList?: (ctx: ListContext) => Result;

	/**
	 * Visit a parse tree produced by `ClojureParser.vector`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVector?: (ctx: VectorContext) => Result;

	/**
	 * Visit a parse tree produced by `ClojureParser.map`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMap?: (ctx: MapContext) => Result;

	/**
	 * Visit a parse tree produced by `ClojureParser.set`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSet?: (ctx: SetContext) => Result;

	/**
	 * Visit a parse tree produced by `ClojureParser.reader_macro`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReader_macro?: (ctx: Reader_macroContext) => Result;

	/**
	 * Visit a parse tree produced by `ClojureParser.quote`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQuote?: (ctx: QuoteContext) => Result;

	/**
	 * Visit a parse tree produced by `ClojureParser.backtick`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBacktick?: (ctx: BacktickContext) => Result;

	/**
	 * Visit a parse tree produced by `ClojureParser.unquote`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnquote?: (ctx: UnquoteContext) => Result;

	/**
	 * Visit a parse tree produced by `ClojureParser.unquote_splicing`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnquote_splicing?: (ctx: Unquote_splicingContext) => Result;

	/**
	 * Visit a parse tree produced by `ClojureParser.tag`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTag?: (ctx: TagContext) => Result;

	/**
	 * Visit a parse tree produced by `ClojureParser.deref`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeref?: (ctx: DerefContext) => Result;

	/**
	 * Visit a parse tree produced by `ClojureParser.gensym`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGensym?: (ctx: GensymContext) => Result;

	/**
	 * Visit a parse tree produced by `ClojureParser.lambda`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLambda?: (ctx: LambdaContext) => Result;

	/**
	 * Visit a parse tree produced by `ClojureParser.meta_data`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMeta_data?: (ctx: Meta_dataContext) => Result;

	/**
	 * Visit a parse tree produced by `ClojureParser.var_quote`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVar_quote?: (ctx: Var_quoteContext) => Result;

	/**
	 * Visit a parse tree produced by `ClojureParser.host_expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHost_expr?: (ctx: Host_exprContext) => Result;

	/**
	 * Visit a parse tree produced by `ClojureParser.discard`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDiscard?: (ctx: DiscardContext) => Result;

	/**
	 * Visit a parse tree produced by `ClojureParser.dispatch`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDispatch?: (ctx: DispatchContext) => Result;

	/**
	 * Visit a parse tree produced by `ClojureParser.regex`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRegex?: (ctx: RegexContext) => Result;

	/**
	 * Visit a parse tree produced by `ClojureParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiteral?: (ctx: LiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `ClojureParser.string`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitString?: (ctx: StringContext) => Result;

	/**
	 * Visit a parse tree produced by `ClojureParser.hex`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHex?: (ctx: HexContext) => Result;

	/**
	 * Visit a parse tree produced by `ClojureParser.bin`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBin?: (ctx: BinContext) => Result;

	/**
	 * Visit a parse tree produced by `ClojureParser.bign`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBign?: (ctx: BignContext) => Result;

	/**
	 * Visit a parse tree produced by `ClojureParser.number`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumber?: (ctx: NumberContext) => Result;

	/**
	 * Visit a parse tree produced by `ClojureParser.character`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCharacter?: (ctx: CharacterContext) => Result;

	/**
	 * Visit a parse tree produced by `ClojureParser.named_char`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNamed_char?: (ctx: Named_charContext) => Result;

	/**
	 * Visit a parse tree produced by `ClojureParser.any_char`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAny_char?: (ctx: Any_charContext) => Result;

	/**
	 * Visit a parse tree produced by `ClojureParser.u_hex_quad`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitU_hex_quad?: (ctx: U_hex_quadContext) => Result;

	/**
	 * Visit a parse tree produced by `ClojureParser.nil`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNil?: (ctx: NilContext) => Result;

	/**
	 * Visit a parse tree produced by `ClojureParser.keyword`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKeyword?: (ctx: KeywordContext) => Result;

	/**
	 * Visit a parse tree produced by `ClojureParser.simple_keyword`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSimple_keyword?: (ctx: Simple_keywordContext) => Result;

	/**
	 * Visit a parse tree produced by `ClojureParser.macro_keyword`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMacro_keyword?: (ctx: Macro_keywordContext) => Result;

	/**
	 * Visit a parse tree produced by `ClojureParser.symbol`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSymbol?: (ctx: SymbolContext) => Result;

	/**
	 * Visit a parse tree produced by `ClojureParser.simple_sym`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSimple_sym?: (ctx: Simple_symContext) => Result;

	/**
	 * Visit a parse tree produced by `ClojureParser.ns_symbol`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNs_symbol?: (ctx: Ns_symbolContext) => Result;

	/**
	 * Visit a parse tree produced by `ClojureParser.param_name`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParam_name?: (ctx: Param_nameContext) => Result;
}

