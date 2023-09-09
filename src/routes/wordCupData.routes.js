import { Router } from "express";
import { getWorldCupData } from "../controllers/worldcup.controllers.js";
const router =  Router();

router.get('/wordcupdata/:id', getWorldCupData)
router.get('/wordcupdata', getWorldCupData)

export default router;