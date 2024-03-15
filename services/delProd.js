import express from "express";
import { delProd } from "../controllers/prodController.js";
const router = express.Router();

router.get("/:id", delProd);

export default router;