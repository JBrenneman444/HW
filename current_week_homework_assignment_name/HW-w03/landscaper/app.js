var submitButtonListener = document.getElementById('smallSubmit');
var scrollingDiv = document.getElementById("bigTextArea");
var userInput = '';
let timerOn = false;
var userOptions = '';

var tools = [
    {
        name: "teeth",
        toolEarnings: 1,
        toolCost: 0
    },
    {
        name: "scissors",
        toolEarnings: 5,
        toolCost: 5
    },
    {
        name: "pushMower",
        toolEarnings: 50,
        toolCost: 25
    },
    {
        name: "lawnMower",
        toolEarnings: 100,
        toolCost: 250
    },
    {
        name: "students",
        toolEarnings: 250,
        toolCost: 500
    }
]

var player = { // default values
    userName: "",
    totalEarnings: 0,    
    currentTool: tools[0],
    currentCapacity: 1
  // attribute for how many tools player can carry/use
}

var gameState = {
    currentSequence: "startSequence0A", // (startSequence0A, mainGame, WIN, GAME OVER)
    lawnsMowed: 0,
    winAmount: 1000
    // COUNT of TURNS ?? turnCounter
    // TIMER ?? gameTimer
}

// USER-TRIGGERED FUNCTION(S)

// ISAIAH HELPED HERE:
        // don't understand (event) syntax
        // and why (!event) / what exactly that returns ??
const storeInput = (event) => { // stores whatever is entered into wideInput AND is called by EVENT LISTENER
  if (!event) return;
  userInput = document.getElementById('wideInput').value;
  console.log("User entered: " + userInput);
  document.getElementById("wideInput").value = ''; // clears input field
  document.getElementById('bigTextArea').innerHTML += '<br>';
  document.getElementById('bigTextArea').innerHTML += '<font class=user>' +  userInput + '</font>';
  
  // this is the function that will move through the various Sequences and prompts/questions
  checkInput();

  // scrolls to bottom of the div, as div tracks additions to bigTextArea
  scrollingDiv.scrollTop = scrollingDiv.scrollHeight;
}

// ISAIAH HELPED HERE:
        // don't understand (event) syntax
        // this HAS to come after storeInput is declared, since it refers to storeInput
submitButtonListener.addEventListener('click', function(event) {
    event.preventDefault(); // prevents HTML from doing weird shit (???)
    storeInput(event);
  });

// AUTOMATIC FUNCTIONS
var startGame = () => {
// sets player stats (especially, if a game reset)
// gives player starting tool
// does NOT need to give player new name, if one is already in there
    player = {
        totalEarnings: 0, // test value
        currentTool: tools[0]
    };
console.log("Players totalEarnings are: " + player.totalEarnings); // test

// change Avatar
    document.getElementById("avatarPic").style.backgroundImage = "url('./images/simonsCustomer.png')";

// allows ENTER key to trigger INPUT FIELD
var enterKeyForInput = document.getElementById("wideInput");
enterKeyForInput.addEventListener("keyup", function(event) {
  event.preventDefault();
  if (event.keyCode === 13) {
    storeInput(event);
  }
});
 
// set up first prompt/question, after Welcome Screen
var renderedText = document.getElementById("bigTextArea")
    renderedText.innerHTML = `
        <font class=PC>The timer will start when you are ready.<br>
        <br>Are you ready to play?</font>
        `;
    userOptions = "<font class=userPrompt>(Yes or No)</font>";
    renderedText.innerHTML += userOptions;

// UPDATE totalMoney AND unlockedItems
    updateMoney();
    updateItems();

}; // END OF startGame
setTimeout(startGame, 0800); // change to 3000 when finished


// EVENT TRIGGERED FUNCTIONS
var updateMoney = () => {
    const renderMoney = document.querySelector('.totalMoney');
    renderMoney.innerHTML = `${player.totalEarnings}`;
    // if (player.totalEarnings >= 1000) {
    //   document.querySelector('bigTextArea').innerHTML =
    //   `<h2> You did it! You won!</h2>`;
 
    // }
  };

var updateItems = () => {
    const renderItem1 = document.querySelector('.teethPic');
    const renderItem2 = document.querySelector('.scissorsPic');
    const renderItem3 = document.querySelector('.pushPic');
    const renderItem4 = document.querySelector('.mowerPic');
    const renderItem5 = document.querySelector('.studentPic');
    renderItem1.style.backgroundImage = "url('./images/wallet.png')";
    renderItem2.style.backgroundImage = "url('./images/unlockedItem.png')";
    renderItem3.style.backgroundImage = "url('./images/unlockedItem.png')";
    renderItem4.style.backgroundImage = "url('./images/unlockedItem.png')";
    renderItem5.style.backgroundImage = "url('./images/unlockedItem.png')";
};

var newText = (str) => {
    document.getElementById("bigTextArea").innerHTML += `<br>${str}`; // <> within "quotes"
}

var newTextNoSpace = (str) => {
    document.getElementById("bigTextArea").innerHTML += `${str}`; // <> within "quotes"
}

var checkInput = () => {
    console.log("The current sequence is: " + gameState.currentSequence);
    if (gameState.currentSequence == "startSequence0A") {
        if (userInput == "Yes" || userInput == "yes" || userInput == "Y" || userInput == "y") { // add AND STATE == "1A", etc.
            timerOn = true;
            newText(`Great! The timer has begun.<br>
            <br>
            What's your name?`);
            console.log(`The timer is now on: ` + timerOn);
            gameState.currentSequence = "1A";
            console.log("The current sequence is: " + gameState.currentSequence);
        } else if (userInput == "No" || userInput == "no" || userInput == "N" || userInput == "n") {
            newText('User is NOT ready');
        } else {
            newText(userInput + ` is not an option.<br>
            <br>Are you ready to play?<br>
            <font class=userPrompt>(Yes or No)</font>`);
        }
    } else if (gameState.currentSequence == "1A") {
        if (userInput == "Jake") {
            player.userName = userInput;
            newText(`Hello <font color=aqua>` + player.userName + `</font> - you are the greatest 
                player who has ever played. Very magnificent. Much greater than Obama.<br>`);
            console.log(`The user's name is: ` + player.userName);
            newText(`Here are your instructions:<br>`);
            setTimeout(function() { newText(`<font class=instructions>WELCOME to the LANDSCAPER GAME<br><br>
                - You are starting a landscaping
                business. Use your tools to earn more money!<br><br></font>
                <font class=PC>Next?</font><br>
                <font class=userPrompt>(Yes or No)</font>`); }, 3000);
            setTimeout(function() {scrollingDiv.scrollBy(0, 50); }, 3000);

            // - To start, the only tool you have are your teeth. Using your tools, you can spend the 
            //     day cutting lawns and make money.<br><br>
            // - You WIN the game when you have a team of starving students helping AND $1,000.<br><br>
            
            gameState.currentSequence = "1B";
        } else {
            player.userName = userInput;
            newText(`<font color=aqua>` + player.userName + `</font>, huh? That's an okay name. Jake sounds better, though.`);
            console.log(`The user's name is: ` + player.userName);
            gameState.currentSequence = "1B";
        }
    } else if (gameState.currentSequence == "1B") {

    } else {

    }
};


//////////////////////////////////////////
////////////////////////////////////////////
/////////// PSEUDO CODE BELOW: ///////////////
////////////////////////////////////////////
//////////////////////////////////////////

//////////////////////////////////////////////
// ACTUAL GAME TIMELINE
///////////////////////

//startGame executes (from bottom of app.js file via DOMContentLoaded)

// Q1 -- Are you ready? (timer will begin)
    // --Computer acknowledges they said YES
        // --Computer activates next question
    // --if USER says NO
        // --Computer says to press any key when they're ready




///////////////////////
// END of GAME TIMELINE
//////////////////////////////////////////////


// Q2 -- What's your name?
    // --If USER's name is Jake -- start with $100
    // --if userName is EMPTY -- ask for name and start with $0

// Q3 -- Give instructions to User


//////////////////////////////
/////// GAME TIMELINE ////////
//////////////////////////////

// START PHASE
// --Intro Questions / Instructions

// GAME PHASE
// --User starts with Teeth / makes $1 each mow
// --User can then start buying new tools with money

// WIN PHASE
// --User wins game when they reach $____. Given chance to Reset

//////////////////////////////
/////////// TO DO ////////////
//////////////////////////////

// THINGS to CREATE
// User input functionality / TEXT PROMPTS
// BUY / SELL
// --Implement TIMER?
// --EXIT BUTTON - Allows user to close the window OR reset the game

// IF TEETH is CURRENT TOOL, allow User to MOW
// MOWING with TEETH will add $1

// DELIVERABLES
// The ability to buy tools and use the new tool
// The ability to win the game and end it