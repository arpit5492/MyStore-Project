import express from "express";
import { renderLogin } from "../controllers/userController.js";
const router = express.Router();

router.get("/login", renderLogin);

export default router;