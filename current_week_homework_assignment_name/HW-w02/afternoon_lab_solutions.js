////////////////////
// EASY DOES IT

// 1.
let quotes = ["C\'est la vie", "Life is like a box of chocolates",
 "Do or do not, there is no try"]

 console.log(quotes)

// RANDOM
 const randomThings = [1, 10, "Hello", true]

 // 1.
 randomThings[0]
 // 2.
 randomThings[2] = "World"
 // 3.
 console.log(randomThings)

//  WE'VE GOT CLASS
const ourClass = ["Outrun", "Zoom", "Github", "Slack"]
// 1. What would you write to access the 3rd element of the array?
ourClass[2]
// 2. Change the value of "Github" to "Octocat"
ourClass[2] = "Octocat"
// 3. Add a new element, "Cloud City" to the array.
ourClass.push("Cloud City")

// MIX IT UP
// 4. Given the following array 
const myArray = [5 ,10 ,500, 20]
// 5. using the push method, add the string "Egon" to the end of the array.
myArray.push("Egon")
// 6. using a method, remove the string from the end of the array.
myArray.pop("Egon")
// using the unshift method, add the string "Bob Marley" to the beginning of the array
myArray.unshift("Bob Marley")
// using a different method, remove the string from the beginning of the array
myArray.shift("Bob Marley")
// use the reverse method on this array
myArray.reverse()

// BIGGIE SMALLS
// Write an if..else statement that iterates over the myArray array declared above:

// 1. console.log "little number" if the number is entered is less than 100
// 2. If the number entered is 100 or more, alert "big number".
for (i=0;i<4;i++) {
if (myArray[i]<100) {
    console.log("little number")
} else {
    // alert("big number"); // not sure why this isn't working.. is it because I'm
                            // in the terminal?
}
}

// MONKEY IN THE MIDDLE
// Write an if...else if...else statement:

// 1. console.log "little number" if the number entered is LESS than 5.
// 2. If the number entered is MORE than 10, log "big number".
// 3. Otherwise, console.log "monkey".
for (i=0;i<4;i++) {
    if (myArray[i]<5) {
        console.log("little number")
    } else if (myArray[i]>10) {
        console.log("big number")
    }
    else {
        console.log("monkey")
    }
    }

    // WHATS IN YOUR CLOSET
    const kristynsCloset = [
        "left shoe",
        "cowboy boots",
        "right sock",
        "GA hoodie",
        "green pants",
        "yellow knit hat",
        "marshmallow peeps"
      ];
      
      // Thom's closet is more complicated. Check out this nested data structure!!
      const thomsCloset = [
        [
          // These are Thom's shirts
          "grey button-up",
          "dark grey button-up",
          "light blue button-up",
          "blue button-up",
        ],[
          // These are Thom's pants
          "grey jeans",
          "jeans",
          "PJs"
        ],[
          // Thom's accessories
          "wool mittens",
          "wool scarf",
          "raybans"
        ]
        ];
// What's Kristyn wearing today? Using bracket notation to access items in 
// kristynsCloset, log the sentence "Kristyn is rocking that " + the third item
// in Kristyn's closet + " today!" to the console.
console.log("Kristyn is rocking that " + kristynsCloset[2] + " today!")
// Kristyn can't find her left shoe. Remove this item from her closet and save it to a variable named kristynShoe.
kristynsCloset.shift()
// Kristyn just bought some sweet shades! Add "raybans" to her closet after "yellow knit hat".
kristynsCloset.splice(5, 0, "raybans")
// Kristyn spilled coffee on her hat... modify this item to read "stained knit hat" instead of yellow.
kristynsCloset[4] = "stained knit hat"
// Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirts array.
console.log(thomsCloset[0][0])
// In the same way, access one item from Thom's pants array.
console.log(thomsCloset[1][2])
// Access one item from Thom's accessories array.
console.log(thomsCloset[2][2])
// Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"
console.log("Thom keeps it real with: " + "a " + thomsCloset[0][0] + " " + thomsCloset[1][2] + " and " + thomsCloset[2][2])
// Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas.
thomsCloset[2][2] = "footie pajamas"

// HFM (Hungry for More - Optional Bonus Exercises)

