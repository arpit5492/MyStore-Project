import {fetchProducts, postData} from "../db/product.js";

// const products = [
//     {
//         id: 1,
//         pName: "Apples",
//         price: 1.32,
//         image: "apple.jpg"
//     },
//     {
//         id: 2,
//         pName: "Oranges",
//         price: 2.43,
//         image: "oranges.jpeg"
//     },
//     {
//         id: 3,
//         pName: "Grapes",
//         price: 1.21,
//         image: "grapes.jpeg"
//     }
// ];

// getting all the products
const getAllProds = async (req, res) => {
    const products = await fetchProducts();
    res.render("home", {title: "Home", products: products});
};

const editProds = async (req, res) => {
    const products = await fetchProducts();
    res.render("editProd", {title: "Edit Product", prod: products[--req.params.id]});
};

const renderAddProd = (req, res) => {
    res.render("addProd", {title: "Add Product"});
};

const postAddProd = async (req, res) => {
    const data = req.body;
    console.log(data);
    try{
        await postData(data);
        res.redirect("/");
    } catch(err) {
        console.log(err);
    }
}

export {getAllProds, editProds, renderAddProd, postAddProd};
