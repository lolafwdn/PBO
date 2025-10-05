class Animal {
    constructor(name, type) {
    this.name = name;
    this.type = type;
    }

    makeSound() {
        return `${this.name} berbunyi  ${this.type}`;
    }
}

let animal =  new Animal("singa", "mengaum");

console.log(animal.makeSound());