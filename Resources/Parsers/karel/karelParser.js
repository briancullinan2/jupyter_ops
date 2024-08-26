// Generated from Resources/Parsers/karel/karel.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import karelListener from './karelListener.js';
const serializedATN = [4,1,44,86,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,1,0,1,0,5,0,23,8,0,10,0,12,0,26,
9,0,1,0,1,0,5,0,30,8,0,10,0,12,0,33,9,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,
1,2,1,2,1,2,1,2,1,2,3,2,48,8,2,1,3,1,3,5,3,52,8,3,10,3,12,3,55,9,3,1,3,1,
3,1,4,1,4,1,4,1,4,1,4,1,5,1,5,1,5,1,5,1,5,1,6,1,6,1,6,1,6,1,6,1,6,3,6,75,
8,6,1,7,1,7,1,8,1,8,1,9,4,9,82,8,9,11,9,12,9,83,1,9,0,0,10,0,2,4,6,8,10,
12,14,16,18,0,2,2,0,16,20,41,41,1,0,21,40,84,0,20,1,0,0,0,2,37,1,0,0,0,4,
47,1,0,0,0,6,49,1,0,0,0,8,58,1,0,0,0,10,63,1,0,0,0,12,68,1,0,0,0,14,76,1,
0,0,0,16,78,1,0,0,0,18,81,1,0,0,0,20,24,5,1,0,0,21,23,3,2,1,0,22,21,1,0,
0,0,23,26,1,0,0,0,24,22,1,0,0,0,24,25,1,0,0,0,25,27,1,0,0,0,26,24,1,0,0,
0,27,31,5,2,0,0,28,30,3,4,2,0,29,28,1,0,0,0,30,33,1,0,0,0,31,29,1,0,0,0,
31,32,1,0,0,0,32,34,1,0,0,0,33,31,1,0,0,0,34,35,5,3,0,0,35,36,5,4,0,0,36,
1,1,0,0,0,37,38,5,5,0,0,38,39,5,41,0,0,39,40,5,6,0,0,40,41,3,4,2,0,41,3,
1,0,0,0,42,48,3,6,3,0,43,48,3,8,4,0,44,48,3,10,5,0,45,48,3,12,6,0,46,48,
3,14,7,0,47,42,1,0,0,0,47,43,1,0,0,0,47,44,1,0,0,0,47,45,1,0,0,0,47,46,1,
0,0,0,48,5,1,0,0,0,49,53,5,7,0,0,50,52,3,4,2,0,51,50,1,0,0,0,52,55,1,0,0,
0,53,51,1,0,0,0,53,54,1,0,0,0,54,56,1,0,0,0,55,53,1,0,0,0,56,57,5,8,0,0,
57,7,1,0,0,0,58,59,5,9,0,0,59,60,3,18,9,0,60,61,5,10,0,0,61,62,3,4,2,0,62,
9,1,0,0,0,63,64,5,11,0,0,64,65,3,16,8,0,65,66,5,12,0,0,66,67,3,4,2,0,67,
11,1,0,0,0,68,69,5,13,0,0,69,70,3,16,8,0,70,71,5,14,0,0,71,74,3,4,2,0,72,
73,5,15,0,0,73,75,3,4,2,0,74,72,1,0,0,0,74,75,1,0,0,0,75,13,1,0,0,0,76,77,
7,0,0,0,77,15,1,0,0,0,78,79,7,1,0,0,79,17,1,0,0,0,80,82,5,43,0,0,81,80,1,
0,0,0,82,83,1,0,0,0,83,81,1,0,0,0,83,84,1,0,0,0,84,19,1,0,0,0,6,24,31,47,
53,74,83];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class karelParser extends antlr4.Parser {

    static grammarFileName = "karel.g4";
    static literalNames = [ null, "'BEGINNING-OF-PROGRAM'", "'BEGINNING-OF-EXECUTION'", 
                            "'END-OF-EXECUTION'", "'END-OF-PROGRAM'", "'DEFINE'", 
                            "'AS'", "'BEGIN'", "'END'", "'ITERATE'", "'TIMES'", 
                            "'WHILE'", "'DO'", "'IF'", "'THEN'", "'ELSE'", 
                            "'MOVE'", "'TURNLEFT'", "'PICKBEEPER'", "'PUTBEEPER'", 
                            "'TURNOFF'", "'FRONT-IS-CLEAR'", "'FRONT-IS-BLOCKED'", 
                            "'LEFT-IS-CLEAR'", "'LEFT-IS-BLOCKED'", "'RIGHT-IS-CLEAR'", 
                            "'RIGHT-IS-BLOCKED'", "'BACK-IS-CLEAR'", "'BACK-IS-BLOCKED'", 
                            "'NEXT-TO-A-BEEPER'", "'NOT-NEXT-TO-A-BEEPER'", 
                            "'ANY-BEEPERS-IN-BEEPER-BAG'", "'NO-BEEPERS-IN-BEEPER-BAG'", 
                            "'FACING-NORTH'", "'NOT-FACING-NORTH'", "'FACING-SOUTH'", 
                            "'NOT-FACING-SOUTH'", "'FACING-EAST'", "'NOT-FACING-EAST'", 
                            "'FACING-WEST'", "'NOT-FACING-WEST'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, "IDENTIFIER", "LETTER", "DIGIT", "WS" ];
    static ruleNames = [ "karel", "definition", "statement", "block", "iteration", 
                         "loop", "conditional", "instruction", "condition", 
                         "number" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = karelParser.ruleNames;
        this.literalNames = karelParser.literalNames;
        this.symbolicNames = karelParser.symbolicNames;
    }

    get atn() {
        return atn;
    }



	karel() {
	    let localctx = new KarelContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, karelParser.RULE_karel);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 20;
	        this.match(karelParser.T__0);
	        this.state = 24;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===karelParser.T__4) {
	            this.state = 21;
	            this.definition();
	            this.state = 26;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 27;
	        this.match(karelParser.T__1);
	        this.state = 31;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << karelParser.T__6) | (1 << karelParser.T__8) | (1 << karelParser.T__10) | (1 << karelParser.T__12) | (1 << karelParser.T__15) | (1 << karelParser.T__16) | (1 << karelParser.T__17) | (1 << karelParser.T__18) | (1 << karelParser.T__19))) !== 0) || _la===karelParser.IDENTIFIER) {
	            this.state = 28;
	            this.statement();
	            this.state = 33;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 34;
	        this.match(karelParser.T__2);
	        this.state = 35;
	        this.match(karelParser.T__3);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	definition() {
	    let localctx = new DefinitionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, karelParser.RULE_definition);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 37;
	        this.match(karelParser.T__4);
	        this.state = 38;
	        this.match(karelParser.IDENTIFIER);
	        this.state = 39;
	        this.match(karelParser.T__5);
	        this.state = 40;
	        this.statement();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	statement() {
	    let localctx = new StatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, karelParser.RULE_statement);
	    try {
	        this.state = 47;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case karelParser.T__6:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 42;
	            this.block();
	            break;
	        case karelParser.T__8:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 43;
	            this.iteration();
	            break;
	        case karelParser.T__10:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 44;
	            this.loop();
	            break;
	        case karelParser.T__12:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 45;
	            this.conditional();
	            break;
	        case karelParser.T__15:
	        case karelParser.T__16:
	        case karelParser.T__17:
	        case karelParser.T__18:
	        case karelParser.T__19:
	        case karelParser.IDENTIFIER:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 46;
	            this.instruction();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	block() {
	    let localctx = new BlockContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, karelParser.RULE_block);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 49;
	        this.match(karelParser.T__6);
	        this.state = 53;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << karelParser.T__6) | (1 << karelParser.T__8) | (1 << karelParser.T__10) | (1 << karelParser.T__12) | (1 << karelParser.T__15) | (1 << karelParser.T__16) | (1 << karelParser.T__17) | (1 << karelParser.T__18) | (1 << karelParser.T__19))) !== 0) || _la===karelParser.IDENTIFIER) {
	            this.state = 50;
	            this.statement();
	            this.state = 55;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 56;
	        this.match(karelParser.T__7);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	iteration() {
	    let localctx = new IterationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, karelParser.RULE_iteration);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 58;
	        this.match(karelParser.T__8);
	        this.state = 59;
	        this.number();
	        this.state = 60;
	        this.match(karelParser.T__9);
	        this.state = 61;
	        this.statement();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	loop() {
	    let localctx = new LoopContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, karelParser.RULE_loop);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 63;
	        this.match(karelParser.T__10);
	        this.state = 64;
	        this.condition();
	        this.state = 65;
	        this.match(karelParser.T__11);
	        this.state = 66;
	        this.statement();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	conditional() {
	    let localctx = new ConditionalContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, karelParser.RULE_conditional);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 68;
	        this.match(karelParser.T__12);
	        this.state = 69;
	        this.condition();
	        this.state = 70;
	        this.match(karelParser.T__13);
	        this.state = 71;
	        this.statement();
	        this.state = 74;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
	        if(la_===1) {
	            this.state = 72;
	            this.match(karelParser.T__14);
	            this.state = 73;
	            this.statement();

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	instruction() {
	    let localctx = new InstructionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, karelParser.RULE_instruction);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 76;
	        _la = this._input.LA(1);
	        if(!(((((_la - 16)) & ~0x1f) == 0 && ((1 << (_la - 16)) & ((1 << (karelParser.T__15 - 16)) | (1 << (karelParser.T__16 - 16)) | (1 << (karelParser.T__17 - 16)) | (1 << (karelParser.T__18 - 16)) | (1 << (karelParser.T__19 - 16)) | (1 << (karelParser.IDENTIFIER - 16)))) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	condition() {
	    let localctx = new ConditionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, karelParser.RULE_condition);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 78;
	        _la = this._input.LA(1);
	        if(!(((((_la - 21)) & ~0x1f) == 0 && ((1 << (_la - 21)) & ((1 << (karelParser.T__20 - 21)) | (1 << (karelParser.T__21 - 21)) | (1 << (karelParser.T__22 - 21)) | (1 << (karelParser.T__23 - 21)) | (1 << (karelParser.T__24 - 21)) | (1 << (karelParser.T__25 - 21)) | (1 << (karelParser.T__26 - 21)) | (1 << (karelParser.T__27 - 21)) | (1 << (karelParser.T__28 - 21)) | (1 << (karelParser.T__29 - 21)) | (1 << (karelParser.T__30 - 21)) | (1 << (karelParser.T__31 - 21)) | (1 << (karelParser.T__32 - 21)) | (1 << (karelParser.T__33 - 21)) | (1 << (karelParser.T__34 - 21)) | (1 << (karelParser.T__35 - 21)) | (1 << (karelParser.T__36 - 21)) | (1 << (karelParser.T__37 - 21)) | (1 << (karelParser.T__38 - 21)) | (1 << (karelParser.T__39 - 21)))) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	number() {
	    let localctx = new NumberContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, karelParser.RULE_number);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 81; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 80;
	            this.match(karelParser.DIGIT);
	            this.state = 83; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===karelParser.DIGIT);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

karelParser.EOF = antlr4.Token.EOF;
karelParser.T__0 = 1;
karelParser.T__1 = 2;
karelParser.T__2 = 3;
karelParser.T__3 = 4;
karelParser.T__4 = 5;
karelParser.T__5 = 6;
karelParser.T__6 = 7;
karelParser.T__7 = 8;
karelParser.T__8 = 9;
karelParser.T__9 = 10;
karelParser.T__10 = 11;
karelParser.T__11 = 12;
karelParser.T__12 = 13;
karelParser.T__13 = 14;
karelParser.T__14 = 15;
karelParser.T__15 = 16;
karelParser.T__16 = 17;
karelParser.T__17 = 18;
karelParser.T__18 = 19;
karelParser.T__19 = 20;
karelParser.T__20 = 21;
karelParser.T__21 = 22;
karelParser.T__22 = 23;
karelParser.T__23 = 24;
karelParser.T__24 = 25;
karelParser.T__25 = 26;
karelParser.T__26 = 27;
karelParser.T__27 = 28;
karelParser.T__28 = 29;
karelParser.T__29 = 30;
karelParser.T__30 = 31;
karelParser.T__31 = 32;
karelParser.T__32 = 33;
karelParser.T__33 = 34;
karelParser.T__34 = 35;
karelParser.T__35 = 36;
karelParser.T__36 = 37;
karelParser.T__37 = 38;
karelParser.T__38 = 39;
karelParser.T__39 = 40;
karelParser.IDENTIFIER = 41;
karelParser.LETTER = 42;
karelParser.DIGIT = 43;
karelParser.WS = 44;

karelParser.RULE_karel = 0;
karelParser.RULE_definition = 1;
karelParser.RULE_statement = 2;
karelParser.RULE_block = 3;
karelParser.RULE_iteration = 4;
karelParser.RULE_loop = 5;
karelParser.RULE_conditional = 6;
karelParser.RULE_instruction = 7;
karelParser.RULE_condition = 8;
karelParser.RULE_number = 9;

class KarelContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = karelParser.RULE_karel;
    }

	definition = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(DefinitionContext);
	    } else {
	        return this.getTypedRuleContext(DefinitionContext,i);
	    }
	};

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof karelListener ) {
	        listener.enterKarel(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof karelListener ) {
	        listener.exitKarel(this);
		}
	}


}



class DefinitionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = karelParser.RULE_definition;
    }

	IDENTIFIER() {
	    return this.getToken(karelParser.IDENTIFIER, 0);
	};

	statement() {
	    return this.getTypedRuleContext(StatementContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof karelListener ) {
	        listener.enterDefinition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof karelListener ) {
	        listener.exitDefinition(this);
		}
	}


}



class StatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = karelParser.RULE_statement;
    }

	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	iteration() {
	    return this.getTypedRuleContext(IterationContext,0);
	};

	loop() {
	    return this.getTypedRuleContext(LoopContext,0);
	};

	conditional() {
	    return this.getTypedRuleContext(ConditionalContext,0);
	};

	instruction() {
	    return this.getTypedRuleContext(InstructionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof karelListener ) {
	        listener.enterStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof karelListener ) {
	        listener.exitStatement(this);
		}
	}


}



class BlockContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = karelParser.RULE_block;
    }

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof karelListener ) {
	        listener.enterBlock(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof karelListener ) {
	        listener.exitBlock(this);
		}
	}


}



class IterationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = karelParser.RULE_iteration;
    }

	number() {
	    return this.getTypedRuleContext(NumberContext,0);
	};

	statement() {
	    return this.getTypedRuleContext(StatementContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof karelListener ) {
	        listener.enterIteration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof karelListener ) {
	        listener.exitIteration(this);
		}
	}


}



class LoopContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = karelParser.RULE_loop;
    }

	condition() {
	    return this.getTypedRuleContext(ConditionContext,0);
	};

	statement() {
	    return this.getTypedRuleContext(StatementContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof karelListener ) {
	        listener.enterLoop(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof karelListener ) {
	        listener.exitLoop(this);
		}
	}


}



class ConditionalContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = karelParser.RULE_conditional;
    }

	condition() {
	    return this.getTypedRuleContext(ConditionContext,0);
	};

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof karelListener ) {
	        listener.enterConditional(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof karelListener ) {
	        listener.exitConditional(this);
		}
	}


}



class InstructionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = karelParser.RULE_instruction;
    }

	IDENTIFIER() {
	    return this.getToken(karelParser.IDENTIFIER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof karelListener ) {
	        listener.enterInstruction(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof karelListener ) {
	        listener.exitInstruction(this);
		}
	}


}



class ConditionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = karelParser.RULE_condition;
    }


	enterRule(listener) {
	    if(listener instanceof karelListener ) {
	        listener.enterCondition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof karelListener ) {
	        listener.exitCondition(this);
		}
	}


}



class NumberContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = karelParser.RULE_number;
    }

	DIGIT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(karelParser.DIGIT);
	    } else {
	        return this.getToken(karelParser.DIGIT, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof karelListener ) {
	        listener.enterNumber(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof karelListener ) {
	        listener.exitNumber(this);
		}
	}


}




karelParser.KarelContext = KarelContext; 
karelParser.DefinitionContext = DefinitionContext; 
karelParser.StatementContext = StatementContext; 
karelParser.BlockContext = BlockContext; 
karelParser.IterationContext = IterationContext; 
karelParser.LoopContext = LoopContext; 
karelParser.ConditionalContext = ConditionalContext; 
karelParser.InstructionContext = InstructionContext; 
karelParser.ConditionContext = ConditionContext; 
karelParser.NumberContext = NumberContext; 
