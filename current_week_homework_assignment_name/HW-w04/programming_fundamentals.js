///////////////
// SECTION 1
///////////////

// Write a ~1 sentence summary for each one
    // DRY 
        // -- Don't write redundant code.
    // KISS 
        // -- Keep it simple - no need to overcomplicate things.
    // Avoid creating a YAGNI 
        // -- Don't make things you won't need.
    // Do the simplest thing that could possibly work 
        // -- Go for a simple writing of the code.
    // Don't make me think 
        // -- Go for an intuitive usability.
    // Write code for the maintainer 
        // -- You will forget, and others won't be familiar, so make it clear from the start.
    // Single responsibility principle
        // -- Each thing you create should have one main role.
    // Avoid premature optimization
        // -- Worrying about the small efficiencies versus the function of what you're making will slow you down.
    // Separation of concerns
        // -- Keep like concepts/functions/etc. in their respective places.

// Which ones surprise you (if any)?
    // Avoid premature optimization
        // -- Actually this one was more a revelation for me because it made me realize I do this all the time
        // and it totally slows me down.
// Which one is currently giving you the most struggle?
    // Avoid premature optimization
        // I like to do things right the first time and can become obsessed with finding the 'best' way vs simply
        // creating the basic functional product, first.

// Commenting Code

// declaring a function which takes "1" as a parameter
const f = l => {
    // declares multiple variables
    let es = 0, p = 0, c = 1, n = 0
    // creates a while loop that will run so long as c is less than or equal to the parameter
    // reassigns the value of n to equal the sum of c and p
    // sets an array to equal another array ???
    // adds a ternary operator to es ???
    while (c <= l) {
        n = c + p;
        [c, p] = [n, c] 
        es += (c % 2 === 0) ? c : 0
    }
    // returns es so that's what the function f will return if called
    return es
    }
    console.log(f(55))

const f2 = (limit) => {
    let evenSum = 0;
    let previous = 0;
    let current = 1;
    while (current <= limit) {
        let next = current + previous;
        previous = current;
        current = next;
        if (current % 2 === 0) {
        evenSum += current;
        }
    }
    return evenSum;
    }
    console.log(f2(55))

// In keeping with one of our programming principals (write code for the maintainer): 
// What would have been a more semantic name for this function (hint: this is a problem
// we had for either lab or hw and is considered a classic ) - are there any other 
// variable names or things that would make this code easier to read and understand?
    // Function name: returnEvenSum
    // You could say something like "previousNum" vs just previous.

// If you started a new job and your project was to expand the functionality of this function 
// by allowing a second argument and then based on that second argument, returning the sum of 
// even or odd numbers, which code would you rather start working with f or f2?
    // f2 because I have a clearer understanding of what's happening

// Finally, the 'shorter' code style doesn't use semi-colons, except for the fourth line. 
// Remove this semi-colon! Run the code, is this semi-colon necessary?
    // Yes, without it there is an error (invalid left-hand side in assignment).

