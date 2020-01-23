// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/rfc822/rfc822-emailaddress/emailaddress.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

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
 * This interface defines a complete listener for a parse tree produced by
 * `emailaddressParser`.
 */
export interface emailaddressListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `emailaddressParser.emailaddress`.
	 * @param ctx the parse tree
	 */
	enterEmailaddress?: (ctx: EmailaddressContext) => void;
	/**
	 * Exit a parse tree produced by `emailaddressParser.emailaddress`.
	 * @param ctx the parse tree
	 */
	exitEmailaddress?: (ctx: EmailaddressContext) => void;

	/**
	 * Enter a parse tree produced by `emailaddressParser.group`.
	 * @param ctx the parse tree
	 */
	enterGroup?: (ctx: GroupContext) => void;
	/**
	 * Exit a parse tree produced by `emailaddressParser.group`.
	 * @param ctx the parse tree
	 */
	exitGroup?: (ctx: GroupContext) => void;

	/**
	 * Enter a parse tree produced by `emailaddressParser.mailbox`.
	 * @param ctx the parse tree
	 */
	enterMailbox?: (ctx: MailboxContext) => void;
	/**
	 * Exit a parse tree produced by `emailaddressParser.mailbox`.
	 * @param ctx the parse tree
	 */
	exitMailbox?: (ctx: MailboxContext) => void;

	/**
	 * Enter a parse tree produced by `emailaddressParser.routeaddr`.
	 * @param ctx the parse tree
	 */
	enterRouteaddr?: (ctx: RouteaddrContext) => void;
	/**
	 * Exit a parse tree produced by `emailaddressParser.routeaddr`.
	 * @param ctx the parse tree
	 */
	exitRouteaddr?: (ctx: RouteaddrContext) => void;

	/**
	 * Enter a parse tree produced by `emailaddressParser.route`.
	 * @param ctx the parse tree
	 */
	enterRoute?: (ctx: RouteContext) => void;
	/**
	 * Exit a parse tree produced by `emailaddressParser.route`.
	 * @param ctx the parse tree
	 */
	exitRoute?: (ctx: RouteContext) => void;

	/**
	 * Enter a parse tree produced by `emailaddressParser.addrspec`.
	 * @param ctx the parse tree
	 */
	enterAddrspec?: (ctx: AddrspecContext) => void;
	/**
	 * Exit a parse tree produced by `emailaddressParser.addrspec`.
	 * @param ctx the parse tree
	 */
	exitAddrspec?: (ctx: AddrspecContext) => void;

	/**
	 * Enter a parse tree produced by `emailaddressParser.localpart`.
	 * @param ctx the parse tree
	 */
	enterLocalpart?: (ctx: LocalpartContext) => void;
	/**
	 * Exit a parse tree produced by `emailaddressParser.localpart`.
	 * @param ctx the parse tree
	 */
	exitLocalpart?: (ctx: LocalpartContext) => void;

	/**
	 * Enter a parse tree produced by `emailaddressParser.domain`.
	 * @param ctx the parse tree
	 */
	enterDomain?: (ctx: DomainContext) => void;
	/**
	 * Exit a parse tree produced by `emailaddressParser.domain`.
	 * @param ctx the parse tree
	 */
	exitDomain?: (ctx: DomainContext) => void;

	/**
	 * Enter a parse tree produced by `emailaddressParser.subdomain`.
	 * @param ctx the parse tree
	 */
	enterSubdomain?: (ctx: SubdomainContext) => void;
	/**
	 * Exit a parse tree produced by `emailaddressParser.subdomain`.
	 * @param ctx the parse tree
	 */
	exitSubdomain?: (ctx: SubdomainContext) => void;

	/**
	 * Enter a parse tree produced by `emailaddressParser.domainref`.
	 * @param ctx the parse tree
	 */
	enterDomainref?: (ctx: DomainrefContext) => void;
	/**
	 * Exit a parse tree produced by `emailaddressParser.domainref`.
	 * @param ctx the parse tree
	 */
	exitDomainref?: (ctx: DomainrefContext) => void;

	/**
	 * Enter a parse tree produced by `emailaddressParser.phrase`.
	 * @param ctx the parse tree
	 */
	enterPhrase?: (ctx: PhraseContext) => void;
	/**
	 * Exit a parse tree produced by `emailaddressParser.phrase`.
	 * @param ctx the parse tree
	 */
	exitPhrase?: (ctx: PhraseContext) => void;

	/**
	 * Enter a parse tree produced by `emailaddressParser.word`.
	 * @param ctx the parse tree
	 */
	enterWord?: (ctx: WordContext) => void;
	/**
	 * Exit a parse tree produced by `emailaddressParser.word`.
	 * @param ctx the parse tree
	 */
	exitWord?: (ctx: WordContext) => void;

	/**
	 * Enter a parse tree produced by `emailaddressParser.lwspchar`.
	 * @param ctx the parse tree
	 */
	enterLwspchar?: (ctx: LwspcharContext) => void;
	/**
	 * Exit a parse tree produced by `emailaddressParser.lwspchar`.
	 * @param ctx the parse tree
	 */
	exitLwspchar?: (ctx: LwspcharContext) => void;

	/**
	 * Enter a parse tree produced by `emailaddressParser.lwsp`.
	 * @param ctx the parse tree
	 */
	enterLwsp?: (ctx: LwspContext) => void;
	/**
	 * Exit a parse tree produced by `emailaddressParser.lwsp`.
	 * @param ctx the parse tree
	 */
	exitLwsp?: (ctx: LwspContext) => void;

	/**
	 * Enter a parse tree produced by `emailaddressParser.delimeters`.
	 * @param ctx the parse tree
	 */
	enterDelimeters?: (ctx: DelimetersContext) => void;
	/**
	 * Exit a parse tree produced by `emailaddressParser.delimeters`.
	 * @param ctx the parse tree
	 */
	exitDelimeters?: (ctx: DelimetersContext) => void;

	/**
	 * Enter a parse tree produced by `emailaddressParser.atom`.
	 * @param ctx the parse tree
	 */
	enterAtom?: (ctx: AtomContext) => void;
	/**
	 * Exit a parse tree produced by `emailaddressParser.atom`.
	 * @param ctx the parse tree
	 */
	exitAtom?: (ctx: AtomContext) => void;

	/**
	 * Enter a parse tree produced by `emailaddressParser.quotedpair`.
	 * @param ctx the parse tree
	 */
	enterQuotedpair?: (ctx: QuotedpairContext) => void;
	/**
	 * Exit a parse tree produced by `emailaddressParser.quotedpair`.
	 * @param ctx the parse tree
	 */
	exitQuotedpair?: (ctx: QuotedpairContext) => void;

	/**
	 * Enter a parse tree produced by `emailaddressParser.domainliteral`.
	 * @param ctx the parse tree
	 */
	enterDomainliteral?: (ctx: DomainliteralContext) => void;
	/**
	 * Exit a parse tree produced by `emailaddressParser.domainliteral`.
	 * @param ctx the parse tree
	 */
	exitDomainliteral?: (ctx: DomainliteralContext) => void;

	/**
	 * Enter a parse tree produced by `emailaddressParser.quotedstring`.
	 * @param ctx the parse tree
	 */
	enterQuotedstring?: (ctx: QuotedstringContext) => void;
	/**
	 * Exit a parse tree produced by `emailaddressParser.quotedstring`.
	 * @param ctx the parse tree
	 */
	exitQuotedstring?: (ctx: QuotedstringContext) => void;

	/**
	 * Enter a parse tree produced by `emailaddressParser.comment`.
	 * @param ctx the parse tree
	 */
	enterComment?: (ctx: CommentContext) => void;
	/**
	 * Exit a parse tree produced by `emailaddressParser.comment`.
	 * @param ctx the parse tree
	 */
	exitComment?: (ctx: CommentContext) => void;
}

