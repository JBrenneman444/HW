///////////////
// SECTION 2
///////////////

// Create an object, called crayonBox, that has a property that is an array. The array should
//  have the names of some crayons. Log one of the elements of that array.
let crayonBox = {
    crayons: ["periwinkle", "onyx", "heathergreen"]
}
console.log(crayonBox.crayons[1])

// Create an object bottle that has a property that is an object: cap.
//  cap can have properties like material: 'metal' or 'plastic', color: blue or white etc. 
// Log one of the properties of that inner object.
let bottle = {
    cap: {
        material: ['metal','plastic'],
        capColor: ['blue', 'white']
    }
}
console.log(bottle.cap.material[1])

// Create an array called receipt that has at least one object in it.
//  The inner objects should be items that have a name and a price.
//  Log one of the properties of that inner object.
let receipt = [{
        name: ['metal','plastic'],
        cost: ['blue', 'white']
    }]
console.log(receipt[0].cost[0])

// Create an array called apartmentBuilding that has an array as one of its elements,
//  the inner array should be the names of the tenants. Log one of the elements of the inner array.
let apartmentBuilding = [
    ["Jacob Brenneman", "Jane Doe", "John Smith"],
    "blue",
    "white"
]
console.log(apartmentBuilding[0][2])

////////////////////////////////////////////////////////////////////
// Combine objects, arrays, and functions more than one level deep
////////////////////////////////////////////////////////////////////

// Create a function KNIT that returns an OBJECT that has the following kinds of properties 
// Log a value of that object
//     (hint: call the function and then call a property on the return value).
function knit() {
    var stuff = {
        item: "scarf",
        size: "6ft"
    }
    return stuff.item
}
console.log(knit())

// Create a function crayonSelector that returns an object that has an array
// (you can reuse your crayonBox object).
// Log one of the elements of that array.
function crayonSelector() {
    return crayonBox.crayons[1]
}
console.log(crayonSelector())

// Create a function powerButton that returns a function called options 
    // - options should console.log a simple message like select a song.
    // Call that inner function
    function powerButton() {
        const options = () => {
            return "select a song"
        }
        return options()
    }
    console.log(powerButton())

// Model a Vending Machine
let vendingMachine = {
    snacks: [
        {name: "Doritos", // position 1
        price: 10},
        {name: "Cheetohs", // position 2
        price: 20},
        {name: "Fritos", // position 3
        price: 30}
    ],
    vend: function(snackPosition) {
        chosenSnack = vendingMachine.snacks[snackPosition]
        return chosenSnack
    }
}
console.log(vendingMachine.vend(1))

// Callbacks

// Make a function add that takes two arguments (numbers) and sums them together
const add = (num1, num2) => {
    let sum = num1 + num2
    return sum
}
console.log(add(1, 2))

// Make a function subtract that takes two arguments (numbers) and subtracts them
const subtract = (num1, num2) => {
    let sum = num1 - num2
    return sum
}
console.log(subtract(5, 3))

// Make a function multiply that takes two arguments and multiplies them
const multiply = (num1, num2) => {
    let sum = num1 * num2
    return sum
}
console.log(multiply(1, 1))

// M*ke a function divide that takes two arguments and divides them
const divide = (num1, num2) => {
    let sum = num1 / num2
    return sum
}
console.log(divide(4, 2))

// Make a function calculate that takes three arguments.
const calculate = (num1, num2, operates) => {
    return operates(num1, num2)
}
console.log(calculate(1, 2, add))
console.log(calculate(9, 5, subtract))
console.log(calculate(2.5, 2, multiply))
console.log(calculate(12, 2, divide))

// Function definition placement
const bar = () => {
    console.log('bar here');
}
bar();

const foo = () => {
    console.log('foo here');
}
foo();

// What is meant by the error(s) this produces?
        // We're asking the console to run foo before it's defined resulting in an error.