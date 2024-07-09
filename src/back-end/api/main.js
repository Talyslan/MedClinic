import express from "express";
import cors from "cors";

import { medicoRotas } from "./routes/medico/medico.routes.js";
import { pacienteRotas } from "./routes/paciente/paciente.routes.js";
import { autenticacaoRota } from "./routes/autenticacao/autenticacao.routes.js";
import { rotasProtegidas } from "./routes/protegidas/protegidas.routes.js";
import { lembreteRotas } from "./routes/lembrete/lembrete.routes.js";

export const app = express();

app.use(cors());
app.use(express.json());
app.use(rotasProtegidas)
app.use("/auth", autenticacaoRota)
app.use(lembreteRotas);
app.use(medicoRotas);
app.use(pacienteRotas);
