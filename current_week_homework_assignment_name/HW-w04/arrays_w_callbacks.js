////////////////////////////////////////////
// Section 3 Array Methods with Callbacks
////////////////////////////////////////////

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0] // FIRST questions

const panagram = ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog'] // SECOND questions

///////////
// Every
///////////

// Determine if every number is greater than or equal to 0
console.log(nums.every(num => num >= 0))

// determine if every word shorter than 8 characters
console.log(panagram.every(word => word.length < 8))

///////////
// Filter
///////////

// filter the array for numbers less than 4
console.log(nums.filter(num => num < 4))

// filter words that have an even length
console.log(panagram.filter(words => words.length % 2 == 0))

///////////
// Find
///////////

// Find the first value divisible by 5
console.log(nums.find(num => num % 5 == 0))
// find the first word that is longer than 5 characters
console.log(panagram.find(words => words.length > 5))

///////////
// Find Index
///////////

// find the index of the first number that is divisible by 3
console.log(nums.findIndex(num => num % 3 === 0))
// find the index of the first word that is less than 2 characters long
console.log(panagram.findIndex(word => word.length < 2))

///////////
// For Each
///////////

// console.log each value of the nums array multiplied by 3
console.log(nums.forEach(num =>  console.log(num * 3)))
// console.log each word with an exclamation point at the end of it
console.log(panagram.forEach(word => console.log(word + '!')))

//////////////////////
// Thought Questions
//////////////////////

// What happened to the original array?
    // it's unchanged 
// Can you store the values from a forEach method in a new array?
    // if so, i cant figure it out... it's meant to iterate over individual items

///////////
// Map
///////////

// make a new array of each number multiplied by 100
const newNums = nums.map((num) => {
    return num * 100
})
console.log(newNums)

// make a new array of all the words in all uppercase
const newWords = panagram.map((words) => {
    return words.toUpperCase()
})
console.log(newWords)

//////////////////////
// Thought Questions
//////////////////////

// What happened to the original array?
    // nums and panagram remain unchanged
// Can you store the values from a map method in a new array?
    // Yes
        // Example 1
        console.log(newNums)
        // Example 2
        console.log(newWords)


///////////
// Some
///////////
// Find out if some numbers are divisible by 7
console.log(nums.some(num => num % 7 == 0))
// Find out if some words have the letter a in them
console.log(panagram.some(words => words.match('a')))