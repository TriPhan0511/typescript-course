"use strict";
// function paddLeft(padding: number | string, input: string) {
// 	if (typeof padding === 'number') {
// 		return ' '.repeat(padding) + input
// 	}
// 	return padding + input
// }
// console.log(paddLeft(10, 'Hello'))
// console.log(paddLeft('Hi', 'Hello'))
///////////////////////////////////////////////////////////////////////////
function printAll(strs) {
    if (!strs) {
        console.log('strs is null');
    }
    else if (Array.isArray(strs)) {
        strs.forEach((e) => console.log(e));
    }
    else {
        console.log(strs);
    }
}
console.log(printAll(null));
