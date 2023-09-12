import express  from "express";
import morgan from "morgan";
import cors from "cors";
import cookieParser from "cookie-parser";

//Routes 
import apiKeyRoutes from './routes/apikey.routes.js'
import wordCupRoutes from './routes/wordCupData.routes.js'
import popularCitiesRoutes from './routes/popularcities.routes.js'
import userRequestRoutes from './routes/userRequests.routes.js'
import requestUserRoutes from './routes/requestUser.routes.js'

const app = express();

morgan.token('date', (req, res, tz) => {
  return new Date().toLocaleString();
});
app.use(morgan(':date - :method :url :status :response-time ms'));
app.use(express.json())
app.use(cookieParser());
app.use(cors({
  origin: '*',
  credentials: true,
}));

app.use('/api', apiKeyRoutes);
app.use('/api', wordCupRoutes);
app.use('/api', popularCitiesRoutes);
app.use('/api', userRequestRoutes);
app.use('/api', requestUserRoutes);

export default app;