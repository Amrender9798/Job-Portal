// emailMiddleware.js

import { createTransport } from 'nodemailer';

function sendEmail(req, res, next) {
  // Extract form data
  const { name, email, contact } = req.body;

  // Create a Nodemailer transporter
  const transporter = createTransport({
    service: 'gmail',
    auth: {
      user: 'codingninjas2k16@gmail.com',
      pass: 'slwvvlczduktvhdj',
    },
  });

  // Email content
  const mailOptions = {
    from: 'codingninjas2k16@gmail.com',
    to: email,
    subject: 'Job Application Submitted',
    text: `Dear ${name},\n\nThank you for submitting your job application.\n\nBest regards,\nThe Job Portal Team`,
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
     
      res.status(500).send('Internal Server Error');
    } else {
      res.redirect("/congratulations");
    }
  });
}

export default sendEmail;
