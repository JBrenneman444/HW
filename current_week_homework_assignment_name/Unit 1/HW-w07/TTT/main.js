var playCounter = 0;

var gameOver = false;

let winningCombos3 = [
    // horizontal === everything is +1
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    // vertical === everything is +3
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    // diagonal topleft-to-bottomright === first +4
    [1, 5, 9],
    // diagonal bottomleft-to-topright === first +2
    [3, 5, 7]
]

let winningCombos2 = [
    // horizontal === everything is +1
    [1, 2],
    [3, 4],
    // vertical === everything is +2
    [1, 3],
    [2, 4],
    // diagonal topleft-to-bottomright === first +3
    [1, 4],
    // diagonal topright-to-bottomleft === first +1
    [2, 3]
]

let winningCombos4 = [
    // horizontal === everything is +1
    [1, 2, 3, 4],
    [1, 2, 3, 4],
    [1, 2, 3, 4],
    [1, 2, 3, 4],
    // vertical === everything is +4
    [1, 3],
    [2, 4],
    // diagonal topleft-to-bottomright === first +5
    [1, 6, 11, 16],
    // diagonal topright-to-bottomleft === first +3
    [2, 3]
]

let currentXArray = []
let currentOArray = []

$(() => {

const setBoardDimensions = (event) => {
    $(".square").remove()
    let dimensions = $("#dimensions-input").val()  
    localStorage.setItem("Dimensions", dimensions)  
    makeBoard(localStorage.getItem("Dimensions"));
    $(event.currentTarget).trigger('reset');
    event.preventDefault()
    event.stopPropagation();
}

const setWinConditions = () => {

}

let checkWin = currentTiles => {
    for (i=0;i<8;i++) {
        if ( (winningCombos3[i].every(numbers => currentTiles.includes(numbers))) && (playCounter % 2 === 0)) {
            console.log("You won!")
            alert("You won!")
            gameOver = true;
            break;
        } else if (winningCombos3[i].every(numbers => currentTiles.includes(numbers))) {
            console.log("PC won.")
            alert("The PC won.")
            gameOver = true;
            break;
        } else if (playCounter == 8) {
            console.log("Tie game.")
            alert("Tie game.")
            gameOver = true;
            break;
        } else {
            console.log("Keep playing.")
        }
    }
}

const storeMove = (idNumber) => {
    if (playCounter === 0 || playCounter % 2 === 0) { // PLAYER: store ID number in currentXArray
        var integer = parseInt(idNumber, 10);
        currentXArray.push(integer)
        console.log(currentXArray)
    } else { // PC: store ID number in current PCArray
        var integer = parseInt(idNumber, 10);
        currentOArray.push(integer)
        console.log(currentOArray)
    }
}

const userMakesMove = event => {
    const $selectedSquare = $(event.target)
    var $squareID = $(event.target).attr('id')
    if ($selectedSquare.hasClass("alreadyClicked")) {
        // do nothing
    } else {
        if (!gameOver && (playCounter === 0 || playCounter % 2 === 0)) {
            $selectedSquare.css("background-image","url(images/letterX.png)")
            $selectedSquare.css("background-size","contain")
            $selectedSquare.css("background-repeat","no-repeat")
            $selectedSquare.css("background-position","center")
            $selectedSquare.addClass("alreadyClicked")
            storeMove($squareID)
            console.log(`Turn ${playCounter}: x played on Tile: ${$squareID}`)
            checkWin(currentXArray)
            playCounter++
            console.log("The playCounter is now: " + playCounter)
        } else if (playCounter == 8) {
            // do nothing -- the game has ended
        } else if (!gameOver) {
            $selectedSquare.css("background-image","url(images/letterO.png)")
            $selectedSquare.css("background-size","contain")
            $selectedSquare.css("background-repeat","no-repeat")
            $selectedSquare.css("background-position","center")
            $selectedSquare.addClass("alreadyClicked")
            storeMove($squareID)
            console.log(`Turn ${playCounter}: o played on Tile: ${$squareID}`)
            checkWin(currentOArray)
            playCounter++
            console.log("The playCounter is now: " + playCounter)
        } else {

        }
    }
}

const makeBoard = (userDimensions) => {
    if (userDimensions<=4) {
        for (i=1;i<=(userDimensions*userDimensions);i++) {
            let $square = $("<div>")
            $square.addClass("square")
            $square.attr('id',i)
            let containerSize = userDimensions*150
            $('.container').css('width',containerSize)
            $('.container').append($square)
        }
    } else {
        for (i=1;i<=((userDimensions*userDimensions)+1);i++) {
            let $square = $("<div>")
            $square.addClass("square")
            $square.attr('id',i)
            let containerSize = userDimensions*70
            $('.container').css('width',containerSize)
            let squareWidth = 40
            $('.square').css('width',squareWidth)
            let squareHeight = 40
            $('.square').css('height',squareHeight)
            $('.container').append($square)
        }
        $('.square').last().remove()
        // I don't know WHY but it was creating the right amount of squares but not giving the LAST one all the attributes I was setting...
    }
    $('.square').on('click', userMakesMove);
}

// event listeners
$("#submit").on("click", setBoardDimensions)
$("form").on("submit", setBoardDimensions)


})