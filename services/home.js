import express from "express";
import { getAllProds } from "../controllers/prodController.js";
const router = express.Router();

// Route for showing all products in home page
router.get("/", getAllProds);

export default router;