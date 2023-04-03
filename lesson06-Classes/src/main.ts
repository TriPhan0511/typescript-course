class Coder {
  secondLang!: string

  constructor(
    public readonly name: string,
    public music: string,
    private age: number,
    protected lang: string = 'Typescript'
  ) {
    this.name = name
    this.music = music
    this.age = age
    this.lang = lang
  }

  public getAge() {
    return `Hello, I'm ${this.age}`
  }
}

const dave = new Coder('Dave', 'Rock', 42)
console.log(dave.getAge())
// console.log(dave.age) // Error
// console.log(dave.lang) // Error

class WebDev extends Coder {
  constructor(public computer: string, name: string, music: string, age: number) {
    super(name, music, age)
    this.computer = computer
  }

  getLang() {
    return `I write ${this.lang}`
  }
}

const sara = new WebDev('Mac', 'Sara', 'Lofi', 25)
console.log(sara.getLang())
// console.log(sara.age) // Error
// console.log(sara.lang) // Error
// //////////////////////////////////////////////////////////////////////////

interface Musician {
  name: string
  instrument: string
  play(action: string): string
}

class Guitarist implements Musician {
  name: string
  instrument: string

  constructor(name: string, instrument: string) {
    this.name = name
    this.instrument = instrument
  }

  play(action: string): string {
    return `${this.name} ${action} ${this.instrument}`
  }
}

const page = new Guitarist('Jimmy', 'guitar')
console.log(page.play('strums'))
// //////////////////////////////////////////////////////////////////////////

class Peeps {
  static count: number = 0

  static getCount(): number {
    return Peeps.count
  }

  public id: number

  constructor(public name: string) {
    this.name = name
    this.id = ++Peeps.count
  }
}

const john = new Peeps('John')
const steve = new Peeps('Steve')
const amy = new Peeps('Amy')

console.log(Peeps.count)

console.log('john.id', john.id)
console.log('steve.id', steve.id)
console.log('amy.id', amy.id)
// //////////////////////////////////////////////////////////////////////////

class Bands {
  private dataState: string[]

  constructor() {
    this.dataState = []
  }

  public get data(): string[] {
    return this.dataState
  }

  public set data(value: string[]) {
    if (Array.isArray(value) && value.every((e) => typeof e === 'string')) {
      this.dataState = value
      return
    } else {
      throw new Error('Param is not an array of strings.')
    }
  }
}

const myBands = new Bands()
myBands.data = ['Neil Young', 'Led Zep']
console.log(myBands.data)
myBands.data = [...myBands.data, 'ZZ Top']
console.log(myBands.data)

myBands.data = ['Van Halen', 5544]
