// Generated from ./pmmn/PMMN.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import PMMNListener from './PMMNListener.js';
const serializedATN = [4,1,12,71,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
1,0,1,0,1,0,1,0,1,0,5,0,16,8,0,10,0,12,0,19,9,0,1,1,1,1,1,1,1,1,1,2,1,2,
1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,
1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,3,2,54,8,2,1,3,1,3,1,3,1,3,1,3,1,4,1,
4,1,4,1,4,1,4,5,4,66,8,4,10,4,12,4,69,9,4,1,4,0,2,0,8,5,0,2,4,6,8,0,0,71,
0,10,1,0,0,0,2,20,1,0,0,0,4,53,1,0,0,0,6,55,1,0,0,0,8,60,1,0,0,0,10,11,6,
0,-1,0,11,12,3,4,2,0,12,17,1,0,0,0,13,14,10,1,0,0,14,16,3,4,2,0,15,13,1,
0,0,0,16,19,1,0,0,0,17,15,1,0,0,0,17,18,1,0,0,0,18,1,1,0,0,0,19,17,1,0,0,
0,20,21,5,1,0,0,21,22,3,0,0,0,22,23,5,2,0,0,23,3,1,0,0,0,24,25,5,3,0,0,25,
26,5,4,0,0,26,27,3,8,4,0,27,28,5,5,0,0,28,29,5,6,0,0,29,54,1,0,0,0,30,31,
3,6,3,0,31,32,5,6,0,0,32,54,1,0,0,0,33,34,5,7,0,0,34,35,5,4,0,0,35,36,3,
6,3,0,36,37,5,5,0,0,37,38,3,2,1,0,38,54,1,0,0,0,39,40,5,7,0,0,40,41,5,4,
0,0,41,42,3,6,3,0,42,43,5,5,0,0,43,44,3,2,1,0,44,45,5,8,0,0,45,46,3,2,1,
0,46,54,1,0,0,0,47,48,5,9,0,0,48,49,5,4,0,0,49,50,3,6,3,0,50,51,5,5,0,0,
51,52,3,2,1,0,52,54,1,0,0,0,53,24,1,0,0,0,53,30,1,0,0,0,53,33,1,0,0,0,53,
39,1,0,0,0,53,47,1,0,0,0,54,5,1,0,0,0,55,56,5,10,0,0,56,57,5,4,0,0,57,58,
3,8,4,0,58,59,5,5,0,0,59,7,1,0,0,0,60,61,6,4,-1,0,61,62,5,11,0,0,62,67,1,
0,0,0,63,64,10,1,0,0,64,66,5,11,0,0,65,63,1,0,0,0,66,69,1,0,0,0,67,65,1,
0,0,0,67,68,1,0,0,0,68,9,1,0,0,0,69,67,1,0,0,0,3,17,53,67];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class PMMNParser extends antlr4.Parser {

    static grammarFileName = "PMMN.g4";
    static literalNames = [ null, "'{'", "'}'", "'inc'", "'('", "')'", "';'", 
                            "'if'", "'else'", "'while'", "'dec'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, "DIGIT", "WS" ];
    static ruleNames = [ "commandlist", "block", "command", "test", "counter" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = PMMNParser.ruleNames;
        this.literalNames = PMMNParser.literalNames;
        this.symbolicNames = PMMNParser.symbolicNames;
    }

    get atn() {
        return atn;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 0:
    	    		return this.commandlist_sempred(localctx, predIndex);
    	case 4:
    	    		return this.counter_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    commandlist_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 1);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    counter_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 1:
    			return this.precpred(this._ctx, 1);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };



	commandlist(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new CommandlistContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 0;
	    this.enterRecursionRule(localctx, 0, PMMNParser.RULE_commandlist, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 11;
	        this.command();
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 17;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,0,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new CommandlistContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, PMMNParser.RULE_commandlist);
	                this.state = 13;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 14;
	                this.command(); 
	            }
	            this.state = 19;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,0,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	block() {
	    let localctx = new BlockContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, PMMNParser.RULE_block);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 20;
	        this.match(PMMNParser.T__0);
	        this.state = 21;
	        this.commandlist(0);
	        this.state = 22;
	        this.match(PMMNParser.T__1);
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
	    this.enterRule(localctx, 4, PMMNParser.RULE_command);
	    try {
	        this.state = 53;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 24;
	            this.match(PMMNParser.T__2);
	            this.state = 25;
	            this.match(PMMNParser.T__3);
	            this.state = 26;
	            this.counter(0);
	            this.state = 27;
	            this.match(PMMNParser.T__4);
	            this.state = 28;
	            this.match(PMMNParser.T__5);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 30;
	            this.test();
	            this.state = 31;
	            this.match(PMMNParser.T__5);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 33;
	            this.match(PMMNParser.T__6);
	            this.state = 34;
	            this.match(PMMNParser.T__3);
	            this.state = 35;
	            this.test();
	            this.state = 36;
	            this.match(PMMNParser.T__4);
	            this.state = 37;
	            this.block();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 39;
	            this.match(PMMNParser.T__6);
	            this.state = 40;
	            this.match(PMMNParser.T__3);
	            this.state = 41;
	            this.test();
	            this.state = 42;
	            this.match(PMMNParser.T__4);
	            this.state = 43;
	            this.block();
	            this.state = 44;
	            this.match(PMMNParser.T__7);
	            this.state = 45;
	            this.block();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 47;
	            this.match(PMMNParser.T__8);
	            this.state = 48;
	            this.match(PMMNParser.T__3);
	            this.state = 49;
	            this.test();
	            this.state = 50;
	            this.match(PMMNParser.T__4);
	            this.state = 51;
	            this.block();
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



	test() {
	    let localctx = new TestContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, PMMNParser.RULE_test);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 55;
	        this.match(PMMNParser.T__9);
	        this.state = 56;
	        this.match(PMMNParser.T__3);
	        this.state = 57;
	        this.counter(0);
	        this.state = 58;
	        this.match(PMMNParser.T__4);
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


	counter(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new CounterContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 8;
	    this.enterRecursionRule(localctx, 8, PMMNParser.RULE_counter, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 61;
	        this.match(PMMNParser.DIGIT);
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 67;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,2,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new CounterContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, PMMNParser.RULE_counter);
	                this.state = 63;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 64;
	                this.match(PMMNParser.DIGIT); 
	            }
	            this.state = 69;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,2,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}


}

PMMNParser.EOF = antlr4.Token.EOF;
PMMNParser.T__0 = 1;
PMMNParser.T__1 = 2;
PMMNParser.T__2 = 3;
PMMNParser.T__3 = 4;
PMMNParser.T__4 = 5;
PMMNParser.T__5 = 6;
PMMNParser.T__6 = 7;
PMMNParser.T__7 = 8;
PMMNParser.T__8 = 9;
PMMNParser.T__9 = 10;
PMMNParser.DIGIT = 11;
PMMNParser.WS = 12;

PMMNParser.RULE_commandlist = 0;
PMMNParser.RULE_block = 1;
PMMNParser.RULE_command = 2;
PMMNParser.RULE_test = 3;
PMMNParser.RULE_counter = 4;

class CommandlistContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PMMNParser.RULE_commandlist;
    }

	command() {
	    return this.getTypedRuleContext(CommandContext,0);
	};

	commandlist() {
	    return this.getTypedRuleContext(CommandlistContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PMMNListener ) {
	        listener.enterCommandlist(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PMMNListener ) {
	        listener.exitCommandlist(this);
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
        this.ruleIndex = PMMNParser.RULE_block;
    }

	commandlist() {
	    return this.getTypedRuleContext(CommandlistContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PMMNListener ) {
	        listener.enterBlock(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PMMNListener ) {
	        listener.exitBlock(this);
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
        this.ruleIndex = PMMNParser.RULE_command;
    }

	counter() {
	    return this.getTypedRuleContext(CounterContext,0);
	};

	test() {
	    return this.getTypedRuleContext(TestContext,0);
	};

	block = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(BlockContext);
	    } else {
	        return this.getTypedRuleContext(BlockContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof PMMNListener ) {
	        listener.enterCommand(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PMMNListener ) {
	        listener.exitCommand(this);
		}
	}


}



class TestContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PMMNParser.RULE_test;
    }

	counter() {
	    return this.getTypedRuleContext(CounterContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PMMNListener ) {
	        listener.enterTest(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PMMNListener ) {
	        listener.exitTest(this);
		}
	}


}



class CounterContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PMMNParser.RULE_counter;
    }

	DIGIT() {
	    return this.getToken(PMMNParser.DIGIT, 0);
	};

	counter() {
	    return this.getTypedRuleContext(CounterContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PMMNListener ) {
	        listener.enterCounter(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PMMNListener ) {
	        listener.exitCounter(this);
		}
	}


}




PMMNParser.CommandlistContext = CommandlistContext; 
PMMNParser.BlockContext = BlockContext; 
PMMNParser.CommandContext = CommandContext; 
PMMNParser.TestContext = TestContext; 
PMMNParser.CounterContext = CounterContext; 
