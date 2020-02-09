var firstNumber, secondNumber, operation;
$(() => {
  const handleButtonClick = event => {
    const buttonValue = $(event.target).text();
    const displayValue = $(".display").text();
    // Find out if button is button-container or operations-container
    // (Number or operator)
    const buttonType = $(event.target)
      .parent()
      .attr("class");
    if (buttonType === "button-container") {
      $(".display").text(`${displayValue}${buttonValue}`);
    } else {
      // if an operations button is clicked:
      // detect which operation:
      // one way to do it:
      // if ($(event.target).attr("id") === "add") {
      // another way:
      if (buttonValue === "+") {
        console.log("Plus button clicked");
        // ternary:
        // firstNumber ? alert("Number already defined") : firstNumber = displayValue;
        if (firstNumber) {
          alert("Number already defined");
        } else {
          firstNumber = displayValue;
          $(".display").text("");
        }
      } else if (buttonValue === "-") {
        console.log("Minus button clicked");
      } else if (buttonValue === "=") {
        // add, subtract, divide, or multiply and return answer:
      }
    }
  };
  console.log("Javascript + jQuery has loaded");
  // All your code goes here:
  $(".button").on("click", handleButtonClick);
});