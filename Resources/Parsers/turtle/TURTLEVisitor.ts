// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/turtle/TURTLE.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { TurtleDocContext } from "./TURTLEParser";
import { StatementContext } from "./TURTLEParser";
import { DirectiveContext } from "./TURTLEParser";
import { PrefixIDContext } from "./TURTLEParser";
import { BaseContext } from "./TURTLEParser";
import { SparqlBaseContext } from "./TURTLEParser";
import { SparqlPrefixContext } from "./TURTLEParser";
import { TriplesContext } from "./TURTLEParser";
import { PredicateObjectListContext } from "./TURTLEParser";
import { ObjectListContext } from "./TURTLEParser";
import { VerbContext } from "./TURTLEParser";
import { SubjectContext } from "./TURTLEParser";
import { PredicateContext } from "./TURTLEParser";
import { ObjectContext } from "./TURTLEParser";
import { LiteralContext } from "./TURTLEParser";
import { BlankNodePropertyListContext } from "./TURTLEParser";
import { CollectionContext } from "./TURTLEParser";
import { RdfLiteralContext } from "./TURTLEParser";
import { IriContext } from "./TURTLEParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `TURTLEParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface TURTLEVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `TURTLEParser.turtleDoc`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTurtleDoc?: (ctx: TurtleDocContext) => Result;

	/**
	 * Visit a parse tree produced by `TURTLEParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;

	/**
	 * Visit a parse tree produced by `TURTLEParser.directive`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDirective?: (ctx: DirectiveContext) => Result;

	/**
	 * Visit a parse tree produced by `TURTLEParser.prefixID`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrefixID?: (ctx: PrefixIDContext) => Result;

	/**
	 * Visit a parse tree produced by `TURTLEParser.base`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBase?: (ctx: BaseContext) => Result;

	/**
	 * Visit a parse tree produced by `TURTLEParser.sparqlBase`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSparqlBase?: (ctx: SparqlBaseContext) => Result;

	/**
	 * Visit a parse tree produced by `TURTLEParser.sparqlPrefix`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSparqlPrefix?: (ctx: SparqlPrefixContext) => Result;

	/**
	 * Visit a parse tree produced by `TURTLEParser.triples`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTriples?: (ctx: TriplesContext) => Result;

	/**
	 * Visit a parse tree produced by `TURTLEParser.predicateObjectList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPredicateObjectList?: (ctx: PredicateObjectListContext) => Result;

	/**
	 * Visit a parse tree produced by `TURTLEParser.objectList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitObjectList?: (ctx: ObjectListContext) => Result;

	/**
	 * Visit a parse tree produced by `TURTLEParser.verb`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVerb?: (ctx: VerbContext) => Result;

	/**
	 * Visit a parse tree produced by `TURTLEParser.subject`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubject?: (ctx: SubjectContext) => Result;

	/**
	 * Visit a parse tree produced by `TURTLEParser.predicate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPredicate?: (ctx: PredicateContext) => Result;

	/**
	 * Visit a parse tree produced by `TURTLEParser.object`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitObject?: (ctx: ObjectContext) => Result;

	/**
	 * Visit a parse tree produced by `TURTLEParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiteral?: (ctx: LiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `TURTLEParser.blankNodePropertyList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlankNodePropertyList?: (ctx: BlankNodePropertyListContext) => Result;

	/**
	 * Visit a parse tree produced by `TURTLEParser.collection`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCollection?: (ctx: CollectionContext) => Result;

	/**
	 * Visit a parse tree produced by `TURTLEParser.rdfLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRdfLiteral?: (ctx: RdfLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `TURTLEParser.iri`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIri?: (ctx: IriContext) => Result;
}

