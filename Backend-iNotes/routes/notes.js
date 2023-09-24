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

    try {
      const { title, description, tag } = req.body;
      const note = new Notes({ title, description, tag, user: req.user.id });
      const savedNote = await note.save();
      res.json(savedNote);
    } catch (e) {
      console.error(e.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

// Route 3
//update note using -PUT-- "api/notes/updatenote". login required.

router.put("/updatenote/:id", fetchUser, async (req, res) => {

  const {title, description, tag} = req.body;
  //create the new dummy note.
  const newNote = {};
  if(title){newNote.title = title}
  if(description){newNote.description = description}
  if(tag){newNote.tag = tag}

  //find the note to be updated and update it.
  let note = await Notes.findById(req.params.id);

  if(!note) return res.status(404).send("Note doesn't exist");

  //check the user and update note.
  if(note.user.toString()!== req.user.id) return res.status(401).send("Not Allowed");
  note = await Notes.findByIdAndUpdate(req.params.id, {$set:newNote},{new:true});
  res.json(note);
});

module.exports = router;
