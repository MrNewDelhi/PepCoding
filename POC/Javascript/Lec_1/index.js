// // staritng JS-> JavaScript
// // var let const

// // varibale declaration
// var a; //int string float ?

// // variable initalization
// a = 10;
// // variable reinitalization
// a = 20;
// console.log(typeof a);
// console.log(a);

// a = "hello"; //re initialize of varibale 'a'
// console.log(a);

// // typeof operator-> it tells us the type of data stored in a variable
// console.log(typeof a);

// a = true;
// console.log(a);
// console.log(typeof a);

// a = null;
// console.log(a);
// console.log(typeof a);

//Number
var num = 10;
// console.log(num);
var float = 2.4;
// console.log(float);

//Boolean
var t = true;
var f = false;
// console.log(t);
// console.log(f);

//String
// ' ' , " " , ``
// single quotes, double quotes, backtick
var str = 'a';
// console.log(typeof str);
str = "How you doin ?\ni am fine. how about you ?";
//backslash n("\n")
// console.log(str);

var b = `hi hope you guys are 
able grasp the concepts`;
// console.log(b);

var num = 4500;
// ${}
// console.log(`half of ${num} is ${num / 2}`);



//var has some problem

// 1) redeclaration is allowed
var r = "hello";
console.log(r);

var r = 100;
console.log(r);

// overcome krne ke liye

// let keyword is used
let l = 100;
console.log(l);

// let l = "200"; //SyntaxError: Identifier 'l' has already been declared
// console.log(l);

//we can reinitialize a variable but we cannot redeclare it
l = 300;
console.log(l);

//loops in JS
var num = 10;

// for (var i = 0; i < num; i++){
//     if (i % 2 == 0) {
//         console.log("num is even");
//     }
// }

//const keyword
const a = 2;
console.log(a);
// na hi redeclare na reinitialize
// const a = 5;
//a = 4; //TypeError: Assignment to constant variable.
console.log("hey");
