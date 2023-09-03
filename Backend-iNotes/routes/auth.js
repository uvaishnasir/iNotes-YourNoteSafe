const express = require("express");
const User = require("../models/User");
const router = express.Router();
const { body, validationResult } = require("express-validator");

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
    const errors = validationResult(req); //if errors-> return bad request.
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    //check user with this email is exist or not.
    try {
      let user = await User.findOne({ email: req.body.email });
      console.log(user);
      if (user) {
        return res
          .status(400)
          .json({ error: "Sorry, This email already exist" });
      }
      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      });
      res.json(user);
    } catch (e) {
      console.error(e.message);
      res.status(500).send("Some Error occured");
    }
  }
);

module.exports = router;
