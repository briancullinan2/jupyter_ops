// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/objc/two-step-processing/ObjectiveCPreprocessorParser.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { PreprocessorConstantContext } from "./ObjectiveCPreprocessorParser";
import { PreprocessorConditionalSymbolContext } from "./ObjectiveCPreprocessorParser";
import { PreprocessorParenthesisContext } from "./ObjectiveCPreprocessorParser";
import { PreprocessorNotContext } from "./ObjectiveCPreprocessorParser";
import { PreprocessorBinaryContext } from "./ObjectiveCPreprocessorParser";
import { PreprocessorDefinedContext } from "./ObjectiveCPreprocessorParser";
import { PreprocessorImportContext } from "./ObjectiveCPreprocessorParser";
import { PreprocessorConditionalContext } from "./ObjectiveCPreprocessorParser";
import { PreprocessorDefContext } from "./ObjectiveCPreprocessorParser";
import { PreprocessorPragmaContext } from "./ObjectiveCPreprocessorParser";
import { PreprocessorErrorContext } from "./ObjectiveCPreprocessorParser";
import { PreprocessorDefineContext } from "./ObjectiveCPreprocessorParser";
import { ObjectiveCDocumentContext } from "./ObjectiveCPreprocessorParser";
import { TextContext } from "./ObjectiveCPreprocessorParser";
import { CodeContext } from "./ObjectiveCPreprocessorParser";
import { DirectiveContext } from "./ObjectiveCPreprocessorParser";
import { Directive_textContext } from "./ObjectiveCPreprocessorParser";
import { Preprocessor_expressionContext } from "./ObjectiveCPreprocessorParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `ObjectiveCPreprocessorParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface ObjectiveCPreprocessorParserVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by the `preprocessorConstant`
	 * labeled alternative in `ObjectiveCPreprocessorParser.preprocessor_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPreprocessorConstant?: (ctx: PreprocessorConstantContext) => Result;

	/**
	 * Visit a parse tree produced by the `preprocessorConditionalSymbol`
	 * labeled alternative in `ObjectiveCPreprocessorParser.preprocessor_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPreprocessorConditionalSymbol?: (ctx: PreprocessorConditionalSymbolContext) => Result;

	/**
	 * Visit a parse tree produced by the `preprocessorParenthesis`
	 * labeled alternative in `ObjectiveCPreprocessorParser.preprocessor_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPreprocessorParenthesis?: (ctx: PreprocessorParenthesisContext) => Result;

	/**
	 * Visit a parse tree produced by the `preprocessorNot`
	 * labeled alternative in `ObjectiveCPreprocessorParser.preprocessor_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPreprocessorNot?: (ctx: PreprocessorNotContext) => Result;

	/**
	 * Visit a parse tree produced by the `preprocessorBinary`
	 * labeled alternative in `ObjectiveCPreprocessorParser.preprocessor_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPreprocessorBinary?: (ctx: PreprocessorBinaryContext) => Result;

	/**
	 * Visit a parse tree produced by the `preprocessorDefined`
	 * labeled alternative in `ObjectiveCPreprocessorParser.preprocessor_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPreprocessorDefined?: (ctx: PreprocessorDefinedContext) => Result;

	/**
	 * Visit a parse tree produced by the `preprocessorImport`
	 * labeled alternative in `ObjectiveCPreprocessorParser.directive`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPreprocessorImport?: (ctx: PreprocessorImportContext) => Result;

	/**
	 * Visit a parse tree produced by the `preprocessorConditional`
	 * labeled alternative in `ObjectiveCPreprocessorParser.directive`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPreprocessorConditional?: (ctx: PreprocessorConditionalContext) => Result;

	/**
	 * Visit a parse tree produced by the `preprocessorDef`
	 * labeled alternative in `ObjectiveCPreprocessorParser.directive`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPreprocessorDef?: (ctx: PreprocessorDefContext) => Result;

	/**
	 * Visit a parse tree produced by the `preprocessorPragma`
	 * labeled alternative in `ObjectiveCPreprocessorParser.directive`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPreprocessorPragma?: (ctx: PreprocessorPragmaContext) => Result;

	/**
	 * Visit a parse tree produced by the `preprocessorError`
	 * labeled alternative in `ObjectiveCPreprocessorParser.directive`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPreprocessorError?: (ctx: PreprocessorErrorContext) => Result;

	/**
	 * Visit a parse tree produced by the `preprocessorDefine`
	 * labeled alternative in `ObjectiveCPreprocessorParser.directive`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPreprocessorDefine?: (ctx: PreprocessorDefineContext) => Result;

	/**
	 * Visit a parse tree produced by `ObjectiveCPreprocessorParser.objectiveCDocument`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitObjectiveCDocument?: (ctx: ObjectiveCDocumentContext) => Result;

	/**
	 * Visit a parse tree produced by `ObjectiveCPreprocessorParser.text`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitText?: (ctx: TextContext) => Result;

	/**
	 * Visit a parse tree produced by `ObjectiveCPreprocessorParser.code`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCode?: (ctx: CodeContext) => Result;

	/**
	 * Visit a parse tree produced by `ObjectiveCPreprocessorParser.directive`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDirective?: (ctx: DirectiveContext) => Result;

	/**
	 * Visit a parse tree produced by `ObjectiveCPreprocessorParser.directive_text`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDirective_text?: (ctx: Directive_textContext) => Result;

	/**
	 * Visit a parse tree produced by `ObjectiveCPreprocessorParser.preprocessor_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPreprocessor_expression?: (ctx: Preprocessor_expressionContext) => Result;
}

