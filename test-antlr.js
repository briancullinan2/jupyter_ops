import antlr from 'antlr4';
//import ECMAScriptLexer from  './Resources/Parsers/javascript/ecmascript/JavaScript/ECMAScriptLexer.js';
//import ECMAScriptParser from './Resources/Parsers/javascript/ecmascript/JavaScript/ECMAScriptParser.js';
import ECMAScriptLexer from  './Resources/Parsers/cpp/CPP14Lexer.js';
import ECMAScriptParser from './Resources/Parsers/cpp/CPP14Parser.js';
//const ECMAScriptParser = require('./Resources/Parsers/javascript/ecmascript/JavaScript/ECMAScriptParser.js');
console.log(ECMAScriptLexer)
const input = 'new NumberDecimal(5)';
const chars = new antlr.InputStream(input);
const lexer = new ECMAScriptLexer(chars);
const tokens = new antlr.CommonTokenStream(lexer);
const parser = new ECMAScriptParser(tokens);
const tree = parser.fragment();
console.log(tree)
