// Generated from C:/Users/megam/jupyter_ops/Resources/Parsers/rfc1035/domain.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import domainListener from './domainListener.js';
const serializedATN = [4,1,8,19,2,0,7,0,2,1,7,1,1,0,1,0,3,0,7,8,0,1,0,1,
0,1,1,1,1,1,1,5,1,14,8,1,10,1,12,1,17,9,1,1,1,0,0,2,0,2,0,0,18,0,6,1,0,0,
0,2,10,1,0,0,0,4,7,3,2,1,0,5,7,5,1,0,0,6,4,1,0,0,0,6,5,1,0,0,0,7,8,1,0,0,
0,8,9,5,0,0,1,9,1,1,0,0,0,10,15,5,3,0,0,11,12,5,2,0,0,12,14,5,3,0,0,13,11,
1,0,0,0,14,17,1,0,0,0,15,13,1,0,0,0,15,16,1,0,0,0,16,3,1,0,0,0,17,15,1,0,
0,0,2,6,15];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class domainParser extends antlr4.Parser {

    static grammarFileName = "domain.g4";
    static literalNames = [ null, "' '", "'.'" ];
    static symbolicNames = [ null, null, null, "LABEL", "LDH_STR", "LET_DIG_HYP", 
                             "LET_DIG", "LETTER", "DIGIT" ];
    static ruleNames = [ "domain", "subdomain" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = domainParser.ruleNames;
        this.literalNames = domainParser.literalNames;
        this.symbolicNames = domainParser.symbolicNames;
    }



	domain() {
	    let localctx = new DomainContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, domainParser.RULE_domain);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 6;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 3:
	            this.state = 4;
	            this.subdomain();
	            break;
	        case 1:
	            this.state = 5;
	            this.match(domainParser.T__0);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 8;
	        this.match(domainParser.EOF);
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



	subdomain() {
	    let localctx = new SubdomainContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, domainParser.RULE_subdomain);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 10;
	        this.match(domainParser.LABEL);
	        this.state = 15;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===2) {
	            this.state = 11;
	            this.match(domainParser.T__1);
	            this.state = 12;
	            this.match(domainParser.LABEL);
	            this.state = 17;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
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

domainParser.EOF = antlr4.Token.EOF;
domainParser.T__0 = 1;
domainParser.T__1 = 2;
domainParser.LABEL = 3;
domainParser.LDH_STR = 4;
domainParser.LET_DIG_HYP = 5;
domainParser.LET_DIG = 6;
domainParser.LETTER = 7;
domainParser.DIGIT = 8;

domainParser.RULE_domain = 0;
domainParser.RULE_subdomain = 1;

class DomainContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = domainParser.RULE_domain;
    }

	EOF() {
	    return this.getToken(domainParser.EOF, 0);
	};

	subdomain() {
	    return this.getTypedRuleContext(SubdomainContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof domainListener ) {
	        listener.enterDomain(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof domainListener ) {
	        listener.exitDomain(this);
		}
	}


}



class SubdomainContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = domainParser.RULE_subdomain;
    }

	LABEL = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(domainParser.LABEL);
	    } else {
	        return this.getToken(domainParser.LABEL, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof domainListener ) {
	        listener.enterSubdomain(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof domainListener ) {
	        listener.exitSubdomain(this);
		}
	}


}




domainParser.DomainContext = DomainContext; 
domainParser.SubdomainContext = SubdomainContext; 

// --- Dynamic Universal Module Wrapper ---
if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = { CPP14Lexer };
} else if (typeof window !== 'undefined') {
    window.CPP14Lexer = CPP14Lexer;
} else if (typeof self !== 'undefined') {
    self.CPP14Lexer = CPP14Lexer;
}
