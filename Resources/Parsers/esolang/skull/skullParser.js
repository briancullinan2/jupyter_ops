// Generated from C:/Users/megam/jupyter_ops/Resources/Parsers/esolang/skull/skull.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import skullListener from './skullListener.js';
const serializedATN = [4,1,12,57,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,1,0,5,0,18,8,0,10,0,12,0,21,9,0,1,0,1,0,1,1,1,1,
1,1,1,1,1,1,3,1,30,8,1,1,2,1,2,1,2,1,2,1,3,1,3,1,3,1,4,1,4,1,4,1,4,1,4,1,
4,1,4,1,5,1,5,1,5,1,5,1,6,1,6,1,7,3,7,53,8,7,1,7,1,7,1,7,0,0,8,0,2,4,6,8,
10,12,14,0,2,1,0,8,9,1,0,6,7,54,0,19,1,0,0,0,2,29,1,0,0,0,4,31,1,0,0,0,6,
35,1,0,0,0,8,38,1,0,0,0,10,45,1,0,0,0,12,49,1,0,0,0,14,52,1,0,0,0,16,18,
3,2,1,0,17,16,1,0,0,0,18,21,1,0,0,0,19,17,1,0,0,0,19,20,1,0,0,0,20,22,1,
0,0,0,21,19,1,0,0,0,22,23,5,0,0,1,23,1,1,0,0,0,24,30,3,4,2,0,25,30,3,6,3,
0,26,30,3,8,4,0,27,30,3,10,5,0,28,30,3,12,6,0,29,24,1,0,0,0,29,25,1,0,0,
0,29,26,1,0,0,0,29,27,1,0,0,0,29,28,1,0,0,0,30,3,1,0,0,0,31,32,5,1,0,0,32,
33,3,14,7,0,33,34,5,1,0,0,34,5,1,0,0,0,35,36,5,2,0,0,36,37,5,2,0,0,37,7,
1,0,0,0,38,39,5,1,0,0,39,40,3,14,7,0,40,41,5,3,0,0,41,42,3,14,7,0,42,43,
5,4,0,0,43,44,5,2,0,0,44,9,1,0,0,0,45,46,5,5,0,0,46,47,3,14,7,0,47,48,5,
5,0,0,48,11,1,0,0,0,49,50,7,0,0,0,50,13,1,0,0,0,51,53,7,1,0,0,52,51,1,0,
0,0,52,53,1,0,0,0,53,54,1,0,0,0,54,55,5,10,0,0,55,15,1,0,0,0,3,19,29,52];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class skullParser extends antlr4.Parser {

    static grammarFileName = "skull.g4";
    static literalNames = [ null, "'{'", "'}'", "'['", "']'", "'|'", "'-'", 
                            "'+'", "':ASC:'", "':NUM:'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             "ASC", "NUM", "INT", "WS", "COMMENT" ];
    static ruleNames = [ "skull", "command", "while", "endwhile", "incdec", 
                         "print", "mode_", "num" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = skullParser.ruleNames;
        this.literalNames = skullParser.literalNames;
        this.symbolicNames = skullParser.symbolicNames;
    }



	skull() {
	    let localctx = new SkullContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, skullParser.RULE_skull);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 19;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 806) !== 0)) {
	            this.state = 16;
	            this.command();
	            this.state = 21;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 22;
	        this.match(skullParser.EOF);
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
	    this.enterRule(localctx, 2, skullParser.RULE_command);
	    try {
	        this.state = 29;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 24;
	            this.while_();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 25;
	            this.endwhile();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 26;
	            this.incdec();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 27;
	            this.print();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 28;
	            this.mode_();
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



	while_() {
	    let localctx = new WhileContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, skullParser.RULE_while);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 31;
	        this.match(skullParser.T__0);
	        this.state = 32;
	        this.num();
	        this.state = 33;
	        this.match(skullParser.T__0);
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



	endwhile() {
	    let localctx = new EndwhileContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, skullParser.RULE_endwhile);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 35;
	        this.match(skullParser.T__1);
	        this.state = 36;
	        this.match(skullParser.T__1);
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



	incdec() {
	    let localctx = new IncdecContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, skullParser.RULE_incdec);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 38;
	        this.match(skullParser.T__0);
	        this.state = 39;
	        this.num();
	        this.state = 40;
	        this.match(skullParser.T__2);
	        this.state = 41;
	        this.num();
	        this.state = 42;
	        this.match(skullParser.T__3);
	        this.state = 43;
	        this.match(skullParser.T__1);
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



	print() {
	    let localctx = new PrintContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, skullParser.RULE_print);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 45;
	        this.match(skullParser.T__4);
	        this.state = 46;
	        this.num();
	        this.state = 47;
	        this.match(skullParser.T__4);
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



	mode_() {
	    let localctx = new Mode_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, skullParser.RULE_mode_);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 49;
	        _la = this._input.LA(1);
	        if(!(_la===8 || _la===9)) {
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



	num() {
	    let localctx = new NumContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, skullParser.RULE_num);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 52;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===6 || _la===7) {
	            this.state = 51;
	            _la = this._input.LA(1);
	            if(!(_la===6 || _la===7)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	        }

	        this.state = 54;
	        this.match(skullParser.INT);
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

skullParser.EOF = antlr4.Token.EOF;
skullParser.T__0 = 1;
skullParser.T__1 = 2;
skullParser.T__2 = 3;
skullParser.T__3 = 4;
skullParser.T__4 = 5;
skullParser.T__5 = 6;
skullParser.T__6 = 7;
skullParser.ASC = 8;
skullParser.NUM = 9;
skullParser.INT = 10;
skullParser.WS = 11;
skullParser.COMMENT = 12;

skullParser.RULE_skull = 0;
skullParser.RULE_command = 1;
skullParser.RULE_while = 2;
skullParser.RULE_endwhile = 3;
skullParser.RULE_incdec = 4;
skullParser.RULE_print = 5;
skullParser.RULE_mode_ = 6;
skullParser.RULE_num = 7;

class SkullContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = skullParser.RULE_skull;
    }

	EOF() {
	    return this.getToken(skullParser.EOF, 0);
	};

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

	enterRule(listener) {
	    if(listener instanceof skullListener ) {
	        listener.enterSkull(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof skullListener ) {
	        listener.exitSkull(this);
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
        this.ruleIndex = skullParser.RULE_command;
    }

	while_() {
	    return this.getTypedRuleContext(WhileContext,0);
	};

	endwhile() {
	    return this.getTypedRuleContext(EndwhileContext,0);
	};

	incdec() {
	    return this.getTypedRuleContext(IncdecContext,0);
	};

	print() {
	    return this.getTypedRuleContext(PrintContext,0);
	};

	mode_() {
	    return this.getTypedRuleContext(Mode_Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof skullListener ) {
	        listener.enterCommand(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof skullListener ) {
	        listener.exitCommand(this);
		}
	}


}



class WhileContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = skullParser.RULE_while;
    }

	num() {
	    return this.getTypedRuleContext(NumContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof skullListener ) {
	        listener.enterWhile(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof skullListener ) {
	        listener.exitWhile(this);
		}
	}


}



class EndwhileContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = skullParser.RULE_endwhile;
    }


	enterRule(listener) {
	    if(listener instanceof skullListener ) {
	        listener.enterEndwhile(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof skullListener ) {
	        listener.exitEndwhile(this);
		}
	}


}



class IncdecContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = skullParser.RULE_incdec;
    }

	num = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(NumContext);
	    } else {
	        return this.getTypedRuleContext(NumContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof skullListener ) {
	        listener.enterIncdec(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof skullListener ) {
	        listener.exitIncdec(this);
		}
	}


}



class PrintContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = skullParser.RULE_print;
    }

	num() {
	    return this.getTypedRuleContext(NumContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof skullListener ) {
	        listener.enterPrint(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof skullListener ) {
	        listener.exitPrint(this);
		}
	}


}



class Mode_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = skullParser.RULE_mode_;
    }

	ASC() {
	    return this.getToken(skullParser.ASC, 0);
	};

	NUM() {
	    return this.getToken(skullParser.NUM, 0);
	};

	enterRule(listener) {
	    if(listener instanceof skullListener ) {
	        listener.enterMode_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof skullListener ) {
	        listener.exitMode_(this);
		}
	}


}



class NumContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = skullParser.RULE_num;
    }

	INT() {
	    return this.getToken(skullParser.INT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof skullListener ) {
	        listener.enterNum(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof skullListener ) {
	        listener.exitNum(this);
		}
	}


}




skullParser.SkullContext = SkullContext; 
skullParser.CommandContext = CommandContext; 
skullParser.WhileContext = WhileContext; 
skullParser.EndwhileContext = EndwhileContext; 
skullParser.IncdecContext = IncdecContext; 
skullParser.PrintContext = PrintContext; 
skullParser.Mode_Context = Mode_Context; 
skullParser.NumContext = NumContext; 

// --- Dynamic Universal Module Wrapper ---
if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = { CPP14Lexer };
} else if (typeof window !== 'undefined') {
    window.CPP14Lexer = CPP14Lexer;
} else if (typeof self !== 'undefined') {
    self.CPP14Lexer = CPP14Lexer;
}
