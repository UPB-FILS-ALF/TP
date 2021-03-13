export class EmployeClass {
    public nom: string;
    public prenom: string;
    public department: string;
    public experience: number;
    
    constructor(last_name: string, first_name: string, dept: string, exp: number) {
        this.nom = last_name;
        this.prenom = first_name;
        this.department = dept;
        this.experience = exp;
    }
}
 
export class Manager extends EmployeClass {
    public noSubordonnes: number;

    constructor(last_name: string, first_name: string, dept: string, exp: number, ns: number) {
        super(last_name, first_name, dept, exp);
        this.noSubordonnes = ns;
    }
}

let manager = new Manager("Nom", "Prenom", "ALF", 3, 20);

function checkProperty(propName: string): boolean {
    return manager[propName] !== undefined ? true : false;
}

console.log(checkProperty("nom"));
console.log(checkProperty("name"));