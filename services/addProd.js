import express from "express";
const router = express.Router();

router.get("/addProd", (req, res) => {
    res.render("addProd", {title: "Add Product"});
});

export default router;