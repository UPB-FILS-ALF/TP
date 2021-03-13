"use strict";
var args = process.argv;
// Point a)
console.log(args);
// Point b)
console.log(args.length);
//Point c)
for (var _i = 0, args_1 = args; _i < args_1.length; _i++) {
    var arg = args_1[_i];
    console.log(arg);
}
