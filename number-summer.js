const prompt = require('prompt-sync')();

let num = prompt("Enter some numbers and type done when complete: ");

//condition 

let total = 0;
while (num !== "done"){
//input numbers 
   
    total = total + parseInt (num);
    num = prompt("> ");
    
}

console.log ('Your total is: ' + total);
