import { updateUser, fetchDet } from "../db/user.js";

const signUpRender = (req, res) => {

    const cookie = req.session.isLoggedIn;
    // console.log(cookie);
    res.render("signUp", {title: "Sign Up", isLoggedIn: cookie});
}

const addUser = async (req, res) => {
    // console.log(req.body);
    const {username, password} = req.body;
    // console.log(username, password);

    try{
        await updateUser(username, password); 
        req.session.isLoggedIn = "true";
        res.redirect("/");
    } catch(err) {
        console.log(err);
    }
};

const renderLogin = (req, res) => {
    const cookie = req.session.isLoggedIn;
    // console.log(cookie);
    res.render("login", {title: "Login", isLoggedIn: cookie});
};

const postLogin = async (req, res) => {
    // console.log(req.body);
    const {username, password} = req.body;
    try{
        const [userDet] = await fetchDet(username);
        if(userDet){
            if(userDet.password === password){
                req.session.isLoggedIn = "true";
                res.redirect("/");
            } else {
                req.session.isLoggedIn = "InvalidPassword";
                res.redirect("/login");
            }
        } else {
            req.session.isLoggedIn = "InvalidUsername";
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