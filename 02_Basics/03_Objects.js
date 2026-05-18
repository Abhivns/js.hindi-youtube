// object litereals

const mysym = Symbol("key1");
const rohan = "anjali";

const JsUser = {
    name: "Abhishek",
    "full name": "Abhishek Chaurasia",
    [mysym]: "mykey1",
    [rohan]: "kashi",
    age: 23,
    email: "abhishekchaurasia010@gmail.com",
    location: "India",
    isLoggedIn: true,
    lastLoginDays: ["Monday", "Tuesday", "Wednesday"],
    

}
console.log(JsUser.location);
console.log(JsUser["email"]);
// console.log(JsUser.full name);
console.log(JsUser["full name"]); 
console.log(JsUser[mysym]);
console.log(typeof rohan);

console.log(JsUser[rohan]);


JsUser.email = "chaurasiaabhishek204@gmail.com"
// Object.freeze(JsUser) 
JsUser.email = "abhishek@google.com"
console.log(JsUser["email"]);

JsUser.greeting = function(){
    console.log("Welcome !")
}
JsUser.greetingrwo = function(){
    console.log(`welcome , ${this.name}`)
}
console.log(JsUser.greeting());
console.log(JsUser.greetingrwo());
// console.log(JsUser["greeting"]);
