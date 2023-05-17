"use strict";
for(var i = 0; i < 10; i++){
    console.log(i);
}

for(var i = 0; i <= 12; i++){
    console.log(`count ${i}`);
}

for(var i = 0; i <= 4; i++){
    console.log(i);
}

for(var x = 0; x < 100; x++){
    console.log(x);
}

for(var i = 3; i > 0; i--){
    console.log(i);
}

var arr  = ["apples", "mango", "banana"];
var flag = true;

var pets = ["dog", "cat", "ox", "duck", "frog", "flea"];
for(var i = 0; i < pets.length; i++){
    console.log(pets[i]);
}

for(var i = 0; i < 10; i++){
    if(i === 1){
        alert(i);
        break;
    }
}

var arr2 = ["fatima", "peter", "john", "kevin"];
var firstName = prompt("Enter a name");
for(var i = 0; i < arr2.length; i++){
    if(arr2[i] === firstName){
        alert("enter");
    }
}

// var matchFound = false;
// for (var i = 0; i < list.length; i++) {
// if (userInput === list[i]) {
// alert("Match found");
// matchFound = true;
// break;
// }else{
//     alert("not found")
// }
// };

var firstArr = ["a", "b", "c", "d", "e","f"];
var secondArr = [1, 2, 3, 4, 5, 6];
for(var i = 0; i < firstArr.length; i++){
    for(var j = 0; j < secondArr.length; j++){
        console.log( firstArr[i] + secondArr[j]);
    }
}