const express = require("express");
const app = express();
const { catsList } = require("./cats");

app.get("/", (req, res) => {
    res.send("Server is running")
});

app.get("/cats", (req, res) => {
    const { name } = req.query
    let result = catsList
    if (name) {
        result = catsList.find((cat) => cat.name === name)
    }
    res.send(catsList)
});

app.listen(8080);