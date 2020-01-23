// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/url/url.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

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
 * This interface defines a complete listener for a parse tree produced by
 * `urlParser`.
 */
export interface urlListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by the `DomainNameOrIPv4Host`
	 * labeled alternative in `urlParser.hostname`.
	 * @param ctx the parse tree
	 */
	enterDomainNameOrIPv4Host?: (ctx: DomainNameOrIPv4HostContext) => void;
	/**
	 * Exit a parse tree produced by the `DomainNameOrIPv4Host`
	 * labeled alternative in `urlParser.hostname`.
	 * @param ctx the parse tree
	 */
	exitDomainNameOrIPv4Host?: (ctx: DomainNameOrIPv4HostContext) => void;

	/**
	 * Enter a parse tree produced by the `IPv6Host`
	 * labeled alternative in `urlParser.hostname`.
	 * @param ctx the parse tree
	 */
	enterIPv6Host?: (ctx: IPv6HostContext) => void;
	/**
	 * Exit a parse tree produced by the `IPv6Host`
	 * labeled alternative in `urlParser.hostname`.
	 * @param ctx the parse tree
	 */
	exitIPv6Host?: (ctx: IPv6HostContext) => void;

	/**
	 * Enter a parse tree produced by `urlParser.url`.
	 * @param ctx the parse tree
	 */
	enterUrl?: (ctx: UrlContext) => void;
	/**
	 * Exit a parse tree produced by `urlParser.url`.
	 * @param ctx the parse tree
	 */
	exitUrl?: (ctx: UrlContext) => void;

	/**
	 * Enter a parse tree produced by `urlParser.uri`.
	 * @param ctx the parse tree
	 */
	enterUri?: (ctx: UriContext) => void;
	/**
	 * Exit a parse tree produced by `urlParser.uri`.
	 * @param ctx the parse tree
	 */
	exitUri?: (ctx: UriContext) => void;

	/**
	 * Enter a parse tree produced by `urlParser.scheme`.
	 * @param ctx the parse tree
	 */
	enterScheme?: (ctx: SchemeContext) => void;
	/**
	 * Exit a parse tree produced by `urlParser.scheme`.
	 * @param ctx the parse tree
	 */
	exitScheme?: (ctx: SchemeContext) => void;

	/**
	 * Enter a parse tree produced by `urlParser.host`.
	 * @param ctx the parse tree
	 */
	enterHost?: (ctx: HostContext) => void;
	/**
	 * Exit a parse tree produced by `urlParser.host`.
	 * @param ctx the parse tree
	 */
	exitHost?: (ctx: HostContext) => void;

	/**
	 * Enter a parse tree produced by `urlParser.hostname`.
	 * @param ctx the parse tree
	 */
	enterHostname?: (ctx: HostnameContext) => void;
	/**
	 * Exit a parse tree produced by `urlParser.hostname`.
	 * @param ctx the parse tree
	 */
	exitHostname?: (ctx: HostnameContext) => void;

	/**
	 * Enter a parse tree produced by `urlParser.v6host`.
	 * @param ctx the parse tree
	 */
	enterV6host?: (ctx: V6hostContext) => void;
	/**
	 * Exit a parse tree produced by `urlParser.v6host`.
	 * @param ctx the parse tree
	 */
	exitV6host?: (ctx: V6hostContext) => void;

	/**
	 * Enter a parse tree produced by `urlParser.port`.
	 * @param ctx the parse tree
	 */
	enterPort?: (ctx: PortContext) => void;
	/**
	 * Exit a parse tree produced by `urlParser.port`.
	 * @param ctx the parse tree
	 */
	exitPort?: (ctx: PortContext) => void;

	/**
	 * Enter a parse tree produced by `urlParser.path`.
	 * @param ctx the parse tree
	 */
	enterPath?: (ctx: PathContext) => void;
	/**
	 * Exit a parse tree produced by `urlParser.path`.
	 * @param ctx the parse tree
	 */
	exitPath?: (ctx: PathContext) => void;

	/**
	 * Enter a parse tree produced by `urlParser.user`.
	 * @param ctx the parse tree
	 */
	enterUser?: (ctx: UserContext) => void;
	/**
	 * Exit a parse tree produced by `urlParser.user`.
	 * @param ctx the parse tree
	 */
	exitUser?: (ctx: UserContext) => void;

	/**
	 * Enter a parse tree produced by `urlParser.login`.
	 * @param ctx the parse tree
	 */
	enterLogin?: (ctx: LoginContext) => void;
	/**
	 * Exit a parse tree produced by `urlParser.login`.
	 * @param ctx the parse tree
	 */
	exitLogin?: (ctx: LoginContext) => void;

	/**
	 * Enter a parse tree produced by `urlParser.password`.
	 * @param ctx the parse tree
	 */
	enterPassword?: (ctx: PasswordContext) => void;
	/**
	 * Exit a parse tree produced by `urlParser.password`.
	 * @param ctx the parse tree
	 */
	exitPassword?: (ctx: PasswordContext) => void;

	/**
	 * Enter a parse tree produced by `urlParser.frag`.
	 * @param ctx the parse tree
	 */
	enterFrag?: (ctx: FragContext) => void;
	/**
	 * Exit a parse tree produced by `urlParser.frag`.
	 * @param ctx the parse tree
	 */
	exitFrag?: (ctx: FragContext) => void;

	/**
	 * Enter a parse tree produced by `urlParser.query`.
	 * @param ctx the parse tree
	 */
	enterQuery?: (ctx: QueryContext) => void;
	/**
	 * Exit a parse tree produced by `urlParser.query`.
	 * @param ctx the parse tree
	 */
	exitQuery?: (ctx: QueryContext) => void;

	/**
	 * Enter a parse tree produced by `urlParser.search`.
	 * @param ctx the parse tree
	 */
	enterSearch?: (ctx: SearchContext) => void;
	/**
	 * Exit a parse tree produced by `urlParser.search`.
	 * @param ctx the parse tree
	 */
	exitSearch?: (ctx: SearchContext) => void;

	/**
	 * Enter a parse tree produced by `urlParser.searchparameter`.
	 * @param ctx the parse tree
	 */
	enterSearchparameter?: (ctx: SearchparameterContext) => void;
	/**
	 * Exit a parse tree produced by `urlParser.searchparameter`.
	 * @param ctx the parse tree
	 */
	exitSearchparameter?: (ctx: SearchparameterContext) => void;

	/**
	 * Enter a parse tree produced by `urlParser.string`.
	 * @param ctx the parse tree
	 */
	enterString?: (ctx: StringContext) => void;
	/**
	 * Exit a parse tree produced by `urlParser.string`.
	 * @param ctx the parse tree
	 */
	exitString?: (ctx: StringContext) => void;
}

