// jshint esversion: 6

const express = require("express");
const app = express();
app.get("/", function(req, res) {
    response.send("<h1>Hi<h1>")
});
app.listen(3000, function() {
    console.log("Server started on port 3000");
})
