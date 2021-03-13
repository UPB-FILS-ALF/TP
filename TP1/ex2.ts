// Point a
function power_a(base: number, exp: number): void {
    console.log(Math.pow(base, exp));
}
power_a(2, 3);

// Point b
function power_b(base: number, exp: number): number {
    return Math.pow(base, exp);
}
console.log(power_b(5, 3));

// Point c
function power_c(base: number, exp: number): void {
    let result: number = Math.pow(base, exp); 
    console.log(result);
}
power_c(7, 2);
