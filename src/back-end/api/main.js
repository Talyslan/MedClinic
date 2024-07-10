import express from "express";
import cors from "cors";

import { medicoRotas } from "./routes/medico/medico.routes.js";
import { pacienteRotas } from "./routes/paciente/paciente.routes.js";
import { autenticacaoRota } from "./routes/autenticacao/autenticacao.routes.js";
import { rotasProtegidas } from "./routes/protegidas/protegidas.routes.js";
import { publicPath } from "./routes/protegidas/protegidas.routes.js";
// import { backendPath } from "./routes/protegidas/protegidas.routes.js";
import { lembreteRotas } from "./routes/lembrete/lembrete.routes.js";
import { agendamentoRotas } from "./routes/agendamento/agendamento.routes.js";

export const app = express();

app.use(cors());
app.use(express.json());
app.use(rotasProtegidas)
app.use("/auth", autenticacaoRota)
app.use(lembreteRotas);
app.use(medicoRotas);
app.use(pacienteRotas);
app.use(agendamentoRotas);
app.use(express.static(publicPath));
// app.use(express.static(backendPath))