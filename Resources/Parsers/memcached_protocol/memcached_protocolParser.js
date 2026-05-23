// Generated from C:/Users/megam/jupyter_ops/Resources/Parsers/memcached_protocol/memcached_protocol.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import memcached_protocolListener from './memcached_protocolListener.js';
const serializedATN = [4,1,34,251,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,7,33,2,34,7,
34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,
0,1,0,1,0,4,0,89,8,0,11,0,12,0,90,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
1,1,1,1,1,1,1,1,1,1,1,3,1,108,8,1,1,1,3,1,111,8,1,1,2,1,2,1,3,1,3,4,3,117,
8,3,11,3,12,3,118,1,4,1,4,1,4,3,4,124,8,4,1,4,3,4,127,8,4,1,5,1,5,1,5,1,
5,3,5,133,8,5,1,6,1,6,1,6,1,6,3,6,139,8,6,1,7,1,7,3,7,143,8,7,1,8,1,8,1,
9,1,9,3,9,149,8,9,1,9,3,9,152,8,9,1,10,1,10,1,11,1,11,1,11,1,12,1,12,1,13,
1,13,1,13,1,13,1,13,3,13,166,8,13,1,14,1,14,1,14,1,14,1,14,1,14,3,14,174,
8,14,1,14,3,14,177,8,14,1,15,1,15,1,15,3,15,182,8,15,1,16,1,16,1,16,3,16,
187,8,16,1,17,1,17,1,17,1,17,3,17,193,8,17,1,18,1,18,1,18,3,18,198,8,18,
1,19,1,19,1,19,1,19,1,20,1,20,1,20,1,21,1,21,1,22,1,22,4,22,211,8,22,11,
22,12,22,212,1,23,1,23,4,23,217,8,23,11,23,12,23,218,1,24,1,24,1,25,1,25,
1,26,1,26,1,27,1,27,1,28,1,28,1,29,1,29,1,30,1,30,1,31,1,31,1,32,1,32,1,
33,1,33,1,34,1,34,1,35,1,35,1,36,1,36,1,37,1,37,1,38,1,38,1,38,2,212,218,
0,39,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,
48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,0,3,1,0,2,6,1,0,7,8,1,0,13,
15,249,0,88,1,0,0,0,2,107,1,0,0,0,4,112,1,0,0,0,6,114,1,0,0,0,8,120,1,0,
0,0,10,128,1,0,0,0,12,134,1,0,0,0,14,140,1,0,0,0,16,144,1,0,0,0,18,146,1,
0,0,0,20,153,1,0,0,0,22,155,1,0,0,0,24,158,1,0,0,0,26,165,1,0,0,0,28,176,
1,0,0,0,30,181,1,0,0,0,32,186,1,0,0,0,34,192,1,0,0,0,36,197,1,0,0,0,38,199,
1,0,0,0,40,203,1,0,0,0,42,206,1,0,0,0,44,208,1,0,0,0,46,214,1,0,0,0,48,220,
1,0,0,0,50,222,1,0,0,0,52,224,1,0,0,0,54,226,1,0,0,0,56,228,1,0,0,0,58,230,
1,0,0,0,60,232,1,0,0,0,62,234,1,0,0,0,64,236,1,0,0,0,66,238,1,0,0,0,68,240,
1,0,0,0,70,242,1,0,0,0,72,244,1,0,0,0,74,246,1,0,0,0,76,248,1,0,0,0,78,89,
3,2,1,0,79,89,3,6,3,0,80,89,3,8,4,0,81,89,3,10,5,0,82,89,3,12,6,0,83,89,
3,14,7,0,84,89,3,18,9,0,85,89,3,20,10,0,86,89,3,22,11,0,87,89,3,24,12,0,
88,78,1,0,0,0,88,79,1,0,0,0,88,80,1,0,0,0,88,81,1,0,0,0,88,82,1,0,0,0,88,
83,1,0,0,0,88,84,1,0,0,0,88,85,1,0,0,0,88,86,1,0,0,0,88,87,1,0,0,0,89,90,
1,0,0,0,90,88,1,0,0,0,90,91,1,0,0,0,91,92,1,0,0,0,92,93,5,0,0,1,93,1,1,0,
0,0,94,95,3,4,2,0,95,96,3,52,26,0,96,97,3,54,27,0,97,98,3,56,28,0,98,99,
3,58,29,0,99,108,1,0,0,0,100,101,5,1,0,0,101,102,3,52,26,0,102,103,3,54,
27,0,103,104,3,56,28,0,104,105,3,58,29,0,105,106,3,60,30,0,106,108,1,0,0,
0,107,94,1,0,0,0,107,100,1,0,0,0,108,110,1,0,0,0,109,111,3,50,25,0,110,109,
1,0,0,0,110,111,1,0,0,0,111,3,1,0,0,0,112,113,7,0,0,0,113,5,1,0,0,0,114,
116,7,1,0,0,115,117,3,52,26,0,116,115,1,0,0,0,117,118,1,0,0,0,118,116,1,
0,0,0,118,119,1,0,0,0,119,7,1,0,0,0,120,121,5,9,0,0,121,123,3,52,26,0,122,
124,3,64,32,0,123,122,1,0,0,0,123,124,1,0,0,0,124,126,1,0,0,0,125,127,3,
50,25,0,126,125,1,0,0,0,126,127,1,0,0,0,127,9,1,0,0,0,128,129,5,10,0,0,129,
130,3,52,26,0,130,132,3,62,31,0,131,133,3,50,25,0,132,131,1,0,0,0,132,133,
1,0,0,0,133,11,1,0,0,0,134,135,5,11,0,0,135,136,3,52,26,0,136,138,3,62,31,
0,137,139,3,50,25,0,138,137,1,0,0,0,138,139,1,0,0,0,139,13,1,0,0,0,140,142,
5,12,0,0,141,143,3,16,8,0,142,141,1,0,0,0,142,143,1,0,0,0,143,15,1,0,0,0,
144,145,7,2,0,0,145,17,1,0,0,0,146,148,5,16,0,0,147,149,3,66,33,0,148,147,
1,0,0,0,148,149,1,0,0,0,149,151,1,0,0,0,150,152,3,50,25,0,151,150,1,0,0,
0,151,152,1,0,0,0,152,19,1,0,0,0,153,154,5,17,0,0,154,21,1,0,0,0,155,156,
5,18,0,0,156,157,3,68,34,0,157,23,1,0,0,0,158,159,5,19,0,0,159,25,1,0,0,
0,160,166,3,36,18,0,161,166,5,20,0,0,162,166,5,21,0,0,163,166,5,22,0,0,164,
166,5,23,0,0,165,160,1,0,0,0,165,161,1,0,0,0,165,162,1,0,0,0,165,163,1,0,
0,0,165,164,1,0,0,0,166,27,1,0,0,0,167,177,3,36,18,0,168,169,5,24,0,0,169,
170,3,52,26,0,170,171,3,54,27,0,171,173,3,58,29,0,172,174,3,60,30,0,173,
172,1,0,0,0,173,174,1,0,0,0,174,177,1,0,0,0,175,177,3,48,24,0,176,167,1,
0,0,0,176,168,1,0,0,0,176,175,1,0,0,0,177,29,1,0,0,0,178,182,3,36,18,0,179,
182,5,25,0,0,180,182,5,23,0,0,181,178,1,0,0,0,181,179,1,0,0,0,181,180,1,
0,0,0,182,31,1,0,0,0,183,187,3,36,18,0,184,187,5,23,0,0,185,187,5,32,0,0,
186,183,1,0,0,0,186,184,1,0,0,0,186,185,1,0,0,0,187,33,1,0,0,0,188,193,3,
36,18,0,189,193,3,38,19,0,190,193,3,40,20,0,191,193,3,48,24,0,192,188,1,
0,0,0,192,189,1,0,0,0,192,190,1,0,0,0,192,191,1,0,0,0,193,35,1,0,0,0,194,
198,3,42,21,0,195,198,3,44,22,0,196,198,3,46,23,0,197,194,1,0,0,0,197,195,
1,0,0,0,197,196,1,0,0,0,198,37,1,0,0,0,199,200,5,26,0,0,200,201,3,70,35,
0,201,202,3,72,36,0,202,39,1,0,0,0,203,204,3,74,37,0,204,205,3,76,38,0,205,
41,1,0,0,0,206,207,5,27,0,0,207,43,1,0,0,0,208,210,5,28,0,0,209,211,9,0,
0,0,210,209,1,0,0,0,211,212,1,0,0,0,212,213,1,0,0,0,212,210,1,0,0,0,213,
45,1,0,0,0,214,216,5,29,0,0,215,217,9,0,0,0,216,215,1,0,0,0,217,218,1,0,
0,0,218,219,1,0,0,0,218,216,1,0,0,0,219,47,1,0,0,0,220,221,5,30,0,0,221,
49,1,0,0,0,222,223,5,31,0,0,223,51,1,0,0,0,224,225,9,0,0,0,225,53,1,0,0,
0,226,227,5,32,0,0,227,55,1,0,0,0,228,229,5,32,0,0,229,57,1,0,0,0,230,231,
5,32,0,0,231,59,1,0,0,0,232,233,5,32,0,0,233,61,1,0,0,0,234,235,5,32,0,0,
235,63,1,0,0,0,236,237,5,32,0,0,237,65,1,0,0,0,238,239,5,32,0,0,239,67,1,
0,0,0,240,241,5,32,0,0,241,69,1,0,0,0,242,243,5,33,0,0,243,71,1,0,0,0,244,
245,9,0,0,0,245,73,1,0,0,0,246,247,5,32,0,0,247,75,1,0,0,0,248,249,5,32,
0,0,249,77,1,0,0,0,21,88,90,107,110,118,123,126,132,138,142,148,151,165,
173,176,181,186,192,197,212,218];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class memcached_protocolParser extends antlr4.Parser {

    static grammarFileName = "memcached_protocol.g4";
    static literalNames = [ null, "'cas'", "'set'", "'add'", "'replace'", 
                            "'append'", "'prepend'", "'get'", "'gets'", 
                            "'delete'", "'incr'", "'decr'", "'stats'", "'items'", 
                            "'slabs'", "'sizes'", "'flush_all'", "'version'", 
                            "'verbosity'", "'quit'", "'STORED'", "'NOT_STORED'", 
                            "'EXISTS'", "'NOT_FOUND'", "'VALUE'", "'DELETED'", 
                            "'STAT'", "'ERROR'", "'CLIENT_ERROR'", "'SERVER_ERROR'", 
                            "'END'", "'noreply'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             "INTEGER", "WORD", "WHITESPACE" ];
    static ruleNames = [ "command_line", "storage_command", "storage_command_name", 
                         "retrieval_command", "delete_command", "increment_command", 
                         "decrement_command", "statistics_command", "statistics_option", 
                         "flush_command", "version_command", "verbosity_command", 
                         "quit_command", "storage_response", "retrieval_response", 
                         "deletion_response", "incr_or_decr_response", "statistics_response", 
                         "error_response", "general_statistic", "size_statistic", 
                         "general_error", "client_error_message", "server_error_message", 
                         "end", "noreply", "key", "flags", "exptime", "bytes", 
                         "cas_unique", "value", "time", "delay", "verbosity_level", 
                         "statistic_name", "statistic_value", "size", "count" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = memcached_protocolParser.ruleNames;
        this.literalNames = memcached_protocolParser.literalNames;
        this.symbolicNames = memcached_protocolParser.symbolicNames;
    }



	command_line() {
	    let localctx = new Command_lineContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, memcached_protocolParser.RULE_command_line);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 88; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 88;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 1:
	            case 2:
	            case 3:
	            case 4:
	            case 5:
	            case 6:
	                this.state = 78;
	                this.storage_command();
	                break;
	            case 7:
	            case 8:
	                this.state = 79;
	                this.retrieval_command();
	                break;
	            case 9:
	                this.state = 80;
	                this.delete_command();
	                break;
	            case 10:
	                this.state = 81;
	                this.increment_command();
	                break;
	            case 11:
	                this.state = 82;
	                this.decrement_command();
	                break;
	            case 12:
	                this.state = 83;
	                this.statistics_command();
	                break;
	            case 16:
	                this.state = 84;
	                this.flush_command();
	                break;
	            case 17:
	                this.state = 85;
	                this.version_command();
	                break;
	            case 18:
	                this.state = 86;
	                this.verbosity_command();
	                break;
	            case 19:
	                this.state = 87;
	                this.quit_command();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 90; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 991230) !== 0));
	        this.state = 92;
	        this.match(memcached_protocolParser.EOF);
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



	storage_command() {
	    let localctx = new Storage_commandContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, memcached_protocolParser.RULE_storage_command);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 107;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 2:
	        case 3:
	        case 4:
	        case 5:
	        case 6:
	            this.state = 94;
	            this.storage_command_name();
	            this.state = 95;
	            this.key();
	            this.state = 96;
	            this.flags();
	            this.state = 97;
	            this.exptime();
	            this.state = 98;
	            this.bytes();
	            break;
	        case 1:
	            this.state = 100;
	            this.match(memcached_protocolParser.T__0);
	            this.state = 101;
	            this.key();
	            this.state = 102;
	            this.flags();
	            this.state = 103;
	            this.exptime();
	            this.state = 104;
	            this.bytes();
	            this.state = 105;
	            this.cas_unique();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 110;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===31) {
	            this.state = 109;
	            this.noreply();
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



	storage_command_name() {
	    let localctx = new Storage_command_nameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, memcached_protocolParser.RULE_storage_command_name);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 112;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 124) !== 0))) {
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



	retrieval_command() {
	    let localctx = new Retrieval_commandContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, memcached_protocolParser.RULE_retrieval_command);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 114;
	        _la = this._input.LA(1);
	        if(!(_la===7 || _la===8)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 116; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 115;
	        		this.key();
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 118; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,4, this._ctx);
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



	delete_command() {
	    let localctx = new Delete_commandContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, memcached_protocolParser.RULE_delete_command);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 120;
	        this.match(memcached_protocolParser.T__8);
	        this.state = 121;
	        this.key();
	        this.state = 123;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===32) {
	            this.state = 122;
	            this.time();
	        }

	        this.state = 126;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===31) {
	            this.state = 125;
	            this.noreply();
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



	increment_command() {
	    let localctx = new Increment_commandContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, memcached_protocolParser.RULE_increment_command);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 128;
	        this.match(memcached_protocolParser.T__9);
	        this.state = 129;
	        this.key();
	        this.state = 130;
	        this.value();
	        this.state = 132;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===31) {
	            this.state = 131;
	            this.noreply();
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



	decrement_command() {
	    let localctx = new Decrement_commandContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, memcached_protocolParser.RULE_decrement_command);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 134;
	        this.match(memcached_protocolParser.T__10);
	        this.state = 135;
	        this.key();
	        this.state = 136;
	        this.value();
	        this.state = 138;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===31) {
	            this.state = 137;
	            this.noreply();
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



	statistics_command() {
	    let localctx = new Statistics_commandContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, memcached_protocolParser.RULE_statistics_command);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 140;
	        this.match(memcached_protocolParser.T__11);
	        this.state = 142;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 57344) !== 0)) {
	            this.state = 141;
	            this.statistics_option();
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



	statistics_option() {
	    let localctx = new Statistics_optionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, memcached_protocolParser.RULE_statistics_option);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 144;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 57344) !== 0))) {
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



	flush_command() {
	    let localctx = new Flush_commandContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, memcached_protocolParser.RULE_flush_command);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 146;
	        this.match(memcached_protocolParser.T__15);
	        this.state = 148;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===32) {
	            this.state = 147;
	            this.delay();
	        }

	        this.state = 151;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===31) {
	            this.state = 150;
	            this.noreply();
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



	version_command() {
	    let localctx = new Version_commandContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, memcached_protocolParser.RULE_version_command);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 153;
	        this.match(memcached_protocolParser.T__16);
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



	verbosity_command() {
	    let localctx = new Verbosity_commandContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, memcached_protocolParser.RULE_verbosity_command);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 155;
	        this.match(memcached_protocolParser.T__17);
	        this.state = 156;
	        this.verbosity_level();
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



	quit_command() {
	    let localctx = new Quit_commandContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, memcached_protocolParser.RULE_quit_command);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 158;
	        this.match(memcached_protocolParser.T__18);
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



	storage_response() {
	    let localctx = new Storage_responseContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, memcached_protocolParser.RULE_storage_response);
	    try {
	        this.state = 165;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 27:
	        case 28:
	        case 29:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 160;
	            this.error_response();
	            break;
	        case 20:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 161;
	            this.match(memcached_protocolParser.T__19);
	            break;
	        case 21:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 162;
	            this.match(memcached_protocolParser.T__20);
	            break;
	        case 22:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 163;
	            this.match(memcached_protocolParser.T__21);
	            break;
	        case 23:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 164;
	            this.match(memcached_protocolParser.T__22);
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



	retrieval_response() {
	    let localctx = new Retrieval_responseContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, memcached_protocolParser.RULE_retrieval_response);
	    var _la = 0;
	    try {
	        this.state = 176;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 27:
	        case 28:
	        case 29:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 167;
	            this.error_response();
	            break;
	        case 24:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 168;
	            this.match(memcached_protocolParser.T__23);
	            this.state = 169;
	            this.key();
	            this.state = 170;
	            this.flags();
	            this.state = 171;
	            this.bytes();
	            this.state = 173;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===32) {
	                this.state = 172;
	                this.cas_unique();
	            }

	            break;
	        case 30:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 175;
	            this.end();
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



	deletion_response() {
	    let localctx = new Deletion_responseContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, memcached_protocolParser.RULE_deletion_response);
	    try {
	        this.state = 181;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 27:
	        case 28:
	        case 29:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 178;
	            this.error_response();
	            break;
	        case 25:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 179;
	            this.match(memcached_protocolParser.T__24);
	            break;
	        case 23:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 180;
	            this.match(memcached_protocolParser.T__22);
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



	incr_or_decr_response() {
	    let localctx = new Incr_or_decr_responseContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, memcached_protocolParser.RULE_incr_or_decr_response);
	    try {
	        this.state = 186;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 27:
	        case 28:
	        case 29:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 183;
	            this.error_response();
	            break;
	        case 23:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 184;
	            this.match(memcached_protocolParser.T__22);
	            break;
	        case 32:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 185;
	            this.match(memcached_protocolParser.INTEGER);
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



	statistics_response() {
	    let localctx = new Statistics_responseContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, memcached_protocolParser.RULE_statistics_response);
	    try {
	        this.state = 192;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 27:
	        case 28:
	        case 29:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 188;
	            this.error_response();
	            break;
	        case 26:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 189;
	            this.general_statistic();
	            break;
	        case 32:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 190;
	            this.size_statistic();
	            break;
	        case 30:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 191;
	            this.end();
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



	error_response() {
	    let localctx = new Error_responseContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, memcached_protocolParser.RULE_error_response);
	    try {
	        this.state = 197;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 27:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 194;
	            this.general_error();
	            break;
	        case 28:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 195;
	            this.client_error_message();
	            break;
	        case 29:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 196;
	            this.server_error_message();
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



	general_statistic() {
	    let localctx = new General_statisticContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, memcached_protocolParser.RULE_general_statistic);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 199;
	        this.match(memcached_protocolParser.T__25);
	        this.state = 200;
	        this.statistic_name();
	        this.state = 201;
	        this.statistic_value();
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



	size_statistic() {
	    let localctx = new Size_statisticContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, memcached_protocolParser.RULE_size_statistic);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 203;
	        this.size();
	        this.state = 204;
	        this.count();
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



	general_error() {
	    let localctx = new General_errorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 42, memcached_protocolParser.RULE_general_error);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 206;
	        this.match(memcached_protocolParser.T__26);
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



	client_error_message() {
	    let localctx = new Client_error_messageContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 44, memcached_protocolParser.RULE_client_error_message);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 208;
	        this.match(memcached_protocolParser.T__27);
	        this.state = 210; 
	        this._errHandler.sync(this);
	        var _alt = 1+1;
	        do {
	        	switch (_alt) {
	        	case 1+1:
	        		this.state = 209;
	        		this.matchWildcard();
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 212; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,19, this._ctx);
	        } while ( _alt!=1 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
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



	server_error_message() {
	    let localctx = new Server_error_messageContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 46, memcached_protocolParser.RULE_server_error_message);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 214;
	        this.match(memcached_protocolParser.T__28);
	        this.state = 216; 
	        this._errHandler.sync(this);
	        var _alt = 1+1;
	        do {
	        	switch (_alt) {
	        	case 1+1:
	        		this.state = 215;
	        		this.matchWildcard();
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 218; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,20, this._ctx);
	        } while ( _alt!=1 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
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
	    this.enterRule(localctx, 48, memcached_protocolParser.RULE_end);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 220;
	        this.match(memcached_protocolParser.T__29);
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



	noreply() {
	    let localctx = new NoreplyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 50, memcached_protocolParser.RULE_noreply);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 222;
	        this.match(memcached_protocolParser.T__30);
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
	    this.enterRule(localctx, 52, memcached_protocolParser.RULE_key);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 224;
	        this.matchWildcard();
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



	flags() {
	    let localctx = new FlagsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 54, memcached_protocolParser.RULE_flags);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 226;
	        this.match(memcached_protocolParser.INTEGER);
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



	exptime() {
	    let localctx = new ExptimeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 56, memcached_protocolParser.RULE_exptime);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 228;
	        this.match(memcached_protocolParser.INTEGER);
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



	bytes() {
	    let localctx = new BytesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 58, memcached_protocolParser.RULE_bytes);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 230;
	        this.match(memcached_protocolParser.INTEGER);
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



	cas_unique() {
	    let localctx = new Cas_uniqueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 60, memcached_protocolParser.RULE_cas_unique);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 232;
	        this.match(memcached_protocolParser.INTEGER);
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



	value() {
	    let localctx = new ValueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 62, memcached_protocolParser.RULE_value);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 234;
	        this.match(memcached_protocolParser.INTEGER);
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



	time() {
	    let localctx = new TimeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 64, memcached_protocolParser.RULE_time);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 236;
	        this.match(memcached_protocolParser.INTEGER);
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



	delay() {
	    let localctx = new DelayContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 66, memcached_protocolParser.RULE_delay);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 238;
	        this.match(memcached_protocolParser.INTEGER);
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



	verbosity_level() {
	    let localctx = new Verbosity_levelContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 68, memcached_protocolParser.RULE_verbosity_level);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 240;
	        this.match(memcached_protocolParser.INTEGER);
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



	statistic_name() {
	    let localctx = new Statistic_nameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 70, memcached_protocolParser.RULE_statistic_name);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 242;
	        this.match(memcached_protocolParser.WORD);
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



	statistic_value() {
	    let localctx = new Statistic_valueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 72, memcached_protocolParser.RULE_statistic_value);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 244;
	        this.matchWildcard();
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



	size() {
	    let localctx = new SizeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 74, memcached_protocolParser.RULE_size);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 246;
	        this.match(memcached_protocolParser.INTEGER);
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



	count() {
	    let localctx = new CountContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 76, memcached_protocolParser.RULE_count);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 248;
	        this.match(memcached_protocolParser.INTEGER);
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

memcached_protocolParser.EOF = antlr4.Token.EOF;
memcached_protocolParser.T__0 = 1;
memcached_protocolParser.T__1 = 2;
memcached_protocolParser.T__2 = 3;
memcached_protocolParser.T__3 = 4;
memcached_protocolParser.T__4 = 5;
memcached_protocolParser.T__5 = 6;
memcached_protocolParser.T__6 = 7;
memcached_protocolParser.T__7 = 8;
memcached_protocolParser.T__8 = 9;
memcached_protocolParser.T__9 = 10;
memcached_protocolParser.T__10 = 11;
memcached_protocolParser.T__11 = 12;
memcached_protocolParser.T__12 = 13;
memcached_protocolParser.T__13 = 14;
memcached_protocolParser.T__14 = 15;
memcached_protocolParser.T__15 = 16;
memcached_protocolParser.T__16 = 17;
memcached_protocolParser.T__17 = 18;
memcached_protocolParser.T__18 = 19;
memcached_protocolParser.T__19 = 20;
memcached_protocolParser.T__20 = 21;
memcached_protocolParser.T__21 = 22;
memcached_protocolParser.T__22 = 23;
memcached_protocolParser.T__23 = 24;
memcached_protocolParser.T__24 = 25;
memcached_protocolParser.T__25 = 26;
memcached_protocolParser.T__26 = 27;
memcached_protocolParser.T__27 = 28;
memcached_protocolParser.T__28 = 29;
memcached_protocolParser.T__29 = 30;
memcached_protocolParser.T__30 = 31;
memcached_protocolParser.INTEGER = 32;
memcached_protocolParser.WORD = 33;
memcached_protocolParser.WHITESPACE = 34;

memcached_protocolParser.RULE_command_line = 0;
memcached_protocolParser.RULE_storage_command = 1;
memcached_protocolParser.RULE_storage_command_name = 2;
memcached_protocolParser.RULE_retrieval_command = 3;
memcached_protocolParser.RULE_delete_command = 4;
memcached_protocolParser.RULE_increment_command = 5;
memcached_protocolParser.RULE_decrement_command = 6;
memcached_protocolParser.RULE_statistics_command = 7;
memcached_protocolParser.RULE_statistics_option = 8;
memcached_protocolParser.RULE_flush_command = 9;
memcached_protocolParser.RULE_version_command = 10;
memcached_protocolParser.RULE_verbosity_command = 11;
memcached_protocolParser.RULE_quit_command = 12;
memcached_protocolParser.RULE_storage_response = 13;
memcached_protocolParser.RULE_retrieval_response = 14;
memcached_protocolParser.RULE_deletion_response = 15;
memcached_protocolParser.RULE_incr_or_decr_response = 16;
memcached_protocolParser.RULE_statistics_response = 17;
memcached_protocolParser.RULE_error_response = 18;
memcached_protocolParser.RULE_general_statistic = 19;
memcached_protocolParser.RULE_size_statistic = 20;
memcached_protocolParser.RULE_general_error = 21;
memcached_protocolParser.RULE_client_error_message = 22;
memcached_protocolParser.RULE_server_error_message = 23;
memcached_protocolParser.RULE_end = 24;
memcached_protocolParser.RULE_noreply = 25;
memcached_protocolParser.RULE_key = 26;
memcached_protocolParser.RULE_flags = 27;
memcached_protocolParser.RULE_exptime = 28;
memcached_protocolParser.RULE_bytes = 29;
memcached_protocolParser.RULE_cas_unique = 30;
memcached_protocolParser.RULE_value = 31;
memcached_protocolParser.RULE_time = 32;
memcached_protocolParser.RULE_delay = 33;
memcached_protocolParser.RULE_verbosity_level = 34;
memcached_protocolParser.RULE_statistic_name = 35;
memcached_protocolParser.RULE_statistic_value = 36;
memcached_protocolParser.RULE_size = 37;
memcached_protocolParser.RULE_count = 38;

class Command_lineContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = memcached_protocolParser.RULE_command_line;
    }

	EOF() {
	    return this.getToken(memcached_protocolParser.EOF, 0);
	};

	storage_command = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Storage_commandContext);
	    } else {
	        return this.getTypedRuleContext(Storage_commandContext,i);
	    }
	};

	retrieval_command = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Retrieval_commandContext);
	    } else {
	        return this.getTypedRuleContext(Retrieval_commandContext,i);
	    }
	};

	delete_command = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Delete_commandContext);
	    } else {
	        return this.getTypedRuleContext(Delete_commandContext,i);
	    }
	};

	increment_command = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Increment_commandContext);
	    } else {
	        return this.getTypedRuleContext(Increment_commandContext,i);
	    }
	};

	decrement_command = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Decrement_commandContext);
	    } else {
	        return this.getTypedRuleContext(Decrement_commandContext,i);
	    }
	};

	statistics_command = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Statistics_commandContext);
	    } else {
	        return this.getTypedRuleContext(Statistics_commandContext,i);
	    }
	};

	flush_command = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Flush_commandContext);
	    } else {
	        return this.getTypedRuleContext(Flush_commandContext,i);
	    }
	};

	version_command = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Version_commandContext);
	    } else {
	        return this.getTypedRuleContext(Version_commandContext,i);
	    }
	};

	verbosity_command = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Verbosity_commandContext);
	    } else {
	        return this.getTypedRuleContext(Verbosity_commandContext,i);
	    }
	};

	quit_command = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Quit_commandContext);
	    } else {
	        return this.getTypedRuleContext(Quit_commandContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof memcached_protocolListener ) {
	        listener.enterCommand_line(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof memcached_protocolListener ) {
	        listener.exitCommand_line(this);
		}
	}


}



class Storage_commandContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = memcached_protocolParser.RULE_storage_command;
    }

	noreply() {
	    return this.getTypedRuleContext(NoreplyContext,0);
	};

	storage_command_name() {
	    return this.getTypedRuleContext(Storage_command_nameContext,0);
	};

	key() {
	    return this.getTypedRuleContext(KeyContext,0);
	};

	flags() {
	    return this.getTypedRuleContext(FlagsContext,0);
	};

	exptime() {
	    return this.getTypedRuleContext(ExptimeContext,0);
	};

	bytes() {
	    return this.getTypedRuleContext(BytesContext,0);
	};

	cas_unique() {
	    return this.getTypedRuleContext(Cas_uniqueContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof memcached_protocolListener ) {
	        listener.enterStorage_command(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof memcached_protocolListener ) {
	        listener.exitStorage_command(this);
		}
	}


}



class Storage_command_nameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = memcached_protocolParser.RULE_storage_command_name;
    }


	enterRule(listener) {
	    if(listener instanceof memcached_protocolListener ) {
	        listener.enterStorage_command_name(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof memcached_protocolListener ) {
	        listener.exitStorage_command_name(this);
		}
	}


}



class Retrieval_commandContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = memcached_protocolParser.RULE_retrieval_command;
    }

	key = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(KeyContext);
	    } else {
	        return this.getTypedRuleContext(KeyContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof memcached_protocolListener ) {
	        listener.enterRetrieval_command(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof memcached_protocolListener ) {
	        listener.exitRetrieval_command(this);
		}
	}


}



class Delete_commandContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = memcached_protocolParser.RULE_delete_command;
    }

	key() {
	    return this.getTypedRuleContext(KeyContext,0);
	};

	time() {
	    return this.getTypedRuleContext(TimeContext,0);
	};

	noreply() {
	    return this.getTypedRuleContext(NoreplyContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof memcached_protocolListener ) {
	        listener.enterDelete_command(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof memcached_protocolListener ) {
	        listener.exitDelete_command(this);
		}
	}


}



class Increment_commandContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = memcached_protocolParser.RULE_increment_command;
    }

	key() {
	    return this.getTypedRuleContext(KeyContext,0);
	};

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	noreply() {
	    return this.getTypedRuleContext(NoreplyContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof memcached_protocolListener ) {
	        listener.enterIncrement_command(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof memcached_protocolListener ) {
	        listener.exitIncrement_command(this);
		}
	}


}



class Decrement_commandContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = memcached_protocolParser.RULE_decrement_command;
    }

	key() {
	    return this.getTypedRuleContext(KeyContext,0);
	};

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	noreply() {
	    return this.getTypedRuleContext(NoreplyContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof memcached_protocolListener ) {
	        listener.enterDecrement_command(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof memcached_protocolListener ) {
	        listener.exitDecrement_command(this);
		}
	}


}



class Statistics_commandContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = memcached_protocolParser.RULE_statistics_command;
    }

	statistics_option() {
	    return this.getTypedRuleContext(Statistics_optionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof memcached_protocolListener ) {
	        listener.enterStatistics_command(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof memcached_protocolListener ) {
	        listener.exitStatistics_command(this);
		}
	}


}



class Statistics_optionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = memcached_protocolParser.RULE_statistics_option;
    }


	enterRule(listener) {
	    if(listener instanceof memcached_protocolListener ) {
	        listener.enterStatistics_option(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof memcached_protocolListener ) {
	        listener.exitStatistics_option(this);
		}
	}


}



class Flush_commandContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = memcached_protocolParser.RULE_flush_command;
    }

	delay() {
	    return this.getTypedRuleContext(DelayContext,0);
	};

	noreply() {
	    return this.getTypedRuleContext(NoreplyContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof memcached_protocolListener ) {
	        listener.enterFlush_command(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof memcached_protocolListener ) {
	        listener.exitFlush_command(this);
		}
	}


}



class Version_commandContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = memcached_protocolParser.RULE_version_command;
    }


	enterRule(listener) {
	    if(listener instanceof memcached_protocolListener ) {
	        listener.enterVersion_command(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof memcached_protocolListener ) {
	        listener.exitVersion_command(this);
		}
	}


}



class Verbosity_commandContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = memcached_protocolParser.RULE_verbosity_command;
    }

	verbosity_level() {
	    return this.getTypedRuleContext(Verbosity_levelContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof memcached_protocolListener ) {
	        listener.enterVerbosity_command(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof memcached_protocolListener ) {
	        listener.exitVerbosity_command(this);
		}
	}


}



class Quit_commandContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = memcached_protocolParser.RULE_quit_command;
    }


	enterRule(listener) {
	    if(listener instanceof memcached_protocolListener ) {
	        listener.enterQuit_command(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof memcached_protocolListener ) {
	        listener.exitQuit_command(this);
		}
	}


}



class Storage_responseContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = memcached_protocolParser.RULE_storage_response;
    }

	error_response() {
	    return this.getTypedRuleContext(Error_responseContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof memcached_protocolListener ) {
	        listener.enterStorage_response(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof memcached_protocolListener ) {
	        listener.exitStorage_response(this);
		}
	}


}



class Retrieval_responseContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = memcached_protocolParser.RULE_retrieval_response;
    }

	error_response() {
	    return this.getTypedRuleContext(Error_responseContext,0);
	};

	key() {
	    return this.getTypedRuleContext(KeyContext,0);
	};

	flags() {
	    return this.getTypedRuleContext(FlagsContext,0);
	};

	bytes() {
	    return this.getTypedRuleContext(BytesContext,0);
	};

	cas_unique() {
	    return this.getTypedRuleContext(Cas_uniqueContext,0);
	};

	end() {
	    return this.getTypedRuleContext(EndContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof memcached_protocolListener ) {
	        listener.enterRetrieval_response(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof memcached_protocolListener ) {
	        listener.exitRetrieval_response(this);
		}
	}


}



class Deletion_responseContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = memcached_protocolParser.RULE_deletion_response;
    }

	error_response() {
	    return this.getTypedRuleContext(Error_responseContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof memcached_protocolListener ) {
	        listener.enterDeletion_response(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof memcached_protocolListener ) {
	        listener.exitDeletion_response(this);
		}
	}


}



class Incr_or_decr_responseContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = memcached_protocolParser.RULE_incr_or_decr_response;
    }

	error_response() {
	    return this.getTypedRuleContext(Error_responseContext,0);
	};

	INTEGER() {
	    return this.getToken(memcached_protocolParser.INTEGER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof memcached_protocolListener ) {
	        listener.enterIncr_or_decr_response(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof memcached_protocolListener ) {
	        listener.exitIncr_or_decr_response(this);
		}
	}


}



class Statistics_responseContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = memcached_protocolParser.RULE_statistics_response;
    }

	error_response() {
	    return this.getTypedRuleContext(Error_responseContext,0);
	};

	general_statistic() {
	    return this.getTypedRuleContext(General_statisticContext,0);
	};

	size_statistic() {
	    return this.getTypedRuleContext(Size_statisticContext,0);
	};

	end() {
	    return this.getTypedRuleContext(EndContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof memcached_protocolListener ) {
	        listener.enterStatistics_response(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof memcached_protocolListener ) {
	        listener.exitStatistics_response(this);
		}
	}


}



class Error_responseContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = memcached_protocolParser.RULE_error_response;
    }

	general_error() {
	    return this.getTypedRuleContext(General_errorContext,0);
	};

	client_error_message() {
	    return this.getTypedRuleContext(Client_error_messageContext,0);
	};

	server_error_message() {
	    return this.getTypedRuleContext(Server_error_messageContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof memcached_protocolListener ) {
	        listener.enterError_response(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof memcached_protocolListener ) {
	        listener.exitError_response(this);
		}
	}


}



class General_statisticContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = memcached_protocolParser.RULE_general_statistic;
    }

	statistic_name() {
	    return this.getTypedRuleContext(Statistic_nameContext,0);
	};

	statistic_value() {
	    return this.getTypedRuleContext(Statistic_valueContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof memcached_protocolListener ) {
	        listener.enterGeneral_statistic(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof memcached_protocolListener ) {
	        listener.exitGeneral_statistic(this);
		}
	}


}



class Size_statisticContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = memcached_protocolParser.RULE_size_statistic;
    }

	size() {
	    return this.getTypedRuleContext(SizeContext,0);
	};

	count() {
	    return this.getTypedRuleContext(CountContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof memcached_protocolListener ) {
	        listener.enterSize_statistic(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof memcached_protocolListener ) {
	        listener.exitSize_statistic(this);
		}
	}


}



class General_errorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = memcached_protocolParser.RULE_general_error;
    }


	enterRule(listener) {
	    if(listener instanceof memcached_protocolListener ) {
	        listener.enterGeneral_error(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof memcached_protocolListener ) {
	        listener.exitGeneral_error(this);
		}
	}


}



class Client_error_messageContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = memcached_protocolParser.RULE_client_error_message;
    }


	enterRule(listener) {
	    if(listener instanceof memcached_protocolListener ) {
	        listener.enterClient_error_message(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof memcached_protocolListener ) {
	        listener.exitClient_error_message(this);
		}
	}


}



class Server_error_messageContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = memcached_protocolParser.RULE_server_error_message;
    }


	enterRule(listener) {
	    if(listener instanceof memcached_protocolListener ) {
	        listener.enterServer_error_message(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof memcached_protocolListener ) {
	        listener.exitServer_error_message(this);
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
        this.ruleIndex = memcached_protocolParser.RULE_end;
    }


	enterRule(listener) {
	    if(listener instanceof memcached_protocolListener ) {
	        listener.enterEnd(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof memcached_protocolListener ) {
	        listener.exitEnd(this);
		}
	}


}



class NoreplyContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = memcached_protocolParser.RULE_noreply;
    }


	enterRule(listener) {
	    if(listener instanceof memcached_protocolListener ) {
	        listener.enterNoreply(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof memcached_protocolListener ) {
	        listener.exitNoreply(this);
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
        this.ruleIndex = memcached_protocolParser.RULE_key;
    }


	enterRule(listener) {
	    if(listener instanceof memcached_protocolListener ) {
	        listener.enterKey(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof memcached_protocolListener ) {
	        listener.exitKey(this);
		}
	}


}



class FlagsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = memcached_protocolParser.RULE_flags;
    }

	INTEGER() {
	    return this.getToken(memcached_protocolParser.INTEGER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof memcached_protocolListener ) {
	        listener.enterFlags(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof memcached_protocolListener ) {
	        listener.exitFlags(this);
		}
	}


}



class ExptimeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = memcached_protocolParser.RULE_exptime;
    }

	INTEGER() {
	    return this.getToken(memcached_protocolParser.INTEGER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof memcached_protocolListener ) {
	        listener.enterExptime(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof memcached_protocolListener ) {
	        listener.exitExptime(this);
		}
	}


}



class BytesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = memcached_protocolParser.RULE_bytes;
    }

	INTEGER() {
	    return this.getToken(memcached_protocolParser.INTEGER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof memcached_protocolListener ) {
	        listener.enterBytes(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof memcached_protocolListener ) {
	        listener.exitBytes(this);
		}
	}


}



class Cas_uniqueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = memcached_protocolParser.RULE_cas_unique;
    }

	INTEGER() {
	    return this.getToken(memcached_protocolParser.INTEGER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof memcached_protocolListener ) {
	        listener.enterCas_unique(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof memcached_protocolListener ) {
	        listener.exitCas_unique(this);
		}
	}


}



class ValueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = memcached_protocolParser.RULE_value;
    }

	INTEGER() {
	    return this.getToken(memcached_protocolParser.INTEGER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof memcached_protocolListener ) {
	        listener.enterValue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof memcached_protocolListener ) {
	        listener.exitValue(this);
		}
	}


}



class TimeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = memcached_protocolParser.RULE_time;
    }

	INTEGER() {
	    return this.getToken(memcached_protocolParser.INTEGER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof memcached_protocolListener ) {
	        listener.enterTime(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof memcached_protocolListener ) {
	        listener.exitTime(this);
		}
	}


}



class DelayContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = memcached_protocolParser.RULE_delay;
    }

	INTEGER() {
	    return this.getToken(memcached_protocolParser.INTEGER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof memcached_protocolListener ) {
	        listener.enterDelay(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof memcached_protocolListener ) {
	        listener.exitDelay(this);
		}
	}


}



class Verbosity_levelContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = memcached_protocolParser.RULE_verbosity_level;
    }

	INTEGER() {
	    return this.getToken(memcached_protocolParser.INTEGER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof memcached_protocolListener ) {
	        listener.enterVerbosity_level(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof memcached_protocolListener ) {
	        listener.exitVerbosity_level(this);
		}
	}


}



class Statistic_nameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = memcached_protocolParser.RULE_statistic_name;
    }

	WORD() {
	    return this.getToken(memcached_protocolParser.WORD, 0);
	};

	enterRule(listener) {
	    if(listener instanceof memcached_protocolListener ) {
	        listener.enterStatistic_name(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof memcached_protocolListener ) {
	        listener.exitStatistic_name(this);
		}
	}


}



class Statistic_valueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = memcached_protocolParser.RULE_statistic_value;
    }


	enterRule(listener) {
	    if(listener instanceof memcached_protocolListener ) {
	        listener.enterStatistic_value(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof memcached_protocolListener ) {
	        listener.exitStatistic_value(this);
		}
	}


}



class SizeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = memcached_protocolParser.RULE_size;
    }

	INTEGER() {
	    return this.getToken(memcached_protocolParser.INTEGER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof memcached_protocolListener ) {
	        listener.enterSize(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof memcached_protocolListener ) {
	        listener.exitSize(this);
		}
	}


}



class CountContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = memcached_protocolParser.RULE_count;
    }

	INTEGER() {
	    return this.getToken(memcached_protocolParser.INTEGER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof memcached_protocolListener ) {
	        listener.enterCount(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof memcached_protocolListener ) {
	        listener.exitCount(this);
		}
	}


}




memcached_protocolParser.Command_lineContext = Command_lineContext; 
memcached_protocolParser.Storage_commandContext = Storage_commandContext; 
memcached_protocolParser.Storage_command_nameContext = Storage_command_nameContext; 
memcached_protocolParser.Retrieval_commandContext = Retrieval_commandContext; 
memcached_protocolParser.Delete_commandContext = Delete_commandContext; 
memcached_protocolParser.Increment_commandContext = Increment_commandContext; 
memcached_protocolParser.Decrement_commandContext = Decrement_commandContext; 
memcached_protocolParser.Statistics_commandContext = Statistics_commandContext; 
memcached_protocolParser.Statistics_optionContext = Statistics_optionContext; 
memcached_protocolParser.Flush_commandContext = Flush_commandContext; 
memcached_protocolParser.Version_commandContext = Version_commandContext; 
memcached_protocolParser.Verbosity_commandContext = Verbosity_commandContext; 
memcached_protocolParser.Quit_commandContext = Quit_commandContext; 
memcached_protocolParser.Storage_responseContext = Storage_responseContext; 
memcached_protocolParser.Retrieval_responseContext = Retrieval_responseContext; 
memcached_protocolParser.Deletion_responseContext = Deletion_responseContext; 
memcached_protocolParser.Incr_or_decr_responseContext = Incr_or_decr_responseContext; 
memcached_protocolParser.Statistics_responseContext = Statistics_responseContext; 
memcached_protocolParser.Error_responseContext = Error_responseContext; 
memcached_protocolParser.General_statisticContext = General_statisticContext; 
memcached_protocolParser.Size_statisticContext = Size_statisticContext; 
memcached_protocolParser.General_errorContext = General_errorContext; 
memcached_protocolParser.Client_error_messageContext = Client_error_messageContext; 
memcached_protocolParser.Server_error_messageContext = Server_error_messageContext; 
memcached_protocolParser.EndContext = EndContext; 
memcached_protocolParser.NoreplyContext = NoreplyContext; 
memcached_protocolParser.KeyContext = KeyContext; 
memcached_protocolParser.FlagsContext = FlagsContext; 
memcached_protocolParser.ExptimeContext = ExptimeContext; 
memcached_protocolParser.BytesContext = BytesContext; 
memcached_protocolParser.Cas_uniqueContext = Cas_uniqueContext; 
memcached_protocolParser.ValueContext = ValueContext; 
memcached_protocolParser.TimeContext = TimeContext; 
memcached_protocolParser.DelayContext = DelayContext; 
memcached_protocolParser.Verbosity_levelContext = Verbosity_levelContext; 
memcached_protocolParser.Statistic_nameContext = Statistic_nameContext; 
memcached_protocolParser.Statistic_valueContext = Statistic_valueContext; 
memcached_protocolParser.SizeContext = SizeContext; 
memcached_protocolParser.CountContext = CountContext; 

// --- Dynamic Universal Module Wrapper ---
if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = { CPP14Lexer };
} else if (typeof window !== 'undefined') {
    window.CPP14Lexer = CPP14Lexer;
} else if (typeof self !== 'undefined') {
    self.CPP14Lexer = CPP14Lexer;
}
