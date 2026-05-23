// Generated from C:/Users/megam/jupyter_ops/Resources/Parsers/unicode/unicode16/classify.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import classifyListener from './classifyListener.js';
const serializedATN = [4,1,43,10,2,0,7,0,2,1,7,1,1,0,1,0,1,0,1,1,1,1,1,1,
0,0,2,0,2,0,1,1,0,1,31,7,0,4,1,0,0,0,2,7,1,0,0,0,4,5,3,2,1,0,5,6,5,0,0,1,
6,1,1,0,0,0,7,8,7,0,0,0,8,3,1,0,0,0,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class classifyParser extends antlr4.Parser {

    static grammarFileName = "classify.g4";
    static literalNames = [ null, null, null, null, null, null, null, null, 
                            null, null, null, null, null, null, null, null, 
                            null, null, null, null, null, null, null, null, 
                            null, null, null, null, null, "'\\u2028'", "'\\u2029'" ];
    static symbolicNames = [ null, "CLASSIFY___", "CLASSIFY_Cc", "CLASSIFY_Cf", 
                             "CLASSIFY_Cn", "CLASSIFY_Co", "CLASSIFY_Cs", 
                             "CLASSIFY_Ll", "CLASSIFY_Lm", "CLASSIFY_Lo", 
                             "CLASSIFY_Lt", "CLASSIFY_Lu", "CLASSIFY_Mc", 
                             "CLASSIFY_Me", "CLASSIFY_Mn", "CLASSIFY_Nd", 
                             "CLASSIFY_Nl", "CLASSIFY_No", "CLASSIFY_Pc", 
                             "CLASSIFY_Pd", "CLASSIFY_Pe", "CLASSIFY_Pf", 
                             "CLASSIFY_Pi", "CLASSIFY_Po", "CLASSIFY_Ps", 
                             "CLASSIFY_Sc", "CLASSIFY_Sk", "CLASSIFY_Sm", 
                             "CLASSIFY_So", "CLASSIFY_Zl", "CLASSIFY_Zp", 
                             "CLASSIFY_Zs", "CLASSIFY_C", "CLASSIFY_LC", 
                             "CLASSIFY_M", "CLASSIFY_L", "CLASSIFY_N", "CLASSIFY_P", 
                             "CLASSIFY_S", "CLASSIFY_Z", "CLASSIFY_WS", 
                             "CLASSIFY_ID0", "CLASSIFY_ID1", "ID" ];
    static ruleNames = [ "file_", "codepoint" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = classifyParser.ruleNames;
        this.literalNames = classifyParser.literalNames;
        this.symbolicNames = classifyParser.symbolicNames;
    }



	file_() {
	    let localctx = new File_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, classifyParser.RULE_file_);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 4;
	        this.codepoint();
	        this.state = 5;
	        this.match(classifyParser.EOF);
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



	codepoint() {
	    let localctx = new CodepointContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, classifyParser.RULE_codepoint);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 7;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 4294967294) !== 0))) {
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

classifyParser.EOF = antlr4.Token.EOF;
classifyParser.CLASSIFY___ = 1;
classifyParser.CLASSIFY_Cc = 2;
classifyParser.CLASSIFY_Cf = 3;
classifyParser.CLASSIFY_Cn = 4;
classifyParser.CLASSIFY_Co = 5;
classifyParser.CLASSIFY_Cs = 6;
classifyParser.CLASSIFY_Ll = 7;
classifyParser.CLASSIFY_Lm = 8;
classifyParser.CLASSIFY_Lo = 9;
classifyParser.CLASSIFY_Lt = 10;
classifyParser.CLASSIFY_Lu = 11;
classifyParser.CLASSIFY_Mc = 12;
classifyParser.CLASSIFY_Me = 13;
classifyParser.CLASSIFY_Mn = 14;
classifyParser.CLASSIFY_Nd = 15;
classifyParser.CLASSIFY_Nl = 16;
classifyParser.CLASSIFY_No = 17;
classifyParser.CLASSIFY_Pc = 18;
classifyParser.CLASSIFY_Pd = 19;
classifyParser.CLASSIFY_Pe = 20;
classifyParser.CLASSIFY_Pf = 21;
classifyParser.CLASSIFY_Pi = 22;
classifyParser.CLASSIFY_Po = 23;
classifyParser.CLASSIFY_Ps = 24;
classifyParser.CLASSIFY_Sc = 25;
classifyParser.CLASSIFY_Sk = 26;
classifyParser.CLASSIFY_Sm = 27;
classifyParser.CLASSIFY_So = 28;
classifyParser.CLASSIFY_Zl = 29;
classifyParser.CLASSIFY_Zp = 30;
classifyParser.CLASSIFY_Zs = 31;
classifyParser.CLASSIFY_C = 32;
classifyParser.CLASSIFY_LC = 33;
classifyParser.CLASSIFY_M = 34;
classifyParser.CLASSIFY_L = 35;
classifyParser.CLASSIFY_N = 36;
classifyParser.CLASSIFY_P = 37;
classifyParser.CLASSIFY_S = 38;
classifyParser.CLASSIFY_Z = 39;
classifyParser.CLASSIFY_WS = 40;
classifyParser.CLASSIFY_ID0 = 41;
classifyParser.CLASSIFY_ID1 = 42;
classifyParser.ID = 43;

classifyParser.RULE_file_ = 0;
classifyParser.RULE_codepoint = 1;

class File_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = classifyParser.RULE_file_;
    }

	codepoint() {
	    return this.getTypedRuleContext(CodepointContext,0);
	};

	EOF() {
	    return this.getToken(classifyParser.EOF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof classifyListener ) {
	        listener.enterFile_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof classifyListener ) {
	        listener.exitFile_(this);
		}
	}


}



class CodepointContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = classifyParser.RULE_codepoint;
    }

	CLASSIFY___() {
	    return this.getToken(classifyParser.CLASSIFY___, 0);
	};

	CLASSIFY_Cc() {
	    return this.getToken(classifyParser.CLASSIFY_Cc, 0);
	};

	CLASSIFY_Cf() {
	    return this.getToken(classifyParser.CLASSIFY_Cf, 0);
	};

	CLASSIFY_Cn() {
	    return this.getToken(classifyParser.CLASSIFY_Cn, 0);
	};

	CLASSIFY_Co() {
	    return this.getToken(classifyParser.CLASSIFY_Co, 0);
	};

	CLASSIFY_Cs() {
	    return this.getToken(classifyParser.CLASSIFY_Cs, 0);
	};

	CLASSIFY_Ll() {
	    return this.getToken(classifyParser.CLASSIFY_Ll, 0);
	};

	CLASSIFY_Lm() {
	    return this.getToken(classifyParser.CLASSIFY_Lm, 0);
	};

	CLASSIFY_Lo() {
	    return this.getToken(classifyParser.CLASSIFY_Lo, 0);
	};

	CLASSIFY_Lt() {
	    return this.getToken(classifyParser.CLASSIFY_Lt, 0);
	};

	CLASSIFY_Lu() {
	    return this.getToken(classifyParser.CLASSIFY_Lu, 0);
	};

	CLASSIFY_Mc() {
	    return this.getToken(classifyParser.CLASSIFY_Mc, 0);
	};

	CLASSIFY_Me() {
	    return this.getToken(classifyParser.CLASSIFY_Me, 0);
	};

	CLASSIFY_Mn() {
	    return this.getToken(classifyParser.CLASSIFY_Mn, 0);
	};

	CLASSIFY_Nd() {
	    return this.getToken(classifyParser.CLASSIFY_Nd, 0);
	};

	CLASSIFY_Nl() {
	    return this.getToken(classifyParser.CLASSIFY_Nl, 0);
	};

	CLASSIFY_No() {
	    return this.getToken(classifyParser.CLASSIFY_No, 0);
	};

	CLASSIFY_Pc() {
	    return this.getToken(classifyParser.CLASSIFY_Pc, 0);
	};

	CLASSIFY_Pd() {
	    return this.getToken(classifyParser.CLASSIFY_Pd, 0);
	};

	CLASSIFY_Pe() {
	    return this.getToken(classifyParser.CLASSIFY_Pe, 0);
	};

	CLASSIFY_Pf() {
	    return this.getToken(classifyParser.CLASSIFY_Pf, 0);
	};

	CLASSIFY_Pi() {
	    return this.getToken(classifyParser.CLASSIFY_Pi, 0);
	};

	CLASSIFY_Po() {
	    return this.getToken(classifyParser.CLASSIFY_Po, 0);
	};

	CLASSIFY_Ps() {
	    return this.getToken(classifyParser.CLASSIFY_Ps, 0);
	};

	CLASSIFY_Sc() {
	    return this.getToken(classifyParser.CLASSIFY_Sc, 0);
	};

	CLASSIFY_Sk() {
	    return this.getToken(classifyParser.CLASSIFY_Sk, 0);
	};

	CLASSIFY_Sm() {
	    return this.getToken(classifyParser.CLASSIFY_Sm, 0);
	};

	CLASSIFY_So() {
	    return this.getToken(classifyParser.CLASSIFY_So, 0);
	};

	CLASSIFY_Zl() {
	    return this.getToken(classifyParser.CLASSIFY_Zl, 0);
	};

	CLASSIFY_Zp() {
	    return this.getToken(classifyParser.CLASSIFY_Zp, 0);
	};

	CLASSIFY_Zs() {
	    return this.getToken(classifyParser.CLASSIFY_Zs, 0);
	};

	enterRule(listener) {
	    if(listener instanceof classifyListener ) {
	        listener.enterCodepoint(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof classifyListener ) {
	        listener.exitCodepoint(this);
		}
	}


}




classifyParser.File_Context = File_Context; 
classifyParser.CodepointContext = CodepointContext; 

// --- Dynamic Universal Module Wrapper ---
if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = { CPP14Lexer };
} else if (typeof window !== 'undefined') {
    window.CPP14Lexer = CPP14Lexer;
} else if (typeof self !== 'undefined') {
    self.CPP14Lexer = CPP14Lexer;
}
