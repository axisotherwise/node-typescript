import * as express from "express";
import * as render from "../controllers";
import { isLoggedIn, isNotLoggedIn } from "../middlewares/middlewares";

const router = express.Router();

router.get("/", render.indexRouter);
router.get("/join", isLoggedIn, render.joinRouter);

export default router;