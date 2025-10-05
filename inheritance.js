class Person{
    constructor(name) {
        this.name = name;
    }

    getInformation() {
        console.log(`This person is ${this.name}`);
    }
}

class Professor extends Person {
    constructor(name, teaches) {
        super(name);
        this.teaches = teaches;
    }

    introduceSelf() {
        console.log(`My Name is ${this.name}, and i will be your ${this.teaches} Professor`);
    }
}

const ema = new Professor("ema", "Math");
console.log(ema.getInformation());
console.log(ema.introduceSelf());