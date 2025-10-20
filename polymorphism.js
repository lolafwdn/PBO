class Animal {
    speak() {
        console.log("Animal makes a sound");
    }
}

class Dog extends Animal {
    //overiding
    speak() {
        console.log("Dog sound like guk guk");
    }
}

class Cat extends Animal {
    //overiding
    speak() {
        console.log("Cat sound like meow meow");
    }
}

const dog = new Dog();
dog.speak(); 

const cat = new Cat();
cat.speak();