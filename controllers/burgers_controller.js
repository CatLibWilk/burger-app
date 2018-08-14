var express = require("express");
var burger = require("../models/burger.js");

var router = express.Router();

router.get("/", function(req, res) {
    burger.all(result =>{
        var burgersObj = {
            burgers: result
        };
        res.render("index", burgersObj)
    });
});

router.put("/burgers/api/:id", (req, res) =>{
    var targetId = req.params.id;
    console.log(targetId);
    burger.update(targetId, result =>{
        console.log(result);
        res.json(result);
    });
});

router.post("/burgers", (req, res) => {
    console.log(req)
    var newBurger = req.body.burger_name;
    burger.add(newBurger, result =>{
        res.json(result);
    });
});

router.delete("/delete", (req, res) =>{
    burger.clear(result=>{
        res.json(result);
    });
});

module.exports = router;