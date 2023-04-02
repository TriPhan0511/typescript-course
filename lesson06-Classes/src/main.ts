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
