import * as originalAntlr from 'antlr4';

// Create a deep clone/copy wrapper of the actual node module library
const antlr4 = {};
if (originalAntlr.default) {
    Object.assign(antlr4, originalAntlr.default);
}
Object.assign(antlr4, originalAntlr);

// Inject the missing PredictionContextCache constructor baseline 
// so EVERY file that imports antlr4 gets it automatically!
if (!antlr4.PredictionContextCache) {
    antlr4.PredictionContextCache = function() {
        return {};
    };
}

// Ensure character stream back-compat mapping is preserved
if (!antlr4.InputStream && antlr4.error && antlr4.error.InputStream) {
    antlr4.InputStream = antlr4.error.InputStream;
}

export default antlr4;
export * from 'antlr4';