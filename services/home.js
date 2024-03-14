import express from "express";
import { getAllProds } from "../controllers/prodController.js";
const router = express.Router();

router.get("/", getAllProds);

export default router;