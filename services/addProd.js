import express from "express";
import { renderAddProd, postAddProd } from "../controllers/prodController.js";
import bodyParser from "body-parser";

const router = express.Router();
router.use(bodyParser.urlencoded({extended: true}));

router.get("/addProd", renderAddProd);

router.post("/addProd", postAddProd);

export default router;