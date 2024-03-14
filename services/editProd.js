import express from "express";
import { editProds } from "../controllers/prodController.js";
import e from "express";
const router = express.Router();

router.get("/editProd/:id", editProds);

export default router;