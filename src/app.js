import express  from "express";
import morgan from "morgan";
import cors from "cors";
import cookieParser from "cookie-parser";

//Routes 
import apiKeyRoutes from './routes/apikey.routes.js'
import wordCupRoutes from './routes/wordcupdata.routes.js'

const app = express();

morgan.token('date', (req, res, tz) => {
  return new Date().toLocaleString();
});
app.use(morgan(':date - :method :url :status :response-time ms'));
app.use(express.json())
app.use(cookieParser());
app.use(cors());

app.use('/api', apiKeyRoutes);
app.use('/api', wordCupRoutes);

export default app;