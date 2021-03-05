for(let i:number = 1; i <= 200; i++) {
    if(i % 2 === 0) {
        console.log(i);
    }
}

for(let i:number = 200; i >= 1; i--) {
    if(i % 2 === 0) {
        console.log(i);
    }
}

for(let i:number = 1; i <= 200; i++) {
    if(i % 3 === 0) {
        console.log(i);
    }
}

for(let i:number = 1; i <= 200; i++) {
    if(i % 5 === 0 && i % 7 === 0) {
        console.log(i);
    }
}

for(let i:number = 1; i <= 200; i++) {
    if(i % 11 === 0 || i % 6 === 0) {
        console.log(i);
    }
}