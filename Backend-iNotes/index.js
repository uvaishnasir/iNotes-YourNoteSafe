const connectToMongo = require("./DB");
const express = require("express");

const app = express();
const port = 3000;

connectToMongo();

app.get("/api", (req, res) => {
  res.send("Hello UV!");
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
