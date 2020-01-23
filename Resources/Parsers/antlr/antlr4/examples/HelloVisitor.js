// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/antlr/antlr4/examples/Hello.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by HelloParser.

function HelloVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

HelloVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
HelloVisitor.prototype.constructor = HelloVisitor;

// Visit a parse tree produced by HelloParser#r.
HelloVisitor.prototype.visitR = function(ctx) {
  return this.visitChildren(ctx);
};



exports.HelloVisitor = HelloVisitor;