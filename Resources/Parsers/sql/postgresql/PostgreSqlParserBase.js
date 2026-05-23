import antlr4 from 'antlr4';
// PostgreSQLLexer and PostgreSQLParser will be resolved globally or via your Webpack namespace bundle
// import PostgreSQLLexer from './PostgreSQLLexer.js';
// import PostgreSQLParser from './PostgreSQLParser.js';

export class ParseError {
    /**
     * @param {number} number 
     * @param {number} offset 
     * @param {number} line 
     * @param {number} column 
     * @param {string} message 
     */
    constructor(number, offset, line, column, message) {
        this.Number = number;
        this.Offset = offset;
        this.Line = line;
        this.Column = column;
        this.Message = message;
    }
}

export default class PostgreSQLParserBase extends antlr4.Parser {
    /**
     * @param {antlr4.TokenStream} input 
     */
    constructor(input) {
        super(input);
        
        // Track accumulated syntax and nested engine execution errors
        this.m_ParseErrors = [];
    }

    get ParseErrors() {
        return this.m_ParseErrors;
    }

    /**
     * Entry point for standard standalone string parsing demands
     * @param {string} script 
     * @param {number} line 
     * @returns {antlr4.tree.ParseTree}
     */
    GetParsedSqlTree(script, line = 0) {
        const ph = PostgreSQLParserBase.getPostgreSQLParser(script);
        const result = ph.root();
        
        for (const err of ph.ParseErrors) {
            this.ParseErrors.push(new ParseError(err.Number, err.Offset, err.Line + line, err.Column, err.Message));
        }
        return result;
    }

    /**
     * Intercepts routine declarations to parse nested sub-languages (plpgsql / sql)
     * @param {object} _localctx 
     */
    ParseRoutineBody(_localctx) {
        // LINQ .FirstOrDefault replication mapping down to native array searches
        const optItems = _localctx.createfunc_opt_item() || [];
        
        let lang = null;
        const langItem = optItems.find(coi => typeof coi.LANGUAGE === 'function' && coi.LANGUAGE() !== null);
        if (langItem) {
            // Traverse down the structural node tree chain
            const nonReserved = langItem.nonreservedword_or_sconst();
            const word = nonReserved ? nonReserved.nonreservedword() : null;
            const ident = word ? word.identifier() : null;
            const terminalIdent = ident ? ident.Identifier() : null;
            if (terminalIdent) {
                lang = terminalIdent.getText();
            }
        }

        const func_as = optItems.find(coi => typeof coi.func_as === 'function' && coi.func_as() !== null);
        if (func_as !== null) {
            const funcAsNode = func_as.func_as();
            const txt = PostgreSQLParserBase.GetRoutineBodyString(funcAsNode.sconst(0));
            const line = funcAsNode.sconst(0).start.line; // Fix: start token bounds lowercase mapping
            
            const ph = PostgreSQLParserBase.getPostgreSQLParser(txt);
            
            switch (lang) {
                case "plpgsql":
                    funcAsNode.Definition = ph.plsqlroot();
                    break;
                case "sql":
                    funcAsNode.Definition = ph.root();
                    break;
            }
            
            for (const err of ph.ParseErrors) {
                this.ParseErrors.push(new ParseError(err.Number, err.Offset, err.Line + line, err.Column, err.Message));
            }
        }
    }

    /**
     * Removes outermost framing bounding characters
     * @param {string} s 
     * @returns {string}
     */
    static TrimQuotes(s) {
        return (!s) ? s : s.substring(1, s.length - 1);
    }

    /**
     * Unescapes double single-quote escaping layouts typical inside SQL string blocks
     * @param {string} s 
     * @returns {string}
     */
    static unquote(s) {
        let r = "";
        let i = 0;
        while (i < s.length) {
            const c = s[i];
            r += c;
            if (c === '\'' && i < s.length - 1 && s[i + 1] === '\'') {
                i++;
            }
            i++;
        }
        return r;
    }

    /**
     * Extracts pure nested body code text out of raw grammar variant tokens
     * @param {object} rule 
     * @returns {string}
     */
    static GetRoutineBodyString(rule) {
        const anysconst = rule.anysconst();
        
        const StringConstant = anysconst.StringConstant();
        if (StringConstant !== null) {
            return PostgreSQLParserBase.unquote(PostgreSQLParserBase.TrimQuotes(StringConstant.getText()));
        }
        
        const UnicodeEscapeStringConstant = anysconst.UnicodeEscapeStringConstant();
        if (UnicodeEscapeStringConstant !== null) {
            return PostgreSQLParserBase.TrimQuotes(UnicodeEscapeStringConstant.getText());
        }
        
        const EscapeStringConstant = anysconst.EscapeStringConstant();
        if (EscapeStringConstant !== null) {
            return PostgreSQLParserBase.TrimQuotes(EscapeStringConstant.getText());
        }
        
        let result = "";
        const dollartext = anysconst.DollarText() || [];
        for (const s of dollartext) {
            result += s.getText();
        }
        return result;
    }

    /**
     * Isolated sub-engine runtime compiler factory constructor
     * @param {string} script 
     * @returns {PostgreSQLParser}
     */
    static getPostgreSQLParser(script) {
        const chars = new antlr4.InputStream(script);
        const lexer = new PostgreSQLLexer(chars);
        const tokens = new antlr4.CommonTokenStream(lexer);
        const parser = new PostgreSQLParser(tokens);
        
        // Setup internal custom error tracking mapping hooks
        parser.m_ParseErrors = []; 
        
        const errorListener = new PostgreSQLParserErrorListener(parser);
        parser.addErrorListener(errorListener); // Fix: low-case call signature mapping
        
        return parser;
    }
}

/**
 * Custom Error Engine Proxy Hook class
 */
class PostgreSQLParserErrorListener extends antlr4.error.ErrorListener {
    /**
     * @param {PostgreSQLParser} parserInstance 
     */
    constructor(parserInstance) {
        super();
        this.grammar = parserInstance;
    }

    syntaxError(recognizer, offendingSymbol, line, charPositionInLine, msg, e) {
        if (this.grammar && this.grammar.m_ParseErrors) {
            this.grammar.m_ParseErrors.push(new ParseError(0, 0, line, charPositionInLine, msg));
        }
    }
}