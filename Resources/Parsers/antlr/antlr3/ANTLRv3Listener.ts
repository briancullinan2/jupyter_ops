// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/antlr/antlr3/ANTLRv3.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

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
 * This interface defines a complete listener for a parse tree produced by
 * `ANTLRv3Parser`.
 */
export interface ANTLRv3Listener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `ANTLRv3Parser.grammarDef`.
	 * @param ctx the parse tree
	 */
	enterGrammarDef?: (ctx: GrammarDefContext) => void;
	/**
	 * Exit a parse tree produced by `ANTLRv3Parser.grammarDef`.
	 * @param ctx the parse tree
	 */
	exitGrammarDef?: (ctx: GrammarDefContext) => void;

	/**
	 * Enter a parse tree produced by `ANTLRv3Parser.tokensSpec`.
	 * @param ctx the parse tree
	 */
	enterTokensSpec?: (ctx: TokensSpecContext) => void;
	/**
	 * Exit a parse tree produced by `ANTLRv3Parser.tokensSpec`.
	 * @param ctx the parse tree
	 */
	exitTokensSpec?: (ctx: TokensSpecContext) => void;

	/**
	 * Enter a parse tree produced by `ANTLRv3Parser.tokenSpec`.
	 * @param ctx the parse tree
	 */
	enterTokenSpec?: (ctx: TokenSpecContext) => void;
	/**
	 * Exit a parse tree produced by `ANTLRv3Parser.tokenSpec`.
	 * @param ctx the parse tree
	 */
	exitTokenSpec?: (ctx: TokenSpecContext) => void;

	/**
	 * Enter a parse tree produced by `ANTLRv3Parser.attrScope`.
	 * @param ctx the parse tree
	 */
	enterAttrScope?: (ctx: AttrScopeContext) => void;
	/**
	 * Exit a parse tree produced by `ANTLRv3Parser.attrScope`.
	 * @param ctx the parse tree
	 */
	exitAttrScope?: (ctx: AttrScopeContext) => void;

	/**
	 * Enter a parse tree produced by `ANTLRv3Parser.action`.
	 * @param ctx the parse tree
	 */
	enterAction?: (ctx: ActionContext) => void;
	/**
	 * Exit a parse tree produced by `ANTLRv3Parser.action`.
	 * @param ctx the parse tree
	 */
	exitAction?: (ctx: ActionContext) => void;

	/**
	 * Enter a parse tree produced by `ANTLRv3Parser.actionScopeName`.
	 * @param ctx the parse tree
	 */
	enterActionScopeName?: (ctx: ActionScopeNameContext) => void;
	/**
	 * Exit a parse tree produced by `ANTLRv3Parser.actionScopeName`.
	 * @param ctx the parse tree
	 */
	exitActionScopeName?: (ctx: ActionScopeNameContext) => void;

	/**
	 * Enter a parse tree produced by `ANTLRv3Parser.optionsSpec`.
	 * @param ctx the parse tree
	 */
	enterOptionsSpec?: (ctx: OptionsSpecContext) => void;
	/**
	 * Exit a parse tree produced by `ANTLRv3Parser.optionsSpec`.
	 * @param ctx the parse tree
	 */
	exitOptionsSpec?: (ctx: OptionsSpecContext) => void;

	/**
	 * Enter a parse tree produced by `ANTLRv3Parser.option`.
	 * @param ctx the parse tree
	 */
	enterOption?: (ctx: OptionContext) => void;
	/**
	 * Exit a parse tree produced by `ANTLRv3Parser.option`.
	 * @param ctx the parse tree
	 */
	exitOption?: (ctx: OptionContext) => void;

	/**
	 * Enter a parse tree produced by `ANTLRv3Parser.optionValue`.
	 * @param ctx the parse tree
	 */
	enterOptionValue?: (ctx: OptionValueContext) => void;
	/**
	 * Exit a parse tree produced by `ANTLRv3Parser.optionValue`.
	 * @param ctx the parse tree
	 */
	exitOptionValue?: (ctx: OptionValueContext) => void;

	/**
	 * Enter a parse tree produced by `ANTLRv3Parser.rule_`.
	 * @param ctx the parse tree
	 */
	enterRule_?: (ctx: Rule_Context) => void;
	/**
	 * Exit a parse tree produced by `ANTLRv3Parser.rule_`.
	 * @param ctx the parse tree
	 */
	exitRule_?: (ctx: Rule_Context) => void;

	/**
	 * Enter a parse tree produced by `ANTLRv3Parser.ruleAction`.
	 * @param ctx the parse tree
	 */
	enterRuleAction?: (ctx: RuleActionContext) => void;
	/**
	 * Exit a parse tree produced by `ANTLRv3Parser.ruleAction`.
	 * @param ctx the parse tree
	 */
	exitRuleAction?: (ctx: RuleActionContext) => void;

	/**
	 * Enter a parse tree produced by `ANTLRv3Parser.throwsSpec`.
	 * @param ctx the parse tree
	 */
	enterThrowsSpec?: (ctx: ThrowsSpecContext) => void;
	/**
	 * Exit a parse tree produced by `ANTLRv3Parser.throwsSpec`.
	 * @param ctx the parse tree
	 */
	exitThrowsSpec?: (ctx: ThrowsSpecContext) => void;

	/**
	 * Enter a parse tree produced by `ANTLRv3Parser.ruleScopeSpec`.
	 * @param ctx the parse tree
	 */
	enterRuleScopeSpec?: (ctx: RuleScopeSpecContext) => void;
	/**
	 * Exit a parse tree produced by `ANTLRv3Parser.ruleScopeSpec`.
	 * @param ctx the parse tree
	 */
	exitRuleScopeSpec?: (ctx: RuleScopeSpecContext) => void;

	/**
	 * Enter a parse tree produced by `ANTLRv3Parser.block`.
	 * @param ctx the parse tree
	 */
	enterBlock?: (ctx: BlockContext) => void;
	/**
	 * Exit a parse tree produced by `ANTLRv3Parser.block`.
	 * @param ctx the parse tree
	 */
	exitBlock?: (ctx: BlockContext) => void;

	/**
	 * Enter a parse tree produced by `ANTLRv3Parser.altList`.
	 * @param ctx the parse tree
	 */
	enterAltList?: (ctx: AltListContext) => void;
	/**
	 * Exit a parse tree produced by `ANTLRv3Parser.altList`.
	 * @param ctx the parse tree
	 */
	exitAltList?: (ctx: AltListContext) => void;

	/**
	 * Enter a parse tree produced by `ANTLRv3Parser.alternative`.
	 * @param ctx the parse tree
	 */
	enterAlternative?: (ctx: AlternativeContext) => void;
	/**
	 * Exit a parse tree produced by `ANTLRv3Parser.alternative`.
	 * @param ctx the parse tree
	 */
	exitAlternative?: (ctx: AlternativeContext) => void;

	/**
	 * Enter a parse tree produced by `ANTLRv3Parser.exceptionGroup`.
	 * @param ctx the parse tree
	 */
	enterExceptionGroup?: (ctx: ExceptionGroupContext) => void;
	/**
	 * Exit a parse tree produced by `ANTLRv3Parser.exceptionGroup`.
	 * @param ctx the parse tree
	 */
	exitExceptionGroup?: (ctx: ExceptionGroupContext) => void;

	/**
	 * Enter a parse tree produced by `ANTLRv3Parser.exceptionHandler`.
	 * @param ctx the parse tree
	 */
	enterExceptionHandler?: (ctx: ExceptionHandlerContext) => void;
	/**
	 * Exit a parse tree produced by `ANTLRv3Parser.exceptionHandler`.
	 * @param ctx the parse tree
	 */
	exitExceptionHandler?: (ctx: ExceptionHandlerContext) => void;

	/**
	 * Enter a parse tree produced by `ANTLRv3Parser.finallyClause`.
	 * @param ctx the parse tree
	 */
	enterFinallyClause?: (ctx: FinallyClauseContext) => void;
	/**
	 * Exit a parse tree produced by `ANTLRv3Parser.finallyClause`.
	 * @param ctx the parse tree
	 */
	exitFinallyClause?: (ctx: FinallyClauseContext) => void;

	/**
	 * Enter a parse tree produced by `ANTLRv3Parser.element`.
	 * @param ctx the parse tree
	 */
	enterElement?: (ctx: ElementContext) => void;
	/**
	 * Exit a parse tree produced by `ANTLRv3Parser.element`.
	 * @param ctx the parse tree
	 */
	exitElement?: (ctx: ElementContext) => void;

	/**
	 * Enter a parse tree produced by `ANTLRv3Parser.elementNoOptionSpec`.
	 * @param ctx the parse tree
	 */
	enterElementNoOptionSpec?: (ctx: ElementNoOptionSpecContext) => void;
	/**
	 * Exit a parse tree produced by `ANTLRv3Parser.elementNoOptionSpec`.
	 * @param ctx the parse tree
	 */
	exitElementNoOptionSpec?: (ctx: ElementNoOptionSpecContext) => void;

	/**
	 * Enter a parse tree produced by `ANTLRv3Parser.atom`.
	 * @param ctx the parse tree
	 */
	enterAtom?: (ctx: AtomContext) => void;
	/**
	 * Exit a parse tree produced by `ANTLRv3Parser.atom`.
	 * @param ctx the parse tree
	 */
	exitAtom?: (ctx: AtomContext) => void;

	/**
	 * Enter a parse tree produced by `ANTLRv3Parser.notSet`.
	 * @param ctx the parse tree
	 */
	enterNotSet?: (ctx: NotSetContext) => void;
	/**
	 * Exit a parse tree produced by `ANTLRv3Parser.notSet`.
	 * @param ctx the parse tree
	 */
	exitNotSet?: (ctx: NotSetContext) => void;

	/**
	 * Enter a parse tree produced by `ANTLRv3Parser.treeSpec`.
	 * @param ctx the parse tree
	 */
	enterTreeSpec?: (ctx: TreeSpecContext) => void;
	/**
	 * Exit a parse tree produced by `ANTLRv3Parser.treeSpec`.
	 * @param ctx the parse tree
	 */
	exitTreeSpec?: (ctx: TreeSpecContext) => void;

	/**
	 * Enter a parse tree produced by `ANTLRv3Parser.ebnf`.
	 * @param ctx the parse tree
	 */
	enterEbnf?: (ctx: EbnfContext) => void;
	/**
	 * Exit a parse tree produced by `ANTLRv3Parser.ebnf`.
	 * @param ctx the parse tree
	 */
	exitEbnf?: (ctx: EbnfContext) => void;

	/**
	 * Enter a parse tree produced by `ANTLRv3Parser.range`.
	 * @param ctx the parse tree
	 */
	enterRange?: (ctx: RangeContext) => void;
	/**
	 * Exit a parse tree produced by `ANTLRv3Parser.range`.
	 * @param ctx the parse tree
	 */
	exitRange?: (ctx: RangeContext) => void;

	/**
	 * Enter a parse tree produced by `ANTLRv3Parser.terminal_`.
	 * @param ctx the parse tree
	 */
	enterTerminal_?: (ctx: Terminal_Context) => void;
	/**
	 * Exit a parse tree produced by `ANTLRv3Parser.terminal_`.
	 * @param ctx the parse tree
	 */
	exitTerminal_?: (ctx: Terminal_Context) => void;

	/**
	 * Enter a parse tree produced by `ANTLRv3Parser.notTerminal`.
	 * @param ctx the parse tree
	 */
	enterNotTerminal?: (ctx: NotTerminalContext) => void;
	/**
	 * Exit a parse tree produced by `ANTLRv3Parser.notTerminal`.
	 * @param ctx the parse tree
	 */
	exitNotTerminal?: (ctx: NotTerminalContext) => void;

	/**
	 * Enter a parse tree produced by `ANTLRv3Parser.ebnfSuffix`.
	 * @param ctx the parse tree
	 */
	enterEbnfSuffix?: (ctx: EbnfSuffixContext) => void;
	/**
	 * Exit a parse tree produced by `ANTLRv3Parser.ebnfSuffix`.
	 * @param ctx the parse tree
	 */
	exitEbnfSuffix?: (ctx: EbnfSuffixContext) => void;

	/**
	 * Enter a parse tree produced by `ANTLRv3Parser.rewrite`.
	 * @param ctx the parse tree
	 */
	enterRewrite?: (ctx: RewriteContext) => void;
	/**
	 * Exit a parse tree produced by `ANTLRv3Parser.rewrite`.
	 * @param ctx the parse tree
	 */
	exitRewrite?: (ctx: RewriteContext) => void;

	/**
	 * Enter a parse tree produced by `ANTLRv3Parser.rewrite_alternative`.
	 * @param ctx the parse tree
	 */
	enterRewrite_alternative?: (ctx: Rewrite_alternativeContext) => void;
	/**
	 * Exit a parse tree produced by `ANTLRv3Parser.rewrite_alternative`.
	 * @param ctx the parse tree
	 */
	exitRewrite_alternative?: (ctx: Rewrite_alternativeContext) => void;

	/**
	 * Enter a parse tree produced by `ANTLRv3Parser.rewrite_tree_block`.
	 * @param ctx the parse tree
	 */
	enterRewrite_tree_block?: (ctx: Rewrite_tree_blockContext) => void;
	/**
	 * Exit a parse tree produced by `ANTLRv3Parser.rewrite_tree_block`.
	 * @param ctx the parse tree
	 */
	exitRewrite_tree_block?: (ctx: Rewrite_tree_blockContext) => void;

	/**
	 * Enter a parse tree produced by `ANTLRv3Parser.rewrite_tree_alternative`.
	 * @param ctx the parse tree
	 */
	enterRewrite_tree_alternative?: (ctx: Rewrite_tree_alternativeContext) => void;
	/**
	 * Exit a parse tree produced by `ANTLRv3Parser.rewrite_tree_alternative`.
	 * @param ctx the parse tree
	 */
	exitRewrite_tree_alternative?: (ctx: Rewrite_tree_alternativeContext) => void;

	/**
	 * Enter a parse tree produced by `ANTLRv3Parser.rewrite_tree_element`.
	 * @param ctx the parse tree
	 */
	enterRewrite_tree_element?: (ctx: Rewrite_tree_elementContext) => void;
	/**
	 * Exit a parse tree produced by `ANTLRv3Parser.rewrite_tree_element`.
	 * @param ctx the parse tree
	 */
	exitRewrite_tree_element?: (ctx: Rewrite_tree_elementContext) => void;

	/**
	 * Enter a parse tree produced by `ANTLRv3Parser.rewrite_tree_atom`.
	 * @param ctx the parse tree
	 */
	enterRewrite_tree_atom?: (ctx: Rewrite_tree_atomContext) => void;
	/**
	 * Exit a parse tree produced by `ANTLRv3Parser.rewrite_tree_atom`.
	 * @param ctx the parse tree
	 */
	exitRewrite_tree_atom?: (ctx: Rewrite_tree_atomContext) => void;

	/**
	 * Enter a parse tree produced by `ANTLRv3Parser.rewrite_tree_ebnf`.
	 * @param ctx the parse tree
	 */
	enterRewrite_tree_ebnf?: (ctx: Rewrite_tree_ebnfContext) => void;
	/**
	 * Exit a parse tree produced by `ANTLRv3Parser.rewrite_tree_ebnf`.
	 * @param ctx the parse tree
	 */
	exitRewrite_tree_ebnf?: (ctx: Rewrite_tree_ebnfContext) => void;

	/**
	 * Enter a parse tree produced by `ANTLRv3Parser.rewrite_tree`.
	 * @param ctx the parse tree
	 */
	enterRewrite_tree?: (ctx: Rewrite_treeContext) => void;
	/**
	 * Exit a parse tree produced by `ANTLRv3Parser.rewrite_tree`.
	 * @param ctx the parse tree
	 */
	exitRewrite_tree?: (ctx: Rewrite_treeContext) => void;

	/**
	 * Enter a parse tree produced by `ANTLRv3Parser.rewrite_template`.
	 * @param ctx the parse tree
	 */
	enterRewrite_template?: (ctx: Rewrite_templateContext) => void;
	/**
	 * Exit a parse tree produced by `ANTLRv3Parser.rewrite_template`.
	 * @param ctx the parse tree
	 */
	exitRewrite_template?: (ctx: Rewrite_templateContext) => void;

	/**
	 * Enter a parse tree produced by `ANTLRv3Parser.rewrite_template_ref`.
	 * @param ctx the parse tree
	 */
	enterRewrite_template_ref?: (ctx: Rewrite_template_refContext) => void;
	/**
	 * Exit a parse tree produced by `ANTLRv3Parser.rewrite_template_ref`.
	 * @param ctx the parse tree
	 */
	exitRewrite_template_ref?: (ctx: Rewrite_template_refContext) => void;

	/**
	 * Enter a parse tree produced by `ANTLRv3Parser.rewrite_indirect_template_head`.
	 * @param ctx the parse tree
	 */
	enterRewrite_indirect_template_head?: (ctx: Rewrite_indirect_template_headContext) => void;
	/**
	 * Exit a parse tree produced by `ANTLRv3Parser.rewrite_indirect_template_head`.
	 * @param ctx the parse tree
	 */
	exitRewrite_indirect_template_head?: (ctx: Rewrite_indirect_template_headContext) => void;

	/**
	 * Enter a parse tree produced by `ANTLRv3Parser.rewrite_template_args`.
	 * @param ctx the parse tree
	 */
	enterRewrite_template_args?: (ctx: Rewrite_template_argsContext) => void;
	/**
	 * Exit a parse tree produced by `ANTLRv3Parser.rewrite_template_args`.
	 * @param ctx the parse tree
	 */
	exitRewrite_template_args?: (ctx: Rewrite_template_argsContext) => void;

	/**
	 * Enter a parse tree produced by `ANTLRv3Parser.rewrite_template_arg`.
	 * @param ctx the parse tree
	 */
	enterRewrite_template_arg?: (ctx: Rewrite_template_argContext) => void;
	/**
	 * Exit a parse tree produced by `ANTLRv3Parser.rewrite_template_arg`.
	 * @param ctx the parse tree
	 */
	exitRewrite_template_arg?: (ctx: Rewrite_template_argContext) => void;

	/**
	 * Enter a parse tree produced by `ANTLRv3Parser.id`.
	 * @param ctx the parse tree
	 */
	enterId?: (ctx: IdContext) => void;
	/**
	 * Exit a parse tree produced by `ANTLRv3Parser.id`.
	 * @param ctx the parse tree
	 */
	exitId?: (ctx: IdContext) => void;
}

