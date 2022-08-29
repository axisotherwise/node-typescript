import express from "express";

import * as userController from "../controllers/user.controller";

const router = express.Router();

router.get("/:id", userController.result);
router.post("/", userController.result2);

export default router;