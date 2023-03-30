// Type Aliases
type stringOrNumber = string | number

type stringOrNumberArray = (string | number)[]

type Guitarist = {
  name?: string
  active: boolean
  albums: stringOrNumberArray
}

type UserId = stringOrNumber

// Literal Types
let myName: 'Dave'

let userName: 'Dave' | 'John' | 'Amy'
userName = 'Dave'

// Functions

const add = (a: number, b: number): number => {
  return a + b
}

const logMsg = (message: any): void => {
  console.log(message)
}

logMsg('Hello')
logMsg(add(1, 2))

let subtract = function (c: number, d: number): number {
  return c - d
}

// interface mathFunction {
//   (a: number, b: number): number
// }

type mathFunction = (a: number, b: number) => number

let multiply: mathFunction = function (c, d) {
  return c * d
}

logMsg(multiply(2, 10))

// Optional Parameters
const addAll = (a: number, b: number, c?: number): number => {
  if (typeof c !== 'undefined') {
    return a + b + c
  }
  return a + b
}

// Default Param Value
const sumAll = (a: number = 10, b: number, c: number = 2): number => {
  return a + b + c
}

logMsg(addAll(2, 3, 2))
logMsg(addAll(2, 3))
logMsg(sumAll(2, 3))
logMsg(sumAll(undefined, 3))

// Rest Parameters
const total = (a: number, ...nums: number[]): number => {
  return a * nums.reduce((previous, current) => previous + current)
}

logMsg(total(2, 3, 4))

// The never type
const createError = (msg: string): never => {
  throw new Error(msg)
}

const infinite = () => {
  let i: number = 1
  while (true) {
    i++
    if (i > 100) {
      break
    }
  }
}

// Custom type guard
const isNumber = (value: any): boolean => {
  return typeof value === 'number'
}

// Use of the never type
const numberOrString = (value: number | string): string => {
  if (typeof value === 'string') {
    return 'string'
  }
  if (isNumber(value)) {
    return 'number'
  }

  return createError('This should never happen!')
}
