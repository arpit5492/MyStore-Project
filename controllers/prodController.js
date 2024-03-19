import {fetchProducts, postData, updateData, delData} from "../db/product.js";

// getting all the products
const getAllProds = async (req, res) => {

    const cookie = req.session.isLoggedIn;
    // console.log(cookie);
    const products = await fetchProducts();
    res.render("home", {title: "Home", products: products, isLoggedIn: cookie});
};

const editProds = async (req, res) => {
    const [products] = await fetchProducts();
    // console.log(products);
    const cookie = req.session.isLoggedIn;
    // console.log(cookie);
    res.render("editProd", {title: "Edit Product", prod: products, isLoggedIn: cookie});
};

const updateEachProd = async (req, res) => {
    // console.log(req.body);
    const {prod_name, price, image} = req.body;
    const id = req.params.id;
    // console.log(id, prod_name, price, image);
    try{
        await updateData(id, prod_name, price, image);
        res.redirect("/");
    } catch (err) {
        console.log(err);
    }
};

const renderAddProd = (req, res) => {
    const cookie = req.session.isLoggedIn;
    // console.log(cookie);
    res.render("addProd", {title: "Add Product", isLoggedIn: cookie});
};

const postAddProd = async (req, res) => {
    const data = req.body;
    // console.log(data);
    try{
        await postData(data);
        res.redirect("/");
    } catch(err) {
        console.log(err);
    }
};

const delProd = async (req, res) => {
    const id = req.params.id;
    try{
        await delData(id);
        res.redirect("/");
    } catch(err) {
        console.log(err);
    }
};

export {getAllProds, editProds, renderAddProd, postAddProd, updateEachProd, delProd};
