// Generated from Resources/Parsers/robotwars/robotwar.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import robotwarListener from './robotwarListener.js';
const serializedATN = [4,1,55,136,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,1,0,4,0,40,8,
0,11,0,12,0,41,1,1,1,1,1,1,3,1,47,8,1,1,1,1,1,1,2,1,2,1,3,1,3,1,3,1,3,1,
3,1,3,3,3,59,8,3,1,4,1,4,1,5,1,5,1,5,1,5,1,5,1,5,3,5,69,8,5,1,5,1,5,1,6,
1,6,1,6,1,7,1,7,1,7,1,8,3,8,80,8,8,1,8,1,8,4,8,84,8,8,11,8,12,8,85,1,9,1,
9,1,10,3,10,91,8,10,1,10,1,10,3,10,95,8,10,1,10,1,10,1,11,1,11,1,11,1,11,
1,12,1,12,1,12,1,12,5,12,107,8,12,10,12,12,12,110,9,12,1,12,1,12,1,12,1,
12,3,12,116,8,12,1,13,1,13,1,14,1,14,1,15,1,15,1,15,3,15,125,8,15,1,16,1,
16,1,17,3,17,130,8,17,1,17,1,17,1,18,1,18,1,18,0,0,19,0,2,4,6,8,10,12,14,
16,18,20,22,24,26,28,30,32,34,36,0,5,2,0,49,50,54,54,1,0,10,13,1,0,1,4,1,
0,14,48,1,0,10,11,138,0,39,1,0,0,0,2,46,1,0,0,0,4,50,1,0,0,0,6,58,1,0,0,
0,8,60,1,0,0,0,10,68,1,0,0,0,12,72,1,0,0,0,14,75,1,0,0,0,16,79,1,0,0,0,18,
87,1,0,0,0,20,90,1,0,0,0,22,98,1,0,0,0,24,115,1,0,0,0,26,117,1,0,0,0,28,
119,1,0,0,0,30,124,1,0,0,0,32,126,1,0,0,0,34,129,1,0,0,0,36,133,1,0,0,0,
38,40,3,2,1,0,39,38,1,0,0,0,40,41,1,0,0,0,41,39,1,0,0,0,41,42,1,0,0,0,42,
1,1,0,0,0,43,47,3,4,2,0,44,47,3,36,18,0,45,47,3,6,3,0,46,43,1,0,0,0,46,44,
1,0,0,0,46,45,1,0,0,0,46,47,1,0,0,0,47,48,1,0,0,0,48,49,5,54,0,0,49,3,1,
0,0,0,50,51,5,51,0,0,51,5,1,0,0,0,52,59,3,20,10,0,53,59,3,16,8,0,54,59,3,
12,6,0,55,59,3,14,7,0,56,59,3,18,9,0,57,59,3,8,4,0,58,52,1,0,0,0,58,53,1,
0,0,0,58,54,1,0,0,0,58,55,1,0,0,0,58,56,1,0,0,0,58,57,1,0,0,0,59,7,1,0,0,
0,60,61,3,10,5,0,61,9,1,0,0,0,62,69,5,1,0,0,63,69,5,2,0,0,64,65,5,3,0,0,
65,69,3,24,12,0,66,67,5,4,0,0,67,69,3,24,12,0,68,62,1,0,0,0,68,63,1,0,0,
0,68,64,1,0,0,0,68,66,1,0,0,0,69,70,1,0,0,0,70,71,3,6,3,0,71,11,1,0,0,0,
72,73,5,5,0,0,73,74,3,4,2,0,74,13,1,0,0,0,75,76,5,6,0,0,76,77,3,4,2,0,77,
15,1,0,0,0,78,80,3,24,12,0,79,78,1,0,0,0,79,80,1,0,0,0,80,83,1,0,0,0,81,
82,5,7,0,0,82,84,3,32,16,0,83,81,1,0,0,0,84,85,1,0,0,0,85,83,1,0,0,0,85,
86,1,0,0,0,86,17,1,0,0,0,87,88,5,8,0,0,88,19,1,0,0,0,89,91,5,9,0,0,90,89,
1,0,0,0,90,91,1,0,0,0,91,92,1,0,0,0,92,94,3,22,11,0,93,95,7,0,0,0,94,93,
1,0,0,0,94,95,1,0,0,0,95,96,1,0,0,0,96,97,3,6,3,0,97,21,1,0,0,0,98,99,3,
24,12,0,99,100,3,28,14,0,100,101,3,24,12,0,101,23,1,0,0,0,102,108,3,30,15,
0,103,104,3,26,13,0,104,105,3,30,15,0,105,107,1,0,0,0,106,103,1,0,0,0,107,
110,1,0,0,0,108,106,1,0,0,0,108,109,1,0,0,0,109,116,1,0,0,0,110,108,1,0,
0,0,111,112,3,26,13,0,112,113,3,30,15,0,113,116,1,0,0,0,114,116,3,30,15,
0,115,102,1,0,0,0,115,111,1,0,0,0,115,114,1,0,0,0,116,25,1,0,0,0,117,118,
7,1,0,0,118,27,1,0,0,0,119,120,7,2,0,0,120,29,1,0,0,0,121,125,3,34,17,0,
122,125,3,32,16,0,123,125,5,48,0,0,124,121,1,0,0,0,124,122,1,0,0,0,124,123,
1,0,0,0,125,31,1,0,0,0,126,127,7,3,0,0,127,33,1,0,0,0,128,130,7,4,0,0,129,
128,1,0,0,0,129,130,1,0,0,0,130,131,1,0,0,0,131,132,5,52,0,0,132,35,1,0,
0,0,133,134,5,53,0,0,134,37,1,0,0,0,12,41,46,58,68,79,85,90,94,108,115,124,
129];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

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

    get atn() {
        return atn;
    }



	program() {
	    let localctx = new ProgramContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, robotwarParser.RULE_program);
	    var _la = 0; // Token type
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
	        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << robotwarParser.T__0) | (1 << robotwarParser.T__1) | (1 << robotwarParser.T__2) | (1 << robotwarParser.T__3) | (1 << robotwarParser.T__4) | (1 << robotwarParser.T__5) | (1 << robotwarParser.T__6) | (1 << robotwarParser.T__7) | (1 << robotwarParser.T__8) | (1 << robotwarParser.T__9) | (1 << robotwarParser.T__10) | (1 << robotwarParser.T__11) | (1 << robotwarParser.T__12) | (1 << robotwarParser.A) | (1 << robotwarParser.B) | (1 << robotwarParser.C) | (1 << robotwarParser.D) | (1 << robotwarParser.E) | (1 << robotwarParser.F) | (1 << robotwarParser.G) | (1 << robotwarParser.H) | (1 << robotwarParser.I) | (1 << robotwarParser.J) | (1 << robotwarParser.K) | (1 << robotwarParser.L) | (1 << robotwarParser.M) | (1 << robotwarParser.N) | (1 << robotwarParser.O) | (1 << robotwarParser.P) | (1 << robotwarParser.Q) | (1 << robotwarParser.R))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (robotwarParser.S - 32)) | (1 << (robotwarParser.T - 32)) | (1 << (robotwarParser.U - 32)) | (1 << (robotwarParser.V - 32)) | (1 << (robotwarParser.W - 32)) | (1 << (robotwarParser.X - 32)) | (1 << (robotwarParser.Y - 32)) | (1 << (robotwarParser.Z - 32)) | (1 << (robotwarParser.AIM - 32)) | (1 << (robotwarParser.SHOT - 32)) | (1 << (robotwarParser.RADAR - 32)) | (1 << (robotwarParser.DAMAGE - 32)) | (1 << (robotwarParser.SPEEDX - 32)) | (1 << (robotwarParser.SPEEDY - 32)) | (1 << (robotwarParser.RANDOM - 32)) | (1 << (robotwarParser.INDEX - 32)) | (1 << (robotwarParser.DATA - 32)) | (1 << (robotwarParser.ID - 32)) | (1 << (robotwarParser.NUMBER - 32)) | (1 << (robotwarParser.COMMENT - 32)) | (1 << (robotwarParser.EOL - 32)))) !== 0));
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
	        this.state = 46;
	        this._errHandler.sync(this);
	        switch (this._input.LA(1)) {
	        case robotwarParser.ID:
	        	this.state = 43;
	        	this.label();
	        	break;
	        case robotwarParser.COMMENT:
	        	this.state = 44;
	        	this.comment();
	        	break;
	        case robotwarParser.T__0:
	        case robotwarParser.T__1:
	        case robotwarParser.T__2:
	        case robotwarParser.T__3:
	        case robotwarParser.T__4:
	        case robotwarParser.T__5:
	        case robotwarParser.T__6:
	        case robotwarParser.T__7:
	        case robotwarParser.T__8:
	        case robotwarParser.T__9:
	        case robotwarParser.T__10:
	        case robotwarParser.T__11:
	        case robotwarParser.T__12:
	        case robotwarParser.A:
	        case robotwarParser.B:
	        case robotwarParser.C:
	        case robotwarParser.D:
	        case robotwarParser.E:
	        case robotwarParser.F:
	        case robotwarParser.G:
	        case robotwarParser.H:
	        case robotwarParser.I:
	        case robotwarParser.J:
	        case robotwarParser.K:
	        case robotwarParser.L:
	        case robotwarParser.M:
	        case robotwarParser.N:
	        case robotwarParser.O:
	        case robotwarParser.P:
	        case robotwarParser.Q:
	        case robotwarParser.R:
	        case robotwarParser.S:
	        case robotwarParser.T:
	        case robotwarParser.U:
	        case robotwarParser.V:
	        case robotwarParser.W:
	        case robotwarParser.X:
	        case robotwarParser.Y:
	        case robotwarParser.Z:
	        case robotwarParser.AIM:
	        case robotwarParser.SHOT:
	        case robotwarParser.RADAR:
	        case robotwarParser.DAMAGE:
	        case robotwarParser.SPEEDX:
	        case robotwarParser.SPEEDY:
	        case robotwarParser.RANDOM:
	        case robotwarParser.INDEX:
	        case robotwarParser.DATA:
	        case robotwarParser.NUMBER:
	        	this.state = 45;
	        	this.statement();
	        	break;
	        case robotwarParser.EOL:
	        	break;
	        default:
	        	break;
	        }
	        this.state = 48;
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
	        this.state = 50;
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
	        this.state = 58;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 52;
	            this.ifstatement();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 53;
	            this.tostatement();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 54;
	            this.gosubstatement();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 55;
	            this.gotostatement();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 56;
	            this.endsubstatement();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 57;
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
	        this.state = 60;
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
	        this.state = 68;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case robotwarParser.T__0:
	            this.state = 62;
	            this.match(robotwarParser.T__0);
	            break;
	        case robotwarParser.T__1:
	            this.state = 63;
	            this.match(robotwarParser.T__1);
	            break;
	        case robotwarParser.T__2:
	            this.state = 64;
	            this.match(robotwarParser.T__2);
	            this.state = 65;
	            this.expression();
	            break;
	        case robotwarParser.T__3:
	            this.state = 66;
	            this.match(robotwarParser.T__3);
	            this.state = 67;
	            this.expression();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 70;
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
	        this.state = 72;
	        this.match(robotwarParser.T__4);
	        this.state = 73;
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
	        this.state = 75;
	        this.match(robotwarParser.T__5);
	        this.state = 76;
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
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 79;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << robotwarParser.T__9) | (1 << robotwarParser.T__10) | (1 << robotwarParser.T__11) | (1 << robotwarParser.T__12) | (1 << robotwarParser.A) | (1 << robotwarParser.B) | (1 << robotwarParser.C) | (1 << robotwarParser.D) | (1 << robotwarParser.E) | (1 << robotwarParser.F) | (1 << robotwarParser.G) | (1 << robotwarParser.H) | (1 << robotwarParser.I) | (1 << robotwarParser.J) | (1 << robotwarParser.K) | (1 << robotwarParser.L) | (1 << robotwarParser.M) | (1 << robotwarParser.N) | (1 << robotwarParser.O) | (1 << robotwarParser.P) | (1 << robotwarParser.Q) | (1 << robotwarParser.R))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (robotwarParser.S - 32)) | (1 << (robotwarParser.T - 32)) | (1 << (robotwarParser.U - 32)) | (1 << (robotwarParser.V - 32)) | (1 << (robotwarParser.W - 32)) | (1 << (robotwarParser.X - 32)) | (1 << (robotwarParser.Y - 32)) | (1 << (robotwarParser.Z - 32)) | (1 << (robotwarParser.AIM - 32)) | (1 << (robotwarParser.SHOT - 32)) | (1 << (robotwarParser.RADAR - 32)) | (1 << (robotwarParser.DAMAGE - 32)) | (1 << (robotwarParser.SPEEDX - 32)) | (1 << (robotwarParser.SPEEDY - 32)) | (1 << (robotwarParser.RANDOM - 32)) | (1 << (robotwarParser.INDEX - 32)) | (1 << (robotwarParser.DATA - 32)) | (1 << (robotwarParser.NUMBER - 32)))) !== 0)) {
	            this.state = 78;
	            this.expression();
	        }

	        this.state = 83; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 81;
	            this.match(robotwarParser.T__6);
	            this.state = 82;
	            this.register_();
	            this.state = 85; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===robotwarParser.T__6);
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
	        this.state = 87;
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
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 90;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===robotwarParser.T__8) {
	            this.state = 89;
	            this.match(robotwarParser.T__8);
	        }

	        this.state = 92;
	        this.condition();
	        this.state = 94;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(((((_la - 49)) & ~0x1f) == 0 && ((1 << (_la - 49)) & ((1 << (robotwarParser.DOT - 49)) | (1 << (robotwarParser.COMMA - 49)) | (1 << (robotwarParser.EOL - 49)))) !== 0)) {
	            this.state = 93;
	            _la = this._input.LA(1);
	            if(!(((((_la - 49)) & ~0x1f) == 0 && ((1 << (_la - 49)) & ((1 << (robotwarParser.DOT - 49)) | (1 << (robotwarParser.COMMA - 49)) | (1 << (robotwarParser.EOL - 49)))) !== 0))) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	        }

	        this.state = 96;
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
	        this.state = 98;
	        this.expression();
	        this.state = 99;
	        this.comparison();
	        this.state = 100;
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
	        this.state = 115;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 102;
	            this.argument();
	            this.state = 108;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,8,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 103;
	                    this.operation();
	                    this.state = 104;
	                    this.argument(); 
	                }
	                this.state = 110;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,8,this._ctx);
	            }

	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 111;
	            this.operation();
	            this.state = 112;
	            this.argument();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 114;
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
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 117;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << robotwarParser.T__9) | (1 << robotwarParser.T__10) | (1 << robotwarParser.T__11) | (1 << robotwarParser.T__12))) !== 0))) {
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
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 119;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << robotwarParser.T__0) | (1 << robotwarParser.T__1) | (1 << robotwarParser.T__2) | (1 << robotwarParser.T__3))) !== 0))) {
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
	        this.state = 124;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 121;
	            this.number();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 122;
	            this.register_();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 123;
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
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 126;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << robotwarParser.A) | (1 << robotwarParser.B) | (1 << robotwarParser.C) | (1 << robotwarParser.D) | (1 << robotwarParser.E) | (1 << robotwarParser.F) | (1 << robotwarParser.G) | (1 << robotwarParser.H) | (1 << robotwarParser.I) | (1 << robotwarParser.J) | (1 << robotwarParser.K) | (1 << robotwarParser.L) | (1 << robotwarParser.M) | (1 << robotwarParser.N) | (1 << robotwarParser.O) | (1 << robotwarParser.P) | (1 << robotwarParser.Q) | (1 << robotwarParser.R))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (robotwarParser.S - 32)) | (1 << (robotwarParser.T - 32)) | (1 << (robotwarParser.U - 32)) | (1 << (robotwarParser.V - 32)) | (1 << (robotwarParser.W - 32)) | (1 << (robotwarParser.X - 32)) | (1 << (robotwarParser.Y - 32)) | (1 << (robotwarParser.Z - 32)) | (1 << (robotwarParser.AIM - 32)) | (1 << (robotwarParser.SHOT - 32)) | (1 << (robotwarParser.RADAR - 32)) | (1 << (robotwarParser.DAMAGE - 32)) | (1 << (robotwarParser.SPEEDX - 32)) | (1 << (robotwarParser.SPEEDY - 32)) | (1 << (robotwarParser.RANDOM - 32)) | (1 << (robotwarParser.INDEX - 32)) | (1 << (robotwarParser.DATA - 32)))) !== 0))) {
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
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 129;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===robotwarParser.T__9 || _la===robotwarParser.T__10) {
	            this.state = 128;
	            _la = this._input.LA(1);
	            if(!(_la===robotwarParser.T__9 || _la===robotwarParser.T__10)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	        }

	        this.state = 131;
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
	        this.state = 133;
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
