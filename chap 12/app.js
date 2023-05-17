"use strict";

var a =  5;
var b =  4;
if(a >= b){
    console.log('yes');
}else{
    console.log('no');
}

var marks1 = Number(prompt("Enter marks1"));
var marks2 = Number(prompt("Enter marks2"));
var marks3 = Number(prompt("Enter marks3"));
var percentage = ((marks1 + marks2 + marks3)/300)*100;
if(percentage >= 80){
    console.log("you secured A grade");
}else if(percentage >= 70 && percentage < 80){
    console.log("you secured B grade");
}else{
    console.log("you secured C grade");
}

var a = 3;
if(a === 10){
    alert("a is 10");
}else{
    alert(a);
}

var city = "lahore";
if(city === 'karachi'){
    alert("Acknowledging it is karachi");
} else if (city === 'lahore'){
    alert("Acknowledging it is lahore");
}else{
    alert('The city is different from karachi and lahore');
}