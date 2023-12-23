// app.js
import express from 'express';
import path from 'path';
import ejs from 'ejs';
import expressLayouts from 'express-ejs-layouts';
import multer from 'multer';
import { welcome } from './controllers/welcome.js';
import { RegisterFormDetails, addJob, deleteJob, findRecruiter, logOut, login, newJob, register, updateJob, updateJobForm } from './controllers/recruiter.js';
import { apply, congratulations, viewAllJobs } from './controllers/jobSeeker.js';
import sendEmail from './middlewares/email.js';
import session from 'express-session';
import bodyParser from 'body-parser';
import registrationValidator from './middlewares/validation.js';
import upload from './middlewares/fileUpload.js';
const app = express();

app.use(session({
    secret: 'your-secret-key', // Change this to a secret key
    resave: false,
    saveUninitialized: true,
  }));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join('public')));
app.set('view engine', 'ejs');
app.set('views', path.resolve(path.join('views')));

app.use(expressLayouts);
app.set('layout', 'layout');


app.get('/',welcome);
app.get('/register',register);
app.get('/login',login);
app.get('/Jobs',viewAllJobs);
app.get('/apply',apply);
app.get('/update-job/:jobId',updateJobForm);
app.get('/delete-job/:jobId',deleteJob);
app.get('/logout',logOut);
app.get('/add-job',addJob);

  

app.post('/register',registrationValidator,RegisterFormDetails);
app.post('/login',findRecruiter);
app.post('/update-job/:jobId',updateJob);
app.post('/apply', upload.single('resume'),sendEmail);
app.post('/add-job',newJob);
app.get('/congratulations',congratulations);  




export default app;
