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

}