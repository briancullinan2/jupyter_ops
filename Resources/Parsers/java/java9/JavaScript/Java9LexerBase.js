/*
 * [The "BSD license"]
 * Copyright (c) 2014 Terence Parr
 * Copyright (c) 2014 Sam Harwell
 * Copyright (c) 2017 Chan Chung Kwong
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions
 * are met:
 *
 * 1. Redistributions of source code must retain the above copyright
 * notice, this list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright
 * notice, this list of conditions and the following disclaimer in the
 * documentation and/or other materials provided with the distribution.
 * 3. The name of the author may not be used to endorse or promote products
 * derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE AUTHOR ``AS IS'' AND ANY EXPRESS OR
 * IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
 * OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
 * IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY DIRECT, INDIRECT,
 * INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT
 * NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
 * THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

import antlr4 from 'antlr4';

export default class Java9LexerBase extends antlr4.Lexer {
    /**
     * @param {antlr4.CharStream} input 
     */
    constructor(input) {
        super(input);
    }

    // Static nested class container matching the C# structural namespace topology
    static Character = {
        /**
         * @param {number} c 
         * @returns {boolean}
         */
        isJavaIdentifierPart(c) {
            if (c <= 0) return false;
            const charStr = String.fromCharCode(c);

            // Replicates Char.IsLetter, Char.IsDigit, and Char.IsNumber using Unicode properties
            if (/^\p{L}$/u.test(charStr))
                return true;
            else if (c === 36) // '$'
                return true;
            else if (c === 95) // '_'
                return true;
            else if (/^[\p{Nd}\p{Nl}\p{No} ]$/u.test(charStr)) // Covers Digits and generic Number classes
                return true;
            return false;
        },

        /**
         * @param {number} c 
         * @returns {boolean}
         */
        isJavaIdentifierStart(c) {
            if (c <= 0) return false;
            const charStr = String.fromCharCode(c);

            if (/^\p{L}$/u.test(charStr))
                return true;
            else if (c === 36) // '$'
                return true;
            else if (c === 95) // '_'
                return true;
            return false;
        },

        /**
         * Converts high/low surrogate halves safely into a standard UTF-32 code point code
         * @param {number} high 
         * @param {number} low 
         * @returns {number}
         */
        toCodePoint(high, low) {
            // Emulates .NET's Char.ConvertToUtf32 natively via the high/low surrogate calculation formula
            return (high - 0xD800) * 0x400 + (low - 0xDC00) + 0x10000;
        }
    };

    /**
     * @returns {boolean}
     */
    Check1() {
        return Java9LexerBase.Character.isJavaIdentifierStart(this._input.LA(-1));
    }

    /**
     * @returns {boolean}
     */
    Check2() {
        return Java9LexerBase.Character.isJavaIdentifierStart(
            Java9LexerBase.Character.toCodePoint(this._input.LA(-2), this._input.LA(-1))
        );
    }

    /**
     * @returns {boolean}
     */
    Check3() {
        return Java9LexerBase.Character.isJavaIdentifierPart(this._input.LA(-1));
    }

    /**
     * @returns {boolean}
     */
    Check4() {
        return Java9LexerBase.Character.isJavaIdentifierPart(
            Java9LexerBase.Character.toCodePoint(this._input.LA(-2), this._input.LA(-1))
        );
    }
}