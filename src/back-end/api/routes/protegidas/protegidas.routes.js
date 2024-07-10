import express from "express";
import { fileURLToPath } from "url";
import path from "path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export const rotasProtegidas = express.Router();
export const publicPath = path.join(__dirname, '..', '..', '..', '..', '..', 'public');
// export const backendPath = path.join(__dirname, '..', '..', '..', '..', '..', 'src');

rotasProtegidas.get('/home',(req, res) => {
    const filePath = path.join(__dirname, '..', '..', '..', '..', '..', 'public', 'html', 'index.html');
    res.sendFile(filePath);
});

rotasProtegidas.get('/registro',(req, res) => {
    const filePath = path.join(__dirname, '..', '..', '..', '..', '..', 'public', 'html', 'registro.html');
    res.sendFile(filePath);
});

rotasProtegidas.get('/home-logado',(req, res) => {
    const filePath = path.join(__dirname, '..', '..', '..', '..', '..', 'public', 'html', 'logado.html');
    res.sendFile(filePath);
});

rotasProtegidas.get('/login',(req, res) => {
    const filePath = path.join(__dirname, '..', '..', '..', '..', '..', 'public', 'html', 'login.html');
    res.sendFile(filePath);
});

rotasProtegidas.get('/painel-pac-consultas',(req, res) => {
    const filePath = path.join(__dirname, '..', '..', '..', '..', '..', 'public', 'html', 'painel-pac-consultas.html');
    res.sendFile(filePath);
});

rotasProtegidas.get('/painel-pac-notific',(req, res) => {
    const filePath = path.join(__dirname, '..', '..', '..', '..', '..', 'public', 'html', 'painel-pac-notific.html');
    res.sendFile(filePath);
});

rotasProtegidas.get('/painel-med-consultas',(req, res) => {
    const filePath = path.join(__dirname, '..', '..', '..', '..', '..', 'public', 'html', 'painel-med-consultas.html');
    res.sendFile(filePath);
});

rotasProtegidas.get('/painel-med-notific',(req, res) => {
    const filePath = path.join(__dirname, '..', '..', '..', '..', '..', 'public', 'html', 'painel-med-notific.html');
    res.sendFile(filePath);
});

rotasProtegidas.get('/painel-med-disponib',(req, res) => {
    const filePath = path.join(__dirname, '..', '..', '..', '..', '..', 'public', 'html', 'painel-med-disponib.html');
    res.sendFile(filePath);
});

rotasProtegidas.get('/agendamento',(req, res) => {
    const filePath = path.join(__dirname, '..', '..', '..', '..', '..', 'public', 'html', 'agendamento.html');
    res.sendFile(filePath);
});