import express from "express";

import * as post from "../controllers/postController";
import { isLoggedIn, isNotLoggedIn } from "../middlewares/authMiddleware";

const router = express.Router();

router.post("/write", isLoggedIn, post.postWrite);

export default router;