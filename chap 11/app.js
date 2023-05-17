"use strict";
var num1 = 1;
var num2 = 2;
console.log(num1 !== num2);
console.log(num1 >= num2);

var num3 = 3;
if(num3 !== 5){
    num3 = 6;
}
console.log(num3);

var num4 = 4;
if(num4 !== 2){
    alert("Congratulations");
}

var firstName = prompt("Enter your name");
if(firstName !== "sarah"){
    alert("no match");
}