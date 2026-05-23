import antlr4 from 'antlr4';

// Emulate C# Enum architecture via a frozen JavaScript configuration object
export const PythonVersion = Object.freeze({
    Autodetect: 0,
    Python2: 2,
    Python3: 3
});

export default class PythonParserBase extends antlr4.Parser {
    /**
     * @param {antlr4.TokenStream} input 
     */
    constructor(input) {
        super(input);
        
        // Default parser tracking state to Autodetect
        this._version = PythonVersion.Autodetect;
    }

    /**
     * @type {number}
     */
    get Version() {
        return this._version;
    }

    /**
     * @param {number} value
     */
    set Version(value) {
        this._version = value;
    }

    /**
     * Executed by the grammar rules to validate Python 2 vs Python 3 syntax variations
     * @param {number} version 
     * @returns {boolean}
     */
    CheckVersion(version) {
        return this.Version === PythonVersion.Autodetect || version === this.Version;
    }

    /**
     * Dynamically locks down or updates the version parser state mid-stream
     * @param {number} requiredVersion 
     */
    SetVersion(requiredVersion) {
        this.Version = requiredVersion;
    }
}