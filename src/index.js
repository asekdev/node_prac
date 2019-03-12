const express = require("express");
const app = express();
const pets = require("./controllers/index");
const api = require("./norrisAPI/api");

app.use("/api", pets);

app.get("/", (req, res) => {
  res.send("Hello from asek Node.js app!")
})

app.get("/joke", (req, res) => {
  const quote = api.getQuote();

  quote.then(data => { res.send(data); })
 
})

app.listen(9696, () => {
  console.log("Listening on port 9696...")
})