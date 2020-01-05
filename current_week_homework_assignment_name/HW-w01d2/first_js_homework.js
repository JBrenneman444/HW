// SECTION 1

// 1. DRY stands for "Don't repeat yourself" We should pay 
// attention to it because it's a good way to organize code
//  and also to make it run efficiently. There are various 
//  tools to help write DRY code, like functions in JS and 
//  classes in CSS.

// 2. While similar, there is a time for each of them. VAR,
// for instance, can be re-declared and updated, whereas LET
// is block-scoped, cannot be re-declared, so you don't run 
// the risk of accidentally redefining a variable. Finally, 
// CONST cannot be updated or redeclared.

// ////////////////////////////////////////////////////////
// SECTION 2

const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kelvin';
const f = false;

// INSTRUCTIONS
// Using the provided variable definitions, replace the blanks
//  (underscores) with a mathematical or boolean operator that
//  evaluates the expression to TRUE (some may have more than 
// one right answer, just choose one)

// Test your answers by using console.log for each expression in your answer file.

console.log(a < b)
console.log(c > d)
console.log('Name' == 'Name')
console.log(a + b == c)
console.log(a * a == d)
console.log(e !== 'Kevin')
console.log(48 !== '48')
console.log(f !== e)

// INSTRUCTIONS: Set a new variable g to 0
var g = 0
console.log(g)

// INSTRUCTIONS: Then set the variable g to be equal to b + c
var g = b + c
console.log (g)

// Why did you choose the one you chose?
//  I chose var so I could redefine it and not worry about the block scope.

// What happens if you don't use const , let or var? Do you get an error? If so what does it say?
//  For CONST, it says the identifier has already been declared.
//  Same thing for LET.

// what happens if you write 10 = g?
//  It says it's an invalid left-hand argument
//  whereas g = 10 DOES work.

// Bonus Challenge (optional):
//  INSTRUCTIONS: Use > , < and === only to make true statement.

console.log(a < (b || f) === !f && e !== c)

// ////////////////////////////////////////////////////////
// SECTION 3

// INIFNITE LOOP 1: Is the code below an infinite loop? Why or why not?
//  Yes, it is an infinite loop, because there is nothing changing 
//  the true value to untrue later in the code, such as i++, which wouldn't
//  even be enough because there isn't even an i == true condition.

// INIFNITE LOOP 2: Is the code below an infinite loop? Why or why not?
//  Yes, it is an infinite loop because you cannot change a const variable
//  later on AND even if you could.. It would only change the value of the
//  variable, but does that necessarily make the loop stop running? I don't know.
//  I'm also not sure it will run the console log message if there's an error
//  present.

let letters = "A";
let i = 0;
// starts a while loop that will run as long as i is less than 20
while (i < 20) {
    // ADDS one "A" to the letters var
    letters += "A";
    // ADDS one to the i var
	i++;
}
// Will show the final value of letters, which should be have 20 "A"s.
console.log(letters);

// AFTER running the code, I realized I forgot letters ALREADY had one
// "A" meaning it would have 21 "A"s when you run the code instead of 20.

// ////////////////////////////////////////////////////////
// SECTION 4

// Question: A for loop performs the same operation as a while loop. But 
// what are the key differences, if any? What are the similarities?
//  FOR loops are good, if you know how many times you'd like something to run,
//  whereas WHILE loops allow more flexibility but will continue running no matter
//  what until the condition is no longer true. FOR loops also require you to create
//  a new variable in the loop, whereas WHILE loops dovnot.

// FOR LOOP control panel
// The FIRST part of the control panel is: the initial value of the variable.
// The SECOND part of the control panel is: the condition for the loop.
// The THIRD part of the control panel is: how much to adjust the variable
// each time you run it.

// FOR LOOP II - Write a for loop that console.log's the numbers 0 to 999.
for (i = 0; i < 1000; i++) {
    console.log(i);
}

// BONUS: The backslash allows you to put an apostratphe or other similar
// character in the string without it thinking the string should end there.

// FOR LOOP III - IN REVERSE
for (i = 999; i >= 0; i--) {
    console.log(i);
}

// MORE COUNTING
// Write a for loop that uses string concatenation
// to send a message to the console as well
//  as the current value of i.

// The loop should run from 1 to 10.
for (i = 1; i <= 10; i++) {
    console.log("The value of i is: " + i + " of 10")
}

for (i = 1; i <= 10; i++) {
    console.log(`The value of i is: $(i) 
    of 10`);
}
// Didn't work and can't figure out why.. needed to move on, due to time.

// ITERATION
// INSTRUCTIONS: Print each element to the console.
const StarWars = ["Han", "C3PO", "R2D2", "Luke", "Leia", "Anakin"];

for (i = 0; i < StarWars.length; i++) {
    console.log(StarWars[i])
}

for (i = 0; i < StarWars.length; i++) {
    console.log(StarWars[i] + " " + i + " ")
}

// Figure out how to iterate over every second element of the StarWars
//  array, starting with the first element

for (i = 0; i < StarWars.length; i++) {
    if (i == 0 || i == 2 || i == 4) {
    console.log(StarWars[i])
    }
}

// ////////////////////////////////////////////////////////
// SECTION 5

