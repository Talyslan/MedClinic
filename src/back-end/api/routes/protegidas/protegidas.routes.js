import express from "express";
import { fileURLToPath } from "url";
import path from "path";

// Get the directory name of the current module file
const __dirname = path.dirname(fileURLToPath(import.meta.url));

export const rotasProtegidas = express.Router();

rotasProtegidas.get('/registro', (req, res) => {
    // Construct the path to registro.html using __dirname
    const filePath = path.join(__dirname, '..', '..', '..', '..', '..', 'pages', 'registro.html');
    res.sendFile(filePath);
});