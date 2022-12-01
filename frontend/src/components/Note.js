import axios from "axios";
import React, { useState } from "react";

import "./note.css";

const Note = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState("");
  const [data, setData] = useState([]);
  const [click, setClick] = useState(false);

  const fetchNotes = async () => {
    const response = await axios.get("/note");
    console.log(response);
    if (response.data.length > 0) {
      setData(response.data);
    } else {
      setError("Pas de notes, Ajoutez en une");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios.post("/note", {
      title: title,
      content: content,

      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  return (
    <div>
      <div className="Bienvenue">Votre Dashboard, Charlie</div>

      <div className="rectangle">
        <form onSubmit={handleSubmit}>
          <h2 className="titre_notes">Notes</h2>
          <input
            type="text"
            placeholder="Titre"
            required
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            className="note_texte"
            id="ameliorer"
            rows="5"
            cols="28"
            onChange={(e) => setContent(e.target.value)}
          />
          <button className="Ajouter" type="submit">
            Ajouter une note
          </button>
        </form>
        <button className="Ajouter" onClick={fetchNotes}>
          Afficher les notes
        </button>
      </div>
      <div>
        {
          // if data is not empty
          data.length > 0 ? (
            data.map((item) => {
              return (
                <div key={item.id}>
                  <h2>{item.title}</h2>
                  <p>{item.content}</p>
                  <button
                    onClick={async () =>
                      await axios.delete(`/note/${item._id}`)
                    }
                  >
                    Supprimer
                  </button>
                </div>
              );
            })
          ) : (
            <div>{error}</div>
          )
        }
      </div>
    </div>
  );
};

export default Note;
