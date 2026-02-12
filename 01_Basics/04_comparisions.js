console.log("2" < 2);
console.log("2" >= 2);
console.log("2" == 2);

console.log("2" > 1);
console.log("02" > 1);

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);


// NOte - " == " is confusing its change datatypes according to need , you should use " === " for comparison === does not change their datatypes;


console.log("5" === 5); // output will be false .
console.log("5" == 5); // output comes true , that confuse you , because datatype of "string" is changed to "number" according to javascripts 
