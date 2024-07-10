import express from "express";
import { fileURLToPath } from "url";
import path from "path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export const rotasProtegidas = express.Router();
export const publicPath = path.join(__dirname, '..', '..', '..', '..', '..', 'public');
// export const backendPath = path.join(__dirname, '..', '..', '..', '..', '..', 'src');

rotasProtegidas.get('/registro',(req, res) => {
    const filePath = path.join(__dirname, '..', '..', '..', '..', '..', 'public', 'html', 'registro.html');
    res.sendFile(filePath);
});
