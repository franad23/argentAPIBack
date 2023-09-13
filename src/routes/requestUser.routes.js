import { Router } from "express";
import { 
  PostRequest,
  GetRequest,
  DeleteRequest, 
  PutRequest } from "../controllers/requestUser.controller.js";
import { verifyapikey } from "../middleware/verifyapikey.middleware.js";

const router = Router();

router.post("/postrequest", verifyapikey, PostRequest);
router.get("/getrequest", verifyapikey, GetRequest);
router.put("/putrequest/:id", verifyapikey, PutRequest);
router.delete("/deleterequest/:id", verifyapikey, DeleteRequest);

export default router;

