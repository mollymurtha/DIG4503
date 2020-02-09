const Express = require("express");
const App = Express();
const port = 80;

var chalk = require('chalk');
console.log(chalk.red("Testing!"));

// const Pokemon = require(json-pokemon);
// let pokemon = new Pokemon();
// not sure how to return the json objects from json-pokemon

App.get("/id/:id", (req, res) => {
    let result = [];

        this.pokemon.forEach((value)=> {
            if(value.color == req.params.color) {
                result.push(value);
            }
        });

        if(result.length == 0) {
            //Invalid
            result.push({"error": "Can't find!"});
        } else {
            //Valid
        }

        return result;
});


App.get("/name/:name", (req, res) => {
    let result = [];

        this.pokemon.forEach((value)=> {
            if(value.color == req.params.color) {
                result.push(value);
            }
        });

        if(result.length == 0) {
            //Invalid
            result.push({"error": "Can't find!"});
        } else {
            //Valid
        }

        return result;
});


App.listen(port, function() {
    console.log("Sever running!");
});