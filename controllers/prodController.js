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
];

const getAllProds = (req, res) => {
    res.render("home", {title: "Home", products: products});
};

const editProds = (req, res) => {
    res.render("editProd", {title: "Edit Product", prod: products[--req.params.id]});
};

const renderAddProd = (req, res) => {
    res.render("addProd", {title: "Add Product"});
};

const postAddProd = (req, res) => {
    res.redirect("/");
    console.log(req.body);
};

export {getAllProds, editProds, renderAddProd, postAddProd};
