const express = require("express");
const app = express();
const pets = require("./controllers/index");

app.use("/api", pets);

app.listen(3000, () => {
  console.log("Listening on port 3000...")
})

