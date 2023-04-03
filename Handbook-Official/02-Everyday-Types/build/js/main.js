"use strict";
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
// function printName(obj: { first: string; last?: string }) {
// 	console.log(obj.last?.toUpperCase())
// }
// printName({ first: 'Bob' })
// printName({ first: 'Alice', last: 'Alisson' })
// ----- Union Types -----
// ----- Define a Union Type -----
// function printId(id: number | string) {
// 	console.log(`You ID is: ${id}`)
// }
// printId(101)
// printId(202)
// // printId({ myId: 2234 }) // Error
// ----- Working with Union Types -----
// function printId(id: number | string) {
// 	// console.log(id.toUpperCase()) // Error
// }
// function printId(id: string | number) {
// 	if (typeof id === 'string') {
// 		console.log(id.toUpperCase())
// 	} else {
// 		console.log(id)
// 	}
// }
// Another example is to use a function like Array.isArray:
// function welcomePeople(x: string | string[]) {
// 	if (Array.isArray(x)) {
// 		console.log(`Hello ${x.join(' and ')}`)
// 	} else {
// 		console.log(`Welcome lone traveler ${x}`)
// 	}
// }
// welcomePeople('Peter')
// welcomePeople(['Alice', 'Daisy'])
// function getFirstThree(x: number[] | string) {
// 	return x.slice(0, 3)
// }
// ----- Type Aliases -----
// type Point = {
// 	x: number
// 	y: number
// }
// function printCoord(pt: Point) {
// 	console.log(`The coordinate's x value is ${pt.x}`)
// 	console.log(`The coordinate's y value is ${pt.y}`)
// }
// ----- Interfaces -----
// interface Point {
// 	x: number
// 	y: number
// }
// function printCoord(pt: Point) {
// 	console.log(`The coordinate's x value is ${pt.x}`)
// 	console.log(`The coordinate's y value is ${pt.y}`)
// }
// printCoord({ x: 100, y: 200 })
// ----- Differences Between Type Aliases and Interfaces -----
/*
 * Type aliases and interfaces are very similar,
 * and in many cases you can choose between them freely.
 * Almost all features of an interface are available in type,
 * the key distinction is that a type cannot be re-opened to add new properties
 * vs an interface which is always extendable.
 */
// Extending
// Interface
// Extending an interface
// interface Animal {
// 	name: string
// }
// interface Bear extends Animal {
// 	honey: boolean
// }
// const getBear = (): Bear => ({ name: 'Pecky', honey: true })
// const bear = getBear()
// console.log(bear.name)
// console.log(bear.honey)
// Type
// Extending a type via intersections
// type Animal = {
// 	name: string
// }
// type Bear = Animal & {
// 	honey: boolean
// }
// const getBear = (): Bear => ({ name: 'Pecky', honey: true })
// const bear: Bear = getBear()
// console.log(bear.name)
// console.log(bear.honey)
// Adding new fields to an existing interface
// Interface
// interface Animal {
// 	name: string
// }
// interface Animal {
// 	isBeautiful: boolean
// }
// const animal: Animal = {
// 	name: 'A beatiful cat.',
// 	isBeautiful: true,
// }
// Type
// type Animal = {
// 	name: string
// }
// // Error: Duplicate identifier 'Animal'.
// type Animal = {
// 	isBeautiful: boolean
// }
// ----- Type Assertions (Type Casting) -----
// // const myCanvas = document.getElementById('main_canvas') as HTMLCanvasElement
// const myCanvas = <HTMLCanvasElement>document.getElementById('main_canvas')
// ----- Literal Types -----
// let changingString = 'Hello World'
// changingString = 'Aloha'
// const constantString = 'Hello World'
// function printText(s: string, aligment: 'left' | 'right' | 'center') {}
// printText('Hello, world', 'left')
// // printText('Hello, world', 'centre') // Error
// function compare(a: string, b: string): 0 | 1 | -1 {
// 	return a === b ? 0 : a > b ? 1 : -1
// }
// interface Options {
// 	width: number
// }
// function configure(x: Options | 'auto') {}
// configure({ width: 100 })
// configure('auto')
// // configure('automatic') // Error
// // Literal Inference
// const obj = { counter: 0 }
// let someCondition = true
// if (someCondition) {
// 	obj.counter = 1
// }
// const req = { url: 'https://example.com', method: 'GET' }
// function handleRequest(url: string, method: 'POST' | 'GET') {}
// // handleRequest(req.url, req.method) // Error
// ----- null and undefined -----
// strictNullChecks off
/*
With strictNullChecks off, values that might be null or undefined can still be accessed normally,
and the values null and undefined can be assigned to a property of any type.
This is similar to how languages without null checks (e.g. C#, Java) behave.
The lack of checking for these values tends to be a major source of bugs;
we always recommend people turn strictNullChecks on if it’s practical to do so in their codebase.
*/
// strictNullChecks on
/*
With strictNullChecks on, when a value is null or undefined, you will need to test for those values before
using methods or properties on that value. Just like checking for undefined before using an optional property,
we can use narrowing to check for values that might be null:
*/
function doSomething(x) {
    if (x !== null) {
        console.log(x.toUpperCase());
    }
}
// Non-null Assertion Operator (!)
/*
Typescript also has a special syntax for removing null and undefined from a type without doing any explicitly checking.
Writing ! after any expression is effectively a type assertion that the value isn't null or undefined:
*/
function liveDangerously(x) {
    console.log(x.toFixed);
}
