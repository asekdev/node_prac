const express = require("express");
const app = express();
const pets = require("./controllers/index");
const api = require("./norrisAPI/api");

app.use("/api", pets);

app.get("/", (req, res) => {
  res.send("Hello from asek Node.js app!")
})

app.get("/joke", async (req, res) => {
 try {
  const quote = await api.getQuote();
  res.send(quote)
 }
 catch(err) {
  res.status(400).send({error: err.message})
 }
})

app.listen(9696, () => {
  console.log("Listening on port 9696...")
})