import express from "express";
import cors from "cors";

import { medicoRotas } from "./routes/medico/medico.routes.js";
import { pacienteRotas } from "./routes/paciente/paciente.routes.js";
import { autenticacaoRota } from "./routes/autenticacao/autenticacao.routes.js";

export const app = express();

app.use(cors());
app.use(express.json());
app.use(autenticacaoRota)
app.use(medicoRotas);
app.use(pacienteRotas);
