import * as express from "express";
import * as render from "../controllers";

const router = express.Router();

router.get("/", render.indexRouter);
router.get("/join", render.joinRouter);

export default router;