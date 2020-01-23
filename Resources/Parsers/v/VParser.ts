// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/v/V.g4 by ANTLR 4.7.3-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { VListener } from "./VListener";
import { VVisitor } from "./VVisitor";


export class VParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly T__9 = 10;
	public static readonly T__10 = 11;
	public static readonly T__11 = 12;
	public static readonly T__12 = 13;
	public static readonly T__13 = 14;
	public static readonly T__14 = 15;
	public static readonly T__15 = 16;
	public static readonly T__16 = 17;
	public static readonly T__17 = 18;
	public static readonly T__18 = 19;
	public static readonly T__19 = 20;
	public static readonly T__20 = 21;
	public static readonly T__21 = 22;
	public static readonly T__22 = 23;
	public static readonly T__23 = 24;
	public static readonly T__24 = 25;
	public static readonly T__25 = 26;
	public static readonly T__26 = 27;
	public static readonly T__27 = 28;
	public static readonly T__28 = 29;
	public static readonly T__29 = 30;
	public static readonly T__30 = 31;
	public static readonly T__31 = 32;
	public static readonly T__32 = 33;
	public static readonly T__33 = 34;
	public static readonly T__34 = 35;
	public static readonly T__35 = 36;
	public static readonly T__36 = 37;
	public static readonly T__37 = 38;
	public static readonly T__38 = 39;
	public static readonly T__39 = 40;
	public static readonly T__40 = 41;
	public static readonly T__41 = 42;
	public static readonly T__42 = 43;
	public static readonly T__43 = 44;
	public static readonly T__44 = 45;
	public static readonly T__45 = 46;
	public static readonly T__46 = 47;
	public static readonly T__47 = 48;
	public static readonly T__48 = 49;
	public static readonly T__49 = 50;
	public static readonly T__50 = 51;
	public static readonly T__51 = 52;
	public static readonly T__52 = 53;
	public static readonly IDENTIFIER = 54;
	public static readonly KEYWORD = 55;
	public static readonly BINARY_OP = 56;
	public static readonly INT_LIT = 57;
	public static readonly FLOAT_LIT = 58;
	public static readonly RUNE_LIT = 59;
	public static readonly LITTLE_U_VALUE = 60;
	public static readonly BIG_U_VALUE = 61;
	public static readonly STRING_LIT = 62;
	public static readonly WS = 63;
	public static readonly COMMENT = 64;
	public static readonly TERMINATOR = 65;
	public static readonly LINE_COMMENT = 66;
	public static readonly RULE_sourceFile = 0;
	public static readonly RULE_moduleClause = 1;
	public static readonly RULE_importDecl = 2;
	public static readonly RULE_importSpec = 3;
	public static readonly RULE_importPath = 4;
	public static readonly RULE_topLevelDecl = 5;
	public static readonly RULE_declaration = 6;
	public static readonly RULE_constDecl = 7;
	public static readonly RULE_constSpec = 8;
	public static readonly RULE_identifierList = 9;
	public static readonly RULE_expressionList = 10;
	public static readonly RULE_functionDecl = 11;
	public static readonly RULE_function = 12;
	public static readonly RULE_methodDecl = 13;
	public static readonly RULE_receiver = 14;
	public static readonly RULE_noMutDecl = 15;
	public static readonly RULE_varDecl = 16;
	public static readonly RULE_block = 17;
	public static readonly RULE_statementList = 18;
	public static readonly RULE_statement = 19;
	public static readonly RULE_simpleStmt = 20;
	public static readonly RULE_expressionStmt = 21;
	public static readonly RULE_incDecStmt = 22;
	public static readonly RULE_assignment = 23;
	public static readonly RULE_assign_op = 24;
	public static readonly RULE_returnStmt = 25;
	public static readonly RULE_breakStmt = 26;
	public static readonly RULE_continueStmt = 27;
	public static readonly RULE_ifStmt = 28;
	public static readonly RULE_switchStmt = 29;
	public static readonly RULE_exprSwitchStmt = 30;
	public static readonly RULE_exprCaseClause = 31;
	public static readonly RULE_exprSwitchCase = 32;
	public static readonly RULE_forStmt = 33;
	public static readonly RULE_forClause = 34;
	public static readonly RULE_inClause = 35;
	public static readonly RULE_type = 36;
	public static readonly RULE_typeName = 37;
	public static readonly RULE_typeLit = 38;
	public static readonly RULE_arrayType = 39;
	public static readonly RULE_arrayLength = 40;
	public static readonly RULE_elementType = 41;
	public static readonly RULE_interfaceType = 42;
	public static readonly RULE_mapType = 43;
	public static readonly RULE_methodSpec = 44;
	public static readonly RULE_functionType = 45;
	public static readonly RULE_signature = 46;
	public static readonly RULE_result = 47;
	public static readonly RULE_parameters = 48;
	public static readonly RULE_parameterList = 49;
	public static readonly RULE_parameterDecl = 50;
	public static readonly RULE_operand = 51;
	public static readonly RULE_literal = 52;
	public static readonly RULE_arrayLit = 53;
	public static readonly RULE_basicLit = 54;
	public static readonly RULE_operandName = 55;
	public static readonly RULE_qualifiedIdent = 56;
	public static readonly RULE_compositeLit = 57;
	public static readonly RULE_literalType = 58;
	public static readonly RULE_literalValue = 59;
	public static readonly RULE_elementList = 60;
	public static readonly RULE_keyedElement = 61;
	public static readonly RULE_key = 62;
	public static readonly RULE_element = 63;
	public static readonly RULE_structDecl = 64;
	public static readonly RULE_fieldDecl = 65;
	public static readonly RULE_anonymousField = 66;
	public static readonly RULE_functionLit = 67;
	public static readonly RULE_primaryExpr = 68;
	public static readonly RULE_selector = 69;
	public static readonly RULE_index = 70;
	public static readonly RULE_arguments = 71;
	public static readonly RULE_methodExpr = 72;
	public static readonly RULE_receiverType = 73;
	public static readonly RULE_expression = 74;
	public static readonly RULE_unaryExpr = 75;
	public static readonly RULE_conversion = 76;
	public static readonly RULE_eos = 77;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"sourceFile", "moduleClause", "importDecl", "importSpec", "importPath", 
		"topLevelDecl", "declaration", "constDecl", "constSpec", "identifierList", 
		"expressionList", "functionDecl", "function", "methodDecl", "receiver", 
		"noMutDecl", "varDecl", "block", "statementList", "statement", "simpleStmt", 
		"expressionStmt", "incDecStmt", "assignment", "assign_op", "returnStmt", 
		"breakStmt", "continueStmt", "ifStmt", "switchStmt", "exprSwitchStmt", 
		"exprCaseClause", "exprSwitchCase", "forStmt", "forClause", "inClause", 
		"type", "typeName", "typeLit", "arrayType", "arrayLength", "elementType", 
		"interfaceType", "mapType", "methodSpec", "functionType", "signature", 
		"result", "parameters", "parameterList", "parameterDecl", "operand", "literal", 
		"arrayLit", "basicLit", "operandName", "qualifiedIdent", "compositeLit", 
		"literalType", "literalValue", "elementList", "keyedElement", "key", "element", 
		"structDecl", "fieldDecl", "anonymousField", "functionLit", "primaryExpr", 
		"selector", "index", "arguments", "methodExpr", "receiverType", "expression", 
		"unaryExpr", "conversion", "eos",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'module'", "'import'", "'.'", "'const'", "'('", "')'", "'='", 
		"','", "'fn'", "':='", "'mut'", "'{'", "'}'", "'++'", "'--'", "'+'", "'-'", 
		"'|'", "'^'", "'*'", "'/'", "'%'", "'<<'", "'>>'", "'&'", "'return'", 
		"'break'", "'continue'", "'if'", "';'", "'else'", "'switch'", "':'", "'case'", 
		"'default'", "'for'", "'in'", "'['", "']'", "'interface'", "'map'", "'struct'", 
		"'pub'", "'||'", "'&&'", "'=='", "'!='", "'<'", "'<='", "'>'", "'>='", 
		"'&^'", "'!'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, "IDENTIFIER", "KEYWORD", 
		"BINARY_OP", "INT_LIT", "FLOAT_LIT", "RUNE_LIT", "LITTLE_U_VALUE", "BIG_U_VALUE", 
		"STRING_LIT", "WS", "COMMENT", "TERMINATOR", "LINE_COMMENT",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(VParser._LITERAL_NAMES, VParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return VParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "V.g4"; }

	// @Override
	public get ruleNames(): string[] { return VParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return VParser._serializedATN; }



	    /**
	     * Returns {@code true} iff on the current index of the parser's
	     * token stream a token exists on the {@code HIDDEN} channel which
	     * either is a line terminator, or is a multi line comment that
	     * contains a line terminator.
	     *
	     * @return {@code true} iff on the current index of the parser's
	     * token stream a token exists on the {@code HIDDEN} channel which
	     * either is a line terminator, or is a multi line comment that
	     * contains a line terminator.
	     */
	    private boolean lineTerminatorAhead() {
	        // Get the token ahead of the current index.
	        int possibleIndexEosToken = this.getCurrentToken().getTokenIndex() - 1;
	        Token ahead = _input.get(possibleIndexEosToken);
	        if (ahead.getChannel() != Lexer.HIDDEN) {
	            // We're only interested in tokens on the HIDDEN channel.
	            return false;
	        }

	        if (ahead.getType() == TERMINATOR) {
	            // There is definitely a line terminator ahead.
	            return true;
	        }

	        if (ahead.getType() == WS) {
	            // Get the token ahead of the current whitespaces.
	            possibleIndexEosToken = this.getCurrentToken().getTokenIndex() - 2;
	            ahead = _input.get(possibleIndexEosToken);
	        }

	        // Get the token's text and type.
	        String text = ahead.getText();
	        int type = ahead.getType();

	        // Check if the token is, or contains a line terminator.
	        return (type == COMMENT && (text.contains("\r") || text.contains("\n"))) ||
	                (type == TERMINATOR);
	    }

	     /**
	     * Returns {@code true} if no line terminator exists between the specified
	     * token offset and the prior one on the {@code HIDDEN} channel.
	     *
	     * @return {@code true} if no line terminator exists between the specified
	     * token offset and the prior one on the {@code HIDDEN} channel.
	     */
	    private boolean noTerminatorBetween(int tokenOffset) {
	        BufferedTokenStream stream = (BufferedTokenStream)_input;
	        List<Token> tokens = stream.getHiddenTokensToLeft(stream.LT(tokenOffset).getTokenIndex());

	        if (tokens == null) {
	            return true;
	        }

	        for (Token token : tokens) {
	            if (token.getText().contains("\n"))
	                return false;
	        }

	        return true;
	    }

	     /**
	     * Returns {@code true} if no line terminator exists after any encounterd
	     * parameters beyond the specified token offset and the next on the
	     * {@code HIDDEN} channel.
	     *
	     * @return {@code true} if no line terminator exists after any encounterd
	     * parameters beyond the specified token offset and the next on the
	     * {@code HIDDEN} channel.
	     */
	    private boolean noTerminatorAfterParams(int tokenOffset) {
	        BufferedTokenStream stream = (BufferedTokenStream)_input;
	        int leftParams = 1;
	        int rightParams = 0;
	        String value;

	        if (stream.LT(tokenOffset).getText().equals("(")) {
	            // Scan past parameters
	            while (leftParams != rightParams) {
	                tokenOffset++;
	                value = stream.LT(tokenOffset).getText();

	                if (value.equals("(")) {
	                    leftParams++;
	                }
	                else if (value.equals(")")) {
	                    rightParams++;
	                }
	            }

	            tokenOffset++;
	            return noTerminatorBetween(tokenOffset);
	        }

	        return true;
	    }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(VParser._ATN, this);
	}
	// @RuleVersion(0)
	public sourceFile(): SourceFileContext {
		let _localctx: SourceFileContext = new SourceFileContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, VParser.RULE_sourceFile);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 159;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === VParser.T__0) {
				{
				this.state = 156;
				this.moduleClause();
				this.state = 157;
				this.eos();
				}
			}

			this.state = 166;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === VParser.T__1) {
				{
				{
				this.state = 161;
				this.importDecl();
				this.state = 162;
				this.eos();
				}
				}
				this.state = 168;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 174;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << VParser.T__3) | (1 << VParser.T__8) | (1 << VParser.T__10))) !== 0) || _la === VParser.T__41 || _la === VParser.IDENTIFIER) {
				{
				{
				this.state = 169;
				this.topLevelDecl();
				this.state = 170;
				this.eos();
				}
				}
				this.state = 176;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public moduleClause(): ModuleClauseContext {
		let _localctx: ModuleClauseContext = new ModuleClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, VParser.RULE_moduleClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 177;
			this.match(VParser.T__0);
			this.state = 178;
			this.match(VParser.IDENTIFIER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public importDecl(): ImportDeclContext {
		let _localctx: ImportDeclContext = new ImportDeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, VParser.RULE_importDecl);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 180;
			this.match(VParser.T__1);
			{
			this.state = 181;
			this.importSpec();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public importSpec(): ImportSpecContext {
		let _localctx: ImportSpecContext = new ImportSpecContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, VParser.RULE_importSpec);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 184;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 3, this._ctx) ) {
			case 1:
				{
				this.state = 183;
				_la = this._input.LA(1);
				if (!(_la === VParser.T__2 || _la === VParser.IDENTIFIER)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
				break;
			}
			this.state = 186;
			this.importPath();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public importPath(): ImportPathContext {
		let _localctx: ImportPathContext = new ImportPathContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, VParser.RULE_importPath);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 188;
			_la = this._input.LA(1);
			if (!(_la === VParser.IDENTIFIER || _la === VParser.STRING_LIT)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public topLevelDecl(): TopLevelDeclContext {
		let _localctx: TopLevelDeclContext = new TopLevelDeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, VParser.RULE_topLevelDecl);
		try {
			this.state = 193;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 4, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 190;
				this.declaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 191;
				this.functionDecl();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 192;
				this.methodDecl();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public declaration(): DeclarationContext {
		let _localctx: DeclarationContext = new DeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, VParser.RULE_declaration);
		try {
			this.state = 198;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case VParser.T__3:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 195;
				this.constDecl();
				}
				break;
			case VParser.T__10:
			case VParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 196;
				this.varDecl();
				}
				break;
			case VParser.T__41:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 197;
				this.structDecl();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public constDecl(): ConstDeclContext {
		let _localctx: ConstDeclContext = new ConstDeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, VParser.RULE_constDecl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 200;
			this.match(VParser.T__3);
			this.state = 201;
			this.match(VParser.T__4);
			this.state = 207;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === VParser.IDENTIFIER) {
				{
				{
				this.state = 202;
				this.constSpec();
				this.state = 203;
				this.eos();
				}
				}
				this.state = 209;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 210;
			this.match(VParser.T__5);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public constSpec(): ConstSpecContext {
		let _localctx: ConstSpecContext = new ConstSpecContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, VParser.RULE_constSpec);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 212;
			this.match(VParser.IDENTIFIER);
			this.state = 213;
			this.match(VParser.T__6);
			this.state = 214;
			this.expression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public identifierList(): IdentifierListContext {
		let _localctx: IdentifierListContext = new IdentifierListContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, VParser.RULE_identifierList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 216;
			this.match(VParser.IDENTIFIER);
			this.state = 221;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === VParser.T__7) {
				{
				{
				this.state = 217;
				this.match(VParser.T__7);
				this.state = 218;
				this.match(VParser.IDENTIFIER);
				}
				}
				this.state = 223;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expressionList(): ExpressionListContext {
		let _localctx: ExpressionListContext = new ExpressionListContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, VParser.RULE_expressionList);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 224;
			this.expression(0);
			this.state = 229;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 225;
					this.match(VParser.T__7);
					this.state = 226;
					this.expression(0);
					}
					}
				}
				this.state = 231;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionDecl(): FunctionDeclContext {
		let _localctx: FunctionDeclContext = new FunctionDeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, VParser.RULE_functionDecl);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 232;
			this.match(VParser.T__8);
			this.state = 233;
			this.match(VParser.IDENTIFIER);
			this.state = 236;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 9, this._ctx) ) {
			case 1:
				{
				this.state = 234;
				this.function();
				}
				break;

			case 2:
				{
				this.state = 235;
				this.signature();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public function(): FunctionContext {
		let _localctx: FunctionContext = new FunctionContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, VParser.RULE_function);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 238;
			this.signature();
			this.state = 239;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public methodDecl(): MethodDeclContext {
		let _localctx: MethodDeclContext = new MethodDeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, VParser.RULE_methodDecl);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 241;
			this.match(VParser.T__8);
			this.state = 242;
			this.receiver();
			this.state = 243;
			this.match(VParser.IDENTIFIER);
			this.state = 246;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 10, this._ctx) ) {
			case 1:
				{
				this.state = 244;
				this.function();
				}
				break;

			case 2:
				{
				this.state = 245;
				this.signature();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public receiver(): ReceiverContext {
		let _localctx: ReceiverContext = new ReceiverContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, VParser.RULE_receiver);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 248;
			this.parameters();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public noMutDecl(): NoMutDeclContext {
		let _localctx: NoMutDeclContext = new NoMutDeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, VParser.RULE_noMutDecl);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 250;
			this.identifierList();
			{
			this.state = 251;
			this.match(VParser.T__9);
			this.state = 252;
			this.expressionList();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public varDecl(): VarDeclContext {
		let _localctx: VarDeclContext = new VarDeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, VParser.RULE_varDecl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 255;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === VParser.T__10) {
				{
				this.state = 254;
				this.match(VParser.T__10);
				}
			}

			{
			this.state = 257;
			this.noMutDecl();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public block(): BlockContext {
		let _localctx: BlockContext = new BlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, VParser.RULE_block);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 259;
			this.match(VParser.T__11);
			this.state = 260;
			this.statementList();
			this.state = 261;
			this.match(VParser.T__12);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statementList(): StatementListContext {
		let _localctx: StatementListContext = new StatementListContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, VParser.RULE_statementList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 268;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << VParser.T__3) | (1 << VParser.T__4) | (1 << VParser.T__8) | (1 << VParser.T__10) | (1 << VParser.T__11) | (1 << VParser.T__15) | (1 << VParser.T__16) | (1 << VParser.T__18) | (1 << VParser.T__19) | (1 << VParser.T__24) | (1 << VParser.T__25) | (1 << VParser.T__26) | (1 << VParser.T__27) | (1 << VParser.T__28))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (VParser.T__31 - 32)) | (1 << (VParser.T__35 - 32)) | (1 << (VParser.T__37 - 32)) | (1 << (VParser.T__39 - 32)) | (1 << (VParser.T__40 - 32)) | (1 << (VParser.T__41 - 32)) | (1 << (VParser.T__52 - 32)) | (1 << (VParser.IDENTIFIER - 32)) | (1 << (VParser.INT_LIT - 32)) | (1 << (VParser.FLOAT_LIT - 32)) | (1 << (VParser.RUNE_LIT - 32)) | (1 << (VParser.STRING_LIT - 32)))) !== 0)) {
				{
				{
				this.state = 263;
				this.statement();
				this.state = 264;
				this.eos();
				}
				}
				this.state = 270;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, VParser.RULE_statement);
		try {
			this.state = 280;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 13, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 271;
				this.declaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 272;
				this.simpleStmt();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 273;
				this.returnStmt();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 274;
				this.breakStmt();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 275;
				this.continueStmt();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 276;
				this.block();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 277;
				this.ifStmt();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 278;
				this.switchStmt();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 279;
				this.forStmt();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public simpleStmt(): SimpleStmtContext {
		let _localctx: SimpleStmtContext = new SimpleStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, VParser.RULE_simpleStmt);
		try {
			this.state = 285;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 14, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 282;
				this.expressionStmt();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 283;
				this.incDecStmt();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 284;
				this.assignment();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expressionStmt(): ExpressionStmtContext {
		let _localctx: ExpressionStmtContext = new ExpressionStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, VParser.RULE_expressionStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 287;
			this.expression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public incDecStmt(): IncDecStmtContext {
		let _localctx: IncDecStmtContext = new IncDecStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, VParser.RULE_incDecStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 289;
			this.expression(0);
			this.state = 290;
			_la = this._input.LA(1);
			if (!(_la === VParser.T__13 || _la === VParser.T__14)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assignment(): AssignmentContext {
		let _localctx: AssignmentContext = new AssignmentContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, VParser.RULE_assignment);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 292;
			this.expressionList();
			this.state = 293;
			this.assign_op();
			this.state = 294;
			this.expressionList();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assign_op(): Assign_opContext {
		let _localctx: Assign_opContext = new Assign_opContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, VParser.RULE_assign_op);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 297;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << VParser.T__15) | (1 << VParser.T__16) | (1 << VParser.T__17) | (1 << VParser.T__18) | (1 << VParser.T__19) | (1 << VParser.T__20) | (1 << VParser.T__21) | (1 << VParser.T__22) | (1 << VParser.T__23) | (1 << VParser.T__24))) !== 0)) {
				{
				this.state = 296;
				_la = this._input.LA(1);
				if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << VParser.T__15) | (1 << VParser.T__16) | (1 << VParser.T__17) | (1 << VParser.T__18) | (1 << VParser.T__19) | (1 << VParser.T__20) | (1 << VParser.T__21) | (1 << VParser.T__22) | (1 << VParser.T__23) | (1 << VParser.T__24))) !== 0))) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
			}

			this.state = 299;
			this.match(VParser.T__6);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public returnStmt(): ReturnStmtContext {
		let _localctx: ReturnStmtContext = new ReturnStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, VParser.RULE_returnStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 301;
			this.match(VParser.T__25);
			this.state = 303;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 16, this._ctx) ) {
			case 1:
				{
				this.state = 302;
				this.expressionList();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public breakStmt(): BreakStmtContext {
		let _localctx: BreakStmtContext = new BreakStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, VParser.RULE_breakStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 305;
			this.match(VParser.T__26);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public continueStmt(): ContinueStmtContext {
		let _localctx: ContinueStmtContext = new ContinueStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, VParser.RULE_continueStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 307;
			this.match(VParser.T__27);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ifStmt(): IfStmtContext {
		let _localctx: IfStmtContext = new IfStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, VParser.RULE_ifStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 309;
			this.match(VParser.T__28);
			this.state = 313;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 17, this._ctx) ) {
			case 1:
				{
				this.state = 310;
				this.simpleStmt();
				this.state = 311;
				this.match(VParser.T__29);
				}
				break;
			}
			this.state = 315;
			this.expression(0);
			this.state = 316;
			this.block();
			this.state = 322;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 19, this._ctx) ) {
			case 1:
				{
				this.state = 317;
				this.match(VParser.T__30);
				this.state = 320;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case VParser.T__28:
					{
					this.state = 318;
					this.ifStmt();
					}
					break;
				case VParser.T__11:
					{
					this.state = 319;
					this.block();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public switchStmt(): SwitchStmtContext {
		let _localctx: SwitchStmtContext = new SwitchStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, VParser.RULE_switchStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 324;
			this.exprSwitchStmt();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public exprSwitchStmt(): ExprSwitchStmtContext {
		let _localctx: ExprSwitchStmtContext = new ExprSwitchStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, VParser.RULE_exprSwitchStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 326;
			this.match(VParser.T__31);
			this.state = 330;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 20, this._ctx) ) {
			case 1:
				{
				this.state = 327;
				this.simpleStmt();
				this.state = 328;
				this.match(VParser.T__29);
				}
				break;
			}
			this.state = 333;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << VParser.T__4) | (1 << VParser.T__8) | (1 << VParser.T__10) | (1 << VParser.T__15) | (1 << VParser.T__16) | (1 << VParser.T__18) | (1 << VParser.T__19) | (1 << VParser.T__24))) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (VParser.T__37 - 38)) | (1 << (VParser.T__39 - 38)) | (1 << (VParser.T__40 - 38)) | (1 << (VParser.T__52 - 38)) | (1 << (VParser.IDENTIFIER - 38)) | (1 << (VParser.INT_LIT - 38)) | (1 << (VParser.FLOAT_LIT - 38)) | (1 << (VParser.RUNE_LIT - 38)) | (1 << (VParser.STRING_LIT - 38)))) !== 0)) {
				{
				this.state = 332;
				this.expression(0);
				}
			}

			this.state = 335;
			this.match(VParser.T__11);
			this.state = 339;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === VParser.T__33 || _la === VParser.T__34) {
				{
				{
				this.state = 336;
				this.exprCaseClause();
				}
				}
				this.state = 341;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 342;
			this.match(VParser.T__12);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public exprCaseClause(): ExprCaseClauseContext {
		let _localctx: ExprCaseClauseContext = new ExprCaseClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, VParser.RULE_exprCaseClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 344;
			this.exprSwitchCase();
			this.state = 345;
			this.match(VParser.T__32);
			this.state = 346;
			this.statementList();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public exprSwitchCase(): ExprSwitchCaseContext {
		let _localctx: ExprSwitchCaseContext = new ExprSwitchCaseContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, VParser.RULE_exprSwitchCase);
		try {
			this.state = 351;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case VParser.T__33:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 348;
				this.match(VParser.T__33);
				this.state = 349;
				this.expressionList();
				}
				break;
			case VParser.T__34:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 350;
				this.match(VParser.T__34);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public forStmt(): ForStmtContext {
		let _localctx: ForStmtContext = new ForStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, VParser.RULE_forStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 353;
			this.match(VParser.T__35);
			this.state = 357;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 24, this._ctx) ) {
			case 1:
				{
				this.state = 354;
				this.expression(0);
				}
				break;

			case 2:
				{
				this.state = 355;
				this.forClause();
				}
				break;

			case 3:
				{
				this.state = 356;
				this.inClause();
				}
				break;
			}
			this.state = 359;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public forClause(): ForClauseContext {
		let _localctx: ForClauseContext = new ForClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, VParser.RULE_forClause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 362;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << VParser.T__4) | (1 << VParser.T__8) | (1 << VParser.T__10) | (1 << VParser.T__15) | (1 << VParser.T__16) | (1 << VParser.T__18) | (1 << VParser.T__19) | (1 << VParser.T__24))) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (VParser.T__37 - 38)) | (1 << (VParser.T__39 - 38)) | (1 << (VParser.T__40 - 38)) | (1 << (VParser.T__52 - 38)) | (1 << (VParser.IDENTIFIER - 38)) | (1 << (VParser.INT_LIT - 38)) | (1 << (VParser.FLOAT_LIT - 38)) | (1 << (VParser.RUNE_LIT - 38)) | (1 << (VParser.STRING_LIT - 38)))) !== 0)) {
				{
				this.state = 361;
				this.simpleStmt();
				}
			}

			this.state = 364;
			this.match(VParser.T__29);
			this.state = 366;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << VParser.T__4) | (1 << VParser.T__8) | (1 << VParser.T__10) | (1 << VParser.T__15) | (1 << VParser.T__16) | (1 << VParser.T__18) | (1 << VParser.T__19) | (1 << VParser.T__24))) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (VParser.T__37 - 38)) | (1 << (VParser.T__39 - 38)) | (1 << (VParser.T__40 - 38)) | (1 << (VParser.T__52 - 38)) | (1 << (VParser.IDENTIFIER - 38)) | (1 << (VParser.INT_LIT - 38)) | (1 << (VParser.FLOAT_LIT - 38)) | (1 << (VParser.RUNE_LIT - 38)) | (1 << (VParser.STRING_LIT - 38)))) !== 0)) {
				{
				this.state = 365;
				this.expression(0);
				}
			}

			this.state = 368;
			this.match(VParser.T__29);
			this.state = 370;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << VParser.T__4) | (1 << VParser.T__8) | (1 << VParser.T__10) | (1 << VParser.T__15) | (1 << VParser.T__16) | (1 << VParser.T__18) | (1 << VParser.T__19) | (1 << VParser.T__24))) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (VParser.T__37 - 38)) | (1 << (VParser.T__39 - 38)) | (1 << (VParser.T__40 - 38)) | (1 << (VParser.T__52 - 38)) | (1 << (VParser.IDENTIFIER - 38)) | (1 << (VParser.INT_LIT - 38)) | (1 << (VParser.FLOAT_LIT - 38)) | (1 << (VParser.RUNE_LIT - 38)) | (1 << (VParser.STRING_LIT - 38)))) !== 0)) {
				{
				this.state = 369;
				this.simpleStmt();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public inClause(): InClauseContext {
		let _localctx: InClauseContext = new InClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, VParser.RULE_inClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 372;
			this.expressionList();
			this.state = 373;
			this.match(VParser.T__36);
			this.state = 374;
			this.match(VParser.IDENTIFIER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public type(): TypeContext {
		let _localctx: TypeContext = new TypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, VParser.RULE_type);
		try {
			this.state = 378;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case VParser.T__10:
			case VParser.T__24:
			case VParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 376;
				this.typeName();
				}
				break;
			case VParser.T__8:
			case VParser.T__37:
			case VParser.T__39:
			case VParser.T__40:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 377;
				this.typeLit();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeName(): TypeNameContext {
		let _localctx: TypeNameContext = new TypeNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, VParser.RULE_typeName);
		let _la: number;
		try {
			this.state = 388;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 31, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 381;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === VParser.T__24) {
					{
					this.state = 380;
					this.match(VParser.T__24);
					}
				}

				this.state = 384;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === VParser.T__10) {
					{
					this.state = 383;
					this.match(VParser.T__10);
					}
				}

				this.state = 386;
				this.match(VParser.IDENTIFIER);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 387;
				this.qualifiedIdent();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeLit(): TypeLitContext {
		let _localctx: TypeLitContext = new TypeLitContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, VParser.RULE_typeLit);
		try {
			this.state = 394;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case VParser.T__37:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 390;
				this.arrayType();
				}
				break;
			case VParser.T__8:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 391;
				this.functionType();
				}
				break;
			case VParser.T__39:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 392;
				this.interfaceType();
				}
				break;
			case VParser.T__40:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 393;
				this.mapType();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arrayType(): ArrayTypeContext {
		let _localctx: ArrayTypeContext = new ArrayTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, VParser.RULE_arrayType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 396;
			this.match(VParser.T__37);
			this.state = 398;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << VParser.T__4) | (1 << VParser.T__8) | (1 << VParser.T__10) | (1 << VParser.T__15) | (1 << VParser.T__16) | (1 << VParser.T__18) | (1 << VParser.T__19) | (1 << VParser.T__24))) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (VParser.T__37 - 38)) | (1 << (VParser.T__39 - 38)) | (1 << (VParser.T__40 - 38)) | (1 << (VParser.T__52 - 38)) | (1 << (VParser.IDENTIFIER - 38)) | (1 << (VParser.INT_LIT - 38)) | (1 << (VParser.FLOAT_LIT - 38)) | (1 << (VParser.RUNE_LIT - 38)) | (1 << (VParser.STRING_LIT - 38)))) !== 0)) {
				{
				this.state = 397;
				this.arrayLength();
				}
			}

			this.state = 400;
			this.match(VParser.T__38);
			this.state = 401;
			this.elementType();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arrayLength(): ArrayLengthContext {
		let _localctx: ArrayLengthContext = new ArrayLengthContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, VParser.RULE_arrayLength);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 403;
			this.expression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public elementType(): ElementTypeContext {
		let _localctx: ElementTypeContext = new ElementTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, VParser.RULE_elementType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 405;
			this.type();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public interfaceType(): InterfaceTypeContext {
		let _localctx: InterfaceTypeContext = new InterfaceTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, VParser.RULE_interfaceType);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 407;
			this.match(VParser.T__39);
			this.state = 408;
			this.match(VParser.IDENTIFIER);
			this.state = 409;
			this.match(VParser.T__11);
			this.state = 415;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 34, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 410;
					this.methodSpec();
					this.state = 411;
					this.eos();
					}
					}
				}
				this.state = 417;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 34, this._ctx);
			}
			this.state = 418;
			this.match(VParser.T__12);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public mapType(): MapTypeContext {
		let _localctx: MapTypeContext = new MapTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, VParser.RULE_mapType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 420;
			this.match(VParser.T__40);
			this.state = 421;
			this.match(VParser.T__37);
			this.state = 422;
			this.type();
			this.state = 423;
			this.match(VParser.T__38);
			this.state = 424;
			this.elementType();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public methodSpec(): MethodSpecContext {
		let _localctx: MethodSpecContext = new MethodSpecContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, VParser.RULE_methodSpec);
		try {
			this.state = 434;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 35, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 426;
				if (!(noTerminatorAfterParams(2))) {
					throw new FailedPredicateException(this, "noTerminatorAfterParams(2)");
				}
				this.state = 427;
				this.match(VParser.IDENTIFIER);
				this.state = 428;
				this.parameters();
				this.state = 429;
				this.result();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 431;
				this.typeName();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 432;
				this.match(VParser.IDENTIFIER);
				this.state = 433;
				this.parameters();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionType(): FunctionTypeContext {
		let _localctx: FunctionTypeContext = new FunctionTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, VParser.RULE_functionType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 436;
			this.match(VParser.T__8);
			this.state = 437;
			this.signature();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public signature(): SignatureContext {
		let _localctx: SignatureContext = new SignatureContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, VParser.RULE_signature);
		try {
			this.state = 444;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 36, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 439;
				if (!(noTerminatorAfterParams(1))) {
					throw new FailedPredicateException(this, "noTerminatorAfterParams(1)");
				}
				this.state = 440;
				this.parameters();
				this.state = 441;
				this.result();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 443;
				this.parameters();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public result(): ResultContext {
		let _localctx: ResultContext = new ResultContext(this._ctx, this.state);
		this.enterRule(_localctx, 94, VParser.RULE_result);
		try {
			this.state = 448;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case VParser.T__4:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 446;
				this.parameters();
				}
				break;
			case VParser.T__8:
			case VParser.T__10:
			case VParser.T__24:
			case VParser.T__37:
			case VParser.T__39:
			case VParser.T__40:
			case VParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 447;
				this.type();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public parameters(): ParametersContext {
		let _localctx: ParametersContext = new ParametersContext(this._ctx, this.state);
		this.enterRule(_localctx, 96, VParser.RULE_parameters);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 450;
			this.match(VParser.T__4);
			this.state = 455;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << VParser.T__8) | (1 << VParser.T__10) | (1 << VParser.T__24))) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (VParser.T__37 - 38)) | (1 << (VParser.T__39 - 38)) | (1 << (VParser.T__40 - 38)) | (1 << (VParser.IDENTIFIER - 38)))) !== 0)) {
				{
				this.state = 451;
				this.parameterList();
				this.state = 453;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === VParser.T__7) {
					{
					this.state = 452;
					this.match(VParser.T__7);
					}
				}

				}
			}

			this.state = 457;
			this.match(VParser.T__5);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public parameterList(): ParameterListContext {
		let _localctx: ParameterListContext = new ParameterListContext(this._ctx, this.state);
		this.enterRule(_localctx, 98, VParser.RULE_parameterList);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 459;
			this.parameterDecl();
			this.state = 464;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 40, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 460;
					this.match(VParser.T__7);
					this.state = 461;
					this.parameterDecl();
					}
					}
				}
				this.state = 466;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 40, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public parameterDecl(): ParameterDeclContext {
		let _localctx: ParameterDeclContext = new ParameterDeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 100, VParser.RULE_parameterDecl);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 468;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 41, this._ctx) ) {
			case 1:
				{
				this.state = 467;
				this.identifierList();
				}
				break;
			}
			this.state = 470;
			this.type();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public operand(): OperandContext {
		let _localctx: OperandContext = new OperandContext(this._ctx, this.state);
		this.enterRule(_localctx, 102, VParser.RULE_operand);
		try {
			this.state = 479;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 42, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 472;
				this.literal();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 473;
				this.operandName();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 474;
				this.methodExpr();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 475;
				this.match(VParser.T__4);
				this.state = 476;
				this.expression(0);
				this.state = 477;
				this.match(VParser.T__5);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public literal(): LiteralContext {
		let _localctx: LiteralContext = new LiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 104, VParser.RULE_literal);
		try {
			this.state = 485;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 43, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 481;
				this.basicLit();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 482;
				this.compositeLit();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 483;
				this.functionLit();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 484;
				this.arrayLit();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arrayLit(): ArrayLitContext {
		let _localctx: ArrayLitContext = new ArrayLitContext(this._ctx, this.state);
		this.enterRule(_localctx, 106, VParser.RULE_arrayLit);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 487;
			this.match(VParser.T__37);
			this.state = 488;
			this.expression(0);
			this.state = 493;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === VParser.T__7) {
				{
				{
				this.state = 489;
				this.match(VParser.T__7);
				this.state = 490;
				this.expression(0);
				}
				}
				this.state = 495;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 496;
			this.match(VParser.T__38);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public basicLit(): BasicLitContext {
		let _localctx: BasicLitContext = new BasicLitContext(this._ctx, this.state);
		this.enterRule(_localctx, 108, VParser.RULE_basicLit);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 498;
			_la = this._input.LA(1);
			if (!(((((_la - 57)) & ~0x1F) === 0 && ((1 << (_la - 57)) & ((1 << (VParser.INT_LIT - 57)) | (1 << (VParser.FLOAT_LIT - 57)) | (1 << (VParser.RUNE_LIT - 57)) | (1 << (VParser.STRING_LIT - 57)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public operandName(): OperandNameContext {
		let _localctx: OperandNameContext = new OperandNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 110, VParser.RULE_operandName);
		try {
			this.state = 502;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 45, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 500;
				this.match(VParser.IDENTIFIER);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 501;
				this.qualifiedIdent();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public qualifiedIdent(): QualifiedIdentContext {
		let _localctx: QualifiedIdentContext = new QualifiedIdentContext(this._ctx, this.state);
		this.enterRule(_localctx, 112, VParser.RULE_qualifiedIdent);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 504;
			this.match(VParser.IDENTIFIER);
			this.state = 505;
			this.match(VParser.T__2);
			this.state = 506;
			this.match(VParser.IDENTIFIER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public compositeLit(): CompositeLitContext {
		let _localctx: CompositeLitContext = new CompositeLitContext(this._ctx, this.state);
		this.enterRule(_localctx, 114, VParser.RULE_compositeLit);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 508;
			this.literalType();
			this.state = 509;
			this.literalValue();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public literalType(): LiteralTypeContext {
		let _localctx: LiteralTypeContext = new LiteralTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 116, VParser.RULE_literalType);
		try {
			this.state = 514;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case VParser.T__37:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 511;
				this.arrayType();
				}
				break;
			case VParser.T__40:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 512;
				this.mapType();
				}
				break;
			case VParser.T__10:
			case VParser.T__24:
			case VParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 513;
				this.typeName();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public literalValue(): LiteralValueContext {
		let _localctx: LiteralValueContext = new LiteralValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 118, VParser.RULE_literalValue);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 516;
			this.match(VParser.T__11);
			this.state = 521;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << VParser.T__4) | (1 << VParser.T__8) | (1 << VParser.T__10) | (1 << VParser.T__11) | (1 << VParser.T__15) | (1 << VParser.T__16) | (1 << VParser.T__18) | (1 << VParser.T__19) | (1 << VParser.T__24))) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (VParser.T__37 - 38)) | (1 << (VParser.T__39 - 38)) | (1 << (VParser.T__40 - 38)) | (1 << (VParser.T__52 - 38)) | (1 << (VParser.IDENTIFIER - 38)) | (1 << (VParser.INT_LIT - 38)) | (1 << (VParser.FLOAT_LIT - 38)) | (1 << (VParser.RUNE_LIT - 38)) | (1 << (VParser.STRING_LIT - 38)))) !== 0)) {
				{
				this.state = 517;
				this.elementList();
				this.state = 519;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === VParser.T__7) {
					{
					this.state = 518;
					this.match(VParser.T__7);
					}
				}

				}
			}

			this.state = 523;
			this.match(VParser.T__12);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public elementList(): ElementListContext {
		let _localctx: ElementListContext = new ElementListContext(this._ctx, this.state);
		this.enterRule(_localctx, 120, VParser.RULE_elementList);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 525;
			this.keyedElement();
			this.state = 531;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 49, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 526;
					this.eos();
					this.state = 527;
					this.keyedElement();
					}
					}
				}
				this.state = 533;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 49, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public keyedElement(): KeyedElementContext {
		let _localctx: KeyedElementContext = new KeyedElementContext(this._ctx, this.state);
		this.enterRule(_localctx, 122, VParser.RULE_keyedElement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 537;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 50, this._ctx) ) {
			case 1:
				{
				this.state = 534;
				this.key();
				this.state = 535;
				this.match(VParser.T__32);
				}
				break;
			}
			this.state = 539;
			this.element();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public key(): KeyContext {
		let _localctx: KeyContext = new KeyContext(this._ctx, this.state);
		this.enterRule(_localctx, 124, VParser.RULE_key);
		try {
			this.state = 544;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 51, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 541;
				this.match(VParser.IDENTIFIER);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 542;
				this.expression(0);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 543;
				this.literalValue();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public element(): ElementContext {
		let _localctx: ElementContext = new ElementContext(this._ctx, this.state);
		this.enterRule(_localctx, 126, VParser.RULE_element);
		try {
			this.state = 548;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case VParser.T__4:
			case VParser.T__8:
			case VParser.T__10:
			case VParser.T__15:
			case VParser.T__16:
			case VParser.T__18:
			case VParser.T__19:
			case VParser.T__24:
			case VParser.T__37:
			case VParser.T__39:
			case VParser.T__40:
			case VParser.T__52:
			case VParser.IDENTIFIER:
			case VParser.INT_LIT:
			case VParser.FLOAT_LIT:
			case VParser.RUNE_LIT:
			case VParser.STRING_LIT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 546;
				this.expression(0);
				}
				break;
			case VParser.T__11:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 547;
				this.literalValue();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public structDecl(): StructDeclContext {
		let _localctx: StructDeclContext = new StructDeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 128, VParser.RULE_structDecl);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 550;
			this.match(VParser.T__41);
			this.state = 551;
			this.match(VParser.IDENTIFIER);
			this.state = 552;
			this.match(VParser.T__11);
			this.state = 558;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 53, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 553;
					this.fieldDecl();
					this.state = 554;
					this.eos();
					}
					}
				}
				this.state = 560;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 53, this._ctx);
			}
			this.state = 561;
			this.match(VParser.T__12);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fieldDecl(): FieldDeclContext {
		let _localctx: FieldDeclContext = new FieldDeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 130, VParser.RULE_fieldDecl);
		let _la: number;
		try {
			this.state = 584;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 59, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 568;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 54, this._ctx) ) {
				case 1:
					{
					this.state = 563;
					if (!(noTerminatorBetween(2))) {
						throw new FailedPredicateException(this, "noTerminatorBetween(2)");
					}
					this.state = 564;
					this.identifierList();
					this.state = 565;
					this.type();
					}
					break;

				case 2:
					{
					this.state = 567;
					this.anonymousField();
					}
					break;
				}
				this.state = 571;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 55, this._ctx) ) {
				case 1:
					{
					this.state = 570;
					this.match(VParser.STRING_LIT);
					}
					break;
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 581;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case VParser.T__42:
					{
					this.state = 573;
					this.match(VParser.T__42);
					this.state = 578;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === VParser.T__10) {
						{
						this.state = 574;
						this.match(VParser.T__10);
						this.state = 576;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === VParser.T__10) {
							{
							this.state = 575;
							this.match(VParser.T__10);
							}
						}

						}
					}

					}
					break;
				case VParser.T__10:
					{
					this.state = 580;
					this.match(VParser.T__10);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 583;
				this.match(VParser.T__32);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public anonymousField(): AnonymousFieldContext {
		let _localctx: AnonymousFieldContext = new AnonymousFieldContext(this._ctx, this.state);
		this.enterRule(_localctx, 132, VParser.RULE_anonymousField);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 586;
			this.typeName();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionLit(): FunctionLitContext {
		let _localctx: FunctionLitContext = new FunctionLitContext(this._ctx, this.state);
		this.enterRule(_localctx, 134, VParser.RULE_functionLit);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 588;
			this.match(VParser.T__8);
			this.state = 589;
			this.function();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public primaryExpr(): PrimaryExprContext;
	public primaryExpr(_p: number): PrimaryExprContext;
	// @RuleVersion(0)
	public primaryExpr(_p?: number): PrimaryExprContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: PrimaryExprContext = new PrimaryExprContext(this._ctx, _parentState);
		let _prevctx: PrimaryExprContext = _localctx;
		let _startState: number = 136;
		this.enterRecursionRule(_localctx, 136, VParser.RULE_primaryExpr, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 594;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 60, this._ctx) ) {
			case 1:
				{
				this.state = 592;
				this.operand();
				}
				break;

			case 2:
				{
				this.state = 593;
				this.conversion();
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 604;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 62, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 602;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 61, this._ctx) ) {
					case 1:
						{
						_localctx = new PrimaryExprContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, VParser.RULE_primaryExpr);
						this.state = 596;
						if (!(this.precpred(this._ctx, 3))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 3)");
						}
						this.state = 597;
						this.selector();
						}
						break;

					case 2:
						{
						_localctx = new PrimaryExprContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, VParser.RULE_primaryExpr);
						this.state = 598;
						if (!(this.precpred(this._ctx, 2))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
						}
						this.state = 599;
						this.index();
						}
						break;

					case 3:
						{
						_localctx = new PrimaryExprContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, VParser.RULE_primaryExpr);
						this.state = 600;
						if (!(this.precpred(this._ctx, 1))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
						}
						this.state = 601;
						this.arguments();
						}
						break;
					}
					}
				}
				this.state = 606;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 62, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public selector(): SelectorContext {
		let _localctx: SelectorContext = new SelectorContext(this._ctx, this.state);
		this.enterRule(_localctx, 138, VParser.RULE_selector);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 607;
			this.match(VParser.T__2);
			this.state = 608;
			this.match(VParser.IDENTIFIER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public index(): IndexContext {
		let _localctx: IndexContext = new IndexContext(this._ctx, this.state);
		this.enterRule(_localctx, 140, VParser.RULE_index);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 610;
			this.match(VParser.T__37);
			this.state = 611;
			this.expression(0);
			this.state = 612;
			this.match(VParser.T__38);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arguments(): ArgumentsContext {
		let _localctx: ArgumentsContext = new ArgumentsContext(this._ctx, this.state);
		this.enterRule(_localctx, 142, VParser.RULE_arguments);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 614;
			this.match(VParser.T__4);
			this.state = 626;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << VParser.T__4) | (1 << VParser.T__8) | (1 << VParser.T__10) | (1 << VParser.T__15) | (1 << VParser.T__16) | (1 << VParser.T__18) | (1 << VParser.T__19) | (1 << VParser.T__24))) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (VParser.T__37 - 38)) | (1 << (VParser.T__39 - 38)) | (1 << (VParser.T__40 - 38)) | (1 << (VParser.T__52 - 38)) | (1 << (VParser.IDENTIFIER - 38)) | (1 << (VParser.INT_LIT - 38)) | (1 << (VParser.FLOAT_LIT - 38)) | (1 << (VParser.RUNE_LIT - 38)) | (1 << (VParser.STRING_LIT - 38)))) !== 0)) {
				{
				this.state = 621;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 64, this._ctx) ) {
				case 1:
					{
					this.state = 615;
					this.expressionList();
					}
					break;

				case 2:
					{
					this.state = 616;
					this.type();
					this.state = 619;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 63, this._ctx) ) {
					case 1:
						{
						this.state = 617;
						this.match(VParser.T__7);
						this.state = 618;
						this.expressionList();
						}
						break;
					}
					}
					break;
				}
				this.state = 624;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === VParser.T__7) {
					{
					this.state = 623;
					this.match(VParser.T__7);
					}
				}

				}
			}

			this.state = 628;
			this.match(VParser.T__5);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public methodExpr(): MethodExprContext {
		let _localctx: MethodExprContext = new MethodExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 144, VParser.RULE_methodExpr);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 630;
			this.receiverType();
			this.state = 631;
			this.match(VParser.T__2);
			this.state = 632;
			this.match(VParser.IDENTIFIER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public receiverType(): ReceiverTypeContext {
		let _localctx: ReceiverTypeContext = new ReceiverTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 146, VParser.RULE_receiverType);
		try {
			this.state = 639;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case VParser.T__10:
			case VParser.T__24:
			case VParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 634;
				this.typeName();
				}
				break;
			case VParser.T__4:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 635;
				this.match(VParser.T__4);
				this.state = 636;
				this.receiverType();
				this.state = 637;
				this.match(VParser.T__5);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public expression(): ExpressionContext;
	public expression(_p: number): ExpressionContext;
	// @RuleVersion(0)
	public expression(_p?: number): ExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, _parentState);
		let _prevctx: ExpressionContext = _localctx;
		let _startState: number = 148;
		this.enterRecursionRule(_localctx, 148, VParser.RULE_expression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 642;
			this.unaryExpr();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 649;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 68, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new ExpressionContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, VParser.RULE_expression);
					this.state = 644;
					if (!(this.precpred(this._ctx, 1))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					}
					this.state = 645;
					_la = this._input.LA(1);
					if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << VParser.T__15) | (1 << VParser.T__16) | (1 << VParser.T__17) | (1 << VParser.T__18) | (1 << VParser.T__19) | (1 << VParser.T__20) | (1 << VParser.T__21) | (1 << VParser.T__22) | (1 << VParser.T__23) | (1 << VParser.T__24))) !== 0) || ((((_la - 44)) & ~0x1F) === 0 && ((1 << (_la - 44)) & ((1 << (VParser.T__43 - 44)) | (1 << (VParser.T__44 - 44)) | (1 << (VParser.T__45 - 44)) | (1 << (VParser.T__46 - 44)) | (1 << (VParser.T__47 - 44)) | (1 << (VParser.T__48 - 44)) | (1 << (VParser.T__49 - 44)) | (1 << (VParser.T__50 - 44)) | (1 << (VParser.T__51 - 44)))) !== 0))) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					this.state = 646;
					this.expression(2);
					}
					}
				}
				this.state = 651;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 68, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public unaryExpr(): UnaryExprContext {
		let _localctx: UnaryExprContext = new UnaryExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 150, VParser.RULE_unaryExpr);
		let _la: number;
		try {
			this.state = 655;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 69, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 652;
				this.primaryExpr(0);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 653;
				_la = this._input.LA(1);
				if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << VParser.T__15) | (1 << VParser.T__16) | (1 << VParser.T__18) | (1 << VParser.T__19) | (1 << VParser.T__24))) !== 0) || _la === VParser.T__52)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 654;
				this.unaryExpr();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public conversion(): ConversionContext {
		let _localctx: ConversionContext = new ConversionContext(this._ctx, this.state);
		this.enterRule(_localctx, 152, VParser.RULE_conversion);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 657;
			this.type();
			this.state = 658;
			this.match(VParser.T__4);
			this.state = 659;
			this.expression(0);
			this.state = 660;
			this.match(VParser.T__5);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public eos(): EosContext {
		let _localctx: EosContext = new EosContext(this._ctx, this.state);
		this.enterRule(_localctx, 154, VParser.RULE_eos);
		try {
			this.state = 665;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 70, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 662;
				this.match(VParser.EOF);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 663;
				if (!(lineTerminatorAhead())) {
					throw new FailedPredicateException(this, "lineTerminatorAhead()");
				}
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 664;
				if (!(_input.LT(1).getText().equals("}") )) {
					throw new FailedPredicateException(this, "_input.LT(1).getText().equals(\"}\") ");
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 44:
			return this.methodSpec_sempred(_localctx as MethodSpecContext, predIndex);

		case 46:
			return this.signature_sempred(_localctx as SignatureContext, predIndex);

		case 65:
			return this.fieldDecl_sempred(_localctx as FieldDeclContext, predIndex);

		case 68:
			return this.primaryExpr_sempred(_localctx as PrimaryExprContext, predIndex);

		case 74:
			return this.expression_sempred(_localctx as ExpressionContext, predIndex);

		case 77:
			return this.eos_sempred(_localctx as EosContext, predIndex);
		}
		return true;
	}
	private methodSpec_sempred(_localctx: MethodSpecContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return noTerminatorAfterParams(2);
		}
		return true;
	}
	private signature_sempred(_localctx: SignatureContext, predIndex: number): boolean {
		switch (predIndex) {
		case 1:
			return noTerminatorAfterParams(1);
		}
		return true;
	}
	private fieldDecl_sempred(_localctx: FieldDeclContext, predIndex: number): boolean {
		switch (predIndex) {
		case 2:
			return noTerminatorBetween(2);
		}
		return true;
	}
	private primaryExpr_sempred(_localctx: PrimaryExprContext, predIndex: number): boolean {
		switch (predIndex) {
		case 3:
			return this.precpred(this._ctx, 3);

		case 4:
			return this.precpred(this._ctx, 2);

		case 5:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private expression_sempred(_localctx: ExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 6:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private eos_sempred(_localctx: EosContext, predIndex: number): boolean {
		switch (predIndex) {
		case 7:
			return lineTerminatorAhead();

		case 8:
			return _input.LT(1).getText().equals("}") ;
		}
		return true;
	}

	private static readonly _serializedATNSegments: number = 2;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03D\u029E\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
		"\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x044" +
		"\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
		"=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x04E\tE\x04" +
		"F\tF\x04G\tG\x04H\tH\x04I\tI\x04J\tJ\x04K\tK\x04L\tL\x04M\tM\x04N\tN\x04" +
		"O\tO\x03\x02\x03\x02\x03\x02\x05\x02\xA2\n\x02\x03\x02\x03\x02\x03\x02" +
		"\x07\x02\xA7\n\x02\f\x02\x0E\x02\xAA\v\x02\x03\x02\x03\x02\x03\x02\x07" +
		"\x02\xAF\n\x02\f\x02\x0E\x02\xB2\v\x02\x03\x03\x03\x03\x03\x03\x03\x04" +
		"\x03\x04\x03\x04\x03\x05\x05\x05\xBB\n\x05\x03\x05\x03\x05\x03\x06\x03" +
		"\x06\x03\x07\x03\x07\x03\x07\x05\x07\xC4\n\x07\x03\b\x03\b\x03\b\x05\b" +
		"\xC9\n\b\x03\t\x03\t\x03\t\x03\t\x03\t\x07\t\xD0\n\t\f\t\x0E\t\xD3\v\t" +
		"\x03\t\x03\t\x03\n\x03\n\x03\n\x03\n\x03\v\x03\v\x03\v\x07\v\xDE\n\v\f" +
		"\v\x0E\v\xE1\v\v\x03\f\x03\f\x03\f\x07\f\xE6\n\f\f\f\x0E\f\xE9\v\f\x03" +
		"\r\x03\r\x03\r\x03\r\x05\r\xEF\n\r\x03\x0E\x03\x0E\x03\x0E\x03\x0F\x03" +
		"\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F\xF9\n\x0F\x03\x10\x03\x10\x03\x11" +
		"\x03\x11\x03\x11\x03\x11\x03\x12\x05\x12\u0102\n\x12\x03\x12\x03\x12\x03" +
		"\x13\x03\x13\x03\x13\x03\x13\x03\x14\x03\x14\x03\x14\x07\x14\u010D\n\x14" +
		"\f\x14\x0E\x14\u0110\v\x14\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03" +
		"\x15\x03\x15\x03\x15\x03\x15\x05\x15\u011B\n\x15\x03\x16\x03\x16\x03\x16" +
		"\x05\x16\u0120\n\x16\x03\x17\x03\x17\x03\x18\x03\x18\x03\x18\x03\x19\x03" +
		"\x19\x03\x19\x03\x19\x03\x1A\x05\x1A\u012C\n\x1A\x03\x1A\x03\x1A\x03\x1B" +
		"\x03\x1B\x05\x1B\u0132\n\x1B\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1E\x03" +
		"\x1E\x03\x1E\x03\x1E\x05\x1E\u013C\n\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E" +
		"\x03\x1E\x05\x1E\u0143\n\x1E\x05\x1E\u0145\n\x1E\x03\x1F\x03\x1F\x03 " +
		"\x03 \x03 \x03 \x05 \u014D\n \x03 \x05 \u0150\n \x03 \x03 \x07 \u0154" +
		"\n \f \x0E \u0157\v \x03 \x03 \x03!\x03!\x03!\x03!\x03\"\x03\"\x03\"\x05" +
		"\"\u0162\n\"\x03#\x03#\x03#\x03#\x05#\u0168\n#\x03#\x03#\x03$\x05$\u016D" +
		"\n$\x03$\x03$\x05$\u0171\n$\x03$\x03$\x05$\u0175\n$\x03%\x03%\x03%\x03" +
		"%\x03&\x03&\x05&\u017D\n&\x03\'\x05\'\u0180\n\'\x03\'\x05\'\u0183\n\'" +
		"\x03\'\x03\'\x05\'\u0187\n\'\x03(\x03(\x03(\x03(\x05(\u018D\n(\x03)\x03" +
		")\x05)\u0191\n)\x03)\x03)\x03)\x03*\x03*\x03+\x03+\x03,\x03,\x03,\x03" +
		",\x03,\x03,\x07,\u01A0\n,\f,\x0E,\u01A3\v,\x03,\x03,\x03-\x03-\x03-\x03" +
		"-\x03-\x03-\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x05.\u01B5\n.\x03" +
		"/\x03/\x03/\x030\x030\x030\x030\x030\x050\u01BF\n0\x031\x031\x051\u01C3" +
		"\n1\x032\x032\x032\x052\u01C8\n2\x052\u01CA\n2\x032\x032\x033\x033\x03" +
		"3\x073\u01D1\n3\f3\x0E3\u01D4\v3\x034\x054\u01D7\n4\x034\x034\x035\x03" +
		"5\x035\x035\x035\x035\x035\x055\u01E2\n5\x036\x036\x036\x036\x056\u01E8" +
		"\n6\x037\x037\x037\x037\x077\u01EE\n7\f7\x0E7\u01F1\v7\x037\x037\x038" +
		"\x038\x039\x039\x059\u01F9\n9\x03:\x03:\x03:\x03:\x03;\x03;\x03;\x03<" +
		"\x03<\x03<\x05<\u0205\n<\x03=\x03=\x03=\x05=\u020A\n=\x05=\u020C\n=\x03" +
		"=\x03=\x03>\x03>\x03>\x03>\x07>\u0214\n>\f>\x0E>\u0217\v>\x03?\x03?\x03" +
		"?\x05?\u021C\n?\x03?\x03?\x03@\x03@\x03@\x05@\u0223\n@\x03A\x03A\x05A" +
		"\u0227\nA\x03B\x03B\x03B\x03B\x03B\x03B\x07B\u022F\nB\fB\x0EB\u0232\v" +
		"B\x03B\x03B\x03C\x03C\x03C\x03C\x03C\x05C\u023B\nC\x03C\x05C\u023E\nC" +
		"\x03C\x03C\x03C\x05C\u0243\nC\x05C\u0245\nC\x03C\x05C\u0248\nC\x03C\x05" +
		"C\u024B\nC\x03D\x03D\x03E\x03E\x03E\x03F\x03F\x03F\x05F\u0255\nF\x03F" +
		"\x03F\x03F\x03F\x03F\x03F\x07F\u025D\nF\fF\x0EF\u0260\vF\x03G\x03G\x03" +
		"G\x03H\x03H\x03H\x03H\x03I\x03I\x03I\x03I\x03I\x05I\u026E\nI\x05I\u0270" +
		"\nI\x03I\x05I\u0273\nI\x05I\u0275\nI\x03I\x03I\x03J\x03J\x03J\x03J\x03" +
		"K\x03K\x03K\x03K\x03K\x05K\u0282\nK\x03L\x03L\x03L\x03L\x03L\x03L\x07" +
		"L\u028A\nL\fL\x0EL\u028D\vL\x03M\x03M\x03M\x05M\u0292\nM\x03N\x03N\x03" +
		"N\x03N\x03N\x03O\x03O\x03O\x05O\u029C\nO\x03O\x02\x02\x04\x8A\x96P\x02" +
		"\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02" +
		"\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02" +
		",\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02" +
		"H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02b\x02" +
		"d\x02f\x02h\x02j\x02l\x02n\x02p\x02r\x02t\x02v\x02x\x02z\x02|\x02~\x02" +
		"\x80\x02\x82\x02\x84\x02\x86\x02\x88\x02\x8A\x02\x8C\x02\x8E\x02\x90\x02" +
		"\x92\x02\x94\x02\x96\x02\x98\x02\x9A\x02\x9C\x02\x02\t\x04\x02\x05\x05" +
		"88\x04\x0288@@\x03\x02\x10\x11\x03\x02\x12\x1B\x04\x02;=@@\x04\x02\x12" +
		"\x1B.6\x06\x02\x12\x13\x15\x16\x1B\x1B77\x02\u02AD\x02\xA1\x03\x02\x02" +
		"\x02\x04\xB3\x03\x02\x02\x02\x06\xB6\x03\x02\x02\x02\b\xBA\x03\x02\x02" +
		"\x02\n\xBE\x03\x02\x02\x02\f\xC3\x03\x02\x02\x02\x0E\xC8\x03\x02\x02\x02" +
		"\x10\xCA\x03\x02\x02\x02\x12\xD6\x03\x02\x02\x02\x14\xDA\x03\x02\x02\x02" +
		"\x16\xE2\x03\x02\x02\x02\x18\xEA\x03\x02\x02\x02\x1A\xF0\x03\x02\x02\x02" +
		"\x1C\xF3\x03\x02\x02\x02\x1E\xFA\x03\x02\x02\x02 \xFC\x03\x02\x02\x02" +
		"\"\u0101\x03\x02\x02\x02$\u0105\x03\x02\x02\x02&\u010E\x03\x02\x02\x02" +
		"(\u011A\x03\x02\x02\x02*\u011F\x03\x02\x02\x02,\u0121\x03\x02\x02\x02" +
		".\u0123\x03\x02\x02\x020\u0126\x03\x02\x02\x022\u012B\x03\x02\x02\x02" +
		"4\u012F\x03\x02\x02\x026\u0133\x03\x02\x02\x028\u0135\x03\x02\x02\x02" +
		":\u0137\x03\x02\x02\x02<\u0146\x03\x02\x02\x02>\u0148\x03\x02\x02\x02" +
		"@\u015A\x03\x02\x02\x02B\u0161\x03\x02\x02\x02D\u0163\x03\x02\x02\x02" +
		"F\u016C\x03\x02\x02\x02H\u0176\x03\x02\x02\x02J\u017C\x03\x02\x02\x02" +
		"L\u0186\x03\x02\x02\x02N\u018C\x03\x02\x02\x02P\u018E\x03\x02\x02\x02" +
		"R\u0195\x03\x02\x02\x02T\u0197\x03\x02\x02\x02V\u0199\x03\x02\x02\x02" +
		"X\u01A6\x03\x02\x02\x02Z\u01B4\x03\x02\x02\x02\\\u01B6\x03\x02\x02\x02" +
		"^\u01BE\x03\x02\x02\x02`\u01C2\x03\x02\x02\x02b\u01C4\x03\x02\x02\x02" +
		"d\u01CD\x03\x02\x02\x02f\u01D6\x03\x02\x02\x02h\u01E1\x03\x02\x02\x02" +
		"j\u01E7\x03\x02\x02\x02l\u01E9\x03\x02\x02\x02n\u01F4\x03\x02\x02\x02" +
		"p\u01F8\x03\x02\x02\x02r\u01FA\x03\x02\x02\x02t\u01FE\x03\x02\x02\x02" +
		"v\u0204\x03\x02\x02\x02x\u0206\x03\x02\x02\x02z\u020F\x03\x02\x02\x02" +
		"|\u021B\x03\x02\x02\x02~\u0222\x03\x02\x02\x02\x80\u0226\x03\x02\x02\x02" +
		"\x82\u0228\x03\x02\x02\x02\x84\u024A\x03\x02\x02\x02\x86\u024C\x03\x02" +
		"\x02\x02\x88\u024E\x03\x02\x02\x02\x8A\u0254\x03\x02\x02\x02\x8C\u0261" +
		"\x03\x02\x02\x02\x8E\u0264\x03\x02\x02\x02\x90\u0268\x03\x02\x02\x02\x92" +
		"\u0278\x03\x02\x02\x02\x94\u0281\x03\x02\x02\x02\x96\u0283\x03\x02\x02" +
		"\x02\x98\u0291\x03\x02\x02\x02\x9A\u0293\x03\x02\x02\x02\x9C\u029B\x03" +
		"\x02\x02\x02\x9E\x9F\x05\x04\x03\x02\x9F\xA0\x05\x9CO\x02\xA0\xA2\x03" +
		"\x02\x02\x02\xA1\x9E\x03\x02\x02\x02\xA1\xA2\x03\x02\x02\x02\xA2\xA8\x03" +
		"\x02\x02\x02\xA3\xA4\x05\x06\x04\x02\xA4\xA5\x05\x9CO\x02\xA5\xA7\x03" +
		"\x02\x02\x02\xA6\xA3\x03\x02\x02\x02\xA7\xAA\x03\x02\x02\x02\xA8\xA6\x03" +
		"\x02\x02\x02\xA8\xA9\x03\x02\x02\x02\xA9\xB0\x03\x02\x02\x02\xAA\xA8\x03" +
		"\x02\x02\x02\xAB\xAC\x05\f\x07\x02\xAC\xAD\x05\x9CO\x02\xAD\xAF\x03\x02" +
		"\x02\x02\xAE\xAB\x03\x02\x02\x02\xAF\xB2\x03\x02\x02\x02\xB0\xAE\x03\x02" +
		"\x02\x02\xB0\xB1\x03\x02\x02\x02\xB1\x03\x03\x02\x02\x02\xB2\xB0\x03\x02" +
		"\x02\x02\xB3\xB4\x07\x03\x02\x02\xB4\xB5\x078\x02\x02\xB5\x05\x03\x02" +
		"\x02\x02\xB6\xB7\x07\x04\x02\x02\xB7\xB8\x05\b\x05\x02\xB8\x07\x03\x02" +
		"\x02\x02\xB9\xBB\t\x02\x02\x02\xBA\xB9\x03\x02\x02\x02\xBA\xBB\x03\x02" +
		"\x02\x02\xBB\xBC\x03\x02\x02\x02\xBC\xBD\x05\n\x06\x02\xBD\t\x03\x02\x02" +
		"\x02\xBE\xBF\t\x03\x02\x02\xBF\v\x03\x02\x02\x02\xC0\xC4\x05\x0E\b\x02" +
		"\xC1\xC4\x05\x18\r\x02\xC2\xC4\x05\x1C\x0F\x02\xC3\xC0\x03\x02\x02\x02" +
		"\xC3\xC1\x03\x02\x02\x02\xC3\xC2\x03\x02\x02\x02\xC4\r\x03\x02\x02\x02" +
		"\xC5\xC9\x05\x10\t\x02\xC6\xC9\x05\"\x12\x02\xC7\xC9\x05\x82B\x02\xC8" +
		"\xC5\x03\x02\x02\x02\xC8\xC6\x03\x02\x02\x02\xC8\xC7\x03\x02\x02\x02\xC9" +
		"\x0F\x03\x02\x02\x02\xCA\xCB\x07\x06\x02\x02\xCB\xD1\x07\x07\x02\x02\xCC" +
		"\xCD\x05\x12\n\x02\xCD\xCE\x05\x9CO\x02\xCE\xD0\x03\x02\x02\x02\xCF\xCC" +
		"\x03\x02\x02\x02\xD0\xD3\x03\x02\x02\x02\xD1\xCF\x03\x02\x02\x02\xD1\xD2" +
		"\x03\x02\x02\x02\xD2\xD4\x03\x02\x02\x02\xD3\xD1\x03\x02\x02\x02\xD4\xD5" +
		"\x07\b\x02\x02\xD5\x11\x03\x02\x02\x02\xD6\xD7\x078\x02\x02\xD7\xD8\x07" +
		"\t\x02\x02\xD8\xD9\x05\x96L\x02\xD9\x13\x03\x02\x02\x02\xDA\xDF\x078\x02" +
		"\x02\xDB\xDC\x07\n\x02\x02\xDC\xDE\x078\x02\x02\xDD\xDB\x03\x02\x02\x02" +
		"\xDE\xE1\x03\x02\x02\x02\xDF\xDD\x03\x02\x02\x02\xDF\xE0\x03\x02\x02\x02" +
		"\xE0\x15\x03\x02\x02\x02\xE1\xDF\x03\x02\x02\x02\xE2\xE7\x05\x96L\x02" +
		"\xE3\xE4\x07\n\x02\x02\xE4\xE6\x05\x96L\x02\xE5\xE3\x03\x02\x02\x02\xE6" +
		"\xE9\x03\x02\x02\x02\xE7\xE5\x03\x02\x02\x02\xE7\xE8\x03\x02\x02\x02\xE8" +
		"\x17\x03\x02\x02\x02\xE9\xE7\x03\x02\x02\x02\xEA\xEB\x07\v\x02\x02\xEB" +
		"\xEE\x078\x02\x02\xEC\xEF\x05\x1A\x0E\x02\xED\xEF\x05^0\x02\xEE\xEC\x03" +
		"\x02\x02\x02\xEE\xED\x03\x02\x02\x02\xEF\x19\x03\x02\x02\x02\xF0\xF1\x05" +
		"^0\x02\xF1\xF2\x05$\x13\x02\xF2\x1B\x03\x02\x02\x02\xF3\xF4\x07\v\x02" +
		"\x02\xF4\xF5\x05\x1E\x10\x02\xF5\xF8\x078\x02\x02\xF6\xF9\x05\x1A\x0E" +
		"\x02\xF7\xF9\x05^0\x02\xF8\xF6\x03\x02\x02\x02\xF8\xF7\x03\x02\x02\x02" +
		"\xF9\x1D\x03\x02\x02\x02\xFA\xFB\x05b2\x02\xFB\x1F\x03\x02\x02\x02\xFC" +
		"\xFD\x05\x14\v\x02\xFD\xFE\x07\f\x02\x02\xFE\xFF\x05\x16\f\x02\xFF!\x03" +
		"\x02\x02\x02\u0100\u0102\x07\r\x02\x02\u0101\u0100\x03\x02\x02\x02\u0101" +
		"\u0102\x03\x02\x02\x02\u0102\u0103\x03\x02\x02\x02\u0103\u0104\x05 \x11" +
		"\x02\u0104#\x03\x02\x02\x02\u0105\u0106\x07\x0E\x02\x02\u0106\u0107\x05" +
		"&\x14\x02\u0107\u0108\x07\x0F\x02\x02\u0108%\x03\x02\x02\x02\u0109\u010A" +
		"\x05(\x15\x02\u010A\u010B\x05\x9CO\x02\u010B\u010D\x03\x02\x02\x02\u010C" +
		"\u0109\x03\x02\x02\x02\u010D\u0110\x03\x02\x02\x02\u010E\u010C\x03\x02" +
		"\x02\x02\u010E\u010F\x03\x02\x02\x02\u010F\'\x03\x02\x02\x02\u0110\u010E" +
		"\x03\x02\x02\x02\u0111\u011B\x05\x0E\b\x02\u0112\u011B\x05*\x16\x02\u0113" +
		"\u011B\x054\x1B\x02\u0114\u011B\x056\x1C\x02\u0115\u011B\x058\x1D\x02" +
		"\u0116\u011B\x05$\x13\x02\u0117\u011B\x05:\x1E\x02\u0118\u011B\x05<\x1F" +
		"\x02\u0119\u011B\x05D#\x02\u011A\u0111\x03\x02\x02\x02\u011A\u0112\x03" +
		"\x02\x02\x02\u011A\u0113\x03\x02\x02\x02\u011A\u0114\x03\x02\x02\x02\u011A" +
		"\u0115\x03\x02\x02\x02\u011A\u0116\x03\x02\x02\x02\u011A\u0117\x03\x02" +
		"\x02\x02\u011A\u0118\x03\x02\x02\x02\u011A\u0119\x03\x02\x02\x02\u011B" +
		")\x03\x02\x02\x02\u011C\u0120\x05,\x17\x02\u011D\u0120\x05.\x18\x02\u011E" +
		"\u0120\x050\x19\x02\u011F\u011C\x03\x02\x02\x02\u011F\u011D\x03\x02\x02" +
		"\x02\u011F\u011E\x03\x02\x02\x02\u0120+\x03\x02\x02\x02\u0121\u0122\x05" +
		"\x96L\x02\u0122-\x03\x02\x02\x02\u0123\u0124\x05\x96L\x02\u0124\u0125" +
		"\t\x04\x02\x02\u0125/\x03\x02\x02\x02\u0126\u0127\x05\x16\f\x02\u0127" +
		"\u0128\x052\x1A\x02\u0128\u0129\x05\x16\f\x02\u01291\x03\x02\x02\x02\u012A" +
		"\u012C\t\x05\x02\x02\u012B\u012A\x03\x02\x02\x02\u012B\u012C\x03\x02\x02" +
		"\x02\u012C\u012D\x03\x02\x02\x02\u012D\u012E\x07\t\x02\x02\u012E3\x03" +
		"\x02\x02\x02\u012F\u0131\x07\x1C\x02\x02\u0130\u0132\x05\x16\f\x02\u0131" +
		"\u0130\x03\x02\x02\x02\u0131\u0132\x03\x02\x02\x02\u01325\x03\x02\x02" +
		"\x02\u0133\u0134\x07\x1D\x02\x02\u01347\x03\x02\x02\x02\u0135\u0136\x07" +
		"\x1E\x02\x02\u01369\x03\x02\x02\x02\u0137\u013B\x07\x1F\x02\x02\u0138" +
		"\u0139\x05*\x16\x02\u0139\u013A\x07 \x02\x02\u013A\u013C\x03\x02\x02\x02" +
		"\u013B\u0138\x03\x02\x02\x02\u013B\u013C\x03\x02\x02\x02\u013C\u013D\x03" +
		"\x02\x02\x02\u013D\u013E\x05\x96L\x02\u013E\u0144\x05$\x13\x02\u013F\u0142" +
		"\x07!\x02\x02\u0140\u0143\x05:\x1E\x02\u0141\u0143\x05$\x13\x02\u0142" +
		"\u0140\x03\x02\x02\x02\u0142\u0141\x03\x02\x02\x02\u0143\u0145\x03\x02" +
		"\x02\x02\u0144\u013F\x03\x02\x02\x02\u0144\u0145\x03\x02\x02\x02\u0145" +
		";\x03\x02\x02\x02\u0146\u0147\x05> \x02\u0147=\x03\x02\x02\x02\u0148\u014C" +
		"\x07\"\x02\x02\u0149\u014A\x05*\x16\x02\u014A\u014B\x07 \x02\x02\u014B" +
		"\u014D\x03\x02\x02\x02\u014C\u0149\x03\x02\x02\x02\u014C\u014D\x03\x02" +
		"\x02\x02\u014D\u014F\x03\x02\x02\x02\u014E\u0150\x05\x96L\x02\u014F\u014E" +
		"\x03\x02\x02\x02\u014F\u0150\x03\x02\x02\x02\u0150\u0151\x03\x02\x02\x02" +
		"\u0151\u0155\x07\x0E\x02\x02\u0152\u0154\x05@!\x02\u0153\u0152\x03\x02" +
		"\x02\x02\u0154\u0157\x03\x02\x02\x02\u0155\u0153\x03\x02\x02\x02\u0155" +
		"\u0156\x03\x02\x02\x02\u0156\u0158\x03\x02\x02\x02\u0157\u0155\x03\x02" +
		"\x02\x02\u0158\u0159\x07\x0F\x02\x02\u0159?\x03\x02\x02\x02\u015A\u015B" +
		"\x05B\"\x02\u015B\u015C\x07#\x02\x02\u015C\u015D\x05&\x14\x02\u015DA\x03" +
		"\x02\x02\x02\u015E\u015F\x07$\x02\x02\u015F\u0162\x05\x16\f\x02\u0160" +
		"\u0162\x07%\x02\x02\u0161\u015E\x03\x02\x02\x02\u0161\u0160\x03\x02\x02" +
		"\x02\u0162C\x03\x02\x02\x02\u0163\u0167\x07&\x02\x02\u0164\u0168\x05\x96" +
		"L\x02\u0165\u0168\x05F$\x02\u0166\u0168\x05H%\x02\u0167\u0164\x03\x02" +
		"\x02\x02\u0167\u0165\x03\x02\x02\x02\u0167\u0166\x03\x02\x02\x02\u0167" +
		"\u0168\x03\x02\x02\x02\u0168\u0169\x03\x02\x02\x02\u0169\u016A\x05$\x13" +
		"\x02\u016AE\x03\x02\x02\x02\u016B\u016D\x05*\x16\x02\u016C\u016B\x03\x02" +
		"\x02\x02\u016C\u016D\x03\x02\x02\x02\u016D\u016E\x03\x02\x02\x02\u016E" +
		"\u0170\x07 \x02\x02\u016F\u0171\x05\x96L\x02\u0170\u016F\x03\x02\x02\x02" +
		"\u0170\u0171\x03\x02\x02\x02\u0171\u0172\x03\x02\x02\x02\u0172\u0174\x07" +
		" \x02\x02\u0173\u0175\x05*\x16\x02\u0174\u0173\x03\x02\x02\x02\u0174\u0175" +
		"\x03\x02\x02\x02\u0175G\x03\x02\x02\x02\u0176\u0177\x05\x16\f\x02\u0177" +
		"\u0178\x07\'\x02\x02\u0178\u0179\x078\x02\x02\u0179I\x03\x02\x02\x02\u017A" +
		"\u017D\x05L\'\x02\u017B\u017D\x05N(\x02\u017C\u017A\x03\x02\x02\x02\u017C" +
		"\u017B\x03\x02\x02\x02\u017DK\x03\x02\x02\x02\u017E\u0180\x07\x1B\x02" +
		"\x02\u017F\u017E\x03\x02\x02\x02\u017F\u0180\x03\x02\x02\x02\u0180\u0182" +
		"\x03\x02\x02\x02\u0181\u0183\x07\r\x02\x02\u0182\u0181\x03\x02\x02\x02" +
		"\u0182\u0183\x03\x02\x02\x02\u0183\u0184\x03\x02\x02\x02\u0184\u0187\x07" +
		"8\x02\x02\u0185\u0187\x05r:\x02\u0186\u017F\x03\x02\x02\x02\u0186\u0185" +
		"\x03\x02\x02\x02\u0187M\x03\x02\x02\x02\u0188\u018D\x05P)\x02\u0189\u018D" +
		"\x05\\/\x02\u018A\u018D\x05V,\x02\u018B\u018D\x05X-\x02\u018C\u0188\x03" +
		"\x02\x02\x02\u018C\u0189\x03\x02\x02\x02\u018C\u018A\x03\x02\x02\x02\u018C" +
		"\u018B\x03\x02\x02\x02\u018DO\x03\x02\x02\x02\u018E\u0190\x07(\x02\x02" +
		"\u018F\u0191\x05R*\x02\u0190\u018F\x03\x02\x02\x02\u0190\u0191\x03\x02" +
		"\x02\x02\u0191\u0192\x03\x02\x02\x02\u0192\u0193\x07)\x02\x02\u0193\u0194" +
		"\x05T+\x02\u0194Q\x03\x02\x02\x02\u0195\u0196\x05\x96L\x02\u0196S\x03" +
		"\x02\x02\x02\u0197\u0198\x05J&\x02\u0198U\x03\x02\x02\x02\u0199\u019A" +
		"\x07*\x02\x02\u019A\u019B\x078\x02\x02\u019B\u01A1\x07\x0E\x02\x02\u019C" +
		"\u019D\x05Z.\x02\u019D\u019E\x05\x9CO\x02\u019E\u01A0\x03\x02\x02\x02" +
		"\u019F\u019C\x03\x02\x02\x02\u01A0\u01A3\x03\x02\x02\x02\u01A1\u019F\x03" +
		"\x02\x02\x02\u01A1\u01A2\x03\x02\x02\x02\u01A2\u01A4\x03\x02\x02\x02\u01A3" +
		"\u01A1\x03\x02\x02\x02\u01A4\u01A5\x07\x0F\x02\x02\u01A5W\x03\x02\x02" +
		"\x02\u01A6\u01A7\x07+\x02\x02\u01A7\u01A8\x07(\x02\x02\u01A8\u01A9\x05" +
		"J&\x02\u01A9\u01AA\x07)\x02\x02\u01AA\u01AB\x05T+\x02\u01ABY\x03\x02\x02" +
		"\x02\u01AC\u01AD\x06.\x02\x02\u01AD\u01AE\x078\x02\x02\u01AE\u01AF\x05" +
		"b2\x02\u01AF\u01B0\x05`1\x02\u01B0\u01B5\x03\x02\x02\x02\u01B1\u01B5\x05" +
		"L\'\x02\u01B2\u01B3\x078\x02\x02\u01B3\u01B5\x05b2\x02\u01B4\u01AC\x03" +
		"\x02\x02\x02\u01B4\u01B1\x03\x02\x02\x02\u01B4\u01B2\x03\x02\x02\x02\u01B5" +
		"[\x03\x02\x02\x02\u01B6\u01B7\x07\v\x02\x02\u01B7\u01B8\x05^0\x02\u01B8" +
		"]\x03\x02\x02\x02\u01B9\u01BA\x060\x03\x02\u01BA\u01BB\x05b2\x02\u01BB" +
		"\u01BC\x05`1\x02\u01BC\u01BF\x03\x02\x02\x02\u01BD\u01BF\x05b2\x02\u01BE" +
		"\u01B9\x03\x02\x02\x02\u01BE\u01BD\x03\x02\x02\x02\u01BF_\x03\x02\x02" +
		"\x02\u01C0\u01C3\x05b2\x02\u01C1\u01C3\x05J&\x02\u01C2\u01C0\x03\x02\x02" +
		"\x02\u01C2\u01C1\x03\x02\x02\x02\u01C3a\x03\x02\x02\x02\u01C4\u01C9\x07" +
		"\x07\x02\x02\u01C5\u01C7\x05d3\x02\u01C6\u01C8\x07\n\x02\x02\u01C7\u01C6" +
		"\x03\x02\x02\x02\u01C7\u01C8\x03\x02\x02\x02\u01C8\u01CA\x03\x02\x02\x02" +
		"\u01C9\u01C5\x03\x02\x02\x02\u01C9\u01CA\x03\x02\x02\x02\u01CA\u01CB\x03" +
		"\x02\x02\x02\u01CB\u01CC\x07\b\x02\x02\u01CCc\x03\x02\x02\x02\u01CD\u01D2" +
		"\x05f4\x02\u01CE\u01CF\x07\n\x02\x02\u01CF\u01D1\x05f4\x02\u01D0\u01CE" +
		"\x03\x02\x02\x02\u01D1\u01D4\x03\x02\x02\x02\u01D2\u01D0\x03\x02\x02\x02" +
		"\u01D2\u01D3\x03\x02\x02\x02\u01D3e\x03\x02\x02\x02\u01D4\u01D2\x03\x02" +
		"\x02\x02\u01D5\u01D7\x05\x14\v\x02\u01D6\u01D5\x03\x02\x02\x02\u01D6\u01D7" +
		"\x03\x02\x02\x02\u01D7\u01D8\x03\x02\x02\x02\u01D8\u01D9\x05J&\x02\u01D9" +
		"g\x03\x02\x02\x02\u01DA\u01E2\x05j6\x02\u01DB\u01E2\x05p9\x02\u01DC\u01E2" +
		"\x05\x92J\x02\u01DD\u01DE\x07\x07\x02\x02\u01DE\u01DF\x05\x96L\x02\u01DF" +
		"\u01E0\x07\b\x02\x02\u01E0\u01E2\x03\x02\x02\x02\u01E1\u01DA\x03\x02\x02" +
		"\x02\u01E1\u01DB\x03\x02\x02\x02\u01E1\u01DC\x03\x02\x02\x02\u01E1\u01DD" +
		"\x03\x02\x02\x02\u01E2i\x03\x02\x02\x02\u01E3\u01E8\x05n8\x02\u01E4\u01E8" +
		"\x05t;\x02\u01E5\u01E8\x05\x88E\x02\u01E6\u01E8\x05l7\x02\u01E7\u01E3" +
		"\x03\x02\x02\x02\u01E7\u01E4\x03\x02\x02\x02\u01E7\u01E5\x03\x02\x02\x02" +
		"\u01E7\u01E6\x03\x02\x02\x02\u01E8k\x03\x02\x02\x02\u01E9\u01EA\x07(\x02" +
		"\x02\u01EA\u01EF\x05\x96L\x02\u01EB\u01EC\x07\n\x02\x02\u01EC\u01EE\x05" +
		"\x96L\x02\u01ED\u01EB\x03\x02\x02\x02\u01EE\u01F1\x03\x02\x02\x02\u01EF" +
		"\u01ED\x03\x02\x02\x02\u01EF\u01F0\x03\x02\x02\x02\u01F0\u01F2\x03\x02" +
		"\x02\x02\u01F1\u01EF\x03\x02\x02\x02\u01F2\u01F3\x07)\x02\x02\u01F3m\x03" +
		"\x02\x02\x02\u01F4\u01F5\t\x06\x02\x02\u01F5o\x03\x02\x02\x02\u01F6\u01F9" +
		"\x078\x02\x02\u01F7\u01F9\x05r:\x02\u01F8\u01F6\x03\x02\x02\x02\u01F8" +
		"\u01F7\x03\x02\x02\x02\u01F9q\x03\x02\x02\x02\u01FA\u01FB\x078\x02\x02" +
		"\u01FB\u01FC\x07\x05\x02\x02\u01FC\u01FD\x078\x02\x02\u01FDs\x03\x02\x02" +
		"\x02\u01FE\u01FF\x05v<\x02\u01FF\u0200\x05x=\x02\u0200u\x03\x02\x02\x02" +
		"\u0201\u0205\x05P)\x02\u0202\u0205\x05X-\x02\u0203\u0205\x05L\'\x02\u0204" +
		"\u0201\x03\x02\x02\x02\u0204\u0202\x03\x02\x02\x02\u0204\u0203\x03\x02" +
		"\x02\x02\u0205w\x03\x02\x02\x02\u0206\u020B\x07\x0E\x02\x02\u0207\u0209" +
		"\x05z>\x02\u0208\u020A\x07\n\x02\x02\u0209\u0208\x03\x02\x02\x02\u0209" +
		"\u020A\x03\x02\x02\x02\u020A\u020C\x03\x02\x02\x02\u020B\u0207\x03\x02" +
		"\x02\x02\u020B\u020C\x03\x02\x02\x02\u020C\u020D\x03\x02\x02\x02\u020D" +
		"\u020E\x07\x0F\x02\x02\u020Ey\x03\x02\x02\x02\u020F\u0215\x05|?\x02\u0210" +
		"\u0211\x05\x9CO\x02\u0211\u0212\x05|?\x02\u0212\u0214\x03\x02\x02\x02" +
		"\u0213\u0210\x03\x02\x02\x02\u0214\u0217\x03\x02\x02\x02\u0215\u0213\x03" +
		"\x02\x02\x02\u0215\u0216\x03\x02\x02\x02\u0216{\x03\x02\x02\x02\u0217" +
		"\u0215\x03\x02\x02\x02\u0218\u0219\x05~@\x02\u0219\u021A\x07#\x02\x02" +
		"\u021A\u021C\x03\x02\x02\x02\u021B\u0218\x03\x02\x02\x02\u021B\u021C\x03" +
		"\x02\x02\x02\u021C\u021D\x03\x02\x02\x02\u021D\u021E\x05\x80A\x02\u021E" +
		"}\x03\x02\x02\x02\u021F\u0223\x078\x02\x02\u0220\u0223\x05\x96L\x02\u0221" +
		"\u0223\x05x=\x02\u0222\u021F\x03\x02\x02\x02\u0222\u0220\x03\x02\x02\x02" +
		"\u0222\u0221\x03\x02\x02\x02\u0223\x7F\x03\x02\x02\x02\u0224\u0227\x05" +
		"\x96L\x02\u0225\u0227\x05x=\x02\u0226\u0224\x03\x02\x02\x02\u0226\u0225" +
		"\x03\x02\x02\x02\u0227\x81\x03\x02\x02\x02\u0228\u0229\x07,\x02\x02\u0229" +
		"\u022A\x078\x02\x02\u022A\u0230\x07\x0E\x02\x02\u022B\u022C\x05\x84C\x02" +
		"\u022C\u022D\x05\x9CO\x02\u022D\u022F\x03\x02\x02\x02\u022E\u022B\x03" +
		"\x02\x02\x02\u022F\u0232\x03\x02\x02\x02\u0230\u022E\x03\x02\x02\x02\u0230" +
		"\u0231\x03\x02\x02\x02\u0231\u0233\x03\x02\x02\x02\u0232\u0230\x03\x02" +
		"\x02\x02\u0233\u0234\x07\x0F\x02\x02\u0234\x83\x03\x02\x02\x02";
	private static readonly _serializedATNSegment1: string =
		"\u0235\u0236\x06C\x04\x02\u0236\u0237\x05\x14\v\x02\u0237\u0238\x05J&" +
		"\x02\u0238\u023B\x03\x02\x02\x02\u0239\u023B\x05\x86D\x02\u023A\u0235" +
		"\x03\x02\x02\x02\u023A\u0239\x03\x02\x02\x02\u023B\u023D\x03\x02\x02\x02" +
		"\u023C\u023E\x07@\x02\x02\u023D\u023C\x03\x02\x02\x02\u023D\u023E\x03" +
		"\x02\x02\x02\u023E\u024B\x03\x02\x02\x02\u023F\u0244\x07-\x02\x02\u0240" +
		"\u0242\x07\r\x02\x02\u0241\u0243\x07\r\x02\x02\u0242\u0241\x03\x02\x02" +
		"\x02\u0242\u0243\x03\x02\x02\x02\u0243\u0245\x03\x02\x02\x02\u0244\u0240" +
		"\x03\x02\x02\x02\u0244\u0245\x03\x02\x02\x02\u0245\u0248\x03\x02\x02\x02" +
		"\u0246\u0248\x07\r\x02\x02\u0247\u023F\x03\x02\x02\x02\u0247\u0246\x03" +
		"\x02\x02\x02\u0248\u0249\x03\x02\x02\x02\u0249\u024B\x07#\x02\x02\u024A" +
		"\u023A\x03\x02\x02\x02\u024A\u0247\x03\x02\x02\x02\u024B\x85\x03\x02\x02" +
		"\x02\u024C\u024D\x05L\'\x02\u024D\x87\x03\x02\x02\x02\u024E\u024F\x07" +
		"\v\x02\x02\u024F\u0250\x05\x1A\x0E\x02\u0250\x89\x03\x02\x02\x02\u0251" +
		"\u0252\bF\x01\x02\u0252\u0255\x05h5\x02\u0253\u0255\x05\x9AN\x02\u0254" +
		"\u0251\x03\x02\x02\x02\u0254\u0253\x03\x02\x02\x02\u0255\u025E\x03\x02" +
		"\x02\x02\u0256\u0257\f\x05\x02\x02\u0257\u025D\x05\x8CG\x02\u0258\u0259" +
		"\f\x04\x02\x02\u0259\u025D\x05\x8EH\x02\u025A\u025B\f\x03\x02\x02\u025B" +
		"\u025D\x05\x90I\x02\u025C\u0256\x03\x02\x02\x02\u025C\u0258\x03\x02\x02" +
		"\x02\u025C\u025A\x03\x02\x02\x02\u025D\u0260\x03\x02\x02\x02\u025E\u025C" +
		"\x03\x02\x02\x02\u025E\u025F\x03\x02\x02\x02\u025F\x8B\x03\x02\x02\x02" +
		"\u0260\u025E\x03\x02\x02\x02\u0261\u0262\x07\x05\x02\x02\u0262\u0263\x07" +
		"8\x02\x02\u0263\x8D\x03\x02\x02\x02\u0264\u0265\x07(\x02\x02\u0265\u0266" +
		"\x05\x96L\x02\u0266\u0267\x07)\x02\x02\u0267\x8F\x03\x02\x02\x02\u0268" +
		"\u0274\x07\x07\x02\x02\u0269\u0270\x05\x16\f\x02\u026A\u026D\x05J&\x02" +
		"\u026B\u026C\x07\n\x02\x02\u026C\u026E\x05\x16\f\x02\u026D\u026B\x03\x02" +
		"\x02\x02\u026D\u026E\x03\x02\x02\x02\u026E\u0270\x03\x02\x02\x02\u026F" +
		"\u0269\x03\x02\x02\x02\u026F\u026A\x03\x02\x02\x02\u0270\u0272\x03\x02" +
		"\x02\x02\u0271\u0273\x07\n\x02\x02\u0272\u0271\x03\x02\x02\x02\u0272\u0273" +
		"\x03\x02\x02\x02\u0273\u0275\x03\x02\x02\x02\u0274\u026F\x03\x02\x02\x02" +
		"\u0274\u0275\x03\x02\x02\x02\u0275\u0276\x03\x02\x02\x02\u0276\u0277\x07" +
		"\b\x02\x02\u0277\x91\x03\x02\x02\x02\u0278\u0279\x05\x94K\x02\u0279\u027A" +
		"\x07\x05\x02\x02\u027A\u027B\x078\x02\x02\u027B\x93\x03\x02\x02\x02\u027C" +
		"\u0282\x05L\'\x02\u027D\u027E\x07\x07\x02\x02\u027E\u027F\x05\x94K\x02" +
		"\u027F\u0280\x07\b\x02\x02\u0280\u0282\x03\x02\x02\x02\u0281\u027C\x03" +
		"\x02\x02\x02\u0281\u027D\x03\x02\x02\x02\u0282\x95\x03\x02\x02\x02\u0283" +
		"\u0284\bL\x01\x02\u0284\u0285\x05\x98M\x02\u0285\u028B\x03\x02\x02\x02" +
		"\u0286\u0287\f\x03\x02\x02\u0287\u0288\t\x07\x02\x02\u0288\u028A\x05\x96" +
		"L\x04\u0289\u0286\x03\x02\x02\x02\u028A\u028D\x03\x02\x02\x02\u028B\u0289" +
		"\x03\x02\x02\x02\u028B\u028C\x03\x02\x02\x02\u028C\x97\x03\x02\x02\x02" +
		"\u028D\u028B\x03\x02\x02\x02\u028E\u0292\x05\x8AF\x02\u028F\u0290\t\b" +
		"\x02\x02\u0290\u0292\x05\x98M\x02\u0291\u028E\x03\x02\x02\x02\u0291\u028F" +
		"\x03\x02\x02\x02\u0292\x99\x03\x02\x02\x02\u0293\u0294\x05J&\x02\u0294" +
		"\u0295\x07\x07\x02\x02\u0295\u0296\x05\x96L\x02\u0296\u0297\x07\b\x02" +
		"\x02\u0297\x9B\x03\x02\x02\x02\u0298\u029C\x07\x02\x02\x03\u0299\u029C" +
		"\x06O\t\x02\u029A\u029C\x06O\n\x02\u029B\u0298\x03\x02\x02\x02\u029B\u0299" +
		"\x03\x02\x02\x02\u029B\u029A\x03\x02\x02\x02\u029C\x9D\x03\x02\x02\x02" +
		"I\xA1\xA8\xB0\xBA\xC3\xC8\xD1\xDF\xE7\xEE\xF8\u0101\u010E\u011A\u011F" +
		"\u012B\u0131\u013B\u0142\u0144\u014C\u014F\u0155\u0161\u0167\u016C\u0170" +
		"\u0174\u017C\u017F\u0182\u0186\u018C\u0190\u01A1\u01B4\u01BE\u01C2\u01C7" +
		"\u01C9\u01D2\u01D6\u01E1\u01E7\u01EF\u01F8\u0204\u0209\u020B\u0215\u021B" +
		"\u0222\u0226\u0230\u023A\u023D\u0242\u0244\u0247\u024A\u0254\u025C\u025E" +
		"\u026D\u026F\u0272\u0274\u0281\u028B\u0291\u029B";
	public static readonly _serializedATN: string = Utils.join(
		[
			VParser._serializedATNSegment0,
			VParser._serializedATNSegment1,
		],
		"",
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!VParser.__ATN) {
			VParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(VParser._serializedATN));
		}

		return VParser.__ATN;
	}

}

export class SourceFileContext extends ParserRuleContext {
	public moduleClause(): ModuleClauseContext | undefined {
		return this.tryGetRuleContext(0, ModuleClauseContext);
	}
	public eos(): EosContext[];
	public eos(i: number): EosContext;
	public eos(i?: number): EosContext | EosContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EosContext);
		} else {
			return this.getRuleContext(i, EosContext);
		}
	}
	public importDecl(): ImportDeclContext[];
	public importDecl(i: number): ImportDeclContext;
	public importDecl(i?: number): ImportDeclContext | ImportDeclContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ImportDeclContext);
		} else {
			return this.getRuleContext(i, ImportDeclContext);
		}
	}
	public topLevelDecl(): TopLevelDeclContext[];
	public topLevelDecl(i: number): TopLevelDeclContext;
	public topLevelDecl(i?: number): TopLevelDeclContext | TopLevelDeclContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TopLevelDeclContext);
		} else {
			return this.getRuleContext(i, TopLevelDeclContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VParser.RULE_sourceFile; }
	// @Override
	public enterRule(listener: VListener): void {
		if (listener.enterSourceFile) {
			listener.enterSourceFile(this);
		}
	}
	// @Override
	public exitRule(listener: VListener): void {
		if (listener.exitSourceFile) {
			listener.exitSourceFile(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VVisitor<Result>): Result {
		if (visitor.visitSourceFile) {
			return visitor.visitSourceFile(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ModuleClauseContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(VParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VParser.RULE_moduleClause; }
	// @Override
	public enterRule(listener: VListener): void {
		if (listener.enterModuleClause) {
			listener.enterModuleClause(this);
		}
	}
	// @Override
	public exitRule(listener: VListener): void {
		if (listener.exitModuleClause) {
			listener.exitModuleClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VVisitor<Result>): Result {
		if (visitor.visitModuleClause) {
			return visitor.visitModuleClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ImportDeclContext extends ParserRuleContext {
	public importSpec(): ImportSpecContext | undefined {
		return this.tryGetRuleContext(0, ImportSpecContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VParser.RULE_importDecl; }
	// @Override
	public enterRule(listener: VListener): void {
		if (listener.enterImportDecl) {
			listener.enterImportDecl(this);
		}
	}
	// @Override
	public exitRule(listener: VListener): void {
		if (listener.exitImportDecl) {
			listener.exitImportDecl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VVisitor<Result>): Result {
		if (visitor.visitImportDecl) {
			return visitor.visitImportDecl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ImportSpecContext extends ParserRuleContext {
	public importPath(): ImportPathContext {
		return this.getRuleContext(0, ImportPathContext);
	}
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(VParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VParser.RULE_importSpec; }
	// @Override
	public enterRule(listener: VListener): void {
		if (listener.enterImportSpec) {
			listener.enterImportSpec(this);
		}
	}
	// @Override
	public exitRule(listener: VListener): void {
		if (listener.exitImportSpec) {
			listener.exitImportSpec(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VVisitor<Result>): Result {
		if (visitor.visitImportSpec) {
			return visitor.visitImportSpec(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ImportPathContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(VParser.IDENTIFIER, 0); }
	public STRING_LIT(): TerminalNode | undefined { return this.tryGetToken(VParser.STRING_LIT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VParser.RULE_importPath; }
	// @Override
	public enterRule(listener: VListener): void {
		if (listener.enterImportPath) {
			listener.enterImportPath(this);
		}
	}
	// @Override
	public exitRule(listener: VListener): void {
		if (listener.exitImportPath) {
			listener.exitImportPath(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VVisitor<Result>): Result {
		if (visitor.visitImportPath) {
			return visitor.visitImportPath(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TopLevelDeclContext extends ParserRuleContext {
	public declaration(): DeclarationContext | undefined {
		return this.tryGetRuleContext(0, DeclarationContext);
	}
	public functionDecl(): FunctionDeclContext | undefined {
		return this.tryGetRuleContext(0, FunctionDeclContext);
	}
	public methodDecl(): MethodDeclContext | undefined {
		return this.tryGetRuleContext(0, MethodDeclContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VParser.RULE_topLevelDecl; }
	// @Override
	public enterRule(listener: VListener): void {
		if (listener.enterTopLevelDecl) {
			listener.enterTopLevelDecl(this);
		}
	}
	// @Override
	public exitRule(listener: VListener): void {
		if (listener.exitTopLevelDecl) {
			listener.exitTopLevelDecl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VVisitor<Result>): Result {
		if (visitor.visitTopLevelDecl) {
			return visitor.visitTopLevelDecl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DeclarationContext extends ParserRuleContext {
	public constDecl(): ConstDeclContext | undefined {
		return this.tryGetRuleContext(0, ConstDeclContext);
	}
	public varDecl(): VarDeclContext | undefined {
		return this.tryGetRuleContext(0, VarDeclContext);
	}
	public structDecl(): StructDeclContext | undefined {
		return this.tryGetRuleContext(0, StructDeclContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VParser.RULE_declaration; }
	// @Override
	public enterRule(listener: VListener): void {
		if (listener.enterDeclaration) {
			listener.enterDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: VListener): void {
		if (listener.exitDeclaration) {
			listener.exitDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VVisitor<Result>): Result {
		if (visitor.visitDeclaration) {
			return visitor.visitDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConstDeclContext extends ParserRuleContext {
	public constSpec(): ConstSpecContext[];
	public constSpec(i: number): ConstSpecContext;
	public constSpec(i?: number): ConstSpecContext | ConstSpecContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ConstSpecContext);
		} else {
			return this.getRuleContext(i, ConstSpecContext);
		}
	}
	public eos(): EosContext[];
	public eos(i: number): EosContext;
	public eos(i?: number): EosContext | EosContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EosContext);
		} else {
			return this.getRuleContext(i, EosContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VParser.RULE_constDecl; }
	// @Override
	public enterRule(listener: VListener): void {
		if (listener.enterConstDecl) {
			listener.enterConstDecl(this);
		}
	}
	// @Override
	public exitRule(listener: VListener): void {
		if (listener.exitConstDecl) {
			listener.exitConstDecl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VVisitor<Result>): Result {
		if (visitor.visitConstDecl) {
			return visitor.visitConstDecl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConstSpecContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(VParser.IDENTIFIER, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VParser.RULE_constSpec; }
	// @Override
	public enterRule(listener: VListener): void {
		if (listener.enterConstSpec) {
			listener.enterConstSpec(this);
		}
	}
	// @Override
	public exitRule(listener: VListener): void {
		if (listener.exitConstSpec) {
			listener.exitConstSpec(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VVisitor<Result>): Result {
		if (visitor.visitConstSpec) {
			return visitor.visitConstSpec(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdentifierListContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VParser.IDENTIFIER);
		} else {
			return this.getToken(VParser.IDENTIFIER, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VParser.RULE_identifierList; }
	// @Override
	public enterRule(listener: VListener): void {
		if (listener.enterIdentifierList) {
			listener.enterIdentifierList(this);
		}
	}
	// @Override
	public exitRule(listener: VListener): void {
		if (listener.exitIdentifierList) {
			listener.exitIdentifierList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VVisitor<Result>): Result {
		if (visitor.visitIdentifierList) {
			return visitor.visitIdentifierList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionListContext extends ParserRuleContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VParser.RULE_expressionList; }
	// @Override
	public enterRule(listener: VListener): void {
		if (listener.enterExpressionList) {
			listener.enterExpressionList(this);
		}
	}
	// @Override
	public exitRule(listener: VListener): void {
		if (listener.exitExpressionList) {
			listener.exitExpressionList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VVisitor<Result>): Result {
		if (visitor.visitExpressionList) {
			return visitor.visitExpressionList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionDeclContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(VParser.IDENTIFIER, 0); }
	public function(): FunctionContext | undefined {
		return this.tryGetRuleContext(0, FunctionContext);
	}
	public signature(): SignatureContext | undefined {
		return this.tryGetRuleContext(0, SignatureContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VParser.RULE_functionDecl; }
	// @Override
	public enterRule(listener: VListener): void {
		if (listener.enterFunctionDecl) {
			listener.enterFunctionDecl(this);
		}
	}
	// @Override
	public exitRule(listener: VListener): void {
		if (listener.exitFunctionDecl) {
			listener.exitFunctionDecl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VVisitor<Result>): Result {
		if (visitor.visitFunctionDecl) {
			return visitor.visitFunctionDecl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionContext extends ParserRuleContext {
	public signature(): SignatureContext {
		return this.getRuleContext(0, SignatureContext);
	}
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VParser.RULE_function; }
	// @Override
	public enterRule(listener: VListener): void {
		if (listener.enterFunction) {
			listener.enterFunction(this);
		}
	}
	// @Override
	public exitRule(listener: VListener): void {
		if (listener.exitFunction) {
			listener.exitFunction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VVisitor<Result>): Result {
		if (visitor.visitFunction) {
			return visitor.visitFunction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MethodDeclContext extends ParserRuleContext {
	public receiver(): ReceiverContext {
		return this.getRuleContext(0, ReceiverContext);
	}
	public IDENTIFIER(): TerminalNode { return this.getToken(VParser.IDENTIFIER, 0); }
	public function(): FunctionContext | undefined {
		return this.tryGetRuleContext(0, FunctionContext);
	}
	public signature(): SignatureContext | undefined {
		return this.tryGetRuleContext(0, SignatureContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VParser.RULE_methodDecl; }
	// @Override
	public enterRule(listener: VListener): void {
		if (listener.enterMethodDecl) {
			listener.enterMethodDecl(this);
		}
	}
	// @Override
	public exitRule(listener: VListener): void {
		if (listener.exitMethodDecl) {
			listener.exitMethodDecl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VVisitor<Result>): Result {
		if (visitor.visitMethodDecl) {
			return visitor.visitMethodDecl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ReceiverContext extends ParserRuleContext {
	public parameters(): ParametersContext {
		return this.getRuleContext(0, ParametersContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VParser.RULE_receiver; }
	// @Override
	public enterRule(listener: VListener): void {
		if (listener.enterReceiver) {
			listener.enterReceiver(this);
		}
	}
	// @Override
	public exitRule(listener: VListener): void {
		if (listener.exitReceiver) {
			listener.exitReceiver(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VVisitor<Result>): Result {
		if (visitor.visitReceiver) {
			return visitor.visitReceiver(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NoMutDeclContext extends ParserRuleContext {
	public identifierList(): IdentifierListContext {
		return this.getRuleContext(0, IdentifierListContext);
	}
	public expressionList(): ExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ExpressionListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VParser.RULE_noMutDecl; }
	// @Override
	public enterRule(listener: VListener): void {
		if (listener.enterNoMutDecl) {
			listener.enterNoMutDecl(this);
		}
	}
	// @Override
	public exitRule(listener: VListener): void {
		if (listener.exitNoMutDecl) {
			listener.exitNoMutDecl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VVisitor<Result>): Result {
		if (visitor.visitNoMutDecl) {
			return visitor.visitNoMutDecl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VarDeclContext extends ParserRuleContext {
	public noMutDecl(): NoMutDeclContext | undefined {
		return this.tryGetRuleContext(0, NoMutDeclContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VParser.RULE_varDecl; }
	// @Override
	public enterRule(listener: VListener): void {
		if (listener.enterVarDecl) {
			listener.enterVarDecl(this);
		}
	}
	// @Override
	public exitRule(listener: VListener): void {
		if (listener.exitVarDecl) {
			listener.exitVarDecl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VVisitor<Result>): Result {
		if (visitor.visitVarDecl) {
			return visitor.visitVarDecl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BlockContext extends ParserRuleContext {
	public statementList(): StatementListContext {
		return this.getRuleContext(0, StatementListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VParser.RULE_block; }
	// @Override
	public enterRule(listener: VListener): void {
		if (listener.enterBlock) {
			listener.enterBlock(this);
		}
	}
	// @Override
	public exitRule(listener: VListener): void {
		if (listener.exitBlock) {
			listener.exitBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VVisitor<Result>): Result {
		if (visitor.visitBlock) {
			return visitor.visitBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementListContext extends ParserRuleContext {
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	public eos(): EosContext[];
	public eos(i: number): EosContext;
	public eos(i?: number): EosContext | EosContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EosContext);
		} else {
			return this.getRuleContext(i, EosContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VParser.RULE_statementList; }
	// @Override
	public enterRule(listener: VListener): void {
		if (listener.enterStatementList) {
			listener.enterStatementList(this);
		}
	}
	// @Override
	public exitRule(listener: VListener): void {
		if (listener.exitStatementList) {
			listener.exitStatementList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VVisitor<Result>): Result {
		if (visitor.visitStatementList) {
			return visitor.visitStatementList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	public declaration(): DeclarationContext | undefined {
		return this.tryGetRuleContext(0, DeclarationContext);
	}
	public simpleStmt(): SimpleStmtContext | undefined {
		return this.tryGetRuleContext(0, SimpleStmtContext);
	}
	public returnStmt(): ReturnStmtContext | undefined {
		return this.tryGetRuleContext(0, ReturnStmtContext);
	}
	public breakStmt(): BreakStmtContext | undefined {
		return this.tryGetRuleContext(0, BreakStmtContext);
	}
	public continueStmt(): ContinueStmtContext | undefined {
		return this.tryGetRuleContext(0, ContinueStmtContext);
	}
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	public ifStmt(): IfStmtContext | undefined {
		return this.tryGetRuleContext(0, IfStmtContext);
	}
	public switchStmt(): SwitchStmtContext | undefined {
		return this.tryGetRuleContext(0, SwitchStmtContext);
	}
	public forStmt(): ForStmtContext | undefined {
		return this.tryGetRuleContext(0, ForStmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VParser.RULE_statement; }
	// @Override
	public enterRule(listener: VListener): void {
		if (listener.enterStatement) {
			listener.enterStatement(this);
		}
	}
	// @Override
	public exitRule(listener: VListener): void {
		if (listener.exitStatement) {
			listener.exitStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VVisitor<Result>): Result {
		if (visitor.visitStatement) {
			return visitor.visitStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SimpleStmtContext extends ParserRuleContext {
	public expressionStmt(): ExpressionStmtContext | undefined {
		return this.tryGetRuleContext(0, ExpressionStmtContext);
	}
	public incDecStmt(): IncDecStmtContext | undefined {
		return this.tryGetRuleContext(0, IncDecStmtContext);
	}
	public assignment(): AssignmentContext | undefined {
		return this.tryGetRuleContext(0, AssignmentContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VParser.RULE_simpleStmt; }
	// @Override
	public enterRule(listener: VListener): void {
		if (listener.enterSimpleStmt) {
			listener.enterSimpleStmt(this);
		}
	}
	// @Override
	public exitRule(listener: VListener): void {
		if (listener.exitSimpleStmt) {
			listener.exitSimpleStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VVisitor<Result>): Result {
		if (visitor.visitSimpleStmt) {
			return visitor.visitSimpleStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionStmtContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VParser.RULE_expressionStmt; }
	// @Override
	public enterRule(listener: VListener): void {
		if (listener.enterExpressionStmt) {
			listener.enterExpressionStmt(this);
		}
	}
	// @Override
	public exitRule(listener: VListener): void {
		if (listener.exitExpressionStmt) {
			listener.exitExpressionStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VVisitor<Result>): Result {
		if (visitor.visitExpressionStmt) {
			return visitor.visitExpressionStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IncDecStmtContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VParser.RULE_incDecStmt; }
	// @Override
	public enterRule(listener: VListener): void {
		if (listener.enterIncDecStmt) {
			listener.enterIncDecStmt(this);
		}
	}
	// @Override
	public exitRule(listener: VListener): void {
		if (listener.exitIncDecStmt) {
			listener.exitIncDecStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VVisitor<Result>): Result {
		if (visitor.visitIncDecStmt) {
			return visitor.visitIncDecStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssignmentContext extends ParserRuleContext {
	public expressionList(): ExpressionListContext[];
	public expressionList(i: number): ExpressionListContext;
	public expressionList(i?: number): ExpressionListContext | ExpressionListContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionListContext);
		} else {
			return this.getRuleContext(i, ExpressionListContext);
		}
	}
	public assign_op(): Assign_opContext {
		return this.getRuleContext(0, Assign_opContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VParser.RULE_assignment; }
	// @Override
	public enterRule(listener: VListener): void {
		if (listener.enterAssignment) {
			listener.enterAssignment(this);
		}
	}
	// @Override
	public exitRule(listener: VListener): void {
		if (listener.exitAssignment) {
			listener.exitAssignment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VVisitor<Result>): Result {
		if (visitor.visitAssignment) {
			return visitor.visitAssignment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Assign_opContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VParser.RULE_assign_op; }
	// @Override
	public enterRule(listener: VListener): void {
		if (listener.enterAssign_op) {
			listener.enterAssign_op(this);
		}
	}
	// @Override
	public exitRule(listener: VListener): void {
		if (listener.exitAssign_op) {
			listener.exitAssign_op(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VVisitor<Result>): Result {
		if (visitor.visitAssign_op) {
			return visitor.visitAssign_op(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ReturnStmtContext extends ParserRuleContext {
	public expressionList(): ExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ExpressionListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VParser.RULE_returnStmt; }
	// @Override
	public enterRule(listener: VListener): void {
		if (listener.enterReturnStmt) {
			listener.enterReturnStmt(this);
		}
	}
	// @Override
	public exitRule(listener: VListener): void {
		if (listener.exitReturnStmt) {
			listener.exitReturnStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VVisitor<Result>): Result {
		if (visitor.visitReturnStmt) {
			return visitor.visitReturnStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BreakStmtContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VParser.RULE_breakStmt; }
	// @Override
	public enterRule(listener: VListener): void {
		if (listener.enterBreakStmt) {
			listener.enterBreakStmt(this);
		}
	}
	// @Override
	public exitRule(listener: VListener): void {
		if (listener.exitBreakStmt) {
			listener.exitBreakStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VVisitor<Result>): Result {
		if (visitor.visitBreakStmt) {
			return visitor.visitBreakStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ContinueStmtContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VParser.RULE_continueStmt; }
	// @Override
	public enterRule(listener: VListener): void {
		if (listener.enterContinueStmt) {
			listener.enterContinueStmt(this);
		}
	}
	// @Override
	public exitRule(listener: VListener): void {
		if (listener.exitContinueStmt) {
			listener.exitContinueStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VVisitor<Result>): Result {
		if (visitor.visitContinueStmt) {
			return visitor.visitContinueStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IfStmtContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public block(): BlockContext[];
	public block(i: number): BlockContext;
	public block(i?: number): BlockContext | BlockContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BlockContext);
		} else {
			return this.getRuleContext(i, BlockContext);
		}
	}
	public simpleStmt(): SimpleStmtContext | undefined {
		return this.tryGetRuleContext(0, SimpleStmtContext);
	}
	public ifStmt(): IfStmtContext | undefined {
		return this.tryGetRuleContext(0, IfStmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VParser.RULE_ifStmt; }
	// @Override
	public enterRule(listener: VListener): void {
		if (listener.enterIfStmt) {
			listener.enterIfStmt(this);
		}
	}
	// @Override
	public exitRule(listener: VListener): void {
		if (listener.exitIfStmt) {
			listener.exitIfStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VVisitor<Result>): Result {
		if (visitor.visitIfStmt) {
			return visitor.visitIfStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SwitchStmtContext extends ParserRuleContext {
	public exprSwitchStmt(): ExprSwitchStmtContext {
		return this.getRuleContext(0, ExprSwitchStmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VParser.RULE_switchStmt; }
	// @Override
	public enterRule(listener: VListener): void {
		if (listener.enterSwitchStmt) {
			listener.enterSwitchStmt(this);
		}
	}
	// @Override
	public exitRule(listener: VListener): void {
		if (listener.exitSwitchStmt) {
			listener.exitSwitchStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VVisitor<Result>): Result {
		if (visitor.visitSwitchStmt) {
			return visitor.visitSwitchStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExprSwitchStmtContext extends ParserRuleContext {
	public simpleStmt(): SimpleStmtContext | undefined {
		return this.tryGetRuleContext(0, SimpleStmtContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public exprCaseClause(): ExprCaseClauseContext[];
	public exprCaseClause(i: number): ExprCaseClauseContext;
	public exprCaseClause(i?: number): ExprCaseClauseContext | ExprCaseClauseContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprCaseClauseContext);
		} else {
			return this.getRuleContext(i, ExprCaseClauseContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VParser.RULE_exprSwitchStmt; }
	// @Override
	public enterRule(listener: VListener): void {
		if (listener.enterExprSwitchStmt) {
			listener.enterExprSwitchStmt(this);
		}
	}
	// @Override
	public exitRule(listener: VListener): void {
		if (listener.exitExprSwitchStmt) {
			listener.exitExprSwitchStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VVisitor<Result>): Result {
		if (visitor.visitExprSwitchStmt) {
			return visitor.visitExprSwitchStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExprCaseClauseContext extends ParserRuleContext {
	public exprSwitchCase(): ExprSwitchCaseContext {
		return this.getRuleContext(0, ExprSwitchCaseContext);
	}
	public statementList(): StatementListContext {
		return this.getRuleContext(0, StatementListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VParser.RULE_exprCaseClause; }
	// @Override
	public enterRule(listener: VListener): void {
		if (listener.enterExprCaseClause) {
			listener.enterExprCaseClause(this);
		}
	}
	// @Override
	public exitRule(listener: VListener): void {
		if (listener.exitExprCaseClause) {
			listener.exitExprCaseClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VVisitor<Result>): Result {
		if (visitor.visitExprCaseClause) {
			return visitor.visitExprCaseClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExprSwitchCaseContext extends ParserRuleContext {
	public expressionList(): ExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ExpressionListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VParser.RULE_exprSwitchCase; }
	// @Override
	public enterRule(listener: VListener): void {
		if (listener.enterExprSwitchCase) {
			listener.enterExprSwitchCase(this);
		}
	}
	// @Override
	public exitRule(listener: VListener): void {
		if (listener.exitExprSwitchCase) {
			listener.exitExprSwitchCase(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VVisitor<Result>): Result {
		if (visitor.visitExprSwitchCase) {
			return visitor.visitExprSwitchCase(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ForStmtContext extends ParserRuleContext {
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public forClause(): ForClauseContext | undefined {
		return this.tryGetRuleContext(0, ForClauseContext);
	}
	public inClause(): InClauseContext | undefined {
		return this.tryGetRuleContext(0, InClauseContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VParser.RULE_forStmt; }
	// @Override
	public enterRule(listener: VListener): void {
		if (listener.enterForStmt) {
			listener.enterForStmt(this);
		}
	}
	// @Override
	public exitRule(listener: VListener): void {
		if (listener.exitForStmt) {
			listener.exitForStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VVisitor<Result>): Result {
		if (visitor.visitForStmt) {
			return visitor.visitForStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ForClauseContext extends ParserRuleContext {
	public simpleStmt(): SimpleStmtContext[];
	public simpleStmt(i: number): SimpleStmtContext;
	public simpleStmt(i?: number): SimpleStmtContext | SimpleStmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SimpleStmtContext);
		} else {
			return this.getRuleContext(i, SimpleStmtContext);
		}
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VParser.RULE_forClause; }
	// @Override
	public enterRule(listener: VListener): void {
		if (listener.enterForClause) {
			listener.enterForClause(this);
		}
	}
	// @Override
	public exitRule(listener: VListener): void {
		if (listener.exitForClause) {
			listener.exitForClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VVisitor<Result>): Result {
		if (visitor.visitForClause) {
			return visitor.visitForClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InClauseContext extends ParserRuleContext {
	public expressionList(): ExpressionListContext {
		return this.getRuleContext(0, ExpressionListContext);
	}
	public IDENTIFIER(): TerminalNode { return this.getToken(VParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VParser.RULE_inClause; }
	// @Override
	public enterRule(listener: VListener): void {
		if (listener.enterInClause) {
			listener.enterInClause(this);
		}
	}
	// @Override
	public exitRule(listener: VListener): void {
		if (listener.exitInClause) {
			listener.exitInClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VVisitor<Result>): Result {
		if (visitor.visitInClause) {
			return visitor.visitInClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeContext extends ParserRuleContext {
	public typeName(): TypeNameContext | undefined {
		return this.tryGetRuleContext(0, TypeNameContext);
	}
	public typeLit(): TypeLitContext | undefined {
		return this.tryGetRuleContext(0, TypeLitContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VParser.RULE_type; }
	// @Override
	public enterRule(listener: VListener): void {
		if (listener.enterType) {
			listener.enterType(this);
		}
	}
	// @Override
	public exitRule(listener: VListener): void {
		if (listener.exitType) {
			listener.exitType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VVisitor<Result>): Result {
		if (visitor.visitType) {
			return visitor.visitType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeNameContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(VParser.IDENTIFIER, 0); }
	public qualifiedIdent(): QualifiedIdentContext | undefined {
		return this.tryGetRuleContext(0, QualifiedIdentContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VParser.RULE_typeName; }
	// @Override
	public enterRule(listener: VListener): void {
		if (listener.enterTypeName) {
			listener.enterTypeName(this);
		}
	}
	// @Override
	public exitRule(listener: VListener): void {
		if (listener.exitTypeName) {
			listener.exitTypeName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VVisitor<Result>): Result {
		if (visitor.visitTypeName) {
			return visitor.visitTypeName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeLitContext extends ParserRuleContext {
	public arrayType(): ArrayTypeContext | undefined {
		return this.tryGetRuleContext(0, ArrayTypeContext);
	}
	public functionType(): FunctionTypeContext | undefined {
		return this.tryGetRuleContext(0, FunctionTypeContext);
	}
	public interfaceType(): InterfaceTypeContext | undefined {
		return this.tryGetRuleContext(0, InterfaceTypeContext);
	}
	public mapType(): MapTypeContext | undefined {
		return this.tryGetRuleContext(0, MapTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VParser.RULE_typeLit; }
	// @Override
	public enterRule(listener: VListener): void {
		if (listener.enterTypeLit) {
			listener.enterTypeLit(this);
		}
	}
	// @Override
	public exitRule(listener: VListener): void {
		if (listener.exitTypeLit) {
			listener.exitTypeLit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VVisitor<Result>): Result {
		if (visitor.visitTypeLit) {
			return visitor.visitTypeLit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArrayTypeContext extends ParserRuleContext {
	public elementType(): ElementTypeContext {
		return this.getRuleContext(0, ElementTypeContext);
	}
	public arrayLength(): ArrayLengthContext | undefined {
		return this.tryGetRuleContext(0, ArrayLengthContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VParser.RULE_arrayType; }
	// @Override
	public enterRule(listener: VListener): void {
		if (listener.enterArrayType) {
			listener.enterArrayType(this);
		}
	}
	// @Override
	public exitRule(listener: VListener): void {
		if (listener.exitArrayType) {
			listener.exitArrayType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VVisitor<Result>): Result {
		if (visitor.visitArrayType) {
			return visitor.visitArrayType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArrayLengthContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VParser.RULE_arrayLength; }
	// @Override
	public enterRule(listener: VListener): void {
		if (listener.enterArrayLength) {
			listener.enterArrayLength(this);
		}
	}
	// @Override
	public exitRule(listener: VListener): void {
		if (listener.exitArrayLength) {
			listener.exitArrayLength(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VVisitor<Result>): Result {
		if (visitor.visitArrayLength) {
			return visitor.visitArrayLength(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElementTypeContext extends ParserRuleContext {
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VParser.RULE_elementType; }
	// @Override
	public enterRule(listener: VListener): void {
		if (listener.enterElementType) {
			listener.enterElementType(this);
		}
	}
	// @Override
	public exitRule(listener: VListener): void {
		if (listener.exitElementType) {
			listener.exitElementType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VVisitor<Result>): Result {
		if (visitor.visitElementType) {
			return visitor.visitElementType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InterfaceTypeContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(VParser.IDENTIFIER, 0); }
	public methodSpec(): MethodSpecContext[];
	public methodSpec(i: number): MethodSpecContext;
	public methodSpec(i?: number): MethodSpecContext | MethodSpecContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MethodSpecContext);
		} else {
			return this.getRuleContext(i, MethodSpecContext);
		}
	}
	public eos(): EosContext[];
	public eos(i: number): EosContext;
	public eos(i?: number): EosContext | EosContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EosContext);
		} else {
			return this.getRuleContext(i, EosContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VParser.RULE_interfaceType; }
	// @Override
	public enterRule(listener: VListener): void {
		if (listener.enterInterfaceType) {
			listener.enterInterfaceType(this);
		}
	}
	// @Override
	public exitRule(listener: VListener): void {
		if (listener.exitInterfaceType) {
			listener.exitInterfaceType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VVisitor<Result>): Result {
		if (visitor.visitInterfaceType) {
			return visitor.visitInterfaceType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MapTypeContext extends ParserRuleContext {
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public elementType(): ElementTypeContext {
		return this.getRuleContext(0, ElementTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VParser.RULE_mapType; }
	// @Override
	public enterRule(listener: VListener): void {
		if (listener.enterMapType) {
			listener.enterMapType(this);
		}
	}
	// @Override
	public exitRule(listener: VListener): void {
		if (listener.exitMapType) {
			listener.exitMapType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VVisitor<Result>): Result {
		if (visitor.visitMapType) {
			return visitor.visitMapType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MethodSpecContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(VParser.IDENTIFIER, 0); }
	public parameters(): ParametersContext | undefined {
		return this.tryGetRuleContext(0, ParametersContext);
	}
	public result(): ResultContext | undefined {
		return this.tryGetRuleContext(0, ResultContext);
	}
	public typeName(): TypeNameContext | undefined {
		return this.tryGetRuleContext(0, TypeNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VParser.RULE_methodSpec; }
	// @Override
	public enterRule(listener: VListener): void {
		if (listener.enterMethodSpec) {
			listener.enterMethodSpec(this);
		}
	}
	// @Override
	public exitRule(listener: VListener): void {
		if (listener.exitMethodSpec) {
			listener.exitMethodSpec(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VVisitor<Result>): Result {
		if (visitor.visitMethodSpec) {
			return visitor.visitMethodSpec(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionTypeContext extends ParserRuleContext {
	public signature(): SignatureContext {
		return this.getRuleContext(0, SignatureContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VParser.RULE_functionType; }
	// @Override
	public enterRule(listener: VListener): void {
		if (listener.enterFunctionType) {
			listener.enterFunctionType(this);
		}
	}
	// @Override
	public exitRule(listener: VListener): void {
		if (listener.exitFunctionType) {
			listener.exitFunctionType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VVisitor<Result>): Result {
		if (visitor.visitFunctionType) {
			return visitor.visitFunctionType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SignatureContext extends ParserRuleContext {
	public parameters(): ParametersContext {
		return this.getRuleContext(0, ParametersContext);
	}
	public result(): ResultContext | undefined {
		return this.tryGetRuleContext(0, ResultContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VParser.RULE_signature; }
	// @Override
	public enterRule(listener: VListener): void {
		if (listener.enterSignature) {
			listener.enterSignature(this);
		}
	}
	// @Override
	public exitRule(listener: VListener): void {
		if (listener.exitSignature) {
			listener.exitSignature(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VVisitor<Result>): Result {
		if (visitor.visitSignature) {
			return visitor.visitSignature(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ResultContext extends ParserRuleContext {
	public parameters(): ParametersContext | undefined {
		return this.tryGetRuleContext(0, ParametersContext);
	}
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VParser.RULE_result; }
	// @Override
	public enterRule(listener: VListener): void {
		if (listener.enterResult) {
			listener.enterResult(this);
		}
	}
	// @Override
	public exitRule(listener: VListener): void {
		if (listener.exitResult) {
			listener.exitResult(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VVisitor<Result>): Result {
		if (visitor.visitResult) {
			return visitor.visitResult(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParametersContext extends ParserRuleContext {
	public parameterList(): ParameterListContext | undefined {
		return this.tryGetRuleContext(0, ParameterListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VParser.RULE_parameters; }
	// @Override
	public enterRule(listener: VListener): void {
		if (listener.enterParameters) {
			listener.enterParameters(this);
		}
	}
	// @Override
	public exitRule(listener: VListener): void {
		if (listener.exitParameters) {
			listener.exitParameters(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VVisitor<Result>): Result {
		if (visitor.visitParameters) {
			return visitor.visitParameters(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParameterListContext extends ParserRuleContext {
	public parameterDecl(): ParameterDeclContext[];
	public parameterDecl(i: number): ParameterDeclContext;
	public parameterDecl(i?: number): ParameterDeclContext | ParameterDeclContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ParameterDeclContext);
		} else {
			return this.getRuleContext(i, ParameterDeclContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VParser.RULE_parameterList; }
	// @Override
	public enterRule(listener: VListener): void {
		if (listener.enterParameterList) {
			listener.enterParameterList(this);
		}
	}
	// @Override
	public exitRule(listener: VListener): void {
		if (listener.exitParameterList) {
			listener.exitParameterList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VVisitor<Result>): Result {
		if (visitor.visitParameterList) {
			return visitor.visitParameterList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParameterDeclContext extends ParserRuleContext {
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public identifierList(): IdentifierListContext | undefined {
		return this.tryGetRuleContext(0, IdentifierListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VParser.RULE_parameterDecl; }
	// @Override
	public enterRule(listener: VListener): void {
		if (listener.enterParameterDecl) {
			listener.enterParameterDecl(this);
		}
	}
	// @Override
	public exitRule(listener: VListener): void {
		if (listener.exitParameterDecl) {
			listener.exitParameterDecl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VVisitor<Result>): Result {
		if (visitor.visitParameterDecl) {
			return visitor.visitParameterDecl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OperandContext extends ParserRuleContext {
	public literal(): LiteralContext | undefined {
		return this.tryGetRuleContext(0, LiteralContext);
	}
	public operandName(): OperandNameContext | undefined {
		return this.tryGetRuleContext(0, OperandNameContext);
	}
	public methodExpr(): MethodExprContext | undefined {
		return this.tryGetRuleContext(0, MethodExprContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VParser.RULE_operand; }
	// @Override
	public enterRule(listener: VListener): void {
		if (listener.enterOperand) {
			listener.enterOperand(this);
		}
	}
	// @Override
	public exitRule(listener: VListener): void {
		if (listener.exitOperand) {
			listener.exitOperand(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VVisitor<Result>): Result {
		if (visitor.visitOperand) {
			return visitor.visitOperand(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LiteralContext extends ParserRuleContext {
	public basicLit(): BasicLitContext | undefined {
		return this.tryGetRuleContext(0, BasicLitContext);
	}
	public compositeLit(): CompositeLitContext | undefined {
		return this.tryGetRuleContext(0, CompositeLitContext);
	}
	public functionLit(): FunctionLitContext | undefined {
		return this.tryGetRuleContext(0, FunctionLitContext);
	}
	public arrayLit(): ArrayLitContext | undefined {
		return this.tryGetRuleContext(0, ArrayLitContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VParser.RULE_literal; }
	// @Override
	public enterRule(listener: VListener): void {
		if (listener.enterLiteral) {
			listener.enterLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: VListener): void {
		if (listener.exitLiteral) {
			listener.exitLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VVisitor<Result>): Result {
		if (visitor.visitLiteral) {
			return visitor.visitLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArrayLitContext extends ParserRuleContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VParser.RULE_arrayLit; }
	// @Override
	public enterRule(listener: VListener): void {
		if (listener.enterArrayLit) {
			listener.enterArrayLit(this);
		}
	}
	// @Override
	public exitRule(listener: VListener): void {
		if (listener.exitArrayLit) {
			listener.exitArrayLit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VVisitor<Result>): Result {
		if (visitor.visitArrayLit) {
			return visitor.visitArrayLit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BasicLitContext extends ParserRuleContext {
	public INT_LIT(): TerminalNode | undefined { return this.tryGetToken(VParser.INT_LIT, 0); }
	public FLOAT_LIT(): TerminalNode | undefined { return this.tryGetToken(VParser.FLOAT_LIT, 0); }
	public RUNE_LIT(): TerminalNode | undefined { return this.tryGetToken(VParser.RUNE_LIT, 0); }
	public STRING_LIT(): TerminalNode | undefined { return this.tryGetToken(VParser.STRING_LIT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VParser.RULE_basicLit; }
	// @Override
	public enterRule(listener: VListener): void {
		if (listener.enterBasicLit) {
			listener.enterBasicLit(this);
		}
	}
	// @Override
	public exitRule(listener: VListener): void {
		if (listener.exitBasicLit) {
			listener.exitBasicLit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VVisitor<Result>): Result {
		if (visitor.visitBasicLit) {
			return visitor.visitBasicLit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OperandNameContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(VParser.IDENTIFIER, 0); }
	public qualifiedIdent(): QualifiedIdentContext | undefined {
		return this.tryGetRuleContext(0, QualifiedIdentContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VParser.RULE_operandName; }
	// @Override
	public enterRule(listener: VListener): void {
		if (listener.enterOperandName) {
			listener.enterOperandName(this);
		}
	}
	// @Override
	public exitRule(listener: VListener): void {
		if (listener.exitOperandName) {
			listener.exitOperandName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VVisitor<Result>): Result {
		if (visitor.visitOperandName) {
			return visitor.visitOperandName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QualifiedIdentContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VParser.IDENTIFIER);
		} else {
			return this.getToken(VParser.IDENTIFIER, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VParser.RULE_qualifiedIdent; }
	// @Override
	public enterRule(listener: VListener): void {
		if (listener.enterQualifiedIdent) {
			listener.enterQualifiedIdent(this);
		}
	}
	// @Override
	public exitRule(listener: VListener): void {
		if (listener.exitQualifiedIdent) {
			listener.exitQualifiedIdent(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VVisitor<Result>): Result {
		if (visitor.visitQualifiedIdent) {
			return visitor.visitQualifiedIdent(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CompositeLitContext extends ParserRuleContext {
	public literalType(): LiteralTypeContext {
		return this.getRuleContext(0, LiteralTypeContext);
	}
	public literalValue(): LiteralValueContext {
		return this.getRuleContext(0, LiteralValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VParser.RULE_compositeLit; }
	// @Override
	public enterRule(listener: VListener): void {
		if (listener.enterCompositeLit) {
			listener.enterCompositeLit(this);
		}
	}
	// @Override
	public exitRule(listener: VListener): void {
		if (listener.exitCompositeLit) {
			listener.exitCompositeLit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VVisitor<Result>): Result {
		if (visitor.visitCompositeLit) {
			return visitor.visitCompositeLit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LiteralTypeContext extends ParserRuleContext {
	public arrayType(): ArrayTypeContext | undefined {
		return this.tryGetRuleContext(0, ArrayTypeContext);
	}
	public mapType(): MapTypeContext | undefined {
		return this.tryGetRuleContext(0, MapTypeContext);
	}
	public typeName(): TypeNameContext | undefined {
		return this.tryGetRuleContext(0, TypeNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VParser.RULE_literalType; }
	// @Override
	public enterRule(listener: VListener): void {
		if (listener.enterLiteralType) {
			listener.enterLiteralType(this);
		}
	}
	// @Override
	public exitRule(listener: VListener): void {
		if (listener.exitLiteralType) {
			listener.exitLiteralType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VVisitor<Result>): Result {
		if (visitor.visitLiteralType) {
			return visitor.visitLiteralType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LiteralValueContext extends ParserRuleContext {
	public elementList(): ElementListContext | undefined {
		return this.tryGetRuleContext(0, ElementListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VParser.RULE_literalValue; }
	// @Override
	public enterRule(listener: VListener): void {
		if (listener.enterLiteralValue) {
			listener.enterLiteralValue(this);
		}
	}
	// @Override
	public exitRule(listener: VListener): void {
		if (listener.exitLiteralValue) {
			listener.exitLiteralValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VVisitor<Result>): Result {
		if (visitor.visitLiteralValue) {
			return visitor.visitLiteralValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElementListContext extends ParserRuleContext {
	public keyedElement(): KeyedElementContext[];
	public keyedElement(i: number): KeyedElementContext;
	public keyedElement(i?: number): KeyedElementContext | KeyedElementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(KeyedElementContext);
		} else {
			return this.getRuleContext(i, KeyedElementContext);
		}
	}
	public eos(): EosContext[];
	public eos(i: number): EosContext;
	public eos(i?: number): EosContext | EosContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EosContext);
		} else {
			return this.getRuleContext(i, EosContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VParser.RULE_elementList; }
	// @Override
	public enterRule(listener: VListener): void {
		if (listener.enterElementList) {
			listener.enterElementList(this);
		}
	}
	// @Override
	public exitRule(listener: VListener): void {
		if (listener.exitElementList) {
			listener.exitElementList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VVisitor<Result>): Result {
		if (visitor.visitElementList) {
			return visitor.visitElementList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class KeyedElementContext extends ParserRuleContext {
	public element(): ElementContext {
		return this.getRuleContext(0, ElementContext);
	}
	public key(): KeyContext | undefined {
		return this.tryGetRuleContext(0, KeyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VParser.RULE_keyedElement; }
	// @Override
	public enterRule(listener: VListener): void {
		if (listener.enterKeyedElement) {
			listener.enterKeyedElement(this);
		}
	}
	// @Override
	public exitRule(listener: VListener): void {
		if (listener.exitKeyedElement) {
			listener.exitKeyedElement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VVisitor<Result>): Result {
		if (visitor.visitKeyedElement) {
			return visitor.visitKeyedElement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class KeyContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(VParser.IDENTIFIER, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public literalValue(): LiteralValueContext | undefined {
		return this.tryGetRuleContext(0, LiteralValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VParser.RULE_key; }
	// @Override
	public enterRule(listener: VListener): void {
		if (listener.enterKey) {
			listener.enterKey(this);
		}
	}
	// @Override
	public exitRule(listener: VListener): void {
		if (listener.exitKey) {
			listener.exitKey(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VVisitor<Result>): Result {
		if (visitor.visitKey) {
			return visitor.visitKey(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElementContext extends ParserRuleContext {
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public literalValue(): LiteralValueContext | undefined {
		return this.tryGetRuleContext(0, LiteralValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VParser.RULE_element; }
	// @Override
	public enterRule(listener: VListener): void {
		if (listener.enterElement) {
			listener.enterElement(this);
		}
	}
	// @Override
	public exitRule(listener: VListener): void {
		if (listener.exitElement) {
			listener.exitElement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VVisitor<Result>): Result {
		if (visitor.visitElement) {
			return visitor.visitElement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StructDeclContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(VParser.IDENTIFIER, 0); }
	public fieldDecl(): FieldDeclContext[];
	public fieldDecl(i: number): FieldDeclContext;
	public fieldDecl(i?: number): FieldDeclContext | FieldDeclContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FieldDeclContext);
		} else {
			return this.getRuleContext(i, FieldDeclContext);
		}
	}
	public eos(): EosContext[];
	public eos(i: number): EosContext;
	public eos(i?: number): EosContext | EosContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EosContext);
		} else {
			return this.getRuleContext(i, EosContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VParser.RULE_structDecl; }
	// @Override
	public enterRule(listener: VListener): void {
		if (listener.enterStructDecl) {
			listener.enterStructDecl(this);
		}
	}
	// @Override
	public exitRule(listener: VListener): void {
		if (listener.exitStructDecl) {
			listener.exitStructDecl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VVisitor<Result>): Result {
		if (visitor.visitStructDecl) {
			return visitor.visitStructDecl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FieldDeclContext extends ParserRuleContext {
	public identifierList(): IdentifierListContext | undefined {
		return this.tryGetRuleContext(0, IdentifierListContext);
	}
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	public anonymousField(): AnonymousFieldContext | undefined {
		return this.tryGetRuleContext(0, AnonymousFieldContext);
	}
	public STRING_LIT(): TerminalNode | undefined { return this.tryGetToken(VParser.STRING_LIT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VParser.RULE_fieldDecl; }
	// @Override
	public enterRule(listener: VListener): void {
		if (listener.enterFieldDecl) {
			listener.enterFieldDecl(this);
		}
	}
	// @Override
	public exitRule(listener: VListener): void {
		if (listener.exitFieldDecl) {
			listener.exitFieldDecl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VVisitor<Result>): Result {
		if (visitor.visitFieldDecl) {
			return visitor.visitFieldDecl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AnonymousFieldContext extends ParserRuleContext {
	public typeName(): TypeNameContext {
		return this.getRuleContext(0, TypeNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VParser.RULE_anonymousField; }
	// @Override
	public enterRule(listener: VListener): void {
		if (listener.enterAnonymousField) {
			listener.enterAnonymousField(this);
		}
	}
	// @Override
	public exitRule(listener: VListener): void {
		if (listener.exitAnonymousField) {
			listener.exitAnonymousField(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VVisitor<Result>): Result {
		if (visitor.visitAnonymousField) {
			return visitor.visitAnonymousField(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionLitContext extends ParserRuleContext {
	public function(): FunctionContext {
		return this.getRuleContext(0, FunctionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VParser.RULE_functionLit; }
	// @Override
	public enterRule(listener: VListener): void {
		if (listener.enterFunctionLit) {
			listener.enterFunctionLit(this);
		}
	}
	// @Override
	public exitRule(listener: VListener): void {
		if (listener.exitFunctionLit) {
			listener.exitFunctionLit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VVisitor<Result>): Result {
		if (visitor.visitFunctionLit) {
			return visitor.visitFunctionLit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrimaryExprContext extends ParserRuleContext {
	public operand(): OperandContext | undefined {
		return this.tryGetRuleContext(0, OperandContext);
	}
	public conversion(): ConversionContext | undefined {
		return this.tryGetRuleContext(0, ConversionContext);
	}
	public primaryExpr(): PrimaryExprContext | undefined {
		return this.tryGetRuleContext(0, PrimaryExprContext);
	}
	public selector(): SelectorContext | undefined {
		return this.tryGetRuleContext(0, SelectorContext);
	}
	public index(): IndexContext | undefined {
		return this.tryGetRuleContext(0, IndexContext);
	}
	public arguments(): ArgumentsContext | undefined {
		return this.tryGetRuleContext(0, ArgumentsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VParser.RULE_primaryExpr; }
	// @Override
	public enterRule(listener: VListener): void {
		if (listener.enterPrimaryExpr) {
			listener.enterPrimaryExpr(this);
		}
	}
	// @Override
	public exitRule(listener: VListener): void {
		if (listener.exitPrimaryExpr) {
			listener.exitPrimaryExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VVisitor<Result>): Result {
		if (visitor.visitPrimaryExpr) {
			return visitor.visitPrimaryExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SelectorContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(VParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VParser.RULE_selector; }
	// @Override
	public enterRule(listener: VListener): void {
		if (listener.enterSelector) {
			listener.enterSelector(this);
		}
	}
	// @Override
	public exitRule(listener: VListener): void {
		if (listener.exitSelector) {
			listener.exitSelector(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VVisitor<Result>): Result {
		if (visitor.visitSelector) {
			return visitor.visitSelector(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IndexContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VParser.RULE_index; }
	// @Override
	public enterRule(listener: VListener): void {
		if (listener.enterIndex) {
			listener.enterIndex(this);
		}
	}
	// @Override
	public exitRule(listener: VListener): void {
		if (listener.exitIndex) {
			listener.exitIndex(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VVisitor<Result>): Result {
		if (visitor.visitIndex) {
			return visitor.visitIndex(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArgumentsContext extends ParserRuleContext {
	public expressionList(): ExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ExpressionListContext);
	}
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VParser.RULE_arguments; }
	// @Override
	public enterRule(listener: VListener): void {
		if (listener.enterArguments) {
			listener.enterArguments(this);
		}
	}
	// @Override
	public exitRule(listener: VListener): void {
		if (listener.exitArguments) {
			listener.exitArguments(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VVisitor<Result>): Result {
		if (visitor.visitArguments) {
			return visitor.visitArguments(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MethodExprContext extends ParserRuleContext {
	public receiverType(): ReceiverTypeContext {
		return this.getRuleContext(0, ReceiverTypeContext);
	}
	public IDENTIFIER(): TerminalNode { return this.getToken(VParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VParser.RULE_methodExpr; }
	// @Override
	public enterRule(listener: VListener): void {
		if (listener.enterMethodExpr) {
			listener.enterMethodExpr(this);
		}
	}
	// @Override
	public exitRule(listener: VListener): void {
		if (listener.exitMethodExpr) {
			listener.exitMethodExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VVisitor<Result>): Result {
		if (visitor.visitMethodExpr) {
			return visitor.visitMethodExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ReceiverTypeContext extends ParserRuleContext {
	public typeName(): TypeNameContext | undefined {
		return this.tryGetRuleContext(0, TypeNameContext);
	}
	public receiverType(): ReceiverTypeContext | undefined {
		return this.tryGetRuleContext(0, ReceiverTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VParser.RULE_receiverType; }
	// @Override
	public enterRule(listener: VListener): void {
		if (listener.enterReceiverType) {
			listener.enterReceiverType(this);
		}
	}
	// @Override
	public exitRule(listener: VListener): void {
		if (listener.exitReceiverType) {
			listener.exitReceiverType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VVisitor<Result>): Result {
		if (visitor.visitReceiverType) {
			return visitor.visitReceiverType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	public unaryExpr(): UnaryExprContext | undefined {
		return this.tryGetRuleContext(0, UnaryExprContext);
	}
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VParser.RULE_expression; }
	// @Override
	public enterRule(listener: VListener): void {
		if (listener.enterExpression) {
			listener.enterExpression(this);
		}
	}
	// @Override
	public exitRule(listener: VListener): void {
		if (listener.exitExpression) {
			listener.exitExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VVisitor<Result>): Result {
		if (visitor.visitExpression) {
			return visitor.visitExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnaryExprContext extends ParserRuleContext {
	public primaryExpr(): PrimaryExprContext | undefined {
		return this.tryGetRuleContext(0, PrimaryExprContext);
	}
	public unaryExpr(): UnaryExprContext | undefined {
		return this.tryGetRuleContext(0, UnaryExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VParser.RULE_unaryExpr; }
	// @Override
	public enterRule(listener: VListener): void {
		if (listener.enterUnaryExpr) {
			listener.enterUnaryExpr(this);
		}
	}
	// @Override
	public exitRule(listener: VListener): void {
		if (listener.exitUnaryExpr) {
			listener.exitUnaryExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VVisitor<Result>): Result {
		if (visitor.visitUnaryExpr) {
			return visitor.visitUnaryExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConversionContext extends ParserRuleContext {
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VParser.RULE_conversion; }
	// @Override
	public enterRule(listener: VListener): void {
		if (listener.enterConversion) {
			listener.enterConversion(this);
		}
	}
	// @Override
	public exitRule(listener: VListener): void {
		if (listener.exitConversion) {
			listener.exitConversion(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VVisitor<Result>): Result {
		if (visitor.visitConversion) {
			return visitor.visitConversion(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EosContext extends ParserRuleContext {
	public EOF(): TerminalNode | undefined { return this.tryGetToken(VParser.EOF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VParser.RULE_eos; }
	// @Override
	public enterRule(listener: VListener): void {
		if (listener.enterEos) {
			listener.enterEos(this);
		}
	}
	// @Override
	public exitRule(listener: VListener): void {
		if (listener.exitEos) {
			listener.exitEos(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VVisitor<Result>): Result {
		if (visitor.visitEos) {
			return visitor.visitEos(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


