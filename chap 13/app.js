"use strict";
var a = 1;
var b = 1;
var c = 2;
var d = 2;
if((a === b) && (c === d)){
    console.log("equal");
}

c = 3;
d = 4;
if((a === b) || (c === d)){
    console.log("one is equal other is not equal");
}

var myName = 'Hamza';
var age = 23;
if(((myName === "Hamza") || (myName === "Arsalan")) && (age < 60)){
    console.log(`the name is ${myName} and age is ${age}`);
}

var num1 = 5;
var num2 = 10;
if((num1 < num2) || (num1 > num2)){
    alert("yes");
}

var firstName = "fatima";
var lastName = "naveed";
var firstNamePrompt = prompt("enter your first name");
var lastNamePrompt = prompt("enter your last name");
if((firstName === firstNamePrompt) && (lastName === lastNamePrompt)){
    alert("true");
}
