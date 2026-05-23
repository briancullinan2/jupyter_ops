import antlr4 from 'antlr4';

export default class CSharpPreprocessorParserBase extends antlr4.Parser {
    /**
     * @param {antlr4.TokenStream} input 
     */
    constructor(input) {
        super(input);

        // Nested conditional compilation state layers
        this.conditions = [];
        this.conditions.push(true);

        // Active preprocessor compilation flags tracking collection
        this.ConditionalSymbols = new Set();
        this.ConditionalSymbols.add("DEBUG");
    }

    /**
     * Iterates over active evaluation layer depths to verify code legality
     * @returns {boolean}
     */
    AllConditions() {
        for (let i = 0; i < this.conditions.length; i++) {
            if (!this.conditions[i]) {
                return false;
            }
        }
        return true;
    }

    OnPreprocessorDirectiveDefine() {
        const d = this._ctx;
        this.ConditionalSymbols.add(d.CONDITIONAL_SYMBOL().getText());
        d.value = this.AllConditions();
    }

    OnPreprocessorDirectiveUndef() {
        const d = this._ctx;
        this.ConditionalSymbols.delete(d.CONDITIONAL_SYMBOL().getText()); // delete() matches C# HashSet.Remove
        d.value = this.AllConditions();
    }

    OnPreprocessorDirectiveIf() {
        const d = this._ctx;
        const isTrue = d.expr.value === "true";
        d.value = isTrue && this.AllConditions();
        this.conditions.push(isTrue);
    }

    OnPreprocessorDirectiveElif() {
        const d = this._ctx;
        const topCondition = this.conditions[this.conditions.length - 1];
        
        if (!topCondition) {
            this.conditions.pop();
            const isTrue = d.expr.value === "true";
            d.value = isTrue && this.AllConditions();
            this.conditions.push(isTrue);
        } else {
            d.value = false;
        }
    }

    OnPreprocessorDirectiveElse() {
        const d = this._ctx;
        const topCondition = this.conditions[this.conditions.length - 1];

        if (!topCondition) {
            this.conditions.pop();
            d.value = true && this.AllConditions();
            this.conditions.push(true);
        } else {
            d.value = false;
        }
    }

    OnPreprocessorDirectiveEndif() {
        const d = this._ctx;
        this.conditions.pop();
        d.value = this.conditions[this.conditions.length - 1];
    }

    OnPreprocessorDirectiveLine() {
        const d = this._ctx;
        d.value = this.AllConditions();
    }

    OnPreprocessorDirectiveError() {
        const d = this._ctx;
        d.value = this.AllConditions();
    }

    OnPreprocessorDirectiveWarning() {
        const d = this._ctx;
        d.value = this.AllConditions();
    }

    OnPreprocessorDirectiveRegion() {
        const d = this._ctx;
        d.value = this.AllConditions();
    }

    OnPreprocessorDirectiveEndregion() {
        const d = this._ctx;
        d.value = this.AllConditions();
    }

    OnPreprocessorDirectivePragma() {
        const d = this._ctx;
        d.value = this.AllConditions();
    }

    OnPreprocessorDirectiveNullable() {
        const d = this._ctx;
        d.value = this.AllConditions();
    }

    OnPreprocessorExpressionTrue() {
        const d = this._ctx;
        d.value = "true";
    }

    OnPreprocessorExpressionFalse() {
        const d = this._ctx;
        d.value = "false";
    }

    OnPreprocessorExpressionConditionalSymbol() {
        const d = this._ctx;
        d.value = this.ConditionalSymbols.has(d.CONDITIONAL_SYMBOL().getText()) ? "true" : "false";
    }

    OnPreprocessorExpressionConditionalOpenParens() {
        const d = this._ctx;
        d.value = d.expr.value;
    }

    OnPreprocessorExpressionConditionalBang() {
        const d = this._ctx;
        d.value = d.expr.value === "true" ? "false" : "true";
    }

    OnPreprocessorExpressionConditionalEq() {
        const d = this._ctx;
        d.value = (d.expr1.value === d.expr2.value ? "true" : "false");
    }

    OnPreprocessorExpressionConditionalNe() {
        const d = this._ctx;
        d.value = (d.expr1.value !== d.expr2.value ? "true" : "false");
    }

    OnPreprocessorExpressionConditionalAnd() {
        const d = this._ctx;
        d.value = (d.expr1.value === "true" && d.expr2.value === "true" ? "true" : "false");
    }

    OnPreprocessorExpressionConditionalOr() {
        const d = this._ctx;
        d.value = (d.expr1.value === "true" || d.expr2.value === "true" ? "true" : "false");
    }
}