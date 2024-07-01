import express from "express";

import { medicoRotas } from "./routes/medico/medico.routes.js";
import { pacienteRotas } from "./routes/paciente/paciente.routes.js";

export const app = express();

app.use(express.json());
app.use(medicoRotas);
app.use(pacienteRotas);
