var Hero = require('./hero.js');

function Warrior(name, level, weapon) {
    Hero.call(this, name, level);
    
    this.weapon = weapon;
}

Warrior.prototype = Object.create(Hero.prototype);

Warrior.prototype.attack = function () {
    console.log(`${this.name} attacks with the ${this.weapon}`);
};

module.exports = Warrior;