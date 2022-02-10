const prompt = require('prompt-sync')({signint:true});

let string1 = prompt("Enter string: ")

let string2 = string1

while (string1.length <= 10){
    string1 = string1 + string2
    console.log(string1);
}
