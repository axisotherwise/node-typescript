import * as express from "express";
import * as render from "../controllers";

import { isLoggedIn, isNotLoggedIn } from "../middlewares/authMiddleware";

const router = express.Router();

router.get("/", render.indexRouter);
router.get("/join", isNotLoggedIn, render.joinRouter);
router.get("/profile", isLoggedIn, render.profileRouter);
router.get("/write", isLoggedIn, render.writeRouter);

export default router;