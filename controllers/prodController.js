// import {fetchProducts, postData, updateData, delData} from "../db/product.js";
import { Product } from "../db/product.js";

// getting all the products
const getAllProds = async (req, res) => {
    try{
        const products = await Product.findAll();
        console.log(JSON.stringify(products, null, 2));
        res.render("home", {title: "Home", products: products, isLoggedIn: global.isLoggedIn});
    } catch(err) {
        console.log(err);
    }
};

// const editProds = async (req, res) => {
//     const [products] = await fetchProducts();
//     // console.log(products);
//     // console.log(cookie);
//     res.render("editProd", {title: "Edit Product", prod: products, isLoggedIn: global.isLoggedIn});
// };

// const updateEachProd = async (req, res) => {
//     // console.log(req.body);
//     const {prod_name, price} = req.body;
//     const img = req.file.filename;
//     const id = req.params.id;
//     // console.log(id, prod_name, price, image);
//     try{
//         await updateData(id, prod_name, price, img);
//         res.redirect("/");
//     } catch (err) {
//         console.log(err);
//     }
// };

const renderAddProd = (req, res) => {
    // console.log(cookie);
    res.render("addProd", {title: "Add Product", isLoggedIn: global.isLoggedIn});
};

const postAddProd = async (req, res) => {
    const {prod_name, price} = req.body;
    const img = req.file.filename;
    try{
        await Product.create({
            pName: prod_name,
            price: price,
            image: img
        });
        res.redirect("/");
    } catch(err) {
        console.log(err);
    }
};

// const delProd = async (req, res) => {
//     const id = req.params.id;
//     try{
//         await delData(id);
//         res.redirect("/");
//     } catch(err) {
//         console.log(err);
//     }
// };

export {getAllProds, /*editProds*/ renderAddProd, postAddProd /*updateEachProd*/ /*delProd*/};
