import express from "express";

import { CommentController } from "../controllers/_.exporter";

import middleware from "../middleware";

const router = express.Router();

router.post("/", middleware, new CommentController().create);
router.delete("/", middleware, new CommentController().delete);

export default router;