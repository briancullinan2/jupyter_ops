// CParserBase.js
import antlr4 from 'antlr4';
import { SymbolTable } from "./SymbolTable.js";
import { Symbol } from "./Symbol.js";
import { TypeClassification } from "./TypeClassification.js";
import CLexer from "./CLexer.js";

function isDeclarationContext(x) {
    return x?.ruleIndex === CParser.RULE_declaration;
}

function isFunctionDefinitionContext(x) {
    return x?.ruleIndex === CParser.RULE_functionDefinition;
}

export default class CParserBase extends antlr4.Parser {
    constructor(input) {
        super(input);

        // FIX: Replaced process.argv shell checks with predictable fallback values
        this.noSemantics = new Set();
        this._debug = false;
        this.outputSymbolTable = false;
        this.outputAppliedOccurrences = false;

        this._st = new SymbolTable();
    }

    IsAlignmentSpecifier(k = 1) {
        if (this.noSemantics.has("IsAlignmentSpecifier")) return true;
        const lt1 = this._input.LT(k);
        const resolved = this._resolveWithOutput(lt1);
        return resolved !== null && resolved.classification.has(TypeClassification.AlignmentSpecifier_);
    }

    IsAtomicTypeSpecifier(k = 1) {
        if (this.noSemantics.has("IsAtomicTypeSpecifier")) return true;
        const lt1 = this._input.LT(k);
        const resolved = this._resolveWithOutput(lt1);
        return resolved !== null && resolved.classification.has(TypeClassification.AtomicTypeSpecifier_);
    }

    IsAttributeDeclaration() {
        return this.IsAttributeSpecifierSequence();
    }

    IsAttributeSpecifier() {
        if (this.noSemantics.has("IsAttributeSpecifier")) return true;
        return this._input.LT(1).type === CLexer.LeftBracket;
    }

    IsAttributeSpecifierSequence() {
        return this.IsAttributeSpecifier();
    }

    IsDeclaration() {
        if (this.noSemantics.has("IsDeclaration")) return true;
        return this.IsDeclarationSpecifiers()
            || this.IsAttributeSpecifierSequence()
            || this.IsStaticAssertDeclaration()
            || this.IsAttributeDeclaration();
    }

    IsDeclarationSpecifier() {
        if (this.noSemantics.has("IsDeclarationSpecifier")) return true;
        return this.IsStorageClassSpecifier()
            || this.IsTypeSpecifier()
            || this.IsTypeQualifier()
            || (this.IsFunctionSpecifier() && !this.IsGnuAttributeBeforeDeclarator())
            || this.IsAlignmentSpecifier();
    }

    IsTypeSpecifierQualifier(k = 1) {
        if (this.noSemantics.has("IsTypeSpecifierQualifier")) return true;
        return this.IsTypeSpecifier(k)
            || this.IsTypeQualifier(k)
            || this.IsAlignmentSpecifier(k);
    }

    IsDeclarationSpecifiers() {
        return this.IsDeclarationSpecifier();
    }

    IsEnumSpecifier(k = 1) {
        if (this.noSemantics.has("IsEnumSpecifier")) return true;
        return this._input.LT(k).type === CLexer.Enum;
    }

    IsFunctionSpecifier() {
        if (this.noSemantics.has("IsFunctionSpecifier")) return true;
        const lt1 = this._input.LT(1);
        const resolved = this._resolveWithOutput(lt1);
        return resolved !== null && resolved.classification.has(TypeClassification.FunctionSpecifier_);
    }

    IsGnuAttributeBeforeDeclarator(k = 1) {
        if (this.noSemantics.has("IsGnuAttributeBeforeDeclarator")) return true;
        const ts = this._input;
        let i = k;
        if (ts.LT(i).type !== CLexer.Attribute) return false;
        i++;
        let depth = 0;
        while (true) {
            const t = ts.LT(i++);
            if (t.type < 0) return false; // EOF
            if (t.type === CLexer.LeftParen) depth++;
            else if (t.type === CLexer.RightParen) { depth--; if (depth === 0) break; }
        }
        const next = ts.LT(i).type;
        return next === CLexer.Identifier || next === CLexer.Star || next === CLexer.LeftParen;
    }

    IsStatement() {
        if (this.noSemantics.has("IsStatement")) return true;
        const t1 = this._input.LT(1);
        const t2 = this._input.LT(2);
        if (t1.type === CLexer.Identifier && t2.type === CLexer.Colon) {
            return true;
        }
        return !this.IsDeclaration();
    }

    IsStaticAssertDeclaration() {
        if (this.noSemantics.has("IsStaticAssertDeclaration")) return true;
        return this._input.LT(1).type === CLexer.Static_assert;
    }

    IsStorageClassSpecifier() {
        if (this.noSemantics.has("IsStorageClassSpecifier")) return true;
        const lt1 = this._input.LT(1);
        const resolved = this._resolveWithOutput(lt1);
        return resolved !== null && resolved.classification.has(TypeClassification.StorageClassSpecifier_);
    }

    IsStructOrUnionSpecifier(k = 1) {
        if (this.noSemantics.has("IsStructOrUnionSpecifier")) return true;
        const token = this._input.LT(k);
        return token.type === CLexer.Struct || token.type === CLexer.Union;
    }

    IsTypedefName(k = 1) {
        if (this.noSemantics.has("IsTypedefName")) return true;
        const lt1 = this._input.LT(k);
        const resolved = this._resolveWithOutput(lt1);
        if (resolved === null) return false;
        return !resolved.classification.has(TypeClassification.Variable_) && !resolved.classification.has(TypeClassification.Function_);
    }

    IsTypeofSpecifier(k = 1) {
        if (this.noSemantics.has("IsTypeofSpecifier")) return true;
        const token = this._input.LT(k);
        return token.type === CLexer.Typeof || token.type === CLexer.Typeof_unqual;
    }

    IsTypeQualifier(k = 1) {
        if (this.noSemantics.has("IsTypeQualifier")) return true;
        const lt1 = this._input.LT(k);
        const resolved = this._resolveWithOutput(lt1);
        return resolved !== null && resolved.classification.has(TypeClassification.TypeQualifier_);
    }

    IsTypeSpecifier(k = 1) {
        if (this.noSemantics.has("IsTypeSpecifier")) return true;
        const lt1 = this._input.LT(k);
        const resolved = this._resolveWithOutput(lt1);

        if (resolved !== null && resolved.classification.has(TypeClassification.TypeSpecifier_)) {
            return true;
        }
        return this.IsAtomicTypeSpecifier(k) || this.IsStructOrUnionSpecifier(k) || this.IsEnumSpecifier(k)
            || this.IsTypedefName(k) || this.IsTypeofSpecifier(k);
    }

    _myGetDeclarationId(y) {
        const token = this._myGetDeclarationToken(y);
        return token !== null ? token.text : null;
    }

    _myGetDeclarationToken(y) {
        if (!y) return null;
        const directDeclarator = y.directDeclarator();
        if (directDeclarator) {
            const more = directDeclarator.declarator();
            const token = this._myGetDeclarationToken(more);
            if (token !== null) return token;
            if (directDeclarator.Identifier()) {
                return directDeclarator.Identifier().symbol;
            }
        }
        return null;
    }
    // Remove 'import CParser' from the top of the file!

    EnterDeclaration() {
        // Grab the runtime Parser constructor safely without an explicit top-level import
        const ParserCtor = this.constructor;

        let context = this._ctx;
        for (; context !== null; context = context.parentCtx) {

            // Check structural types using string/instance checks instead of strict instanceof imports if needed, 
            // or rely on the class constructor properties attached to the active stream context:
            if (context.ruleIndex === ParserCtor.RULE_declaration) {

                const declaration_context = context;
                const declaration_specifiers = declaration_context.declarationSpecifiers();
                const declaration_specifier = declaration_specifiers?.declarationSpecifier() ?? null;

                let is_typedef = false;
                if (declaration_specifier !== null) {
                    for (const ds of declaration_specifier) {
                        if (ds.storageClassSpecifier()?.Typedef()) {
                            is_typedef = true;
                            break;
                        }
                    }
                }

                const init_declaration_list = declaration_context.initDeclaratorList();
                const init_declarators = init_declaration_list?.initDeclarator() ?? null;

                if (init_declarators !== null) {
                    for (const id of init_declarators) {
                        const y = id?.declarator() ?? null;
                        const idToken = this._myGetDeclarationToken(y);
                        if (idToken) {
                            const text = idToken.text;
                            const loc = this._getSourceLocation(idToken);
                            const symbol = new Symbol();
                            symbol.name = text;
                            symbol.classification = new Set([is_typedef ? TypeClassification.TypeSpecifier_ : TypeClassification.Variable_]);
                            symbol.definedFile = loc.file;
                            symbol.definedLine = loc.line;
                            symbol.definedColumn = loc.column;
                            this._st.define(symbol);
                        }
                    }
                }
            }

            if (context.ruleIndex === ParserCtor.RULE_functionDefinition) {
                const fd = context;
                const de = fd.declarator();
                const dd = de?.directDeclarator();
                if (dd?.Identifier()) {
                    const idToken = dd.Identifier().symbol;
                    const loc = this._getSourceLocation(idToken);
                    const symbol = new Symbol();
                    symbol.name = idToken.text;
                    symbol.classification = new Set([TypeClassification.Function_]);
                    symbol.definedFile = loc.file;
                    symbol.definedLine = loc.line;
                    symbol.definedColumn = loc.column;
                    this._st.define(symbol);
                    return;
                }
            }
        }
    }

    
    IsNullStructDeclarationListExtension() {
        return true;
    }

    EnterScope() {
        this._st.pushBlockScope();
    }

    ExitScope() {
        this._st.popBlockScope();
    }

    LookupSymbol() {
        // Safe placeholder
    }

    OutputSymbolTable() {
        // Safe placeholder
    }

    _resolveWithOutput(token) {
        if (!token) return null;
        return this._st.resolve(token.text);
    }

    _getSourceLocation(token) {
        if (!token) return { file: "", line: 0, column: 0 };
        return { file: "stdin.c", line: token.line, column: token.column };
    }

    IsInitDeclaratorList() {
        if (this.noSemantics.has("IsInitDeclaratorList")) return true;
        const lt1 = this._input.LT(1);
        const resolved = this._resolveWithOutput(lt1);
        if (resolved === null) return true;
        return !resolved.classification.has(TypeClassification.TypeQualifier_) && !resolved.classification.has(TypeClassification.TypeSpecifier_);
    }

    IsSomethingOfTypeName() {
        const ts = this._input;
        if (!(ts.LT(1).type === CLexer.Sizeof ||
            ts.LT(1).type === CLexer.Countof ||
            ts.LT(1).type === CLexer.Alignof ||
            ts.LT(1).type === CLexer.Maxof ||
            ts.LT(1).type === CLexer.Minof)) return false;
        return ts.LT(2).type === CLexer.LeftParen && this.IsTypeName(3);
    }

    IsTypeName(k = 1) {
        return this.IsSpecifierQualifierList(k);
    }

    IsSpecifierQualifierList(k = 1) {
        return this.IsGnuAttributeBeforeDeclarator(k) || this.IsTypeSpecifierQualifier(k);
    }

    IsCast() {
        if (this.noSemantics.has("IsCast")) return true;
        const t1 = this._input.LT(1);
        const t2 = this._input.LT(2);
        if (t1.type !== CLexer.LeftParen) return false;
        if (t2.type !== CLexer.Identifier) return true;
        const resolved = this._resolveWithOutput(t2);
        return resolved !== null && resolved.classification.has(TypeClassification.TypeSpecifier_);
    }
}