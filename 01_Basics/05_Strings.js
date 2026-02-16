const name = "Abhishek"    // string data type
const age = 22    // number data type


console.log(name + age);
 console.log(`My name is ${name} and I am ${age} years old.`);   // template literals, it is a way to embed expressions inside string literals, using backticks (`) instead of single or double quotes. It allows for easier string interpolation and multi-line strings. You can include variables and expressions inside the template literal by wrapping them in ${}.');
 


 
const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('hitesh-hc-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));
