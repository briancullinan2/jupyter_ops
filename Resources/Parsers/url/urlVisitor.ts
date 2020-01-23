// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/url/url.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { DomainNameOrIPv4HostContext } from "./urlParser";
import { IPv6HostContext } from "./urlParser";
import { UrlContext } from "./urlParser";
import { UriContext } from "./urlParser";
import { SchemeContext } from "./urlParser";
import { HostContext } from "./urlParser";
import { HostnameContext } from "./urlParser";
import { V6hostContext } from "./urlParser";
import { PortContext } from "./urlParser";
import { PathContext } from "./urlParser";
import { UserContext } from "./urlParser";
import { LoginContext } from "./urlParser";
import { PasswordContext } from "./urlParser";
import { FragContext } from "./urlParser";
import { QueryContext } from "./urlParser";
import { SearchContext } from "./urlParser";
import { SearchparameterContext } from "./urlParser";
import { StringContext } from "./urlParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `urlParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface urlVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by the `DomainNameOrIPv4Host`
	 * labeled alternative in `urlParser.hostname`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDomainNameOrIPv4Host?: (ctx: DomainNameOrIPv4HostContext) => Result;

	/**
	 * Visit a parse tree produced by the `IPv6Host`
	 * labeled alternative in `urlParser.hostname`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIPv6Host?: (ctx: IPv6HostContext) => Result;

	/**
	 * Visit a parse tree produced by `urlParser.url`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUrl?: (ctx: UrlContext) => Result;

	/**
	 * Visit a parse tree produced by `urlParser.uri`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUri?: (ctx: UriContext) => Result;

	/**
	 * Visit a parse tree produced by `urlParser.scheme`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitScheme?: (ctx: SchemeContext) => Result;

	/**
	 * Visit a parse tree produced by `urlParser.host`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHost?: (ctx: HostContext) => Result;

	/**
	 * Visit a parse tree produced by `urlParser.hostname`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHostname?: (ctx: HostnameContext) => Result;

	/**
	 * Visit a parse tree produced by `urlParser.v6host`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitV6host?: (ctx: V6hostContext) => Result;

	/**
	 * Visit a parse tree produced by `urlParser.port`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPort?: (ctx: PortContext) => Result;

	/**
	 * Visit a parse tree produced by `urlParser.path`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPath?: (ctx: PathContext) => Result;

	/**
	 * Visit a parse tree produced by `urlParser.user`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUser?: (ctx: UserContext) => Result;

	/**
	 * Visit a parse tree produced by `urlParser.login`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogin?: (ctx: LoginContext) => Result;

	/**
	 * Visit a parse tree produced by `urlParser.password`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPassword?: (ctx: PasswordContext) => Result;

	/**
	 * Visit a parse tree produced by `urlParser.frag`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFrag?: (ctx: FragContext) => Result;

	/**
	 * Visit a parse tree produced by `urlParser.query`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQuery?: (ctx: QueryContext) => Result;

	/**
	 * Visit a parse tree produced by `urlParser.search`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSearch?: (ctx: SearchContext) => Result;

	/**
	 * Visit a parse tree produced by `urlParser.searchparameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSearchparameter?: (ctx: SearchparameterContext) => Result;

	/**
	 * Visit a parse tree produced by `urlParser.string`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitString?: (ctx: StringContext) => Result;
}

