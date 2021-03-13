"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ex4_1 = require("./ex4");
var newManager = new ex4_1.Manager("LastName", "FirstName", "Departement", 10, 30);
var keyValueList = [];
/* Here goes your code */
var objectKeys = Object.keys(newManager);
var objectValues = Object.values(newManager);
for (var i = 0; i < objectKeys.length; i++) {
    var pair = [];
    pair.push(objectKeys[i]);
    pair.push(objectValues[i]);
    keyValueList.push(pair);
}
console.log(keyValueList);
