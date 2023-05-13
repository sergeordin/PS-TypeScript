"use strict";
//var makeOrdinal = require('./makeOrdinal');
//var isFinite = require('./isFinite');
//var isSafeNumber = require('./isSafeNumber');
var Numbers;
(function (Numbers) {
    Numbers[Numbers["TEN"] = 10] = "TEN";
    Numbers[Numbers["ONE_HUNDRED"] = 100] = "ONE_HUNDRED";
    Numbers[Numbers["ONE_THOUSAND"] = 1000] = "ONE_THOUSAND";
    Numbers[Numbers["ONE_MILLION"] = 1000000] = "ONE_MILLION";
    Numbers[Numbers["ONE_BILLION"] = 1000000000] = "ONE_BILLION";
    Numbers[Numbers["ONE_TRILLION"] = 1000000000000] = "ONE_TRILLION";
    Numbers[Numbers["ONE_QUADRILLION"] = 1000000000000000] = "ONE_QUADRILLION";
    Numbers[Numbers["MAX"] = 9007199254740992] = "MAX";
})(Numbers || (Numbers = {}));
var LESS_THAN_TWENTY;
(function (LESS_THAN_TWENTY) {
    LESS_THAN_TWENTY[LESS_THAN_TWENTY["zero"] = 0] = "zero";
    LESS_THAN_TWENTY[LESS_THAN_TWENTY["one"] = 1] = "one";
    LESS_THAN_TWENTY[LESS_THAN_TWENTY["two"] = 2] = "two";
    LESS_THAN_TWENTY[LESS_THAN_TWENTY["three"] = 3] = "three";
    LESS_THAN_TWENTY[LESS_THAN_TWENTY["four"] = 4] = "four";
    LESS_THAN_TWENTY[LESS_THAN_TWENTY["five"] = 5] = "five";
    LESS_THAN_TWENTY[LESS_THAN_TWENTY["six"] = 6] = "six";
    LESS_THAN_TWENTY[LESS_THAN_TWENTY["seven"] = 7] = "seven";
    LESS_THAN_TWENTY[LESS_THAN_TWENTY["eight"] = 8] = "eight";
    LESS_THAN_TWENTY[LESS_THAN_TWENTY["nine"] = 9] = "nine";
    LESS_THAN_TWENTY[LESS_THAN_TWENTY["ten"] = 10] = "ten";
    LESS_THAN_TWENTY[LESS_THAN_TWENTY["eleven"] = 11] = "eleven";
    LESS_THAN_TWENTY[LESS_THAN_TWENTY["twelve"] = 12] = "twelve";
    LESS_THAN_TWENTY[LESS_THAN_TWENTY["thirteen"] = 13] = "thirteen";
    LESS_THAN_TWENTY[LESS_THAN_TWENTY["fourteen"] = 14] = "fourteen";
    LESS_THAN_TWENTY[LESS_THAN_TWENTY["fifteen"] = 15] = "fifteen";
    LESS_THAN_TWENTY[LESS_THAN_TWENTY["sixteen"] = 16] = "sixteen";
    LESS_THAN_TWENTY[LESS_THAN_TWENTY["seventeen"] = 17] = "seventeen";
    LESS_THAN_TWENTY[LESS_THAN_TWENTY["eighteen"] = 18] = "eighteen";
    LESS_THAN_TWENTY[LESS_THAN_TWENTY["nineteen"] = 19] = "nineteen";
})(LESS_THAN_TWENTY || (LESS_THAN_TWENTY = {}));
var TENTHS_LESS_THAN_HUNDRED;
(function (TENTHS_LESS_THAN_HUNDRED) {
    TENTHS_LESS_THAN_HUNDRED[TENTHS_LESS_THAN_HUNDRED["zero"] = 0] = "zero";
    TENTHS_LESS_THAN_HUNDRED[TENTHS_LESS_THAN_HUNDRED["ten"] = 10] = "ten";
    TENTHS_LESS_THAN_HUNDRED[TENTHS_LESS_THAN_HUNDRED["twenty"] = 20] = "twenty";
    TENTHS_LESS_THAN_HUNDRED[TENTHS_LESS_THAN_HUNDRED["thirty"] = 30] = "thirty";
    TENTHS_LESS_THAN_HUNDRED[TENTHS_LESS_THAN_HUNDRED["forty"] = 40] = "forty";
    TENTHS_LESS_THAN_HUNDRED[TENTHS_LESS_THAN_HUNDRED["fifty"] = 50] = "fifty";
    TENTHS_LESS_THAN_HUNDRED[TENTHS_LESS_THAN_HUNDRED["sixty"] = 60] = "sixty";
    TENTHS_LESS_THAN_HUNDRED[TENTHS_LESS_THAN_HUNDRED["seventy"] = 70] = "seventy";
    TENTHS_LESS_THAN_HUNDRED[TENTHS_LESS_THAN_HUNDRED["eighty"] = 80] = "eighty";
    TENTHS_LESS_THAN_HUNDRED[TENTHS_LESS_THAN_HUNDRED["ninety"] = 90] = "ninety";
})(TENTHS_LESS_THAN_HUNDRED || (TENTHS_LESS_THAN_HUNDRED = {}));
/**
 * Converts an integer into words.
 * If number is decimal, the decimals will be removed.
 * @example toWords(12) => 'twelve'
 * @param {number|string} number
 * @param {boolean} [asOrdinal] - Deprecated, use toWordsOrdinal() instead!
 * @returns {string}
 */
function toWords(number, asOrdinal) {
    let words;
    let num = parseInt(number, 10);
    if (!isFinite(num)) {
        throw new TypeError('Not a finite number: ' + number + ' (' + typeof number + ')');
    }
    if (!isSafeNumber(num)) {
        throw new RangeError('Input is not a safe number, it’s either too large or too small.');
    }
    words = generateWords(num);
    return asOrdinal ? makeOrdinal(words) : words;
}
function generateWords(number, words) {
    let remainder;
    let word;
    words = arguments[1];
    // We’re done
    if (number === 0) {
        return !words ? 'zero' : words.join(' ').replace(/,$/, '');
    }
    // First run
    if (!words) {
        words = [];
    }
    // If negative, prepend “minus”
    if (number < 0) {
        words.push('minus');
        number = Math.abs(number);
    }
    if (number < 20) {
        remainder = 0;
        word = LESS_THAN_TWENTY[number];
    }
    else if (number < Numbers.ONE_HUNDRED) {
        remainder = number % Numbers.TEN;
        word = TENTHS_LESS_THAN_HUNDRED[Math.floor(number / Numbers.TEN)];
        // In case of remainder, we need to handle it here to be able to add the “-”
        if (remainder) {
            word += '-' + LESS_THAN_TWENTY[remainder];
            remainder = 0;
        }
    }
    else if (number < Numbers.ONE_THOUSAND) {
        remainder = number % Numbers.ONE_HUNDRED;
        word =
            generateWords(Math.floor(number / Numbers.ONE_HUNDRED)) +
                ' hundred';
    }
    else if (number < Numbers.ONE_MILLION) {
        remainder = number % Numbers.ONE_THOUSAND;
        word =
            generateWords(Math.floor(number / Numbers.ONE_THOUSAND)) +
                ' thousand,';
    }
    else if (number < Numbers.ONE_BILLION) {
        remainder = number % Numbers.ONE_MILLION;
        word =
            generateWords(Math.floor(number / Numbers.ONE_MILLION)) +
                ' million,';
    }
    else if (number < Numbers.ONE_TRILLION) {
        remainder = number % Numbers.ONE_BILLION;
        word =
            generateWords(Math.floor(number / Numbers.ONE_BILLION)) +
                ' billion,';
    }
    else if (number < Numbers.ONE_QUADRILLION) {
        remainder = number % Numbers.ONE_TRILLION;
        word =
            generateWords(Math.floor(number / Numbers.ONE_TRILLION)) +
                ' trillion,';
    }
    else if (number <= Numbers.MAX) {
        remainder = number % Numbers.ONE_QUADRILLION;
        word =
            generateWords(Math.floor(number / Numbers.ONE_QUADRILLION)) +
                ' quadrillion,';
    }
    words.push(word);
    return generateWords(remainder, words);
}
