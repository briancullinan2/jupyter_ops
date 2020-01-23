// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/turtle-doc/turtle.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { TurtleDocContext } from "./turtleParser";
import { StatementContext } from "./turtleParser";
import { DirectiveContext } from "./turtleParser";
import { PrefixIDContext } from "./turtleParser";
import { BaseContext } from "./turtleParser";
import { SparqlBaseContext } from "./turtleParser";
import { SparqlPrefixContext } from "./turtleParser";
import { TriplesContext } from "./turtleParser";
import { PredicateObjectListContext } from "./turtleParser";
import { ObjectListContext } from "./turtleParser";
import { PredicateObjectContext } from "./turtleParser";
import { SubjectContext } from "./turtleParser";
import { PredicateContext } from "./turtleParser";
import { ObjectContext } from "./turtleParser";
import { LiteralContext } from "./turtleParser";
import { BlankNodePropertyListContext } from "./turtleParser";
import { CollectionContext } from "./turtleParser";
import { NumericLiteralContext } from "./turtleParser";
import { RDFLiteralContext } from "./turtleParser";
import { BoolContext } from "./turtleParser";
import { StringContext } from "./turtleParser";
import { IriContext } from "./turtleParser";
import { BlankNodeContext } from "./turtleParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `turtleParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface turtleVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `turtleParser.turtleDoc`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTurtleDoc?: (ctx: TurtleDocContext) => Result;

	/**
	 * Visit a parse tree produced by `turtleParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;

	/**
	 * Visit a parse tree produced by `turtleParser.directive`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDirective?: (ctx: DirectiveContext) => Result;

	/**
	 * Visit a parse tree produced by `turtleParser.prefixID`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrefixID?: (ctx: PrefixIDContext) => Result;

	/**
	 * Visit a parse tree produced by `turtleParser.base`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBase?: (ctx: BaseContext) => Result;

	/**
	 * Visit a parse tree produced by `turtleParser.sparqlBase`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSparqlBase?: (ctx: SparqlBaseContext) => Result;

	/**
	 * Visit a parse tree produced by `turtleParser.sparqlPrefix`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSparqlPrefix?: (ctx: SparqlPrefixContext) => Result;

	/**
	 * Visit a parse tree produced by `turtleParser.triples`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTriples?: (ctx: TriplesContext) => Result;

	/**
	 * Visit a parse tree produced by `turtleParser.predicateObjectList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPredicateObjectList?: (ctx: PredicateObjectListContext) => Result;

	/**
	 * Visit a parse tree produced by `turtleParser.objectList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitObjectList?: (ctx: ObjectListContext) => Result;

	/**
	 * Visit a parse tree produced by `turtleParser.predicateObject`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPredicateObject?: (ctx: PredicateObjectContext) => Result;

	/**
	 * Visit a parse tree produced by `turtleParser.subject`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubject?: (ctx: SubjectContext) => Result;

	/**
	 * Visit a parse tree produced by `turtleParser.predicate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPredicate?: (ctx: PredicateContext) => Result;

	/**
	 * Visit a parse tree produced by `turtleParser.object`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitObject?: (ctx: ObjectContext) => Result;

	/**
	 * Visit a parse tree produced by `turtleParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiteral?: (ctx: LiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `turtleParser.blankNodePropertyList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlankNodePropertyList?: (ctx: BlankNodePropertyListContext) => Result;

	/**
	 * Visit a parse tree produced by `turtleParser.collection`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCollection?: (ctx: CollectionContext) => Result;

	/**
	 * Visit a parse tree produced by `turtleParser.numericLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumericLiteral?: (ctx: NumericLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `turtleParser.rDFLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRDFLiteral?: (ctx: RDFLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `turtleParser.bool`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBool?: (ctx: BoolContext) => Result;

	/**
	 * Visit a parse tree produced by `turtleParser.string`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitString?: (ctx: StringContext) => Result;

	/**
	 * Visit a parse tree produced by `turtleParser.iri`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIri?: (ctx: IriContext) => Result;

	/**
	 * Visit a parse tree produced by `turtleParser.blankNode`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlankNode?: (ctx: BlankNodeContext) => Result;
}

