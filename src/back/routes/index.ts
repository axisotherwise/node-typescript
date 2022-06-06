import * as express from "express";
import * as render from "../controllers";

const router = express.Router();

router.get("/", render.indexRouter);
router.post("/", render.test);
// router.get("/join", render.joinRouter);

export default router;