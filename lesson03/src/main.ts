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
