const prompt = require('prompt-sync')({signint:true});

let number = Number(prompt("Enter a Number: "));
let doubler = 1

while (number < 100) {
    number = number * doubler;
    doubler = 2;
    console.log(number);

}

console.log("Complete")