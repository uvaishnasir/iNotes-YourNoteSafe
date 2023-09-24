const express = require("express");
const fetchUser = require("../middleware/fetchUser");
const router = express.Router();
const Notes = require("../models/Notes");
const { body, validationResult } = require("express-validator");

// Route 1
//fetch all notes using -GET-- "api/notes/fetchnotes". login required.
router.get("/fetchallnotes", fetchUser, async (req, res) => {
  try {
    const notes = await Notes.find({ user: req.user.id });
    res.send(notes);
  } catch (e) {
    console.error(e.message);
    res.status(500).send("Internal Server Error");
  }
});

// Route 2
//create note using -POST-- "api/notes/createnote". login required.
router.post(
  "/createnote",
  fetchUser,
  [
    body("title", "title must be at least 3 chars long").isLength({ min: 3 }),
    body("description", "description must be at least 5 chars long").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    const errors = validationResult(req); //if errors-> return bad request.
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { title, description, tag } = req.body;

    const note = new Notes({
      title: title,
      description: description,
      tag: tag,
      user: req.user.id,
    });

    const savedNote = await note.save();
    res.json(savedNote);
  }
);

module.exports = router;
