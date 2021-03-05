let alf_const: string = "This is my first ALF lab!";
alf_const = "This is not correct";
 

let alf_number: number;
alf_number = 10;


let alf_bool: boolean = true;
if(alf_bool === true) {
    alf_bool = false;
    console.log("I found the answer!");
}


let tuple_example: [number, string]; 
tuple_example = [1, "ALF"];
console.log(tuple_example[1].substring(1));
tuple_example[1] = "TP1";