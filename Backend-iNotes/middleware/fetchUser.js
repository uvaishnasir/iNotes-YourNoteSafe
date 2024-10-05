const jwt = require("jsonwebtoken");

const fetchUser = (req, res, next) => {
  //Get the user from JWT token and add it to req object.
  const authToken = req.header("auth-token");
  let success = false;
  if (!authToken) {
    success = false;
    return res
      .status(401)
      .send({ success, error: "Please authenticate with a valid Token" });
  }
  try {
    data = jwt.verify(authToken, "IamTHE$007");
    req.user = data.user;
    success = true;
    next();
  } catch (error) {
    success = false;
    return res
      .status(401)
      .send({ success, error: "Please Authenticate with a valid Token" });
  }
};

module.exports = fetchUser;
