import { Jobs } from "../models/jobs.js"

export const viewAllJobs = (req,res) => {
    return res.render("jobs", { Jobs, userLoggedIn: req.session.userLoggedIn });
}

export const apply = (req,res) => {
    if (req.query.fromJobs === 'true') {
        // Render the Apply page
        res.render('apply');
      } else {
        // Redirect to the Jobs page if the condition is not met
        res.redirect('/jobs');
      }
}



export const congratulations = (req,res) => {
    return res.render("congratulations");
}