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

const updateData = async (id, prod_name, price, image) => {
    try{
        await pool.query(
            "update products set pName = ?, price = ?, image = ? where id = ?",
            [prod_name, price, image, id]
        );
    } catch(err) {
        console.log(err);
    }
}

const delData = async (id) => {
    try{
        await pool.query(
            "delete from products where id = ?",
            [id]
        )
    } catch(err) {
        console.log(err);
    }
};

export {fetchProducts, postData, updateData, delData};