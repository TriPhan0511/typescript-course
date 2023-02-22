let stringArr = ['one', 'hey', 'Dave']

let guitars = ['Strat', 'Les Paul', 5150]

let mixedData = ['EVH', 1984, true]

stringArr[0] = 'John'
stringArr.push('hey')

guitars[0] = 1984
guitars.unshift('Jim')

let test = []
let bands: string[] = []
bands.push('Van Halen')

// Tuple
let myTuple: [string, number, boolean] = ['Dave', 42, true]

let mixed = ['John', 1, false]

myTuple[1] = 43

// Object
let myObj: object

myObj = []
// console.log(typeof myObj)

let myArr: string[] = ['Hello', 'Aloha']
// console.log(typeof myArr)

myObj = bands
myObj = {}

let exampleObj = {
  prop1: 'Dave',
  prop2: true,
}

exampleObj.prop2 = false

// type Guitarist = {
//   name: string
//   active?: boolean
//   albums: (string | number)[]
// }

interface Guitarist {
  name?: string
  active: boolean
  albums: (string | number)[]
}

let evh: Guitarist = {
  name: 'Eddie',
  active: false,
  albums: [1984, 5150, 'OU812'],
}

let jp: Guitarist = {
  active: true,
  albums: ['I', 'II', 'IV'],
}

evh = jp

// const greetGuitarist = (guitarist: Guitarist) => {
//   return `Hello, ${guitarist.name?.toUpperCase || 'guitarist'}!`
// }

const greetGuitarist = (guitarist: Guitarist) => {
  if (guitarist.name) {
    return `Hello, ${guitarist.name}!`
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
