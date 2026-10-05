import express from "express";
import { AuthController } from "./auth.controller";
const router = express.Router();
router.get("/me", AuthController.getMe);

export const AuthRouter = router;
