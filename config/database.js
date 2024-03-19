import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config();

const pool = mysql.createPool({
    host: process.env.host,
    port: process.env.port,
    user: process.env.user,
    password: process.env.password,
    database: process.env.database,
    multipleStatements: true
});

pool.getConnection((err, connection) => {
    if(err){
        console.log(err);
    } else {
        console.log("Database connected");
    }
});

export default pool.promise();