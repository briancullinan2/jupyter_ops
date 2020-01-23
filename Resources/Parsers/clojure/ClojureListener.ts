// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/clojure/Clojure.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

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
 * This interface defines a complete listener for a parse tree produced by
 * `ClojureParser`.
 */
export interface ClojureListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `ClojureParser.file`.
	 * @param ctx the parse tree
	 */
	enterFile?: (ctx: FileContext) => void;
	/**
	 * Exit a parse tree produced by `ClojureParser.file`.
	 * @param ctx the parse tree
	 */
	exitFile?: (ctx: FileContext) => void;

	/**
	 * Enter a parse tree produced by `ClojureParser.form`.
	 * @param ctx the parse tree
	 */
	enterForm?: (ctx: FormContext) => void;
	/**
	 * Exit a parse tree produced by `ClojureParser.form`.
	 * @param ctx the parse tree
	 */
	exitForm?: (ctx: FormContext) => void;

	/**
	 * Enter a parse tree produced by `ClojureParser.forms`.
	 * @param ctx the parse tree
	 */
	enterForms?: (ctx: FormsContext) => void;
	/**
	 * Exit a parse tree produced by `ClojureParser.forms`.
	 * @param ctx the parse tree
	 */
	exitForms?: (ctx: FormsContext) => void;

	/**
	 * Enter a parse tree produced by `ClojureParser.list`.
	 * @param ctx the parse tree
	 */
	enterList?: (ctx: ListContext) => void;
	/**
	 * Exit a parse tree produced by `ClojureParser.list`.
	 * @param ctx the parse tree
	 */
	exitList?: (ctx: ListContext) => void;

	/**
	 * Enter a parse tree produced by `ClojureParser.vector`.
	 * @param ctx the parse tree
	 */
	enterVector?: (ctx: VectorContext) => void;
	/**
	 * Exit a parse tree produced by `ClojureParser.vector`.
	 * @param ctx the parse tree
	 */
	exitVector?: (ctx: VectorContext) => void;

	/**
	 * Enter a parse tree produced by `ClojureParser.map`.
	 * @param ctx the parse tree
	 */
	enterMap?: (ctx: MapContext) => void;
	/**
	 * Exit a parse tree produced by `ClojureParser.map`.
	 * @param ctx the parse tree
	 */
	exitMap?: (ctx: MapContext) => void;

	/**
	 * Enter a parse tree produced by `ClojureParser.set`.
	 * @param ctx the parse tree
	 */
	enterSet?: (ctx: SetContext) => void;
	/**
	 * Exit a parse tree produced by `ClojureParser.set`.
	 * @param ctx the parse tree
	 */
	exitSet?: (ctx: SetContext) => void;

	/**
	 * Enter a parse tree produced by `ClojureParser.reader_macro`.
	 * @param ctx the parse tree
	 */
	enterReader_macro?: (ctx: Reader_macroContext) => void;
	/**
	 * Exit a parse tree produced by `ClojureParser.reader_macro`.
	 * @param ctx the parse tree
	 */
	exitReader_macro?: (ctx: Reader_macroContext) => void;

	/**
	 * Enter a parse tree produced by `ClojureParser.quote`.
	 * @param ctx the parse tree
	 */
	enterQuote?: (ctx: QuoteContext) => void;
	/**
	 * Exit a parse tree produced by `ClojureParser.quote`.
	 * @param ctx the parse tree
	 */
	exitQuote?: (ctx: QuoteContext) => void;

	/**
	 * Enter a parse tree produced by `ClojureParser.backtick`.
	 * @param ctx the parse tree
	 */
	enterBacktick?: (ctx: BacktickContext) => void;
	/**
	 * Exit a parse tree produced by `ClojureParser.backtick`.
	 * @param ctx the parse tree
	 */
	exitBacktick?: (ctx: BacktickContext) => void;

	/**
	 * Enter a parse tree produced by `ClojureParser.unquote`.
	 * @param ctx the parse tree
	 */
	enterUnquote?: (ctx: UnquoteContext) => void;
	/**
	 * Exit a parse tree produced by `ClojureParser.unquote`.
	 * @param ctx the parse tree
	 */
	exitUnquote?: (ctx: UnquoteContext) => void;

	/**
	 * Enter a parse tree produced by `ClojureParser.unquote_splicing`.
	 * @param ctx the parse tree
	 */
	enterUnquote_splicing?: (ctx: Unquote_splicingContext) => void;
	/**
	 * Exit a parse tree produced by `ClojureParser.unquote_splicing`.
	 * @param ctx the parse tree
	 */
	exitUnquote_splicing?: (ctx: Unquote_splicingContext) => void;

	/**
	 * Enter a parse tree produced by `ClojureParser.tag`.
	 * @param ctx the parse tree
	 */
	enterTag?: (ctx: TagContext) => void;
	/**
	 * Exit a parse tree produced by `ClojureParser.tag`.
	 * @param ctx the parse tree
	 */
	exitTag?: (ctx: TagContext) => void;

	/**
	 * Enter a parse tree produced by `ClojureParser.deref`.
	 * @param ctx the parse tree
	 */
	enterDeref?: (ctx: DerefContext) => void;
	/**
	 * Exit a parse tree produced by `ClojureParser.deref`.
	 * @param ctx the parse tree
	 */
	exitDeref?: (ctx: DerefContext) => void;

	/**
	 * Enter a parse tree produced by `ClojureParser.gensym`.
	 * @param ctx the parse tree
	 */
	enterGensym?: (ctx: GensymContext) => void;
	/**
	 * Exit a parse tree produced by `ClojureParser.gensym`.
	 * @param ctx the parse tree
	 */
	exitGensym?: (ctx: GensymContext) => void;

	/**
	 * Enter a parse tree produced by `ClojureParser.lambda`.
	 * @param ctx the parse tree
	 */
	enterLambda?: (ctx: LambdaContext) => void;
	/**
	 * Exit a parse tree produced by `ClojureParser.lambda`.
	 * @param ctx the parse tree
	 */
	exitLambda?: (ctx: LambdaContext) => void;

	/**
	 * Enter a parse tree produced by `ClojureParser.meta_data`.
	 * @param ctx the parse tree
	 */
	enterMeta_data?: (ctx: Meta_dataContext) => void;
	/**
	 * Exit a parse tree produced by `ClojureParser.meta_data`.
	 * @param ctx the parse tree
	 */
	exitMeta_data?: (ctx: Meta_dataContext) => void;

	/**
	 * Enter a parse tree produced by `ClojureParser.var_quote`.
	 * @param ctx the parse tree
	 */
	enterVar_quote?: (ctx: Var_quoteContext) => void;
	/**
	 * Exit a parse tree produced by `ClojureParser.var_quote`.
	 * @param ctx the parse tree
	 */
	exitVar_quote?: (ctx: Var_quoteContext) => void;

	/**
	 * Enter a parse tree produced by `ClojureParser.host_expr`.
	 * @param ctx the parse tree
	 */
	enterHost_expr?: (ctx: Host_exprContext) => void;
	/**
	 * Exit a parse tree produced by `ClojureParser.host_expr`.
	 * @param ctx the parse tree
	 */
	exitHost_expr?: (ctx: Host_exprContext) => void;

	/**
	 * Enter a parse tree produced by `ClojureParser.discard`.
	 * @param ctx the parse tree
	 */
	enterDiscard?: (ctx: DiscardContext) => void;
	/**
	 * Exit a parse tree produced by `ClojureParser.discard`.
	 * @param ctx the parse tree
	 */
	exitDiscard?: (ctx: DiscardContext) => void;

	/**
	 * Enter a parse tree produced by `ClojureParser.dispatch`.
	 * @param ctx the parse tree
	 */
	enterDispatch?: (ctx: DispatchContext) => void;
	/**
	 * Exit a parse tree produced by `ClojureParser.dispatch`.
	 * @param ctx the parse tree
	 */
	exitDispatch?: (ctx: DispatchContext) => void;

	/**
	 * Enter a parse tree produced by `ClojureParser.regex`.
	 * @param ctx the parse tree
	 */
	enterRegex?: (ctx: RegexContext) => void;
	/**
	 * Exit a parse tree produced by `ClojureParser.regex`.
	 * @param ctx the parse tree
	 */
	exitRegex?: (ctx: RegexContext) => void;

	/**
	 * Enter a parse tree produced by `ClojureParser.literal`.
	 * @param ctx the parse tree
	 */
	enterLiteral?: (ctx: LiteralContext) => void;
	/**
	 * Exit a parse tree produced by `ClojureParser.literal`.
	 * @param ctx the parse tree
	 */
	exitLiteral?: (ctx: LiteralContext) => void;

	/**
	 * Enter a parse tree produced by `ClojureParser.string`.
	 * @param ctx the parse tree
	 */
	enterString?: (ctx: StringContext) => void;
	/**
	 * Exit a parse tree produced by `ClojureParser.string`.
	 * @param ctx the parse tree
	 */
	exitString?: (ctx: StringContext) => void;

	/**
	 * Enter a parse tree produced by `ClojureParser.hex`.
	 * @param ctx the parse tree
	 */
	enterHex?: (ctx: HexContext) => void;
	/**
	 * Exit a parse tree produced by `ClojureParser.hex`.
	 * @param ctx the parse tree
	 */
	exitHex?: (ctx: HexContext) => void;

	/**
	 * Enter a parse tree produced by `ClojureParser.bin`.
	 * @param ctx the parse tree
	 */
	enterBin?: (ctx: BinContext) => void;
	/**
	 * Exit a parse tree produced by `ClojureParser.bin`.
	 * @param ctx the parse tree
	 */
	exitBin?: (ctx: BinContext) => void;

	/**
	 * Enter a parse tree produced by `ClojureParser.bign`.
	 * @param ctx the parse tree
	 */
	enterBign?: (ctx: BignContext) => void;
	/**
	 * Exit a parse tree produced by `ClojureParser.bign`.
	 * @param ctx the parse tree
	 */
	exitBign?: (ctx: BignContext) => void;

	/**
	 * Enter a parse tree produced by `ClojureParser.number`.
	 * @param ctx the parse tree
	 */
	enterNumber?: (ctx: NumberContext) => void;
	/**
	 * Exit a parse tree produced by `ClojureParser.number`.
	 * @param ctx the parse tree
	 */
	exitNumber?: (ctx: NumberContext) => void;

	/**
	 * Enter a parse tree produced by `ClojureParser.character`.
	 * @param ctx the parse tree
	 */
	enterCharacter?: (ctx: CharacterContext) => void;
	/**
	 * Exit a parse tree produced by `ClojureParser.character`.
	 * @param ctx the parse tree
	 */
	exitCharacter?: (ctx: CharacterContext) => void;

	/**
	 * Enter a parse tree produced by `ClojureParser.named_char`.
	 * @param ctx the parse tree
	 */
	enterNamed_char?: (ctx: Named_charContext) => void;
	/**
	 * Exit a parse tree produced by `ClojureParser.named_char`.
	 * @param ctx the parse tree
	 */
	exitNamed_char?: (ctx: Named_charContext) => void;

	/**
	 * Enter a parse tree produced by `ClojureParser.any_char`.
	 * @param ctx the parse tree
	 */
	enterAny_char?: (ctx: Any_charContext) => void;
	/**
	 * Exit a parse tree produced by `ClojureParser.any_char`.
	 * @param ctx the parse tree
	 */
	exitAny_char?: (ctx: Any_charContext) => void;

	/**
	 * Enter a parse tree produced by `ClojureParser.u_hex_quad`.
	 * @param ctx the parse tree
	 */
	enterU_hex_quad?: (ctx: U_hex_quadContext) => void;
	/**
	 * Exit a parse tree produced by `ClojureParser.u_hex_quad`.
	 * @param ctx the parse tree
	 */
	exitU_hex_quad?: (ctx: U_hex_quadContext) => void;

	/**
	 * Enter a parse tree produced by `ClojureParser.nil`.
	 * @param ctx the parse tree
	 */
	enterNil?: (ctx: NilContext) => void;
	/**
	 * Exit a parse tree produced by `ClojureParser.nil`.
	 * @param ctx the parse tree
	 */
	exitNil?: (ctx: NilContext) => void;

	/**
	 * Enter a parse tree produced by `ClojureParser.keyword`.
	 * @param ctx the parse tree
	 */
	enterKeyword?: (ctx: KeywordContext) => void;
	/**
	 * Exit a parse tree produced by `ClojureParser.keyword`.
	 * @param ctx the parse tree
	 */
	exitKeyword?: (ctx: KeywordContext) => void;

	/**
	 * Enter a parse tree produced by `ClojureParser.simple_keyword`.
	 * @param ctx the parse tree
	 */
	enterSimple_keyword?: (ctx: Simple_keywordContext) => void;
	/**
	 * Exit a parse tree produced by `ClojureParser.simple_keyword`.
	 * @param ctx the parse tree
	 */
	exitSimple_keyword?: (ctx: Simple_keywordContext) => void;

	/**
	 * Enter a parse tree produced by `ClojureParser.macro_keyword`.
	 * @param ctx the parse tree
	 */
	enterMacro_keyword?: (ctx: Macro_keywordContext) => void;
	/**
	 * Exit a parse tree produced by `ClojureParser.macro_keyword`.
	 * @param ctx the parse tree
	 */
	exitMacro_keyword?: (ctx: Macro_keywordContext) => void;

	/**
	 * Enter a parse tree produced by `ClojureParser.symbol`.
	 * @param ctx the parse tree
	 */
	enterSymbol?: (ctx: SymbolContext) => void;
	/**
	 * Exit a parse tree produced by `ClojureParser.symbol`.
	 * @param ctx the parse tree
	 */
	exitSymbol?: (ctx: SymbolContext) => void;

	/**
	 * Enter a parse tree produced by `ClojureParser.simple_sym`.
	 * @param ctx the parse tree
	 */
	enterSimple_sym?: (ctx: Simple_symContext) => void;
	/**
	 * Exit a parse tree produced by `ClojureParser.simple_sym`.
	 * @param ctx the parse tree
	 */
	exitSimple_sym?: (ctx: Simple_symContext) => void;

	/**
	 * Enter a parse tree produced by `ClojureParser.ns_symbol`.
	 * @param ctx the parse tree
	 */
	enterNs_symbol?: (ctx: Ns_symbolContext) => void;
	/**
	 * Exit a parse tree produced by `ClojureParser.ns_symbol`.
	 * @param ctx the parse tree
	 */
	exitNs_symbol?: (ctx: Ns_symbolContext) => void;

	/**
	 * Enter a parse tree produced by `ClojureParser.param_name`.
	 * @param ctx the parse tree
	 */
	enterParam_name?: (ctx: Param_nameContext) => void;
	/**
	 * Exit a parse tree produced by `ClojureParser.param_name`.
	 * @param ctx the parse tree
	 */
	exitParam_name?: (ctx: Param_nameContext) => void;
}

