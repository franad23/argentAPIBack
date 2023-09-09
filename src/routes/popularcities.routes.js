import { Router } from "express";
import { getPopularCitiesByProv } from "../controllers/popularcities.controllers.js";

const router = Router();

router.get("/popularcities", getPopularCitiesByProv);

export default router;