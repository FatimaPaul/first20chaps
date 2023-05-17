"use strict";
var x = 1;
x++;
x++;

var x = 100;
x--;
console.log(x);

var x = 50;
var y = x++;
console.log(y);

var y =  50;
var z = --y;
console.log(z);

var orginalNum = 1;
var newNum = orginalNum--;
console.log(newNum, orginalNum);

var orginalNum1 = 1;
var newNum1 = orginalNum1++;
console.log(newNum1, orginalNum1);

var num1 = 2;
num1++;
alert(num1);