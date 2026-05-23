// CLexerBase.js
import antlr4 from 'antlr4';

export default class CLexerBase extends antlr4.Lexer {
    constructor(input) {
        // Look ma, no hands! No fs, no execSync. Pure, fast, string streams.
        super(CLexerBase.normalizeInputStream(input));
    }

    /**
     * Safely converts ANTLR inputs straight to strings, bypassing 
     * the legacy disk preprocessor logic entirely.
     */
    static normalizeInputStream(input) {
        if (typeof input === 'string') {
            return antlr4.CharStreams.fromString(input);
        }
        // If it's already an ANTLR InputStream instance, extract the text string
        if (input && typeof input.getText === 'function') {
            const rawText = input.getText(0, input.size - 1);
            return antlr4.CharStreams.fromString(rawText);
        }
        return input;
    }

    /**
     * Clang-Style Pretty Diagnostic Reporter Generator
     * Formats syntax deviations into gorgeous, readable terminal/gutter readouts.
     */
    static formatClangDiagnostic(lineText, row, column, message, type = "error") {
        if (!lineText) return message;

        const cleanLine = lineText.replace(/\t/g, '    '); // Normalize tabs to spaces
        const trimmedLine = cleanLine.trimEnd();
        
        // Build the Clang snippet visual caret marker:   ^~~~~~
        const leadingSpaces = ' '.repeat(Math.max(0, column));
        const caretMarker = `${leadingSpaces}^~~~~`;

        // Assemble the beautiful multi-line diagnostics string
        const prettyText = [
            `stdin.c:${row + 1}:${column + 1}: ${type}: ${message}`,
            trimmedLine,
            caretMarker
        ].join('\n');

        return {
            row: row,               // Ace-compatible 0-indexed row
            column: column,         // Ace-compatible 0-indexed column
            text: prettyText,       // The gorgeous multi-line string text
            type: type              // "error", "warning", or "info"
        };
    }
}