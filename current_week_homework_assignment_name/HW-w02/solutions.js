// 1. The parameter is the local scope variable in the parenthesis in the declaration
// of the function. THe argument is the input you put within the parameter.

// 2. Return actually immediately returns the value within the function, whereas 
// console log prints it to the console/terminal. For this reason, you can actually
// refer to a function within a mathematical equation from another variable/etc. ONLY
// if the function uses return rather than console log.

// PALINDROME
const checkPalindrome = (stringy) => {
    console.log("argument: " + stringy)
    let lowerString = stringy.toLowerCase()
    console.log("lowercase: " + lowerString)
    let newString = lowerString.split("").reverse().join("")
    console.log("reversed: " + newString)
    if (lowerString == newString) {
        return true
        console.log("true");
    } else {
        return false
        console.log("false")
    }
}
console.log(checkPalindrome("Radar"));
console.log(checkPalindrome("Borscht"));

/////////////////////////////////////////////

// // SUM ARRAY
// The function should return the sum of the numbers in the array. 
// Use a for loop within the function to iterate over the array and sum the contents.
let sum = 0;
sumArray = (array) => {
    for (i=0;i<6;i++) {
    // sum + array first element, second element, etc.
    sum = sum + array[i]
    // 0 = 0 + 1
    // repeat
}
return sum
}
console.log(sumArray([1, 2, 3, 4, 5, 6]));

// PRIME NUMBERS
    // test as far as the square root of that number
    // Example: console.log(Math.sqrt(4))

// Step ONE
const checkPrime = num => {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      // if the number is evenly divisible by the current loop
      if (num % i === 0) {
        // that means the number is NOT prime, so return false to terminate the loop
        return false;
      }
    }
    // if the for loop never returns false, it's not evenly divisible by any number  from 2 to the square root, so it must be prime
    console.log(num + " is a prime number");
    return true;
  };
  console.log(checkPrime(5));

// Step Two
    // first, set LIMIT
    // then, checkPrime for each number up to that limit
printPrimes = (limit) => {
    for (i=2;i<=limit;i++) {
        // if the number is PRIME
        if (checkPrime(i) == true) {
            // log checkPrime
            } else {
            }
    }
}
console.log(printPrimes(97))

// ROCK PAPER SCISSORS

randomMove = () => {
    let move = Math.floor(Math.random() * 10)
    if (move <= 3.33) {
        return "rock"
    } else if (move > 3.33 && move <= 6.66) {
        return "paper"
    } else {
        return "scissors"
    }
}

// RULES: rock beats scissors, scissors beats paper, paper beats rock.

// Then create a function called rockPaperScissors that runs one round of the game.
// It should accept two arguments, the computer's move and the user's move, and
// somehow compare the two to decide who the winner is and return who won.

let cpuMove = randomMove();
console.log("CPU chose: " + cpuMove)

let playerMove = randomMove();
console.log("Player chose: " + playerMove)

// somehow compare the two to decide who the winner is and return who won
rockPaperScissors = (cpuMove, playerMove) => {
    if ((cpuMove == "paper" && playerMove == "paper") ||
        (cpuMove == "rock" && playerMove == "rock")   ||
        (cpuMove == "scissors" && playerMove == "scissors")
    ) {
        return "Tie!"
    } else if 
       ((cpuMove == "paper" && playerMove == "rock") ||
        (cpuMove == "rock" && playerMove == "scissors")   ||
        (cpuMove == "scissors" && playerMove == "paper")
    ) {
        return "CPU wins!"
    } else if 
        ((cpuMove == "rock" && playerMove == "paper") ||
        (cpuMove == "scissors" && playerMove == "rock")   ||
        (cpuMove == "paper" && playerMove == "scissors")
    ) {
        return "Player wins!"
    } else {
        return "What happened there?"
    }
}
console.log(rockPaperScissors(cpuMove, playerMove))

