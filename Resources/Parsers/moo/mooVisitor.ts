// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/moo/moo.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { ProgContext } from "./mooParser";
import { DeclarationContext } from "./mooParser";
import { ProgramdeclContext } from "./mooParser";
import { ProgramnameContext } from "./mooParser";
import { VerbdeclContext } from "./mooParser";
import { VerbnameContext } from "./mooParser";
import { PropertydeclContext } from "./mooParser";
import { RmpropertydeclContext } from "./mooParser";
import { SetpropertydeclContext } from "./mooParser";
import { DisplaypropertydeclContext } from "./mooParser";
import { KidsdeclContext } from "./mooParser";
import { ParentdeclContext } from "./mooParser";
import { DescribedeclContext } from "./mooParser";
import { ContentsdeclContext } from "./mooParser";
import { NoteditdeclContext } from "./mooParser";
import { CreatedeclContext } from "./mooParser";
import { EditdeclContext } from "./mooParser";
import { AddaliasdeclContext } from "./mooParser";
import { StatementContext } from "./mooParser";
import { IfblockContext } from "./mooParser";
import { WhileblockContext } from "./mooParser";
import { DoblockContext } from "./mooParser";
import { ForblockContext } from "./mooParser";
import { TryblockContext } from "./mooParser";
import { AssignblockContext } from "./mooParser";
import { ConditionContext } from "./mooParser";
import { RelopContext } from "./mooParser";
import { ExpressionlistContext } from "./mooParser";
import { ExpressionContext } from "./mooParser";
import { TermContext } from "./mooParser";
import { FactorContext } from "./mooParser";
import { SignedAtomContext } from "./mooParser";
import { AtomContext } from "./mooParser";
import { ObjrefContext } from "./mooParser";
import { FunctioninvocationContext } from "./mooParser";
import { CommandContext } from "./mooParser";
import { ReturncommandContext } from "./mooParser";
import { VerbinvocationContext } from "./mooParser";
import { VerbContext } from "./mooParser";
import { PropertyContext } from "./mooParser";
import { PropertynameContext } from "./mooParser";
import { ListContext } from "./mooParser";
import { StringliteralContext } from "./mooParser";
import { IntegerContext } from "./mooParser";
import { RealContext } from "./mooParser";
import { NameContext } from "./mooParser";
import { SysnameContext } from "./mooParser";
import { UsernameContext } from "./mooParser";
import { PermissionsContext } from "./mooParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `mooParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface mooVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `mooParser.prog`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProg?: (ctx: ProgContext) => Result;

	/**
	 * Visit a parse tree produced by `mooParser.declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclaration?: (ctx: DeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `mooParser.programdecl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProgramdecl?: (ctx: ProgramdeclContext) => Result;

	/**
	 * Visit a parse tree produced by `mooParser.programname`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProgramname?: (ctx: ProgramnameContext) => Result;

	/**
	 * Visit a parse tree produced by `mooParser.verbdecl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVerbdecl?: (ctx: VerbdeclContext) => Result;

	/**
	 * Visit a parse tree produced by `mooParser.verbname`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVerbname?: (ctx: VerbnameContext) => Result;

	/**
	 * Visit a parse tree produced by `mooParser.propertydecl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPropertydecl?: (ctx: PropertydeclContext) => Result;

	/**
	 * Visit a parse tree produced by `mooParser.rmpropertydecl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRmpropertydecl?: (ctx: RmpropertydeclContext) => Result;

	/**
	 * Visit a parse tree produced by `mooParser.setpropertydecl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetpropertydecl?: (ctx: SetpropertydeclContext) => Result;

	/**
	 * Visit a parse tree produced by `mooParser.displaypropertydecl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDisplaypropertydecl?: (ctx: DisplaypropertydeclContext) => Result;

	/**
	 * Visit a parse tree produced by `mooParser.kidsdecl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKidsdecl?: (ctx: KidsdeclContext) => Result;

	/**
	 * Visit a parse tree produced by `mooParser.parentdecl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParentdecl?: (ctx: ParentdeclContext) => Result;

	/**
	 * Visit a parse tree produced by `mooParser.describedecl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDescribedecl?: (ctx: DescribedeclContext) => Result;

	/**
	 * Visit a parse tree produced by `mooParser.contentsdecl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitContentsdecl?: (ctx: ContentsdeclContext) => Result;

	/**
	 * Visit a parse tree produced by `mooParser.noteditdecl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNoteditdecl?: (ctx: NoteditdeclContext) => Result;

	/**
	 * Visit a parse tree produced by `mooParser.createdecl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreatedecl?: (ctx: CreatedeclContext) => Result;

	/**
	 * Visit a parse tree produced by `mooParser.editdecl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEditdecl?: (ctx: EditdeclContext) => Result;

	/**
	 * Visit a parse tree produced by `mooParser.addaliasdecl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAddaliasdecl?: (ctx: AddaliasdeclContext) => Result;

	/**
	 * Visit a parse tree produced by `mooParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;

	/**
	 * Visit a parse tree produced by `mooParser.ifblock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfblock?: (ctx: IfblockContext) => Result;

	/**
	 * Visit a parse tree produced by `mooParser.whileblock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhileblock?: (ctx: WhileblockContext) => Result;

	/**
	 * Visit a parse tree produced by `mooParser.doblock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDoblock?: (ctx: DoblockContext) => Result;

	/**
	 * Visit a parse tree produced by `mooParser.forblock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForblock?: (ctx: ForblockContext) => Result;

	/**
	 * Visit a parse tree produced by `mooParser.tryblock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTryblock?: (ctx: TryblockContext) => Result;

	/**
	 * Visit a parse tree produced by `mooParser.assignblock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignblock?: (ctx: AssignblockContext) => Result;

	/**
	 * Visit a parse tree produced by `mooParser.condition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCondition?: (ctx: ConditionContext) => Result;

	/**
	 * Visit a parse tree produced by `mooParser.relop`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRelop?: (ctx: RelopContext) => Result;

	/**
	 * Visit a parse tree produced by `mooParser.expressionlist`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionlist?: (ctx: ExpressionlistContext) => Result;

	/**
	 * Visit a parse tree produced by `mooParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `mooParser.term`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTerm?: (ctx: TermContext) => Result;

	/**
	 * Visit a parse tree produced by `mooParser.factor`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFactor?: (ctx: FactorContext) => Result;

	/**
	 * Visit a parse tree produced by `mooParser.signedAtom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSignedAtom?: (ctx: SignedAtomContext) => Result;

	/**
	 * Visit a parse tree produced by `mooParser.atom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAtom?: (ctx: AtomContext) => Result;

	/**
	 * Visit a parse tree produced by `mooParser.objref`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitObjref?: (ctx: ObjrefContext) => Result;

	/**
	 * Visit a parse tree produced by `mooParser.functioninvocation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctioninvocation?: (ctx: FunctioninvocationContext) => Result;

	/**
	 * Visit a parse tree produced by `mooParser.command`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCommand?: (ctx: CommandContext) => Result;

	/**
	 * Visit a parse tree produced by `mooParser.returncommand`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReturncommand?: (ctx: ReturncommandContext) => Result;

	/**
	 * Visit a parse tree produced by `mooParser.verbinvocation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVerbinvocation?: (ctx: VerbinvocationContext) => Result;

	/**
	 * Visit a parse tree produced by `mooParser.verb`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVerb?: (ctx: VerbContext) => Result;

	/**
	 * Visit a parse tree produced by `mooParser.property`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProperty?: (ctx: PropertyContext) => Result;

	/**
	 * Visit a parse tree produced by `mooParser.propertyname`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPropertyname?: (ctx: PropertynameContext) => Result;

	/**
	 * Visit a parse tree produced by `mooParser.list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitList?: (ctx: ListContext) => Result;

	/**
	 * Visit a parse tree produced by `mooParser.stringliteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStringliteral?: (ctx: StringliteralContext) => Result;

	/**
	 * Visit a parse tree produced by `mooParser.integer`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInteger?: (ctx: IntegerContext) => Result;

	/**
	 * Visit a parse tree produced by `mooParser.real`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReal?: (ctx: RealContext) => Result;

	/**
	 * Visit a parse tree produced by `mooParser.name`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitName?: (ctx: NameContext) => Result;

	/**
	 * Visit a parse tree produced by `mooParser.sysname`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSysname?: (ctx: SysnameContext) => Result;

	/**
	 * Visit a parse tree produced by `mooParser.username`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUsername?: (ctx: UsernameContext) => Result;

	/**
	 * Visit a parse tree produced by `mooParser.permissions`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPermissions?: (ctx: PermissionsContext) => Result;
}

