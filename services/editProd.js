import express from "express";
import { editProds, updateEachProd } from "../controllers/prodController.js";
const router = express.Router();

router.get("/:id", editProds);

router.post("/:id", updateEachProd);

export default router;