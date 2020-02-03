const Express = require("express");
const App = Express();
const port = 80;

App.get("/public", function(req, res) {
    res.send("Hello World!");
});

App.listen(port, function() {
    console.log("Sever running!");
});