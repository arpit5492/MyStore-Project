import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import router from "./services/home.js";

dotenv.config();

const app = express();
const port = process.env.PORT;

//Middleware functions
app.set("view engine", "ejs");
app.set("views", "views");
app.use(express.static("css"));
app.use(morgan("dev"));
app.use("/", router);

app.listen(port, () => {
    console.log(`Server is running on: http://localhost:${port}`);
});