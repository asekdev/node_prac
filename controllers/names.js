const express = require("express");
const router = express.Router();

router.get("/:input", (req, res) => {
    let userInput = req.params.input;
    console.log(req.params.input);

    res.send("Hi there,  " + userInput.trim() + "!")
})

module.exports = router;