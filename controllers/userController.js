import { updateUser, fetchDet } from "../db/user.js";

const signUpRender = (req, res) => {

    const cookie = req.cookies;
    console.log(cookie);
    res.render("signUp", {title: "Sign Up", isLoggedIn: cookie.isLoggedIn});
}

const addUser = async (req, res) => {
    // console.log(req.body);
    const {username, password} = req.body;
    // console.log(username, password);

    try{
        await updateUser(username, password); 
        res.cookie("isLoggedIn", "true");
        res.redirect("/");
    } catch(err) {
        console.log(err);
    }
};

const renderLogin = (req, res) => {
    const cookie = req.cookies;
    console.log(cookie);
    res.render("login", {title: "Login", isLoggedIn: cookie.isLoggedIn});
};

const postLogin = async (req, res) => {
    // console.log(req.body);
    const {username, password} = req.body;
    try{
        const [userDet] = await fetchDet(username);
        if(userDet){
            if(userDet.password === password){
                res.cookie("isLoggedIn", "true");
                res.redirect("/");
            } else {
                res.cookie("isLoggedIn", "InvalidPassword");
                res.redirect("/login");
            }
        } else {
            res.cookie("isLoggedIn", "InvalidUsername");
            res.redirect("/login");
        }
    } catch(err) {
        console.log(err);
    }
};

const logout = (req, res) => {
    res.cookie("isLoggedIn", "false");
    res.redirect("/");
}

export {signUpRender, addUser, renderLogin, postLogin, logout};