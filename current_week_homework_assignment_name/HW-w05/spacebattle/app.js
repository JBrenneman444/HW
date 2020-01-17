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

// // Start the game
// enemy = new AlienShip();
// console.log(enemy);

// TODO: Upgrade to an array of 6 enemy ships:
console.log("Generating enemy ships");
enemies = [];
for (let i = 0; i < 6; i++) {
  enemies.push(new AlienShip());
}
console.log(enemies);

while (gameState.playerIsAlive() && enemies.length >= 2) {
    // Turn by turn logic
    // Player ship attacks:
    playerShip.attack(enemies[0]);
    // Check if enemy ship is destroyed:
    if (enemies[0].hull <= 0) {
        console.log("Enemy ship destroyed!");
        enemies.shift();
        console.log(enemies)
        // CHECK NUMBER OF ENEMY SHIPS LEFT is MORE THAN ZERO
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
            enemies[0].attack();
        }
    } else {
        // do nothing
    }
}
  // End game logic
  // Player either lost or retreated:
  alert("You won!")  
  console.log("You won!")
