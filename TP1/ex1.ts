let args: string[] = process.argv;

// Point a)
console.log(args);

// Point b)
console.log(args.length);

//Point c)
for(let arg of args) {
    console.log(arg);
}