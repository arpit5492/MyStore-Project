import pool from "../config/database.js";

const updateUser = async (username, password) => {
    try{
        await pool.query(
            "insert into users (username, password) values (?, ?)",
            [username, password]
        );
    } catch(err) {
        console.log(err);
    }
}

const fetchDet = async (username) => {
    try{
        const [rows, fields] = await pool.query(
            "select * from users where username = ?",
            [username]
        );
        return rows;
    } catch(err) {
        console.log(err);
    }
}

export {updateUser, fetchDet};