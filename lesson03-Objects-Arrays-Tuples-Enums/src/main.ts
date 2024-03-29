let stringArray = ['one', 'hey', 'Dave']

let guitars = ['Strat', 'Les Paul', 5150]

let mixedData = ['EVH', 1984, true]

stringArray[0] = 'John'
stringArray.push('hey')

guitars[0] = 1984
guitars.unshift('Jim')

let test = []
let bands: string[] = []
bands.push('Van Halen')

// Tuple
let myTuple: [string, number, boolean] = ['Dave', 42, true]
console.log('🚀 ~ myTuple:', myTuple)

let mixed = ['John', 1, false]

// Objects
let myObject: object
myObject = []
console.log(typeof myObject)

myObject = bands
myObject = {}

const exampleObj = {
	prop1: 'Dave',
	prop2: true,
}

exampleObj.prop1 = 'John'

// type Guitarist = {
// 	name: string
// 	active?: boolean
// 	albums: (string | number)[]
// }

interface Guitarist {
	name?: string
	active: boolean
	albums: (string | number)[]
}

let evh: Guitarist = {
	name: 'John',
	active: false,
	albums: [1984, 5150, 'OU812'],
}

let jp: Guitarist = {
	// name: 'Jimmy',
	active: true,
	albums: ['I', 'II', 'IV'],
}

const greetGuitarist = (guitarist: Guitarist) => {
	if (guitarist.name) {
		return `Hello, ${guitarist.name.toUpperCase()}!`
	}
	return 'Hello!'
}

console.log(greetGuitarist(jp))

// Enums
enum Grade {
	U = 1,
	D,
	C,
	B,
	A,
}

console.log(Grade.A)
