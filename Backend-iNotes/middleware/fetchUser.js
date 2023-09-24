const jwt = require("jsonwebtoken");

const fetchUser = (req, res, next) => {
  //Get the user from JWT token and add it to req object.
  const authToken = req.header("auth-token");

  if (!authToken) {
    res.status(401).send({ error: "Please authenticate with a valid Token" });
  }
  try {
    data = jwt.verify(authToken, "IamTHE$007");
    req.user = data.user;
    next();
  } catch (error) {
    res.status(401).send({ error: "Please Authenticate with a valid Token" });
  }
};


module.exports = fetchUser;
