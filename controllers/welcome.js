export const welcome = (req,res) => {
    return res.render("welcome.ejs",{userLoggedIn:req.session.userLoggedIn});
}