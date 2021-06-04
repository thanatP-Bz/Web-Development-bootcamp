/* class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greeting() {
    console.log(`My ${this.name} and I am ${this.age}`);
  }
}

module.exports = Person; */

class Code {
  constructor(name, code) {
    this.name = name;
    this.code = code;
  }

  report() {
    console.log(`My ${this.name} my code number is ${this.code}`);
  }
}

module.exports = Code;
