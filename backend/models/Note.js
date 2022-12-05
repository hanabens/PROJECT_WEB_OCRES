const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const noteSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },

    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true } // L'heure à laquelle l'élément à été crée
);

module.exports = mongoose.model("Note", noteSchema);
