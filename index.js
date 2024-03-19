import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import session from "express-session";
import connectMySql from "express-mysql-session";
import home from "./services/home.js";
import addProd from "./services/addProd.js";
import editProd from "./services/editProd.js";
import delProd from "./services/delProd.js";
import signUp from "./services/signUp.js";
import login from "./services/login.js";

dotenv.config();

const app = express();
const port = process.env.PORT;

const MySQLStore = connectMySql(session);

const obj = {
    connectionLimit: 10,
    host: process.env.host,
    port: process.env.port,
    user: process.env.user,
    password: process.env.password,
    database: process.env.database,
    createDatabaseTable: true // Automatically creates a table named as "sessions"
}

const sessionStore = new MySQLStore(obj);

//Middleware functions
app.use(session({
    secret: "It is a secret",
    resave: false,
    saveUninitialized: false,
    store: sessionStore
}));

// app.get("/newSession", (req, res) => {
//     console.log(req.session.id);
//     res.send(req.session.isLoggedIn);
// });

app.set("view engine", "ejs");
app.set("views", "views");
app.use(express.static("css"));
app.use(express.static("assets"));
app.use(morgan("dev"));
app.use("/", home);
app.use("/", addProd);
app.use("/editProd", editProd);
app.use("/delProd", delProd);
app.use("/", signUp);
app.use("/", login);

app.listen(port, () => {
    console.log(`Server is running on: http://localhost:${port}`);
});