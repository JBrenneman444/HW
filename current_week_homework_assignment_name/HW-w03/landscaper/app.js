// LISTENERS
var submitButtonListener = document.getElementById('smallSubmit');
var landscapeListener = document.getElementById('landscapeClicker');
let toolStoreListener = document.getElementById('toolStoreClicker');
let exitListener = document.getElementById('exitClicker');
var teethListener = document.querySelector(".tool0");
var scissorsListener = document.querySelector(".tool1");
var pushListener = document.querySelector(".tool2");
var ridingListener = document.querySelector(".tool3");
var studentsListener = document.querySelector(".tool4");

// OTHER VARIABLES
var scrollingDiv = document.getElementById("bigTextArea");
var userInput = '';
let timerOn = false;
var userOptions = '';
let beatGame = false;
let storeCurrentSequence = "";


var tools = [
    {
        name: "Teeth",
        toolEarnings: 1,
        toolCost: 0,
        purchased: true
    },
    {
        name: "Scissors",
        toolEarnings: 5,
        toolCost: 5,
        purchased: false
    },
    {
        name: "a Push Mower",
        toolEarnings: 50,
        toolCost: 25,
        purchased: false
    },
    {
        name: "a Riding Mower",
        toolEarnings: 100,
        toolCost: 250,
        purchased: false
    },
    {
        name: "a Team of Students",
        toolEarnings: 250,
        toolCost: 500,
        purchased: false
    }
]

var player = { // default values
    userName: "",
    totalEarnings: 0,    
    currentTool: tools[0],
    currentLocation: "",
        // POSSIBLE USER LOCATIONS
            // atWork
            // atToolStore
            // goingHome
    workedBefore: false,
    currentCapacity: 1,
  // attribute for how many tools player can carry/use
}

var gameState = {
    currentSequence: "startSequence0A",
    lawnsMowed: 0,
    winAmount: 1000
    // COUNT of TURNS ?? turnCounter
    // TIMER ?? gameTimer
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////
// USER-TRIGGERED FUNCTION(S)

const storeInput = (event) => { // stores whatever is entered into wideInput AND is called by EVENT LISTENER
    if (!event) return;
    userInput = document.getElementById('wideInput').value;
    console.log("User entered: " + userInput);
    document.getElementById("wideInput").value = ''; // clears input field
    document.getElementById('bigTextArea').innerHTML += '<br>';
    document.getElementById('bigTextArea').innerHTML += '<font class=user>' +  userInput + '</font>';
  
    // this is the function that will move through the various Sequences and prompts/questions
    checkInput();

    // scrolls to bottom of div, as additions are made to bigTextArea from storeInput function
    scrollingDiv.scrollTop = scrollingDiv.scrollHeight;
}

// listens for smallSubmit to be CLICKED
submitButtonListener.addEventListener('click', function(event) {
    event.preventDefault(); // prevents HTML/form from firing TWICE
    storeInput(event);
  });

// listens for the LANDSCAPING SIGN IMAGE to be CLICKED
landscapeListener.addEventListener('click', clickLandscape);
function clickLandscape() {
    if (beatGame == false) {
        if (gameState.currentSequence == "2A" && player.workedBefore == false) { // would change if adding capacity for MULTIPLE TOOLS
            player.workedBefore = true;
            changeAvatarToCustomer();
            let currentToolEarnings = player.currentTool.toolEarnings 
            player.totalEarnings += currentToolEarnings; 
            newText(`Thanks for cutting my lawn!<br>`);
            newText(`<font class=user>
            ${player.userName} <font class=PC>made</font> <font class=money>$${currentToolEarnings}</font><font class=PC>!</font>
            </font>
            `)
            scrollingDiv.scrollTop = scrollingDiv.scrollHeight;
            updateMoney();
            checkIfWon();
        } else if (gameState.currentSequence == "2A" && player.workedBefore == true) {
            if (player.currentLocation !== "atWork") {
                changeAvatarToCustomer();
                let currentToolEarnings = player.currentTool.toolEarnings 
                player.totalEarnings += currentToolEarnings; 
                newText(`Thanks again!<br>`);
                newText(`<font class=user>
                ${player.userName} <font class=PC>made</font> <font class=money>$${currentToolEarnings}</font><font class=PC>!</font>
                </font>
                `)
                scrollingDiv.scrollTop = scrollingDiv.scrollHeight;
                console.log("currentLocation is: " + player.currentLocation)
                updateMoney();
                checkIfWon();
            } else {
            let currentToolEarnings = player.currentTool.toolEarnings 
            player.totalEarnings += currentToolEarnings; 
            newText(`<font class=user>
            ${player.userName} <font class=PC>made</font> <font class=money>$${currentToolEarnings}</font><font class=PC>!</font>
            </font>
            `)
            scrollingDiv.scrollTop = scrollingDiv.scrollHeight;
            updateMoney();
            checkIfWon();
            }
        } else {

        }
    } else {
    
    }
}

// listens for the TOOL STORE IMAGE to be CLICKED
toolStoreListener.addEventListener('click', clickToolStore);
function clickToolStore() {
    if (beatGame == true) {
        if (gameState.currentSequence == "2A" && player.currentLocation !== "atToolStore") {
            changeAvatarToWorker(); // turns location to atToolStore
            newText(`<br>Looks like you got yourself a member's badge!<br>
            <br>You sure like to cut lawns.<br>
            <br>Why don't you take this <font class=instructions>tool belt</font>?<br><br>`)
                // once multiple tool functionality added --> <font class=userPrompt>(You may now use <font class=instructions>two tools at once</font>.)<br><br></font>`);
            scrollingDiv.scrollTop = scrollingDiv.scrollHeight;
            updateMoney();
    } else {
        if (gameState.currentSequence == "2A" && player.currentLocation !== "atToolStore") { // would change if adding capacity for MULTIPLE TOOLS
            changeAvatarToWorker(); // turns location to atToolStore
            newText(`<br>Hey there,<br>
            <br>Name's Bob!<br>
            <br>Hmm. I see you ain't a member, yet...<br>
            <br>Why don'tcha come back 'ere when ya getcha self a <font class=instructions>member's badge</font> and yer fixin' for a <font class=instructions>proper tool belt</font>.<br><br>
            <font class=userPrompt>(Try again, if you beat the game.)<br><br></font>`);
            scrollingDiv.scrollTop = scrollingDiv.scrollHeight;
            updateMoney();
        } else {

        }
    }
    }
}

// listens for the TOOL STORE IMAGE to be CLICKED
exitListener.addEventListener('click', clickExitButton);
function clickExitButton() {
    if (gameState.currentSequence == "2A") {
    changeAvatarForGoingHome();
    storeCurrentSequence = gameState.currentSequence
    gameState.currentSequence = "exitSequence"
    newText(`<br><font color=aqua>-------------------------------------------</font>
    <br>Would you like to Restart or Quit the game?
    <font class=userPrompt>(Restart or Quit or <font color=aqua>Resume</font>)</font>`);
    newText(`<font color=aqua>-------------------------------------------<br></font>`)
    scrollingDiv.scrollTop = scrollingDiv.scrollHeight;
    }
}

// listens for the SCISSORS DIV to be CLICKED
scissorsListener.addEventListener('click', buyScissors);
function buyScissors() {
    if (gameState.currentSequence == "2A") {
        // when USER has ENOUGH money to buy XYZ TOOL
        if (player.totalEarnings >= tools[1].toolCost && tools[1].purchased == false) {
            // ((change border/bg eventually))
            // change PICTURE of TOOL to show unlocked
                // first, visually shows user's UN-selected other tools
            let renderOtherItems = document.querySelectorAll('.allTools');
            for (i = 0; i < renderOtherItems.length; i++) {
                renderOtherItems[i].style.backgroundColor = "rgb(29, 29, 29)";
            }
                // then, visually shows user's selected CURRENT tool
            let renderItem = document.querySelector('.tool1');
            renderItem.style.backgroundImage = "url('./images/unlockedScissors.png')";
            renderItem.style.backgroundColor = "darkblue";
            renderItem.innerHTML = ``;
            // send message saying they're now using said TOOL
            newText("<br>You are now using " + tools[1].name + " to cut lawns.<br>")
            scrollingDiv.scrollTop = scrollingDiv.scrollHeight;
            // subtract COST of new TOOL
            player.totalEarnings -= tools[1].toolCost
            // change purchasedTOOL variable to true
            tools[1].purchased = true;
            // change currentTool to THIS tool
            player.currentTool = tools[1]
            // updates money, since they SPENT some on new tool
            updateMoney();
        } else {

        }
    }
}

// listens for the PUSH DIV to be CLICKED
pushListener.addEventListener('click', buyPushMower);
function buyPushMower() {
    if (gameState.currentSequence == "2A") {
        // when USER has ENOUGH money to buy XYZ TOOL
        if (player.totalEarnings >= tools[2].toolCost && tools[2].purchased == false) {
            // ((change border/bg eventually))
            // change PICTURE of TOOL to show unlocked
                // first, visually shows user's UN-selected other tools
            let renderOtherItems = document.querySelectorAll('.allTools');
            for (i = 0; i < renderOtherItems.length; i++) {
                renderOtherItems[i].style.backgroundColor = "rgb(29, 29, 29)";
            }
                // then, visually shows user's selected CURRENT tool
            let renderItem = document.querySelector('.tool2');
            renderItem.style.backgroundImage = "url('./images/unlockedPush.png')";
            renderItem.style.backgroundColor = "darkblue";
            renderItem.innerHTML = ``;
            // send message saying they're now using said TOOL
            newText("<br>You are now using " + tools[2].name + " to cut lawns.<br>")
            scrollingDiv.scrollTop = scrollingDiv.scrollHeight;
            // subtract COST of new TOOL
            player.totalEarnings -= tools[2].toolCost
            // change purchasedTOOL variable to true
            tools[2].purchased = true;
            // change currentTool to THIS tool
            player.currentTool = tools[2]
            // updates money, since they SPENT some on new tool
            updateMoney();
        } else {

        }
    }
}

// listens for the RIDING DIV to be CLICKED
ridingListener.addEventListener('click', buyRidingMower);
function buyRidingMower() {
    if (gameState.currentSequence == "2A") {
        // when USER has ENOUGH money to buy XYZ TOOL
        if (player.totalEarnings >= tools[3].toolCost && tools[3].purchased == false) {
            // ((change border/bg eventually))
            // change PICTURE of TOOL to show unlocked
                // first, visually shows user's UN-selected other tools
            let renderOtherItems = document.querySelectorAll('.allTools');
            for (i = 0; i < renderOtherItems.length; i++) {
                renderOtherItems[i].style.backgroundColor = "rgb(29, 29, 29)";
            }
                // then, visually shows user's selected CURRENT tool
            let renderItem = document.querySelector('.tool3');
            renderItem.style.backgroundImage = "url('./images/unlockedRiding.png')";
            renderItem.style.backgroundColor = "darkblue";
            renderItem.style.backgroundRepeat = "no-repeat";
            renderItem.innerHTML = ``;
            // send message saying they're now using said TOOL
            newText("<br>You are now using " + tools[3].name + " to cut lawns.<br>")
            scrollingDiv.scrollTop = scrollingDiv.scrollHeight;
            // subtract COST of new TOOL
            player.totalEarnings -= tools[3].toolCost
            // change purchasedTOOL variable to true
            tools[3].purchased = true;
            // change currentTool to THIS tool
            player.currentTool = tools[3]
            // updates money, since they SPENT some on new tool
            updateMoney();
        } else {

        }
    }
}

// listens for the STUDENTS DIV to be CLICKED
studentsListener.addEventListener('click', buyStudents);
function buyStudents() {
    if (gameState.currentSequence == "2A") {
        // when USER has ENOUGH money to buy XYZ TOOL
        if (player.totalEarnings >= tools[4].toolCost && tools[4].purchased == false) {
            // ((change border/bg eventually))
            // change PICTURE of TOOL to show unlocked
                // first, visually shows user's UN-selected other tools
            let renderOtherItems = document.querySelectorAll('.allTools');
                for (i = 0; i < renderOtherItems.length; i++) {
                    renderOtherItems[i].style.backgroundColor = "rgb(29, 29, 29)";
                }
                // then, visually shows user's selected CURRENT tool
            let renderItem = document.querySelector('.tool4');
            renderItem.style.backgroundImage = "url('./images/unlockedStudents.png')";
            renderItem.style.backgroundColor = "darkblue";
            renderItem.innerHTML = ``;
            // send message saying they're now using said TOOL
            newText("<br>You are now using " + tools[4].name + " to cut lawns.<br>")
            scrollingDiv.scrollTop = scrollingDiv.scrollHeight;
            // subtract COST of new TOOL
            player.totalEarnings -= tools[4].toolCost
            // change purchasedTOOL variable to true
            tools[4].purchased = true;
            // change currentTool to THIS tool
            player.currentTool = tools[4]
            // updates money, since they SPENT some on new tool
            updateMoney();
        } else {

        }
    }
}


//changes avatarPic to NARRATOR
const changeAvatarToNarrator = () => {
    player.currentLocation = "";
    let renderAvatar = document.getElementById("avatarPic")
    renderAvatar.style.backgroundImage = "url('./images/simonsNarrator.png')";
}

//changes avatarPic to CUSTOMER
const changeAvatarToCustomer = () => {
    player.currentLocation = "atWork";
    let renderAvatar = document.getElementById("avatarPic")
    renderAvatar.style.backgroundImage = "url('./images/simonsCustomer.png')";
}

//changes avatarPic to WORKER
const changeAvatarToWorker = () => {
    player.currentLocation = "atToolStore";
    let renderAvatar = document.getElementById("avatarPic");
    renderAvatar.style.backgroundImage = "url('./images/simonsWorker.png')";
}

// changes avatarPic BACK to NARRATOR, if EXITING GAME
const changeAvatarForGoingHome = () => {
    player.currentLocation = "goingHome";
    let renderAvatar = document.getElementById("avatarPic")
    renderAvatar.style.backgroundImage = "url('./images/simonsNarrator.png')";
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////
// AUTOMATIC FUNCTIONS
var startGame = () => {
    // sets player stats (especially, if a game reset)
    // gives player starting tool
    // does NOT need to give player new name, if one is already in there
    player = {
        totalEarnings: 0, // test value
        currentTool: tools[0],
        workedBefore: false
    };

    // change Avatar
    changeAvatarToNarrator()

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
            <font class=PC>Hi there!<br>
            <br>I'm your guide.<br>
            <br>The timer will start when you are ready.<br>
            <br>Are you ready to play?</font>
            `;
        userOptions = "<font class=userPrompt>(Yes or No)</font>";
        renderedText.innerHTML += userOptions;

    // UPDATE totalMoney AND unlockedItems
        updateMoney();
        resetItems();

};
setTimeout(startGame, 3000); // change to 3000 when finished

////////////////////////////////////////////////////////////////////////////////////////////////////////////
// EVENT TRIGGERED FUNCTIONS
var updateMoney = () => {
    const renderMoney = document.querySelector('.totalMoney');
    renderMoney.innerHTML = `${player.totalEarnings}`;
    availableItems();
    console.log(`Player's totalEarnings: ` + player.totalEarnings)
};

const checkIfWon = () => {
    if (tools[4].purchased == true && player.totalEarnings >= 1000) {
        document.getElementById("toolStoreClicker").src = "./images/toolShopOpen.png";
        // turn toolShop to toolShopOpen
        console.log("You won!")
        newText(`<br><br><font class=money>
        Nice work, ${player.userName}!<br><br>
        You beat the game!
        </font>`)
        // create and set variable that turns playerWonGame to TRUE
        scrollingDiv.scrollTop = scrollingDiv.scrollHeight;
        beatGame = true;
    } else {

    }
}

var resetItems = () => {
    const renderItem1 = document.querySelector('.tool0');
    const renderItem2 = document.querySelector('.tool1');
    const renderItem3 = document.querySelector('.tool2');
    const renderItem4 = document.querySelector('.tool3');
    const renderItem5 = document.querySelector('.tool4');
    renderItem1.style.backgroundImage = "url('./images/unlockedTeeth.png')";
    renderItem1.style.backgroundColor = "darkblue";
    renderItem2.style.backgroundImage = "url('./images/lockedScissors.png')";
    renderItem3.style.backgroundImage = "url('./images/lockedPush.png')";
    renderItem4.style.backgroundImage = "url('./images/lockedRiding.png')";
    renderItem5.style.backgroundImage = "url('./images/lockedStudents.png')";
};

// determines if user has enough money for each item
function availableItems() { 
    for (i=1;i<5;i++) {
        // UNLOCK any items player HASNT bought but CAN afford
        if (player.totalEarnings >= tools[i].toolCost && tools[i].purchased == false) {
            let changeText = document.querySelector(".tool"+i);
            changeText.style.color = "lime";
            changeText.innerHTML = `BUY`;
        // LOCK any items player HASNT bought and CANT afford
        } else if (player.totalEarnings < tools[i].toolCost && tools[i].purchased == false) {
            let changeText = document.querySelector(".tool"+i);
            changeText.style.color = "rgba(255, 255, 255, 0.685)";
            changeText.innerHTML = `$${tools[i].toolCost}`;
        } else {
        }
    }}

const updateSequence = (currentScene) => {
    gameState.currentSequence = currentScene; // changes Sequence to 1A
    console.log("The current sequence is: " + gameState.currentSequence);
}

var newText = (str) => {
    document.getElementById("bigTextArea").innerHTML += `<br>${str}`; // <> within "quotes"
}

var newTextNoSpace = (str) => {
    document.getElementById("bigTextArea").innerHTML += `${str}`; // <> within "quotes"
}

var checkInput = () => {
    if (gameState.currentSequence !== "playerQuit") {
        if (gameState.currentSequence == "startSequence0A") {
            if (userInput == "Yes" || userInput == "yes" || userInput == "Y" || userInput == "y") { // add AND STATE == "1A", etc.
                timerOn = true;
                newText(`Great! The timer has begun.<br>
                <br>
                What's your name?`);
                console.log(`The timer is now on: ` + timerOn);
                updateSequence("1A") // uses argument to set current Sequence
                                    // also LOGS to CONSOLE
            } else if (userInput == "No" || userInput == "no" || userInput == "N" || userInput == "n") {
                newText('User is NOT ready');
            } else {
                newText(userInput + ` is not an option.<br>
                <br>Are you ready to play?<br>
                <font class=userPrompt>(Yes or No)</font>`);
            }
        // Sequence: 1A
        } else if (gameState.currentSequence == "1A") {
            let instructionsText = `<font class=instructions>WELCOME to the LANDSCAPER GAME<br><br>
                - You are starting a landscaping business. Use your tools to earn more money!<br><br>
                - To start, the only tool you have is your teeth. Using your tools, you can spend the 
                    day cutting lawns and make money.<br><br>
                - Make money faster by buying better tools with the money you earn.<br><br>
                - You <font class=money>WIN</font> the game when you have a <font class=money>team of
                students</font> working for you AND <font class=money>$1,000</font>.<br><br></font>
                <font class=PC>Ready to play?</font><br>
                <font class=userPrompt>(Yes or No)</font>`
            if (userInput == "Jake") { // if JAKE is playing...
                player.userName = userInput;
                    newText(`Hello <font color=aqua>` + player.userName + `</font> - you are the greatest 
                    player who has ever played. Very magnificent. Much greater than Obama.<br>`);
                player.totalEarnings = 700;
                updateMoney()
                console.log(`The user's name is: ` + player.userName);
                    newText(`Here are your instructions:<br>`);
                    setTimeout(function() { newText(instructionsText); }, 3000); // change to 1500 when finished
                    setTimeout(function() {scrollingDiv.scrollBy(0, 75); }, 3000); // change to 1500 when finished     
                updateSequence("1B")
            } else { // if ANYONE OTHER THAN JAKE is playing...
                player.userName = userInput;
                    newText(`<font color=aqua>` + player.userName + `</font>, huh? That's an okay name. Jake would be cooler, though.<br>`);
                console.log(`The user's name is: ` + player.userName);
                    newText(`Here are your instructions:<br>`);
                    setTimeout(function() { newText(instructionsText); }, 3000);  // change to 1500 when finished
                    setTimeout(function() {scrollingDiv.scrollBy(0, 75); }, 3000);  // change to 1500 when finished
                updateSequence("1B")
            }
        // Sequence: 1B
        } else if (gameState.currentSequence == "1B") { // update with IF ELSE options for Yes or No or Other
            if (userInput == "Yes" || userInput == "yes" || userInput == "Y" || userInput == "y") { // add AND STATE == "1A", etc.
                newText(`<center>Good luck!</center><br><br>
                <font class=userPrompt>(Click on the landscaping sign to begin.)</font><br>`) 
                updateSequence("2A")
            } else if (userInput == "No" || userInput == "no" || userInput == "N" || userInput == "n") {
                newText(`<center>Too bad!</center><br><br>
                <font class=userPrompt>(Click on the landscaping sign to begin.)</font><br>`) 
                updateSequence("2A")
            } else {
                newText(userInput + ` is not an option.<br>
                <br>Are you ready to play?<br>
                <font class=userPrompt>(Yes or No)</font>`);
            }
            

        } else if (gameState.currentSequence == "2A") {
        // Sequence: 2A ---> ---> ---> ---> MAIN GAME <-- <--- <--- <--- <--- <--- <--- <--- <---
        } else if (gameState.currentSequence == "2B") { 
            newText(``) 
            updateSequence("2C")
        // Sequence: 2C
        } else if (gameState.currentSequence == "2C") { 
            newText(``) 
            updateSequence("2D")
        // Sequence: 2D
        } else if (gameState.currentSequence == "exitSequence") {
            if (userInput == "Restart" || userInput == "restart") {
                newText(`Copy that! Restarting the game now.`);
                console.log(`Restarting game.`);
                updateSequence("startSequence0A");
            } else if (userInput == "Quit" || userInput == "quit") {
                newText('Okay. Feel free to close this window.');
                updateSequence("playerQuit")
            } else if (userInput == "Resume" || userInput == "resume") {
                updateSequence(storeCurrentSequence);
            } else {
                newText(userInput + ` is not an option.<br>
                <br>Returning to game.`);
                updateSequence(storeCurrentSequence);
            }
        } else {

        }
    } else {

    }
}

//////////////////////////////////////////
/////////// TO DO ////////////
//////////////////

//////////////
// DO IT
//////////////

    // RESTART game

//////////////
// OPTIONAL
//////////////

    // CHANGE AVATAR when buying new tool
    // SELECT DIFFERENT TOOL function
    // SELL function
    // TIMER function
    // don't let user type after QUITTING

    // don't give INSTRUCTIONS to player with a stored userName
    // FOCUS on bigTextArea after INSTRUCTIONS given
    // FOCUS on INPUT after clicking on something requiring input, such as Exit

//////////////////
///////// END of TO DO //////////
//////////////////////////////////////////