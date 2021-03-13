let test_string: string = "cod";
let substrings: string[] = [];
for(let i: number = 0; i < test_string.length; i++) {
    for(let j: number = 1; j <= test_string.length - i; j++) {
        substrings.push(test_string.substr(i, j));
    }
}

console.log(substrings);