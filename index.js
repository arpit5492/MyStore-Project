import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import home from "./services/home.js";
import addProd from "./services/addProd.js";
import editProd from "./services/editProd.js";
import delProd from "./services/delProd.js";

dotenv.config();

const app = express();
const port = process.env.PORT;

//Middleware functions
app.set("view engine", "ejs");
app.set("views", "views");
app.use(express.static("css"));
app.use(express.static("assets"));
app.use(morgan("dev"));
app.use("/", home);
app.use("/", addProd);
app.use("/editProd", editProd);
app.use("/delProd", delProd);

app.listen(port, () => {
    console.log(`Server is running on: http://localhost:${port}`);
});