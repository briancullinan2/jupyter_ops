// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/alpaca/alpaca.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { ProgContext } from "./alpacaParser";
import { DefnsContext } from "./alpacaParser";
import { DefnContext } from "./alpacaParser";
import { StateDefnContext } from "./alpacaParser";
import { ClassDefnContext } from "./alpacaParser";
import { NbhdDefnContext } from "./alpacaParser";
import { ClassIDContext } from "./alpacaParser";
import { StateIDContext } from "./alpacaParser";
import { NbhdIDContext } from "./alpacaParser";
import { MembershipDeclContext } from "./alpacaParser";
import { ClassRefContext } from "./alpacaParser";
import { RulesContext } from "./alpacaParser";
import { Rule_Context } from "./alpacaParser";
import { StateRefContext } from "./alpacaParser";
import { ExpressionContext } from "./alpacaParser";
import { TermContext } from "./alpacaParser";
import { RelationalPredContext } from "./alpacaParser";
import { AdjacencyPredContext } from "./alpacaParser";
import { BoolPrimitiveContext } from "./alpacaParser";
import { NeigbourhoodContext } from "./alpacaParser";
import { IdentifierContext } from "./alpacaParser";
import { NaturalnumberContext } from "./alpacaParser";
import { ArrowchainContext } from "./alpacaParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `alpacaParser`.
 */
export interface alpacaListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `alpacaParser.prog`.
	 * @param ctx the parse tree
	 */
	enterProg?: (ctx: ProgContext) => void;
	/**
	 * Exit a parse tree produced by `alpacaParser.prog`.
	 * @param ctx the parse tree
	 */
	exitProg?: (ctx: ProgContext) => void;

	/**
	 * Enter a parse tree produced by `alpacaParser.defns`.
	 * @param ctx the parse tree
	 */
	enterDefns?: (ctx: DefnsContext) => void;
	/**
	 * Exit a parse tree produced by `alpacaParser.defns`.
	 * @param ctx the parse tree
	 */
	exitDefns?: (ctx: DefnsContext) => void;

	/**
	 * Enter a parse tree produced by `alpacaParser.defn`.
	 * @param ctx the parse tree
	 */
	enterDefn?: (ctx: DefnContext) => void;
	/**
	 * Exit a parse tree produced by `alpacaParser.defn`.
	 * @param ctx the parse tree
	 */
	exitDefn?: (ctx: DefnContext) => void;

	/**
	 * Enter a parse tree produced by `alpacaParser.stateDefn`.
	 * @param ctx the parse tree
	 */
	enterStateDefn?: (ctx: StateDefnContext) => void;
	/**
	 * Exit a parse tree produced by `alpacaParser.stateDefn`.
	 * @param ctx the parse tree
	 */
	exitStateDefn?: (ctx: StateDefnContext) => void;

	/**
	 * Enter a parse tree produced by `alpacaParser.classDefn`.
	 * @param ctx the parse tree
	 */
	enterClassDefn?: (ctx: ClassDefnContext) => void;
	/**
	 * Exit a parse tree produced by `alpacaParser.classDefn`.
	 * @param ctx the parse tree
	 */
	exitClassDefn?: (ctx: ClassDefnContext) => void;

	/**
	 * Enter a parse tree produced by `alpacaParser.nbhdDefn`.
	 * @param ctx the parse tree
	 */
	enterNbhdDefn?: (ctx: NbhdDefnContext) => void;
	/**
	 * Exit a parse tree produced by `alpacaParser.nbhdDefn`.
	 * @param ctx the parse tree
	 */
	exitNbhdDefn?: (ctx: NbhdDefnContext) => void;

	/**
	 * Enter a parse tree produced by `alpacaParser.classID`.
	 * @param ctx the parse tree
	 */
	enterClassID?: (ctx: ClassIDContext) => void;
	/**
	 * Exit a parse tree produced by `alpacaParser.classID`.
	 * @param ctx the parse tree
	 */
	exitClassID?: (ctx: ClassIDContext) => void;

	/**
	 * Enter a parse tree produced by `alpacaParser.stateID`.
	 * @param ctx the parse tree
	 */
	enterStateID?: (ctx: StateIDContext) => void;
	/**
	 * Exit a parse tree produced by `alpacaParser.stateID`.
	 * @param ctx the parse tree
	 */
	exitStateID?: (ctx: StateIDContext) => void;

	/**
	 * Enter a parse tree produced by `alpacaParser.nbhdID`.
	 * @param ctx the parse tree
	 */
	enterNbhdID?: (ctx: NbhdIDContext) => void;
	/**
	 * Exit a parse tree produced by `alpacaParser.nbhdID`.
	 * @param ctx the parse tree
	 */
	exitNbhdID?: (ctx: NbhdIDContext) => void;

	/**
	 * Enter a parse tree produced by `alpacaParser.membershipDecl`.
	 * @param ctx the parse tree
	 */
	enterMembershipDecl?: (ctx: MembershipDeclContext) => void;
	/**
	 * Exit a parse tree produced by `alpacaParser.membershipDecl`.
	 * @param ctx the parse tree
	 */
	exitMembershipDecl?: (ctx: MembershipDeclContext) => void;

	/**
	 * Enter a parse tree produced by `alpacaParser.classRef`.
	 * @param ctx the parse tree
	 */
	enterClassRef?: (ctx: ClassRefContext) => void;
	/**
	 * Exit a parse tree produced by `alpacaParser.classRef`.
	 * @param ctx the parse tree
	 */
	exitClassRef?: (ctx: ClassRefContext) => void;

	/**
	 * Enter a parse tree produced by `alpacaParser.rules`.
	 * @param ctx the parse tree
	 */
	enterRules?: (ctx: RulesContext) => void;
	/**
	 * Exit a parse tree produced by `alpacaParser.rules`.
	 * @param ctx the parse tree
	 */
	exitRules?: (ctx: RulesContext) => void;

	/**
	 * Enter a parse tree produced by `alpacaParser.rule_`.
	 * @param ctx the parse tree
	 */
	enterRule_?: (ctx: Rule_Context) => void;
	/**
	 * Exit a parse tree produced by `alpacaParser.rule_`.
	 * @param ctx the parse tree
	 */
	exitRule_?: (ctx: Rule_Context) => void;

	/**
	 * Enter a parse tree produced by `alpacaParser.stateRef`.
	 * @param ctx the parse tree
	 */
	enterStateRef?: (ctx: StateRefContext) => void;
	/**
	 * Exit a parse tree produced by `alpacaParser.stateRef`.
	 * @param ctx the parse tree
	 */
	exitStateRef?: (ctx: StateRefContext) => void;

	/**
	 * Enter a parse tree produced by `alpacaParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `alpacaParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `alpacaParser.term`.
	 * @param ctx the parse tree
	 */
	enterTerm?: (ctx: TermContext) => void;
	/**
	 * Exit a parse tree produced by `alpacaParser.term`.
	 * @param ctx the parse tree
	 */
	exitTerm?: (ctx: TermContext) => void;

	/**
	 * Enter a parse tree produced by `alpacaParser.relationalPred`.
	 * @param ctx the parse tree
	 */
	enterRelationalPred?: (ctx: RelationalPredContext) => void;
	/**
	 * Exit a parse tree produced by `alpacaParser.relationalPred`.
	 * @param ctx the parse tree
	 */
	exitRelationalPred?: (ctx: RelationalPredContext) => void;

	/**
	 * Enter a parse tree produced by `alpacaParser.adjacencyPred`.
	 * @param ctx the parse tree
	 */
	enterAdjacencyPred?: (ctx: AdjacencyPredContext) => void;
	/**
	 * Exit a parse tree produced by `alpacaParser.adjacencyPred`.
	 * @param ctx the parse tree
	 */
	exitAdjacencyPred?: (ctx: AdjacencyPredContext) => void;

	/**
	 * Enter a parse tree produced by `alpacaParser.boolPrimitive`.
	 * @param ctx the parse tree
	 */
	enterBoolPrimitive?: (ctx: BoolPrimitiveContext) => void;
	/**
	 * Exit a parse tree produced by `alpacaParser.boolPrimitive`.
	 * @param ctx the parse tree
	 */
	exitBoolPrimitive?: (ctx: BoolPrimitiveContext) => void;

	/**
	 * Enter a parse tree produced by `alpacaParser.neigbourhood`.
	 * @param ctx the parse tree
	 */
	enterNeigbourhood?: (ctx: NeigbourhoodContext) => void;
	/**
	 * Exit a parse tree produced by `alpacaParser.neigbourhood`.
	 * @param ctx the parse tree
	 */
	exitNeigbourhood?: (ctx: NeigbourhoodContext) => void;

	/**
	 * Enter a parse tree produced by `alpacaParser.identifier`.
	 * @param ctx the parse tree
	 */
	enterIdentifier?: (ctx: IdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `alpacaParser.identifier`.
	 * @param ctx the parse tree
	 */
	exitIdentifier?: (ctx: IdentifierContext) => void;

	/**
	 * Enter a parse tree produced by `alpacaParser.naturalnumber`.
	 * @param ctx the parse tree
	 */
	enterNaturalnumber?: (ctx: NaturalnumberContext) => void;
	/**
	 * Exit a parse tree produced by `alpacaParser.naturalnumber`.
	 * @param ctx the parse tree
	 */
	exitNaturalnumber?: (ctx: NaturalnumberContext) => void;

	/**
	 * Enter a parse tree produced by `alpacaParser.arrowchain`.
	 * @param ctx the parse tree
	 */
	enterArrowchain?: (ctx: ArrowchainContext) => void;
	/**
	 * Exit a parse tree produced by `alpacaParser.arrowchain`.
	 * @param ctx the parse tree
	 */
	exitArrowchain?: (ctx: ArrowchainContext) => void;
}

