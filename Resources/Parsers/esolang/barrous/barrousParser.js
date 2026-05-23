// Generated from C:/Users/megam/jupyter_ops/Resources/Parsers/esolang/barrous/barrous.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import barrousListener from './barrousListener.js';
const serializedATN = [4,1,18,107,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,1,0,1,0,1,0,5,0,36,8,0,10,0,12,0,39,9,0,1,
0,1,0,1,1,3,1,44,8,1,1,1,1,1,1,1,1,2,3,2,50,8,2,1,2,1,2,1,2,1,3,1,3,1,3,
1,3,1,4,1,4,1,4,1,4,1,5,1,5,1,5,1,5,1,6,1,6,1,6,1,7,1,7,1,8,1,8,1,9,1,9,
1,9,1,10,1,10,1,10,1,11,1,11,1,11,1,11,1,12,1,12,1,12,1,13,1,13,1,13,1,14,
1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,3,14,103,8,14,
1,15,1,15,1,15,0,0,16,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,0,1,1,0,
15,17,105,0,32,1,0,0,0,2,43,1,0,0,0,4,49,1,0,0,0,6,54,1,0,0,0,8,58,1,0,0,
0,10,62,1,0,0,0,12,66,1,0,0,0,14,69,1,0,0,0,16,71,1,0,0,0,18,73,1,0,0,0,
20,76,1,0,0,0,22,79,1,0,0,0,24,83,1,0,0,0,26,86,1,0,0,0,28,102,1,0,0,0,30,
104,1,0,0,0,32,37,3,28,14,0,33,34,5,1,0,0,34,36,3,28,14,0,35,33,1,0,0,0,
36,39,1,0,0,0,37,35,1,0,0,0,37,38,1,0,0,0,38,40,1,0,0,0,39,37,1,0,0,0,40,
41,5,0,0,1,41,1,1,0,0,0,42,44,3,30,15,0,43,42,1,0,0,0,43,44,1,0,0,0,44,45,
1,0,0,0,45,46,5,2,0,0,46,47,3,30,15,0,47,3,1,0,0,0,48,50,3,30,15,0,49,48,
1,0,0,0,49,50,1,0,0,0,50,51,1,0,0,0,51,52,5,3,0,0,52,53,3,30,15,0,53,5,1,
0,0,0,54,55,3,30,15,0,55,56,5,4,0,0,56,57,3,30,15,0,57,7,1,0,0,0,58,59,3,
30,15,0,59,60,5,5,0,0,60,61,3,30,15,0,61,9,1,0,0,0,62,63,3,30,15,0,63,64,
5,6,0,0,64,65,3,30,15,0,65,11,1,0,0,0,66,67,5,7,0,0,67,68,3,30,15,0,68,13,
1,0,0,0,69,70,5,8,0,0,70,15,1,0,0,0,71,72,5,9,0,0,72,17,1,0,0,0,73,74,5,
10,0,0,74,75,3,30,15,0,75,19,1,0,0,0,76,77,5,11,0,0,77,78,3,30,15,0,78,21,
1,0,0,0,79,80,3,30,15,0,80,81,5,12,0,0,81,82,3,30,15,0,82,23,1,0,0,0,83,
84,5,13,0,0,84,85,3,30,15,0,85,25,1,0,0,0,86,87,5,14,0,0,87,88,3,30,15,0,
88,27,1,0,0,0,89,103,3,2,1,0,90,103,3,4,2,0,91,103,3,6,3,0,92,103,3,8,4,
0,93,103,3,10,5,0,94,103,3,12,6,0,95,103,3,14,7,0,96,103,3,16,8,0,97,103,
3,18,9,0,98,103,3,20,10,0,99,103,3,22,11,0,100,103,3,24,12,0,101,103,3,26,
13,0,102,89,1,0,0,0,102,90,1,0,0,0,102,91,1,0,0,0,102,92,1,0,0,0,102,93,
1,0,0,0,102,94,1,0,0,0,102,95,1,0,0,0,102,96,1,0,0,0,102,97,1,0,0,0,102,
98,1,0,0,0,102,99,1,0,0,0,102,100,1,0,0,0,102,101,1,0,0,0,103,29,1,0,0,0,
104,105,7,0,0,0,105,31,1,0,0,0,4,37,43,49,102];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class barrousParser extends antlr4.Parser {

    static grammarFileName = "barrous.g4";
    static literalNames = [ null, "'|'", "'>'", "'<'", "'+'", "'-'", "';'", 
                            "':'", "'!'", "'='", "'@'", "'#'", "'?'", "'&'", 
                            "'%'", "'^'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             "INT", "INDENTIFIER", "WS" ];
    static ruleNames = [ "barrous", "forward", "backward", "add_", "subtract_", 
                         "push_", "pop_", "reset_", "end", "printchar", 
                         "printval", "rand", "inpchar", "inpnum", "command", 
                         "id" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = barrousParser.ruleNames;
        this.literalNames = barrousParser.literalNames;
        this.symbolicNames = barrousParser.symbolicNames;
    }



	barrous() {
	    let localctx = new BarrousContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, barrousParser.RULE_barrous);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 32;
	        this.command();
	        this.state = 37;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===1) {
	            this.state = 33;
	            this.match(barrousParser.T__0);
	            this.state = 34;
	            this.command();
	            this.state = 39;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 40;
	        this.match(barrousParser.EOF);
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



	forward() {
	    let localctx = new ForwardContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, barrousParser.RULE_forward);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 43;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 229376) !== 0)) {
	            this.state = 42;
	            this.id();
	        }

	        this.state = 45;
	        this.match(barrousParser.T__1);
	        this.state = 46;
	        this.id();
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



	backward() {
	    let localctx = new BackwardContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, barrousParser.RULE_backward);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 49;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 229376) !== 0)) {
	            this.state = 48;
	            this.id();
	        }

	        this.state = 51;
	        this.match(barrousParser.T__2);
	        this.state = 52;
	        this.id();
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



	add_() {
	    let localctx = new Add_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, barrousParser.RULE_add_);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 54;
	        this.id();
	        this.state = 55;
	        this.match(barrousParser.T__3);
	        this.state = 56;
	        this.id();
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



	subtract_() {
	    let localctx = new Subtract_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, barrousParser.RULE_subtract_);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 58;
	        this.id();
	        this.state = 59;
	        this.match(barrousParser.T__4);
	        this.state = 60;
	        this.id();
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



	push_() {
	    let localctx = new Push_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, barrousParser.RULE_push_);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 62;
	        this.id();
	        this.state = 63;
	        this.match(barrousParser.T__5);
	        this.state = 64;
	        this.id();
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



	pop_() {
	    let localctx = new Pop_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, barrousParser.RULE_pop_);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 66;
	        this.match(barrousParser.T__6);
	        this.state = 67;
	        this.id();
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



	reset_() {
	    let localctx = new Reset_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, barrousParser.RULE_reset_);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 69;
	        this.match(barrousParser.T__7);
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



	end() {
	    let localctx = new EndContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, barrousParser.RULE_end);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 71;
	        this.match(barrousParser.T__8);
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



	printchar() {
	    let localctx = new PrintcharContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, barrousParser.RULE_printchar);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 73;
	        this.match(barrousParser.T__9);
	        this.state = 74;
	        this.id();
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



	printval() {
	    let localctx = new PrintvalContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, barrousParser.RULE_printval);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 76;
	        this.match(barrousParser.T__10);
	        this.state = 77;
	        this.id();
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



	rand() {
	    let localctx = new RandContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, barrousParser.RULE_rand);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 79;
	        this.id();
	        this.state = 80;
	        this.match(barrousParser.T__11);
	        this.state = 81;
	        this.id();
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



	inpchar() {
	    let localctx = new InpcharContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, barrousParser.RULE_inpchar);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 83;
	        this.match(barrousParser.T__12);
	        this.state = 84;
	        this.id();
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



	inpnum() {
	    let localctx = new InpnumContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, barrousParser.RULE_inpnum);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 86;
	        this.match(barrousParser.T__13);
	        this.state = 87;
	        this.id();
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



	command() {
	    let localctx = new CommandContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, barrousParser.RULE_command);
	    try {
	        this.state = 102;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 89;
	            this.forward();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 90;
	            this.backward();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 91;
	            this.add_();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 92;
	            this.subtract_();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 93;
	            this.push_();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 94;
	            this.pop_();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 95;
	            this.reset_();
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 96;
	            this.end();
	            break;

	        case 9:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 97;
	            this.printchar();
	            break;

	        case 10:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 98;
	            this.printval();
	            break;

	        case 11:
	            this.enterOuterAlt(localctx, 11);
	            this.state = 99;
	            this.rand();
	            break;

	        case 12:
	            this.enterOuterAlt(localctx, 12);
	            this.state = 100;
	            this.inpchar();
	            break;

	        case 13:
	            this.enterOuterAlt(localctx, 13);
	            this.state = 101;
	            this.inpnum();
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



	id() {
	    let localctx = new IdContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, barrousParser.RULE_id);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 104;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 229376) !== 0))) {
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


}

barrousParser.EOF = antlr4.Token.EOF;
barrousParser.T__0 = 1;
barrousParser.T__1 = 2;
barrousParser.T__2 = 3;
barrousParser.T__3 = 4;
barrousParser.T__4 = 5;
barrousParser.T__5 = 6;
barrousParser.T__6 = 7;
barrousParser.T__7 = 8;
barrousParser.T__8 = 9;
barrousParser.T__9 = 10;
barrousParser.T__10 = 11;
barrousParser.T__11 = 12;
barrousParser.T__12 = 13;
barrousParser.T__13 = 14;
barrousParser.T__14 = 15;
barrousParser.INT = 16;
barrousParser.INDENTIFIER = 17;
barrousParser.WS = 18;

barrousParser.RULE_barrous = 0;
barrousParser.RULE_forward = 1;
barrousParser.RULE_backward = 2;
barrousParser.RULE_add_ = 3;
barrousParser.RULE_subtract_ = 4;
barrousParser.RULE_push_ = 5;
barrousParser.RULE_pop_ = 6;
barrousParser.RULE_reset_ = 7;
barrousParser.RULE_end = 8;
barrousParser.RULE_printchar = 9;
barrousParser.RULE_printval = 10;
barrousParser.RULE_rand = 11;
barrousParser.RULE_inpchar = 12;
barrousParser.RULE_inpnum = 13;
barrousParser.RULE_command = 14;
barrousParser.RULE_id = 15;

class BarrousContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = barrousParser.RULE_barrous;
    }

	command = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CommandContext);
	    } else {
	        return this.getTypedRuleContext(CommandContext,i);
	    }
	};

	EOF() {
	    return this.getToken(barrousParser.EOF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof barrousListener ) {
	        listener.enterBarrous(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof barrousListener ) {
	        listener.exitBarrous(this);
		}
	}


}



class ForwardContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = barrousParser.RULE_forward;
    }

	id = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(IdContext);
	    } else {
	        return this.getTypedRuleContext(IdContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof barrousListener ) {
	        listener.enterForward(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof barrousListener ) {
	        listener.exitForward(this);
		}
	}


}



class BackwardContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = barrousParser.RULE_backward;
    }

	id = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(IdContext);
	    } else {
	        return this.getTypedRuleContext(IdContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof barrousListener ) {
	        listener.enterBackward(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof barrousListener ) {
	        listener.exitBackward(this);
		}
	}


}



class Add_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = barrousParser.RULE_add_;
    }

	id = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(IdContext);
	    } else {
	        return this.getTypedRuleContext(IdContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof barrousListener ) {
	        listener.enterAdd_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof barrousListener ) {
	        listener.exitAdd_(this);
		}
	}


}



class Subtract_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = barrousParser.RULE_subtract_;
    }

	id = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(IdContext);
	    } else {
	        return this.getTypedRuleContext(IdContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof barrousListener ) {
	        listener.enterSubtract_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof barrousListener ) {
	        listener.exitSubtract_(this);
		}
	}


}



class Push_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = barrousParser.RULE_push_;
    }

	id = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(IdContext);
	    } else {
	        return this.getTypedRuleContext(IdContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof barrousListener ) {
	        listener.enterPush_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof barrousListener ) {
	        listener.exitPush_(this);
		}
	}


}



class Pop_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = barrousParser.RULE_pop_;
    }

	id() {
	    return this.getTypedRuleContext(IdContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof barrousListener ) {
	        listener.enterPop_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof barrousListener ) {
	        listener.exitPop_(this);
		}
	}


}



class Reset_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = barrousParser.RULE_reset_;
    }


	enterRule(listener) {
	    if(listener instanceof barrousListener ) {
	        listener.enterReset_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof barrousListener ) {
	        listener.exitReset_(this);
		}
	}


}



class EndContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = barrousParser.RULE_end;
    }


	enterRule(listener) {
	    if(listener instanceof barrousListener ) {
	        listener.enterEnd(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof barrousListener ) {
	        listener.exitEnd(this);
		}
	}


}



class PrintcharContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = barrousParser.RULE_printchar;
    }

	id() {
	    return this.getTypedRuleContext(IdContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof barrousListener ) {
	        listener.enterPrintchar(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof barrousListener ) {
	        listener.exitPrintchar(this);
		}
	}


}



class PrintvalContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = barrousParser.RULE_printval;
    }

	id() {
	    return this.getTypedRuleContext(IdContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof barrousListener ) {
	        listener.enterPrintval(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof barrousListener ) {
	        listener.exitPrintval(this);
		}
	}


}



class RandContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = barrousParser.RULE_rand;
    }

	id = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(IdContext);
	    } else {
	        return this.getTypedRuleContext(IdContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof barrousListener ) {
	        listener.enterRand(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof barrousListener ) {
	        listener.exitRand(this);
		}
	}


}



class InpcharContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = barrousParser.RULE_inpchar;
    }

	id() {
	    return this.getTypedRuleContext(IdContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof barrousListener ) {
	        listener.enterInpchar(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof barrousListener ) {
	        listener.exitInpchar(this);
		}
	}


}



class InpnumContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = barrousParser.RULE_inpnum;
    }

	id() {
	    return this.getTypedRuleContext(IdContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof barrousListener ) {
	        listener.enterInpnum(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof barrousListener ) {
	        listener.exitInpnum(this);
		}
	}


}



class CommandContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = barrousParser.RULE_command;
    }

	forward() {
	    return this.getTypedRuleContext(ForwardContext,0);
	};

	backward() {
	    return this.getTypedRuleContext(BackwardContext,0);
	};

	add_() {
	    return this.getTypedRuleContext(Add_Context,0);
	};

	subtract_() {
	    return this.getTypedRuleContext(Subtract_Context,0);
	};

	push_() {
	    return this.getTypedRuleContext(Push_Context,0);
	};

	pop_() {
	    return this.getTypedRuleContext(Pop_Context,0);
	};

	reset_() {
	    return this.getTypedRuleContext(Reset_Context,0);
	};

	end() {
	    return this.getTypedRuleContext(EndContext,0);
	};

	printchar() {
	    return this.getTypedRuleContext(PrintcharContext,0);
	};

	printval() {
	    return this.getTypedRuleContext(PrintvalContext,0);
	};

	rand() {
	    return this.getTypedRuleContext(RandContext,0);
	};

	inpchar() {
	    return this.getTypedRuleContext(InpcharContext,0);
	};

	inpnum() {
	    return this.getTypedRuleContext(InpnumContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof barrousListener ) {
	        listener.enterCommand(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof barrousListener ) {
	        listener.exitCommand(this);
		}
	}


}



class IdContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = barrousParser.RULE_id;
    }

	INDENTIFIER() {
	    return this.getToken(barrousParser.INDENTIFIER, 0);
	};

	INT() {
	    return this.getToken(barrousParser.INT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof barrousListener ) {
	        listener.enterId(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof barrousListener ) {
	        listener.exitId(this);
		}
	}


}




barrousParser.BarrousContext = BarrousContext; 
barrousParser.ForwardContext = ForwardContext; 
barrousParser.BackwardContext = BackwardContext; 
barrousParser.Add_Context = Add_Context; 
barrousParser.Subtract_Context = Subtract_Context; 
barrousParser.Push_Context = Push_Context; 
barrousParser.Pop_Context = Pop_Context; 
barrousParser.Reset_Context = Reset_Context; 
barrousParser.EndContext = EndContext; 
barrousParser.PrintcharContext = PrintcharContext; 
barrousParser.PrintvalContext = PrintvalContext; 
barrousParser.RandContext = RandContext; 
barrousParser.InpcharContext = InpcharContext; 
barrousParser.InpnumContext = InpnumContext; 
barrousParser.CommandContext = CommandContext; 
barrousParser.IdContext = IdContext; 

// --- Dynamic Universal Module Wrapper ---
if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = { CPP14Lexer };
} else if (typeof window !== 'undefined') {
    window.CPP14Lexer = CPP14Lexer;
} else if (typeof self !== 'undefined') {
    self.CPP14Lexer = CPP14Lexer;
}
