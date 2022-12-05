// Import la librairie dotenv pour utiliser les variables d'environnements
require("dotenv").config();

const express = require("express"); // Import Express
const mongoose = require("mongoose"); // Import Mongoose permet de communiquer avec MongoDB
const noteRoutes = require("./routes/note"); // Import de notre Route

// Creation d'une nouvelle app express
const app = express();

// Permet d'utiliser le body + params dans les requêtes
app.use(express.json());

// Afficher toutes les requests
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// Routes
app.use("/note", noteRoutes); // Permet d'attribuer le endpoint /note a la fonction noteRoutes

// Connection à MongoDB + Démarrage du serveur
mongoose
  .connect(process.env.MONGO_URI) // mongoose.connect = Connexion mongoDB
  .then(() => {
    // Permet de démarrer le seveur
    app.listen(process.env.PORT || 8000, () =>
      console.log(
        "Connected to DB and Server started on port",
        process.env.PORT
      )
    );
  })
  .catch((err) => console.log(err));
