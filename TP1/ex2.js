"use strict";
// Point a
function power_a(base, exp) {
    console.log(Math.pow(base, exp));
}
power_a(2, 3);
// Point b
function power_b(base, exp) {
    return Math.pow(base, exp);
}
console.log(power_b(5, 3));
// Point c
function power_c(base, exp) {
    var result = Math.pow(base, exp);
    console.log(result);
}
power_c(7, 2);
