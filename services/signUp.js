import express from "express";
import { signUpRender } from "../controllers/userAuth.js";
const router = express.Router();

router.get("/sign-up", signUpRender);

export default router;