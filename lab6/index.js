const cors = require("cors");
App.use(cors());
const Express = require("express");
const App = Express();
const port = 80;

var chalk = require('chalk');
console.log(chalk.red("Testing!"));

const pokemon = require(json-pokemon);

// add express middleware
App.use(Express.json());
// add static route
App.get("/", Express.static("client/build"));


App.get("/id/:id", (req, res) => {

    let result = "No matching pokemon";
    
    pokemon.forEach((value)=> {
    if(value.id == req.params.id) {
    result = value;
    }
    });
    
    if(result.error) {
    //Invalid
    console.log(chalk.red(req.path));
    } else {
    console.log(chalk.green(req.path));
    }
    
    res.send(result); 
    });


App.get("/name/:name", (req, res) => {

    let result = "No matching pokemon";
    
    pokemon.forEach((value)=> {
    if(value.name == req.params.name) {
    result = value;
    }
    });
    
    if(result.error) {
    //Invalid
    console.log(chalk.red(req.path));
    } else {
    console.log(chalk.green(req.path));
    }
    
    res.send(result); 
    });


App.listen(port, function() {
    console.log("Sever running!");
});
