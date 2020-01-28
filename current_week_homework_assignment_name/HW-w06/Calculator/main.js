var firstNumber, secondNumber;

$(() => {
const handleButtonClick = event => {
    const buttonValue = $(event.target).text();
    const inputNumbersValue = $(".inputNumbers").text();
    console.log($(event.target).text())

    // find out if button is number or command
    const buttonType = $(event.target).attr("class");
    if (buttonType === "grid-item clickable") {
        $(".inputNumbers").text(`${inputNumbersValue}${buttonValue}`)
    } else if (buttonType === "grid-item clickable commands") {
        // one way to do it:
        // if ($(event.target).attr("id") === "add") {
        // another way:
        if (buttonValue === "+") {
            console.log("Plus button clicked");
            // ternary:
            // firstNumber ? alert("Number already defined") : firstNumber = displayValue;
            // if (firstNumber) {
            // alert("Number already defined");
            // } else {
            // firstNumber = displayValue;
            // $(".display").text("");
            // }
        } else if (buttonValue === "-") {
            console.log("Minus button clicked");
        } else if (buttonValue === "=") {
            // add, subtract, divide, or multiply and return answer:
        }
    } else {

    }

} // end of handleButtonClick

    $(".clickable").on("click", handleButtonClick);
})



// Think about how you are going to store the state of the calculator. What kind of information do you need to track?
        //trackClickedNumber
        //trackClickedCommand
        //trackNextClickedNumber
        //trackAllThree
        //computeAllThree

// Try not to use a separate event handler for each button. With $(event.currentTarget) you could use just one event handler for the numbers by grabbing the text from the clicked element.

// GOTCHA event.currentTarget is a vanilla JS object. To make it into a jQuery object, you must 'wrap it in money' $(event.currentTarget) if you would like to use jQuery functions on what you are trying to target.

// DELIVERABLES
// A user should be able to select numbers so that they can do things with them.
// A user should be able to add numbers together.
// A user should be able to subtract numbers.
// A user should be able to divide numbers.
// A user should be able to multiply numbers together.
// A user should be able to see the output.

// Hungry for more?
// A user should be able to clear all operations and start from 0.

// EASY EXTRAS:
    // Change CSS for HIGHLIGHT
    // Change CSS for CLICK