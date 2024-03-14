import express from "express";
const router = express.Router();

const products = [
    {
        id: 1,
        pName: "Apples",
        price: 1.32,
        image: "apple.jpg"
    },
    {
        id: 2,
        pName: "Oranges",
        price: 2.43,
        image: "oranges.jpeg"
    },
    {
        id: 3,
        pName: "Grapes",
        price: 1.21,
        image: "grapes.jpeg"
    }
]

router.get("/", (req, res) => {
    res.render("home", {title: "Home", products: products});
});

export default router;