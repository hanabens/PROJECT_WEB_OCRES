const Note = require("../models/Note");
const mongoose = require("mongoose");

//Get all Notes
const getallNotes = async (req, res) => {
  try {
    const notes = await Note.find({}).sort({ creteadAt: -1 }); // Permet d'afficher toutes les notes et trier du plus récent au plus ancien
    res.status(200).json(notes);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get a single Note
const getNote = async (req, res) => {
  //get id of the Note
  const { id } = req.params;

  //Vérif si l'id a été créé par MongoDB
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Invalid id" });
  }

  const note = await Note.findById(id);

  // Vérif si l'id de la note existe dans la BDD
  if (!note) {
    return res.status(404).json({ error: "Note not found" });
  }

  res.status(200).json(note);
};

// Create a new Note
const createNote = async (req, res) => {
  const { title, content } = req.body;

  // Creation d'une liste pour afficher des erreurs personnalisées
  let emptyField = [];

  if (!title) emptyField.push("Title");
  if (!content) emptyField.push("Content");

  // Si la liste est non vide alors un des éléments est manquant
  if (emptyField.length > 0) {
    return res
      .status(400)
      .json({ error: "Please fill all the fields", emptyField });
  }

  // Ajout de la note à la BDD
  try {
    const note = await Note.create({ title, content });
    res.status(201).json(note);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a Note
const deleteNote = async (req, res) => {
  //get id of the Note
  const { id } = req.params;

  //Check if the id has been created by MongoDB
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Invalid id" });
  }

  try {
    const note = await Note.findByIdAndDelete(id);
    if (!note) {
      return res.status(404).json({ error: "Note not found" });
    }
    res.status(200).json({ note });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createNote,
  getallNotes,
  getNote,
  deleteNote,
};
