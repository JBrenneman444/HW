
class Hamster {
    constructor(hamsterName) {
        this.owner = "";
        this.name = hamsterName;
        this.price = 15;
    }
    wheelRun() {
        console.log("squeak squeak")
    }
    eatFood() {
        console.log("nibble nibble")
    }
    getPrice() {
        return this.price
    }
}

class Person {
    constructor(name) {
        this.name = "";
        this.age = 0;
        this.height = 0;
        this.weight = 0;
        this.mood = 0;
        this.hamsters = [];
        this.bankAccount = 0;
    }

    getName() {
        return this.name;
    }
    getAge() {
        return this.age
    }
    getWeight() {
        return this.weight
    }
    greet() {
        console.log(`Hello there ${Person.name}!`)
    }
    eat() {
        this.weight += 1;
        this.mood += 1;
    }
    exercise() {
        this.weight -= 1;
    }
    ageUp() {
        this.age += 1;
        this.height += 2;
        this.weight += 5;
        this.mood -= 3;
        this.bankAccount += 10;
    }
    buyHamster(hamster) {
        this.hamsters.push(hamster);
        this.mood += 10;
        this.bankAccount -= hamster.getPrice();
    }
}

let person1 = new Person("Timmy")

person1.ageUp()
person1.ageUp()
person1.ageUp()
person1.ageUp()
person1.ageUp()
console.log(person1)

// Have him eat five times.
person1.eat();
person1.eat();
person1.eat();
person1.eat();
person1.eat();

// Have him exercise five times
person1.exercise();
person1.exercise();
person1.exercise();
person1.exercise();
person1.exercise();

// Age Timmy 9 years -- NOTE: wasn't sure if this meant TO 9 years old or 9 additional years..
person1.ageUp()
person1.ageUp()
person1.ageUp()
person1.ageUp()
console.log(person1)

// Create a hamster named "Gus"
let hamster1 = new Hamster("Gus");
console.log(hamster1)

// Set Gus's owner to the string "Timmy"
hamster1.owner = "Timmy"

// Have Timmy "buy" Gus
person1.buyHamster(hamster1);

// Age Timmy 15 years
person1.ageUp()
person1.ageUp()
person1.ageUp()
person1.ageUp()
person1.ageUp()
person1.ageUp()

// Have Timmy eat twice
person1.eat();
person1.eat();

// Have Timmy exercise twice
person1.exercise();
person1.exercise();
console.log(person1)