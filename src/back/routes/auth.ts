import * as express from "express";
import * as auth from "../controllers/authController";

const router = express.Router();

router.post("/join", auth.authJoin);
router.post("/login", auth.authLogin);

export default router;

