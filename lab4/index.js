const Express = require("express");
const App = Express();
const port = 80;

var chalk = require('chalk');
console.log(chalk.red("Testing!"));

App.get("/id/:id", (req, res) => {
    res.send('Pokemon' + req.params.id);
});


App.get("/name/:name", (req, res) => {
    res.send(people.readName(req));
});


App.listen(port, function() {
    console.log("Sever running!");
});