require('dotenv').config();

const app = require("./app");
const AppDataSource = require("./src/config/data-source");

const PORT = process.env.PORT || 3000;

AppDataSource.initialize()
    .then(() => {
        console.log("Base de données connectée !");

        app.listen(PORT, () => {
            console.log(`Serveur démarré sur http://localhost:${PORT}`);
        });
    })
    .catch((error) => {
        console.error("Erreur de connexion à la DB :", error);
        process.exit(1); 
    });