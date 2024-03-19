import express from "express";
import cookieParser from "cookie-parser";
import { getAllProds } from "../controllers/prodController.js";
const router = express.Router();

router.use(cookieParser());

// Route for showing all products in home page
router.get("/", getAllProds);

export default router;