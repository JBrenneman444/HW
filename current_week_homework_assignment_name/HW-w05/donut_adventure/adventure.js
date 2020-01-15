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
    
    talkSass() { // talkSass: logs one of his catchphrases randomly
        // TODO - check math
        Math.floor(Math.random()+2)
    }

    announceHealth() {
        console.log(`I am at ${this.health} health!`);
    }

    fight() {
        console.log('i\'m ready to rumble')
    }
}

let hero1 = new Hero("Dougie the Donut")
console.log(hero1)

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
    talkSmack() // random catchphrase
    announceHealth() {
        console.log(`Im at ${this.health} health.`);
    }
    fight() {
        console.log('i\'m gonna flatten you like a slice of pepperoni')
    }
}