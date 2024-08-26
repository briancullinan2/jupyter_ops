// Generated from Resources/Parsers/stacktrace/StackTrace.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import StackTraceListener from './StackTraceListener.js';
const serializedATN = [4,1,20,125,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,1,0,1,0,1,0,1,1,4,1,39,8,1,11,1,
12,1,40,1,1,5,1,44,8,1,10,1,12,1,47,9,1,1,1,3,1,50,8,1,1,2,1,2,3,2,54,8,
2,1,3,1,3,1,3,1,3,1,3,1,3,3,3,62,8,3,1,3,1,3,1,4,1,4,1,4,1,5,1,5,1,5,1,5,
1,6,1,6,3,6,75,8,6,1,7,3,7,78,8,7,1,7,1,7,5,7,82,8,7,10,7,12,7,85,9,7,1,
8,1,8,1,8,1,9,1,9,1,9,1,9,1,9,3,9,95,8,9,1,10,1,10,1,10,1,10,3,10,101,8,
10,1,11,1,11,1,12,1,12,1,13,1,13,1,13,4,13,110,8,13,11,13,12,13,111,1,14,
1,14,1,15,1,15,1,16,1,16,5,16,120,8,16,10,16,12,16,123,9,16,1,16,1,121,0,
17,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,0,0,121,0,34,1,0,0,0,2,
38,1,0,0,0,4,53,1,0,0,0,6,55,1,0,0,0,8,65,1,0,0,0,10,68,1,0,0,0,12,72,1,
0,0,0,14,77,1,0,0,0,16,86,1,0,0,0,18,94,1,0,0,0,20,96,1,0,0,0,22,102,1,0,
0,0,24,104,1,0,0,0,26,109,1,0,0,0,28,113,1,0,0,0,30,115,1,0,0,0,32,117,1,
0,0,0,34,35,3,2,1,0,35,36,5,0,0,1,36,1,1,0,0,0,37,39,3,12,6,0,38,37,1,0,
0,0,39,40,1,0,0,0,40,38,1,0,0,0,40,41,1,0,0,0,41,45,1,0,0,0,42,44,3,4,2,
0,43,42,1,0,0,0,44,47,1,0,0,0,45,43,1,0,0,0,45,46,1,0,0,0,46,49,1,0,0,0,
47,45,1,0,0,0,48,50,3,8,4,0,49,48,1,0,0,0,49,50,1,0,0,0,50,3,1,0,0,0,51,
54,3,6,3,0,52,54,3,10,5,0,53,51,1,0,0,0,53,52,1,0,0,0,54,5,1,0,0,0,55,56,
5,8,0,0,56,57,3,20,10,0,57,58,5,1,0,0,58,61,3,18,9,0,59,60,5,12,0,0,60,62,
5,5,0,0,61,59,1,0,0,0,61,62,1,0,0,0,62,63,1,0,0,0,63,64,5,2,0,0,64,7,1,0,
0,0,65,66,5,9,0,0,66,67,3,2,1,0,67,9,1,0,0,0,68,69,5,11,0,0,69,70,5,5,0,
0,70,71,5,10,0,0,71,11,1,0,0,0,72,74,3,14,7,0,73,75,3,32,16,0,74,73,1,0,
0,0,74,75,1,0,0,0,75,13,1,0,0,0,76,78,3,26,13,0,77,76,1,0,0,0,77,78,1,0,
0,0,78,79,1,0,0,0,79,83,3,28,14,0,80,82,3,16,8,0,81,80,1,0,0,0,82,85,1,0,
0,0,83,81,1,0,0,0,83,84,1,0,0,0,84,15,1,0,0,0,85,83,1,0,0,0,86,87,5,3,0,
0,87,88,3,28,14,0,88,17,1,0,0,0,89,90,3,30,15,0,90,91,5,4,0,0,91,95,1,0,
0,0,92,95,5,13,0,0,93,95,5,14,0,0,94,89,1,0,0,0,94,92,1,0,0,0,94,93,1,0,
0,0,95,19,1,0,0,0,96,97,3,14,7,0,97,100,5,7,0,0,98,101,3,24,12,0,99,101,
3,22,11,0,100,98,1,0,0,0,100,99,1,0,0,0,100,101,1,0,0,0,101,21,1,0,0,0,102,
103,5,15,0,0,103,23,1,0,0,0,104,105,3,30,15,0,105,25,1,0,0,0,106,107,3,30,
15,0,107,108,5,7,0,0,108,110,1,0,0,0,109,106,1,0,0,0,110,111,1,0,0,0,111,
109,1,0,0,0,111,112,1,0,0,0,112,27,1,0,0,0,113,114,5,6,0,0,114,29,1,0,0,
0,115,116,5,6,0,0,116,31,1,0,0,0,117,121,5,12,0,0,118,120,9,0,0,0,119,118,
1,0,0,0,120,123,1,0,0,0,121,122,1,0,0,0,121,119,1,0,0,0,122,33,1,0,0,0,123,
121,1,0,0,0,12,40,45,49,53,61,74,77,83,94,100,111,121];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class StackTraceParser extends antlr4.Parser {

    static grammarFileName = "StackTrace.g4";
    static literalNames = [ null, "'('", "')'", "'$'", "'.java'", null, 
                            null, "'.'", "'at'", "'Caused by:'", "'more'", 
                            "'...'", "':'", "'Native Method'", "'Unknown Source'", 
                            "'<init>'", null, null, "'_'" ];
    static symbolicNames = [ null, null, null, null, null, "Number", "JavaWord", 
                             "DOT", "AT", "CAUSED_BY", "MORE_", "ELLIPSIS", 
                             "COLON", "NATIVE_METHOD", "UNKNOWN_SOURCE", 
                             "INIT", "NonCapitalLetter", "CapitalLetter", 
                             "Symbol", "Digit", "WS" ];
    static ruleNames = [ "startRule", "stackTrace", "stackTraceLine", "atLine", 
                         "causedByLine", "ellipsisLine", "messageLine", 
                         "qualifiedClass", "innerClassName", "classFile", 
                         "qualifiedMethod", "constructor", "methodName", 
                         "packagePath", "className", "identifier", "message" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = StackTraceParser.ruleNames;
        this.literalNames = StackTraceParser.literalNames;
        this.symbolicNames = StackTraceParser.symbolicNames;
    }

    get atn() {
        return atn;
    }



	startRule() {
	    let localctx = new StartRuleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, StackTraceParser.RULE_startRule);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 34;
	        this.stackTrace();
	        this.state = 35;
	        this.match(StackTraceParser.EOF);
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



	stackTrace() {
	    let localctx = new StackTraceContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, StackTraceParser.RULE_stackTrace);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 38; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 37;
	            this.messageLine();
	            this.state = 40; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===StackTraceParser.JavaWord);
	        this.state = 45;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===StackTraceParser.AT || _la===StackTraceParser.ELLIPSIS) {
	            this.state = 42;
	            this.stackTraceLine();
	            this.state = 47;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 49;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===StackTraceParser.CAUSED_BY) {
	            this.state = 48;
	            this.causedByLine();
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



	stackTraceLine() {
	    let localctx = new StackTraceLineContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, StackTraceParser.RULE_stackTraceLine);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 53;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case StackTraceParser.AT:
	            this.state = 51;
	            this.atLine();
	            break;
	        case StackTraceParser.ELLIPSIS:
	            this.state = 52;
	            this.ellipsisLine();
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



	atLine() {
	    let localctx = new AtLineContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, StackTraceParser.RULE_atLine);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 55;
	        this.match(StackTraceParser.AT);
	        this.state = 56;
	        this.qualifiedMethod();
	        this.state = 57;
	        this.match(StackTraceParser.T__0);
	        this.state = 58;
	        this.classFile();
	        this.state = 61;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===StackTraceParser.COLON) {
	            this.state = 59;
	            this.match(StackTraceParser.COLON);
	            this.state = 60;
	            this.match(StackTraceParser.Number);
	        }

	        this.state = 63;
	        this.match(StackTraceParser.T__1);
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



	causedByLine() {
	    let localctx = new CausedByLineContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, StackTraceParser.RULE_causedByLine);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 65;
	        this.match(StackTraceParser.CAUSED_BY);
	        this.state = 66;
	        this.stackTrace();
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



	ellipsisLine() {
	    let localctx = new EllipsisLineContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, StackTraceParser.RULE_ellipsisLine);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 68;
	        this.match(StackTraceParser.ELLIPSIS);
	        this.state = 69;
	        this.match(StackTraceParser.Number);
	        this.state = 70;
	        this.match(StackTraceParser.MORE_);
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



	messageLine() {
	    let localctx = new MessageLineContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, StackTraceParser.RULE_messageLine);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 72;
	        this.qualifiedClass();
	        this.state = 74;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===StackTraceParser.COLON) {
	            this.state = 73;
	            this.message();
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



	qualifiedClass() {
	    let localctx = new QualifiedClassContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, StackTraceParser.RULE_qualifiedClass);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 77;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
	        if(la_===1) {
	            this.state = 76;
	            this.packagePath();

	        }
	        this.state = 79;
	        this.className();
	        this.state = 83;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===StackTraceParser.T__2) {
	            this.state = 80;
	            this.innerClassName();
	            this.state = 85;
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



	innerClassName() {
	    let localctx = new InnerClassNameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, StackTraceParser.RULE_innerClassName);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 86;
	        this.match(StackTraceParser.T__2);
	        this.state = 87;
	        this.className();
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



	classFile() {
	    let localctx = new ClassFileContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, StackTraceParser.RULE_classFile);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 94;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case StackTraceParser.JavaWord:
	            this.state = 89;
	            this.identifier();
	            this.state = 90;
	            this.match(StackTraceParser.T__3);
	            break;
	        case StackTraceParser.NATIVE_METHOD:
	            this.state = 92;
	            this.match(StackTraceParser.NATIVE_METHOD);
	            break;
	        case StackTraceParser.UNKNOWN_SOURCE:
	            this.state = 93;
	            this.match(StackTraceParser.UNKNOWN_SOURCE);
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



	qualifiedMethod() {
	    let localctx = new QualifiedMethodContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, StackTraceParser.RULE_qualifiedMethod);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 96;
	        this.qualifiedClass();
	        this.state = 97;
	        this.match(StackTraceParser.DOT);
	        this.state = 100;
	        this._errHandler.sync(this);
	        switch (this._input.LA(1)) {
	        case StackTraceParser.JavaWord:
	        	this.state = 98;
	        	this.methodName();
	        	break;
	        case StackTraceParser.INIT:
	        	this.state = 99;
	        	this.constructor();
	        	break;
	        case StackTraceParser.T__0:
	        	break;
	        default:
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



	constructor() {
	    let localctx = new ConstructorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, StackTraceParser.RULE_constructor);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 102;
	        this.match(StackTraceParser.INIT);
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



	methodName() {
	    let localctx = new MethodNameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, StackTraceParser.RULE_methodName);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 104;
	        this.identifier();
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



	packagePath() {
	    let localctx = new PackagePathContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, StackTraceParser.RULE_packagePath);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 109; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 106;
	        		this.identifier();
	        		this.state = 107;
	        		this.match(StackTraceParser.DOT);
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 111; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,10, this._ctx);
	        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
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



	className() {
	    let localctx = new ClassNameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, StackTraceParser.RULE_className);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 113;
	        this.match(StackTraceParser.JavaWord);
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



	identifier() {
	    let localctx = new IdentifierContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, StackTraceParser.RULE_identifier);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 115;
	        this.match(StackTraceParser.JavaWord);
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



	message() {
	    let localctx = new MessageContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, StackTraceParser.RULE_message);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 117;
	        this.match(StackTraceParser.COLON);
	        this.state = 121;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,11,this._ctx)
	        while(_alt!=1 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1+1) {
	                this.state = 118;
	                this.matchWildcard(); 
	            }
	            this.state = 123;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,11,this._ctx);
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

StackTraceParser.EOF = antlr4.Token.EOF;
StackTraceParser.T__0 = 1;
StackTraceParser.T__1 = 2;
StackTraceParser.T__2 = 3;
StackTraceParser.T__3 = 4;
StackTraceParser.Number = 5;
StackTraceParser.JavaWord = 6;
StackTraceParser.DOT = 7;
StackTraceParser.AT = 8;
StackTraceParser.CAUSED_BY = 9;
StackTraceParser.MORE_ = 10;
StackTraceParser.ELLIPSIS = 11;
StackTraceParser.COLON = 12;
StackTraceParser.NATIVE_METHOD = 13;
StackTraceParser.UNKNOWN_SOURCE = 14;
StackTraceParser.INIT = 15;
StackTraceParser.NonCapitalLetter = 16;
StackTraceParser.CapitalLetter = 17;
StackTraceParser.Symbol = 18;
StackTraceParser.Digit = 19;
StackTraceParser.WS = 20;

StackTraceParser.RULE_startRule = 0;
StackTraceParser.RULE_stackTrace = 1;
StackTraceParser.RULE_stackTraceLine = 2;
StackTraceParser.RULE_atLine = 3;
StackTraceParser.RULE_causedByLine = 4;
StackTraceParser.RULE_ellipsisLine = 5;
StackTraceParser.RULE_messageLine = 6;
StackTraceParser.RULE_qualifiedClass = 7;
StackTraceParser.RULE_innerClassName = 8;
StackTraceParser.RULE_classFile = 9;
StackTraceParser.RULE_qualifiedMethod = 10;
StackTraceParser.RULE_constructor = 11;
StackTraceParser.RULE_methodName = 12;
StackTraceParser.RULE_packagePath = 13;
StackTraceParser.RULE_className = 14;
StackTraceParser.RULE_identifier = 15;
StackTraceParser.RULE_message = 16;

class StartRuleContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StackTraceParser.RULE_startRule;
    }

	stackTrace() {
	    return this.getTypedRuleContext(StackTraceContext,0);
	};

	EOF() {
	    return this.getToken(StackTraceParser.EOF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof StackTraceListener ) {
	        listener.enterStartRule(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StackTraceListener ) {
	        listener.exitStartRule(this);
		}
	}


}



class StackTraceContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StackTraceParser.RULE_stackTrace;
    }

	messageLine = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(MessageLineContext);
	    } else {
	        return this.getTypedRuleContext(MessageLineContext,i);
	    }
	};

	stackTraceLine = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StackTraceLineContext);
	    } else {
	        return this.getTypedRuleContext(StackTraceLineContext,i);
	    }
	};

	causedByLine() {
	    return this.getTypedRuleContext(CausedByLineContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof StackTraceListener ) {
	        listener.enterStackTrace(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StackTraceListener ) {
	        listener.exitStackTrace(this);
		}
	}


}



class StackTraceLineContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StackTraceParser.RULE_stackTraceLine;
    }

	atLine() {
	    return this.getTypedRuleContext(AtLineContext,0);
	};

	ellipsisLine() {
	    return this.getTypedRuleContext(EllipsisLineContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof StackTraceListener ) {
	        listener.enterStackTraceLine(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StackTraceListener ) {
	        listener.exitStackTraceLine(this);
		}
	}


}



class AtLineContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StackTraceParser.RULE_atLine;
    }

	AT() {
	    return this.getToken(StackTraceParser.AT, 0);
	};

	qualifiedMethod() {
	    return this.getTypedRuleContext(QualifiedMethodContext,0);
	};

	classFile() {
	    return this.getTypedRuleContext(ClassFileContext,0);
	};

	COLON() {
	    return this.getToken(StackTraceParser.COLON, 0);
	};

	Number() {
	    return this.getToken(StackTraceParser.Number, 0);
	};

	enterRule(listener) {
	    if(listener instanceof StackTraceListener ) {
	        listener.enterAtLine(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StackTraceListener ) {
	        listener.exitAtLine(this);
		}
	}


}



class CausedByLineContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StackTraceParser.RULE_causedByLine;
    }

	CAUSED_BY() {
	    return this.getToken(StackTraceParser.CAUSED_BY, 0);
	};

	stackTrace() {
	    return this.getTypedRuleContext(StackTraceContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof StackTraceListener ) {
	        listener.enterCausedByLine(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StackTraceListener ) {
	        listener.exitCausedByLine(this);
		}
	}


}



class EllipsisLineContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StackTraceParser.RULE_ellipsisLine;
    }

	ELLIPSIS() {
	    return this.getToken(StackTraceParser.ELLIPSIS, 0);
	};

	Number() {
	    return this.getToken(StackTraceParser.Number, 0);
	};

	MORE_() {
	    return this.getToken(StackTraceParser.MORE_, 0);
	};

	enterRule(listener) {
	    if(listener instanceof StackTraceListener ) {
	        listener.enterEllipsisLine(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StackTraceListener ) {
	        listener.exitEllipsisLine(this);
		}
	}


}



class MessageLineContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StackTraceParser.RULE_messageLine;
    }

	qualifiedClass() {
	    return this.getTypedRuleContext(QualifiedClassContext,0);
	};

	message() {
	    return this.getTypedRuleContext(MessageContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof StackTraceListener ) {
	        listener.enterMessageLine(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StackTraceListener ) {
	        listener.exitMessageLine(this);
		}
	}


}



class QualifiedClassContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StackTraceParser.RULE_qualifiedClass;
    }

	className() {
	    return this.getTypedRuleContext(ClassNameContext,0);
	};

	packagePath() {
	    return this.getTypedRuleContext(PackagePathContext,0);
	};

	innerClassName = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(InnerClassNameContext);
	    } else {
	        return this.getTypedRuleContext(InnerClassNameContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof StackTraceListener ) {
	        listener.enterQualifiedClass(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StackTraceListener ) {
	        listener.exitQualifiedClass(this);
		}
	}


}



class InnerClassNameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StackTraceParser.RULE_innerClassName;
    }

	className() {
	    return this.getTypedRuleContext(ClassNameContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof StackTraceListener ) {
	        listener.enterInnerClassName(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StackTraceListener ) {
	        listener.exitInnerClassName(this);
		}
	}


}



class ClassFileContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StackTraceParser.RULE_classFile;
    }

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	NATIVE_METHOD() {
	    return this.getToken(StackTraceParser.NATIVE_METHOD, 0);
	};

	UNKNOWN_SOURCE() {
	    return this.getToken(StackTraceParser.UNKNOWN_SOURCE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof StackTraceListener ) {
	        listener.enterClassFile(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StackTraceListener ) {
	        listener.exitClassFile(this);
		}
	}


}



class QualifiedMethodContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StackTraceParser.RULE_qualifiedMethod;
    }

	qualifiedClass() {
	    return this.getTypedRuleContext(QualifiedClassContext,0);
	};

	DOT() {
	    return this.getToken(StackTraceParser.DOT, 0);
	};

	methodName() {
	    return this.getTypedRuleContext(MethodNameContext,0);
	};

	constructor() {
	    return this.getTypedRuleContext(ConstructorContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof StackTraceListener ) {
	        listener.enterQualifiedMethod(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StackTraceListener ) {
	        listener.exitQualifiedMethod(this);
		}
	}


}



class ConstructorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StackTraceParser.RULE_constructor;
    }

	INIT() {
	    return this.getToken(StackTraceParser.INIT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof StackTraceListener ) {
	        listener.enterConstructor(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StackTraceListener ) {
	        listener.exitConstructor(this);
		}
	}


}



class MethodNameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StackTraceParser.RULE_methodName;
    }

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof StackTraceListener ) {
	        listener.enterMethodName(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StackTraceListener ) {
	        listener.exitMethodName(this);
		}
	}


}



class PackagePathContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StackTraceParser.RULE_packagePath;
    }

	identifier = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(IdentifierContext);
	    } else {
	        return this.getTypedRuleContext(IdentifierContext,i);
	    }
	};

	DOT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(StackTraceParser.DOT);
	    } else {
	        return this.getToken(StackTraceParser.DOT, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof StackTraceListener ) {
	        listener.enterPackagePath(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StackTraceListener ) {
	        listener.exitPackagePath(this);
		}
	}


}



class ClassNameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StackTraceParser.RULE_className;
    }

	JavaWord() {
	    return this.getToken(StackTraceParser.JavaWord, 0);
	};

	enterRule(listener) {
	    if(listener instanceof StackTraceListener ) {
	        listener.enterClassName(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StackTraceListener ) {
	        listener.exitClassName(this);
		}
	}


}



class IdentifierContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StackTraceParser.RULE_identifier;
    }

	JavaWord() {
	    return this.getToken(StackTraceParser.JavaWord, 0);
	};

	enterRule(listener) {
	    if(listener instanceof StackTraceListener ) {
	        listener.enterIdentifier(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StackTraceListener ) {
	        listener.exitIdentifier(this);
		}
	}


}



class MessageContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StackTraceParser.RULE_message;
    }

	COLON() {
	    return this.getToken(StackTraceParser.COLON, 0);
	};

	enterRule(listener) {
	    if(listener instanceof StackTraceListener ) {
	        listener.enterMessage(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StackTraceListener ) {
	        listener.exitMessage(this);
		}
	}


}




StackTraceParser.StartRuleContext = StartRuleContext; 
StackTraceParser.StackTraceContext = StackTraceContext; 
StackTraceParser.StackTraceLineContext = StackTraceLineContext; 
StackTraceParser.AtLineContext = AtLineContext; 
StackTraceParser.CausedByLineContext = CausedByLineContext; 
StackTraceParser.EllipsisLineContext = EllipsisLineContext; 
StackTraceParser.MessageLineContext = MessageLineContext; 
StackTraceParser.QualifiedClassContext = QualifiedClassContext; 
StackTraceParser.InnerClassNameContext = InnerClassNameContext; 
StackTraceParser.ClassFileContext = ClassFileContext; 
StackTraceParser.QualifiedMethodContext = QualifiedMethodContext; 
StackTraceParser.ConstructorContext = ConstructorContext; 
StackTraceParser.MethodNameContext = MethodNameContext; 
StackTraceParser.PackagePathContext = PackagePathContext; 
StackTraceParser.ClassNameContext = ClassNameContext; 
StackTraceParser.IdentifierContext = IdentifierContext; 
StackTraceParser.MessageContext = MessageContext; 
