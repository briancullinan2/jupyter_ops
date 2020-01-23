// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/rfc822/rfc822-emailaddress/emailaddress.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { EmailaddressContext } from "./emailaddressParser";
import { GroupContext } from "./emailaddressParser";
import { MailboxContext } from "./emailaddressParser";
import { RouteaddrContext } from "./emailaddressParser";
import { RouteContext } from "./emailaddressParser";
import { AddrspecContext } from "./emailaddressParser";
import { LocalpartContext } from "./emailaddressParser";
import { DomainContext } from "./emailaddressParser";
import { SubdomainContext } from "./emailaddressParser";
import { DomainrefContext } from "./emailaddressParser";
import { PhraseContext } from "./emailaddressParser";
import { WordContext } from "./emailaddressParser";
import { LwspcharContext } from "./emailaddressParser";
import { LwspContext } from "./emailaddressParser";
import { DelimetersContext } from "./emailaddressParser";
import { AtomContext } from "./emailaddressParser";
import { QuotedpairContext } from "./emailaddressParser";
import { DomainliteralContext } from "./emailaddressParser";
import { QuotedstringContext } from "./emailaddressParser";
import { CommentContext } from "./emailaddressParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `emailaddressParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface emailaddressVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `emailaddressParser.emailaddress`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEmailaddress?: (ctx: EmailaddressContext) => Result;

	/**
	 * Visit a parse tree produced by `emailaddressParser.group`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGroup?: (ctx: GroupContext) => Result;

	/**
	 * Visit a parse tree produced by `emailaddressParser.mailbox`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMailbox?: (ctx: MailboxContext) => Result;

	/**
	 * Visit a parse tree produced by `emailaddressParser.routeaddr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRouteaddr?: (ctx: RouteaddrContext) => Result;

	/**
	 * Visit a parse tree produced by `emailaddressParser.route`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRoute?: (ctx: RouteContext) => Result;

	/**
	 * Visit a parse tree produced by `emailaddressParser.addrspec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAddrspec?: (ctx: AddrspecContext) => Result;

	/**
	 * Visit a parse tree produced by `emailaddressParser.localpart`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLocalpart?: (ctx: LocalpartContext) => Result;

	/**
	 * Visit a parse tree produced by `emailaddressParser.domain`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDomain?: (ctx: DomainContext) => Result;

	/**
	 * Visit a parse tree produced by `emailaddressParser.subdomain`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubdomain?: (ctx: SubdomainContext) => Result;

	/**
	 * Visit a parse tree produced by `emailaddressParser.domainref`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDomainref?: (ctx: DomainrefContext) => Result;

	/**
	 * Visit a parse tree produced by `emailaddressParser.phrase`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPhrase?: (ctx: PhraseContext) => Result;

	/**
	 * Visit a parse tree produced by `emailaddressParser.word`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWord?: (ctx: WordContext) => Result;

	/**
	 * Visit a parse tree produced by `emailaddressParser.lwspchar`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLwspchar?: (ctx: LwspcharContext) => Result;

	/**
	 * Visit a parse tree produced by `emailaddressParser.lwsp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLwsp?: (ctx: LwspContext) => Result;

	/**
	 * Visit a parse tree produced by `emailaddressParser.delimeters`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDelimeters?: (ctx: DelimetersContext) => Result;

	/**
	 * Visit a parse tree produced by `emailaddressParser.atom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAtom?: (ctx: AtomContext) => Result;

	/**
	 * Visit a parse tree produced by `emailaddressParser.quotedpair`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQuotedpair?: (ctx: QuotedpairContext) => Result;

	/**
	 * Visit a parse tree produced by `emailaddressParser.domainliteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDomainliteral?: (ctx: DomainliteralContext) => Result;

	/**
	 * Visit a parse tree produced by `emailaddressParser.quotedstring`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQuotedstring?: (ctx: QuotedstringContext) => Result;

	/**
	 * Visit a parse tree produced by `emailaddressParser.comment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComment?: (ctx: CommentContext) => Result;
}

