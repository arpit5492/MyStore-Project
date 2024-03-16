import { updateUser } from "../db/user.js";

const signUpRender = (req, res) => {
    res.render("signUp", {title: "Sign Up"});
}

const addUser = async (req, res) => {
    // console.log(req.body);
    const {username, password} = req.body;
    // console.log(username, password);

    try{
        await updateUser(username, password); 
        res.redirect("/");
    } catch(err) {
        console.log(err);
    }

}

const renderLogin = (req, res) => {
    res.render("login", {title: "Login"});
}

export {signUpRender, addUser, renderLogin};