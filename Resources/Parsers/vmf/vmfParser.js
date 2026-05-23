// Generated from C:/Users/megam/jupyter_ops/Resources/Parsers/vmf/vmf.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import vmfListener from './vmfListener.js';
const serializedATN = [4,1,5,48,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,1,0,4,0,14,8,0,11,0,12,0,15,1,0,1,0,1,1,1,1,4,1,22,8,1,11,1,12,1,
23,1,1,4,1,27,8,1,11,1,12,1,28,3,1,31,8,1,1,2,1,2,1,3,1,3,1,4,1,4,1,5,1,
5,5,5,41,8,5,10,5,12,5,44,9,5,1,5,1,5,1,5,0,0,6,0,2,4,6,8,10,0,1,1,0,3,4,
46,0,13,1,0,0,0,2,19,1,0,0,0,4,32,1,0,0,0,6,34,1,0,0,0,8,36,1,0,0,0,10,38,
1,0,0,0,12,14,3,2,1,0,13,12,1,0,0,0,14,15,1,0,0,0,15,13,1,0,0,0,15,16,1,
0,0,0,16,17,1,0,0,0,17,18,5,0,0,1,18,1,1,0,0,0,19,30,3,4,2,0,20,22,3,6,3,
0,21,20,1,0,0,0,22,23,1,0,0,0,23,21,1,0,0,0,23,24,1,0,0,0,24,31,1,0,0,0,
25,27,3,10,5,0,26,25,1,0,0,0,27,28,1,0,0,0,28,26,1,0,0,0,28,29,1,0,0,0,29,
31,1,0,0,0,30,21,1,0,0,0,30,26,1,0,0,0,31,3,1,0,0,0,32,33,3,8,4,0,33,5,1,
0,0,0,34,35,3,8,4,0,35,7,1,0,0,0,36,37,7,0,0,0,37,9,1,0,0,0,38,42,5,1,0,
0,39,41,3,2,1,0,40,39,1,0,0,0,41,44,1,0,0,0,42,40,1,0,0,0,42,43,1,0,0,0,
43,45,1,0,0,0,44,42,1,0,0,0,45,46,5,2,0,0,46,11,1,0,0,0,5,15,23,28,30,42];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class vmfParser extends antlr4.Parser {

    static grammarFileName = "vmf.g4";
    static literalNames = [ null, "'{'", "'}'" ];
    static symbolicNames = [ null, null, null, "QUOTEDSTTRING", "STRING", 
                             "WS" ];
    static ruleNames = [ "vmf", "keyvalue", "key", "atomicvalue", "val", 
                         "listvalue" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = vmfParser.ruleNames;
        this.literalNames = vmfParser.literalNames;
        this.symbolicNames = vmfParser.symbolicNames;
    }



	vmf() {
	    let localctx = new VmfContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, vmfParser.RULE_vmf);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 13; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 12;
	            this.keyvalue();
	            this.state = 15; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===3 || _la===4);
	        this.state = 17;
	        this.match(vmfParser.EOF);
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



	keyvalue() {
	    let localctx = new KeyvalueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, vmfParser.RULE_keyvalue);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 19;
	        this.key();
	        this.state = 30;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 3:
	        case 4:
	            this.state = 21; 
	            this._errHandler.sync(this);
	            var _alt = 1;
	            do {
	            	switch (_alt) {
	            	case 1:
	            		this.state = 20;
	            		this.atomicvalue();
	            		break;
	            	default:
	            		throw new antlr4.error.NoViableAltException(this);
	            	}
	            	this.state = 23; 
	            	this._errHandler.sync(this);
	            	_alt = this._interp.adaptivePredict(this._input,1, this._ctx);
	            } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	            break;
	        case 1:
	            this.state = 26; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 25;
	                this.listvalue();
	                this.state = 28; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(_la===1);
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



	key() {
	    let localctx = new KeyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, vmfParser.RULE_key);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 32;
	        this.val();
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



	atomicvalue() {
	    let localctx = new AtomicvalueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, vmfParser.RULE_atomicvalue);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 34;
	        this.val();
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



	val() {
	    let localctx = new ValContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, vmfParser.RULE_val);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 36;
	        _la = this._input.LA(1);
	        if(!(_la===3 || _la===4)) {
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



	listvalue() {
	    let localctx = new ListvalueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, vmfParser.RULE_listvalue);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 38;
	        this.match(vmfParser.T__0);
	        this.state = 42;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===3 || _la===4) {
	            this.state = 39;
	            this.keyvalue();
	            this.state = 44;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 45;
	        this.match(vmfParser.T__1);
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

vmfParser.EOF = antlr4.Token.EOF;
vmfParser.T__0 = 1;
vmfParser.T__1 = 2;
vmfParser.QUOTEDSTTRING = 3;
vmfParser.STRING = 4;
vmfParser.WS = 5;

vmfParser.RULE_vmf = 0;
vmfParser.RULE_keyvalue = 1;
vmfParser.RULE_key = 2;
vmfParser.RULE_atomicvalue = 3;
vmfParser.RULE_val = 4;
vmfParser.RULE_listvalue = 5;

class VmfContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = vmfParser.RULE_vmf;
    }

	EOF() {
	    return this.getToken(vmfParser.EOF, 0);
	};

	keyvalue = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(KeyvalueContext);
	    } else {
	        return this.getTypedRuleContext(KeyvalueContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof vmfListener ) {
	        listener.enterVmf(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof vmfListener ) {
	        listener.exitVmf(this);
		}
	}


}



class KeyvalueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = vmfParser.RULE_keyvalue;
    }

	key() {
	    return this.getTypedRuleContext(KeyContext,0);
	};

	atomicvalue = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AtomicvalueContext);
	    } else {
	        return this.getTypedRuleContext(AtomicvalueContext,i);
	    }
	};

	listvalue = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ListvalueContext);
	    } else {
	        return this.getTypedRuleContext(ListvalueContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof vmfListener ) {
	        listener.enterKeyvalue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof vmfListener ) {
	        listener.exitKeyvalue(this);
		}
	}


}



class KeyContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = vmfParser.RULE_key;
    }

	val() {
	    return this.getTypedRuleContext(ValContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof vmfListener ) {
	        listener.enterKey(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof vmfListener ) {
	        listener.exitKey(this);
		}
	}


}



class AtomicvalueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = vmfParser.RULE_atomicvalue;
    }

	val() {
	    return this.getTypedRuleContext(ValContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof vmfListener ) {
	        listener.enterAtomicvalue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof vmfListener ) {
	        listener.exitAtomicvalue(this);
		}
	}


}



class ValContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = vmfParser.RULE_val;
    }

	QUOTEDSTTRING() {
	    return this.getToken(vmfParser.QUOTEDSTTRING, 0);
	};

	STRING() {
	    return this.getToken(vmfParser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof vmfListener ) {
	        listener.enterVal(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof vmfListener ) {
	        listener.exitVal(this);
		}
	}


}



class ListvalueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = vmfParser.RULE_listvalue;
    }

	keyvalue = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(KeyvalueContext);
	    } else {
	        return this.getTypedRuleContext(KeyvalueContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof vmfListener ) {
	        listener.enterListvalue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof vmfListener ) {
	        listener.exitListvalue(this);
		}
	}


}




vmfParser.VmfContext = VmfContext; 
vmfParser.KeyvalueContext = KeyvalueContext; 
vmfParser.KeyContext = KeyContext; 
vmfParser.AtomicvalueContext = AtomicvalueContext; 
vmfParser.ValContext = ValContext; 
vmfParser.ListvalueContext = ListvalueContext; 

// --- Dynamic Universal Module Wrapper ---
if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = { CPP14Lexer };
} else if (typeof window !== 'undefined') {
    window.CPP14Lexer = CPP14Lexer;
} else if (typeof self !== 'undefined') {
    self.CPP14Lexer = CPP14Lexer;
}
