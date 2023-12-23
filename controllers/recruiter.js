import { Jobs, add, deleteJobById, findJobById, update } from "../models/jobs.js";
import { addUsers, find, users } from "../models/users.js";

export const register = (req,res) => {
    return res.render("register",{errors:null});

}

export const RegisterFormDetails = (req,res) => {
    const validationErrors = req.validationErrors || [];
    if(validationErrors.length > 0){
        return res.render('register', { errors: validationErrors });
    }
    const {name,email,password} = req.body;
    addUsers({name,email,password});
   
    return res.redirect("/login");

}
export const login = (req,res) => {
    return res.render("login",{loginFailed:false});
}

export const findRecruiter = (req,res) => {
   
    const{email,password} = req.body;
    
    const user = find(req.body);
   
    if(user){
       req.session.userLoggedIn = true;
       res.redirect("/jobs");
    }
    else{
        res.render("login",{loginFailed:true});

    }
}

export const updateJobForm = (req,res) => {
    const jobId = req.params.jobId;
    const job = findJobById(jobId);
    return res.render("updateJob",{job,isUpdate : true});
}

export const deleteJob =  (req, res) => {
    const jobId = req.params.jobId;
    
    deleteJobById(jobId); 
  
    res.redirect('/jobs');
}

export const updateJob = (req,res) => { 
    
    update(req.body);
    return res.redirect('/jobs');
    
}
export const addJob = (req,res) => {
    const obj = {
        id: Jobs.length + 1, // You can generate a unique ID or leave it empty for the form to handle
        role: '',
        company: '',
        location: '',
        package: '',
        skills: [],
      };
    return res.render('updateJob.ejs',{job:obj,isUpdate:false});

}

export const newJob = (req,res) => {
    add(req.body);
    return res.redirect('/jobs');
}


export const logOut = (req, res) => {
    // Destroy the session
    req.session.destroy((err) => {
      if (err) {
        return res.status(500).send('Internal Server Error');
      }
      // Redirect to the login or home page after logout
      res.redirect('/');
    });
}