// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/stacktrace/StackTrace.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

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
 * This interface defines a complete listener for a parse tree produced by
 * `StackTraceParser`.
 */
export interface StackTraceListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `StackTraceParser.startRule`.
	 * @param ctx the parse tree
	 */
	enterStartRule?: (ctx: StartRuleContext) => void;
	/**
	 * Exit a parse tree produced by `StackTraceParser.startRule`.
	 * @param ctx the parse tree
	 */
	exitStartRule?: (ctx: StartRuleContext) => void;

	/**
	 * Enter a parse tree produced by `StackTraceParser.stackTrace`.
	 * @param ctx the parse tree
	 */
	enterStackTrace?: (ctx: StackTraceContext) => void;
	/**
	 * Exit a parse tree produced by `StackTraceParser.stackTrace`.
	 * @param ctx the parse tree
	 */
	exitStackTrace?: (ctx: StackTraceContext) => void;

	/**
	 * Enter a parse tree produced by `StackTraceParser.stackTraceLine`.
	 * @param ctx the parse tree
	 */
	enterStackTraceLine?: (ctx: StackTraceLineContext) => void;
	/**
	 * Exit a parse tree produced by `StackTraceParser.stackTraceLine`.
	 * @param ctx the parse tree
	 */
	exitStackTraceLine?: (ctx: StackTraceLineContext) => void;

	/**
	 * Enter a parse tree produced by `StackTraceParser.atLine`.
	 * @param ctx the parse tree
	 */
	enterAtLine?: (ctx: AtLineContext) => void;
	/**
	 * Exit a parse tree produced by `StackTraceParser.atLine`.
	 * @param ctx the parse tree
	 */
	exitAtLine?: (ctx: AtLineContext) => void;

	/**
	 * Enter a parse tree produced by `StackTraceParser.causedByLine`.
	 * @param ctx the parse tree
	 */
	enterCausedByLine?: (ctx: CausedByLineContext) => void;
	/**
	 * Exit a parse tree produced by `StackTraceParser.causedByLine`.
	 * @param ctx the parse tree
	 */
	exitCausedByLine?: (ctx: CausedByLineContext) => void;

	/**
	 * Enter a parse tree produced by `StackTraceParser.ellipsisLine`.
	 * @param ctx the parse tree
	 */
	enterEllipsisLine?: (ctx: EllipsisLineContext) => void;
	/**
	 * Exit a parse tree produced by `StackTraceParser.ellipsisLine`.
	 * @param ctx the parse tree
	 */
	exitEllipsisLine?: (ctx: EllipsisLineContext) => void;

	/**
	 * Enter a parse tree produced by `StackTraceParser.messageLine`.
	 * @param ctx the parse tree
	 */
	enterMessageLine?: (ctx: MessageLineContext) => void;
	/**
	 * Exit a parse tree produced by `StackTraceParser.messageLine`.
	 * @param ctx the parse tree
	 */
	exitMessageLine?: (ctx: MessageLineContext) => void;

	/**
	 * Enter a parse tree produced by `StackTraceParser.qualifiedClass`.
	 * @param ctx the parse tree
	 */
	enterQualifiedClass?: (ctx: QualifiedClassContext) => void;
	/**
	 * Exit a parse tree produced by `StackTraceParser.qualifiedClass`.
	 * @param ctx the parse tree
	 */
	exitQualifiedClass?: (ctx: QualifiedClassContext) => void;

	/**
	 * Enter a parse tree produced by `StackTraceParser.innerClassName`.
	 * @param ctx the parse tree
	 */
	enterInnerClassName?: (ctx: InnerClassNameContext) => void;
	/**
	 * Exit a parse tree produced by `StackTraceParser.innerClassName`.
	 * @param ctx the parse tree
	 */
	exitInnerClassName?: (ctx: InnerClassNameContext) => void;

	/**
	 * Enter a parse tree produced by `StackTraceParser.classFile`.
	 * @param ctx the parse tree
	 */
	enterClassFile?: (ctx: ClassFileContext) => void;
	/**
	 * Exit a parse tree produced by `StackTraceParser.classFile`.
	 * @param ctx the parse tree
	 */
	exitClassFile?: (ctx: ClassFileContext) => void;

	/**
	 * Enter a parse tree produced by `StackTraceParser.qualifiedMethod`.
	 * @param ctx the parse tree
	 */
	enterQualifiedMethod?: (ctx: QualifiedMethodContext) => void;
	/**
	 * Exit a parse tree produced by `StackTraceParser.qualifiedMethod`.
	 * @param ctx the parse tree
	 */
	exitQualifiedMethod?: (ctx: QualifiedMethodContext) => void;

	/**
	 * Enter a parse tree produced by `StackTraceParser.constructor`.
	 * @param ctx the parse tree
	 */
	enterConstructor?: (ctx: ConstructorContext) => void;
	/**
	 * Exit a parse tree produced by `StackTraceParser.constructor`.
	 * @param ctx the parse tree
	 */
	exitConstructor?: (ctx: ConstructorContext) => void;

	/**
	 * Enter a parse tree produced by `StackTraceParser.methodName`.
	 * @param ctx the parse tree
	 */
	enterMethodName?: (ctx: MethodNameContext) => void;
	/**
	 * Exit a parse tree produced by `StackTraceParser.methodName`.
	 * @param ctx the parse tree
	 */
	exitMethodName?: (ctx: MethodNameContext) => void;

	/**
	 * Enter a parse tree produced by `StackTraceParser.packagePath`.
	 * @param ctx the parse tree
	 */
	enterPackagePath?: (ctx: PackagePathContext) => void;
	/**
	 * Exit a parse tree produced by `StackTraceParser.packagePath`.
	 * @param ctx the parse tree
	 */
	exitPackagePath?: (ctx: PackagePathContext) => void;

	/**
	 * Enter a parse tree produced by `StackTraceParser.className`.
	 * @param ctx the parse tree
	 */
	enterClassName?: (ctx: ClassNameContext) => void;
	/**
	 * Exit a parse tree produced by `StackTraceParser.className`.
	 * @param ctx the parse tree
	 */
	exitClassName?: (ctx: ClassNameContext) => void;

	/**
	 * Enter a parse tree produced by `StackTraceParser.identifier`.
	 * @param ctx the parse tree
	 */
	enterIdentifier?: (ctx: IdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `StackTraceParser.identifier`.
	 * @param ctx the parse tree
	 */
	exitIdentifier?: (ctx: IdentifierContext) => void;

	/**
	 * Enter a parse tree produced by `StackTraceParser.message`.
	 * @param ctx the parse tree
	 */
	enterMessage?: (ctx: MessageContext) => void;
	/**
	 * Exit a parse tree produced by `StackTraceParser.message`.
	 * @param ctx the parse tree
	 */
	exitMessage?: (ctx: MessageContext) => void;
}

