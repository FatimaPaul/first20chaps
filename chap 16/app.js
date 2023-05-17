"use strict";
var arr = ["apples"];
arr.push("grapes");
console.log(arr);

console.log(arr[arr.length - 1]);

var alphabet = ["h", "i", "j", "k"];
console.log(alphabet.pop());

var alphabet = ["h", "i", "j", "k"];
alphabet.push(1);
console.log(alphabet);

var sizes = ["S", "M", "XL", "XXL", "XXXL"];
sizes.shift();
console.log(sizes);

sizes = ["S", "M", "XL", "XXL", "XXXL"];
sizes.unshift(1, 2, 3);
console.log(sizes);

var arr2 = ["pen"];
arr2.unshift("rubber");
console.log(arr2[0]);

sizes = ["S", "M", "XL", "XXL", "XXXL"];
sizes.splice(2, 0, "L");
console.log(sizes);

sizes = ["S", "M", "XL", "XXL", "XXXL"];
var regSizes = sizes.slice(0, 3);
console.log(regSizes);

var pets = ["dog", "cat", "ox", "duck", "frog"];
pets.splice(1, 3);
console.log(pets);
pets.splice(1, 0, "camel", "donkey");
console.log(pets);

pets = ["dog", "cat", "ox", "duck", "frog"];
pets.splice(1, 2);
console.log(pets);

pets = ["dog", "cat", "ox", "duck", "frog", "flea"];
console.log(pets.slice(0,1));
console.log(pets.slice(-2, -1));