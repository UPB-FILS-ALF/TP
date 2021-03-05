"use strict";
var value = 98;
var div = 1;
var div_number = 0;
while (div !== value) {
    if (value % div === 0 && div % 2 === 1)
        div_number++;
    div++;
}
console.log("I chose the number " + value + " which has " + div_number + " odd divisors.");
div_number = 0;
div = 1;
while (div !== value) {
    if (value % div === 0 && div % 2 === 1)
        div_number++;
    div++;
}
if (div_number === 2)
    console.log(value + " is prime.");
else
    console.log(value + " is not prime.");
