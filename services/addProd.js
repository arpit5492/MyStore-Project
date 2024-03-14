import express from "express";
import bodyParser from "body-parser";

const router = express.Router();
router.use(bodyParser.urlencoded({extended: true}));

router.get("/addProd", (req, res) => {
    res.render("addProd", {title: "Add Product"});
});

router.post("/addProd", (req, res) => {
    res.redirect("/");
    console.log(req.body);
});

export default router;