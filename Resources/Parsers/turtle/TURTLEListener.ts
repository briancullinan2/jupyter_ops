// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/turtle/TURTLE.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

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
 * This interface defines a complete listener for a parse tree produced by
 * `TURTLEParser`.
 */
export interface TURTLEListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `TURTLEParser.turtleDoc`.
	 * @param ctx the parse tree
	 */
	enterTurtleDoc?: (ctx: TurtleDocContext) => void;
	/**
	 * Exit a parse tree produced by `TURTLEParser.turtleDoc`.
	 * @param ctx the parse tree
	 */
	exitTurtleDoc?: (ctx: TurtleDocContext) => void;

	/**
	 * Enter a parse tree produced by `TURTLEParser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement?: (ctx: StatementContext) => void;
	/**
	 * Exit a parse tree produced by `TURTLEParser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement?: (ctx: StatementContext) => void;

	/**
	 * Enter a parse tree produced by `TURTLEParser.directive`.
	 * @param ctx the parse tree
	 */
	enterDirective?: (ctx: DirectiveContext) => void;
	/**
	 * Exit a parse tree produced by `TURTLEParser.directive`.
	 * @param ctx the parse tree
	 */
	exitDirective?: (ctx: DirectiveContext) => void;

	/**
	 * Enter a parse tree produced by `TURTLEParser.prefixID`.
	 * @param ctx the parse tree
	 */
	enterPrefixID?: (ctx: PrefixIDContext) => void;
	/**
	 * Exit a parse tree produced by `TURTLEParser.prefixID`.
	 * @param ctx the parse tree
	 */
	exitPrefixID?: (ctx: PrefixIDContext) => void;

	/**
	 * Enter a parse tree produced by `TURTLEParser.base`.
	 * @param ctx the parse tree
	 */
	enterBase?: (ctx: BaseContext) => void;
	/**
	 * Exit a parse tree produced by `TURTLEParser.base`.
	 * @param ctx the parse tree
	 */
	exitBase?: (ctx: BaseContext) => void;

	/**
	 * Enter a parse tree produced by `TURTLEParser.sparqlBase`.
	 * @param ctx the parse tree
	 */
	enterSparqlBase?: (ctx: SparqlBaseContext) => void;
	/**
	 * Exit a parse tree produced by `TURTLEParser.sparqlBase`.
	 * @param ctx the parse tree
	 */
	exitSparqlBase?: (ctx: SparqlBaseContext) => void;

	/**
	 * Enter a parse tree produced by `TURTLEParser.sparqlPrefix`.
	 * @param ctx the parse tree
	 */
	enterSparqlPrefix?: (ctx: SparqlPrefixContext) => void;
	/**
	 * Exit a parse tree produced by `TURTLEParser.sparqlPrefix`.
	 * @param ctx the parse tree
	 */
	exitSparqlPrefix?: (ctx: SparqlPrefixContext) => void;

	/**
	 * Enter a parse tree produced by `TURTLEParser.triples`.
	 * @param ctx the parse tree
	 */
	enterTriples?: (ctx: TriplesContext) => void;
	/**
	 * Exit a parse tree produced by `TURTLEParser.triples`.
	 * @param ctx the parse tree
	 */
	exitTriples?: (ctx: TriplesContext) => void;

	/**
	 * Enter a parse tree produced by `TURTLEParser.predicateObjectList`.
	 * @param ctx the parse tree
	 */
	enterPredicateObjectList?: (ctx: PredicateObjectListContext) => void;
	/**
	 * Exit a parse tree produced by `TURTLEParser.predicateObjectList`.
	 * @param ctx the parse tree
	 */
	exitPredicateObjectList?: (ctx: PredicateObjectListContext) => void;

	/**
	 * Enter a parse tree produced by `TURTLEParser.objectList`.
	 * @param ctx the parse tree
	 */
	enterObjectList?: (ctx: ObjectListContext) => void;
	/**
	 * Exit a parse tree produced by `TURTLEParser.objectList`.
	 * @param ctx the parse tree
	 */
	exitObjectList?: (ctx: ObjectListContext) => void;

	/**
	 * Enter a parse tree produced by `TURTLEParser.verb`.
	 * @param ctx the parse tree
	 */
	enterVerb?: (ctx: VerbContext) => void;
	/**
	 * Exit a parse tree produced by `TURTLEParser.verb`.
	 * @param ctx the parse tree
	 */
	exitVerb?: (ctx: VerbContext) => void;

	/**
	 * Enter a parse tree produced by `TURTLEParser.subject`.
	 * @param ctx the parse tree
	 */
	enterSubject?: (ctx: SubjectContext) => void;
	/**
	 * Exit a parse tree produced by `TURTLEParser.subject`.
	 * @param ctx the parse tree
	 */
	exitSubject?: (ctx: SubjectContext) => void;

	/**
	 * Enter a parse tree produced by `TURTLEParser.predicate`.
	 * @param ctx the parse tree
	 */
	enterPredicate?: (ctx: PredicateContext) => void;
	/**
	 * Exit a parse tree produced by `TURTLEParser.predicate`.
	 * @param ctx the parse tree
	 */
	exitPredicate?: (ctx: PredicateContext) => void;

	/**
	 * Enter a parse tree produced by `TURTLEParser.object`.
	 * @param ctx the parse tree
	 */
	enterObject?: (ctx: ObjectContext) => void;
	/**
	 * Exit a parse tree produced by `TURTLEParser.object`.
	 * @param ctx the parse tree
	 */
	exitObject?: (ctx: ObjectContext) => void;

	/**
	 * Enter a parse tree produced by `TURTLEParser.literal`.
	 * @param ctx the parse tree
	 */
	enterLiteral?: (ctx: LiteralContext) => void;
	/**
	 * Exit a parse tree produced by `TURTLEParser.literal`.
	 * @param ctx the parse tree
	 */
	exitLiteral?: (ctx: LiteralContext) => void;

	/**
	 * Enter a parse tree produced by `TURTLEParser.blankNodePropertyList`.
	 * @param ctx the parse tree
	 */
	enterBlankNodePropertyList?: (ctx: BlankNodePropertyListContext) => void;
	/**
	 * Exit a parse tree produced by `TURTLEParser.blankNodePropertyList`.
	 * @param ctx the parse tree
	 */
	exitBlankNodePropertyList?: (ctx: BlankNodePropertyListContext) => void;

	/**
	 * Enter a parse tree produced by `TURTLEParser.collection`.
	 * @param ctx the parse tree
	 */
	enterCollection?: (ctx: CollectionContext) => void;
	/**
	 * Exit a parse tree produced by `TURTLEParser.collection`.
	 * @param ctx the parse tree
	 */
	exitCollection?: (ctx: CollectionContext) => void;

	/**
	 * Enter a parse tree produced by `TURTLEParser.rdfLiteral`.
	 * @param ctx the parse tree
	 */
	enterRdfLiteral?: (ctx: RdfLiteralContext) => void;
	/**
	 * Exit a parse tree produced by `TURTLEParser.rdfLiteral`.
	 * @param ctx the parse tree
	 */
	exitRdfLiteral?: (ctx: RdfLiteralContext) => void;

	/**
	 * Enter a parse tree produced by `TURTLEParser.iri`.
	 * @param ctx the parse tree
	 */
	enterIri?: (ctx: IriContext) => void;
	/**
	 * Exit a parse tree produced by `TURTLEParser.iri`.
	 * @param ctx the parse tree
	 */
	exitIri?: (ctx: IriContext) => void;
}

