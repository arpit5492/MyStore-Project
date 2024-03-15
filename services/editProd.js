import express from "express";
import { editProds } from "../controllers/prodController.js";
const router = express.Router();

router.get("/editProd/:id", editProds);

export default router;