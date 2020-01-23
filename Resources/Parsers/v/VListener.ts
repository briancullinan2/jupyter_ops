// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/v/V.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

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
 * This interface defines a complete listener for a parse tree produced by
 * `VParser`.
 */
export interface VListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `VParser.sourceFile`.
	 * @param ctx the parse tree
	 */
	enterSourceFile?: (ctx: SourceFileContext) => void;
	/**
	 * Exit a parse tree produced by `VParser.sourceFile`.
	 * @param ctx the parse tree
	 */
	exitSourceFile?: (ctx: SourceFileContext) => void;

	/**
	 * Enter a parse tree produced by `VParser.moduleClause`.
	 * @param ctx the parse tree
	 */
	enterModuleClause?: (ctx: ModuleClauseContext) => void;
	/**
	 * Exit a parse tree produced by `VParser.moduleClause`.
	 * @param ctx the parse tree
	 */
	exitModuleClause?: (ctx: ModuleClauseContext) => void;

	/**
	 * Enter a parse tree produced by `VParser.importDecl`.
	 * @param ctx the parse tree
	 */
	enterImportDecl?: (ctx: ImportDeclContext) => void;
	/**
	 * Exit a parse tree produced by `VParser.importDecl`.
	 * @param ctx the parse tree
	 */
	exitImportDecl?: (ctx: ImportDeclContext) => void;

	/**
	 * Enter a parse tree produced by `VParser.importSpec`.
	 * @param ctx the parse tree
	 */
	enterImportSpec?: (ctx: ImportSpecContext) => void;
	/**
	 * Exit a parse tree produced by `VParser.importSpec`.
	 * @param ctx the parse tree
	 */
	exitImportSpec?: (ctx: ImportSpecContext) => void;

	/**
	 * Enter a parse tree produced by `VParser.importPath`.
	 * @param ctx the parse tree
	 */
	enterImportPath?: (ctx: ImportPathContext) => void;
	/**
	 * Exit a parse tree produced by `VParser.importPath`.
	 * @param ctx the parse tree
	 */
	exitImportPath?: (ctx: ImportPathContext) => void;

	/**
	 * Enter a parse tree produced by `VParser.topLevelDecl`.
	 * @param ctx the parse tree
	 */
	enterTopLevelDecl?: (ctx: TopLevelDeclContext) => void;
	/**
	 * Exit a parse tree produced by `VParser.topLevelDecl`.
	 * @param ctx the parse tree
	 */
	exitTopLevelDecl?: (ctx: TopLevelDeclContext) => void;

	/**
	 * Enter a parse tree produced by `VParser.declaration`.
	 * @param ctx the parse tree
	 */
	enterDeclaration?: (ctx: DeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `VParser.declaration`.
	 * @param ctx the parse tree
	 */
	exitDeclaration?: (ctx: DeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `VParser.constDecl`.
	 * @param ctx the parse tree
	 */
	enterConstDecl?: (ctx: ConstDeclContext) => void;
	/**
	 * Exit a parse tree produced by `VParser.constDecl`.
	 * @param ctx the parse tree
	 */
	exitConstDecl?: (ctx: ConstDeclContext) => void;

	/**
	 * Enter a parse tree produced by `VParser.constSpec`.
	 * @param ctx the parse tree
	 */
	enterConstSpec?: (ctx: ConstSpecContext) => void;
	/**
	 * Exit a parse tree produced by `VParser.constSpec`.
	 * @param ctx the parse tree
	 */
	exitConstSpec?: (ctx: ConstSpecContext) => void;

	/**
	 * Enter a parse tree produced by `VParser.identifierList`.
	 * @param ctx the parse tree
	 */
	enterIdentifierList?: (ctx: IdentifierListContext) => void;
	/**
	 * Exit a parse tree produced by `VParser.identifierList`.
	 * @param ctx the parse tree
	 */
	exitIdentifierList?: (ctx: IdentifierListContext) => void;

	/**
	 * Enter a parse tree produced by `VParser.expressionList`.
	 * @param ctx the parse tree
	 */
	enterExpressionList?: (ctx: ExpressionListContext) => void;
	/**
	 * Exit a parse tree produced by `VParser.expressionList`.
	 * @param ctx the parse tree
	 */
	exitExpressionList?: (ctx: ExpressionListContext) => void;

	/**
	 * Enter a parse tree produced by `VParser.functionDecl`.
	 * @param ctx the parse tree
	 */
	enterFunctionDecl?: (ctx: FunctionDeclContext) => void;
	/**
	 * Exit a parse tree produced by `VParser.functionDecl`.
	 * @param ctx the parse tree
	 */
	exitFunctionDecl?: (ctx: FunctionDeclContext) => void;

	/**
	 * Enter a parse tree produced by `VParser.function`.
	 * @param ctx the parse tree
	 */
	enterFunction?: (ctx: FunctionContext) => void;
	/**
	 * Exit a parse tree produced by `VParser.function`.
	 * @param ctx the parse tree
	 */
	exitFunction?: (ctx: FunctionContext) => void;

	/**
	 * Enter a parse tree produced by `VParser.methodDecl`.
	 * @param ctx the parse tree
	 */
	enterMethodDecl?: (ctx: MethodDeclContext) => void;
	/**
	 * Exit a parse tree produced by `VParser.methodDecl`.
	 * @param ctx the parse tree
	 */
	exitMethodDecl?: (ctx: MethodDeclContext) => void;

	/**
	 * Enter a parse tree produced by `VParser.receiver`.
	 * @param ctx the parse tree
	 */
	enterReceiver?: (ctx: ReceiverContext) => void;
	/**
	 * Exit a parse tree produced by `VParser.receiver`.
	 * @param ctx the parse tree
	 */
	exitReceiver?: (ctx: ReceiverContext) => void;

	/**
	 * Enter a parse tree produced by `VParser.noMutDecl`.
	 * @param ctx the parse tree
	 */
	enterNoMutDecl?: (ctx: NoMutDeclContext) => void;
	/**
	 * Exit a parse tree produced by `VParser.noMutDecl`.
	 * @param ctx the parse tree
	 */
	exitNoMutDecl?: (ctx: NoMutDeclContext) => void;

	/**
	 * Enter a parse tree produced by `VParser.varDecl`.
	 * @param ctx the parse tree
	 */
	enterVarDecl?: (ctx: VarDeclContext) => void;
	/**
	 * Exit a parse tree produced by `VParser.varDecl`.
	 * @param ctx the parse tree
	 */
	exitVarDecl?: (ctx: VarDeclContext) => void;

	/**
	 * Enter a parse tree produced by `VParser.block`.
	 * @param ctx the parse tree
	 */
	enterBlock?: (ctx: BlockContext) => void;
	/**
	 * Exit a parse tree produced by `VParser.block`.
	 * @param ctx the parse tree
	 */
	exitBlock?: (ctx: BlockContext) => void;

	/**
	 * Enter a parse tree produced by `VParser.statementList`.
	 * @param ctx the parse tree
	 */
	enterStatementList?: (ctx: StatementListContext) => void;
	/**
	 * Exit a parse tree produced by `VParser.statementList`.
	 * @param ctx the parse tree
	 */
	exitStatementList?: (ctx: StatementListContext) => void;

	/**
	 * Enter a parse tree produced by `VParser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement?: (ctx: StatementContext) => void;
	/**
	 * Exit a parse tree produced by `VParser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement?: (ctx: StatementContext) => void;

	/**
	 * Enter a parse tree produced by `VParser.simpleStmt`.
	 * @param ctx the parse tree
	 */
	enterSimpleStmt?: (ctx: SimpleStmtContext) => void;
	/**
	 * Exit a parse tree produced by `VParser.simpleStmt`.
	 * @param ctx the parse tree
	 */
	exitSimpleStmt?: (ctx: SimpleStmtContext) => void;

	/**
	 * Enter a parse tree produced by `VParser.expressionStmt`.
	 * @param ctx the parse tree
	 */
	enterExpressionStmt?: (ctx: ExpressionStmtContext) => void;
	/**
	 * Exit a parse tree produced by `VParser.expressionStmt`.
	 * @param ctx the parse tree
	 */
	exitExpressionStmt?: (ctx: ExpressionStmtContext) => void;

	/**
	 * Enter a parse tree produced by `VParser.incDecStmt`.
	 * @param ctx the parse tree
	 */
	enterIncDecStmt?: (ctx: IncDecStmtContext) => void;
	/**
	 * Exit a parse tree produced by `VParser.incDecStmt`.
	 * @param ctx the parse tree
	 */
	exitIncDecStmt?: (ctx: IncDecStmtContext) => void;

	/**
	 * Enter a parse tree produced by `VParser.assignment`.
	 * @param ctx the parse tree
	 */
	enterAssignment?: (ctx: AssignmentContext) => void;
	/**
	 * Exit a parse tree produced by `VParser.assignment`.
	 * @param ctx the parse tree
	 */
	exitAssignment?: (ctx: AssignmentContext) => void;

	/**
	 * Enter a parse tree produced by `VParser.assign_op`.
	 * @param ctx the parse tree
	 */
	enterAssign_op?: (ctx: Assign_opContext) => void;
	/**
	 * Exit a parse tree produced by `VParser.assign_op`.
	 * @param ctx the parse tree
	 */
	exitAssign_op?: (ctx: Assign_opContext) => void;

	/**
	 * Enter a parse tree produced by `VParser.returnStmt`.
	 * @param ctx the parse tree
	 */
	enterReturnStmt?: (ctx: ReturnStmtContext) => void;
	/**
	 * Exit a parse tree produced by `VParser.returnStmt`.
	 * @param ctx the parse tree
	 */
	exitReturnStmt?: (ctx: ReturnStmtContext) => void;

	/**
	 * Enter a parse tree produced by `VParser.breakStmt`.
	 * @param ctx the parse tree
	 */
	enterBreakStmt?: (ctx: BreakStmtContext) => void;
	/**
	 * Exit a parse tree produced by `VParser.breakStmt`.
	 * @param ctx the parse tree
	 */
	exitBreakStmt?: (ctx: BreakStmtContext) => void;

	/**
	 * Enter a parse tree produced by `VParser.continueStmt`.
	 * @param ctx the parse tree
	 */
	enterContinueStmt?: (ctx: ContinueStmtContext) => void;
	/**
	 * Exit a parse tree produced by `VParser.continueStmt`.
	 * @param ctx the parse tree
	 */
	exitContinueStmt?: (ctx: ContinueStmtContext) => void;

	/**
	 * Enter a parse tree produced by `VParser.ifStmt`.
	 * @param ctx the parse tree
	 */
	enterIfStmt?: (ctx: IfStmtContext) => void;
	/**
	 * Exit a parse tree produced by `VParser.ifStmt`.
	 * @param ctx the parse tree
	 */
	exitIfStmt?: (ctx: IfStmtContext) => void;

	/**
	 * Enter a parse tree produced by `VParser.switchStmt`.
	 * @param ctx the parse tree
	 */
	enterSwitchStmt?: (ctx: SwitchStmtContext) => void;
	/**
	 * Exit a parse tree produced by `VParser.switchStmt`.
	 * @param ctx the parse tree
	 */
	exitSwitchStmt?: (ctx: SwitchStmtContext) => void;

	/**
	 * Enter a parse tree produced by `VParser.exprSwitchStmt`.
	 * @param ctx the parse tree
	 */
	enterExprSwitchStmt?: (ctx: ExprSwitchStmtContext) => void;
	/**
	 * Exit a parse tree produced by `VParser.exprSwitchStmt`.
	 * @param ctx the parse tree
	 */
	exitExprSwitchStmt?: (ctx: ExprSwitchStmtContext) => void;

	/**
	 * Enter a parse tree produced by `VParser.exprCaseClause`.
	 * @param ctx the parse tree
	 */
	enterExprCaseClause?: (ctx: ExprCaseClauseContext) => void;
	/**
	 * Exit a parse tree produced by `VParser.exprCaseClause`.
	 * @param ctx the parse tree
	 */
	exitExprCaseClause?: (ctx: ExprCaseClauseContext) => void;

	/**
	 * Enter a parse tree produced by `VParser.exprSwitchCase`.
	 * @param ctx the parse tree
	 */
	enterExprSwitchCase?: (ctx: ExprSwitchCaseContext) => void;
	/**
	 * Exit a parse tree produced by `VParser.exprSwitchCase`.
	 * @param ctx the parse tree
	 */
	exitExprSwitchCase?: (ctx: ExprSwitchCaseContext) => void;

	/**
	 * Enter a parse tree produced by `VParser.forStmt`.
	 * @param ctx the parse tree
	 */
	enterForStmt?: (ctx: ForStmtContext) => void;
	/**
	 * Exit a parse tree produced by `VParser.forStmt`.
	 * @param ctx the parse tree
	 */
	exitForStmt?: (ctx: ForStmtContext) => void;

	/**
	 * Enter a parse tree produced by `VParser.forClause`.
	 * @param ctx the parse tree
	 */
	enterForClause?: (ctx: ForClauseContext) => void;
	/**
	 * Exit a parse tree produced by `VParser.forClause`.
	 * @param ctx the parse tree
	 */
	exitForClause?: (ctx: ForClauseContext) => void;

	/**
	 * Enter a parse tree produced by `VParser.inClause`.
	 * @param ctx the parse tree
	 */
	enterInClause?: (ctx: InClauseContext) => void;
	/**
	 * Exit a parse tree produced by `VParser.inClause`.
	 * @param ctx the parse tree
	 */
	exitInClause?: (ctx: InClauseContext) => void;

	/**
	 * Enter a parse tree produced by `VParser.type`.
	 * @param ctx the parse tree
	 */
	enterType?: (ctx: TypeContext) => void;
	/**
	 * Exit a parse tree produced by `VParser.type`.
	 * @param ctx the parse tree
	 */
	exitType?: (ctx: TypeContext) => void;

	/**
	 * Enter a parse tree produced by `VParser.typeName`.
	 * @param ctx the parse tree
	 */
	enterTypeName?: (ctx: TypeNameContext) => void;
	/**
	 * Exit a parse tree produced by `VParser.typeName`.
	 * @param ctx the parse tree
	 */
	exitTypeName?: (ctx: TypeNameContext) => void;

	/**
	 * Enter a parse tree produced by `VParser.typeLit`.
	 * @param ctx the parse tree
	 */
	enterTypeLit?: (ctx: TypeLitContext) => void;
	/**
	 * Exit a parse tree produced by `VParser.typeLit`.
	 * @param ctx the parse tree
	 */
	exitTypeLit?: (ctx: TypeLitContext) => void;

	/**
	 * Enter a parse tree produced by `VParser.arrayType`.
	 * @param ctx the parse tree
	 */
	enterArrayType?: (ctx: ArrayTypeContext) => void;
	/**
	 * Exit a parse tree produced by `VParser.arrayType`.
	 * @param ctx the parse tree
	 */
	exitArrayType?: (ctx: ArrayTypeContext) => void;

	/**
	 * Enter a parse tree produced by `VParser.arrayLength`.
	 * @param ctx the parse tree
	 */
	enterArrayLength?: (ctx: ArrayLengthContext) => void;
	/**
	 * Exit a parse tree produced by `VParser.arrayLength`.
	 * @param ctx the parse tree
	 */
	exitArrayLength?: (ctx: ArrayLengthContext) => void;

	/**
	 * Enter a parse tree produced by `VParser.elementType`.
	 * @param ctx the parse tree
	 */
	enterElementType?: (ctx: ElementTypeContext) => void;
	/**
	 * Exit a parse tree produced by `VParser.elementType`.
	 * @param ctx the parse tree
	 */
	exitElementType?: (ctx: ElementTypeContext) => void;

	/**
	 * Enter a parse tree produced by `VParser.interfaceType`.
	 * @param ctx the parse tree
	 */
	enterInterfaceType?: (ctx: InterfaceTypeContext) => void;
	/**
	 * Exit a parse tree produced by `VParser.interfaceType`.
	 * @param ctx the parse tree
	 */
	exitInterfaceType?: (ctx: InterfaceTypeContext) => void;

	/**
	 * Enter a parse tree produced by `VParser.mapType`.
	 * @param ctx the parse tree
	 */
	enterMapType?: (ctx: MapTypeContext) => void;
	/**
	 * Exit a parse tree produced by `VParser.mapType`.
	 * @param ctx the parse tree
	 */
	exitMapType?: (ctx: MapTypeContext) => void;

	/**
	 * Enter a parse tree produced by `VParser.methodSpec`.
	 * @param ctx the parse tree
	 */
	enterMethodSpec?: (ctx: MethodSpecContext) => void;
	/**
	 * Exit a parse tree produced by `VParser.methodSpec`.
	 * @param ctx the parse tree
	 */
	exitMethodSpec?: (ctx: MethodSpecContext) => void;

	/**
	 * Enter a parse tree produced by `VParser.functionType`.
	 * @param ctx the parse tree
	 */
	enterFunctionType?: (ctx: FunctionTypeContext) => void;
	/**
	 * Exit a parse tree produced by `VParser.functionType`.
	 * @param ctx the parse tree
	 */
	exitFunctionType?: (ctx: FunctionTypeContext) => void;

	/**
	 * Enter a parse tree produced by `VParser.signature`.
	 * @param ctx the parse tree
	 */
	enterSignature?: (ctx: SignatureContext) => void;
	/**
	 * Exit a parse tree produced by `VParser.signature`.
	 * @param ctx the parse tree
	 */
	exitSignature?: (ctx: SignatureContext) => void;

	/**
	 * Enter a parse tree produced by `VParser.result`.
	 * @param ctx the parse tree
	 */
	enterResult?: (ctx: ResultContext) => void;
	/**
	 * Exit a parse tree produced by `VParser.result`.
	 * @param ctx the parse tree
	 */
	exitResult?: (ctx: ResultContext) => void;

	/**
	 * Enter a parse tree produced by `VParser.parameters`.
	 * @param ctx the parse tree
	 */
	enterParameters?: (ctx: ParametersContext) => void;
	/**
	 * Exit a parse tree produced by `VParser.parameters`.
	 * @param ctx the parse tree
	 */
	exitParameters?: (ctx: ParametersContext) => void;

	/**
	 * Enter a parse tree produced by `VParser.parameterList`.
	 * @param ctx the parse tree
	 */
	enterParameterList?: (ctx: ParameterListContext) => void;
	/**
	 * Exit a parse tree produced by `VParser.parameterList`.
	 * @param ctx the parse tree
	 */
	exitParameterList?: (ctx: ParameterListContext) => void;

	/**
	 * Enter a parse tree produced by `VParser.parameterDecl`.
	 * @param ctx the parse tree
	 */
	enterParameterDecl?: (ctx: ParameterDeclContext) => void;
	/**
	 * Exit a parse tree produced by `VParser.parameterDecl`.
	 * @param ctx the parse tree
	 */
	exitParameterDecl?: (ctx: ParameterDeclContext) => void;

	/**
	 * Enter a parse tree produced by `VParser.operand`.
	 * @param ctx the parse tree
	 */
	enterOperand?: (ctx: OperandContext) => void;
	/**
	 * Exit a parse tree produced by `VParser.operand`.
	 * @param ctx the parse tree
	 */
	exitOperand?: (ctx: OperandContext) => void;

	/**
	 * Enter a parse tree produced by `VParser.literal`.
	 * @param ctx the parse tree
	 */
	enterLiteral?: (ctx: LiteralContext) => void;
	/**
	 * Exit a parse tree produced by `VParser.literal`.
	 * @param ctx the parse tree
	 */
	exitLiteral?: (ctx: LiteralContext) => void;

	/**
	 * Enter a parse tree produced by `VParser.arrayLit`.
	 * @param ctx the parse tree
	 */
	enterArrayLit?: (ctx: ArrayLitContext) => void;
	/**
	 * Exit a parse tree produced by `VParser.arrayLit`.
	 * @param ctx the parse tree
	 */
	exitArrayLit?: (ctx: ArrayLitContext) => void;

	/**
	 * Enter a parse tree produced by `VParser.basicLit`.
	 * @param ctx the parse tree
	 */
	enterBasicLit?: (ctx: BasicLitContext) => void;
	/**
	 * Exit a parse tree produced by `VParser.basicLit`.
	 * @param ctx the parse tree
	 */
	exitBasicLit?: (ctx: BasicLitContext) => void;

	/**
	 * Enter a parse tree produced by `VParser.operandName`.
	 * @param ctx the parse tree
	 */
	enterOperandName?: (ctx: OperandNameContext) => void;
	/**
	 * Exit a parse tree produced by `VParser.operandName`.
	 * @param ctx the parse tree
	 */
	exitOperandName?: (ctx: OperandNameContext) => void;

	/**
	 * Enter a parse tree produced by `VParser.qualifiedIdent`.
	 * @param ctx the parse tree
	 */
	enterQualifiedIdent?: (ctx: QualifiedIdentContext) => void;
	/**
	 * Exit a parse tree produced by `VParser.qualifiedIdent`.
	 * @param ctx the parse tree
	 */
	exitQualifiedIdent?: (ctx: QualifiedIdentContext) => void;

	/**
	 * Enter a parse tree produced by `VParser.compositeLit`.
	 * @param ctx the parse tree
	 */
	enterCompositeLit?: (ctx: CompositeLitContext) => void;
	/**
	 * Exit a parse tree produced by `VParser.compositeLit`.
	 * @param ctx the parse tree
	 */
	exitCompositeLit?: (ctx: CompositeLitContext) => void;

	/**
	 * Enter a parse tree produced by `VParser.literalType`.
	 * @param ctx the parse tree
	 */
	enterLiteralType?: (ctx: LiteralTypeContext) => void;
	/**
	 * Exit a parse tree produced by `VParser.literalType`.
	 * @param ctx the parse tree
	 */
	exitLiteralType?: (ctx: LiteralTypeContext) => void;

	/**
	 * Enter a parse tree produced by `VParser.literalValue`.
	 * @param ctx the parse tree
	 */
	enterLiteralValue?: (ctx: LiteralValueContext) => void;
	/**
	 * Exit a parse tree produced by `VParser.literalValue`.
	 * @param ctx the parse tree
	 */
	exitLiteralValue?: (ctx: LiteralValueContext) => void;

	/**
	 * Enter a parse tree produced by `VParser.elementList`.
	 * @param ctx the parse tree
	 */
	enterElementList?: (ctx: ElementListContext) => void;
	/**
	 * Exit a parse tree produced by `VParser.elementList`.
	 * @param ctx the parse tree
	 */
	exitElementList?: (ctx: ElementListContext) => void;

	/**
	 * Enter a parse tree produced by `VParser.keyedElement`.
	 * @param ctx the parse tree
	 */
	enterKeyedElement?: (ctx: KeyedElementContext) => void;
	/**
	 * Exit a parse tree produced by `VParser.keyedElement`.
	 * @param ctx the parse tree
	 */
	exitKeyedElement?: (ctx: KeyedElementContext) => void;

	/**
	 * Enter a parse tree produced by `VParser.key`.
	 * @param ctx the parse tree
	 */
	enterKey?: (ctx: KeyContext) => void;
	/**
	 * Exit a parse tree produced by `VParser.key`.
	 * @param ctx the parse tree
	 */
	exitKey?: (ctx: KeyContext) => void;

	/**
	 * Enter a parse tree produced by `VParser.element`.
	 * @param ctx the parse tree
	 */
	enterElement?: (ctx: ElementContext) => void;
	/**
	 * Exit a parse tree produced by `VParser.element`.
	 * @param ctx the parse tree
	 */
	exitElement?: (ctx: ElementContext) => void;

	/**
	 * Enter a parse tree produced by `VParser.structDecl`.
	 * @param ctx the parse tree
	 */
	enterStructDecl?: (ctx: StructDeclContext) => void;
	/**
	 * Exit a parse tree produced by `VParser.structDecl`.
	 * @param ctx the parse tree
	 */
	exitStructDecl?: (ctx: StructDeclContext) => void;

	/**
	 * Enter a parse tree produced by `VParser.fieldDecl`.
	 * @param ctx the parse tree
	 */
	enterFieldDecl?: (ctx: FieldDeclContext) => void;
	/**
	 * Exit a parse tree produced by `VParser.fieldDecl`.
	 * @param ctx the parse tree
	 */
	exitFieldDecl?: (ctx: FieldDeclContext) => void;

	/**
	 * Enter a parse tree produced by `VParser.anonymousField`.
	 * @param ctx the parse tree
	 */
	enterAnonymousField?: (ctx: AnonymousFieldContext) => void;
	/**
	 * Exit a parse tree produced by `VParser.anonymousField`.
	 * @param ctx the parse tree
	 */
	exitAnonymousField?: (ctx: AnonymousFieldContext) => void;

	/**
	 * Enter a parse tree produced by `VParser.functionLit`.
	 * @param ctx the parse tree
	 */
	enterFunctionLit?: (ctx: FunctionLitContext) => void;
	/**
	 * Exit a parse tree produced by `VParser.functionLit`.
	 * @param ctx the parse tree
	 */
	exitFunctionLit?: (ctx: FunctionLitContext) => void;

	/**
	 * Enter a parse tree produced by `VParser.primaryExpr`.
	 * @param ctx the parse tree
	 */
	enterPrimaryExpr?: (ctx: PrimaryExprContext) => void;
	/**
	 * Exit a parse tree produced by `VParser.primaryExpr`.
	 * @param ctx the parse tree
	 */
	exitPrimaryExpr?: (ctx: PrimaryExprContext) => void;

	/**
	 * Enter a parse tree produced by `VParser.selector`.
	 * @param ctx the parse tree
	 */
	enterSelector?: (ctx: SelectorContext) => void;
	/**
	 * Exit a parse tree produced by `VParser.selector`.
	 * @param ctx the parse tree
	 */
	exitSelector?: (ctx: SelectorContext) => void;

	/**
	 * Enter a parse tree produced by `VParser.index`.
	 * @param ctx the parse tree
	 */
	enterIndex?: (ctx: IndexContext) => void;
	/**
	 * Exit a parse tree produced by `VParser.index`.
	 * @param ctx the parse tree
	 */
	exitIndex?: (ctx: IndexContext) => void;

	/**
	 * Enter a parse tree produced by `VParser.arguments`.
	 * @param ctx the parse tree
	 */
	enterArguments?: (ctx: ArgumentsContext) => void;
	/**
	 * Exit a parse tree produced by `VParser.arguments`.
	 * @param ctx the parse tree
	 */
	exitArguments?: (ctx: ArgumentsContext) => void;

	/**
	 * Enter a parse tree produced by `VParser.methodExpr`.
	 * @param ctx the parse tree
	 */
	enterMethodExpr?: (ctx: MethodExprContext) => void;
	/**
	 * Exit a parse tree produced by `VParser.methodExpr`.
	 * @param ctx the parse tree
	 */
	exitMethodExpr?: (ctx: MethodExprContext) => void;

	/**
	 * Enter a parse tree produced by `VParser.receiverType`.
	 * @param ctx the parse tree
	 */
	enterReceiverType?: (ctx: ReceiverTypeContext) => void;
	/**
	 * Exit a parse tree produced by `VParser.receiverType`.
	 * @param ctx the parse tree
	 */
	exitReceiverType?: (ctx: ReceiverTypeContext) => void;

	/**
	 * Enter a parse tree produced by `VParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `VParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `VParser.unaryExpr`.
	 * @param ctx the parse tree
	 */
	enterUnaryExpr?: (ctx: UnaryExprContext) => void;
	/**
	 * Exit a parse tree produced by `VParser.unaryExpr`.
	 * @param ctx the parse tree
	 */
	exitUnaryExpr?: (ctx: UnaryExprContext) => void;

	/**
	 * Enter a parse tree produced by `VParser.conversion`.
	 * @param ctx the parse tree
	 */
	enterConversion?: (ctx: ConversionContext) => void;
	/**
	 * Exit a parse tree produced by `VParser.conversion`.
	 * @param ctx the parse tree
	 */
	exitConversion?: (ctx: ConversionContext) => void;

	/**
	 * Enter a parse tree produced by `VParser.eos`.
	 * @param ctx the parse tree
	 */
	enterEos?: (ctx: EosContext) => void;
	/**
	 * Exit a parse tree produced by `VParser.eos`.
	 * @param ctx the parse tree
	 */
	exitEos?: (ctx: EosContext) => void;
}

