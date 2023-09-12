import { Router } from "express";
import { 
  PostRequest,
  GetRequest,} from "../controllers/requestUser.controller.js";
import { verifyapikey } from "../middleware/verifyapikey.middleware.js";

const router = Router();

router.post("/postrequest", verifyapikey, PostRequest);
router.get("/getrequest", verifyapikey, GetRequest);

export default router;

