import { Router } from "express";
import { postUser } from "../controllers/userRequests.controllers.js";
import { verifyapikey } from "../middleware/verifyapikey.middleware.js";

const router = Router();

router.post("/postUser", verifyapikey, postUser);

export default router;