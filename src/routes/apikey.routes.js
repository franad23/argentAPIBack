import { Router } from "express";
import { 
  creatingUserApiKey,
  recoveryApikey
} from "../controllers/apikey.controller.js";

const router =  Router();

router.post('/creatingapikey', creatingUserApiKey);
router.post('/recoveryapikey', recoveryApikey);

export default router;