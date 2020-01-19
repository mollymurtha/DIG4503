const Chalk = require("chalk");

class Person {
    constructor(name, favoriteColor) {
        this.name = name;
        this.favoriteColor = favoriteColor.toLowerCase();
    }

    speak() {
        console.log(chalk.keyword(this.favoriteColor)('Yay for orange color'));
    }

}

module.exports = Person;