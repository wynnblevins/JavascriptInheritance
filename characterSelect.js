var Healer = require('./healer.js');
var Warrior = require('./warrior.js');

// Initialize individual character instances
const hero1 = new Warrior('Bjorn', 1, 'axe');
const hero2 = new Healer('Kanin', 1, 'cure');

hero1.greet();
hero1.attack();

hero2.greet();
hero2.heal();