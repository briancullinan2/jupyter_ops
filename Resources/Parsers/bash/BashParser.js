// Generated from C:/Users/megam/jupyter_ops/Resources/Parsers/bash/BashParser.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import BashParserListener from './BashParserListener.js';
const serializedATN = [4,1,48,310,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,1,0,1,0,1,0,1,0,1,0,1,0,5,0,55,8,0,
10,0,12,0,58,9,0,1,1,3,1,61,8,1,1,1,1,1,1,1,3,1,66,8,1,1,1,1,1,3,1,70,8,
1,1,1,3,1,73,8,1,1,2,1,2,1,2,3,2,78,8,2,1,2,1,2,3,2,82,8,2,1,2,1,2,1,2,3,
2,87,8,2,5,2,89,8,2,10,2,12,2,92,9,2,1,3,1,3,1,3,1,3,1,4,1,4,1,4,1,4,1,4,
1,4,1,4,5,4,105,8,4,10,4,12,4,108,9,4,1,5,1,5,3,5,112,8,5,1,6,1,6,1,6,1,
6,1,6,1,6,1,6,1,6,5,6,122,8,6,10,6,12,6,125,9,6,1,6,1,6,1,6,1,6,1,6,1,6,
1,6,3,6,134,8,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,5,6,144,8,6,10,6,12,6,147,
9,6,3,6,149,8,6,1,7,1,7,3,7,153,8,7,1,7,1,7,1,7,3,7,158,8,7,1,7,1,7,3,7,
162,8,7,1,7,1,7,1,7,3,7,167,8,7,5,7,169,8,7,10,7,12,7,172,9,7,1,8,1,8,1,
8,3,8,177,8,8,1,8,1,8,1,8,1,8,3,8,183,8,8,1,8,1,8,3,8,187,8,8,1,9,1,9,1,
10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,4,10,202,8,10,11,10,
12,10,203,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,5,11,214,8,11,10,11,12,
11,217,9,11,1,11,1,11,1,12,1,12,5,12,223,8,12,10,12,12,12,226,9,12,1,12,
1,12,1,13,1,13,1,13,1,13,1,13,3,13,235,8,13,1,14,1,14,3,14,239,8,14,1,14,
1,14,1,14,3,14,244,8,14,1,14,3,14,247,8,14,1,15,1,15,3,15,251,8,15,1,15,
1,15,1,16,1,16,3,16,257,8,16,1,16,1,16,1,17,1,17,3,17,263,8,17,1,17,1,17,
1,18,1,18,1,18,1,18,3,18,271,8,18,1,18,1,18,3,18,275,8,18,1,18,1,18,1,18,
1,18,1,18,3,18,282,8,18,1,19,1,19,1,19,1,19,1,19,1,19,3,19,290,8,19,1,20,
1,20,3,20,294,8,20,1,21,1,21,1,21,1,21,1,22,1,22,1,23,1,23,1,23,1,23,3,23,
306,8,23,1,23,1,23,1,23,0,3,0,4,14,24,0,2,4,6,8,10,12,14,16,18,20,22,24,
26,28,30,32,34,36,38,40,42,44,46,0,4,1,0,22,33,1,0,1,3,3,0,5,5,41,41,43,
44,1,0,17,18,370,0,48,1,0,0,0,2,60,1,0,0,0,4,74,1,0,0,0,6,93,1,0,0,0,8,106,
1,0,0,0,10,109,1,0,0,0,12,148,1,0,0,0,14,150,1,0,0,0,16,186,1,0,0,0,18,188,
1,0,0,0,20,201,1,0,0,0,22,205,1,0,0,0,24,220,1,0,0,0,26,234,1,0,0,0,28,246,
1,0,0,0,30,248,1,0,0,0,32,254,1,0,0,0,34,260,1,0,0,0,36,281,1,0,0,0,38,289,
1,0,0,0,40,293,1,0,0,0,42,295,1,0,0,0,44,299,1,0,0,0,46,301,1,0,0,0,48,49,
6,0,-1,0,49,50,3,2,1,0,50,56,1,0,0,0,51,52,10,2,0,0,52,53,5,20,0,0,53,55,
3,2,1,0,54,51,1,0,0,0,55,58,1,0,0,0,56,54,1,0,0,0,56,57,1,0,0,0,57,1,1,0,
0,0,58,56,1,0,0,0,59,61,5,4,0,0,60,59,1,0,0,0,60,61,1,0,0,0,61,69,1,0,0,
0,62,63,3,4,2,0,63,64,5,4,0,0,64,66,1,0,0,0,65,62,1,0,0,0,65,66,1,0,0,0,
66,67,1,0,0,0,67,70,3,10,5,0,68,70,3,4,2,0,69,65,1,0,0,0,69,68,1,0,0,0,70,
72,1,0,0,0,71,73,5,4,0,0,72,71,1,0,0,0,72,73,1,0,0,0,73,3,1,0,0,0,74,77,
6,2,-1,0,75,78,3,16,8,0,76,78,3,6,3,0,77,75,1,0,0,0,77,76,1,0,0,0,78,90,
1,0,0,0,79,86,10,2,0,0,80,82,5,4,0,0,81,80,1,0,0,0,81,82,1,0,0,0,82,83,1,
0,0,0,83,87,3,16,8,0,84,85,5,4,0,0,85,87,3,6,3,0,86,81,1,0,0,0,86,84,1,0,
0,0,87,89,1,0,0,0,88,79,1,0,0,0,89,92,1,0,0,0,90,88,1,0,0,0,90,91,1,0,0,
0,91,5,1,0,0,0,92,90,1,0,0,0,93,94,5,1,0,0,94,95,5,5,0,0,95,96,3,8,4,0,96,
7,1,0,0,0,97,105,5,1,0,0,98,105,5,2,0,0,99,105,5,3,0,0,100,105,3,24,12,0,
101,105,5,6,0,0,102,105,3,22,11,0,103,105,3,26,13,0,104,97,1,0,0,0,104,98,
1,0,0,0,104,99,1,0,0,0,104,100,1,0,0,0,104,101,1,0,0,0,104,102,1,0,0,0,104,
103,1,0,0,0,105,108,1,0,0,0,106,104,1,0,0,0,106,107,1,0,0,0,107,9,1,0,0,
0,108,106,1,0,0,0,109,111,3,12,6,0,110,112,3,14,7,0,111,110,1,0,0,0,111,
112,1,0,0,0,112,11,1,0,0,0,113,123,5,1,0,0,114,122,5,1,0,0,115,122,5,2,0,
0,116,122,5,3,0,0,117,122,5,6,0,0,118,122,3,24,12,0,119,122,3,22,11,0,120,
122,3,26,13,0,121,114,1,0,0,0,121,115,1,0,0,0,121,116,1,0,0,0,121,117,1,
0,0,0,121,118,1,0,0,0,121,119,1,0,0,0,121,120,1,0,0,0,122,125,1,0,0,0,123,
121,1,0,0,0,123,124,1,0,0,0,124,149,1,0,0,0,125,123,1,0,0,0,126,134,5,2,
0,0,127,134,5,3,0,0,128,134,5,5,0,0,129,134,5,6,0,0,130,134,3,24,12,0,131,
134,3,22,11,0,132,134,3,26,13,0,133,126,1,0,0,0,133,127,1,0,0,0,133,128,
1,0,0,0,133,129,1,0,0,0,133,130,1,0,0,0,133,131,1,0,0,0,133,132,1,0,0,0,
134,145,1,0,0,0,135,144,5,1,0,0,136,144,5,2,0,0,137,144,5,3,0,0,138,144,
5,5,0,0,139,144,5,6,0,0,140,144,3,24,12,0,141,144,3,22,11,0,142,144,3,26,
13,0,143,135,1,0,0,0,143,136,1,0,0,0,143,137,1,0,0,0,143,138,1,0,0,0,143,
139,1,0,0,0,143,140,1,0,0,0,143,141,1,0,0,0,143,142,1,0,0,0,144,147,1,0,
0,0,145,143,1,0,0,0,145,146,1,0,0,0,146,149,1,0,0,0,147,145,1,0,0,0,148,
113,1,0,0,0,148,133,1,0,0,0,149,13,1,0,0,0,150,157,6,7,-1,0,151,153,5,4,
0,0,152,151,1,0,0,0,152,153,1,0,0,0,153,154,1,0,0,0,154,158,3,16,8,0,155,
156,5,4,0,0,156,158,3,20,10,0,157,152,1,0,0,0,157,155,1,0,0,0,158,170,1,
0,0,0,159,166,10,2,0,0,160,162,5,4,0,0,161,160,1,0,0,0,161,162,1,0,0,0,162,
163,1,0,0,0,163,167,3,16,8,0,164,165,5,4,0,0,165,167,3,20,10,0,166,161,1,
0,0,0,166,164,1,0,0,0,167,169,1,0,0,0,168,159,1,0,0,0,169,172,1,0,0,0,170,
168,1,0,0,0,170,171,1,0,0,0,171,15,1,0,0,0,172,170,1,0,0,0,173,174,5,3,0,
0,174,176,3,18,9,0,175,177,5,4,0,0,176,175,1,0,0,0,176,177,1,0,0,0,177,178,
1,0,0,0,178,179,3,20,10,0,179,187,1,0,0,0,180,182,3,18,9,0,181,183,5,4,0,
0,182,181,1,0,0,0,182,183,1,0,0,0,183,184,1,0,0,0,184,185,3,20,10,0,185,
187,1,0,0,0,186,173,1,0,0,0,186,180,1,0,0,0,187,17,1,0,0,0,188,189,7,0,0,
0,189,19,1,0,0,0,190,202,5,1,0,0,191,202,5,2,0,0,192,202,5,16,0,0,193,202,
5,34,0,0,194,202,5,5,0,0,195,202,5,3,0,0,196,202,3,24,12,0,197,202,5,6,0,
0,198,202,3,22,11,0,199,202,3,26,13,0,200,202,3,44,22,0,201,190,1,0,0,0,
201,191,1,0,0,0,201,192,1,0,0,0,201,193,1,0,0,0,201,194,1,0,0,0,201,195,
1,0,0,0,201,196,1,0,0,0,201,197,1,0,0,0,201,198,1,0,0,0,201,199,1,0,0,0,
201,200,1,0,0,0,202,203,1,0,0,0,203,201,1,0,0,0,203,204,1,0,0,0,204,21,1,
0,0,0,205,215,5,8,0,0,206,214,5,1,0,0,207,214,5,3,0,0,208,214,5,2,0,0,209,
214,5,22,0,0,210,214,5,23,0,0,211,214,5,6,0,0,212,214,3,26,13,0,213,206,
1,0,0,0,213,207,1,0,0,0,213,208,1,0,0,0,213,209,1,0,0,0,213,210,1,0,0,0,
213,211,1,0,0,0,213,212,1,0,0,0,214,217,1,0,0,0,215,213,1,0,0,0,215,216,
1,0,0,0,216,218,1,0,0,0,217,215,1,0,0,0,218,219,5,8,0,0,219,23,1,0,0,0,220,
224,5,7,0,0,221,223,7,1,0,0,222,221,1,0,0,0,223,226,1,0,0,0,224,222,1,0,
0,0,224,225,1,0,0,0,225,227,1,0,0,0,226,224,1,0,0,0,227,228,5,7,0,0,228,
25,1,0,0,0,229,235,3,28,14,0,230,235,3,30,15,0,231,235,3,32,16,0,232,235,
3,34,17,0,233,235,3,36,18,0,234,229,1,0,0,0,234,230,1,0,0,0,234,231,1,0,
0,0,234,232,1,0,0,0,234,233,1,0,0,0,235,27,1,0,0,0,236,238,5,10,0,0,237,
239,3,0,0,0,238,237,1,0,0,0,238,239,1,0,0,0,239,240,1,0,0,0,240,247,5,36,
0,0,241,243,5,13,0,0,242,244,3,0,0,0,243,242,1,0,0,0,243,244,1,0,0,0,244,
245,1,0,0,0,245,247,5,13,0,0,246,236,1,0,0,0,246,241,1,0,0,0,247,29,1,0,
0,0,248,250,5,11,0,0,249,251,3,0,0,0,250,249,1,0,0,0,250,251,1,0,0,0,251,
252,1,0,0,0,252,253,5,36,0,0,253,31,1,0,0,0,254,256,5,12,0,0,255,257,3,0,
0,0,256,255,1,0,0,0,256,257,1,0,0,0,257,258,1,0,0,0,258,259,5,36,0,0,259,
33,1,0,0,0,260,262,5,14,0,0,261,263,3,0,0,0,262,261,1,0,0,0,262,263,1,0,
0,0,263,264,1,0,0,0,264,265,5,39,0,0,265,35,1,0,0,0,266,267,5,15,0,0,267,
274,5,1,0,0,268,270,3,38,19,0,269,271,5,4,0,0,270,269,1,0,0,0,270,271,1,
0,0,0,271,272,1,0,0,0,272,273,3,8,4,0,273,275,1,0,0,0,274,268,1,0,0,0,274,
275,1,0,0,0,275,276,1,0,0,0,276,282,5,18,0,0,277,278,5,15,0,0,278,279,5,
47,0,0,279,280,5,1,0,0,280,282,5,18,0,0,281,266,1,0,0,0,281,277,1,0,0,0,
282,37,1,0,0,0,283,284,5,40,0,0,284,290,7,2,0,0,285,290,5,45,0,0,286,290,
5,46,0,0,287,290,5,47,0,0,288,290,5,48,0,0,289,283,1,0,0,0,289,285,1,0,0,
0,289,286,1,0,0,0,289,287,1,0,0,0,289,288,1,0,0,0,290,39,1,0,0,0,291,294,
3,42,21,0,292,294,3,46,23,0,293,291,1,0,0,0,293,292,1,0,0,0,294,41,1,0,0,
0,295,296,5,9,0,0,296,297,3,0,0,0,297,298,5,36,0,0,298,43,1,0,0,0,299,300,
7,3,0,0,300,45,1,0,0,0,301,302,5,17,0,0,302,303,3,0,0,0,303,305,5,19,0,0,
304,306,5,4,0,0,305,304,1,0,0,0,305,306,1,0,0,0,306,307,1,0,0,0,307,308,
5,18,0,0,308,47,1,0,0,0,44,56,60,65,69,72,77,81,86,90,104,106,111,121,123,
133,143,145,148,152,157,161,166,170,176,182,186,201,203,213,215,224,234,
238,243,246,250,256,262,270,274,281,289,293,305];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class BashParser extends antlr4.Parser {

    static grammarFileName = "BashParser.g4";
    static literalNames = [ null, null, null, null, null, null, null, "'''", 
                            "'\"'", "'('", "'$('", "'<('", "'>('", "'`'", 
                            "'$(('", "'${'", null, "'{'", "'}'", "';'", 
                            "'|'", "'|&'", "'<'", "'>'", "'<&'", "'>&'", 
                            "'&>'", "'&>>'", "'<<'", "'<<<'", "'<<-'", "'>>'", 
                            "'<>'", "'>|'", "'&'", "'\\n'", "')'", null, 
                            null, "'))'", "':'", "'-'", null, "'?'", "'+'", 
                            "'%'", "'%%'", "'#'", "'##'" ];
    static symbolicNames = [ null, "VARNAME", "PUNCS", "NUM", "BLANK", "EQ", 
                             "VAR", "SQUOTE", "DQUOTE", "LPAREN", "DOLLAR_LPAREN", 
                             "LT_LPAREN", "GT_LPAREN", "BACKTICK", "DOLLAR_DLPAREN", 
                             "DOLLAR_LCURLY", "ESC_CHAR", "LCURLY", "RCURLY", 
                             "SEMI", "PIPE", "PIPE_AND", "LT", "GT", "LT_AND", 
                             "GT_AND", "AND_GT", "AND_DGT", "DLT", "TLT", 
                             "DLT_DASH", "DGT", "LTGT", "GTPIPE", "AND", 
                             "NL", "RPAREN", "DQUOTE_DOLLAR_DLPAREN", "ARITH_CONTENT", 
                             "DRPAREN", "COMMA", "DASH", "PARAM_EQ", "QMARK", 
                             "PLUS", "PERCENT", "DPERCENT", "HASH", "DHASH" ];
    static ruleNames = [ "pipeline", "cmd", "exec_prefix", "assign", "assign_rls", 
                         "exec", "prog", "exec_suffix", "redir", "redir_op", 
                         "arg", "dquote_str", "squote_str", "subst", "cst", 
                         "lpst", "rpst", "arith", "param_exp", "param_exp_op", 
                         "grp", "paren_grp", "pure_curly", "curly_grp" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = BashParser.ruleNames;
        this.literalNames = BashParser.literalNames;
        this.symbolicNames = BashParser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 0:
    	    		return this.pipeline_sempred(localctx, predIndex);
    	case 2:
    	    		return this.exec_prefix_sempred(localctx, predIndex);
    	case 7:
    	    		return this.exec_suffix_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    pipeline_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 2);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    exec_prefix_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 1:
    			return this.precpred(this._ctx, 2);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    exec_suffix_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 2:
    			return this.precpred(this._ctx, 2);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };



	pipeline(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new PipelineContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 0;
	    this.enterRecursionRule(localctx, 0, BashParser.RULE_pipeline, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 49;
	        this.cmd();
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 56;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,0,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new PipelineContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, BashParser.RULE_pipeline);
	                this.state = 51;
	                if (!( this.precpred(this._ctx, 2))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                }
	                this.state = 52;
	                this.match(BashParser.PIPE);
	                this.state = 53;
	                this.cmd(); 
	            }
	            this.state = 58;
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



	cmd() {
	    let localctx = new CmdContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, BashParser.RULE_cmd);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 60;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===4) {
	            this.state = 59;
	            this.match(BashParser.BLANK);
	        }

	        this.state = 69;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 65;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	            if(la_===1) {
	                this.state = 62;
	                this.exec_prefix(0);
	                this.state = 63;
	                this.match(BashParser.BLANK);

	            }
	            this.state = 67;
	            this.exec();
	            break;

	        case 2:
	            this.state = 68;
	            this.exec_prefix(0);
	            break;

	        }
	        this.state = 72;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
	        if(la_===1) {
	            this.state = 71;
	            this.match(BashParser.BLANK);

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


	exec_prefix(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new Exec_prefixContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 4;
	    this.enterRecursionRule(localctx, 4, BashParser.RULE_exec_prefix, _p);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 77;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 3:
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
	            this.state = 75;
	            this.redir();
	            break;
	        case 1:
	            this.state = 76;
	            this.assign();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 90;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,8,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new Exec_prefixContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, BashParser.RULE_exec_prefix);
	                this.state = 79;
	                if (!( this.precpred(this._ctx, 2))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                }
	                this.state = 86;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
	                switch(la_) {
	                case 1:
	                    this.state = 81;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                    if(_la===4) {
	                        this.state = 80;
	                        this.match(BashParser.BLANK);
	                    }

	                    this.state = 83;
	                    this.redir();
	                    break;

	                case 2:
	                    this.state = 84;
	                    this.match(BashParser.BLANK);
	                    this.state = 85;
	                    this.assign();
	                    break;

	                } 
	            }
	            this.state = 92;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,8,this._ctx);
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



	assign() {
	    let localctx = new AssignContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, BashParser.RULE_assign);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 93;
	        this.match(BashParser.VARNAME);
	        this.state = 94;
	        this.match(BashParser.EQ);
	        this.state = 95;
	        this.assign_rls();
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



	assign_rls() {
	    let localctx = new Assign_rlsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, BashParser.RULE_assign_rls);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 106;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,10,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 104;
	                this._errHandler.sync(this);
	                switch(this._input.LA(1)) {
	                case 1:
	                    this.state = 97;
	                    this.match(BashParser.VARNAME);
	                    break;
	                case 2:
	                    this.state = 98;
	                    this.match(BashParser.PUNCS);
	                    break;
	                case 3:
	                    this.state = 99;
	                    this.match(BashParser.NUM);
	                    break;
	                case 7:
	                    this.state = 100;
	                    this.squote_str();
	                    break;
	                case 6:
	                    this.state = 101;
	                    this.match(BashParser.VAR);
	                    break;
	                case 8:
	                    this.state = 102;
	                    this.dquote_str();
	                    break;
	                case 10:
	                case 11:
	                case 12:
	                case 13:
	                case 14:
	                case 15:
	                    this.state = 103;
	                    this.subst();
	                    break;
	                default:
	                    throw new antlr4.error.NoViableAltException(this);
	                } 
	            }
	            this.state = 108;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,10,this._ctx);
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



	exec() {
	    let localctx = new ExecContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, BashParser.RULE_exec);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 109;
	        this.prog();
	        this.state = 111;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,11,this._ctx);
	        if(la_===1) {
	            this.state = 110;
	            this.exec_suffix(0);

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



	prog() {
	    let localctx = new ProgContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, BashParser.RULE_prog);
	    try {
	        this.state = 148;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 113;
	            this.match(BashParser.VARNAME);
	            this.state = 123;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,13,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 121;
	                    this._errHandler.sync(this);
	                    switch(this._input.LA(1)) {
	                    case 1:
	                        this.state = 114;
	                        this.match(BashParser.VARNAME);
	                        break;
	                    case 2:
	                        this.state = 115;
	                        this.match(BashParser.PUNCS);
	                        break;
	                    case 3:
	                        this.state = 116;
	                        this.match(BashParser.NUM);
	                        break;
	                    case 6:
	                        this.state = 117;
	                        this.match(BashParser.VAR);
	                        break;
	                    case 7:
	                        this.state = 118;
	                        this.squote_str();
	                        break;
	                    case 8:
	                        this.state = 119;
	                        this.dquote_str();
	                        break;
	                    case 10:
	                    case 11:
	                    case 12:
	                    case 13:
	                    case 14:
	                    case 15:
	                        this.state = 120;
	                        this.subst();
	                        break;
	                    default:
	                        throw new antlr4.error.NoViableAltException(this);
	                    } 
	                }
	                this.state = 125;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,13,this._ctx);
	            }

	            break;
	        case 2:
	        case 3:
	        case 5:
	        case 6:
	        case 7:
	        case 8:
	        case 10:
	        case 11:
	        case 12:
	        case 13:
	        case 14:
	        case 15:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 133;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 2:
	                this.state = 126;
	                this.match(BashParser.PUNCS);
	                break;
	            case 3:
	                this.state = 127;
	                this.match(BashParser.NUM);
	                break;
	            case 5:
	                this.state = 128;
	                this.match(BashParser.EQ);
	                break;
	            case 6:
	                this.state = 129;
	                this.match(BashParser.VAR);
	                break;
	            case 7:
	                this.state = 130;
	                this.squote_str();
	                break;
	            case 8:
	                this.state = 131;
	                this.dquote_str();
	                break;
	            case 10:
	            case 11:
	            case 12:
	            case 13:
	            case 14:
	            case 15:
	                this.state = 132;
	                this.subst();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 145;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,16,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 143;
	                    this._errHandler.sync(this);
	                    switch(this._input.LA(1)) {
	                    case 1:
	                        this.state = 135;
	                        this.match(BashParser.VARNAME);
	                        break;
	                    case 2:
	                        this.state = 136;
	                        this.match(BashParser.PUNCS);
	                        break;
	                    case 3:
	                        this.state = 137;
	                        this.match(BashParser.NUM);
	                        break;
	                    case 5:
	                        this.state = 138;
	                        this.match(BashParser.EQ);
	                        break;
	                    case 6:
	                        this.state = 139;
	                        this.match(BashParser.VAR);
	                        break;
	                    case 7:
	                        this.state = 140;
	                        this.squote_str();
	                        break;
	                    case 8:
	                        this.state = 141;
	                        this.dquote_str();
	                        break;
	                    case 10:
	                    case 11:
	                    case 12:
	                    case 13:
	                    case 14:
	                    case 15:
	                        this.state = 142;
	                        this.subst();
	                        break;
	                    default:
	                        throw new antlr4.error.NoViableAltException(this);
	                    } 
	                }
	                this.state = 147;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,16,this._ctx);
	            }

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


	exec_suffix(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new Exec_suffixContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 14;
	    this.enterRecursionRule(localctx, 14, BashParser.RULE_exec_suffix, _p);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 157;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,19,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 152;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===4) {
	                this.state = 151;
	                this.match(BashParser.BLANK);
	            }

	            this.state = 154;
	            this.redir();
	            break;

	        case 2:
	            this.state = 155;
	            this.match(BashParser.BLANK);
	            this.state = 156;
	            this.arg();
	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 170;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,22,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new Exec_suffixContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, BashParser.RULE_exec_suffix);
	                this.state = 159;
	                if (!( this.precpred(this._ctx, 2))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                }
	                this.state = 166;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,21,this._ctx);
	                switch(la_) {
	                case 1:
	                    this.state = 161;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                    if(_la===4) {
	                        this.state = 160;
	                        this.match(BashParser.BLANK);
	                    }

	                    this.state = 163;
	                    this.redir();
	                    break;

	                case 2:
	                    this.state = 164;
	                    this.match(BashParser.BLANK);
	                    this.state = 165;
	                    this.arg();
	                    break;

	                } 
	            }
	            this.state = 172;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,22,this._ctx);
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



	redir() {
	    let localctx = new RedirContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, BashParser.RULE_redir);
	    var _la = 0;
	    try {
	        this.state = 186;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 3:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 173;
	            this.match(BashParser.NUM);
	            this.state = 174;
	            this.redir_op();
	            this.state = 176;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===4) {
	                this.state = 175;
	                this.match(BashParser.BLANK);
	            }

	            this.state = 178;
	            this.arg();
	            break;
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
	            this.enterOuterAlt(localctx, 2);
	            this.state = 180;
	            this.redir_op();
	            this.state = 182;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===4) {
	                this.state = 181;
	                this.match(BashParser.BLANK);
	            }

	            this.state = 184;
	            this.arg();
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



	redir_op() {
	    let localctx = new Redir_opContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, BashParser.RULE_redir_op);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 188;
	        _la = this._input.LA(1);
	        if(!(((((_la - 22)) & ~0x1f) === 0 && ((1 << (_la - 22)) & 4095) !== 0))) {
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



	arg() {
	    let localctx = new ArgContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, BashParser.RULE_arg);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 201; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 201;
	        		this._errHandler.sync(this);
	        		switch(this._input.LA(1)) {
	        		case 1:
	        		    this.state = 190;
	        		    this.match(BashParser.VARNAME);
	        		    break;
	        		case 2:
	        		    this.state = 191;
	        		    this.match(BashParser.PUNCS);
	        		    break;
	        		case 16:
	        		    this.state = 192;
	        		    this.match(BashParser.ESC_CHAR);
	        		    break;
	        		case 34:
	        		    this.state = 193;
	        		    this.match(BashParser.AND);
	        		    break;
	        		case 5:
	        		    this.state = 194;
	        		    this.match(BashParser.EQ);
	        		    break;
	        		case 3:
	        		    this.state = 195;
	        		    this.match(BashParser.NUM);
	        		    break;
	        		case 7:
	        		    this.state = 196;
	        		    this.squote_str();
	        		    break;
	        		case 6:
	        		    this.state = 197;
	        		    this.match(BashParser.VAR);
	        		    break;
	        		case 8:
	        		    this.state = 198;
	        		    this.dquote_str();
	        		    break;
	        		case 10:
	        		case 11:
	        		case 12:
	        		case 13:
	        		case 14:
	        		case 15:
	        		    this.state = 199;
	        		    this.subst();
	        		    break;
	        		case 17:
	        		case 18:
	        		    this.state = 200;
	        		    this.pure_curly();
	        		    break;
	        		default:
	        		    throw new antlr4.error.NoViableAltException(this);
	        		}
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 203; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,27, this._ctx);
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



	dquote_str() {
	    let localctx = new Dquote_strContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, BashParser.RULE_dquote_str);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 205;
	        this.match(BashParser.DQUOTE);
	        this.state = 215;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 12647502) !== 0)) {
	            this.state = 213;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 1:
	                this.state = 206;
	                this.match(BashParser.VARNAME);
	                break;
	            case 3:
	                this.state = 207;
	                this.match(BashParser.NUM);
	                break;
	            case 2:
	                this.state = 208;
	                this.match(BashParser.PUNCS);
	                break;
	            case 22:
	                this.state = 209;
	                this.match(BashParser.LT);
	                break;
	            case 23:
	                this.state = 210;
	                this.match(BashParser.GT);
	                break;
	            case 6:
	                this.state = 211;
	                this.match(BashParser.VAR);
	                break;
	            case 10:
	            case 11:
	            case 12:
	            case 13:
	            case 14:
	            case 15:
	                this.state = 212;
	                this.subst();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 217;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 218;
	        this.match(BashParser.DQUOTE);
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



	squote_str() {
	    let localctx = new Squote_strContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, BashParser.RULE_squote_str);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 220;
	        this.match(BashParser.SQUOTE);
	        this.state = 224;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 14) !== 0)) {
	            this.state = 221;
	            _la = this._input.LA(1);
	            if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 14) !== 0))) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 226;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 227;
	        this.match(BashParser.SQUOTE);
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



	subst() {
	    let localctx = new SubstContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, BashParser.RULE_subst);
	    try {
	        this.state = 234;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 10:
	        case 13:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 229;
	            this.cst();
	            break;
	        case 11:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 230;
	            this.lpst();
	            break;
	        case 12:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 231;
	            this.rpst();
	            break;
	        case 14:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 232;
	            this.arith();
	            break;
	        case 15:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 233;
	            this.param_exp();
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



	cst() {
	    let localctx = new CstContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, BashParser.RULE_cst);
	    var _la = 0;
	    try {
	        this.state = 246;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 10:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 236;
	            this.match(BashParser.DOLLAR_LPAREN);
	            this.state = 238;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if((((_la) & ~0x1f) === 0 && ((1 << _la) & 4290838014) !== 0) || _la===32 || _la===33) {
	                this.state = 237;
	                this.pipeline(0);
	            }

	            this.state = 240;
	            this.match(BashParser.RPAREN);
	            break;
	        case 13:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 241;
	            this.match(BashParser.BACKTICK);
	            this.state = 243;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,33,this._ctx);
	            if(la_===1) {
	                this.state = 242;
	                this.pipeline(0);

	            }
	            this.state = 245;
	            this.match(BashParser.BACKTICK);
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



	lpst() {
	    let localctx = new LpstContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, BashParser.RULE_lpst);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 248;
	        this.match(BashParser.LT_LPAREN);
	        this.state = 250;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 4290838014) !== 0) || _la===32 || _la===33) {
	            this.state = 249;
	            this.pipeline(0);
	        }

	        this.state = 252;
	        this.match(BashParser.RPAREN);
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



	rpst() {
	    let localctx = new RpstContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, BashParser.RULE_rpst);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 254;
	        this.match(BashParser.GT_LPAREN);
	        this.state = 256;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 4290838014) !== 0) || _la===32 || _la===33) {
	            this.state = 255;
	            this.pipeline(0);
	        }

	        this.state = 258;
	        this.match(BashParser.RPAREN);
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



	arith() {
	    let localctx = new ArithContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, BashParser.RULE_arith);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 260;
	        this.match(BashParser.DOLLAR_DLPAREN);
	        this.state = 262;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 4290838014) !== 0) || _la===32 || _la===33) {
	            this.state = 261;
	            this.pipeline(0);
	        }

	        this.state = 264;
	        this.match(BashParser.DRPAREN);
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



	param_exp() {
	    let localctx = new Param_expContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, BashParser.RULE_param_exp);
	    var _la = 0;
	    try {
	        this.state = 281;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,40,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 266;
	            this.match(BashParser.DOLLAR_LCURLY);
	            this.state = 267;
	            this.match(BashParser.VARNAME);
	            this.state = 274;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(((((_la - 40)) & ~0x1f) === 0 && ((1 << (_la - 40)) & 481) !== 0)) {
	                this.state = 268;
	                this.param_exp_op();
	                this.state = 270;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                if(_la===4) {
	                    this.state = 269;
	                    this.match(BashParser.BLANK);
	                }

	                this.state = 272;
	                this.assign_rls();
	            }

	            this.state = 276;
	            this.match(BashParser.RCURLY);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 277;
	            this.match(BashParser.DOLLAR_LCURLY);
	            this.state = 278;
	            this.match(BashParser.HASH);
	            this.state = 279;
	            this.match(BashParser.VARNAME);
	            this.state = 280;
	            this.match(BashParser.RCURLY);
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



	param_exp_op() {
	    let localctx = new Param_exp_opContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, BashParser.RULE_param_exp_op);
	    var _la = 0;
	    try {
	        this.state = 289;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 40:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 283;
	            this.match(BashParser.COMMA);
	            this.state = 284;
	            _la = this._input.LA(1);
	            if(!(_la===5 || ((((_la - 41)) & ~0x1f) === 0 && ((1 << (_la - 41)) & 13) !== 0))) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            break;
	        case 45:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 285;
	            this.match(BashParser.PERCENT);
	            break;
	        case 46:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 286;
	            this.match(BashParser.DPERCENT);
	            break;
	        case 47:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 287;
	            this.match(BashParser.HASH);
	            break;
	        case 48:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 288;
	            this.match(BashParser.DHASH);
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



	grp() {
	    let localctx = new GrpContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, BashParser.RULE_grp);
	    try {
	        this.state = 293;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 9:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 291;
	            this.paren_grp();
	            break;
	        case 17:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 292;
	            this.curly_grp();
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



	paren_grp() {
	    let localctx = new Paren_grpContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 42, BashParser.RULE_paren_grp);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 295;
	        this.match(BashParser.LPAREN);
	        this.state = 296;
	        this.pipeline(0);
	        this.state = 297;
	        this.match(BashParser.RPAREN);
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



	pure_curly() {
	    let localctx = new Pure_curlyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 44, BashParser.RULE_pure_curly);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 299;
	        _la = this._input.LA(1);
	        if(!(_la===17 || _la===18)) {
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



	curly_grp() {
	    let localctx = new Curly_grpContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 46, BashParser.RULE_curly_grp);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 301;
	        this.match(BashParser.LCURLY);
	        this.state = 302;
	        this.pipeline(0);
	        this.state = 303;
	        this.match(BashParser.SEMI);
	        this.state = 305;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===4) {
	            this.state = 304;
	            this.match(BashParser.BLANK);
	        }

	        this.state = 307;
	        this.match(BashParser.RCURLY);
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

BashParser.EOF = antlr4.Token.EOF;
BashParser.VARNAME = 1;
BashParser.PUNCS = 2;
BashParser.NUM = 3;
BashParser.BLANK = 4;
BashParser.EQ = 5;
BashParser.VAR = 6;
BashParser.SQUOTE = 7;
BashParser.DQUOTE = 8;
BashParser.LPAREN = 9;
BashParser.DOLLAR_LPAREN = 10;
BashParser.LT_LPAREN = 11;
BashParser.GT_LPAREN = 12;
BashParser.BACKTICK = 13;
BashParser.DOLLAR_DLPAREN = 14;
BashParser.DOLLAR_LCURLY = 15;
BashParser.ESC_CHAR = 16;
BashParser.LCURLY = 17;
BashParser.RCURLY = 18;
BashParser.SEMI = 19;
BashParser.PIPE = 20;
BashParser.PIPE_AND = 21;
BashParser.LT = 22;
BashParser.GT = 23;
BashParser.LT_AND = 24;
BashParser.GT_AND = 25;
BashParser.AND_GT = 26;
BashParser.AND_DGT = 27;
BashParser.DLT = 28;
BashParser.TLT = 29;
BashParser.DLT_DASH = 30;
BashParser.DGT = 31;
BashParser.LTGT = 32;
BashParser.GTPIPE = 33;
BashParser.AND = 34;
BashParser.NL = 35;
BashParser.RPAREN = 36;
BashParser.DQUOTE_DOLLAR_DLPAREN = 37;
BashParser.ARITH_CONTENT = 38;
BashParser.DRPAREN = 39;
BashParser.COMMA = 40;
BashParser.DASH = 41;
BashParser.PARAM_EQ = 42;
BashParser.QMARK = 43;
BashParser.PLUS = 44;
BashParser.PERCENT = 45;
BashParser.DPERCENT = 46;
BashParser.HASH = 47;
BashParser.DHASH = 48;

BashParser.RULE_pipeline = 0;
BashParser.RULE_cmd = 1;
BashParser.RULE_exec_prefix = 2;
BashParser.RULE_assign = 3;
BashParser.RULE_assign_rls = 4;
BashParser.RULE_exec = 5;
BashParser.RULE_prog = 6;
BashParser.RULE_exec_suffix = 7;
BashParser.RULE_redir = 8;
BashParser.RULE_redir_op = 9;
BashParser.RULE_arg = 10;
BashParser.RULE_dquote_str = 11;
BashParser.RULE_squote_str = 12;
BashParser.RULE_subst = 13;
BashParser.RULE_cst = 14;
BashParser.RULE_lpst = 15;
BashParser.RULE_rpst = 16;
BashParser.RULE_arith = 17;
BashParser.RULE_param_exp = 18;
BashParser.RULE_param_exp_op = 19;
BashParser.RULE_grp = 20;
BashParser.RULE_paren_grp = 21;
BashParser.RULE_pure_curly = 22;
BashParser.RULE_curly_grp = 23;

class PipelineContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BashParser.RULE_pipeline;
    }

	cmd() {
	    return this.getTypedRuleContext(CmdContext,0);
	};

	pipeline() {
	    return this.getTypedRuleContext(PipelineContext,0);
	};

	PIPE() {
	    return this.getToken(BashParser.PIPE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof BashParserListener ) {
	        listener.enterPipeline(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BashParserListener ) {
	        listener.exitPipeline(this);
		}
	}


}



class CmdContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BashParser.RULE_cmd;
    }

	exec() {
	    return this.getTypedRuleContext(ExecContext,0);
	};

	exec_prefix() {
	    return this.getTypedRuleContext(Exec_prefixContext,0);
	};

	BLANK = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(BashParser.BLANK);
	    } else {
	        return this.getToken(BashParser.BLANK, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof BashParserListener ) {
	        listener.enterCmd(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BashParserListener ) {
	        listener.exitCmd(this);
		}
	}


}



class Exec_prefixContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BashParser.RULE_exec_prefix;
    }

	redir() {
	    return this.getTypedRuleContext(RedirContext,0);
	};

	assign() {
	    return this.getTypedRuleContext(AssignContext,0);
	};

	exec_prefix() {
	    return this.getTypedRuleContext(Exec_prefixContext,0);
	};

	BLANK() {
	    return this.getToken(BashParser.BLANK, 0);
	};

	enterRule(listener) {
	    if(listener instanceof BashParserListener ) {
	        listener.enterExec_prefix(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BashParserListener ) {
	        listener.exitExec_prefix(this);
		}
	}


}



class AssignContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BashParser.RULE_assign;
    }

	VARNAME() {
	    return this.getToken(BashParser.VARNAME, 0);
	};

	EQ() {
	    return this.getToken(BashParser.EQ, 0);
	};

	assign_rls() {
	    return this.getTypedRuleContext(Assign_rlsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof BashParserListener ) {
	        listener.enterAssign(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BashParserListener ) {
	        listener.exitAssign(this);
		}
	}


}



class Assign_rlsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BashParser.RULE_assign_rls;
    }

	VARNAME = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(BashParser.VARNAME);
	    } else {
	        return this.getToken(BashParser.VARNAME, i);
	    }
	};


	PUNCS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(BashParser.PUNCS);
	    } else {
	        return this.getToken(BashParser.PUNCS, i);
	    }
	};


	NUM = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(BashParser.NUM);
	    } else {
	        return this.getToken(BashParser.NUM, i);
	    }
	};


	squote_str = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Squote_strContext);
	    } else {
	        return this.getTypedRuleContext(Squote_strContext,i);
	    }
	};

	VAR = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(BashParser.VAR);
	    } else {
	        return this.getToken(BashParser.VAR, i);
	    }
	};


	dquote_str = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Dquote_strContext);
	    } else {
	        return this.getTypedRuleContext(Dquote_strContext,i);
	    }
	};

	subst = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SubstContext);
	    } else {
	        return this.getTypedRuleContext(SubstContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof BashParserListener ) {
	        listener.enterAssign_rls(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BashParserListener ) {
	        listener.exitAssign_rls(this);
		}
	}


}



class ExecContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BashParser.RULE_exec;
    }

	prog() {
	    return this.getTypedRuleContext(ProgContext,0);
	};

	exec_suffix() {
	    return this.getTypedRuleContext(Exec_suffixContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof BashParserListener ) {
	        listener.enterExec(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BashParserListener ) {
	        listener.exitExec(this);
		}
	}


}



class ProgContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BashParser.RULE_prog;
    }

	VARNAME = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(BashParser.VARNAME);
	    } else {
	        return this.getToken(BashParser.VARNAME, i);
	    }
	};


	PUNCS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(BashParser.PUNCS);
	    } else {
	        return this.getToken(BashParser.PUNCS, i);
	    }
	};


	NUM = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(BashParser.NUM);
	    } else {
	        return this.getToken(BashParser.NUM, i);
	    }
	};


	VAR = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(BashParser.VAR);
	    } else {
	        return this.getToken(BashParser.VAR, i);
	    }
	};


	squote_str = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Squote_strContext);
	    } else {
	        return this.getTypedRuleContext(Squote_strContext,i);
	    }
	};

	dquote_str = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Dquote_strContext);
	    } else {
	        return this.getTypedRuleContext(Dquote_strContext,i);
	    }
	};

	subst = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SubstContext);
	    } else {
	        return this.getTypedRuleContext(SubstContext,i);
	    }
	};

	EQ = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(BashParser.EQ);
	    } else {
	        return this.getToken(BashParser.EQ, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof BashParserListener ) {
	        listener.enterProg(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BashParserListener ) {
	        listener.exitProg(this);
		}
	}


}



class Exec_suffixContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BashParser.RULE_exec_suffix;
    }

	redir() {
	    return this.getTypedRuleContext(RedirContext,0);
	};

	BLANK() {
	    return this.getToken(BashParser.BLANK, 0);
	};

	arg() {
	    return this.getTypedRuleContext(ArgContext,0);
	};

	exec_suffix() {
	    return this.getTypedRuleContext(Exec_suffixContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof BashParserListener ) {
	        listener.enterExec_suffix(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BashParserListener ) {
	        listener.exitExec_suffix(this);
		}
	}


}



class RedirContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BashParser.RULE_redir;
    }

	NUM() {
	    return this.getToken(BashParser.NUM, 0);
	};

	redir_op() {
	    return this.getTypedRuleContext(Redir_opContext,0);
	};

	arg() {
	    return this.getTypedRuleContext(ArgContext,0);
	};

	BLANK() {
	    return this.getToken(BashParser.BLANK, 0);
	};

	enterRule(listener) {
	    if(listener instanceof BashParserListener ) {
	        listener.enterRedir(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BashParserListener ) {
	        listener.exitRedir(this);
		}
	}


}



class Redir_opContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BashParser.RULE_redir_op;
    }

	LT() {
	    return this.getToken(BashParser.LT, 0);
	};

	GT() {
	    return this.getToken(BashParser.GT, 0);
	};

	LT_AND() {
	    return this.getToken(BashParser.LT_AND, 0);
	};

	GT_AND() {
	    return this.getToken(BashParser.GT_AND, 0);
	};

	AND_GT() {
	    return this.getToken(BashParser.AND_GT, 0);
	};

	AND_DGT() {
	    return this.getToken(BashParser.AND_DGT, 0);
	};

	DLT() {
	    return this.getToken(BashParser.DLT, 0);
	};

	TLT() {
	    return this.getToken(BashParser.TLT, 0);
	};

	DLT_DASH() {
	    return this.getToken(BashParser.DLT_DASH, 0);
	};

	DGT() {
	    return this.getToken(BashParser.DGT, 0);
	};

	LTGT() {
	    return this.getToken(BashParser.LTGT, 0);
	};

	GTPIPE() {
	    return this.getToken(BashParser.GTPIPE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof BashParserListener ) {
	        listener.enterRedir_op(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BashParserListener ) {
	        listener.exitRedir_op(this);
		}
	}


}



class ArgContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BashParser.RULE_arg;
    }

	VARNAME = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(BashParser.VARNAME);
	    } else {
	        return this.getToken(BashParser.VARNAME, i);
	    }
	};


	PUNCS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(BashParser.PUNCS);
	    } else {
	        return this.getToken(BashParser.PUNCS, i);
	    }
	};


	ESC_CHAR = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(BashParser.ESC_CHAR);
	    } else {
	        return this.getToken(BashParser.ESC_CHAR, i);
	    }
	};


	AND = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(BashParser.AND);
	    } else {
	        return this.getToken(BashParser.AND, i);
	    }
	};


	EQ = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(BashParser.EQ);
	    } else {
	        return this.getToken(BashParser.EQ, i);
	    }
	};


	NUM = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(BashParser.NUM);
	    } else {
	        return this.getToken(BashParser.NUM, i);
	    }
	};


	squote_str = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Squote_strContext);
	    } else {
	        return this.getTypedRuleContext(Squote_strContext,i);
	    }
	};

	VAR = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(BashParser.VAR);
	    } else {
	        return this.getToken(BashParser.VAR, i);
	    }
	};


	dquote_str = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Dquote_strContext);
	    } else {
	        return this.getTypedRuleContext(Dquote_strContext,i);
	    }
	};

	subst = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SubstContext);
	    } else {
	        return this.getTypedRuleContext(SubstContext,i);
	    }
	};

	pure_curly = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Pure_curlyContext);
	    } else {
	        return this.getTypedRuleContext(Pure_curlyContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof BashParserListener ) {
	        listener.enterArg(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BashParserListener ) {
	        listener.exitArg(this);
		}
	}


}



class Dquote_strContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BashParser.RULE_dquote_str;
    }

	DQUOTE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(BashParser.DQUOTE);
	    } else {
	        return this.getToken(BashParser.DQUOTE, i);
	    }
	};


	VARNAME = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(BashParser.VARNAME);
	    } else {
	        return this.getToken(BashParser.VARNAME, i);
	    }
	};


	NUM = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(BashParser.NUM);
	    } else {
	        return this.getToken(BashParser.NUM, i);
	    }
	};


	PUNCS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(BashParser.PUNCS);
	    } else {
	        return this.getToken(BashParser.PUNCS, i);
	    }
	};


	LT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(BashParser.LT);
	    } else {
	        return this.getToken(BashParser.LT, i);
	    }
	};


	GT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(BashParser.GT);
	    } else {
	        return this.getToken(BashParser.GT, i);
	    }
	};


	VAR = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(BashParser.VAR);
	    } else {
	        return this.getToken(BashParser.VAR, i);
	    }
	};


	subst = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SubstContext);
	    } else {
	        return this.getTypedRuleContext(SubstContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof BashParserListener ) {
	        listener.enterDquote_str(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BashParserListener ) {
	        listener.exitDquote_str(this);
		}
	}


}



class Squote_strContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BashParser.RULE_squote_str;
    }

	SQUOTE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(BashParser.SQUOTE);
	    } else {
	        return this.getToken(BashParser.SQUOTE, i);
	    }
	};


	VARNAME = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(BashParser.VARNAME);
	    } else {
	        return this.getToken(BashParser.VARNAME, i);
	    }
	};


	PUNCS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(BashParser.PUNCS);
	    } else {
	        return this.getToken(BashParser.PUNCS, i);
	    }
	};


	NUM = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(BashParser.NUM);
	    } else {
	        return this.getToken(BashParser.NUM, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof BashParserListener ) {
	        listener.enterSquote_str(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BashParserListener ) {
	        listener.exitSquote_str(this);
		}
	}


}



class SubstContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BashParser.RULE_subst;
    }

	cst() {
	    return this.getTypedRuleContext(CstContext,0);
	};

	lpst() {
	    return this.getTypedRuleContext(LpstContext,0);
	};

	rpst() {
	    return this.getTypedRuleContext(RpstContext,0);
	};

	arith() {
	    return this.getTypedRuleContext(ArithContext,0);
	};

	param_exp() {
	    return this.getTypedRuleContext(Param_expContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof BashParserListener ) {
	        listener.enterSubst(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BashParserListener ) {
	        listener.exitSubst(this);
		}
	}


}



class CstContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BashParser.RULE_cst;
    }

	DOLLAR_LPAREN() {
	    return this.getToken(BashParser.DOLLAR_LPAREN, 0);
	};

	RPAREN() {
	    return this.getToken(BashParser.RPAREN, 0);
	};

	pipeline() {
	    return this.getTypedRuleContext(PipelineContext,0);
	};

	BACKTICK = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(BashParser.BACKTICK);
	    } else {
	        return this.getToken(BashParser.BACKTICK, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof BashParserListener ) {
	        listener.enterCst(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BashParserListener ) {
	        listener.exitCst(this);
		}
	}


}



class LpstContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BashParser.RULE_lpst;
    }

	LT_LPAREN() {
	    return this.getToken(BashParser.LT_LPAREN, 0);
	};

	RPAREN() {
	    return this.getToken(BashParser.RPAREN, 0);
	};

	pipeline() {
	    return this.getTypedRuleContext(PipelineContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof BashParserListener ) {
	        listener.enterLpst(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BashParserListener ) {
	        listener.exitLpst(this);
		}
	}


}



class RpstContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BashParser.RULE_rpst;
    }

	GT_LPAREN() {
	    return this.getToken(BashParser.GT_LPAREN, 0);
	};

	RPAREN() {
	    return this.getToken(BashParser.RPAREN, 0);
	};

	pipeline() {
	    return this.getTypedRuleContext(PipelineContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof BashParserListener ) {
	        listener.enterRpst(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BashParserListener ) {
	        listener.exitRpst(this);
		}
	}


}



class ArithContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BashParser.RULE_arith;
    }

	DOLLAR_DLPAREN() {
	    return this.getToken(BashParser.DOLLAR_DLPAREN, 0);
	};

	DRPAREN() {
	    return this.getToken(BashParser.DRPAREN, 0);
	};

	pipeline() {
	    return this.getTypedRuleContext(PipelineContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof BashParserListener ) {
	        listener.enterArith(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BashParserListener ) {
	        listener.exitArith(this);
		}
	}


}



class Param_expContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BashParser.RULE_param_exp;
    }

	DOLLAR_LCURLY() {
	    return this.getToken(BashParser.DOLLAR_LCURLY, 0);
	};

	VARNAME() {
	    return this.getToken(BashParser.VARNAME, 0);
	};

	RCURLY() {
	    return this.getToken(BashParser.RCURLY, 0);
	};

	param_exp_op() {
	    return this.getTypedRuleContext(Param_exp_opContext,0);
	};

	assign_rls() {
	    return this.getTypedRuleContext(Assign_rlsContext,0);
	};

	BLANK() {
	    return this.getToken(BashParser.BLANK, 0);
	};

	HASH() {
	    return this.getToken(BashParser.HASH, 0);
	};

	enterRule(listener) {
	    if(listener instanceof BashParserListener ) {
	        listener.enterParam_exp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BashParserListener ) {
	        listener.exitParam_exp(this);
		}
	}


}



class Param_exp_opContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BashParser.RULE_param_exp_op;
    }

	COMMA() {
	    return this.getToken(BashParser.COMMA, 0);
	};

	DASH() {
	    return this.getToken(BashParser.DASH, 0);
	};

	EQ() {
	    return this.getToken(BashParser.EQ, 0);
	};

	QMARK() {
	    return this.getToken(BashParser.QMARK, 0);
	};

	PLUS() {
	    return this.getToken(BashParser.PLUS, 0);
	};

	PERCENT() {
	    return this.getToken(BashParser.PERCENT, 0);
	};

	DPERCENT() {
	    return this.getToken(BashParser.DPERCENT, 0);
	};

	HASH() {
	    return this.getToken(BashParser.HASH, 0);
	};

	DHASH() {
	    return this.getToken(BashParser.DHASH, 0);
	};

	enterRule(listener) {
	    if(listener instanceof BashParserListener ) {
	        listener.enterParam_exp_op(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BashParserListener ) {
	        listener.exitParam_exp_op(this);
		}
	}


}



class GrpContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BashParser.RULE_grp;
    }

	paren_grp() {
	    return this.getTypedRuleContext(Paren_grpContext,0);
	};

	curly_grp() {
	    return this.getTypedRuleContext(Curly_grpContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof BashParserListener ) {
	        listener.enterGrp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BashParserListener ) {
	        listener.exitGrp(this);
		}
	}


}



class Paren_grpContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BashParser.RULE_paren_grp;
    }

	LPAREN() {
	    return this.getToken(BashParser.LPAREN, 0);
	};

	pipeline() {
	    return this.getTypedRuleContext(PipelineContext,0);
	};

	RPAREN() {
	    return this.getToken(BashParser.RPAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof BashParserListener ) {
	        listener.enterParen_grp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BashParserListener ) {
	        listener.exitParen_grp(this);
		}
	}


}



class Pure_curlyContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BashParser.RULE_pure_curly;
    }

	LCURLY() {
	    return this.getToken(BashParser.LCURLY, 0);
	};

	RCURLY() {
	    return this.getToken(BashParser.RCURLY, 0);
	};

	enterRule(listener) {
	    if(listener instanceof BashParserListener ) {
	        listener.enterPure_curly(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BashParserListener ) {
	        listener.exitPure_curly(this);
		}
	}


}



class Curly_grpContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BashParser.RULE_curly_grp;
    }

	LCURLY() {
	    return this.getToken(BashParser.LCURLY, 0);
	};

	pipeline() {
	    return this.getTypedRuleContext(PipelineContext,0);
	};

	SEMI() {
	    return this.getToken(BashParser.SEMI, 0);
	};

	RCURLY() {
	    return this.getToken(BashParser.RCURLY, 0);
	};

	BLANK() {
	    return this.getToken(BashParser.BLANK, 0);
	};

	enterRule(listener) {
	    if(listener instanceof BashParserListener ) {
	        listener.enterCurly_grp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BashParserListener ) {
	        listener.exitCurly_grp(this);
		}
	}


}




BashParser.PipelineContext = PipelineContext; 
BashParser.CmdContext = CmdContext; 
BashParser.Exec_prefixContext = Exec_prefixContext; 
BashParser.AssignContext = AssignContext; 
BashParser.Assign_rlsContext = Assign_rlsContext; 
BashParser.ExecContext = ExecContext; 
BashParser.ProgContext = ProgContext; 
BashParser.Exec_suffixContext = Exec_suffixContext; 
BashParser.RedirContext = RedirContext; 
BashParser.Redir_opContext = Redir_opContext; 
BashParser.ArgContext = ArgContext; 
BashParser.Dquote_strContext = Dquote_strContext; 
BashParser.Squote_strContext = Squote_strContext; 
BashParser.SubstContext = SubstContext; 
BashParser.CstContext = CstContext; 
BashParser.LpstContext = LpstContext; 
BashParser.RpstContext = RpstContext; 
BashParser.ArithContext = ArithContext; 
BashParser.Param_expContext = Param_expContext; 
BashParser.Param_exp_opContext = Param_exp_opContext; 
BashParser.GrpContext = GrpContext; 
BashParser.Paren_grpContext = Paren_grpContext; 
BashParser.Pure_curlyContext = Pure_curlyContext; 
BashParser.Curly_grpContext = Curly_grpContext; 

// --- Dynamic Universal Module Wrapper ---
if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = { CPP14Lexer };
} else if (typeof window !== 'undefined') {
    window.CPP14Lexer = CPP14Lexer;
} else if (typeof self !== 'undefined') {
    self.CPP14Lexer = CPP14Lexer;
}
