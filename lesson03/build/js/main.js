"use strict";
let stringArr = ['one', 'hey', 'Dave'];
let guitars = ['Strat', 'Les Paul', 5150];
let mixedData = ['EVH', 1984, true];
stringArr[0] = 'John';
stringArr.push('hey');
guitars[0] = 1984;
guitars.unshift('Jim');
let test = [];
let bands = [];
bands.push('Van Halen');
// Tuple
let myTuple = ['Dave', 42, true];
let mixed = ['John', 1, false];
myTuple[1] = 43;
// Object
let myObj;
myObj = [];
// console.log(typeof myObj)
let myArr = ['Hello', 'Aloha'];
// console.log(typeof myArr)
myObj = bands;
myObj = {};
let exampleObj = {
    prop1: 'Dave',
    prop2: true,
};
exampleObj.prop2 = false;
let evh = {
    name: 'Eddie',
    active: false,
    albums: [1984, 5150, 'OU812'],
};
let jp = {
    active: true,
    albums: ['I', 'II', 'IV'],
};
evh = jp;
// const greetGuitarist = (guitarist: Guitarist) => {
//   return `Hello, ${guitarist.name?.toUpperCase || 'guitarist'}!`
// }
const greetGuitarist = (guitarist) => {
    if (guitarist.name) {
        return `Hello, ${guitarist.name}!`;
    }
    return 'Hello!';
};
console.log(greetGuitarist(jp));
// Enums
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 1] = "U";
    Grade[Grade["D"] = 2] = "D";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["B"] = 4] = "B";
    Grade[Grade["A"] = 5] = "A";
})(Grade || (Grade = {}));
