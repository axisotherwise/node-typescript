import express from "express";

import { UserController } from "../controllers/_.exporter";

import upload from "../multer";

const router = express.Router();

router.post("/", upload.single("img"), new UserController().createPost);

export default router;