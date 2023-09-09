import { Router } from "express";
import { getWorldCupData } from "../controllers/getrequest.controllers.js";
const router =  Router();

router.get('/wordcupdata/:id', getWorldCupData)
router.get('/wordcupdata', getWorldCupData)

export default router;