// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/stringtemplate/STGParser.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { GroupContext } from "./STGParser";
import { DelimitersContext } from "./STGParser";
import { ImportsContext } from "./STGParser";
import { TemplateContext } from "./STGParser";
import { FormalArgsContext } from "./STGParser";
import { FormalArgContext } from "./STGParser";
import { DictContext } from "./STGParser";
import { DictPairsContext } from "./STGParser";
import { KeyValuePairContext } from "./STGParser";
import { DefaultValuePairContext } from "./STGParser";
import { KeyValueContext } from "./STGParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `STGParser`.
 */
export interface STGParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `STGParser.group`.
	 * @param ctx the parse tree
	 */
	enterGroup?: (ctx: GroupContext) => void;
	/**
	 * Exit a parse tree produced by `STGParser.group`.
	 * @param ctx the parse tree
	 */
	exitGroup?: (ctx: GroupContext) => void;

	/**
	 * Enter a parse tree produced by `STGParser.delimiters`.
	 * @param ctx the parse tree
	 */
	enterDelimiters?: (ctx: DelimitersContext) => void;
	/**
	 * Exit a parse tree produced by `STGParser.delimiters`.
	 * @param ctx the parse tree
	 */
	exitDelimiters?: (ctx: DelimitersContext) => void;

	/**
	 * Enter a parse tree produced by `STGParser.imports`.
	 * @param ctx the parse tree
	 */
	enterImports?: (ctx: ImportsContext) => void;
	/**
	 * Exit a parse tree produced by `STGParser.imports`.
	 * @param ctx the parse tree
	 */
	exitImports?: (ctx: ImportsContext) => void;

	/**
	 * Enter a parse tree produced by `STGParser.template`.
	 * @param ctx the parse tree
	 */
	enterTemplate?: (ctx: TemplateContext) => void;
	/**
	 * Exit a parse tree produced by `STGParser.template`.
	 * @param ctx the parse tree
	 */
	exitTemplate?: (ctx: TemplateContext) => void;

	/**
	 * Enter a parse tree produced by `STGParser.formalArgs`.
	 * @param ctx the parse tree
	 */
	enterFormalArgs?: (ctx: FormalArgsContext) => void;
	/**
	 * Exit a parse tree produced by `STGParser.formalArgs`.
	 * @param ctx the parse tree
	 */
	exitFormalArgs?: (ctx: FormalArgsContext) => void;

	/**
	 * Enter a parse tree produced by `STGParser.formalArg`.
	 * @param ctx the parse tree
	 */
	enterFormalArg?: (ctx: FormalArgContext) => void;
	/**
	 * Exit a parse tree produced by `STGParser.formalArg`.
	 * @param ctx the parse tree
	 */
	exitFormalArg?: (ctx: FormalArgContext) => void;

	/**
	 * Enter a parse tree produced by `STGParser.dict`.
	 * @param ctx the parse tree
	 */
	enterDict?: (ctx: DictContext) => void;
	/**
	 * Exit a parse tree produced by `STGParser.dict`.
	 * @param ctx the parse tree
	 */
	exitDict?: (ctx: DictContext) => void;

	/**
	 * Enter a parse tree produced by `STGParser.dictPairs`.
	 * @param ctx the parse tree
	 */
	enterDictPairs?: (ctx: DictPairsContext) => void;
	/**
	 * Exit a parse tree produced by `STGParser.dictPairs`.
	 * @param ctx the parse tree
	 */
	exitDictPairs?: (ctx: DictPairsContext) => void;

	/**
	 * Enter a parse tree produced by `STGParser.keyValuePair`.
	 * @param ctx the parse tree
	 */
	enterKeyValuePair?: (ctx: KeyValuePairContext) => void;
	/**
	 * Exit a parse tree produced by `STGParser.keyValuePair`.
	 * @param ctx the parse tree
	 */
	exitKeyValuePair?: (ctx: KeyValuePairContext) => void;

	/**
	 * Enter a parse tree produced by `STGParser.defaultValuePair`.
	 * @param ctx the parse tree
	 */
	enterDefaultValuePair?: (ctx: DefaultValuePairContext) => void;
	/**
	 * Exit a parse tree produced by `STGParser.defaultValuePair`.
	 * @param ctx the parse tree
	 */
	exitDefaultValuePair?: (ctx: DefaultValuePairContext) => void;

	/**
	 * Enter a parse tree produced by `STGParser.keyValue`.
	 * @param ctx the parse tree
	 */
	enterKeyValue?: (ctx: KeyValueContext) => void;
	/**
	 * Exit a parse tree produced by `STGParser.keyValue`.
	 * @param ctx the parse tree
	 */
	exitKeyValue?: (ctx: KeyValueContext) => void;
}

