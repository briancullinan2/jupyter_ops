// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/alpaca/alpaca.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `alpacaParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface alpacaVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `alpacaParser.prog`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProg?: (ctx: ProgContext) => Result;

	/**
	 * Visit a parse tree produced by `alpacaParser.defns`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDefns?: (ctx: DefnsContext) => Result;

	/**
	 * Visit a parse tree produced by `alpacaParser.defn`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDefn?: (ctx: DefnContext) => Result;

	/**
	 * Visit a parse tree produced by `alpacaParser.stateDefn`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStateDefn?: (ctx: StateDefnContext) => Result;

	/**
	 * Visit a parse tree produced by `alpacaParser.classDefn`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassDefn?: (ctx: ClassDefnContext) => Result;

	/**
	 * Visit a parse tree produced by `alpacaParser.nbhdDefn`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNbhdDefn?: (ctx: NbhdDefnContext) => Result;

	/**
	 * Visit a parse tree produced by `alpacaParser.classID`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassID?: (ctx: ClassIDContext) => Result;

	/**
	 * Visit a parse tree produced by `alpacaParser.stateID`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStateID?: (ctx: StateIDContext) => Result;

	/**
	 * Visit a parse tree produced by `alpacaParser.nbhdID`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNbhdID?: (ctx: NbhdIDContext) => Result;

	/**
	 * Visit a parse tree produced by `alpacaParser.membershipDecl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMembershipDecl?: (ctx: MembershipDeclContext) => Result;

	/**
	 * Visit a parse tree produced by `alpacaParser.classRef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassRef?: (ctx: ClassRefContext) => Result;

	/**
	 * Visit a parse tree produced by `alpacaParser.rules`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRules?: (ctx: RulesContext) => Result;

	/**
	 * Visit a parse tree produced by `alpacaParser.rule_`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRule_?: (ctx: Rule_Context) => Result;

	/**
	 * Visit a parse tree produced by `alpacaParser.stateRef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStateRef?: (ctx: StateRefContext) => Result;

	/**
	 * Visit a parse tree produced by `alpacaParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `alpacaParser.term`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTerm?: (ctx: TermContext) => Result;

	/**
	 * Visit a parse tree produced by `alpacaParser.relationalPred`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRelationalPred?: (ctx: RelationalPredContext) => Result;

	/**
	 * Visit a parse tree produced by `alpacaParser.adjacencyPred`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAdjacencyPred?: (ctx: AdjacencyPredContext) => Result;

	/**
	 * Visit a parse tree produced by `alpacaParser.boolPrimitive`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBoolPrimitive?: (ctx: BoolPrimitiveContext) => Result;

	/**
	 * Visit a parse tree produced by `alpacaParser.neigbourhood`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNeigbourhood?: (ctx: NeigbourhoodContext) => Result;

	/**
	 * Visit a parse tree produced by `alpacaParser.identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifier?: (ctx: IdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by `alpacaParser.naturalnumber`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNaturalnumber?: (ctx: NaturalnumberContext) => Result;

	/**
	 * Visit a parse tree produced by `alpacaParser.arrowchain`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrowchain?: (ctx: ArrowchainContext) => Result;
}

