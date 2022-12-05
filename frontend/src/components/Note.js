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
          <input
            className="Titre"
            type="text"
            placeholder="Titre"
            required
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            className="note_texte"
            placeholder="Ecrire une note ici "
            onChange={(e) => setContent(e.target.value)}
          />
          <button className="Ajouter" type="submit">
            Ajouter une note
          </button>
        </form>
        <button className="Afficher" onClick={fetchNotes}> Afficher les notes
        </button>

        <div>
          {
            // if data is not empty
            data.length > 0 ? (
              data.map((item) => {
                return (
                  <div className="affichage_notesbdd" key={item.id}>
                    <button className="supprimer_notesbdd" onClick={async () => await axios.delete(`/note/${item._id}`)}>X</button>
                    <div className="titre_notesbdd">{item.title} :
                      {item.content}</div>

                  </div>
                );
              })
            ) : (
              <div>{error}</div>
            )
          }
        </div>
      </div>


    </div>
  );
};

export default Note;
