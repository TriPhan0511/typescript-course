// Everyday Types

// ----- The primitives: string, number , and boolean -----

// ----- Arrays -----
// Example: string[], number[], Array<number>

// ----- any -----
// let obj: any = { x: 0 }
// console.log(obj.foo())

// ----- Type Annotations on Variables -----
// let myName: string = 'Alice'
// let myName = 'Alice'

// ----- Functions -----

// ----- Parameter Type Annotations -----
// function greet(name: string) {
// 	console.log('Hello, ' + name.toUpperCase() + '!!')
// }

// greet('Alice')
// greet(42) // Error

// Note:
// Even if you don’t have type annotations on your parameters,
// TypeScript will still check that you passed the right number of arguments.

// ----- Return Type Annotations -----
// function getFavoriteNumber(): number {
// 	return 26
// }

// function getFavoriteNumber() {
// 	return 26
// }

// ----- Ananymous Functions -----
// Anonymous functions are a little bit different from function declarations.
// When a function appears in a place where TypeScript can determine how it’s
// going to be called, the parameters of that function are automatically given types.
// const names = ['Alice', 'Bob', 'Eve']

// Contextual typing for function
// names.forEach(function (s) {
// 	console.log(s.toUppercase()) // Error
// })

// Contextual typing also applies to arrow function
// names.forEach((s) => console.log(s.toUppercase())) // Error

// ----- Object Types -----
// function printCoord(pt: { x: number; y: number }) {
// 	console.log("The coordinate's x value is " + pt.x)
// 	console.log("The coordinate's y value is " + pt.y)
// }

// printCoord({ x: 3, y: 7 })

// ----- Optional Properties -----
function printName(obj: { first: string; last?: string }) {
	if (obj.last === undefined) {
		console.log(`First: ${obj.first}`)
	} else {
		console.log(`First: ${obj.first}, Last: ${obj.last}`)
	}
}

printName({ first: 'Bob' })
printName({ first: 'Bob' })
