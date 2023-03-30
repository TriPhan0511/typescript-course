"use strict";
// Literal Types
let myName;
let userName;
userName = 'Dave';
// Functions
const add = (a, b) => {
    return a + b;
};
const logMsg = (message) => {
    console.log(message);
};
logMsg('Hello');
logMsg(add(1, 2));
let subtract = function (c, d) {
    return c - d;
};
let multiply = function (c, d) {
    return c * d;
};
logMsg(multiply(2, 10));
// Optional Parameters
const addAll = (a, b, c) => {
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b;
};
// Default Param Value
const sumAll = (a = 10, b, c = 2) => {
    return a + b + c;
};
logMsg(addAll(2, 3, 2));
logMsg(addAll(2, 3));
logMsg(sumAll(2, 3));
logMsg(sumAll(undefined, 3));
// Rest Parameters
const total = (a, ...nums) => {
    return a * nums.reduce((previous, current) => previous + current);
};
logMsg(total(2, 3, 4));
// The never type
const createError = (msg) => {
    throw new Error(msg);
};
const infinite = () => {
    let i = 1;
    while (true) {
        i++;
        if (i > 100) {
            break;
        }
    }
};
// Custom type guard
const isNumber = (value) => {
    return typeof value === 'number';
};
// Use of the never type
const numberOrString = (value) => {
    if (typeof value === 'string') {
        return 'string';
    }
    if (isNumber(value)) {
        return 'number';
    }
    return createError('This should never happen!');
};
