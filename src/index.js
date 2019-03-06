const express = require("express");
const app = express();
const pets = require("./controllers/index");

app.use("/api", pets);

app.get("/", (req, res) => {
  res.send("Hello from asek Node.js app!")
})

app.listen(9696, () => {
  console.log("Listening on port 3000...")
})