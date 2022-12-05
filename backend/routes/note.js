const express = require("express"); // Frameword Back-End JS pour développer des APIs

// Import de tous les controllers = fonctions de l'API
const {
  createNote,
  getallNotes,
  getNote,
  deleteNote,
} = require("../controllers/noteController");

const router = express.Router();

//GET toutes les Notes
router.get("/", getallNotes);

//GET une seule Note
router.get("/:id", getNote);

//POST une nouvelle Note
router.post("/", createNote);

// DELETE une Note
router.delete("/:id", deleteNote);

module.exports = router;
