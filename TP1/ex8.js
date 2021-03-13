"use strict";
var Pangram = /** @class */ (function () {
    function Pangram(phrase) {
        this.phrase = phrase;
        this.alphabet = 'abcdefghijklmnopqrstuvwxyz';
        this.phrase = phrase.toLowerCase();
    }
    Pangram.prototype.isPangram = function () {
        for (var i = 0; i < this.alphabet.length; i++) {
            if (this.phrase.indexOf(this.alphabet[i]) < 0) {
                return false;
            }
        }
        return true;
    };
    return Pangram;
}());
var phrase = new Pangram("The quick brown fox jumps over the lazy dog.");
console.log(phrase.isPangram());
