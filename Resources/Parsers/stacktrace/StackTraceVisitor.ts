// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/stacktrace/StackTrace.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { StartRuleContext } from "./StackTraceParser";
import { StackTraceContext } from "./StackTraceParser";
import { StackTraceLineContext } from "./StackTraceParser";
import { AtLineContext } from "./StackTraceParser";
import { CausedByLineContext } from "./StackTraceParser";
import { EllipsisLineContext } from "./StackTraceParser";
import { MessageLineContext } from "./StackTraceParser";
import { QualifiedClassContext } from "./StackTraceParser";
import { InnerClassNameContext } from "./StackTraceParser";
import { ClassFileContext } from "./StackTraceParser";
import { QualifiedMethodContext } from "./StackTraceParser";
import { ConstructorContext } from "./StackTraceParser";
import { MethodNameContext } from "./StackTraceParser";
import { PackagePathContext } from "./StackTraceParser";
import { ClassNameContext } from "./StackTraceParser";
import { IdentifierContext } from "./StackTraceParser";
import { MessageContext } from "./StackTraceParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `StackTraceParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface StackTraceVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `StackTraceParser.startRule`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStartRule?: (ctx: StartRuleContext) => Result;

	/**
	 * Visit a parse tree produced by `StackTraceParser.stackTrace`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStackTrace?: (ctx: StackTraceContext) => Result;

	/**
	 * Visit a parse tree produced by `StackTraceParser.stackTraceLine`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStackTraceLine?: (ctx: StackTraceLineContext) => Result;

	/**
	 * Visit a parse tree produced by `StackTraceParser.atLine`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAtLine?: (ctx: AtLineContext) => Result;

	/**
	 * Visit a parse tree produced by `StackTraceParser.causedByLine`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCausedByLine?: (ctx: CausedByLineContext) => Result;

	/**
	 * Visit a parse tree produced by `StackTraceParser.ellipsisLine`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEllipsisLine?: (ctx: EllipsisLineContext) => Result;

	/**
	 * Visit a parse tree produced by `StackTraceParser.messageLine`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMessageLine?: (ctx: MessageLineContext) => Result;

	/**
	 * Visit a parse tree produced by `StackTraceParser.qualifiedClass`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQualifiedClass?: (ctx: QualifiedClassContext) => Result;

	/**
	 * Visit a parse tree produced by `StackTraceParser.innerClassName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInnerClassName?: (ctx: InnerClassNameContext) => Result;

	/**
	 * Visit a parse tree produced by `StackTraceParser.classFile`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassFile?: (ctx: ClassFileContext) => Result;

	/**
	 * Visit a parse tree produced by `StackTraceParser.qualifiedMethod`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQualifiedMethod?: (ctx: QualifiedMethodContext) => Result;

	/**
	 * Visit a parse tree produced by `StackTraceParser.constructor`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstructor?: (ctx: ConstructorContext) => Result;

	/**
	 * Visit a parse tree produced by `StackTraceParser.methodName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMethodName?: (ctx: MethodNameContext) => Result;

	/**
	 * Visit a parse tree produced by `StackTraceParser.packagePath`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPackagePath?: (ctx: PackagePathContext) => Result;

	/**
	 * Visit a parse tree produced by `StackTraceParser.className`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassName?: (ctx: ClassNameContext) => Result;

	/**
	 * Visit a parse tree produced by `StackTraceParser.identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifier?: (ctx: IdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by `StackTraceParser.message`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMessage?: (ctx: MessageContext) => Result;
}

