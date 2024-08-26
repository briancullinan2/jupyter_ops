const antlr = require('antlr4').default;
const ECMAScriptLexer = require('./build/antlr4-languages/javascript/ecmascript/JavaScript/ECMAScriptLexer.js').default;
const ECMAScriptParser = require('./build/antlr4-languages/javascript/ecmascript/JavaScript/ECMAScriptParser.js').default;
//const ECMAScriptParser = require('./Resources/Parsers/javascript/ecmascript/JavaScript/ECMAScriptParser.js');
console.log(ECMAScriptLexer)
const input = 'new NumberDecimal(5)';
const chars = new antlr.InputStream(input);
const lexer = new ECMAScriptLexer(chars);
const tokens = new antlr.CommonTokenStream(lexer);
const parser = new ECMAScriptParser(tokens);
const tree = parser.program();
console.log(tree)
