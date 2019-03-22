const express = require("express");
const router = express.Router();
const db = require("../db/db");

router.get("/fave/:input", (req, res) => {
  if(req.params.input === "dog") {
    res.status(400).send("Cant access the pet you provided.")
    return;
  }
  res.send("Your fave pet is " + req.params.input)
})

router.get("/sample", (req, res) => {
  res.status(200).send("Hello world from Pets sample");
})

router.get("/mine/:name", (req, res) => {
  const found = db.find(pet => {
    return pet.name === req.params.name;
  })

  if(!found) {
    const notFound = {
      status: 404,
      message: 'Cannot find pet with name ' + req.params.name
    }
    res.status(404)
      .send(notFound);
  }

  res.send(found);
})

router.get("/all", (req, res) => {
  res.send(db);
})

module.exports = router;