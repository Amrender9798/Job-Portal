import { Jobs } from "../models/jobs.js"

export const viewAllJobs = (req,res) => {
    return res.render("jobs", { Jobs, userLoggedIn: req.session.userLoggedIn });
}

export const apply = (req,res) => {
    return res.render("apply.ejs");
}



export const congratulations = (req,res) => {
    return res.render("congratulations");
}