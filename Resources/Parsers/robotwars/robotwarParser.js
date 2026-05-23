// Generated from C:/Users/megam/jupyter_ops/Resources/Parsers/robotwars/robotwar.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import robotwarListener from './robotwarListener.js';
const serializedATN = [4,1,55,138,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,1,0,4,0,40,8,
0,11,0,12,0,41,1,0,1,0,1,1,1,1,1,1,3,1,49,8,1,1,1,1,1,1,2,1,2,1,3,1,3,1,
3,1,3,1,3,1,3,3,3,61,8,3,1,4,1,4,1,5,1,5,1,5,1,5,1,5,1,5,3,5,71,8,5,1,5,
1,5,1,6,1,6,1,6,1,7,1,7,1,7,1,8,3,8,82,8,8,1,8,1,8,4,8,86,8,8,11,8,12,8,
87,1,9,1,9,1,10,3,10,93,8,10,1,10,1,10,3,10,97,8,10,1,10,1,10,1,11,1,11,
1,11,1,11,1,12,1,12,1,12,1,12,5,12,109,8,12,10,12,12,12,112,9,12,1,12,1,
12,1,12,1,12,3,12,118,8,12,1,13,1,13,1,14,1,14,1,15,1,15,1,15,3,15,127,8,
15,1,16,1,16,1,17,3,17,132,8,17,1,17,1,17,1,18,1,18,1,18,0,0,19,0,2,4,6,
8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,0,5,2,0,49,50,54,54,1,0,10,13,
1,0,1,4,1,0,14,48,1,0,10,11,140,0,39,1,0,0,0,2,48,1,0,0,0,4,52,1,0,0,0,6,
60,1,0,0,0,8,62,1,0,0,0,10,70,1,0,0,0,12,74,1,0,0,0,14,77,1,0,0,0,16,81,
1,0,0,0,18,89,1,0,0,0,20,92,1,0,0,0,22,100,1,0,0,0,24,117,1,0,0,0,26,119,
1,0,0,0,28,121,1,0,0,0,30,126,1,0,0,0,32,128,1,0,0,0,34,131,1,0,0,0,36,135,
1,0,0,0,38,40,3,2,1,0,39,38,1,0,0,0,40,41,1,0,0,0,41,39,1,0,0,0,41,42,1,
0,0,0,42,43,1,0,0,0,43,44,5,0,0,1,44,1,1,0,0,0,45,49,3,4,2,0,46,49,3,36,
18,0,47,49,3,6,3,0,48,45,1,0,0,0,48,46,1,0,0,0,48,47,1,0,0,0,48,49,1,0,0,
0,49,50,1,0,0,0,50,51,5,54,0,0,51,3,1,0,0,0,52,53,5,51,0,0,53,5,1,0,0,0,
54,61,3,20,10,0,55,61,3,16,8,0,56,61,3,12,6,0,57,61,3,14,7,0,58,61,3,18,
9,0,59,61,3,8,4,0,60,54,1,0,0,0,60,55,1,0,0,0,60,56,1,0,0,0,60,57,1,0,0,
0,60,58,1,0,0,0,60,59,1,0,0,0,61,7,1,0,0,0,62,63,3,10,5,0,63,9,1,0,0,0,64,
71,5,1,0,0,65,71,5,2,0,0,66,67,5,3,0,0,67,71,3,24,12,0,68,69,5,4,0,0,69,
71,3,24,12,0,70,64,1,0,0,0,70,65,1,0,0,0,70,66,1,0,0,0,70,68,1,0,0,0,71,
72,1,0,0,0,72,73,3,6,3,0,73,11,1,0,0,0,74,75,5,5,0,0,75,76,3,4,2,0,76,13,
1,0,0,0,77,78,5,6,0,0,78,79,3,4,2,0,79,15,1,0,0,0,80,82,3,24,12,0,81,80,
1,0,0,0,81,82,1,0,0,0,82,85,1,0,0,0,83,84,5,7,0,0,84,86,3,32,16,0,85,83,
1,0,0,0,86,87,1,0,0,0,87,85,1,0,0,0,87,88,1,0,0,0,88,17,1,0,0,0,89,90,5,
8,0,0,90,19,1,0,0,0,91,93,5,9,0,0,92,91,1,0,0,0,92,93,1,0,0,0,93,94,1,0,
0,0,94,96,3,22,11,0,95,97,7,0,0,0,96,95,1,0,0,0,96,97,1,0,0,0,97,98,1,0,
0,0,98,99,3,6,3,0,99,21,1,0,0,0,100,101,3,24,12,0,101,102,3,28,14,0,102,
103,3,24,12,0,103,23,1,0,0,0,104,110,3,30,15,0,105,106,3,26,13,0,106,107,
3,30,15,0,107,109,1,0,0,0,108,105,1,0,0,0,109,112,1,0,0,0,110,108,1,0,0,
0,110,111,1,0,0,0,111,118,1,0,0,0,112,110,1,0,0,0,113,114,3,26,13,0,114,
115,3,30,15,0,115,118,1,0,0,0,116,118,3,30,15,0,117,104,1,0,0,0,117,113,
1,0,0,0,117,116,1,0,0,0,118,25,1,0,0,0,119,120,7,1,0,0,120,27,1,0,0,0,121,
122,7,2,0,0,122,29,1,0,0,0,123,127,3,34,17,0,124,127,3,32,16,0,125,127,5,
48,0,0,126,123,1,0,0,0,126,124,1,0,0,0,126,125,1,0,0,0,127,31,1,0,0,0,128,
129,7,3,0,0,129,33,1,0,0,0,130,132,7,4,0,0,131,130,1,0,0,0,131,132,1,0,0,
0,132,133,1,0,0,0,133,134,5,52,0,0,134,35,1,0,0,0,135,136,5,53,0,0,136,37,
1,0,0,0,12,41,48,60,70,81,87,92,96,110,117,126,131];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class robotwarParser extends antlr4.Parser {

    static grammarFileName = "robotwar.g4";
    static literalNames = [ null, "'='", "'#'", "'<'", "'>'", "'GOSUB'", 
                            "'GOTO'", "'TO'", "'ENDSUB'", "'IF'", "'+'", 
                            "'-'", "'*'", "'/'", "'A'", "'B'", "'C'", "'D'", 
                            "'E'", "'F'", "'G'", "'H'", "'I'", "'J'", "'K'", 
                            "'L'", "'M'", "'N'", "'O'", "'P'", "'Q'", "'R'", 
                            "'S'", "'T'", "'U'", "'V'", "'W'", "'X'", "'Y'", 
                            "'Z'", "'AIM'", "'SHOT'", "'RADAR'", "'DAMAGE'", 
                            "'SPEEDX'", "'SPEEDY'", "'RANDOM'", "'INDEX'", 
                            "'DATA'", "'.'", "','" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, "A", "B", 
                             "C", "D", "E", "F", "G", "H", "I", "J", "K", 
                             "L", "M", "N", "O", "P", "Q", "R", "S", "T", 
                             "U", "V", "W", "X", "Y", "Z", "AIM", "SHOT", 
                             "RADAR", "DAMAGE", "SPEEDX", "SPEEDY", "RANDOM", 
                             "INDEX", "DATA", "DOT", "COMMA", "ID", "NUMBER", 
                             "COMMENT", "EOL", "WS" ];
    static ruleNames = [ "program", "line", "label", "statement", "accumstatement", 
                         "accumexpression", "gosubstatement", "gotostatement", 
                         "tostatement", "endsubstatement", "ifstatement", 
                         "condition", "expression", "operation", "comparison", 
                         "argument", "register_", "number", "comment" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = robotwarParser.ruleNames;
        this.literalNames = robotwarParser.literalNames;
        this.symbolicNames = robotwarParser.symbolicNames;
    }



	program() {
	    let localctx = new ProgramContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, robotwarParser.RULE_program);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 39; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 38;
	            this.line();
	            this.state = 41; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 4294967294) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 7995391) !== 0));
	        this.state = 43;
	        this.match(robotwarParser.EOF);
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



	line() {
	    let localctx = new LineContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, robotwarParser.RULE_line);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 48;
	        this._errHandler.sync(this);
	        switch (this._input.LA(1)) {
	        case 51:
	        	this.state = 45;
	        	this.label();
	        	break;
	        case 53:
	        	this.state = 46;
	        	this.comment();
	        	break;
	        case 1:
	        case 2:
	        case 3:
	        case 4:
	        case 5:
	        case 6:
	        case 7:
	        case 8:
	        case 9:
	        case 10:
	        case 11:
	        case 12:
	        case 13:
	        case 14:
	        case 15:
	        case 16:
	        case 17:
	        case 18:
	        case 19:
	        case 20:
	        case 21:
	        case 22:
	        case 23:
	        case 24:
	        case 25:
	        case 26:
	        case 27:
	        case 28:
	        case 29:
	        case 30:
	        case 31:
	        case 32:
	        case 33:
	        case 34:
	        case 35:
	        case 36:
	        case 37:
	        case 38:
	        case 39:
	        case 40:
	        case 41:
	        case 42:
	        case 43:
	        case 44:
	        case 45:
	        case 46:
	        case 47:
	        case 48:
	        case 52:
	        	this.state = 47;
	        	this.statement();
	        	break;
	        case 54:
	        	break;
	        default:
	        	break;
	        }
	        this.state = 50;
	        this.match(robotwarParser.EOL);
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



	label() {
	    let localctx = new LabelContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, robotwarParser.RULE_label);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 52;
	        this.match(robotwarParser.ID);
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
	    this.enterRule(localctx, 6, robotwarParser.RULE_statement);
	    try {
	        this.state = 60;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 54;
	            this.ifstatement();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 55;
	            this.tostatement();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 56;
	            this.gosubstatement();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 57;
	            this.gotostatement();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 58;
	            this.endsubstatement();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 59;
	            this.accumstatement();
	            break;

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



	accumstatement() {
	    let localctx = new AccumstatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, robotwarParser.RULE_accumstatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 62;
	        this.accumexpression();
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



	accumexpression() {
	    let localctx = new AccumexpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, robotwarParser.RULE_accumexpression);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 70;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 1:
	            this.state = 64;
	            this.match(robotwarParser.T__0);
	            break;
	        case 2:
	            this.state = 65;
	            this.match(robotwarParser.T__1);
	            break;
	        case 3:
	            this.state = 66;
	            this.match(robotwarParser.T__2);
	            this.state = 67;
	            this.expression();
	            break;
	        case 4:
	            this.state = 68;
	            this.match(robotwarParser.T__3);
	            this.state = 69;
	            this.expression();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 72;
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



	gosubstatement() {
	    let localctx = new GosubstatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, robotwarParser.RULE_gosubstatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 74;
	        this.match(robotwarParser.T__4);
	        this.state = 75;
	        this.label();
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



	gotostatement() {
	    let localctx = new GotostatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, robotwarParser.RULE_gotostatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 77;
	        this.match(robotwarParser.T__5);
	        this.state = 78;
	        this.label();
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



	tostatement() {
	    let localctx = new TostatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, robotwarParser.RULE_tostatement);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 81;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 4294966272) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 1179647) !== 0)) {
	            this.state = 80;
	            this.expression();
	        }

	        this.state = 85; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 83;
	            this.match(robotwarParser.T__6);
	            this.state = 84;
	            this.register_();
	            this.state = 87; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===7);
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



	endsubstatement() {
	    let localctx = new EndsubstatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, robotwarParser.RULE_endsubstatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 89;
	        this.match(robotwarParser.T__7);
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



	ifstatement() {
	    let localctx = new IfstatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, robotwarParser.RULE_ifstatement);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 92;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===9) {
	            this.state = 91;
	            this.match(robotwarParser.T__8);
	        }

	        this.state = 94;
	        this.condition();
	        this.state = 96;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(((((_la - 49)) & ~0x1f) === 0 && ((1 << (_la - 49)) & 35) !== 0)) {
	            this.state = 95;
	            _la = this._input.LA(1);
	            if(!(((((_la - 49)) & ~0x1f) === 0 && ((1 << (_la - 49)) & 35) !== 0))) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	        }

	        this.state = 98;
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



	condition() {
	    let localctx = new ConditionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, robotwarParser.RULE_condition);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 100;
	        this.expression();
	        this.state = 101;
	        this.comparison();
	        this.state = 102;
	        this.expression();
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



	expression() {
	    let localctx = new ExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, robotwarParser.RULE_expression);
	    try {
	        this.state = 117;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 104;
	            this.argument();
	            this.state = 110;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,8,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 105;
	                    this.operation();
	                    this.state = 106;
	                    this.argument(); 
	                }
	                this.state = 112;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,8,this._ctx);
	            }

	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 113;
	            this.operation();
	            this.state = 114;
	            this.argument();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 116;
	            this.argument();
	            break;

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



	operation() {
	    let localctx = new OperationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, robotwarParser.RULE_operation);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 119;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 15360) !== 0))) {
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



	comparison() {
	    let localctx = new ComparisonContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, robotwarParser.RULE_comparison);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 121;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 30) !== 0))) {
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



	argument() {
	    let localctx = new ArgumentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, robotwarParser.RULE_argument);
	    try {
	        this.state = 126;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 123;
	            this.number();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 124;
	            this.register_();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 125;
	            this.match(robotwarParser.DATA);
	            break;

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



	register_() {
	    let localctx = new Register_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, robotwarParser.RULE_register_);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 128;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 4294950912) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 131071) !== 0))) {
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
	    this.enterRule(localctx, 34, robotwarParser.RULE_number);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 131;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===10 || _la===11) {
	            this.state = 130;
	            _la = this._input.LA(1);
	            if(!(_la===10 || _la===11)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	        }

	        this.state = 133;
	        this.match(robotwarParser.NUMBER);
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



	comment() {
	    let localctx = new CommentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, robotwarParser.RULE_comment);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 135;
	        this.match(robotwarParser.COMMENT);
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

robotwarParser.EOF = antlr4.Token.EOF;
robotwarParser.T__0 = 1;
robotwarParser.T__1 = 2;
robotwarParser.T__2 = 3;
robotwarParser.T__3 = 4;
robotwarParser.T__4 = 5;
robotwarParser.T__5 = 6;
robotwarParser.T__6 = 7;
robotwarParser.T__7 = 8;
robotwarParser.T__8 = 9;
robotwarParser.T__9 = 10;
robotwarParser.T__10 = 11;
robotwarParser.T__11 = 12;
robotwarParser.T__12 = 13;
robotwarParser.A = 14;
robotwarParser.B = 15;
robotwarParser.C = 16;
robotwarParser.D = 17;
robotwarParser.E = 18;
robotwarParser.F = 19;
robotwarParser.G = 20;
robotwarParser.H = 21;
robotwarParser.I = 22;
robotwarParser.J = 23;
robotwarParser.K = 24;
robotwarParser.L = 25;
robotwarParser.M = 26;
robotwarParser.N = 27;
robotwarParser.O = 28;
robotwarParser.P = 29;
robotwarParser.Q = 30;
robotwarParser.R = 31;
robotwarParser.S = 32;
robotwarParser.T = 33;
robotwarParser.U = 34;
robotwarParser.V = 35;
robotwarParser.W = 36;
robotwarParser.X = 37;
robotwarParser.Y = 38;
robotwarParser.Z = 39;
robotwarParser.AIM = 40;
robotwarParser.SHOT = 41;
robotwarParser.RADAR = 42;
robotwarParser.DAMAGE = 43;
robotwarParser.SPEEDX = 44;
robotwarParser.SPEEDY = 45;
robotwarParser.RANDOM = 46;
robotwarParser.INDEX = 47;
robotwarParser.DATA = 48;
robotwarParser.DOT = 49;
robotwarParser.COMMA = 50;
robotwarParser.ID = 51;
robotwarParser.NUMBER = 52;
robotwarParser.COMMENT = 53;
robotwarParser.EOL = 54;
robotwarParser.WS = 55;

robotwarParser.RULE_program = 0;
robotwarParser.RULE_line = 1;
robotwarParser.RULE_label = 2;
robotwarParser.RULE_statement = 3;
robotwarParser.RULE_accumstatement = 4;
robotwarParser.RULE_accumexpression = 5;
robotwarParser.RULE_gosubstatement = 6;
robotwarParser.RULE_gotostatement = 7;
robotwarParser.RULE_tostatement = 8;
robotwarParser.RULE_endsubstatement = 9;
robotwarParser.RULE_ifstatement = 10;
robotwarParser.RULE_condition = 11;
robotwarParser.RULE_expression = 12;
robotwarParser.RULE_operation = 13;
robotwarParser.RULE_comparison = 14;
robotwarParser.RULE_argument = 15;
robotwarParser.RULE_register_ = 16;
robotwarParser.RULE_number = 17;
robotwarParser.RULE_comment = 18;

class ProgramContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = robotwarParser.RULE_program;
    }

	EOF() {
	    return this.getToken(robotwarParser.EOF, 0);
	};

	line = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(LineContext);
	    } else {
	        return this.getTypedRuleContext(LineContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof robotwarListener ) {
	        listener.enterProgram(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof robotwarListener ) {
	        listener.exitProgram(this);
		}
	}


}



class LineContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = robotwarParser.RULE_line;
    }

	EOL() {
	    return this.getToken(robotwarParser.EOL, 0);
	};

	label() {
	    return this.getTypedRuleContext(LabelContext,0);
	};

	comment() {
	    return this.getTypedRuleContext(CommentContext,0);
	};

	statement() {
	    return this.getTypedRuleContext(StatementContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof robotwarListener ) {
	        listener.enterLine(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof robotwarListener ) {
	        listener.exitLine(this);
		}
	}


}



class LabelContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = robotwarParser.RULE_label;
    }

	ID() {
	    return this.getToken(robotwarParser.ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof robotwarListener ) {
	        listener.enterLabel(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof robotwarListener ) {
	        listener.exitLabel(this);
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
        this.ruleIndex = robotwarParser.RULE_statement;
    }

	ifstatement() {
	    return this.getTypedRuleContext(IfstatementContext,0);
	};

	tostatement() {
	    return this.getTypedRuleContext(TostatementContext,0);
	};

	gosubstatement() {
	    return this.getTypedRuleContext(GosubstatementContext,0);
	};

	gotostatement() {
	    return this.getTypedRuleContext(GotostatementContext,0);
	};

	endsubstatement() {
	    return this.getTypedRuleContext(EndsubstatementContext,0);
	};

	accumstatement() {
	    return this.getTypedRuleContext(AccumstatementContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof robotwarListener ) {
	        listener.enterStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof robotwarListener ) {
	        listener.exitStatement(this);
		}
	}


}



class AccumstatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = robotwarParser.RULE_accumstatement;
    }

	accumexpression() {
	    return this.getTypedRuleContext(AccumexpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof robotwarListener ) {
	        listener.enterAccumstatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof robotwarListener ) {
	        listener.exitAccumstatement(this);
		}
	}


}



class AccumexpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = robotwarParser.RULE_accumexpression;
    }

	statement() {
	    return this.getTypedRuleContext(StatementContext,0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof robotwarListener ) {
	        listener.enterAccumexpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof robotwarListener ) {
	        listener.exitAccumexpression(this);
		}
	}


}



class GosubstatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = robotwarParser.RULE_gosubstatement;
    }

	label() {
	    return this.getTypedRuleContext(LabelContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof robotwarListener ) {
	        listener.enterGosubstatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof robotwarListener ) {
	        listener.exitGosubstatement(this);
		}
	}


}



class GotostatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = robotwarParser.RULE_gotostatement;
    }

	label() {
	    return this.getTypedRuleContext(LabelContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof robotwarListener ) {
	        listener.enterGotostatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof robotwarListener ) {
	        listener.exitGotostatement(this);
		}
	}


}



class TostatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = robotwarParser.RULE_tostatement;
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	register_ = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Register_Context);
	    } else {
	        return this.getTypedRuleContext(Register_Context,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof robotwarListener ) {
	        listener.enterTostatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof robotwarListener ) {
	        listener.exitTostatement(this);
		}
	}


}



class EndsubstatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = robotwarParser.RULE_endsubstatement;
    }


	enterRule(listener) {
	    if(listener instanceof robotwarListener ) {
	        listener.enterEndsubstatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof robotwarListener ) {
	        listener.exitEndsubstatement(this);
		}
	}


}



class IfstatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = robotwarParser.RULE_ifstatement;
    }

	condition() {
	    return this.getTypedRuleContext(ConditionContext,0);
	};

	statement() {
	    return this.getTypedRuleContext(StatementContext,0);
	};

	EOL() {
	    return this.getToken(robotwarParser.EOL, 0);
	};

	COMMA() {
	    return this.getToken(robotwarParser.COMMA, 0);
	};

	DOT() {
	    return this.getToken(robotwarParser.DOT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof robotwarListener ) {
	        listener.enterIfstatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof robotwarListener ) {
	        listener.exitIfstatement(this);
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
        this.ruleIndex = robotwarParser.RULE_condition;
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	comparison() {
	    return this.getTypedRuleContext(ComparisonContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof robotwarListener ) {
	        listener.enterCondition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof robotwarListener ) {
	        listener.exitCondition(this);
		}
	}


}



class ExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = robotwarParser.RULE_expression;
    }

	argument = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ArgumentContext);
	    } else {
	        return this.getTypedRuleContext(ArgumentContext,i);
	    }
	};

	operation = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(OperationContext);
	    } else {
	        return this.getTypedRuleContext(OperationContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof robotwarListener ) {
	        listener.enterExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof robotwarListener ) {
	        listener.exitExpression(this);
		}
	}


}



class OperationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = robotwarParser.RULE_operation;
    }


	enterRule(listener) {
	    if(listener instanceof robotwarListener ) {
	        listener.enterOperation(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof robotwarListener ) {
	        listener.exitOperation(this);
		}
	}


}



class ComparisonContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = robotwarParser.RULE_comparison;
    }


	enterRule(listener) {
	    if(listener instanceof robotwarListener ) {
	        listener.enterComparison(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof robotwarListener ) {
	        listener.exitComparison(this);
		}
	}


}



class ArgumentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = robotwarParser.RULE_argument;
    }

	number() {
	    return this.getTypedRuleContext(NumberContext,0);
	};

	register_() {
	    return this.getTypedRuleContext(Register_Context,0);
	};

	DATA() {
	    return this.getToken(robotwarParser.DATA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof robotwarListener ) {
	        listener.enterArgument(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof robotwarListener ) {
	        listener.exitArgument(this);
		}
	}


}



class Register_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = robotwarParser.RULE_register_;
    }

	A() {
	    return this.getToken(robotwarParser.A, 0);
	};

	B() {
	    return this.getToken(robotwarParser.B, 0);
	};

	C() {
	    return this.getToken(robotwarParser.C, 0);
	};

	D() {
	    return this.getToken(robotwarParser.D, 0);
	};

	E() {
	    return this.getToken(robotwarParser.E, 0);
	};

	F() {
	    return this.getToken(robotwarParser.F, 0);
	};

	G() {
	    return this.getToken(robotwarParser.G, 0);
	};

	H() {
	    return this.getToken(robotwarParser.H, 0);
	};

	I() {
	    return this.getToken(robotwarParser.I, 0);
	};

	J() {
	    return this.getToken(robotwarParser.J, 0);
	};

	K() {
	    return this.getToken(robotwarParser.K, 0);
	};

	L() {
	    return this.getToken(robotwarParser.L, 0);
	};

	M() {
	    return this.getToken(robotwarParser.M, 0);
	};

	N() {
	    return this.getToken(robotwarParser.N, 0);
	};

	O() {
	    return this.getToken(robotwarParser.O, 0);
	};

	P() {
	    return this.getToken(robotwarParser.P, 0);
	};

	Q() {
	    return this.getToken(robotwarParser.Q, 0);
	};

	R() {
	    return this.getToken(robotwarParser.R, 0);
	};

	S() {
	    return this.getToken(robotwarParser.S, 0);
	};

	T() {
	    return this.getToken(robotwarParser.T, 0);
	};

	U() {
	    return this.getToken(robotwarParser.U, 0);
	};

	V() {
	    return this.getToken(robotwarParser.V, 0);
	};

	W() {
	    return this.getToken(robotwarParser.W, 0);
	};

	X() {
	    return this.getToken(robotwarParser.X, 0);
	};

	Y() {
	    return this.getToken(robotwarParser.Y, 0);
	};

	Z() {
	    return this.getToken(robotwarParser.Z, 0);
	};

	AIM() {
	    return this.getToken(robotwarParser.AIM, 0);
	};

	SHOT() {
	    return this.getToken(robotwarParser.SHOT, 0);
	};

	RADAR() {
	    return this.getToken(robotwarParser.RADAR, 0);
	};

	SPEEDX() {
	    return this.getToken(robotwarParser.SPEEDX, 0);
	};

	SPEEDY() {
	    return this.getToken(robotwarParser.SPEEDY, 0);
	};

	RANDOM() {
	    return this.getToken(robotwarParser.RANDOM, 0);
	};

	INDEX() {
	    return this.getToken(robotwarParser.INDEX, 0);
	};

	DATA() {
	    return this.getToken(robotwarParser.DATA, 0);
	};

	DAMAGE() {
	    return this.getToken(robotwarParser.DAMAGE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof robotwarListener ) {
	        listener.enterRegister_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof robotwarListener ) {
	        listener.exitRegister_(this);
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
        this.ruleIndex = robotwarParser.RULE_number;
    }

	NUMBER() {
	    return this.getToken(robotwarParser.NUMBER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof robotwarListener ) {
	        listener.enterNumber(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof robotwarListener ) {
	        listener.exitNumber(this);
		}
	}


}



class CommentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = robotwarParser.RULE_comment;
    }

	COMMENT() {
	    return this.getToken(robotwarParser.COMMENT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof robotwarListener ) {
	        listener.enterComment(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof robotwarListener ) {
	        listener.exitComment(this);
		}
	}


}




robotwarParser.ProgramContext = ProgramContext; 
robotwarParser.LineContext = LineContext; 
robotwarParser.LabelContext = LabelContext; 
robotwarParser.StatementContext = StatementContext; 
robotwarParser.AccumstatementContext = AccumstatementContext; 
robotwarParser.AccumexpressionContext = AccumexpressionContext; 
robotwarParser.GosubstatementContext = GosubstatementContext; 
robotwarParser.GotostatementContext = GotostatementContext; 
robotwarParser.TostatementContext = TostatementContext; 
robotwarParser.EndsubstatementContext = EndsubstatementContext; 
robotwarParser.IfstatementContext = IfstatementContext; 
robotwarParser.ConditionContext = ConditionContext; 
robotwarParser.ExpressionContext = ExpressionContext; 
robotwarParser.OperationContext = OperationContext; 
robotwarParser.ComparisonContext = ComparisonContext; 
robotwarParser.ArgumentContext = ArgumentContext; 
robotwarParser.Register_Context = Register_Context; 
robotwarParser.NumberContext = NumberContext; 
robotwarParser.CommentContext = CommentContext; 

// --- Dynamic Universal Module Wrapper ---
if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = { CPP14Lexer };
} else if (typeof window !== 'undefined') {
    window.CPP14Lexer = CPP14Lexer;
} else if (typeof self !== 'undefined') {
    self.CPP14Lexer = CPP14Lexer;
}
