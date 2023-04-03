"use strict";
class Coder {
    constructor(name, music, age, lang = 'Typescript') {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    getAge() {
        return `Hello, I'm ${this.age}`;
    }
}
const dave = new Coder('Dave', 'Rock', 42);
console.log(dave.getAge());
// console.log(dave.age) // Error
// console.log(dave.lang) // Error
class WebDev extends Coder {
    constructor(computer, name, music, age) {
        super(name, music, age);
        this.computer = computer;
        this.computer = computer;
    }
    getLang() {
        return `I write ${this.lang}`;
    }
}
const sara = new WebDev('Mac', 'Sara', 'Lofi', 25);
console.log(sara.getLang());
class Guitarist {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} ${action} ${this.instrument}`;
    }
}
const page = new Guitarist('Jimmy', 'guitar');
console.log(page.play('strums'));
// //////////////////////////////////////////////////////////////////////////
class Peeps {
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
    }
}
Peeps.count = 0;
const john = new Peeps('John');
const steve = new Peeps('Steve');
const amy = new Peeps('Amy');
console.log(Peeps.count);
console.log('john.id', john.id);
console.log('steve.id', steve.id);
console.log('amy.id', amy.id);
// //////////////////////////////////////////////////////////////////////////
class Bands {
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    set data(value) {
        if (Array.isArray(value) && value.every((e) => typeof e === 'string')) {
            this.dataState = value;
            return;
        }
        else {
            throw new Error('Param is not an array of strings.');
        }
    }
}
const myBands = new Bands();
myBands.data = ['Neil Young', 'Led Zep'];
console.log(myBands.data);
myBands.data = [...myBands.data, 'ZZ Top'];
console.log(myBands.data);
myBands.data = ['Van Halen', 5544];
