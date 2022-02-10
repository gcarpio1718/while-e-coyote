const prompt = require('prompt-sync')();

let x = prompt('Enter a num for x: ')
let y = prompt('Enter a num for y: ')

while (x % y !==0){
    x++
}

console.log(`${x} is divisble by ${y}`)