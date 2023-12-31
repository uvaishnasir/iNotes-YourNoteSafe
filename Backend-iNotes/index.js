const connectToMongo = require("./DB");
const express = require("express");
const Auth = require("./routes/auth");
const Notes = require("./routes/notes");
const cors = require("cors");

connectToMongo();
const app = express();
const port = 5000;

app.use(express.json());
app.use(cors());

// available routes.
app.use("/api/auth", Auth);
app.use("/api/notes", Notes);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
