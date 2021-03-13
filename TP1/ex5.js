"use strict";
var test_string = "cod";
var substrings = [];
for (var i = 0; i < test_string.length; i++) {
    for (var j = 1; j <= test_string.length - i; j++) {
        substrings.push(test_string.substr(i, j));
    }
}
console.log(substrings);
