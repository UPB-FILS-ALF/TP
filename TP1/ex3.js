"use strict";
// Point a
var emp_obj = {
    nom: process.argv[2],
    prenom: process.argv[3],
    departement: process.argv[4],
    experience: parseInt(process.argv[5])
};
// Point b
console.log("Nom: " + emp_obj.nom + "; Prenom: " + emp_obj.prenom + "; Departement: " + emp_obj.departement + "; Experience: " + emp_obj.experience);
// Point c
var emp_obj2 = {
    nom: "Nom2",
    prenom: "Prenom2",
    departement: "Dept2",
    experience: 5
};
var emp_obj3 = {
    nom: "Nom3",
    prenom: "Prenom3",
    departement: "Dept3",
    experience: 6
};
var emp_list = [];
emp_list.push(emp_obj);
emp_list.push(emp_obj2);
emp_list.push(emp_obj3);
// Point d + e
var exp_list = [];
var exp_prod = 1;
for (var _i = 0, emp_list_1 = emp_list; _i < emp_list_1.length; _i++) {
    var emp = emp_list_1[_i];
    exp_list.push(emp.experience);
    exp_prod *= emp.experience;
}
var max_exp = Math.max.apply(Math, exp_list);
for (var _a = 0, emp_list_2 = emp_list; _a < emp_list_2.length; _a++) {
    var emp = emp_list_2[_a];
    if (emp.experience === max_exp) {
        console.log(emp);
    }
}
console.log("Moyenne geometrique: " + Math.pow(exp_prod, exp_list.length));
// Point f
var nom_list = [];
for (var _b = 0, emp_list_3 = emp_list; _b < emp_list_3.length; _b++) {
    var emp = emp_list_3[_b];
    nom_list.push(emp.nom.length);
}
var max_nom = Math.max.apply(Math, nom_list);
for (var _c = 0, emp_list_4 = emp_list; _c < emp_list_4.length; _c++) {
    var emp = emp_list_4[_c];
    if (emp.nom.length === max_nom) {
        console.log(emp);
    }
}
// Point g
emp_list.sort(function (a, b) {
    return (a.nom > b.nom) ? 1 : -1;
});
console.log(emp_list);
