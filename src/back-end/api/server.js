import { app } from './main.js';
import dotenv from 'dotenv'
dotenv.config()

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Starting server on port ${PORT}`));