import { Router } from "express";
import { 
  creatingUserApiKey
} from "../controllers/apikey.controller.js";

const router =  Router();

router.post('/creatingapikey', creatingUserApiKey);

export default router;