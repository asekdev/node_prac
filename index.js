const express = require("express");
const app = express();
const pets = require("./controllers/index");

// app.use(bodyParser.json());                                     
// app.use(bodyParser.urlencoded({extended: true}));               
// app.use(bodyParser.text());                                    
// app.use(bodyParser.json({ type: 'application/json'}));  

app.use("/api", pets);

app.listen(3000, () => {
  console.log("Listening on port 3000...")
})

