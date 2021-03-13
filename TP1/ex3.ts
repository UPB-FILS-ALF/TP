interface Employe {
    nom: string,
    prenom: string,
    departement?: string,
    experience: number,
}

// Point a
let emp_obj: Employe = {
    nom: process.argv[2],
    prenom: process.argv[3],
    departement: process.argv[4],
    experience: parseInt(process.argv[5])
};

// Point b
console.log("Nom: " + emp_obj.nom + "; Prenom: " + emp_obj.prenom + "; Departement: " + emp_obj.departement + "; Experience: " + emp_obj.experience);

// Point c
let emp_obj2: Employe = {
    nom: "Nom2",
    prenom: "Prenom2",
    departement: "Dept2",
    experience: 5
};

let emp_obj3: Employe = {
    nom: "Nom3",
    prenom: "Prenom3",
    departement: "Dept3",
    experience: 6
};

let emp_list: Employe[] = [];
emp_list.push(emp_obj);
emp_list.push(emp_obj2);
emp_list.push(emp_obj3);

// Point d + e
let exp_list: number[] = [];
let exp_prod: number = 1;
for(let emp of emp_list) {
    exp_list.push(emp.experience);
    exp_prod *= emp.experience;
}
let max_exp = Math.max(...exp_list);
for(let emp of emp_list) {
    if(emp.experience === max_exp) {
        console.log(emp);
    }
}
console.log("Moyenne geometrique: " + Math.pow(exp_prod, exp_list.length));

// Point f
let nom_list: number[] = [];
for(let emp of emp_list) {
    nom_list.push(emp.nom.length);
}
let max_nom = Math.max(...nom_list);
for(let emp of emp_list) {
    if(emp.nom.length === max_nom) {
        console.log(emp);
    }
}

// Point g
emp_list.sort((a: Employe, b: Employe) => {
    return (a.nom > b.nom) ? 1 : -1;
});
console.log(emp_list);
