import express from "express";

import { UserController } from "../controllers/_.exporter";

import middleware from "../middleware";

const router = express.Router();

router.post("/", middleware, new UserController().create);
router.delete("/", new UserController().delete);

export default router;