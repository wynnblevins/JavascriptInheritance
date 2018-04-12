function Hero(name, level) {
    this.name = name;
    this.level = level;
}

Hero.prototype.greet = function () {
    console.log(`${this.name} says hello.`);
};

module.exports = Hero;