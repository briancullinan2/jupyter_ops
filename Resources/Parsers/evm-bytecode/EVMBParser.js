// Generated from C:/Users/megam/jupyter_ops/Resources/Parsers/evm-bytecode/EVMBParser.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import EVMBParserListener from './EVMBParserListener.js';
const serializedATN = [4,1,159,14,2,0,7,0,2,1,7,1,1,0,4,0,6,8,0,11,0,12,
0,7,1,0,1,0,1,1,1,1,1,1,0,0,2,0,2,0,1,1,0,1,158,12,0,5,1,0,0,0,2,11,1,0,
0,0,4,6,3,2,1,0,5,4,1,0,0,0,6,7,1,0,0,0,7,5,1,0,0,0,7,8,1,0,0,0,8,9,1,0,
0,0,9,10,5,0,0,1,10,1,1,0,0,0,11,12,7,0,0,0,12,3,1,0,0,0,1,7];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class EVMBParser extends antlr4.Parser {

    static grammarFileName = "EVMBParser.g4";
    static literalNames = [ null, "'STOP'", "'ADD'", "'MUL'", "'SUB'", "'DIV'", 
                            "'SDIV'", "'MOD'", "'SMOD'", "'ADDMOD'", "'MULMOD'", 
                            "'EXP'", "'SIGNEXTEND'", "'LT'", "'GT'", "'SLT'", 
                            "'SGT'", "'EQ'", "'ISZERO'", "'AND'", "'OR'", 
                            "'XOR'", "'NOT'", "'BYTE'", "'SHL'", "'SHR'", 
                            "'SAR'", "'SHA3'", "'ADDRESS'", "'BALANCE'", 
                            "'ORIGIN'", "'CALLER'", "'CALLVALUE'", "'CALLDATALOAD'", 
                            "'CALLDATASIZE'", "'CALLDATACOPY'", "'CODESIZE'", 
                            "'CODECOPY'", "'GASPRICE'", "'EXTCODESIZE'", 
                            "'EXTCODECOPY'", "'RETURNDATASIZE'", "'RETURNDATACOPY'", 
                            "'EXTCODEHASH'", "'BLOCKHASH'", "'COINBASE'", 
                            "'TIMESTAMP'", "'NUMBER'", "'DIFFICULTY'", "'GASLIMIT'", 
                            "'CHAINID'", "'SELFBALANCE'", "'BASEFEE'", "'POP'", 
                            "'MLOAD'", "'MSTORE'", "'MSTORE8'", "'SLOAD'", 
                            "'SSTORE'", "'JUMP'", "'JUMPI'", "'PC'", "'MSIZE'", 
                            "'GAS'", "'JUMPDEST'", null, null, null, null, 
                            null, null, null, null, null, null, null, null, 
                            null, null, null, null, null, null, null, null, 
                            null, null, null, null, null, null, null, null, 
                            null, null, null, null, "'DUP1'", "'DUP2'", 
                            "'DUP3'", "'DUP4'", "'DUP5'", "'DUP6'", "'DUP7'", 
                            "'DUP8'", "'DUP9'", "'DUP10'", "'DUP11'", "'DUP12'", 
                            "'DUP13'", "'DUP14'", "'DUP15'", "'DUP16'", 
                            "'SWAP1'", "'SWAP2'", "'SWAP3'", "'SWAP4'", 
                            "'SWAP5'", "'SWAP6'", "'SWAP7'", "'SWAP8'", 
                            "'SWAP9'", "'SWAP10'", "'SWAP11'", "'SWAP12'", 
                            "'SWAP13'", "'SWAP14'", "'SWAP15'", "'SWAP16'", 
                            "'LOG0'", "'LOG1'", "'LOG2'", "'LOG3'", "'LOG4'", 
                            "'JUMPTO'", "'JUMPIF'", "'JUMPSUB'", "'JUMPSUBV'", 
                            "'BEGINSUB'", "'BEGINDATA'", "'RETURNSUB'", 
                            "'PUTLOCAL'", "'GETLOCA'", "'SLOADBYTES'", "'SSTOREBYTES'", 
                            "'SSIZE'", "'CREATE'", "'CALL'", "'CALLCODE'", 
                            "'RETURN'", "'DELEGATECALL'", "'CALLBLACKBOX'", 
                            "'STATICCALL'", "'CREATE2'", "'TXEXECGAS'", 
                            "'REVERT'", "'INVALID'", "'SELFDESTRUCT'" ];
    static symbolicNames = [ null, "STOP", "ADD", "MUL", "SUB", "DIV", "SDIV", 
                             "MOD", "SMOD", "ADDMOD", "MULMOD", "EXP", "SIGNEXTEND", 
                             "LT", "GT", "SLT", "SGT", "EQ", "ISZERO", "AND", 
                             "OR", "XOR", "NOT", "BYTE", "SHL", "SHR", "SAR", 
                             "SHA3", "ADDRESS", "BALANCE", "ORIGIN", "CALLER", 
                             "CALLVALUE", "CALLDATALOAD", "CALLDATASIZE", 
                             "CALLDATACOPY", "CODESIZE", "CODECOPY", "GASPRICE", 
                             "EXTCODESIZE", "EXTCODECOPY", "RETURNDATASIZE", 
                             "RETURNDATACOPY", "EXTCODEHASH", "BLOCKHASH", 
                             "COINBASE", "TIMESTAMP", "NUMBER", "DIFFICULTY", 
                             "GASLIMIT", "CHAINID", "SELFBALANCE", "BASEFEE", 
                             "POP", "MLOAD", "MSTORE", "MSTORE8", "SLOAD", 
                             "SSTORE", "JUMP", "JUMPI", "PC", "MSIZE", "GAS", 
                             "JUMPDEST", "PUSH1", "PUSH2", "PUSH3", "PUSH4", 
                             "PUSH5", "PUSH6", "PUSH7", "PUSH8", "PUSH9", 
                             "PUSH10", "PUSH11", "PUSH12", "PUSH13", "PUSH14", 
                             "PUSH15", "PUSH16", "PUSH17", "PUSH18", "PUSH19", 
                             "PUSH20", "PUSH21", "PUSH22", "PUSH23", "PUSH24", 
                             "PUSH25", "PUSH26", "PUSH27", "PUSH28", "PUSH29", 
                             "PUSH30", "PUSH31", "PUSH32", "DUP1", "DUP2", 
                             "DUP3", "DUP4", "DUP5", "DUP6", "DUP7", "DUP8", 
                             "DUP9", "DUP10", "DUP11", "DUP12", "DUP13", 
                             "DUP14", "DUP15", "DUP16", "SWAP1", "SWAP2", 
                             "SWAP3", "SWAP4", "SWAP5", "SWAP6", "SWAP7", 
                             "SWAP8", "SWAP9", "SWAP10", "SWAP11", "SWAP12", 
                             "SWAP13", "SWAP14", "SWAP15", "SWAP16", "LOG0", 
                             "LOG1", "LOG2", "LOG3", "LOG4", "JUMPTO", "JUMPIF", 
                             "JUMPSUB", "JUMPSUBV", "BEGINSUB", "BEGINDATA", 
                             "RETURNSUB", "PUTLOCAL", "GETLOCA", "SLOADBYTES", 
                             "SSTOREBYTES", "SSIZE", "CREATE", "CALL", "CALLCODE", 
                             "RETURN", "DELEGATECALL", "CALLBLACKBOX", "STATICCALL", 
                             "CREATE2", "TXEXECGAS", "REVERT", "INVALID", 
                             "SELFDESTRUCT", "UNKNOW", "WS" ];
    static ruleNames = [ "program", "opcodes" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = EVMBParser.ruleNames;
        this.literalNames = EVMBParser.literalNames;
        this.symbolicNames = EVMBParser.symbolicNames;
    }



	program() {
	    let localctx = new ProgramContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, EVMBParser.RULE_program);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 5; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 4;
	            this.opcodes();
	            this.state = 7; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 4294967294) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 4294967295) !== 0) || ((((_la - 64)) & ~0x1f) === 0 && ((1 << (_la - 64)) & 4294967295) !== 0) || ((((_la - 96)) & ~0x1f) === 0 && ((1 << (_la - 96)) & 4294967295) !== 0) || ((((_la - 128)) & ~0x1f) === 0 && ((1 << (_la - 128)) & 2147483647) !== 0));
	        this.state = 9;
	        this.match(EVMBParser.EOF);
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



	opcodes() {
	    let localctx = new OpcodesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, EVMBParser.RULE_opcodes);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 11;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 4294967294) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 4294967295) !== 0) || ((((_la - 64)) & ~0x1f) === 0 && ((1 << (_la - 64)) & 4294967295) !== 0) || ((((_la - 96)) & ~0x1f) === 0 && ((1 << (_la - 96)) & 4294967295) !== 0) || ((((_la - 128)) & ~0x1f) === 0 && ((1 << (_la - 128)) & 2147483647) !== 0))) {
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

EVMBParser.EOF = antlr4.Token.EOF;
EVMBParser.STOP = 1;
EVMBParser.ADD = 2;
EVMBParser.MUL = 3;
EVMBParser.SUB = 4;
EVMBParser.DIV = 5;
EVMBParser.SDIV = 6;
EVMBParser.MOD = 7;
EVMBParser.SMOD = 8;
EVMBParser.ADDMOD = 9;
EVMBParser.MULMOD = 10;
EVMBParser.EXP = 11;
EVMBParser.SIGNEXTEND = 12;
EVMBParser.LT = 13;
EVMBParser.GT = 14;
EVMBParser.SLT = 15;
EVMBParser.SGT = 16;
EVMBParser.EQ = 17;
EVMBParser.ISZERO = 18;
EVMBParser.AND = 19;
EVMBParser.OR = 20;
EVMBParser.XOR = 21;
EVMBParser.NOT = 22;
EVMBParser.BYTE = 23;
EVMBParser.SHL = 24;
EVMBParser.SHR = 25;
EVMBParser.SAR = 26;
EVMBParser.SHA3 = 27;
EVMBParser.ADDRESS = 28;
EVMBParser.BALANCE = 29;
EVMBParser.ORIGIN = 30;
EVMBParser.CALLER = 31;
EVMBParser.CALLVALUE = 32;
EVMBParser.CALLDATALOAD = 33;
EVMBParser.CALLDATASIZE = 34;
EVMBParser.CALLDATACOPY = 35;
EVMBParser.CODESIZE = 36;
EVMBParser.CODECOPY = 37;
EVMBParser.GASPRICE = 38;
EVMBParser.EXTCODESIZE = 39;
EVMBParser.EXTCODECOPY = 40;
EVMBParser.RETURNDATASIZE = 41;
EVMBParser.RETURNDATACOPY = 42;
EVMBParser.EXTCODEHASH = 43;
EVMBParser.BLOCKHASH = 44;
EVMBParser.COINBASE = 45;
EVMBParser.TIMESTAMP = 46;
EVMBParser.NUMBER = 47;
EVMBParser.DIFFICULTY = 48;
EVMBParser.GASLIMIT = 49;
EVMBParser.CHAINID = 50;
EVMBParser.SELFBALANCE = 51;
EVMBParser.BASEFEE = 52;
EVMBParser.POP = 53;
EVMBParser.MLOAD = 54;
EVMBParser.MSTORE = 55;
EVMBParser.MSTORE8 = 56;
EVMBParser.SLOAD = 57;
EVMBParser.SSTORE = 58;
EVMBParser.JUMP = 59;
EVMBParser.JUMPI = 60;
EVMBParser.PC = 61;
EVMBParser.MSIZE = 62;
EVMBParser.GAS = 63;
EVMBParser.JUMPDEST = 64;
EVMBParser.PUSH1 = 65;
EVMBParser.PUSH2 = 66;
EVMBParser.PUSH3 = 67;
EVMBParser.PUSH4 = 68;
EVMBParser.PUSH5 = 69;
EVMBParser.PUSH6 = 70;
EVMBParser.PUSH7 = 71;
EVMBParser.PUSH8 = 72;
EVMBParser.PUSH9 = 73;
EVMBParser.PUSH10 = 74;
EVMBParser.PUSH11 = 75;
EVMBParser.PUSH12 = 76;
EVMBParser.PUSH13 = 77;
EVMBParser.PUSH14 = 78;
EVMBParser.PUSH15 = 79;
EVMBParser.PUSH16 = 80;
EVMBParser.PUSH17 = 81;
EVMBParser.PUSH18 = 82;
EVMBParser.PUSH19 = 83;
EVMBParser.PUSH20 = 84;
EVMBParser.PUSH21 = 85;
EVMBParser.PUSH22 = 86;
EVMBParser.PUSH23 = 87;
EVMBParser.PUSH24 = 88;
EVMBParser.PUSH25 = 89;
EVMBParser.PUSH26 = 90;
EVMBParser.PUSH27 = 91;
EVMBParser.PUSH28 = 92;
EVMBParser.PUSH29 = 93;
EVMBParser.PUSH30 = 94;
EVMBParser.PUSH31 = 95;
EVMBParser.PUSH32 = 96;
EVMBParser.DUP1 = 97;
EVMBParser.DUP2 = 98;
EVMBParser.DUP3 = 99;
EVMBParser.DUP4 = 100;
EVMBParser.DUP5 = 101;
EVMBParser.DUP6 = 102;
EVMBParser.DUP7 = 103;
EVMBParser.DUP8 = 104;
EVMBParser.DUP9 = 105;
EVMBParser.DUP10 = 106;
EVMBParser.DUP11 = 107;
EVMBParser.DUP12 = 108;
EVMBParser.DUP13 = 109;
EVMBParser.DUP14 = 110;
EVMBParser.DUP15 = 111;
EVMBParser.DUP16 = 112;
EVMBParser.SWAP1 = 113;
EVMBParser.SWAP2 = 114;
EVMBParser.SWAP3 = 115;
EVMBParser.SWAP4 = 116;
EVMBParser.SWAP5 = 117;
EVMBParser.SWAP6 = 118;
EVMBParser.SWAP7 = 119;
EVMBParser.SWAP8 = 120;
EVMBParser.SWAP9 = 121;
EVMBParser.SWAP10 = 122;
EVMBParser.SWAP11 = 123;
EVMBParser.SWAP12 = 124;
EVMBParser.SWAP13 = 125;
EVMBParser.SWAP14 = 126;
EVMBParser.SWAP15 = 127;
EVMBParser.SWAP16 = 128;
EVMBParser.LOG0 = 129;
EVMBParser.LOG1 = 130;
EVMBParser.LOG2 = 131;
EVMBParser.LOG3 = 132;
EVMBParser.LOG4 = 133;
EVMBParser.JUMPTO = 134;
EVMBParser.JUMPIF = 135;
EVMBParser.JUMPSUB = 136;
EVMBParser.JUMPSUBV = 137;
EVMBParser.BEGINSUB = 138;
EVMBParser.BEGINDATA = 139;
EVMBParser.RETURNSUB = 140;
EVMBParser.PUTLOCAL = 141;
EVMBParser.GETLOCA = 142;
EVMBParser.SLOADBYTES = 143;
EVMBParser.SSTOREBYTES = 144;
EVMBParser.SSIZE = 145;
EVMBParser.CREATE = 146;
EVMBParser.CALL = 147;
EVMBParser.CALLCODE = 148;
EVMBParser.RETURN = 149;
EVMBParser.DELEGATECALL = 150;
EVMBParser.CALLBLACKBOX = 151;
EVMBParser.STATICCALL = 152;
EVMBParser.CREATE2 = 153;
EVMBParser.TXEXECGAS = 154;
EVMBParser.REVERT = 155;
EVMBParser.INVALID = 156;
EVMBParser.SELFDESTRUCT = 157;
EVMBParser.UNKNOW = 158;
EVMBParser.WS = 159;

EVMBParser.RULE_program = 0;
EVMBParser.RULE_opcodes = 1;

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
        this.ruleIndex = EVMBParser.RULE_program;
    }

	EOF() {
	    return this.getToken(EVMBParser.EOF, 0);
	};

	opcodes = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(OpcodesContext);
	    } else {
	        return this.getTypedRuleContext(OpcodesContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof EVMBParserListener ) {
	        listener.enterProgram(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof EVMBParserListener ) {
	        listener.exitProgram(this);
		}
	}


}



class OpcodesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = EVMBParser.RULE_opcodes;
    }

	STOP() {
	    return this.getToken(EVMBParser.STOP, 0);
	};

	ADD() {
	    return this.getToken(EVMBParser.ADD, 0);
	};

	MUL() {
	    return this.getToken(EVMBParser.MUL, 0);
	};

	SUB() {
	    return this.getToken(EVMBParser.SUB, 0);
	};

	DIV() {
	    return this.getToken(EVMBParser.DIV, 0);
	};

	SDIV() {
	    return this.getToken(EVMBParser.SDIV, 0);
	};

	MOD() {
	    return this.getToken(EVMBParser.MOD, 0);
	};

	SMOD() {
	    return this.getToken(EVMBParser.SMOD, 0);
	};

	ADDMOD() {
	    return this.getToken(EVMBParser.ADDMOD, 0);
	};

	MULMOD() {
	    return this.getToken(EVMBParser.MULMOD, 0);
	};

	EXP() {
	    return this.getToken(EVMBParser.EXP, 0);
	};

	SIGNEXTEND() {
	    return this.getToken(EVMBParser.SIGNEXTEND, 0);
	};

	LT() {
	    return this.getToken(EVMBParser.LT, 0);
	};

	GT() {
	    return this.getToken(EVMBParser.GT, 0);
	};

	SLT() {
	    return this.getToken(EVMBParser.SLT, 0);
	};

	SGT() {
	    return this.getToken(EVMBParser.SGT, 0);
	};

	EQ() {
	    return this.getToken(EVMBParser.EQ, 0);
	};

	ISZERO() {
	    return this.getToken(EVMBParser.ISZERO, 0);
	};

	AND() {
	    return this.getToken(EVMBParser.AND, 0);
	};

	OR() {
	    return this.getToken(EVMBParser.OR, 0);
	};

	XOR() {
	    return this.getToken(EVMBParser.XOR, 0);
	};

	NOT() {
	    return this.getToken(EVMBParser.NOT, 0);
	};

	BYTE() {
	    return this.getToken(EVMBParser.BYTE, 0);
	};

	SHL() {
	    return this.getToken(EVMBParser.SHL, 0);
	};

	SHR() {
	    return this.getToken(EVMBParser.SHR, 0);
	};

	SAR() {
	    return this.getToken(EVMBParser.SAR, 0);
	};

	SHA3() {
	    return this.getToken(EVMBParser.SHA3, 0);
	};

	ADDRESS() {
	    return this.getToken(EVMBParser.ADDRESS, 0);
	};

	BALANCE() {
	    return this.getToken(EVMBParser.BALANCE, 0);
	};

	ORIGIN() {
	    return this.getToken(EVMBParser.ORIGIN, 0);
	};

	CALLER() {
	    return this.getToken(EVMBParser.CALLER, 0);
	};

	CALLVALUE() {
	    return this.getToken(EVMBParser.CALLVALUE, 0);
	};

	CALLDATALOAD() {
	    return this.getToken(EVMBParser.CALLDATALOAD, 0);
	};

	CALLDATASIZE() {
	    return this.getToken(EVMBParser.CALLDATASIZE, 0);
	};

	CALLDATACOPY() {
	    return this.getToken(EVMBParser.CALLDATACOPY, 0);
	};

	CODESIZE() {
	    return this.getToken(EVMBParser.CODESIZE, 0);
	};

	CODECOPY() {
	    return this.getToken(EVMBParser.CODECOPY, 0);
	};

	GASPRICE() {
	    return this.getToken(EVMBParser.GASPRICE, 0);
	};

	EXTCODESIZE() {
	    return this.getToken(EVMBParser.EXTCODESIZE, 0);
	};

	EXTCODECOPY() {
	    return this.getToken(EVMBParser.EXTCODECOPY, 0);
	};

	RETURNDATASIZE() {
	    return this.getToken(EVMBParser.RETURNDATASIZE, 0);
	};

	RETURNDATACOPY() {
	    return this.getToken(EVMBParser.RETURNDATACOPY, 0);
	};

	EXTCODEHASH() {
	    return this.getToken(EVMBParser.EXTCODEHASH, 0);
	};

	BLOCKHASH() {
	    return this.getToken(EVMBParser.BLOCKHASH, 0);
	};

	COINBASE() {
	    return this.getToken(EVMBParser.COINBASE, 0);
	};

	TIMESTAMP() {
	    return this.getToken(EVMBParser.TIMESTAMP, 0);
	};

	NUMBER() {
	    return this.getToken(EVMBParser.NUMBER, 0);
	};

	DIFFICULTY() {
	    return this.getToken(EVMBParser.DIFFICULTY, 0);
	};

	GASLIMIT() {
	    return this.getToken(EVMBParser.GASLIMIT, 0);
	};

	CHAINID() {
	    return this.getToken(EVMBParser.CHAINID, 0);
	};

	SELFBALANCE() {
	    return this.getToken(EVMBParser.SELFBALANCE, 0);
	};

	BASEFEE() {
	    return this.getToken(EVMBParser.BASEFEE, 0);
	};

	POP() {
	    return this.getToken(EVMBParser.POP, 0);
	};

	MLOAD() {
	    return this.getToken(EVMBParser.MLOAD, 0);
	};

	MSTORE() {
	    return this.getToken(EVMBParser.MSTORE, 0);
	};

	MSTORE8() {
	    return this.getToken(EVMBParser.MSTORE8, 0);
	};

	SLOAD() {
	    return this.getToken(EVMBParser.SLOAD, 0);
	};

	SSTORE() {
	    return this.getToken(EVMBParser.SSTORE, 0);
	};

	JUMP() {
	    return this.getToken(EVMBParser.JUMP, 0);
	};

	JUMPI() {
	    return this.getToken(EVMBParser.JUMPI, 0);
	};

	PC() {
	    return this.getToken(EVMBParser.PC, 0);
	};

	MSIZE() {
	    return this.getToken(EVMBParser.MSIZE, 0);
	};

	GAS() {
	    return this.getToken(EVMBParser.GAS, 0);
	};

	JUMPDEST() {
	    return this.getToken(EVMBParser.JUMPDEST, 0);
	};

	PUSH1() {
	    return this.getToken(EVMBParser.PUSH1, 0);
	};

	PUSH2() {
	    return this.getToken(EVMBParser.PUSH2, 0);
	};

	PUSH3() {
	    return this.getToken(EVMBParser.PUSH3, 0);
	};

	PUSH4() {
	    return this.getToken(EVMBParser.PUSH4, 0);
	};

	PUSH5() {
	    return this.getToken(EVMBParser.PUSH5, 0);
	};

	PUSH6() {
	    return this.getToken(EVMBParser.PUSH6, 0);
	};

	PUSH7() {
	    return this.getToken(EVMBParser.PUSH7, 0);
	};

	PUSH8() {
	    return this.getToken(EVMBParser.PUSH8, 0);
	};

	PUSH9() {
	    return this.getToken(EVMBParser.PUSH9, 0);
	};

	PUSH10() {
	    return this.getToken(EVMBParser.PUSH10, 0);
	};

	PUSH11() {
	    return this.getToken(EVMBParser.PUSH11, 0);
	};

	PUSH12() {
	    return this.getToken(EVMBParser.PUSH12, 0);
	};

	PUSH13() {
	    return this.getToken(EVMBParser.PUSH13, 0);
	};

	PUSH14() {
	    return this.getToken(EVMBParser.PUSH14, 0);
	};

	PUSH15() {
	    return this.getToken(EVMBParser.PUSH15, 0);
	};

	PUSH16() {
	    return this.getToken(EVMBParser.PUSH16, 0);
	};

	PUSH17() {
	    return this.getToken(EVMBParser.PUSH17, 0);
	};

	PUSH18() {
	    return this.getToken(EVMBParser.PUSH18, 0);
	};

	PUSH19() {
	    return this.getToken(EVMBParser.PUSH19, 0);
	};

	PUSH20() {
	    return this.getToken(EVMBParser.PUSH20, 0);
	};

	PUSH21() {
	    return this.getToken(EVMBParser.PUSH21, 0);
	};

	PUSH22() {
	    return this.getToken(EVMBParser.PUSH22, 0);
	};

	PUSH23() {
	    return this.getToken(EVMBParser.PUSH23, 0);
	};

	PUSH24() {
	    return this.getToken(EVMBParser.PUSH24, 0);
	};

	PUSH25() {
	    return this.getToken(EVMBParser.PUSH25, 0);
	};

	PUSH26() {
	    return this.getToken(EVMBParser.PUSH26, 0);
	};

	PUSH27() {
	    return this.getToken(EVMBParser.PUSH27, 0);
	};

	PUSH28() {
	    return this.getToken(EVMBParser.PUSH28, 0);
	};

	PUSH29() {
	    return this.getToken(EVMBParser.PUSH29, 0);
	};

	PUSH30() {
	    return this.getToken(EVMBParser.PUSH30, 0);
	};

	PUSH31() {
	    return this.getToken(EVMBParser.PUSH31, 0);
	};

	PUSH32() {
	    return this.getToken(EVMBParser.PUSH32, 0);
	};

	DUP1() {
	    return this.getToken(EVMBParser.DUP1, 0);
	};

	DUP2() {
	    return this.getToken(EVMBParser.DUP2, 0);
	};

	DUP3() {
	    return this.getToken(EVMBParser.DUP3, 0);
	};

	DUP4() {
	    return this.getToken(EVMBParser.DUP4, 0);
	};

	DUP5() {
	    return this.getToken(EVMBParser.DUP5, 0);
	};

	DUP6() {
	    return this.getToken(EVMBParser.DUP6, 0);
	};

	DUP7() {
	    return this.getToken(EVMBParser.DUP7, 0);
	};

	DUP8() {
	    return this.getToken(EVMBParser.DUP8, 0);
	};

	DUP9() {
	    return this.getToken(EVMBParser.DUP9, 0);
	};

	DUP10() {
	    return this.getToken(EVMBParser.DUP10, 0);
	};

	DUP11() {
	    return this.getToken(EVMBParser.DUP11, 0);
	};

	DUP12() {
	    return this.getToken(EVMBParser.DUP12, 0);
	};

	DUP13() {
	    return this.getToken(EVMBParser.DUP13, 0);
	};

	DUP14() {
	    return this.getToken(EVMBParser.DUP14, 0);
	};

	DUP15() {
	    return this.getToken(EVMBParser.DUP15, 0);
	};

	DUP16() {
	    return this.getToken(EVMBParser.DUP16, 0);
	};

	SWAP1() {
	    return this.getToken(EVMBParser.SWAP1, 0);
	};

	SWAP2() {
	    return this.getToken(EVMBParser.SWAP2, 0);
	};

	SWAP3() {
	    return this.getToken(EVMBParser.SWAP3, 0);
	};

	SWAP4() {
	    return this.getToken(EVMBParser.SWAP4, 0);
	};

	SWAP5() {
	    return this.getToken(EVMBParser.SWAP5, 0);
	};

	SWAP6() {
	    return this.getToken(EVMBParser.SWAP6, 0);
	};

	SWAP7() {
	    return this.getToken(EVMBParser.SWAP7, 0);
	};

	SWAP8() {
	    return this.getToken(EVMBParser.SWAP8, 0);
	};

	SWAP9() {
	    return this.getToken(EVMBParser.SWAP9, 0);
	};

	SWAP10() {
	    return this.getToken(EVMBParser.SWAP10, 0);
	};

	SWAP11() {
	    return this.getToken(EVMBParser.SWAP11, 0);
	};

	SWAP12() {
	    return this.getToken(EVMBParser.SWAP12, 0);
	};

	SWAP13() {
	    return this.getToken(EVMBParser.SWAP13, 0);
	};

	SWAP14() {
	    return this.getToken(EVMBParser.SWAP14, 0);
	};

	SWAP15() {
	    return this.getToken(EVMBParser.SWAP15, 0);
	};

	SWAP16() {
	    return this.getToken(EVMBParser.SWAP16, 0);
	};

	LOG0() {
	    return this.getToken(EVMBParser.LOG0, 0);
	};

	LOG1() {
	    return this.getToken(EVMBParser.LOG1, 0);
	};

	LOG2() {
	    return this.getToken(EVMBParser.LOG2, 0);
	};

	LOG3() {
	    return this.getToken(EVMBParser.LOG3, 0);
	};

	LOG4() {
	    return this.getToken(EVMBParser.LOG4, 0);
	};

	JUMPTO() {
	    return this.getToken(EVMBParser.JUMPTO, 0);
	};

	JUMPIF() {
	    return this.getToken(EVMBParser.JUMPIF, 0);
	};

	JUMPSUB() {
	    return this.getToken(EVMBParser.JUMPSUB, 0);
	};

	JUMPSUBV() {
	    return this.getToken(EVMBParser.JUMPSUBV, 0);
	};

	BEGINSUB() {
	    return this.getToken(EVMBParser.BEGINSUB, 0);
	};

	BEGINDATA() {
	    return this.getToken(EVMBParser.BEGINDATA, 0);
	};

	RETURNSUB() {
	    return this.getToken(EVMBParser.RETURNSUB, 0);
	};

	PUTLOCAL() {
	    return this.getToken(EVMBParser.PUTLOCAL, 0);
	};

	GETLOCA() {
	    return this.getToken(EVMBParser.GETLOCA, 0);
	};

	SLOADBYTES() {
	    return this.getToken(EVMBParser.SLOADBYTES, 0);
	};

	SSTOREBYTES() {
	    return this.getToken(EVMBParser.SSTOREBYTES, 0);
	};

	SSIZE() {
	    return this.getToken(EVMBParser.SSIZE, 0);
	};

	CREATE() {
	    return this.getToken(EVMBParser.CREATE, 0);
	};

	CALL() {
	    return this.getToken(EVMBParser.CALL, 0);
	};

	CALLCODE() {
	    return this.getToken(EVMBParser.CALLCODE, 0);
	};

	RETURN() {
	    return this.getToken(EVMBParser.RETURN, 0);
	};

	DELEGATECALL() {
	    return this.getToken(EVMBParser.DELEGATECALL, 0);
	};

	CALLBLACKBOX() {
	    return this.getToken(EVMBParser.CALLBLACKBOX, 0);
	};

	STATICCALL() {
	    return this.getToken(EVMBParser.STATICCALL, 0);
	};

	CREATE2() {
	    return this.getToken(EVMBParser.CREATE2, 0);
	};

	TXEXECGAS() {
	    return this.getToken(EVMBParser.TXEXECGAS, 0);
	};

	REVERT() {
	    return this.getToken(EVMBParser.REVERT, 0);
	};

	INVALID() {
	    return this.getToken(EVMBParser.INVALID, 0);
	};

	SELFDESTRUCT() {
	    return this.getToken(EVMBParser.SELFDESTRUCT, 0);
	};

	UNKNOW() {
	    return this.getToken(EVMBParser.UNKNOW, 0);
	};

	enterRule(listener) {
	    if(listener instanceof EVMBParserListener ) {
	        listener.enterOpcodes(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof EVMBParserListener ) {
	        listener.exitOpcodes(this);
		}
	}


}




EVMBParser.ProgramContext = ProgramContext; 
EVMBParser.OpcodesContext = OpcodesContext; 

// --- Dynamic Universal Module Wrapper ---
if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = { CPP14Lexer };
} else if (typeof window !== 'undefined') {
    window.CPP14Lexer = CPP14Lexer;
} else if (typeof self !== 'undefined') {
    self.CPP14Lexer = CPP14Lexer;
}
