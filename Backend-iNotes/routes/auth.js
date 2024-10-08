const express = require("express");
const User = require("../models/User");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const fetchUser = require("../middleware/fetchUser");
// Route 1
//create the user using -POST-- "api/auth/createuser". No login required.
router.post(
  "/createuser",
  [
    body("email", "Enter a valid email").isEmail(),
    body("name", "Name must be at least 3 chars long").isLength({ min: 3 }),
    body("password", "password must be at least 5 chars long").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    let success = false;
    const errors = validationResult(req); //if errors-> return bad request.
    if (!errors.isEmpty()) {
      success = false;
      return res.status(400).json({ success, errors: errors.array() });
    }
    //check user with this email is exist or not.
    try {
      let user = await User.findOne({ email: req.body.email });
      // console.log(user);
      if (user) {
        success = false;
        return res
          .status(400)
          .json({ success, error: "Sorry, This email already exist" });
      }
      const salt = await bcrypt.genSalt(10);
      const securedPass = await bcrypt.hash(req.body.password, salt);
      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: securedPass,
      });
      const data = {
        user: {
          id: user.id,
        },
      };
      const authToken = jwt.sign(data, "IamTHE$007");
      success = true;
      return res.json({ success, authToken,user});
    } catch (e) {
      console.error(e.message);
      return res.status(500).send("Internal Server Error");
    }
  }
);

// Route 2
//login the user using -POST-- "api/auth/login".
router.post(
  "/login",
  [
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password cannot be blank").exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req); //if errors-> return bad request.
    let success = false;
    if (!errors.isEmpty()) {
      success = false;
      return res.status(400).json({ success, errors: errors.array() });
    }
    const { email, password } = req.body;
    try {
      let user = await User.findOne({ email });
      if (!user) {
        success = false;
        return res
          .status(400)
          .json({ success, error: "Please login with correct credentials" });
      }
      const passCompare = await bcrypt.compare(password, user.password);
      if (!passCompare) {
        success = false;
        return res
          .status(400)
          .json({ success, error: "Please login with correct credentials" });
      }
      const data = {
        user: {
          id: user.id,
        },
      };
      const authToken = jwt.sign(data, "IamTHE$007");
      success = true;
      return res.json({ success, authToken, user});
    } catch (e) {
      console.error(e.message);
      return res.status(500).send("Internal Server Error");
    }
  }
);

// Route 3
//get the user using -POST-- "api/auth/getuser". login required.

router.post("/getuser", fetchUser, async (req, res) => {
  try {
    const userid = req.user.id;
    const user = await User.findById(userid).select("-password");
    return res.send(user);
  } catch (e) {
    console.error(e.message);
    return res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
