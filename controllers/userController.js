// import { updateUser, fetchDet } from "../db/user.js";
import JWT from "jsonwebtoken";
import dotenv from "dotenv";
import bcrypt from "bcrypt";

dotenv.config();

const signUpRender = (req, res) => {
    // console.log(cookie);
    res.render("signUp", {title: "Sign Up", isLoggedIn: global.isLoggedIn});
}

const addUser = async (req, res) => {
    // console.log(req.body);
    const {username, password} = req.body;
    const hashedPass = await bcrypt.hash(password, 10);
    // console.log(username, password);

    try{
        await updateUser(username, hashedPass); 
        global.isLoggedIn = "true";
        res.redirect("/");
    } catch(err) {
        console.log(err);
    }
};

const renderLogin = (req, res) => {
    // console.log(cookie);
    res.render("login", {title: "Login", isLoggedIn: global.isLoggedIn});
};

const postLogin = async (req, res) => {
    // console.log(req.body);
    const {username, password} = req.body;
    try{
        const [userDet] = await fetchDet(username);
        // console.log(userDet.password);
        const isMatch = bcrypt.compare(userDet.password, password);
        if(userDet){
            if(isMatch){
                const token = JWT.sign(
                    {username},
                    process.env.tokenSignature
                )
                req.session.token = token;
                res.redirect("/");
            } else {
                res.redirect("/login");
            }
        } else {
            res.redirect("/login");
        }
    } catch(err) {
        console.log(err);
    }
};

const logout = (req, res) => {
    // req.session.isLoggedIn = "false";
    req.session.destroy(req.session.id);
    res.redirect("/");
};

export {signUpRender, addUser, renderLogin, postLogin, logout};