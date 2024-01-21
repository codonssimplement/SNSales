const express = require('express');
const apiRoute = require("./routes/routes")

const app = express();

const PORT = process.env.PORT || 3000;
app.use(express.json());

app.use("/", apiRoute);

app.listen(PORT, ()=> (console.log("Le serveur écoute sur le port:"+ PORT)));