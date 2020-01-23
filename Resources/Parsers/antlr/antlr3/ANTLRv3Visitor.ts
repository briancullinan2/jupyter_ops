// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/antlr/antlr3/ANTLRv3.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { GrammarDefContext } from "./ANTLRv3Parser";
import { TokensSpecContext } from "./ANTLRv3Parser";
import { TokenSpecContext } from "./ANTLRv3Parser";
import { AttrScopeContext } from "./ANTLRv3Parser";
import { ActionContext } from "./ANTLRv3Parser";
import { ActionScopeNameContext } from "./ANTLRv3Parser";
import { OptionsSpecContext } from "./ANTLRv3Parser";
import { OptionContext } from "./ANTLRv3Parser";
import { OptionValueContext } from "./ANTLRv3Parser";
import { Rule_Context } from "./ANTLRv3Parser";
import { RuleActionContext } from "./ANTLRv3Parser";
import { ThrowsSpecContext } from "./ANTLRv3Parser";
import { RuleScopeSpecContext } from "./ANTLRv3Parser";
import { BlockContext } from "./ANTLRv3Parser";
import { AltListContext } from "./ANTLRv3Parser";
import { AlternativeContext } from "./ANTLRv3Parser";
import { ExceptionGroupContext } from "./ANTLRv3Parser";
import { ExceptionHandlerContext } from "./ANTLRv3Parser";
import { FinallyClauseContext } from "./ANTLRv3Parser";
import { ElementContext } from "./ANTLRv3Parser";
import { ElementNoOptionSpecContext } from "./ANTLRv3Parser";
import { AtomContext } from "./ANTLRv3Parser";
import { NotSetContext } from "./ANTLRv3Parser";
import { TreeSpecContext } from "./ANTLRv3Parser";
import { EbnfContext } from "./ANTLRv3Parser";
import { RangeContext } from "./ANTLRv3Parser";
import { Terminal_Context } from "./ANTLRv3Parser";
import { NotTerminalContext } from "./ANTLRv3Parser";
import { EbnfSuffixContext } from "./ANTLRv3Parser";
import { RewriteContext } from "./ANTLRv3Parser";
import { Rewrite_alternativeContext } from "./ANTLRv3Parser";
import { Rewrite_tree_blockContext } from "./ANTLRv3Parser";
import { Rewrite_tree_alternativeContext } from "./ANTLRv3Parser";
import { Rewrite_tree_elementContext } from "./ANTLRv3Parser";
import { Rewrite_tree_atomContext } from "./ANTLRv3Parser";
import { Rewrite_tree_ebnfContext } from "./ANTLRv3Parser";
import { Rewrite_treeContext } from "./ANTLRv3Parser";
import { Rewrite_templateContext } from "./ANTLRv3Parser";
import { Rewrite_template_refContext } from "./ANTLRv3Parser";
import { Rewrite_indirect_template_headContext } from "./ANTLRv3Parser";
import { Rewrite_template_argsContext } from "./ANTLRv3Parser";
import { Rewrite_template_argContext } from "./ANTLRv3Parser";
import { IdContext } from "./ANTLRv3Parser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `ANTLRv3Parser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface ANTLRv3Visitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `ANTLRv3Parser.grammarDef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGrammarDef?: (ctx: GrammarDefContext) => Result;

	/**
	 * Visit a parse tree produced by `ANTLRv3Parser.tokensSpec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTokensSpec?: (ctx: TokensSpecContext) => Result;

	/**
	 * Visit a parse tree produced by `ANTLRv3Parser.tokenSpec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTokenSpec?: (ctx: TokenSpecContext) => Result;

	/**
	 * Visit a parse tree produced by `ANTLRv3Parser.attrScope`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAttrScope?: (ctx: AttrScopeContext) => Result;

	/**
	 * Visit a parse tree produced by `ANTLRv3Parser.action`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAction?: (ctx: ActionContext) => Result;

	/**
	 * Visit a parse tree produced by `ANTLRv3Parser.actionScopeName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitActionScopeName?: (ctx: ActionScopeNameContext) => Result;

	/**
	 * Visit a parse tree produced by `ANTLRv3Parser.optionsSpec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOptionsSpec?: (ctx: OptionsSpecContext) => Result;

	/**
	 * Visit a parse tree produced by `ANTLRv3Parser.option`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOption?: (ctx: OptionContext) => Result;

	/**
	 * Visit a parse tree produced by `ANTLRv3Parser.optionValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOptionValue?: (ctx: OptionValueContext) => Result;

	/**
	 * Visit a parse tree produced by `ANTLRv3Parser.rule_`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRule_?: (ctx: Rule_Context) => Result;

	/**
	 * Visit a parse tree produced by `ANTLRv3Parser.ruleAction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRuleAction?: (ctx: RuleActionContext) => Result;

	/**
	 * Visit a parse tree produced by `ANTLRv3Parser.throwsSpec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitThrowsSpec?: (ctx: ThrowsSpecContext) => Result;

	/**
	 * Visit a parse tree produced by `ANTLRv3Parser.ruleScopeSpec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRuleScopeSpec?: (ctx: RuleScopeSpecContext) => Result;

	/**
	 * Visit a parse tree produced by `ANTLRv3Parser.block`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlock?: (ctx: BlockContext) => Result;

	/**
	 * Visit a parse tree produced by `ANTLRv3Parser.altList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAltList?: (ctx: AltListContext) => Result;

	/**
	 * Visit a parse tree produced by `ANTLRv3Parser.alternative`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlternative?: (ctx: AlternativeContext) => Result;

	/**
	 * Visit a parse tree produced by `ANTLRv3Parser.exceptionGroup`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExceptionGroup?: (ctx: ExceptionGroupContext) => Result;

	/**
	 * Visit a parse tree produced by `ANTLRv3Parser.exceptionHandler`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExceptionHandler?: (ctx: ExceptionHandlerContext) => Result;

	/**
	 * Visit a parse tree produced by `ANTLRv3Parser.finallyClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFinallyClause?: (ctx: FinallyClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `ANTLRv3Parser.element`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElement?: (ctx: ElementContext) => Result;

	/**
	 * Visit a parse tree produced by `ANTLRv3Parser.elementNoOptionSpec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElementNoOptionSpec?: (ctx: ElementNoOptionSpecContext) => Result;

	/**
	 * Visit a parse tree produced by `ANTLRv3Parser.atom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAtom?: (ctx: AtomContext) => Result;

	/**
	 * Visit a parse tree produced by `ANTLRv3Parser.notSet`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNotSet?: (ctx: NotSetContext) => Result;

	/**
	 * Visit a parse tree produced by `ANTLRv3Parser.treeSpec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTreeSpec?: (ctx: TreeSpecContext) => Result;

	/**
	 * Visit a parse tree produced by `ANTLRv3Parser.ebnf`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEbnf?: (ctx: EbnfContext) => Result;

	/**
	 * Visit a parse tree produced by `ANTLRv3Parser.range`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRange?: (ctx: RangeContext) => Result;

	/**
	 * Visit a parse tree produced by `ANTLRv3Parser.terminal_`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTerminal_?: (ctx: Terminal_Context) => Result;

	/**
	 * Visit a parse tree produced by `ANTLRv3Parser.notTerminal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNotTerminal?: (ctx: NotTerminalContext) => Result;

	/**
	 * Visit a parse tree produced by `ANTLRv3Parser.ebnfSuffix`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEbnfSuffix?: (ctx: EbnfSuffixContext) => Result;

	/**
	 * Visit a parse tree produced by `ANTLRv3Parser.rewrite`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRewrite?: (ctx: RewriteContext) => Result;

	/**
	 * Visit a parse tree produced by `ANTLRv3Parser.rewrite_alternative`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRewrite_alternative?: (ctx: Rewrite_alternativeContext) => Result;

	/**
	 * Visit a parse tree produced by `ANTLRv3Parser.rewrite_tree_block`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRewrite_tree_block?: (ctx: Rewrite_tree_blockContext) => Result;

	/**
	 * Visit a parse tree produced by `ANTLRv3Parser.rewrite_tree_alternative`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRewrite_tree_alternative?: (ctx: Rewrite_tree_alternativeContext) => Result;

	/**
	 * Visit a parse tree produced by `ANTLRv3Parser.rewrite_tree_element`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRewrite_tree_element?: (ctx: Rewrite_tree_elementContext) => Result;

	/**
	 * Visit a parse tree produced by `ANTLRv3Parser.rewrite_tree_atom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRewrite_tree_atom?: (ctx: Rewrite_tree_atomContext) => Result;

	/**
	 * Visit a parse tree produced by `ANTLRv3Parser.rewrite_tree_ebnf`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRewrite_tree_ebnf?: (ctx: Rewrite_tree_ebnfContext) => Result;

	/**
	 * Visit a parse tree produced by `ANTLRv3Parser.rewrite_tree`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRewrite_tree?: (ctx: Rewrite_treeContext) => Result;

	/**
	 * Visit a parse tree produced by `ANTLRv3Parser.rewrite_template`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRewrite_template?: (ctx: Rewrite_templateContext) => Result;

	/**
	 * Visit a parse tree produced by `ANTLRv3Parser.rewrite_template_ref`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRewrite_template_ref?: (ctx: Rewrite_template_refContext) => Result;

	/**
	 * Visit a parse tree produced by `ANTLRv3Parser.rewrite_indirect_template_head`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRewrite_indirect_template_head?: (ctx: Rewrite_indirect_template_headContext) => Result;

	/**
	 * Visit a parse tree produced by `ANTLRv3Parser.rewrite_template_args`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRewrite_template_args?: (ctx: Rewrite_template_argsContext) => Result;

	/**
	 * Visit a parse tree produced by `ANTLRv3Parser.rewrite_template_arg`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRewrite_template_arg?: (ctx: Rewrite_template_argContext) => Result;

	/**
	 * Visit a parse tree produced by `ANTLRv3Parser.id`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitId?: (ctx: IdContext) => Result;
}

