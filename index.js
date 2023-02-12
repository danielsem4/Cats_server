const express = require("express");
const app = express();
const { catsList } = require("./cats");

app.get("/cats", (req, res) => {
    const { name } = req.query
    let result = catsList
    if (name) {
        result = catsList.find((cat) => cat.name === name)
        res.status(200).json(result)
    } else {
        res.status(200).json(catsList)
    }
});

app.listen(8080);