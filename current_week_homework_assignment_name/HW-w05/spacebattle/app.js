let allEnemiesDestroyed = true;

// Create the Player's ship object:
let playerShip = {
    hull: 20,
    firepower: 5,
    accuracy: 0.7,
    // Add methods for battle here
    attack: enemyShip => {
      console.log("Player attacking Alien ship");
      // Check for hit success based on playerShip accuracy:
      if (Math.random() < playerShip.accuracy) {
        console.log("Attack hit!");
        enemyShip.hull -= playerShip.firepower;
      } else {
        console.log("Attack missed!");
      }
      console.log(enemyShip);
      // if (Math.random() < alien[0].accuracy) {
      // console.log('You have been hit!');
    }
  };
  // Define an AlienShip class
  class AlienShip {
    constructor() {
      // Make hull random between 3 and 6
      this.hull = Math.floor(Math.random() * 4 + 3);
      // Make random between 2 and 4
      this.firepower = Math.floor(Math.random() * 3 + 2);
      // TODO: Make random between .6 and .8
      this.accuracy = Math.floor(Math.random() * 3 + 6) * 0.1;
    }
    attack() {
      console.log("Alien Ship attacking");
      // Check for hit or miss:
      if (Math.random() < this.accuracy) {
        console.log("Alien ship hit player!");
        playerShip.hull -= this.firepower;
        console.log(`Player Ship hull remaining: ${playerShip.hull}`);
      } else {
        console.log("Alien ship missed");
      }
    }
  }
  // Define a game object
  let gameState = {
    playerIsAlive: () => {
      // return true if player is alive
      return playerShip.hull > 0;
    },
    checkWin: () => {
        if (allEnemiesDestroyed == true) {
            console.log("You won!")
        } else {
            // do nothing
        }
    }
  };
  // Start the game
  console.log("Generating enemy ships");
  enemy = new AlienShip();
  console.log(enemy);
  // TODO: Upgrade to an array of 6 enemy ships:
  // enemies = [];
  // for (let i = 0; i < 6; i++) {
  //   enemies.push(new AlienShip());
  // }
  // console.log(enemies);
  if (allEnemiesDestroyed == true) {
      console.log("You won!")
  } else {
      while (gameState.playerIsAlive()) {
        // Turn by turn logic
        // Player ship attacks:
        playerShip.attack(enemy);
        // Check if enemy ship is destroyed:
        if (enemy.hull <= 0) {
        // If enemy ship is destroyed:
        console.log("Enemy ship destroyed!");
        // Ask user if they want to continue attacking or retreat:
        let response = prompt("Ship Destroyed, attack or retreat?");
        if (response === "retreat" || response === "Retreat") {
            // User retreats, end game loop:
            alert("You retreated, game over");
            break;
        } else if (response === "attack" || response === "Attack") {
            // Keep looping, gameplay continues
            console.log("Continuing gameplay");
        } else {
        // Enemy ship not destroyed, their turn to attack:
        // Enemy ship attacks:
        enemy.attack();
        }
    } else {
        // do nothing
    }
    }
}
  // End game logic
  // Player either lost or retreated:
  console.log("Game over");
    


// CREATE ENEMIES ARRAY
    // let enemies = [
    
    // ]
    
    // for (let i=0; i<0;i++) {
    //     enemies.push(new AlienShip());
    //     console.log(enemy)
    // }

    // for creating multiple allens:
    // enemy.push(new AlienShip());

///////////////////////////////////
// NEXT STEPS
// if all enemies (one for now) have been defeated, break out of loop 
// show the player "Congrats, you've won!" message.

// next step beyond that, make enemies array instead of enemy variable, start with just 1 ship in there 
// (loop from 0 to 1 instead of 0 to 6)


///////////////////////////////////
// Begin even simpler than the specifications suggest. In this case, how about we just start with 
// one alien ship instead of many alien ships, and get the code for one ship working first.

// Root out any 'gotchas' that you really ought to foresee. In this case, will we really want 
// nested loops -- one for a battle, one for iterating over aliens)? How will we exit one loop and then exit
// the parent loop? Perhaps keeping it to one loop somehow will help us avoid unnecessary difficulties.

// When coding, form a solid and testable foundation before building upon it with more functionality.
//  In this case, is there a bug where an alien can attack after it has been destroyed? Better fix that bug 
// before increasing the complexity of the code.

// When you have a piece of functionality tested and working, commit it. Try not to commit broken code. 
// Unsure of when to commit? Commit when something works. You want to save working code.