"use strict";
var password = 2;
if(password !== undefined){
    if(password < 5){
        alert("password must be greater than 5");
    }else {
        alert("OK")
    }
}

var a = 1;
var c = "Max";
if(a === 1){
    if(c === "Max"){
        alert("OK")
    }
}

if( (a === 1) && (c === "Max")){
    alert("OK")
}

var x = 5;
var y = 7;
if(x === y || x !== y){
    if(x <= y){
        alert("less than or equal")
    }
}