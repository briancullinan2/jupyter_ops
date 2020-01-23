// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/moo/moo.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

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
 * This interface defines a complete listener for a parse tree produced by
 * `mooParser`.
 */
export interface mooListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `mooParser.prog`.
	 * @param ctx the parse tree
	 */
	enterProg?: (ctx: ProgContext) => void;
	/**
	 * Exit a parse tree produced by `mooParser.prog`.
	 * @param ctx the parse tree
	 */
	exitProg?: (ctx: ProgContext) => void;

	/**
	 * Enter a parse tree produced by `mooParser.declaration`.
	 * @param ctx the parse tree
	 */
	enterDeclaration?: (ctx: DeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `mooParser.declaration`.
	 * @param ctx the parse tree
	 */
	exitDeclaration?: (ctx: DeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `mooParser.programdecl`.
	 * @param ctx the parse tree
	 */
	enterProgramdecl?: (ctx: ProgramdeclContext) => void;
	/**
	 * Exit a parse tree produced by `mooParser.programdecl`.
	 * @param ctx the parse tree
	 */
	exitProgramdecl?: (ctx: ProgramdeclContext) => void;

	/**
	 * Enter a parse tree produced by `mooParser.programname`.
	 * @param ctx the parse tree
	 */
	enterProgramname?: (ctx: ProgramnameContext) => void;
	/**
	 * Exit a parse tree produced by `mooParser.programname`.
	 * @param ctx the parse tree
	 */
	exitProgramname?: (ctx: ProgramnameContext) => void;

	/**
	 * Enter a parse tree produced by `mooParser.verbdecl`.
	 * @param ctx the parse tree
	 */
	enterVerbdecl?: (ctx: VerbdeclContext) => void;
	/**
	 * Exit a parse tree produced by `mooParser.verbdecl`.
	 * @param ctx the parse tree
	 */
	exitVerbdecl?: (ctx: VerbdeclContext) => void;

	/**
	 * Enter a parse tree produced by `mooParser.verbname`.
	 * @param ctx the parse tree
	 */
	enterVerbname?: (ctx: VerbnameContext) => void;
	/**
	 * Exit a parse tree produced by `mooParser.verbname`.
	 * @param ctx the parse tree
	 */
	exitVerbname?: (ctx: VerbnameContext) => void;

	/**
	 * Enter a parse tree produced by `mooParser.propertydecl`.
	 * @param ctx the parse tree
	 */
	enterPropertydecl?: (ctx: PropertydeclContext) => void;
	/**
	 * Exit a parse tree produced by `mooParser.propertydecl`.
	 * @param ctx the parse tree
	 */
	exitPropertydecl?: (ctx: PropertydeclContext) => void;

	/**
	 * Enter a parse tree produced by `mooParser.rmpropertydecl`.
	 * @param ctx the parse tree
	 */
	enterRmpropertydecl?: (ctx: RmpropertydeclContext) => void;
	/**
	 * Exit a parse tree produced by `mooParser.rmpropertydecl`.
	 * @param ctx the parse tree
	 */
	exitRmpropertydecl?: (ctx: RmpropertydeclContext) => void;

	/**
	 * Enter a parse tree produced by `mooParser.setpropertydecl`.
	 * @param ctx the parse tree
	 */
	enterSetpropertydecl?: (ctx: SetpropertydeclContext) => void;
	/**
	 * Exit a parse tree produced by `mooParser.setpropertydecl`.
	 * @param ctx the parse tree
	 */
	exitSetpropertydecl?: (ctx: SetpropertydeclContext) => void;

	/**
	 * Enter a parse tree produced by `mooParser.displaypropertydecl`.
	 * @param ctx the parse tree
	 */
	enterDisplaypropertydecl?: (ctx: DisplaypropertydeclContext) => void;
	/**
	 * Exit a parse tree produced by `mooParser.displaypropertydecl`.
	 * @param ctx the parse tree
	 */
	exitDisplaypropertydecl?: (ctx: DisplaypropertydeclContext) => void;

	/**
	 * Enter a parse tree produced by `mooParser.kidsdecl`.
	 * @param ctx the parse tree
	 */
	enterKidsdecl?: (ctx: KidsdeclContext) => void;
	/**
	 * Exit a parse tree produced by `mooParser.kidsdecl`.
	 * @param ctx the parse tree
	 */
	exitKidsdecl?: (ctx: KidsdeclContext) => void;

	/**
	 * Enter a parse tree produced by `mooParser.parentdecl`.
	 * @param ctx the parse tree
	 */
	enterParentdecl?: (ctx: ParentdeclContext) => void;
	/**
	 * Exit a parse tree produced by `mooParser.parentdecl`.
	 * @param ctx the parse tree
	 */
	exitParentdecl?: (ctx: ParentdeclContext) => void;

	/**
	 * Enter a parse tree produced by `mooParser.describedecl`.
	 * @param ctx the parse tree
	 */
	enterDescribedecl?: (ctx: DescribedeclContext) => void;
	/**
	 * Exit a parse tree produced by `mooParser.describedecl`.
	 * @param ctx the parse tree
	 */
	exitDescribedecl?: (ctx: DescribedeclContext) => void;

	/**
	 * Enter a parse tree produced by `mooParser.contentsdecl`.
	 * @param ctx the parse tree
	 */
	enterContentsdecl?: (ctx: ContentsdeclContext) => void;
	/**
	 * Exit a parse tree produced by `mooParser.contentsdecl`.
	 * @param ctx the parse tree
	 */
	exitContentsdecl?: (ctx: ContentsdeclContext) => void;

	/**
	 * Enter a parse tree produced by `mooParser.noteditdecl`.
	 * @param ctx the parse tree
	 */
	enterNoteditdecl?: (ctx: NoteditdeclContext) => void;
	/**
	 * Exit a parse tree produced by `mooParser.noteditdecl`.
	 * @param ctx the parse tree
	 */
	exitNoteditdecl?: (ctx: NoteditdeclContext) => void;

	/**
	 * Enter a parse tree produced by `mooParser.createdecl`.
	 * @param ctx the parse tree
	 */
	enterCreatedecl?: (ctx: CreatedeclContext) => void;
	/**
	 * Exit a parse tree produced by `mooParser.createdecl`.
	 * @param ctx the parse tree
	 */
	exitCreatedecl?: (ctx: CreatedeclContext) => void;

	/**
	 * Enter a parse tree produced by `mooParser.editdecl`.
	 * @param ctx the parse tree
	 */
	enterEditdecl?: (ctx: EditdeclContext) => void;
	/**
	 * Exit a parse tree produced by `mooParser.editdecl`.
	 * @param ctx the parse tree
	 */
	exitEditdecl?: (ctx: EditdeclContext) => void;

	/**
	 * Enter a parse tree produced by `mooParser.addaliasdecl`.
	 * @param ctx the parse tree
	 */
	enterAddaliasdecl?: (ctx: AddaliasdeclContext) => void;
	/**
	 * Exit a parse tree produced by `mooParser.addaliasdecl`.
	 * @param ctx the parse tree
	 */
	exitAddaliasdecl?: (ctx: AddaliasdeclContext) => void;

	/**
	 * Enter a parse tree produced by `mooParser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement?: (ctx: StatementContext) => void;
	/**
	 * Exit a parse tree produced by `mooParser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement?: (ctx: StatementContext) => void;

	/**
	 * Enter a parse tree produced by `mooParser.ifblock`.
	 * @param ctx the parse tree
	 */
	enterIfblock?: (ctx: IfblockContext) => void;
	/**
	 * Exit a parse tree produced by `mooParser.ifblock`.
	 * @param ctx the parse tree
	 */
	exitIfblock?: (ctx: IfblockContext) => void;

	/**
	 * Enter a parse tree produced by `mooParser.whileblock`.
	 * @param ctx the parse tree
	 */
	enterWhileblock?: (ctx: WhileblockContext) => void;
	/**
	 * Exit a parse tree produced by `mooParser.whileblock`.
	 * @param ctx the parse tree
	 */
	exitWhileblock?: (ctx: WhileblockContext) => void;

	/**
	 * Enter a parse tree produced by `mooParser.doblock`.
	 * @param ctx the parse tree
	 */
	enterDoblock?: (ctx: DoblockContext) => void;
	/**
	 * Exit a parse tree produced by `mooParser.doblock`.
	 * @param ctx the parse tree
	 */
	exitDoblock?: (ctx: DoblockContext) => void;

	/**
	 * Enter a parse tree produced by `mooParser.forblock`.
	 * @param ctx the parse tree
	 */
	enterForblock?: (ctx: ForblockContext) => void;
	/**
	 * Exit a parse tree produced by `mooParser.forblock`.
	 * @param ctx the parse tree
	 */
	exitForblock?: (ctx: ForblockContext) => void;

	/**
	 * Enter a parse tree produced by `mooParser.tryblock`.
	 * @param ctx the parse tree
	 */
	enterTryblock?: (ctx: TryblockContext) => void;
	/**
	 * Exit a parse tree produced by `mooParser.tryblock`.
	 * @param ctx the parse tree
	 */
	exitTryblock?: (ctx: TryblockContext) => void;

	/**
	 * Enter a parse tree produced by `mooParser.assignblock`.
	 * @param ctx the parse tree
	 */
	enterAssignblock?: (ctx: AssignblockContext) => void;
	/**
	 * Exit a parse tree produced by `mooParser.assignblock`.
	 * @param ctx the parse tree
	 */
	exitAssignblock?: (ctx: AssignblockContext) => void;

	/**
	 * Enter a parse tree produced by `mooParser.condition`.
	 * @param ctx the parse tree
	 */
	enterCondition?: (ctx: ConditionContext) => void;
	/**
	 * Exit a parse tree produced by `mooParser.condition`.
	 * @param ctx the parse tree
	 */
	exitCondition?: (ctx: ConditionContext) => void;

	/**
	 * Enter a parse tree produced by `mooParser.relop`.
	 * @param ctx the parse tree
	 */
	enterRelop?: (ctx: RelopContext) => void;
	/**
	 * Exit a parse tree produced by `mooParser.relop`.
	 * @param ctx the parse tree
	 */
	exitRelop?: (ctx: RelopContext) => void;

	/**
	 * Enter a parse tree produced by `mooParser.expressionlist`.
	 * @param ctx the parse tree
	 */
	enterExpressionlist?: (ctx: ExpressionlistContext) => void;
	/**
	 * Exit a parse tree produced by `mooParser.expressionlist`.
	 * @param ctx the parse tree
	 */
	exitExpressionlist?: (ctx: ExpressionlistContext) => void;

	/**
	 * Enter a parse tree produced by `mooParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `mooParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `mooParser.term`.
	 * @param ctx the parse tree
	 */
	enterTerm?: (ctx: TermContext) => void;
	/**
	 * Exit a parse tree produced by `mooParser.term`.
	 * @param ctx the parse tree
	 */
	exitTerm?: (ctx: TermContext) => void;

	/**
	 * Enter a parse tree produced by `mooParser.factor`.
	 * @param ctx the parse tree
	 */
	enterFactor?: (ctx: FactorContext) => void;
	/**
	 * Exit a parse tree produced by `mooParser.factor`.
	 * @param ctx the parse tree
	 */
	exitFactor?: (ctx: FactorContext) => void;

	/**
	 * Enter a parse tree produced by `mooParser.signedAtom`.
	 * @param ctx the parse tree
	 */
	enterSignedAtom?: (ctx: SignedAtomContext) => void;
	/**
	 * Exit a parse tree produced by `mooParser.signedAtom`.
	 * @param ctx the parse tree
	 */
	exitSignedAtom?: (ctx: SignedAtomContext) => void;

	/**
	 * Enter a parse tree produced by `mooParser.atom`.
	 * @param ctx the parse tree
	 */
	enterAtom?: (ctx: AtomContext) => void;
	/**
	 * Exit a parse tree produced by `mooParser.atom`.
	 * @param ctx the parse tree
	 */
	exitAtom?: (ctx: AtomContext) => void;

	/**
	 * Enter a parse tree produced by `mooParser.objref`.
	 * @param ctx the parse tree
	 */
	enterObjref?: (ctx: ObjrefContext) => void;
	/**
	 * Exit a parse tree produced by `mooParser.objref`.
	 * @param ctx the parse tree
	 */
	exitObjref?: (ctx: ObjrefContext) => void;

	/**
	 * Enter a parse tree produced by `mooParser.functioninvocation`.
	 * @param ctx the parse tree
	 */
	enterFunctioninvocation?: (ctx: FunctioninvocationContext) => void;
	/**
	 * Exit a parse tree produced by `mooParser.functioninvocation`.
	 * @param ctx the parse tree
	 */
	exitFunctioninvocation?: (ctx: FunctioninvocationContext) => void;

	/**
	 * Enter a parse tree produced by `mooParser.command`.
	 * @param ctx the parse tree
	 */
	enterCommand?: (ctx: CommandContext) => void;
	/**
	 * Exit a parse tree produced by `mooParser.command`.
	 * @param ctx the parse tree
	 */
	exitCommand?: (ctx: CommandContext) => void;

	/**
	 * Enter a parse tree produced by `mooParser.returncommand`.
	 * @param ctx the parse tree
	 */
	enterReturncommand?: (ctx: ReturncommandContext) => void;
	/**
	 * Exit a parse tree produced by `mooParser.returncommand`.
	 * @param ctx the parse tree
	 */
	exitReturncommand?: (ctx: ReturncommandContext) => void;

	/**
	 * Enter a parse tree produced by `mooParser.verbinvocation`.
	 * @param ctx the parse tree
	 */
	enterVerbinvocation?: (ctx: VerbinvocationContext) => void;
	/**
	 * Exit a parse tree produced by `mooParser.verbinvocation`.
	 * @param ctx the parse tree
	 */
	exitVerbinvocation?: (ctx: VerbinvocationContext) => void;

	/**
	 * Enter a parse tree produced by `mooParser.verb`.
	 * @param ctx the parse tree
	 */
	enterVerb?: (ctx: VerbContext) => void;
	/**
	 * Exit a parse tree produced by `mooParser.verb`.
	 * @param ctx the parse tree
	 */
	exitVerb?: (ctx: VerbContext) => void;

	/**
	 * Enter a parse tree produced by `mooParser.property`.
	 * @param ctx the parse tree
	 */
	enterProperty?: (ctx: PropertyContext) => void;
	/**
	 * Exit a parse tree produced by `mooParser.property`.
	 * @param ctx the parse tree
	 */
	exitProperty?: (ctx: PropertyContext) => void;

	/**
	 * Enter a parse tree produced by `mooParser.propertyname`.
	 * @param ctx the parse tree
	 */
	enterPropertyname?: (ctx: PropertynameContext) => void;
	/**
	 * Exit a parse tree produced by `mooParser.propertyname`.
	 * @param ctx the parse tree
	 */
	exitPropertyname?: (ctx: PropertynameContext) => void;

	/**
	 * Enter a parse tree produced by `mooParser.list`.
	 * @param ctx the parse tree
	 */
	enterList?: (ctx: ListContext) => void;
	/**
	 * Exit a parse tree produced by `mooParser.list`.
	 * @param ctx the parse tree
	 */
	exitList?: (ctx: ListContext) => void;

	/**
	 * Enter a parse tree produced by `mooParser.stringliteral`.
	 * @param ctx the parse tree
	 */
	enterStringliteral?: (ctx: StringliteralContext) => void;
	/**
	 * Exit a parse tree produced by `mooParser.stringliteral`.
	 * @param ctx the parse tree
	 */
	exitStringliteral?: (ctx: StringliteralContext) => void;

	/**
	 * Enter a parse tree produced by `mooParser.integer`.
	 * @param ctx the parse tree
	 */
	enterInteger?: (ctx: IntegerContext) => void;
	/**
	 * Exit a parse tree produced by `mooParser.integer`.
	 * @param ctx the parse tree
	 */
	exitInteger?: (ctx: IntegerContext) => void;

	/**
	 * Enter a parse tree produced by `mooParser.real`.
	 * @param ctx the parse tree
	 */
	enterReal?: (ctx: RealContext) => void;
	/**
	 * Exit a parse tree produced by `mooParser.real`.
	 * @param ctx the parse tree
	 */
	exitReal?: (ctx: RealContext) => void;

	/**
	 * Enter a parse tree produced by `mooParser.name`.
	 * @param ctx the parse tree
	 */
	enterName?: (ctx: NameContext) => void;
	/**
	 * Exit a parse tree produced by `mooParser.name`.
	 * @param ctx the parse tree
	 */
	exitName?: (ctx: NameContext) => void;

	/**
	 * Enter a parse tree produced by `mooParser.sysname`.
	 * @param ctx the parse tree
	 */
	enterSysname?: (ctx: SysnameContext) => void;
	/**
	 * Exit a parse tree produced by `mooParser.sysname`.
	 * @param ctx the parse tree
	 */
	exitSysname?: (ctx: SysnameContext) => void;

	/**
	 * Enter a parse tree produced by `mooParser.username`.
	 * @param ctx the parse tree
	 */
	enterUsername?: (ctx: UsernameContext) => void;
	/**
	 * Exit a parse tree produced by `mooParser.username`.
	 * @param ctx the parse tree
	 */
	exitUsername?: (ctx: UsernameContext) => void;

	/**
	 * Enter a parse tree produced by `mooParser.permissions`.
	 * @param ctx the parse tree
	 */
	enterPermissions?: (ctx: PermissionsContext) => void;
	/**
	 * Exit a parse tree produced by `mooParser.permissions`.
	 * @param ctx the parse tree
	 */
	exitPermissions?: (ctx: PermissionsContext) => void;
}

