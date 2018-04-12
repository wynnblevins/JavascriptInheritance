var Hero = require('./hero.js');

function Healer(name, level, spell) {
    Hero.call(this, name, level);
  
    this.spell = spell;
}

Healer.prototype = Object.create(Hero.prototype);

Healer.prototype.heal = function () {
    console.log(`${this.name} casts ${this.spell}.`);
}

module.exports = Healer;