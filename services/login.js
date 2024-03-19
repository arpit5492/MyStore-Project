import express from "express";
import { renderLogin, postLogin, logout } from "../controllers/userController.js";
const router = express.Router();

router.get("/login", renderLogin);

router.post("/login", postLogin);

router.get("/logout", logout);

export default router;