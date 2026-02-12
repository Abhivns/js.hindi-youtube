// primitive

// 7 types : String , Number, Boolean, null, undefined, Symbol, BigInt

// const



// Refrence (Non primitive)

// Array, Objects, Functions


// const score = 100
// const scoreValue = 100.3   type - number

// const isLoggedIn = false   type - Boolean
 // const outsideTemp = null   // type -  object
 // let userEmail;  // undefinded

 const id = Symbol('123')
// const anotherId = Symbol('123')

// console.log(id === anotherId); // false 

 const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

 const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof id);
console.log(typeof bigNumber);
console.log(typeof heros);
console.log(typeof myFunction);


// HomeWork

// const score = 100
// const scoreValue = 100.3  // type - number

// const isLoggedIn = false //  type - Boolean

 // const outsideTemp = null   // type -  object

 // let userEmail;  // undefinded
 //  const id = Symbol('123')           // type - symbol

//   const heros = ["shaktiman", "naagraj", "doga"];
// let myObj = {
//     name: "hitesh",
//     age: 22,
// }                                     // type = object



// const myFunction = function(){
//     console.log("Hello world");
// }                                          type - function


//  const bigNumber = 3456543576654356754n    type - BigInt



// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// Stack  (Primitive) , Heap Memory (Non - Primitive)



let myYoutubename = "abhimarvelous"  //  Datatype string h to primitive datatypes hua,

let anotheryoutube = myYoutubename   //  yha pr anotheryoutube ko myyoutube wala value de di

anotheryoutube = "meraminati"      //  now we change the value of anotheryoutube should myyoutube value is also change 

console.log(myYoutubename);  //   output - abhimarvelous
console.log(anotheryoutube);  //  output - meraminati ; There is no change in myyoutubename value because it use stack memory copy the value of myoutube name 


let userOne = {
    email: "user@google.com",
    upi : "rahuk@ybl"
}

let userTwo = userOne


userTwo.email = "abhi@ggolge.com"

console.log(userOne.email);  //  output - abhi@ggolge.com
console.log(userTwo.email);  //  output - abhi@ggolge.com; same bacause it use call by refrence it pass only refrence 
