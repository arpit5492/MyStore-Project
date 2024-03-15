import pool from "../config/database.js";

class Products {
    static fetchProducts() {
        return pool.execute("select * from products");
    }
};

export default Products;