import {EmployeClass, Manager} from './ex4';

let newManager = new Manager("LastName", "FirstName", "Departement", 10, 30);
let keyValueList: (string|number)[][] = [];
/* Here goes your code */
let objectKeys: string[] = Object.keys(newManager);
let objectValues: (string|number)[] = Object.values(newManager);

for(let i:number = 0; i < objectKeys.length; i++) {
    let pair: (string|number)[] = [];
    pair.push(objectKeys[i]);
    pair.push(objectValues[i]);
    keyValueList.push(pair);
}
console.log(keyValueList);