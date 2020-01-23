// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/v/V.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { SourceFileContext } from "./VParser";
import { ModuleClauseContext } from "./VParser";
import { ImportDeclContext } from "./VParser";
import { ImportSpecContext } from "./VParser";
import { ImportPathContext } from "./VParser";
import { TopLevelDeclContext } from "./VParser";
import { DeclarationContext } from "./VParser";
import { ConstDeclContext } from "./VParser";
import { ConstSpecContext } from "./VParser";
import { IdentifierListContext } from "./VParser";
import { ExpressionListContext } from "./VParser";
import { FunctionDeclContext } from "./VParser";
import { FunctionContext } from "./VParser";
import { MethodDeclContext } from "./VParser";
import { ReceiverContext } from "./VParser";
import { NoMutDeclContext } from "./VParser";
import { VarDeclContext } from "./VParser";
import { BlockContext } from "./VParser";
import { StatementListContext } from "./VParser";
import { StatementContext } from "./VParser";
import { SimpleStmtContext } from "./VParser";
import { ExpressionStmtContext } from "./VParser";
import { IncDecStmtContext } from "./VParser";
import { AssignmentContext } from "./VParser";
import { Assign_opContext } from "./VParser";
import { ReturnStmtContext } from "./VParser";
import { BreakStmtContext } from "./VParser";
import { ContinueStmtContext } from "./VParser";
import { IfStmtContext } from "./VParser";
import { SwitchStmtContext } from "./VParser";
import { ExprSwitchStmtContext } from "./VParser";
import { ExprCaseClauseContext } from "./VParser";
import { ExprSwitchCaseContext } from "./VParser";
import { ForStmtContext } from "./VParser";
import { ForClauseContext } from "./VParser";
import { InClauseContext } from "./VParser";
import { TypeContext } from "./VParser";
import { TypeNameContext } from "./VParser";
import { TypeLitContext } from "./VParser";
import { ArrayTypeContext } from "./VParser";
import { ArrayLengthContext } from "./VParser";
import { ElementTypeContext } from "./VParser";
import { InterfaceTypeContext } from "./VParser";
import { MapTypeContext } from "./VParser";
import { MethodSpecContext } from "./VParser";
import { FunctionTypeContext } from "./VParser";
import { SignatureContext } from "./VParser";
import { ResultContext } from "./VParser";
import { ParametersContext } from "./VParser";
import { ParameterListContext } from "./VParser";
import { ParameterDeclContext } from "./VParser";
import { OperandContext } from "./VParser";
import { LiteralContext } from "./VParser";
import { ArrayLitContext } from "./VParser";
import { BasicLitContext } from "./VParser";
import { OperandNameContext } from "./VParser";
import { QualifiedIdentContext } from "./VParser";
import { CompositeLitContext } from "./VParser";
import { LiteralTypeContext } from "./VParser";
import { LiteralValueContext } from "./VParser";
import { ElementListContext } from "./VParser";
import { KeyedElementContext } from "./VParser";
import { KeyContext } from "./VParser";
import { ElementContext } from "./VParser";
import { StructDeclContext } from "./VParser";
import { FieldDeclContext } from "./VParser";
import { AnonymousFieldContext } from "./VParser";
import { FunctionLitContext } from "./VParser";
import { PrimaryExprContext } from "./VParser";
import { SelectorContext } from "./VParser";
import { IndexContext } from "./VParser";
import { ArgumentsContext } from "./VParser";
import { MethodExprContext } from "./VParser";
import { ReceiverTypeContext } from "./VParser";
import { ExpressionContext } from "./VParser";
import { UnaryExprContext } from "./VParser";
import { ConversionContext } from "./VParser";
import { EosContext } from "./VParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `VParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface VVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `VParser.sourceFile`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSourceFile?: (ctx: SourceFileContext) => Result;

	/**
	 * Visit a parse tree produced by `VParser.moduleClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitModuleClause?: (ctx: ModuleClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `VParser.importDecl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImportDecl?: (ctx: ImportDeclContext) => Result;

	/**
	 * Visit a parse tree produced by `VParser.importSpec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImportSpec?: (ctx: ImportSpecContext) => Result;

	/**
	 * Visit a parse tree produced by `VParser.importPath`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImportPath?: (ctx: ImportPathContext) => Result;

	/**
	 * Visit a parse tree produced by `VParser.topLevelDecl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTopLevelDecl?: (ctx: TopLevelDeclContext) => Result;

	/**
	 * Visit a parse tree produced by `VParser.declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclaration?: (ctx: DeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `VParser.constDecl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstDecl?: (ctx: ConstDeclContext) => Result;

	/**
	 * Visit a parse tree produced by `VParser.constSpec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstSpec?: (ctx: ConstSpecContext) => Result;

	/**
	 * Visit a parse tree produced by `VParser.identifierList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifierList?: (ctx: IdentifierListContext) => Result;

	/**
	 * Visit a parse tree produced by `VParser.expressionList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionList?: (ctx: ExpressionListContext) => Result;

	/**
	 * Visit a parse tree produced by `VParser.functionDecl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionDecl?: (ctx: FunctionDeclContext) => Result;

	/**
	 * Visit a parse tree produced by `VParser.function`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunction?: (ctx: FunctionContext) => Result;

	/**
	 * Visit a parse tree produced by `VParser.methodDecl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMethodDecl?: (ctx: MethodDeclContext) => Result;

	/**
	 * Visit a parse tree produced by `VParser.receiver`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReceiver?: (ctx: ReceiverContext) => Result;

	/**
	 * Visit a parse tree produced by `VParser.noMutDecl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNoMutDecl?: (ctx: NoMutDeclContext) => Result;

	/**
	 * Visit a parse tree produced by `VParser.varDecl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVarDecl?: (ctx: VarDeclContext) => Result;

	/**
	 * Visit a parse tree produced by `VParser.block`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlock?: (ctx: BlockContext) => Result;

	/**
	 * Visit a parse tree produced by `VParser.statementList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatementList?: (ctx: StatementListContext) => Result;

	/**
	 * Visit a parse tree produced by `VParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;

	/**
	 * Visit a parse tree produced by `VParser.simpleStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSimpleStmt?: (ctx: SimpleStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `VParser.expressionStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionStmt?: (ctx: ExpressionStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `VParser.incDecStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIncDecStmt?: (ctx: IncDecStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `VParser.assignment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignment?: (ctx: AssignmentContext) => Result;

	/**
	 * Visit a parse tree produced by `VParser.assign_op`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssign_op?: (ctx: Assign_opContext) => Result;

	/**
	 * Visit a parse tree produced by `VParser.returnStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReturnStmt?: (ctx: ReturnStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `VParser.breakStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBreakStmt?: (ctx: BreakStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `VParser.continueStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitContinueStmt?: (ctx: ContinueStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `VParser.ifStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfStmt?: (ctx: IfStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `VParser.switchStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSwitchStmt?: (ctx: SwitchStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `VParser.exprSwitchStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExprSwitchStmt?: (ctx: ExprSwitchStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `VParser.exprCaseClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExprCaseClause?: (ctx: ExprCaseClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `VParser.exprSwitchCase`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExprSwitchCase?: (ctx: ExprSwitchCaseContext) => Result;

	/**
	 * Visit a parse tree produced by `VParser.forStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForStmt?: (ctx: ForStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `VParser.forClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForClause?: (ctx: ForClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `VParser.inClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInClause?: (ctx: InClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `VParser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitType?: (ctx: TypeContext) => Result;

	/**
	 * Visit a parse tree produced by `VParser.typeName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeName?: (ctx: TypeNameContext) => Result;

	/**
	 * Visit a parse tree produced by `VParser.typeLit`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeLit?: (ctx: TypeLitContext) => Result;

	/**
	 * Visit a parse tree produced by `VParser.arrayType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrayType?: (ctx: ArrayTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `VParser.arrayLength`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrayLength?: (ctx: ArrayLengthContext) => Result;

	/**
	 * Visit a parse tree produced by `VParser.elementType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElementType?: (ctx: ElementTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `VParser.interfaceType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInterfaceType?: (ctx: InterfaceTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `VParser.mapType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMapType?: (ctx: MapTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `VParser.methodSpec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMethodSpec?: (ctx: MethodSpecContext) => Result;

	/**
	 * Visit a parse tree produced by `VParser.functionType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionType?: (ctx: FunctionTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `VParser.signature`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSignature?: (ctx: SignatureContext) => Result;

	/**
	 * Visit a parse tree produced by `VParser.result`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitResult?: (ctx: ResultContext) => Result;

	/**
	 * Visit a parse tree produced by `VParser.parameters`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParameters?: (ctx: ParametersContext) => Result;

	/**
	 * Visit a parse tree produced by `VParser.parameterList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParameterList?: (ctx: ParameterListContext) => Result;

	/**
	 * Visit a parse tree produced by `VParser.parameterDecl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParameterDecl?: (ctx: ParameterDeclContext) => Result;

	/**
	 * Visit a parse tree produced by `VParser.operand`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOperand?: (ctx: OperandContext) => Result;

	/**
	 * Visit a parse tree produced by `VParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiteral?: (ctx: LiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `VParser.arrayLit`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrayLit?: (ctx: ArrayLitContext) => Result;

	/**
	 * Visit a parse tree produced by `VParser.basicLit`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBasicLit?: (ctx: BasicLitContext) => Result;

	/**
	 * Visit a parse tree produced by `VParser.operandName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOperandName?: (ctx: OperandNameContext) => Result;

	/**
	 * Visit a parse tree produced by `VParser.qualifiedIdent`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQualifiedIdent?: (ctx: QualifiedIdentContext) => Result;

	/**
	 * Visit a parse tree produced by `VParser.compositeLit`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCompositeLit?: (ctx: CompositeLitContext) => Result;

	/**
	 * Visit a parse tree produced by `VParser.literalType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiteralType?: (ctx: LiteralTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `VParser.literalValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiteralValue?: (ctx: LiteralValueContext) => Result;

	/**
	 * Visit a parse tree produced by `VParser.elementList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElementList?: (ctx: ElementListContext) => Result;

	/**
	 * Visit a parse tree produced by `VParser.keyedElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKeyedElement?: (ctx: KeyedElementContext) => Result;

	/**
	 * Visit a parse tree produced by `VParser.key`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKey?: (ctx: KeyContext) => Result;

	/**
	 * Visit a parse tree produced by `VParser.element`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElement?: (ctx: ElementContext) => Result;

	/**
	 * Visit a parse tree produced by `VParser.structDecl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStructDecl?: (ctx: StructDeclContext) => Result;

	/**
	 * Visit a parse tree produced by `VParser.fieldDecl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFieldDecl?: (ctx: FieldDeclContext) => Result;

	/**
	 * Visit a parse tree produced by `VParser.anonymousField`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnonymousField?: (ctx: AnonymousFieldContext) => Result;

	/**
	 * Visit a parse tree produced by `VParser.functionLit`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionLit?: (ctx: FunctionLitContext) => Result;

	/**
	 * Visit a parse tree produced by `VParser.primaryExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrimaryExpr?: (ctx: PrimaryExprContext) => Result;

	/**
	 * Visit a parse tree produced by `VParser.selector`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelector?: (ctx: SelectorContext) => Result;

	/**
	 * Visit a parse tree produced by `VParser.index`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIndex?: (ctx: IndexContext) => Result;

	/**
	 * Visit a parse tree produced by `VParser.arguments`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArguments?: (ctx: ArgumentsContext) => Result;

	/**
	 * Visit a parse tree produced by `VParser.methodExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMethodExpr?: (ctx: MethodExprContext) => Result;

	/**
	 * Visit a parse tree produced by `VParser.receiverType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReceiverType?: (ctx: ReceiverTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `VParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `VParser.unaryExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnaryExpr?: (ctx: UnaryExprContext) => Result;

	/**
	 * Visit a parse tree produced by `VParser.conversion`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConversion?: (ctx: ConversionContext) => Result;

	/**
	 * Visit a parse tree produced by `VParser.eos`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEos?: (ctx: EosContext) => Result;
}

