import pool from "../config/database.js";

const fetchProducts = async () => {
    try{
        const [rows, fields] = await pool.query("select * from products");
        return rows;
    } catch (err) {
        console.log(err);
    }
}

const postData = async (products) => {
    const {prod_name, price, image} = products;
    try{
        await pool.query(
            "insert into products (pName, price, image) values (?, ?, ?)", 
            [prod_name, price, image]);
    } catch(err) {
        console.log(err);
    }
}

export {fetchProducts, postData};