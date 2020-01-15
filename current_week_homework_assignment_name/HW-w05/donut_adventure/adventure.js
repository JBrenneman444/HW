class Hero {
    constructor(heroName){
        this.name = heroName;
        this.health = 100;
        this.weapons = {
            sprinkleSpray: 5,
            sugarShock: 10
        };
        this.catchPhrases = [
        'i\'m fresher than day old pizza',
        'you can\'t count my calories'
        ];
    }    
    
    talkSass() {
        console.log(this.catchPhrases[Math.floor(Math.random() * 2)]);
    }

    announceHealth() {
        console.log(`I am at ${this.health} health!`);
    }

    fight(enemy) {
        enemy.health -= this.weapons.sugarShock;
        console.log(`${enemy.name} just got hit by sugarShock! His health is now at ${enemy.health}`);
    }
}

// Using the hitpoints from the weapon they're using, subtract that amount from the enemy's health

let hero1 = new Hero("Dougie the Donut")
console.log(hero1)
hero1.talkSass()

class Enemy {
    constructor(enemyName){
        this.name = enemyName;
        this.health = 100;
        this.weapons = {
            pepperoniStars: 5,
            cheeseGrease: 10
        };
        this.catchPhrases = [
            'i\'m youtube famous',
            'i\'m more dangerous than an uncovered sewer'
        ]
    }
    talkSmack() {
        console.log(this.catchPhrases[Math.floor(Math.random() * 2)]);
    }
    announceHealth() {
        console.log(`I'm at ${this.health} health.`);
    }
    fight(enemy) {
        enemy.health -= this.weapons.cheeseGrease;
        console.log(`${enemy.name} just got hit by cheeseGrease! His health is now at ${enemy.health}`);
    }
}

let enemy1 = new Enemy("Pizza Rat")
enemy1.talkSmack()

hero1.announceHealth()
enemy1.announceHealth()

hero1.fight(enemy1);
enemy1.fight(hero1);